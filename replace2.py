with open('d:/avatar-sarra/Sarra-Final/index.mjs', 'r', encoding='utf-8') as f:
    content = f.read()

# New frameAvatar function
new_func = '''// Cadrage : plan tête uniquement par défaut, corps entier avec ?framing=full.
function frameAvatar(vrm) {
    const fullBody = new URLSearchParams(window.location.search).get('framing') === 'full';

    // CORRECTION FINALE: Cibler la tête pour un cadrage "portrait" naturel
    const headNode = vrm.humanoid?.getNormalizedBoneNode?.('head');
    const targetPosition = headNode ? headNode.getWorldPosition(new THREE.Vector3()) : new THREE.Vector3(0, 1.4, 0);

    let target;
    let distance;
    if (fullBody) {
        // Corps entier : utiliser le centre de la bounding box
        const box = new THREE.Box3().setFromObject(vrm.scene);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        target = new THREE.Vector3(center.x, center.y + size.y * 0.04, center.z);
        distance = Math.max((size.y * 0.62) / Math.tan(camera.fov / 2), 1.8);
    } else {
        // Gros plan tête : utiliser la position de la tête
        target = new THREE.Vector3(targetPosition.x, targetPosition.y - 0.015, targetPosition.z);
        distance = Math.min(Math.max(0.30, 1.8), HEAD_LIMITS.zoomMax);
    }

    headBaseTarget.copy(target);
    headBaseDistance = distance;

    camera.position.set(target.x, target.y, target.z + distance);
    camera.lookAt(target);
    camera.updateProjectionMatrix();

    lookTarget.position.copy(camera.position);
    console.log("📐 Avatar cadré:", {
        plan: fullBody ? "corps entier" : "gros plan tête",
        distance: +distance.toFixed(3)
    });
}'''

# Old frameAvatar function to replace
old_func = '''function frameAvatar(vrm) {
    const box = new THREE.Box3().setFromObject(vrm.scene);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const fovRad = THREE.MathUtils.degToRad(camera.fov);
    const fullBody = new URLSearchParams(window.location.search).get('framing') === 'full';

    const head = vrm.humanoid?.getRawBoneNode?.('head');
    const headPos = new THREE.Vector3();
    if (head) {
        vrm.scene.updateWorldMatrix(true, true);
        head.getWorldPosition(headPos);
    }

    let target;
    let distance;
    if (fullBody || !head) {
        target = new THREE.Vector3(center.x, center.y + size.y * 0.04, center.z);
        distance = (size.y * 0.62) / Math.tan(fovRad / 2);
    } else {
        // Gros plan tête : la hauteur du modèle donne l'échelle du crâne (~13 %).
        target = new THREE.Vector3(headPos.x, headPos.y - size.y * 0.015, headPos.z);
        distance = Math.min(Math.max(size.y * 0.30, HEAD_LIMITS.zoomMin), HEAD_LIMITS.zoomMax);
    }

    headBaseTarget.copy(target);
    headBaseDistance = distance;

    camera.position.set(target.x, target.y, target.z + distance);
    camera.lookAt(target);
    camera.updateProjectionMatrix();

    lookTarget.position.copy(camera.position);
    console.log("📐 Avatar cadré:", {
        taille: size.toArray().map((v) => +v.toFixed(3)),
        tete: head ? headPos.toArray().map((v) => +v.toFixed(3)) : null,
        distance: +distance.toFixed(3),
        plan: fullBody ? "corps entier" : "gros plan tête"
    });
}'''

# Replace all occurrences
count = 0
while old_func in content:
    content = content.replace(old_func, new_func, 1)
    count += 1
    print(f"Replaced frameAvatar occurrence {count}")

with open('d:/avatar-sarra/Sarra-Final/index.mjs', 'w', encoding='utf-8') as f:
    f.write(content)

print(f'Total replaced: {count}')