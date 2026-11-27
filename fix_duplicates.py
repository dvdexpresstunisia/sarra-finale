with open('d:/avatar-sarra/Sarra-Final/index.mjs', 'r', encoding='utf-8') as f:
    content = f.read()

# Find all frameAvatar function positions
import re
positions = []
for m in re.finditer(r'function frameAvatar\(vrm\) \{', content):
    positions.append(m.start())

print(f'frameAvatar positions: {positions}')

# Keep only the first one, remove the others
if len(positions) > 1:
    # Keep content up to the second function's start (this removes the second function)
    # But we need to also remove the third function
    # Strategy: keep content up to just after the first function's closing brace,
    # then skip the second and third functions
    
    # Find the closing brace of the first frameAvatar function
    first_func_start = positions[0]
    # Find the matching closing brace by counting braces
    brace_count = 0
    first_func_end = first_func_start
    for i in range(first_func_start, len(content)):
        if content[i] == '{':
            brace_count += 1
        elif content[i] == '}':
            brace_count -= 1
            if brace_count == 0:
                first_func_end = i + 1  # Include the closing brace
                break
    
    print(f'First function ends at: {first_func_end}')
    
    # Now find where the second function starts (positions[1])
    # And find the third function (positions[2] if exists)
    
    # Strategy: rebuild content keeping only the first frameAvatar
    # and everything between the first function end and the second function start
    # should be preserved, but we need to remove the second function body.
    
    # Actually, let's use a simpler approach: just remove the second and third
    # function declarations entirely.
    
    # Find all occurrences and their spans
    results = list(re.finditer(r'function frameAvatar\(vrm\) \{[^}]+\}', content))
    print(f'Found {len(results)} function bodies')
    
    # New approach: just keep content up to the end of the first function,
    # then skip to after the third function
    
    if len(positions) >= 3:
        # Keep up to first function end, then find content after third function
        third_func_start = positions[2]
        # Find the end of the third function
        third_func_body_start = third_func_start
        brace_count = 0
        for i in range(third_func_body_start, len(content)):
            if content[i] == '{':
                brace_count += 1
            elif content[i] == '}':
                brace_count -= 1
                if brace_count == 0:
                    third_func_end = i + 1
                    break
        
        print(f'Third function ends at: {third_func_end}')
        
        # Rebuild: keep content from 0 to first_func_end, then from third_func_end to end
        # But we also need to keep the content between first_func_end and positions[1]
        # that's not part of any frameAvatar function.
        
        # Actually, the simplest approach: just remove lines containing the duplicate functions
        lines = content.split('\n')
        new_lines = []
        skip_until = -1
        
        for i, line in enumerate(lines):
            if i + 1 < skip_until:
                continue
            if 'function frameAvatar(vrm) {' in line:
                # This is a duplicate, skip it and mark to skip until its closing brace
                skip_until = i + 1
                # Find the closing brace
                brace_count = 0
                for j in range(i, len(lines)):
                    for char in lines[j]:
                        if char == '{':
                            brace_count += 1
                        elif char == '}':
                            brace_count -= 1
                            if brace_count == 0:
                                skip_until = j + 1
                                break
                    if skip_until > 0 and skip_until <= j + 1:
                        break
                print(f'Skipping duplicate frameAvatar at line {i+1} to {skip_until}')
                continue
            new_lines.append(line)
        
        new_content = '\n'.join(new_lines)
        
        with open('d:/avatar-sarra/Sarra-Final/index.mjs', 'w', encoding='utf-8') as f:
            f.write(new_content)
        print('Duplicate frameAvatar functions removed')
    else:
        print('Only 1 or 2 frameAvatar functions, no need to remove')
else:
    print('Only one frameAvatar function, no changes needed')