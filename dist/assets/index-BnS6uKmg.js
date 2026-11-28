(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fi="169",zp=0,Eu=1,Gp=2,qh=1,Yh=2,On=3,zn=0,Dt=1,tn=2,hi=0,vr=1,Tu=2,wu=3,Au=4,Wp=5,Pi=100,Xp=101,qp=102,Yp=103,jp=104,Kp=200,$p=201,Zp=202,Jp=203,Fl=204,Bl=205,Qp=206,em=207,tm=208,nm=209,im=210,rm=211,sm=212,om=213,am=214,kl=0,Vl=1,Hl=2,Sr=3,zl=4,Gl=5,Wl=6,Xl=7,jh=0,lm=1,cm=2,fi=0,um=1,dm=2,hm=3,Kh=4,fm=5,pm=6,mm=7,bu="attached",gm="detached",$h=300,Er=301,Tr=302,ql=303,Yl=304,_a=306,wr=1e3,oi=1001,jo=1002,Vt=1003,Zh=1004,ps=1005,Kt=1006,Ao=1007,kn=1008,Gn=1009,Jh=1010,Qh=1011,Ts=1012,Gc=1013,Bi=1014,fn=1015,Us=1016,Wc=1017,Xc=1018,Ar=1020,ef=35902,tf=1021,nf=1022,nn=1023,rf=1024,sf=1025,xr=1026,br=1027,qc=1028,Yc=1029,of=1030,jc=1031,Kc=1033,bo=33776,Ro=33777,Co=33778,Io=33779,jl=35840,Kl=35841,$l=35842,Zl=35843,Jl=36196,Ql=37492,ec=37496,tc=37808,nc=37809,ic=37810,rc=37811,sc=37812,oc=37813,ac=37814,lc=37815,cc=37816,uc=37817,dc=37818,hc=37819,fc=37820,pc=37821,Po=36492,mc=36494,gc=36495,af=36283,_c=36284,vc=36285,xc=36286,ws=2300,As=2301,Ua=2302,Ru=2400,Cu=2401,Iu=2402,_m=2500,vm=0,lf=1,Mc=2,xm=3200,Mm=3201,$c=0,ym=1,ri="",Nt="srgb",At="srgb-linear",Zc="display-p3",va="display-p3-linear",Ko="linear",dt="srgb",$o="rec709",Zo="p3",Wi=7680,Pu=519,Sm=512,Em=513,Tm=514,cf=515,wm=516,Am=517,bm=518,Rm=519,yc=35044,Cm=35048,Lu="300 es",Vn=2e3,Jo=2001;class Fr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Nu=1234567;const Ms=Math.PI/180,Rr=180/Math.PI;function pn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]).toLowerCase()}function Ut(n,e,t){return Math.max(e,Math.min(t,n))}function Jc(n,e){return(n%e+e)%e}function Im(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Pm(n,e,t){return n!==e?(t-n)/(e-n):0}function ys(n,e,t){return(1-t)*n+t*e}function Lm(n,e,t,i){return ys(n,e,1-Math.exp(-t*i))}function Nm(n,e=1){return e-Math.abs(Jc(n,e*2)-e)}function Um(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Dm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Om(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Fm(n,e){return n+Math.random()*(e-n)}function Bm(n){return n*(.5-Math.random())}function km(n){n!==void 0&&(Nu=n);let e=Nu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Vm(n){return n*Ms}function Hm(n){return n*Rr}function zm(n){return(n&n-1)===0&&n!==0}function Gm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Wm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Xm(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),h=o((e-i)/2),f=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*d,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*f,a*c);break;case"YXY":n.set(l*f,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function dn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function rt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const tt={DEG2RAD:Ms,RAD2DEG:Rr,generateUUID:pn,clamp:Ut,euclideanModulo:Jc,mapLinear:Im,inverseLerp:Pm,lerp:ys,damp:Lm,pingpong:Nm,smoothstep:Um,smootherstep:Dm,randInt:Om,randFloat:Fm,randFloatSpread:Bm,seededRandom:km,degToRad:Vm,radToDeg:Hm,isPowerOfTwo:zm,ceilPowerOfTwo:Gm,floorPowerOfTwo:Wm,setQuaternionFromProperEuler:Xm,normalize:rt,denormalize:dn};class Fe{constructor(e=0,t=0){Fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ae{constructor(e,t,i,r,s,o,a,l,c){Ae.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],f=i[5],g=i[8],_=r[0],p=r[3],m=r[6],y=r[1],M=r[4],T=r[7],C=r[2],R=r[5],w=r[8];return s[0]=o*_+a*y+l*C,s[3]=o*p+a*M+l*R,s[6]=o*m+a*T+l*w,s[1]=c*_+u*y+d*C,s[4]=c*p+u*M+d*R,s[7]=c*m+u*T+d*w,s[2]=h*_+f*y+g*C,s[5]=h*p+f*M+g*R,s[8]=h*m+f*T+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*s,f=c*s-o*l,g=t*d+i*h+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=f*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Da.makeScale(e,t)),this}rotate(e){return this.premultiply(Da.makeRotation(-e)),this}translate(e,t){return this.premultiply(Da.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Da=new Ae;function uf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function bs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function qm(){const n=bs("canvas");return n.style.display="block",n}const Uu={};function Lo(n){n in Uu||(Uu[n]=!0,console.warn(n))}function Ym(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function jm(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Km(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Du=new Ae().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ou=new Ae().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),$r={[At]:{transfer:Ko,primaries:$o,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Nt]:{transfer:dt,primaries:$o,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[va]:{transfer:Ko,primaries:Zo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Ou),fromReference:n=>n.applyMatrix3(Du)},[Zc]:{transfer:dt,primaries:Zo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Ou),fromReference:n=>n.applyMatrix3(Du).convertLinearToSRGB()}},$m=new Set([At,va]),je={enabled:!0,_workingColorSpace:At,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!$m.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=$r[e].toReference,r=$r[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return $r[n].primaries},getTransfer:function(n){return n===ri?Ko:$r[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray($r[e].luminanceCoefficients)}};function Mr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Oa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Xi;class Zm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xi===void 0&&(Xi=bs("canvas")),Xi.width=e.width,Xi.height=e.height;const i=Xi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Xi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=bs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Mr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Mr(t[i]/255)*255):t[i]=Mr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Jm=0;class df{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jm++}),this.uuid=pn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Fa(r[o].image)):s.push(Fa(r[o]))}else s=Fa(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Fa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Zm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Qm=0;class Et extends Fr{constructor(e=Et.DEFAULT_IMAGE,t=Et.DEFAULT_MAPPING,i=oi,r=oi,s=Kt,o=kn,a=nn,l=Gn,c=Et.DEFAULT_ANISOTROPY,u=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qm++}),this.uuid=pn(),this.name="",this.source=new df(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ae,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$h)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wr:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case jo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wr:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case jo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Et.DEFAULT_IMAGE=null;Et.DEFAULT_MAPPING=$h;Et.DEFAULT_ANISOTROPY=1;class Ze{constructor(e=0,t=0,i=0,r=1){Ze.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,T=(f+1)/2,C=(m+1)/2,R=(u+h)/4,w=(d+_)/4,I=(g+p)/4;return M>T&&M>C?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=R/i,s=w/i):T>C?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=R/r,s=I/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=w/s,r=I/s),this.set(i,r,s,t),this}let y=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(d-_)/y,this.z=(h-u)/y,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class eg extends Fr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ze(0,0,e,t),this.scissorTest=!1,this.viewport=new Ze(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Et(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new df(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ki extends eg{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class hf extends Et{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class tg extends Et{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ee{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const h=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==h||c!==f||u!==g){let p=1-a;const m=l*h+c*f+u*g+d*_,y=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){const C=Math.sqrt(M),R=Math.atan2(C,m*y);p=Math.sin(p*R)/C,a=Math.sin(a*R)/C}const T=a*y;if(l=l*p+h*T,c=c*p+f*T,u=u*p+g*T,d=d*p+_*T,p===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=C,c*=C,u*=C,d*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],h=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+u*d+l*f-c*h,e[t+1]=l*g+u*h+c*d-a*f,e[t+2]=c*g+u*f+a*h-l*d,e[t+3]=u*g-a*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),h=l(i/2),f=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{constructor(e=0,t=0,i=0){b.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ba.copy(this).projectOnVector(e),this.sub(Ba)}reflect(e){return this.sub(Ba.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ba=new b,Fu=new Ee;class _n{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(on.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(on.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=on.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,on):on.fromBufferAttribute(s,o),on.applyMatrix4(e.matrixWorld),this.expandByPoint(on);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xs.copy(i.boundingBox)),Xs.applyMatrix4(e.matrixWorld),this.union(Xs)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,on),on.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zr),qs.subVectors(this.max,Zr),qi.subVectors(e.a,Zr),Yi.subVectors(e.b,Zr),ji.subVectors(e.c,Zr),Yn.subVectors(Yi,qi),jn.subVectors(ji,Yi),_i.subVectors(qi,ji);let t=[0,-Yn.z,Yn.y,0,-jn.z,jn.y,0,-_i.z,_i.y,Yn.z,0,-Yn.x,jn.z,0,-jn.x,_i.z,0,-_i.x,-Yn.y,Yn.x,0,-jn.y,jn.x,0,-_i.y,_i.x,0];return!ka(t,qi,Yi,ji,qs)||(t=[1,0,0,0,1,0,0,0,1],!ka(t,qi,Yi,ji,qs))?!1:(Ys.crossVectors(Yn,jn),t=[Ys.x,Ys.y,Ys.z],ka(t,qi,Yi,ji,qs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,on).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(on).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const In=[new b,new b,new b,new b,new b,new b,new b,new b],on=new b,Xs=new _n,qi=new b,Yi=new b,ji=new b,Yn=new b,jn=new b,_i=new b,Zr=new b,qs=new b,Ys=new b,vi=new b;function ka(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){vi.fromArray(n,s);const a=r.x*Math.abs(vi.x)+r.y*Math.abs(vi.y)+r.z*Math.abs(vi.z),l=e.dot(vi),c=t.dot(vi),u=i.dot(vi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const ng=new _n,Jr=new b,Va=new b;class An{constructor(e=new b,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ng.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jr.subVectors(e,this.center);const t=Jr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Jr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Va.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jr.copy(e.center).add(Va)),this.expandByPoint(Jr.copy(e.center).sub(Va))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pn=new b,Ha=new b,js=new b,Kn=new b,za=new b,Ks=new b,Ga=new b;class xa{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pn.copy(this.origin).addScaledVector(this.direction,t),Pn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ha.copy(e).add(t).multiplyScalar(.5),js.copy(t).sub(e).normalize(),Kn.copy(this.origin).sub(Ha);const s=e.distanceTo(t)*.5,o=-this.direction.dot(js),a=Kn.dot(this.direction),l=-Kn.dot(js),c=Kn.lengthSq(),u=Math.abs(1-o*o);let d,h,f,g;if(u>0)if(d=o*l-a,h=o*a-l,g=s*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Ha).addScaledVector(js,h),f}intersectSphere(e,t){Pn.subVectors(e.center,this.origin);const i=Pn.dot(this.direction),r=Pn.dot(Pn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Pn)!==null}intersectTriangle(e,t,i,r,s){za.subVectors(t,e),Ks.subVectors(i,e),Ga.crossVectors(za,Ks);let o=this.direction.dot(Ga),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Kn.subVectors(this.origin,e);const l=a*this.direction.dot(Ks.crossVectors(Kn,Ks));if(l<0)return null;const c=a*this.direction.dot(za.cross(Kn));if(c<0||l+c>o)return null;const u=-a*Kn.dot(Ga);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Te{constructor(e,t,i,r,s,o,a,l,c,u,d,h,f,g,_,p){Te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,d,h,f,g,_,p)}set(e,t,i,r,s,o,a,l,c,u,d,h,f,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Te().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ki.setFromMatrixColumn(e,0).length(),s=1/Ki.setFromMatrixColumn(e,1).length(),o=1/Ki.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*u,f=o*d,g=a*u,_=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,g=c*u,_=c*d;t[0]=h+_*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,g=c*u,_=c*d;t[0]=h-_*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,f=o*d,g=a*u,_=a*d;t[0]=l*u,t[4]=g*c-f,t[8]=h*c+_,t[1]=l*d,t[5]=_*c+h,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-h*d,t[8]=g*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*d+g,t[10]=h-_*d}else if(e.order==="XZY"){const h=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+_,t[5]=o*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ig,e,rg)}lookAt(e,t,i){const r=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),$n.crossVectors(i,qt),$n.lengthSq()===0&&(Math.abs(i.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),$n.crossVectors(i,qt)),$n.normalize(),$s.crossVectors(qt,$n),r[0]=$n.x,r[4]=$s.x,r[8]=qt.x,r[1]=$n.y,r[5]=$s.y,r[9]=qt.y,r[2]=$n.z,r[6]=$s.z,r[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],f=i[13],g=i[2],_=i[6],p=i[10],m=i[14],y=i[3],M=i[7],T=i[11],C=i[15],R=r[0],w=r[4],I=r[8],W=r[12],v=r[1],S=r[5],B=r[9],O=r[13],G=r[2],Y=r[6],F=r[10],j=r[14],X=r[3],se=r[7],U=r[11],K=r[15];return s[0]=o*R+a*v+l*G+c*X,s[4]=o*w+a*S+l*Y+c*se,s[8]=o*I+a*B+l*F+c*U,s[12]=o*W+a*O+l*j+c*K,s[1]=u*R+d*v+h*G+f*X,s[5]=u*w+d*S+h*Y+f*se,s[9]=u*I+d*B+h*F+f*U,s[13]=u*W+d*O+h*j+f*K,s[2]=g*R+_*v+p*G+m*X,s[6]=g*w+_*S+p*Y+m*se,s[10]=g*I+_*B+p*F+m*U,s[14]=g*W+_*O+p*j+m*K,s[3]=y*R+M*v+T*G+C*X,s[7]=y*w+M*S+T*Y+C*se,s[11]=y*I+M*B+T*F+C*U,s[15]=y*W+M*O+T*j+C*K,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*f-i*l*f)+_*(+t*l*f-t*c*h+s*o*h-r*o*f+r*c*u-s*l*u)+p*(+t*c*d-t*a*f-s*o*d+i*o*f+s*a*u-i*c*u)+m*(-r*a*u-t*l*d+t*a*h+r*o*d-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],_=e[13],p=e[14],m=e[15],y=d*p*c-_*h*c+_*l*f-a*p*f-d*l*m+a*h*m,M=g*h*c-u*p*c-g*l*f+o*p*f+u*l*m-o*h*m,T=u*_*c-g*d*c+g*a*f-o*_*f-u*a*m+o*d*m,C=g*d*l-u*_*l-g*a*h+o*_*h+u*a*p-o*d*p,R=t*y+i*M+r*T+s*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=y*w,e[1]=(_*h*s-d*p*s-_*r*f+i*p*f+d*r*m-i*h*m)*w,e[2]=(a*p*s-_*l*s+_*r*c-i*p*c-a*r*m+i*l*m)*w,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*f-i*l*f)*w,e[4]=M*w,e[5]=(u*p*s-g*h*s+g*r*f-t*p*f-u*r*m+t*h*m)*w,e[6]=(g*l*s-o*p*s-g*r*c+t*p*c+o*r*m-t*l*m)*w,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*f+t*l*f)*w,e[8]=T*w,e[9]=(g*d*s-u*_*s-g*i*f+t*_*f+u*i*m-t*d*m)*w,e[10]=(o*_*s-g*a*s+g*i*c-t*_*c-o*i*m+t*a*m)*w,e[11]=(u*a*s-o*d*s-u*i*c+t*d*c+o*i*f-t*a*f)*w,e[12]=C*w,e[13]=(u*_*r-g*d*r+g*i*h-t*_*h-u*i*p+t*d*p)*w,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*p-t*a*p)*w,e[15]=(o*d*r-u*a*r+u*i*l-t*d*l-o*i*h+t*a*h)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,h=s*c,f=s*u,g=s*d,_=o*u,p=o*d,m=a*d,y=l*c,M=l*u,T=l*d,C=i.x,R=i.y,w=i.z;return r[0]=(1-(_+m))*C,r[1]=(f+T)*C,r[2]=(g-M)*C,r[3]=0,r[4]=(f-T)*R,r[5]=(1-(h+m))*R,r[6]=(p+y)*R,r[7]=0,r[8]=(g+M)*w,r[9]=(p-y)*w,r[10]=(1-(h+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ki.set(r[0],r[1],r[2]).length();const o=Ki.set(r[4],r[5],r[6]).length(),a=Ki.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],an.copy(this);const c=1/s,u=1/o,d=1/a;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=u,an.elements[5]*=u,an.elements[6]*=u,an.elements[8]*=d,an.elements[9]*=d,an.elements[10]*=d,t.setFromRotationMatrix(an),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Vn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r);let f,g;if(a===Vn)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Jo)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Vn){const l=this.elements,c=1/(t-e),u=1/(i-r),d=1/(o-s),h=(t+e)*c,f=(i+r)*u;let g,_;if(a===Vn)g=(o+s)*d,_=-2*d;else if(a===Jo)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ki=new b,an=new Te,ig=new b(0,0,0),rg=new b(1,1,1),$n=new b,$s=new b,qt=new b,Bu=new Te,ku=new Ee;class $t{constructor(e=0,t=0,i=0,r=$t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ut(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Bu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ku.setFromEuler(this),this.setFromQuaternion(ku,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$t.DEFAULT_ORDER="XYZ";class ff{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sg=0;const Vu=new b,$i=new Ee,Ln=new Te,Zs=new b,Qr=new b,og=new b,ag=new Ee,Hu=new b(1,0,0),zu=new b(0,1,0),Gu=new b(0,0,1),Wu={type:"added"},lg={type:"removed"},Zi={type:"childadded",child:null},Wa={type:"childremoved",child:null};class nt extends Fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nt.DEFAULT_UP.clone();const e=new b,t=new $t,i=new Ee,r=new b(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Te},normalMatrix:{value:new Ae}}),this.matrix=new Te,this.matrixWorld=new Te,this.matrixAutoUpdate=nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ff,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.multiply($i),this}rotateOnWorldAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.premultiply($i),this}rotateX(e){return this.rotateOnAxis(Hu,e)}rotateY(e){return this.rotateOnAxis(zu,e)}rotateZ(e){return this.rotateOnAxis(Gu,e)}translateOnAxis(e,t){return Vu.copy(e).applyQuaternion(this.quaternion),this.position.add(Vu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hu,e)}translateY(e){return this.translateOnAxis(zu,e)}translateZ(e){return this.translateOnAxis(Gu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Zs.copy(e):Zs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(Qr,Zs,this.up):Ln.lookAt(Zs,Qr,this.up),this.quaternion.setFromRotationMatrix(Ln),r&&(Ln.extractRotation(r.matrixWorld),$i.setFromRotationMatrix(Ln),this.quaternion.premultiply($i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wu),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lg),Wa.child=e,this.dispatchEvent(Wa),Wa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wu),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,e,og),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,ag,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}nt.DEFAULT_UP=new b(0,1,0);nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new b,Nn=new b,Xa=new b,Un=new b,Ji=new b,Qi=new b,Xu=new b,qa=new b,Ya=new b,ja=new b,Ka=new Ze,$a=new Ze,Za=new Ze;class hn{constructor(e=new b,t=new b,i=new b){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ln.subVectors(e,t),r.cross(ln);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ln.subVectors(r,t),Nn.subVectors(i,t),Xa.subVectors(e,t);const o=ln.dot(ln),a=ln.dot(Nn),l=ln.dot(Xa),c=Nn.dot(Nn),u=Nn.dot(Xa),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Un.x),l.addScaledVector(o,Un.y),l.addScaledVector(a,Un.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Ka.setScalar(0),$a.setScalar(0),Za.setScalar(0),Ka.fromBufferAttribute(e,t),$a.fromBufferAttribute(e,i),Za.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ka,s.x),o.addScaledVector($a,s.y),o.addScaledVector(Za,s.z),o}static isFrontFacing(e,t,i,r){return ln.subVectors(i,t),Nn.subVectors(e,t),ln.cross(Nn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),ln.cross(Nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return hn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Ji.subVectors(r,i),Qi.subVectors(s,i),qa.subVectors(e,i);const l=Ji.dot(qa),c=Qi.dot(qa);if(l<=0&&c<=0)return t.copy(i);Ya.subVectors(e,r);const u=Ji.dot(Ya),d=Qi.dot(Ya);if(u>=0&&d<=u)return t.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Ji,o);ja.subVectors(e,s);const f=Ji.dot(ja),g=Qi.dot(ja);if(g>=0&&f<=g)return t.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Qi,a);const p=u*g-f*d;if(p<=0&&d-u>=0&&f-g>=0)return Xu.subVectors(s,r),a=(d-u)/(d-u+(f-g)),t.copy(r).addScaledVector(Xu,a);const m=1/(p+_+h);return o=_*m,a=h*m,t.copy(i).addScaledVector(Ji,o).addScaledVector(Qi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const pf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},Js={h:0,s:0,l:0};function Ja(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ye{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=je.workingColorSpace){return this.r=e,this.g=t,this.b=i,je.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=je.workingColorSpace){if(e=Jc(e,1),t=Ut(t,0,1),i=Ut(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Ja(o,s,e+1/3),this.g=Ja(o,s,e),this.b=Ja(o,s,e-1/3)}return je.toWorkingColorSpace(this,r),this}setStyle(e,t=Nt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){const i=pf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}copyLinearToSRGB(e){return this.r=Oa(e.r),this.g=Oa(e.g),this.b=Oa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return je.fromWorkingColorSpace(Pt.copy(this),e),Math.round(Ut(Pt.r*255,0,255))*65536+Math.round(Ut(Pt.g*255,0,255))*256+Math.round(Ut(Pt.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(Pt.copy(this),t);const i=Pt.r,r=Pt.g,s=Pt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=Nt){je.fromWorkingColorSpace(Pt.copy(this),e);const t=Pt.r,i=Pt.g,r=Pt.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Zn),this.setHSL(Zn.h+e,Zn.s+t,Zn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Zn),e.getHSL(Js);const i=ys(Zn.h,Js.h,t),r=ys(Zn.s,Js.s,t),s=ys(Zn.l,Js.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new ye;ye.NAMES=pf;let cg=0;class mn extends Fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cg++}),this.uuid=pn(),this.name="",this.type="Material",this.blending=vr,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fl,this.blendDst=Bl,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=Sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==vr&&(i.blending=this.blending),this.side!==zn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Fl&&(i.blendSrc=this.blendSrc),this.blendDst!==Bl&&(i.blendDst=this.blendDst),this.blendEquation!==Pi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Sr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class En extends mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.combine=jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new b,Qs=new Fe;class ke{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=yc,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Qs.fromBufferAttribute(this,t),Qs.applyMatrix3(e),this.setXY(t,Qs.x,Qs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=dn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=rt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=dn(t,this.array)),t}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=dn(t,this.array)),t}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=dn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=dn(t,this.array)),t}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array),r=rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array),r=rt(r,this.array),s=rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yc&&(e.usage=this.usage),e}}class mf extends ke{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class gf extends ke{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class gn extends ke{constructor(e,t,i){super(new Float32Array(e),t,i)}}let ug=0;const Jt=new Te,Qa=new nt,er=new b,Yt=new _n,es=new _n,St=new b;class pt extends Fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ug++}),this.uuid=pn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uf(e)?gf:mf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ae().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,i){return Jt.makeTranslation(e,t,i),this.applyMatrix4(Jt),this}scale(e,t,i){return Jt.makeScale(e,t,i),this.applyMatrix4(Jt),this}lookAt(e){return Qa.lookAt(e),Qa.updateMatrix(),this.applyMatrix4(Qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new gn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _n);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Yt.setFromBufferAttribute(s),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new An);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(e){const i=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];es.setFromBufferAttribute(a),this.morphTargetsRelative?(St.addVectors(Yt.min,es.min),Yt.expandByPoint(St),St.addVectors(Yt.max,es.max),Yt.expandByPoint(St)):(Yt.expandByPoint(es.min),Yt.expandByPoint(es.max))}Yt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)St.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(St));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)St.fromBufferAttribute(a,c),l&&(er.fromBufferAttribute(e,c),St.add(er)),r=Math.max(r,i.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ke(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new b,l[I]=new b;const c=new b,u=new b,d=new b,h=new Fe,f=new Fe,g=new Fe,_=new b,p=new b;function m(I,W,v){c.fromBufferAttribute(i,I),u.fromBufferAttribute(i,W),d.fromBufferAttribute(i,v),h.fromBufferAttribute(s,I),f.fromBufferAttribute(s,W),g.fromBufferAttribute(s,v),u.sub(c),d.sub(c),f.sub(h),g.sub(h);const S=1/(f.x*g.y-g.x*f.y);isFinite(S)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(S),p.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(S),a[I].add(_),a[W].add(_),a[v].add(_),l[I].add(p),l[W].add(p),l[v].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let I=0,W=y.length;I<W;++I){const v=y[I],S=v.start,B=v.count;for(let O=S,G=S+B;O<G;O+=3)m(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const M=new b,T=new b,C=new b,R=new b;function w(I){C.fromBufferAttribute(r,I),R.copy(C);const W=a[I];M.copy(W),M.sub(C.multiplyScalar(C.dot(W))).normalize(),T.crossVectors(R,W);const S=T.dot(l[I])<0?-1:1;o.setXYZW(I,M.x,M.y,M.z,S)}for(let I=0,W=y.length;I<W;++I){const v=y[I],S=v.start,B=v.count;for(let O=S,G=S+B;O<G;O+=3)w(e.getX(O+0)),w(e.getX(O+1)),w(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ke(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const r=new b,s=new b,o=new b,a=new b,l=new b,c=new b,u=new b,d=new b;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),_=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let m=0;m<u;m++)h[g++]=c[f++]}return new ke(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qu=new Te,xi=new xa,eo=new An,Yu=new b,to=new b,no=new b,io=new b,el=new b,ro=new b,ju=new b,so=new b;class lt extends nt{constructor(e=new pt,t=new En){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ro.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(el.fromBufferAttribute(d,e),o?ro.addScaledVector(el,u):ro.addScaledVector(el.sub(t),u))}t.add(ro)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),eo.copy(i.boundingSphere),eo.applyMatrix4(s),xi.copy(e.ray).recast(e.near),!(eo.containsPoint(xi.origin)===!1&&(xi.intersectSphere(eo,Yu)===null||xi.origin.distanceToSquared(Yu)>(e.far-e.near)**2))&&(qu.copy(s).invert(),xi.copy(e.ray).applyMatrix4(qu),!(i.boundingBox!==null&&xi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,xi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const p=h[g],m=o[p.materialIndex],y=Math.max(p.start,f.start),M=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let T=y,C=M;T<C;T+=3){const R=a.getX(T),w=a.getX(T+1),I=a.getX(T+2);r=oo(this,m,e,i,c,u,d,R,w,I),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const y=a.getX(p),M=a.getX(p+1),T=a.getX(p+2);r=oo(this,o,e,i,c,u,d,y,M,T),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const p=h[g],m=o[p.materialIndex],y=Math.max(p.start,f.start),M=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let T=y,C=M;T<C;T+=3){const R=T,w=T+1,I=T+2;r=oo(this,m,e,i,c,u,d,R,w,I),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const y=p,M=p+1,T=p+2;r=oo(this,o,e,i,c,u,d,y,M,T),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function dg(n,e,t,i,r,s,o,a){let l;if(e.side===Dt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===zn,a),l===null)return null;so.copy(a),so.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(so);return c<t.near||c>t.far?null:{distance:c,point:so.clone(),object:n}}function oo(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,to),n.getVertexPosition(l,no),n.getVertexPosition(c,io);const u=dg(n,e,t,i,to,no,io,ju);if(u){const d=new b;hn.getBarycoord(ju,to,no,io,d),r&&(u.uv=hn.getInterpolatedAttribute(r,a,l,c,d,new Fe)),s&&(u.uv1=hn.getInterpolatedAttribute(s,a,l,c,d,new Fe)),o&&(u.normal=hn.getInterpolatedAttribute(o,a,l,c,d,new b),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new b,materialIndex:0};hn.getNormal(to,no,io,h.normal),u.face=h,u.barycoord=d}return u}class Br extends pt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new gn(c,3)),this.setAttribute("normal",new gn(u,3)),this.setAttribute("uv",new gn(d,2));function g(_,p,m,y,M,T,C,R,w,I,W){const v=T/w,S=C/I,B=T/2,O=C/2,G=R/2,Y=w+1,F=I+1;let j=0,X=0;const se=new b;for(let U=0;U<F;U++){const K=U*S-O;for(let ne=0;ne<Y;ne++){const _e=ne*v-B;se[_]=_e*y,se[p]=K*M,se[m]=G,c.push(se.x,se.y,se.z),se[_]=0,se[p]=0,se[m]=R>0?1:-1,u.push(se.x,se.y,se.z),d.push(ne/w),d.push(1-U/I),j+=1}}for(let U=0;U<I;U++)for(let K=0;K<w;K++){const ne=h+K+Y*U,_e=h+K+Y*(U+1),H=h+(K+1)+Y*(U+1),$=h+(K+1)+Y*U;l.push(ne,_e,$),l.push(_e,H,$),X+=6}a.addGroup(f,X,W),f+=X,h+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Br(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Bt(n){const e={};for(let t=0;t<n.length;t++){const i=Cr(n[t]);for(const r in i)e[r]=i[r]}return e}function hg(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function _f(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const vf={clone:Cr,merge:Bt};var fg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fg,this.fragmentShader=pg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cr(e.uniforms),this.uniformsGroups=hg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class xf extends nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Te,this.projectionMatrix=new Te,this.projectionMatrixInverse=new Te,this.coordinateSystem=Vn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Jn=new b,Ku=new Fe,$u=new Fe;class kt extends xf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Rr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ms*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rr*2*Math.atan(Math.tan(Ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z),Jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z)}getViewSize(e,t){return this.getViewBounds(e,Ku,$u),t.subVectors($u,Ku)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ms*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const tr=-90,nr=1;class mg extends nt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new kt(tr,nr,e,t);r.layers=this.layers,this.add(r);const s=new kt(tr,nr,e,t);s.layers=this.layers,this.add(s);const o=new kt(tr,nr,e,t);o.layers=this.layers,this.add(o);const a=new kt(tr,nr,e,t);a.layers=this.layers,this.add(a);const l=new kt(tr,nr,e,t);l.layers=this.layers,this.add(l);const c=new kt(tr,nr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Vn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Jo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Mf extends Et{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Er,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gg extends ki{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Mf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Br(5,5,5),s=new Wn({name:"CubemapFromEquirect",uniforms:Cr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Dt,blending:hi});s.uniforms.tEquirect.value=t;const o=new lt(r,s),a=t.minFilter;return t.minFilter===kn&&(t.minFilter=Kt),new mg(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const tl=new b,_g=new b,vg=new Ae;class Ci{constructor(e=new b(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=tl.subVectors(i,t).cross(_g.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(tl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||vg.getNormalMatrix(e),r=this.coplanarPoint(tl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mi=new An,ao=new b;class Qc{constructor(e=new Ci,t=new Ci,i=new Ci,r=new Ci,s=new Ci,o=new Ci){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Vn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],f=r[8],g=r[9],_=r[10],p=r[11],m=r[12],y=r[13],M=r[14],T=r[15];if(i[0].setComponents(l-s,h-c,p-f,T-m).normalize(),i[1].setComponents(l+s,h+c,p+f,T+m).normalize(),i[2].setComponents(l+o,h+u,p+g,T+y).normalize(),i[3].setComponents(l-o,h-u,p-g,T-y).normalize(),i[4].setComponents(l-a,h-d,p-_,T-M).normalize(),t===Vn)i[5].setComponents(l+a,h+d,p+_,T+M).normalize();else if(t===Jo)i[5].setComponents(a,d,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(e){return Mi.center.set(0,0,0),Mi.radius=.7071067811865476,Mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ao.x=r.normal.x>0?e.max.x:e.min.x,ao.y=r.normal.y>0?e.max.y:e.min.y,ao.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ao)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yf(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function xg(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Ma extends pt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,h=t/l,f=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const y=m*h-o;for(let M=0;M<c;M++){const T=M*d-s;g.push(T,-y,0),_.push(0,0,1),p.push(M/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){const M=y+c*m,T=y+c*(m+1),C=y+1+c*(m+1),R=y+1+c*m;f.push(M,T,R),f.push(T,C,R)}this.setIndex(f),this.setAttribute("position",new gn(g,3)),this.setAttribute("normal",new gn(_,3)),this.setAttribute("uv",new gn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ma(e.width,e.height,e.widthSegments,e.heightSegments)}}var Mg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Sg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Eg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ag=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Cg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ig=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ng=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ug=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Dg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Og=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Gg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Wg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Xg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$g="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zg=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Qg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,e_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,t_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,n_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,i_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,r_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,s_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,o_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,a_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,l_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,c_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,u_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,d_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,h_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,f_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,p_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,m_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,g_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,__=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,v_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,x_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,M_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,y_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,S_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,E_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,w_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,A_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,b_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,R_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,C_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,P_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,L_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,N_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,U_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,O_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,B_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,k_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,z_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,G_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,W_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,X_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,q_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Y_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,j_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,K_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Z_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,J_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Q_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ev=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,nv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,iv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ov=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,av=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,cv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_v=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Av=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,bv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Rv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Cv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Iv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Uv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ov=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Bv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Hv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Wv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$v=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:Mg,alphahash_pars_fragment:yg,alphamap_fragment:Sg,alphamap_pars_fragment:Eg,alphatest_fragment:Tg,alphatest_pars_fragment:wg,aomap_fragment:Ag,aomap_pars_fragment:bg,batching_pars_vertex:Rg,batching_vertex:Cg,begin_vertex:Ig,beginnormal_vertex:Pg,bsdfs:Lg,iridescence_fragment:Ng,bumpmap_pars_fragment:Ug,clipping_planes_fragment:Dg,clipping_planes_pars_fragment:Og,clipping_planes_pars_vertex:Fg,clipping_planes_vertex:Bg,color_fragment:kg,color_pars_fragment:Vg,color_pars_vertex:Hg,color_vertex:zg,common:Gg,cube_uv_reflection_fragment:Wg,defaultnormal_vertex:Xg,displacementmap_pars_vertex:qg,displacementmap_vertex:Yg,emissivemap_fragment:jg,emissivemap_pars_fragment:Kg,colorspace_fragment:$g,colorspace_pars_fragment:Zg,envmap_fragment:Jg,envmap_common_pars_fragment:Qg,envmap_pars_fragment:e_,envmap_pars_vertex:t_,envmap_physical_pars_fragment:h_,envmap_vertex:n_,fog_vertex:i_,fog_pars_vertex:r_,fog_fragment:s_,fog_pars_fragment:o_,gradientmap_pars_fragment:a_,lightmap_pars_fragment:l_,lights_lambert_fragment:c_,lights_lambert_pars_fragment:u_,lights_pars_begin:d_,lights_toon_fragment:f_,lights_toon_pars_fragment:p_,lights_phong_fragment:m_,lights_phong_pars_fragment:g_,lights_physical_fragment:__,lights_physical_pars_fragment:v_,lights_fragment_begin:x_,lights_fragment_maps:M_,lights_fragment_end:y_,logdepthbuf_fragment:S_,logdepthbuf_pars_fragment:E_,logdepthbuf_pars_vertex:T_,logdepthbuf_vertex:w_,map_fragment:A_,map_pars_fragment:b_,map_particle_fragment:R_,map_particle_pars_fragment:C_,metalnessmap_fragment:I_,metalnessmap_pars_fragment:P_,morphinstance_vertex:L_,morphcolor_vertex:N_,morphnormal_vertex:U_,morphtarget_pars_vertex:D_,morphtarget_vertex:O_,normal_fragment_begin:F_,normal_fragment_maps:B_,normal_pars_fragment:k_,normal_pars_vertex:V_,normal_vertex:H_,normalmap_pars_fragment:z_,clearcoat_normal_fragment_begin:G_,clearcoat_normal_fragment_maps:W_,clearcoat_pars_fragment:X_,iridescence_pars_fragment:q_,opaque_fragment:Y_,packing:j_,premultiplied_alpha_fragment:K_,project_vertex:$_,dithering_fragment:Z_,dithering_pars_fragment:J_,roughnessmap_fragment:Q_,roughnessmap_pars_fragment:ev,shadowmap_pars_fragment:tv,shadowmap_pars_vertex:nv,shadowmap_vertex:iv,shadowmask_pars_fragment:rv,skinbase_vertex:sv,skinning_pars_vertex:ov,skinning_vertex:av,skinnormal_vertex:lv,specularmap_fragment:cv,specularmap_pars_fragment:uv,tonemapping_fragment:dv,tonemapping_pars_fragment:hv,transmission_fragment:fv,transmission_pars_fragment:pv,uv_pars_fragment:mv,uv_pars_vertex:gv,uv_vertex:_v,worldpos_vertex:vv,background_vert:xv,background_frag:Mv,backgroundCube_vert:yv,backgroundCube_frag:Sv,cube_vert:Ev,cube_frag:Tv,depth_vert:wv,depth_frag:Av,distanceRGBA_vert:bv,distanceRGBA_frag:Rv,equirect_vert:Cv,equirect_frag:Iv,linedashed_vert:Pv,linedashed_frag:Lv,meshbasic_vert:Nv,meshbasic_frag:Uv,meshlambert_vert:Dv,meshlambert_frag:Ov,meshmatcap_vert:Fv,meshmatcap_frag:Bv,meshnormal_vert:kv,meshnormal_frag:Vv,meshphong_vert:Hv,meshphong_frag:zv,meshphysical_vert:Gv,meshphysical_frag:Wv,meshtoon_vert:Xv,meshtoon_frag:qv,points_vert:Yv,points_frag:jv,shadow_vert:Kv,shadow_frag:$v,sprite_vert:Zv,sprite_frag:Jv},re={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ae},alphaMap:{value:null},alphaMapTransform:{value:new Ae},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ae}},envmap:{envMap:{value:null},envMapRotation:{value:new Ae},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ae}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ae}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ae},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ae},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ae},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ae}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ae}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ae}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ae},alphaTest:{value:0},uvTransform:{value:new Ae}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ae},alphaMap:{value:null},alphaMapTransform:{value:new Ae},alphaTest:{value:0}}},Sn={basic:{uniforms:Bt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Bt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new ye(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Bt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Bt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Bt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new ye(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Bt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Bt([re.points,re.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Bt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Bt([re.common,re.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Bt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Bt([re.sprite,re.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ae},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ae}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Bt([re.common,re.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Bt([re.lights,re.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Sn.physical={uniforms:Bt([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ae},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ae},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ae},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ae},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ae},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ae},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ae},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ae},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ae},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ae},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ae},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ae}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const lo={r:0,b:0,g:0},yi=new $t,Qv=new Te;function e0(n,e,t,i,r,s,o){const a=new ye(0);let l=s===!0?0:1,c,u,d=null,h=0,f=null;function g(y){let M=y.isScene===!0?y.background:null;return M&&M.isTexture&&(M=(y.backgroundBlurriness>0?t:e).get(M)),M}function _(y){let M=!1;const T=g(y);T===null?m(a,l):T&&T.isColor&&(m(T,1),M=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(y,M){const T=g(M);T&&(T.isCubeTexture||T.mapping===_a)?(u===void 0&&(u=new lt(new Br(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:Cr(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),yi.copy(M.backgroundRotation),yi.x*=-1,yi.y*=-1,yi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Qv.makeRotationFromEuler(yi)),u.material.toneMapped=je.getTransfer(T.colorSpace)!==dt,(d!==T||h!==T.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,d=T,h=T.version,f=n.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new lt(new Ma(2,2),new Wn({name:"BackgroundMaterial",uniforms:Cr(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=je.getTransfer(T.colorSpace)!==dt,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||h!==T.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=T,h=T.version,f=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,M){y.getRGB(lo,_f(n)),i.buffers.color.setClear(lo.r,lo.g,lo.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(y,M=1){a.set(y),l=M,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(a,l)},render:_,addToRenderList:p}}function t0(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(v,S,B,O,G){let Y=!1;const F=d(O,B,S);s!==F&&(s=F,c(s.object)),Y=f(v,O,B,G),Y&&g(v,O,B,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,T(v,S,B,O),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function c(v){return n.bindVertexArray(v)}function u(v){return n.deleteVertexArray(v)}function d(v,S,B){const O=B.wireframe===!0;let G=i[v.id];G===void 0&&(G={},i[v.id]=G);let Y=G[S.id];Y===void 0&&(Y={},G[S.id]=Y);let F=Y[O];return F===void 0&&(F=h(l()),Y[O]=F),F}function h(v){const S=[],B=[],O=[];for(let G=0;G<t;G++)S[G]=0,B[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:B,attributeDivisors:O,object:v,attributes:{},index:null}}function f(v,S,B,O){const G=s.attributes,Y=S.attributes;let F=0;const j=B.getAttributes();for(const X in j)if(j[X].location>=0){const U=G[X];let K=Y[X];if(K===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(K=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(K=v.instanceColor)),U===void 0||U.attribute!==K||K&&U.data!==K.data)return!0;F++}return s.attributesNum!==F||s.index!==O}function g(v,S,B,O){const G={},Y=S.attributes;let F=0;const j=B.getAttributes();for(const X in j)if(j[X].location>=0){let U=Y[X];U===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(U=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(U=v.instanceColor));const K={};K.attribute=U,U&&U.data&&(K.data=U.data),G[X]=K,F++}s.attributes=G,s.attributesNum=F,s.index=O}function _(){const v=s.newAttributes;for(let S=0,B=v.length;S<B;S++)v[S]=0}function p(v){m(v,0)}function m(v,S){const B=s.newAttributes,O=s.enabledAttributes,G=s.attributeDivisors;B[v]=1,O[v]===0&&(n.enableVertexAttribArray(v),O[v]=1),G[v]!==S&&(n.vertexAttribDivisor(v,S),G[v]=S)}function y(){const v=s.newAttributes,S=s.enabledAttributes;for(let B=0,O=S.length;B<O;B++)S[B]!==v[B]&&(n.disableVertexAttribArray(B),S[B]=0)}function M(v,S,B,O,G,Y,F){F===!0?n.vertexAttribIPointer(v,S,B,G,Y):n.vertexAttribPointer(v,S,B,O,G,Y)}function T(v,S,B,O){_();const G=O.attributes,Y=B.getAttributes(),F=S.defaultAttributeValues;for(const j in Y){const X=Y[j];if(X.location>=0){let se=G[j];if(se===void 0&&(j==="instanceMatrix"&&v.instanceMatrix&&(se=v.instanceMatrix),j==="instanceColor"&&v.instanceColor&&(se=v.instanceColor)),se!==void 0){const U=se.normalized,K=se.itemSize,ne=e.get(se);if(ne===void 0)continue;const _e=ne.buffer,H=ne.type,$=ne.bytesPerElement,ae=H===n.INT||H===n.UNSIGNED_INT||se.gpuType===Gc;if(se.isInterleavedBufferAttribute){const le=se.data,Re=le.stride,be=se.offset;if(le.isInstancedInterleavedBuffer){for(let Ge=0;Ge<X.locationSize;Ge++)m(X.location+Ge,le.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ge=0;Ge<X.locationSize;Ge++)p(X.location+Ge);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let Ge=0;Ge<X.locationSize;Ge++)M(X.location+Ge,K/X.locationSize,H,U,Re*$,(be+K/X.locationSize*Ge)*$,ae)}else{if(se.isInstancedBufferAttribute){for(let le=0;le<X.locationSize;le++)m(X.location+le,se.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let le=0;le<X.locationSize;le++)p(X.location+le);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let le=0;le<X.locationSize;le++)M(X.location+le,K/X.locationSize,H,U,K*$,K/X.locationSize*le*$,ae)}}else if(F!==void 0){const U=F[j];if(U!==void 0)switch(U.length){case 2:n.vertexAttrib2fv(X.location,U);break;case 3:n.vertexAttrib3fv(X.location,U);break;case 4:n.vertexAttrib4fv(X.location,U);break;default:n.vertexAttrib1fv(X.location,U)}}}}y()}function C(){I();for(const v in i){const S=i[v];for(const B in S){const O=S[B];for(const G in O)u(O[G].object),delete O[G];delete S[B]}delete i[v]}}function R(v){if(i[v.id]===void 0)return;const S=i[v.id];for(const B in S){const O=S[B];for(const G in O)u(O[G].object),delete O[G];delete S[B]}delete i[v.id]}function w(v){for(const S in i){const B=i[S];if(B[v.id]===void 0)continue;const O=B[v.id];for(const G in O)u(O[G].object),delete O[G];delete B[v.id]}}function I(){W(),o=!0,s!==r&&(s=r,c(s.object))}function W(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:W,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:p,disableUnusedAttributes:y}}function n0(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];t.update(f,i,1)}function l(c,u,d,h){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];for(let _=0;_<h.length;_++)t.update(g,i,h[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function i0(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==nn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const I=w===Us&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Gn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==fn&&!I)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){const w=e.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:T,vertexTextures:C,maxSamples:R}}function r0(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Ci,a=new Ae,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||i!==0||r;return r=h,i=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,m=n.get(d);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const y=s?0:i,M=y*4;let T=m.clippingState||null;l.value=T,T=u(g,h,M,f);for(let C=0;C!==M;++C)T[C]=t[C];m.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=f+_*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let M=0,T=f;M!==_;++M,T+=4)o.copy(d[M]).applyMatrix4(y,a),o.normal.toArray(p,T),p[T+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function s0(n){let e=new WeakMap;function t(o,a){return a===ql?o.mapping=Er:a===Yl&&(o.mapping=Tr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ql||a===Yl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new gg(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class eu extends xf{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const gr=4,Zu=[.125,.215,.35,.446,.526,.582],Li=20,nl=new eu,Ju=new ye;let il=null,rl=0,sl=0,ol=!1;const Ii=(1+Math.sqrt(5))/2,ir=1/Ii,Qu=[new b(-Ii,ir,0),new b(Ii,ir,0),new b(-ir,0,Ii),new b(ir,0,Ii),new b(0,Ii,-ir),new b(0,Ii,ir),new b(-1,1,-1),new b(1,1,-1),new b(-1,1,1),new b(1,1,1)];class Sc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){il=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),sl=this._renderer.getActiveMipmapLevel(),ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=td(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(il,rl,sl),this._renderer.xr.enabled=ol,e.scissorTest=!1,co(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Er||e.mapping===Tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),il=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),sl=this._renderer.getActiveMipmapLevel(),ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:Us,format:nn,colorSpace:At,depthBuffer:!1},r=ed(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ed(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=o0(s)),this._blurMaterial=a0(s,e,t)}return r}_compileMaterial(e){const t=new lt(this._lodPlanes[0],e);this._renderer.compile(t,nl)}_sceneToCubeUV(e,t,i,r){const a=new kt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Ju),u.toneMapping=fi,u.autoClear=!1;const f=new En({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),g=new lt(new Br,f);let _=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,_=!0):(f.color.copy(Ju),_=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):y===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const M=this._cubeSize;co(r,y*M,m>2?M:0,M,M),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Er||e.mapping===Tr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=nd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=td());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new lt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;co(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,nl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Qu[(r-s-1)%Qu.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new lt(this._lodPlanes[r],c),h=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Li-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):Li;p>Li&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Li}`);const m=[];let y=0;for(let w=0;w<Li;++w){const I=w/_,W=Math.exp(-I*I/2);m.push(W),w===0?y+=W:w<p&&(y+=2*W)}for(let w=0;w<m.length;w++)m[w]=m[w]/y;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-i;const T=this._sizeLods[r],C=3*T*(r>M-gr?r-M+gr:0),R=4*(this._cubeSize-T);co(t,C,R,3*T,2*T),l.setRenderTarget(t),l.render(d,nl)}}function o0(n){const e=[],t=[],i=[];let r=n;const s=n-gr+1+Zu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-gr?l=Zu[o-n+gr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,_=3,p=2,m=1,y=new Float32Array(_*g*f),M=new Float32Array(p*g*f),T=new Float32Array(m*g*f);for(let R=0;R<f;R++){const w=R%3*2/3-1,I=R>2?0:-1,W=[w,I,0,w+2/3,I,0,w+2/3,I+1,0,w,I,0,w+2/3,I+1,0,w,I+1,0];y.set(W,_*g*R),M.set(h,p*g*R);const v=[R,R,R,R,R,R];T.set(v,m*g*R)}const C=new pt;C.setAttribute("position",new ke(y,_)),C.setAttribute("uv",new ke(M,p)),C.setAttribute("faceIndex",new ke(T,m)),e.push(C),r>gr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ed(n,e,t){const i=new ki(n,e,t);return i.texture.mapping=_a,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function co(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function a0(n,e,t){const i=new Float32Array(Li),r=new b(0,1,0);return new Wn({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function td(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function nd(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function tu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function l0(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ql||l===Yl,u=l===Er||l===Tr;if(c||u){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Sc(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new Sc(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function c0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Lo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function u0(n,e,t,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}h.removeEventListener("dispose",o),delete r[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)e.update(h[g],n.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const _=f[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],n.ARRAY_BUFFER)}}function c(d){const h=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let M=0,T=y.length;M<T;M+=3){const C=y[M+0],R=y[M+1],w=y[M+2];h.push(C,R,R,w,w,C)}}else if(g!==void 0){const y=g.array;_=g.version;for(let M=0,T=y.length/3-1;M<T;M+=3){const C=M+0,R=M+1,w=M+2;h.push(C,R,R,w,w,C)}}else return;const p=new(uf(h)?gf:mf)(h,1);p.version=_;const m=s.get(d);m&&e.remove(m),s.set(d,p)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function d0(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,f){n.drawElements(i,f,s,h*o),t.update(f,i,1)}function c(h,f,g){g!==0&&(n.drawElementsInstanced(i,f,s,h*o,g),t.update(f,i,g))}function u(h,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,h,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];t.update(p,i,1)}function d(h,f,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<h.length;m++)c(h[m]/o,f[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(i,f,0,s,h,0,_,0,g);let m=0;for(let y=0;y<g;y++)m+=f[y];for(let y=0;y<_.length;y++)t.update(m,i,_[y])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function h0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function f0(n,e,t){const i=new WeakMap,r=new Ze;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let v=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",v)};var f=v;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let T=0;g===!0&&(T=1),_===!0&&(T=2),p===!0&&(T=3);let C=a.attributes.position.count*T,R=1;C>e.maxTextureSize&&(R=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const w=new Float32Array(C*R*4*d),I=new hf(w,C,R,d);I.type=fn,I.needsUpdate=!0;const W=T*4;for(let S=0;S<d;S++){const B=m[S],O=y[S],G=M[S],Y=C*R*4*S;for(let F=0;F<B.count;F++){const j=F*W;g===!0&&(r.fromBufferAttribute(B,F),w[Y+j+0]=r.x,w[Y+j+1]=r.y,w[Y+j+2]=r.z,w[Y+j+3]=0),_===!0&&(r.fromBufferAttribute(O,F),w[Y+j+4]=r.x,w[Y+j+5]=r.y,w[Y+j+6]=r.z,w[Y+j+7]=0),p===!0&&(r.fromBufferAttribute(G,F),w[Y+j+8]=r.x,w[Y+j+9]=r.y,w[Y+j+10]=r.z,w[Y+j+11]=G.itemSize===4?r.w:1)}}h={count:d,texture:I,size:new Fe(C,R)},i.set(a,h),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function p0(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Sf extends Et{constructor(e,t,i,r,s,o,a,l,c,u=xr){if(u!==xr&&u!==br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===xr&&(i=Bi),i===void 0&&u===br&&(i=Ar),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Vt,this.minFilter=l!==void 0?l:Vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ef=new Et,id=new Sf(1,1),Tf=new hf,wf=new tg,Af=new Mf,rd=[],sd=[],od=new Float32Array(16),ad=new Float32Array(9),ld=new Float32Array(4);function kr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=rd[r];if(s===void 0&&(s=new Float32Array(r),rd[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ya(n,e){let t=sd[e];t===void 0&&(t=new Int32Array(e),sd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function m0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function g0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2fv(this.addr,e),yt(t,e)}}function _0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;n.uniform3fv(this.addr,e),yt(t,e)}}function v0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4fv(this.addr,e),yt(t,e)}}function x0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(Mt(t,i))return;ld.set(i),n.uniformMatrix2fv(this.addr,!1,ld),yt(t,i)}}function M0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(Mt(t,i))return;ad.set(i),n.uniformMatrix3fv(this.addr,!1,ad),yt(t,i)}}function y0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(Mt(t,i))return;od.set(i),n.uniformMatrix4fv(this.addr,!1,od),yt(t,i)}}function S0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function E0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2iv(this.addr,e),yt(t,e)}}function T0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3iv(this.addr,e),yt(t,e)}}function w0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4iv(this.addr,e),yt(t,e)}}function A0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function b0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2uiv(this.addr,e),yt(t,e)}}function R0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3uiv(this.addr,e),yt(t,e)}}function C0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4uiv(this.addr,e),yt(t,e)}}function I0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(id.compareFunction=cf,s=id):s=Ef,t.setTexture2D(e||s,r)}function P0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||wf,r)}function L0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Af,r)}function N0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Tf,r)}function U0(n){switch(n){case 5126:return m0;case 35664:return g0;case 35665:return _0;case 35666:return v0;case 35674:return x0;case 35675:return M0;case 35676:return y0;case 5124:case 35670:return S0;case 35667:case 35671:return E0;case 35668:case 35672:return T0;case 35669:case 35673:return w0;case 5125:return A0;case 36294:return b0;case 36295:return R0;case 36296:return C0;case 35678:case 36198:case 36298:case 36306:case 35682:return I0;case 35679:case 36299:case 36307:return P0;case 35680:case 36300:case 36308:case 36293:return L0;case 36289:case 36303:case 36311:case 36292:return N0}}function D0(n,e){n.uniform1fv(this.addr,e)}function O0(n,e){const t=kr(e,this.size,2);n.uniform2fv(this.addr,t)}function F0(n,e){const t=kr(e,this.size,3);n.uniform3fv(this.addr,t)}function B0(n,e){const t=kr(e,this.size,4);n.uniform4fv(this.addr,t)}function k0(n,e){const t=kr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function V0(n,e){const t=kr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function H0(n,e){const t=kr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function z0(n,e){n.uniform1iv(this.addr,e)}function G0(n,e){n.uniform2iv(this.addr,e)}function W0(n,e){n.uniform3iv(this.addr,e)}function X0(n,e){n.uniform4iv(this.addr,e)}function q0(n,e){n.uniform1uiv(this.addr,e)}function Y0(n,e){n.uniform2uiv(this.addr,e)}function j0(n,e){n.uniform3uiv(this.addr,e)}function K0(n,e){n.uniform4uiv(this.addr,e)}function $0(n,e,t){const i=this.cache,r=e.length,s=ya(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Ef,s[o])}function Z0(n,e,t){const i=this.cache,r=e.length,s=ya(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||wf,s[o])}function J0(n,e,t){const i=this.cache,r=e.length,s=ya(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Af,s[o])}function Q0(n,e,t){const i=this.cache,r=e.length,s=ya(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),yt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Tf,s[o])}function ex(n){switch(n){case 5126:return D0;case 35664:return O0;case 35665:return F0;case 35666:return B0;case 35674:return k0;case 35675:return V0;case 35676:return H0;case 5124:case 35670:return z0;case 35667:case 35671:return G0;case 35668:case 35672:return W0;case 35669:case 35673:return X0;case 5125:return q0;case 36294:return Y0;case 36295:return j0;case 36296:return K0;case 35678:case 36198:case 36298:case 36306:case 35682:return $0;case 35679:case 36299:case 36307:return Z0;case 35680:case 36300:case 36308:case 36293:return J0;case 36289:case 36303:case 36311:case 36292:return Q0}}class tx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=U0(t.type)}}class nx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ex(t.type)}}class ix{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const al=/(\w+)(\])?(\[|\.)?/g;function cd(n,e){n.seq.push(e),n.map[e.id]=e}function rx(n,e,t){const i=n.name,r=i.length;for(al.lastIndex=0;;){const s=al.exec(i),o=al.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){cd(t,c===void 0?new tx(a,n,e):new nx(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new ix(a),cd(t,d)),t=d}}}class No{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);rx(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function ud(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const sx=37297;let ox=0;function ax(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function lx(n){const e=je.getPrimaries(je.workingColorSpace),t=je.getPrimaries(n);let i;switch(e===t?i="":e===Zo&&t===$o?i="LinearDisplayP3ToLinearSRGB":e===$o&&t===Zo&&(i="LinearSRGBToLinearDisplayP3"),n){case At:case va:return[i,"LinearTransferOETF"];case Nt:case Zc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function dd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+ax(n.getShaderSource(e),o)}else return r}function cx(n,e){const t=lx(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ux(n,e){let t;switch(e){case um:t="Linear";break;case dm:t="Reinhard";break;case hm:t="Cineon";break;case Kh:t="ACESFilmic";break;case pm:t="AgX";break;case mm:t="Neutral";break;case fm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const uo=new b;function dx(){je.getLuminanceCoefficients(uo);const n=uo.x.toFixed(4),e=uo.y.toFixed(4),t=uo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ms).join(`
`)}function fx(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function px(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ms(n){return n!==""}function hd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ec(n){return n.replace(mx,_x)}const gx=new Map;function _x(n,e){let t=Oe[e];if(t===void 0){const i=gx.get(e);if(i!==void 0)t=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ec(t)}const vx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pd(n){return n.replace(vx,xx)}function xx(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function md(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Mx(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===qh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Yh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===On&&(e="SHADOWMAP_TYPE_VSM"),e}function yx(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Er:case Tr:e="ENVMAP_TYPE_CUBE";break;case _a:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Sx(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Tr:e="ENVMAP_MODE_REFRACTION";break}return e}function Ex(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case jh:e="ENVMAP_BLENDING_MULTIPLY";break;case lm:e="ENVMAP_BLENDING_MIX";break;case cm:e="ENVMAP_BLENDING_ADD";break}return e}function Tx(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function wx(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Mx(t),c=yx(t),u=Sx(t),d=Ex(t),h=Tx(t),f=hx(t),g=fx(s),_=r.createProgram();let p,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ms).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ms).join(`
`),m.length>0&&(m+=`
`)):(p=[md(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ms).join(`
`),m=[md(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fi?"#define TONE_MAPPING":"",t.toneMapping!==fi?Oe.tonemapping_pars_fragment:"",t.toneMapping!==fi?ux("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,cx("linearToOutputTexel",t.outputColorSpace),dx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ms).join(`
`)),o=Ec(o),o=hd(o,t),o=fd(o,t),a=Ec(a),a=hd(a,t),a=fd(a,t),o=pd(o),a=pd(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Lu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=y+p+o,T=y+m+a,C=ud(r,r.VERTEX_SHADER,M),R=ud(r,r.FRAGMENT_SHADER,T);r.attachShader(_,C),r.attachShader(_,R),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(S){if(n.debug.checkShaderErrors){const B=r.getProgramInfoLog(_).trim(),O=r.getShaderInfoLog(C).trim(),G=r.getShaderInfoLog(R).trim();let Y=!0,F=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,C,R);else{const j=dd(r,C,"vertex"),X=dd(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+B+`
`+j+`
`+X)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(O===""||G==="")&&(F=!1);F&&(S.diagnostics={runnable:Y,programLog:B,vertexShader:{log:O,prefix:p},fragmentShader:{log:G,prefix:m}})}r.deleteShader(C),r.deleteShader(R),I=new No(r,_),W=px(r,_)}let I;this.getUniforms=function(){return I===void 0&&w(this),I};let W;this.getAttributes=function(){return W===void 0&&w(this),W};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(_,sx)),v},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ox++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=R,this}let Ax=0;class bx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Rx(e),t.set(e,i)),i}}class Rx{constructor(e){this.id=Ax++,this.code=e,this.usedTimes=0}}function Cx(n,e,t,i,r,s,o){const a=new ff,l=new bx,c=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.reverseDepthBuffer,f=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,S,B,O,G){const Y=O.fog,F=G.geometry,j=v.isMeshStandardMaterial?O.environment:null,X=(v.isMeshStandardMaterial?t:e).get(v.envMap||j),se=X&&X.mapping===_a?X.image.height:null,U=_[v.type];v.precision!==null&&(g=r.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const K=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ne=K!==void 0?K.length:0;let _e=0;F.morphAttributes.position!==void 0&&(_e=1),F.morphAttributes.normal!==void 0&&(_e=2),F.morphAttributes.color!==void 0&&(_e=3);let H,$,ae,le;if(U){const Ct=Sn[U];H=Ct.vertexShader,$=Ct.fragmentShader}else H=v.vertexShader,$=v.fragmentShader,l.update(v),ae=l.getVertexShaderID(v),le=l.getFragmentShaderID(v);const Re=n.getRenderTarget(),be=G.isInstancedMesh===!0,Ge=G.isBatchedMesh===!0,$e=!!v.map,We=!!v.matcap,P=!!X,bt=!!v.aoMap,Ve=!!v.lightMap,Xe=!!v.bumpMap,Ce=!!v.normalMap,ot=!!v.displacementMap,Pe=!!v.emissiveMap,A=!!v.metalnessMap,x=!!v.roughnessMap,V=v.anisotropy>0,J=v.clearcoat>0,ee=v.dispersion>0,Z=v.iridescence>0,xe=v.sheen>0,oe=v.transmission>0,fe=V&&!!v.anisotropyMap,Ye=J&&!!v.clearcoatMap,te=J&&!!v.clearcoatNormalMap,pe=J&&!!v.clearcoatRoughnessMap,Ie=Z&&!!v.iridescenceMap,Le=Z&&!!v.iridescenceThicknessMap,me=xe&&!!v.sheenColorMap,He=xe&&!!v.sheenRoughnessMap,De=!!v.specularMap,at=!!v.specularColorMap,L=!!v.specularIntensityMap,he=oe&&!!v.transmissionMap,q=oe&&!!v.thicknessMap,Q=!!v.gradientMap,ue=!!v.alphaMap,ce=v.alphaTest>0,Be=!!v.alphaHash,ft=!!v.extensions;let Rt=fi;v.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(Rt=n.toneMapping);const qe={shaderID:U,shaderType:v.type,shaderName:v.name,vertexShader:H,fragmentShader:$,defines:v.defines,customVertexShaderID:ae,customFragmentShaderID:le,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:Ge,batchingColor:Ge&&G._colorsTexture!==null,instancing:be,instancingColor:be&&G.instanceColor!==null,instancingMorph:be&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Re===null?n.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:At,alphaToCoverage:!!v.alphaToCoverage,map:$e,matcap:We,envMap:P,envMapMode:P&&X.mapping,envMapCubeUVHeight:se,aoMap:bt,lightMap:Ve,bumpMap:Xe,normalMap:Ce,displacementMap:f&&ot,emissiveMap:Pe,normalMapObjectSpace:Ce&&v.normalMapType===ym,normalMapTangentSpace:Ce&&v.normalMapType===$c,metalnessMap:A,roughnessMap:x,anisotropy:V,anisotropyMap:fe,clearcoat:J,clearcoatMap:Ye,clearcoatNormalMap:te,clearcoatRoughnessMap:pe,dispersion:ee,iridescence:Z,iridescenceMap:Ie,iridescenceThicknessMap:Le,sheen:xe,sheenColorMap:me,sheenRoughnessMap:He,specularMap:De,specularColorMap:at,specularIntensityMap:L,transmission:oe,transmissionMap:he,thicknessMap:q,gradientMap:Q,opaque:v.transparent===!1&&v.blending===vr&&v.alphaToCoverage===!1,alphaMap:ue,alphaTest:ce,alphaHash:Be,combine:v.combine,mapUv:$e&&p(v.map.channel),aoMapUv:bt&&p(v.aoMap.channel),lightMapUv:Ve&&p(v.lightMap.channel),bumpMapUv:Xe&&p(v.bumpMap.channel),normalMapUv:Ce&&p(v.normalMap.channel),displacementMapUv:ot&&p(v.displacementMap.channel),emissiveMapUv:Pe&&p(v.emissiveMap.channel),metalnessMapUv:A&&p(v.metalnessMap.channel),roughnessMapUv:x&&p(v.roughnessMap.channel),anisotropyMapUv:fe&&p(v.anisotropyMap.channel),clearcoatMapUv:Ye&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:te&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:me&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:He&&p(v.sheenRoughnessMap.channel),specularMapUv:De&&p(v.specularMap.channel),specularColorMapUv:at&&p(v.specularColorMap.channel),specularIntensityMapUv:L&&p(v.specularIntensityMap.channel),transmissionMapUv:he&&p(v.transmissionMap.channel),thicknessMapUv:q&&p(v.thicknessMap.channel),alphaMapUv:ue&&p(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Ce||V),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!F.attributes.uv&&($e||ue),fog:!!Y,useFog:v.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:h,skinning:G.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:_e,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:Rt,decodeVideoTexture:$e&&v.map.isVideoTexture===!0&&je.getTransfer(v.map.colorSpace)===dt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===tn,flipSided:v.side===Dt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ft&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&v.extensions.multiDraw===!0||Ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return qe.vertexUv1s=c.has(1),qe.vertexUv2s=c.has(2),qe.vertexUv3s=c.has(3),c.clear(),qe}function y(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const B in v.defines)S.push(B),S.push(v.defines[B]);return v.isRawShaderMaterial===!1&&(M(S,v),T(S,v),S.push(n.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function M(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function T(v,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),v.push(a.mask)}function C(v){const S=_[v.type];let B;if(S){const O=Sn[S];B=vf.clone(O.uniforms)}else B=v.uniforms;return B}function R(v,S){let B;for(let O=0,G=u.length;O<G;O++){const Y=u[O];if(Y.cacheKey===S){B=Y,++B.usedTimes;break}}return B===void 0&&(B=new wx(n,S,v,s),u.push(B)),B}function w(v){if(--v.usedTimes===0){const S=u.indexOf(v);u[S]=u[u.length-1],u.pop(),v.destroy()}}function I(v){l.remove(v)}function W(){l.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:C,acquireProgram:R,releaseProgram:w,releaseShaderCache:I,programs:u,dispose:W}}function Ix(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Px(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function gd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function _d(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,h,f,g,_,p){let m=n[e];return m===void 0?(m={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},n[e]=m):(m.id=d.id,m.object=d,m.geometry=h,m.material=f,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=_,m.group=p),e++,m}function a(d,h,f,g,_,p){const m=o(d,h,f,g,_,p);f.transmission>0?i.push(m):f.transparent===!0?r.push(m):t.push(m)}function l(d,h,f,g,_,p){const m=o(d,h,f,g,_,p);f.transmission>0?i.unshift(m):f.transparent===!0?r.unshift(m):t.unshift(m)}function c(d,h){t.length>1&&t.sort(d||Px),i.length>1&&i.sort(h||gd),r.length>1&&r.sort(h||gd)}function u(){for(let d=e,h=n.length;d<h;d++){const f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Lx(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new _d,n.set(i,[o])):r>=s.length?(o=new _d,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Nx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new ye};break;case"SpotLight":t={position:new b,direction:new b,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":t={color:new ye,position:new b,halfWidth:new b,halfHeight:new b};break}return n[e.id]=t,t}}}function Ux(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Dx=0;function Ox(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Fx(n){const e=new Nx,t=Ux(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new b);const r=new b,s=new Te,o=new Te;function a(c){let u=0,d=0,h=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,y=0,M=0,T=0,C=0,R=0,w=0;c.sort(Ox);for(let W=0,v=c.length;W<v;W++){const S=c[W],B=S.color,O=S.intensity,G=S.distance,Y=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)u+=B.r*O,d+=B.g*O,h+=B.b*O;else if(S.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(S.sh.coefficients[F],O);w++}else if(S.isDirectionalLight){const F=e.get(S);if(F.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const j=S.shadow,X=t.get(S);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,i.directionalShadow[f]=X,i.directionalShadowMap[f]=Y,i.directionalShadowMatrix[f]=S.shadow.matrix,y++}i.directional[f]=F,f++}else if(S.isSpotLight){const F=e.get(S);F.position.setFromMatrixPosition(S.matrixWorld),F.color.copy(B).multiplyScalar(O),F.distance=G,F.coneCos=Math.cos(S.angle),F.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),F.decay=S.decay,i.spot[_]=F;const j=S.shadow;if(S.map&&(i.spotLightMap[C]=S.map,C++,j.updateMatrices(S),S.castShadow&&R++),i.spotLightMatrix[_]=j.matrix,S.castShadow){const X=t.get(S);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,i.spotShadow[_]=X,i.spotShadowMap[_]=Y,T++}_++}else if(S.isRectAreaLight){const F=e.get(S);F.color.copy(B).multiplyScalar(O),F.halfWidth.set(S.width*.5,0,0),F.halfHeight.set(0,S.height*.5,0),i.rectArea[p]=F,p++}else if(S.isPointLight){const F=e.get(S);if(F.color.copy(S.color).multiplyScalar(S.intensity),F.distance=S.distance,F.decay=S.decay,S.castShadow){const j=S.shadow,X=t.get(S);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,X.shadowCameraNear=j.camera.near,X.shadowCameraFar=j.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=S.shadow.matrix,M++}i.point[g]=F,g++}else if(S.isHemisphereLight){const F=e.get(S);F.skyColor.copy(S.color).multiplyScalar(O),F.groundColor.copy(S.groundColor).multiplyScalar(O),i.hemi[m]=F,m++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const I=i.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==p||I.hemiLength!==m||I.numDirectionalShadows!==y||I.numPointShadows!==M||I.numSpotShadows!==T||I.numSpotMaps!==C||I.numLightProbes!==w)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=T+C-R,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=w,I.directionalLength=f,I.pointLength=g,I.spotLength=_,I.rectAreaLength=p,I.hemiLength=m,I.numDirectionalShadows=y,I.numPointShadows=M,I.numSpotShadows=T,I.numSpotMaps=C,I.numLightProbes=w,i.version=Dx++)}function l(c,u){let d=0,h=0,f=0,g=0,_=0;const p=u.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const M=c[m];if(M.isDirectionalLight){const T=i.directional[d];T.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),d++}else if(M.isSpotLight){const T=i.spot[f];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),f++}else if(M.isRectAreaLight){const T=i.rectArea[g];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(p),o.identity(),s.copy(M.matrixWorld),s.premultiply(p),o.extractRotation(s),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const T=i.point[h];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(p),h++}else if(M.isHemisphereLight){const T=i.hemi[_];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:i}}function vd(n){const e=new Fx(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Bx(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new vd(n),e.set(r,[a])):s>=o.length?(a=new vd(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class kx extends mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Vx extends mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Hx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Gx(n,e,t){let i=new Qc;const r=new Fe,s=new Fe,o=new Ze,a=new kx({depthPacking:Mm}),l=new Vx,c={},u=t.maxTextureSize,d={[zn]:Dt,[Dt]:zn,[tn]:tn},h=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:Hx,fragmentShader:zx}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new pt;g.setAttribute("position",new ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new lt(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qh;let m=this.type;this.render=function(R,w,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const W=n.getRenderTarget(),v=n.getActiveCubeFace(),S=n.getActiveMipmapLevel(),B=n.state;B.setBlending(hi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const O=m!==On&&this.type===On,G=m===On&&this.type!==On;for(let Y=0,F=R.length;Y<F;Y++){const j=R[Y],X=j.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const se=X.getFrameExtents();if(r.multiply(se),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/se.x),r.x=s.x*se.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/se.y),r.y=s.y*se.y,X.mapSize.y=s.y)),X.map===null||O===!0||G===!0){const K=this.type!==On?{minFilter:Vt,magFilter:Vt}:{};X.map!==null&&X.map.dispose(),X.map=new ki(r.x,r.y,K),X.map.texture.name=j.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const U=X.getViewportCount();for(let K=0;K<U;K++){const ne=X.getViewport(K);o.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),B.viewport(o),X.updateMatrices(j,K),i=X.getFrustum(),T(w,I,X.camera,j,this.type)}X.isPointLightShadow!==!0&&this.type===On&&y(X,I),X.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(W,v,S)};function y(R,w){const I=e.update(_);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ki(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(w,null,I,h,_,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(w,null,I,f,_,null)}function M(R,w,I,W){let v=null;const S=I.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(S!==void 0)v=S;else if(v=I.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const B=v.uuid,O=w.uuid;let G=c[B];G===void 0&&(G={},c[B]=G);let Y=G[O];Y===void 0&&(Y=v.clone(),G[O]=Y,w.addEventListener("dispose",C)),v=Y}if(v.visible=w.visible,v.wireframe=w.wireframe,W===On?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:d[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,I.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const B=n.properties.get(v);B.light=I}return v}function T(R,w,I,W,v){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&v===On)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,R.matrixWorld);const O=e.update(R),G=R.material;if(Array.isArray(G)){const Y=O.groups;for(let F=0,j=Y.length;F<j;F++){const X=Y[F],se=G[X.materialIndex];if(se&&se.visible){const U=M(R,se,W,v);R.onBeforeShadow(n,R,w,I,O,U,X),n.renderBufferDirect(I,null,O,U,R,X),R.onAfterShadow(n,R,w,I,O,U,X)}}}else if(G.visible){const Y=M(R,G,W,v);R.onBeforeShadow(n,R,w,I,O,Y,null),n.renderBufferDirect(I,null,O,Y,R,null),R.onAfterShadow(n,R,w,I,O,Y,null)}}const B=R.children;for(let O=0,G=B.length;O<G;O++)T(B[O],w,I,W,v)}function C(R){R.target.removeEventListener("dispose",C);for(const I in c){const W=c[I],v=R.target.uuid;v in W&&(W[v].dispose(),delete W[v])}}}const Wx={[kl]:Vl,[Hl]:Wl,[zl]:Xl,[Sr]:Gl,[Vl]:kl,[Wl]:Hl,[Xl]:zl,[Gl]:Sr};function Xx(n){function e(){let L=!1;const he=new Ze;let q=null;const Q=new Ze(0,0,0,0);return{setMask:function(ue){q!==ue&&!L&&(n.colorMask(ue,ue,ue,ue),q=ue)},setLocked:function(ue){L=ue},setClear:function(ue,ce,Be,ft,Rt){Rt===!0&&(ue*=ft,ce*=ft,Be*=ft),he.set(ue,ce,Be,ft),Q.equals(he)===!1&&(n.clearColor(ue,ce,Be,ft),Q.copy(he))},reset:function(){L=!1,q=null,Q.set(-1,0,0,0)}}}function t(){let L=!1,he=!1,q=null,Q=null,ue=null;return{setReversed:function(ce){he=ce},setTest:function(ce){ce?ae(n.DEPTH_TEST):le(n.DEPTH_TEST)},setMask:function(ce){q!==ce&&!L&&(n.depthMask(ce),q=ce)},setFunc:function(ce){if(he&&(ce=Wx[ce]),Q!==ce){switch(ce){case kl:n.depthFunc(n.NEVER);break;case Vl:n.depthFunc(n.ALWAYS);break;case Hl:n.depthFunc(n.LESS);break;case Sr:n.depthFunc(n.LEQUAL);break;case zl:n.depthFunc(n.EQUAL);break;case Gl:n.depthFunc(n.GEQUAL);break;case Wl:n.depthFunc(n.GREATER);break;case Xl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Q=ce}},setLocked:function(ce){L=ce},setClear:function(ce){ue!==ce&&(n.clearDepth(ce),ue=ce)},reset:function(){L=!1,q=null,Q=null,ue=null}}}function i(){let L=!1,he=null,q=null,Q=null,ue=null,ce=null,Be=null,ft=null,Rt=null;return{setTest:function(qe){L||(qe?ae(n.STENCIL_TEST):le(n.STENCIL_TEST))},setMask:function(qe){he!==qe&&!L&&(n.stencilMask(qe),he=qe)},setFunc:function(qe,Ct,rn){(q!==qe||Q!==Ct||ue!==rn)&&(n.stencilFunc(qe,Ct,rn),q=qe,Q=Ct,ue=rn)},setOp:function(qe,Ct,rn){(ce!==qe||Be!==Ct||ft!==rn)&&(n.stencilOp(qe,Ct,rn),ce=qe,Be=Ct,ft=rn)},setLocked:function(qe){L=qe},setClear:function(qe){Rt!==qe&&(n.clearStencil(qe),Rt=qe)},reset:function(){L=!1,he=null,q=null,Q=null,ue=null,ce=null,Be=null,ft=null,Rt=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,h=[],f=null,g=!1,_=null,p=null,m=null,y=null,M=null,T=null,C=null,R=new ye(0,0,0),w=0,I=!1,W=null,v=null,S=null,B=null,O=null;const G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,F=0;const j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(j)[1]),Y=F>=1):j.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Y=F>=2);let X=null,se={};const U=n.getParameter(n.SCISSOR_BOX),K=n.getParameter(n.VIEWPORT),ne=new Ze().fromArray(U),_e=new Ze().fromArray(K);function H(L,he,q,Q){const ue=new Uint8Array(4),ce=n.createTexture();n.bindTexture(L,ce),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Be=0;Be<q;Be++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(he,0,n.RGBA,1,1,Q,0,n.RGBA,n.UNSIGNED_BYTE,ue):n.texImage2D(he+Be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ue);return ce}const $={};$[n.TEXTURE_2D]=H(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=H(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=H(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=H(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ae(n.DEPTH_TEST),s.setFunc(Sr),Ve(!1),Xe(Eu),ae(n.CULL_FACE),P(hi);function ae(L){c[L]!==!0&&(n.enable(L),c[L]=!0)}function le(L){c[L]!==!1&&(n.disable(L),c[L]=!1)}function Re(L,he){return u[L]!==he?(n.bindFramebuffer(L,he),u[L]=he,L===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=he),L===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=he),!0):!1}function be(L,he){let q=h,Q=!1;if(L){q=d.get(he),q===void 0&&(q=[],d.set(he,q));const ue=L.textures;if(q.length!==ue.length||q[0]!==n.COLOR_ATTACHMENT0){for(let ce=0,Be=ue.length;ce<Be;ce++)q[ce]=n.COLOR_ATTACHMENT0+ce;q.length=ue.length,Q=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,Q=!0);Q&&n.drawBuffers(q)}function Ge(L){return f!==L?(n.useProgram(L),f=L,!0):!1}const $e={[Pi]:n.FUNC_ADD,[Xp]:n.FUNC_SUBTRACT,[qp]:n.FUNC_REVERSE_SUBTRACT};$e[Yp]=n.MIN,$e[jp]=n.MAX;const We={[Kp]:n.ZERO,[$p]:n.ONE,[Zp]:n.SRC_COLOR,[Fl]:n.SRC_ALPHA,[im]:n.SRC_ALPHA_SATURATE,[tm]:n.DST_COLOR,[Qp]:n.DST_ALPHA,[Jp]:n.ONE_MINUS_SRC_COLOR,[Bl]:n.ONE_MINUS_SRC_ALPHA,[nm]:n.ONE_MINUS_DST_COLOR,[em]:n.ONE_MINUS_DST_ALPHA,[rm]:n.CONSTANT_COLOR,[sm]:n.ONE_MINUS_CONSTANT_COLOR,[om]:n.CONSTANT_ALPHA,[am]:n.ONE_MINUS_CONSTANT_ALPHA};function P(L,he,q,Q,ue,ce,Be,ft,Rt,qe){if(L===hi){g===!0&&(le(n.BLEND),g=!1);return}if(g===!1&&(ae(n.BLEND),g=!0),L!==Wp){if(L!==_||qe!==I){if((p!==Pi||M!==Pi)&&(n.blendEquation(n.FUNC_ADD),p=Pi,M=Pi),qe)switch(L){case vr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Tu:n.blendFunc(n.ONE,n.ONE);break;case wu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Au:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case vr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Tu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case wu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Au:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}m=null,y=null,T=null,C=null,R.set(0,0,0),w=0,_=L,I=qe}return}ue=ue||he,ce=ce||q,Be=Be||Q,(he!==p||ue!==M)&&(n.blendEquationSeparate($e[he],$e[ue]),p=he,M=ue),(q!==m||Q!==y||ce!==T||Be!==C)&&(n.blendFuncSeparate(We[q],We[Q],We[ce],We[Be]),m=q,y=Q,T=ce,C=Be),(ft.equals(R)===!1||Rt!==w)&&(n.blendColor(ft.r,ft.g,ft.b,Rt),R.copy(ft),w=Rt),_=L,I=!1}function bt(L,he){L.side===tn?le(n.CULL_FACE):ae(n.CULL_FACE);let q=L.side===Dt;he&&(q=!q),Ve(q),L.blending===vr&&L.transparent===!1?P(hi):P(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),s.setFunc(L.depthFunc),s.setTest(L.depthTest),s.setMask(L.depthWrite),r.setMask(L.colorWrite);const Q=L.stencilWrite;o.setTest(Q),Q&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ot(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ae(n.SAMPLE_ALPHA_TO_COVERAGE):le(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(L){W!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),W=L)}function Xe(L){L!==zp?(ae(n.CULL_FACE),L!==v&&(L===Eu?n.cullFace(n.BACK):L===Gp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):le(n.CULL_FACE),v=L}function Ce(L){L!==S&&(Y&&n.lineWidth(L),S=L)}function ot(L,he,q){L?(ae(n.POLYGON_OFFSET_FILL),(B!==he||O!==q)&&(n.polygonOffset(he,q),B=he,O=q)):le(n.POLYGON_OFFSET_FILL)}function Pe(L){L?ae(n.SCISSOR_TEST):le(n.SCISSOR_TEST)}function A(L){L===void 0&&(L=n.TEXTURE0+G-1),X!==L&&(n.activeTexture(L),X=L)}function x(L,he,q){q===void 0&&(X===null?q=n.TEXTURE0+G-1:q=X);let Q=se[q];Q===void 0&&(Q={type:void 0,texture:void 0},se[q]=Q),(Q.type!==L||Q.texture!==he)&&(X!==q&&(n.activeTexture(q),X=q),n.bindTexture(L,he||$[L]),Q.type=L,Q.texture=he)}function V(){const L=se[X];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ye(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ie(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Le(L){ne.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),ne.copy(L))}function me(L){_e.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),_e.copy(L))}function He(L,he){let q=l.get(he);q===void 0&&(q=new WeakMap,l.set(he,q));let Q=q.get(L);Q===void 0&&(Q=n.getUniformBlockIndex(he,L.name),q.set(L,Q))}function De(L,he){const Q=l.get(he).get(L);a.get(he)!==Q&&(n.uniformBlockBinding(he,Q,L.__bindingPointIndex),a.set(he,Q))}function at(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},X=null,se={},u={},d=new WeakMap,h=[],f=null,g=!1,_=null,p=null,m=null,y=null,M=null,T=null,C=null,R=new ye(0,0,0),w=0,I=!1,W=null,v=null,S=null,B=null,O=null,ne.set(0,0,n.canvas.width,n.canvas.height),_e.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ae,disable:le,bindFramebuffer:Re,drawBuffers:be,useProgram:Ge,setBlending:P,setMaterial:bt,setFlipSided:Ve,setCullFace:Xe,setLineWidth:Ce,setPolygonOffset:ot,setScissorTest:Pe,activeTexture:A,bindTexture:x,unbindTexture:V,compressedTexImage2D:J,compressedTexImage3D:ee,texImage2D:pe,texImage3D:Ie,updateUBOMapping:He,uniformBlockBinding:De,texStorage2D:Ye,texStorage3D:te,texSubImage2D:Z,texSubImage3D:xe,compressedTexSubImage2D:oe,compressedTexSubImage3D:fe,scissor:Le,viewport:me,reset:at}}function xd(n,e,t,i){const r=qx(i);switch(t){case tf:return n*e;case rf:return n*e;case sf:return n*e*2;case qc:return n*e/r.components*r.byteLength;case Yc:return n*e/r.components*r.byteLength;case of:return n*e*2/r.components*r.byteLength;case jc:return n*e*2/r.components*r.byteLength;case nf:return n*e*3/r.components*r.byteLength;case nn:return n*e*4/r.components*r.byteLength;case Kc:return n*e*4/r.components*r.byteLength;case bo:case Ro:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Co:case Io:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Kl:case Zl:return Math.max(n,16)*Math.max(e,8)/4;case jl:case $l:return Math.max(n,8)*Math.max(e,8)/2;case Jl:case Ql:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ec:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case tc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ic:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case rc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case sc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case oc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ac:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case lc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case cc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case uc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case dc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case hc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case fc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case pc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Po:case mc:case gc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case af:case _c:return Math.ceil(n/4)*Math.ceil(e/4)*8;case vc:case xc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function qx(n){switch(n){case Gn:case Jh:return{byteLength:1,components:1};case Ts:case Qh:case Us:return{byteLength:2,components:1};case Wc:case Xc:return{byteLength:2,components:4};case Bi:case Gc:case fn:return{byteLength:4,components:1};case ef:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Yx(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Fe,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,x){return f?new OffscreenCanvas(A,x):bs("canvas")}function _(A,x,V){let J=1;const ee=Pe(A);if((ee.width>V||ee.height>V)&&(J=V/Math.max(ee.width,ee.height)),J<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Z=Math.floor(J*ee.width),xe=Math.floor(J*ee.height);d===void 0&&(d=g(Z,xe));const oe=x?g(Z,xe):d;return oe.width=Z,oe.height=xe,oe.getContext("2d").drawImage(A,0,0,Z,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Z+"x"+xe+")."),oe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),A;return A}function p(A){return A.generateMipmaps&&A.minFilter!==Vt&&A.minFilter!==Kt}function m(A){n.generateMipmap(A)}function y(A,x,V,J,ee=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Z=x;if(x===n.RED&&(V===n.FLOAT&&(Z=n.R32F),V===n.HALF_FLOAT&&(Z=n.R16F),V===n.UNSIGNED_BYTE&&(Z=n.R8)),x===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(Z=n.R8UI),V===n.UNSIGNED_SHORT&&(Z=n.R16UI),V===n.UNSIGNED_INT&&(Z=n.R32UI),V===n.BYTE&&(Z=n.R8I),V===n.SHORT&&(Z=n.R16I),V===n.INT&&(Z=n.R32I)),x===n.RG&&(V===n.FLOAT&&(Z=n.RG32F),V===n.HALF_FLOAT&&(Z=n.RG16F),V===n.UNSIGNED_BYTE&&(Z=n.RG8)),x===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(Z=n.RG8UI),V===n.UNSIGNED_SHORT&&(Z=n.RG16UI),V===n.UNSIGNED_INT&&(Z=n.RG32UI),V===n.BYTE&&(Z=n.RG8I),V===n.SHORT&&(Z=n.RG16I),V===n.INT&&(Z=n.RG32I)),x===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),V===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),V===n.UNSIGNED_INT&&(Z=n.RGB32UI),V===n.BYTE&&(Z=n.RGB8I),V===n.SHORT&&(Z=n.RGB16I),V===n.INT&&(Z=n.RGB32I)),x===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),V===n.UNSIGNED_INT&&(Z=n.RGBA32UI),V===n.BYTE&&(Z=n.RGBA8I),V===n.SHORT&&(Z=n.RGBA16I),V===n.INT&&(Z=n.RGBA32I)),x===n.RGB&&V===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),x===n.RGBA){const xe=ee?Ko:je.getTransfer(J);V===n.FLOAT&&(Z=n.RGBA32F),V===n.HALF_FLOAT&&(Z=n.RGBA16F),V===n.UNSIGNED_BYTE&&(Z=xe===dt?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function M(A,x){let V;return A?x===null||x===Bi||x===Ar?V=n.DEPTH24_STENCIL8:x===fn?V=n.DEPTH32F_STENCIL8:x===Ts&&(V=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Bi||x===Ar?V=n.DEPTH_COMPONENT24:x===fn?V=n.DEPTH_COMPONENT32F:x===Ts&&(V=n.DEPTH_COMPONENT16),V}function T(A,x){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Vt&&A.minFilter!==Kt?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function C(A){const x=A.target;x.removeEventListener("dispose",C),w(x),x.isVideoTexture&&u.delete(x)}function R(A){const x=A.target;x.removeEventListener("dispose",R),W(x)}function w(A){const x=i.get(A);if(x.__webglInit===void 0)return;const V=A.source,J=h.get(V);if(J){const ee=J[x.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&I(A),Object.keys(J).length===0&&h.delete(V)}i.remove(A)}function I(A){const x=i.get(A);n.deleteTexture(x.__webglTexture);const V=A.source,J=h.get(V);delete J[x.__cacheKey],o.memory.textures--}function W(A){const x=i.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(x.__webglFramebuffer[J]))for(let ee=0;ee<x.__webglFramebuffer[J].length;ee++)n.deleteFramebuffer(x.__webglFramebuffer[J][ee]);else n.deleteFramebuffer(x.__webglFramebuffer[J]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[J])}else{if(Array.isArray(x.__webglFramebuffer))for(let J=0;J<x.__webglFramebuffer.length;J++)n.deleteFramebuffer(x.__webglFramebuffer[J]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let J=0;J<x.__webglColorRenderbuffer.length;J++)x.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[J]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const V=A.textures;for(let J=0,ee=V.length;J<ee;J++){const Z=i.get(V[J]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(V[J])}i.remove(A)}let v=0;function S(){v=0}function B(){const A=v;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),v+=1,A}function O(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function G(A,x){const V=i.get(A);if(A.isVideoTexture&&Ce(A),A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){const J=A.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(V,A,x);return}}t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+x)}function Y(A,x){const V=i.get(A);if(A.version>0&&V.__version!==A.version){_e(V,A,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+x)}function F(A,x){const V=i.get(A);if(A.version>0&&V.__version!==A.version){_e(V,A,x);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+x)}function j(A,x){const V=i.get(A);if(A.version>0&&V.__version!==A.version){H(V,A,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+x)}const X={[wr]:n.REPEAT,[oi]:n.CLAMP_TO_EDGE,[jo]:n.MIRRORED_REPEAT},se={[Vt]:n.NEAREST,[Zh]:n.NEAREST_MIPMAP_NEAREST,[ps]:n.NEAREST_MIPMAP_LINEAR,[Kt]:n.LINEAR,[Ao]:n.LINEAR_MIPMAP_NEAREST,[kn]:n.LINEAR_MIPMAP_LINEAR},U={[Sm]:n.NEVER,[Rm]:n.ALWAYS,[Em]:n.LESS,[cf]:n.LEQUAL,[Tm]:n.EQUAL,[bm]:n.GEQUAL,[wm]:n.GREATER,[Am]:n.NOTEQUAL};function K(A,x){if(x.type===fn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Kt||x.magFilter===Ao||x.magFilter===ps||x.magFilter===kn||x.minFilter===Kt||x.minFilter===Ao||x.minFilter===ps||x.minFilter===kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,X[x.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,X[x.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,X[x.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,se[x.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,se[x.minFilter]),x.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,U[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Vt||x.minFilter!==ps&&x.minFilter!==kn||x.type===fn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function ne(A,x){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",C));const J=x.source;let ee=h.get(J);ee===void 0&&(ee={},h.set(J,ee));const Z=O(x);if(Z!==A.__cacheKey){ee[Z]===void 0&&(ee[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ee[Z].usedTimes++;const xe=ee[A.__cacheKey];xe!==void 0&&(ee[A.__cacheKey].usedTimes--,xe.usedTimes===0&&I(x)),A.__cacheKey=Z,A.__webglTexture=ee[Z].texture}return V}function _e(A,x,V){let J=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(J=n.TEXTURE_3D);const ee=ne(A,x),Z=x.source;t.bindTexture(J,A.__webglTexture,n.TEXTURE0+V);const xe=i.get(Z);if(Z.version!==xe.__version||ee===!0){t.activeTexture(n.TEXTURE0+V);const oe=je.getPrimaries(je.workingColorSpace),fe=x.colorSpace===ri?null:je.getPrimaries(x.colorSpace),Ye=x.colorSpace===ri||oe===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let te=_(x.image,!1,r.maxTextureSize);te=ot(x,te);const pe=s.convert(x.format,x.colorSpace),Ie=s.convert(x.type);let Le=y(x.internalFormat,pe,Ie,x.colorSpace,x.isVideoTexture);K(J,x);let me;const He=x.mipmaps,De=x.isVideoTexture!==!0,at=xe.__version===void 0||ee===!0,L=Z.dataReady,he=T(x,te);if(x.isDepthTexture)Le=M(x.format===br,x.type),at&&(De?t.texStorage2D(n.TEXTURE_2D,1,Le,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,Le,te.width,te.height,0,pe,Ie,null));else if(x.isDataTexture)if(He.length>0){De&&at&&t.texStorage2D(n.TEXTURE_2D,he,Le,He[0].width,He[0].height);for(let q=0,Q=He.length;q<Q;q++)me=He[q],De?L&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,me.width,me.height,pe,Ie,me.data):t.texImage2D(n.TEXTURE_2D,q,Le,me.width,me.height,0,pe,Ie,me.data);x.generateMipmaps=!1}else De?(at&&t.texStorage2D(n.TEXTURE_2D,he,Le,te.width,te.height),L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,te.width,te.height,pe,Ie,te.data)):t.texImage2D(n.TEXTURE_2D,0,Le,te.width,te.height,0,pe,Ie,te.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){De&&at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,Le,He[0].width,He[0].height,te.depth);for(let q=0,Q=He.length;q<Q;q++)if(me=He[q],x.format!==nn)if(pe!==null)if(De){if(L)if(x.layerUpdates.size>0){const ue=xd(me.width,me.height,x.format,x.type);for(const ce of x.layerUpdates){const Be=me.data.subarray(ce*ue/me.data.BYTES_PER_ELEMENT,(ce+1)*ue/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,ce,me.width,me.height,1,pe,Be,0,0)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,me.width,me.height,te.depth,pe,me.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,Le,me.width,me.height,te.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?L&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,me.width,me.height,te.depth,pe,Ie,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,q,Le,me.width,me.height,te.depth,0,pe,Ie,me.data)}else{De&&at&&t.texStorage2D(n.TEXTURE_2D,he,Le,He[0].width,He[0].height);for(let q=0,Q=He.length;q<Q;q++)me=He[q],x.format!==nn?pe!==null?De?L&&t.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,me.width,me.height,pe,me.data):t.compressedTexImage2D(n.TEXTURE_2D,q,Le,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?L&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,me.width,me.height,pe,Ie,me.data):t.texImage2D(n.TEXTURE_2D,q,Le,me.width,me.height,0,pe,Ie,me.data)}else if(x.isDataArrayTexture)if(De){if(at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,Le,te.width,te.height,te.depth),L)if(x.layerUpdates.size>0){const q=xd(te.width,te.height,x.format,x.type);for(const Q of x.layerUpdates){const ue=te.data.subarray(Q*q/te.data.BYTES_PER_ELEMENT,(Q+1)*q/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Q,te.width,te.height,1,pe,Ie,ue)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,pe,Ie,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,te.width,te.height,te.depth,0,pe,Ie,te.data);else if(x.isData3DTexture)De?(at&&t.texStorage3D(n.TEXTURE_3D,he,Le,te.width,te.height,te.depth),L&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,pe,Ie,te.data)):t.texImage3D(n.TEXTURE_3D,0,Le,te.width,te.height,te.depth,0,pe,Ie,te.data);else if(x.isFramebufferTexture){if(at)if(De)t.texStorage2D(n.TEXTURE_2D,he,Le,te.width,te.height);else{let q=te.width,Q=te.height;for(let ue=0;ue<he;ue++)t.texImage2D(n.TEXTURE_2D,ue,Le,q,Q,0,pe,Ie,null),q>>=1,Q>>=1}}else if(He.length>0){if(De&&at){const q=Pe(He[0]);t.texStorage2D(n.TEXTURE_2D,he,Le,q.width,q.height)}for(let q=0,Q=He.length;q<Q;q++)me=He[q],De?L&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,pe,Ie,me):t.texImage2D(n.TEXTURE_2D,q,Le,pe,Ie,me);x.generateMipmaps=!1}else if(De){if(at){const q=Pe(te);t.texStorage2D(n.TEXTURE_2D,he,Le,q.width,q.height)}L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe,Ie,te)}else t.texImage2D(n.TEXTURE_2D,0,Le,pe,Ie,te);p(x)&&m(J),xe.__version=Z.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function H(A,x,V){if(x.image.length!==6)return;const J=ne(A,x),ee=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+V);const Z=i.get(ee);if(ee.version!==Z.__version||J===!0){t.activeTexture(n.TEXTURE0+V);const xe=je.getPrimaries(je.workingColorSpace),oe=x.colorSpace===ri?null:je.getPrimaries(x.colorSpace),fe=x.colorSpace===ri||xe===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Ye=x.isCompressedTexture||x.image[0].isCompressedTexture,te=x.image[0]&&x.image[0].isDataTexture,pe=[];for(let Q=0;Q<6;Q++)!Ye&&!te?pe[Q]=_(x.image[Q],!0,r.maxCubemapSize):pe[Q]=te?x.image[Q].image:x.image[Q],pe[Q]=ot(x,pe[Q]);const Ie=pe[0],Le=s.convert(x.format,x.colorSpace),me=s.convert(x.type),He=y(x.internalFormat,Le,me,x.colorSpace),De=x.isVideoTexture!==!0,at=Z.__version===void 0||J===!0,L=ee.dataReady;let he=T(x,Ie);K(n.TEXTURE_CUBE_MAP,x);let q;if(Ye){De&&at&&t.texStorage2D(n.TEXTURE_CUBE_MAP,he,He,Ie.width,Ie.height);for(let Q=0;Q<6;Q++){q=pe[Q].mipmaps;for(let ue=0;ue<q.length;ue++){const ce=q[ue];x.format!==nn?Le!==null?De?L&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ue,0,0,ce.width,ce.height,Le,ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ue,He,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ue,0,0,ce.width,ce.height,Le,me,ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ue,He,ce.width,ce.height,0,Le,me,ce.data)}}}else{if(q=x.mipmaps,De&&at){q.length>0&&he++;const Q=Pe(pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,he,He,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(te){De?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,pe[Q].width,pe[Q].height,Le,me,pe[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,He,pe[Q].width,pe[Q].height,0,Le,me,pe[Q].data);for(let ue=0;ue<q.length;ue++){const Be=q[ue].image[Q].image;De?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ue+1,0,0,Be.width,Be.height,Le,me,Be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ue+1,He,Be.width,Be.height,0,Le,me,Be.data)}}else{De?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Le,me,pe[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,He,Le,me,pe[Q]);for(let ue=0;ue<q.length;ue++){const ce=q[ue];De?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ue+1,0,0,Le,me,ce.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ue+1,He,Le,me,ce.image[Q])}}}p(x)&&m(n.TEXTURE_CUBE_MAP),Z.__version=ee.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function $(A,x,V,J,ee,Z){const xe=s.convert(V.format,V.colorSpace),oe=s.convert(V.type),fe=y(V.internalFormat,xe,oe,V.colorSpace);if(!i.get(x).__hasExternalTextures){const te=Math.max(1,x.width>>Z),pe=Math.max(1,x.height>>Z);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,Z,fe,te,pe,x.depth,0,xe,oe,null):t.texImage2D(ee,Z,fe,te,pe,0,xe,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),Xe(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,ee,i.get(V).__webglTexture,0,Ve(x)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,ee,i.get(V).__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(A,x,V){if(n.bindRenderbuffer(n.RENDERBUFFER,A),x.depthBuffer){const J=x.depthTexture,ee=J&&J.isDepthTexture?J.type:null,Z=M(x.stencilBuffer,ee),xe=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=Ve(x);Xe(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,Z,x.width,x.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,Z,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Z,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xe,n.RENDERBUFFER,A)}else{const J=x.textures;for(let ee=0;ee<J.length;ee++){const Z=J[ee],xe=s.convert(Z.format,Z.colorSpace),oe=s.convert(Z.type),fe=y(Z.internalFormat,xe,oe,Z.colorSpace),Ye=Ve(x);V&&Xe(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye,fe,x.width,x.height):Xe(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ye,fe,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,fe,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function le(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),G(x.depthTexture,0);const J=i.get(x.depthTexture).__webglTexture,ee=Ve(x);if(x.depthTexture.format===xr)Xe(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(x.depthTexture.format===br)Xe(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Re(A){const x=i.get(A),V=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const J=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),J){const ee=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,J.removeEventListener("dispose",ee)};J.addEventListener("dispose",ee),x.__depthDisposeCallback=ee}x.__boundDepthTexture=J}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");le(x.__webglFramebuffer,A)}else if(V){x.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[J]),x.__webglDepthbuffer[J]===void 0)x.__webglDepthbuffer[J]=n.createRenderbuffer(),ae(x.__webglDepthbuffer[J],A,!1);else{const ee=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),ae(x.__webglDepthbuffer,A,!1);else{const J=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,ee)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function be(A,x,V){const J=i.get(A);x!==void 0&&$(J.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&Re(A)}function Ge(A){const x=A.texture,V=i.get(A),J=i.get(x);A.addEventListener("dispose",R);const ee=A.textures,Z=A.isWebGLCubeRenderTarget===!0,xe=ee.length>1;if(xe||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=x.version,o.memory.textures++),Z){V.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer[oe]=[];for(let fe=0;fe<x.mipmaps.length;fe++)V.__webglFramebuffer[oe][fe]=n.createFramebuffer()}else V.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer=[];for(let oe=0;oe<x.mipmaps.length;oe++)V.__webglFramebuffer[oe]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(xe)for(let oe=0,fe=ee.length;oe<fe;oe++){const Ye=i.get(ee[oe]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&Xe(A)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let oe=0;oe<ee.length;oe++){const fe=ee[oe];V.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[oe]);const Ye=s.convert(fe.format,fe.colorSpace),te=s.convert(fe.type),pe=y(fe.internalFormat,Ye,te,fe.colorSpace,A.isXRRenderTarget===!0),Ie=Ve(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,pe,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,V.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),ae(V.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),K(n.TEXTURE_CUBE_MAP,x);for(let oe=0;oe<6;oe++)if(x.mipmaps&&x.mipmaps.length>0)for(let fe=0;fe<x.mipmaps.length;fe++)$(V.__webglFramebuffer[oe][fe],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,fe);else $(V.__webglFramebuffer[oe],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);p(x)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let oe=0,fe=ee.length;oe<fe;oe++){const Ye=ee[oe],te=i.get(Ye);t.bindTexture(n.TEXTURE_2D,te.__webglTexture),K(n.TEXTURE_2D,Ye),$(V.__webglFramebuffer,A,Ye,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,0),p(Ye)&&m(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(oe=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,J.__webglTexture),K(oe,x),x.mipmaps&&x.mipmaps.length>0)for(let fe=0;fe<x.mipmaps.length;fe++)$(V.__webglFramebuffer[fe],A,x,n.COLOR_ATTACHMENT0,oe,fe);else $(V.__webglFramebuffer,A,x,n.COLOR_ATTACHMENT0,oe,0);p(x)&&m(oe),t.unbindTexture()}A.depthBuffer&&Re(A)}function $e(A){const x=A.textures;for(let V=0,J=x.length;V<J;V++){const ee=x[V];if(p(ee)){const Z=A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,xe=i.get(ee).__webglTexture;t.bindTexture(Z,xe),m(Z),t.unbindTexture()}}}const We=[],P=[];function bt(A){if(A.samples>0){if(Xe(A)===!1){const x=A.textures,V=A.width,J=A.height;let ee=n.COLOR_BUFFER_BIT;const Z=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(A),oe=x.length>1;if(oe)for(let fe=0;fe<x.length;fe++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let fe=0;fe<x.length;fe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[fe]);const Ye=i.get(x[fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ye,0)}n.blitFramebuffer(0,0,V,J,0,0,V,J,ee,n.NEAREST),l===!0&&(We.length=0,P.length=0,We.push(n.COLOR_ATTACHMENT0+fe),A.depthBuffer&&A.resolveDepthBuffer===!1&&(We.push(Z),P.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,P)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,We))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let fe=0;fe<x.length;fe++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,xe.__webglColorRenderbuffer[fe]);const Ye=i.get(x[fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,Ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const x=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function Ve(A){return Math.min(r.maxSamples,A.samples)}function Xe(A){const x=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ce(A){const x=o.render.frame;u.get(A)!==x&&(u.set(A,x),A.update())}function ot(A,x){const V=A.colorSpace,J=A.format,ee=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||V!==At&&V!==ri&&(je.getTransfer(V)===dt?(J!==nn||ee!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),x}function Pe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=S,this.setTexture2D=G,this.setTexture2DArray=Y,this.setTexture3D=F,this.setTextureCube=j,this.rebindTextures=be,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=$,this.useMultisampledRTT=Xe}function jx(n,e){function t(i,r=ri){let s;const o=je.getTransfer(r);if(i===Gn)return n.UNSIGNED_BYTE;if(i===Wc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Xc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ef)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Jh)return n.BYTE;if(i===Qh)return n.SHORT;if(i===Ts)return n.UNSIGNED_SHORT;if(i===Gc)return n.INT;if(i===Bi)return n.UNSIGNED_INT;if(i===fn)return n.FLOAT;if(i===Us)return n.HALF_FLOAT;if(i===tf)return n.ALPHA;if(i===nf)return n.RGB;if(i===nn)return n.RGBA;if(i===rf)return n.LUMINANCE;if(i===sf)return n.LUMINANCE_ALPHA;if(i===xr)return n.DEPTH_COMPONENT;if(i===br)return n.DEPTH_STENCIL;if(i===qc)return n.RED;if(i===Yc)return n.RED_INTEGER;if(i===of)return n.RG;if(i===jc)return n.RG_INTEGER;if(i===Kc)return n.RGBA_INTEGER;if(i===bo||i===Ro||i===Co||i===Io)if(o===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===bo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===bo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ro)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Co)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Io)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===jl||i===Kl||i===$l||i===Zl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===jl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Kl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$l)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Zl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Jl||i===Ql||i===ec)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Jl||i===Ql)return o===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ec)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===tc||i===nc||i===ic||i===rc||i===sc||i===oc||i===ac||i===lc||i===cc||i===uc||i===dc||i===hc||i===fc||i===pc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===tc)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===nc)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ic)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===rc)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===sc)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===oc)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ac)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===lc)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===cc)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===uc)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===dc)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===hc)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fc)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===pc)return o===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Po||i===mc||i===gc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Po)return o===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===mc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===gc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===af||i===_c||i===vc||i===xc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Po)return s.COMPRESSED_RED_RGTC1_EXT;if(i===_c)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===vc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===xc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ar?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Kx extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class zt extends nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $x={type:"move"};class ll{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($x)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new zt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Zx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Qx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Et,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Wn({vertexShader:Zx,fragmentShader:Jx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lt(new Ma(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eM extends Fr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null;const _=new Qx,p=t.getContextAttributes();let m=null,y=null;const M=[],T=[],C=new Fe;let R=null;const w=new kt;w.layers.enable(1),w.viewport=new Ze;const I=new kt;I.layers.enable(2),I.viewport=new Ze;const W=[w,I],v=new Kx;v.layers.enable(1),v.layers.enable(2);let S=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let $=M[H];return $===void 0&&($=new ll,M[H]=$),$.getTargetRaySpace()},this.getControllerGrip=function(H){let $=M[H];return $===void 0&&($=new ll,M[H]=$),$.getGripSpace()},this.getHand=function(H){let $=M[H];return $===void 0&&($=new ll,M[H]=$),$.getHandSpace()};function O(H){const $=T.indexOf(H.inputSource);if($===-1)return;const ae=M[$];ae!==void 0&&(ae.update(H.inputSource,H.frame,c||o),ae.dispatchEvent({type:H.type,data:H.inputSource}))}function G(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",Y);for(let H=0;H<M.length;H++){const $=T[H];$!==null&&(T[H]=null,M[H].disconnect($))}S=null,B=null,_.reset(),e.setRenderTarget(m),f=null,h=null,d=null,r=null,y=null,_e.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",G),r.addEventListener("inputsourceschange",Y),p.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const $={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,$),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new ki(f.framebufferWidth,f.framebufferHeight,{format:nn,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let $=null,ae=null,le=null;p.depth&&(le=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=p.stencil?br:xr,ae=p.stencil?Ar:Bi);const Re={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(Re),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new ki(h.textureWidth,h.textureHeight,{format:nn,type:Gn,depthTexture:new Sf(h.textureWidth,h.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),_e.setContext(r),_e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(H){for(let $=0;$<H.removed.length;$++){const ae=H.removed[$],le=T.indexOf(ae);le>=0&&(T[le]=null,M[le].disconnect(ae))}for(let $=0;$<H.added.length;$++){const ae=H.added[$];let le=T.indexOf(ae);if(le===-1){for(let be=0;be<M.length;be++)if(be>=T.length){T.push(ae),le=be;break}else if(T[be]===null){T[be]=ae,le=be;break}if(le===-1)break}const Re=M[le];Re&&Re.connect(ae)}}const F=new b,j=new b;function X(H,$,ae){F.setFromMatrixPosition($.matrixWorld),j.setFromMatrixPosition(ae.matrixWorld);const le=F.distanceTo(j),Re=$.projectionMatrix.elements,be=ae.projectionMatrix.elements,Ge=Re[14]/(Re[10]-1),$e=Re[14]/(Re[10]+1),We=(Re[9]+1)/Re[5],P=(Re[9]-1)/Re[5],bt=(Re[8]-1)/Re[0],Ve=(be[8]+1)/be[0],Xe=Ge*bt,Ce=Ge*Ve,ot=le/(-bt+Ve),Pe=ot*-bt;if($.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Pe),H.translateZ(ot),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),Re[10]===-1)H.projectionMatrix.copy($.projectionMatrix),H.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const A=Ge+ot,x=$e+ot,V=Xe-Pe,J=Ce+(le-Pe),ee=We*$e/x*A,Z=P*$e/x*A;H.projectionMatrix.makePerspective(V,J,ee,Z,A,x),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function se(H,$){$===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices($.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;let $=H.near,ae=H.far;_.texture!==null&&(_.depthNear>0&&($=_.depthNear),_.depthFar>0&&(ae=_.depthFar)),v.near=I.near=w.near=$,v.far=I.far=w.far=ae,(S!==v.near||B!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),S=v.near,B=v.far);const le=H.parent,Re=v.cameras;se(v,le);for(let be=0;be<Re.length;be++)se(Re[be],le);Re.length===2?X(v,w,I):v.projectionMatrix.copy(w.projectionMatrix),U(H,v,le)};function U(H,$,ae){ae===null?H.matrix.copy($.matrixWorld):(H.matrix.copy(ae.matrixWorld),H.matrix.invert(),H.matrix.multiply($.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy($.projectionMatrix),H.projectionMatrixInverse.copy($.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Rr*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(H){l=H,h!==null&&(h.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let K=null;function ne(H,$){if(u=$.getViewerPose(c||o),g=$,u!==null){const ae=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let le=!1;ae.length!==v.cameras.length&&(v.cameras.length=0,le=!0);for(let be=0;be<ae.length;be++){const Ge=ae[be];let $e=null;if(f!==null)$e=f.getViewport(Ge);else{const P=d.getViewSubImage(h,Ge);$e=P.viewport,be===0&&(e.setRenderTargetTextures(y,P.colorTexture,h.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(y))}let We=W[be];We===void 0&&(We=new kt,We.layers.enable(be),We.viewport=new Ze,W[be]=We),We.matrix.fromArray(Ge.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Ge.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set($e.x,$e.y,$e.width,$e.height),be===0&&(v.matrix.copy(We.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),le===!0&&v.cameras.push(We)}const Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const be=d.getDepthInformation(ae[0]);be&&be.isValid&&be.texture&&_.init(e,be,r.renderState)}}for(let ae=0;ae<M.length;ae++){const le=T[ae],Re=M[ae];le!==null&&Re!==void 0&&Re.update(le,$,c||o)}K&&K(H,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),g=null}const _e=new yf;_e.setAnimationLoop(ne),this.setAnimationLoop=function(H){K=H},this.dispose=function(){}}}const Si=new $t,tM=new Te;function nM(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,_f(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,y,M,T){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),d(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,T)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,y,M):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Dt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Dt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=e.get(m),M=y.envMap,T=y.envMapRotation;M&&(p.envMap.value=M,Si.copy(T),Si.x*=-1,Si.y*=-1,Si.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),p.envMapRotation.value.setFromMatrix4(tM.makeRotationFromEuler(Si)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=M*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Dt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const y=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function iM(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){const T=M.program;i.uniformBlockBinding(y,T)}function c(y,M){let T=r[y.id];T===void 0&&(g(y),T=u(y),r[y.id]=T,y.addEventListener("dispose",p));const C=M.program;i.updateUBOMapping(y,C);const R=e.render.frame;s[y.id]!==R&&(h(y),s[y.id]=R)}function u(y){const M=d();y.__bindingPointIndex=M;const T=n.createBuffer(),C=y.__size,R=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,C,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,T),T}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const M=r[y.id],T=y.uniforms,C=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let R=0,w=T.length;R<w;R++){const I=Array.isArray(T[R])?T[R]:[T[R]];for(let W=0,v=I.length;W<v;W++){const S=I[W];if(f(S,R,W,C)===!0){const B=S.__offset,O=Array.isArray(S.value)?S.value:[S.value];let G=0;for(let Y=0;Y<O.length;Y++){const F=O[Y],j=_(F);typeof F=="number"||typeof F=="boolean"?(S.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,B+G,S.__data)):F.isMatrix3?(S.__data[0]=F.elements[0],S.__data[1]=F.elements[1],S.__data[2]=F.elements[2],S.__data[3]=0,S.__data[4]=F.elements[3],S.__data[5]=F.elements[4],S.__data[6]=F.elements[5],S.__data[7]=0,S.__data[8]=F.elements[6],S.__data[9]=F.elements[7],S.__data[10]=F.elements[8],S.__data[11]=0):(F.toArray(S.__data,G),G+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,S.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(y,M,T,C){const R=y.value,w=M+"_"+T;if(C[w]===void 0)return typeof R=="number"||typeof R=="boolean"?C[w]=R:C[w]=R.clone(),!0;{const I=C[w];if(typeof R=="number"||typeof R=="boolean"){if(I!==R)return C[w]=R,!0}else if(I.equals(R)===!1)return I.copy(R),!0}return!1}function g(y){const M=y.uniforms;let T=0;const C=16;for(let w=0,I=M.length;w<I;w++){const W=Array.isArray(M[w])?M[w]:[M[w]];for(let v=0,S=W.length;v<S;v++){const B=W[v],O=Array.isArray(B.value)?B.value:[B.value];for(let G=0,Y=O.length;G<Y;G++){const F=O[G],j=_(F),X=T%C,se=X%j.boundary,U=X+se;T+=se,U!==0&&C-U<j.storage&&(T+=C-U),B.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=T,T+=j.storage}}}const R=T%C;return R>0&&(T+=C-R),y.__size=T,y.__cache={},this}function _(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function p(y){const M=y.target;M.removeEventListener("dispose",p);const T=o.indexOf(M.__bindingPointIndex);o.splice(T,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function m(){for(const y in r)n.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:m}}class rM{constructor(e={}){const{canvas:t=qm(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nt,this.toneMapping=fi,this.toneMappingExposure=1;const M=this;let T=!1,C=0,R=0,w=null,I=-1,W=null;const v=new Ze,S=new Ze;let B=null;const O=new ye(0);let G=0,Y=t.width,F=t.height,j=1,X=null,se=null;const U=new Ze(0,0,Y,F),K=new Ze(0,0,Y,F);let ne=!1;const _e=new Qc;let H=!1,$=!1;const ae=new Te,le=new Te,Re=new b,be=new Ze,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function We(){return w===null?j:1}let P=i;function bt(E,N){return t.getContext(E,N)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Fi}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",ce,!1),P===null){const N="webgl2";if(P=bt(N,E),P===null)throw bt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ve,Xe,Ce,ot,Pe,A,x,V,J,ee,Z,xe,oe,fe,Ye,te,pe,Ie,Le,me,He,De,at,L;function he(){Ve=new c0(P),Ve.init(),De=new jx(P,Ve),Xe=new i0(P,Ve,e,De),Ce=new Xx(P),Xe.reverseDepthBuffer&&Ce.buffers.depth.setReversed(!0),ot=new h0(P),Pe=new Ix,A=new Yx(P,Ve,Ce,Pe,Xe,De,ot),x=new s0(M),V=new l0(M),J=new xg(P),at=new t0(P,J),ee=new u0(P,J,ot,at),Z=new p0(P,ee,J,ot),Le=new f0(P,Xe,A),te=new r0(Pe),xe=new Cx(M,x,V,Ve,Xe,at,te),oe=new nM(M,Pe),fe=new Lx,Ye=new Bx(Ve),Ie=new e0(M,x,V,Ce,Z,h,l),pe=new Gx(M,Z,Xe),L=new iM(P,ot,Xe,Ce),me=new n0(P,Ve,ot),He=new d0(P,Ve,ot),ot.programs=xe.programs,M.capabilities=Xe,M.extensions=Ve,M.properties=Pe,M.renderLists=fe,M.shadowMap=pe,M.state=Ce,M.info=ot}he();const q=new eM(M,P);this.xr=q,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const E=Ve.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ve.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(E){E!==void 0&&(j=E,this.setSize(Y,F,!1))},this.getSize=function(E){return E.set(Y,F)},this.setSize=function(E,N,k=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=E,F=N,t.width=Math.floor(E*j),t.height=Math.floor(N*j),k===!0&&(t.style.width=E+"px",t.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(Y*j,F*j).floor()},this.setDrawingBufferSize=function(E,N,k){Y=E,F=N,j=k,t.width=Math.floor(E*k),t.height=Math.floor(N*k),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(v)},this.getViewport=function(E){return E.copy(U)},this.setViewport=function(E,N,k,z){E.isVector4?U.set(E.x,E.y,E.z,E.w):U.set(E,N,k,z),Ce.viewport(v.copy(U).multiplyScalar(j).round())},this.getScissor=function(E){return E.copy(K)},this.setScissor=function(E,N,k,z){E.isVector4?K.set(E.x,E.y,E.z,E.w):K.set(E,N,k,z),Ce.scissor(S.copy(K).multiplyScalar(j).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(E){Ce.setScissorTest(ne=E)},this.setOpaqueSort=function(E){X=E},this.setTransparentSort=function(E){se=E},this.getClearColor=function(E){return E.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(E=!0,N=!0,k=!0){let z=0;if(E){let D=!1;if(w!==null){const ie=w.texture.format;D=ie===Kc||ie===jc||ie===Yc}if(D){const ie=w.texture.type,de=ie===Gn||ie===Bi||ie===Ts||ie===Ar||ie===Wc||ie===Xc,ge=Ie.getClearColor(),ve=Ie.getClearAlpha(),Ne=ge.r,Ue=ge.g,Me=ge.b;de?(f[0]=Ne,f[1]=Ue,f[2]=Me,f[3]=ve,P.clearBufferuiv(P.COLOR,0,f)):(g[0]=Ne,g[1]=Ue,g[2]=Me,g[3]=ve,P.clearBufferiv(P.COLOR,0,g))}else z|=P.COLOR_BUFFER_BIT}N&&(z|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),k&&(z|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),fe.dispose(),Ye.dispose(),Pe.dispose(),x.dispose(),V.dispose(),Z.dispose(),at.dispose(),L.dispose(),xe.dispose(),q.dispose(),q.removeEventListener("sessionstart",ks),q.removeEventListener("sessionend",jr),Cn.stop()};function Q(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const E=ot.autoReset,N=pe.enabled,k=pe.autoUpdate,z=pe.needsUpdate,D=pe.type;he(),ot.autoReset=E,pe.enabled=N,pe.autoUpdate=k,pe.needsUpdate=z,pe.type=D}function ce(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Be(E){const N=E.target;N.removeEventListener("dispose",Be),ft(N)}function ft(E){Rt(E),Pe.remove(E)}function Rt(E){const N=Pe.get(E).programs;N!==void 0&&(N.forEach(function(k){xe.releaseProgram(k)}),E.isShaderMaterial&&xe.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,k,z,D,ie){N===null&&(N=Ge);const de=D.isMesh&&D.matrixWorld.determinant()<0,ge=yu(E,N,k,z,D);Ce.setMaterial(z,de);let ve=k.index,Ne=1;if(z.wireframe===!0){if(ve=ee.getWireframeAttribute(k),ve===void 0)return;Ne=2}const Ue=k.drawRange,Me=k.attributes.position;let it=Ue.start*Ne,ut=(Ue.start+Ue.count)*Ne;ie!==null&&(it=Math.max(it,ie.start*Ne),ut=Math.min(ut,(ie.start+ie.count)*Ne)),ve!==null?(it=Math.max(it,0),ut=Math.min(ut,ve.count)):Me!=null&&(it=Math.max(it,0),ut=Math.min(ut,Me.count));const mt=ut-it;if(mt<0||mt===1/0)return;at.setup(D,z,ge,k,ve);let Wt,Qe=me;if(ve!==null&&(Wt=J.get(ve),Qe=He,Qe.setIndex(Wt)),D.isMesh)z.wireframe===!0?(Ce.setLineWidth(z.wireframeLinewidth*We()),Qe.setMode(P.LINES)):Qe.setMode(P.TRIANGLES);else if(D.isLine){let Se=z.linewidth;Se===void 0&&(Se=1),Ce.setLineWidth(Se*We()),D.isLineSegments?Qe.setMode(P.LINES):D.isLineLoop?Qe.setMode(P.LINE_LOOP):Qe.setMode(P.LINE_STRIP)}else D.isPoints?Qe.setMode(P.POINTS):D.isSprite&&Qe.setMode(P.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)Qe.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))Qe.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const Se=D._multiDrawStarts,Tt=D._multiDrawCounts,et=D._multiDrawCount,sn=ve?J.get(ve).bytesPerElement:1,Gi=Pe.get(z).currentProgram.getUniforms();for(let Xt=0;Xt<et;Xt++)Gi.setValue(P,"_gl_DrawID",Xt),Qe.render(Se[Xt]/sn,Tt[Xt])}else if(D.isInstancedMesh)Qe.renderInstances(it,mt,D.count);else if(k.isInstancedBufferGeometry){const Se=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Tt=Math.min(k.instanceCount,Se);Qe.renderInstances(it,mt,Tt)}else Qe.render(it,mt)};function qe(E,N,k){E.transparent===!0&&E.side===tn&&E.forceSinglePass===!1?(E.side=Dt,E.needsUpdate=!0,gi(E,N,k),E.side=zn,E.needsUpdate=!0,gi(E,N,k),E.side=tn):gi(E,N,k)}this.compile=function(E,N,k=null){k===null&&(k=E),p=Ye.get(k),p.init(N),y.push(p),k.traverseVisible(function(D){D.isLight&&D.layers.test(N.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),E!==k&&E.traverseVisible(function(D){D.isLight&&D.layers.test(N.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),p.setupLights();const z=new Set;return E.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const ie=D.material;if(ie)if(Array.isArray(ie))for(let de=0;de<ie.length;de++){const ge=ie[de];qe(ge,k,D),z.add(ge)}else qe(ie,k,D),z.add(ie)}),y.pop(),p=null,z},this.compileAsync=function(E,N,k=null){const z=this.compile(E,N,k);return new Promise(D=>{function ie(){if(z.forEach(function(de){Pe.get(de).currentProgram.isReady()&&z.delete(de)}),z.size===0){D(E);return}setTimeout(ie,10)}Ve.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let Ct=null;function rn(E){Ct&&Ct(E)}function ks(){Cn.stop()}function jr(){Cn.start()}const Cn=new yf;Cn.setAnimationLoop(rn),typeof self<"u"&&Cn.setContext(self),this.setAnimationLoop=function(E){Ct=E,q.setAnimationLoop(E),E===null?Cn.stop():Cn.start()},q.addEventListener("sessionstart",ks),q.addEventListener("sessionend",jr),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(N),N=q.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,N,w),p=Ye.get(E,y.length),p.init(N),y.push(p),le.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),_e.setFromProjectionMatrix(le),$=this.localClippingEnabled,H=te.init(this.clippingPlanes,$),_=fe.get(E,m.length),_.init(),m.push(_),q.enabled===!0&&q.isPresenting===!0){const ie=M.xr.getDepthSensingMesh();ie!==null&&Kr(ie,N,-1/0,M.sortObjects)}Kr(E,N,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(X,se),$e=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,$e&&Ie.addToRenderList(_,E),this.info.render.frame++,H===!0&&te.beginShadows();const k=p.state.shadowsArray;pe.render(k,E,N),H===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=_.opaque,D=_.transmissive;if(p.setupLights(),N.isArrayCamera){const ie=N.cameras;if(D.length>0)for(let de=0,ge=ie.length;de<ge;de++){const ve=ie[de];Hs(z,D,E,ve)}$e&&Ie.render(E);for(let de=0,ge=ie.length;de<ge;de++){const ve=ie[de];Vs(_,E,ve,ve.viewport)}}else D.length>0&&Hs(z,D,E,N),$e&&Ie.render(E),Vs(_,E,N);w!==null&&(A.updateMultisampleRenderTarget(w),A.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(M,E,N),at.resetDefaultState(),I=-1,W=null,y.pop(),y.length>0?(p=y[y.length-1],H===!0&&te.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Kr(E,N,k,z){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)k=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||_e.intersectsSprite(E)){z&&be.setFromMatrixPosition(E.matrixWorld).applyMatrix4(le);const de=Z.update(E),ge=E.material;ge.visible&&_.push(E,de,ge,k,be.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||_e.intersectsObject(E))){const de=Z.update(E),ge=E.material;if(z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),be.copy(E.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),be.copy(de.boundingSphere.center)),be.applyMatrix4(E.matrixWorld).applyMatrix4(le)),Array.isArray(ge)){const ve=de.groups;for(let Ne=0,Ue=ve.length;Ne<Ue;Ne++){const Me=ve[Ne],it=ge[Me.materialIndex];it&&it.visible&&_.push(E,de,it,k,be.z,Me)}}else ge.visible&&_.push(E,de,ge,k,be.z,null)}}const ie=E.children;for(let de=0,ge=ie.length;de<ge;de++)Kr(ie[de],N,k,z)}function Vs(E,N,k,z){const D=E.opaque,ie=E.transmissive,de=E.transparent;p.setupLightsView(k),H===!0&&te.setGlobalState(M.clippingPlanes,k),z&&Ce.viewport(v.copy(z)),D.length>0&&Hi(D,N,k),ie.length>0&&Hi(ie,N,k),de.length>0&&Hi(de,N,k),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Hs(E,N,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new ki(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?Us:Gn,minFilter:kn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));const ie=p.state.transmissionRenderTarget[z.id],de=z.viewport||v;ie.setSize(de.z,de.w);const ge=M.getRenderTarget();M.setRenderTarget(ie),M.getClearColor(O),G=M.getClearAlpha(),G<1&&M.setClearColor(16777215,.5),M.clear(),$e&&Ie.render(k);const ve=M.toneMapping;M.toneMapping=fi;const Ne=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),H===!0&&te.setGlobalState(M.clippingPlanes,z),Hi(E,k,z),A.updateMultisampleRenderTarget(ie),A.updateRenderTargetMipmap(ie),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let Me=0,it=N.length;Me<it;Me++){const ut=N[Me],mt=ut.object,Wt=ut.geometry,Qe=ut.material,Se=ut.group;if(Qe.side===tn&&mt.layers.test(z.layers)){const Tt=Qe.side;Qe.side=Dt,Qe.needsUpdate=!0,zi(mt,k,z,Wt,Qe,Se),Qe.side=Tt,Qe.needsUpdate=!0,Ue=!0}}Ue===!0&&(A.updateMultisampleRenderTarget(ie),A.updateRenderTargetMipmap(ie))}M.setRenderTarget(ge),M.setClearColor(O,G),Ne!==void 0&&(z.viewport=Ne),M.toneMapping=ve}function Hi(E,N,k){const z=N.isScene===!0?N.overrideMaterial:null;for(let D=0,ie=E.length;D<ie;D++){const de=E[D],ge=de.object,ve=de.geometry,Ne=z===null?de.material:z,Ue=de.group;ge.layers.test(k.layers)&&zi(ge,N,k,ve,Ne,Ue)}}function zi(E,N,k,z,D,ie){E.onBeforeRender(M,N,k,z,D,ie),E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),D.onBeforeRender(M,N,k,z,E,ie),D.transparent===!0&&D.side===tn&&D.forceSinglePass===!1?(D.side=Dt,D.needsUpdate=!0,M.renderBufferDirect(k,N,z,D,E,ie),D.side=zn,D.needsUpdate=!0,M.renderBufferDirect(k,N,z,D,E,ie),D.side=tn):M.renderBufferDirect(k,N,z,D,E,ie),E.onAfterRender(M,N,k,z,D,ie)}function gi(E,N,k){N.isScene!==!0&&(N=Ge);const z=Pe.get(E),D=p.state.lights,ie=p.state.shadowsArray,de=D.state.version,ge=xe.getParameters(E,D.state,ie,N,k),ve=xe.getProgramCacheKey(ge);let Ne=z.programs;z.environment=E.isMeshStandardMaterial?N.environment:null,z.fog=N.fog,z.envMap=(E.isMeshStandardMaterial?V:x).get(E.envMap||z.environment),z.envMapRotation=z.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Ne===void 0&&(E.addEventListener("dispose",Be),Ne=new Map,z.programs=Ne);let Ue=Ne.get(ve);if(Ue!==void 0){if(z.currentProgram===Ue&&z.lightsStateVersion===de)return Gs(E,ge),Ue}else ge.uniforms=xe.getUniforms(E),E.onBeforeCompile(ge,M),Ue=xe.acquireProgram(ge,ve),Ne.set(ve,Ue),z.uniforms=ge.uniforms;const Me=z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Me.clippingPlanes=te.uniform),Gs(E,ge),z.needsLights=Ws(E),z.lightsStateVersion=de,z.needsLights&&(Me.ambientLightColor.value=D.state.ambient,Me.lightProbe.value=D.state.probe,Me.directionalLights.value=D.state.directional,Me.directionalLightShadows.value=D.state.directionalShadow,Me.spotLights.value=D.state.spot,Me.spotLightShadows.value=D.state.spotShadow,Me.rectAreaLights.value=D.state.rectArea,Me.ltc_1.value=D.state.rectAreaLTC1,Me.ltc_2.value=D.state.rectAreaLTC2,Me.pointLights.value=D.state.point,Me.pointLightShadows.value=D.state.pointShadow,Me.hemisphereLights.value=D.state.hemi,Me.directionalShadowMap.value=D.state.directionalShadowMap,Me.directionalShadowMatrix.value=D.state.directionalShadowMatrix,Me.spotShadowMap.value=D.state.spotShadowMap,Me.spotLightMatrix.value=D.state.spotLightMatrix,Me.spotLightMap.value=D.state.spotLightMap,Me.pointShadowMap.value=D.state.pointShadowMap,Me.pointShadowMatrix.value=D.state.pointShadowMatrix),z.currentProgram=Ue,z.uniformsList=null,Ue}function zs(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=No.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Gs(E,N){const k=Pe.get(E);k.outputColorSpace=N.outputColorSpace,k.batching=N.batching,k.batchingColor=N.batchingColor,k.instancing=N.instancing,k.instancingColor=N.instancingColor,k.instancingMorph=N.instancingMorph,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function yu(E,N,k,z,D){N.isScene!==!0&&(N=Ge),A.resetTextureUnits();const ie=N.fog,de=z.isMeshStandardMaterial?N.environment:null,ge=w===null?M.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:At,ve=(z.isMeshStandardMaterial?V:x).get(z.envMap||de),Ne=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ue=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Me=!!k.morphAttributes.position,it=!!k.morphAttributes.normal,ut=!!k.morphAttributes.color;let mt=fi;z.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(mt=M.toneMapping);const Wt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Qe=Wt!==void 0?Wt.length:0,Se=Pe.get(z),Tt=p.state.lights;if(H===!0&&($===!0||E!==W)){const Zt=E===W&&z.id===I;te.setState(z,E,Zt)}let et=!1;z.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==Tt.state.version||Se.outputColorSpace!==ge||D.isBatchedMesh&&Se.batching===!1||!D.isBatchedMesh&&Se.batching===!0||D.isBatchedMesh&&Se.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&Se.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&Se.instancing===!1||!D.isInstancedMesh&&Se.instancing===!0||D.isSkinnedMesh&&Se.skinning===!1||!D.isSkinnedMesh&&Se.skinning===!0||D.isInstancedMesh&&Se.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&Se.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&Se.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&Se.instancingMorph===!1&&D.morphTexture!==null||Se.envMap!==ve||z.fog===!0&&Se.fog!==ie||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==te.numPlanes||Se.numIntersection!==te.numIntersection)||Se.vertexAlphas!==Ne||Se.vertexTangents!==Ue||Se.morphTargets!==Me||Se.morphNormals!==it||Se.morphColors!==ut||Se.toneMapping!==mt||Se.morphTargetsCount!==Qe)&&(et=!0):(et=!0,Se.__version=z.version);let sn=Se.currentProgram;et===!0&&(sn=gi(z,N,D));let Gi=!1,Xt=!1,Pa=!1;const _t=sn.getUniforms(),qn=Se.uniforms;if(Ce.useProgram(sn.program)&&(Gi=!0,Xt=!0,Pa=!0),z.id!==I&&(I=z.id,Xt=!0),Gi||W!==E){Xe.reverseDepthBuffer?(ae.copy(E.projectionMatrix),jm(ae),Km(ae),_t.setValue(P,"projectionMatrix",ae)):_t.setValue(P,"projectionMatrix",E.projectionMatrix),_t.setValue(P,"viewMatrix",E.matrixWorldInverse);const Zt=_t.map.cameraPosition;Zt!==void 0&&Zt.setValue(P,Re.setFromMatrixPosition(E.matrixWorld)),Xe.logarithmicDepthBuffer&&_t.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&_t.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),W!==E&&(W=E,Xt=!0,Pa=!0)}if(D.isSkinnedMesh){_t.setOptional(P,D,"bindMatrix"),_t.setOptional(P,D,"bindMatrixInverse");const Zt=D.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),_t.setValue(P,"boneTexture",Zt.boneTexture,A))}D.isBatchedMesh&&(_t.setOptional(P,D,"batchingTexture"),_t.setValue(P,"batchingTexture",D._matricesTexture,A),_t.setOptional(P,D,"batchingIdTexture"),_t.setValue(P,"batchingIdTexture",D._indirectTexture,A),_t.setOptional(P,D,"batchingColorTexture"),D._colorsTexture!==null&&_t.setValue(P,"batchingColorTexture",D._colorsTexture,A));const La=k.morphAttributes;if((La.position!==void 0||La.normal!==void 0||La.color!==void 0)&&Le.update(D,k,sn),(Xt||Se.receiveShadow!==D.receiveShadow)&&(Se.receiveShadow=D.receiveShadow,_t.setValue(P,"receiveShadow",D.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(qn.envMap.value=ve,qn.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&N.environment!==null&&(qn.envMapIntensity.value=N.environmentIntensity),Xt&&(_t.setValue(P,"toneMappingExposure",M.toneMappingExposure),Se.needsLights&&Ia(qn,Pa),ie&&z.fog===!0&&oe.refreshFogUniforms(qn,ie),oe.refreshMaterialUniforms(qn,z,j,F,p.state.transmissionRenderTarget[E.id]),No.upload(P,zs(Se),qn,A)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(No.upload(P,zs(Se),qn,A),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&_t.setValue(P,"center",D.center),_t.setValue(P,"modelViewMatrix",D.modelViewMatrix),_t.setValue(P,"normalMatrix",D.normalMatrix),_t.setValue(P,"modelMatrix",D.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Zt=z.uniformsGroups;for(let Na=0,Hp=Zt.length;Na<Hp;Na++){const Su=Zt[Na];L.update(Su,sn),L.bind(Su,sn)}}return sn}function Ia(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Ws(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,N,k){Pe.get(E.texture).__webglTexture=N,Pe.get(E.depthTexture).__webglTexture=k;const z=Pe.get(E);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=k===void 0,z.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){const k=Pe.get(E);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,k=0){w=E,C=N,R=k;let z=!0,D=null,ie=!1,de=!1;if(E){const ve=Pe.get(E);if(ve.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(P.FRAMEBUFFER,null),z=!1;else if(ve.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(ve.__hasExternalTextures)A.rebindTextures(E,Pe.get(E.texture).__webglTexture,Pe.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Me=E.depthTexture;if(ve.__boundDepthTexture!==Me){if(Me!==null&&Pe.has(Me)&&(E.width!==Me.image.width||E.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}const Ne=E.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(de=!0);const Ue=Pe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ue[N])?D=Ue[N][k]:D=Ue[N],ie=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?D=Pe.get(E).__webglMultisampledFramebuffer:Array.isArray(Ue)?D=Ue[k]:D=Ue,v.copy(E.viewport),S.copy(E.scissor),B=E.scissorTest}else v.copy(U).multiplyScalar(j).floor(),S.copy(K).multiplyScalar(j).floor(),B=ne;if(Ce.bindFramebuffer(P.FRAMEBUFFER,D)&&z&&Ce.drawBuffers(E,D),Ce.viewport(v),Ce.scissor(S),Ce.setScissorTest(B),ie){const ve=Pe.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+N,ve.__webglTexture,k)}else if(de){const ve=Pe.get(E.texture),Ne=N||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,ve.__webglTexture,k||0,Ne)}I=-1},this.readRenderTargetPixels=function(E,N,k,z,D,ie,de){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Pe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&de!==void 0&&(ge=ge[de]),ge){Ce.bindFramebuffer(P.FRAMEBUFFER,ge);try{const ve=E.texture,Ne=ve.format,Ue=ve.type;if(!Xe.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-z&&k>=0&&k<=E.height-D&&P.readPixels(N,k,z,D,De.convert(Ne),De.convert(Ue),ie)}finally{const ve=w!==null?Pe.get(w).__webglFramebuffer:null;Ce.bindFramebuffer(P.FRAMEBUFFER,ve)}}},this.readRenderTargetPixelsAsync=async function(E,N,k,z,D,ie,de){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Pe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&de!==void 0&&(ge=ge[de]),ge){const ve=E.texture,Ne=ve.format,Ue=ve.type;if(!Xe.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=E.width-z&&k>=0&&k<=E.height-D){Ce.bindFramebuffer(P.FRAMEBUFFER,ge);const Me=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Me),P.bufferData(P.PIXEL_PACK_BUFFER,ie.byteLength,P.STREAM_READ),P.readPixels(N,k,z,D,De.convert(Ne),De.convert(Ue),0);const it=w!==null?Pe.get(w).__webglFramebuffer:null;Ce.bindFramebuffer(P.FRAMEBUFFER,it);const ut=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Ym(P,ut,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Me),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ie),P.deleteBuffer(Me),P.deleteSync(ut),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,N=null,k=0){E.isTexture!==!0&&(Lo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,E=arguments[1]);const z=Math.pow(2,-k),D=Math.floor(E.image.width*z),ie=Math.floor(E.image.height*z),de=N!==null?N.x:0,ge=N!==null?N.y:0;A.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,k,0,0,de,ge,D,ie),Ce.unbindTexture()},this.copyTextureToTexture=function(E,N,k=null,z=null,D=0){E.isTexture!==!0&&(Lo("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,E=arguments[1],N=arguments[2],D=arguments[3]||0,k=null);let ie,de,ge,ve,Ne,Ue;k!==null?(ie=k.max.x-k.min.x,de=k.max.y-k.min.y,ge=k.min.x,ve=k.min.y):(ie=E.image.width,de=E.image.height,ge=0,ve=0),z!==null?(Ne=z.x,Ue=z.y):(Ne=0,Ue=0);const Me=De.convert(N.format),it=De.convert(N.type);A.setTexture2D(N,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);const ut=P.getParameter(P.UNPACK_ROW_LENGTH),mt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Wt=P.getParameter(P.UNPACK_SKIP_PIXELS),Qe=P.getParameter(P.UNPACK_SKIP_ROWS),Se=P.getParameter(P.UNPACK_SKIP_IMAGES),Tt=E.isCompressedTexture?E.mipmaps[D]:E.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Tt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Tt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ge),P.pixelStorei(P.UNPACK_SKIP_ROWS,ve),E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,D,Ne,Ue,ie,de,Me,it,Tt.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,D,Ne,Ue,Tt.width,Tt.height,Me,Tt.data):P.texSubImage2D(P.TEXTURE_2D,D,Ne,Ue,ie,de,Me,it,Tt),P.pixelStorei(P.UNPACK_ROW_LENGTH,ut),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,mt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Wt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Qe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Se),D===0&&N.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(E,N,k=null,z=null,D=0){E.isTexture!==!0&&(Lo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,z=arguments[1]||null,E=arguments[2],N=arguments[3],D=arguments[4]||0);let ie,de,ge,ve,Ne,Ue,Me,it,ut;const mt=E.isCompressedTexture?E.mipmaps[D]:E.image;k!==null?(ie=k.max.x-k.min.x,de=k.max.y-k.min.y,ge=k.max.z-k.min.z,ve=k.min.x,Ne=k.min.y,Ue=k.min.z):(ie=mt.width,de=mt.height,ge=mt.depth,ve=0,Ne=0,Ue=0),z!==null?(Me=z.x,it=z.y,ut=z.z):(Me=0,it=0,ut=0);const Wt=De.convert(N.format),Qe=De.convert(N.type);let Se;if(N.isData3DTexture)A.setTexture3D(N,0),Se=P.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)A.setTexture2DArray(N,0),Se=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);const Tt=P.getParameter(P.UNPACK_ROW_LENGTH),et=P.getParameter(P.UNPACK_IMAGE_HEIGHT),sn=P.getParameter(P.UNPACK_SKIP_PIXELS),Gi=P.getParameter(P.UNPACK_SKIP_ROWS),Xt=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,mt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,mt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ve),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ne),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ue),E.isDataTexture||E.isData3DTexture?P.texSubImage3D(Se,D,Me,it,ut,ie,de,ge,Wt,Qe,mt.data):N.isCompressedArrayTexture?P.compressedTexSubImage3D(Se,D,Me,it,ut,ie,de,ge,Wt,mt.data):P.texSubImage3D(Se,D,Me,it,ut,ie,de,ge,Wt,Qe,mt),P.pixelStorei(P.UNPACK_ROW_LENGTH,Tt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,et),P.pixelStorei(P.UNPACK_SKIP_PIXELS,sn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Gi),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Xt),D===0&&N.generateMipmaps&&P.generateMipmap(Se),Ce.unbindTexture()},this.initRenderTarget=function(E){Pe.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),Ce.unbindTexture()},this.resetState=function(){C=0,R=0,w=null,Ce.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Zc?"display-p3":"srgb",t.unpackColorSpace=je.workingColorSpace===va?"display-p3":"srgb"}}class bf extends nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $t,this.environmentIntensity=1,this.environmentRotation=new $t,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class nu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=yc,this.updateRanges=[],this.version=0,this.uuid=pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ot=new b;class Ds{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=dn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=rt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=dn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=dn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=dn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=dn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array),r=rt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array),r=rt(r,this.array),s=rt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new ke(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ds(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Md=new b,yd=new Ze,Sd=new Ze,sM=new b,Ed=new Te,ho=new b,cl=new An,Td=new Te,ul=new xa;class Rf extends lt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=bu,this.bindMatrix=new Te,this.bindMatrixInverse=new Te,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new _n),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ho),this.boundingBox.expandByPoint(ho)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new An),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ho),this.boundingSphere.expandByPoint(ho)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cl.copy(this.boundingSphere),cl.applyMatrix4(r),e.ray.intersectsSphere(cl)!==!1&&(Td.copy(r).invert(),ul.copy(e.ray).applyMatrix4(Td),!(this.boundingBox!==null&&ul.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ul)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ze,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===bu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===gm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;yd.fromBufferAttribute(r.attributes.skinIndex,e),Sd.fromBufferAttribute(r.attributes.skinWeight,e),Md.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Sd.getComponent(s);if(o!==0){const a=yd.getComponent(s);Ed.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(sM.copy(Md).applyMatrix4(Ed),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Cf extends nt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class If extends Et{constructor(e=null,t=1,i=1,r,s,o,a,l,c=Vt,u=Vt,d,h){super(null,o,a,l,c,u,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wd=new Te,oM=new Te;class Vr{constructor(e=[],t=[]){this.uuid=pn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Te)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Te;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:oM;wd.multiplyMatrices(a,t[s]),wd.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Vr(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new If(t,e,e,nn,fn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Cf),this.bones.push(o),this.boneInverses.push(new Te().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class Tc extends ke{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const rr=new Te,Ad=new Te,fo=[],bd=new _n,aM=new Te,ts=new lt,ns=new An;class lM extends lt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Tc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,aM)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new _n),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,rr),bd.copy(e.boundingBox).applyMatrix4(rr),this.boundingBox.union(bd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new An),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,rr),ns.copy(e.boundingSphere).applyMatrix4(rr),this.boundingSphere.union(ns)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(ts.geometry=this.geometry,ts.material=this.material,ts.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ns.copy(this.boundingSphere),ns.applyMatrix4(i),e.ray.intersectsSphere(ns)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,rr),Ad.multiplyMatrices(i,rr),ts.matrixWorld=Ad,ts.raycast(e,fo);for(let o=0,a=fo.length;o<a;o++){const l=fo[o];l.instanceId=s,l.object=this,t.push(l)}fo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Tc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new If(new Float32Array(r*this.count),r,this.count,qc,fn));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class mi extends mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Qo=new b,ea=new b,Rd=new Te,is=new xa,po=new An,dl=new b,Cd=new b;class Sa extends nt{constructor(e=new pt,t=new mi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Qo.fromBufferAttribute(t,r-1),ea.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Qo.distanceTo(ea);e.setAttribute("lineDistance",new gn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),po.copy(i.boundingSphere),po.applyMatrix4(r),po.radius+=s,e.ray.intersectsSphere(po)===!1)return;Rd.copy(r).invert(),is.copy(e.ray).applyMatrix4(Rd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,p=g-1;_<p;_+=c){const m=u.getX(_),y=u.getX(_+1),M=mo(this,e,is,l,m,y);M&&t.push(M)}if(this.isLineLoop){const _=u.getX(g-1),p=u.getX(f),m=mo(this,e,is,l,_,p);m&&t.push(m)}}else{const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,p=g-1;_<p;_+=c){const m=mo(this,e,is,l,_,_+1);m&&t.push(m)}if(this.isLineLoop){const _=mo(this,e,is,l,g-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function mo(n,e,t,i,r,s){const o=n.geometry.attributes.position;if(Qo.fromBufferAttribute(o,r),ea.fromBufferAttribute(o,s),t.distanceSqToSegment(Qo,ea,dl,Cd)>i)return;dl.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(dl);if(!(l<e.near||l>e.far))return{distance:l,point:Cd.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}const Id=new b,Pd=new b;class Hr extends Sa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Id.fromBufferAttribute(t,r),Pd.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Id.distanceTo(Pd);e.setAttribute("lineDistance",new gn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class cM extends Sa{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Pf extends mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ld=new Te,wc=new xa,go=new An,_o=new b;class uM extends nt{constructor(e=new pt,t=new Pf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),go.copy(i.boundingSphere),go.applyMatrix4(r),go.radius+=s,e.ray.intersectsSphere(go)===!1)return;Ld.copy(r).invert(),wc.copy(e.ray).applyMatrix4(Ld);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=h,_=f;g<_;g++){const p=c.getX(g);_o.fromBufferAttribute(d,p),Nd(_o,p,l,r,e,t,this)}}else{const h=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=h,_=f;g<_;g++)_o.fromBufferAttribute(d,g),Nd(_o,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Nd(n,e,t,i,r,s,o){const a=wc.distanceSqToPoint(n);if(a<t){const l=new b;wc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Rs extends mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$c,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bn extends Rs{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function vo(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function dM(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function hM(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function Ud(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r}function Lf(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}class Os{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class fM extends Os{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ru,endingEnd:Ru}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Cu:s=e,a=2*t-i;break;case Iu:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Cu:o=e,l=2*i-t;break;case Iu:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(i-t)/(r-t),_=g*g,p=_*g,m=-h*p+2*h*_-h*g,y=(1+h)*p+(-1.5-2*h)*_+(-.5+h)*g+1,M=(-1-f)*p+(1.5+f)*_+.5*g,T=f*p-f*_;for(let C=0;C!==a;++C)s[C]=m*o[u+C]+y*o[c+C]+M*o[l+C]+T*o[d+C];return s}}class pM extends Os{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(r-t),d=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*d+o[l+h]*u;return s}}class mM extends Os{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Rn{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=vo(t,this.TimeBufferType),this.values=vo(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:vo(e.times,Array),values:vo(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new mM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new pM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fM(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ws:t=this.InterpolantFactoryMethodDiscrete;break;case As:t=this.InterpolantFactoryMethodLinear;break;case Ua:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ws;case this.InterpolantFactoryMethodLinear:return As;case this.InterpolantFactoryMethodSmooth:return Ua}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&dM(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Ua,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const d=a*i,h=d-i,f=d+i;for(let g=0;g!==i;++g){const _=t[d+g];if(_!==t[h+g]||_!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const d=a*i,h=o*i;for(let f=0;f!==i;++f)t[h+f]=t[d+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=As;class zr extends Rn{constructor(e,t,i){super(e,t,i)}}zr.prototype.ValueTypeName="bool";zr.prototype.ValueBufferType=Array;zr.prototype.DefaultInterpolation=ws;zr.prototype.InterpolantFactoryMethodLinear=void 0;zr.prototype.InterpolantFactoryMethodSmooth=void 0;class Nf extends Rn{}Nf.prototype.ValueTypeName="color";class Ir extends Rn{}Ir.prototype.ValueTypeName="number";class gM extends Os{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Ee.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Pr extends Rn{InterpolantFactoryMethodLinear(e){return new gM(this.times,this.values,this.getValueSize(),e)}}Pr.prototype.ValueTypeName="quaternion";Pr.prototype.InterpolantFactoryMethodSmooth=void 0;class Gr extends Rn{constructor(e,t,i){super(e,t,i)}}Gr.prototype.ValueTypeName="string";Gr.prototype.ValueBufferType=Array;Gr.prototype.DefaultInterpolation=ws;Gr.prototype.InterpolantFactoryMethodLinear=void 0;Gr.prototype.InterpolantFactoryMethodSmooth=void 0;class Lr extends Rn{}Lr.prototype.ValueTypeName="vector";class _M{constructor(e="",t=-1,i=[],r=_m){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=pn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(xM(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(Rn.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=hM(l);l=Ud(l,1,u),c=Ud(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Ir(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const d=u[1];let h=r[d];h||(r[d]=h=[]),h.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(d,h,f,g,_){if(f.length!==0){const p=[],m=[];Lf(f,p,m,g),p.length!==0&&_.push(new d(h,p,m))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const h=c[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const f={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let _=0;_<h[g].morphTargets.length;_++)f[h[g].morphTargets[_]]=-1;for(const _ in f){const p=[],m=[];for(let y=0;y!==h[g].morphTargets.length;++y){const M=h[g];p.push(M.time),m.push(M.morphTarget===_?1:0)}r.push(new Ir(".morphTargetInfluence["+_+"]",p,m))}l=f.length*o}else{const f=".bones["+t[d].name+"]";i(Lr,f+".position",h,"pos",r),i(Pr,f+".quaternion",h,"rot",r),i(Lr,f+".scale",h,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function vM(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ir;case"vector":case"vector2":case"vector3":case"vector4":return Lr;case"color":return Nf;case"quaternion":return Pr;case"bool":case"boolean":return zr;case"string":return Gr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function xM(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=vM(n.type);if(n.times===void 0){const t=[],i=[];Lf(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const ai={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class MM{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const yM=new MM;class Wr{constructor(e){this.manager=e!==void 0?e:yM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Wr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Dn={};class SM extends Error{constructor(e,t){super(e),this.response=t}}class Uf extends Wr{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ai.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Dn[e]!==void 0){Dn[e].push({onLoad:t,onProgress:i,onError:r});return}Dn[e]=[],Dn[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Dn[e],d=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=h?parseInt(h):0,g=f!==0;let _=0;const p=new ReadableStream({start(m){y();function y(){d.read().then(({done:M,value:T})=>{if(M)m.close();else{_+=T.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let R=0,w=u.length;R<w;R++){const I=u[R];I.onProgress&&I.onProgress(C)}m.enqueue(T),y()}},M=>{m.error(M)})}}});return new Response(p)}else throw new SM(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{ai.add(e,c);const u=Dn[e];delete Dn[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Dn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Dn[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Df extends Wr{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ai.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=bs("img");function l(){u(),ai.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class EM extends Wr{constructor(e){super(e)}load(e,t,i,r){const s=new Et,o=new Df(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Ea extends nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class TM extends Ea{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const hl=new Te,Dd=new b,Od=new b;class iu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.map=null,this.mapPass=null,this.matrix=new Te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qc,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Dd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dd),Od.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Od),t.updateMatrixWorld(),hl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(hl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class wM extends iu{constructor(){super(new kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Rr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Of extends Ea{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(nt.DEFAULT_UP),this.updateMatrix(),this.target=new nt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new wM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Fd=new Te,rs=new b,fl=new b;class AM extends iu{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Fe(4,2),this._viewportCount=6,this._viewports=[new Ze(2,1,1,1),new Ze(0,1,1,1),new Ze(3,1,1,1),new Ze(1,1,1,1),new Ze(3,0,1,1),new Ze(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),rs.setFromMatrixPosition(e.matrixWorld),i.position.copy(rs),fl.copy(i.position),fl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(fl),i.updateMatrixWorld(),r.makeTranslation(-rs.x,-rs.y,-rs.z),Fd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fd)}}class Ff extends Ea{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new AM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class bM extends iu{constructor(){super(new eu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bf extends Ea{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nt.DEFAULT_UP),this.updateMatrix(),this.target=new nt,this.shadow=new bM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ss{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class RM extends Wr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ai.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return ai.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),ai.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});ai.add(e,l),s.manager.itemStart(e)}}class CM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Bd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Bd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Bd(){return performance.now()}const ru="\\[\\]\\.:\\/",IM=new RegExp("["+ru+"]","g"),su="[^"+ru+"]",PM="[^"+ru.replace("\\.","")+"]",LM=/((?:WC+[\/:])*)/.source.replace("WC",su),NM=/(WCOD+)?/.source.replace("WCOD",PM),UM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",su),DM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",su),OM=new RegExp("^"+LM+NM+UM+DM+"$"),FM=["material","materials","bones","map"];class BM{constructor(e,t,i){const r=i||st.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class st{constructor(e,t,i){this.path=t,this.parsedPath=i||st.parseTrackName(t),this.node=st.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new st.Composite(e,t,i):new st(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(IM,"")}static parseTrackName(e){const t=OM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);FM.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=st.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}st.Composite=BM;st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray];st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class kd{constructor(e,t,i,r,s){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=i,this.elementSize=r,this.count=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}class kM extends Hr{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new pt;r.setAttribute("position",new gn(t,3)),r.setAttribute("color",new gn(i,3));const s=new mi({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,i){const r=new ye,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fi}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fi);function Vd(n,e){if(e===vm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Mc||e===lf){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===Mc)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class VM extends Wr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new XM(t)}),this.register(function(t){return new qM(t)}),this.register(function(t){return new ty(t)}),this.register(function(t){return new ny(t)}),this.register(function(t){return new iy(t)}),this.register(function(t){return new jM(t)}),this.register(function(t){return new KM(t)}),this.register(function(t){return new $M(t)}),this.register(function(t){return new ZM(t)}),this.register(function(t){return new WM(t)}),this.register(function(t){return new JM(t)}),this.register(function(t){return new YM(t)}),this.register(function(t){return new ey(t)}),this.register(function(t){return new QM(t)}),this.register(function(t){return new zM(t)}),this.register(function(t){return new ry(t)}),this.register(function(t){return new sy(t)})}load(e,t,i,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Ss.extractUrlBase(e);o=Ss.resolveURL(c,this.path)}else o=Ss.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Uf(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===kf){try{o[ze.KHR_BINARY_GLTF]=new oy(e)}catch(d){r&&r(d);return}s=JSON.parse(o[ze.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new xy(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const d=s.extensionsUsed[u],h=s.extensionsRequired||[];switch(d){case ze.KHR_MATERIALS_UNLIT:o[d]=new GM;break;case ze.KHR_DRACO_MESH_COMPRESSION:o[d]=new ay(s,this.dracoLoader);break;case ze.KHR_TEXTURE_TRANSFORM:o[d]=new ly;break;case ze.KHR_MESH_QUANTIZATION:o[d]=new cy;break;default:h.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function HM(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class zM{constructor(e){this.parser=e,this.name=ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new ye(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],At);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Bf(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ff(u),c.distance=d;break;case"spot":c=new Of(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Fn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class GM{constructor(){this.name=ze.KHR_MATERIALS_UNLIT}getMaterialType(){return En}extendParams(e,t,i){const r=[];e.color=new ye(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],At),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,Nt))}return Promise.all(r)}}class WM{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class XM{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:bn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Fe(a,a)}return Promise.all(s)}}class qM{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:bn}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class YM{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:bn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class jM{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:bn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new ye(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],At)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Nt)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class KM{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:bn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class $M{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:bn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ye().setRGB(a[0],a[1],a[2],At),Promise.all(s)}}class ZM{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:bn}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class JM{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:bn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new ye().setRGB(a[0],a[1],a[2],At),o.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Nt)),Promise.all(s)}}class QM{constructor(e){this.parser=e,this.name=ze.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:bn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class ey{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:bn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class ty{constructor(e){this.parser=e,this.name=ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class ny{constructor(e){this.parser=e,this.name=ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class iy{constructor(e){this.parser=e,this.name=ze.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ry{constructor(e){this.name=ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,d=r.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,d,h,r.mode,r.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*d);return o.decodeGltfBuffer(new Uint8Array(f),u,d,h,r.mode,r.filter),f})})}else return null}}class sy{constructor(e){this.name=ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const c of r.primitives)if(c.mode!==en.TRIANGLES&&c.mode!==en.TRIANGLE_STRIP&&c.mode!==en.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),d=u.isGroup?u.children:[u],h=c[0].count,f=[];for(const g of d){const _=new Te,p=new b,m=new Ee,y=new b(1,1,1),M=new lM(g.geometry,g.material,h);for(let T=0;T<h;T++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,T),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,T),l.SCALE&&y.fromBufferAttribute(l.SCALE,T),M.setMatrixAt(T,_.compose(p,m,y));for(const T in l)if(T==="_COLOR_0"){const C=l[T];M.instanceColor=new Tc(C.array,C.itemSize,C.normalized)}else T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"&&g.geometry.setAttribute(T,l[T]);nt.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),f.push(M)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const kf="glTF",ss=12,Hd={JSON:1313821514,BIN:5130562};class oy{constructor(e){this.name=ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ss),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==kf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-ss,s=new DataView(e,ss);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===Hd.JSON){const c=new Uint8Array(e,ss+o,a);this.content=i.decode(c)}else if(l===Hd.BIN){const c=ss+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class ay{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const d=Ac[u]||u.toLowerCase();a[d]=o[u]}for(const u in e.attributes){const d=Ac[u]||u.toLowerCase();if(o[u]!==void 0){const h=i.accessors[e.attributes[u]],f=yr[h.componentType];c[d]=f.name,l[d]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(d,h){r.decodeDracoFile(u,function(f){for(const g in f.attributes){const _=f.attributes[g],p=l[g];p!==void 0&&(_.normalized=p)}d(f)},a,c,At,h)})})}}class ly{constructor(){this.name=ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class cy{constructor(){this.name=ze.KHR_MESH_QUANTIZATION}}class Vf extends Os{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,d=(i-t)/u,h=d*d,f=h*d,g=e*c,_=g-c,p=-2*f+3*h,m=f-h,y=1-p,M=m-h+d;for(let T=0;T!==a;T++){const C=o[_+T+a],R=o[_+T+l]*u,w=o[g+T+a],I=o[g+T]*u;s[T]=y*C+M*R+p*w+m*I}return s}}const uy=new Ee;class dy extends Vf{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return uy.fromArray(s).normalize().toArray(s),s}}const en={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},yr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},zd={9728:Vt,9729:Kt,9984:Zh,9985:Ao,9986:ps,9987:kn},Gd={33071:oi,33648:jo,10497:wr},pl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ac={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Qn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},hy={CUBICSPLINE:void 0,LINEAR:As,STEP:ws},ml={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function fy(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Rs({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:zn})),n.DefaultMaterial}function Ei(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Fn(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function py(n,e,t){let i=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const d=e[c];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(r=!0),d.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const d=e[c];if(i){const h=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):n.attributes.position;o.push(h)}if(r){const h=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):n.attributes.normal;a.push(h)}if(s){const h=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):n.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],d=c[1],h=c[2];return i&&(n.morphAttributes.position=u),r&&(n.morphAttributes.normal=d),s&&(n.morphAttributes.color=h),n.morphTargetsRelative=!0,n})}function my(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function gy(n){let e;const t=n.extensions&&n.extensions[ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+gl(t.attributes):e=n.indices+":"+gl(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+gl(n.targets[i]);return e}function gl(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function bc(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function _y(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const vy=new Te;class xy{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new HM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);r=i&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||s&&o<98?this.textureLoader=new EM(this.options.manager):this.textureLoader=new RM(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Uf(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return Ei(s,a,r),Fn(a,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ze.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){i.load(Ss.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=pl[r.type],a=yr[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new ke(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=pl[r.type],c=yr[r.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,h=r.byteOffset||0,f=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let _,p;if(f&&f!==d){const m=Math.floor(h/f),y="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+m+":"+r.count;let M=t.cache.get(y);M||(_=new c(a,m*f,r.count*f/u),M=new nu(_,f/u),t.cache.add(y,M)),p=new Ds(M,l,h%f/u,g)}else a===null?_=new c(r.count*l):_=new c(a,h,r.count*l),p=new ke(_,l,g);if(r.sparse!==void 0){const m=pl.SCALAR,y=yr[r.sparse.indices.componentType],M=r.sparse.indices.byteOffset||0,T=r.sparse.values.byteOffset||0,C=new y(o[1],M,r.sparse.count*m),R=new c(o[2],T,r.sparse.count*l);a!==null&&(p=new ke(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let w=0,I=C.length;w<I;w++){const W=C[w];if(p.setX(W,R[w*l]),l>=2&&p.setY(W,R[w*l+1]),l>=3&&p.setZ(W,R[w*l+2]),l>=4&&p.setW(W,R[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const h=(s.samplers||{})[o.sampler]||{};return u.magFilter=zd[h.magFilter]||Kt,u.minFilter=zd[h.minFilter]||kn,u.wrapS=Gd[h.wrapS]||wr,u.wrapT=Gd[h.wrapT]||wr,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(d){c=!0;const h=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(d){return new Promise(function(h,f){let g=h;t.isImageBitmapLoader===!0&&(g=function(_){const p=new Et(_);p.needsUpdate=!0,h(p)}),t.load(Ss.resolveURL(d,s.path),g,void 0,f)})}).then(function(d){return c===!0&&a.revokeObjectURL(l),Fn(d,o),d.userData.mimeType=o.mimeType||_y(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[ze.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[ze.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[ze.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Pf,mn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new mi,mn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Rs}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[ze.KHR_MATERIALS_UNLIT]){const d=r[ze.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),c.push(d.extendParams(a,s,t))}else{const d=s.pbrMetallicRoughness||{};if(a.color=new ye(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const h=d.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],At),a.opacity=h[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",d.baseColorTexture,Nt)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=tn);const u=s.alphaMode||ml.OPAQUE;if(u===ml.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===ml.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==En&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Fe(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;a.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&o!==En&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==En){const d=s.emissiveFactor;a.emissive=new ye().setRGB(d[0],d[1],d[2],At)}return s.emissiveTexture!==void 0&&o!==En&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Nt)),Promise.all(c).then(function(){const d=new o(a);return s.name&&(d.name=s.name),Fn(d,s),t.associations.set(d,{materials:e}),s.extensions&&Ei(r,d,s),d})}createUniqueName(e){const t=st.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Wd(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=gy(c),d=r[u];if(d)o.push(d.promise);else{let h;c.extensions&&c.extensions[ze.KHR_DRACO_MESH_COMPRESSION]?h=s(c):h=Wd(new pt,c,t),r[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?fy(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let f=0,g=u.length;f<g;f++){const _=u[f],p=o[f];let m;const y=c[f];if(p.mode===en.TRIANGLES||p.mode===en.TRIANGLE_STRIP||p.mode===en.TRIANGLE_FAN||p.mode===void 0)m=s.isSkinnedMesh===!0?new Rf(_,y):new lt(_,y),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===en.TRIANGLE_STRIP?m.geometry=Vd(m.geometry,lf):p.mode===en.TRIANGLE_FAN&&(m.geometry=Vd(m.geometry,Mc));else if(p.mode===en.LINES)m=new Hr(_,y);else if(p.mode===en.LINE_STRIP)m=new Sa(_,y);else if(p.mode===en.LINE_LOOP)m=new cM(_,y);else if(p.mode===en.POINTS)m=new uM(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&my(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),Fn(m,s),p.extensions&&Ei(r,m,p),t.assignFinalMaterial(m),d.push(m)}for(let f=0,g=d.length;f<g;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return s.extensions&&Ei(r,d[0],s),d[0];const h=new zt;s.extensions&&Ei(r,h,s),t.associations.set(h,{meshes:e});for(let f=0,g=d.length;f<g;f++)h.add(d[f]);return h})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new kt(tt.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new eu(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Fn(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const d=o[c];if(d){a.push(d);const h=new Te;s!==null&&h.fromArray(s.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Vr(a,l)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let d=0,h=r.channels.length;d<h;d++){const f=r.channels[d],g=r.samplers[f.sampler],_=f.target,p=_.node,m=r.parameters!==void 0?r.parameters[g.input]:g.input,y=r.parameters!==void 0?r.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",y)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(d){const h=d[0],f=d[1],g=d[2],_=d[3],p=d[4],m=[];for(let y=0,M=h.length;y<M;y++){const T=h[y],C=f[y],R=g[y],w=_[y],I=p[y];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const W=i._createAnimationTracks(T,C,R,w,I);if(W)for(let v=0;v<W.length;v++)m.push(W[v])}return new _M(s,void 0,m)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],d=c[1],h=c[2];h!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(h,vy)});for(let f=0,g=d.length;f<g;f++)u.add(d[f]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new Cf:c.length>1?u=new zt:c.length===1?u=c[0]:u=new nt,u!==c[0])for(let d=0,h=c.length;d<h;d++)u.add(c[d]);if(s.name&&(u.userData.name=s.name,u.name=o),Fn(u,s),s.extensions&&Ei(i,u,s),s.matrix!==void 0){const d=new Te;d.fromArray(s.matrix),u.applyMatrix4(d)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new zt;i.name&&(s.name=r.createUniqueName(i.name)),Fn(s,i),i.extensions&&Ei(t,s,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,d=l.length;u<d;u++)s.add(l[u]);const c=u=>{const d=new Map;for(const[h,f]of r.associations)(h instanceof mn||h instanceof Et)&&d.set(h,f);return u.traverse(h=>{const f=r.associations.get(h);f!=null&&d.set(h,f)}),d};return r.associations=c(s),s})}_createAnimationTracks(e,t,i,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];Qn[s.path]===Qn.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(a);let c;switch(Qn[s.path]){case Qn.weights:c=Ir;break;case Qn.rotation:c=Pr;break;case Qn.position:case Qn.scale:c=Lr;break;default:switch(i.itemSize){case 1:c=Ir;break;case 2:case 3:default:c=Lr;break}break}const u=r.interpolation!==void 0?hy[r.interpolation]:As,d=this._getArrayFromAccessor(i);for(let h=0,f=l.length;h<f;h++){const g=new c(l[h]+"."+Qn[s.path],t.array,d,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=bc(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof Pr?dy:Vf;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function My(n,e,t){const i=e.attributes,r=new _n;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new b(l[0],l[1],l[2]),new b(c[0],c[1],c[2])),a.normalized){const u=bc(yr[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new b,l=new b;for(let c=0,u=s.length;c<u;c++){const d=s[c];if(d.POSITION!==void 0){const h=t.json.accessors[d.POSITION],f=h.min,g=h.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),h.normalized){const _=bc(yr[h.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;const o=new An;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function Wd(n,e,t){const i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=Ac[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return je.workingColorSpace!==At&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${je.workingColorSpace}" not supported.`),Fn(n,e),My(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?py(n,e.targets,t):n})}/*!
 * @pixiv/three-vrm v3.6.0
 * VRM file loader for three.js.
 *
 * Copyright (c) 2019-2026 pixiv Inc.
 * @pixiv/three-vrm is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 */var xo=(n,e,t)=>new Promise((i,r)=>{var s=l=>{try{a(t.next(l))}catch(c){r(c)}},o=l=>{try{a(t.throw(l))}catch(c){r(c)}},a=l=>l.done?i(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(n,e)).next())}),Ke=(n,e,t)=>new Promise((i,r)=>{var s=l=>{try{a(t.next(l))}catch(c){r(c)}},o=l=>{try{a(t.throw(l))}catch(c){r(c)}},a=l=>l.done?i(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(n,e)).next())}),Xd=class extends nt{constructor(n){super(),this.weight=0,this.isBinary=!1,this.overrideBlink="none",this.overrideLookAt="none",this.overrideMouth="none",this._binds=[],this.name=`VRMExpression_${n}`,this.expressionName=n,this.type="VRMExpression",this.visible=!1}get binds(){return this._binds}get overrideBlinkAmount(){return this.overrideBlink==="block"?0<this.outputWeight?1:0:this.overrideBlink==="blend"?this.outputWeight:0}get overrideLookAtAmount(){return this.overrideLookAt==="block"?0<this.outputWeight?1:0:this.overrideLookAt==="blend"?this.outputWeight:0}get overrideMouthAmount(){return this.overrideMouth==="block"?0<this.outputWeight?1:0:this.overrideMouth==="blend"?this.outputWeight:0}get outputWeight(){return this.isBinary?this.weight>.5?1:0:this.weight}addBind(n){this._binds.push(n)}deleteBind(n){const e=this._binds.indexOf(n);e>=0&&this._binds.splice(e,1)}applyWeight(n){var e;let t=this.outputWeight;t*=(e=n==null?void 0:n.multiplier)!=null?e:1,this.isBinary&&t<1&&(t=0),this._binds.forEach(i=>i.applyWeight(t))}clearAppliedWeight(){this._binds.forEach(n=>n.clearAppliedWeight())}};function Hf(n,e,t){var i,r;const s=n.parser.json,o=(i=s.nodes)==null?void 0:i[e];if(o==null)return console.warn(`extractPrimitivesInternal: Attempt to use nodes[${e}] of glTF but the node doesn't exist`),null;const a=o.mesh;if(a==null)return null;const l=(r=s.meshes)==null?void 0:r[a];if(l==null)return console.warn(`extractPrimitivesInternal: Attempt to use meshes[${a}] of glTF but the mesh doesn't exist`),null;const c=l.primitives.length,u=[];return t.traverse(d=>{u.length<c&&d.isMesh&&u.push(d)}),u}function qd(n,e){return Ke(this,null,function*(){const t=yield n.parser.getDependency("node",e);return Hf(n,e,t)})}function Yd(n){return Ke(this,null,function*(){const e=yield n.parser.getDependencies("node"),t=new Map;return e.forEach((i,r)=>{const s=Hf(n,r,i);s!=null&&t.set(r,s)}),t})}var Rc={Aa:"aa",Ih:"ih",Ou:"ou",Ee:"ee",Oh:"oh",Blink:"blink",Happy:"happy",Angry:"angry",Sad:"sad",Relaxed:"relaxed",LookUp:"lookUp",Surprised:"surprised",LookDown:"lookDown",LookLeft:"lookLeft",LookRight:"lookRight",BlinkLeft:"blinkLeft",BlinkRight:"blinkRight",Neutral:"neutral"};function zf(n){return Math.max(Math.min(n,1),0)}var jd=class Gf{constructor(){this.blinkExpressionNames=["blink","blinkLeft","blinkRight"],this.lookAtExpressionNames=["lookLeft","lookRight","lookUp","lookDown"],this.mouthExpressionNames=["aa","ee","ih","oh","ou"],this._expressions=[],this._expressionMap={}}get expressions(){return this._expressions.concat()}get expressionMap(){return Object.assign({},this._expressionMap)}get presetExpressionMap(){const e={},t=new Set(Object.values(Rc));return Object.entries(this._expressionMap).forEach(([i,r])=>{t.has(i)&&(e[i]=r)}),e}get customExpressionMap(){const e={},t=new Set(Object.values(Rc));return Object.entries(this._expressionMap).forEach(([i,r])=>{t.has(i)||(e[i]=r)}),e}copy(e){return this._expressions.concat().forEach(i=>{this.unregisterExpression(i)}),e._expressions.forEach(i=>{this.registerExpression(i)}),this.blinkExpressionNames=e.blinkExpressionNames.concat(),this.lookAtExpressionNames=e.lookAtExpressionNames.concat(),this.mouthExpressionNames=e.mouthExpressionNames.concat(),this}clone(){return new Gf().copy(this)}getExpression(e){var t;return(t=this._expressionMap[e])!=null?t:null}registerExpression(e){this._expressions.push(e),this._expressionMap[e.expressionName]=e}unregisterExpression(e){const t=this._expressions.indexOf(e);t===-1&&console.warn("VRMExpressionManager: The specified expressions is not registered"),this._expressions.splice(t,1),delete this._expressionMap[e.expressionName]}getValue(e){var t;const i=this.getExpression(e);return(t=i==null?void 0:i.weight)!=null?t:null}setValue(e,t){const i=this.getExpression(e);i&&(i.weight=zf(t))}resetValues(){this._expressions.forEach(e=>{e.weight=0})}getExpressionTrackName(e){const t=this.getExpression(e);return t?`${t.name}.weight`:null}update(){const e=this._calculateWeightMultipliers();this._expressions.forEach(t=>{t.clearAppliedWeight()}),this._expressions.forEach(t=>{let i=1;const r=t.expressionName;this.blinkExpressionNames.indexOf(r)!==-1&&(i*=e.blink),this.lookAtExpressionNames.indexOf(r)!==-1&&(i*=e.lookAt),this.mouthExpressionNames.indexOf(r)!==-1&&(i*=e.mouth),t.applyWeight({multiplier:i})})}_calculateWeightMultipliers(){let e=1,t=1,i=1;return this._expressions.forEach(r=>{e-=r.overrideBlinkAmount,t-=r.overrideLookAtAmount,i-=r.overrideMouthAmount}),e=Math.max(0,e),t=Math.max(0,t),i=Math.max(0,i),{blink:e,lookAt:t,mouth:i}}},os={Color:"color",EmissionColor:"emissionColor",ShadeColor:"shadeColor",RimColor:"rimColor",OutlineColor:"outlineColor"},yy={_Color:os.Color,_EmissionColor:os.EmissionColor,_ShadeColor:os.ShadeColor,_RimColor:os.RimColor,_OutlineColor:os.OutlineColor},Sy=new ye,Wf=class Xf{constructor({material:e,type:t,targetValue:i,targetAlpha:r}){this.material=e,this.type=t,this.targetValue=i,this.targetAlpha=r??1;const s=this._initColorBindState(),o=this._initAlphaBindState();this._state={color:s,alpha:o}}applyWeight(e){const{color:t,alpha:i}=this._state;if(t!=null){const{propertyName:r,deltaValue:s}=t,o=this.material[r];o!=null&&o.add(Sy.copy(s).multiplyScalar(e))}if(i!=null){const{propertyName:r,deltaValue:s}=i;this.material[r]!=null&&(this.material[r]+=s*e)}}clearAppliedWeight(){const{color:e,alpha:t}=this._state;if(e!=null){const{propertyName:i,initialValue:r}=e,s=this.material[i];s!=null&&s.copy(r)}if(t!=null){const{propertyName:i,initialValue:r}=t;this.material[i]!=null&&(this.material[i]=r)}}_initColorBindState(){var e,t,i;const{material:r,type:s,targetValue:o}=this,a=this._getPropertyNameMap(),l=(t=(e=a==null?void 0:a[s])==null?void 0:e[0])!=null?t:null;if(l==null)return console.warn(`Tried to add a material color bind to the material ${(i=r.name)!=null?i:"(no name)"}, the type ${s} but the material or the type is not supported.`),null;const u=r[l].clone(),d=new ye(o.r-u.r,o.g-u.g,o.b-u.b);return{propertyName:l,initialValue:u,deltaValue:d}}_initAlphaBindState(){var e,t,i;const{material:r,type:s,targetAlpha:o}=this,a=this._getPropertyNameMap(),l=(t=(e=a==null?void 0:a[s])==null?void 0:e[1])!=null?t:null;if(l==null&&o!==1)return console.warn(`Tried to add a material alpha bind to the material ${(i=r.name)!=null?i:"(no name)"}, the type ${s} but the material or the type does not support alpha.`),null;if(l==null)return null;const c=r[l],u=o-c;return{propertyName:l,initialValue:c,deltaValue:u}}_getPropertyNameMap(){var e,t;return(t=(e=Object.entries(Xf._propertyNameMapMap).find(([i])=>this.material[i]===!0))==null?void 0:e[1])!=null?t:null}};Wf._propertyNameMapMap={isMeshStandardMaterial:{color:["color","opacity"],emissionColor:["emissive",null]},isMeshBasicMaterial:{color:["color","opacity"]},isMToonMaterial:{color:["color","opacity"],emissionColor:["emissive",null],outlineColor:["outlineColorFactor",null],matcapColor:["matcapFactor",null],rimColor:["parametricRimColorFactor",null],shadeColor:["shadeColorFactor",null]}};var Kd=Wf,ta=class{constructor({primitives:n,index:e,weight:t}){this.primitives=n,this.index=e,this.weight=t}applyWeight(n){this.primitives.forEach(e=>{var t;((t=e.morphTargetInfluences)==null?void 0:t[this.index])!=null&&(e.morphTargetInfluences[this.index]+=this.weight*n)})}clearAppliedWeight(){this.primitives.forEach(n=>{var e;((e=n.morphTargetInfluences)==null?void 0:e[this.index])!=null&&(n.morphTargetInfluences[this.index]=0)})}},$d=new Fe,qf=class Yf{constructor({material:e,scale:t,offset:i}){var r,s;this.material=e,this.scale=t,this.offset=i;const o=(r=Object.entries(Yf._propertyNamesMap).find(([a])=>e[a]===!0))==null?void 0:r[1];o==null?(console.warn(`Tried to add a texture transform bind to the material ${(s=e.name)!=null?s:"(no name)"} but the material is not supported.`),this._properties=[]):(this._properties=[],o.forEach(a=>{var l;const c=(l=e[a])==null?void 0:l.clone();if(!c)return null;e[a]=c;const u=c.offset.clone(),d=c.repeat.clone(),h=i.clone().sub(u),f=t.clone().sub(d);this._properties.push({name:a,initialOffset:u,deltaOffset:h,initialScale:d,deltaScale:f})}))}applyWeight(e){this._properties.forEach(t=>{const i=this.material[t.name];i!==void 0&&(i.offset.add($d.copy(t.deltaOffset).multiplyScalar(e)),i.repeat.add($d.copy(t.deltaScale).multiplyScalar(e)))})}clearAppliedWeight(){this._properties.forEach(e=>{const t=this.material[e.name];t!==void 0&&(t.offset.copy(e.initialOffset),t.repeat.copy(e.initialScale))})}};qf._propertyNamesMap={isMeshStandardMaterial:["map","emissiveMap","bumpMap","normalMap","displacementMap","roughnessMap","metalnessMap","alphaMap"],isMeshBasicMaterial:["map","specularMap","alphaMap"],isMToonMaterial:["map","normalMap","emissiveMap","shadeMultiplyTexture","rimMultiplyTexture","outlineWidthMultiplyTexture","uvAnimationMaskTexture"]};var Zd=qf,Ey=new Set(["1.0","1.0-beta"]),jf=class Kf{get name(){return"VRMExpressionLoaderPlugin"}constructor(e){this.parser=e}afterRoot(e){return Ke(this,null,function*(){e.userData.vrmExpressionManager=yield this._import(e)})}_import(e){return Ke(this,null,function*(){const t=yield this._v1Import(e);if(t)return t;const i=yield this._v0Import(e);return i||null})}_v1Import(e){return Ke(this,null,function*(){var t,i;const r=this.parser.json;if(!(((t=r.extensionsUsed)==null?void 0:t.indexOf("VRMC_vrm"))!==-1))return null;const o=(i=r.extensions)==null?void 0:i.VRMC_vrm;if(!o)return null;const a=o.specVersion;if(!Ey.has(a))return console.warn(`VRMExpressionLoaderPlugin: Unknown VRMC_vrm specVersion "${a}"`),null;const l=o.expressions;if(!l)return null;const c=new Set(Object.values(Rc)),u=new Map;l.preset!=null&&Object.entries(l.preset).forEach(([h,f])=>{if(f!=null){if(!c.has(h)){console.warn(`VRMExpressionLoaderPlugin: Unknown preset name "${h}" detected. Ignoring the expression`);return}u.set(h,f)}}),l.custom!=null&&Object.entries(l.custom).forEach(([h,f])=>{if(c.has(h)){console.warn(`VRMExpressionLoaderPlugin: Custom expression cannot have preset name "${h}". Ignoring the expression`);return}u.set(h,f)});const d=new jd;return yield Promise.all(Array.from(u.entries()).map(h=>Ke(this,[h],function*([f,g]){var _,p,m,y,M,T,C;const R=new Xd(f);if(e.scene.add(R),R.isBinary=(_=g.isBinary)!=null?_:!1,R.overrideBlink=(p=g.overrideBlink)!=null?p:"none",R.overrideLookAt=(m=g.overrideLookAt)!=null?m:"none",R.overrideMouth=(y=g.overrideMouth)!=null?y:"none",(M=g.morphTargetBinds)==null||M.forEach(w=>Ke(this,null,function*(){var I;if(w.node===void 0||w.index===void 0)return;const W=yield qd(e,w.node),v=w.index;if(!W.every(S=>Array.isArray(S.morphTargetInfluences)&&v<S.morphTargetInfluences.length)){console.warn(`VRMExpressionLoaderPlugin: ${g.name} attempts to index morph #${v} but not found.`);return}R.addBind(new ta({primitives:W,index:v,weight:(I=w.weight)!=null?I:1}))})),g.materialColorBinds||g.textureTransformBinds){const w=[];e.scene.traverse(I=>{const W=I.material;W&&(Array.isArray(W)?w.push(...W):w.push(W))}),(T=g.materialColorBinds)==null||T.forEach(I=>Ke(this,null,function*(){w.filter(v=>{var S;const B=(S=this.parser.associations.get(v))==null?void 0:S.materials;return I.material===B}).forEach(v=>{R.addBind(new Kd({material:v,type:I.type,targetValue:new ye().fromArray(I.targetValue),targetAlpha:I.targetValue[3]}))})})),(C=g.textureTransformBinds)==null||C.forEach(I=>Ke(this,null,function*(){w.filter(v=>{var S;const B=(S=this.parser.associations.get(v))==null?void 0:S.materials;return I.material===B}).forEach(v=>{var S,B;R.addBind(new Zd({material:v,offset:new Fe().fromArray((S=I.offset)!=null?S:[0,0]),scale:new Fe().fromArray((B=I.scale)!=null?B:[1,1])}))})}))}d.registerExpression(R)}))),d})}_v0Import(e){return Ke(this,null,function*(){var t;const i=this.parser.json,r=(t=i.extensions)==null?void 0:t.VRM;if(!r)return null;const s=r.blendShapeMaster;if(!s)return null;const o=new jd,a=s.blendShapeGroups;if(!a)return o;const l=new Set;return yield Promise.all(a.map(c=>Ke(this,null,function*(){var u;const d=c.presetName,h=d!=null&&Kf.v0v1PresetNameMap[d]||null,f=h??c.name;if(f==null){console.warn("VRMExpressionLoaderPlugin: One of custom expressions has no name. Ignoring the expression");return}if(l.has(f)){console.warn(`VRMExpressionLoaderPlugin: An expression preset ${d} has duplicated entries. Ignoring the expression`);return}l.add(f);const g=new Xd(f);e.scene.add(g),g.isBinary=(u=c.isBinary)!=null?u:!1,c.binds&&c.binds.forEach(p=>Ke(this,null,function*(){var m;if(p.mesh===void 0||p.index===void 0)return;const y=[];if((m=i.nodes)==null||m.forEach((T,C)=>{T.mesh===p.mesh&&y.push(C)}),y.length===0){console.warn(`VRMExpressionLoaderPlugin: ${c.name} attempts to bind a morph target to the mesh #${p.mesh} but the mesh is not found or not used in the scene. Ignoring the bind.`);return}const M=p.index;yield Promise.all(y.map(T=>Ke(this,null,function*(){var C;const R=yield qd(e,T);if(!R.every(w=>Array.isArray(w.morphTargetInfluences)&&M<w.morphTargetInfluences.length)){console.warn(`VRMExpressionLoaderPlugin: ${c.name} attempts to index ${M}th morph but not found.`);return}g.addBind(new ta({primitives:R,index:M,weight:.01*((C=p.weight)!=null?C:100)}))})))}));const _=c.materialValues;_&&_.length!==0&&_.forEach(p=>{if(p.materialName===void 0||p.propertyName===void 0||p.targetValue===void 0)return;const m=[];e.scene.traverse(M=>{if(M.material){const T=M.material;Array.isArray(T)?m.push(...T.filter(C=>(C.name===p.materialName||C.name===p.materialName+" (Outline)")&&m.indexOf(C)===-1)):T.name===p.materialName&&m.indexOf(T)===-1&&m.push(T)}});const y=p.propertyName;m.forEach(M=>{if(y==="_MainTex_ST"){const C=new Fe(p.targetValue[0],p.targetValue[1]),R=new Fe(p.targetValue[2],p.targetValue[3]);R.y=1-R.y-C.y,g.addBind(new Zd({material:M,scale:C,offset:R}));return}const T=yy[y];if(T){g.addBind(new Kd({material:M,type:T,targetValue:new ye().fromArray(p.targetValue),targetAlpha:p.targetValue[3]}));return}console.warn(y+" is not supported")})}),o.registerExpression(g)}))),o})}};jf.v0v1PresetNameMap={a:"aa",e:"ee",i:"ih",o:"oh",u:"ou",blink:"blink",joy:"happy",angry:"angry",sorrow:"sad",fun:"relaxed",lookup:"lookUp",lookdown:"lookDown",lookleft:"lookLeft",lookright:"lookRight",blink_l:"blinkLeft",blink_r:"blinkRight",neutral:"neutral"};var Ty=jf,ou=class ur{constructor(e,t){this._firstPersonOnlyLayer=ur.DEFAULT_FIRSTPERSON_ONLY_LAYER,this._thirdPersonOnlyLayer=ur.DEFAULT_THIRDPERSON_ONLY_LAYER,this._initializedLayers=!1,this.humanoid=e,this.meshAnnotations=t}copy(e){if(this.humanoid!==e.humanoid)throw new Error("VRMFirstPerson: humanoid must be same in order to copy");return this.meshAnnotations=e.meshAnnotations.map(t=>({meshes:t.meshes.concat(),type:t.type})),this}clone(){return new ur(this.humanoid,this.meshAnnotations).copy(this)}get firstPersonOnlyLayer(){return this._firstPersonOnlyLayer}get thirdPersonOnlyLayer(){return this._thirdPersonOnlyLayer}setup({firstPersonOnlyLayer:e=ur.DEFAULT_FIRSTPERSON_ONLY_LAYER,thirdPersonOnlyLayer:t=ur.DEFAULT_THIRDPERSON_ONLY_LAYER}={}){this._initializedLayers||(this._firstPersonOnlyLayer=e,this._thirdPersonOnlyLayer=t,this.meshAnnotations.forEach(i=>{i.meshes.forEach(r=>{i.type==="firstPersonOnly"?(r.layers.set(this._firstPersonOnlyLayer),r.traverse(s=>s.layers.set(this._firstPersonOnlyLayer))):i.type==="thirdPersonOnly"?(r.layers.set(this._thirdPersonOnlyLayer),r.traverse(s=>s.layers.set(this._thirdPersonOnlyLayer))):i.type==="auto"&&this._createHeadlessModel(r)})}),this._initializedLayers=!0)}_excludeTriangles(e,t,i,r){let s=0;if(t!=null&&t.length>0)for(let o=0;o<e.length;o+=3){const a=e[o],l=e[o+1],c=e[o+2],u=t[a],d=i[a];if(u[0]>0&&r.includes(d[0])||u[1]>0&&r.includes(d[1])||u[2]>0&&r.includes(d[2])||u[3]>0&&r.includes(d[3]))continue;const h=t[l],f=i[l];if(h[0]>0&&r.includes(f[0])||h[1]>0&&r.includes(f[1])||h[2]>0&&r.includes(f[2])||h[3]>0&&r.includes(f[3]))continue;const g=t[c],_=i[c];g[0]>0&&r.includes(_[0])||g[1]>0&&r.includes(_[1])||g[2]>0&&r.includes(_[2])||g[3]>0&&r.includes(_[3])||(e[s++]=a,e[s++]=l,e[s++]=c)}return s}_createErasedMesh(e,t){const i=new Rf(e.geometry.clone(),e.material);i.name=`${e.name}(erase)`,i.frustumCulled=e.frustumCulled,i.layers.set(this._firstPersonOnlyLayer);const r=i.geometry,s=r.getAttribute("skinIndex"),o=s instanceof kd?[]:s.array,a=[];for(let _=0;_<o.length;_+=4)a.push([o[_],o[_+1],o[_+2],o[_+3]]);const l=r.getAttribute("skinWeight"),c=l instanceof kd?[]:l.array,u=[];for(let _=0;_<c.length;_+=4)u.push([c[_],c[_+1],c[_+2],c[_+3]]);const d=r.getIndex();if(!d)throw new Error("The geometry doesn't have an index buffer");const h=Array.from(d.array),f=this._excludeTriangles(h,u,a,t),g=[];for(let _=0;_<f;_++)g[_]=h[_];return r.setIndex(g),e.onBeforeRender&&(i.onBeforeRender=e.onBeforeRender),i.bind(new Vr(e.skeleton.bones,e.skeleton.boneInverses),new Te),i}_createHeadlessModelForSkinnedMesh(e,t){const i=[];if(t.skeleton.bones.forEach((s,o)=>{this._isEraseTarget(s)&&i.push(o)}),!i.length){t.layers.enable(this._thirdPersonOnlyLayer),t.layers.enable(this._firstPersonOnlyLayer);return}t.layers.set(this._thirdPersonOnlyLayer);const r=this._createErasedMesh(t,i);e.add(r)}_createHeadlessModel(e){if(e.type==="Group")if(e.layers.set(this._thirdPersonOnlyLayer),this._isEraseTarget(e))e.traverse(t=>t.layers.set(this._thirdPersonOnlyLayer));else{const t=new zt;t.name=`_headless_${e.name}`,t.layers.set(this._firstPersonOnlyLayer),e.parent.add(t),e.children.filter(i=>i.type==="SkinnedMesh").forEach(i=>{const r=i;this._createHeadlessModelForSkinnedMesh(t,r)})}else if(e.type==="SkinnedMesh"){const t=e;this._createHeadlessModelForSkinnedMesh(e.parent,t)}else this._isEraseTarget(e)&&(e.layers.set(this._thirdPersonOnlyLayer),e.traverse(t=>t.layers.set(this._thirdPersonOnlyLayer)))}_isEraseTarget(e){return e===this.humanoid.getRawBoneNode("head")?!0:e.parent?this._isEraseTarget(e.parent):!1}};ou.DEFAULT_FIRSTPERSON_ONLY_LAYER=9;ou.DEFAULT_THIRDPERSON_ONLY_LAYER=10;var Jd=ou,wy=new Set(["1.0","1.0-beta"]),Ay=class{get name(){return"VRMFirstPersonLoaderPlugin"}constructor(n){this.parser=n}afterRoot(n){return Ke(this,null,function*(){const e=n.userData.vrmHumanoid;if(e!==null){if(e===void 0)throw new Error("VRMFirstPersonLoaderPlugin: vrmHumanoid is undefined. VRMHumanoidLoaderPlugin have to be used first");n.userData.vrmFirstPerson=yield this._import(n,e)}})}_import(n,e){return Ke(this,null,function*(){if(e==null)return null;const t=yield this._v1Import(n,e);if(t)return t;const i=yield this._v0Import(n,e);return i||null})}_v1Import(n,e){return Ke(this,null,function*(){var t,i;const r=this.parser.json;if(!(((t=r.extensionsUsed)==null?void 0:t.indexOf("VRMC_vrm"))!==-1))return null;const o=(i=r.extensions)==null?void 0:i.VRMC_vrm;if(!o)return null;const a=o.specVersion;if(!wy.has(a))return console.warn(`VRMFirstPersonLoaderPlugin: Unknown VRMC_vrm specVersion "${a}"`),null;const l=o.firstPerson,c=[],u=yield Yd(n);return Array.from(u.entries()).forEach(([d,h])=>{var f,g;const _=(f=l==null?void 0:l.meshAnnotations)==null?void 0:f.find(p=>p.node===d);c.push({meshes:h,type:(g=_==null?void 0:_.type)!=null?g:"auto"})}),new Jd(e,c)})}_v0Import(n,e){return Ke(this,null,function*(){var t;const i=this.parser.json,r=(t=i.extensions)==null?void 0:t.VRM;if(!r)return null;const s=r.firstPerson;if(!s)return null;const o=[],a=yield Yd(n);return Array.from(a.entries()).forEach(([l,c])=>{const u=i.nodes[l],d=s.meshAnnotations?s.meshAnnotations.find(h=>h.mesh===u.mesh):void 0;o.push({meshes:c,type:this._convertV0FlagToV1Type(d==null?void 0:d.firstPersonFlag)})}),new Jd(e,o)})}_convertV0FlagToV1Type(n){return n==="FirstPersonOnly"?"firstPersonOnly":n==="ThirdPersonOnly"?"thirdPersonOnly":n==="Both"?"both":"auto"}},Qd=new b,eh=new b,by=new Ee,th=class extends zt{constructor(n){super(),this.vrmHumanoid=n,this._boneAxesMap=new Map,Object.values(n.humanBones).forEach(e=>{const t=new kM(1);t.matrixAutoUpdate=!1,t.material.depthTest=!1,t.material.depthWrite=!1,this.add(t),this._boneAxesMap.set(e,t)})}dispose(){Array.from(this._boneAxesMap.values()).forEach(n=>{n.geometry.dispose(),n.material.dispose()})}updateMatrixWorld(n){Array.from(this._boneAxesMap.entries()).forEach(([e,t])=>{e.node.updateWorldMatrix(!0,!1),e.node.matrixWorld.decompose(Qd,by,eh);const i=Qd.set(.1,.1,.1).divide(eh);t.matrix.copy(e.node.matrixWorld).scale(i)}),super.updateMatrixWorld(n)}},_l=["hips","spine","chest","upperChest","neck","head","leftEye","rightEye","jaw","leftUpperLeg","leftLowerLeg","leftFoot","leftToes","rightUpperLeg","rightLowerLeg","rightFoot","rightToes","leftShoulder","leftUpperArm","leftLowerArm","leftHand","rightShoulder","rightUpperArm","rightLowerArm","rightHand","leftThumbMetacarpal","leftThumbProximal","leftThumbDistal","leftIndexProximal","leftIndexIntermediate","leftIndexDistal","leftMiddleProximal","leftMiddleIntermediate","leftMiddleDistal","leftRingProximal","leftRingIntermediate","leftRingDistal","leftLittleProximal","leftLittleIntermediate","leftLittleDistal","rightThumbMetacarpal","rightThumbProximal","rightThumbDistal","rightIndexProximal","rightIndexIntermediate","rightIndexDistal","rightMiddleProximal","rightMiddleIntermediate","rightMiddleDistal","rightRingProximal","rightRingIntermediate","rightRingDistal","rightLittleProximal","rightLittleIntermediate","rightLittleDistal"],Ry={hips:null,spine:"hips",chest:"spine",upperChest:"chest",neck:"upperChest",head:"neck",leftEye:"head",rightEye:"head",jaw:"head",leftUpperLeg:"hips",leftLowerLeg:"leftUpperLeg",leftFoot:"leftLowerLeg",leftToes:"leftFoot",rightUpperLeg:"hips",rightLowerLeg:"rightUpperLeg",rightFoot:"rightLowerLeg",rightToes:"rightFoot",leftShoulder:"upperChest",leftUpperArm:"leftShoulder",leftLowerArm:"leftUpperArm",leftHand:"leftLowerArm",rightShoulder:"upperChest",rightUpperArm:"rightShoulder",rightLowerArm:"rightUpperArm",rightHand:"rightLowerArm",leftThumbMetacarpal:"leftHand",leftThumbProximal:"leftThumbMetacarpal",leftThumbDistal:"leftThumbProximal",leftIndexProximal:"leftHand",leftIndexIntermediate:"leftIndexProximal",leftIndexDistal:"leftIndexIntermediate",leftMiddleProximal:"leftHand",leftMiddleIntermediate:"leftMiddleProximal",leftMiddleDistal:"leftMiddleIntermediate",leftRingProximal:"leftHand",leftRingIntermediate:"leftRingProximal",leftRingDistal:"leftRingIntermediate",leftLittleProximal:"leftHand",leftLittleIntermediate:"leftLittleProximal",leftLittleDistal:"leftLittleIntermediate",rightThumbMetacarpal:"rightHand",rightThumbProximal:"rightThumbMetacarpal",rightThumbDistal:"rightThumbProximal",rightIndexProximal:"rightHand",rightIndexIntermediate:"rightIndexProximal",rightIndexDistal:"rightIndexIntermediate",rightMiddleProximal:"rightHand",rightMiddleIntermediate:"rightMiddleProximal",rightMiddleDistal:"rightMiddleIntermediate",rightRingProximal:"rightHand",rightRingIntermediate:"rightRingProximal",rightRingDistal:"rightRingIntermediate",rightLittleProximal:"rightHand",rightLittleIntermediate:"rightLittleProximal",rightLittleDistal:"rightLittleIntermediate"};function $f(n){return n.invert?n.invert():n.inverse(),n}var Ti=new b,wi=new Ee,Cc=class{constructor(n){this.humanBones=n,this.restPose=this.getAbsolutePose()}getAbsolutePose(){const n={};return Object.keys(this.humanBones).forEach(e=>{const t=e,i=this.getBoneNode(t);i&&(Ti.copy(i.position),wi.copy(i.quaternion),n[t]={position:Ti.toArray(),rotation:wi.toArray()})}),n}getPose(){const n={};return Object.keys(this.humanBones).forEach(e=>{const t=e,i=this.getBoneNode(t);if(!i)return;Ti.set(0,0,0),wi.identity();const r=this.restPose[t];r!=null&&r.position&&Ti.fromArray(r.position).negate(),r!=null&&r.rotation&&$f(wi.fromArray(r.rotation)),Ti.add(i.position),wi.premultiply(i.quaternion),n[t]={position:Ti.toArray(),rotation:wi.toArray()}}),n}setPose(n){Object.entries(n).forEach(([e,t])=>{const i=e,r=this.getBoneNode(i);if(!r)return;const s=this.restPose[i];s&&(t!=null&&t.position&&(r.position.fromArray(t.position),s.position&&r.position.add(Ti.fromArray(s.position))),t!=null&&t.rotation&&(r.quaternion.fromArray(t.rotation),s.rotation&&r.quaternion.multiply(wi.fromArray(s.rotation))))})}resetPose(){Object.entries(this.restPose).forEach(([n,e])=>{const t=this.getBoneNode(n);t&&(e!=null&&e.position&&t.position.fromArray(e.position),e!=null&&e.rotation&&t.quaternion.fromArray(e.rotation))})}getBone(n){var e;return(e=this.humanBones[n])!=null?e:void 0}getBoneNode(n){var e,t;return(t=(e=this.humanBones[n])==null?void 0:e.node)!=null?t:null}},vl=new b,Cy=new Ee,Iy=new b,nh=class Zf extends Cc{static _setupTransforms(e){const t=new nt;t.name="VRMHumanoidRig";const i={},r={},s={};_l.forEach(a=>{var l;const c=e.getBoneNode(a);if(c){const u=new b,d=new Ee;c.updateWorldMatrix(!0,!1),c.matrixWorld.decompose(u,d,vl),i[a]=u,r[a]=c.quaternion.clone();const h=new Ee;(l=c.parent)==null||l.matrixWorld.decompose(vl,h,vl),s[a]=h}});const o={};return _l.forEach(a=>{var l;const c=e.getBoneNode(a);if(c){const u=i[a];let d=a,h;for(;h==null&&(d=Ry[d],d!=null);)h=i[d];const f=new nt;f.name="Normalized_"+c.name,(d?(l=o[d])==null?void 0:l.node:t).add(f),f.position.copy(u),h&&f.position.sub(h),o[a]={node:f}}}),{rigBones:o,root:t,parentWorldRotations:s,boneRotations:r}}constructor(e){const{rigBones:t,root:i,parentWorldRotations:r,boneRotations:s}=Zf._setupTransforms(e);super(t),this.original=e,this.root=i,this._parentWorldRotations=r,this._boneRotations=s}update(){_l.forEach(e=>{const t=this.original.getBoneNode(e);if(t!=null){const i=this.getBoneNode(e),r=this._parentWorldRotations[e],s=Cy.copy(r).invert(),o=this._boneRotations[e];if(t.quaternion.copy(i.quaternion).multiply(r).premultiply(s).multiply(o),e==="hips"){const a=i.getWorldPosition(Iy);t.parent.updateWorldMatrix(!0,!1);const l=t.parent.matrixWorld,c=a.applyMatrix4(l.invert());t.position.copy(c)}}})}},ih=class Jf{get restPose(){return console.warn("VRMHumanoid: restPose is deprecated. Use either rawRestPose or normalizedRestPose instead."),this.rawRestPose}get rawRestPose(){return this._rawHumanBones.restPose}get normalizedRestPose(){return this._normalizedHumanBones.restPose}get humanBones(){return this._rawHumanBones.humanBones}get rawHumanBones(){return this._rawHumanBones.humanBones}get normalizedHumanBones(){return this._normalizedHumanBones.humanBones}get normalizedHumanBonesRoot(){return this._normalizedHumanBones.root}constructor(e,t){var i;this.autoUpdateHumanBones=(i=t==null?void 0:t.autoUpdateHumanBones)!=null?i:!0,this._rawHumanBones=new Cc(e),this._normalizedHumanBones=new nh(this._rawHumanBones)}copy(e){return this.autoUpdateHumanBones=e.autoUpdateHumanBones,this._rawHumanBones=new Cc(e.humanBones),this._normalizedHumanBones=new nh(this._rawHumanBones),this}clone(){return new Jf(this.humanBones,{autoUpdateHumanBones:this.autoUpdateHumanBones}).copy(this)}getAbsolutePose(){return console.warn("VRMHumanoid: getAbsolutePose() is deprecated. Use either getRawAbsolutePose() or getNormalizedAbsolutePose() instead."),this.getRawAbsolutePose()}getRawAbsolutePose(){return this._rawHumanBones.getAbsolutePose()}getNormalizedAbsolutePose(){return this._normalizedHumanBones.getAbsolutePose()}getPose(){return console.warn("VRMHumanoid: getPose() is deprecated. Use either getRawPose() or getNormalizedPose() instead."),this.getRawPose()}getRawPose(){return this._rawHumanBones.getPose()}getNormalizedPose(){return this._normalizedHumanBones.getPose()}setPose(e){return console.warn("VRMHumanoid: setPose() is deprecated. Use either setRawPose() or setNormalizedPose() instead."),this.setRawPose(e)}setRawPose(e){return this._rawHumanBones.setPose(e)}setNormalizedPose(e){return this._normalizedHumanBones.setPose(e)}resetPose(){return console.warn("VRMHumanoid: resetPose() is deprecated. Use either resetRawPose() or resetNormalizedPose() instead."),this.resetRawPose()}resetRawPose(){return this._rawHumanBones.resetPose()}resetNormalizedPose(){return this._normalizedHumanBones.resetPose()}getBone(e){return console.warn("VRMHumanoid: getBone() is deprecated. Use either getRawBone() or getNormalizedBone() instead."),this.getRawBone(e)}getRawBone(e){return this._rawHumanBones.getBone(e)}getNormalizedBone(e){return this._normalizedHumanBones.getBone(e)}getBoneNode(e){return console.warn("VRMHumanoid: getBoneNode() is deprecated. Use either getRawBoneNode() or getNormalizedBoneNode() instead."),this.getRawBoneNode(e)}getRawBoneNode(e){return this._rawHumanBones.getBoneNode(e)}getNormalizedBoneNode(e){return this._normalizedHumanBones.getBoneNode(e)}update(){this.autoUpdateHumanBones&&this._normalizedHumanBones.update()}},Py={Hips:"hips",Spine:"spine",Head:"head",LeftUpperLeg:"leftUpperLeg",LeftLowerLeg:"leftLowerLeg",LeftFoot:"leftFoot",RightUpperLeg:"rightUpperLeg",RightLowerLeg:"rightLowerLeg",RightFoot:"rightFoot",LeftUpperArm:"leftUpperArm",LeftLowerArm:"leftLowerArm",LeftHand:"leftHand",RightUpperArm:"rightUpperArm",RightLowerArm:"rightLowerArm",RightHand:"rightHand"},Ly=new Set(["1.0","1.0-beta"]),rh={leftThumbProximal:"leftThumbMetacarpal",leftThumbIntermediate:"leftThumbProximal",rightThumbProximal:"rightThumbMetacarpal",rightThumbIntermediate:"rightThumbProximal"},Ny=class{get name(){return"VRMHumanoidLoaderPlugin"}constructor(n,e){this.parser=n,this.helperRoot=e==null?void 0:e.helperRoot,this.autoUpdateHumanBones=e==null?void 0:e.autoUpdateHumanBones}afterRoot(n){return Ke(this,null,function*(){n.userData.vrmHumanoid=yield this._import(n)})}_import(n){return Ke(this,null,function*(){const e=yield this._v1Import(n);if(e)return e;const t=yield this._v0Import(n);return t||null})}_v1Import(n){return Ke(this,null,function*(){var e,t;const i=this.parser.json;if(!(((e=i.extensionsUsed)==null?void 0:e.indexOf("VRMC_vrm"))!==-1))return null;const s=(t=i.extensions)==null?void 0:t.VRMC_vrm;if(!s)return null;const o=s.specVersion;if(!Ly.has(o))return console.warn(`VRMHumanoidLoaderPlugin: Unknown VRMC_vrm specVersion "${o}"`),null;const a=s.humanoid;if(!a)return null;const l=a.humanBones.leftThumbIntermediate!=null||a.humanBones.rightThumbIntermediate!=null,c={};a.humanBones!=null&&(yield Promise.all(Object.entries(a.humanBones).map(d=>Ke(this,[d],function*([h,f]){let g=h;const _=f.node;if(l){const m=rh[g];m!=null&&(g=m)}const p=yield this.parser.getDependency("node",_);if(p==null){console.warn(`A glTF node bound to the humanoid bone ${g} (index = ${_}) does not exist`);return}c[g]={node:p}}))));const u=new ih(this._ensureRequiredBonesExist(c),{autoUpdateHumanBones:this.autoUpdateHumanBones});if(n.scene.add(u.normalizedHumanBonesRoot),this.helperRoot){const d=new th(u);this.helperRoot.add(d),d.renderOrder=this.helperRoot.renderOrder}return u})}_v0Import(n){return Ke(this,null,function*(){var e;const i=(e=this.parser.json.extensions)==null?void 0:e.VRM;if(!i)return null;const r=i.humanoid;if(!r)return null;const s={};r.humanBones!=null&&(yield Promise.all(r.humanBones.map(a=>Ke(this,null,function*(){const l=a.bone,c=a.node;if(l==null||c==null)return;if(c<0){console.warn(`A glTF node index for the humanoid bone ${l} is negative (${c}), ignoring this bone.`);return}const u=yield this.parser.getDependency("node",c);if(u==null){console.warn(`A glTF node bound to the humanoid bone ${l} (index = ${c}) does not exist`);return}const d=rh[l],h=d??l;if(s[h]!=null){console.warn(`Multiple bone entries for ${h} detected (index = ${c}), ignoring duplicated entries.`);return}s[h]={node:u}}))));const o=new ih(this._ensureRequiredBonesExist(s),{autoUpdateHumanBones:this.autoUpdateHumanBones});if(n.scene.add(o.normalizedHumanBonesRoot),this.helperRoot){const a=new th(o);this.helperRoot.add(a),a.renderOrder=this.helperRoot.renderOrder}return o})}_ensureRequiredBonesExist(n){const e=Object.values(Py).filter(t=>n[t]==null);if(e.length>0)throw new Error(`VRMHumanoidLoaderPlugin: These humanoid bones are required but not exist: ${e.join(", ")}`);return n}},sh=class extends pt{constructor(){super(),this._currentTheta=0,this._currentRadius=0,this.theta=0,this.radius=0,this._currentTheta=0,this._currentRadius=0,this._attrPos=new ke(new Float32Array(65*3),3),this.setAttribute("position",this._attrPos),this._attrIndex=new ke(new Uint16Array(3*63),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let n=!1;this._currentTheta!==this.theta&&(this._currentTheta=this.theta,n=!0),this._currentRadius!==this.radius&&(this._currentRadius=this.radius,n=!0),n&&this._buildPosition()}_buildPosition(){this._attrPos.setXYZ(0,0,0,0);for(let n=0;n<64;n++){const e=n/63*this._currentTheta;this._attrPos.setXYZ(n+1,this._currentRadius*Math.sin(e),0,this._currentRadius*Math.cos(e))}this._attrPos.needsUpdate=!0}_buildIndex(){for(let n=0;n<63;n++)this._attrIndex.setXYZ(n*3,0,n+1,n+2);this._attrIndex.needsUpdate=!0}},Uy=class extends pt{constructor(){super(),this.radius=0,this._currentRadius=0,this.tail=new b,this._currentTail=new b,this._attrPos=new ke(new Float32Array(294),3),this.setAttribute("position",this._attrPos),this._attrIndex=new ke(new Uint16Array(194),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let n=!1;this._currentRadius!==this.radius&&(this._currentRadius=this.radius,n=!0),this._currentTail.equals(this.tail)||(this._currentTail.copy(this.tail),n=!0),n&&this._buildPosition()}_buildPosition(){for(let n=0;n<32;n++){const e=n/16*Math.PI;this._attrPos.setXYZ(n,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+n,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+n,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.setXYZ(96,0,0,0),this._attrPos.setXYZ(97,this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let n=0;n<32;n++){const e=(n+1)%32;this._attrIndex.setXY(n*2,n,e),this._attrIndex.setXY(64+n*2,32+n,32+e),this._attrIndex.setXY(128+n*2,64+n,64+e)}this._attrIndex.setXY(192,96,97),this._attrIndex.needsUpdate=!0}},Mo=new Ee,oh=new Ee,as=new b,ah=new b,lh=Math.sqrt(2)/2,Dy=new Ee(0,0,-lh,lh),Oy=new b(0,1,0),Fy=class extends zt{constructor(n){super(),this.matrixAutoUpdate=!1,this.vrmLookAt=n;{const e=new sh;e.radius=.5;const t=new En({color:65280,transparent:!0,opacity:.5,side:tn,depthTest:!1,depthWrite:!1});this._meshPitch=new lt(e,t),this.add(this._meshPitch)}{const e=new sh;e.radius=.5;const t=new En({color:16711680,transparent:!0,opacity:.5,side:tn,depthTest:!1,depthWrite:!1});this._meshYaw=new lt(e,t),this.add(this._meshYaw)}{const e=new Uy;e.radius=.1;const t=new mi({color:16777215,depthTest:!1,depthWrite:!1});this._lineTarget=new Hr(e,t),this._lineTarget.frustumCulled=!1,this.add(this._lineTarget)}}dispose(){this._meshYaw.geometry.dispose(),this._meshYaw.material.dispose(),this._meshPitch.geometry.dispose(),this._meshPitch.material.dispose(),this._lineTarget.geometry.dispose(),this._lineTarget.material.dispose()}updateMatrixWorld(n){const e=tt.DEG2RAD*this.vrmLookAt.yaw;this._meshYaw.geometry.theta=e,this._meshYaw.geometry.update();const t=tt.DEG2RAD*this.vrmLookAt.pitch;this._meshPitch.geometry.theta=t,this._meshPitch.geometry.update(),this.vrmLookAt.getLookAtWorldPosition(as),this.vrmLookAt.getLookAtWorldQuaternion(Mo),Mo.multiply(this.vrmLookAt.getFaceFrontQuaternion(oh)),this._meshYaw.position.copy(as),this._meshYaw.quaternion.copy(Mo),this._meshPitch.position.copy(as),this._meshPitch.quaternion.copy(Mo),this._meshPitch.quaternion.multiply(oh.setFromAxisAngle(Oy,e)),this._meshPitch.quaternion.multiply(Dy);const{target:i,autoUpdate:r}=this.vrmLookAt;i!=null&&r&&(i.getWorldPosition(ah).sub(as),this._lineTarget.geometry.tail.copy(ah),this._lineTarget.geometry.update(),this._lineTarget.position.copy(as)),super.updateMatrixWorld(n)}},By=new b,ky=new b;function Ic(n,e){return n.matrixWorld.decompose(By,e,ky),e}function Uo(n){return[Math.atan2(-n.z,n.x),Math.atan2(n.y,Math.sqrt(n.x*n.x+n.z*n.z))]}function ch(n){const e=Math.round(n/2/Math.PI);return n-2*Math.PI*e}var uh=new b(0,0,1),Vy=new b,Hy=new b,zy=new b,Gy=new Ee,xl=new Ee,dh=new Ee,Wy=new Ee,Ml=new $t,Qf=class ep{constructor(e,t){this.offsetFromHeadBone=new b,this.autoUpdate=!0,this.faceFront=new b(0,0,1),this.humanoid=e,this.applier=t,this._yaw=0,this._pitch=0,this._needsUpdate=!0,this._restHeadWorldQuaternion=this.getLookAtWorldQuaternion(new Ee)}get yaw(){return this._yaw}set yaw(e){this._yaw=e,this._needsUpdate=!0}get pitch(){return this._pitch}set pitch(e){this._pitch=e,this._needsUpdate=!0}get euler(){return console.warn("VRMLookAt: euler is deprecated. use getEuler() instead."),this.getEuler(new $t)}getEuler(e){return e.set(tt.DEG2RAD*this._pitch,tt.DEG2RAD*this._yaw,0,"YXZ")}copy(e){if(this.humanoid!==e.humanoid)throw new Error("VRMLookAt: humanoid must be same in order to copy");return this.offsetFromHeadBone.copy(e.offsetFromHeadBone),this.applier=e.applier,this.autoUpdate=e.autoUpdate,this.target=e.target,this.faceFront.copy(e.faceFront),this}clone(){return new ep(this.humanoid,this.applier).copy(this)}reset(){this._yaw=0,this._pitch=0,this._needsUpdate=!0}getLookAtWorldPosition(e){const t=this.humanoid.getRawBoneNode("head");return e.copy(this.offsetFromHeadBone).applyMatrix4(t.matrixWorld)}getLookAtWorldQuaternion(e){const t=this.humanoid.getRawBoneNode("head");return Ic(t,e)}getFaceFrontQuaternion(e){if(this.faceFront.distanceToSquared(uh)<.01)return e.copy(this._restHeadWorldQuaternion).invert();const[t,i]=Uo(this.faceFront);return Ml.set(0,.5*Math.PI+t,i,"YZX"),e.setFromEuler(Ml).premultiply(Wy.copy(this._restHeadWorldQuaternion).invert())}getLookAtWorldDirection(e){return this.getLookAtWorldQuaternion(xl),this.getFaceFrontQuaternion(dh),e.copy(uh).applyQuaternion(xl).applyQuaternion(dh).applyEuler(this.getEuler(Ml))}lookAt(e){const t=Gy.copy(this._restHeadWorldQuaternion).multiply($f(this.getLookAtWorldQuaternion(xl))),i=this.getLookAtWorldPosition(Hy),r=zy.copy(e).sub(i).applyQuaternion(t).normalize(),[s,o]=Uo(this.faceFront),[a,l]=Uo(r),c=ch(a-s),u=ch(o-l);this._yaw=tt.RAD2DEG*c,this._pitch=tt.RAD2DEG*u,this._needsUpdate=!0}update(e){this.target!=null&&this.autoUpdate&&this.lookAt(this.target.getWorldPosition(Vy)),this._needsUpdate&&(this._needsUpdate=!1,this.applier.applyYawPitch(this._yaw,this._pitch))}};Qf.EULER_ORDER="YXZ";var Xy=Qf,qy=new b(0,0,1),vn=new Ee,sr=new Ee,Qt=new $t(0,0,0,"YXZ"),Do=class{constructor(n,e,t,i,r){this.humanoid=n,this.rangeMapHorizontalInner=e,this.rangeMapHorizontalOuter=t,this.rangeMapVerticalDown=i,this.rangeMapVerticalUp=r,this.faceFront=new b(0,0,1),this._restQuatLeftEye=new Ee,this._restQuatRightEye=new Ee,this._restLeftEyeParentWorldQuat=new Ee,this._restRightEyeParentWorldQuat=new Ee;const s=this.humanoid.getRawBoneNode("leftEye"),o=this.humanoid.getRawBoneNode("rightEye");s&&(this._restQuatLeftEye.copy(s.quaternion),Ic(s.parent,this._restLeftEyeParentWorldQuat)),o&&(this._restQuatRightEye.copy(o.quaternion),Ic(o.parent,this._restRightEyeParentWorldQuat))}applyYawPitch(n,e){const t=this.humanoid.getRawBoneNode("leftEye"),i=this.humanoid.getRawBoneNode("rightEye"),r=this.humanoid.getNormalizedBoneNode("leftEye"),s=this.humanoid.getNormalizedBoneNode("rightEye");t&&(e<0?Qt.x=-tt.DEG2RAD*this.rangeMapVerticalDown.map(-e):Qt.x=tt.DEG2RAD*this.rangeMapVerticalUp.map(e),n<0?Qt.y=-tt.DEG2RAD*this.rangeMapHorizontalInner.map(-n):Qt.y=tt.DEG2RAD*this.rangeMapHorizontalOuter.map(n),vn.setFromEuler(Qt),this._getWorldFaceFrontQuat(sr),r.quaternion.copy(sr).multiply(vn).multiply(sr.invert()),vn.copy(this._restLeftEyeParentWorldQuat),t.quaternion.copy(r.quaternion).multiply(vn).premultiply(vn.invert()).multiply(this._restQuatLeftEye)),i&&(e<0?Qt.x=-tt.DEG2RAD*this.rangeMapVerticalDown.map(-e):Qt.x=tt.DEG2RAD*this.rangeMapVerticalUp.map(e),n<0?Qt.y=-tt.DEG2RAD*this.rangeMapHorizontalOuter.map(-n):Qt.y=tt.DEG2RAD*this.rangeMapHorizontalInner.map(n),vn.setFromEuler(Qt),this._getWorldFaceFrontQuat(sr),s.quaternion.copy(sr).multiply(vn).multiply(sr.invert()),vn.copy(this._restRightEyeParentWorldQuat),i.quaternion.copy(s.quaternion).multiply(vn).premultiply(vn.invert()).multiply(this._restQuatRightEye))}lookAt(n){console.warn("VRMLookAtBoneApplier: lookAt() is deprecated. use apply() instead.");const e=tt.RAD2DEG*n.y,t=tt.RAD2DEG*n.x;this.applyYawPitch(e,t)}_getWorldFaceFrontQuat(n){if(this.faceFront.distanceToSquared(qy)<.01)return n.identity();const[e,t]=Uo(this.faceFront);return Qt.set(0,.5*Math.PI+e,t,"YZX"),n.setFromEuler(Qt)}};Do.type="bone";var Pc=class{constructor(n,e,t,i,r){this.expressions=n,this.rangeMapHorizontalInner=e,this.rangeMapHorizontalOuter=t,this.rangeMapVerticalDown=i,this.rangeMapVerticalUp=r}applyYawPitch(n,e){e<0?(this.expressions.setValue("lookDown",0),this.expressions.setValue("lookUp",this.rangeMapVerticalUp.map(-e))):(this.expressions.setValue("lookUp",0),this.expressions.setValue("lookDown",this.rangeMapVerticalDown.map(e))),n<0?(this.expressions.setValue("lookLeft",0),this.expressions.setValue("lookRight",this.rangeMapHorizontalOuter.map(-n))):(this.expressions.setValue("lookRight",0),this.expressions.setValue("lookLeft",this.rangeMapHorizontalOuter.map(n)))}lookAt(n){console.warn("VRMLookAtBoneApplier: lookAt() is deprecated. use apply() instead.");const e=tt.RAD2DEG*n.y,t=tt.RAD2DEG*n.x;this.applyYawPitch(e,t)}};Pc.type="expression";var hh=class{constructor(n,e){this.inputMaxValue=n,this.outputScale=e}map(n){return this.outputScale*zf(n/this.inputMaxValue)}},Yy=new Set(["1.0","1.0-beta"]),yo=.01,jy=class{get name(){return"VRMLookAtLoaderPlugin"}constructor(n,e){this.parser=n,this.helperRoot=e==null?void 0:e.helperRoot}afterRoot(n){return Ke(this,null,function*(){const e=n.userData.vrmHumanoid;if(e===null)return;if(e===void 0)throw new Error("VRMLookAtLoaderPlugin: vrmHumanoid is undefined. VRMHumanoidLoaderPlugin have to be used first");const t=n.userData.vrmExpressionManager;if(t!==null){if(t===void 0)throw new Error("VRMLookAtLoaderPlugin: vrmExpressionManager is undefined. VRMExpressionLoaderPlugin have to be used first");n.userData.vrmLookAt=yield this._import(n,e,t)}})}_import(n,e,t){return Ke(this,null,function*(){if(e==null||t==null)return null;const i=yield this._v1Import(n,e,t);if(i)return i;const r=yield this._v0Import(n,e,t);return r||null})}_v1Import(n,e,t){return Ke(this,null,function*(){var i,r,s;const o=this.parser.json;if(!(((i=o.extensionsUsed)==null?void 0:i.indexOf("VRMC_vrm"))!==-1))return null;const l=(r=o.extensions)==null?void 0:r.VRMC_vrm;if(!l)return null;const c=l.specVersion;if(!Yy.has(c))return console.warn(`VRMLookAtLoaderPlugin: Unknown VRMC_vrm specVersion "${c}"`),null;const u=l.lookAt;if(!u)return null;const d=u.type==="expression"?1:10,h=this._v1ImportRangeMap(u.rangeMapHorizontalInner,d),f=this._v1ImportRangeMap(u.rangeMapHorizontalOuter,d),g=this._v1ImportRangeMap(u.rangeMapVerticalDown,d),_=this._v1ImportRangeMap(u.rangeMapVerticalUp,d);let p;u.type==="expression"?p=new Pc(t,h,f,g,_):p=new Do(e,h,f,g,_);const m=this._importLookAt(e,p);return m.offsetFromHeadBone.fromArray((s=u.offsetFromHeadBone)!=null?s:[0,.06,0]),m})}_v1ImportRangeMap(n,e){var t,i;let r=(t=n==null?void 0:n.inputMaxValue)!=null?t:90;const s=(i=n==null?void 0:n.outputScale)!=null?i:e;return r<yo&&(console.warn("VRMLookAtLoaderPlugin: inputMaxValue of a range map is too small. Consider reviewing the range map!"),r=yo),new hh(r,s)}_v0Import(n,e,t){return Ke(this,null,function*(){var i,r,s,o;const l=(i=this.parser.json.extensions)==null?void 0:i.VRM;if(!l)return null;const c=l.firstPerson;if(!c)return null;const u=c.lookAtTypeName==="BlendShape"?1:10,d=this._v0ImportDegreeMap(c.lookAtHorizontalInner,u),h=this._v0ImportDegreeMap(c.lookAtHorizontalOuter,u),f=this._v0ImportDegreeMap(c.lookAtVerticalDown,u),g=this._v0ImportDegreeMap(c.lookAtVerticalUp,u);let _;c.lookAtTypeName==="BlendShape"?_=new Pc(t,d,h,f,g):_=new Do(e,d,h,f,g);const p=this._importLookAt(e,_);return c.firstPersonBoneOffset?p.offsetFromHeadBone.set((r=c.firstPersonBoneOffset.x)!=null?r:0,(s=c.firstPersonBoneOffset.y)!=null?s:.06,-((o=c.firstPersonBoneOffset.z)!=null?o:0)):p.offsetFromHeadBone.set(0,.06,0),p.faceFront.set(0,0,-1),_ instanceof Do&&_.faceFront.set(0,0,-1),p})}_v0ImportDegreeMap(n,e){var t,i;const r=n==null?void 0:n.curve;JSON.stringify(r)!=="[0,0,0,1,1,1,1,0]"&&console.warn("Curves of LookAtDegreeMap defined in VRM 0.0 are not supported");let s=(t=n==null?void 0:n.xRange)!=null?t:90;const o=(i=n==null?void 0:n.yRange)!=null?i:e;return s<yo&&(console.warn("VRMLookAtLoaderPlugin: xRange of a degree map is too small. Consider reviewing the degree map!"),s=yo),new hh(s,o)}_importLookAt(n,e){const t=new Xy(n,e);if(this.helperRoot){const i=new Fy(t);this.helperRoot.add(i),i.renderOrder=this.helperRoot.renderOrder}return t}};function Ky(n,e){return typeof n!="string"||n===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(n)&&(e=e.replace(/(^https?:\/\/[^/]+).*/i,"$1")),/^(https?:)?\/\//i.test(n)||/^data:.*,.*$/i.test(n)||/^blob:.*$/i.test(n)?n:e+n)}var $y=new Set(["1.0","1.0-beta"]),Zy=class{get name(){return"VRMMetaLoaderPlugin"}constructor(n,e){var t,i,r;this.parser=n,this.needThumbnailImage=(t=e==null?void 0:e.needThumbnailImage)!=null?t:!1,this.acceptLicenseUrls=(i=e==null?void 0:e.acceptLicenseUrls)!=null?i:["https://vrm.dev/licenses/1.0/"],this.acceptV0Meta=(r=e==null?void 0:e.acceptV0Meta)!=null?r:!0}afterRoot(n){return Ke(this,null,function*(){n.userData.vrmMeta=yield this._import(n)})}_import(n){return Ke(this,null,function*(){const e=yield this._v1Import(n);if(e!=null)return e;const t=yield this._v0Import(n);return t??null})}_v1Import(n){return Ke(this,null,function*(){var e,t,i;const r=this.parser.json;if(!(((e=r.extensionsUsed)==null?void 0:e.indexOf("VRMC_vrm"))!==-1))return null;const o=(t=r.extensions)==null?void 0:t.VRMC_vrm;if(o==null)return null;const a=o.specVersion;if(!$y.has(a))return console.warn(`VRMMetaLoaderPlugin: Unknown VRMC_vrm specVersion "${a}"`),null;const l=o.meta;if(!l)return null;const c=l.licenseUrl;if(!new Set(this.acceptLicenseUrls).has(c))throw new Error(`VRMMetaLoaderPlugin: The license url "${c}" is not accepted`);let d;return this.needThumbnailImage&&l.thumbnailImage!=null&&(d=(i=yield this._extractGLTFImage(l.thumbnailImage))!=null?i:void 0),{metaVersion:"1",name:l.name,version:l.version,authors:l.authors,copyrightInformation:l.copyrightInformation,contactInformation:l.contactInformation,references:l.references,thirdPartyLicenses:l.thirdPartyLicenses,thumbnailImage:d,licenseUrl:l.licenseUrl,avatarPermission:l.avatarPermission,allowExcessivelyViolentUsage:l.allowExcessivelyViolentUsage,allowExcessivelySexualUsage:l.allowExcessivelySexualUsage,commercialUsage:l.commercialUsage,allowPoliticalOrReligiousUsage:l.allowPoliticalOrReligiousUsage,allowAntisocialOrHateUsage:l.allowAntisocialOrHateUsage,creditNotation:l.creditNotation,allowRedistribution:l.allowRedistribution,modification:l.modification,otherLicenseUrl:l.otherLicenseUrl}})}_v0Import(n){return Ke(this,null,function*(){var e;const i=(e=this.parser.json.extensions)==null?void 0:e.VRM;if(!i)return null;const r=i.meta;if(!r)return null;if(!this.acceptV0Meta)throw new Error("VRMMetaLoaderPlugin: Attempted to load VRM0.0 meta but acceptV0Meta is false");let s;return this.needThumbnailImage&&r.texture!=null&&r.texture!==-1&&(s=yield this.parser.getDependency("texture",r.texture)),{metaVersion:"0",allowedUserName:r.allowedUserName,author:r.author,commercialUssageName:r.commercialUssageName,contactInformation:r.contactInformation,licenseName:r.licenseName,otherLicenseUrl:r.otherLicenseUrl,otherPermissionUrl:r.otherPermissionUrl,reference:r.reference,sexualUssageName:r.sexualUssageName,texture:s??void 0,title:r.title,version:r.version,violentUssageName:r.violentUssageName}})}_extractGLTFImage(n){return Ke(this,null,function*(){var e;const i=(e=this.parser.json.images)==null?void 0:e[n];if(i==null)return console.warn(`VRMMetaLoaderPlugin: Attempt to use images[${n}] of glTF as a thumbnail but the image doesn't exist`),null;let r=i.uri;if(i.bufferView!=null){const o=yield this.parser.getDependency("bufferView",i.bufferView),a=new Blob([o],{type:i.mimeType});r=URL.createObjectURL(a)}return r==null?(console.warn(`VRMMetaLoaderPlugin: Attempt to use images[${n}] of glTF as a thumbnail but the image couldn't load properly`),null):yield new Df().loadAsync(Ky(r,this.parser.options.path)).catch(o=>(console.error(o),console.warn("VRMMetaLoaderPlugin: Failed to load a thumbnail image"),null))})}},Jy=class{constructor(n){this.scene=n.scene,this.meta=n.meta,this.humanoid=n.humanoid,this.expressionManager=n.expressionManager,this.firstPerson=n.firstPerson,this.lookAt=n.lookAt}update(n){this.humanoid.update(),this.lookAt&&this.lookAt.update(n),this.expressionManager&&this.expressionManager.update()}},Qy=class extends Jy{constructor(n){super(n),this.materials=n.materials,this.springBoneManager=n.springBoneManager,this.nodeConstraintManager=n.nodeConstraintManager}update(n){super.update(n),this.nodeConstraintManager&&this.nodeConstraintManager.update(),this.springBoneManager&&this.springBoneManager.update(n),this.materials&&this.materials.forEach(e=>{e.update&&e.update(n)})}},eS=Object.defineProperty,fh=Object.getOwnPropertySymbols,tS=Object.prototype.hasOwnProperty,nS=Object.prototype.propertyIsEnumerable,ph=(n,e,t)=>e in n?eS(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,mh=(n,e)=>{for(var t in e||(e={}))tS.call(e,t)&&ph(n,t,e[t]);if(fh)for(var t of fh(e))nS.call(e,t)&&ph(n,t,e[t]);return n},Ni=(n,e,t)=>new Promise((i,r)=>{var s=l=>{try{a(t.next(l))}catch(c){r(c)}},o=l=>{try{a(t.throw(l))}catch(c){r(c)}},a=l=>l.done?i(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(n,e)).next())}),iS={"":3e3,srgb:3001};function rS(n,e){parseInt(Fi,10)>=152?n.colorSpace=e:n.encoding=iS[e]}var sS=class{get pending(){return Promise.all(this._pendings)}constructor(n,e){this._parser=n,this._materialParams=e,this._pendings=[]}assignPrimitive(n,e){e!=null&&(this._materialParams[n]=e)}assignColor(n,e,t){if(e!=null){const i=new ye().fromArray(e);t&&i.convertSRGBToLinear(),this._materialParams[n]=i}}assignTexture(n,e,t){return Ni(this,null,function*(){const i=Ni(this,null,function*(){if(e!=null){const r=yield this._parser.assignTexture(this._materialParams,n,e);if(r==null){console.warn("GLTFMToonMaterialParamsAssignHelper: Failed to load texture. The rendering result may be wrong");return}t&&rS(r,"srgb")}});return this._pendings.push(i),i})}assignTextureByIndex(n,e,t){return Ni(this,null,function*(){return this.assignTexture(n,e!=null?{index:e}:void 0,t)})}},oS=`// #define PHONG

varying vec3 vViewPosition;

#ifndef FLAT_SHADED
  varying vec3 vNormal;
#endif

#include <common>

// #include <uv_pars_vertex>
#ifdef MTOON_USE_UV
  varying vec2 vUv;

  // COMPAT: pre-r151 uses a common uvTransform
  #if THREE_VRM_THREE_REVISION < 151
    uniform mat3 uvTransform;
  #endif
#endif

// #include <uv2_pars_vertex>
// COMAPT: pre-r151 uses uv2 for lightMap and aoMap
#if THREE_VRM_THREE_REVISION < 151
  #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
    attribute vec2 uv2;
    varying vec2 vUv2;
    uniform mat3 uv2Transform;
  #endif
#endif

// #include <displacementmap_pars_vertex>
// #include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

#ifdef USE_OUTLINEWIDTHMULTIPLYTEXTURE
  uniform sampler2D outlineWidthMultiplyTexture;
  uniform mat3 outlineWidthMultiplyTextureUvTransform;
#endif

uniform float outlineWidthFactor;

void main() {

  // #include <uv_vertex>
  #ifdef MTOON_USE_UV
    // COMPAT: pre-r151 uses a common uvTransform
    #if THREE_VRM_THREE_REVISION >= 151
      vUv = uv;
    #else
      vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
    #endif
  #endif

  // #include <uv2_vertex>
  // COMAPT: pre-r151 uses uv2 for lightMap and aoMap
  #if THREE_VRM_THREE_REVISION < 151
    #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
      vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
    #endif
  #endif

  #include <color_vertex>

  #include <beginnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>

  // we need this to compute the outline properly
  objectNormal = normalize( objectNormal );

  #include <defaultnormal_vertex>

  #ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED
    vNormal = normalize( transformedNormal );
  #endif

  #include <begin_vertex>

  #include <morphtarget_vertex>
  #include <skinning_vertex>
  // #include <displacementmap_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>

  vViewPosition = - mvPosition.xyz;

  #ifdef OUTLINE
    float worldNormalLength = length( transformedNormal );
    vec3 outlineOffset = outlineWidthFactor * worldNormalLength * objectNormal;

    #ifdef USE_OUTLINEWIDTHMULTIPLYTEXTURE
      vec2 outlineWidthMultiplyTextureUv = ( outlineWidthMultiplyTextureUvTransform * vec3( vUv, 1 ) ).xy;
      float outlineTex = texture2D( outlineWidthMultiplyTexture, outlineWidthMultiplyTextureUv ).g;
      outlineOffset *= outlineTex;
    #endif

    #ifdef OUTLINE_WIDTH_SCREEN
      outlineOffset *= vViewPosition.z / projectionMatrix[ 1 ].y;
    #endif

    gl_Position = projectionMatrix * modelViewMatrix * vec4( outlineOffset + transformed, 1.0 );

    gl_Position.z += 1E-6 * gl_Position.w; // anti-artifact magic
  #endif

  #include <worldpos_vertex>
  // #include <envmap_vertex>
  #include <shadowmap_vertex>
  #include <fog_vertex>

}`,aS=`// #define PHONG

uniform vec3 litFactor;

uniform float opacity;

uniform vec3 shadeColorFactor;
#ifdef USE_SHADEMULTIPLYTEXTURE
  uniform sampler2D shadeMultiplyTexture;
  uniform mat3 shadeMultiplyTextureUvTransform;
#endif

uniform float shadingShiftFactor;
uniform float shadingToonyFactor;

#ifdef USE_SHADINGSHIFTTEXTURE
  uniform sampler2D shadingShiftTexture;
  uniform mat3 shadingShiftTextureUvTransform;
  uniform float shadingShiftTextureScale;
#endif

uniform float giEqualizationFactor;

uniform vec3 parametricRimColorFactor;
#ifdef USE_RIMMULTIPLYTEXTURE
  uniform sampler2D rimMultiplyTexture;
  uniform mat3 rimMultiplyTextureUvTransform;
#endif
uniform float rimLightingMixFactor;
uniform float parametricRimFresnelPowerFactor;
uniform float parametricRimLiftFactor;

#ifdef USE_MATCAPTEXTURE
  uniform vec3 matcapFactor;
  uniform sampler2D matcapTexture;
  uniform mat3 matcapTextureUvTransform;
#endif

uniform vec3 emissive;
uniform float emissiveIntensity;

uniform vec3 outlineColorFactor;
uniform float outlineLightingMixFactor;

#ifdef USE_UVANIMATIONMASKTEXTURE
  uniform sampler2D uvAnimationMaskTexture;
  uniform mat3 uvAnimationMaskTextureUvTransform;
#endif

uniform float uvAnimationScrollXOffset;
uniform float uvAnimationScrollYOffset;
uniform float uvAnimationRotationPhase;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>

// #include <uv_pars_fragment>
#if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
  varying vec2 vUv;
#endif

// #include <uv2_pars_fragment>
// COMAPT: pre-r151 uses uv2 for lightMap and aoMap
#if THREE_VRM_THREE_REVISION < 151
  #if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
    varying vec2 vUv2;
  #endif
#endif

#include <map_pars_fragment>

#ifdef USE_MAP
  uniform mat3 mapUvTransform;
#endif

// #include <alphamap_pars_fragment>

#include <alphatest_pars_fragment>

#include <aomap_pars_fragment>
// #include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>

#ifdef USE_EMISSIVEMAP
  uniform mat3 emissiveMapUvTransform;
#endif

// #include <envmap_common_pars_fragment>
// #include <envmap_pars_fragment>
// #include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>

// #include <bsdfs>
// COMPAT: pre-r151 doesn't have BRDF_Lambert in <common>
#if THREE_VRM_THREE_REVISION < 151
  vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
    return RECIPROCAL_PI * diffuseColor;
  }
#endif

#include <lights_pars_begin>

#include <normal_pars_fragment>

// #include <lights_phong_pars_fragment>
varying vec3 vViewPosition;

struct MToonMaterial {
  vec3 diffuseColor;
  vec3 shadeColor;
  float shadingShift;
};

float linearstep( float a, float b, float t ) {
  return clamp( ( t - a ) / ( b - a ), 0.0, 1.0 );
}

/**
 * Convert NdotL into toon shading factor using shadingShift and shadingToony
 */
float getShading(
  const in float dotNL,
  const in float shadow,
  const in float shadingShift
) {
  float shading = dotNL;
  shading = shading + shadingShift;
  shading = linearstep( -1.0 + shadingToonyFactor, 1.0 - shadingToonyFactor, shading );
  shading *= shadow;
  return shading;
}

/**
 * Mix diffuseColor and shadeColor using shading factor and light color
 */
vec3 getDiffuse(
  const in MToonMaterial material,
  const in float shading,
  in vec3 lightColor
) {
  #ifdef DEBUG_LITSHADERATE
    return vec3( BRDF_Lambert( shading * lightColor ) );
  #endif

  vec3 col = lightColor * BRDF_Lambert( mix( material.shadeColor, material.diffuseColor, shading ) );

  // The "comment out if you want to PBR absolutely" line
  #ifdef V0_COMPAT_SHADE
    col = min( col, material.diffuseColor );
  #endif

  return col;
}

// COMPAT: pre-r156 uses a struct GeometricContext
#if THREE_VRM_THREE_REVISION >= 157
  void RE_Direct_MToon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in MToonMaterial material, const in float shadow, inout ReflectedLight reflectedLight ) {
    float dotNL = clamp( dot( geometryNormal, directLight.direction ), -1.0, 1.0 );
    vec3 irradiance = directLight.color;

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;

    irradiance *= dotNL;

    float shading = getShading( dotNL, shadow, material.shadingShift );

    // toon shaded diffuse
    reflectedLight.directDiffuse += getDiffuse( material, shading, directLight.color );
  }

  void RE_IndirectDiffuse_MToon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in MToonMaterial material, inout ReflectedLight reflectedLight ) {
    // indirect diffuse will use diffuseColor, no shadeColor involved
    reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;
  }
#else
  void RE_Direct_MToon( const in IncidentLight directLight, const in GeometricContext geometry, const in MToonMaterial material, const in float shadow, inout ReflectedLight reflectedLight ) {
    float dotNL = clamp( dot( geometry.normal, directLight.direction ), -1.0, 1.0 );
    vec3 irradiance = directLight.color;

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;

    irradiance *= dotNL;

    float shading = getShading( dotNL, shadow, material.shadingShift );

    // toon shaded diffuse
    reflectedLight.directDiffuse += getDiffuse( material, shading, directLight.color );
  }

  void RE_IndirectDiffuse_MToon( const in vec3 irradiance, const in GeometricContext geometry, const in MToonMaterial material, inout ReflectedLight reflectedLight ) {
    // indirect diffuse will use diffuseColor, no shadeColor involved
    reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

    // directSpecular will be used for rim lighting, not an actual specular
    reflectedLight.directSpecular += irradiance;
  }
#endif

#define RE_Direct RE_Direct_MToon
#define RE_IndirectDiffuse RE_IndirectDiffuse_MToon
#define Material_LightProbeLOD( material ) (0)

#include <shadowmap_pars_fragment>
// #include <bumpmap_pars_fragment>

// #include <normalmap_pars_fragment>
#ifdef USE_NORMALMAP

  uniform sampler2D normalMap;
  uniform mat3 normalMapUvTransform;
  uniform vec2 normalScale;

#endif

// COMPAT: pre-r151
// USE_NORMALMAP_OBJECTSPACE used to be OBJECTSPACE_NORMALMAP in pre-r151
#if defined( USE_NORMALMAP_OBJECTSPACE ) || defined( OBJECTSPACE_NORMALMAP )

  uniform mat3 normalMatrix;

#endif

// COMPAT: pre-r151
// USE_NORMALMAP_TANGENTSPACE used to be TANGENTSPACE_NORMALMAP in pre-r151
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( TANGENTSPACE_NORMALMAP ) )

  // Per-Pixel Tangent Space Normal Mapping
  // http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html

  // three-vrm specific change: it requires \`uv\` as an input in order to support uv scrolls

  // Temporary compat against shader change @ Three.js r126, r151
  #if THREE_VRM_THREE_REVISION >= 151

    mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {

      vec3 q0 = dFdx( eye_pos.xyz );
      vec3 q1 = dFdy( eye_pos.xyz );
      vec2 st0 = dFdx( uv.st );
      vec2 st1 = dFdy( uv.st );

      vec3 N = surf_norm;

      vec3 q1perp = cross( q1, N );
      vec3 q0perp = cross( N, q0 );

      vec3 T = q1perp * st0.x + q0perp * st1.x;
      vec3 B = q1perp * st0.y + q0perp * st1.y;

      float det = max( dot( T, T ), dot( B, B ) );
      float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );

      return mat3( T * scale, B * scale, N );

    }

  #else

    vec3 perturbNormal2Arb( vec2 uv, vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {

      vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
      vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
      vec2 st0 = dFdx( uv.st );
      vec2 st1 = dFdy( uv.st );

      vec3 N = normalize( surf_norm );

      vec3 q1perp = cross( q1, N );
      vec3 q0perp = cross( N, q0 );

      vec3 T = q1perp * st0.x + q0perp * st1.x;
      vec3 B = q1perp * st0.y + q0perp * st1.y;

      // three-vrm specific change: Workaround for the issue that happens when delta of uv = 0.0
      // TODO: Is this still required? Or shall I make a PR about it?
      if ( length( T ) == 0.0 || length( B ) == 0.0 ) {
        return surf_norm;
      }

      float det = max( dot( T, T ), dot( B, B ) );
      float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );

      return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );

    }

  #endif

#endif

// #include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

// == post correction ==========================================================
void postCorrection() {
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>
}

// == main procedure ===========================================================
void main() {
  #include <clipping_planes_fragment>

  vec2 uv = vec2(0.5, 0.5);

  #if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
    uv = vUv;

    float uvAnimMask = 1.0;
    #ifdef USE_UVANIMATIONMASKTEXTURE
      vec2 uvAnimationMaskTextureUv = ( uvAnimationMaskTextureUvTransform * vec3( uv, 1 ) ).xy;
      uvAnimMask = texture2D( uvAnimationMaskTexture, uvAnimationMaskTextureUv ).b;
    #endif

    float uvRotCos = cos( uvAnimationRotationPhase * uvAnimMask );
    float uvRotSin = sin( uvAnimationRotationPhase * uvAnimMask );
    uv = mat2( uvRotCos, -uvRotSin, uvRotSin, uvRotCos ) * ( uv - 0.5 ) + 0.5;
    uv = uv + vec2( uvAnimationScrollXOffset, uvAnimationScrollYOffset ) * uvAnimMask;
  #endif

  #ifdef DEBUG_UV
    gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
    #if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
      gl_FragColor = vec4( uv, 0.0, 1.0 );
    #endif
    return;
  #endif

  vec4 diffuseColor = vec4( litFactor, opacity );
  ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
  vec3 totalEmissiveRadiance = emissive * emissiveIntensity;

  #include <logdepthbuf_fragment>

  // #include <map_fragment>
  #ifdef USE_MAP
    vec2 mapUv = ( mapUvTransform * vec3( uv, 1 ) ).xy;
    vec4 sampledDiffuseColor = texture2D( map, mapUv );
    #ifdef DECODE_VIDEO_TEXTURE
      sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
    #endif
    diffuseColor *= sampledDiffuseColor;
  #endif

  // #include <color_fragment>
  #if ( defined( USE_COLOR ) && !defined( IGNORE_VERTEX_COLOR ) )
    diffuseColor.rgb *= vColor;
  #endif

  // #include <alphamap_fragment>

  #include <alphatest_fragment>

  // #include <specularmap_fragment>

  // #include <normal_fragment_begin>
  float faceDirection = gl_FrontFacing ? 1.0 : -1.0;

  #ifdef FLAT_SHADED

    vec3 fdx = dFdx( vViewPosition );
    vec3 fdy = dFdy( vViewPosition );
    vec3 normal = normalize( cross( fdx, fdy ) );

  #else

    vec3 normal = normalize( vNormal );

    #ifdef DOUBLE_SIDED

      normal *= faceDirection;

    #endif

  #endif

  #ifdef USE_NORMALMAP

    vec2 normalMapUv = ( normalMapUvTransform * vec3( uv, 1 ) ).xy;

  #endif

  #ifdef USE_NORMALMAP_TANGENTSPACE

    #ifdef USE_TANGENT

      mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

    #else

      mat3 tbn = getTangentFrame( - vViewPosition, normal, normalMapUv );

    #endif

    #if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

      tbn[0] *= faceDirection;
      tbn[1] *= faceDirection;

    #endif

  #endif

  #ifdef USE_CLEARCOAT_NORMALMAP

    #ifdef USE_TANGENT

      mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );

    #else

      mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );

    #endif

    #if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )

      tbn2[0] *= faceDirection;
      tbn2[1] *= faceDirection;

    #endif

  #endif

  // non perturbed normal for clearcoat among others

  vec3 nonPerturbedNormal = normal;

  #ifdef OUTLINE
    normal *= -1.0;
  #endif

  // #include <normal_fragment_maps>

  // COMPAT: pre-r151
  // USE_NORMALMAP_OBJECTSPACE used to be OBJECTSPACE_NORMALMAP in pre-r151
  #if defined( USE_NORMALMAP_OBJECTSPACE ) || defined( OBJECTSPACE_NORMALMAP )

    normal = texture2D( normalMap, normalMapUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

    #ifdef FLIP_SIDED

      normal = - normal;

    #endif

    #ifdef DOUBLE_SIDED

      normal = normal * faceDirection;

    #endif

    normal = normalize( normalMatrix * normal );

  // COMPAT: pre-r151
  // USE_NORMALMAP_TANGENTSPACE used to be TANGENTSPACE_NORMALMAP in pre-r151
  #elif defined( USE_NORMALMAP_TANGENTSPACE ) || defined( TANGENTSPACE_NORMALMAP )

    vec3 mapN = texture2D( normalMap, normalMapUv ).xyz * 2.0 - 1.0;
    mapN.xy *= normalScale;

    // COMPAT: pre-r151
    #if THREE_VRM_THREE_REVISION >= 151 || defined( USE_TANGENT )

      normal = normalize( tbn * mapN );

    #else

      normal = perturbNormal2Arb( uv, -vViewPosition, normal, mapN, faceDirection );

    #endif

  #endif

  // #include <emissivemap_fragment>
  #ifdef USE_EMISSIVEMAP
    vec2 emissiveMapUv = ( emissiveMapUvTransform * vec3( uv, 1 ) ).xy;
    totalEmissiveRadiance *= texture2D( emissiveMap, emissiveMapUv ).rgb;
  #endif

  #ifdef DEBUG_NORMAL
    gl_FragColor = vec4( 0.5 + 0.5 * normal, 1.0 );
    return;
  #endif

  // -- MToon: lighting --------------------------------------------------------
  // accumulation
  // #include <lights_phong_fragment>
  MToonMaterial material;

  material.diffuseColor = diffuseColor.rgb;

  material.shadeColor = shadeColorFactor;
  #ifdef USE_SHADEMULTIPLYTEXTURE
    vec2 shadeMultiplyTextureUv = ( shadeMultiplyTextureUvTransform * vec3( uv, 1 ) ).xy;
    material.shadeColor *= texture2D( shadeMultiplyTexture, shadeMultiplyTextureUv ).rgb;
  #endif

  #if ( defined( USE_COLOR ) && !defined( IGNORE_VERTEX_COLOR ) )
    material.shadeColor.rgb *= vColor;
  #endif

  material.shadingShift = shadingShiftFactor;
  #ifdef USE_SHADINGSHIFTTEXTURE
    vec2 shadingShiftTextureUv = ( shadingShiftTextureUvTransform * vec3( uv, 1 ) ).xy;
    material.shadingShift += texture2D( shadingShiftTexture, shadingShiftTextureUv ).r * shadingShiftTextureScale;
  #endif

  // #include <lights_fragment_begin>

  // MToon Specific changes:
  // Since we want to take shadows into account of shading instead of irradiance,
  // we had to modify the codes that multiplies the results of shadowmap into color of direct lights.

  // COMPAT: pre-r156 uses a struct GeometricContext
  #if THREE_VRM_THREE_REVISION >= 157
    vec3 geometryPosition = - vViewPosition;
    vec3 geometryNormal = normal;
    vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

    vec3 geometryClearcoatNormal;

    #ifdef USE_CLEARCOAT

      geometryClearcoatNormal = clearcoatNormal;

    #endif
  #else
    GeometricContext geometry;

    geometry.position = - vViewPosition;
    geometry.normal = normal;
    geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

    #ifdef USE_CLEARCOAT

      geometry.clearcoatNormal = clearcoatNormal;

    #endif
  #endif

  IncidentLight directLight;

  // since these variables will be used in unrolled loop, we have to define in prior
  float shadow;

  #if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

    PointLight pointLight;
    #if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
    PointLightShadow pointLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

      pointLight = pointLights[ i ];

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        getPointLightInfo( pointLight, geometryPosition, directLight );
      #else
        getPointLightInfo( pointLight, geometry, directLight );
      #endif

      shadow = 1.0;
      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
      pointLightShadow = pointLightShadows[ i ];
      // COMPAT: pre-r166
      // r166 introduced shadowIntensity
      #if THREE_VRM_THREE_REVISION >= 166
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
      #else
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
      #endif
      #endif

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

    }
    #pragma unroll_loop_end

  #endif

  #if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

    SpotLight spotLight;
    // COMPAT: pre-r144 uses NUM_SPOT_LIGHT_SHADOWS, r144+ uses NUM_SPOT_LIGHT_COORDS
    #if THREE_VRM_THREE_REVISION >= 144
      #if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_COORDS > 0
      SpotLightShadow spotLightShadow;
      #endif
    #elif defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
    SpotLightShadow spotLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

      spotLight = spotLights[ i ];

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        getSpotLightInfo( spotLight, geometryPosition, directLight );
      #else
        getSpotLightInfo( spotLight, geometry, directLight );
      #endif

      shadow = 1.0;
      // COMPAT: pre-r144 uses NUM_SPOT_LIGHT_SHADOWS and vSpotShadowCoord, r144+ uses NUM_SPOT_LIGHT_COORDS and vSpotLightCoord
      // COMPAT: pre-r166 does not have shadowIntensity, r166+ has shadowIntensity
      #if THREE_VRM_THREE_REVISION >= 166
        #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_COORDS )
        spotLightShadow = spotLightShadows[ i ];
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
        #endif
      #elif THREE_VRM_THREE_REVISION >= 144
        #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_COORDS )
        spotLightShadow = spotLightShadows[ i ];
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
        #endif
      #elif defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
      spotLightShadow = spotLightShadows[ i ];
      shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
      #endif

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

    }
    #pragma unroll_loop_end

  #endif

  #if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

    DirectionalLight directionalLight;
    #if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
    DirectionalLightShadow directionalLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

      directionalLight = directionalLights[ i ];

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        getDirectionalLightInfo( directionalLight, directLight );
      #else
        getDirectionalLightInfo( directionalLight, geometry, directLight );
      #endif

      shadow = 1.0;
      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
      directionalLightShadow = directionalLightShadows[ i ];
      // COMPAT: pre-r166
      // r166 introduced shadowIntensity
      #if THREE_VRM_THREE_REVISION >= 166
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
      #else
        shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
      #endif
      #endif

      // COMPAT: pre-r156 uses a struct GeometricContext
      #if THREE_VRM_THREE_REVISION >= 157
        RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, shadow, reflectedLight );
      #else
        RE_Direct( directLight, geometry, material, shadow, reflectedLight );
      #endif

    }
    #pragma unroll_loop_end

  #endif

  // #if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

  //   RectAreaLight rectAreaLight;

  //   #pragma unroll_loop_start
  //   for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

  //     rectAreaLight = rectAreaLights[ i ];
  //     RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );

  //   }
  //   #pragma unroll_loop_end

  // #endif

  #if defined( RE_IndirectDiffuse )

    vec3 iblIrradiance = vec3( 0.0 );

    vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

    // COMPAT: pre-r156 uses a struct GeometricContext
    // COMPAT: pre-r156 doesn't have a define USE_LIGHT_PROBES
    #if THREE_VRM_THREE_REVISION >= 157
      #if defined( USE_LIGHT_PROBES )
        irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
      #endif
    #else
      irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
    #endif

    #if ( NUM_HEMI_LIGHTS > 0 )

      #pragma unroll_loop_start
      for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

        // COMPAT: pre-r156 uses a struct GeometricContext
        #if THREE_VRM_THREE_REVISION >= 157
          irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
        #else
          irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
        #endif

      }
      #pragma unroll_loop_end

    #endif

  #endif

  // #if defined( RE_IndirectSpecular )

  //   vec3 radiance = vec3( 0.0 );
  //   vec3 clearcoatRadiance = vec3( 0.0 );

  // #endif

  #include <lights_fragment_maps>
  #include <lights_fragment_end>

  // modulation
  #include <aomap_fragment>

  vec3 col = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;

  #ifdef DEBUG_LITSHADERATE
    gl_FragColor = vec4( col, diffuseColor.a );
    postCorrection();
    return;
  #endif

  // -- MToon: rim lighting -----------------------------------------
  vec3 viewDir = normalize( vViewPosition );

  #ifndef PHYSICALLY_CORRECT_LIGHTS
    reflectedLight.directSpecular /= PI;
  #endif
  vec3 rimMix = mix( vec3( 1.0 ), reflectedLight.directSpecular, rimLightingMixFactor );

  vec3 rim = parametricRimColorFactor * pow( saturate( 1.0 - dot( viewDir, normal ) + parametricRimLiftFactor ), parametricRimFresnelPowerFactor );

  #ifdef USE_MATCAPTEXTURE
    {
      vec3 x = normalize( vec3( viewDir.z, 0.0, -viewDir.x ) );
      vec3 y = cross( viewDir, x ); // guaranteed to be normalized
      vec2 sphereUv = 0.5 + 0.5 * vec2( dot( x, normal ), -dot( y, normal ) );
      sphereUv = ( matcapTextureUvTransform * vec3( sphereUv, 1 ) ).xy;
      vec3 matcap = texture2D( matcapTexture, sphereUv ).rgb;
      rim += matcapFactor * matcap;
    }
  #endif

  #ifdef USE_RIMMULTIPLYTEXTURE
    vec2 rimMultiplyTextureUv = ( rimMultiplyTextureUvTransform * vec3( uv, 1 ) ).xy;
    rim *= texture2D( rimMultiplyTexture, rimMultiplyTextureUv ).rgb;
  #endif

  col += rimMix * rim;

  // -- MToon: Emission --------------------------------------------------------
  col += totalEmissiveRadiance;

  // #include <envmap_fragment>

  // -- Almost done! -----------------------------------------------------------
  #if defined( OUTLINE )
    col = outlineColorFactor.rgb * mix( vec3( 1.0 ), col, outlineLightingMixFactor );
  #endif

  #ifdef OPAQUE
    diffuseColor.a = 1.0;
  #endif

  gl_FragColor = vec4( col, diffuseColor.a );
  postCorrection();
}
`,lS={None:"none"},gh={None:"none",ScreenCoordinates:"screenCoordinates"},cS={3e3:"",3001:"srgb"};function yl(n){return parseInt(Fi,10)>=152?n.colorSpace:cS[n.encoding]}var uS=class extends Wn{constructor(n={}){var e;super({vertexShader:oS,fragmentShader:aS}),this.uvAnimationScrollXSpeedFactor=0,this.uvAnimationScrollYSpeedFactor=0,this.uvAnimationRotationSpeedFactor=0,this.fog=!0,this.normalMapType=$c,this._ignoreVertexColor=!0,this._v0CompatShade=!1,this._debugMode=lS.None,this._outlineWidthMode=gh.None,this._isOutline=!1,n.transparentWithZWrite&&(n.depthWrite=!0),delete n.transparentWithZWrite,n.fog=!0,n.lights=!0,n.clipping=!0,this.uniforms=vf.merge([re.common,re.normalmap,re.emissivemap,re.fog,re.lights,{litFactor:{value:new ye(1,1,1)},mapUvTransform:{value:new Ae},colorAlpha:{value:1},normalMapUvTransform:{value:new Ae},shadeColorFactor:{value:new ye(0,0,0)},shadeMultiplyTexture:{value:null},shadeMultiplyTextureUvTransform:{value:new Ae},shadingShiftFactor:{value:0},shadingShiftTexture:{value:null},shadingShiftTextureUvTransform:{value:new Ae},shadingShiftTextureScale:{value:1},shadingToonyFactor:{value:.9},giEqualizationFactor:{value:.9},matcapFactor:{value:new ye(1,1,1)},matcapTexture:{value:null},matcapTextureUvTransform:{value:new Ae},parametricRimColorFactor:{value:new ye(0,0,0)},rimMultiplyTexture:{value:null},rimMultiplyTextureUvTransform:{value:new Ae},rimLightingMixFactor:{value:1},parametricRimFresnelPowerFactor:{value:5},parametricRimLiftFactor:{value:0},emissive:{value:new ye(0,0,0)},emissiveIntensity:{value:1},emissiveMapUvTransform:{value:new Ae},outlineWidthMultiplyTexture:{value:null},outlineWidthMultiplyTextureUvTransform:{value:new Ae},outlineWidthFactor:{value:0},outlineColorFactor:{value:new ye(0,0,0)},outlineLightingMixFactor:{value:1},uvAnimationMaskTexture:{value:null},uvAnimationMaskTextureUvTransform:{value:new Ae},uvAnimationScrollXOffset:{value:0},uvAnimationScrollYOffset:{value:0},uvAnimationRotationPhase:{value:0}},(e=n.uniforms)!=null?e:{}]),this.setValues(n),this._uploadUniformsWorkaround(),this.customProgramCacheKey=()=>[...Object.entries(this._generateDefines()).map(([t,i])=>`${t}:${i}`),this.matcapTexture?`matcapTextureColorSpace:${yl(this.matcapTexture)}`:"",this.shadeMultiplyTexture?`shadeMultiplyTextureColorSpace:${yl(this.shadeMultiplyTexture)}`:"",this.rimMultiplyTexture?`rimMultiplyTextureColorSpace:${yl(this.rimMultiplyTexture)}`:""].join(","),this.onBeforeCompile=t=>{const i=parseInt(Fi,10),r=Object.entries(mh(mh({},this._generateDefines()),this.defines)).filter(([s,o])=>!!o).map(([s,o])=>`#define ${s} ${o}`).join(`
`)+`
`;t.vertexShader=r+t.vertexShader,t.fragmentShader=r+t.fragmentShader,i<154&&(t.fragmentShader=t.fragmentShader.replace("#include <colorspace_fragment>","#include <encodings_fragment>"))}}get color(){return this.uniforms.litFactor.value}set color(n){this.uniforms.litFactor.value=n}get map(){return this.uniforms.map.value}set map(n){this.uniforms.map.value=n}get normalMap(){return this.uniforms.normalMap.value}set normalMap(n){this.uniforms.normalMap.value=n}get normalScale(){return this.uniforms.normalScale.value}set normalScale(n){this.uniforms.normalScale.value=n}get emissive(){return this.uniforms.emissive.value}set emissive(n){this.uniforms.emissive.value=n}get emissiveIntensity(){return this.uniforms.emissiveIntensity.value}set emissiveIntensity(n){this.uniforms.emissiveIntensity.value=n}get emissiveMap(){return this.uniforms.emissiveMap.value}set emissiveMap(n){this.uniforms.emissiveMap.value=n}get shadeColorFactor(){return this.uniforms.shadeColorFactor.value}set shadeColorFactor(n){this.uniforms.shadeColorFactor.value=n}get shadeMultiplyTexture(){return this.uniforms.shadeMultiplyTexture.value}set shadeMultiplyTexture(n){this.uniforms.shadeMultiplyTexture.value=n}get shadingShiftFactor(){return this.uniforms.shadingShiftFactor.value}set shadingShiftFactor(n){this.uniforms.shadingShiftFactor.value=n}get shadingShiftTexture(){return this.uniforms.shadingShiftTexture.value}set shadingShiftTexture(n){this.uniforms.shadingShiftTexture.value=n}get shadingShiftTextureScale(){return this.uniforms.shadingShiftTextureScale.value}set shadingShiftTextureScale(n){this.uniforms.shadingShiftTextureScale.value=n}get shadingToonyFactor(){return this.uniforms.shadingToonyFactor.value}set shadingToonyFactor(n){this.uniforms.shadingToonyFactor.value=n}get giEqualizationFactor(){return this.uniforms.giEqualizationFactor.value}set giEqualizationFactor(n){this.uniforms.giEqualizationFactor.value=n}get matcapFactor(){return this.uniforms.matcapFactor.value}set matcapFactor(n){this.uniforms.matcapFactor.value=n}get matcapTexture(){return this.uniforms.matcapTexture.value}set matcapTexture(n){this.uniforms.matcapTexture.value=n}get parametricRimColorFactor(){return this.uniforms.parametricRimColorFactor.value}set parametricRimColorFactor(n){this.uniforms.parametricRimColorFactor.value=n}get rimMultiplyTexture(){return this.uniforms.rimMultiplyTexture.value}set rimMultiplyTexture(n){this.uniforms.rimMultiplyTexture.value=n}get rimLightingMixFactor(){return this.uniforms.rimLightingMixFactor.value}set rimLightingMixFactor(n){this.uniforms.rimLightingMixFactor.value=n}get parametricRimFresnelPowerFactor(){return this.uniforms.parametricRimFresnelPowerFactor.value}set parametricRimFresnelPowerFactor(n){this.uniforms.parametricRimFresnelPowerFactor.value=n}get parametricRimLiftFactor(){return this.uniforms.parametricRimLiftFactor.value}set parametricRimLiftFactor(n){this.uniforms.parametricRimLiftFactor.value=n}get outlineWidthMultiplyTexture(){return this.uniforms.outlineWidthMultiplyTexture.value}set outlineWidthMultiplyTexture(n){this.uniforms.outlineWidthMultiplyTexture.value=n}get outlineWidthFactor(){return this.uniforms.outlineWidthFactor.value}set outlineWidthFactor(n){this.uniforms.outlineWidthFactor.value=n}get outlineColorFactor(){return this.uniforms.outlineColorFactor.value}set outlineColorFactor(n){this.uniforms.outlineColorFactor.value=n}get outlineLightingMixFactor(){return this.uniforms.outlineLightingMixFactor.value}set outlineLightingMixFactor(n){this.uniforms.outlineLightingMixFactor.value=n}get uvAnimationMaskTexture(){return this.uniforms.uvAnimationMaskTexture.value}set uvAnimationMaskTexture(n){this.uniforms.uvAnimationMaskTexture.value=n}get uvAnimationScrollXOffset(){return this.uniforms.uvAnimationScrollXOffset.value}set uvAnimationScrollXOffset(n){this.uniforms.uvAnimationScrollXOffset.value=n}get uvAnimationScrollYOffset(){return this.uniforms.uvAnimationScrollYOffset.value}set uvAnimationScrollYOffset(n){this.uniforms.uvAnimationScrollYOffset.value=n}get uvAnimationRotationPhase(){return this.uniforms.uvAnimationRotationPhase.value}set uvAnimationRotationPhase(n){this.uniforms.uvAnimationRotationPhase.value=n}get ignoreVertexColor(){return this._ignoreVertexColor}set ignoreVertexColor(n){this._ignoreVertexColor=n,this.needsUpdate=!0}get v0CompatShade(){return this._v0CompatShade}set v0CompatShade(n){this._v0CompatShade=n,this.needsUpdate=!0}get debugMode(){return this._debugMode}set debugMode(n){this._debugMode=n,this.needsUpdate=!0}get outlineWidthMode(){return this._outlineWidthMode}set outlineWidthMode(n){this._outlineWidthMode=n,this.needsUpdate=!0}get isOutline(){return this._isOutline}set isOutline(n){this._isOutline=n,this.needsUpdate=!0}get isMToonMaterial(){return!0}update(n){this._uploadUniformsWorkaround(),this._updateUVAnimation(n)}copy(n){return super.copy(n),this.map=n.map,this.normalMap=n.normalMap,this.emissiveMap=n.emissiveMap,this.shadeMultiplyTexture=n.shadeMultiplyTexture,this.shadingShiftTexture=n.shadingShiftTexture,this.matcapTexture=n.matcapTexture,this.rimMultiplyTexture=n.rimMultiplyTexture,this.outlineWidthMultiplyTexture=n.outlineWidthMultiplyTexture,this.uvAnimationMaskTexture=n.uvAnimationMaskTexture,this.normalMapType=n.normalMapType,this.uvAnimationScrollXSpeedFactor=n.uvAnimationScrollXSpeedFactor,this.uvAnimationScrollYSpeedFactor=n.uvAnimationScrollYSpeedFactor,this.uvAnimationRotationSpeedFactor=n.uvAnimationRotationSpeedFactor,this.ignoreVertexColor=n.ignoreVertexColor,this.v0CompatShade=n.v0CompatShade,this.debugMode=n.debugMode,this.outlineWidthMode=n.outlineWidthMode,this.isOutline=n.isOutline,this.needsUpdate=!0,this}_updateUVAnimation(n){this.uniforms.uvAnimationScrollXOffset.value+=n*this.uvAnimationScrollXSpeedFactor,this.uniforms.uvAnimationScrollYOffset.value+=n*this.uvAnimationScrollYSpeedFactor,this.uniforms.uvAnimationRotationPhase.value+=n*this.uvAnimationRotationSpeedFactor,this.uniforms.alphaTest.value=this.alphaTest,this.uniformsNeedUpdate=!0}_uploadUniformsWorkaround(){this.uniforms.opacity.value=this.opacity,this._updateTextureMatrix(this.uniforms.map,this.uniforms.mapUvTransform),this._updateTextureMatrix(this.uniforms.normalMap,this.uniforms.normalMapUvTransform),this._updateTextureMatrix(this.uniforms.emissiveMap,this.uniforms.emissiveMapUvTransform),this._updateTextureMatrix(this.uniforms.shadeMultiplyTexture,this.uniforms.shadeMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.shadingShiftTexture,this.uniforms.shadingShiftTextureUvTransform),this._updateTextureMatrix(this.uniforms.matcapTexture,this.uniforms.matcapTextureUvTransform),this._updateTextureMatrix(this.uniforms.rimMultiplyTexture,this.uniforms.rimMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.outlineWidthMultiplyTexture,this.uniforms.outlineWidthMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.uvAnimationMaskTexture,this.uniforms.uvAnimationMaskTextureUvTransform),this.uniformsNeedUpdate=!0}_generateDefines(){const n=parseInt(Fi,10),e=this.outlineWidthMultiplyTexture!==null,t=this.map!==null||this.normalMap!==null||this.emissiveMap!==null||this.shadeMultiplyTexture!==null||this.shadingShiftTexture!==null||this.rimMultiplyTexture!==null||this.uvAnimationMaskTexture!==null;return{THREE_VRM_THREE_REVISION:n,OUTLINE:this._isOutline,MTOON_USE_UV:e||t,MTOON_UVS_VERTEX_ONLY:e&&!t,V0_COMPAT_SHADE:this._v0CompatShade,USE_SHADEMULTIPLYTEXTURE:this.shadeMultiplyTexture!==null,USE_SHADINGSHIFTTEXTURE:this.shadingShiftTexture!==null,USE_MATCAPTEXTURE:this.matcapTexture!==null,USE_RIMMULTIPLYTEXTURE:this.rimMultiplyTexture!==null,USE_OUTLINEWIDTHMULTIPLYTEXTURE:this._isOutline&&this.outlineWidthMultiplyTexture!==null,USE_UVANIMATIONMASKTEXTURE:this.uvAnimationMaskTexture!==null,IGNORE_VERTEX_COLOR:this._ignoreVertexColor===!0,DEBUG_NORMAL:this._debugMode==="normal",DEBUG_LITSHADERATE:this._debugMode==="litShadeRate",DEBUG_UV:this._debugMode==="uv",OUTLINE_WIDTH_SCREEN:this._isOutline&&this._outlineWidthMode===gh.ScreenCoordinates}}_updateTextureMatrix(n,e){n.value&&(n.value.matrixAutoUpdate&&n.value.updateMatrix(),e.value.copy(n.value.matrix))}},dS=new Set(["1.0","1.0-beta"]),tp=class Oo{get name(){return Oo.EXTENSION_NAME}constructor(e,t={}){var i,r,s,o;this.parser=e,this.materialType=(i=t.materialType)!=null?i:uS,this.renderOrderOffset=(r=t.renderOrderOffset)!=null?r:0,this.v0CompatShade=(s=t.v0CompatShade)!=null?s:!1,this.debugMode=(o=t.debugMode)!=null?o:"none",this._mToonMaterialSet=new Set}beforeRoot(){return Ni(this,null,function*(){this._removeUnlitExtensionIfMToonExists()})}afterRoot(e){return Ni(this,null,function*(){e.userData.vrmMToonMaterials=Array.from(this._mToonMaterialSet)})}getMaterialType(e){return this._getMToonExtension(e)?this.materialType:null}extendMaterialParams(e,t){const i=this._getMToonExtension(e);return i?this._extendMaterialParams(i,t):null}loadMesh(e){return Ni(this,null,function*(){var t;const i=this.parser,s=(t=i.json.meshes)==null?void 0:t[e];if(s==null)throw new Error(`MToonMaterialLoaderPlugin: Attempt to use meshes[${e}] of glTF but the mesh doesn't exist`);const o=s.primitives,a=yield i.loadMesh(e);if(o.length===1){const l=a,c=o[0].material;c!=null&&this._setupPrimitive(l,c)}else{const l=a;for(let c=0;c<o.length;c++){const u=l.children[c],d=o[c].material;d!=null&&this._setupPrimitive(u,d)}}return a})}_removeUnlitExtensionIfMToonExists(){const i=this.parser.json.materials;i==null||i.map((r,s)=>{var o;this._getMToonExtension(s)&&((o=r.extensions)!=null&&o.KHR_materials_unlit)&&delete r.extensions.KHR_materials_unlit})}_getMToonExtension(e){var t,i;const o=(t=this.parser.json.materials)==null?void 0:t[e];if(o==null){console.warn(`MToonMaterialLoaderPlugin: Attempt to use materials[${e}] of glTF but the material doesn't exist`);return}const a=(i=o.extensions)==null?void 0:i[Oo.EXTENSION_NAME];if(a==null)return;const l=a.specVersion;if(!dS.has(l)){console.warn(`MToonMaterialLoaderPlugin: Unknown ${Oo.EXTENSION_NAME} specVersion "${l}"`);return}return a}_extendMaterialParams(e,t){return Ni(this,null,function*(){var i;delete t.metalness,delete t.roughness;const r=new sS(this.parser,t);r.assignPrimitive("transparentWithZWrite",e.transparentWithZWrite),r.assignColor("shadeColorFactor",e.shadeColorFactor),r.assignTexture("shadeMultiplyTexture",e.shadeMultiplyTexture,!0),r.assignPrimitive("shadingShiftFactor",e.shadingShiftFactor),r.assignTexture("shadingShiftTexture",e.shadingShiftTexture,!0),r.assignPrimitive("shadingShiftTextureScale",(i=e.shadingShiftTexture)==null?void 0:i.scale),r.assignPrimitive("shadingToonyFactor",e.shadingToonyFactor),r.assignPrimitive("giEqualizationFactor",e.giEqualizationFactor),r.assignColor("matcapFactor",e.matcapFactor),r.assignTexture("matcapTexture",e.matcapTexture,!0),r.assignColor("parametricRimColorFactor",e.parametricRimColorFactor),r.assignTexture("rimMultiplyTexture",e.rimMultiplyTexture,!0),r.assignPrimitive("rimLightingMixFactor",e.rimLightingMixFactor),r.assignPrimitive("parametricRimFresnelPowerFactor",e.parametricRimFresnelPowerFactor),r.assignPrimitive("parametricRimLiftFactor",e.parametricRimLiftFactor),r.assignPrimitive("outlineWidthMode",e.outlineWidthMode),r.assignPrimitive("outlineWidthFactor",e.outlineWidthFactor),r.assignTexture("outlineWidthMultiplyTexture",e.outlineWidthMultiplyTexture,!1),r.assignColor("outlineColorFactor",e.outlineColorFactor),r.assignPrimitive("outlineLightingMixFactor",e.outlineLightingMixFactor),r.assignTexture("uvAnimationMaskTexture",e.uvAnimationMaskTexture,!1),r.assignPrimitive("uvAnimationScrollXSpeedFactor",e.uvAnimationScrollXSpeedFactor),r.assignPrimitive("uvAnimationScrollYSpeedFactor",e.uvAnimationScrollYSpeedFactor),r.assignPrimitive("uvAnimationRotationSpeedFactor",e.uvAnimationRotationSpeedFactor),r.assignPrimitive("v0CompatShade",this.v0CompatShade),r.assignPrimitive("debugMode",this.debugMode),yield r.pending})}_setupPrimitive(e,t){const i=this._getMToonExtension(t);if(i){const r=this._parseRenderOrder(i);e.renderOrder=r+this.renderOrderOffset,this._generateOutline(e),this._addToMaterialSet(e);return}}_shouldGenerateOutline(e){return typeof e.outlineWidthMode=="string"&&e.outlineWidthMode!=="none"&&typeof e.outlineWidthFactor=="number"&&e.outlineWidthFactor>0}_generateOutline(e){const t=e.material;if(!(t instanceof mn)||!this._shouldGenerateOutline(t))return;e.material=[t];const i=t.clone();i.name+=" (Outline)",i.isOutline=!0,i.side=Dt,e.material.push(i);const r=e.geometry,s=r.index?r.index.count:r.attributes.position.count/3;r.addGroup(0,s,0),r.addGroup(0,s,1)}_addToMaterialSet(e){const t=e.material,i=new Set;Array.isArray(t)?t.forEach(r=>i.add(r)):i.add(t);for(const r of i)this._mToonMaterialSet.add(r)}_parseRenderOrder(e){var t;return(e.transparentWithZWrite?0:19)+((t=e.renderQueueOffsetNumber)!=null?t:0)}};tp.EXTENSION_NAME="VRMC_materials_mtoon";var hS=tp,fS=(n,e,t)=>new Promise((i,r)=>{var s=l=>{try{a(t.next(l))}catch(c){r(c)}},o=l=>{try{a(t.throw(l))}catch(c){r(c)}},a=l=>l.done?i(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(n,e)).next())}),np=class Lc{get name(){return Lc.EXTENSION_NAME}constructor(e){this.parser=e}extendMaterialParams(e,t){return fS(this,null,function*(){const i=this._getHDREmissiveMultiplierExtension(e);if(i==null)return;console.warn("VRMMaterialsHDREmissiveMultiplierLoaderPlugin: `VRMC_materials_hdr_emissiveMultiplier` is archived. Use `KHR_materials_emissive_strength` instead.");const r=i.emissiveMultiplier;t.emissiveIntensity=r})}_getHDREmissiveMultiplierExtension(e){var t,i;const o=(t=this.parser.json.materials)==null?void 0:t[e];if(o==null){console.warn(`VRMMaterialsHDREmissiveMultiplierLoaderPlugin: Attempt to use materials[${e}] of glTF but the material doesn't exist`);return}const a=(i=o.extensions)==null?void 0:i[Lc.EXTENSION_NAME];if(a!=null)return a}};np.EXTENSION_NAME="VRMC_materials_hdr_emissiveMultiplier";var pS=np,mS=Object.defineProperty,gS=Object.defineProperties,_S=Object.getOwnPropertyDescriptors,_h=Object.getOwnPropertySymbols,vS=Object.prototype.hasOwnProperty,xS=Object.prototype.propertyIsEnumerable,vh=(n,e,t)=>e in n?mS(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,xn=(n,e)=>{for(var t in e||(e={}))vS.call(e,t)&&vh(n,t,e[t]);if(_h)for(var t of _h(e))xS.call(e,t)&&vh(n,t,e[t]);return n},xh=(n,e)=>gS(n,_S(e)),MS=(n,e,t)=>new Promise((i,r)=>{var s=l=>{try{a(t.next(l))}catch(c){r(c)}},o=l=>{try{a(t.throw(l))}catch(c){r(c)}},a=l=>l.done?i(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(n,e)).next())});function or(n){return Math.pow(n,2.2)}var yS=class{get name(){return"VRMMaterialsV0CompatPlugin"}constructor(n){var e;this.parser=n,this._renderQueueMapTransparent=new Map,this._renderQueueMapTransparentZWrite=new Map;const t=this.parser.json;t.extensionsUsed=(e=t.extensionsUsed)!=null?e:[],t.extensionsUsed.indexOf("KHR_texture_transform")===-1&&t.extensionsUsed.push("KHR_texture_transform")}beforeRoot(){return MS(this,null,function*(){var n;const e=this.parser.json,t=(n=e.extensions)==null?void 0:n.VRM,i=t==null?void 0:t.materialProperties;i&&(this._populateRenderQueueMap(i),i.forEach((r,s)=>{var o,a;const l=(o=e.materials)==null?void 0:o[s];if(l==null){console.warn(`VRMMaterialsV0CompatPlugin: Attempt to use materials[${s}] of glTF but the material doesn't exist`);return}if(r.shader==="VRM/MToon"){const c=this._parseV0MToonProperties(r,l);e.materials[s]=c}else if((a=r.shader)!=null&&a.startsWith("VRM/Unlit")){const c=this._parseV0UnlitProperties(r,l);e.materials[s]=c}else r.shader==="VRM_USE_GLTFSHADER"||console.warn(`VRMMaterialsV0CompatPlugin: Unknown shader: ${r.shader}`)}))})}_parseV0MToonProperties(n,e){var t,i,r,s,o,a,l,c,u,d,h,f,g,_,p,m,y,M,T,C,R,w,I,W,v,S,B,O,G,Y,F,j,X,se,U,K,ne,_e,H,$,ae,le,Re,be,Ge,$e,We,P,bt,Ve,Xe,Ce,ot,Pe,A;const x=(i=(t=n.keywordMap)==null?void 0:t._ALPHABLEND_ON)!=null?i:!1,J=((r=n.floatProperties)==null?void 0:r._ZWrite)===1&&x,ee=this._v0ParseRenderQueue(n),Z=(o=(s=n.keywordMap)==null?void 0:s._ALPHATEST_ON)!=null?o:!1,xe=x?"BLEND":Z?"MASK":"OPAQUE",oe=Z?(l=(a=n.floatProperties)==null?void 0:a._Cutoff)!=null?l:.5:void 0,Ye=((u=(c=n.floatProperties)==null?void 0:c._CullMode)!=null?u:2)===0,te=this._portTextureTransform(n),pe=((h=(d=n.vectorProperties)==null?void 0:d._Color)!=null?h:[1,1,1,1]).map((ie,de)=>de===3?ie:or(ie)),Ie=(f=n.textureProperties)==null?void 0:f._MainTex,Le=Ie!=null?{index:Ie,extensions:xn({},te)}:void 0,me=(_=(g=n.floatProperties)==null?void 0:g._BumpScale)!=null?_:1,He=(p=n.textureProperties)==null?void 0:p._BumpMap,De=He!=null?{index:He,scale:me,extensions:xn({},te)}:void 0,at=((y=(m=n.vectorProperties)==null?void 0:m._EmissionColor)!=null?y:[0,0,0,1]).map(or),L=(M=n.textureProperties)==null?void 0:M._EmissionMap,he=L!=null?{index:L,extensions:xn({},te)}:void 0,q=((C=(T=n.vectorProperties)==null?void 0:T._ShadeColor)!=null?C:[.97,.81,.86,1]).map(or),Q=(R=n.textureProperties)==null?void 0:R._ShadeTexture,ue=Q!=null?{index:Q,extensions:xn({},te)}:void 0;let ce=(I=(w=n.floatProperties)==null?void 0:w._ShadeShift)!=null?I:0,Be=(v=(W=n.floatProperties)==null?void 0:W._ShadeToony)!=null?v:.9;Be=tt.lerp(Be,1,.5+.5*ce),ce=-ce-(1-Be);const ft=(B=(S=n.floatProperties)==null?void 0:S._IndirectLightIntensity)!=null?B:.1,Rt=ft?1-ft:void 0,qe=(O=n.textureProperties)==null?void 0:O._SphereAdd,Ct=qe!=null?[1,1,1]:void 0,rn=qe!=null?{index:qe}:void 0,ks=(Y=(G=n.floatProperties)==null?void 0:G._RimLightingMix)!=null?Y:0,jr=(F=n.textureProperties)==null?void 0:F._RimTexture,Cn=jr!=null?{index:jr,extensions:xn({},te)}:void 0,Kr=((X=(j=n.vectorProperties)==null?void 0:j._RimColor)!=null?X:[0,0,0,1]).map(or),Vs=(U=(se=n.floatProperties)==null?void 0:se._RimFresnelPower)!=null?U:1,Hs=(ne=(K=n.floatProperties)==null?void 0:K._RimLift)!=null?ne:0,Hi=["none","worldCoordinates","screenCoordinates"][(H=(_e=n.floatProperties)==null?void 0:_e._OutlineWidthMode)!=null?H:0];let zi=(ae=($=n.floatProperties)==null?void 0:$._OutlineWidth)!=null?ae:0;zi=.01*zi;const gi=(le=n.textureProperties)==null?void 0:le._OutlineWidthTexture,zs=gi!=null?{index:gi,extensions:xn({},te)}:void 0,Gs=((be=(Re=n.vectorProperties)==null?void 0:Re._OutlineColor)!=null?be:[0,0,0]).map(or),Ia=(($e=(Ge=n.floatProperties)==null?void 0:Ge._OutlineColorMode)!=null?$e:0)===1?(P=(We=n.floatProperties)==null?void 0:We._OutlineLightingMix)!=null?P:1:0,Ws=(bt=n.textureProperties)==null?void 0:bt._UvAnimMaskTexture,E=Ws!=null?{index:Ws,extensions:xn({},te)}:void 0,N=(Xe=(Ve=n.floatProperties)==null?void 0:Ve._UvAnimScrollX)!=null?Xe:0;let k=(ot=(Ce=n.floatProperties)==null?void 0:Ce._UvAnimScrollY)!=null?ot:0;k!=null&&(k=-k);const z=(A=(Pe=n.floatProperties)==null?void 0:Pe._UvAnimRotation)!=null?A:0,D={specVersion:"1.0",transparentWithZWrite:J,renderQueueOffsetNumber:ee,shadeColorFactor:q,shadeMultiplyTexture:ue,shadingShiftFactor:ce,shadingToonyFactor:Be,giEqualizationFactor:Rt,matcapFactor:Ct,matcapTexture:rn,rimLightingMixFactor:ks,rimMultiplyTexture:Cn,parametricRimColorFactor:Kr,parametricRimFresnelPowerFactor:Vs,parametricRimLiftFactor:Hs,outlineWidthMode:Hi,outlineWidthFactor:zi,outlineWidthMultiplyTexture:zs,outlineColorFactor:Gs,outlineLightingMixFactor:Ia,uvAnimationMaskTexture:E,uvAnimationScrollXSpeedFactor:N,uvAnimationScrollYSpeedFactor:k,uvAnimationRotationSpeedFactor:z};return xh(xn({},e),{pbrMetallicRoughness:{baseColorFactor:pe,baseColorTexture:Le},normalTexture:De,emissiveTexture:he,emissiveFactor:at,alphaMode:xe,alphaCutoff:oe,doubleSided:Ye,extensions:{VRMC_materials_mtoon:D}})}_parseV0UnlitProperties(n,e){var t,i,r,s,o;const a=n.shader==="VRM/UnlitTransparentZWrite",l=n.shader==="VRM/UnlitTransparent"||a,c=this._v0ParseRenderQueue(n),u=n.shader==="VRM/UnlitCutout",d=l?"BLEND":u?"MASK":"OPAQUE",h=u?(i=(t=n.floatProperties)==null?void 0:t._Cutoff)!=null?i:.5:void 0,f=this._portTextureTransform(n),g=((s=(r=n.vectorProperties)==null?void 0:r._Color)!=null?s:[1,1,1,1]).map(or),_=(o=n.textureProperties)==null?void 0:o._MainTex,p=_!=null?{index:_,extensions:xn({},f)}:void 0,m={specVersion:"1.0",transparentWithZWrite:a,renderQueueOffsetNumber:c,shadeColorFactor:g,shadeMultiplyTexture:p};return xh(xn({},e),{pbrMetallicRoughness:{baseColorFactor:g,baseColorTexture:p},alphaMode:d,alphaCutoff:h,extensions:{VRMC_materials_mtoon:m}})}_portTextureTransform(n){var e,t,i,r,s;const o=(e=n.vectorProperties)==null?void 0:e._MainTex;if(o==null)return{};const a=[(t=o==null?void 0:o[0])!=null?t:0,(i=o==null?void 0:o[1])!=null?i:0],l=[(r=o==null?void 0:o[2])!=null?r:1,(s=o==null?void 0:o[3])!=null?s:1];return a[1]=1-l[1]-a[1],{KHR_texture_transform:{offset:a,scale:l}}}_v0ParseRenderQueue(n){var e,t;const i=n.shader==="VRM/UnlitTransparentZWrite",r=((e=n.keywordMap)==null?void 0:e._ALPHABLEND_ON)!=null||n.shader==="VRM/UnlitTransparent"||i,s=((t=n.floatProperties)==null?void 0:t._ZWrite)===1||i;let o=0;if(r){const a=n.renderQueue;a!=null&&(s?o=this._renderQueueMapTransparentZWrite.get(a):o=this._renderQueueMapTransparent.get(a))}return o}_populateRenderQueueMap(n){const e=new Set,t=new Set;n.forEach(i=>{var r,s;const o=i.shader==="VRM/UnlitTransparentZWrite",a=((r=i.keywordMap)==null?void 0:r._ALPHABLEND_ON)!=null||i.shader==="VRM/UnlitTransparent"||o,l=((s=i.floatProperties)==null?void 0:s._ZWrite)===1||o;if(a){const c=i.renderQueue;c!=null&&(l?t.add(c):e.add(c))}}),e.size>10&&console.warn(`VRMMaterialsV0CompatPlugin: This VRM uses ${e.size} render queues for Transparent materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`),t.size>10&&console.warn(`VRMMaterialsV0CompatPlugin: This VRM uses ${t.size} render queues for TransparentZWrite materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`),Array.from(e).sort().forEach((i,r)=>{const s=Math.min(Math.max(r-e.size+1,-9),0);this._renderQueueMapTransparent.set(i,s)}),Array.from(t).sort().forEach((i,r)=>{const s=Math.min(Math.max(r,0),9);this._renderQueueMapTransparentZWrite.set(i,s)})}},Mh=(n,e,t)=>new Promise((i,r)=>{var s=l=>{try{a(t.next(l))}catch(c){r(c)}},o=l=>{try{a(t.throw(l))}catch(c){r(c)}},a=l=>l.done?i(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(n,e)).next())}),ei=new b,Sl=class extends zt{constructor(n){super(),this._attrPosition=new ke(new Float32Array([0,0,0,0,0,0]),3),this._attrPosition.setUsage(Cm);const e=new pt;e.setAttribute("position",this._attrPosition);const t=new mi({color:16711935,depthTest:!1,depthWrite:!1});this._line=new Sa(e,t),this.add(this._line),this.constraint=n}updateMatrixWorld(n){ei.setFromMatrixPosition(this.constraint.destination.matrixWorld),this._attrPosition.setXYZ(0,ei.x,ei.y,ei.z),this.constraint.source&&ei.setFromMatrixPosition(this.constraint.source.matrixWorld),this._attrPosition.setXYZ(1,ei.x,ei.y,ei.z),this._attrPosition.needsUpdate=!0,super.updateMatrixWorld(n)}};function yh(n,e){return e.set(n.elements[12],n.elements[13],n.elements[14])}var SS=new b,ES=new b;function TS(n,e){return n.decompose(SS,e,ES),e}function na(n){return n.invert?n.invert():n.inverse(),n}var au=class{constructor(n,e){this.destination=n,this.source=e,this.weight=1}},wS=new b,AS=new b,bS=new b,RS=new Ee,CS=new Ee,IS=new Ee,PS=class extends au{get aimAxis(){return this._aimAxis}set aimAxis(n){this._aimAxis=n,this._v3AimAxis.set(n==="PositiveX"?1:n==="NegativeX"?-1:0,n==="PositiveY"?1:n==="NegativeY"?-1:0,n==="PositiveZ"?1:n==="NegativeZ"?-1:0)}get dependencies(){const n=new Set([this.source]);return this.destination.parent&&n.add(this.destination.parent),n}constructor(n,e){super(n,e),this._aimAxis="PositiveX",this._v3AimAxis=new b(1,0,0),this._dstRestQuat=new Ee}setInitState(){this._dstRestQuat.copy(this.destination.quaternion)}update(){this.destination.updateWorldMatrix(!0,!1),this.source.updateWorldMatrix(!0,!1);const n=RS.identity(),e=CS.identity();this.destination.parent&&(TS(this.destination.parent.matrixWorld,n),na(e.copy(n)));const t=wS.copy(this._v3AimAxis).applyQuaternion(this._dstRestQuat).applyQuaternion(n),i=yh(this.source.matrixWorld,AS).sub(yh(this.destination.matrixWorld,bS)).normalize(),r=IS.setFromUnitVectors(t,i).premultiply(e).multiply(n).multiply(this._dstRestQuat);this.destination.quaternion.copy(this._dstRestQuat).slerp(r,this.weight)}};function LS(n,e){const t=[n];let i=n.parent;for(;i!==null;)t.unshift(i),i=i.parent;t.forEach(r=>{e(r)})}var NS=class{constructor(){this._constraints=new Set,this._objectConstraintsMap=new Map}get constraints(){return this._constraints}addConstraint(n){this._constraints.add(n);let e=this._objectConstraintsMap.get(n.destination);e==null&&(e=new Set,this._objectConstraintsMap.set(n.destination,e)),e.add(n)}deleteConstraint(n){this._constraints.delete(n),this._objectConstraintsMap.get(n.destination).delete(n)}setInitState(){const n=new Set,e=new Set;for(const t of this._constraints)this._processConstraint(t,n,e,i=>i.setInitState())}update(){const n=new Set,e=new Set;for(const t of this._constraints)this._processConstraint(t,n,e,i=>i.update())}_processConstraint(n,e,t,i){if(t.has(n))return;if(e.has(n))throw new Error("VRMNodeConstraintManager: Circular dependency detected while updating constraints");e.add(n);const r=n.dependencies;for(const s of r)LS(s,o=>{const a=this._objectConstraintsMap.get(o);if(a)for(const l of a)this._processConstraint(l,e,t,i)});i(n),t.add(n)}},US=new Ee,DS=new Ee,OS=class extends au{get dependencies(){return new Set([this.source])}constructor(n,e){super(n,e),this._dstRestQuat=new Ee,this._invSrcRestQuat=new Ee}setInitState(){this._dstRestQuat.copy(this.destination.quaternion),na(this._invSrcRestQuat.copy(this.source.quaternion))}update(){const n=US.copy(this._invSrcRestQuat).multiply(this.source.quaternion),e=DS.copy(this._dstRestQuat).multiply(n);this.destination.quaternion.copy(this._dstRestQuat).slerp(e,this.weight)}},FS=new b,BS=new Ee,kS=new Ee,VS=class extends au{get rollAxis(){return this._rollAxis}set rollAxis(n){this._rollAxis=n,this._v3RollAxis.set(n==="X"?1:0,n==="Y"?1:0,n==="Z"?1:0)}get dependencies(){return new Set([this.source])}constructor(n,e){super(n,e),this._rollAxis="X",this._v3RollAxis=new b(1,0,0),this._dstRestQuat=new Ee,this._invDstRestQuat=new Ee,this._invSrcRestQuatMulDstRestQuat=new Ee}setInitState(){this._dstRestQuat.copy(this.destination.quaternion),na(this._invDstRestQuat.copy(this._dstRestQuat)),na(this._invSrcRestQuatMulDstRestQuat.copy(this.source.quaternion)).multiply(this._dstRestQuat)}update(){const n=BS.copy(this._invDstRestQuat).multiply(this.source.quaternion).multiply(this._invSrcRestQuatMulDstRestQuat),e=FS.copy(this._v3RollAxis).applyQuaternion(n),i=kS.setFromUnitVectors(e,this._v3RollAxis).premultiply(this._dstRestQuat).multiply(n);this.destination.quaternion.copy(this._dstRestQuat).slerp(i,this.weight)}},HS=new Set(["1.0","1.0-beta"]),ip=class gs{get name(){return gs.EXTENSION_NAME}constructor(e,t){this.parser=e,this.helperRoot=t==null?void 0:t.helperRoot}afterRoot(e){return Mh(this,null,function*(){e.userData.vrmNodeConstraintManager=yield this._import(e)})}_import(e){return Mh(this,null,function*(){var t;const i=this.parser.json;if(!(((t=i.extensionsUsed)==null?void 0:t.indexOf(gs.EXTENSION_NAME))!==-1))return null;const s=new NS,o=yield this.parser.getDependencies("node");return o.forEach((a,l)=>{var c;const u=i.nodes[l],d=(c=u==null?void 0:u.extensions)==null?void 0:c[gs.EXTENSION_NAME];if(d==null)return;const h=d.specVersion;if(!HS.has(h)){console.warn(`VRMNodeConstraintLoaderPlugin: Unknown ${gs.EXTENSION_NAME} specVersion "${h}"`);return}const f=d.constraint;if(f.roll!=null){const g=this._importRollConstraint(a,o,f.roll);s.addConstraint(g)}else if(f.aim!=null){const g=this._importAimConstraint(a,o,f.aim);s.addConstraint(g)}else if(f.rotation!=null){const g=this._importRotationConstraint(a,o,f.rotation);s.addConstraint(g)}}),e.scene.updateMatrixWorld(),s.setInitState(),s})}_importRollConstraint(e,t,i){const{source:r,rollAxis:s,weight:o}=i,a=t[r],l=new VS(e,a);if(s!=null&&(l.rollAxis=s),o!=null&&(l.weight=o),this.helperRoot){const c=new Sl(l);this.helperRoot.add(c)}return l}_importAimConstraint(e,t,i){const{source:r,aimAxis:s,weight:o}=i,a=t[r],l=new PS(e,a);if(s!=null&&(l.aimAxis=s),o!=null&&(l.weight=o),this.helperRoot){const c=new Sl(l);this.helperRoot.add(c)}return l}_importRotationConstraint(e,t,i){const{source:r,weight:s}=i,o=t[r],a=new OS(e,o);if(s!=null&&(a.weight=s),this.helperRoot){const l=new Sl(a);this.helperRoot.add(l)}return a}};ip.EXTENSION_NAME="VRMC_node_constraint";var zS=ip,So=(n,e,t)=>new Promise((i,r)=>{var s=l=>{try{a(t.next(l))}catch(c){r(c)}},o=l=>{try{a(t.throw(l))}catch(c){r(c)}},a=l=>l.done?i(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(n,e)).next())}),lu=class{},El=new b,Ai=new b,rp=class extends lu{get type(){return"capsule"}constructor(n){var e,t,i,r;super(),this.offset=(e=n==null?void 0:n.offset)!=null?e:new b(0,0,0),this.tail=(t=n==null?void 0:n.tail)!=null?t:new b(0,0,0),this.radius=(i=n==null?void 0:n.radius)!=null?i:0,this.inside=(r=n==null?void 0:n.inside)!=null?r:!1}calculateCollision(n,e,t,i){El.setFromMatrixPosition(n),Ai.subVectors(this.tail,this.offset).applyMatrix4(n),Ai.sub(El);const r=Ai.lengthSq();i.copy(e).sub(El);const s=Ai.dot(i);s<=0||(r<=s||Ai.multiplyScalar(s/r),i.sub(Ai));const o=i.length(),a=this.inside?this.radius-t-o:o-t-this.radius;return a<0&&(i.multiplyScalar(1/o),this.inside&&i.negate()),a}},Tl=new b,Sh=new Ae,sp=class extends lu{get type(){return"plane"}constructor(n){var e,t;super(),this.offset=(e=n==null?void 0:n.offset)!=null?e:new b(0,0,0),this.normal=(t=n==null?void 0:n.normal)!=null?t:new b(0,0,1)}calculateCollision(n,e,t,i){i.setFromMatrixPosition(n),i.negate().add(e),Sh.getNormalMatrix(n),Tl.copy(this.normal).applyNormalMatrix(Sh).normalize();const r=i.dot(Tl)-t;return i.copy(Tl),r}},GS=new b,op=class extends lu{get type(){return"sphere"}constructor(n){var e,t,i;super(),this.offset=(e=n==null?void 0:n.offset)!=null?e:new b(0,0,0),this.radius=(t=n==null?void 0:n.radius)!=null?t:0,this.inside=(i=n==null?void 0:n.inside)!=null?i:!1}calculateCollision(n,e,t,i){i.subVectors(e,GS.setFromMatrixPosition(n));const r=i.length(),s=this.inside?this.radius-t-r:r-t-this.radius;return s<0&&(i.multiplyScalar(1/r),this.inside&&i.negate()),s}},Mn=new b,WS=class extends pt{constructor(n){super(),this.worldScale=1,this._currentRadius=0,this._currentOffset=new b,this._currentTail=new b,this._shape=n,this._attrPos=new ke(new Float32Array(396),3),this.setAttribute("position",this._attrPos),this._attrIndex=new ke(new Uint16Array(264),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let n=!1;const e=this._shape.radius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,n=!0),this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),n=!0);const t=Mn.copy(this._shape.tail).divideScalar(this.worldScale);this._currentTail.distanceToSquared(t)>1e-10&&(this._currentTail.copy(t),n=!0),n&&this._buildPosition()}_buildPosition(){Mn.copy(this._currentTail).sub(this._currentOffset);const n=Mn.length()/this._currentRadius;for(let i=0;i<=16;i++){const r=i/16*Math.PI;this._attrPos.setXYZ(i,-Math.sin(r),-Math.cos(r),0),this._attrPos.setXYZ(17+i,n+Math.sin(r),Math.cos(r),0),this._attrPos.setXYZ(34+i,-Math.sin(r),0,-Math.cos(r)),this._attrPos.setXYZ(51+i,n+Math.sin(r),0,Math.cos(r))}for(let i=0;i<32;i++){const r=i/16*Math.PI;this._attrPos.setXYZ(68+i,0,Math.sin(r),Math.cos(r)),this._attrPos.setXYZ(100+i,n,Math.sin(r),Math.cos(r))}const e=Math.atan2(Mn.y,Math.sqrt(Mn.x*Mn.x+Mn.z*Mn.z)),t=-Math.atan2(Mn.z,Mn.x);this.rotateZ(e),this.rotateY(t),this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let n=0;n<34;n++){const e=(n+1)%34;this._attrIndex.setXY(n*2,n,e),this._attrIndex.setXY(68+n*2,34+n,34+e)}for(let n=0;n<32;n++){const e=(n+1)%32;this._attrIndex.setXY(136+n*2,68+n,68+e),this._attrIndex.setXY(200+n*2,100+n,100+e)}this._attrIndex.needsUpdate=!0}},XS=class extends pt{constructor(n){super(),this.worldScale=1,this._currentOffset=new b,this._currentNormal=new b,this._shape=n,this._attrPos=new ke(new Float32Array(6*3),3),this.setAttribute("position",this._attrPos),this._attrIndex=new ke(new Uint16Array(10),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let n=!1;this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),n=!0),this._currentNormal.equals(this._shape.normal)||(this._currentNormal.copy(this._shape.normal),n=!0),n&&this._buildPosition()}_buildPosition(){this._attrPos.setXYZ(0,-.5,-.5,0),this._attrPos.setXYZ(1,.5,-.5,0),this._attrPos.setXYZ(2,.5,.5,0),this._attrPos.setXYZ(3,-.5,.5,0),this._attrPos.setXYZ(4,0,0,0),this._attrPos.setXYZ(5,0,0,.25),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this.lookAt(this._currentNormal),this._attrPos.needsUpdate=!0}_buildIndex(){this._attrIndex.setXY(0,0,1),this._attrIndex.setXY(2,1,2),this._attrIndex.setXY(4,2,3),this._attrIndex.setXY(6,3,0),this._attrIndex.setXY(8,4,5),this._attrIndex.needsUpdate=!0}},qS=class extends pt{constructor(n){super(),this.worldScale=1,this._currentRadius=0,this._currentOffset=new b,this._shape=n,this._attrPos=new ke(new Float32Array(32*3*3),3),this.setAttribute("position",this._attrPos),this._attrIndex=new ke(new Uint16Array(64*3),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let n=!1;const e=this._shape.radius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,n=!0),this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),n=!0),n&&this._buildPosition()}_buildPosition(){for(let n=0;n<32;n++){const e=n/16*Math.PI;this._attrPos.setXYZ(n,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+n,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+n,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let n=0;n<32;n++){const e=(n+1)%32;this._attrIndex.setXY(n*2,n,e),this._attrIndex.setXY(64+n*2,32+n,32+e),this._attrIndex.setXY(128+n*2,64+n,64+e)}this._attrIndex.needsUpdate=!0}},YS=new b,wl=class extends zt{constructor(n){if(super(),this.matrixAutoUpdate=!1,this.collider=n,this.collider.shape instanceof op)this._geometry=new qS(this.collider.shape);else if(this.collider.shape instanceof rp)this._geometry=new WS(this.collider.shape);else if(this.collider.shape instanceof sp)this._geometry=new XS(this.collider.shape);else throw new Error("VRMSpringBoneColliderHelper: Unknown collider shape type detected");const e=new mi({color:16711935,depthTest:!1,depthWrite:!1});this._line=new Hr(this._geometry,e),this.add(this._line)}dispose(){this._geometry.dispose()}updateMatrixWorld(n){this.collider.updateWorldMatrix(!0,!1),this.matrix.copy(this.collider.matrixWorld);const e=this.matrix.elements;this._geometry.worldScale=YS.set(e[0],e[1],e[2]).length(),this._geometry.update(),super.updateMatrixWorld(n)}},jS=class extends pt{constructor(n){super(),this.worldScale=1,this._currentRadius=0,this._currentTail=new b,this._springBone=n,this._attrPos=new ke(new Float32Array(294),3),this.setAttribute("position",this._attrPos),this._attrIndex=new ke(new Uint16Array(194),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let n=!1;const e=this._springBone.settings.hitRadius/this.worldScale;this._currentRadius!==e&&(this._currentRadius=e,n=!0),this._currentTail.equals(this._springBone.initialLocalChildPosition)||(this._currentTail.copy(this._springBone.initialLocalChildPosition),n=!0),n&&this._buildPosition()}_buildPosition(){for(let n=0;n<32;n++){const e=n/16*Math.PI;this._attrPos.setXYZ(n,Math.cos(e),Math.sin(e),0),this._attrPos.setXYZ(32+n,0,Math.cos(e),Math.sin(e)),this._attrPos.setXYZ(64+n,Math.sin(e),0,Math.cos(e))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.setXYZ(96,0,0,0),this._attrPos.setXYZ(97,this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let n=0;n<32;n++){const e=(n+1)%32;this._attrIndex.setXY(n*2,n,e),this._attrIndex.setXY(64+n*2,32+n,32+e),this._attrIndex.setXY(128+n*2,64+n,64+e)}this._attrIndex.setXY(192,96,97),this._attrIndex.needsUpdate=!0}},KS=new b,$S=class extends zt{constructor(n){super(),this.matrixAutoUpdate=!1,this.springBone=n,this._geometry=new jS(this.springBone);const e=new mi({color:16776960,depthTest:!1,depthWrite:!1});this._line=new Hr(this._geometry,e),this.add(this._line)}dispose(){this._geometry.dispose()}updateMatrixWorld(n){this.springBone.bone.updateWorldMatrix(!0,!1),this.matrix.copy(this.springBone.bone.matrixWorld);const e=this.matrix.elements;this._geometry.worldScale=KS.set(e[0],e[1],e[2]).length(),this._geometry.update(),super.updateMatrixWorld(n)}},ZS=new b(1,0,0),JS=new b(0,1,0),QS=new b(0,-1,0),Al=new Ee,cu=class{get internalTotalRotationCache(){return this._totalRotationCache}constructor(){this.rotation=new Ee,this._totalRotationCache=new Ee,this._totalRotationInvCache=new Ee}internalPrecalcRotation(n,e){e.equals(QS)?Al.setFromAxisAngle(ZS,Math.PI):Al.setFromUnitVectors(JS,e),this._totalRotationCache.copy(n).multiply(Al).multiply(this.rotation),this._totalRotationInvCache.copy(this._totalRotationCache).invert()}},eE=Math.sqrt(Number.EPSILON),ap=class extends cu{constructor(n){var e,t;super(),this.angle=tt.clamp((e=n==null?void 0:n.angle)!=null?e:Math.PI,0,Math.PI),this.rotation=(t=n==null?void 0:n.rotation)!=null?t:new Ee}calculateLimit(n){n.applyQuaternion(this._totalRotationInvCache);const e=Math.cos(this.angle);let t=!1;if(n.y<e){t=!0;const i=1-n.y*n.y;if(i<eE)n.x=0,n.z=Math.sqrt(1-e*e);else{const r=Math.sqrt((1-e*e)/i);n.x*=r,n.z*=r}n.y=e}return n.applyQuaternion(this._totalRotationCache),t}},Fo=4,Ft=4*Fo,tE=class extends pt{constructor(n){super(),this._limit=n,this._currentAngle=n.angle,this._attrPos=new ke(new Float32Array(3*(Ft+1)),3),this.setAttribute("position",this._attrPos),this._attrIndex=new ke(new Uint16Array(2*(Ft+4)),1),this.setIndex(this._attrIndex),this._buildIndex(),this._buildPosition()}update(){let n=!1;this._currentAngle!==this._limit.angle&&(this._currentAngle=this._limit.angle,n=!0),n&&this._buildPosition()}_buildPosition(){const n=Math.cos(this._currentAngle),e=Math.sin(this._currentAngle);for(let t=0;t<Ft;t++){const i=2*Math.PI*(t/Ft);this._attrPos.setXYZ(t,e*Math.cos(i),n,e*Math.sin(i))}this._attrPos.setXYZ(Ft,0,0,0),this._attrPos.needsUpdate=!0}_buildIndex(){for(let n=0;n<Ft;n++){const e=(n+1)%Ft;this._attrIndex.setXY(n*2,n,e)}this._attrIndex.setXY(Ft*2,Ft,0),this._attrIndex.setXY(Ft*2+2,Ft,Fo),this._attrIndex.setXY(Ft*2+4,Ft,2*Fo),this._attrIndex.setXY(Ft*2+6,Ft,3*Fo),this._attrIndex.needsUpdate=!0}},nE=Math.sqrt(Number.EPSILON),lp=class extends cu{constructor(n){var e,t;super(),this.angle=tt.clamp((e=n==null?void 0:n.angle)!=null?e:Math.PI,0,Math.PI),this.rotation=(t=n==null?void 0:n.rotation)!=null?t:new Ee}calculateLimit(n){n.applyQuaternion(this._totalRotationInvCache);let e=!1;const t=n.y*n.y+n.z*n.z;if(t<nE)e=!0,n.set(0,1,0);else{if(n.x!==0){e=!0;const r=1/Math.sqrt(t);n.set(0,n.y*r,n.z*r)}const i=Math.cos(this.angle);if(n.y<i){e=!0;const r=Math.sqrt(1-i*i),s=n.z<0?-1:1;n.y=i,n.z=r*s}}return n.applyQuaternion(this._totalRotationCache),e}},cn=17,iE=class extends pt{constructor(n){super(),this._limit=n,this._currentAngle=n.angle,this._attrPos=new ke(new Float32Array(3*(cn+1)),3),this.setAttribute("position",this._attrPos),this._attrIndex=new ke(new Uint16Array(2*(cn+1)),1),this.setIndex(this._attrIndex),this._buildIndex(),this._buildPosition()}update(){let n=!1;this._currentAngle!==this._limit.angle&&(this._currentAngle=this._limit.angle,n=!0),n&&this._buildPosition()}_buildPosition(){for(let n=0;n<cn;n++){const e=this._currentAngle*(2*(n/(cn-1))-1);this._attrPos.setXYZ(n,0,Math.cos(e),Math.sin(e))}this._attrPos.setXYZ(cn,0,0,0),this._attrPos.needsUpdate=!0}_buildIndex(){for(let n=0;n<cn-1;n++)this._attrIndex.setXY(n*2,n,n+1);this._attrIndex.setXY(cn*2-2,cn-1,cn),this._attrIndex.setXY(cn*2,cn,0),this._attrIndex.needsUpdate=!0}},Eh=Math.sqrt(Number.EPSILON),cp=class extends cu{constructor(n){var e,t,i;super(),this.pitch=tt.clamp((e=n==null?void 0:n.pitch)!=null?e:Math.PI,0,Math.PI),this.yaw=tt.clamp((t=n==null?void 0:n.yaw)!=null?t:Math.PI/2,0,Math.PI/2),this.rotation=(i=n==null?void 0:n.rotation)!=null?i:new Ee}calculateLimit(n){n.applyQuaternion(this._totalRotationInvCache);let e=!1,t;n.y<-1+Eh?t=Math.PI:Math.abs(n.x)>1-Eh?t=0:t=Math.atan2(n.z,n.y);let i=Math.asin(tt.clamp(n.x,-1,1));Math.abs(t)>this.pitch&&(e=!0,t=this.pitch*Math.sign(t)),Math.abs(i)>this.yaw&&(e=!0,i=this.yaw*Math.sign(i));const r=Math.cos(i),s=Math.sin(i);return n.set(s,r*Math.cos(t),r*Math.sin(t)),n.applyQuaternion(this._totalRotationCache),e}},we=17,rE=class extends pt{constructor(n){super(),this._limit=n,this._currentPitch=n.pitch,this._currentYaw=n.yaw,this._attrPos=new ke(new Float32Array(3*(we+4*(we-1)+1)),3),this.setAttribute("position",this._attrPos),this._attrIndex=new ke(new Uint16Array(2*(5*(we-1)+6)),1),this.setIndex(this._attrIndex),this._buildIndex(),this._buildPosition()}update(){let n=!1;this._currentPitch!==this._limit.pitch&&(this._currentPitch=this._limit.pitch,n=!0),this._currentYaw!==this._limit.yaw&&(this._currentYaw=this._limit.yaw,n=!0),n&&this._buildPosition()}_buildPosition(){for(let n=0;n<we;n++){const e=this._currentPitch*(2*(n/(we-1))-1);this._attrPos.setXYZ(n,0,Math.cos(e),Math.sin(e))}{const n=Math.cos(this._currentYaw),e=Math.sin(this._currentYaw);for(let t=0;t<we-1;t++){const i=this._currentPitch*(2*(t/(we-1))-1),r=Math.cos(i),s=Math.sin(i);this._attrPos.setXYZ(we+t,e,n*r,n*s),this._attrPos.setXYZ(we+2*(we-1)+t,-e,n*r,-n*s)}}{const n=Math.cos(this._currentPitch),e=Math.sin(this._currentPitch);for(let t=0;t<we-1;t++){const i=this._currentYaw*(2*(t/(we-1))-1),r=Math.cos(i),s=Math.sin(i);this._attrPos.setXYZ(we+we-1+t,-s,r*n,r*e),this._attrPos.setXYZ(we+3*(we-1)+t,s,r*n,-r*e)}}this._attrPos.setXYZ(we+4*(we-1),0,0,0),this._attrPos.needsUpdate=!0}_buildIndex(){for(let n=0;n<we-1;n++)this._attrIndex.setXY(n*2,n,n+1);for(let n=0;n<4*(we-1);n++){const e=(n+1)%(4*(we-1));this._attrIndex.setXY(2*(we-1+n),we+n,we+e)}this._attrIndex.setXY(2*(5*(we-1)),we+4*(we-1),0),this._attrIndex.setXY(2*(5*(we-1)+1),we+4*(we-1),we-1),this._attrIndex.setXY(2*(5*(we-1)+2),we+4*(we-1),we),this._attrIndex.setXY(2*(5*(we-1)+3),we+4*(we-1),we+(we-1)),this._attrIndex.setXY(2*(5*(we-1)+4),we+4*(we-1),we+2*(we-1)),this._attrIndex.setXY(2*(5*(we-1)+5),we+4*(we-1),we+3*(we-1)),this._attrIndex.needsUpdate=!0}},Th=new b,wh=new b,bl=class extends zt{constructor(n,e){if(super(),this.matrixAutoUpdate=!1,this.limit=n,this.joint=e,this.limit instanceof ap)this._geometry=new tE(this.limit);else if(this.limit instanceof lp)this._geometry=new iE(this.limit);else if(this.limit instanceof cp)this._geometry=new rE(this.limit);else throw new Error("VRMSpringBoneLimitHelper: Unknown limit type detected");const t=new mi({color:65535,depthTest:!1,depthWrite:!1});this._line=new Hr(this._geometry,t),this.add(this._line)}dispose(){this._geometry.dispose()}updateMatrixWorld(n){this.joint.bone.updateWorldMatrix(!0,!1),this.joint.bone.getWorldPosition(Th),wh.setScalar(.5*this.joint.worldSpaceBoneLength),this.matrix.compose(Th,this.limit.internalTotalRotationCache,wh),this._geometry.update(),super.updateMatrixWorld(n)}},Rl=class extends nt{constructor(n){super(),this.colliderMatrix=new Te,this.shape=n}updateWorldMatrix(n,e){super.updateWorldMatrix(n,e),sE(this.colliderMatrix,this.matrixWorld,this.shape.offset)}};function sE(n,e,t){const i=e.elements;n.copy(e),t&&(n.elements[12]=i[0]*t.x+i[4]*t.y+i[8]*t.z+i[12],n.elements[13]=i[1]*t.x+i[5]*t.y+i[9]*t.z+i[13],n.elements[14]=i[2]*t.x+i[6]*t.y+i[10]*t.z+i[14])}var oE=new Te;function aE(n){return n.invert?n.invert():n.getInverse(oE.copy(n)),n}var lE=class{constructor(n){this._inverseCache=new Te,this._shouldUpdateInverse=!0,this.matrix=n;const e={set:(t,i,r)=>(this._shouldUpdateInverse=!0,t[i]=r,!0)};this._originalElements=n.elements,n.elements=new Proxy(n.elements,e)}get inverse(){return this._shouldUpdateInverse&&(aE(this._inverseCache.copy(this.matrix)),this._shouldUpdateInverse=!1),this._inverseCache}revert(){this.matrix.elements=this._originalElements}},cE=new b,uE=new b;function dE(n,e){return n.matrixWorld.decompose(cE,e,uE),e}var Cl=new Te,ar=new b,ls=new b,Eo=new Ee,Il=new Te,Ah=new Te,cs=new b,bi=new b,hE=class{constructor(n,e,t={},i=[]){this._currentTail=new b,this._prevTail=new b,this._boneAxis=new b,this._worldSpaceBoneLength=0,this._center=null,this._initialLocalMatrix=new Te,this._initialLocalRotation=new Ee,this._initialLocalChildPosition=new b;var r,s,o,a,l,c;this.bone=n,this.bone.matrixAutoUpdate=!1,this.child=e,this.settings={hitRadius:(r=t.hitRadius)!=null?r:0,stiffness:(s=t.stiffness)!=null?s:1,gravityPower:(o=t.gravityPower)!=null?o:0,gravityDir:(l=(a=t.gravityDir)==null?void 0:a.clone())!=null?l:new b(0,-1,0),dragForce:(c=t.dragForce)!=null?c:.4},this.limit=null,this.colliderGroups=i}get worldSpaceBoneLength(){return this._worldSpaceBoneLength}get dependencies(){const n=new Set,e=this.bone.parent;e&&n.add(e);for(let t=0;t<this.colliderGroups.length;t++)for(let i=0;i<this.colliderGroups[t].colliders.length;i++)n.add(this.colliderGroups[t].colliders[i]);return n}get center(){return this._center}set center(n){var e;(e=this._center)!=null&&e.userData.inverseCacheProxy&&(this._center.userData.inverseCacheProxy.revert(),delete this._center.userData.inverseCacheProxy),this._center=n,this._center&&(this._center.userData.inverseCacheProxy||(this._center.userData.inverseCacheProxy=new lE(this._center.matrixWorld)))}get initialLocalChildPosition(){return this._initialLocalChildPosition}get _parentMatrixWorld(){return this.bone.parent?this.bone.parent.matrixWorld:Cl}setInitState(){this._initialLocalMatrix.copy(this.bone.matrix),this._initialLocalRotation.copy(this.bone.quaternion),this.child?this._initialLocalChildPosition.copy(this.child.position):this._initialLocalChildPosition.copy(this.bone.position).normalize().multiplyScalar(.07);const n=this._getMatrixWorldToCenter();this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)).applyMatrix4(n),this._prevTail.copy(this._currentTail),this._boneAxis.copy(this._initialLocalChildPosition).normalize()}reset(){this.bone.quaternion.copy(this._initialLocalRotation),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._parentMatrixWorld,this.bone.matrix);const n=this._getMatrixWorldToCenter();this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)).applyMatrix4(n),this._prevTail.copy(this._currentTail)}update(n){var e;if(n<=0)return;this._calcWorldSpaceBoneLength(),Il.copy(this._parentMatrixWorld).multiply(this._initialLocalMatrix),Ah.copy(Il).invert(),cs.setFromMatrixPosition(this.bone.matrixWorld),this.limit&&(this.bone.parent?dE(this.bone.parent,Eo):Eo.identity(),Eo.multiply(this._initialLocalRotation).normalize(),this.limit.internalPrecalcRotation(Eo,this._boneAxis));const t=ls.copy(this._boneAxis).transformDirection(Il);bi.copy(this._currentTail).add(ar.subVectors(this._currentTail,this._prevTail).multiplyScalar(1-this.settings.dragForce)).applyMatrix4(this._getMatrixCenterToWorld()).addScaledVector(t,this.settings.stiffness*n).addScaledVector(this.settings.gravityDir,this.settings.gravityPower*n),bi.sub(cs).normalize(),(e=this.limit)==null||e.calculateLimit(bi),bi.multiplyScalar(this._worldSpaceBoneLength).add(cs),this._collision(bi),this._prevTail.copy(this._currentTail),this._currentTail.copy(bi).applyMatrix4(this._getMatrixWorldToCenter()),this.bone.quaternion.setFromUnitVectors(this._boneAxis,ar.copy(bi).applyMatrix4(Ah).normalize()).premultiply(this._initialLocalRotation),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._parentMatrixWorld,this.bone.matrix)}_collision(n){var e;for(let t=0;t<this.colliderGroups.length;t++)for(let i=0;i<this.colliderGroups[t].colliders.length;i++){const r=this.colliderGroups[t].colliders[i],s=r.shape.calculateCollision(r.colliderMatrix,n,this.settings.hitRadius,ar);s<0&&(n.addScaledVector(ar,-s),n.sub(cs).normalize(),(e=this.limit)==null||e.calculateLimit(n),n.multiplyScalar(this._worldSpaceBoneLength).add(cs))}}_calcWorldSpaceBoneLength(){ar.setFromMatrixPosition(this.bone.matrixWorld),this.child?ls.setFromMatrixPosition(this.child.matrixWorld):(ls.copy(this._initialLocalChildPosition),ls.applyMatrix4(this.bone.matrixWorld)),this._worldSpaceBoneLength=ar.sub(ls).length()}_getMatrixCenterToWorld(){return this._center?this._center.matrixWorld:Cl}_getMatrixWorldToCenter(){return this._center?this._center.userData.inverseCacheProxy.inverse:Cl}};function fE(n,e){const t=[];let i=n;for(;i!==null;)t.unshift(i),i=i.parent;t.forEach(r=>{e(r)})}function Nc(n,e){n.children.forEach(t=>{e(t)||Nc(t,e)})}function pE(n){var e;const t=new Map;for(const i of n){let r=i;do{const s=((e=t.get(r))!=null?e:0)+1;if(s===n.size)return r;t.set(r,s),r=r.parent}while(r!==null)}return null}var bh=class{constructor(){this._joints=new Set,this._sortedJoints=[],this._hasWarnedCircularDependency=!1,this._ancestors=[],this._objectSpringBonesMap=new Map,this._isSortedJointsDirty=!1,this._relevantChildrenUpdated=this._relevantChildrenUpdated.bind(this)}get joints(){return this._joints}get springBones(){return console.warn("VRMSpringBoneManager: springBones is deprecated. use joints instead."),this._joints}get colliderGroups(){const n=new Set;return this._joints.forEach(e=>{e.colliderGroups.forEach(t=>{n.add(t)})}),Array.from(n)}get colliders(){const n=new Set;return this.colliderGroups.forEach(e=>{e.colliders.forEach(t=>{n.add(t)})}),Array.from(n)}addJoint(n){this._joints.add(n);let e=this._objectSpringBonesMap.get(n.bone);e==null&&(e=new Set,this._objectSpringBonesMap.set(n.bone,e)),e.add(n),this._isSortedJointsDirty=!0}addSpringBone(n){console.warn("VRMSpringBoneManager: addSpringBone() is deprecated. use addJoint() instead."),this.addJoint(n)}deleteJoint(n){this._joints.delete(n),this._objectSpringBonesMap.get(n.bone).delete(n),this._isSortedJointsDirty=!0}deleteSpringBone(n){console.warn("VRMSpringBoneManager: deleteSpringBone() is deprecated. use deleteJoint() instead."),this.deleteJoint(n)}setInitState(){this._sortJoints();for(let n=0;n<this._sortedJoints.length;n++){const e=this._sortedJoints[n];e.bone.updateMatrix(),e.bone.updateWorldMatrix(!1,!1),e.setInitState()}}reset(){this._sortJoints();for(let n=0;n<this._sortedJoints.length;n++){const e=this._sortedJoints[n];e.bone.updateMatrix(),e.bone.updateWorldMatrix(!1,!1),e.reset()}}update(n){this._sortJoints();for(let e=0;e<this._ancestors.length;e++)this._ancestors[e].updateWorldMatrix(e===0,!1);for(let e=0;e<this._sortedJoints.length;e++){const t=this._sortedJoints[e];t.bone.updateMatrix(),t.bone.updateWorldMatrix(!1,!1),t.update(n),Nc(t.bone,this._relevantChildrenUpdated)}}_sortJoints(){if(!this._isSortedJointsDirty)return;const n=[],e=new Set,t=new Set,i=new Set;for(const s of this._joints)this._insertJointSort(s,e,t,n,i);this._sortedJoints=n;const r=pE(i);this._ancestors=[],r&&(this._ancestors.push(r),Nc(r,s=>{var o,a;return((a=(o=this._objectSpringBonesMap.get(s))==null?void 0:o.size)!=null?a:0)>0?!0:(this._ancestors.push(s),!1)})),this._isSortedJointsDirty=!1}_insertJointSort(n,e,t,i,r){if(t.has(n))return;if(e.has(n)){this._hasWarnedCircularDependency||(console.warn("VRMSpringBoneManager: Circular dependency detected"),this._hasWarnedCircularDependency=!0);return}e.add(n);const s=n.dependencies;for(const o of s){let a=!1,l=null;fE(o,c=>{const u=this._objectSpringBonesMap.get(c);if(u)for(const d of u)a=!0,this._insertJointSort(d,e,t,i,r);else a||(l=c)}),l&&r.add(l)}i.push(n),t.add(n)}_relevantChildrenUpdated(n){var e,t;return((t=(e=this._objectSpringBonesMap.get(n))==null?void 0:e.size)!=null?t:0)>0?!0:(n.updateWorldMatrix(!1,!1),!1)}},Rh="VRMC_springBone_extended_collider",Pl="VRMC_springBone_limit",mE=new Set(["1.0","1.0-beta"]),gE=new Set(["1.0"]),_E=new Set(["1.0","1.0-draft"]),up=class dr{get name(){return dr.EXTENSION_NAME}constructor(e,t){var i,r;this.parser=e,this.jointHelperRoot=t==null?void 0:t.jointHelperRoot,this.colliderHelperRoot=t==null?void 0:t.colliderHelperRoot,this.limitHelperRoot=t==null?void 0:t.limitHelperRoot,this.useExtendedColliders=(i=t==null?void 0:t.useExtendedColliders)!=null?i:!0,this.useLimits=(r=t==null?void 0:t.useLimits)!=null?r:!0}afterRoot(e){return So(this,null,function*(){e.userData.vrmSpringBoneManager=yield this._import(e)})}_import(e){return So(this,null,function*(){const t=yield this._v1Import(e);if(t!=null)return t;const i=yield this._v0Import(e);return i??null})}_v1Import(e){return So(this,null,function*(){var t,i,r,s,o;const a=e.parser.json;if(!(((t=a.extensionsUsed)==null?void 0:t.indexOf(dr.EXTENSION_NAME))!==-1))return null;const c=new bh,u=yield e.parser.getDependencies("node"),d=(i=a.extensions)==null?void 0:i[dr.EXTENSION_NAME];if(!d)return null;const h=d.specVersion;if(!mE.has(h))return console.warn(`VRMSpringBoneLoaderPlugin: Unknown ${dr.EXTENSION_NAME} specVersion "${h}"`),null;const f=(r=d.colliders)==null?void 0:r.map((_,p)=>{var m,y,M,T,C,R,w,I,W,v,S,B,O,G,Y;const F=u[_.node];if(F==null)return console.warn(`VRMSpringBoneLoaderPlugin: The collider #${p} attempted to reference a node #${_.node} but not found. Skipping the collider`),null;const j=_.shape,X=(m=_.extensions)==null?void 0:m[Rh];if(this.useExtendedColliders&&X!=null){const se=X.specVersion;if(!gE.has(se))console.warn(`VRMSpringBoneLoaderPlugin: Unknown ${Rh} specVersion "${se}". Fallbacking to the ${dr.EXTENSION_NAME} definition`);else{const U=X.shape;if(U.sphere)return this._importSphereCollider(F,{offset:new b().fromArray((y=U.sphere.offset)!=null?y:[0,0,0]),radius:(M=U.sphere.radius)!=null?M:0,inside:(T=U.sphere.inside)!=null?T:!1});if(U.capsule)return this._importCapsuleCollider(F,{offset:new b().fromArray((C=U.capsule.offset)!=null?C:[0,0,0]),radius:(R=U.capsule.radius)!=null?R:0,tail:new b().fromArray((w=U.capsule.tail)!=null?w:[0,0,0]),inside:(I=U.capsule.inside)!=null?I:!1});if(U.plane)return this._importPlaneCollider(F,{offset:new b().fromArray((W=U.plane.offset)!=null?W:[0,0,0]),normal:new b().fromArray((v=U.plane.normal)!=null?v:[0,0,1])})}}if(j.sphere)return this._importSphereCollider(F,{offset:new b().fromArray((S=j.sphere.offset)!=null?S:[0,0,0]),radius:(B=j.sphere.radius)!=null?B:0,inside:!1});if(j.capsule)return this._importCapsuleCollider(F,{offset:new b().fromArray((O=j.capsule.offset)!=null?O:[0,0,0]),radius:(G=j.capsule.radius)!=null?G:0,tail:new b().fromArray((Y=j.capsule.tail)!=null?Y:[0,0,0]),inside:!1});console.warn(`VRMSpringBoneLoaderPlugin: The collider #${p} has no valid shape. Skipping the collider`)}),g=(s=d.colliderGroups)==null?void 0:s.map((_,p)=>{var m;return{colliders:((m=_.colliders)!=null?m:[]).map(M=>{const T=f==null?void 0:f[M];return T??(console.warn(`VRMSpringBoneLoaderPlugin: The collider group #${p} attempted to reference a collider #${M} but not found. Skipping the collider`),null)}).filter(M=>M!=null),name:_.name}});return(o=d.springs)==null||o.forEach((_,p)=>{var m;const y=_.joints;if(y==null){console.warn(`VRMSpringBoneLoaderPlugin: The spring #${p} has no joints. Skipping the spring`);return}const M=(m=_.colliderGroups)==null?void 0:m.map(R=>{const w=g==null?void 0:g[R];return w??(console.warn(`VRMSpringBoneLoaderPlugin: The spring #${p} attempted to reference a collider group #${R} but not found. Skipping the collider group`),null)}).filter(R=>R!=null),T=_.center!=null?u[_.center]:void 0;let C;y.forEach(R=>{if(C){const w=C.node,I=u[w],W=R.node,v=u[W],S={hitRadius:C.hitRadius,dragForce:C.dragForce,gravityPower:C.gravityPower,stiffness:C.stiffness,gravityDir:C.gravityDir!=null?new b().fromArray(C.gravityDir):void 0},B=this._importJoint(I,v,S,M);T&&(B.center=T);const O=this._tryImportLimitFromSchema(B,C);O&&(B.limit=O),c.addJoint(B)}C=R})}),c.setInitState(),c})}_v0Import(e){return So(this,null,function*(){var t,i,r;const s=e.parser.json;if(!(((t=s.extensionsUsed)==null?void 0:t.indexOf("VRM"))!==-1))return null;const a=(i=s.extensions)==null?void 0:i.VRM,l=a==null?void 0:a.secondaryAnimation;if(!l)return null;const c=l==null?void 0:l.boneGroups;if(!c)return null;const u=new bh,d=yield e.parser.getDependencies("node"),h=(r=l.colliderGroups)==null?void 0:r.map((f,g)=>{var _;const p=d[f.node];return p==null?(console.warn(`VRMSpringBoneLoaderPlugin: The collider group #${g} attempted to reference a node #${f.node} but not found. Skipping the collider group`),null):{colliders:((_=f.colliders)!=null?_:[]).map((y,M)=>{var T,C,R;const w=new b(0,0,0);return y.offset&&w.set((T=y.offset.x)!=null?T:0,(C=y.offset.y)!=null?C:0,y.offset.z?-y.offset.z:0),this._importSphereCollider(p,{offset:w,radius:(R=y.radius)!=null?R:0,inside:!1})})}});return c==null||c.forEach((f,g)=>{const _=f.bones;_&&_.forEach(p=>{var m,y,M,T;const C=d[p];if(C==null){console.warn(`VRMSpringBoneLoaderPlugin: The spring bone group #${g} attempted to reference a node #${p} but not found. Skipping the node`);return}const R=new b;f.gravityDir?R.set((m=f.gravityDir.x)!=null?m:0,(y=f.gravityDir.y)!=null?y:0,(M=f.gravityDir.z)!=null?M:0):R.set(0,-1,0);const w=f.center!=null?d[f.center]:void 0,I={hitRadius:f.hitRadius,dragForce:f.dragForce,gravityPower:f.gravityPower,stiffness:f.stiffiness,gravityDir:R},W=(T=f.colliderGroups)==null?void 0:T.map(v=>{const S=h==null?void 0:h[v];return S??(console.warn(`VRMSpringBoneLoaderPlugin: The spring #${g} attempted to reference a collider group #${v} but not found. Skipping the collider group`),null)}).filter(v=>v!=null);C.traverse(v=>{var S;const B=(S=v.children[0])!=null?S:null,O=this._importJoint(v,B,I,W);w&&(O.center=w),u.addJoint(O)})})}),e.scene.updateMatrixWorld(),u.setInitState(),u})}_importJoint(e,t,i,r){const s=new hE(e,t,i,r);if(this.jointHelperRoot){const o=new $S(s);this.jointHelperRoot.add(o),o.renderOrder=this.jointHelperRoot.renderOrder}return s}_importSphereCollider(e,t){const i=new op(t),r=new Rl(i);if(e.add(r),this.colliderHelperRoot){const s=new wl(r);this.colliderHelperRoot.add(s),s.renderOrder=this.colliderHelperRoot.renderOrder}return r}_importCapsuleCollider(e,t){const i=new rp(t),r=new Rl(i);if(e.add(r),this.colliderHelperRoot){const s=new wl(r);this.colliderHelperRoot.add(s),s.renderOrder=this.colliderHelperRoot.renderOrder}return r}_importPlaneCollider(e,t){const i=new sp(t),r=new Rl(i);if(e.add(r),this.colliderHelperRoot){const s=new wl(r);this.colliderHelperRoot.add(s),s.renderOrder=this.colliderHelperRoot.renderOrder}return r}_importLimitCone(e,t){const i=new ap(t);if(this.limitHelperRoot){const r=new bl(i,e);this.limitHelperRoot.add(r),r.renderOrder=this.limitHelperRoot.renderOrder}return i}_importLimitHinge(e,t){const i=new lp(t);if(this.limitHelperRoot){const r=new bl(i,e);this.limitHelperRoot.add(r),r.renderOrder=this.limitHelperRoot.renderOrder}return i}_importLimitSpherical(e,t){const i=new cp(t);if(this.limitHelperRoot){const r=new bl(i,e);this.limitHelperRoot.add(r),r.renderOrder=this.limitHelperRoot.renderOrder}return i}_tryImportLimitFromSchema(e,t){var i,r,s,o;if(!this.useLimits)return;const a=(i=t.extensions)==null?void 0:i[Pl];if(a!=null){const l=a.specVersion;if(!_E.has(l))console.warn(`VRMSpringBoneLoaderPlugin: Unknown ${Pl} specVersion "${l}". Ignoring the limit`);else{l==="1.0-draft"&&console.warn(`VRMSpringBoneLoaderPlugin: Using a draft spec version of ${Pl}: 1.0-draft. Some behaviors may be different. Consider updating the model file.`);const c=a.limit;if(c.cone)return this._importLimitCone(e,{angle:c.cone.angle,rotation:new Ee().fromArray((r=c.cone.rotation)!=null?r:[0,0,0,1])});if(c.hinge)return this._importLimitHinge(e,{angle:c.hinge.angle,rotation:new Ee().fromArray((s=c.hinge.rotation)!=null?s:[0,0,0,1])});if(c.spherical)return this._importLimitSpherical(e,{pitch:c.spherical.pitch,yaw:c.spherical.yaw,rotation:new Ee().fromArray((o=c.spherical.rotation)!=null?o:[0,0,0,1])});console.warn("VRMSpringBoneLoaderPlugin: Unknown limit type. Ignoring the limit");return}}}};up.EXTENSION_NAME="VRMC_springBone";var vE=up,xE=class{get name(){return"VRMLoaderPlugin"}constructor(n,e){var t,i,r,s,o,a,l,c,u,d;this.parser=n;const h=e==null?void 0:e.helperRoot,f=e==null?void 0:e.autoUpdateHumanBones;this.expressionPlugin=(t=e==null?void 0:e.expressionPlugin)!=null?t:new Ty(n),this.firstPersonPlugin=(i=e==null?void 0:e.firstPersonPlugin)!=null?i:new Ay(n),this.humanoidPlugin=(r=e==null?void 0:e.humanoidPlugin)!=null?r:new Ny(n,{helperRoot:h,autoUpdateHumanBones:f}),this.lookAtPlugin=(s=e==null?void 0:e.lookAtPlugin)!=null?s:new jy(n,{helperRoot:h}),this.metaPlugin=(o=e==null?void 0:e.metaPlugin)!=null?o:new Zy(n),this.mtoonMaterialPlugin=(a=e==null?void 0:e.mtoonMaterialPlugin)!=null?a:new hS(n),this.materialsHDREmissiveMultiplierPlugin=(l=e==null?void 0:e.materialsHDREmissiveMultiplierPlugin)!=null?l:new pS(n),this.materialsV0CompatPlugin=(c=e==null?void 0:e.materialsV0CompatPlugin)!=null?c:new yS(n),this.springBonePlugin=(u=e==null?void 0:e.springBonePlugin)!=null?u:new vE(n,{colliderHelperRoot:h,jointHelperRoot:h}),this.nodeConstraintPlugin=(d=e==null?void 0:e.nodeConstraintPlugin)!=null?d:new zS(n,{helperRoot:h})}beforeRoot(){return xo(this,null,function*(){yield this.materialsV0CompatPlugin.beforeRoot(),yield this.mtoonMaterialPlugin.beforeRoot()})}loadMesh(n){return xo(this,null,function*(){return yield this.mtoonMaterialPlugin.loadMesh(n)})}getMaterialType(n){const e=this.mtoonMaterialPlugin.getMaterialType(n);return e??null}extendMaterialParams(n,e){return xo(this,null,function*(){yield this.materialsHDREmissiveMultiplierPlugin.extendMaterialParams(n,e),yield this.mtoonMaterialPlugin.extendMaterialParams(n,e)})}afterRoot(n){return xo(this,null,function*(){yield this.metaPlugin.afterRoot(n),yield this.humanoidPlugin.afterRoot(n),yield this.expressionPlugin.afterRoot(n),yield this.lookAtPlugin.afterRoot(n),yield this.firstPersonPlugin.afterRoot(n),yield this.springBonePlugin.afterRoot(n),yield this.nodeConstraintPlugin.afterRoot(n),yield this.mtoonMaterialPlugin.afterRoot(n);const e=n.userData.vrmMeta,t=n.userData.vrmHumanoid;if(e&&t){const i=new Qy({scene:n.scene,expressionManager:n.userData.vrmExpressionManager,firstPerson:n.userData.vrmFirstPerson,humanoid:t,lookAt:n.userData.vrmLookAt,meta:e,materials:n.userData.vrmMToonMaterials,springBoneManager:n.userData.vrmSpringBoneManager,nodeConstraintManager:n.userData.vrmNodeConstraintManager});n.userData.vrm=i}})}};function ME(n){const e=new Set;return n.traverse(t=>{if(!t.isMesh)return;const i=t;e.add(i)}),e}function Ch(n,e,t){if(e.size===1){const o=e.values().next().value;if(o.weight===1)return n[o.index]}const i=new Float32Array(n[0].count*3);let r=0;if(t)r=1;else for(const o of e)r+=o.weight;for(const o of e){const a=n[o.index],l=o.weight/r;for(let c=0;c<a.count;c++)i[c*3+0]+=a.getX(c)*l,i[c*3+1]+=a.getY(c)*l,i[c*3+2]+=a.getZ(c)*l}return new ke(i,3)}function yE(n){var e;const t=ME(n.scene),i=new Map,r=(e=n.expressionManager)==null?void 0:e.expressionMap;if(r!=null)for(const[s,o]of Object.entries(r)){const a=new Set;for(const l of o.binds)if(l instanceof ta){if(l.weight!==0)for(const c of l.primitives){let u=i.get(c);u==null&&(u=new Map,i.set(c,u));let d=u.get(s);d==null&&(d=new Set,u.set(s,d)),d.add(l)}a.add(l)}for(const l of a)o.deleteBind(l)}for(const s of t){const o=i.get(s);if(o==null)continue;const a=s.geometry.morphAttributes;s.geometry.morphAttributes={};const l=s.geometry.clone();s.geometry=l;const c=l.morphTargetsRelative,u=a.position!=null,d=a.normal!=null,h={},f={},g=[];if(u||d){u&&(h.position=[]),d&&(h.normal=[]);let _=0;for(const[p,m]of o)u&&(h.position[_]=Ch(a.position,m,c)),d&&(h.normal[_]=Ch(a.normal,m,c)),r==null||r[p].addBind(new ta({index:_,weight:1,primitives:[s]})),f[p]=_,g.push(0),_++}l.morphAttributes=h,s.morphTargetDictionary=f,s.morphTargetInfluences=g}}function ia(n,e,t){if(n.getComponent)return n.getComponent(e,t);{let i=n.array[e*n.itemSize+t];return n.normalized&&(i=tt.denormalize(i,n.array)),i}}function dp(n,e,t,i){n.setComponent?n.setComponent(e,t,i):(n.normalized&&(i=tt.normalize(i,n.array)),n.array[e*n.itemSize+t]=i)}function SE(n){var e;const t=EE(n),i=new Set;for(const d of t)i.has(d.geometry)&&(d.geometry=CE(d.geometry)),i.add(d.geometry);const r=new Map;for(const d of i){const h=d.getAttribute("skinIndex"),f=(e=r.get(h))!=null?e:new Map;r.set(h,f);const g=d.getAttribute("skinWeight"),_=TE(h,g);f.set(g,_)}const s=new Map;for(const d of t){const h=wE(d,r);s.set(d,h)}const o=[];for(const[d,h]of s){let f=!1;for(const g of o)if(AE(h,g.boneInverseMap)){f=!0,g.meshes.add(d);for(const[p,m]of h)g.boneInverseMap.set(p,m);break}f||o.push({boneInverseMap:h,meshes:new Set([d])})}const a=new Map,l=new Ll,c=new Ll,u=new Ll;for(const d of o){const{boneInverseMap:h,meshes:f}=d,g=Array.from(h.keys()),_=Array.from(h.values()),p=new Vr(g,_),m=c.getOrCreate(p);for(const y of f){const M=y.geometry.getAttribute("skinIndex"),T=l.getOrCreate(M),C=y.skeleton.bones,R=C.map(W=>u.getOrCreate(W)).join(","),w=`${T};${m};${R}`;let I=a.get(w);I==null&&(I=M.clone(),bE(I,C,g),a.set(w,I)),y.geometry.setAttribute("skinIndex",I)}for(const y of f)y.bind(p,new Te)}}function EE(n){const e=new Set;return n.traverse(t=>{if(!t.isSkinnedMesh)return;const i=t;e.add(i)}),e}function TE(n,e){const t=new Set;for(let i=0;i<n.count;i++)for(let r=0;r<n.itemSize;r++){const s=ia(n,i,r);ia(e,i,r)!==0&&t.add(s)}return t}function wE(n,e){const t=new Map,i=n.skeleton,r=n.geometry,s=r.getAttribute("skinIndex"),o=r.getAttribute("skinWeight"),a=e.get(s),l=a==null?void 0:a.get(o);if(!l)throw new Error("Unreachable. attributeUsedIndexSetMap does not know the skin index attribute or the skin weight attribute.");for(const c of l)t.set(i.bones[c],i.boneInverses[c]);return t}function AE(n,e){for(const[t,i]of n.entries()){const r=e.get(t);if(r!=null&&!RE(i,r))return!1}return!0}function bE(n,e,t){const i=new Map;for(const s of e)i.set(s,i.size);const r=new Map;for(const[s,o]of t.entries()){const a=i.get(o);r.set(a,s)}for(let s=0;s<n.count;s++)for(let o=0;o<n.itemSize;o++){const a=ia(n,s,o),l=r.get(a);dp(n,s,o,l)}n.needsUpdate=!0}function RE(n,e,t){if(t=t||1e-4,n.elements.length!=e.elements.length)return!1;for(let i=0,r=n.elements.length;i<r;i++)if(Math.abs(n.elements[i]-e.elements[i])>t)return!1;return!0}var Ll=class{constructor(){this._objectIndexMap=new Map,this._index=0}get(n){return this._objectIndexMap.get(n)}getOrCreate(n){let e=this._objectIndexMap.get(n);return e==null&&(e=this._index,this._objectIndexMap.set(n,e),this._index++),e}};function CE(n){var e,t,i,r;const s=new pt;s.name=n.name,s.setIndex(n.index);for(const[o,a]of Object.entries(n.attributes))s.setAttribute(o,a);for(const[o,a]of Object.entries(n.morphAttributes)){const l=o;s.morphAttributes[l]=a.concat()}s.morphTargetsRelative=n.morphTargetsRelative,s.groups=[];for(const o of n.groups)s.addGroup(o.start,o.count,o.materialIndex);return s.boundingSphere=(t=(e=n.boundingSphere)==null?void 0:e.clone())!=null?t:null,s.boundingBox=(r=(i=n.boundingBox)==null?void 0:i.clone())!=null?r:null,s.drawRange.start=n.drawRange.start,s.drawRange.count=n.drawRange.count,s.userData=n.userData,s}function Ih(n){if(Object.values(n).forEach(e=>{e!=null&&e.isTexture&&e.dispose()}),n.isShaderMaterial){const e=n.uniforms;e&&Object.values(e).forEach(t=>{const i=t.value;i!=null&&i.isTexture&&i.dispose()})}n.dispose()}function IE(n){const e=n.geometry;e&&e.dispose();const t=n.skeleton;t&&t.dispose();const i=n.material;i&&(Array.isArray(i)?i.forEach(r=>Ih(r)):i&&Ih(i))}function PE(n){n.traverse(IE)}function LE(n,e){var t,i;console.warn("VRMUtils.removeUnnecessaryJoints: removeUnnecessaryJoints is deprecated. Use combineSkeletons instead. combineSkeletons contributes more to the performance improvement. This function will be removed in the next major version.");const r=(t=e==null?void 0:e.experimentalSameBoneCounts)!=null?t:!1,s=[];n.traverse(l=>{l.type==="SkinnedMesh"&&s.push(l)});const o=new Map;let a=0;for(const l of s){const u=l.geometry.getAttribute("skinIndex");if(o.has(u))continue;const d=new Map,h=new Map;for(let f=0;f<u.count;f++)for(let g=0;g<u.itemSize;g++){const _=ia(u,f,g);let p=d.get(_);p==null&&(p=d.size,d.set(_,p),h.set(p,_)),dp(u,f,g,p)}u.needsUpdate=!0,o.set(u,h),a=Math.max(a,d.size)}for(const l of s){const u=l.geometry.getAttribute("skinIndex"),d=o.get(u),h=[],f=[],g=r?a:d.size;for(let p=0;p<g;p++){const m=(i=d.get(p))!=null?i:0;h.push(l.skeleton.bones[m]),f.push(l.skeleton.boneInverses[m])}const _=new Vr(h,f);l.bind(_,new Te)}}function NE(n,e){const t=n.position.count,i=new Array(t);let r=0;const s=e.array;for(let o=0;o<s.length;o++){const a=s[o];i[a]||(i[a]=!0,r++)}return{isVertexUsed:i,vertexCount:t,verticesUsed:r}}function UE(n){const e=[],t=[];let i=0;for(let r=0;r<n.length;r++)if(n[r]){const s=i++;e[r]=s,t[s]=r}return{originalIndexNewIndexMap:e,newIndexOriginalIndexMap:t}}function DE(n,e){var t,i,r,s;e.name=n.name,e.morphTargetsRelative=n.morphTargetsRelative,n.groups.forEach(o=>{e.addGroup(o.start,o.count,o.materialIndex)}),e.boundingBox=(i=(t=n.boundingBox)==null?void 0:t.clone())!=null?i:null,e.boundingSphere=(s=(r=n.boundingSphere)==null?void 0:r.clone())!=null?s:null,e.setDrawRange(n.drawRange.start,n.drawRange.count),e.userData=n.userData}function OE(n,e,t){const i=e.array,r=new i.constructor(i.length);for(let s=0;s<i.length;s++){const o=i[s];r[s]=t[o]}n.setIndex(new ke(r,e.itemSize,e.normalized))}function ra(n,e,t){const i=n.constructor,r=new i(e.length*t);let s=!0;for(let o=0;o<e.length;o++){const l=e[o]*t,c=o*t;for(let u=0;u<t;u++){const d=n[l+u];r[c+u]=d,s=s&&d===0}}return[r,s]}function FE(n){var e;const t=new Map,i=[];for(const[r,s]of Object.entries(n))if(s.isInterleavedBufferAttribute){const o=s,a=o.data,l=(e=t.get(a))!=null?e:[];t.set(a,l),l.push([r,o])}else{const o=s;i.push([r,o])}return[t,i]}function BE(n,e,t){const[i,r]=FE(e);for(const[s,o]of i){const a=s.array,{stride:l}=s,[c]=ra(a,t,l),u=new nu(c,l);u.setUsage(s.usage);for(const[d,h]of o){const{itemSize:f,offset:g,normalized:_}=h,p=new Ds(u,f,g,_);n.setAttribute(d,p)}}for(const[s,o]of r){const a=o.array,{itemSize:l,normalized:c}=o,[u]=ra(a,t,l);n.setAttribute(s,new ke(u,l,c))}}function kE(n){var e;const t=new Map,i=[];for(const[r,s]of Object.entries(n)){const o=r;for(let a=0;a<s.length;a++){const l=s[a];if(l.isInterleavedBufferAttribute){const c=l,u=c.data,d=(e=t.get(u))!=null?e:[];t.set(u,d),d.push([o,a,c])}else{const c=l;i.push([o,a,c])}}}return[t,i]}function VE(n,e,t){var i,r;let s=!0;const[o,a]=kE(e),l={};for(const[c,u]of o){const d=c.array,{stride:h}=c,[f,g]=ra(d,t,h);s=s&&g;const _=new nu(f,h);_.setUsage(c.usage);for(const[p,m,y]of u){const{itemSize:M,offset:T,normalized:C}=y,R=new Ds(_,M,T,C);(i=l[p])!=null||(l[p]=[]),l[p][m]=R}}for(const[c,u,d]of a){const h=d,f=h.array,{itemSize:g,normalized:_}=h,[p,m]=ra(f,t,g);s=s&&m,(r=l[c])!=null||(l[c]=[]),l[c][u]=new ke(p,g,_)}n.morphAttributes=s?{}:l}function HE(n){const e=new Map;n.traverse(t=>{if(!t.isMesh)return;const i=t,r=i.geometry,s=r.index;if(s==null)return;const o=e.get(r);if(o!=null){i.geometry=o;return}const{isVertexUsed:a,vertexCount:l,verticesUsed:c}=NE(r.attributes,s);if(c===l)return;const{originalIndexNewIndexMap:u,newIndexOriginalIndexMap:d}=UE(a),h=new pt;DE(r,h),e.set(r,h),OE(h,s,u),BE(h,r.attributes,d),VE(h,r.morphAttributes,d),i.geometry=h}),Array.from(e.keys()).forEach(t=>{t.dispose()})}function zE(n){var e;((e=n.meta)==null?void 0:e.metaVersion)==="0"&&(n.scene.rotation.y=Math.PI)}var Vi=class{constructor(){}};Vi.combineMorphs=yE;Vi.combineSkeletons=SE;Vi.deepDispose=PE;Vi.removeUnnecessaryJoints=LE;Vi.removeUnnecessaryVertices=HE;Vi.rotateVRM0=zE;/*!
 * @pixiv/three-vrm-core v3.6.0
 * The implementation of core features of VRM, for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2026 pixiv Inc.
 * @pixiv/three-vrm-core is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 *//*!
 * @pixiv/three-vrm-materials-mtoon v3.6.0
 * MToon (toon material) module for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2026 pixiv Inc.
 * @pixiv/three-vrm-materials-mtoon is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 *//*!
 * @pixiv/three-vrm-materials-hdr-emissive-multiplier v3.6.0
 * Support VRMC_hdr_emissiveMultiplier for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2026 pixiv Inc.
 * @pixiv/three-vrm-materials-hdr-emissive-multiplier is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 *//*!
 * @pixiv/three-vrm-materials-v0compat v3.6.0
 * VRM0.0 materials compatibility layer plugin for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2026 pixiv Inc.
 * @pixiv/three-vrm-materials-v0compat is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 *//*!
 * @pixiv/three-vrm-node-constraint v3.6.0
 * Node constraint module for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2026 pixiv Inc.
 * @pixiv/three-vrm-node-constraint is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 *//*!
 * @pixiv/three-vrm-springbone v3.6.0
 * Spring bone module for @pixiv/three-vrm
 *
 * Copyright (c) 2019-2026 pixiv Inc.
 * @pixiv/three-vrm-springbone is distributed under MIT License
 * https://github.com/pixiv/three-vrm/blob/release/LICENSE
 */class GE extends bf{constructor(){super();const e=new Br;e.deleteAttribute("uv");const t=new Rs({side:Dt}),i=new Rs,r=new Ff(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new lt(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const o=new lt(e,i);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new lt(e,i);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new lt(e,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new lt(e,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const u=new lt(e,i);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const d=new lt(e,i);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);const h=new lt(e,lr(50));h.position.set(-16.116,14.37,8.208),h.scale.set(.1,2.428,2.739),this.add(h);const f=new lt(e,lr(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const g=new lt(e,lr(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new lt(e,lr(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const p=new lt(e,lr(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);const m=new lt(e,lr(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function lr(n){const e=new En;return e.color.setScalar(n),e}function sa(n,e,t,i=.08,r=.14){const s=e>n?i:r;return n+(e-n)*(1-Math.exp(-Math.max(0,t)/s))}const hr=Object.freeze({silenceThreshold:.018,silenceHangoverSeconds:.32,attackSeconds:.055,releaseSeconds:.095,jawScale:.82});function us(n,e,t=0,i=1){const r=Number(n);return Number.isFinite(r)?Math.max(t,Math.min(i,r)):e}function WE(n={}){const e=n&&typeof n=="object"&&!Array.isArray(n)?n:{};return{silenceThreshold:us(e.silenceThreshold,hr.silenceThreshold,.001,.25),silenceHangoverSeconds:us(e.silenceHangoverSeconds,hr.silenceHangoverSeconds,0,2),attackSeconds:us(e.attackSeconds,hr.attackSeconds,.01,1),releaseSeconds:us(e.releaseSeconds,hr.releaseSeconds,.01,1.5),jawScale:us(e.jawScale,hr.jawScale,0,1)}}document.addEventListener("keydown",n=>{const e=!!(window.sarraAPI&&typeof window.sarraAPI.onToggleConfig=="function"),t=document.getElementById("config-panel"),i=!!(t&&(t.classList.contains("is-open")||getComputedStyle(t).display!=="none"));if(n.ctrlKey&&n.shiftKey&&n.key.toLowerCase()==="k"){e||(n.preventDefault(),Oi());return}i&&(n.key==="Escape"?(n.preventDefault(),Oi(!1)):(n.ctrlKey||n.metaKey)&&n.key.toLowerCase()==="s"&&(n.preventDefault(),Vp()))});const hp=()=>localStorage.getItem("demoMode")==="true";function uu(n){return"demo_cache_"+n.toLowerCase().trim().replace(/[^\w\s]/g,"")}function XE(n,e){hp()&&localStorage.setItem(uu(n),e)}function qE(n){return hp()?localStorage.getItem(uu(n)):null}const YE="http://127.0.0.1:3000/api/screenshot",jE="http://127.0.0.1:3000/api/action",KE="http://127.0.0.1:3000/api/tts",oa=()=>localStorage.getItem("screenVision")!=="false",$E=/(écran|ecran|\bvois\b|\bregarde\b|c'est quoi (ça|ca)|\bsouris\b|fenêtre|fenetre|\bpage\b|\bonglet\b)/i,ZE=9e4;let li=null,ds=null;async function Ph(n,e){return new Promise(t=>{const i=new Image;i.onload=()=>{const s=Math.min(1,1280/i.width),o=document.createElement("canvas");o.width=Math.max(1,Math.round(i.width*s)),o.height=Math.max(1,Math.round(i.height*s)),o.getContext("2d").drawImage(i,0,0,o.width,o.height);const a=o.toDataURL("image/jpeg",.7);t({mimeType:"image/jpeg",data:a.split(",")[1]})},i.onerror=()=>t(null),i.src=`data:${e||"image/jpeg"};base64,${n}`})}const JE=n=>new Promise(e=>setTimeout(e,n));function Lh(n){if(li&&Date.now()-li.at<=ZE){const e=Math.round((Date.now()-li.at)/1e3);return console.warn(`♻️ Vision: capture indisponible (${n}), dernière frame réutilisée (${e} s).`),li.part}return null}async function QE(){var r;if(typeof((r=window.sarraAPI)==null?void 0:r.captureScreen)=="function")try{const s=await window.sarraAPI.captureScreen();if(typeof s=="string"&&s.startsWith("data:")){const[o,a]=s.split(","),l=o.match(/^data:([^;]+);base64$/);if(a){const c=await Ph(a,(l==null?void 0:l[1])||"image/jpeg");if(c)return c}}}catch(s){console.warn("⚠️ Capture Electron IPC indisponible, repli backend:",s==null?void 0:s.message)}const n=await fetch(YE,{method:"POST",headers:{"Content-Type":"application/json","X-Sarra-Client":"sarra-desktop"},signal:AbortSignal.timeout(3e3)});if(!n.ok){const s=new Error(`Capture HTTP ${n.status}`);throw s.status=n.status,s}const{data:e,mimeType:t}=await n.json();if(!e)throw new Error("Capture vide");const i=await Ph(e,t);if(!i)throw new Error("Compression impossible");return i}async function fp(){if(li&&Date.now()-li.at<2500)return li.part;if(ds)return ds;ds=(async()=>{for(let n=0;n<2;n+=1)try{const e=await QE();return li={part:e,at:Date.now()},e}catch(e){const t=e.status===429||(e.status||0)>=500||e.name==="AbortError";if(n===0&&t){await JE(400);continue}return Lh(e.status||e.name||e.message)}return Lh("inconnu")})();try{return await ds}finally{ds=null}}let Nl=!1;async function eT(){var s;if(Nl)return;const n=document.getElementById("precache-status"),e=document.getElementById("btn-precache-demo"),t=Cs();if(!t){n&&(n.textContent="❌ Clé API Gemini manquante (onglet IA).");return}const i=["bonjour","bonjour ça va","qui es-tu","que peux-tu faire","quelle heure est-il","raconte-moi une blague","merci","au revoir","comment vas-tu","parle-moi de toi"];Nl=!0,e&&(e.disabled=!0),n&&(n.textContent=`⏳ Pré-génération : 0/${i.length}`);let r=0;try{const o=fu();for(const a of i){try{const l=((s=await Ep(o,t,a,AbortSignal.timeout(8e3)))==null?void 0:s.text)||"";l&&(localStorage.setItem(uu(a),l),r++,n&&(n.textContent=`⏳ Pré-génération : ${r}/${i.length}`))}catch(l){console.warn("Skip:",a,l.message)}await new Promise(l=>setTimeout(l,4e3))}n&&(n.textContent=`✅ ${r}/${i.length} réponses en cache`)}finally{Nl=!1,e&&(e.disabled=!1)}}function tT(){var n,e;(n=document.getElementById("btn-precache-demo"))==null||n.addEventListener("click",eT),(e=document.getElementById("cfg-demo-mode"))==null||e.addEventListener("change",t=>{localStorage.setItem("demoMode",String(t.target.checked))})}console.log("🧠 Initialisation de Sarra-Final connectée...");try{if(!document.createElement("canvas").getContext("webgl"))throw console.error("❌ WebGL non supporté par ce navigateur"),document.body.innerHTML="<h1>Erreur: WebGL non supporté</h1><p>Votre navigateur ne supporte pas WebGL. Essayez avec un navigateur moderne comme Chrome, Firefox ou Edge.</h1>",new Error("WebGL non supporté");console.log("✅ WebGL supporté")}catch(n){console.error("❌ Erreur WebGL:",n)}const wn=new bf,Ht=document.getElementById("scene"),pp=(Ht==null?void 0:Ht.clientWidth)||window.innerWidth,mp=(Ht==null?void 0:Ht.clientHeight)||window.innerHeight,nT=pp/mp,wt=new kt(30,nT,.1,20);wt.position.set(0,1.4,3);const ct=new rM({alpha:!0,antialias:!0});ct.setClearColor(0,0);je.enabled=!0;ct.outputColorSpace=Nt;ct.toneMapping=Kh;ct.toneMappingExposure=1;ct.shadowMap.enabled=!0;ct.shadowMap.type=Yh;ct.setSize(pp,mp);ct.setPixelRatio(window.devicePixelRatio);Ht?Ht.appendChild(ct.domElement):document.body.appendChild(ct.domElement);const iT=new TM(16777215,9276813,.6);wn.add(iT);const Fs=new Bf(16773341,2.5);Fs.position.set(2,3,4);Fs.castShadow=!0;Fs.shadow.mapSize.set(1024,1024);Fs.shadow.bias=-.001;wn.add(Fs);const du=new Of(11193599,3);du.position.set(-3,2,-3);du.lookAt(0,1,0);wn.add(du);try{const n=new Sc(ct),e=new GE;wn.environment=n.fromScene(e,.04).texture,wn.background=null,e.dispose(),console.log("✨ Environment map (RoomEnvironment + PMREM) générée")}catch(n){console.warn("⚠️ Environment map indisponible:",n)}let Je=null;const gp=new VM;gp.register(n=>new xE(n));const Nr=new nt;Nr.position.copy(wt.position);wn.add(Nr);const Xr=new nt;Xr.position.copy(wt.position);wn.add(Xr);const fr=new b;let Ul=0,To=0;const Nh=250;let Uc=null;const _r=new b(0,1.4,0);let Ta=.5;const yn=Object.freeze({yaw:.9,pitch:.55,pan:.25,zoomMin:.22,zoomMax:8}),vt={yaw:0,pitch:0,panX:0,panY:0,zoom:1},Lt={yaw:0,pitch:0,panX:0,panY:0,zoom:1},ht=(n,e,t)=>Math.min(t,Math.max(e,n));let Bn=!0,Ui=0,Bo=0,pr=0;const rT=150;let aa=null,Dc=null;const Dl=new Map;let cr=0,_s=0,ko=0,Vo=0,hs=0;function Oc(n){var f,g,_,p;const e=tt.degToRad(wt.fov),t=new URLSearchParams(window.location.search).get("framing")==="full";n.scene.updateWorldMatrix(!0,!0);const i=new _n().setFromObject(n.scene),r=i.getSize(new b),s=i.getCenter(new b),o=new _n;let a=!1;n.scene.traverse(m=>{if(!m.isMesh)return;const y=m.name||"";/head|face|hair|brow|lash/i.test(y)&&(/teeth|jaw|tongue|gum/i.test(y)||(m.updateWorldMatrix(!0,!1),o.expandByObject(m),a=!0))});const l=((g=(f=n.humanoid)==null?void 0:f.getRawBoneNode)==null?void 0:g.call(f,"head"))??((p=(_=n.humanoid)==null?void 0:_.getNormalizedBoneNode)==null?void 0:p.call(_,"head")),c=new b;l&&l.getWorldPosition(c);let u=new b,d,h;if(!t&&a&&o.getSize(new b).y>r.y*.02){const m=o.getSize(new b),y=o.getCenter(new b);u.set(y.x,y.y,y.z),d=m.y/(1.75*Math.tan(e/2)),h="gros plan tête"}else if(!t&&l){const m=r.y*.14;u.set(c.x,c.y+m*.4,c.z),d=m/(1.75*Math.tan(e/2)),h="gros plan tête (os)"}else u.set(s.x,s.y+r.y*.04,s.z),d=r.y*.62/Math.tan(e/2),h="corps entier";_r.copy(u),Ta=d,wt.position.set(u.x,u.y,u.z+d),wt.lookAt(u),wt.updateProjectionMatrix(),Nr.position.copy(wt.position),Xr.position.copy(wt.position),console.log("📐 Avatar cadré:",{plan:h,taille:r.toArray().map(m=>+m.toFixed(3)),tete:a?o.getCenter(new b).toArray().map(m=>+m.toFixed(3)):null,distance:+d.toFixed(3)})}function sT(){Uc&&Uc.rotation.set(Lt.pitch+_s,Lt.yaw,0);const n=ht(Ta*Lt.zoom,yn.zoomMin,yn.zoomMax);wt.position.set(_r.x+Lt.panX,_r.y+Lt.panY,_r.z+n),Nr.position.copy(wt.position),wt.lookAt(_r)}function Fc(){vt.yaw=0,vt.pitch=0,vt.panX=0,vt.panY=0,vt.zoom=1}let jt=null;ct.domElement.style.cursor="grab";ct.domElement.style.touchAction="none";ct.domElement.addEventListener("pointerdown",n=>{jt={id:n.pointerId,x:n.clientX,y:n.clientY,pan:n.shiftKey||n.button===2};try{ct.domElement.setPointerCapture(n.pointerId)}catch{}ct.domElement.style.cursor="grabbing"});ct.domElement.addEventListener("pointermove",n=>{if(!jt||n.pointerId!==jt.id)return;const e=n.clientX-jt.x,t=n.clientY-jt.y;if(jt.x=n.clientX,jt.y=n.clientY,jt.pan){const i=Ta*.0016;vt.panX=ht(vt.panX-e*i,-yn.pan,yn.pan),vt.panY=ht(vt.panY+t*i,-yn.pan,yn.pan)}else vt.yaw=ht(vt.yaw+e*.006,-yn.yaw,yn.yaw),vt.pitch=ht(vt.pitch+t*.005,-yn.pitch,yn.pitch)});const _p=n=>{var e,t;!jt||n&&n.pointerId!==jt.id||((t=(e=ct.domElement).hasPointerCapture)!=null&&t.call(e,jt.id)&&ct.domElement.releasePointerCapture(jt.id),jt=null,ct.domElement.style.cursor="grab")};ct.domElement.addEventListener("pointerup",_p);ct.domElement.addEventListener("pointercancel",_p);ct.domElement.addEventListener("contextmenu",n=>n.preventDefault());ct.domElement.addEventListener("wheel",n=>{n.preventDefault(),vt.zoom=ht(vt.zoom*(1+Math.sign(n.deltaY)*.08),.4,2.4)},{passive:!1});ct.domElement.addEventListener("dblclick",()=>{Fc(),console.log("🎯 Cadrage tête recentré.")});function oT(n){const e=n.humanoid;if(!e)return;const t=(i,r)=>{const s=e.getNormalizedBoneNode(i);s&&(Dl.has(i)||Dl.set(i,s.rotation.z),s.rotation.z=Dl.get(i)+r)};t("leftUpperArm",-1.25),t("rightUpperArm",1.25)}function Uh(){return ht(Number.parseFloat(localStorage.getItem("emoBlinkRate")||"4")||4,1,10)*(500+Math.random()*1e3)}function hu(){if(!Je)return;aT(),Bo=performance.now()+Uh();const n=e=>{if(!Je){Ui=requestAnimationFrame(n);return}if(Ho){Ui=requestAnimationFrame(n);return}if(pr===0&&e>=Bo&&(pr=e),pr>0){const i=(e-pr)/rT;if(i>=1)Tn("blink",0),pr=0,Bo=e+Uh();else{const r=Number.parseFloat(localStorage.getItem("emoBlink")??"0.8"),s=ht(Number.isFinite(r)?r:.8,0,1);Tn("blink",Math.sin(i*Math.PI)*s)}}Ui=requestAnimationFrame(n)};Ui=requestAnimationFrame(n)}function aT(){Ui&&cancelAnimationFrame(Ui),Ui=0,pr=0,Bo=0,Tn("blink",0)}function lT(n){!Je||!n.lookAt||(n.lookAt.target=Xr,n.lookAt.autoUpdate=!0,vp())}function vp(){Ul&&clearTimeout(Ul),Ul=setTimeout(()=>{if(!Je)return;const e=ht(Number.parseFloat(localStorage.getItem("emoGaze")??"0.03")||0,0,.1)*2.66;To=performance.now();const t=fr.clone(),i=new b((Math.random()-.5)*e,(Math.random()-.5)*e,(Math.random()-.5)*e),r=s=>{const o=s-To,a=Math.min(1,o/Nh),l=1-Math.pow(1-a,3);if(fr.lerpVectors(t,i,l),a<1)requestAnimationFrame(r);else{To=performance.now();const c=fr.clone(),u=d=>{const h=d-To,f=Math.min(1,h/Nh),g=1-Math.pow(1-f,3);fr.lerpVectors(c,new b(0,0,0),g),f<1?requestAnimationFrame(u):(fr.set(0,0,0),vp())};requestAnimationFrame(u)}};requestAnimationFrame(r)},3e3+Math.random()*2e3)}function cT(n){var t,i;if(!Bn)return;const e=(i=(t=Je==null?void 0:Je.humanoid)==null?void 0:t.getNormalizedBoneNode)==null?void 0:i.call(t,"hips");if(e&&aa&&Dc){const r=Number.parseFloat(localStorage.getItem("emoBreath")||"0.02"),s=Math.sin(n*.2)*r,o=Math.sin(n*1.5)*r*.3;e.position.y=tt.lerp(e.position.y,aa.y+s,.1),e.rotation.x=tt.lerp(e.rotation.x,Dc.x+o,.1)}}function uT(){if(hs)return;const n=()=>{if(!Je){hs=0;return}const e=.06;if(cr+=(ko-cr)*e,_s+=(Vo-_s)*e,Tn("squint",cr),Math.abs(ko-cr)<.001&&Math.abs(Vo-_s)<.001){cr=ko,_s=Vo,Tn("squint",cr),hs=0;return}hs=requestAnimationFrame(n)};hs=requestAnimationFrame(n)}const Bc=new URLSearchParams(window.location.search).get("avatar")||"./sarra7.vrm";console.log("📦 Modèle demandé:",Bc);gp.load(Bc,n=>{var e,t,i,r,s;try{const o=n.userData.vrm;Vi.rotateVRM0(o),wn.add(o.scene),Je=o,o.scene.traverse(l=>{if(!l.isMesh)return;l.castShadow=!0,l.receiveShadow=!0,(Array.isArray(l.material)?l.material:[l.material]).forEach(u=>{u&&u.roughness!==void 0&&(u.roughness=Math.max(u.roughness,.4))})});const a=(t=(e=o.humanoid)==null?void 0:e.getNormalizedBoneNode)==null?void 0:t.call(e,"hips");a&&(aa=a.position.clone(),Dc=a.rotation.clone(),console.log("🧍 Pose de repos bassin:",aa.toArray().map(l=>+l.toFixed(4)))),o.expressionManager&&["aa","ih","ou","ee","oh","jawOpen","mouthClose"].forEach(l=>{o.expressionManager.setValue(l,0)}),console.log("✅ Avatar chargé. Version VRM:",((i=o.meta)==null?void 0:i.metaVersion)??"?","Blendshapes:",Object.keys(o.expressionManager.expressionMap)),o.lookAt&&(o.lookAt.target=Nr),oT(o),NT(o),Uc=((s=(r=o.humanoid)==null?void 0:r.getNormalizedBoneNode)==null?void 0:s.call(r,"head"))??null,Fc(),Oc(o),lT(o),hu(),window.__sarra=window.__sarra||{},Object.defineProperties(window.__sarra,Object.getOwnPropertyDescriptors({scene:wn,camera:wt,renderer:ct,vrm:o,lookTarget:Nr,gazeTarget:Xr,animateLipSyncFromText:Xn,askSarra:Or,askSarraDirect:Or,speakWithBestVoice:Hn,speakWithLocalTts:wa,stopLocalTtsPlayback:Pp,splitFrenchSentences:Ip,headTarget:vt,headCurrent:Lt,headBaseTarget:_r,get headBaseDistance(){return Ta},resetHeadPose:Fc,frameAvatar:Oc,buildVisemeTrack:pu,resetFacialExpressions:vs,stopActiveLipsync:Bs,get micState(){return{enabled:un,suspended:pi,active:ci}},get micRecognition(){return Ur}})),console.log("⚙️ Avatar ready, starting animation loop")}catch(o){console.error("❌ Erreur lors du traitement de l'avatar:",o)}},n=>{console.log(`⏳ Téléchargement VRM: ${(n.loaded/n.total*100).toFixed(1)}%`)},n=>{console.error("❌ Erreur chargement VRM:",n),document.body.innerHTML=`
            <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                        background: #1a1a1a; color: #fff; font-family: sans-serif;
                        display: flex; flex-direction: column; align-items: center; justify-content: center;">
                <h1>❌ Erreur chargement avatar</h1>
                <p>Impossible de charger le modèle VRM (${Bc}).
                Vérifiez que le fichier existe dans le dossier public.</p>
                <p>Erreur: ${n.message}</p>
            </div>
        `});const Dh=new CM;function xp(){requestAnimationFrame(xp);const n=Math.min(.1,Dh.getDelta()),e=1-Math.exp(-n/.06);if(Lt.yaw+=(vt.yaw-Lt.yaw)*e,Lt.pitch+=(vt.pitch-Lt.pitch)*e,Lt.panX+=(vt.panX-Lt.panX)*e,Lt.panY+=(vt.panY-Lt.panY)*e,Lt.zoom+=(vt.zoom-Lt.zoom)*e,sT(),Xr.position.copy(wt.position).add(fr),cT(Dh.getElapsedTime()),Je)try{Je.update(n)}catch(t){console.warn("⚠️ Erreur mise à jour avatar:",t)}try{ct.render(wn,wt)}catch(t){console.error("❌ Erreur rendu:",t)}}xp();window.addEventListener("resize",()=>{const n=(Ht==null?void 0:Ht.clientWidth)||window.innerWidth,e=(Ht==null?void 0:Ht.clientHeight)||window.innerHeight;wt.aspect=n/e,wt.updateProjectionMatrix(),ct.setSize(n,e),Je&&Oc(Je)});const dT=8e3,hT=["blink","angry","squint","aa","ih","ou","ee","oh","jawOpen"];let Ho=0,fs=!1,un=!1,ci=!1,pi=!1,Ur=null,Mp=null,la=0;function Ri(n){const e=Mp||document.getElementById("mic-btn");e&&(e.classList.toggle("listening",n),e.style.transition="background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease",e.style.background=n?"rgba(220, 40, 40, 0.9)":"",e.style.transform=n?"translateX(-50%) scale(1.1)":"translateX(-50%) scale(1)",e.style.boxShadow=n?"0 6px 18px rgba(0, 0, 0, 0.45), 0 0 0 6px rgba(220, 40, 40, 0.25)":"",e.title=n?"Micro actif — écoute continue (cliquer pour couper)":"Micro coupé (cliquer pour activer)")}function zo(n=350){!un||pi||ci||!Ur||(clearTimeout(la),la=setTimeout(()=>{if(!(!un||pi||ci))try{Ur.start(),console.log("🎤 Écoute redémarrée (mode continu)")}catch(e){(e==null?void 0:e.name)!=="InvalidStateError"&&console.warn("⚠️ Redémarrage micro:",e.message)}},n))}function Oh(){if(pi=!0,clearTimeout(la),Ur&&ci)try{Ur.stop()}catch{}}function Fh(){pi=!1,zo(350)}let Di=null;function Bs(n="arrêt forcé"){const e=Di;Di=null,typeof e=="function"?e(n):ba()}function Tn(n,e){const t=Je==null?void 0:Je.expressionManager;t&&t.expressionMap[n]&&t.setValue(n,e)}function yp(){var n,e;if(Ho&&cancelAnimationFrame(Ho),Ho=0,Tn("blink",0),Tn("angry",0),Bn=!0,Je){const t=(e=(n=Je.humanoid)==null?void 0:n.getNormalizedBoneNode)==null?void 0:e.call(n,"neck");t&&(t.rotation.z=0,t.rotation.x=0)}hu()}function vs(){var n;Bs("reset des expressions"),yp(),ko=0,Vo=0,uT();for(const e of hT)(n=Je==null?void 0:Je.expressionManager)==null||n.setValue(e,0);ba(),hu()}const qr=["gemini-3.5-flash-lite","gemini-flash-lite-latest","gemini-2.5-flash-lite"],Sp=qr[0],Bh=qr.includes(localStorage.getItem("reasoningModel"))?localStorage.getItem("reasoningModel"):Sp,ca=["gemini-2.5-flash-preview-tts","gemini-3.8-flash-tts","gemini-3.1-flash-tts-preview","gemini-3.8-flash-lite-tts"],fT=ca[0],pT=2e4,Ol=new Map,ua=qr.slice(1),kh=1e4,da=new Map;function fu(){const n=localStorage.getItem("reasoningModel");return qr.includes(n)?n:Sp}function mT(){const n=[fu(),...ua].filter((r,s,o)=>r&&o.indexOf(r)===s),e=Date.now(),t=n.filter(r=>(da.get(r)||0)<=e),i=n.filter(r=>(da.get(r)||0)>e);return[...t,...i]}function gT(n){const e=Number(n==null?void 0:n.status)||0;return(n==null?void 0:n.name)==="AbortError"||e===503||e===429||e===404}const _T=[{functionDeclarations:[{name:"open_url",description:"Ouvre une URL http(s) dans le navigateur de l'utilisateur. À appeler dès qu'il demande d'ouvrir un site.",parameters:{type:"OBJECT",properties:{url:{type:"STRING",description:"URL complète, par exemple https://www.youtube.com"}},required:["url"]}},{name:"youtube_search",description:"Lance une recherche YouTube dans le navigateur de l'utilisateur.",parameters:{type:"OBJECT",properties:{query:{type:"STRING",description:"Termes de recherche YouTube"}},required:["query"]}},{name:"web_search",description:"Lance une recherche Google dans le navigateur.",parameters:{type:"OBJECT",properties:{query:{type:"STRING",description:"Termes de recherche"}},required:["query"]}}]}],vT="RÈGLE ABSOLUE : Si l'utilisateur demande une action (ouvrir un site, lancer une recherche), tu DOIS UNIQUEMENT émettre un functionCall vers l'outil correspondant. Tu ne dois JAMAIS répondre par du texte pour dire que tu vas le faire. Si tu émets du texte descriptif au lieu d'un functionCall, c'est une erreur de ta part. Après l'appel de l'outil, réponds en une phrase courte confirmant l'exécution.";async function Ep(n,e,t,i,r=null){var C,R,w,I,W,v,S,B,O,G,Y;const s=((C=document.getElementById("cfg-reasoning-provider"))==null?void 0:C.value)||localStorage.getItem("reasoningProvider")||"gemini",o=(R=localStorage.getItem("avatarName"))==null?void 0:R.trim(),a=(w=localStorage.getItem("userName"))==null?void 0:w.trim(),l=o||a?`Identité : ${o?`tu t'appelles ${o}`:""}${o&&a?", ":""}${a?`et l'utilisateur s'appelle ${a}`:""}. `:"",c=DT(),u=c.length?`
Mémoire des derniers échanges :
${c.map(F=>`- ${F}`).join(`
`)}`:"",d=l+(((I=localStorage.getItem("coreDirectives"))==null?void 0:I.trim())||"Réponds en français, avec un ton naturel et concis.")+" Réponds en 2 phrases courtes maximum à l’oral, sans introduction ni conclusion."+u+vT;if((s==="groq"||s==="openrouter")&&!(r&&s==="groq")){const F=s==="groq",j=F?"https://api.groq.com/openai/v1/chat/completions":"https://openrouter.ai/api/v1/chat/completions",X=localStorage.getItem("openRouterKey")||localStorage.getItem("openrouterKey"),U={"Content-Type":"application/json",Authorization:`Bearer ${(F?localStorage.getItem("groqKey"):X)||e}`};F||(U["HTTP-Referer"]="https://sarra-final.local",U["X-Title"]="Sarra Final Avatar");const K=F?"llama-3.3-70b-versatile":await Bp(),ne=r?[{type:"text",text:t},{type:"image_url",image_url:{url:`data:${r.mimeType};base64,${r.data}`}}]:t,_e=await fetch(j,{method:"POST",headers:U,body:JSON.stringify({model:K,max_tokens:150,messages:[{role:"system",content:d},{role:"user",content:ne}]}),signal:i});if(!_e.ok){const $=new Error(`API Error: ${_e.status}`);throw $.status=_e.status,$}const H=await _e.json();return{text:((S=(v=(W=H==null?void 0:H.choices)==null?void 0:W[0])==null?void 0:v.message)==null?void 0:S.content)||"",functionCall:null}}r&&s==="groq"&&console.warn("⚠️ Vision: Groq ne gère pas les images, appel Gemini pour ce message.");const f=`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(n)}:generateContent?key=${encodeURIComponent(e)}`,g=[{text:t}];let _="";r?(g.push({inlineData:r}),_=" Tu vois actuellement l'écran de l'utilisateur (capture la plus récente). Utilise cette image pour répondre si la question s'y rapporte."):oa()&&(_=" ⚠️ ALERTE SYSTÈME : La capture d'écran a échoué ou a expiré (>90s). Tu ne voitS PAS l'écran actuellement. Si l'utilisateur te demande ce qu'il y a à l'écran, responds honnêtement : 'Je ne parviens plus à capturer ton écran pour le moment. Peux-tu me décrire ce que tu vois ou réessayer dans un instant ?' Ne tente jamais d'inventer le contenu de l'écran.");const p=await fetch(f,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{role:"user",parts:g}],systemInstruction:{parts:[{text:d+_}]},tools:_T,toolConfig:{functionCallingConfig:{mode:"AUTO"}},generationConfig:{temperature:.9,maxOutputTokens:150}}),signal:i});if(!p.ok){const F=new Error(`API Error: ${p.status}`);throw F.status=p.status,F}const m=await p.json(),y=((G=(O=(B=m==null?void 0:m.candidates)==null?void 0:B[0])==null?void 0:O.content)==null?void 0:G.parts)||[],M=((Y=y.find(F=>F.functionCall))==null?void 0:Y.functionCall)||null;return{text:y.filter(F=>typeof F.text=="string").map(F=>F.text).join(" ").trim(),functionCall:M}}async function xT(n){if(!(n!=null&&n.name))return{ok:!1,error:"ACTION_VIDE"};const e=n.args||{},t=n.name==="youtube_search"?{type:"youtube_search",query:e.query}:n.name==="web_search"?{type:"web_search",query:e.query}:{type:"open_url",url:e.url},i=await fetch(jE,{method:"POST",headers:{"Content-Type":"application/json","X-Sarra-Client":"sarra-desktop"},body:JSON.stringify(t),signal:AbortSignal.timeout(2e4)}),r=await i.json().catch(()=>({}));return i.ok&&r.ok!==!1?(console.log("🌐 Action exécutée:",n.name,r.opened),{ok:!0,...r}):(console.error("❌ Action refusée:",n.name,r.error||i.status),{ok:!1,...r})}function MT(n,e){if(!e.ok)return"Je n'ai pas pu exécuter l'action, mais je reste disponible.";if(n.name==="youtube_search")return"Je lance la recherche YouTube.";if(n.name==="web_search")return"Je lance la recherche.";let t="";try{t=new URL(e.opened).hostname.replace(/^www\./,"")}catch{}return t?`C'est fait, j'ouvre ${t}.`:"C'est fait, j'ouvre la page."}function Cs(){const n=localStorage.getItem("apiKey")||localStorage.getItem("geminiKey")||"";return n||console.error("❌ Clé API démo manquante : remplace GEMINI_API_KEY_DEMO ou saisis la clé dans le panneau."),n}let ii=null,kc=!1,mr=0,xs=0,Dr=!1;mr=Number(sessionStorage.getItem("sarraPremiumFailureCount")||0);xs=Number(sessionStorage.getItem("sarraPremiumCooldownUntil")||0);function Es(n,e=!1){if(Dr&&!e)return;e||(Dr=!0);const t=document.createElement("div");t.className="sarra-toast",t.textContent=n,t.style.cssText="position:fixed;left:50%;bottom:24px;transform:translateX(-50%);background:rgba(20,20,20,.92);color:#fff;padding:10px 16px;border-radius:10px;font:14px/1.4 system-ui,sans-serif;z-index:9999;box-shadow:0 8px 24px rgba(0,0,0,.35);max-width:80vw;",document.body.appendChild(t),setTimeout(()=>t.remove(),6e3)}window.__sarra=window.__sarra||{};window.__sarra.showToast=Es;function yT(){const n=window.speechSynthesis.getVoices(),e=localStorage.getItem("selectedVoice");if(e){const i=n.find(r=>r.name===e);if(i)return i}const t=i=>(i.lang||"").toLowerCase().startsWith("fr");return n.find(i=>i.name.includes("Julie"))||n.find(i=>i.name.includes("Hortense"))||n.find(i=>i.name.includes("Microsoft")&&t(i))||n.find(i=>i.name.includes("Google")&&t(i))||n.find(i=>i.lang==="fr-FR")||n.find(t)||null}function Tp(){var n;return((n=document.getElementById("cfg-tts-provider"))==null?void 0:n.value)||localStorage.getItem("ttsProvider")||"local-tts"}function ST(){var n;return((n=document.getElementById("cfg-local-tts-voice"))==null?void 0:n.value)||localStorage.getItem("localTtsVoice")||"F1"}function ET(){var n;return((n=document.getElementById("cfg-elevenlabs-key"))==null?void 0:n.value.trim())||localStorage.getItem("elevenlabsKey")||localStorage.getItem("ttsKey")||""}function TT(){var n;return((n=document.getElementById("cfg-elevenlabs-voice"))==null?void 0:n.value.trim())||localStorage.getItem("elevenVoiceId")||""}async function wp(n){const e=await fetch("https://api.elevenlabs.io/v1/voices",{headers:{"xi-api-key":n}});if(!e.ok)throw new Error(`ElevenLabs HTTP ${e.status}`);const t=await e.json();return Array.isArray(t.voices)?t.voices:[]}function Ap(n){return n.find(e=>/french|français/i.test(JSON.stringify(e.labels||{})))||n.find(e=>{var t;return(((t=e.labels)==null?void 0:t.language)||"").toLowerCase().startsWith("fr")})||n[0]||null}async function wT(n,e){if(/^[a-f0-9]{20,}$/i.test(e))return e;const t=await wp(n),i=t.find(r=>{var s;return((s=r.name)==null?void 0:s.toLowerCase())===e.toLowerCase()})||Ap(t);if(!i)throw new Error("Aucune voix ElevenLabs disponible.");return localStorage.setItem("elevenVoiceId",i.voice_id),console.log("🎙️ Voix ElevenLabs sélectionnée:",i.name,i.voice_id),i.voice_id}async function AT(n){const e=ET();if(!e)throw new Error("Clé ElevenLabs manquante (onglet Voix).");let t=TT();if(t)t=await wT(e,t);else{const r=await wp(e),s=Ap(r);if(!s)throw new Error("Aucune voix ElevenLabs disponible.");t=s.voice_id,localStorage.setItem("elevenVoiceId",t),console.log("🎙️ Voix ElevenLabs sélectionnée:",s.name,t)}const i=await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${encodeURIComponent(t)}`,{method:"POST",headers:{"xi-api-key":e,"Content-Type":"application/json",Accept:"audio/mpeg"},body:JSON.stringify({text:n,model_id:"eleven_multilingual_v2",voice_settings:{stability:.5,similarity_boost:.75}})});if(!i.ok)throw new Error(`ElevenLabs TTS HTTP ${i.status}`);return bp(await i.blob(),n)}function bp(n,e){const t=URL.createObjectURL(n),i=new Audio(t);return i.volume=1,kc=!0,typeof Xn=="function"&&Xn(e).catch(r=>console.warn("⚠️ Lipsync TTS distant:",r)),new Promise(r=>{let s=!1;const o=()=>{if(!s){s=!0,Bs("fin audio TTS");try{window.speechSynthesis.cancel()}catch{}kc=!1,URL.revokeObjectURL(t),r()}};i.onended=o,i.onerror=o,i.play().catch(a=>{console.error("❌ Lecture audio TTS distant:",a),o()}),setTimeout(o,Math.max(8e3,e.length*120))})}function bT(n,e=24e3){const t=atob(n),i=new Uint8Array(t.length);for(let a=0;a<t.length;a+=1)i[a]=t.charCodeAt(a);const r=new ArrayBuffer(44+i.length),s=new DataView(r),o=(a,l)=>{for(let c=0;c<l.length;c+=1)s.setUint8(a+c,l.charCodeAt(c))};return o(0,"RIFF"),s.setUint32(4,36+i.length,!0),o(8,"WAVE"),o(12,"fmt "),s.setUint32(16,16,!0),s.setUint16(20,1,!0),s.setUint16(22,1,!0),s.setUint32(24,e,!0),s.setUint32(28,e*2,!0),s.setUint16(32,2,!0),s.setUint16(34,16,!0),o(36,"data"),s.setUint32(40,i.length,!0),new Uint8Array(r).set(i,44),new Blob([r],{type:"audio/wav"})}function Rp(){var n;return((n=document.getElementById("cfg-gemini-tts-voice"))==null?void 0:n.value)||localStorage.getItem("geminiTTSVoice")||localStorage.getItem("geminiVoice")||"Kore"}async function Cp(n,e={}){var h,f,g,_,p,m;const t=e.key||Cs();if(!t)throw new Error("Clé Gemini manquante (onglet IA & Voix).");const i=e.voiceName||Rp(),r=e.model||fT;localStorage.setItem("geminiVoice",i),localStorage.setItem("geminiTTSVoice",i);const s=`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(r)}:generateContent?key=${encodeURIComponent(t)}`,o=new AbortController,a=setTimeout(()=>o.abort(),2e4);let l;try{l=await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:n}]}],generationConfig:{responseModalities:["AUDIO"],speechConfig:{voiceConfig:{prebuiltVoiceConfig:{voiceName:i}}}}}),signal:o.signal})}finally{clearTimeout(a)}if(!l.ok){const y=new Error(`Gemini TTS HTTP ${l.status}`);throw y.status=l.status,y}const c=await l.json(),u=(p=(_=(g=(f=(h=c==null?void 0:c.candidates)==null?void 0:h[0])==null?void 0:f.content)==null?void 0:g.parts)==null?void 0:_.find(y=>{var M;return(M=y.inlineData)==null?void 0:M.data}))==null?void 0:p.inlineData;if(!u)throw new Error("Gemini TTS: aucun audio retourné");const d=Number((m=(u.mimeType||"").match(/rate=(\d+)/))==null?void 0:m[1])||24e3;return console.log("🎙️ Gemini TTS:",r,i,u.mimeType,d),bp(bT(u.data,d),n)}async function RT(n,e,t){const i=ca.filter(s=>(Ol.get(s)||0)<=Date.now()),r=ca.filter(s=>!i.includes(s));for(const s of[...i,...r])try{return await Cp(n,{key:e,voiceName:t,model:s}),Ol.delete(s),!0}catch(o){Ol.set(s,Date.now()+pT),console.warn(`⚠️ TTS ${s} indisponible (${o.status||o.name||"erreur"}) — modèle suivant...`)}return!1}const CT=/(?:^|[\s(«"'])(?:M|Mme|Mmes|Mlle|Mlles|Dr|Prof|Pr|Sr|St|Ste|Mgr|Me|etc|cf|ex|env|av|apr|p|pp|n°|no|vol|fig|art|ch|chap|al|éd|J\.-C)\.\s*$/i;function Ip(n){const e=String(n||"").replace(/\s+/g," ").trim();if(!e)return[];const t=[];let i=0;for(let o=0;o<e.length;o+=1){const a=e[o];if(a!=="."&&a!=="!"&&a!=="?"&&a!=="…"||a==="."&&e[o+1]==="."||a==="."&&o>0&&/\d/.test(e[o-1])&&/\d/.test(e[o+1]||"")||a==="."&&e[o+1]==="-")continue;const l=e[o+1]||"";if(l&&!/[\s»"')\]…]/.test(l))continue;const c=e.slice(i,o+1);if(a==="."&&CT.test(c))continue;let u=o+1;for(;u<e.length&&/[»"')\]…]/.test(e[u]);)u+=1;if(u<e.length&&!/\s/.test(e[u]))continue;const d=e.slice(i,u).trim();for(d&&t.push(d),i=u;i<e.length&&/\s/.test(e[i]);)i+=1;o=i-1}const r=e.slice(i).trim();if(r&&t.push(r),t.length<=1)return t;const s=[];for(const o of t)s.length?o.length<12?s[s.length-1]=`${s[s.length-1]} ${o}`:s[s.length-1].length<12?s[s.length-1]=`${s[s.length-1]} ${o}`:s.push(o):s.push(o);return s}let si=null,Go=0,ti=null;function Pp(){if(Go+=1,typeof si=="function"){const n=si;si=null,n("interruption")}}function IT(n,e){typeof si=="function"&&si("nouvel audio local");const t=URL.createObjectURL(n),i=new Audio(t);i.volume=1;const r=Je,s=(r==null?void 0:r.expressionManager)||null,o=pu(String(e||"")),a={aa:0,ih:0,ou:0,ee:0,oh:0,jawOpen:0};let l=null,c=null,u=null;try{const d=window.AudioContext||window.webkitAudioContext;d&&typeof i.addEventListener=="function"&&((!ti||ti.state==="closed")&&(ti=new d),ti.state==="suspended"&&ti.resume().catch(()=>{}),l=ti.createAnalyser(),l.fftSize=512,c=ti.createMediaElementSource(i),c.connect(l),l.connect(ti.destination),u=new Float32Array(l.fftSize))}catch{l=null,c=null,u=null}return Di&&Bs("audio local"),Bn=!1,new Promise(d=>{let h=!1,f=0,g=0,_=performance.now();const p=()=>{if(!h){h=!0,si===p&&(si=null),cancelAnimationFrame(f),clearTimeout(g);try{i.pause()}catch{}try{c==null||c.disconnect()}catch{}try{l==null||l.disconnect()}catch{}Bn=!0,r&&ba(),URL.revokeObjectURL(t),d()}};si=p;const m=y=>{if(h)return;const M=Math.min(.05,Math.max(.001,(y-_)/1e3));if(_=y,s&&o.entries.length){const T=Number.isFinite(i.duration)&&i.duration>0?i.duration:Math.max(.6,o.entries.length/Lp),C=Number.isFinite(i.currentTime)?i.currentTime:0,R=Math.min(o.totalWeight,Math.max(0,C/T*o.totalWeight));let w=o.entries[0],I=null;for(let O=0;O<o.entries.length;O+=1){const G=o.entries[O];if(R>=G.start)w=G,I=o.entries[O+1]||null;else break}let W=i.paused?0:1;if(l&&u){l.getFloatTimeDomainData(u);let O=0;for(let F=0;F<u.length;F+=1){const j=u[F];O+=j*j}const G=Math.sqrt(O/u.length),Y=Math.max(0,Math.min(.25,Number.parseFloat(localStorage.getItem("lipThreshold")||"0.02")||.02));W=G<=Y?0:Math.min(1.25,(G-Y)/Math.max(.05,.2-Y))}const v={aa:0,ih:0,ou:0,ee:0,oh:0};let S=0;if(w&&W>0){const O=Math.max(.01,w.weight),G=Math.min(1,Math.max(0,(R-w.start)/O)),Y=Math.sin(G*Math.PI)*W;if(w.viseme&&(v[w.viseme]=ha*Y),S=w.jaw*Y,I&&I.viseme&&G>.7){const F=(G-.7)/.3*.5*W;v[I.viseme]=Math.max(v[I.viseme],ha*F)}}const B={};for(const O of Aa)a[O]=sa(a[O],v[O],M,ui.attackSeconds,ui.releaseSeconds),B[O]=a[O],s.setValue(O,a[O]);a.jawOpen=sa(a.jawOpen,S,M,ui.attackSeconds,ui.releaseSeconds),B.jawOpen=a.jawOpen*Np,s.setValue("jawOpen",B.jawOpen),mu(B)}f=requestAnimationFrame(m)};i.onended=p,i.onerror=p,f=requestAnimationFrame(m),i.play().catch(y=>{console.error("❌ Lecture audio TTS local:",y),p()}),g=setTimeout(p,Math.max(12e3,String(e||"").length*180))})}async function Vh(n,e,t,i){const r=await fetch(KE,{method:"POST",headers:{"Content-Type":"application/json","X-Sarra-Client":"sarra-desktop"},body:JSON.stringify({text:n,voice:e,lang:t}),signal:i||AbortSignal.timeout(15e3)});if(!r.ok){let s="",o="";try{const l=await r.json();o=(l==null?void 0:l.code)||(l==null?void 0:l.error)||"",s=(l==null?void 0:l.message)||""}catch{}const a=new Error(`TTS local HTTP ${r.status}${o?` (${o})`:""}${s?`: ${s}`:""}`);throw a.status=r.status,a.code=o,a}return r.blob()}async function wa(n,e={}){const t=String(n||"").trim();if(!t)return;Pp();const i=Go,r=e.voice||ST(),s=e.lang||"fr",o=Ip(t);if(!o.length)return;let a=Vh(o[0],r,s,e.signal);for(let l=0;l<o.length&&i===Go;l+=1){const c=await a;if(i!==Go)break;if(a=l+1<o.length?Vh(o[l+1],r,s,e.signal).catch(u=>({__prefetchError:u})):null,c!=null&&c.__prefetchError)throw c.__prefetchError;await IT(c,o[l])}}function Hn(n){if(!n)return Promise.resolve();const e=Tp(),t=localStorage.getItem("ttsFallback")==="never";if(e==="local-tts")return wa(n).catch(s=>{if(console.error("❌ TTS local indisponible (aucun repli cloud):",s),Es(`❌ Voix locale hors-ligne indisponible : ${(s==null?void 0:s.message)||"vérifiez server.js et models/supertonic-3"}.`,!0),t){console.error("❌ TTS local indisponible — repli navigateur désactivé (ttsFallback=never).");return}return console.warn("⚠️ TTS local indisponible — repli voix navigateur."),ni(n)});const i=localStorage.getItem("geminiTTSKey")||localStorage.getItem("geminiKey")||localStorage.getItem("apiKey")||"",r=localStorage.getItem("geminiTTSVoice")||localStorage.getItem("geminiVoice")||"Kore";return e==="gemini-tts"||e==="gemini"?i?Date.now()<xs?t?(console.error("❌ TTS en refroidissement — repli navigateur désactivé (ttsFallback=never)."),Promise.resolve()):(console.log("⚡ TTS en refroidissement — voix navigateur directe."),Dr||(Dr=!0,Es("⚠️ Voix premium temporairement indisponible — bascule sur la voix système.")),ni(n)):mr>=2?t?(console.error("❌ TTS premium désactivé (2 échecs) — repli navigateur désactivé (ttsFallback=never)."),Promise.resolve()):(console.warn("⚠️ TTS premium désactivé pour la session (2 échecs consécutifs). Voix navigateur."),ni(n)):RT(n,i,r).then(s=>{if(s){mr=0,sessionStorage.setItem("sarraPremiumFailureCount",0),xs=0,sessionStorage.setItem("sarraPremiumCooldownUntil",0);return}if(mr+=1,sessionStorage.setItem("sarraPremiumFailureCount",mr),xs=Date.now()+30*60*1e3,sessionStorage.setItem("sarraPremiumCooldownUntil",xs),console.warn("⚠️ TTS failure — launching 30-minute premium cooldown."),localStorage.getItem("ttsFallback")==="never"){console.error("❌ TTS premium indisponible — repli navigateur désactivé (ttsFallback=never).");return}return mr>=2||(Es("⚠️ Voix premium momentanément indisponible — bascule sur la voix système."),console.warn("⚠️ TTS premium indisponible après cascade — repli voix navigateur (robotique).")),ni(n)}):t?(console.error("❌ TTS premium: aucune clé Gemini — repli navigateur désactivé (ttsFallback=never)."),Promise.resolve()):(console.warn("⚠️ TTS premium: aucune clé Gemini — repli navigateur."),ni(n)):e==="elevenlabs"?AT(n).catch(s=>{if(console.error("❌ ElevenLabs indisponible:",s),localStorage.getItem("ttsFallback")==="never"){console.error("❌ ElevenLabs indisponible — repli navigateur désactivé (ttsFallback=never).");return}return ni(n)}):ni(n)}function ni(n){window.speechSynthesis.cancel();const e=()=>{if(ii=yT(),ii&&console.log("🎙️ Voix TTS sélectionnée:",ii.name,ii.lang),typeof Xn=="function")return Xn(n);const t=new SpeechSynthesisUtterance(n);return t.lang="fr-FR",t.rate=1,t.pitch=1,ii&&(t.voice=ii),window.speechSynthesis.speak(t),Promise.resolve()};return window.speechSynthesis.getVoices().length===0?new Promise(t=>{let i=!1;const r=()=>{i||(i=!0,window.speechSynthesis.removeEventListener("voiceschanged",r),t(e()))};window.speechSynthesis.addEventListener("voiceschanged",r),setTimeout(r,1500)}):e()}async function Or(n){if(!Je)return console.warn("⚠️ askSarraDirect: aucun avatar chargé."),null;if(fs)return console.warn("⚠️ askSarraDirect: une requête est déjà en cours, message ignoré."),null;const t=oa()&&$E.test(n)?null:qE(n);if(t)return console.log("💾 Mode démo : réponse servie depuis le cache"),fs=!0,Oh(),setTimeout(async()=>{try{await Hn(t)}catch(i){console.warn("⚠️ TTS cache:",i)}finally{vs(),fs=!1,Fh()}},250),t;fs=!0,Oh();try{const i=Cs();if(!i)throw new Error("Clé API manquante");let r=null,s=!1;if(oa())try{r=await fp(),r?console.log("📸 Capture écran injectée dans le prompt"):(s=!0,console.warn("⚠️ Vision: capture échouée ou expirée (>90s). Aucune frame envoyée à Gemini."))}catch(u){s=!0,console.warn("❌ Vision écran indisponible (erreur):",u.message)}s&&!Dr&&(Dr=!0,Es("⚠️ Capture d'écran temporairement indisponible. Sarra ne voit plus ton écran."));const o=mT();console.log("🧠 Cascade modèles:",o.join(" → "));const a=Math.max(2500,Math.floor(dT/o.length));let l="",c=null;for(const u of o){const d=new AbortController,h=setTimeout(()=>d.abort(),a);try{const f=await Ep(u,i,n,d.signal,r);if(l=(f==null?void 0:f.text)||"",c=(f==null?void 0:f.functionCall)||null,l||c){da.delete(u),console.log("✅ Modèle utilisé:",u,c?`(tool: ${c.name})`:"");break}}catch(f){if(!gT(f))throw f;da.set(u,Date.now()+kh),console.warn(`⚠️ Modèle ${u} indisponible (${f.status||f.name||"erreur"}), repos ${kh/1e3} s — bascule...`)}finally{clearTimeout(h)}}if(c||console.warn("⚠️ Aucun functionCall de Gemini — l'action n'a pas été exécutée."),c){const u=await xT(c);l=MT(c,u)}if(!l)throw new Error("Réponse Gemini vide");return console.log("🗣️ Sarra répond (direct):",l),UT(n,l),await Hn(l),c||XE(n,l),vs(),l}catch(i){return console.error("❌ Erreur Gemini direct:",i),vs(),await Hn("Les serveurs de Google sont saturés en ce moment. Je bascule sur un mode dégradé. Réessayez dans quelques secondes."),vs(),null}finally{fs=!1,yp(),Fh()}}const Aa=["aa","ih","ou","ee","oh"],PT=Object.freeze([{re:/[aàâä]/,viseme:"aa",jaw:1,dur:1},{re:/[oôö]/,viseme:"oh",jaw:.85,dur:1},{re:/[uùûü]/,viseme:"ou",jaw:.6,dur:1},{re:/[eéèêëœ]/,viseme:"ee",jaw:.45,dur:.9},{re:/[iîïy]/,viseme:"ih",jaw:.35,dur:.9}]),LT=Object.freeze([{pair:"eau",viseme:"oh",jaw:.85,dur:1.6},{pair:"ou",viseme:"ou",jaw:.6,dur:1.4},{pair:"au",viseme:"oh",jaw:.85,dur:1.4},{pair:"an",viseme:"aa",jaw:.7,dur:1.3},{pair:"am",viseme:"aa",jaw:.7,dur:1.3},{pair:"en",viseme:"aa",jaw:.65,dur:1.3},{pair:"on",viseme:"oh",jaw:.75,dur:1.3},{pair:"om",viseme:"oh",jaw:.75,dur:1.3},{pair:"in",viseme:"ih",jaw:.4,dur:1.3},{pair:"ai",viseme:"ee",jaw:.45,dur:1.2},{pair:"oi",viseme:"oh",jaw:.7,dur:1.2}]),Lp=10.5;function pu(n){const e=Array.from(String(n)),t=[];let i=0;for(let r=0;r<e.length;r++){const s=e[r].toLocaleLowerCase("fr-FR");let o=null,a=0,l=.4,c=0;if(/[.!?…]/.test(s))l=2.4;else if(/[,;:]/.test(s))l=1.3;else if(/\s|['']/.test(s))l=.5;else{const u=e[r+1]?e[r+1].toLocaleLowerCase("fr-FR"):"",d=e[r+2]?e[r+2].toLocaleLowerCase("fr-FR"):"",h=s+u,f=h+d,g=LT.find(_=>_.pair===f||_.pair===h);if(g)o=g.viseme,a=g.jaw,l=g.dur,c=g.pair.length-1;else if(/[pb]/.test(s))l=.45;else if(/[fv]/.test(s))o="oh",a=.22,l=.5;else if(/[mn]/.test(s))o=null,a=0,l=.4;else if(/[sʃzj]/.test(s))o="ih",a=.2,l=.45;else if(/[tdkglr]/.test(s))l=.4;else{const _=PT.find(p=>p.re.test(s));_&&(o=_.viseme,a=_.jaw,l=_.dur)}}t.push({char:r,viseme:o,jaw:a,start:i,weight:l}),i+=l,r+=c}return{entries:t,totalWeight:i||1}}const ui=WE(hr),ha=.85,Np=.45;let Wo=[];function NT(n){Wo=[];const e=[...Aa,"jawOpen"];n.scene.traverse(t=>{if(!t.isMesh||!t.morphTargetDictionary)return;const i=t.morphTargetDictionary,r={};for(const s of e)i[s]!==void 0&&(r[s]=i[s]);Object.keys(r).length&&Wo.push({mesh:t,indices:r})}),console.log("🦷 Maillages du lipsync:",Wo.map(t=>t.mesh.name).join(", "))}function mu(n){const e=Number.parseFloat(localStorage.getItem("lipSensitivity")||"1"),t=Number.parseFloat(localStorage.getItem("lipJaw")||"1"),i=localStorage.getItem("lipTeeth")!=="false";for(const{mesh:r,indices:s}of Wo){if(!i&&/teeth|dent|gum/i.test(r.name||""))continue;const o=r.morphTargetInfluences;if(o){for(const a in s){const l=a==="jawOpen"?e*t:e;o[s[a]]=(n[a]??0)*l}s.ih!==void 0&&s.ee===void 0&&n.ee!==void 0&&(o[s.ih]=Math.max(o[s.ih]??0,(n.ee??0)*e))}}}function ba(){var e,t;const n={aa:0,ih:0,ou:0,ee:0,oh:0,jawOpen:0};for(const i of Aa)(e=Je==null?void 0:Je.expressionManager)==null||e.setValue(i,0);(t=Je==null?void 0:Je.expressionManager)==null||t.setValue("jawOpen",0),mu(n)}async function Xn(n){if(!Je){console.warn("⚠️ Lipsync: aucun avatar chargé.");return}if(Di&&Bs("nouvelle phrase"),Bn=!1,!("speechSynthesis"in window)||typeof SpeechSynthesisUtterance>"u"){console.error("❌ speechSynthesis indisponible dans ce navigateur."),Bn=!0;return}window.speechSynthesis.cancel();const t=Je.expressionManager,i=String(n),r=new SpeechSynthesisUtterance(i);r.lang="fr-FR",ii&&(r.voice=ii),kc&&(r.volume=0),r.pitch=1,r.rate=Number.parseFloat(localStorage.getItem("lipSpeed")||"1");const s=pu(i),o=s.entries.length/Lp*1e3,a=o+4e3;return new Promise(l=>{const c={aa:0,ih:0,ou:0,ee:0,oh:0,jawOpen:0};let u=null,d=performance.now(),h=!1,f=0,g=0,_=s.totalWeight/Math.max(.2,o/1e3),p=0,m=0,y=0;const M=R=>{let w=0;for(const I of s.entries)if(I.char<=R)w=I.start;else break;return w},T=R=>{h||(h=!0,Di===T&&(Di=null),cancelAnimationFrame(f),clearTimeout(g),Bn=!0,ba(),console.log(`🎤 Lipsync terminé (${R}).`),l())};Di=T;const C=R=>{if(h)return;const w=Math.min(.1,Math.max(0,(R-d)/1e3));if(d=R,u==null){f=requestAnimationFrame(C);return}const I=(R-u)/1e3;y=Math.min(s.totalWeight,p+(I-m)*_);let W=null,v=null;for(let G=0;G<s.entries.length;G++){const Y=s.entries[G];if(y>=Y.start)W=Y,v=s.entries[G+1]||null;else break}const S={aa:0,ih:0,ou:0,ee:0,oh:0};let B=0;if(W){const G=Math.max(.001,W.weight),Y=Math.min(1,Math.max(0,(y-W.start)/G)),F=Math.sin(Math.PI*Math.min(1,Y*.9+.05));if(W.viseme&&(S[W.viseme]=ha*F),B=W.jaw*F,v&&v.viseme&&Y>.7){const j=(Y-.7)/.3*.5;S[v.viseme]=Math.max(S[v.viseme],ha*j)}}const O={};for(const G of Aa)c[G]=sa(c[G],S[G],w,ui.attackSeconds,ui.releaseSeconds),O[G]=c[G],t.setValue(G,c[G]);c.jawOpen=sa(c.jawOpen,B,w,ui.attackSeconds,ui.releaseSeconds),O.jawOpen=c.jawOpen*Np,t.setValue("jawOpen",O.jawOpen),mu(O),f=requestAnimationFrame(C)};r.onstart=()=>{u=performance.now(),d=u,p=0,m=0,y=0,console.log(`🗣️ Synthèse vocale démarrée (${s.entries.length} segments).`)},r.onboundary=R=>{if(u==null||!Number.isFinite(R.charIndex))return;const w=(performance.now()-u)/1e3,I=M(R.charIndex);I<=.5||w<.15||(_=Math.max(.5,Math.min(60,I/w)),p=I,m=w,y=I)},r.onend=()=>{Bn=!0,T("fin de la parole")},r.onerror=R=>{Bn=!0,console.error("❌ Erreur de synthèse vocale:",R.error),T("erreur de synthèse")},g=setTimeout(()=>T("timeout de sécurité"),a),window.speechSynthesis.speak(r),f=requestAnimationFrame(C)})}let Gt=(()=>{try{const n=JSON.parse(localStorage.getItem("avatarMemory")||"[]");return Array.isArray(n)?n:[]}catch{return[]}})();function UT(n,e){var o;if(localStorage.getItem("memoryEnabled")==="false")return;const t=((o=localStorage.getItem("avatarName"))==null?void 0:o.trim())||"Sarra",i=`Utilisateur: "${String(n).slice(0,60)}" → ${t}: "${String(e).slice(0,60)}"`;Gt.push(i);const r=Number.parseInt(localStorage.getItem("memorySize")||"10",10),s=Math.max(0,Math.min(10,Number.isFinite(r)?r:10));Gt=s?Gt.slice(-s):[],localStorage.setItem("avatarMemory",JSON.stringify(Gt)),di()}function DT(){return localStorage.getItem("memoryEnabled")==="false"?[]:Gt.slice()}function OT(){return localStorage.getItem("onboardingSkipped")==="true"?!0:!!localStorage.getItem("apiKey")&&!!localStorage.getItem("userName")&&!!localStorage.getItem("avatarName")}let Xo=null;function gu(){Xo==null||Xo()}function FT(){const n=document.getElementById("onboarding-modal");n&&(n.style.display="flex"),gu()}function Up(){const n=document.getElementById("onboarding-modal");n&&(n.style.display="none"),gu()}function BT(){var s,o,a;const n=((s=document.getElementById("apiKey"))==null?void 0:s.value.trim())||"",e=((o=document.getElementById("userName"))==null?void 0:o.value.trim())||"",t=((a=document.getElementById("avatarName"))==null?void 0:a.value.trim())||"Sarra",i=document.getElementById("ob-status");if(!n||!e){i&&(i.textContent="Renseignez votre prénom et votre clé API (ou cliquez sur « Plus tard »).");return}i&&(i.textContent=""),localStorage.setItem("apiKey",n),localStorage.getItem("geminiKey")||localStorage.setItem("geminiKey",n),localStorage.getItem("geminiTTSKey")||localStorage.setItem("geminiTTSKey",n),localStorage.setItem("userName",e),localStorage.setItem("avatarName",t),localStorage.removeItem("onboardingSkipped"),Up();const r=document.getElementById("scene");r&&(r.style.display="block")}function kT(){var i,r;const n=((i=document.getElementById("userName"))==null?void 0:i.value.trim())||"",e=((r=document.getElementById("avatarName"))==null?void 0:r.value.trim())||"Sarra";n&&localStorage.setItem("userName",n),localStorage.setItem("avatarName",e),localStorage.setItem("onboardingSkipped","true"),Up();const t=document.getElementById("scene");t&&(t.style.display="block")}function Oi(n){const e=document.getElementById("config-panel");if(!e)return;const t=e.classList.contains("is-open")||getComputedStyle(e).display!=="none",i=typeof n=="boolean"?n:!t;e.style.display="",e.classList.toggle("is-open",i),i&&(kp(),zT(),zc(),di(),Yr()),gu()}const _u=Object.freeze({friendly:"Tu es Sarra, une assistante bienveillante. Tu parles français avec un ton chaleureux, simple et naturel. Tu tutoiens ton interlocuteur et restes concise à l'oral.",professional:"Tu es Sarra, assistante stratégique senior. Français exclusif, ton calme et direct. Un fait concret vaut mieux qu'un adjectif. Maximum deux phrases à l'oral.",pedagogical:"Tu es Sarra, tutrice pédagogique. Français clair, explications courtes et concrètes, une seule idée par phrase. Tu vérifies la compréhension avec une question brève.",humorous:"Tu es Sarra, assistante décontractée et humoristique. Français naturel, ton léger et bienveillant, sans jamais détourner la réponse de la question posée."});function vu(){var e;const n=((e=document.getElementById("cfg-auto-fallback"))==null?void 0:e.checked)??!0;ua.length=0,n&&ua.push(...qr.slice(1))}function Dp(){if(localStorage.getItem("sarra_window_state")){Vc();return}const n=document.getElementById("avatar-container");if(!n)return;const e=ht(Number(localStorage.getItem("avatarWidth"))||400,200,1920),t=ht(Number(localStorage.getItem("avatarHeight"))||400,200,1080),i=localStorage.getItem("avatarPosX"),r=localStorage.getItem("avatarPosY"),s=i===null?100:Number(i),o=r===null?100:Number(r);n.style.width=`${e}px`,n.style.height=`${t}px`,n.style.left=`${Number.isFinite(s)?s:100}px`,n.style.top=`${Number.isFinite(o)?o:100}px`}function VT(){const n=window.SpeechRecognition||window.webkitSpeechRecognition;if(!n){console.error("❌ Web Speech API non disponible dans ce contexte Electron"),console.error("→ Solution: utiliser un input texte ou un micro externe");const o=document.getElementById("mic-btn");o&&(o.style.opacity="0.3",o.title="Micro désactivé",o.style.pointerEvents="none");return}const e=document.getElementById("mic-btn");if(!e)return;Mp=e,Ri(!1);const t=new n;Ur=t,t.lang="fr-FR",t.continuous=!1,t.interimResults=!1;let i=!1,r="",s=0;e.addEventListener("click",()=>{if(un){un=!1,clearTimeout(la);try{t.abort()}catch{}Ri(!1),console.log("🔴 Mode Continu Désactivé");return}if(un=!0,Ri(!0),console.log("🟢 Mode Continu Activé"),!pi&&!ci)try{t.start()}catch(o){console.warn("⚠️ Démarrage micro:",o.message),zo(400)}}),t.onstart=()=>{if(ci=!0,!un){try{t.abort()}catch{}Ri(!1);return}Ri(!0),console.log("🎤 Écoute active (mode continu)")},t.onresult=async o=>{var a,l;for(let c=o.resultIndex;c<o.results.length;c+=1){const u=o.results[c];if(!u.isFinal)continue;const d=(l=(a=u[0])==null?void 0:a.transcript)==null?void 0:l.trim();if(!d)continue;const h=d.toLocaleLowerCase("fr-FR"),f=Date.now();if(i||h===r&&f-s<5e3){console.warn("⚠️ Résultat vocal répété ignoré:",d);continue}r=h,s=f,i=!0,console.log("🗣️ Texte reconnu:",d);try{typeof Or=="function"&&await Or(d)}finally{i=!1}}},t.onend=()=>{ci=!1,un&&!pi?zo(300):Ri(un)},t.onerror=o=>{if(ci=!1,o.error==="aborted")return;if(o.error==="not-allowed"||o.error==="service-not-allowed"){un=!1,Ri(!1),console.error("❌ Micro refusé:",o.error);return}o.error==="no-speech"?console.log("🎤 Silence détecté — reprise de l'écoute"):console.warn("⚠️ Micro:",o.error),un&&!pi&&zo(700)}}function Yr(){const n=document.getElementById("bounds-info"),e=document.getElementById("avatar-container");if(!n||!e)return;const t=Math.round(e.offsetWidth||Number.parseFloat(e.style.width)||400),i=Math.round(e.offsetHeight||Number.parseFloat(e.style.height)||400),r=Math.round(e.offsetLeft||Number.parseFloat(e.style.left)||0),s=Math.round(e.offsetTop||Number.parseFloat(e.style.top)||0);n.textContent=`Avatar : ${t} × ${i} px (${r}, ${s})`}function xu(){const n=document.getElementById("avatar-container");if(!n)return;const e={x:n.offsetLeft,y:n.offsetTop,w:n.offsetWidth,h:n.offsetHeight};localStorage.setItem("sarra_window_state",JSON.stringify(e)),Yr()}function Vc(){const n=localStorage.getItem("sarra_window_state"),e=document.getElementById("avatar-container");if(n&&e){const t=JSON.parse(n);e.style.left=`${t.x}px`,e.style.top=`${t.y}px`,e.style.width=`${t.w}px`,e.style.height=`${t.h}px`}Yr()}function HT(){const n=document.getElementById("avatar-container");if(!n)return;let e=!1,t=!1,i,r,s,o,a,l;n.addEventListener("mousemove",c=>{const u=n.getBoundingClientRect(),d=c.clientY-u.top;n.style.cursor=d<u.height/2?"grab":"nwse-resize"}),n.addEventListener("mousedown",c=>{if(c.target.closest("#mic-btn, #cfg-open-btn"))return;const u=n.getBoundingClientRect();c.clientY-u.top<u.height/2?(e=!0,i=c.clientX,r=c.clientY,s=n.offsetLeft,o=n.offsetTop,n.style.cursor="grabbing"):c.clientX-u.left>u.width*.7&&(t=!0,i=c.clientX,r=c.clientY,a=u.width,l=u.height),c.preventDefault()}),document.addEventListener("mousemove",c=>{if(e)n.style.left=`${s+(c.clientX-i)}px`,n.style.top=`${o+(c.clientY-r)}px`;else if(t){const u=Math.max(200,a+(c.clientX-i)),d=Math.max(200,l+(c.clientY-r));n.style.width=`${u}px`,n.style.height=`${d}px`}}),document.addEventListener("mouseup",()=>{(e||t)&&(xu(),e=!1,t=!1,n.style.cursor="grab")})}const Ra="sarra_panel_state",Is=380,Ps=360,fa=640,Ls=760;let pa=!1;function Mu(){try{const n=localStorage.getItem(Ra);if(!n)return null;const e=JSON.parse(n);return e&&typeof e=="object"?e:null}catch{return null}}function ma(n,e={}){if(!n)return;const t=Mu()||{},i=n.getBoundingClientRect(),r=n.classList.contains("is-collapsed"),s={x:Math.round(Number.isFinite(Number.parseFloat(n.style.left))?Number.parseFloat(n.style.left):i.left),y:Math.round(Number.isFinite(Number.parseFloat(n.style.top))?Number.parseFloat(n.style.top):i.top),w:Math.round(Number.isFinite(Number.parseFloat(n.style.width))?Number.parseFloat(n.style.width):t.w||i.width||fa),h:r?t.h||Ls:Math.round(Number.isFinite(Number.parseFloat(n.style.height))?Number.parseFloat(n.style.height):t.h||i.height||Ls),collapsed:r,...e};localStorage.setItem(Ra,JSON.stringify(s))}function Ns(n,e,t){const i=document.getElementById("panel-size-hud");i&&(i.textContent=`${Math.round(e)} × ${Math.round(t)}`),n&&(n.dataset.sizeLabel=`${Math.round(e)}×${Math.round(t)}`)}function Ca(){const n=document.getElementById("config-panel");if(!n||!n.classList.contains("is-open"))return;const e=window.innerWidth,t=window.innerHeight,i=8,r=n.getBoundingClientRect();if(!r.width&&!r.height)return;const s=n.classList.contains("is-collapsed"),o=Math.max(Is,e-i*2),a=Math.max(Ps,t-i*2),l=Number.parseFloat(n.style.width)||r.width||fa,c=Number.parseFloat(n.style.height)||r.height||Ls,u=ht(l,Math.min(Is,o),o);if((n.style.width||r.width>o)&&(n.style.width=`${Math.round(u)}px`),!s){const d=ht(c,Math.min(Ps,a),a);(n.style.height||r.height>a)&&(n.style.height=`${Math.round(d)}px`),Ns(n,u,d)}if(n.style.left!==""&&n.style.left!=="auto"){const d=n.getBoundingClientRect(),h=Number.parseFloat(n.style.left),f=Number.parseFloat(n.style.top),g=Math.max(i,e-d.width-i),_=Math.max(i,t-d.height-i);n.style.left=`${Math.round(ht(Number.isFinite(h)?h:d.left,i,g))}px`,n.style.top=`${Math.round(ht(Number.isFinite(f)?f:d.top,i,_))}px`,n.style.right="auto",n.style.bottom="auto"}}function zT(){const n=document.getElementById("config-panel");if(!n)return;const e=Mu();if(!e){n.classList.remove("is-collapsed"),n.style.left="",n.style.top="",n.style.right="",n.style.bottom="",n.style.width="",n.style.height="";const _=n.getBoundingClientRect();Ns(n,_.width||fa,_.height||Ls),Ca();return}const t=window.innerWidth,i=window.innerHeight,r=8,s=Math.max(Is,t-r*2),o=Math.max(Ps,i-r*2),a=ht(Number(e.w)||fa,Math.min(Is,s),s),l=ht(Number(e.h)||Ls,Math.min(Ps,o),o),c=!!e.collapsed;n.style.width=`${Math.round(a)}px`,n.style.height=`${Math.round(l)}px`,n.classList.toggle("is-collapsed",c),n.style.right="auto",n.style.bottom="auto";const u=c?54:l,d=Math.max(r,t-a-r),h=Math.max(r,i-u-r),f=ht(Number.isFinite(Number(e.x))?Number(e.x):t-a-24,r,d),g=ht(Number.isFinite(Number(e.y))?Number(e.y):24,r,h);n.style.left=`${Math.round(f)}px`,n.style.top=`${Math.round(g)}px`,Ns(n,a,l)}function Hh(){const n=document.getElementById("config-panel");if(!n)return;localStorage.removeItem(Ra),n.classList.remove("is-collapsed"),n.style.left="",n.style.top="",n.style.right="",n.style.bottom="",n.style.width="",n.style.height="";const e=document.getElementById("cfg-minimize");e&&(e.textContent="—"),Ca()}function GT(n){const e=document.getElementById("config-panel");if(!e)return;const t=e.querySelector(".panel-header-drag");let i=null,r="",s=null,o=0,a=0,l=0,c=0,u=0,d=0;const h=(g,_,p="")=>{var y,M;const m=e.getBoundingClientRect();e.style.right="auto",e.style.bottom="auto",e.style.left=`${Math.round(m.left)}px`,e.style.top=`${Math.round(m.top)}px`,e.classList.contains("is-collapsed")||(e.style.width=`${Math.round(m.width)}px`,e.style.height=`${Math.round(m.height)}px`),i=_,r=p,s=g.pointerId,o=g.clientX,a=g.clientY,l=m.left,c=m.top,u=m.width,d=m.height,pa=!0,n==null||n(!1),e.classList.toggle("is-dragging",_==="drag"),e.classList.toggle("is-resizing",_==="resize"),_==="resize"&&Ns(e,u,d);try{(M=(y=g.target)==null?void 0:y.setPointerCapture)==null||M.call(y,g.pointerId)}catch{}g.preventDefault()};t==null||t.addEventListener("pointerdown",g=>{g.button!==0&&g.pointerType==="mouse"||g.target.closest("button, a, input, select, .no-drag")||h(g,"drag")}),t==null||t.addEventListener("dblclick",g=>{g.target.closest("button, a, input, select, .no-drag")||Op()}),e.querySelectorAll(".panel-resize-handle, .panel-resize-edge").forEach(g=>{g.addEventListener("pointerdown",_=>{_.button!==0&&_.pointerType==="mouse"||e.classList.contains("is-collapsed")||h(_,"resize",g.dataset.resize||"se")})}),window.addEventListener("pointermove",g=>{if(!i||s!==null&&g.pointerId!==s)return;const _=8,p=window.innerWidth,m=window.innerHeight,y=g.clientX-o,M=g.clientY-a;if(i==="drag"){const T=Math.max(_,p-u-_),C=Math.max(_,m-d-_),R=ht(l+y,_,T),w=ht(c+M,_,C);e.style.left=`${Math.round(R)}px`,e.style.top=`${Math.round(w)}px`;return}if(i==="resize"){const T=Math.min(Is,p-_*2),C=Math.min(Ps,m-_*2);let R=l,w=u,I=d;if(r.includes("e")){const W=Math.max(T,p-l-_);w=ht(u+y,T,W)}if(r.includes("w")){const W=Math.max(T,l+u-_);w=ht(u-y,T,W),R=l+(u-w)}if(r.includes("s")){const W=Math.max(C,m-c-_);I=ht(d+M,C,W)}e.style.left=`${Math.round(R)}px`,e.style.width=`${Math.round(w)}px`,e.style.height=`${Math.round(I)}px`,Ns(e,w,I)}});const f=g=>{!i||g&&s!==null&&g.pointerId!==s||(e.classList.remove("is-dragging","is-resizing"),ma(e),i=null,r="",s=null,pa=!1)};window.addEventListener("pointerup",f),window.addEventListener("pointercancel",f),window.addEventListener("resize",Ca)}function Op(){const n=document.getElementById("config-panel");if(!n)return;const e=!n.classList.contains("is-collapsed");if(e){const i=n.getBoundingClientRect();!n.style.height&&i.height>80&&(n.style.height=`${Math.round(i.height)}px`),ma(n,{collapsed:!0}),n.classList.add("is-collapsed")}else{n.classList.remove("is-collapsed");const i=Mu();i!=null&&i.h&&(n.style.height=`${Math.round(i.h)}px`),Ca(),ma(n,{collapsed:!1})}const t=document.getElementById("cfg-minimize");t&&(t.textContent=e?"+":"—")}function zh(){var c,u,d;const n=document.getElementById("avatar-container"),e=()=>{if(localStorage.getItem("sarra_window_state")){Vc();return}if(localStorage.getItem("avatarPosX")!==null||localStorage.getItem("avatarPosY")!==null){Dp();return}const h=n.offsetWidth||640,f=n.offsetHeight||360;n.style.left=Math.max(0,window.innerWidth/2-h/2)+"px",n.style.top=Math.max(0,window.innerHeight/2-f/2)+"px"};e(),window.addEventListener("resize",e);try{(u=(c=window.sarraAPI)==null?void 0:c.onToggleConfig)==null||u.call(c,()=>Oi())}catch{}if(!OT())FT();else{const h=document.getElementById("scene");h&&(h.style.display="block")}const t=document.getElementById("btn-save-onboard");t&&t.addEventListener("click",BT),(d=document.getElementById("btn-skip-onboarding"))==null||d.addEventListener("click",kT);const i=document.getElementById("btn-create-gemini-key");i&&i.addEventListener("click",async()=>{var h,f;try{await((f=(h=window.sarraAPI)==null?void 0:h.openExternal)==null?void 0:f.call(h,"https://aistudio.google.com/app/apikey"))||window.open("https://aistudio.google.com/app/apikey","_blank","noopener,noreferrer")}catch(g){console.warn("❌ openExternal:",g)}});const r=["#avatar-container","#config-panel","#mic-btn","#cfg-open-btn","#onboarding-modal"];let s=null,o=null;function a(h,f){if(pa)return!0;if(!Number.isFinite(h)||!Number.isFinite(f))return!1;for(const g of r){const _=document.querySelector(g);if(!_||getComputedStyle(_).display==="none")continue;const p=_.getBoundingClientRect();if(!(p.width===0&&p.height===0)&&h>=p.left&&h<=p.right&&f>=p.top&&f<=p.bottom)return!0}return!1}function l(h){var f,g;try{(g=(f=window.sarraAPI)==null?void 0:f.setIgnoreMouseEvents)==null||g.call(f,h)}catch(_){console.warn("⚠️ click-through:",_)}}Xo=()=>{if(s===null||o===null){const h=document.getElementById("config-panel"),f=document.getElementById("onboarding-modal"),g=!!(h&&h.classList.contains("is-open")),_=!!(f&&getComputedStyle(f).display!=="none");l(!(g||_));return}l(!a(s,o))},window.addEventListener("mousemove",h=>{s=h.clientX,o=h.clientY,l(!a(h.clientX,h.clientY))}),window.addEventListener("mouseleave",()=>{pa||l(!0)}),GT(l),WT(),VT(),Vc(),HT(),Yr()}function gt(){const n=document.getElementById("saved-badge");n&&(n.textContent="modifications non enregistrées",n.classList.add("dirty"),n.classList.remove("saved"))}function Fp(n=Date.now()){const e=document.getElementById("saved-badge");e&&(e.textContent=`enregistré ${new Date(n).toLocaleTimeString("fr-FR")}`,e.classList.remove("dirty"),e.classList.add("saved"))}function ga(){var o,a,l,c,u;const n=(d,h,f="non configurée")=>{const g=document.getElementById(d);g&&(g.textContent=h?"configurée":f,g.classList.toggle("on",!!h))},e=((o=document.getElementById("cfg-gemini-key"))==null?void 0:o.value.trim())||localStorage.getItem("geminiKey")||localStorage.getItem("apiKey")||"",t=((a=document.getElementById("cfg-gemini-tts-key"))==null?void 0:a.value.trim())||localStorage.getItem("geminiTTSKey")||"",i=((l=document.getElementById("cfg-groq-key"))==null?void 0:l.value.trim())||localStorage.getItem("groqKey")||"",r=((c=document.getElementById("cfg-openrouter-key"))==null?void 0:c.value.trim())||localStorage.getItem("openRouterKey")||localStorage.getItem("openrouterKey")||"",s=((u=document.getElementById("cfg-elevenlabs-key"))==null?void 0:u.value.trim())||localStorage.getItem("elevenlabsKey")||localStorage.getItem("ttsKey")||"";n("key-badge-gemini",!!e),n("key-badge-gemini-tts",!!(t&&t!==e),"auto (clé Gemini)"),n("key-badge-groq",!!i),n("key-badge-openrouter",!!r),n("key-badge-elevenlabs",!!s)}function Hc(){var i,r;const n=document.getElementById("alt-providers-details");if(!n)return;const e=((i=document.getElementById("cfg-reasoning-provider"))==null?void 0:i.value)||localStorage.getItem("reasoningProvider")||"gemini",t=((r=document.getElementById("cfg-tts-provider"))==null?void 0:r.value)||localStorage.getItem("ttsProvider")||"local-tts";(e!=="gemini"||t!=="local-tts"&&t!=="gemini-tts")&&(n.open=!0)}function qo(n,e){const t=Number(e);return Number.isFinite(t)?n==="cfg-emo-blink-rate"?`${Math.round(t)}s`:n==="cfg-emo-breath"?t.toFixed(3):n==="cfg-lip-smoothing"||n==="cfg-lip-threshold"||n==="cfg-emo-neck"||n==="cfg-emo-gaze"||n==="cfg-emo-brow"?t.toFixed(2):t.toFixed(1):String(e)}function Yo(n){const e=String(n||"").trim();document.querySelectorAll(".btn-preset").forEach(t=>{const i=_u[t.dataset.preset];t.classList.toggle("active",!!(i&&i.trim()===e))})}let Gh=0;function Wh(n,e=""){clearTimeout(Gh),document.querySelectorAll("#emotion-preview-buttons [data-preview-emotion]").forEach(r=>{r.classList.toggle("active",r.dataset.previewEmotion===n)});const t=["happy","sad","angry","surprised","relaxed"];t.forEach(r=>Tn(r,0)),n&&n!=="neutral"&&(Tn(n,.85),Gh=setTimeout(()=>{t.forEach(r=>Tn(r,0))},2500));const i=document.getElementById("emotion-status");i&&(i.textContent=e?`Aperçu en direct : ${e}`:"",i.className="status ok")}function Xh(n,e,t){if(!n)return;let i=0;n.addEventListener("click",()=>{if(n.dataset.confirmArmed==="true"){clearTimeout(i),delete n.dataset.confirmArmed,n.classList.remove("confirming"),n.dataset.origLabel&&(n.textContent=n.dataset.origLabel),t();return}n.dataset.origLabel=n.textContent,n.dataset.confirmArmed="true",n.textContent=e,n.classList.add("confirming"),clearTimeout(i),i=setTimeout(()=>{delete n.dataset.confirmArmed,n.classList.remove("confirming"),n.dataset.origLabel&&(n.textContent=n.dataset.origLabel)},3500)})}function WT(){var s,o,a,l,c,u,d,h,f,g,_,p,m,y,M,T,C,R,w,I,W,v,S,B,O,G,Y,F,j,X,se;tT(),(s=document.getElementById("cfg-open-btn"))==null||s.addEventListener("click",U=>{U.stopPropagation(),Oi()}),(o=document.getElementById("cfg-close"))==null||o.addEventListener("click",()=>Oi(!1)),(a=document.getElementById("close-footer"))==null||a.addEventListener("click",()=>Oi(!1)),(l=document.getElementById("cfg-minimize"))==null||l.addEventListener("click",()=>Op()),(c=document.getElementById("cfg-reset-layout"))==null||c.addEventListener("click",()=>Hh()),(u=document.getElementById("btn-reset-panel-pos"))==null||u.addEventListener("click",()=>Hh()),(d=document.getElementById("btn-reset-avatar-pos"))==null||d.addEventListener("click",()=>{const U=document.getElementById("avatar-container");if(!U)return;const K=400,ne=400,_e=Math.max(0,Math.round(window.innerWidth/2-K/2)),H=Math.max(0,Math.round(window.innerHeight/2-ne/2));U.style.width=`${K}px`,U.style.height=`${ne}px`,U.style.left=`${_e}px`,U.style.top=`${H}px`,xu()}),document.querySelectorAll("#config-panel .api-link").forEach(U=>{U.addEventListener("click",async K=>{var ne;if(typeof((ne=window.sarraAPI)==null?void 0:ne.openExternal)=="function")try{const _e=new URL(U.href);new Set(["aistudio.google.com","console.cloud.google.com","console.groq.com","openrouter.ai"]).has(_e.hostname)&&(K.preventDefault(),await window.sarraAPI.openExternal(U.href))}catch{}})}),document.querySelectorAll(".btn-eye[data-toggle-secret]").forEach(U=>{U.addEventListener("click",()=>{const K=document.getElementById(U.dataset.toggleSecret);if(!K)return;const ne=K.type==="password";K.type=ne?"text":"password",U.textContent=ne?"🙈":"👁️"})}),(h=document.getElementById("cfg-avatar-name"))==null||h.addEventListener("input",U=>{localStorage.setItem("avatarName",U.target.value.trim()||"Sarra"),gt()}),(f=document.getElementById("cfg-user-name"))==null||f.addEventListener("input",U=>{localStorage.setItem("userName",U.target.value.trim()),gt()}),(g=document.getElementById("cfg-reasoning-provider"))==null||g.addEventListener("change",U=>{localStorage.setItem("reasoningProvider",U.target.value),Hc(),gt()}),(_=document.getElementById("cfg-reasoning-model"))==null||_.addEventListener("change",U=>{localStorage.setItem("reasoningModel",U.target.value),gt()}),(p=document.getElementById("cfg-tts-provider"))==null||p.addEventListener("change",U=>{localStorage.setItem("ttsProvider",U.target.value),Hc(),gt()}),(m=document.getElementById("cfg-browser-voice"))==null||m.addEventListener("change",U=>{localStorage.setItem("selectedVoice",U.target.value),gt()}),(y=document.getElementById("cfg-local-tts-voice"))==null||y.addEventListener("change",U=>{localStorage.setItem("localTtsVoice",U.target.value||"F1"),gt()}),(M=document.getElementById("cfg-elevenlabs-voice"))==null||M.addEventListener("change",U=>{localStorage.setItem("elevenVoiceId",U.target.value),gt()}),(T=document.getElementById("cfg-gemini-tts-voice"))==null||T.addEventListener("change",U=>{localStorage.setItem("geminiTTSVoice",U.target.value),localStorage.setItem("geminiVoice",U.target.value),gt()}),Object.entries({"cfg-lip-sensitivity":"lipSensitivity","cfg-lip-speed":"lipSpeed","cfg-lip-jaw":"lipJaw","cfg-lip-smoothing":"lipSmoothing","cfg-lip-threshold":"lipThreshold","cfg-emo-blink-rate":"emoBlinkRate","cfg-emo-blink":"emoBlink","cfg-emo-neck":"emoNeck","cfg-emo-breath":"emoBreath","cfg-emo-gaze":"emoGaze","cfg-emo-brow":"emoBrow"}).forEach(([U,K])=>{const ne=document.getElementById(U),_e=document.getElementById(`val-${U.replace("cfg-","")}`);ne&&ne.addEventListener("input",()=>{localStorage.setItem(K,ne.value),K==="emoBrow"&&localStorage.setItem("emoAngry",ne.value),_e&&(_e.textContent=qo(U,ne.value)),gt()})}),(C=document.getElementById("cfg-lip-teeth"))==null||C.addEventListener("change",U=>{localStorage.setItem("lipTeeth",String(U.target.checked)),gt()}),(R=document.getElementById("cfg-auto-fallback"))==null||R.addEventListener("change",U=>{localStorage.setItem("autoFallback",String(U.target.checked)),vu(),gt()}),(w=document.getElementById("cfg-screen-vision"))==null||w.addEventListener("change",U=>{localStorage.setItem("screenVision",U.target.checked?"true":"false"),gt()}),(I=document.getElementById("cfg-demo-mode"))==null||I.addEventListener("change",U=>{localStorage.setItem("demoMode",String(U.target.checked)),gt()}),(W=document.getElementById("cfg-memory-enabled"))==null||W.addEventListener("change",U=>{localStorage.setItem("memoryEnabled",String(U.target.checked)),gt()}),(v=document.getElementById("cfg-memory-size"))==null||v.addEventListener("input",U=>{const K=Number.parseInt(U.target.value,10),ne=Math.max(0,Math.min(10,Number.isFinite(K)?K:10));localStorage.setItem("memorySize",String(ne)),Gt=ne?Gt.slice(-ne):[],localStorage.setItem("avatarMemory",JSON.stringify(Gt)),di(),gt()}),[["cfg-gemini-key",["geminiKey","apiKey"]],["cfg-groq-key",["groqKey"]],["cfg-openrouter-key",["openRouterKey","openrouterKey"]],["cfg-elevenlabs-key",["elevenlabsKey","ttsKey"]],["cfg-gemini-tts-key",["geminiTTSKey","geminiTtsKey"]]].forEach(([U,K])=>{const ne=document.getElementById(U);if(!ne)return;const _e=()=>{const H=ne.value.trim();K.forEach($=>localStorage.setItem($,H)),ga(),gt()};ne.addEventListener("change",_e),ne.addEventListener("input",ga)});const t=document.getElementById("cfg-core-directives"),i=document.getElementById("directive-count");t&&i&&t.addEventListener("input",()=>{i.textContent=String(t.value.length),localStorage.setItem("coreDirectives",t.value),Yo(t.value),gt()});const r=U=>{const K=_u[U];K&&t&&(t.value=K,i&&(i.textContent=String(K.length)),localStorage.setItem("coreDirectives",K),Yo(K),gt())};document.querySelectorAll(".btn-preset").forEach(U=>{U.addEventListener("click",()=>r(U.dataset.preset))}),(S=document.getElementById("directive-template"))==null||S.addEventListener("change",U=>{U.target.value&&r(U.target.value),U.target.value=""}),(B=document.getElementById("reset-directives"))==null||B.addEventListener("click",()=>{t&&(t.value="",i&&(i.textContent="0"),localStorage.setItem("coreDirectives",""),Yo(""),gt())}),document.querySelectorAll(".btn-test").forEach(U=>{U.addEventListener("click",async()=>{const K=U.dataset.test;if(!K)return;const ne=document.getElementById(`status-${K}`),_e=U.dataset.origLabel||U.textContent;U.dataset.origLabel=_e,U.disabled=!0,U.textContent="⏳ Test...",ne&&(ne.textContent="Test en cours...",ne.className="status-indicator loading");try{let H;const $=ae=>{var le,Re;return((Re=(le=document.getElementById(ae))==null?void 0:le.value)==null?void 0:Re.trim())||""};if(K==="gemini")H=await XT($("cfg-gemini-key")||Cs());else if(K==="groq")H=await qT($("cfg-groq-key"));else if(K==="openrouter")H=await YT($("cfg-openrouter-key"));else if(K==="elevenlabs")H=await jT($("cfg-elevenlabs-key"));else if(K==="gemini-tts"){const ae=$("cfg-gemini-tts-key")||$("cfg-gemini-key")||Cs();H=await KT(ae)}else if(K==="local-tts"){const ae=$("cfg-local-tts-voice")||"F1";await wa("Bonjour, je suis Sarra, votre assistante vocale locale.",{voice:ae}),H={ok:!0,message:`✅ TTS local (${ae})`}}else if(K==="browser-voice"){$T(),ne&&(ne.textContent="✅ Voix lancée",ne.className="status-indicator success");return}ne&&(ne.textContent=H.ok?H.message||"✅ Valide":`❌ ${H.error}`,ne.className=`status-indicator ${H.ok?"success":"error"}`)}catch(H){ne&&(ne.textContent=H!=null&&H.message?`❌ ${H.message}`:"❌ Erreur réseau",ne.className="status-indicator error")}finally{U.disabled=!1,U.textContent=_e}})}),(O=document.getElementById("btn-test-vision"))==null||O.addEventListener("click",async()=>{const U=document.getElementById("btn-test-vision"),K=document.getElementById("status-vision"),ne=document.getElementById("vision-preview");if(!U)return;const _e=U.textContent;U.disabled=!0,U.textContent="⏳ Capture...",K&&(K.textContent="Capture en cours...",K.className="status-indicator loading");try{const H=performance.now(),$=await fp();if(!$)throw new Error("Capture indisponible (Electron ou backend 3000)");ne&&(ne.src=`data:${$.mimeType};base64,${$.data}`,ne.style.display="block"),K&&(K.textContent=`✅ Capture OK (${Math.round(performance.now()-H)} ms)`,K.className="status-indicator success")}catch(H){ne&&(ne.style.display="none"),K&&(K.textContent=`❌ ${H.message}`,K.className="status-indicator error")}finally{U.disabled=!1,U.textContent=_e}}),(G=document.getElementById("btn-auto-calibrate"))==null||G.addEventListener("click",ZT),(Y=document.getElementById("btn-test-lipsync"))==null||Y.addEventListener("click",()=>{var ne;const K=`Bonjour, je suis ${((ne=localStorage.getItem("avatarName"))==null?void 0:ne.trim())||"Sarra"}. Enchantée de faire votre connaissance.`;typeof Hn=="function"?Hn(K):typeof Xn=="function"&&Xn(K)}),(F=document.getElementById("btn-reset-lipsync"))==null||F.addEventListener("click",()=>{Object.entries({"cfg-lip-sensitivity":["lipSensitivity","1"],"cfg-lip-speed":["lipSpeed","1"],"cfg-lip-jaw":["lipJaw","1"],"cfg-lip-smoothing":["lipSmoothing","0.1"],"cfg-lip-threshold":["lipThreshold","0.05"]}).forEach(([_e,[H,$]])=>{const ae=document.getElementById(_e);ae&&(ae.value=$),localStorage.setItem(H,$);const le=document.getElementById(`val-${_e.replace("cfg-","")}`);le&&(le.textContent=qo(_e,$))});const K=document.getElementById("cfg-lip-teeth");K&&(K.checked=!0),localStorage.setItem("lipTeeth","true"),gt();const ne=document.getElementById("calibration-status");ne&&(ne.textContent="Réglages lipsync remis par défaut.",ne.className="status warn")}),document.querySelectorAll("#emotion-preview-buttons [data-preview-emotion]").forEach(U=>{U.addEventListener("click",()=>{Wh(U.dataset.previewEmotion,U.textContent)})}),(j=document.getElementById("btn-reset-emotions"))==null||j.addEventListener("click",()=>{Object.entries({"cfg-emo-blink-rate":["emoBlinkRate","4"],"cfg-emo-blink":["emoBlink","0.8"],"cfg-emo-neck":["emoNeck","0.08"],"cfg-emo-breath":["emoBreath","0.015"],"cfg-emo-gaze":["emoGaze","0.03"],"cfg-emo-brow":["emoBrow","0.1"]}).forEach(([K,[ne,_e]])=>{const H=document.getElementById(K);H&&(H.value=_e),localStorage.setItem(ne,_e),ne==="emoBrow"&&localStorage.setItem("emoAngry",_e);const $=document.getElementById(`val-${K.replace("cfg-","")}`);$&&($.textContent=qo(K,_e))}),Wh("neutral","Neutre (valeurs par défaut)"),gt()}),(X=document.getElementById("btn-view-memory"))==null||X.addEventListener("click",()=>{di();const U=document.getElementById("memory-status");U&&(U.textContent="Liste actualisée.",U.className="status ok")}),Xh(document.getElementById("btn-clear-memory"),"Confirmer ?",()=>{localStorage.removeItem("avatarMemory"),Gt=[],di();const U=document.getElementById("memory-status");U&&(U.textContent="Mémoire effacée.",U.className="status ok")}),Xh(document.getElementById("btn-factory-reset"),"Confirmer reset ?",JT),(se=document.getElementById("cfg-save"))==null||se.addEventListener("click",Vp),"speechSynthesis"in window&&window.speechSynthesis.addEventListener("voiceschanged",zc),kp(),zc(),di(),Yr()}async function XT(n){var i;if(!n||n.length<20)return{ok:!1,error:"Clé trop courte"};const e=[fu(),...ua].filter((r,s,o)=>r&&o.indexOf(r)===s);let t="Erreur réseau";for(const r of e)try{const s=await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(r)}:generateContent?key=${encodeURIComponent(n)}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:"Hi"}]}]}),signal:AbortSignal.timeout(8e3)});if(s.ok)return{ok:!0,message:`✅ Valide (${r})`};if(t=((i=(await s.json().catch(()=>({}))).error)==null?void 0:i.message)||`HTTP ${s.status}`,!(s.status===503||s.status===429||s.status===404))break}catch(s){(s==null?void 0:s.name)!=="AbortError"&&(t="Erreur réseau")}return{ok:!1,error:t}}async function qT(n){var e;if(!n||!n.startsWith("gsk_"))return{ok:!1,error:"Format invalide (gsk_...)"};try{const t=await fetch("https://api.groq.com/openai/v1/chat/completions",{method:"POST",headers:{Authorization:`Bearer ${n}`,"Content-Type":"application/json"},body:JSON.stringify({model:"llama-3.3-70b-versatile",messages:[{role:"user",content:"Hi"}]})});if(t.ok)return{ok:!0};const i=await t.json().catch(()=>({})),r=((e=i==null?void 0:i.error)==null?void 0:e.message)||"";return/developer role|team owners/i.test(r)?{ok:!1,error:"Compte Groq sans rôle développeur : créez la clé depuis un compte propriétaire"}:{ok:!1,error:r||`HTTP ${t.status}`}}catch{return{ok:!1,error:"Erreur réseau"}}}let wo=null;async function Bp(){if(wo)return wo;const n=await fetch("https://openrouter.ai/api/v1/models");if(!n.ok)throw new Error(`HTTP ${n.status}`);const e=await n.json().catch(()=>({})),t=Array.isArray(e==null?void 0:e.data)?e.data:[],i=t.find(r=>typeof r.id=="string"&&r.id.endsWith(":free"))||t[0];if(!(i!=null&&i.id))throw new Error("Aucun modèle OpenRouter disponible");return wo=i.id,wo}async function YT(n){if(!n||!n.startsWith("sk-or-"))return{ok:!1,error:"Format invalide"};try{const e={Authorization:`Bearer ${n}`,"Content-Type":"application/json","HTTP-Referer":"https://sarra-final.local","X-Title":"Sarra Final Avatar"},i=[await Bp(),"meta-llama/llama-3.3-70b-instruct:free","google/gemini-2.0-flash-exp:free"].filter((s,o,a)=>s&&a.indexOf(s)===o);let r=0;for(const s of i){const o=await fetch("https://openrouter.ai/api/v1/chat/completions",{method:"POST",headers:e,body:JSON.stringify({model:s,messages:[{role:"user",content:"Hi"}],max_tokens:5})});if(o.ok)return{ok:!0};if(r=o.status,o.status!==404&&o.status!==503&&o.status!==429)break}return{ok:!1,error:`HTTP ${r}`}}catch{return{ok:!1,error:"Erreur réseau"}}}async function jT(n){if(!n)return{ok:!1,error:"Clé manquante"};try{const e=await fetch("https://api.elevenlabs.io/v1/user",{headers:{"xi-api-key":n}});return e.ok?{ok:!0}:{ok:!1,error:`HTTP ${e.status}`}}catch{return{ok:!1,error:"Erreur réseau"}}}async function KT(n){var s,o;if(!n||n.length<20)return{ok:!1,error:"Clé Gemini manquante"};const e=Rp(),t=((s=document.getElementById("cfg-avatar-name"))==null?void 0:s.value.trim())||localStorage.getItem("avatarName")||"Sarra",i=((o=document.getElementById("cfg-user-name"))==null?void 0:o.value.trim())||localStorage.getItem("userName")||"",r=`Bonjour${i?` ${i}`:""}, je suis ${t}. Voici ma voix par défaut.`;try{return localStorage.setItem("geminiTTSKey",n),localStorage.setItem("geminiTtsKey",n),await Cp(r,{key:n,voiceName:e,model:ca[0]}),{ok:!0,message:`✅ Voix "${e}"`}}catch(a){return{ok:!1,error:(a==null?void 0:a.message)||"TTS indisponible"}}}function $T(){var r,s,o;const n=((r=document.getElementById("cfg-avatar-name"))==null?void 0:r.value.trim())||localStorage.getItem("avatarName")||"Sarra",e=((s=document.getElementById("cfg-user-name"))==null?void 0:s.value.trim())||localStorage.getItem("userName")||"",t=new SpeechSynthesisUtterance(`Bonjour${e?` ${e}`:""}, je suis ${n}.`);t.lang="fr-FR";const i=(o=document.getElementById("cfg-browser-voice"))==null?void 0:o.value;if(i){localStorage.setItem("selectedVoice",i);const a=speechSynthesis.getVoices().find(l=>l.name===i);a&&(t.voice=a)}speechSynthesis.cancel(),speechSynthesis.speak(t)}async function ZT(){const n=document.getElementById("calibration-status");n&&(n.textContent="🎯 Calibration en cours... Sarra va prononcer une phrase test.",n.className="status warn");const e="Bonjour, je suis Sarra. Comment allez-vous aujourd'hui ?";typeof Hn=="function"?await Hn(e):typeof Xn=="function"&&Xn(e);const t=Math.min(1.5,.8+e.length/200),i=document.getElementById("cfg-lip-sensitivity"),r=document.getElementById("val-lip-sensitivity");i&&(i.value=t.toFixed(1)),r&&(r.textContent=t.toFixed(1)),localStorage.setItem("lipSensitivity",t.toFixed(1)),n&&(n.textContent=`✅ Calibration terminée. Sensibilité ajustée à ${t.toFixed(1)}`,n.className="status ok")}function kp(){var p;const n=(m,y,M)=>{const T=document.getElementById(m);T&&(T.value=localStorage.getItem(y)??M)};n("cfg-avatar-name","avatarName","Sarra"),n("cfg-user-name","userName",""),qr.includes(localStorage.getItem("reasoningModel"))||localStorage.setItem("reasoningModel",Bh),localStorage.getItem("reasoningProvider")===null&&localStorage.setItem("reasoningProvider","gemini"),n("cfg-reasoning-provider","reasoningProvider","gemini"),n("cfg-reasoning-model","reasoningModel",Bh),localStorage.getItem("ttsProvider")===null&&localStorage.setItem("ttsProvider","local-tts"),localStorage.getItem("localTtsVoice")===null&&localStorage.setItem("localTtsVoice","F1"),localStorage.getItem("geminiTTSVoice")===null&&localStorage.setItem("geminiTTSVoice",localStorage.getItem("geminiVoice")||"Kore"),localStorage.getItem("geminiVoice")===null&&localStorage.setItem("geminiVoice",localStorage.getItem("geminiTTSVoice")||"Kore"),n("cfg-tts-provider","ttsProvider","local-tts"),n("cfg-local-tts-voice","localTtsVoice","F1");const e=localStorage.getItem("geminiKey")||localStorage.getItem("apiKey")||"";if(localStorage.getItem("geminiTTSKey")===null&&localStorage.setItem("geminiTTSKey",e),n("cfg-gemini-key","geminiKey",""),!((p=document.getElementById("cfg-gemini-key"))!=null&&p.value)){const m=document.getElementById("cfg-gemini-key");m&&(m.value=e)}n("cfg-groq-key","groqKey","");const t=document.getElementById("cfg-openrouter-key");t&&(t.value=localStorage.getItem("openRouterKey")??localStorage.getItem("openrouterKey")??""),n("cfg-elevenlabs-key","elevenlabsKey",localStorage.getItem("ttsKey")||""),n("cfg-gemini-tts-key","geminiTTSKey",localStorage.getItem("geminiTtsKey")||e),n("cfg-elevenlabs-voice","elevenVoiceId","Rachel");const i=document.getElementById("cfg-gemini-tts-voice");i&&(i.value=localStorage.getItem("geminiTTSVoice")||localStorage.getItem("geminiVoice")||"Kore"),n("cfg-core-directives","coreDirectives",_u.friendly);const r=document.getElementById("cfg-memory-enabled");r&&(r.checked=localStorage.getItem("memoryEnabled")!=="false");const s=Number.parseInt(localStorage.getItem("memorySize")||"10",10),o=Math.max(0,Math.min(10,Number.isFinite(s)?s:10)),a=document.getElementById("cfg-memory-size");a&&(a.value=String(o)),n("cfg-lip-sensitivity","lipSensitivity","1"),n("cfg-lip-speed","lipSpeed","1"),n("cfg-lip-jaw","lipJaw","1"),n("cfg-lip-smoothing","lipSmoothing","0.1"),n("cfg-lip-threshold","lipThreshold","0.05"),n("cfg-emo-blink-rate","emoBlinkRate","4"),n("cfg-emo-blink","emoBlink","0.8"),n("cfg-emo-neck","emoNeck","0.08"),n("cfg-emo-breath","emoBreath","0.015"),n("cfg-emo-gaze","emoGaze","0.03"),n("cfg-emo-brow","emoBrow",localStorage.getItem("emoAngry")||"0.1"),document.querySelectorAll('#config-panel input[type="range"]').forEach(m=>{const y=document.getElementById(`val-${m.id.replace("cfg-","")}`);y&&(y.textContent=qo(m.id,m.value))});const l=document.getElementById("cfg-lip-teeth");l&&(l.checked=localStorage.getItem("lipTeeth")!=="false");const c=document.getElementById("cfg-auto-fallback");c&&(c.checked=localStorage.getItem("autoFallback")!=="false");const u=document.getElementById("cfg-core-directives"),d=document.getElementById("directive-count");d&&u&&(d.textContent=String(u.value.length),Yo(u.value));const h=document.getElementById("cfg-demo-mode");h&&(h.checked=localStorage.getItem("demoMode")==="true"),localStorage.getItem("screenVision")===null&&localStorage.setItem("screenVision","true");const f=document.getElementById("cfg-screen-vision");f&&(f.checked=oa());const g=document.getElementById("cfg-minimize"),_=document.getElementById("config-panel");g&&_&&(g.textContent=_.classList.contains("is-collapsed")?"+":"—"),localStorage.setItem("apiKey",e),localStorage.setItem("emoAngry",localStorage.getItem("emoBrow")||"0.1"),vu(),ga(),Hc(),Dp(),Yr(),Fp()}function Vp(){var l,c,u,d,h,f,g;const n=(_,p)=>{const m=document.getElementById(_);m&&localStorage.setItem(p,m.value)},e=((l=document.getElementById("cfg-avatar-name"))==null?void 0:l.value.trim())||"Sarra",t=((c=document.getElementById("cfg-user-name"))==null?void 0:c.value.trim())||"";localStorage.setItem("avatarName",e),localStorage.setItem("userName",t),n("cfg-gemini-key","geminiKey"),n("cfg-groq-key","groqKey"),n("cfg-openrouter-key","openRouterKey"),n("cfg-elevenlabs-key","elevenlabsKey"),n("cfg-gemini-tts-key","geminiTTSKey"),n("cfg-browser-voice","selectedVoice"),n("cfg-local-tts-voice","localTtsVoice"),n("cfg-elevenlabs-voice","elevenVoiceId"),n("cfg-gemini-tts-voice","geminiTTSVoice"),n("cfg-reasoning-provider","reasoningProvider"),n("cfg-reasoning-model","reasoningModel"),n("cfg-tts-provider","ttsProvider"),n("cfg-core-directives","coreDirectives");const i=((u=document.getElementById("cfg-memory-enabled"))==null?void 0:u.checked)??!0;localStorage.setItem("memoryEnabled",String(i));const r=document.getElementById("cfg-memory-size"),s=Number.parseInt((r==null?void 0:r.value)||"10",10),o=Math.max(0,Math.min(10,Number.isFinite(s)?s:10));r&&(r.value=String(o)),localStorage.setItem("memorySize",String(o)),Gt=o?Gt.slice(-o):[],localStorage.setItem("avatarMemory",JSON.stringify(Gt)),n("cfg-lip-sensitivity","lipSensitivity"),n("cfg-lip-speed","lipSpeed"),n("cfg-lip-jaw","lipJaw"),n("cfg-lip-smoothing","lipSmoothing"),n("cfg-lip-threshold","lipThreshold"),n("cfg-emo-blink-rate","emoBlinkRate"),n("cfg-emo-blink","emoBlink"),n("cfg-emo-neck","emoNeck"),n("cfg-emo-breath","emoBreath"),n("cfg-emo-gaze","emoGaze"),n("cfg-emo-brow","emoBrow"),localStorage.setItem("apiKey",localStorage.getItem("geminiKey")||""),localStorage.setItem("openrouterKey",localStorage.getItem("openRouterKey")||""),localStorage.setItem("ttsKey",localStorage.getItem("elevenlabsKey")||""),localStorage.setItem("geminiTtsKey",localStorage.getItem("geminiTTSKey")||""),localStorage.setItem("geminiVoice",localStorage.getItem("geminiTTSVoice")||"Kore"),localStorage.setItem("emoAngry",localStorage.getItem("emoBrow")||"0.1"),localStorage.setItem("ttsProvider",Tp()),localStorage.setItem("lipTeeth",String(((d=document.getElementById("cfg-lip-teeth"))==null?void 0:d.checked)??!0)),localStorage.setItem("autoFallback",String(((h=document.getElementById("cfg-auto-fallback"))==null?void 0:h.checked)??!0)),localStorage.setItem("screenVision",String(((f=document.getElementById("cfg-screen-vision"))==null?void 0:f.checked)??!0)),localStorage.setItem("demoMode",String(((g=document.getElementById("cfg-demo-mode"))==null?void 0:g.checked)??!1)),vu(),ga(),xu(),ma(document.getElementById("config-panel")),di(),Fp();const a=document.getElementById("save-status");a&&(a.textContent="✅ Configuration sauvegardée comme défaut.",a.className="save-state success",setTimeout(()=>{a.textContent=""},3e3))}function JT(){["avatarName","userName","onboardingSkipped","geminiKey","groqKey","openRouterKey","openrouterKey","elevenlabsKey","geminiTTSKey","geminiTtsKey","apiKey","ttsKey","coreDirectives","memoryEnabled","memorySize","lipSensitivity","lipSpeed","lipJaw","lipSmoothing","lipThreshold","lipTeeth","emoBlinkRate","emoBlink","emoNeck","emoBreath","emoGaze","emoBrow","emoAngry","reasoningProvider","reasoningModel","ttsProvider","autoFallback","screenVision","demoMode","selectedVoice","localTtsVoice","elevenVoiceId","geminiVoice","geminiTTSVoice","avatarMemory","sarra_window_state",Ra].forEach(e=>localStorage.removeItem(e)),location.reload()}function di(){const n=document.getElementById("memory-preview"),e=document.getElementById("memory-stats");let t=[];try{t=JSON.parse(localStorage.getItem("avatarMemory")||"[]")}catch{t=[]}Array.isArray(t)||(t=[]);const i=Math.max(0,Math.min(10,Number.parseInt(localStorage.getItem("memorySize")||"10",10)||10));if(e){const r=document.createElement("span");r.innerHTML=`échanges <b>${t.length}</b>`;const s=document.createElement("span");s.innerHTML=`plafond <b>${i}</b>`,e.replaceChildren(r,s)}if(n){if(n.replaceChildren(),!t.length){const r=document.createElement("li");r.className="note",r.textContent="Aucun souvenir pour le moment : les échanges s’ajoutent automatiquement.",n.appendChild(r);return}t.forEach((r,s)=>{const o=document.createElement("li"),a=document.createElement("span");a.className="kind",a.textContent="Échange";const l=document.createElement("span");l.className="text",l.textContent=r;const c=document.createElement("button");c.type="button",c.textContent="Oublier",c.addEventListener("click",()=>{Gt=t.filter((d,h)=>h!==s),localStorage.setItem("avatarMemory",JSON.stringify(Gt)),di();const u=document.getElementById("memory-status");u&&(u.textContent="Souvenir oublié.",u.className="status ok")}),o.append(a,l,c),n.appendChild(o)})}}function zc(){var s;const n=document.getElementById("cfg-browser-voice");if(!n)return;n.replaceChildren();const e=((s=window.speechSynthesis)==null?void 0:s.getVoices())||[],t=e.filter(o=>(o.lang||"").toLowerCase().startsWith("fr")),i=t.length?t:e;if(!i.length){const o=document.createElement("option");o.value="",o.textContent="Voix système par défaut",n.appendChild(o);return}i.forEach(o=>{const a=document.createElement("option");a.value=o.name,a.textContent=`${o.name} (${o.lang})`,n.appendChild(a)});const r=localStorage.getItem("selectedVoice");r&&i.some(o=>o.name===r)&&(n.value=r)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",zh):zh();window.askSarra=Or;window.askSarraDirect=Or;window.speakWithBestVoice=Hn;window.speakWithLocalTts=wa;window.__sarra=window.__sarra||{};window.__sarra.toggleConfigPanel=Oi;
