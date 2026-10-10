(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pl="170",hu=0,Jl=1,du=2,jh=1,Wh=2,In=3,Hn=0,zt=1,Jt=2,si=0,Mi=1,Si=2,Ql=3,ec=4,uu=5,xi=100,fu=101,pu=102,mu=103,gu=104,bu=200,_u=201,vu=202,xu=203,mo=204,go=205,yu=206,Mu=207,Su=208,Eu=209,Tu=210,Au=211,wu=212,Ru=213,ku=214,bo=0,_o=1,vo=2,is=3,xo=4,yo=5,ta=6,Mo=7,Xh=0,Cu=1,Pu=2,ri=0,Lu=1,Iu=2,Du=3,qh=4,Uu=5,Nu=6,Fu=7,tc="attached",Ou="detached",Kh=300,ss=301,rs=302,So=303,Eo=304,la=306,as=1e3,ei=1001,na=1002,Lt=1003,Yh=1004,Ns=1005,Ot=1006,jr=1007,Nn=1008,Gn=1009,$h=1010,Zh=1011,js=1012,ml=1013,Ei=1014,dn=1015,er=1016,gl=1017,bl=1018,os=1020,Jh=35902,Qh=1021,ed=1022,en=1023,td=1024,nd=1025,Qi=1026,ls=1027,ca=1028,_l=1029,id=1030,vl=1031,xl=1033,Wr=33776,Xr=33777,qr=33778,Kr=33779,To=35840,Ao=35841,wo=35842,Ro=35843,ko=36196,Co=37492,Po=37496,Lo=37808,Io=37809,Do=37810,Uo=37811,No=37812,Fo=37813,Oo=37814,Bo=37815,zo=37816,Ho=37817,Go=37818,Vo=37819,jo=37820,Wo=37821,Yr=36492,Xo=36494,qo=36495,sd=36283,Ko=36284,Yo=36285,$o=36286,rd=2200,ad=2201,Bu=2202,Ws=2300,Xs=2301,_a=2302,$i=2400,Zi=2401,ia=2402,yl=2500,zu=2501,Hu=0,od=1,Zo=2,Gu=3200,Vu=3201,ld=0,ju=1,Qn="",ft="srgb",It="srgb-linear",ha="linear",et="srgb",Ri=7680,nc=519,Wu=512,Xu=513,qu=514,cd=515,Ku=516,Yu=517,$u=518,Zu=519,Jo=35044,ic="300 es",Fn=2e3,sa=2001;class Ti{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let sc=1234567;const Bs=Math.PI/180,cs=180/Math.PI;function un(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Et[s&255]+Et[s>>8&255]+Et[s>>16&255]+Et[s>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]).toLowerCase()}function wt(s,e,t){return Math.max(e,Math.min(t,s))}function Ml(s,e){return(s%e+e)%e}function Ju(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Qu(s,e,t){return s!==e?(t-s)/(e-s):0}function zs(s,e,t){return(1-t)*s+t*e}function ef(s,e,t,n){return zs(s,e,1-Math.exp(-t*n))}function tf(s,e=1){return e-Math.abs(Ml(s,e*2)-e)}function nf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function sf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function rf(s,e){return s+Math.floor(Math.random()*(e-s+1))}function af(s,e){return s+Math.random()*(e-s)}function of(s){return s*(.5-Math.random())}function lf(s){s!==void 0&&(sc=s);let e=sc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cf(s){return s*Bs}function hf(s){return s*cs}function df(s){return(s&s-1)===0&&s!==0}function uf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ff(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function pf(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),d=a((e+n)/2),h=r((e-n)/2),u=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*d,l*h,l*u,o*c);break;case"YZY":s.set(l*u,o*d,l*h,o*c);break;case"ZXZ":s.set(l*h,l*u,o*d,o*c);break;case"XZX":s.set(o*d,l*g,l*f,o*c);break;case"YXY":s.set(l*f,o*d,l*g,o*c);break;case"ZYZ":s.set(l*g,l*f,o*d,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function hn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Qe(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const es={DEG2RAD:Bs,RAD2DEG:cs,generateUUID:un,clamp:wt,euclideanModulo:Ml,mapLinear:Ju,inverseLerp:Qu,lerp:zs,damp:ef,pingpong:tf,smoothstep:nf,smootherstep:sf,randInt:rf,randFloat:af,randFloatSpread:of,seededRandom:lf,degToRad:cf,radToDeg:hf,isPowerOfTwo:df,ceilPowerOfTwo:uf,floorPowerOfTwo:ff,setQuaternionFromProperEuler:pf,normalize:Qe,denormalize:hn};class Te{constructor(e=0,t=0){Te.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class De{constructor(e,t,n,i,r,a,o,l,c){De.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=i,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],h=n[7],u=n[2],f=n[5],g=n[8],b=i[0],m=i[3],p=i[6],y=i[1],S=i[4],_=i[7],C=i[2],w=i[5],M=i[8];return r[0]=a*b+o*y+l*C,r[3]=a*m+o*S+l*w,r[6]=a*p+o*_+l*M,r[1]=c*b+d*y+h*C,r[4]=c*m+d*S+h*w,r[7]=c*p+d*_+h*M,r[2]=u*b+f*y+g*C,r[5]=u*m+f*S+g*w,r[8]=u*p+f*_+g*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*r*d+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*a-o*c,u=o*l-d*r,f=c*r-a*l,g=t*h+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/g;return e[0]=h*b,e[1]=(i*c-d*n)*b,e[2]=(o*n-i*a)*b,e[3]=u*b,e[4]=(d*t-i*l)*b,e[5]=(i*r-o*t)*b,e[6]=f*b,e[7]=(n*l-c*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(va.makeScale(e,t)),this}rotate(e){return this.premultiply(va.makeRotation(-e)),this}translate(e,t){return this.premultiply(va.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const va=new De;function hd(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function qs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function mf(){const s=qs("canvas");return s.style.display="block",s}const rc={};function Fs(s){s in rc||(rc[s]=!0,console.warn(s))}function gf(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function bf(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function _f(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Be={enabled:!0,workingColorSpace:It,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===et&&(s.r=Bn(s.r),s.g=Bn(s.g),s.b=Bn(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===et&&(s.r=ts(s.r),s.g=ts(s.g),s.b=ts(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Qn?ha:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Bn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ts(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const ac=[.64,.33,.3,.6,.15,.06],oc=[.2126,.7152,.0722],lc=[.3127,.329],cc=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hc=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Be.define({[It]:{primaries:ac,whitePoint:lc,transfer:ha,toXYZ:cc,fromXYZ:hc,luminanceCoefficients:oc,workingColorSpaceConfig:{unpackColorSpace:ft},outputColorSpaceConfig:{drawingBufferColorSpace:ft}},[ft]:{primaries:ac,whitePoint:lc,transfer:et,toXYZ:cc,fromXYZ:hc,luminanceCoefficients:oc,outputColorSpaceConfig:{drawingBufferColorSpace:ft}}});let ki;class vf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ki===void 0&&(ki=qs("canvas")),ki.width=e.width,ki.height=e.height;const n=ki.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ki}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Bn(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Bn(t[n]/255)*255):t[n]=Bn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xf=0;class dd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=un(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(xa(i[a].image)):r.push(xa(i[a]))}else r=xa(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function xa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?vf.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yf=0;class mt extends Ti{constructor(e=mt.DEFAULT_IMAGE,t=mt.DEFAULT_MAPPING,n=ei,i=ei,r=Ot,a=Nn,o=en,l=Gn,c=mt.DEFAULT_ANISOTROPY,d=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=un(),this.name="",this.source=new dd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case as:e.x=e.x-Math.floor(e.x);break;case ei:e.x=e.x<0?0:1;break;case na:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case as:e.y=e.y-Math.floor(e.y);break;case ei:e.y=e.y<0?0:1;break;case na:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mt.DEFAULT_IMAGE=null;mt.DEFAULT_MAPPING=Kh;mt.DEFAULT_ANISOTROPY=1;class qe{constructor(e=0,t=0,n=0,i=1){qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],d=l[4],h=l[8],u=l[1],f=l[5],g=l[9],b=l[2],m=l[6],p=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+b)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,_=(f+1)/2,C=(p+1)/2,w=(d+u)/4,M=(h+b)/4,A=(g+m)/4;return S>_&&S>C?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=w/n,r=M/n):_>C?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=w/i,r=A/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=M/r,i=A/r),this.set(n,i,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(h-b)*(h-b)+(u-d)*(u-d));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-b)/y,this.z=(u-d)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mf extends Ti{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new qe(0,0,e,t),this.scissorTest=!1,this.viewport=new qe(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new mt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new dd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ai extends Mf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ud extends mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sf extends mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],d=n[i+2],h=n[i+3];const u=r[a+0],f=r[a+1],g=r[a+2],b=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h;return}if(o===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=b;return}if(h!==b||l!==u||c!==f||d!==g){let m=1-o;const p=l*u+c*f+d*g+h*b,y=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const C=Math.sqrt(S),w=Math.atan2(C,p*y);m=Math.sin(m*w)/C,o=Math.sin(o*w)/C}const _=o*y;if(l=l*m+u*_,c=c*m+f*_,d=d*m+g*_,h=h*m+b*_,m===1-o){const C=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=C,c*=C,d*=C,h*=C}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],d=n[i+3],h=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+d*h+l*f-c*u,e[t+1]=l*g+d*u+c*h-o*f,e[t+2]=c*g+d*f+o*u-l*h,e[t+3]=d*g-o*h-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(i/2),h=o(r/2),u=l(n/2),f=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=u*d*h+c*f*g,this._y=c*f*h-u*d*g,this._z=c*d*g+u*f*h,this._w=c*d*h-u*f*g;break;case"YXZ":this._x=u*d*h+c*f*g,this._y=c*f*h-u*d*g,this._z=c*d*g-u*f*h,this._w=c*d*h+u*f*g;break;case"ZXY":this._x=u*d*h-c*f*g,this._y=c*f*h+u*d*g,this._z=c*d*g+u*f*h,this._w=c*d*h-u*f*g;break;case"ZYX":this._x=u*d*h-c*f*g,this._y=c*f*h+u*d*g,this._z=c*d*g-u*f*h,this._w=c*d*h+u*f*g;break;case"YZX":this._x=u*d*h+c*f*g,this._y=c*f*h+u*d*g,this._z=c*d*g-u*f*h,this._w=c*d*h-u*f*g;break;case"XZY":this._x=u*d*h-c*f*g,this._y=c*f*h-u*d*g,this._z=c*d*g+u*f*h,this._w=c*d*h+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],h=t[10],u=n+o+h;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(d-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(d-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+i*c-r*l,this._y=i*d+a*l+r*o-n*c,this._z=r*d+a*c+n*l-i*o,this._w=a*d-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),h=Math.sin((1-t)*d)/c,u=Math.sin(t*d)/c;return this._w=a*h+this._w*u,this._x=n*h+this._x*u,this._y=i*h+this._y*u,this._z=r*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),d=2*(o*t-r*i),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*d,this.y=n+l*d+o*c-r*h,this.z=i+l*h+r*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ya.copy(this).projectOnVector(e),this.sub(ya)}reflect(e){return this.sub(ya.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ya=new P,dc=new nn;class Wt{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(on.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(on.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=on.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,on):on.fromBufferAttribute(r,a),on.applyMatrix4(e.matrixWorld),this.expandByPoint(on);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),or.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),or.copy(n.boundingBox)),or.applyMatrix4(e.matrixWorld),this.union(or)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,on),on.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ys),lr.subVectors(this.max,ys),Ci.subVectors(e.a,ys),Pi.subVectors(e.b,ys),Li.subVectors(e.c,ys),Wn.subVectors(Pi,Ci),Xn.subVectors(Li,Pi),ci.subVectors(Ci,Li);let t=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-ci.z,ci.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,ci.z,0,-ci.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-ci.y,ci.x,0];return!Ma(t,Ci,Pi,Li,lr)||(t=[1,0,0,0,1,0,0,0,1],!Ma(t,Ci,Pi,Li,lr))?!1:(cr.crossVectors(Wn,Xn),t=[cr.x,cr.y,cr.z],Ma(t,Ci,Pi,Li,lr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,on).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(on).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Tn=[new P,new P,new P,new P,new P,new P,new P,new P],on=new P,or=new Wt,Ci=new P,Pi=new P,Li=new P,Wn=new P,Xn=new P,ci=new P,ys=new P,lr=new P,cr=new P,hi=new P;function Ma(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){hi.fromArray(s,r);const o=i.x*Math.abs(hi.x)+i.y*Math.abs(hi.y)+i.z*Math.abs(hi.z),l=e.dot(hi),c=t.dot(hi),d=n.dot(hi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Ef=new Wt,Ms=new P,Sa=new P;class xn{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ef.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ms.subVectors(e,this.center);const t=Ms.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ms,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ms.copy(e.center).add(Sa)),this.expandByPoint(Ms.copy(e.center).sub(Sa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const An=new P,Ea=new P,hr=new P,qn=new P,Ta=new P,dr=new P,Aa=new P;class tr{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,An)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=An.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(An.copy(this.origin).addScaledVector(this.direction,t),An.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ea.copy(e).add(t).multiplyScalar(.5),hr.copy(t).sub(e).normalize(),qn.copy(this.origin).sub(Ea);const r=e.distanceTo(t)*.5,a=-this.direction.dot(hr),o=qn.dot(this.direction),l=-qn.dot(hr),c=qn.lengthSq(),d=Math.abs(1-a*a);let h,u,f,g;if(d>0)if(h=a*l-o,u=a*o-l,g=r*d,h>=0)if(u>=-g)if(u<=g){const b=1/d;h*=b,u*=b,f=h*(h+a*u+2*o)+u*(a*h+u+2*l)+c}else u=r,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*l)+c;else u=-r,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*l)+c;else u<=-g?(h=Math.max(0,-(-a*r+o)),u=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+u*(u+2*l)+c):u<=g?(h=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(h=Math.max(0,-(a*r+o)),u=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+u*(u+2*l)+c);else u=a>0?-r:r,h=Math.max(0,-(a*u+o)),f=-h*h+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Ea).addScaledVector(hr,u),f}intersectSphere(e,t){An.subVectors(e.center,this.origin);const n=An.dot(this.direction),i=An.dot(An)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),d>=0?(r=(e.min.y-u.y)*d,a=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,a=(e.min.y-u.y)*d),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,An)!==null}intersectTriangle(e,t,n,i,r){Ta.subVectors(t,e),dr.subVectors(n,e),Aa.crossVectors(Ta,dr);let a=this.direction.dot(Aa),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qn.subVectors(this.origin,e);const l=o*this.direction.dot(dr.crossVectors(qn,dr));if(l<0)return null;const c=o*this.direction.dot(Ta.cross(qn));if(c<0||l+c>a)return null;const d=-o*qn.dot(Aa);return d<0?null:this.at(d/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class we{constructor(e,t,n,i,r,a,o,l,c,d,h,u,f,g,b,m){we.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,d,h,u,f,g,b,m)}set(e,t,n,i,r,a,o,l,c,d,h,u,f,g,b,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=d,p[10]=h,p[14]=u,p[3]=f,p[7]=g,p[11]=b,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new we().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ii.setFromMatrixColumn(e,0).length(),r=1/Ii.setFromMatrixColumn(e,1).length(),a=1/Ii.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),d=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const u=a*d,f=a*h,g=o*d,b=o*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=u-b*c,t[9]=-o*l,t[2]=b-u*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*d,f=l*h,g=c*d,b=c*h;t[0]=u+b*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*d,t[9]=-o,t[2]=f*o-g,t[6]=b+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*d,f=l*h,g=c*d,b=c*h;t[0]=u-b*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*d,t[9]=b-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*d,f=a*h,g=o*d,b=o*h;t[0]=l*d,t[4]=g*c-f,t[8]=u*c+b,t[1]=l*h,t[5]=b*c+u,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,f=a*c,g=o*l,b=o*c;t[0]=l*d,t[4]=b-u*h,t[8]=g*h+f,t[1]=h,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=f*h+g,t[10]=u-b*h}else if(e.order==="XZY"){const u=a*l,f=a*c,g=o*l,b=o*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=u*h+b,t[5]=a*d,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*d,t[10]=b*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tf,e,Af)}lookAt(e,t,n){const i=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),Kn.crossVectors(n,Vt),Kn.lengthSq()===0&&(Math.abs(n.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),Kn.crossVectors(n,Vt)),Kn.normalize(),ur.crossVectors(Vt,Kn),i[0]=Kn.x,i[4]=ur.x,i[8]=Vt.x,i[1]=Kn.y,i[5]=ur.y,i[9]=Vt.y,i[2]=Kn.z,i[6]=ur.z,i[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],h=n[5],u=n[9],f=n[13],g=n[2],b=n[6],m=n[10],p=n[14],y=n[3],S=n[7],_=n[11],C=n[15],w=i[0],M=i[4],A=i[8],x=i[12],v=i[1],R=i[5],L=i[9],F=i[13],O=i[2],G=i[6],W=i[10],J=i[14],V=i[3],se=i[7],ue=i[11],xe=i[15];return r[0]=a*w+o*v+l*O+c*V,r[4]=a*M+o*R+l*G+c*se,r[8]=a*A+o*L+l*W+c*ue,r[12]=a*x+o*F+l*J+c*xe,r[1]=d*w+h*v+u*O+f*V,r[5]=d*M+h*R+u*G+f*se,r[9]=d*A+h*L+u*W+f*ue,r[13]=d*x+h*F+u*J+f*xe,r[2]=g*w+b*v+m*O+p*V,r[6]=g*M+b*R+m*G+p*se,r[10]=g*A+b*L+m*W+p*ue,r[14]=g*x+b*F+m*J+p*xe,r[3]=y*w+S*v+_*O+C*V,r[7]=y*M+S*R+_*G+C*se,r[11]=y*A+S*L+_*W+C*ue,r[15]=y*x+S*F+_*J+C*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],u=e[10],f=e[14],g=e[3],b=e[7],m=e[11],p=e[15];return g*(+r*l*h-i*c*h-r*o*u+n*c*u+i*o*f-n*l*f)+b*(+t*l*f-t*c*u+r*a*u-i*a*f+i*c*d-r*l*d)+m*(+t*c*h-t*o*f-r*a*h+n*a*f+r*o*d-n*c*d)+p*(-i*o*d-t*l*h+t*o*u+i*a*h-n*a*u+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],u=e[10],f=e[11],g=e[12],b=e[13],m=e[14],p=e[15],y=h*m*c-b*u*c+b*l*f-o*m*f-h*l*p+o*u*p,S=g*u*c-d*m*c-g*l*f+a*m*f+d*l*p-a*u*p,_=d*b*c-g*h*c+g*o*f-a*b*f-d*o*p+a*h*p,C=g*h*l-d*b*l-g*o*u+a*b*u+d*o*m-a*h*m,w=t*y+n*S+i*_+r*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/w;return e[0]=y*M,e[1]=(b*u*r-h*m*r-b*i*f+n*m*f+h*i*p-n*u*p)*M,e[2]=(o*m*r-b*l*r+b*i*c-n*m*c-o*i*p+n*l*p)*M,e[3]=(h*l*r-o*u*r-h*i*c+n*u*c+o*i*f-n*l*f)*M,e[4]=S*M,e[5]=(d*m*r-g*u*r+g*i*f-t*m*f-d*i*p+t*u*p)*M,e[6]=(g*l*r-a*m*r-g*i*c+t*m*c+a*i*p-t*l*p)*M,e[7]=(a*u*r-d*l*r+d*i*c-t*u*c-a*i*f+t*l*f)*M,e[8]=_*M,e[9]=(g*h*r-d*b*r-g*n*f+t*b*f+d*n*p-t*h*p)*M,e[10]=(a*b*r-g*o*r+g*n*c-t*b*c-a*n*p+t*o*p)*M,e[11]=(d*o*r-a*h*r-d*n*c+t*h*c+a*n*f-t*o*f)*M,e[12]=C*M,e[13]=(d*b*i-g*h*i+g*n*u-t*b*u-d*n*m+t*h*m)*M,e[14]=(g*o*i-a*b*i-g*n*l+t*b*l+a*n*m-t*o*m)*M,e[15]=(a*h*i-d*o*i+d*n*l-t*h*l-a*n*u+t*o*u)*M,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,d*o+n,d*l-i*a,0,c*l-i*o,d*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,d=a+a,h=o+o,u=r*c,f=r*d,g=r*h,b=a*d,m=a*h,p=o*h,y=l*c,S=l*d,_=l*h,C=n.x,w=n.y,M=n.z;return i[0]=(1-(b+p))*C,i[1]=(f+_)*C,i[2]=(g-S)*C,i[3]=0,i[4]=(f-_)*w,i[5]=(1-(u+p))*w,i[6]=(m+y)*w,i[7]=0,i[8]=(g+S)*M,i[9]=(m-y)*M,i[10]=(1-(u+b))*M,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ii.set(i[0],i[1],i[2]).length();const a=Ii.set(i[4],i[5],i[6]).length(),o=Ii.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],ln.copy(this);const c=1/r,d=1/a,h=1/o;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=d,ln.elements[5]*=d,ln.elements[6]*=d,ln.elements[8]*=h,ln.elements[9]*=h,ln.elements[10]*=h,t.setFromRotationMatrix(ln),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Fn){const l=this.elements,c=2*r/(t-e),d=2*r/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i);let f,g;if(o===Fn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===sa)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Fn){const l=this.elements,c=1/(t-e),d=1/(n-i),h=1/(a-r),u=(t+e)*c,f=(n+i)*d;let g,b;if(o===Fn)g=(a+r)*h,b=-2*h;else if(o===sa)g=r*h,b=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=b,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ii=new P,ln=new we,Tf=new P(0,0,0),Af=new P(1,1,1),Kn=new P,ur=new P,Vt=new P,uc=new we,fc=new nn;class vn{constructor(e=0,t=0,n=0,i=vn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],d=i[9],h=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-wt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return uc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(uc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fc.setFromEuler(this),this.setFromQuaternion(fc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vn.DEFAULT_ORDER="XYZ";class Sl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wf=0;const pc=new P,Di=new nn,wn=new we,fr=new P,Ss=new P,Rf=new P,kf=new nn,mc=new P(1,0,0),gc=new P(0,1,0),bc=new P(0,0,1),_c={type:"added"},Cf={type:"removed"},Ui={type:"childadded",child:null},wa={type:"childremoved",child:null};class lt extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=un(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=lt.DEFAULT_UP.clone();const e=new P,t=new vn,n=new nn,i=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new we},normalMatrix:{value:new De}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.multiply(Di),this}rotateOnWorldAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.premultiply(Di),this}rotateX(e){return this.rotateOnAxis(mc,e)}rotateY(e){return this.rotateOnAxis(gc,e)}rotateZ(e){return this.rotateOnAxis(bc,e)}translateOnAxis(e,t){return pc.copy(e).applyQuaternion(this.quaternion),this.position.add(pc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mc,e)}translateY(e){return this.translateOnAxis(gc,e)}translateZ(e){return this.translateOnAxis(bc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fr.copy(e):fr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(Ss,fr,this.up):wn.lookAt(fr,Ss,this.up),this.quaternion.setFromRotationMatrix(wn),i&&(wn.extractRotation(i.matrixWorld),Di.setFromRotationMatrix(wn),this.quaternion.premultiply(Di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_c),Ui.child=e,this.dispatchEvent(Ui),Ui.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cf),wa.child=e,this.dispatchEvent(wa),wa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_c),Ui.child=e,this.dispatchEvent(Ui),Ui.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,e,Rf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,kf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),h=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}lt.DEFAULT_UP=new P(0,1,0);lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cn=new P,Rn=new P,Ra=new P,kn=new P,Ni=new P,Fi=new P,vc=new P,ka=new P,Ca=new P,Pa=new P,La=new qe,Ia=new qe,Da=new qe;class Qt{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),cn.subVectors(e,t),i.cross(cn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){cn.subVectors(i,t),Rn.subVectors(n,t),Ra.subVectors(e,t);const a=cn.dot(cn),o=cn.dot(Rn),l=cn.dot(Ra),c=Rn.dot(Rn),d=Rn.dot(Ra),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const u=1/h,f=(c*l-o*d)*u,g=(a*d-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,kn.x),l.addScaledVector(a,kn.y),l.addScaledVector(o,kn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return La.setScalar(0),Ia.setScalar(0),Da.setScalar(0),La.fromBufferAttribute(e,t),Ia.fromBufferAttribute(e,n),Da.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(La,r.x),a.addScaledVector(Ia,r.y),a.addScaledVector(Da,r.z),a}static isFrontFacing(e,t,n,i){return cn.subVectors(n,t),Rn.subVectors(e,t),cn.cross(Rn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cn.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),cn.cross(Rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Qt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Ni.subVectors(i,n),Fi.subVectors(r,n),ka.subVectors(e,n);const l=Ni.dot(ka),c=Fi.dot(ka);if(l<=0&&c<=0)return t.copy(n);Ca.subVectors(e,i);const d=Ni.dot(Ca),h=Fi.dot(Ca);if(d>=0&&h<=d)return t.copy(i);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(Ni,a);Pa.subVectors(e,r);const f=Ni.dot(Pa),g=Fi.dot(Pa);if(g>=0&&f<=g)return t.copy(r);const b=f*c-l*g;if(b<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Fi,o);const m=d*g-f*h;if(m<=0&&h-d>=0&&f-g>=0)return vc.subVectors(r,i),o=(h-d)/(h-d+(f-g)),t.copy(i).addScaledVector(vc,o);const p=1/(m+b+u);return a=b*p,o=u*p,t.copy(n).addScaledVector(Ni,a).addScaledVector(Fi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},pr={h:0,s:0,l:0};function Ua(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Be.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Be.workingColorSpace){return this.r=e,this.g=t,this.b=n,Be.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Be.workingColorSpace){if(e=Ml(e,1),t=wt(t,0,1),n=wt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ua(a,r,e+1/3),this.g=Ua(a,r,e),this.b=Ua(a,r,e-1/3)}return Be.toWorkingColorSpace(this,i),this}setStyle(e,t=ft){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ft){const n=fd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bn(e.r),this.g=Bn(e.g),this.b=Bn(e.b),this}copyLinearToSRGB(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ft){return Be.fromWorkingColorSpace(Tt.copy(this),e),Math.round(wt(Tt.r*255,0,255))*65536+Math.round(wt(Tt.g*255,0,255))*256+Math.round(wt(Tt.b*255,0,255))}getHexString(e=ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Be.workingColorSpace){Be.fromWorkingColorSpace(Tt.copy(this),t);const n=Tt.r,i=Tt.g,r=Tt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=d<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Be.workingColorSpace){return Be.fromWorkingColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=ft){Be.fromWorkingColorSpace(Tt.copy(this),e);const t=Tt.r,n=Tt.g,i=Tt.b;return e!==ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Yn),this.setHSL(Yn.h+e,Yn.s+t,Yn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yn),e.getHSL(pr);const n=zs(Yn.h,pr.h,t),i=zs(Yn.s,pr.s,t),r=zs(Yn.l,pr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tt=new ge;ge.NAMES=fd;let Pf=0;class fn extends Ti{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=un(),this.name="",this.blending=Mi,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mo,this.blendDst=go,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ri,this.stencilZFail=Ri,this.stencilZPass=Ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Mi&&(n.blending=this.blending),this.side!==Hn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==mo&&(n.blendSrc=this.blendSrc),this.blendDst!==go&&(n.blendDst=this.blendDst),this.blendEquation!==xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==is&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ri&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ri&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ri&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Bt extends fn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Xh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pt=new P,mr=new Te;class kt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Jo,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)mr.fromBufferAttribute(this,t),mr.applyMatrix3(e),this.setXY(t,mr.x,mr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array),r=Qe(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jo&&(e.usage=this.usage),e}}class pd extends kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class md extends kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class xt extends kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Lf=0;const Kt=new we,Na=new lt,Oi=new P,jt=new Wt,Es=new Wt,_t=new P;class Ht extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=un(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hd(e)?md:pd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new De().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,n){return Kt.makeTranslation(e,t,n),this.applyMatrix4(Kt),this}scale(e,t,n){return Kt.makeScale(e,t,n),this.applyMatrix4(Kt),this}lookAt(e){return Na.lookAt(e),Na.updateMatrix(),this.applyMatrix4(Na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xt(n,3))}else{for(let n=0,i=t.count;n<i;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];jt.setFromBufferAttribute(r),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Es.setFromBufferAttribute(o),this.morphTargetsRelative?(_t.addVectors(jt.min,Es.min),jt.expandByPoint(_t),_t.addVectors(jt.max,Es.max),jt.expandByPoint(_t)):(jt.expandByPoint(Es.min),jt.expandByPoint(Es.max))}jt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)_t.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(_t));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)_t.fromBufferAttribute(o,c),l&&(Oi.fromBufferAttribute(e,c),_t.add(Oi)),i=Math.max(i,n.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let A=0;A<n.count;A++)o[A]=new P,l[A]=new P;const c=new P,d=new P,h=new P,u=new Te,f=new Te,g=new Te,b=new P,m=new P;function p(A,x,v){c.fromBufferAttribute(n,A),d.fromBufferAttribute(n,x),h.fromBufferAttribute(n,v),u.fromBufferAttribute(r,A),f.fromBufferAttribute(r,x),g.fromBufferAttribute(r,v),d.sub(c),h.sub(c),f.sub(u),g.sub(u);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(b.copy(d).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(R),m.copy(h).multiplyScalar(f.x).addScaledVector(d,-g.x).multiplyScalar(R),o[A].add(b),o[x].add(b),o[v].add(b),l[A].add(m),l[x].add(m),l[v].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let A=0,x=y.length;A<x;++A){const v=y[A],R=v.start,L=v.count;for(let F=R,O=R+L;F<O;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const S=new P,_=new P,C=new P,w=new P;function M(A){C.fromBufferAttribute(i,A),w.copy(C);const x=o[A];S.copy(x),S.sub(C.multiplyScalar(C.dot(x))).normalize(),_.crossVectors(w,x);const R=_.dot(l[A])<0?-1:1;a.setXYZW(A,S.x,S.y,S.z,R)}for(let A=0,x=y.length;A<x;++A){const v=y[A],R=v.start,L=v.count;for(let F=R,O=R+L;F<O;F+=3)M(e.getX(F+0)),M(e.getX(F+1)),M(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new P,r=new P,a=new P,o=new P,l=new P,c=new P,d=new P,h=new P;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),b=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,m),d.subVectors(a,r),h.subVectors(i,r),d.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,m),o.add(d),l.add(d),c.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),d.subVectors(a,r),h.subVectors(i,r),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,h=o.normalized,u=new c.constructor(l.length*d);let f=0,g=0;for(let b=0,m=l.length;b<m;b++){o.isInterleavedBufferAttribute?f=l[b]*o.data.stride+o.offset:f=l[b]*d;for(let p=0;p<d;p++)u[g++]=c[f++]}return new kt(u,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ht,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,h=c.length;d<h;d++){const u=c[d],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const f=c[h];d.push(f.toJSON(e.data))}d.length>0&&(i[l]=d,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const d=i[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],h=r[c];for(let u=0,f=h.length;u<f;u++)d.push(h[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xc=new we,di=new tr,gr=new xn,yc=new P,br=new P,_r=new P,vr=new P,Fa=new P,xr=new P,Mc=new P,yr=new P;class ct extends lt{constructor(e=new Ht,t=new Bt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){xr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],h=r[l];d!==0&&(Fa.fromBufferAttribute(h,e),a?xr.addScaledVector(Fa,d):xr.addScaledVector(Fa.sub(t),d))}t.add(xr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere),gr.applyMatrix4(r),di.copy(e.ray).recast(e.near),!(gr.containsPoint(di.origin)===!1&&(di.intersectSphere(gr,yc)===null||di.origin.distanceToSquared(yc)>(e.far-e.near)**2))&&(xc.copy(r).invert(),di.copy(e.ray).applyMatrix4(xc),!(n.boundingBox!==null&&di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,di)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,b=u.length;g<b;g++){const m=u[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),S=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,C=S;_<C;_+=3){const w=o.getX(_),M=o.getX(_+1),A=o.getX(_+2);i=Mr(this,p,e,n,c,d,h,w,M,A),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){const y=o.getX(m),S=o.getX(m+1),_=o.getX(m+2);i=Mr(this,a,e,n,c,d,h,y,S,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,b=u.length;g<b;g++){const m=u[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=y,C=S;_<C;_+=3){const w=_,M=_+1,A=_+2;i=Mr(this,p,e,n,c,d,h,w,M,A),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),b=Math.min(l.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){const y=m,S=m+1,_=m+2;i=Mr(this,a,e,n,c,d,h,y,S,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function If(s,e,t,n,i,r,a,o){let l;if(e.side===zt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Hn,o),l===null)return null;yr.copy(o),yr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(yr);return c<t.near||c>t.far?null:{distance:c,point:yr.clone(),object:s}}function Mr(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,br),s.getVertexPosition(l,_r),s.getVertexPosition(c,vr);const d=If(s,e,t,n,br,_r,vr,Mc);if(d){const h=new P;Qt.getBarycoord(Mc,br,_r,vr,h),i&&(d.uv=Qt.getInterpolatedAttribute(i,o,l,c,h,new Te)),r&&(d.uv1=Qt.getInterpolatedAttribute(r,o,l,c,h,new Te)),a&&(d.normal=Qt.getInterpolatedAttribute(a,o,l,c,h,new P),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new P,materialIndex:0};Qt.getNormal(br,_r,vr,u.normal),d.face=u,d.barycoord=h}return d}class nr extends Ht{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],d=[],h=[];let u=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(d,3)),this.setAttribute("uv",new xt(h,2));function g(b,m,p,y,S,_,C,w,M,A,x){const v=_/M,R=C/A,L=_/2,F=C/2,O=w/2,G=M+1,W=A+1;let J=0,V=0;const se=new P;for(let ue=0;ue<W;ue++){const xe=ue*R-F;for(let Pe=0;Pe<G;Pe++){const Ke=Pe*v-L;se[b]=Ke*y,se[m]=xe*S,se[p]=O,c.push(se.x,se.y,se.z),se[b]=0,se[m]=0,se[p]=w>0?1:-1,d.push(se.x,se.y,se.z),h.push(Pe/M),h.push(1-ue/A),J+=1}}for(let ue=0;ue<A;ue++)for(let xe=0;xe<M;xe++){const Pe=u+xe+G*ue,Ke=u+xe+G*(ue+1),X=u+(xe+1)+G*(ue+1),te=u+(xe+1)+G*ue;l.push(Pe,Ke,te),l.push(Ke,X,te),V+=6}o.addGroup(f,V,x),f+=V,u+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function hs(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Pt(s){const e={};for(let t=0;t<s.length;t++){const n=hs(s[t]);for(const i in n)e[i]=n[i]}return e}function Df(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function gd(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Be.workingColorSpace}const Uf={clone:hs,merge:Pt};var Nf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ff=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class oi extends fn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nf,this.fragmentShader=Ff,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hs(e.uniforms),this.uniformsGroups=Df(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class bd extends lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=Fn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $n=new P,Sc=new Te,Ec=new Te;class Rt extends bd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cs*2*Math.atan(Math.tan(Bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($n.x,$n.y).multiplyScalar(-e/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($n.x,$n.y).multiplyScalar(-e/$n.z)}getViewSize(e,t){return this.getViewBounds(e,Sc,Ec),t.subVectors(Ec,Sc)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Bs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Bi=-90,zi=1;class Of extends lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Rt(Bi,zi,e,t);i.layers=this.layers,this.add(i);const r=new Rt(Bi,zi,e,t);r.layers=this.layers,this.add(r);const a=new Rt(Bi,zi,e,t);a.layers=this.layers,this.add(a);const o=new Rt(Bi,zi,e,t);o.layers=this.layers,this.add(o);const l=new Rt(Bi,zi,e,t);l.layers=this.layers,this.add(l);const c=new Rt(Bi,zi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===sa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,i),e.render(t,d),e.setRenderTarget(h,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class _d extends mt{constructor(e,t,n,i,r,a,o,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:ss,super(e,t,n,i,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Bf extends ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new _d(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ot}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new nr(5,5,5),r=new oi({name:"CubemapFromEquirect",uniforms:hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zt,blending:si});r.uniforms.tEquirect.value=t;const a=new ct(i,r),o=t.minFilter;return t.minFilter===Nn&&(t.minFilter=Ot),new Of(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Oa=new P,zf=new P,Hf=new De;class Jn{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Oa.subVectors(n,t).cross(zf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Oa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Hf.getNormalMatrix(e),i=this.coplanarPoint(Oa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ui=new xn,Sr=new P;class El{constructor(e=new Jn,t=new Jn,n=new Jn,i=new Jn,r=new Jn,a=new Jn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Fn){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],d=i[5],h=i[6],u=i[7],f=i[8],g=i[9],b=i[10],m=i[11],p=i[12],y=i[13],S=i[14],_=i[15];if(n[0].setComponents(l-r,u-c,m-f,_-p).normalize(),n[1].setComponents(l+r,u+c,m+f,_+p).normalize(),n[2].setComponents(l+a,u+d,m+g,_+y).normalize(),n[3].setComponents(l-a,u-d,m-g,_-y).normalize(),n[4].setComponents(l-o,u-h,m-b,_-S).normalize(),t===Fn)n[5].setComponents(l+o,u+h,m+b,_+S).normalize();else if(t===sa)n[5].setComponents(o,h,b,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(e){return ui.center.set(0,0,0),ui.radius=.7071067811865476,ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Sr.x=i.normal.x>0?e.max.x:e.min.x,Sr.y=i.normal.y>0?e.max.y:e.min.y,Sr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Sr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vd(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Gf(s){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,h=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,d),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const d=l.array,h=l.updateRanges;if(s.bindBuffer(c,o),h.length===0)s.bufferSubData(c,0,d);else{h.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<h.length;f++){const g=h[u],b=h[f];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++u,h[u]=b)}h.length=u+1;for(let f=0,g=h.length;f<g;f++){const b=h[f];s.bufferSubData(c,b.start*d.BYTES_PER_ELEMENT,d,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}class Ai extends Ht{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,d=l+1,h=e/o,u=t/l,f=[],g=[],b=[],m=[];for(let p=0;p<d;p++){const y=p*u-a;for(let S=0;S<c;S++){const _=S*h-r;g.push(_,-y,0),b.push(0,0,1),m.push(S/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const S=y+c*p,_=y+c*(p+1),C=y+1+c*(p+1),w=y+1+c*p;f.push(S,_,w),f.push(_,C,w)}this.setIndex(f),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(b,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ai(e.width,e.height,e.widthSegments,e.heightSegments)}}var Vf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jf=`#ifdef USE_ALPHAHASH
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
#endif`,Wf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yf=`#ifdef USE_AOMAP
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
#endif`,$f=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zf=`#ifdef USE_BATCHING
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
#endif`,Jf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ep=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,np=`#ifdef USE_IRIDESCENCE
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
#endif`,ip=`#ifdef USE_BUMPMAP
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
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,up=`#define PI 3.141592653589793
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
} // validated`,fp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pp=`vec3 transformedNormal = objectNormal;
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
#endif`,mp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_p=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vp="gl_FragColor = linearToOutputTexel( gl_FragColor );",xp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yp=`#ifdef USE_ENVMAP
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
#endif`,Mp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sp=`#ifdef USE_ENVMAP
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
#endif`,Ep=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tp=`#ifdef USE_ENVMAP
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
#endif`,Ap=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cp=`#ifdef USE_GRADIENTMAP
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
}`,Pp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dp=`uniform bool receiveShadow;
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
#endif`,Up=`#ifdef USE_ENVMAP
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
#endif`,Np=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Op=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zp=`PhysicalMaterial material;
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
#endif`,Hp=`struct PhysicalMaterial {
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
}`,Gp=`
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
#endif`,Vp=`#if defined( RE_IndirectDiffuse )
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
#endif`,jp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$p=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jp=`#if defined( USE_POINTS_UV )
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
#endif`,Qp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,em=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,im=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sm=`#ifdef USE_MORPHTARGETS
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
#endif`,rm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,am=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,om=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dm=`#ifdef USE_NORMALMAP
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
#endif`,um=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_m=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ym=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Am=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wm=`float getShadowMask() {
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
}`,Rm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,km=`#ifdef USE_SKINNING
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
#endif`,Cm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pm=`#ifdef USE_SKINNING
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
#endif`,Lm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Im=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Um=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nm=`#ifdef USE_TRANSMISSION
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
#endif`,Fm=`#ifdef USE_TRANSMISSION
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
#endif`,Om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vm=`uniform sampler2D t2D;
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
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Km=`#include <common>
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
}`,Ym=`#if DEPTH_PACKING == 3200
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
}`,$m=`#define DISTANCE
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
}`,Zm=`#define DISTANCE
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
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eg=`uniform float scale;
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
}`,tg=`uniform vec3 diffuse;
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
}`,ng=`#include <common>
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
}`,ig=`uniform vec3 diffuse;
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
}`,sg=`#define LAMBERT
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
}`,rg=`#define LAMBERT
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
}`,ag=`#define MATCAP
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
}`,og=`#define MATCAP
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
}`,lg=`#define NORMAL
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
}`,cg=`#define NORMAL
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
}`,hg=`#define PHONG
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
}`,dg=`#define PHONG
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
}`,ug=`#define STANDARD
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
}`,fg=`#define STANDARD
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
}`,pg=`#define TOON
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
}`,mg=`#define TOON
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
}`,gg=`uniform float size;
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
}`,bg=`uniform vec3 diffuse;
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
}`,_g=`#include <common>
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
}`,vg=`uniform vec3 color;
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
}`,xg=`uniform float rotation;
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
}`,yg=`uniform vec3 diffuse;
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
}`,Ne={alphahash_fragment:Vf,alphahash_pars_fragment:jf,alphamap_fragment:Wf,alphamap_pars_fragment:Xf,alphatest_fragment:qf,alphatest_pars_fragment:Kf,aomap_fragment:Yf,aomap_pars_fragment:$f,batching_pars_vertex:Zf,batching_vertex:Jf,begin_vertex:Qf,beginnormal_vertex:ep,bsdfs:tp,iridescence_fragment:np,bumpmap_pars_fragment:ip,clipping_planes_fragment:sp,clipping_planes_pars_fragment:rp,clipping_planes_pars_vertex:ap,clipping_planes_vertex:op,color_fragment:lp,color_pars_fragment:cp,color_pars_vertex:hp,color_vertex:dp,common:up,cube_uv_reflection_fragment:fp,defaultnormal_vertex:pp,displacementmap_pars_vertex:mp,displacementmap_vertex:gp,emissivemap_fragment:bp,emissivemap_pars_fragment:_p,colorspace_fragment:vp,colorspace_pars_fragment:xp,envmap_fragment:yp,envmap_common_pars_fragment:Mp,envmap_pars_fragment:Sp,envmap_pars_vertex:Ep,envmap_physical_pars_fragment:Up,envmap_vertex:Tp,fog_vertex:Ap,fog_pars_vertex:wp,fog_fragment:Rp,fog_pars_fragment:kp,gradientmap_pars_fragment:Cp,lightmap_pars_fragment:Pp,lights_lambert_fragment:Lp,lights_lambert_pars_fragment:Ip,lights_pars_begin:Dp,lights_toon_fragment:Np,lights_toon_pars_fragment:Fp,lights_phong_fragment:Op,lights_phong_pars_fragment:Bp,lights_physical_fragment:zp,lights_physical_pars_fragment:Hp,lights_fragment_begin:Gp,lights_fragment_maps:Vp,lights_fragment_end:jp,logdepthbuf_fragment:Wp,logdepthbuf_pars_fragment:Xp,logdepthbuf_pars_vertex:qp,logdepthbuf_vertex:Kp,map_fragment:Yp,map_pars_fragment:$p,map_particle_fragment:Zp,map_particle_pars_fragment:Jp,metalnessmap_fragment:Qp,metalnessmap_pars_fragment:em,morphinstance_vertex:tm,morphcolor_vertex:nm,morphnormal_vertex:im,morphtarget_pars_vertex:sm,morphtarget_vertex:rm,normal_fragment_begin:am,normal_fragment_maps:om,normal_pars_fragment:lm,normal_pars_vertex:cm,normal_vertex:hm,normalmap_pars_fragment:dm,clearcoat_normal_fragment_begin:um,clearcoat_normal_fragment_maps:fm,clearcoat_pars_fragment:pm,iridescence_pars_fragment:mm,opaque_fragment:gm,packing:bm,premultiplied_alpha_fragment:_m,project_vertex:vm,dithering_fragment:xm,dithering_pars_fragment:ym,roughnessmap_fragment:Mm,roughnessmap_pars_fragment:Sm,shadowmap_pars_fragment:Em,shadowmap_pars_vertex:Tm,shadowmap_vertex:Am,shadowmask_pars_fragment:wm,skinbase_vertex:Rm,skinning_pars_vertex:km,skinning_vertex:Cm,skinnormal_vertex:Pm,specularmap_fragment:Lm,specularmap_pars_fragment:Im,tonemapping_fragment:Dm,tonemapping_pars_fragment:Um,transmission_fragment:Nm,transmission_pars_fragment:Fm,uv_pars_fragment:Om,uv_pars_vertex:Bm,uv_vertex:zm,worldpos_vertex:Hm,background_vert:Gm,background_frag:Vm,backgroundCube_vert:jm,backgroundCube_frag:Wm,cube_vert:Xm,cube_frag:qm,depth_vert:Km,depth_frag:Ym,distanceRGBA_vert:$m,distanceRGBA_frag:Zm,equirect_vert:Jm,equirect_frag:Qm,linedashed_vert:eg,linedashed_frag:tg,meshbasic_vert:ng,meshbasic_frag:ig,meshlambert_vert:sg,meshlambert_frag:rg,meshmatcap_vert:ag,meshmatcap_frag:og,meshnormal_vert:lg,meshnormal_frag:cg,meshphong_vert:hg,meshphong_frag:dg,meshphysical_vert:ug,meshphysical_frag:fg,meshtoon_vert:pg,meshtoon_frag:mg,points_vert:gg,points_frag:bg,shadow_vert:_g,shadow_frag:vg,sprite_vert:xg,sprite_frag:yg},ae={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},mn={basic:{uniforms:Pt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Pt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new ge(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Pt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Pt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Pt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new ge(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Pt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Pt([ae.points,ae.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Pt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Pt([ae.common,ae.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Pt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Pt([ae.sprite,ae.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:Pt([ae.common,ae.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:Pt([ae.lights,ae.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};mn.physical={uniforms:Pt([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const Er={r:0,b:0,g:0},fi=new vn,Mg=new we;function Sg(s,e,t,n,i,r,a){const o=new ge(0);let l=r===!0?0:1,c,d,h=null,u=0,f=null;function g(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?t:e).get(S)),S}function b(y){let S=!1;const _=g(y);_===null?p(o,l):_&&_.isColor&&(p(_,1),S=!0);const C=s.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(y,S){const _=g(S);_&&(_.isCubeTexture||_.mapping===la)?(d===void 0&&(d=new ct(new nr(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:hs(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,w,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),fi.copy(S.backgroundRotation),fi.x*=-1,fi.y*=-1,fi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),d.material.uniforms.envMap.value=_,d.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Mg.makeRotationFromEuler(fi)),d.material.toneMapped=Be.getTransfer(_.colorSpace)!==et,(h!==_||u!==_.version||f!==s.toneMapping)&&(d.material.needsUpdate=!0,h=_,u=_.version,f=s.toneMapping),d.layers.enableAll(),y.unshift(d,d.geometry,d.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new ct(new Ai(2,2),new oi({name:"BackgroundMaterial",uniforms:hs(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Be.getTransfer(_.colorSpace)!==et,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=_,u=_.version,f=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,S){y.getRGB(Er,gd(s)),n.buffers.color.setClear(Er.r,Er.g,Er.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(y,S=1){o.set(y),l=S,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:b,addToRenderList:m}}function Eg(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,a=!1;function o(v,R,L,F,O){let G=!1;const W=h(F,L,R);r!==W&&(r=W,c(r.object)),G=f(v,F,L,O),G&&g(v,F,L,O),O!==null&&e.update(O,s.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,_(v,R,L,F),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return s.createVertexArray()}function c(v){return s.bindVertexArray(v)}function d(v){return s.deleteVertexArray(v)}function h(v,R,L){const F=L.wireframe===!0;let O=n[v.id];O===void 0&&(O={},n[v.id]=O);let G=O[R.id];G===void 0&&(G={},O[R.id]=G);let W=G[F];return W===void 0&&(W=u(l()),G[F]=W),W}function u(v){const R=[],L=[],F=[];for(let O=0;O<t;O++)R[O]=0,L[O]=0,F[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:L,attributeDivisors:F,object:v,attributes:{},index:null}}function f(v,R,L,F){const O=r.attributes,G=R.attributes;let W=0;const J=L.getAttributes();for(const V in J)if(J[V].location>=0){const ue=O[V];let xe=G[V];if(xe===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(xe=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(xe=v.instanceColor)),ue===void 0||ue.attribute!==xe||xe&&ue.data!==xe.data)return!0;W++}return r.attributesNum!==W||r.index!==F}function g(v,R,L,F){const O={},G=R.attributes;let W=0;const J=L.getAttributes();for(const V in J)if(J[V].location>=0){let ue=G[V];ue===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(ue=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(ue=v.instanceColor));const xe={};xe.attribute=ue,ue&&ue.data&&(xe.data=ue.data),O[V]=xe,W++}r.attributes=O,r.attributesNum=W,r.index=F}function b(){const v=r.newAttributes;for(let R=0,L=v.length;R<L;R++)v[R]=0}function m(v){p(v,0)}function p(v,R){const L=r.newAttributes,F=r.enabledAttributes,O=r.attributeDivisors;L[v]=1,F[v]===0&&(s.enableVertexAttribArray(v),F[v]=1),O[v]!==R&&(s.vertexAttribDivisor(v,R),O[v]=R)}function y(){const v=r.newAttributes,R=r.enabledAttributes;for(let L=0,F=R.length;L<F;L++)R[L]!==v[L]&&(s.disableVertexAttribArray(L),R[L]=0)}function S(v,R,L,F,O,G,W){W===!0?s.vertexAttribIPointer(v,R,L,O,G):s.vertexAttribPointer(v,R,L,F,O,G)}function _(v,R,L,F){b();const O=F.attributes,G=L.getAttributes(),W=R.defaultAttributeValues;for(const J in G){const V=G[J];if(V.location>=0){let se=O[J];if(se===void 0&&(J==="instanceMatrix"&&v.instanceMatrix&&(se=v.instanceMatrix),J==="instanceColor"&&v.instanceColor&&(se=v.instanceColor)),se!==void 0){const ue=se.normalized,xe=se.itemSize,Pe=e.get(se);if(Pe===void 0)continue;const Ke=Pe.buffer,X=Pe.type,te=Pe.bytesPerElement,$=X===s.INT||X===s.UNSIGNED_INT||se.gpuType===ml;if(se.isInterleavedBufferAttribute){const ie=se.data,re=ie.stride,Ce=se.offset;if(ie.isInstancedInterleavedBuffer){for(let Fe=0;Fe<V.locationSize;Fe++)p(V.location+Fe,ie.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Fe=0;Fe<V.locationSize;Fe++)m(V.location+Fe);s.bindBuffer(s.ARRAY_BUFFER,Ke);for(let Fe=0;Fe<V.locationSize;Fe++)S(V.location+Fe,xe/V.locationSize,X,ue,re*te,(Ce+xe/V.locationSize*Fe)*te,$)}else{if(se.isInstancedBufferAttribute){for(let ie=0;ie<V.locationSize;ie++)p(V.location+ie,se.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ie=0;ie<V.locationSize;ie++)m(V.location+ie);s.bindBuffer(s.ARRAY_BUFFER,Ke);for(let ie=0;ie<V.locationSize;ie++)S(V.location+ie,xe/V.locationSize,X,ue,xe*te,xe/V.locationSize*ie*te,$)}}else if(W!==void 0){const ue=W[J];if(ue!==void 0)switch(ue.length){case 2:s.vertexAttrib2fv(V.location,ue);break;case 3:s.vertexAttrib3fv(V.location,ue);break;case 4:s.vertexAttrib4fv(V.location,ue);break;default:s.vertexAttrib1fv(V.location,ue)}}}}y()}function C(){A();for(const v in n){const R=n[v];for(const L in R){const F=R[L];for(const O in F)d(F[O].object),delete F[O];delete R[L]}delete n[v]}}function w(v){if(n[v.id]===void 0)return;const R=n[v.id];for(const L in R){const F=R[L];for(const O in F)d(F[O].object),delete F[O];delete R[L]}delete n[v.id]}function M(v){for(const R in n){const L=n[R];if(L[v.id]===void 0)continue;const F=L[v.id];for(const O in F)d(F[O].object),delete F[O];delete L[v.id]}}function A(){x(),a=!0,r!==i&&(r=i,c(r.object))}function x(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:A,resetDefaultState:x,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:M,initAttributes:b,enableAttribute:m,disableUnusedAttributes:y}}function Tg(s,e,t){let n;function i(c){n=c}function r(c,d){s.drawArrays(n,c,d),t.update(d,n,1)}function a(c,d,h){h!==0&&(s.drawArraysInstanced(n,c,d,h),t.update(d,n,h))}function o(c,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,h);let f=0;for(let g=0;g<h;g++)f+=d[g];t.update(f,n,1)}function l(c,d,h,u){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],d[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,d,0,u,0,h);let g=0;for(let b=0;b<h;b++)g+=d[b]*u[b];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ag(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(M){return!(M!==en&&n.convert(M)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(M){const A=M===er&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==Gn&&n.convert(M)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==dn&&!A)}function l(M){if(M==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:_,vertexTextures:C,maxSamples:w}}function wg(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Jn,o=new De,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const f=h.length!==0||u||n!==0||i;return i=u,n=h.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,f){const g=h.clippingPlanes,b=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?d(null):c();else{const y=r?0:n,S=y*4;let _=p.clippingState||null;l.value=_,_=d(g,u,S,f);for(let C=0;C!==S;++C)_[C]=t[C];p.clippingState=_,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,u,f,g){const b=h!==null?h.length:0;let m=null;if(b!==0){if(m=l.value,g!==!0||m===null){const p=f+b*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,_=f;S!==b;++S,_+=4)a.copy(h[S]).applyMatrix4(y,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}function Rg(s){let e=new WeakMap;function t(a,o){return o===So?a.mapping=ss:o===Eo&&(a.mapping=rs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===So||o===Eo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Bf(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Tl extends bd{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ji=4,Tc=[.125,.215,.35,.446,.526,.582],yi=20,Ba=new Tl,Ac=new ge;let za=null,Ha=0,Ga=0,Va=!1;const vi=(1+Math.sqrt(5))/2,Hi=1/vi,wc=[new P(-vi,Hi,0),new P(vi,Hi,0),new P(-Hi,0,vi),new P(Hi,0,vi),new P(0,vi,-Hi),new P(0,vi,Hi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class Rc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){za=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(za,Ha,Ga),this._renderer.xr.enabled=Va,e.scissorTest=!1,Tr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ss||e.mapping===rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),za=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:er,format:en,colorSpace:It,depthBuffer:!1},i=kc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kg(r)),this._blurMaterial=Cg(r,e,t)}return i}_compileMaterial(e){const t=new ct(this._lodPlanes[0],e);this._renderer.compile(t,Ba)}_sceneToCubeUV(e,t,n,i){const o=new Rt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,u=d.toneMapping;d.getClearColor(Ac),d.toneMapping=ri,d.autoClear=!1;const f=new Bt({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),g=new ct(new nr,f);let b=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,b=!0):(f.color.copy(Ac),b=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const S=this._cubeSize;Tr(i,y*S,p>2?S:0,S,S),d.setRenderTarget(i),b&&d.render(g,o),d.render(e,o)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=u,d.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ss||e.mapping===rs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cc());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new ct(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Tr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ba)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=wc[(i-r-1)%wc.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new ct(this._lodPlanes[i],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*yi-1),b=r/g,m=isFinite(r)?1+Math.floor(d*b):yi;m>yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${yi}`);const p=[];let y=0;for(let M=0;M<yi;++M){const A=M/b,x=Math.exp(-A*A/2);p.push(x),M===0?y+=x:M<m&&(y+=2*x)}for(let M=0;M<p.length;M++)p[M]=p[M]/y;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:S}=this;u.dTheta.value=g,u.mipInt.value=S-n;const _=this._sizeLods[i],C=3*_*(i>S-Ji?i-S+Ji:0),w=4*(this._cubeSize-_);Tr(t,C,w,3*_,2*_),l.setRenderTarget(t),l.render(h,Ba)}}function kg(s){const e=[],t=[],n=[];let i=s;const r=s-Ji+1+Tc.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-Ji?l=Tc[a-s+Ji-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,h=1+c,u=[d,d,h,d,h,h,d,d,h,h,d,h],f=6,g=6,b=3,m=2,p=1,y=new Float32Array(b*g*f),S=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let w=0;w<f;w++){const M=w%3*2/3-1,A=w>2?0:-1,x=[M,A,0,M+2/3,A,0,M+2/3,A+1,0,M,A,0,M+2/3,A+1,0,M,A+1,0];y.set(x,b*g*w),S.set(u,m*g*w);const v=[w,w,w,w,w,w];_.set(v,p*g*w)}const C=new Ht;C.setAttribute("position",new kt(y,b)),C.setAttribute("uv",new kt(S,m)),C.setAttribute("faceIndex",new kt(_,p)),e.push(C),i>Ji&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function kc(s,e,t){const n=new ai(s,e,t);return n.texture.mapping=la,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Tr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Cg(s,e,t){const n=new Float32Array(yi),i=new P(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Al(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function Cc(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Al(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function Pc(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Al(){return`

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
	`}function Pg(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===So||l===Eo,d=l===ss||l===rs;if(c||d){let h=e.get(o);const u=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new Rc(s)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return c&&f&&f.height>0||d&&f&&i(f)?(t===null&&(t=new Rc(s)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Lg(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Fs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ig(s,e,t,n){const i={},r=new WeakMap;function a(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const b=u.morphAttributes[g];for(let m=0,p=b.length;m<p;m++)e.remove(b[m])}u.removeEventListener("dispose",a),delete i[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(h,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function l(h){const u=h.attributes;for(const g in u)e.update(u[g],s.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const b=f[g];for(let m=0,p=b.length;m<p;m++)e.update(b[m],s.ARRAY_BUFFER)}}function c(h){const u=[],f=h.index,g=h.attributes.position;let b=0;if(f!==null){const y=f.array;b=f.version;for(let S=0,_=y.length;S<_;S+=3){const C=y[S+0],w=y[S+1],M=y[S+2];u.push(C,w,w,M,M,C)}}else if(g!==void 0){const y=g.array;b=g.version;for(let S=0,_=y.length/3-1;S<_;S+=3){const C=S+0,w=S+1,M=S+2;u.push(C,w,w,M,M,C)}}else return;const m=new(hd(u)?md:pd)(u,1);m.version=b;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function d(h){const u=r.get(h);if(u){const f=h.index;f!==null&&u.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function Dg(s,e,t){let n;function i(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){s.drawElements(n,f,r,u*a),t.update(f,n,1)}function c(u,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,u*a,g),t.update(f,n,g))}function d(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(u,f,g,b){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/a,f[p],b[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,b,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*b[y];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function Ug(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Ng(s,e,t){const n=new WeakMap,i=new qe;function r(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let u=n.get(o);if(u===void 0||u.count!==h){let v=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var f=v;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let _=0;g===!0&&(_=1),b===!0&&(_=2),m===!0&&(_=3);let C=o.attributes.position.count*_,w=1;C>e.maxTextureSize&&(w=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const M=new Float32Array(C*w*4*h),A=new ud(M,C,w,h);A.type=dn,A.needsUpdate=!0;const x=_*4;for(let R=0;R<h;R++){const L=p[R],F=y[R],O=S[R],G=C*w*4*R;for(let W=0;W<L.count;W++){const J=W*x;g===!0&&(i.fromBufferAttribute(L,W),M[G+J+0]=i.x,M[G+J+1]=i.y,M[G+J+2]=i.z,M[G+J+3]=0),b===!0&&(i.fromBufferAttribute(F,W),M[G+J+4]=i.x,M[G+J+5]=i.y,M[G+J+6]=i.z,M[G+J+7]=0),m===!0&&(i.fromBufferAttribute(O,W),M[G+J+8]=i.x,M[G+J+9]=i.y,M[G+J+10]=i.z,M[G+J+11]=O.itemSize===4?i.w:1)}}u={count:h,texture:A,size:new Te(C,w)},n.set(o,u),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const b=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",b),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function Fg(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,d=l.geometry,h=e.get(l,d);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class xd extends mt{constructor(e,t,n,i,r,a,o,l,c,d=Qi){if(d!==Qi&&d!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Qi&&(n=Ei),n===void 0&&d===ls&&(n=os),super(null,i,r,a,o,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Lt,this.minFilter=l!==void 0?l:Lt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const yd=new mt,Lc=new xd(1,1),Md=new ud,Sd=new Sf,Ed=new _d,Ic=[],Dc=[],Uc=new Float32Array(16),Nc=new Float32Array(9),Fc=new Float32Array(4);function ps(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Ic[i];if(r===void 0&&(r=new Float32Array(i),Ic[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function gt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function bt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function da(s,e){let t=Dc[e];t===void 0&&(t=new Int32Array(e),Dc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Og(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Bg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;s.uniform2fv(this.addr,e),bt(t,e)}}function zg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;s.uniform3fv(this.addr,e),bt(t,e)}}function Hg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;s.uniform4fv(this.addr,e),bt(t,e)}}function Gg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(gt(t,n))return;Fc.set(n),s.uniformMatrix2fv(this.addr,!1,Fc),bt(t,n)}}function Vg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(gt(t,n))return;Nc.set(n),s.uniformMatrix3fv(this.addr,!1,Nc),bt(t,n)}}function jg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(gt(t,n))return;Uc.set(n),s.uniformMatrix4fv(this.addr,!1,Uc),bt(t,n)}}function Wg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Xg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;s.uniform2iv(this.addr,e),bt(t,e)}}function qg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;s.uniform3iv(this.addr,e),bt(t,e)}}function Kg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;s.uniform4iv(this.addr,e),bt(t,e)}}function Yg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function $g(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;s.uniform2uiv(this.addr,e),bt(t,e)}}function Zg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;s.uniform3uiv(this.addr,e),bt(t,e)}}function Jg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;s.uniform4uiv(this.addr,e),bt(t,e)}}function Qg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Lc.compareFunction=cd,r=Lc):r=yd,t.setTexture2D(e||r,i)}function eb(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Sd,i)}function tb(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ed,i)}function nb(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Md,i)}function ib(s){switch(s){case 5126:return Og;case 35664:return Bg;case 35665:return zg;case 35666:return Hg;case 35674:return Gg;case 35675:return Vg;case 35676:return jg;case 5124:case 35670:return Wg;case 35667:case 35671:return Xg;case 35668:case 35672:return qg;case 35669:case 35673:return Kg;case 5125:return Yg;case 36294:return $g;case 36295:return Zg;case 36296:return Jg;case 35678:case 36198:case 36298:case 36306:case 35682:return Qg;case 35679:case 36299:case 36307:return eb;case 35680:case 36300:case 36308:case 36293:return tb;case 36289:case 36303:case 36311:case 36292:return nb}}function sb(s,e){s.uniform1fv(this.addr,e)}function rb(s,e){const t=ps(e,this.size,2);s.uniform2fv(this.addr,t)}function ab(s,e){const t=ps(e,this.size,3);s.uniform3fv(this.addr,t)}function ob(s,e){const t=ps(e,this.size,4);s.uniform4fv(this.addr,t)}function lb(s,e){const t=ps(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function cb(s,e){const t=ps(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function hb(s,e){const t=ps(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function db(s,e){s.uniform1iv(this.addr,e)}function ub(s,e){s.uniform2iv(this.addr,e)}function fb(s,e){s.uniform3iv(this.addr,e)}function pb(s,e){s.uniform4iv(this.addr,e)}function mb(s,e){s.uniform1uiv(this.addr,e)}function gb(s,e){s.uniform2uiv(this.addr,e)}function bb(s,e){s.uniform3uiv(this.addr,e)}function _b(s,e){s.uniform4uiv(this.addr,e)}function vb(s,e,t){const n=this.cache,i=e.length,r=da(t,i);gt(n,r)||(s.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||yd,r[a])}function xb(s,e,t){const n=this.cache,i=e.length,r=da(t,i);gt(n,r)||(s.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Sd,r[a])}function yb(s,e,t){const n=this.cache,i=e.length,r=da(t,i);gt(n,r)||(s.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Ed,r[a])}function Mb(s,e,t){const n=this.cache,i=e.length,r=da(t,i);gt(n,r)||(s.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Md,r[a])}function Sb(s){switch(s){case 5126:return sb;case 35664:return rb;case 35665:return ab;case 35666:return ob;case 35674:return lb;case 35675:return cb;case 35676:return hb;case 5124:case 35670:return db;case 35667:case 35671:return ub;case 35668:case 35672:return fb;case 35669:case 35673:return pb;case 5125:return mb;case 36294:return gb;case 36295:return bb;case 36296:return _b;case 35678:case 36198:case 36298:case 36306:case 35682:return vb;case 35679:case 36299:case 36307:return xb;case 35680:case 36300:case 36308:case 36293:return yb;case 36289:case 36303:case 36311:case 36292:return Mb}}class Eb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ib(t.type)}}class Tb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Sb(t.type)}}class Ab{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const ja=/(\w+)(\])?(\[|\.)?/g;function Oc(s,e){s.seq.push(e),s.map[e.id]=e}function wb(s,e,t){const n=s.name,i=n.length;for(ja.lastIndex=0;;){const r=ja.exec(n),a=ja.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Oc(t,c===void 0?new Eb(o,s,e):new Tb(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new Ab(o),Oc(t,h)),t=h}}}class $r{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);wb(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Bc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Rb=37297;let kb=0;function Cb(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const zc=new De;function Pb(s){Be._getMatrix(zc,Be.workingColorSpace,s);const e=`mat3( ${zc.elements.map(t=>t.toFixed(4))} )`;switch(Be.getTransfer(s)){case ha:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Hc(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Cb(s.getShaderSource(e),a)}else return i}function Lb(s,e){const t=Pb(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Ib(s,e){let t;switch(e){case Lu:t="Linear";break;case Iu:t="Reinhard";break;case Du:t="Cineon";break;case qh:t="ACESFilmic";break;case Nu:t="AgX";break;case Fu:t="Neutral";break;case Uu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ar=new P;function Db(){Be.getLuminanceCoefficients(Ar);const s=Ar.x.toFixed(4),e=Ar.y.toFixed(4),t=Ar.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ub(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Os).join(`
`)}function Nb(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Fb(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Os(s){return s!==""}function Gc(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ob=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qo(s){return s.replace(Ob,zb)}const Bb=new Map;function zb(s,e){let t=Ne[e];if(t===void 0){const n=Bb.get(e);if(n!==void 0)t=Ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Qo(t)}const Hb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jc(s){return s.replace(Hb,Gb)}function Gb(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Wc(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Vb(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===jh?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Wh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===In&&(e="SHADOWMAP_TYPE_VSM"),e}function jb(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ss:case rs:e="ENVMAP_TYPE_CUBE";break;case la:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Wb(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case rs:e="ENVMAP_MODE_REFRACTION";break}return e}function Xb(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Xh:e="ENVMAP_BLENDING_MULTIPLY";break;case Cu:e="ENVMAP_BLENDING_MIX";break;case Pu:e="ENVMAP_BLENDING_ADD";break}return e}function qb(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Kb(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Vb(t),c=jb(t),d=Wb(t),h=Xb(t),u=qb(t),f=Ub(t),g=Nb(r),b=i.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Os).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Os).join(`
`),p.length>0&&(p+=`
`)):(m=[Wc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Os).join(`
`),p=[Wc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ri?"#define TONE_MAPPING":"",t.toneMapping!==ri?Ne.tonemapping_pars_fragment:"",t.toneMapping!==ri?Ib("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,Lb("linearToOutputTexel",t.outputColorSpace),Db(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Os).join(`
`)),a=Qo(a),a=Gc(a,t),a=Vc(a,t),o=Qo(o),o=Gc(o,t),o=Vc(o,t),a=jc(a),o=jc(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ic?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ic?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=y+m+a,_=y+p+o,C=Bc(i,i.VERTEX_SHADER,S),w=Bc(i,i.FRAGMENT_SHADER,_);i.attachShader(b,C),i.attachShader(b,w),t.index0AttributeName!==void 0?i.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(b,0,"position"),i.linkProgram(b);function M(R){if(s.debug.checkShaderErrors){const L=i.getProgramInfoLog(b).trim(),F=i.getShaderInfoLog(C).trim(),O=i.getShaderInfoLog(w).trim();let G=!0,W=!0;if(i.getProgramParameter(b,i.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,b,C,w);else{const J=Hc(i,C,"vertex"),V=Hc(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(b,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+J+`
`+V)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(F===""||O==="")&&(W=!1);W&&(R.diagnostics={runnable:G,programLog:L,vertexShader:{log:F,prefix:m},fragmentShader:{log:O,prefix:p}})}i.deleteShader(C),i.deleteShader(w),A=new $r(i,b),x=Fb(i,b)}let A;this.getUniforms=function(){return A===void 0&&M(this),A};let x;this.getAttributes=function(){return x===void 0&&M(this),x};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(b,Rb)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kb++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=C,this.fragmentShader=w,this}let Yb=0;class $b{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Zb(e),t.set(e,n)),n}}class Zb{constructor(e){this.id=Yb++,this.code=e,this.usedTimes=0}}function Jb(s,e,t,n,i,r,a){const o=new Sl,l=new $b,c=new Set,d=[],h=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,v,R,L,F){const O=L.fog,G=F.geometry,W=x.isMeshStandardMaterial?L.environment:null,J=(x.isMeshStandardMaterial?t:e).get(x.envMap||W),V=J&&J.mapping===la?J.image.height:null,se=g[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const ue=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,xe=ue!==void 0?ue.length:0;let Pe=0;G.morphAttributes.position!==void 0&&(Pe=1),G.morphAttributes.normal!==void 0&&(Pe=2),G.morphAttributes.color!==void 0&&(Pe=3);let Ke,X,te,$;if(se){const Je=mn[se];Ke=Je.vertexShader,X=Je.fragmentShader}else Ke=x.vertexShader,X=x.fragmentShader,l.update(x),te=l.getVertexShaderID(x),$=l.getFragmentShaderID(x);const ie=s.getRenderTarget(),re=s.state.buffers.depth.getReversed(),Ce=F.isInstancedMesh===!0,Fe=F.isBatchedMesh===!0,ht=!!x.map,Ve=!!x.matcap,ut=!!J,N=!!x.aoMap,Xt=!!x.lightMap,ze=!!x.bumpMap,He=!!x.normalMap,Ee=!!x.displacementMap,st=!!x.emissiveMap,Se=!!x.metalnessMap,k=!!x.roughnessMap,E=x.anisotropy>0,B=x.clearcoat>0,K=x.dispersion>0,Q=x.iridescence>0,q=x.sheen>0,ye=x.transmission>0,le=E&&!!x.anisotropyMap,fe=B&&!!x.clearcoatMap,je=B&&!!x.clearcoatNormalMap,ee=B&&!!x.clearcoatRoughnessMap,pe=Q&&!!x.iridescenceMap,Ae=Q&&!!x.iridescenceThicknessMap,Re=q&&!!x.sheenColorMap,me=q&&!!x.sheenRoughnessMap,Ge=!!x.specularMap,Ue=!!x.specularColorMap,tt=!!x.specularIntensityMap,I=ye&&!!x.transmissionMap,oe=ye&&!!x.thicknessMap,j=!!x.gradientMap,Y=!!x.alphaMap,de=x.alphaTest>0,ce=!!x.alphaHash,Le=!!x.extensions;let dt=ri;x.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(dt=s.toneMapping);const St={shaderID:se,shaderType:x.type,shaderName:x.name,vertexShader:Ke,fragmentShader:X,defines:x.defines,customVertexShaderID:te,customFragmentShaderID:$,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Fe,batchingColor:Fe&&F._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&F.instanceColor!==null,instancingMorph:Ce&&F.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ie===null?s.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:It,alphaToCoverage:!!x.alphaToCoverage,map:ht,matcap:Ve,envMap:ut,envMapMode:ut&&J.mapping,envMapCubeUVHeight:V,aoMap:N,lightMap:Xt,bumpMap:ze,normalMap:He,displacementMap:u&&Ee,emissiveMap:st,normalMapObjectSpace:He&&x.normalMapType===ju,normalMapTangentSpace:He&&x.normalMapType===ld,metalnessMap:Se,roughnessMap:k,anisotropy:E,anisotropyMap:le,clearcoat:B,clearcoatMap:fe,clearcoatNormalMap:je,clearcoatRoughnessMap:ee,dispersion:K,iridescence:Q,iridescenceMap:pe,iridescenceThicknessMap:Ae,sheen:q,sheenColorMap:Re,sheenRoughnessMap:me,specularMap:Ge,specularColorMap:Ue,specularIntensityMap:tt,transmission:ye,transmissionMap:I,thicknessMap:oe,gradientMap:j,opaque:x.transparent===!1&&x.blending===Mi&&x.alphaToCoverage===!1,alphaMap:Y,alphaTest:de,alphaHash:ce,combine:x.combine,mapUv:ht&&b(x.map.channel),aoMapUv:N&&b(x.aoMap.channel),lightMapUv:Xt&&b(x.lightMap.channel),bumpMapUv:ze&&b(x.bumpMap.channel),normalMapUv:He&&b(x.normalMap.channel),displacementMapUv:Ee&&b(x.displacementMap.channel),emissiveMapUv:st&&b(x.emissiveMap.channel),metalnessMapUv:Se&&b(x.metalnessMap.channel),roughnessMapUv:k&&b(x.roughnessMap.channel),anisotropyMapUv:le&&b(x.anisotropyMap.channel),clearcoatMapUv:fe&&b(x.clearcoatMap.channel),clearcoatNormalMapUv:je&&b(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&b(x.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&b(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&b(x.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&b(x.sheenColorMap.channel),sheenRoughnessMapUv:me&&b(x.sheenRoughnessMap.channel),specularMapUv:Ge&&b(x.specularMap.channel),specularColorMapUv:Ue&&b(x.specularColorMap.channel),specularIntensityMapUv:tt&&b(x.specularIntensityMap.channel),transmissionMapUv:I&&b(x.transmissionMap.channel),thicknessMapUv:oe&&b(x.thicknessMap.channel),alphaMapUv:Y&&b(x.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(He||E),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!G.attributes.uv&&(ht||Y),fog:!!O,useFog:x.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:re,skinning:F.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Pe,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:dt,decodeVideoTexture:ht&&x.map.isVideoTexture===!0&&Be.getTransfer(x.map.colorSpace)===et,decodeVideoTextureEmissive:st&&x.emissiveMap.isVideoTexture===!0&&Be.getTransfer(x.emissiveMap.colorSpace)===et,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Jt,flipSided:x.side===zt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Le&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&x.extensions.multiDraw===!0||Fe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return St.vertexUv1s=c.has(1),St.vertexUv2s=c.has(2),St.vertexUv3s=c.has(3),c.clear(),St}function p(x){const v=[];if(x.shaderID?v.push(x.shaderID):(v.push(x.customVertexShaderID),v.push(x.customFragmentShaderID)),x.defines!==void 0)for(const R in x.defines)v.push(R),v.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(y(v,x),S(v,x),v.push(s.outputColorSpace)),v.push(x.customProgramCacheKey),v.join()}function y(x,v){x.push(v.precision),x.push(v.outputColorSpace),x.push(v.envMapMode),x.push(v.envMapCubeUVHeight),x.push(v.mapUv),x.push(v.alphaMapUv),x.push(v.lightMapUv),x.push(v.aoMapUv),x.push(v.bumpMapUv),x.push(v.normalMapUv),x.push(v.displacementMapUv),x.push(v.emissiveMapUv),x.push(v.metalnessMapUv),x.push(v.roughnessMapUv),x.push(v.anisotropyMapUv),x.push(v.clearcoatMapUv),x.push(v.clearcoatNormalMapUv),x.push(v.clearcoatRoughnessMapUv),x.push(v.iridescenceMapUv),x.push(v.iridescenceThicknessMapUv),x.push(v.sheenColorMapUv),x.push(v.sheenRoughnessMapUv),x.push(v.specularMapUv),x.push(v.specularColorMapUv),x.push(v.specularIntensityMapUv),x.push(v.transmissionMapUv),x.push(v.thicknessMapUv),x.push(v.combine),x.push(v.fogExp2),x.push(v.sizeAttenuation),x.push(v.morphTargetsCount),x.push(v.morphAttributeCount),x.push(v.numDirLights),x.push(v.numPointLights),x.push(v.numSpotLights),x.push(v.numSpotLightMaps),x.push(v.numHemiLights),x.push(v.numRectAreaLights),x.push(v.numDirLightShadows),x.push(v.numPointLightShadows),x.push(v.numSpotLightShadows),x.push(v.numSpotLightShadowsWithMaps),x.push(v.numLightProbes),x.push(v.shadowMapType),x.push(v.toneMapping),x.push(v.numClippingPlanes),x.push(v.numClipIntersection),x.push(v.depthPacking)}function S(x,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),x.push(o.mask)}function _(x){const v=g[x.type];let R;if(v){const L=mn[v];R=Uf.clone(L.uniforms)}else R=x.uniforms;return R}function C(x,v){let R;for(let L=0,F=d.length;L<F;L++){const O=d[L];if(O.cacheKey===v){R=O,++R.usedTimes;break}}return R===void 0&&(R=new Kb(s,v,x,r),d.push(R)),R}function w(x){if(--x.usedTimes===0){const v=d.indexOf(x);d[v]=d[d.length-1],d.pop(),x.destroy()}}function M(x){l.remove(x)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:C,releaseProgram:w,releaseShaderCache:M,programs:d,dispose:A}}function Qb(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function e_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Xc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function qc(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,u,f,g,b,m){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:u,material:f,groupOrder:g,renderOrder:h.renderOrder,z:b,group:m},s[e]=p):(p.id=h.id,p.object=h,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=b,p.group=m),e++,p}function o(h,u,f,g,b,m){const p=a(h,u,f,g,b,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(h,u,f,g,b,m){const p=a(h,u,f,g,b,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,u){t.length>1&&t.sort(h||e_),n.length>1&&n.sort(u||Xc),i.length>1&&i.sort(u||Xc)}function d(){for(let h=e,u=s.length;h<u;h++){const f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:d,sort:c}}function t_(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new qc,s.set(n,[a])):i>=r.length?(a=new qc,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function n_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new ge};break;case"SpotLight":t={position:new P,direction:new P,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":t={color:new ge,position:new P,halfWidth:new P,halfHeight:new P};break}return s[e.id]=t,t}}}function i_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let s_=0;function r_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function a_(s){const e=new n_,t=i_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const i=new P,r=new we,a=new we;function o(c){let d=0,h=0,u=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let f=0,g=0,b=0,m=0,p=0,y=0,S=0,_=0,C=0,w=0,M=0;c.sort(r_);for(let x=0,v=c.length;x<v;x++){const R=c[x],L=R.color,F=R.intensity,O=R.distance,G=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=L.r*F,h+=L.g*F,u+=L.b*F;else if(R.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(R.sh.coefficients[W],F);M++}else if(R.isDirectionalLight){const W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const J=R.shadow,V=t.get(R);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=G,n.directionalShadowMatrix[f]=R.shadow.matrix,y++}n.directional[f]=W,f++}else if(R.isSpotLight){const W=e.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(L).multiplyScalar(F),W.distance=O,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,n.spot[b]=W;const J=R.shadow;if(R.map&&(n.spotLightMap[C]=R.map,C++,J.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[b]=J.matrix,R.castShadow){const V=t.get(R);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.spotShadow[b]=V,n.spotShadowMap[b]=G,_++}b++}else if(R.isRectAreaLight){const W=e.get(R);W.color.copy(L).multiplyScalar(F),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=W,m++}else if(R.isPointLight){const W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),W.distance=R.distance,W.decay=R.decay,R.castShadow){const J=R.shadow,V=t.get(R);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,V.shadowCameraNear=J.camera.near,V.shadowCameraFar=J.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=R.shadow.matrix,S++}n.point[g]=W,g++}else if(R.isHemisphereLight){const W=e.get(R);W.skyColor.copy(R.color).multiplyScalar(F),W.groundColor.copy(R.groundColor).multiplyScalar(F),n.hemi[p]=W,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=u;const A=n.hash;(A.directionalLength!==f||A.pointLength!==g||A.spotLength!==b||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==y||A.numPointShadows!==S||A.numSpotShadows!==_||A.numSpotMaps!==C||A.numLightProbes!==M)&&(n.directional.length=f,n.spot.length=b,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=_+C-w,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=M,A.directionalLength=f,A.pointLength=g,A.spotLength=b,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=y,A.numPointShadows=S,A.numSpotShadows=_,A.numSpotMaps=C,A.numLightProbes=M,n.version=s_++)}function l(c,d){let h=0,u=0,f=0,g=0,b=0;const m=d.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const S=c[p];if(S.isDirectionalLight){const _=n.directional[h];_.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),h++}else if(S.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(S.width*.5,0,0),_.halfHeight.set(0,S.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const _=n.point[u];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),u++}else if(S.isHemisphereLight){const _=n.hemi[b];_.direction.setFromMatrixPosition(S.matrixWorld),_.direction.transformDirection(m),b++}}}return{setup:o,setupView:l,state:n}}function Kc(s){const e=new a_(s),t=[],n=[];function i(d){c.camera=d,t.length=0,n.length=0}function r(d){t.push(d)}function a(d){n.push(d)}function o(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function o_(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new Kc(s),e.set(i,[o])):r>=a.length?(o=new Kc(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class l_ extends fn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Gu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class c_ extends fn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const h_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,d_=`uniform sampler2D shadow_pass;
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
}`;function u_(s,e,t){let n=new El;const i=new Te,r=new Te,a=new qe,o=new l_({depthPacking:Vu}),l=new c_,c={},d=t.maxTextureSize,h={[Hn]:zt,[zt]:Hn,[Jt]:Jt},u=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:h_,fragmentShader:d_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ht;g.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new ct(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jh;let p=this.type;this.render=function(w,M,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const x=s.getRenderTarget(),v=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),L=s.state;L.setBlending(si),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const F=p!==In&&this.type===In,O=p===In&&this.type!==In;for(let G=0,W=w.length;G<W;G++){const J=w[G],V=J.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const se=V.getFrameExtents();if(i.multiply(se),r.copy(V.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(r.x=Math.floor(d/se.x),i.x=r.x*se.x,V.mapSize.x=r.x),i.y>d&&(r.y=Math.floor(d/se.y),i.y=r.y*se.y,V.mapSize.y=r.y)),V.map===null||F===!0||O===!0){const xe=this.type!==In?{minFilter:Lt,magFilter:Lt}:{};V.map!==null&&V.map.dispose(),V.map=new ai(i.x,i.y,xe),V.map.texture.name=J.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const ue=V.getViewportCount();for(let xe=0;xe<ue;xe++){const Pe=V.getViewport(xe);a.set(r.x*Pe.x,r.y*Pe.y,r.x*Pe.z,r.y*Pe.w),L.viewport(a),V.updateMatrices(J,xe),n=V.getFrustum(),_(M,A,V.camera,J,this.type)}V.isPointLightShadow!==!0&&this.type===In&&y(V,A),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(x,v,R)};function y(w,M){const A=e.update(b);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ai(i.x,i.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(M,null,A,u,b,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(M,null,A,f,b,null)}function S(w,M,A,x){let v=null;const R=A.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)v=R;else if(v=A.isPointLight===!0?l:o,s.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const L=v.uuid,F=M.uuid;let O=c[L];O===void 0&&(O={},c[L]=O);let G=O[F];G===void 0&&(G=v.clone(),O[F]=G,M.addEventListener("dispose",C)),v=G}if(v.visible=M.visible,v.wireframe=M.wireframe,x===In?v.side=M.shadowSide!==null?M.shadowSide:M.side:v.side=M.shadowSide!==null?M.shadowSide:h[M.side],v.alphaMap=M.alphaMap,v.alphaTest=M.alphaTest,v.map=M.map,v.clipShadows=M.clipShadows,v.clippingPlanes=M.clippingPlanes,v.clipIntersection=M.clipIntersection,v.displacementMap=M.displacementMap,v.displacementScale=M.displacementScale,v.displacementBias=M.displacementBias,v.wireframeLinewidth=M.wireframeLinewidth,v.linewidth=M.linewidth,A.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const L=s.properties.get(v);L.light=A}return v}function _(w,M,A,x,v){if(w.visible===!1)return;if(w.layers.test(M.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===In)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,w.matrixWorld);const F=e.update(w),O=w.material;if(Array.isArray(O)){const G=F.groups;for(let W=0,J=G.length;W<J;W++){const V=G[W],se=O[V.materialIndex];if(se&&se.visible){const ue=S(w,se,x,v);w.onBeforeShadow(s,w,M,A,F,ue,V),s.renderBufferDirect(A,null,F,ue,w,V),w.onAfterShadow(s,w,M,A,F,ue,V)}}}else if(O.visible){const G=S(w,O,x,v);w.onBeforeShadow(s,w,M,A,F,G,null),s.renderBufferDirect(A,null,F,G,w,null),w.onAfterShadow(s,w,M,A,F,G,null)}}const L=w.children;for(let F=0,O=L.length;F<O;F++)_(L[F],M,A,x,v)}function C(w){w.target.removeEventListener("dispose",C);for(const A in c){const x=c[A],v=w.target.uuid;v in x&&(x[v].dispose(),delete x[v])}}}const f_={[bo]:_o,[vo]:ta,[xo]:Mo,[is]:yo,[_o]:bo,[ta]:vo,[Mo]:xo,[yo]:is};function p_(s,e){function t(){let I=!1;const oe=new qe;let j=null;const Y=new qe(0,0,0,0);return{setMask:function(de){j!==de&&!I&&(s.colorMask(de,de,de,de),j=de)},setLocked:function(de){I=de},setClear:function(de,ce,Le,dt,St){St===!0&&(de*=dt,ce*=dt,Le*=dt),oe.set(de,ce,Le,dt),Y.equals(oe)===!1&&(s.clearColor(de,ce,Le,dt),Y.copy(oe))},reset:function(){I=!1,j=null,Y.set(-1,0,0,0)}}}function n(){let I=!1,oe=!1,j=null,Y=null,de=null;return{setReversed:function(ce){if(oe!==ce){const Le=e.get("EXT_clip_control");oe?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT);const dt=de;de=null,this.setClear(dt)}oe=ce},getReversed:function(){return oe},setTest:function(ce){ce?ie(s.DEPTH_TEST):re(s.DEPTH_TEST)},setMask:function(ce){j!==ce&&!I&&(s.depthMask(ce),j=ce)},setFunc:function(ce){if(oe&&(ce=f_[ce]),Y!==ce){switch(ce){case bo:s.depthFunc(s.NEVER);break;case _o:s.depthFunc(s.ALWAYS);break;case vo:s.depthFunc(s.LESS);break;case is:s.depthFunc(s.LEQUAL);break;case xo:s.depthFunc(s.EQUAL);break;case yo:s.depthFunc(s.GEQUAL);break;case ta:s.depthFunc(s.GREATER);break;case Mo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Y=ce}},setLocked:function(ce){I=ce},setClear:function(ce){de!==ce&&(oe&&(ce=1-ce),s.clearDepth(ce),de=ce)},reset:function(){I=!1,j=null,Y=null,de=null,oe=!1}}}function i(){let I=!1,oe=null,j=null,Y=null,de=null,ce=null,Le=null,dt=null,St=null;return{setTest:function(Je){I||(Je?ie(s.STENCIL_TEST):re(s.STENCIL_TEST))},setMask:function(Je){oe!==Je&&!I&&(s.stencilMask(Je),oe=Je)},setFunc:function(Je,rn,Sn){(j!==Je||Y!==rn||de!==Sn)&&(s.stencilFunc(Je,rn,Sn),j=Je,Y=rn,de=Sn)},setOp:function(Je,rn,Sn){(ce!==Je||Le!==rn||dt!==Sn)&&(s.stencilOp(Je,rn,Sn),ce=Je,Le=rn,dt=Sn)},setLocked:function(Je){I=Je},setClear:function(Je){St!==Je&&(s.clearStencil(Je),St=Je)},reset:function(){I=!1,oe=null,j=null,Y=null,de=null,ce=null,Le=null,dt=null,St=null}}}const r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let d={},h={},u=new WeakMap,f=[],g=null,b=!1,m=null,p=null,y=null,S=null,_=null,C=null,w=null,M=new ge(0,0,0),A=0,x=!1,v=null,R=null,L=null,F=null,O=null;const G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,J=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=J>=1):V.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=J>=2);let se=null,ue={};const xe=s.getParameter(s.SCISSOR_BOX),Pe=s.getParameter(s.VIEWPORT),Ke=new qe().fromArray(xe),X=new qe().fromArray(Pe);function te(I,oe,j,Y){const de=new Uint8Array(4),ce=s.createTexture();s.bindTexture(I,ce),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Le=0;Le<j;Le++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(oe,0,s.RGBA,1,1,Y,0,s.RGBA,s.UNSIGNED_BYTE,de):s.texImage2D(oe+Le,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,de);return ce}const $={};$[s.TEXTURE_2D]=te(s.TEXTURE_2D,s.TEXTURE_2D,1),$[s.TEXTURE_CUBE_MAP]=te(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[s.TEXTURE_2D_ARRAY]=te(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),$[s.TEXTURE_3D]=te(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(s.DEPTH_TEST),a.setFunc(is),ze(!1),He(Jl),ie(s.CULL_FACE),N(si);function ie(I){d[I]!==!0&&(s.enable(I),d[I]=!0)}function re(I){d[I]!==!1&&(s.disable(I),d[I]=!1)}function Ce(I,oe){return h[I]!==oe?(s.bindFramebuffer(I,oe),h[I]=oe,I===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=oe),I===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=oe),!0):!1}function Fe(I,oe){let j=f,Y=!1;if(I){j=u.get(oe),j===void 0&&(j=[],u.set(oe,j));const de=I.textures;if(j.length!==de.length||j[0]!==s.COLOR_ATTACHMENT0){for(let ce=0,Le=de.length;ce<Le;ce++)j[ce]=s.COLOR_ATTACHMENT0+ce;j.length=de.length,Y=!0}}else j[0]!==s.BACK&&(j[0]=s.BACK,Y=!0);Y&&s.drawBuffers(j)}function ht(I){return g!==I?(s.useProgram(I),g=I,!0):!1}const Ve={[xi]:s.FUNC_ADD,[fu]:s.FUNC_SUBTRACT,[pu]:s.FUNC_REVERSE_SUBTRACT};Ve[mu]=s.MIN,Ve[gu]=s.MAX;const ut={[bu]:s.ZERO,[_u]:s.ONE,[vu]:s.SRC_COLOR,[mo]:s.SRC_ALPHA,[Tu]:s.SRC_ALPHA_SATURATE,[Su]:s.DST_COLOR,[yu]:s.DST_ALPHA,[xu]:s.ONE_MINUS_SRC_COLOR,[go]:s.ONE_MINUS_SRC_ALPHA,[Eu]:s.ONE_MINUS_DST_COLOR,[Mu]:s.ONE_MINUS_DST_ALPHA,[Au]:s.CONSTANT_COLOR,[wu]:s.ONE_MINUS_CONSTANT_COLOR,[Ru]:s.CONSTANT_ALPHA,[ku]:s.ONE_MINUS_CONSTANT_ALPHA};function N(I,oe,j,Y,de,ce,Le,dt,St,Je){if(I===si){b===!0&&(re(s.BLEND),b=!1);return}if(b===!1&&(ie(s.BLEND),b=!0),I!==uu){if(I!==m||Je!==x){if((p!==xi||_!==xi)&&(s.blendEquation(s.FUNC_ADD),p=xi,_=xi),Je)switch(I){case Mi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Si:s.blendFunc(s.ONE,s.ONE);break;case Ql:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ec:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Mi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Si:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ql:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ec:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}y=null,S=null,C=null,w=null,M.set(0,0,0),A=0,m=I,x=Je}return}de=de||oe,ce=ce||j,Le=Le||Y,(oe!==p||de!==_)&&(s.blendEquationSeparate(Ve[oe],Ve[de]),p=oe,_=de),(j!==y||Y!==S||ce!==C||Le!==w)&&(s.blendFuncSeparate(ut[j],ut[Y],ut[ce],ut[Le]),y=j,S=Y,C=ce,w=Le),(dt.equals(M)===!1||St!==A)&&(s.blendColor(dt.r,dt.g,dt.b,St),M.copy(dt),A=St),m=I,x=!1}function Xt(I,oe){I.side===Jt?re(s.CULL_FACE):ie(s.CULL_FACE);let j=I.side===zt;oe&&(j=!j),ze(j),I.blending===Mi&&I.transparent===!1?N(si):N(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const Y=I.stencilWrite;o.setTest(Y),Y&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),st(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ie(s.SAMPLE_ALPHA_TO_COVERAGE):re(s.SAMPLE_ALPHA_TO_COVERAGE)}function ze(I){v!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),v=I)}function He(I){I!==hu?(ie(s.CULL_FACE),I!==R&&(I===Jl?s.cullFace(s.BACK):I===du?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):re(s.CULL_FACE),R=I}function Ee(I){I!==L&&(W&&s.lineWidth(I),L=I)}function st(I,oe,j){I?(ie(s.POLYGON_OFFSET_FILL),(F!==oe||O!==j)&&(s.polygonOffset(oe,j),F=oe,O=j)):re(s.POLYGON_OFFSET_FILL)}function Se(I){I?ie(s.SCISSOR_TEST):re(s.SCISSOR_TEST)}function k(I){I===void 0&&(I=s.TEXTURE0+G-1),se!==I&&(s.activeTexture(I),se=I)}function E(I,oe,j){j===void 0&&(se===null?j=s.TEXTURE0+G-1:j=se);let Y=ue[j];Y===void 0&&(Y={type:void 0,texture:void 0},ue[j]=Y),(Y.type!==I||Y.texture!==oe)&&(se!==j&&(s.activeTexture(j),se=j),s.bindTexture(I,oe||$[I]),Y.type=I,Y.texture=oe)}function B(){const I=ue[se];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function K(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function je(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pe(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(I){Ke.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),Ke.copy(I))}function me(I){X.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),X.copy(I))}function Ge(I,oe){let j=c.get(oe);j===void 0&&(j=new WeakMap,c.set(oe,j));let Y=j.get(I);Y===void 0&&(Y=s.getUniformBlockIndex(oe,I.name),j.set(I,Y))}function Ue(I,oe){const Y=c.get(oe).get(I);l.get(oe)!==Y&&(s.uniformBlockBinding(oe,Y,I.__bindingPointIndex),l.set(oe,Y))}function tt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},se=null,ue={},h={},u=new WeakMap,f=[],g=null,b=!1,m=null,p=null,y=null,S=null,_=null,C=null,w=null,M=new ge(0,0,0),A=0,x=!1,v=null,R=null,L=null,F=null,O=null,Ke.set(0,0,s.canvas.width,s.canvas.height),X.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ie,disable:re,bindFramebuffer:Ce,drawBuffers:Fe,useProgram:ht,setBlending:N,setMaterial:Xt,setFlipSided:ze,setCullFace:He,setLineWidth:Ee,setPolygonOffset:st,setScissorTest:Se,activeTexture:k,bindTexture:E,unbindTexture:B,compressedTexImage2D:K,compressedTexImage3D:Q,texImage2D:pe,texImage3D:Ae,updateUBOMapping:Ge,uniformBlockBinding:Ue,texStorage2D:je,texStorage3D:ee,texSubImage2D:q,texSubImage3D:ye,compressedTexSubImage2D:le,compressedTexSubImage3D:fe,scissor:Re,viewport:me,reset:tt}}function Yc(s,e,t,n){const i=m_(n);switch(t){case Qh:return s*e;case td:return s*e;case nd:return s*e*2;case ca:return s*e/i.components*i.byteLength;case _l:return s*e/i.components*i.byteLength;case id:return s*e*2/i.components*i.byteLength;case vl:return s*e*2/i.components*i.byteLength;case ed:return s*e*3/i.components*i.byteLength;case en:return s*e*4/i.components*i.byteLength;case xl:return s*e*4/i.components*i.byteLength;case Wr:case Xr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case qr:case Kr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ao:case Ro:return Math.max(s,16)*Math.max(e,8)/4;case To:case wo:return Math.max(s,8)*Math.max(e,8)/2;case ko:case Co:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Po:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Lo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Io:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Do:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Uo:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case No:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Fo:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Oo:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Bo:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case zo:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ho:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Go:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Vo:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case jo:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Wo:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Yr:case Xo:case qo:return Math.ceil(s/4)*Math.ceil(e/4)*16;case sd:case Ko:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Yo:case $o:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function m_(s){switch(s){case Gn:case $h:return{byteLength:1,components:1};case js:case Zh:case er:return{byteLength:2,components:1};case gl:case bl:return{byteLength:2,components:4};case Ei:case ml:case dn:return{byteLength:4,components:1};case Jh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function g_(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Te,d=new WeakMap;let h;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(k,E){return f?new OffscreenCanvas(k,E):qs("canvas")}function b(k,E,B){let K=1;const Q=Se(k);if((Q.width>B||Q.height>B)&&(K=B/Math.max(Q.width,Q.height)),K<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){const q=Math.floor(K*Q.width),ye=Math.floor(K*Q.height);h===void 0&&(h=g(q,ye));const le=E?g(q,ye):h;return le.width=q,le.height=ye,le.getContext("2d").drawImage(k,0,0,q,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+q+"x"+ye+")."),le}else return"data"in k&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),k;return k}function m(k){return k.generateMipmaps}function p(k){s.generateMipmap(k)}function y(k){return k.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?s.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(k,E,B,K,Q=!1){if(k!==null){if(s[k]!==void 0)return s[k];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let q=E;if(E===s.RED&&(B===s.FLOAT&&(q=s.R32F),B===s.HALF_FLOAT&&(q=s.R16F),B===s.UNSIGNED_BYTE&&(q=s.R8)),E===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(q=s.R8UI),B===s.UNSIGNED_SHORT&&(q=s.R16UI),B===s.UNSIGNED_INT&&(q=s.R32UI),B===s.BYTE&&(q=s.R8I),B===s.SHORT&&(q=s.R16I),B===s.INT&&(q=s.R32I)),E===s.RG&&(B===s.FLOAT&&(q=s.RG32F),B===s.HALF_FLOAT&&(q=s.RG16F),B===s.UNSIGNED_BYTE&&(q=s.RG8)),E===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(q=s.RG8UI),B===s.UNSIGNED_SHORT&&(q=s.RG16UI),B===s.UNSIGNED_INT&&(q=s.RG32UI),B===s.BYTE&&(q=s.RG8I),B===s.SHORT&&(q=s.RG16I),B===s.INT&&(q=s.RG32I)),E===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(q=s.RGB8UI),B===s.UNSIGNED_SHORT&&(q=s.RGB16UI),B===s.UNSIGNED_INT&&(q=s.RGB32UI),B===s.BYTE&&(q=s.RGB8I),B===s.SHORT&&(q=s.RGB16I),B===s.INT&&(q=s.RGB32I)),E===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),B===s.UNSIGNED_INT&&(q=s.RGBA32UI),B===s.BYTE&&(q=s.RGBA8I),B===s.SHORT&&(q=s.RGBA16I),B===s.INT&&(q=s.RGBA32I)),E===s.RGB&&B===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),E===s.RGBA){const ye=Q?ha:Be.getTransfer(K);B===s.FLOAT&&(q=s.RGBA32F),B===s.HALF_FLOAT&&(q=s.RGBA16F),B===s.UNSIGNED_BYTE&&(q=ye===et?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function _(k,E){let B;return k?E===null||E===Ei||E===os?B=s.DEPTH24_STENCIL8:E===dn?B=s.DEPTH32F_STENCIL8:E===js&&(B=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ei||E===os?B=s.DEPTH_COMPONENT24:E===dn?B=s.DEPTH_COMPONENT32F:E===js&&(B=s.DEPTH_COMPONENT16),B}function C(k,E){return m(k)===!0||k.isFramebufferTexture&&k.minFilter!==Lt&&k.minFilter!==Ot?Math.log2(Math.max(E.width,E.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?E.mipmaps.length:1}function w(k){const E=k.target;E.removeEventListener("dispose",w),A(E),E.isVideoTexture&&d.delete(E)}function M(k){const E=k.target;E.removeEventListener("dispose",M),v(E)}function A(k){const E=n.get(k);if(E.__webglInit===void 0)return;const B=k.source,K=u.get(B);if(K){const Q=K[E.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&x(k),Object.keys(K).length===0&&u.delete(B)}n.remove(k)}function x(k){const E=n.get(k);s.deleteTexture(E.__webglTexture);const B=k.source,K=u.get(B);delete K[E.__cacheKey],a.memory.textures--}function v(k){const E=n.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),n.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(E.__webglFramebuffer[K]))for(let Q=0;Q<E.__webglFramebuffer[K].length;Q++)s.deleteFramebuffer(E.__webglFramebuffer[K][Q]);else s.deleteFramebuffer(E.__webglFramebuffer[K]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[K])}else{if(Array.isArray(E.__webglFramebuffer))for(let K=0;K<E.__webglFramebuffer.length;K++)s.deleteFramebuffer(E.__webglFramebuffer[K]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let K=0;K<E.__webglColorRenderbuffer.length;K++)E.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[K]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const B=k.textures;for(let K=0,Q=B.length;K<Q;K++){const q=n.get(B[K]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(B[K])}n.remove(k)}let R=0;function L(){R=0}function F(){const k=R;return k>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+k+" texture units while this GPU supports only "+i.maxTextures),R+=1,k}function O(k){const E=[];return E.push(k.wrapS),E.push(k.wrapT),E.push(k.wrapR||0),E.push(k.magFilter),E.push(k.minFilter),E.push(k.anisotropy),E.push(k.internalFormat),E.push(k.format),E.push(k.type),E.push(k.generateMipmaps),E.push(k.premultiplyAlpha),E.push(k.flipY),E.push(k.unpackAlignment),E.push(k.colorSpace),E.join()}function G(k,E){const B=n.get(k);if(k.isVideoTexture&&Ee(k),k.isRenderTargetTexture===!1&&k.version>0&&B.__version!==k.version){const K=k.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(B,k,E);return}}t.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+E)}function W(k,E){const B=n.get(k);if(k.version>0&&B.__version!==k.version){X(B,k,E);return}t.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+E)}function J(k,E){const B=n.get(k);if(k.version>0&&B.__version!==k.version){X(B,k,E);return}t.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+E)}function V(k,E){const B=n.get(k);if(k.version>0&&B.__version!==k.version){te(B,k,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+E)}const se={[as]:s.REPEAT,[ei]:s.CLAMP_TO_EDGE,[na]:s.MIRRORED_REPEAT},ue={[Lt]:s.NEAREST,[Yh]:s.NEAREST_MIPMAP_NEAREST,[Ns]:s.NEAREST_MIPMAP_LINEAR,[Ot]:s.LINEAR,[jr]:s.LINEAR_MIPMAP_NEAREST,[Nn]:s.LINEAR_MIPMAP_LINEAR},xe={[Wu]:s.NEVER,[Zu]:s.ALWAYS,[Xu]:s.LESS,[cd]:s.LEQUAL,[qu]:s.EQUAL,[$u]:s.GEQUAL,[Ku]:s.GREATER,[Yu]:s.NOTEQUAL};function Pe(k,E){if(E.type===dn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Ot||E.magFilter===jr||E.magFilter===Ns||E.magFilter===Nn||E.minFilter===Ot||E.minFilter===jr||E.minFilter===Ns||E.minFilter===Nn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(k,s.TEXTURE_WRAP_S,se[E.wrapS]),s.texParameteri(k,s.TEXTURE_WRAP_T,se[E.wrapT]),(k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY)&&s.texParameteri(k,s.TEXTURE_WRAP_R,se[E.wrapR]),s.texParameteri(k,s.TEXTURE_MAG_FILTER,ue[E.magFilter]),s.texParameteri(k,s.TEXTURE_MIN_FILTER,ue[E.minFilter]),E.compareFunction&&(s.texParameteri(k,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(k,s.TEXTURE_COMPARE_FUNC,xe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Lt||E.minFilter!==Ns&&E.minFilter!==Nn||E.type===dn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");s.texParameterf(k,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Ke(k,E){let B=!1;k.__webglInit===void 0&&(k.__webglInit=!0,E.addEventListener("dispose",w));const K=E.source;let Q=u.get(K);Q===void 0&&(Q={},u.set(K,Q));const q=O(E);if(q!==k.__cacheKey){Q[q]===void 0&&(Q[q]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Q[q].usedTimes++;const ye=Q[k.__cacheKey];ye!==void 0&&(Q[k.__cacheKey].usedTimes--,ye.usedTimes===0&&x(E)),k.__cacheKey=q,k.__webglTexture=Q[q].texture}return B}function X(k,E,B){let K=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(K=s.TEXTURE_3D);const Q=Ke(k,E),q=E.source;t.bindTexture(K,k.__webglTexture,s.TEXTURE0+B);const ye=n.get(q);if(q.version!==ye.__version||Q===!0){t.activeTexture(s.TEXTURE0+B);const le=Be.getPrimaries(Be.workingColorSpace),fe=E.colorSpace===Qn?null:Be.getPrimaries(E.colorSpace),je=E.colorSpace===Qn||le===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let ee=b(E.image,!1,i.maxTextureSize);ee=st(E,ee);const pe=r.convert(E.format,E.colorSpace),Ae=r.convert(E.type);let Re=S(E.internalFormat,pe,Ae,E.colorSpace,E.isVideoTexture);Pe(K,E);let me;const Ge=E.mipmaps,Ue=E.isVideoTexture!==!0,tt=ye.__version===void 0||Q===!0,I=q.dataReady,oe=C(E,ee);if(E.isDepthTexture)Re=_(E.format===ls,E.type),tt&&(Ue?t.texStorage2D(s.TEXTURE_2D,1,Re,ee.width,ee.height):t.texImage2D(s.TEXTURE_2D,0,Re,ee.width,ee.height,0,pe,Ae,null));else if(E.isDataTexture)if(Ge.length>0){Ue&&tt&&t.texStorage2D(s.TEXTURE_2D,oe,Re,Ge[0].width,Ge[0].height);for(let j=0,Y=Ge.length;j<Y;j++)me=Ge[j],Ue?I&&t.texSubImage2D(s.TEXTURE_2D,j,0,0,me.width,me.height,pe,Ae,me.data):t.texImage2D(s.TEXTURE_2D,j,Re,me.width,me.height,0,pe,Ae,me.data);E.generateMipmaps=!1}else Ue?(tt&&t.texStorage2D(s.TEXTURE_2D,oe,Re,ee.width,ee.height),I&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ee.width,ee.height,pe,Ae,ee.data)):t.texImage2D(s.TEXTURE_2D,0,Re,ee.width,ee.height,0,pe,Ae,ee.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ue&&tt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,oe,Re,Ge[0].width,Ge[0].height,ee.depth);for(let j=0,Y=Ge.length;j<Y;j++)if(me=Ge[j],E.format!==en)if(pe!==null)if(Ue){if(I)if(E.layerUpdates.size>0){const de=Yc(me.width,me.height,E.format,E.type);for(const ce of E.layerUpdates){const Le=me.data.subarray(ce*de/me.data.BYTES_PER_ELEMENT,(ce+1)*de/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,ce,me.width,me.height,1,pe,Le)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,me.width,me.height,ee.depth,pe,me.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,j,Re,me.width,me.height,ee.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?I&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,me.width,me.height,ee.depth,pe,Ae,me.data):t.texImage3D(s.TEXTURE_2D_ARRAY,j,Re,me.width,me.height,ee.depth,0,pe,Ae,me.data)}else{Ue&&tt&&t.texStorage2D(s.TEXTURE_2D,oe,Re,Ge[0].width,Ge[0].height);for(let j=0,Y=Ge.length;j<Y;j++)me=Ge[j],E.format!==en?pe!==null?Ue?I&&t.compressedTexSubImage2D(s.TEXTURE_2D,j,0,0,me.width,me.height,pe,me.data):t.compressedTexImage2D(s.TEXTURE_2D,j,Re,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?I&&t.texSubImage2D(s.TEXTURE_2D,j,0,0,me.width,me.height,pe,Ae,me.data):t.texImage2D(s.TEXTURE_2D,j,Re,me.width,me.height,0,pe,Ae,me.data)}else if(E.isDataArrayTexture)if(Ue){if(tt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,oe,Re,ee.width,ee.height,ee.depth),I)if(E.layerUpdates.size>0){const j=Yc(ee.width,ee.height,E.format,E.type);for(const Y of E.layerUpdates){const de=ee.data.subarray(Y*j/ee.data.BYTES_PER_ELEMENT,(Y+1)*j/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Y,ee.width,ee.height,1,pe,Ae,de)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,pe,Ae,ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Re,ee.width,ee.height,ee.depth,0,pe,Ae,ee.data);else if(E.isData3DTexture)Ue?(tt&&t.texStorage3D(s.TEXTURE_3D,oe,Re,ee.width,ee.height,ee.depth),I&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,pe,Ae,ee.data)):t.texImage3D(s.TEXTURE_3D,0,Re,ee.width,ee.height,ee.depth,0,pe,Ae,ee.data);else if(E.isFramebufferTexture){if(tt)if(Ue)t.texStorage2D(s.TEXTURE_2D,oe,Re,ee.width,ee.height);else{let j=ee.width,Y=ee.height;for(let de=0;de<oe;de++)t.texImage2D(s.TEXTURE_2D,de,Re,j,Y,0,pe,Ae,null),j>>=1,Y>>=1}}else if(Ge.length>0){if(Ue&&tt){const j=Se(Ge[0]);t.texStorage2D(s.TEXTURE_2D,oe,Re,j.width,j.height)}for(let j=0,Y=Ge.length;j<Y;j++)me=Ge[j],Ue?I&&t.texSubImage2D(s.TEXTURE_2D,j,0,0,pe,Ae,me):t.texImage2D(s.TEXTURE_2D,j,Re,pe,Ae,me);E.generateMipmaps=!1}else if(Ue){if(tt){const j=Se(ee);t.texStorage2D(s.TEXTURE_2D,oe,Re,j.width,j.height)}I&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,pe,Ae,ee)}else t.texImage2D(s.TEXTURE_2D,0,Re,pe,Ae,ee);m(E)&&p(K),ye.__version=q.version,E.onUpdate&&E.onUpdate(E)}k.__version=E.version}function te(k,E,B){if(E.image.length!==6)return;const K=Ke(k,E),Q=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+B);const q=n.get(Q);if(Q.version!==q.__version||K===!0){t.activeTexture(s.TEXTURE0+B);const ye=Be.getPrimaries(Be.workingColorSpace),le=E.colorSpace===Qn?null:Be.getPrimaries(E.colorSpace),fe=E.colorSpace===Qn||ye===le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const je=E.isCompressedTexture||E.image[0].isCompressedTexture,ee=E.image[0]&&E.image[0].isDataTexture,pe=[];for(let Y=0;Y<6;Y++)!je&&!ee?pe[Y]=b(E.image[Y],!0,i.maxCubemapSize):pe[Y]=ee?E.image[Y].image:E.image[Y],pe[Y]=st(E,pe[Y]);const Ae=pe[0],Re=r.convert(E.format,E.colorSpace),me=r.convert(E.type),Ge=S(E.internalFormat,Re,me,E.colorSpace),Ue=E.isVideoTexture!==!0,tt=q.__version===void 0||K===!0,I=Q.dataReady;let oe=C(E,Ae);Pe(s.TEXTURE_CUBE_MAP,E);let j;if(je){Ue&&tt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,oe,Ge,Ae.width,Ae.height);for(let Y=0;Y<6;Y++){j=pe[Y].mipmaps;for(let de=0;de<j.length;de++){const ce=j[de];E.format!==en?Re!==null?Ue?I&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de,0,0,ce.width,ce.height,Re,ce.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de,Ge,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de,0,0,ce.width,ce.height,Re,me,ce.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de,Ge,ce.width,ce.height,0,Re,me,ce.data)}}}else{if(j=E.mipmaps,Ue&&tt){j.length>0&&oe++;const Y=Se(pe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,oe,Ge,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(ee){Ue?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,pe[Y].width,pe[Y].height,Re,me,pe[Y].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ge,pe[Y].width,pe[Y].height,0,Re,me,pe[Y].data);for(let de=0;de<j.length;de++){const Le=j[de].image[Y].image;Ue?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de+1,0,0,Le.width,Le.height,Re,me,Le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de+1,Ge,Le.width,Le.height,0,Re,me,Le.data)}}else{Ue?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Re,me,pe[Y]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ge,Re,me,pe[Y]);for(let de=0;de<j.length;de++){const ce=j[de];Ue?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de+1,0,0,Re,me,ce.image[Y]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de+1,Ge,Re,me,ce.image[Y])}}}m(E)&&p(s.TEXTURE_CUBE_MAP),q.__version=Q.version,E.onUpdate&&E.onUpdate(E)}k.__version=E.version}function $(k,E,B,K,Q,q){const ye=r.convert(B.format,B.colorSpace),le=r.convert(B.type),fe=S(B.internalFormat,ye,le,B.colorSpace),je=n.get(E),ee=n.get(B);if(ee.__renderTarget=E,!je.__hasExternalTextures){const pe=Math.max(1,E.width>>q),Ae=Math.max(1,E.height>>q);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?t.texImage3D(Q,q,fe,pe,Ae,E.depth,0,ye,le,null):t.texImage2D(Q,q,fe,pe,Ae,0,ye,le,null)}t.bindFramebuffer(s.FRAMEBUFFER,k),He(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,Q,ee.__webglTexture,0,ze(E)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,Q,ee.__webglTexture,q),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ie(k,E,B){if(s.bindRenderbuffer(s.RENDERBUFFER,k),E.depthBuffer){const K=E.depthTexture,Q=K&&K.isDepthTexture?K.type:null,q=_(E.stencilBuffer,Q),ye=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=ze(E);He(E)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,le,q,E.width,E.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,le,q,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,q,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,k)}else{const K=E.textures;for(let Q=0;Q<K.length;Q++){const q=K[Q],ye=r.convert(q.format,q.colorSpace),le=r.convert(q.type),fe=S(q.internalFormat,ye,le,q.colorSpace),je=ze(E);B&&He(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,je,fe,E.width,E.height):He(E)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,je,fe,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,fe,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function re(k,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,k),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(E.depthTexture);K.__renderTarget=E,(!K.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),G(E.depthTexture,0);const Q=K.__webglTexture,q=ze(E);if(E.depthTexture.format===Qi)He(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(E.depthTexture.format===ls)He(E)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ce(k){const E=n.get(k),B=k.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==k.depthTexture){const K=k.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),K){const Q=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,K.removeEventListener("dispose",Q)};K.addEventListener("dispose",Q),E.__depthDisposeCallback=Q}E.__boundDepthTexture=K}if(k.depthTexture&&!E.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");re(E.__webglFramebuffer,k)}else if(B){E.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[K]),E.__webglDepthbuffer[K]===void 0)E.__webglDepthbuffer[K]=s.createRenderbuffer(),ie(E.__webglDepthbuffer[K],k,!1);else{const Q=k.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=E.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,q)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),ie(E.__webglDepthbuffer,k,!1);else{const K=k.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,Q)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Fe(k,E,B){const K=n.get(k);E!==void 0&&$(K.__webglFramebuffer,k,k.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&Ce(k)}function ht(k){const E=k.texture,B=n.get(k),K=n.get(E);k.addEventListener("dispose",M);const Q=k.textures,q=k.isWebGLCubeRenderTarget===!0,ye=Q.length>1;if(ye||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=E.version,a.memory.textures++),q){B.__webglFramebuffer=[];for(let le=0;le<6;le++)if(E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer[le]=[];for(let fe=0;fe<E.mipmaps.length;fe++)B.__webglFramebuffer[le][fe]=s.createFramebuffer()}else B.__webglFramebuffer[le]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer=[];for(let le=0;le<E.mipmaps.length;le++)B.__webglFramebuffer[le]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(ye)for(let le=0,fe=Q.length;le<fe;le++){const je=n.get(Q[le]);je.__webglTexture===void 0&&(je.__webglTexture=s.createTexture(),a.memory.textures++)}if(k.samples>0&&He(k)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let le=0;le<Q.length;le++){const fe=Q[le];B.__webglColorRenderbuffer[le]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[le]);const je=r.convert(fe.format,fe.colorSpace),ee=r.convert(fe.type),pe=S(fe.internalFormat,je,ee,fe.colorSpace,k.isXRRenderTarget===!0),Ae=ze(k);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,pe,k.width,k.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,B.__webglColorRenderbuffer[le])}s.bindRenderbuffer(s.RENDERBUFFER,null),k.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),ie(B.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),Pe(s.TEXTURE_CUBE_MAP,E);for(let le=0;le<6;le++)if(E.mipmaps&&E.mipmaps.length>0)for(let fe=0;fe<E.mipmaps.length;fe++)$(B.__webglFramebuffer[le][fe],k,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,fe);else $(B.__webglFramebuffer[le],k,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(E)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let le=0,fe=Q.length;le<fe;le++){const je=Q[le],ee=n.get(je);t.bindTexture(s.TEXTURE_2D,ee.__webglTexture),Pe(s.TEXTURE_2D,je),$(B.__webglFramebuffer,k,je,s.COLOR_ATTACHMENT0+le,s.TEXTURE_2D,0),m(je)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let le=s.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(le=k.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(le,K.__webglTexture),Pe(le,E),E.mipmaps&&E.mipmaps.length>0)for(let fe=0;fe<E.mipmaps.length;fe++)$(B.__webglFramebuffer[fe],k,E,s.COLOR_ATTACHMENT0,le,fe);else $(B.__webglFramebuffer,k,E,s.COLOR_ATTACHMENT0,le,0);m(E)&&p(le),t.unbindTexture()}k.depthBuffer&&Ce(k)}function Ve(k){const E=k.textures;for(let B=0,K=E.length;B<K;B++){const Q=E[B];if(m(Q)){const q=y(k),ye=n.get(Q).__webglTexture;t.bindTexture(q,ye),p(q),t.unbindTexture()}}}const ut=[],N=[];function Xt(k){if(k.samples>0){if(He(k)===!1){const E=k.textures,B=k.width,K=k.height;let Q=s.COLOR_BUFFER_BIT;const q=k.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=n.get(k),le=E.length>1;if(le)for(let fe=0;fe<E.length;fe++)t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let fe=0;fe<E.length;fe++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),le){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ye.__webglColorRenderbuffer[fe]);const je=n.get(E[fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,je,0)}s.blitFramebuffer(0,0,B,K,0,0,B,K,Q,s.NEAREST),l===!0&&(ut.length=0,N.length=0,ut.push(s.COLOR_ATTACHMENT0+fe),k.depthBuffer&&k.resolveDepthBuffer===!1&&(ut.push(q),N.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,N)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ut))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),le)for(let fe=0;fe<E.length;fe++){t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,ye.__webglColorRenderbuffer[fe]);const je=n.get(E[fe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,je,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.resolveDepthBuffer===!1&&l){const E=k.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function ze(k){return Math.min(i.maxSamples,k.samples)}function He(k){const E=n.get(k);return k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ee(k){const E=a.render.frame;d.get(k)!==E&&(d.set(k,E),k.update())}function st(k,E){const B=k.colorSpace,K=k.format,Q=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||B!==It&&B!==Qn&&(Be.getTransfer(B)===et?(K!==en||Q!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),E}function Se(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(c.width=k.naturalWidth||k.width,c.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(c.width=k.displayWidth,c.height=k.displayHeight):(c.width=k.width,c.height=k.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=L,this.setTexture2D=G,this.setTexture2DArray=W,this.setTexture3D=J,this.setTextureCube=V,this.rebindTextures=Fe,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=Xt,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=$,this.useMultisampledRTT=He}function b_(s,e){function t(n,i=Qn){let r;const a=Be.getTransfer(i);if(n===Gn)return s.UNSIGNED_BYTE;if(n===gl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===bl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Jh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===$h)return s.BYTE;if(n===Zh)return s.SHORT;if(n===js)return s.UNSIGNED_SHORT;if(n===ml)return s.INT;if(n===Ei)return s.UNSIGNED_INT;if(n===dn)return s.FLOAT;if(n===er)return s.HALF_FLOAT;if(n===Qh)return s.ALPHA;if(n===ed)return s.RGB;if(n===en)return s.RGBA;if(n===td)return s.LUMINANCE;if(n===nd)return s.LUMINANCE_ALPHA;if(n===Qi)return s.DEPTH_COMPONENT;if(n===ls)return s.DEPTH_STENCIL;if(n===ca)return s.RED;if(n===_l)return s.RED_INTEGER;if(n===id)return s.RG;if(n===vl)return s.RG_INTEGER;if(n===xl)return s.RGBA_INTEGER;if(n===Wr||n===Xr||n===qr||n===Kr)if(a===et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Wr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Wr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Kr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===To||n===Ao||n===wo||n===Ro)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===To)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ao)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ro)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ko||n===Co||n===Po)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ko||n===Co)return a===et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Po)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Lo||n===Io||n===Do||n===Uo||n===No||n===Fo||n===Oo||n===Bo||n===zo||n===Ho||n===Go||n===Vo||n===jo||n===Wo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Lo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Io)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Do)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Uo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===No)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Oo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Bo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ho)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Go)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===jo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yr||n===Xo||n===qo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Yr)return a===et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sd||n===Ko||n===Yo||n===$o)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Yr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ko)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Yo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$o)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===os?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class __ extends Rt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class tn extends lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const v_={type:"move"};class Wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const b of e.hand.values()){const m=t.getJointPose(b,n),p=this._getHandJoint(c,b);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(v_)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new tn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const x_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,y_=`
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

}`;class M_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new mt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new oi({vertexShader:x_,fragmentShader:y_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ct(new Ai(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class S_ extends Ti{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,h=null,u=null,f=null,g=null;const b=new M_,m=t.getContextAttributes();let p=null,y=null;const S=[],_=[],C=new Te;let w=null;const M=new Rt;M.viewport=new qe;const A=new Rt;A.viewport=new qe;const x=[M,A],v=new __;let R=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let te=S[X];return te===void 0&&(te=new Wa,S[X]=te),te.getTargetRaySpace()},this.getControllerGrip=function(X){let te=S[X];return te===void 0&&(te=new Wa,S[X]=te),te.getGripSpace()},this.getHand=function(X){let te=S[X];return te===void 0&&(te=new Wa,S[X]=te),te.getHandSpace()};function F(X){const te=_.indexOf(X.inputSource);if(te===-1)return;const $=S[te];$!==void 0&&($.update(X.inputSource,X.frame,c||a),$.dispatchEvent({type:X.type,data:X.inputSource}))}function O(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",G);for(let X=0;X<S.length;X++){const te=_[X];te!==null&&(_[X]=null,S[X].disconnect(te))}R=null,L=null,b.reset(),e.setRenderTarget(p),f=null,u=null,h=null,i=null,y=null,Ke.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",O),i.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),i.renderState.layers===void 0){const te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,te),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new ai(f.framebufferWidth,f.framebufferHeight,{format:en,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,$=null,ie=null;m.depth&&(ie=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=m.stencil?ls:Qi,$=m.stencil?os:Ei);const re={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:r};h=new XRWebGLBinding(i,t),u=h.createProjectionLayer(re),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new ai(u.textureWidth,u.textureHeight,{format:en,type:Gn,depthTexture:new xd(u.textureWidth,u.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ke.setContext(i),Ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function G(X){for(let te=0;te<X.removed.length;te++){const $=X.removed[te],ie=_.indexOf($);ie>=0&&(_[ie]=null,S[ie].disconnect($))}for(let te=0;te<X.added.length;te++){const $=X.added[te];let ie=_.indexOf($);if(ie===-1){for(let Ce=0;Ce<S.length;Ce++)if(Ce>=_.length){_.push($),ie=Ce;break}else if(_[Ce]===null){_[Ce]=$,ie=Ce;break}if(ie===-1)break}const re=S[ie];re&&re.connect($)}}const W=new P,J=new P;function V(X,te,$){W.setFromMatrixPosition(te.matrixWorld),J.setFromMatrixPosition($.matrixWorld);const ie=W.distanceTo(J),re=te.projectionMatrix.elements,Ce=$.projectionMatrix.elements,Fe=re[14]/(re[10]-1),ht=re[14]/(re[10]+1),Ve=(re[9]+1)/re[5],ut=(re[9]-1)/re[5],N=(re[8]-1)/re[0],Xt=(Ce[8]+1)/Ce[0],ze=Fe*N,He=Fe*Xt,Ee=ie/(-N+Xt),st=Ee*-N;if(te.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(st),X.translateZ(Ee),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),re[10]===-1)X.projectionMatrix.copy(te.projectionMatrix),X.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const Se=Fe+Ee,k=ht+Ee,E=ze-st,B=He+(ie-st),K=Ve*ht/k*Se,Q=ut*ht/k*Se;X.projectionMatrix.makePerspective(E,B,K,Q,Se,k),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function se(X,te){te===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(te.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let te=X.near,$=X.far;b.texture!==null&&(b.depthNear>0&&(te=b.depthNear),b.depthFar>0&&($=b.depthFar)),v.near=A.near=M.near=te,v.far=A.far=M.far=$,(R!==v.near||L!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),R=v.near,L=v.far),M.layers.mask=X.layers.mask|2,A.layers.mask=X.layers.mask|4,v.layers.mask=M.layers.mask|A.layers.mask;const ie=X.parent,re=v.cameras;se(v,ie);for(let Ce=0;Ce<re.length;Ce++)se(re[Ce],ie);re.length===2?V(v,M,A):v.projectionMatrix.copy(M.projectionMatrix),ue(X,v,ie)};function ue(X,te,$){$===null?X.matrix.copy(te.matrixWorld):(X.matrix.copy($.matrixWorld),X.matrix.invert(),X.matrix.multiply(te.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(te.projectionMatrix),X.projectionMatrixInverse.copy(te.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=cs*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(X){l=X,u!==null&&(u.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(v)};let xe=null;function Pe(X,te){if(d=te.getViewerPose(c||a),g=te,d!==null){const $=d.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let ie=!1;$.length!==v.cameras.length&&(v.cameras.length=0,ie=!0);for(let Ce=0;Ce<$.length;Ce++){const Fe=$[Ce];let ht=null;if(f!==null)ht=f.getViewport(Fe);else{const ut=h.getViewSubImage(u,Fe);ht=ut.viewport,Ce===0&&(e.setRenderTargetTextures(y,ut.colorTexture,u.ignoreDepthValues?void 0:ut.depthStencilTexture),e.setRenderTarget(y))}let Ve=x[Ce];Ve===void 0&&(Ve=new Rt,Ve.layers.enable(Ce),Ve.viewport=new qe,x[Ce]=Ve),Ve.matrix.fromArray(Fe.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Fe.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(ht.x,ht.y,ht.width,ht.height),Ce===0&&(v.matrix.copy(Ve.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ie===!0&&v.cameras.push(Ve)}const re=i.enabledFeatures;if(re&&re.includes("depth-sensing")){const Ce=h.getDepthInformation($[0]);Ce&&Ce.isValid&&Ce.texture&&b.init(e,Ce,i.renderState)}}for(let $=0;$<S.length;$++){const ie=_[$],re=S[$];ie!==null&&re!==void 0&&re.update(ie,te,c||a)}xe&&xe(X,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}const Ke=new vd;Ke.setAnimationLoop(Pe),this.setAnimationLoop=function(X){xe=X},this.dispose=function(){}}}const pi=new vn,E_=new we;function T_(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,gd(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,S,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),d(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),b(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===zt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===zt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),S=y.envMap,_=y.envMapRotation;S&&(m.envMap.value=S,pi.copy(_),pi.x*=-1,pi.y*=-1,pi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),m.envMapRotation.value.setFromMatrix4(E_.makeRotationFromEuler(pi)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===zt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function b(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function A_(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){const _=S.program;n.uniformBlockBinding(y,_)}function c(y,S){let _=i[y.id];_===void 0&&(g(y),_=d(y),i[y.id]=_,y.addEventListener("dispose",m));const C=S.program;n.updateUBOMapping(y,C);const w=e.render.frame;r[y.id]!==w&&(u(y),r[y.id]=w)}function d(y){const S=h();y.__bindingPointIndex=S;const _=s.createBuffer(),C=y.__size,w=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,C,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,_),_}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const S=i[y.id],_=y.uniforms,C=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let w=0,M=_.length;w<M;w++){const A=Array.isArray(_[w])?_[w]:[_[w]];for(let x=0,v=A.length;x<v;x++){const R=A[x];if(f(R,w,x,C)===!0){const L=R.__offset,F=Array.isArray(R.value)?R.value:[R.value];let O=0;for(let G=0;G<F.length;G++){const W=F[G],J=b(W);typeof W=="number"||typeof W=="boolean"?(R.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,L+O,R.__data)):W.isMatrix3?(R.__data[0]=W.elements[0],R.__data[1]=W.elements[1],R.__data[2]=W.elements[2],R.__data[3]=0,R.__data[4]=W.elements[3],R.__data[5]=W.elements[4],R.__data[6]=W.elements[5],R.__data[7]=0,R.__data[8]=W.elements[6],R.__data[9]=W.elements[7],R.__data[10]=W.elements[8],R.__data[11]=0):(W.toArray(R.__data,O),O+=J.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,L,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,S,_,C){const w=y.value,M=S+"_"+_;if(C[M]===void 0)return typeof w=="number"||typeof w=="boolean"?C[M]=w:C[M]=w.clone(),!0;{const A=C[M];if(typeof w=="number"||typeof w=="boolean"){if(A!==w)return C[M]=w,!0}else if(A.equals(w)===!1)return A.copy(w),!0}return!1}function g(y){const S=y.uniforms;let _=0;const C=16;for(let M=0,A=S.length;M<A;M++){const x=Array.isArray(S[M])?S[M]:[S[M]];for(let v=0,R=x.length;v<R;v++){const L=x[v],F=Array.isArray(L.value)?L.value:[L.value];for(let O=0,G=F.length;O<G;O++){const W=F[O],J=b(W),V=_%C,se=V%J.boundary,ue=V+se;_+=se,ue!==0&&C-ue<J.storage&&(_+=C-ue),L.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=_,_+=J.storage}}}const w=_%C;return w>0&&(_+=C-w),y.__size=_,y.__cache={},this}function b(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function m(y){const S=y.target;S.removeEventListener("dispose",m);const _=a.indexOf(S.__bindingPointIndex);a.splice(_,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function p(){for(const y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}class w_{constructor(e={}){const{canvas:t=mf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),b=new Int32Array(4);let m=null,p=null;const y=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ft,this.toneMapping=ri,this.toneMappingExposure=1;const _=this;let C=!1,w=0,M=0,A=null,x=-1,v=null;const R=new qe,L=new qe;let F=null;const O=new ge(0);let G=0,W=t.width,J=t.height,V=1,se=null,ue=null;const xe=new qe(0,0,W,J),Pe=new qe(0,0,W,J);let Ke=!1;const X=new El;let te=!1,$=!1;const ie=new we,re=new we,Ce=new P,Fe=new qe,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function ut(){return A===null?V:1}let N=n;function Xt(T,D){return t.getContext(T,D)}try{const T={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${pl}`),t.addEventListener("webglcontextlost",Y,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",ce,!1),N===null){const D="webgl2";if(N=Xt(D,T),N===null)throw Xt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ze,He,Ee,st,Se,k,E,B,K,Q,q,ye,le,fe,je,ee,pe,Ae,Re,me,Ge,Ue,tt,I;function oe(){ze=new Lg(N),ze.init(),Ue=new b_(N,ze),He=new Ag(N,ze,e,Ue),Ee=new p_(N,ze),He.reverseDepthBuffer&&u&&Ee.buffers.depth.setReversed(!0),st=new Ug(N),Se=new Qb,k=new g_(N,ze,Ee,Se,He,Ue,st),E=new Rg(_),B=new Pg(_),K=new Gf(N),tt=new Eg(N,K),Q=new Ig(N,K,st,tt),q=new Fg(N,Q,K,st),Re=new Ng(N,He,k),ee=new wg(Se),ye=new Jb(_,E,B,ze,He,tt,ee),le=new T_(_,Se),fe=new t_,je=new o_(ze),Ae=new Sg(_,E,B,Ee,q,f,l),pe=new u_(_,q,He),I=new A_(N,st,He,Ee),me=new Tg(N,ze,st),Ge=new Dg(N,ze,st),st.programs=ye.programs,_.capabilities=He,_.extensions=ze,_.properties=Se,_.renderLists=fe,_.shadowMap=pe,_.state=Ee,_.info=st}oe();const j=new S_(_,N);this.xr=j,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const T=ze.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ze.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(T){T!==void 0&&(V=T,this.setSize(W,J,!1))},this.getSize=function(T){return T.set(W,J)},this.setSize=function(T,D,z=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=T,J=D,t.width=Math.floor(T*V),t.height=Math.floor(D*V),z===!0&&(t.style.width=T+"px",t.style.height=D+"px"),this.setViewport(0,0,T,D)},this.getDrawingBufferSize=function(T){return T.set(W*V,J*V).floor()},this.setDrawingBufferSize=function(T,D,z){W=T,J=D,V=z,t.width=Math.floor(T*z),t.height=Math.floor(D*z),this.setViewport(0,0,T,D)},this.getCurrentViewport=function(T){return T.copy(R)},this.getViewport=function(T){return T.copy(xe)},this.setViewport=function(T,D,z,H){T.isVector4?xe.set(T.x,T.y,T.z,T.w):xe.set(T,D,z,H),Ee.viewport(R.copy(xe).multiplyScalar(V).round())},this.getScissor=function(T){return T.copy(Pe)},this.setScissor=function(T,D,z,H){T.isVector4?Pe.set(T.x,T.y,T.z,T.w):Pe.set(T,D,z,H),Ee.scissor(L.copy(Pe).multiplyScalar(V).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(T){Ee.setScissorTest(Ke=T)},this.setOpaqueSort=function(T){se=T},this.setTransparentSort=function(T){ue=T},this.getClearColor=function(T){return T.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(T=!0,D=!0,z=!0){let H=0;if(T){let U=!1;if(A!==null){const ne=A.texture.format;U=ne===xl||ne===vl||ne===_l}if(U){const ne=A.texture.type,he=ne===Gn||ne===Ei||ne===js||ne===os||ne===gl||ne===bl,be=Ae.getClearColor(),_e=Ae.getClearAlpha(),ke=be.r,Ie=be.g,ve=be.b;he?(g[0]=ke,g[1]=Ie,g[2]=ve,g[3]=_e,N.clearBufferuiv(N.COLOR,0,g)):(b[0]=ke,b[1]=Ie,b[2]=ve,b[3]=_e,N.clearBufferiv(N.COLOR,0,b))}else H|=N.COLOR_BUFFER_BIT}D&&(H|=N.DEPTH_BUFFER_BIT),z&&(H|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Y,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),fe.dispose(),je.dispose(),Se.dispose(),E.dispose(),B.dispose(),q.dispose(),tt.dispose(),I.dispose(),ye.dispose(),j.dispose(),j.removeEventListener("sessionstart",jl),j.removeEventListener("sessionend",Wl),li.stop()};function Y(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const T=st.autoReset,D=pe.enabled,z=pe.autoUpdate,H=pe.needsUpdate,U=pe.type;oe(),st.autoReset=T,pe.enabled=D,pe.autoUpdate=z,pe.needsUpdate=H,pe.type=U}function ce(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Le(T){const D=T.target;D.removeEventListener("dispose",Le),dt(D)}function dt(T){St(T),Se.remove(T)}function St(T){const D=Se.get(T).programs;D!==void 0&&(D.forEach(function(z){ye.releaseProgram(z)}),T.isShaderMaterial&&ye.releaseShaderCache(T))}this.renderBufferDirect=function(T,D,z,H,U,ne){D===null&&(D=ht);const he=U.isMesh&&U.matrixWorld.determinant()<0,be=ou(T,D,z,H,U);Ee.setMaterial(H,he);let _e=z.index,ke=1;if(H.wireframe===!0){if(_e=Q.getWireframeAttribute(z),_e===void 0)return;ke=2}const Ie=z.drawRange,ve=z.attributes.position;let Xe=Ie.start*ke,nt=(Ie.start+Ie.count)*ke;ne!==null&&(Xe=Math.max(Xe,ne.start*ke),nt=Math.min(nt,(ne.start+ne.count)*ke)),_e!==null?(Xe=Math.max(Xe,0),nt=Math.min(nt,_e.count)):ve!=null&&(Xe=Math.max(Xe,0),nt=Math.min(nt,ve.count));const rt=nt-Xe;if(rt<0||rt===1/0)return;tt.setup(U,H,be,z,_e);let Dt,Ye=me;if(_e!==null&&(Dt=K.get(_e),Ye=Ge,Ye.setIndex(Dt)),U.isMesh)H.wireframe===!0?(Ee.setLineWidth(H.wireframeLinewidth*ut()),Ye.setMode(N.LINES)):Ye.setMode(N.TRIANGLES);else if(U.isLine){let Me=H.linewidth;Me===void 0&&(Me=1),Ee.setLineWidth(Me*ut()),U.isLineSegments?Ye.setMode(N.LINES):U.isLineLoop?Ye.setMode(N.LINE_LOOP):Ye.setMode(N.LINE_STRIP)}else U.isPoints?Ye.setMode(N.POINTS):U.isSprite&&Ye.setMode(N.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Ye.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(ze.get("WEBGL_multi_draw"))Ye.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Me=U._multiDrawStarts,En=U._multiDrawCounts,$e=U._multiDrawCount,an=_e?K.get(_e).bytesPerElement:1,wi=Se.get(H).currentProgram.getUniforms();for(let Gt=0;Gt<$e;Gt++)wi.setValue(N,"_gl_DrawID",Gt),Ye.render(Me[Gt]/an,En[Gt])}else if(U.isInstancedMesh)Ye.renderInstances(Xe,rt,U.count);else if(z.isInstancedBufferGeometry){const Me=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,En=Math.min(z.instanceCount,Me);Ye.renderInstances(Xe,rt,En)}else Ye.render(Xe,rt)};function Je(T,D,z){T.transparent===!0&&T.side===Jt&&T.forceSinglePass===!1?(T.side=zt,T.needsUpdate=!0,ar(T,D,z),T.side=Hn,T.needsUpdate=!0,ar(T,D,z),T.side=Jt):ar(T,D,z)}this.compile=function(T,D,z=null){z===null&&(z=T),p=je.get(z),p.init(D),S.push(p),z.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),T!==z&&T.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const H=new Set;return T.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const ne=U.material;if(ne)if(Array.isArray(ne))for(let he=0;he<ne.length;he++){const be=ne[he];Je(be,z,U),H.add(be)}else Je(ne,z,U),H.add(ne)}),S.pop(),p=null,H},this.compileAsync=function(T,D,z=null){const H=this.compile(T,D,z);return new Promise(U=>{function ne(){if(H.forEach(function(he){Se.get(he).currentProgram.isReady()&&H.delete(he)}),H.size===0){U(T);return}setTimeout(ne,10)}ze.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let rn=null;function Sn(T){rn&&rn(T)}function jl(){li.stop()}function Wl(){li.start()}const li=new vd;li.setAnimationLoop(Sn),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(T){rn=T,j.setAnimationLoop(T),T===null?li.stop():li.start()},j.addEventListener("sessionstart",jl),j.addEventListener("sessionend",Wl),this.render=function(T,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(D),D=j.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,D,A),p=je.get(T,S.length),p.init(D),S.push(p),re.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),X.setFromProjectionMatrix(re),$=this.localClippingEnabled,te=ee.init(this.clippingPlanes,$),m=fe.get(T,y.length),m.init(),y.push(m),j.enabled===!0&&j.isPresenting===!0){const ne=_.xr.getDepthSensingMesh();ne!==null&&ba(ne,D,-1/0,_.sortObjects)}ba(T,D,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(se,ue),Ve=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Ve&&Ae.addToRenderList(m,T),this.info.render.frame++,te===!0&&ee.beginShadows();const z=p.state.shadowsArray;pe.render(z,T,D),te===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,U=m.transmissive;if(p.setupLights(),D.isArrayCamera){const ne=D.cameras;if(U.length>0)for(let he=0,be=ne.length;he<be;he++){const _e=ne[he];ql(H,U,T,_e)}Ve&&Ae.render(T);for(let he=0,be=ne.length;he<be;he++){const _e=ne[he];Xl(m,T,_e,_e.viewport)}}else U.length>0&&ql(H,U,T,D),Ve&&Ae.render(T),Xl(m,T,D);A!==null&&(k.updateMultisampleRenderTarget(A),k.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(_,T,D),tt.resetDefaultState(),x=-1,v=null,S.pop(),S.length>0?(p=S[S.length-1],te===!0&&ee.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function ba(T,D,z,H){if(T.visible===!1)return;if(T.layers.test(D.layers)){if(T.isGroup)z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(D);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||X.intersectsSprite(T)){H&&Fe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(re);const he=q.update(T),be=T.material;be.visible&&m.push(T,he,be,z,Fe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||X.intersectsObject(T))){const he=q.update(T),be=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Fe.copy(T.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Fe.copy(he.boundingSphere.center)),Fe.applyMatrix4(T.matrixWorld).applyMatrix4(re)),Array.isArray(be)){const _e=he.groups;for(let ke=0,Ie=_e.length;ke<Ie;ke++){const ve=_e[ke],Xe=be[ve.materialIndex];Xe&&Xe.visible&&m.push(T,he,Xe,z,Fe.z,ve)}}else be.visible&&m.push(T,he,be,z,Fe.z,null)}}const ne=T.children;for(let he=0,be=ne.length;he<be;he++)ba(ne[he],D,z,H)}function Xl(T,D,z,H){const U=T.opaque,ne=T.transmissive,he=T.transparent;p.setupLightsView(z),te===!0&&ee.setGlobalState(_.clippingPlanes,z),H&&Ee.viewport(R.copy(H)),U.length>0&&rr(U,D,z),ne.length>0&&rr(ne,D,z),he.length>0&&rr(he,D,z),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function ql(T,D,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new ai(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float")?er:Gn,minFilter:Nn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Be.workingColorSpace}));const ne=p.state.transmissionRenderTarget[H.id],he=H.viewport||R;ne.setSize(he.z,he.w);const be=_.getRenderTarget();_.setRenderTarget(ne),_.getClearColor(O),G=_.getClearAlpha(),G<1&&_.setClearColor(16777215,.5),_.clear(),Ve&&Ae.render(z);const _e=_.toneMapping;_.toneMapping=ri;const ke=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),te===!0&&ee.setGlobalState(_.clippingPlanes,H),rr(T,z,H),k.updateMultisampleRenderTarget(ne),k.updateRenderTargetMipmap(ne),ze.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let ve=0,Xe=D.length;ve<Xe;ve++){const nt=D[ve],rt=nt.object,Dt=nt.geometry,Ye=nt.material,Me=nt.group;if(Ye.side===Jt&&rt.layers.test(H.layers)){const En=Ye.side;Ye.side=zt,Ye.needsUpdate=!0,Kl(rt,z,H,Dt,Ye,Me),Ye.side=En,Ye.needsUpdate=!0,Ie=!0}}Ie===!0&&(k.updateMultisampleRenderTarget(ne),k.updateRenderTargetMipmap(ne))}_.setRenderTarget(be),_.setClearColor(O,G),ke!==void 0&&(H.viewport=ke),_.toneMapping=_e}function rr(T,D,z){const H=D.isScene===!0?D.overrideMaterial:null;for(let U=0,ne=T.length;U<ne;U++){const he=T[U],be=he.object,_e=he.geometry,ke=H===null?he.material:H,Ie=he.group;be.layers.test(z.layers)&&Kl(be,D,z,_e,ke,Ie)}}function Kl(T,D,z,H,U,ne){T.onBeforeRender(_,D,z,H,U,ne),T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),U.onBeforeRender(_,D,z,H,T,ne),U.transparent===!0&&U.side===Jt&&U.forceSinglePass===!1?(U.side=zt,U.needsUpdate=!0,_.renderBufferDirect(z,D,H,U,T,ne),U.side=Hn,U.needsUpdate=!0,_.renderBufferDirect(z,D,H,U,T,ne),U.side=Jt):_.renderBufferDirect(z,D,H,U,T,ne),T.onAfterRender(_,D,z,H,U,ne)}function ar(T,D,z){D.isScene!==!0&&(D=ht);const H=Se.get(T),U=p.state.lights,ne=p.state.shadowsArray,he=U.state.version,be=ye.getParameters(T,U.state,ne,D,z),_e=ye.getProgramCacheKey(be);let ke=H.programs;H.environment=T.isMeshStandardMaterial?D.environment:null,H.fog=D.fog,H.envMap=(T.isMeshStandardMaterial?B:E).get(T.envMap||H.environment),H.envMapRotation=H.environment!==null&&T.envMap===null?D.environmentRotation:T.envMapRotation,ke===void 0&&(T.addEventListener("dispose",Le),ke=new Map,H.programs=ke);let Ie=ke.get(_e);if(Ie!==void 0){if(H.currentProgram===Ie&&H.lightsStateVersion===he)return $l(T,be),Ie}else be.uniforms=ye.getUniforms(T),T.onBeforeCompile(be,_),Ie=ye.acquireProgram(be,_e),ke.set(_e,Ie),H.uniforms=be.uniforms;const ve=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ve.clippingPlanes=ee.uniform),$l(T,be),H.needsLights=cu(T),H.lightsStateVersion=he,H.needsLights&&(ve.ambientLightColor.value=U.state.ambient,ve.lightProbe.value=U.state.probe,ve.directionalLights.value=U.state.directional,ve.directionalLightShadows.value=U.state.directionalShadow,ve.spotLights.value=U.state.spot,ve.spotLightShadows.value=U.state.spotShadow,ve.rectAreaLights.value=U.state.rectArea,ve.ltc_1.value=U.state.rectAreaLTC1,ve.ltc_2.value=U.state.rectAreaLTC2,ve.pointLights.value=U.state.point,ve.pointLightShadows.value=U.state.pointShadow,ve.hemisphereLights.value=U.state.hemi,ve.directionalShadowMap.value=U.state.directionalShadowMap,ve.directionalShadowMatrix.value=U.state.directionalShadowMatrix,ve.spotShadowMap.value=U.state.spotShadowMap,ve.spotLightMatrix.value=U.state.spotLightMatrix,ve.spotLightMap.value=U.state.spotLightMap,ve.pointShadowMap.value=U.state.pointShadowMap,ve.pointShadowMatrix.value=U.state.pointShadowMatrix),H.currentProgram=Ie,H.uniformsList=null,Ie}function Yl(T){if(T.uniformsList===null){const D=T.currentProgram.getUniforms();T.uniformsList=$r.seqWithValue(D.seq,T.uniforms)}return T.uniformsList}function $l(T,D){const z=Se.get(T);z.outputColorSpace=D.outputColorSpace,z.batching=D.batching,z.batchingColor=D.batchingColor,z.instancing=D.instancing,z.instancingColor=D.instancingColor,z.instancingMorph=D.instancingMorph,z.skinning=D.skinning,z.morphTargets=D.morphTargets,z.morphNormals=D.morphNormals,z.morphColors=D.morphColors,z.morphTargetsCount=D.morphTargetsCount,z.numClippingPlanes=D.numClippingPlanes,z.numIntersection=D.numClipIntersection,z.vertexAlphas=D.vertexAlphas,z.vertexTangents=D.vertexTangents,z.toneMapping=D.toneMapping}function ou(T,D,z,H,U){D.isScene!==!0&&(D=ht),k.resetTextureUnits();const ne=D.fog,he=H.isMeshStandardMaterial?D.environment:null,be=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:It,_e=(H.isMeshStandardMaterial?B:E).get(H.envMap||he),ke=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ie=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),ve=!!z.morphAttributes.position,Xe=!!z.morphAttributes.normal,nt=!!z.morphAttributes.color;let rt=ri;H.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(rt=_.toneMapping);const Dt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ye=Dt!==void 0?Dt.length:0,Me=Se.get(H),En=p.state.lights;if(te===!0&&($===!0||T!==v)){const qt=T===v&&H.id===x;ee.setState(H,T,qt)}let $e=!1;H.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==En.state.version||Me.outputColorSpace!==be||U.isBatchedMesh&&Me.batching===!1||!U.isBatchedMesh&&Me.batching===!0||U.isBatchedMesh&&Me.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Me.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Me.instancing===!1||!U.isInstancedMesh&&Me.instancing===!0||U.isSkinnedMesh&&Me.skinning===!1||!U.isSkinnedMesh&&Me.skinning===!0||U.isInstancedMesh&&Me.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Me.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Me.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Me.instancingMorph===!1&&U.morphTexture!==null||Me.envMap!==_e||H.fog===!0&&Me.fog!==ne||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==ee.numPlanes||Me.numIntersection!==ee.numIntersection)||Me.vertexAlphas!==ke||Me.vertexTangents!==Ie||Me.morphTargets!==ve||Me.morphNormals!==Xe||Me.morphColors!==nt||Me.toneMapping!==rt||Me.morphTargetsCount!==Ye)&&($e=!0):($e=!0,Me.__version=H.version);let an=Me.currentProgram;$e===!0&&(an=ar(H,D,U));let wi=!1,Gt=!1,vs=!1;const at=an.getUniforms(),pn=Me.uniforms;if(Ee.useProgram(an.program)&&(wi=!0,Gt=!0,vs=!0),H.id!==x&&(x=H.id,Gt=!0),wi||v!==T){Ee.buffers.depth.getReversed()?(ie.copy(T.projectionMatrix),bf(ie),_f(ie),at.setValue(N,"projectionMatrix",ie)):at.setValue(N,"projectionMatrix",T.projectionMatrix),at.setValue(N,"viewMatrix",T.matrixWorldInverse);const Vn=at.map.cameraPosition;Vn!==void 0&&Vn.setValue(N,Ce.setFromMatrixPosition(T.matrixWorld)),He.logarithmicDepthBuffer&&at.setValue(N,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&at.setValue(N,"isOrthographic",T.isOrthographicCamera===!0),v!==T&&(v=T,Gt=!0,vs=!0)}if(U.isSkinnedMesh){at.setOptional(N,U,"bindMatrix"),at.setOptional(N,U,"bindMatrixInverse");const qt=U.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),at.setValue(N,"boneTexture",qt.boneTexture,k))}U.isBatchedMesh&&(at.setOptional(N,U,"batchingTexture"),at.setValue(N,"batchingTexture",U._matricesTexture,k),at.setOptional(N,U,"batchingIdTexture"),at.setValue(N,"batchingIdTexture",U._indirectTexture,k),at.setOptional(N,U,"batchingColorTexture"),U._colorsTexture!==null&&at.setValue(N,"batchingColorTexture",U._colorsTexture,k));const xs=z.morphAttributes;if((xs.position!==void 0||xs.normal!==void 0||xs.color!==void 0)&&Re.update(U,z,an),(Gt||Me.receiveShadow!==U.receiveShadow)&&(Me.receiveShadow=U.receiveShadow,at.setValue(N,"receiveShadow",U.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(pn.envMap.value=_e,pn.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&D.environment!==null&&(pn.envMapIntensity.value=D.environmentIntensity),Gt&&(at.setValue(N,"toneMappingExposure",_.toneMappingExposure),Me.needsLights&&lu(pn,vs),ne&&H.fog===!0&&le.refreshFogUniforms(pn,ne),le.refreshMaterialUniforms(pn,H,V,J,p.state.transmissionRenderTarget[T.id]),$r.upload(N,Yl(Me),pn,k)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&($r.upload(N,Yl(Me),pn,k),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&at.setValue(N,"center",U.center),at.setValue(N,"modelViewMatrix",U.modelViewMatrix),at.setValue(N,"normalMatrix",U.normalMatrix),at.setValue(N,"modelMatrix",U.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const qt=H.uniformsGroups;for(let Vn=0,jn=qt.length;Vn<jn;Vn++){const Zl=qt[Vn];I.update(Zl,an),I.bind(Zl,an)}}return an}function lu(T,D){T.ambientLightColor.needsUpdate=D,T.lightProbe.needsUpdate=D,T.directionalLights.needsUpdate=D,T.directionalLightShadows.needsUpdate=D,T.pointLights.needsUpdate=D,T.pointLightShadows.needsUpdate=D,T.spotLights.needsUpdate=D,T.spotLightShadows.needsUpdate=D,T.rectAreaLights.needsUpdate=D,T.hemisphereLights.needsUpdate=D}function cu(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,D,z){Se.get(T.texture).__webglTexture=D,Se.get(T.depthTexture).__webglTexture=z;const H=Se.get(T);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,D){const z=Se.get(T);z.__webglFramebuffer=D,z.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(T,D=0,z=0){A=T,w=D,M=z;let H=!0,U=null,ne=!1,he=!1;if(T){const _e=Se.get(T);if(_e.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(N.FRAMEBUFFER,null),H=!1;else if(_e.__webglFramebuffer===void 0)k.setupRenderTarget(T);else if(_e.__hasExternalTextures)k.rebindTextures(T,Se.get(T.texture).__webglTexture,Se.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const ve=T.depthTexture;if(_e.__boundDepthTexture!==ve){if(ve!==null&&Se.has(ve)&&(T.width!==ve.image.width||T.height!==ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(T)}}const ke=T.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(he=!0);const Ie=Se.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ie[D])?U=Ie[D][z]:U=Ie[D],ne=!0):T.samples>0&&k.useMultisampledRTT(T)===!1?U=Se.get(T).__webglMultisampledFramebuffer:Array.isArray(Ie)?U=Ie[z]:U=Ie,R.copy(T.viewport),L.copy(T.scissor),F=T.scissorTest}else R.copy(xe).multiplyScalar(V).floor(),L.copy(Pe).multiplyScalar(V).floor(),F=Ke;if(Ee.bindFramebuffer(N.FRAMEBUFFER,U)&&H&&Ee.drawBuffers(T,U),Ee.viewport(R),Ee.scissor(L),Ee.setScissorTest(F),ne){const _e=Se.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,_e.__webglTexture,z)}else if(he){const _e=Se.get(T.texture),ke=D||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,_e.__webglTexture,z||0,ke)}x=-1},this.readRenderTargetPixels=function(T,D,z,H,U,ne,he){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Se.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&he!==void 0&&(be=be[he]),be){Ee.bindFramebuffer(N.FRAMEBUFFER,be);try{const _e=T.texture,ke=_e.format,Ie=_e.type;if(!He.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=T.width-H&&z>=0&&z<=T.height-U&&N.readPixels(D,z,H,U,Ue.convert(ke),Ue.convert(Ie),ne)}finally{const _e=A!==null?Se.get(A).__webglFramebuffer:null;Ee.bindFramebuffer(N.FRAMEBUFFER,_e)}}},this.readRenderTargetPixelsAsync=async function(T,D,z,H,U,ne,he){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Se.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&he!==void 0&&(be=be[he]),be){const _e=T.texture,ke=_e.format,Ie=_e.type;if(!He.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=T.width-H&&z>=0&&z<=T.height-U){Ee.bindFramebuffer(N.FRAMEBUFFER,be);const ve=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ve),N.bufferData(N.PIXEL_PACK_BUFFER,ne.byteLength,N.STREAM_READ),N.readPixels(D,z,H,U,Ue.convert(ke),Ue.convert(Ie),0);const Xe=A!==null?Se.get(A).__webglFramebuffer:null;Ee.bindFramebuffer(N.FRAMEBUFFER,Xe);const nt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await gf(N,nt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ve),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ne),N.deleteBuffer(ve),N.deleteSync(nt),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,D=null,z=0){T.isTexture!==!0&&(Fs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,T=arguments[1]);const H=Math.pow(2,-z),U=Math.floor(T.image.width*H),ne=Math.floor(T.image.height*H),he=D!==null?D.x:0,be=D!==null?D.y:0;k.setTexture2D(T,0),N.copyTexSubImage2D(N.TEXTURE_2D,z,0,0,he,be,U,ne),Ee.unbindTexture()},this.copyTextureToTexture=function(T,D,z=null,H=null,U=0){T.isTexture!==!0&&(Fs("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,T=arguments[1],D=arguments[2],U=arguments[3]||0,z=null);let ne,he,be,_e,ke,Ie,ve,Xe,nt;const rt=T.isCompressedTexture?T.mipmaps[U]:T.image;z!==null?(ne=z.max.x-z.min.x,he=z.max.y-z.min.y,be=z.isBox3?z.max.z-z.min.z:1,_e=z.min.x,ke=z.min.y,Ie=z.isBox3?z.min.z:0):(ne=rt.width,he=rt.height,be=rt.depth||1,_e=0,ke=0,Ie=0),H!==null?(ve=H.x,Xe=H.y,nt=H.z):(ve=0,Xe=0,nt=0);const Dt=Ue.convert(D.format),Ye=Ue.convert(D.type);let Me;D.isData3DTexture?(k.setTexture3D(D,0),Me=N.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(k.setTexture2DArray(D,0),Me=N.TEXTURE_2D_ARRAY):(k.setTexture2D(D,0),Me=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);const En=N.getParameter(N.UNPACK_ROW_LENGTH),$e=N.getParameter(N.UNPACK_IMAGE_HEIGHT),an=N.getParameter(N.UNPACK_SKIP_PIXELS),wi=N.getParameter(N.UNPACK_SKIP_ROWS),Gt=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,rt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,rt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,_e),N.pixelStorei(N.UNPACK_SKIP_ROWS,ke),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ie);const vs=T.isDataArrayTexture||T.isData3DTexture,at=D.isDataArrayTexture||D.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const pn=Se.get(T),xs=Se.get(D),qt=Se.get(pn.__renderTarget),Vn=Se.get(xs.__renderTarget);Ee.bindFramebuffer(N.READ_FRAMEBUFFER,qt.__webglFramebuffer),Ee.bindFramebuffer(N.DRAW_FRAMEBUFFER,Vn.__webglFramebuffer);for(let jn=0;jn<be;jn++)vs&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Se.get(T).__webglTexture,U,Ie+jn),T.isDepthTexture?(at&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Se.get(D).__webglTexture,U,nt+jn),N.blitFramebuffer(_e,ke,ne,he,ve,Xe,ne,he,N.DEPTH_BUFFER_BIT,N.NEAREST)):at?N.copyTexSubImage3D(Me,U,ve,Xe,nt+jn,_e,ke,ne,he):N.copyTexSubImage2D(Me,U,ve,Xe,nt+jn,_e,ke,ne,he);Ee.bindFramebuffer(N.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else at?T.isDataTexture||T.isData3DTexture?N.texSubImage3D(Me,U,ve,Xe,nt,ne,he,be,Dt,Ye,rt.data):D.isCompressedArrayTexture?N.compressedTexSubImage3D(Me,U,ve,Xe,nt,ne,he,be,Dt,rt.data):N.texSubImage3D(Me,U,ve,Xe,nt,ne,he,be,Dt,Ye,rt):T.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,U,ve,Xe,ne,he,Dt,Ye,rt.data):T.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,U,ve,Xe,rt.width,rt.height,Dt,rt.data):N.texSubImage2D(N.TEXTURE_2D,U,ve,Xe,ne,he,Dt,Ye,rt);N.pixelStorei(N.UNPACK_ROW_LENGTH,En),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,$e),N.pixelStorei(N.UNPACK_SKIP_PIXELS,an),N.pixelStorei(N.UNPACK_SKIP_ROWS,wi),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Gt),U===0&&D.generateMipmaps&&N.generateMipmap(Me),Ee.unbindTexture()},this.copyTextureToTexture3D=function(T,D,z=null,H=null,U=0){return T.isTexture!==!0&&(Fs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,H=arguments[1]||null,T=arguments[2],D=arguments[3],U=arguments[4]||0),Fs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,D,z,H,U)},this.initRenderTarget=function(T){Se.get(T).__webglFramebuffer===void 0&&k.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?k.setTextureCube(T,0):T.isData3DTexture?k.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?k.setTexture2DArray(T,0):k.setTexture2D(T,0),Ee.unbindTexture()},this.resetState=function(){w=0,M=0,A=null,Ee.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Be._getDrawingBufferColorSpace(e),t.unpackColorSpace=Be._getUnpackColorSpace()}}class wl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ge(e),this.near=t,this.far=n}clone(){return new wl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Td extends lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ad{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Jo,this.updateRanges=[],this.version=0,this.uuid=un()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ct=new P;class Ks{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=hn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=hn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=hn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=hn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array),r=Qe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ks(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class wd extends fn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Gi;const Ts=new P,Vi=new P,ji=new P,Wi=new Te,As=new Te,Rd=new we,wr=new P,ws=new P,Rr=new P,$c=new Te,Xa=new Te,Zc=new Te;class R_ extends lt{constructor(e=new wd){if(super(),this.isSprite=!0,this.type="Sprite",Gi===void 0){Gi=new Ht;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ad(t,5);Gi.setIndex([0,1,2,0,2,3]),Gi.setAttribute("position",new Ks(n,3,0,!1)),Gi.setAttribute("uv",new Ks(n,2,3,!1))}this.geometry=Gi,this.material=e,this.center=new Te(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vi.setFromMatrixScale(this.matrixWorld),Rd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ji.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vi.multiplyScalar(-ji.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;kr(wr.set(-.5,-.5,0),ji,a,Vi,i,r),kr(ws.set(.5,-.5,0),ji,a,Vi,i,r),kr(Rr.set(.5,.5,0),ji,a,Vi,i,r),$c.set(0,0),Xa.set(1,0),Zc.set(1,1);let o=e.ray.intersectTriangle(wr,ws,Rr,!1,Ts);if(o===null&&(kr(ws.set(-.5,.5,0),ji,a,Vi,i,r),Xa.set(0,1),o=e.ray.intersectTriangle(wr,Rr,ws,!1,Ts),o===null))return;const l=e.ray.origin.distanceTo(Ts);l<e.near||l>e.far||t.push({distance:l,point:Ts.clone(),uv:Qt.getInterpolation(Ts,wr,ws,Rr,$c,Xa,Zc,new Te),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function kr(s,e,t,n,i,r){Wi.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(As.x=r*Wi.x-i*Wi.y,As.y=i*Wi.x+r*Wi.y):As.copy(Wi),s.copy(e),s.x+=As.x,s.y+=As.y,s.applyMatrix4(Rd)}const Jc=new P,Qc=new qe,eh=new qe,k_=new P,th=new we,Cr=new P,qa=new xn,nh=new we,Ka=new tr;class C_ extends ct{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=tc,this.bindMatrix=new we,this.bindMatrixInverse=new we,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Wt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Cr),this.boundingBox.expandByPoint(Cr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new xn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Cr),this.boundingSphere.expandByPoint(Cr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qa.copy(this.boundingSphere),qa.applyMatrix4(i),e.ray.intersectsSphere(qa)!==!1&&(nh.copy(i).invert(),Ka.copy(e.ray).applyMatrix4(nh),!(this.boundingBox!==null&&Ka.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ka)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new qe,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===tc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ou?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Qc.fromBufferAttribute(i.attributes.skinIndex,e),eh.fromBufferAttribute(i.attributes.skinWeight,e),Jc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=eh.getComponent(r);if(a!==0){const o=Qc.getComponent(r);th.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(k_.copy(Jc).applyMatrix4(th),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class kd extends lt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Rl extends mt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Lt,d=Lt,h,u){super(null,a,o,l,c,d,i,r,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ih=new we,P_=new we;class kl{constructor(e=[],t=[]){this.uuid=un(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new we)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new we;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:P_;ih.multiplyMatrices(o,t[r]),ih.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new kl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Rl(t,e,e,en,dn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new kd),this.bones.push(a),this.boneInverses.push(new we().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class el extends kt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Xi=new we,sh=new we,Pr=[],rh=new Wt,L_=new we,Rs=new ct,ks=new xn;class Cd extends ct{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new el(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,L_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Wt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xi),rh.copy(e.boundingBox).applyMatrix4(Xi),this.boundingBox.union(rh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new xn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xi),ks.copy(e.boundingSphere).applyMatrix4(Xi),this.boundingSphere.union(ks)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Rs.geometry=this.geometry,Rs.material=this.material,Rs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ks.copy(this.boundingSphere),ks.applyMatrix4(n),e.ray.intersectsSphere(ks)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Xi),sh.multiplyMatrices(n,Xi),Rs.matrixWorld=sh,Rs.raycast(e,Pr);for(let a=0,o=Pr.length;a<o;a++){const l=Pr[a];l.instanceId=r,l.object=this,t.push(l)}Pr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new el(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Rl(new Float32Array(i*this.count),i,this.count,ca,dn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Pd extends fn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ra=new P,aa=new P,ah=new we,Cs=new tr,Lr=new xn,Ya=new P,oh=new P;class Cl extends lt{constructor(e=new Ht,t=new Pd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ra.fromBufferAttribute(t,i-1),aa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ra.distanceTo(aa);e.setAttribute("lineDistance",new xt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere),Lr.applyMatrix4(i),Lr.radius+=r,e.ray.intersectsSphere(Lr)===!1)return;ah.copy(i).invert(),Cs.copy(e.ray).applyMatrix4(ah);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let b=f,m=g-1;b<m;b+=c){const p=d.getX(b),y=d.getX(b+1),S=Ir(this,e,Cs,l,p,y);S&&t.push(S)}if(this.isLineLoop){const b=d.getX(g-1),m=d.getX(f),p=Ir(this,e,Cs,l,b,m);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let b=f,m=g-1;b<m;b+=c){const p=Ir(this,e,Cs,l,b,b+1);p&&t.push(p)}if(this.isLineLoop){const b=Ir(this,e,Cs,l,g-1,f);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ir(s,e,t,n,i,r){const a=s.geometry.attributes.position;if(ra.fromBufferAttribute(a,i),aa.fromBufferAttribute(a,r),t.distanceSqToSegment(ra,aa,Ya,oh)>n)return;Ya.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Ya);if(!(l<e.near||l>e.far))return{distance:l,point:oh.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const lh=new P,ch=new P;class I_ extends Cl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)lh.fromBufferAttribute(t,i),ch.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+lh.distanceTo(ch);e.setAttribute("lineDistance",new xt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class D_ extends Cl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ld extends fn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const hh=new we,tl=new tr,Dr=new xn,Ur=new P;class U_ extends lt{constructor(e=new Ht,t=new Ld){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(i),Dr.radius+=r,e.ray.intersectsSphere(Dr)===!1)return;hh.copy(i).invert(),tl.copy(e.ray).applyMatrix4(hh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=u,b=f;g<b;g++){const m=c.getX(g);Ur.fromBufferAttribute(h,m),dh(Ur,m,l,i,e,t,this)}}else{const u=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=u,b=f;g<b;g++)Ur.fromBufferAttribute(h,g),dh(Ur,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function dh(s,e,t,n,i,r,a){const o=tl.distanceSqToPoint(s);if(o<t){const l=new P;tl.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Pl extends mt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ys extends Ht{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new P,d=new Te;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,u=3;h<=t;h++,u+=3){const f=n+h/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),d.x=(a[u]/e+1)/2,d.y=(a[u+1]/e+1)/2,l.push(d.x,d.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new xt(a,3)),this.setAttribute("normal",new xt(o,3)),this.setAttribute("uv",new xt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ys(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class $s extends Ht{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const d=[],h=[],u=[],f=[];let g=0;const b=[],m=n/2;let p=0;y(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(d),this.setAttribute("position",new xt(h,3)),this.setAttribute("normal",new xt(u,3)),this.setAttribute("uv",new xt(f,2));function y(){const _=new P,C=new P;let w=0;const M=(t-e)/n;for(let A=0;A<=r;A++){const x=[],v=A/r,R=v*(t-e)+e;for(let L=0;L<=i;L++){const F=L/i,O=F*l+o,G=Math.sin(O),W=Math.cos(O);C.x=R*G,C.y=-v*n+m,C.z=R*W,h.push(C.x,C.y,C.z),_.set(G,M,W).normalize(),u.push(_.x,_.y,_.z),f.push(F,1-v),x.push(g++)}b.push(x)}for(let A=0;A<i;A++)for(let x=0;x<r;x++){const v=b[x][A],R=b[x+1][A],L=b[x+1][A+1],F=b[x][A+1];(e>0||x!==0)&&(d.push(v,R,F),w+=3),(t>0||x!==r-1)&&(d.push(R,L,F),w+=3)}c.addGroup(p,w,0),p+=w}function S(_){const C=g,w=new Te,M=new P;let A=0;const x=_===!0?e:t,v=_===!0?1:-1;for(let L=1;L<=i;L++)h.push(0,m*v,0),u.push(0,v,0),f.push(.5,.5),g++;const R=g;for(let L=0;L<=i;L++){const O=L/i*l+o,G=Math.cos(O),W=Math.sin(O);M.x=x*W,M.y=m*v,M.z=x*G,h.push(M.x,M.y,M.z),u.push(0,v,0),w.x=G*.5+.5,w.y=W*.5*v+.5,f.push(w.x,w.y),g++}for(let L=0;L<i;L++){const F=C+L,O=R+L;_===!0?d.push(O,O+1,F):d.push(O+1,O,F),A+=3}c.addGroup(p,A,_===!0?1:2),p+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ll extends Ht{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),c(n),d(),this.setAttribute("position",new xt(r,3)),this.setAttribute("normal",new xt(r.slice(),3)),this.setAttribute("uv",new xt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const S=new P,_=new P,C=new P;for(let w=0;w<t.length;w+=3)f(t[w+0],S),f(t[w+1],_),f(t[w+2],C),l(S,_,C,y)}function l(y,S,_,C){const w=C+1,M=[];for(let A=0;A<=w;A++){M[A]=[];const x=y.clone().lerp(_,A/w),v=S.clone().lerp(_,A/w),R=w-A;for(let L=0;L<=R;L++)L===0&&A===w?M[A][L]=x:M[A][L]=x.clone().lerp(v,L/R)}for(let A=0;A<w;A++)for(let x=0;x<2*(w-A)-1;x++){const v=Math.floor(x/2);x%2===0?(u(M[A][v+1]),u(M[A+1][v]),u(M[A][v])):(u(M[A][v+1]),u(M[A+1][v+1]),u(M[A+1][v]))}}function c(y){const S=new P;for(let _=0;_<r.length;_+=3)S.x=r[_+0],S.y=r[_+1],S.z=r[_+2],S.normalize().multiplyScalar(y),r[_+0]=S.x,r[_+1]=S.y,r[_+2]=S.z}function d(){const y=new P;for(let S=0;S<r.length;S+=3){y.x=r[S+0],y.y=r[S+1],y.z=r[S+2];const _=m(y)/2/Math.PI+.5,C=p(y)/Math.PI+.5;a.push(_,1-C)}g(),h()}function h(){for(let y=0;y<a.length;y+=6){const S=a[y+0],_=a[y+2],C=a[y+4],w=Math.max(S,_,C),M=Math.min(S,_,C);w>.9&&M<.1&&(S<.2&&(a[y+0]+=1),_<.2&&(a[y+2]+=1),C<.2&&(a[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function f(y,S){const _=y*3;S.x=e[_+0],S.y=e[_+1],S.z=e[_+2]}function g(){const y=new P,S=new P,_=new P,C=new P,w=new Te,M=new Te,A=new Te;for(let x=0,v=0;x<r.length;x+=9,v+=6){y.set(r[x+0],r[x+1],r[x+2]),S.set(r[x+3],r[x+4],r[x+5]),_.set(r[x+6],r[x+7],r[x+8]),w.set(a[v+0],a[v+1]),M.set(a[v+2],a[v+3]),A.set(a[v+4],a[v+5]),C.copy(y).add(S).add(_).divideScalar(3);const R=m(C);b(w,v+0,y,R),b(M,v+2,S,R),b(A,v+4,_,R)}}function b(y,S,_,C){C<0&&y.x===1&&(a[S]=y.x-1),_.x===0&&_.z===0&&(a[S]=C/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ll(e.vertices,e.indices,e.radius,e.details)}}class Il extends Ll{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Il(e.radius,e.detail)}}class zn extends fn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ld,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class yn extends zn{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return wt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Nr(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function N_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function F_(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function uh(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function Id(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class ir{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class O_ extends ir{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$i,endingEnd:$i}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Zi:r=e,o=2*t-n;break;case ia:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Zi:a=e,l=2*n-t;break;case ia:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),b=g*g,m=b*g,p=-u*m+2*u*b-u*g,y=(1+u)*m+(-1.5-2*u)*b+(-.5+u)*g+1,S=(-1-f)*m+(1.5+f)*b+.5*g,_=f*m-f*b;for(let C=0;C!==o;++C)r[C]=p*a[d+C]+y*a[c+C]+S*a[l+C]+_*a[h+C];return r}}class Dd extends ir{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=(n-t)/(i-t),h=1-d;for(let u=0;u!==o;++u)r[u]=a[c+u]*h+a[l+u]*d;return r}}class B_ extends ir{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Mn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Nr(t,this.TimeBufferType),this.values=Nr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Nr(e.times,Array),values:Nr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new B_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Dd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new O_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ws:t=this.InterpolantFactoryMethodDiscrete;break;case Xs:t=this.InterpolantFactoryMethodLinear;break;case _a:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ws;case this.InterpolantFactoryMethodLinear:return Xs;case this.InterpolantFactoryMethodSmooth:return _a}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&N_(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===_a,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],d=e[o+1];if(c!==d&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,u=h-n,f=h+n;for(let g=0;g!==n;++g){const b=t[h+g];if(b!==t[u+g]||b!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=Xs;class ms extends Mn{constructor(e,t,n){super(e,t,n)}}ms.prototype.ValueTypeName="bool";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=Ws;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;class Ud extends Mn{}Ud.prototype.ValueTypeName="color";class ds extends Mn{}ds.prototype.ValueTypeName="number";class z_ extends ir{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let d=c+o;c!==d;c+=4)nn.slerpFlat(r,0,a,c-o,a,c,l);return r}}class us extends Mn{InterpolantFactoryMethodLinear(e){return new z_(this.times,this.values,this.getValueSize(),e)}}us.prototype.ValueTypeName="quaternion";us.prototype.InterpolantFactoryMethodSmooth=void 0;class gs extends Mn{constructor(e,t,n){super(e,t,n)}}gs.prototype.ValueTypeName="string";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=Ws;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;class fs extends Mn{}fs.prototype.ValueTypeName="vector";class nl{constructor(e="",t=-1,n=[],i=yl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=un(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(G_(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Mn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const d=F_(l);l=uh(l,1,d),c=uh(c,1,d),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new ds(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],d=c.name.match(r);if(d&&d.length>1){const h=d[1];let u=i[h];u||(i[h]=u=[]),u.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,u,f,g,b){if(f.length!==0){const m=[],p=[];Id(f,m,p,g),m.length!==0&&b.push(new h(u,m,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const u=c[h].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let b=0;b<u[g].morphTargets.length;b++)f[u[g].morphTargets[b]]=-1;for(const b in f){const m=[],p=[];for(let y=0;y!==u[g].morphTargets.length;++y){const S=u[g];m.push(S.time),p.push(S.morphTarget===b?1:0)}i.push(new ds(".morphTargetInfluence["+b+"]",m,p))}l=f.length*a}else{const f=".bones["+t[h].name+"]";n(fs,f+".position",u,"pos",i),n(us,f+".quaternion",u,"rot",i),n(fs,f+".scale",u,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function H_(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ds;case"vector":case"vector2":case"vector3":case"vector4":return fs;case"color":return Ud;case"quaternion":return us;case"bool":case"boolean":return ms;case"string":return gs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function G_(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=H_(s.type);if(s.times===void 0){const t=[],n=[];Id(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const ti={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class V_{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){o++,r===!1&&i.onStart!==void 0&&i.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,i.onProgress!==void 0&&i.onProgress(d,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){const h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,u=c.length;h<u;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(d))return g}return null}}}const j_=new V_;class bs{constructor(e){this.manager=e!==void 0?e:j_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}bs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Cn={};class W_ extends Error{constructor(e,t){super(e),this.response=t}}class Nd extends bs{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ti.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Cn[e]!==void 0){Cn[e].push({onLoad:t,onProgress:n,onError:i});return}Cn[e]=[],Cn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const d=Cn[e],h=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,g=f!==0;let b=0;const m=new ReadableStream({start(p){y();function y(){h.read().then(({done:S,value:_})=>{if(S)p.close();else{b+=_.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:b,total:f});for(let w=0,M=d.length;w<M;w++){const A=d[w];A.onProgress&&A.onProgress(C)}p.enqueue(_),y()}},S=>{p.error(S)})}}});return new Response(m)}else throw new W_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{ti.add(e,c);const d=Cn[e];delete Cn[e];for(let h=0,u=d.length;h<u;h++){const f=d[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const d=Cn[e];if(d===void 0)throw this.manager.itemError(e),c;delete Cn[e];for(let h=0,u=d.length;h<u;h++){const f=d[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class X_ extends bs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ti.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=qs("img");function l(){d(),ti.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){d(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class q_ extends bs{constructor(e){super(e)}load(e,t,n,i){const r=new mt,a=new X_(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class ua extends lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Fd extends ua{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const $a=new we,fh=new P,ph=new P;class Dl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new El,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;fh.setFromMatrixPosition(e.matrixWorld),t.position.copy(fh),ph.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ph),t.updateMatrixWorld(),$a.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($a),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($a)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class K_ extends Dl{constructor(){super(new Rt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=cs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Y_ extends ua{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.target=new lt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new K_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const mh=new we,Ps=new P,Za=new P;class $_ extends Dl{constructor(){super(new Rt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Te(4,2),this._viewportCount=6,this._viewports=[new qe(2,1,1,1),new qe(0,1,1,1),new qe(3,1,1,1),new qe(1,1,1,1),new qe(3,0,1,1),new qe(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ps.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ps),Za.copy(n.position),Za.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Za),n.updateMatrixWorld(),i.makeTranslation(-Ps.x,-Ps.y,-Ps.z),mh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mh)}}class Z_ extends ua{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new $_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class J_ extends Dl{constructor(){super(new Tl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ul extends ua{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.target=new lt,this.shadow=new J_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Hs{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Q_ extends bs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ti.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ti.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),ti.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ti.add(e,l),r.manager.itemStart(e)}}class ev{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=gh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=gh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function gh(){return performance.now()}class tv{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){nn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const a=this._workIndex*r;nn.multiplyQuaternionsFlat(e,a,e,t,e,n),nn.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const Nl="\\[\\]\\.:\\/",nv=new RegExp("["+Nl+"]","g"),Fl="[^"+Nl+"]",iv="[^"+Nl.replace("\\.","")+"]",sv=/((?:WC+[\/:])*)/.source.replace("WC",Fl),rv=/(WCOD+)?/.source.replace("WCOD",iv),av=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fl),ov=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fl),lv=new RegExp("^"+sv+rv+av+ov+"$"),cv=["material","materials","bones","map"];class hv{constructor(e,t,n){const i=n||Ze.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ze{constructor(e,t,n){this.path=t,this.parsedPath=n||Ze.parseTrackName(t),this.node=Ze.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ze.Composite(e,t,n):new Ze(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(nv,"")}static parseTrackName(e){const t=lv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);cv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Ze.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ze.Composite=hv;Ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ze.prototype.GetterByBindingType=[Ze.prototype._getValue_direct,Ze.prototype._getValue_array,Ze.prototype._getValue_arrayElement,Ze.prototype._getValue_toArray];Ze.prototype.SetterByBindingTypeAndVersioning=[[Ze.prototype._setValue_direct,Ze.prototype._setValue_direct_setNeedsUpdate,Ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_array,Ze.prototype._setValue_array_setNeedsUpdate,Ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_arrayElement,Ze.prototype._setValue_arrayElement_setNeedsUpdate,Ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_fromArray,Ze.prototype._setValue_fromArray_setNeedsUpdate,Ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class dv{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,a=r.length,o=new Array(a),l={endingStart:$i,endingEnd:$i};for(let c=0;c!==a;++c){const d=r[c].createInterpolant(null);o[c]=d,d.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=ad,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case zu:for(let d=0,h=l.length;d!==h;++d)l[d].evaluate(a),c[d].accumulateAdditive(o);break;case yl:default:for(let d=0,h=l.length;d!==h;++d)l[d].evaluate(a),c[d].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const a=n===Bu;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===rd){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Zi,i.endingEnd=Zi):(e?i.endingStart=this.zeroSlopeAtStart?Zi:$i:i.endingStart=ia,t?i.endingEnd=this.zeroSlopeAtEnd?Zi:$i:i.endingEnd=ia)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}}const uv=new Float32Array(1);class fv extends Ti{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let d=c[l];d===void 0&&(d={},c[l]=d);for(let h=0;h!==r;++h){const u=i[h],f=u.name;let g=d[f];if(g!==void 0)++g.referenceCount,a[h]=g;else{if(g=a[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const b=t&&t._propertyBindings[h].binding.parsedPath;g=new tv(Ze.create(n,f,b),u.ValueTypeName,u.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),a[h]=g}o[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],d=e._byClipCacheIndex;c._byClipCacheIndex=d,l[d]=c,l.pop(),e._byClipCacheIndex=null;const h=o.actionByRoot,u=(e._localRoot||this._root).uuid;delete h[u],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Dd(new Float32Array(2),new Float32Array(2),1,uv),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let a=typeof e=="string"?nl.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=yl),l!==void 0){const h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const d=new dv(this,a,t,n);return this._bindAction(d,c),this._addInactiveAction(d,o,r),d}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?nl.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const d=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=d,t[d]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const bh=new we;class pv{constructor(e,t,n=0,i=1/0){this.ray=new tr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Sl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return bh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(bh),this}intersectObject(e,t=!0,n=[]){return il(e,this,n,t),n.sort(_h),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)il(e[i],this,n,t);return n.sort(_h),n}}function _h(s,e){return s.distance-e.distance}function il(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)il(r[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pl);function vh(s,e){if(e===Hu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Zo||e===od){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Zo)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class mv extends bs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new xv(t)}),this.register(function(t){return new yv(t)}),this.register(function(t){return new Cv(t)}),this.register(function(t){return new Pv(t)}),this.register(function(t){return new Lv(t)}),this.register(function(t){return new Sv(t)}),this.register(function(t){return new Ev(t)}),this.register(function(t){return new Tv(t)}),this.register(function(t){return new Av(t)}),this.register(function(t){return new vv(t)}),this.register(function(t){return new wv(t)}),this.register(function(t){return new Mv(t)}),this.register(function(t){return new kv(t)}),this.register(function(t){return new Rv(t)}),this.register(function(t){return new bv(t)}),this.register(function(t){return new Iv(t)}),this.register(function(t){return new Dv(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=Hs.extractUrlBase(e);a=Hs.resolveURL(c,this.path)}else a=Hs.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Nd(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(d){t(d),r.manager.itemEnd(e)},o)}catch(d){o(d)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Od){try{a[Oe.KHR_BINARY_GLTF]=new Uv(e)}catch(h){i&&i(h);return}r=JSON.parse(a[Oe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Kv(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const h=this.pluginCallbacks[d](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let d=0;d<r.extensionsUsed.length;++d){const h=r.extensionsUsed[d],u=r.extensionsRequired||[];switch(h){case Oe.KHR_MATERIALS_UNLIT:a[h]=new _v;break;case Oe.KHR_DRACO_MESH_COMPRESSION:a[h]=new Nv(r,this.dracoLoader);break;case Oe.KHR_TEXTURE_TRANSFORM:a[h]=new Fv;break;case Oe.KHR_MESH_QUANTIZATION:a[h]=new Ov;break;default:u.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function gv(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Oe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class bv{constructor(e){this.parser=e,this.name=Oe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const d=new ge(16777215);l.color!==void 0&&d.setRGB(l.color[0],l.color[1],l.color[2],It);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ul(d),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Z_(d),c.distance=h;break;case"spot":c=new Y_(d),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Un(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class _v{constructor(){this.name=Oe.KHR_MATERIALS_UNLIT}getMaterialType(){return Bt}extendParams(e,t,n){const i=[];e.color=new ge(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],It),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,ft))}return Promise.all(i)}}class vv{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class xv{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Te(o,o)}return Promise.all(r)}}class yv{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Mv{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class Sv{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new ge(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],It)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,ft)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class Ev{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class Tv{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new ge().setRGB(o[0],o[1],o[2],It),Promise.all(r)}}class Av{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class wv{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new ge().setRGB(o[0],o[1],o[2],It),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,ft)),Promise.all(r)}}class Rv{constructor(e){this.parser=e,this.name=Oe.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class kv{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class Cv{constructor(e){this.parser=e,this.name=Oe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class Pv{constructor(e){this.parser=e,this.name=Oe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Lv{constructor(e){this.parser=e,this.name=Oe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Iv{constructor(e){this.name=Oe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,d=i.count,h=i.byteStride,u=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(d,h,u,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(d*h);return a.decodeGltfBuffer(new Uint8Array(f),d,h,u,i.mode,i.filter),f})})}else return null}}class Dv{constructor(e){this.name=Oe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==$t.TRIANGLES&&c.mode!==$t.TRIANGLE_STRIP&&c.mode!==$t.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(d=>(l[c]=d,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const d=c.pop(),h=d.isGroup?d.children:[d],u=c[0].count,f=[];for(const g of h){const b=new we,m=new P,p=new nn,y=new P(1,1,1),S=new Cd(g.geometry,g.material,u);for(let _=0;_<u;_++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,_),l.SCALE&&y.fromBufferAttribute(l.SCALE,_),S.setMatrixAt(_,b.compose(m,p,y));for(const _ in l)if(_==="_COLOR_0"){const C=l[_];S.instanceColor=new el(C.array,C.itemSize,C.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,l[_]);lt.prototype.copy.call(S,g),this.parser.assignFinalMaterial(S),f.push(S)}return d.isGroup?(d.clear(),d.add(...f),d):f[0]}))}}const Od="glTF",Ls=12,xh={JSON:1313821514,BIN:5130562};class Uv{constructor(e){this.name=Oe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ls),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Od)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ls,r=new DataView(e,Ls);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===xh.JSON){const c=new Uint8Array(e,Ls+a,o);this.content=n.decode(c)}else if(l===xh.BIN){const c=Ls+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Nv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Oe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const d in a){const h=sl[d]||d.toLowerCase();o[h]=a[d]}for(const d in e.attributes){const h=sl[d]||d.toLowerCase();if(a[d]!==void 0){const u=n.accessors[e.attributes[d]],f=ns[u.componentType];c[h]=f.name,l[h]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(d){return new Promise(function(h,u){i.decodeDracoFile(d,function(f){for(const g in f.attributes){const b=f.attributes[g],m=l[g];m!==void 0&&(b.normalized=m)}h(f)},o,c,It,u)})})}}class Fv{constructor(){this.name=Oe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Ov{constructor(){this.name=Oe.KHR_MESH_QUANTIZATION}}class Bd extends ir{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,d=i-t,h=(n-t)/d,u=h*h,f=u*h,g=e*c,b=g-c,m=-2*f+3*u,p=f-u,y=1-m,S=p-u+h;for(let _=0;_!==o;_++){const C=a[b+_+o],w=a[b+_+l]*d,M=a[g+_+o],A=a[g+_]*d;r[_]=y*C+S*w+m*M+p*A}return r}}const Bv=new nn;class zv extends Bd{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Bv.fromArray(r).normalize().toArray(r),r}}const $t={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ns={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},yh={9728:Lt,9729:Ot,9984:Yh,9985:jr,9986:Ns,9987:Nn},Mh={33071:ei,33648:na,10497:as},Ja={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},sl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Zn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Hv={CUBICSPLINE:void 0,LINEAR:Xs,STEP:Ws},Qa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Gv(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new zn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Hn})),s.DefaultMaterial}function mi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Un(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Vv(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,d=e.length;c<d;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,d=e.length;c<d;c++){const h=e[c];if(n){const u=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;a.push(u)}if(i){const u=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;o.push(u)}if(r){const u=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const d=c[0],h=c[1],u=c[2];return n&&(s.morphAttributes.position=d),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=u),s.morphTargetsRelative=!0,s})}function jv(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Wv(s){let e;const t=s.extensions&&s.extensions[Oe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+eo(t.attributes):e=s.indices+":"+eo(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+eo(s.targets[n]);return e}function eo(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function rl(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Xv(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const qv=new we;class Kv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new gv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new q_(this.options.manager):this.textureLoader=new Q_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Nd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return mi(r,o,i),Un(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,d]of a.children.entries())r(d,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Oe.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(Hs.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Ja[i.type],o=ns[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new kt(c,a,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=Ja[i.type],c=ns[i.componentType],d=c.BYTES_PER_ELEMENT,h=d*l,u=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let b,m;if(f&&f!==h){const p=Math.floor(u/f),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let S=t.cache.get(y);S||(b=new c(o,p*f,i.count*f/d),S=new Ad(b,f/d),t.cache.add(y,S)),m=new Ks(S,l,u%f/d,g)}else o===null?b=new c(i.count*l):b=new c(o,u,i.count*l),m=new kt(b,l,g);if(i.sparse!==void 0){const p=Ja.SCALAR,y=ns[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,C=new y(a[1],S,i.sparse.count*p),w=new c(a[2],_,i.sparse.count*l);o!==null&&(m=new kt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let M=0,A=C.length;M<A;M++){const x=C[M];if(m.setX(x,w[M*l]),l>=2&&m.setY(x,w[M*l+1]),l>=3&&m.setZ(x,w[M*l+2]),l>=4&&m.setW(x,w[M*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(d){d.flipY=!1,d.name=a.name||o.name||"",d.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(d.name=o.uri);const u=(r.samplers||{})[a.sampler]||{};return d.magFilter=yh[u.magFilter]||Ot,d.minFilter=yh[u.minFilter]||Nn,d.wrapS=Mh[u.wrapS]||as,d.wrapT=Mh[u.wrapT]||as,d.generateMipmaps=!d.isCompressedTexture&&d.minFilter!==Lt&&d.minFilter!==Ot,i.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;const u=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(u),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(l).then(function(h){return new Promise(function(u,f){let g=u;t.isImageBitmapLoader===!0&&(g=function(b){const m=new mt(b);m.needsUpdate=!0,u(m)}),t.load(Hs.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),Un(h,a),h.userData.mimeType=a.mimeType||Xv(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=d,d}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Oe.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Oe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[Oe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Ld,fn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Pd,fn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return zn}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[Oe.KHR_MATERIALS_UNLIT]){const h=i[Oe.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new ge(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const u=h.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],It),o.opacity=u[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,ft)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Jt);const d=r.alphaMode||Qa.OPAQUE;if(d===Qa.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,d===Qa.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Bt&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Te(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==Bt&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Bt){const h=r.emissiveFactor;o.emissive=new ge().setRGB(h[0],h[1],h[2],It)}return r.emissiveTexture!==void 0&&a!==Bt&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,ft)),Promise.all(c).then(function(){const h=new a(o);return r.name&&(h.name=r.name),Un(h,r),t.associations.set(h,{materials:e}),r.extensions&&mi(i,h,r),h})}createUniqueName(e){const t=Ze.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Oe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Sh(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],d=Wv(c),h=i[d];if(h)a.push(h.promise);else{let u;c.extensions&&c.extensions[Oe.KHR_DRACO_MESH_COMPRESSION]?u=r(c):u=Sh(new Ht,c,t),i[d]={primitive:c,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const d=a[l].material===void 0?Gv(this.cache):this.getDependency("material",a[l].material);o.push(d)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),d=l[l.length-1],h=[];for(let f=0,g=d.length;f<g;f++){const b=d[f],m=a[f];let p;const y=c[f];if(m.mode===$t.TRIANGLES||m.mode===$t.TRIANGLE_STRIP||m.mode===$t.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new C_(b,y):new ct(b,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===$t.TRIANGLE_STRIP?p.geometry=vh(p.geometry,od):m.mode===$t.TRIANGLE_FAN&&(p.geometry=vh(p.geometry,Zo));else if(m.mode===$t.LINES)p=new I_(b,y);else if(m.mode===$t.LINE_STRIP)p=new Cl(b,y);else if(m.mode===$t.LINE_LOOP)p=new D_(b,y);else if(m.mode===$t.POINTS)p=new U_(b,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&jv(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Un(p,r),m.extensions&&mi(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&mi(i,h[0],r),h[0];const u=new tn;r.extensions&&mi(i,u,r),t.associations.set(u,{meshes:e});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Rt(es.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Tl(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Un(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],l=[];for(let c=0,d=a.length;c<d;c++){const h=a[c];if(h){o.push(h);const u=new we;r!==null&&u.fromArray(r.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new kl(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],d=[];for(let h=0,u=i.channels.length;h<u;h++){const f=i.channels[h],g=i.samplers[f.sampler],b=f.target,m=b.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,y=i.parameters!==void 0?i.parameters[g.output]:g.output;b.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(g),d.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(d)]).then(function(h){const u=h[0],f=h[1],g=h[2],b=h[3],m=h[4],p=[];for(let y=0,S=u.length;y<S;y++){const _=u[y],C=f[y],w=g[y],M=b[y],A=m[y];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();const x=n._createAnimationTracks(_,C,w,M,A);if(x)for(let v=0;v<x.length;v++)p.push(x[v])}return new nl(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,d=o.length;c<d;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const d=c[0],h=c[1],u=c[2];u!==null&&d.traverse(function(f){f.isSkinnedMesh&&f.bind(u,qv)});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let d;if(r.isBone===!0?d=new kd:c.length>1?d=new tn:c.length===1?d=c[0]:d=new lt,d!==c[0])for(let h=0,u=c.length;h<u;h++)d.add(c[h]);if(r.name&&(d.userData.name=r.name,d.name=a),Un(d,r),r.extensions&&mi(n,d,r),r.matrix!==void 0){const h=new we;h.fromArray(r.matrix),d.applyMatrix4(h)}else r.translation!==void 0&&d.position.fromArray(r.translation),r.rotation!==void 0&&d.quaternion.fromArray(r.rotation),r.scale!==void 0&&d.scale.fromArray(r.scale);return i.associations.has(d)||i.associations.set(d,{}),i.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new tn;n.name&&(r.name=i.createUniqueName(n.name)),Un(r,n),n.extensions&&mi(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let d=0,h=l.length;d<h;d++)r.add(l[d]);const c=d=>{const h=new Map;for(const[u,f]of i.associations)(u instanceof fn||u instanceof mt)&&h.set(u,f);return d.traverse(u=>{const f=i.associations.get(u);f!=null&&h.set(u,f)}),h};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,l=[];Zn[r.path]===Zn.weights?e.traverse(function(u){u.morphTargetInfluences&&l.push(u.name?u.name:u.uuid)}):l.push(o);let c;switch(Zn[r.path]){case Zn.weights:c=ds;break;case Zn.rotation:c=us;break;case Zn.position:case Zn.scale:c=fs;break;default:switch(n.itemSize){case 1:c=ds;break;case 2:case 3:default:c=fs;break}break}const d=i.interpolation!==void 0?Hv[i.interpolation]:Xs,h=this._getArrayFromAccessor(n);for(let u=0,f=l.length;u<f;u++){const g=new c(l[u]+"."+Zn[r.path],t.array,h,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=rl(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof us?zv:Bd;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Yv(s,e,t){const n=e.attributes,i=new Wt;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),o.normalized){const d=rl(ns[o.componentType]);i.min.multiplyScalar(d),i.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new P,l=new P;for(let c=0,d=r.length;c<d;c++){const h=r[c];if(h.POSITION!==void 0){const u=t.json.accessors[h.POSITION],f=u.min,g=u.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),u.normalized){const b=rl(ns[u.componentType]);l.multiplyScalar(b)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new xn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Sh(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=sl[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return Be.workingColorSpace!==It&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Be.workingColorSpace}" not supported.`),Un(s,e),Yv(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Vv(s,e.targets,t):s})}var $v=(function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?e:s,r,a=WebAssembly.instantiate(o(i),{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var y=new Uint8Array(p.length),S=0;S<p.length;++S){var _=p.charCodeAt(S);y[S]=_>96?_-97:_>64?_-39:_+4}for(var C=0,S=0;S<p.length;++S)y[C++]=y[S]<60?n[y[S]]:(y[S]-60)*64+y[++S];return y.buffer.slice(0,C)}function l(p,y,S,_,C,w){var M=r.exports.sbrk,A=S+3&-4,x=M(A*_),v=M(C.length),R=new Uint8Array(r.exports.memory.buffer);R.set(C,v);var L=p(x,S,_,v,C.length);if(L==0&&w&&w(x,A,_),y.set(R.subarray(x,x+S*_)),M(x-M(0)),L!=0)throw new Error("Malformed buffer data: "+L)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},d={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},h=[],u=0;function f(p){var y={object:new Worker(p),pending:0,requests:{}};return y.object.onmessage=function(S){var _=S.data;y.pending-=_.count,y.requests[_.id][_.action](_.value),delete y.requests[_.id]},y}function g(p){for(var y="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+l.toString()+m.toString(),S=new Blob([y],{type:"text/javascript"}),_=URL.createObjectURL(S),C=0;C<p;++C)h[C]=f(_);URL.revokeObjectURL(_)}function b(p,y,S,_,C){for(var w=h[0],M=1;M<h.length;++M)h[M].pending<w.pending&&(w=h[M]);return new Promise(function(A,x){var v=new Uint8Array(S),R=u++;w.pending+=p,w.requests[R]={resolve:A,reject:x},w.object.postMessage({id:R,count:p,size:y,source:v,mode:_,filter:C},[v.buffer])})}function m(p){a.then(function(){var y=p.data;try{var S=new Uint8Array(y.count*y.size);l(r.exports[y.mode],S,y.count,y.size,y.source,r.exports[y.filter]),self.postMessage({id:y.id,count:y.count,action:"resolve",value:S},[S.buffer])}catch(_){self.postMessage({id:y.id,count:y.count,action:"reject",value:_})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,y,S,_,C){l(r.exports.meshopt_decodeVertexBuffer,p,y,S,_,r.exports[c[C]])},decodeIndexBuffer:function(p,y,S,_){l(r.exports.meshopt_decodeIndexBuffer,p,y,S,_)},decodeIndexSequence:function(p,y,S,_){l(r.exports.meshopt_decodeIndexSequence,p,y,S,_)},decodeGltfBuffer:function(p,y,S,_,C,w){l(r.exports[d[C]],p,y,S,_,r.exports[c[w]])},decodeGltfBufferAsync:function(p,y,S,_,C){return h.length>0?b(p,y,S,d[_],c[C]):a.then(function(){var w=new Uint8Array(p*y);return l(r.exports[d[_]],w,p,y,S,r.exports[c[C]]),w})}}})();function Zv(s){const e=new Map,t=new Map,n=s.clone();return zd(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function zd(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)zd(s.children[n],e.children[n],t)}const Eh=new mv().setMeshoptDecoder($v),al=new Map,Jv="./assets/";async function Qv(){return null}function e0(s){const e=atob(s),t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t.buffer}async function t0(s,e){let t=0;const n=[...new Set(s)],i=await Qv();await Promise.all(n.map(async r=>{al.has(r)||al.set(r,i!=null&&i[r]?await Eh.parseAsync(e0(i[r]),""):await Eh.loadAsync(`${Jv}${r}.glb`)),t++,e==null||e(t/n.length)}))}function Ol(s){const e=al.get(s);if(!e)throw new Error(`Model ikke indlæst: ${s}`);return e}function sn(s,{skygge:e=!1}={}){const t=Ol(s),n=Zv(t.scene);return n.traverse(i=>{i.isMesh&&(i.castShadow=e,i.receiveShadow=!0)}),n}function n0(s,e,{skygge:t=!1,modtag:n=!0,farver:i=null}={}){const r=new tn;if(!e.length)return r;const a=Ol(s);return a.scene.updateMatrixWorld(!0),a.scene.traverse(o=>{if(!o.isMesh)return;const l=new Cd(o.geometry,o.material,e.length),c=new we;if(e.forEach((d,h)=>l.setMatrixAt(h,c.multiplyMatrices(d,o.matrixWorld))),i!=null&&i.some(Boolean)){const d=new ge;i.forEach((h,u)=>l.setColorAt(u,h?d.setRGB(...h):d.setRGB(1,1,1)))}l.castShadow=t,l.receiveShadow=n,l.computeBoundingSphere(),r.add(l)}),r}function Hd(s,e){const t=sn(s,{skygge:!0}),n=new Wt().setFromObject(t).getSize(new P);return t.scale.setScalar(e/Math.max(n.x,n.y,n.z)),t}function i0(s){return Ol(s).animations}const sr={hexSkala:5},_s={størrelse:48,seed:11},s0={maxHp:500,mana:200,fart:5,rækkevidde:2.2,skadeMin:45,skadeMax:55,angrebsTid:1.8,rustning:3,hpRegen:2,manaRegen:1,genopliv:6},Zt={xp:[0,200,500,900,1400,2100,3e3,4200,5600,7500],hpBonus:[0,80,80,100,100,120,120,140,140,160],skadeBonus:[0,8,8,10,10,12,12,14,14,16],rustBonus:[0,0,1,0,1,0,1,0,1,1]},Fr={aggro:9,leash:22};function Zs(s,e){const t=Math.min(.75,Math.max(0,e*.033));return Math.max(1,Math.round(s*(1-t)))}function fa(s,e){return Math.floor(s+Math.random()*(e-s+1))}const pa=sr.hexSkala,ma=2*pa,Gd=2/Math.sqrt(3)*pa,Vd=[[1,0],[0,1],[-1,1],[-1,0],[0,-1],[1,-1]],ol=(s,e)=>`${s},${e}`;function ot(s,e){return{x:pa*2*(s+e/2),z:Gd*1.5*e}}function jd(s,e){const t=e/(Gd*1.5),n=s/(pa*2)-t/2;return r0(n,t)}function r0(s,e){const t=-s-e;let n=Math.round(s),i=Math.round(e),r=Math.round(t);const a=Math.abs(n-s),o=Math.abs(i-e),l=Math.abs(r-t);return a>o&&a>l?n=-i-r:o>l&&(i=-n-r),{q:n,r:i}}function gn(s,e){return(Math.abs(s.q-e.q)+Math.abs(s.r-e.r)+Math.abs(s.q+s.r-e.q-e.r))/2}class a0{constructor(){this.felter=new Map}sæt(e,t,n){const i={q:e,r:t,gåbar:!0,pynt:[],...n};return this.felter.set(ol(e,t),i),i}hent(e,t){return this.felter.get(ol(e,t))}felt(e,t){const n=jd(e,t);return this.hent(n.q,n.r)}erGåbar(e,t){const n=this.felt(e,t);return!!(n&&n.gåbar)}naboer(e){return Vd.map(([t,n])=>this.hent(e.q+t,e.r+n)).filter(Boolean)}friLinje(e,t,n,i){const r=Math.hypot(n-e,i-t),a=Math.max(1,Math.ceil(r/.8));for(let o=1;o<=a;o++){const l=o/a;if(!this.erGåbar(e+(n-e)*l,t+(i-t)*l))return!1}return!0}findVej(e,t){if(this.friLinje(e.x,e.z,t.x,t.z))return[{x:t.x,z:t.z}];const n=this.felt(e.x,e.z);if(!n)return[];if(!this.erGåbar(t.x,t.z)){const u=this.frieKant(t,e);if(u&&(t=u,this.friLinje(e.x,e.z,t.x,t.z)))return[{x:t.x,z:t.z}]}let i=this.felt(t.x,t.z);if((!i||!i.gåbar)&&(i=this.nærmesteGåbare(t.x,t.z)),!i)return[];const r=new o0,a=new Map,o=new Map([[n,0]]),l=new Set;r.læg(n,gn(n,i));let c=!1;for(;r.størrelse;){const u=r.tag();if(u===i){c=!0;break}if(!l.has(u)){l.add(u);for(const f of this.naboer(u)){if(!f.gåbar||l.has(f))continue;const g=o.get(u)+1;g<(o.get(f)??1/0)&&(a.set(f,u),o.set(f,g),r.læg(f,g+gn(f,i)*1.001))}if(l.size>6e3)break}}if(!c)return[];const d=[];for(let u=i;u&&u!==n;u=a.get(u))d.unshift(ot(u.q,u.r));const h=this.erGåbar(t.x,t.z)?{x:t.x,z:t.z}:ot(i.q,i.r);return d[d.length-1]=h,this.glat(e,d)}glat(e,t){const n=[];let i=e,r=0;for(;r<t.length;){let a=r;for(let o=t.length-1;o>r;o--)if(this.friLinje(i.x,i.z,t[o].x,t[o].z)){a=o;break}n.push(t[a]),i=t[a],r=a+1}return n}frieKant(e,t){const n=Math.hypot(t.x-e.x,t.z-e.z);for(let i=.6;i<Math.min(n,30);i+=.6){const r=e.x+(t.x-e.x)/n*i,a=e.z+(t.z-e.z)/n*i;if(this.erGåbar(r,a))return{x:r+(t.x-e.x)/n*.5,z:a+(t.z-e.z)/n*.5}}return null}nærmesteGåbare(e,t){let n=null,i=1/0;for(const r of this.felter.values()){if(!r.gåbar)continue;const a=ot(r.q,r.r),o=(a.x-e)**2+(a.z-t)**2;o<i&&(i=o,n=r)}return n}}class o0{constructor(){this.a=[]}get størrelse(){return this.a.length}læg(e,t){const n=this.a;n.push([t,e]);let i=n.length-1;for(;i>0;){const r=i-1>>1;if(n[r][0]<=n[i][0])break;[n[r],n[i]]=[n[i],n[r]],i=r}}tag(){const e=this.a,t=e[0][1],n=e.pop();if(e.length){e[0]=n;let i=0;for(;;){const r=2*i+1,a=r+1;let o=i;if(r<e.length&&e[r][0]<e[o][0]&&(o=r),a<e.length&&e[a][0]<e[o][0]&&(o=a),o===i)break;[e[o],e[i]]=[e[i],e[o]],i=o}}return t}}function l0(s){return()=>{s|=0,s=s+1831565813|0;let e=Math.imul(s^s>>>15,1|s);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Or(s,e,t){let n=Math.imul(s,374761393)+Math.imul(e,668265263)+Math.imul(t,982451653);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}const Th=s=>s*s*(3-2*s);function c0(s,e,t){const n=Math.floor(s),i=Math.floor(e),r=Th(s-n),a=Th(e-i),o=Or(n,i,t),l=Or(n+1,i,t),c=Or(n,i+1,t),d=Or(n+1,i+1,t);return o+(l-o)*r+(c-o)*a+(o-l-c+d)*r*a}function Ft(s,e,t,n=8,i=3){let r=0,a=1,o=0,l=1/n;for(let c=0;c<i;c++)r+=c0(s*l,e*l,t+c*31)*a,o+=a,a*=.5,l*=2;return r/o}const h0={1:["a",1],2:["b",1],3:["c",0],4:["d",5]},Bl={askemarken:{navn:"Askemarken",frø:[[-.55,.55],[.05,.15]],farve:[1,.97,.88]},skoven:{navn:"Skoven",frø:[[-.62,-.25],[-.18,-.6]],farve:[.86,1,.86]},gravlandet:{navn:"Gravlandet",frø:[[.6,-.55]],farve:[.72,.74,.66]},bjergene:{navn:"Bjergene",frø:[[.18,-.72],[.78,.02]],farve:[.93,.93,.86]},sumpen:{navn:"Sumpen",frø:[[.52,.62]],farve:[.74,.86,.7]}},d0={askemarken:{skov:.74,bjerg:.86,sø:.8},skoven:{skov:.44,bjerg:.9,sø:.8},gravlandet:{skov:.7,bjerg:.8,sø:.84},bjergene:{skov:.78,bjerg:.5,sø:.86},sumpen:{skov:.66,bjerg:.92,sø:.56}},ll=(s,e)=>({q:s-Math.floor(e/2),r:e});function u0(s){const e=new a0,t=_s.størrelse,n=t/2,i=ll(Math.round(-.55*n),Math.round(.55*n));e.base=i;for(let r=-n;r<n;r++)for(let a=-n;a<n;a++){const{q:o,r:l}=ll(a,r),c=a/n,d=r/n,h=p0(c,d,s),f=Math.min(a+n,n-1-a,r+n,n-1-r)+(Ft(a,r,s+1,5)-.5)*5>2.6,g=e.sæt(o,l,{kol:a,ræk:r,region:h,type:f?"græs":"vand",gåbar:f});if(!f)continue;const b=d0[h],m=gn(g,i),p=m<=6;if(!p&&Ft(a,r,s+2,4)>b.sø){g.type="vand",g.gåbar=!1;continue}if(p){f0(g,i,m);continue}Ft(a,r,s+3,4.5)>b.bjerg?Js(g,"bjerg"):Ft(a,r,s+4,3.5)>b.skov&&Js(g,"skov")}return m0(e),g0(e),e}function f0(s,e,t){if(t<4)return;const n=ot(s.q,s.r),i=ot(e.q,e.r),r=Math.atan2(n.z-i.z,n.x-i.x)*180/Math.PI;r<-105||r>165?Js(s,"skov"):r>-62&&r<-28&&t<=5&&Js(s,"bjerg")}function p0(s,e,t){const n=(Ft(s*20,e*20,t+9,6)-.5)*.35,i=(Ft(e*20,s*20,t+10,6)-.5)*.35;let r=null,a=1/0;for(const[o,l]of Object.entries(Bl))for(const[c,d]of l.frø){const h=(s+n-c)**2+(e+i-d)**2;h<a&&(a=h,r=o)}return r}function Js(s,e){s.blok=e,s.gåbar=!1}function m0(s){for(let e=0;e<8;e++){let t=!1;for(const n of s.felter.values()){if(n.type==="vand")continue;const i=Vd.map(([d,h])=>{const u=s.hent(n.q+d,n.r+h);return!u||u.type==="vand"}),r=i.filter(Boolean).length;if(r===0){n.type="græs";continue}const a=i.findIndex((d,h)=>d&&!i[(h+5)%6]);if(!(a>=0&&r<=4&&i.every((d,h)=>d===(h-a+6)%6<r))){n.type="vand",n.gåbar=!1,n.blok=void 0,t=!0;continue}const[l,c]=h0[r];n.type="kyst",n.variant=l,n.rot=(a-c+6)%6,n.blok=void 0,n.gåbar=!0}if(!t)break}}function g0(s){const e=s.hent(s.base.q,s.base.r),t=new Set([e]),n=[e];for(;n.length;){const i=n.pop();for(const r of s.naboer(i))r.gåbar&&!t.has(r)&&(t.add(r),n.push(r))}for(const i of s.felter.values())!i.gåbar||t.has(i)||(i.type==="græs"?Js(i,"skov"):i.gåbar=!1)}function b0(){const s=_s.størrelse/2,e=ot(s,0).x,t=ot(0,s).z;return{minX:-e-4,maxX:e+4,minZ:-t-4,maxZ:t+4}}const Is={idle:"Idle",løb:"Running_C",ramt:"Hit_A",død:"Death_C_Skeletons",vågn:"Skeletons_Awaken_Standing",råb:"Taunt"},Ds={idle:"Idle",løb:"Running_A",ramt:"Hit_A",død:"Death_A",vågn:null,råb:"Cheer"},cl={minion:{navn:"Skeletkriger",model:"skeleton_minion",anim:Is,hp:120,skade:[12,18],angrebsTid:2,fart:3.4,rækkevidde:2,rustning:0,våben:{r:"skeleton_blade"},angreb:"1H_Melee_Attack_Chop"},rogue:{navn:"Skeletsnigmorder",model:"skeleton_rogue",anim:Is,hp:140,skade:[14,20],angrebsTid:1.5,fart:3.9,rækkevidde:2,rustning:0,våben:{r:"skeleton_blade"},angreb:"1H_Melee_Attack_Stab"},mage:{navn:"Benmager",model:"skeleton_mage",anim:Is,hp:140,skade:[16,22],angrebsTid:2.6,fart:3.2,rækkevidde:9,rustning:0,våben:{r:"skeleton_staff"},angreb:"Spellcast_Shoot",projektil:11758591},warrior:{navn:"Gravvogter",model:"skeleton_warrior",anim:Is,hp:280,skade:[20,28],angrebsTid:2.3,fart:3.1,rækkevidde:2.2,rustning:2,våben:{r:"skeleton_axe",l:"skeleton_shield_large_a"},angreb:"1H_Melee_Attack_Chop",skala:1.15},gravkonge:{navn:"Gravkongen",model:"skeleton_warrior",anim:Is,hp:900,skade:[40,55],angrebsTid:2.4,fart:3,rækkevidde:2.8,rustning:5,våben:{r:"skeleton_axe",l:"skeleton_shield_large_a"},angreb:"1H_Melee_Attack_Chop",skala:1.7,boss:!0},slagsbror:{navn:"Slagsbror",model:"bandit_slagsbror",anim:Ds,hp:130,skade:[12,17],angrebsTid:1.6,fart:3.6,rækkevidde:2,rustning:0,skjul:["1H_Crossbow","2H_Crossbow","Throwable"],angreb:"Dualwield_Melee_Attack_Slice"},skytte:{navn:"Armbrøstskytte",model:"bandit_skytte",anim:Ds,hp:110,skade:[15,21],angrebsTid:2.2,fart:3.4,rækkevidde:10,rustning:0,skjul:["Knife","Knife_Offhand","1H_Crossbow","Throwable"],angreb:"2H_Ranged_Shoot",projektil:16765562},lejesoldat:{navn:"Lejesoldat",model:"bandit_lejesoldat",anim:Ds,hp:240,skade:[18,25],angrebsTid:2,fart:3.3,rækkevidde:2.2,rustning:3,skjul:["1H_Sword_Offhand","Badge_Shield","Rectangle_Shield","Spike_Shield","2H_Sword","Knight_Helmet"],angreb:"1H_Melee_Attack_Slice_Diagonal"},heks:{navn:"Heksemester",model:"bandit_heks",anim:Ds,hp:150,skade:[18,26],angrebsTid:2.6,fart:3.2,rækkevidde:9,rustning:0,skjul:["Spellbook","Spellbook_open","1H_Wand"],angreb:"Spellcast_Shoot",projektil:5951999},kaptajn:{navn:"Plyndrerkaptajnen",model:"bandit_kaptajn",anim:Ds,hp:950,skade:[42,58],angrebsTid:2.2,fart:3.4,rækkevidde:2.8,rustning:4,skjul:["1H_Axe","1H_Axe_Offhand","Barbarian_Round_Shield","Mug"],angreb:"2H_Melee_Attack_Chop",skala:1.6,boss:!0}},Wd=[null,{navn:"Let",farve:"#5fd35a",level:2},{navn:"Middel",farve:"#f2d14a",level:5},{navn:"Svær",farve:"#f08a35",level:8},{navn:"Farlig",farve:"#e8473c",level:12},{navn:"Boss",farve:"#b05cff",level:16}],_0={skeletter:{1:[["minion","minion"],["minion","rogue"]],2:[["minion","rogue","minion"],["rogue","mage"]],3:[["warrior","mage","minion"],["warrior","rogue","rogue"]],4:[["warrior","warrior","mage","mage"],["warrior","mage","rogue","rogue"]],5:[["gravkonge","warrior","mage","mage"]]},plyndrere:{1:[["slagsbror","slagsbror"],["slagsbror","skytte"]],2:[["slagsbror","skytte","slagsbror"],["lejesoldat","skytte"]],3:[["lejesoldat","skytte","heks"],["lejesoldat","slagsbror","slagsbror"]],4:[["lejesoldat","lejesoldat","heks","skytte"],["lejesoldat","heks","heks","slagsbror"]],5:[["kaptajn","lejesoldat","heks","skytte"]]}},v0={askemarken:"plyndrere",skoven:"plyndrere",bjergene:"plyndrere",gravlandet:"skeletter",sumpen:"skeletter"};function x0(s,e){const t=cl[s],n=1+.3*(e-1),i=1+.18*(e-1);return{...t,level:e,hp:Math.round(t.hp*n),skade:[Math.round(t.skade[0]*i),Math.round(t.skade[1]*i)],rustning:t.rustning+Math.floor(e/4),xp:Math.round((15+e*e*2.5)*(t.boss?3:1))}}const Nt=ma/2,Qs="kaykit-hexagon/decoration/nature/",On="kaykit-halloween/",bn=(s,e)=>e[Math.floor(s()*e.length)],zl=(s,e=.55)=>({dx:(s()-.5)*2*Nt*e,dz:(s()-.5)*2*Nt*e}),Zr=(s,e,t)=>e+s()*(t-e),y0={træ:{mængde:40,r:1.4,h:6},træFrit:{mængde:30,r:1.3,h:5},blok:{mængde:150,r:3,h:4},sten:{mængde:25,r:1.3,h:1.5}};function Xd(s,e){if(e==="gravlandet")return bn(s,[[On+"tree_dead_large",1.1],[On+"tree_dead_medium",1.3],[On+"tree_dead_small",1.5]]);if(e==="sumpen"&&s()<.35)return[On+"tree_dead_small",1.3];const t={skoven:[1.25,1.6],sumpen:[1,1.3]}[e]??[1.1,1.4];return[Qs+bn(s,["tree_single_a","tree_single_b"]),Zr(s,...t)]}function M0(s,e){if(s.blok==="bjerg"){const n=3+Math.floor(e()*2);for(let i=0;i<n;i++){const r=i/n*Math.PI*2+e()*.8,a=Nt*Zr(e,.15,.42);s.pynt.push({model:Qs+"rock_single_"+bn(e,["c","e","c","b","d"]),dx:Math.cos(r)*a,dz:Math.sin(r)*a,rot:e()*360,skala:Zr(e,2.4,3.4),y:-.25,instans:!0,skygge:!0,ressource:"blok"})}for(let i=0;i<2;i++)s.pynt.push({model:Qs+"rock_single_"+bn(e,["a","b","d"]),...zl(e,.7),rot:e()*360,skala:1.3,instans:!0,skygge:!0,ressource:"sten"});return}const t=5+Math.floor(e()*2);for(let n=0;n<t;n++){const i=n/t*Math.PI*2+e()*.6,r=n===0?Nt*.1:Nt*Zr(e,.45,.7),[a,o]=Xd(e,s.region);s.pynt.push({model:a,dx:Math.cos(i)*r,dz:Math.sin(i)*r,rot:e()*360,skala:o,instans:!0,skygge:!0,ressource:"træ"})}}function S0(s,e){const t=e(),n=(a,o=1,l=null,c=!0)=>s.pynt.push({model:a,...zl(e),rot:e()*360,skala:o,instans:!0,skygge:c,ressource:l}),i=(a=1)=>{const[o,l]=Xd(e,s.region);n(o,l*.75*a,"træFrit")},r=(a=1)=>n(Qs+"rock_single_"+bn(e,["b","c","e"]),1.25*a,"sten");switch(s.region){case"skoven":t<.45&&i(),t>.3&&t<.6?i(.9):t>.85&&r();break;case"gravlandet":t<.22?n(On+bn(e,["gravestone","gravemarker_a","gravemarker_b"]),.7):t<.36?i(.9):t<.46?n(On+bn(e,["bone_a","bone_b","skull"]),.6,null,!1):t<.52&&r();break;case"bjergene":t<.32?r(1.15):t<.4&&i();break;case"sumpen":t<.22?i(.9):t<.32&&r(.9);break;default:t<.2?i():t<.36&&r()}}function E0(s,e){s.region!=="sumpen"||e()>.45||s.pynt.push({model:Qs+bn(e,["waterlily_a","waterlily_b","waterplant_a","waterplant_b"]),...zl(e),rot:e()*360,skala:1.2,instans:!0,y:-.75,absolut:!0})}function T0(s,e,t,n){const i=(r,a,o)=>{const l=r/a*Math.PI*2+t()*.5;return{dx:Math.cos(l)*o,dz:Math.sin(l)*o,v:l}};if(e==="skeletter"){const r=[["grave_a",.6],["gravestone",.75],["gravemarker_a",.9],["grave_b",.6],["gravemarker_b",.9],["ribcage",.8],["skull",.6]];for(let a=0;a<6;a++){const{dx:o,dz:l,v:c}=i(a,6,Nt*.85),[d,h]=bn(t,r);s.pynt.push({model:On+d,dx:o,dz:l,rot:-c*180/Math.PI+90,skala:h,instans:!0,skygge:!0})}s.pynt.push({model:On+"lantern_standing",dx:Nt*.6,dz:-Nt*.55,rot:0,skala:1.4,skygge:!0}),n&&s.pynt.push({model:On+"post_skull",dx:-Nt*.7,dz:-Nt*.45,rot:0,skala:.9,skygge:!0})}else{const r="kaykit-hexagon/decoration/props/",a=[["crate_a_big",1.3],["barrel",1.4],["sack",1.4],["crate_long_a",1.2],["resource_lumber",1.2]];s.pynt.push({model:r+"tent",...i(0,1,Nt*.7),rot:t()*360,skala:2,skygge:!0});for(let o=1;o<5;o++){const{dx:l,dz:c}=i(o,5,Nt*.8),[d,h]=bn(t,a);s.pynt.push({model:r+d,dx:l,dz:c,rot:t()*360,skala:h,instans:!0,skygge:!0})}s.pynt.push({model:r+"weaponrack",dx:-Nt*.3,dz:Nt*.75,rot:20,skala:2.2,skygge:!0})}}const Br="kaykit-hexagon/buildings/",A0=[[0,0],[1,-1],[0,-1]];function w0(s,e){const t=_s.størrelse/2,n=(M,A,x=!0)=>(M.optaget=!0,x&&(M.gåbar=!1),A&&M.pynt.push(A),M),i=M=>M&&M.type==="græs"&&M.gåbar&&!M.optaget&&s.naboer(M).filter(A=>A.gåbar).length>=5,r=(M,A)=>{const x=ll(Math.round(M*t),Math.round(A*t));let v=null,R=1/0;for(const L of s.felter.values()){if(!i(L))continue;const F=gn(L,x);F<R&&(R=F,v=L)}return v},a=s.base,o=A0.map(([M,A])=>s.hent(a.q+M,a.r+A)).filter(Boolean);for(const M of o)n(M,null);const l={felter:o,x:o.reduce((M,A)=>M+ot(A.q,A.r).x,0)/o.length,z:o.reduce((M,A)=>M+ot(A.q,A.r).z,0)/o.length},c=s.hent(a.q+1,a.r+1);c.optaget=!0,c.pynt.push({model:"kaykit-hexagon/decoration/props/flag_green",dx:1.6,dz:1.2,rot:0,skala:1.4});const d=ot(a.q,a.r),h=M=>{const A=ot(M.q,M.r);return Math.abs(Math.atan2(A.z-d.z,A.x-d.x)-.3)},u=[...s.felter.values()].filter(M=>gn(M,a)===3&&i(M)).sort((M,A)=>h(M)-h(A))[0],f=[];u&&(n(u,{model:Br+"yellow/building_mine_yellow",rot:240,skala:1.1,skygge:!0}),f.push({type:"mine",start:!0,q:u.q,r:u.r,...ot(u.q,u.r)}));const g=(M,A,x,v,R=1,L=!0)=>{const F=r(A,x);F&&(n(F,{model:Br+v,rot:Math.floor(e()*6)*60,skala:R,skygge:!0},L),f.push({type:M,q:F.q,r:F.r,...ot(F.q,F.r)}))};g("kro",0,0,"yellow/building_tavern_yellow",1.5),g("marked",.42,.22,"yellow/building_market_yellow",1.15);for(const[M,A]of[[-.12,.42],[.32,-.18],[-.45,-.42],[.62,.55]])g("kilde",M,A,"yellow/building_well_yellow",1.5);for(const[M,A]of[[-.05,-.15],[-.7,-.7],[.68,.28],[.15,.72]])g("udkig",M,A,"yellow/building_tower_base_yellow",1.4);g("mine",-.32,.6,"yellow/building_mine_yellow",1.1);const b=[],m=(M,A,x={})=>{const v=ot(M.q,M.r);b.push({x:v.x+(e()-.5)*3,z:v.z+(e()-.5)*3,rot:e()*Math.PI*2,niveau:A,...x}),M.optaget=!0};for(let M=0;M<4;M++){const A=r(-.3+e()*.6,-.1+e()*.5);if(!A||A.region!=="askemarken")continue;n(A,{model:Br+"neutral/"+(M%2?"building_destroyed":"building_scaffolding"),rot:e()*360,skala:1.2,skygge:!0});const x=s.naboer(A).find(i);x&&m(x,2)}for(const[M,A,x]of[[-.75,-.1,2],[.1,-.45,3],[.45,.78,3],[.88,-.38,4]]){const v=r(M,A);v&&m(v,x)}const p=[],y=(M,A,x)=>{const v=r(M,A);if(!v)return;const R=S(v,5,x);p.push(R);const L=ot(v.q,v.r);b.push({x:L.x+3.2,z:L.z-2.6,rot:-.5,niveau:4,guld:!0,lejrId:R.id})},S=(M,A,x)=>{const v=_0[x][A];return n(M,null,!1),T0(M,x,e,A===5),{id:`lejr-${M.q}-${M.r}`,q:M.q,r:M.r,niveau:A,familie:x,creeps:v[Math.floor(e()*v.length)]}};y(.72,-.72,"skeletter"),y(.82,-.05,"plyndrere");const _=Math.max(...[...s.felter.values()].filter(M=>M.gåbar).map(M=>gn(M,a))),C=[...s.felter.values()].filter(i).sort(()=>e()-.5);for(const M of C){if(p.length>=26)break;const A=gn(M,a);if(A<6||p.some(R=>gn(R,M)<6)||f.some(R=>gn(R,M)<3))continue;const x=A/_,v=x<.3?1:x<.48?2:x<.68?3:4;p.push(S(M,v,v0[M.region]))}for(const M of p.filter(A=>A.niveau===2||A.niveau===3).slice(0,5)){const A=s.naboer(s.hent(M.q,M.r)).find(i);A&&(n(A,{model:Br+"yellow/building_mine_yellow",rot:Math.floor(e()*6)*60,skala:1.1,skygge:!0}),f.push({type:"mine",q:A.q,r:A.r,...ot(A.q,A.r)}))}const w=ot(c.q,c.r);return{heltSpawn:{x:w.x,z:w.z},steder:f,lejre:p,kister:b,storlejr:l}}function R0(s=_s.seed){const e=l0(s),t=u0(s),{heltSpawn:n,steder:i,lejre:r,kister:a,storlejr:o}=w0(t,e);for(const l of t.felter.values())l.type==="vand"?E0(l,e):l.blok?M0(l,e):l.type==="græs"&&!l.optaget&&S0(l,e);return{kort:t,heltSpawn:n,steder:i,lejre:r,kister:a,storlejr:o,tilf:e,grænser:b0()}}const qi=2.5,Ah=ma,k0=-.55,gi=ft,bi={græs:new ge().setRGB(.7,.75,.33,gi),sand:new ge().setRGB(.86,.77,.55,gi),bund:new ge().setRGB(.55,.49,.36,gi),klippe:new ge().setRGB(.56,.53,.47,gi),guld:new ge().setRGB(.8,.62,.3,gi),mørk:new ge().setRGB(.45,.62,.26,gi),lys:new ge().setRGB(.82,.8,.42,gi)},Gs=(s,e,t)=>{const n=Math.min(1,Math.max(0,(t-s)/(e-s)));return n*n*(3-2*n)};function C0(s,e,t){const n=jd(e,t);let i=0,r=0,a=0,o=0;const l=[0,0,0];for(let d=-2;d<=2;d++)for(let h=Math.max(-2,-d-2);h<=Math.min(2,-d+2);h++){const u=n.q+d,f=n.r+h,g=ot(u,f),b=Math.hypot(g.x-e,g.z-t);if(b>=Ah)continue;const m=(1-b/Ah)**2,p=s.hent(u,f);if(i+=m,!p||p.type==="vand")continue;r+=m,p.blok==="bjerg"&&(a+=m),p.blok==="skov"&&(o+=m);const y=Bl[p.region].farve;l[0]+=y[0]*m,l[1]+=y[1]*m,l[2]+=y[2]*m}return{L:i?r/i:0,K:i?a/i:0,F:i?o/i:0,tone:r?l.map(d=>d/r):[1,1,1]}}function qd(s,e,t,n){const i=C0(s,e,t),r=i.L+(Ft(e,t,n+20,5)-.5)*.18,a=Gs(.12,.5,r);let o=-2.4*(1-a);return o+=2.6*Gs(.35,.9,i.K)*(.75+.5*Ft(e,t,n+23,6)),o+=(Ft(e,t,n+24,4)-.5)*.22*a,{y:o,...i,L:r}}const P0=(s,e,t,n=3)=>qd(s,e,t,n).y;function L0(s,e,t=[],n=3){const i=Math.ceil((e.maxX-e.minX)/qi),r=Math.ceil((e.maxZ-e.minZ)/qi),a=new Ai(i*qi,r*qi,i,r).rotateX(-Math.PI/2);a.translate((e.minX+e.maxX)/2,0,(e.minZ+e.maxZ)/2);const o=a.attributes.position,l=new Float32Array(o.count*3),c=new ge,d=new ge;for(let g=0;g<o.count;g++){let b=o.getX(g),m=o.getZ(g);b+=(Ft(b,m,n+21,3)-.5)*qi*.6,m+=(Ft(m,b,n+22,3)-.5)*qi*.6;const{y:p,L:y,K:S,F:_,tone:C}=qd(s,b,m,n);o.setXYZ(g,b,p,m),c.copy(bi.græs).multiply(d.setRGB(C[0],C[1],C[2]));const w=Ft(b,m,n+27,14);c.lerp(w>.5?bi.mørk:bi.lys,Math.abs(w-.5)*.9),c.lerp(bi.bund,Gs(.3,.9,_)*.35),c.lerp(bi.klippe,Gs(.3,.8,S));for(const A of t){const x=Math.hypot(A.x-b,A.z-m);x<10&&c.lerp(bi.guld,(1-x/10)**1.2*.75)}c.lerp(bi.sand,(1-Gs(.6,.88,y))*.9);const M=.92+Ft(b,m,n+25,9)*.14+(Ft(b*3,m*3,n+26,2)-.5)*.05;c.multiplyScalar(M),l[g*3]=c.r,l[g*3+1]=c.g,l[g*3+2]=c.b}a.setAttribute("color",new kt(l,3)),a.computeVertexNormals();const h=new ct(a,new zn({vertexColors:!0,flatShading:!0,roughness:.95,metalness:0}));h.receiveShadow=!0;const u=new ct(new Ys(800,64).rotateX(-Math.PI/2),new zn({color:4168393,roughness:.3,metalness:0,transparent:!0,opacity:.86}));u.position.y=k0,u.receiveShadow=!0;const f=new ct(new Ys(800,32).rotateX(-Math.PI/2),new zn({color:3108751,roughness:1}));return f.position.y=-2.5,[f,h,u]}const Kd=sr.hexSkala,wh=12,Yd=["kaykit-hexagon/decoration/nature/tree_single_a_cut","kaykit-hexagon/decoration/nature/tree_single_b_cut"],I0=s=>(s.skala??1)*(s.model.includes("kaykit-hexagon")?Kd:1);function D0(s,e){const t=new Map,n=new P(0,1,0),i=[],r=[];for(const h of e.felter.values()){const u=ot(h.q,h.r);for(const f of h.pynt){const g=u.x+(f.dx??0),b=u.z+(f.dz??0),m=f.absolut?f.y:P0(e,g,b)+(f.y??0),p=I0(f),y=new nn().setFromAxisAngle(n,es.degToRad(f.rot??0)),S=new we().compose(new P(g,m,b),y,new P(p,p,p));if(Object.assign(f,{x:g,y:m,z:b}),f.instans){const _=`${f.model}|${Math.floor(h.kol/wh)},${Math.floor(h.ræk/wh)}`;t.has(_)||t.set(_,{sti:f.model,matricer:[],skygge:f.skygge});const C=t.get(_);C.matricer.push(S),f.ref={nøgle:_,i:C.matricer.length-1}}else{const _=sn(f.model,{skygge:f.skygge});S.decompose(_.position,_.quaternion,_.scale),s.add(_),f.model.includes("/buildings/")&&r.push({rod:_,egen:!1})}if(f.ressource){const _=y0[f.ressource],C=f.ressource.startsWith("træ")?"træ":"sten",w={id:i.length,type:C,[C]:_.mængde,start:_.mængde,x:g,z:b,y:m,r:_.r,h:_.h,f:h,pynt:f,blokerer:!!h.blok};i.push(w),(h.ressourcer??(h.ressourcer=[])).push(w)}}}const a=new Map;for(const[h,u]of t){const f=n0(u.sti,u.matricer,{skygge:u.skygge});a.set(h,f),s.add(f)}const o=new we().makeScale(0,0,0);function l(h){var u;if(h.ref){for(const f of((u=a.get(h.ref.nøgle))==null?void 0:u.children)??[])f.setMatrixAt(h.ref.i,o),f.instanceMatrix.needsUpdate=!0;h.ref=null}}function c(h,{stub:u=!0}={}){if(h[h.type]=0,!h.pynt.ref)return;if(l(h.pynt),u&&h.type==="træ"){const g=sn(Yd[h.id%2],{skygge:!1});g.position.set(h.x,h.y,h.z),g.rotation.y=h.id*1.7,g.scale.setScalar(Kd*1.2),s.add(g)}const f=h.f;f.blok==="skov"&&f.ressourcer.every(g=>g.træ<=0||!g.blokerer)&&(f.blok=void 0,f.gåbar=!f.optaget)}function d(h){for(const u of h.pynt)l(u);for(const u of h.ressourcer??[])u[u.type]=0}return{ressourcer:i,bygninger:r,fjern:c,ryd:d}}const U0=sr.hexSkala,hl=["kaykit-hexagon/decoration/nature/rock_single_c","kaykit-hexagon/decoration/nature/rock_single_e","kaykit-dungeon/coin_stack_large_gltf"];function N0(s,e){const t=new zn({color:16760612,metalness:.2,roughness:.32,emissive:16748544,emissiveIntensity:.35,flatShading:!0}),n=new zn({color:16777215,emissive:16773808,emissiveIntensity:3}),i=new Il(.3,0),r=[],a=(l,c,d,h,u)=>{const f=sn(hl[u%2],{skygge:!0});return f.traverse(g=>{g.isMesh&&(g.material=t)}),f.position.set(l,c,d),f.rotation.set(u*.7,u*2.3,u*1.1),f.scale.setScalar(U0*h),s.add(f),f};for(const[l,c]of e.entries()){for(let h=0;h<9;h++){const u=h/9*Math.PI*2+l*.7,f=2.6+h%3*.7,g=.8+h*5%4*1,b=a(c.x+Math.cos(u)*f,g,c.z+Math.sin(u)*f,.5+h%3*.12,h);if(h%2===0){const m=new ct(i,n);m.position.set(c.x+Math.cos(u)*(f+.9),g+.6,c.z+Math.sin(u)*(f+.9)),m.userData.fase=h*1.3+l,s.add(m),r.push(m)}b.userData.mine=c}for(let h=0;h<5;h++){const u=h/5*Math.PI*2+l+.3;a(c.x+Math.cos(u)*5.6,-.1,c.z+Math.sin(u)*5.6,.7+h%2*.25,h+3)}const d=sn(hl[2],{skygge:!0});d.position.set(c.x+Math.cos(l+.45)*6.4,0,c.z+Math.sin(l+.45)*6.4),d.scale.setScalar(1.4),s.add(d)}let o=0;return{opdater(l){o+=l,t.emissiveIntensity=.3+Math.sin(o*2.2)*.1;for(const c of r){const d=Math.max(0,Math.sin(o*1.7+c.userData.fase))**6;c.scale.setScalar(.15+d*1.8),c.rotation.y=o*2}}}}function F0(s){const e=new Set([...Yd,...hl]);for(const t of s.felter.values())for(const n of t.pynt)e.add(n.model);return[...e]}function O0(s,e,t,n){const i=n.filter(o=>o.type==="mine");for(const o of L0(e,t,i))s.add(o);const r=D0(s,e),a=N0(s,i);return{...r,opdater:o=>a.opdater(o)}}function B0(s,e){s.background=new ge(10474474),s.fog=new wl(10474474,85,190),s.add(new Fd(14677247,5925690,1.6));const t=new Ul(16773590,2.6);t.castShadow=!0,t.shadow.mapSize.set(2048,2048);const n=t.shadow.camera;n.left=-46,n.right=46,n.top=46,n.bottom=-46,n.near=1,n.far=180,t.shadow.bias=-6e-4,t.shadow.normalBias=.04,s.add(t,t.target),e.toneMapping=qh,e.toneMappingExposure=1.05,e.shadowMap.enabled=!0,e.shadowMap.type=Wh;const i=new P(-30,60,26);return{følg(r,a){t.target.position.set(r,0,a),t.position.set(r+i.x,i.y,a+i.z)}}}const Us=new Map,Z={on(s,e){return Us.has(s)||Us.set(s,new Set),Us.get(s).add(e),()=>Us.get(s).delete(e)},emit(s,e){for(const t of Us.get(s)??[])t(e)}};class ga{constructor(e,t,{skala:n=1,skjul:i=[],våben:r={},våbenSkala:a=1,radius:o=.7}={}){this.verden=e,this.rod=new tn,this.model=sn(t,{skygge:!0}),this.model.scale.setScalar(n),this.rod.add(this.model),e.scene.add(this.rod),this.radius=o,this.højde=2.4*n,this.model.traverse(l=>{i.includes(l.name)&&(l.visible=!1)});for(const[l,c]of Object.entries(r)){const d=this.model.getObjectByName(l==="r"?"handslotr":"handslotl");if(!d)continue;const h=sn(c.includes("/")?c:`kaykit-skeletons/${c}`,{skygge:!0});h.scale.setScalar(a),d.add(h)}this.mixer=new fv(this.model),this.handlinger=new Map(i0(t).map(l=>[l.name,this.mixer.clipAction(l)])),this.aktiv=null,this.mixer.addEventListener("finished",l=>{var c;return(c=this.vedAnimSlut)==null?void 0:c.call(this,l.action)}),this.maxHp=100,this.hp=100,this.død=!1,this.vej=[],this.fart=3,this.vinkelMål=0}get x(){return this.rod.position.x}get z(){return this.rod.position.z}afstand(e){return Math.hypot(e.x-this.x,e.z-this.z)}spil(e,{loop:t=!0,fade:n=.15,fart:i=1,gentag:r=!1}={}){const a=this.handlinger.get(e);return a?a===this.aktiv&&!r?(a.timeScale=i,a.getClip().duration):(a.reset(),a.setLoop(t?ad:rd,1/0),a.clampWhenFinished=!t,a.timeScale=i,a.play(),this.aktiv&&this.aktiv!==a&&a.crossFadeFrom(this.aktiv,n,!1),this.aktiv=a,a.getClip().duration/i):0}vend(e,t){this.vinkelMål=Math.atan2(e-this.x,t-this.z)}gåTil(e,t){return this.vej=this.verden.kort.findVej({x:this.x,z:this.z},{x:e,z:t}),this.vej.length>0}stop(){this.vej=[]}get bevæger(){return this.vej.length>0}opdaterBevægelse(e){if(!this.vej.length)return;const t=this.vej[0],n=t.x-this.x,i=t.z-this.z,r=Math.hypot(n,i),a=this.fart*e;r<=a?(this.rod.position.x=t.x,this.rod.position.z=t.z,this.vej.shift()):(this.rod.position.x+=n/r*a,this.rod.position.z+=i/r*a,this.vinkelMål=Math.atan2(n,i))}opdater(e){this.mixer.update(e);let t=this.vinkelMål-this.rod.rotation.y;t=Math.atan2(Math.sin(t),Math.cos(t)),this.rod.rotation.y+=t*Math.min(1,e*12)}tagSkade(e,t){return this.død?!1:(this.hp=Math.max(0,this.hp-e),Z.emit("skade",{mål:this,mængde:e,kilde:t}),this.hp<=0?(this.dø(t),!0):!1)}dø(){this.død=!0,this.vej=[]}fjern(){this.verden.scene.remove(this.rod),this.mixer.stopAllAction()}}function z0(s,e){for(let t=0;t<s.length;t++){const n=s[t];if(!n.død)for(let i=t+1;i<s.length;i++){const r=s[i];if(r.død)continue;const a=r.x-n.x,o=r.z-n.z,l=Math.hypot(a,o),c=n.radius+r.radius;if(l>=c||l<1e-4)continue;const d=(c-l)/2,h=a/l,u=o/l;Rh(n,-h*d,-u*d,e),Rh(r,h*d,u*d,e)}}}function Rh(s,e,t,n){n.erGåbar(s.x+e,s.z+t)&&(s.rod.position.x+=e,s.rod.position.z+=t)}const H0={vold:{navn:"Vold",tekst:"Aggressiv skade. Høj burst og områdeskade, ingen overlevelse."},tålmodighed:{navn:"Tålmodighed",tekst:"Defensiv. Overlever længe, men lav burst-skade."},ofring:{navn:"Ofring",tekst:"Risiko og belønning. Betal med liv for ekstrem skade."}},kh={bruteStrike:{navn:"Brute Strike",mana:40,cd:8,ikon:"🪓",tekst:"1,8× skade på nærmeste fjende"},warCry:{navn:"War Cry",mana:60,cd:20,ikon:"📯",tekst:"+30 % angrebshastighed i 5 s"},ironSkin:{navn:"Iron Skin",mana:50,cd:25,ikon:"🛡️",tekst:"+50 % rustning i 8 s"},bloodPrice:{navn:"Blood Price",mana:0,cd:15,ikon:"🩸",tekst:"Mist 15 % liv, næste slag 3× skade"},earthStomp:{navn:"Earth Stomp",mana:100,cd:30,ikon:"💥",tekst:"120 skade og 1 s lammelse omkring dig"},endure:{navn:"Endure",mana:80,cd:60,ikon:"⛰️",tekst:"Udødelig i 2 s"},martyr:{navn:"Martyr's Strike",mana:0,cd:25,ikon:"⚔️",tekst:"Ram alle tæt på, koster 30 % liv"}},G0={vold:["bruteStrike","warCry","earthStomp"],tålmodighed:["bruteStrike","ironSkin","endure"],ofring:["bruteStrike","bloodPrice","martyr"]},Ch=[1,3,6];class V0{constructor(e,t){this.helt=e,this.essens=t,this.cooldowns=[0,0,0],this.tWarCry=0,this.tIronSkin=0,this.tUdødelig=0,this.blodAktiv=!1}info(e){const t=G0[this.essens][e];return{id:t,...kh[t],oplåsLevel:Ch[e],oplåst:this.helt.level>=Ch[e],cd:this.cooldowns[e],cdMax:kh[t].cd}}opdater(e){for(let t=0;t<3;t++)this.cooldowns[t]=Math.max(0,this.cooldowns[t]-e);this.tWarCry=Math.max(0,this.tWarCry-e),this.tIronSkin=Math.max(0,this.tIronSkin-e),this.tUdødelig=Math.max(0,this.tUdødelig-e)}angrebsBonus(){return this.tWarCry>0?.3:0}rustningsBonus(){return this.tIronSkin>0?Math.floor(this.helt.stats.rustning*.5):0}erUdødelig(){return this.tUdødelig>0}slagMultiplikator(e){return this.blodAktiv?(this.blodAktiv=!1,Z.emit("effekt",{type:"blodslag",helt:this.helt}),e*3):e}brug(e){const t=this.helt,n=this.info(e);if(t.død)return"Helten er faldet";if(!n.oplåst)return`Låses op ved level ${n.oplåsLevel}`;if(n.cd>0)return`${n.navn} er klar om ${Math.ceil(n.cd)} s`;if(t.mana<n.mana)return"Ikke nok mana";const i=this[n.id]();return i||(t.mana-=n.mana,this.cooldowns[e]=n.cdMax,t.sidstIKamp=t.tid,Z.emit("evne",{helt:t,id:n.id,navn:n.navn}),null)}fjenderInden(e){return this.helt.verden.creeps.filter(t=>!t.død&&this.helt.afstand(t)-t.radius<=e)}bruteStrike(){const e=this.helt,t=e.mål&&!e.mål.død&&e.afstand(e.mål)-e.mål.radius<=e.stats.rækkevidde*1.3?e.mål:this.fjenderInden(e.stats.rækkevidde*1.3).sort((n,i)=>e.afstand(n)-e.afstand(i))[0];if(!t)return"Ingen fjende tæt nok på";e.mål=t,e.vend(t.x,t.z),e.spil("2H_Melee_Attack_Chop",{loop:!1,fart:1.8,gentag:!0,fade:.05}),e.sving={tid:0,varighed:.9,slagTid:.4,mål:t,ramt:!0},setTimeout(()=>{t.død||(t.tagSkade(Math.round(e.slagSkade()*1.8),e),Z.emit("effekt",{type:"tungtSlag",mål:t}))},400),e.cooldown=e.angrebsTid()}warCry(){this.tWarCry=5,this.heltRåb()}ironSkin(){this.tIronSkin=8,this.heltRåb()}endure(){this.tUdødelig=2,this.heltRåb()}bloodPrice(){const e=this.helt;e.hp=Math.max(1,e.hp-Math.floor(e.hp*.15)),this.blodAktiv=!0,this.heltRåb()}earthStomp(){const e=this.helt;e.spil("2H_Melee_Attack_Chop",{loop:!1,fart:1.6,gentag:!0,fade:.05}),e.sving={tid:0,varighed:1,slagTid:99,ramt:!0},setTimeout(()=>{var t;Z.emit("effekt",{type:"stomp",x:e.x,z:e.z,radius:5});for(const n of this.fjenderInden(5))n.tagSkade(120,e),(t=n.lam)==null||t.call(n,1)},450)}martyr(){const e=this.helt,t=this.fjenderInden(e.stats.rækkevidde+.8);if(!t.length)return"Ingen fjender inden for rækkevidde";e.hp=Math.max(1,e.hp-Math.floor(e.hp*.3)),e.spil("2H_Melee_Attack_Spin",{loop:!1,fart:2,gentag:!0,fade:.05}),e.sving={tid:0,varighed:1.2,slagTid:99,ramt:!0},setTimeout(()=>{Z.emit("effekt",{type:"spin",x:e.x,z:e.z,radius:e.stats.rækkevidde+.8});for(const n of t)n.død||n.tagSkade(e.slagSkade(),e)},500)}heltRåb(){const e=this.helt;e.sving||(e.spil("Spellcast_Raise",{loop:!1,fart:1.6,gentag:!0,fade:.1}),e.sving={tid:0,varighed:1,slagTid:99,ramt:!0})}}const zr=ft,to=new Map;function Hl(s){s.traverse(e=>{var n;if(!e.isMesh||!((n=e.material)!=null&&n.map))return;const t=e.material.map;to.has(t)||to.set(t,j0(t)),e.material=e.material.clone(),e.material.map=to.get(t)})}function j0(s){const e=s.image,t=document.createElement("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0);const i=n.getImageData(0,0,t.width,t.height),r=i.data,a={h:0,s:0,l:0},o=new ge,l={r:0,g:0,b:0},c=t.width/8,d=t.height/4;for(let u=0;u<d;u++)for(let f=0;f<c;f++){const g=(u*t.width+f)*4;o.setRGB(r[g]/255,r[g+1]/255,r[g+2]/255,zr),o.getHSL(a,zr),o.setHSL(.24,.36,.17+a.l*.27,zr).getRGB(l,zr),r[g]=l.r*255,r[g+1]=l.g*255,r[g+2]=l.b*255}n.putImageData(i,0,0);const h=new Pl(t);return h.flipY=s.flipY,h.colorSpace=s.colorSpace,h.wrapS=s.wrapS,h.wrapT=s.wrapT,h.magFilter=s.magFilter,h.minFilter=s.minFilter,h}const Vs={almindelig:{navn:"Almindelig",farve:"#e9e4d8",hex:15328472},sjælden:{navn:"Sjælden",farve:"#4fa3ff",hex:5219327},episk:{navn:"Episk",farve:"#b46bff",hex:11824127},legendarisk:{navn:"Legendarisk",farve:"#ff9a2e",hex:16751150}},W0={forbrug:"Forbrug",opladning:"Opladninger",permanent:"Udstyr",artefakt:"Artefakt",opsamling:"Opsamling"},yt="kaykit-adventurers/",Hr="kaykit-dungeon/",X0="kaykit-skeletons/",no=[1,.35,.3],io=[.45,.6,1.25],q0=[.8,.45,1.2],K0=[1.25,1,.45],Mt={livseliksir:{navn:"Livseliksir",type:"forbrug",sjældenhed:"almindelig",model:Hr+"bottle_a_labeled_green_gltf",farve:no,tekst:"Giver straks 250 liv.",brug:{heal:250},pris:75},storLivseliksir:{navn:"Stor livseliksir",type:"forbrug",sjældenhed:"sjælden",model:Hr+"bottle_c_green_gltf",farve:no,tekst:"Giver straks 500 liv.",brug:{heal:500},pris:150},manaeliksir:{navn:"Manaeliksir",type:"forbrug",sjældenhed:"almindelig",model:Hr+"bottle_b_green_gltf",farve:io,tekst:"Giver straks 150 mana.",brug:{mana:150},pris:60},kroensKrus:{navn:"Kroens krus",type:"forbrug",sjældenhed:"almindelig",model:yt+"mug_full",tekst:"Heler 30 liv i sekundet i 8 sekunder.",brug:{helOverTid:[30,8]},pris:50},røgbombe:{navn:"Røgbombe",type:"forbrug",sjældenhed:"sjælden",model:yt+"smokebomb",tekst:"Fjender mister dig af syne og går hjem. Du er skjult i 4 sekunder.",brug:{røg:4},pris:90},hjemkald:{navn:"Hjemkaldets bog",type:"forbrug",sjældenhed:"sjælden",model:yt+"spellbook_closed",farve:q0,tekst:"Efter et kort ritual vender helten hjem til lejren.",brug:{hjem:!0},pris:120},lynstav:{navn:"Lynstav",type:"opladning",sjældenhed:"sjælden",model:yt+"wand",farve:io,ladninger:3,tekst:"Slår et lyn ned i nærmeste fjende for 150 skade. 3 ladninger.",brug:{lyn:150}},rustenDolk:{navn:"Rusten dolk",type:"permanent",sjældenhed:"almindelig",model:yt+"dagger",bonus:{skade:4},pris:150},træskjold:{navn:"Træskjold",type:"permanent",sjældenhed:"almindelig",model:yt+"shield_round",bonus:{rustning:2},pris:150},jernsværd:{navn:"Jernsværd",type:"permanent",sjældenhed:"sjælden",model:yt+"sword_1handed",bonus:{skade:9}},ridderskjold:{navn:"Ridderskjold",type:"permanent",sjældenhed:"sjælden",model:yt+"shield_badge_color",bonus:{rustning:4,hp:80}},koggeret:{navn:"Jægerens kogger",type:"permanent",sjældenhed:"sjælden",model:yt+"quiver",bonus:{angrebsfart:.15}},magerensBog:{navn:"Magerens bog",type:"permanent",sjældenhed:"sjælden",model:yt+"spellbook_open",bonus:{mana:100,manaRegen:1.5}},krigsøkse:{navn:"Krigsøkse",type:"permanent",sjældenhed:"episk",model:yt+"axe_2handed",bonus:{skade:16}},pigskjold:{navn:"Pigskjold",type:"permanent",sjældenhed:"episk",model:yt+"shield_spikes_color",bonus:{rustning:6,retur:.25},ekstra:"Sender 25 % af nærkampsskade tilbage."},stormstav:{navn:"Stormstav",type:"permanent",sjældenhed:"episk",model:yt+"staff",bonus:{mana:200,manaRegen:3,hpRegen:2}},tordenøksen:{navn:"Tordenøksen",type:"artefakt",sjældenhed:"legendarisk",model:yt+"axe_1handed",farve:K0,bonus:{skade:14,lynChance:.2},ekstra:"20 % chance for at slå et lyn ned i målet og to fjender tæt på (120 skade)."},gravkongensSkjold:{navn:"Gravkongens skjold",type:"artefakt",sjældenhed:"legendarisk",model:X0+"skeleton_shield_large_a",bonus:{rustning:8,hp:200,blok:.25},ekstra:"25 % chance for at blokere 40 skade."},kaptajnensKlinge:{navn:"Kaptajnens klinge",type:"artefakt",sjældenhed:"legendarisk",model:yt+"sword_2handed_color",bonus:{skade:24,livsstjæl:.12},ekstra:"Helten heles for 12 % af den skade, den giver."},guldpose:{navn:"Guldpose",type:"opsamling",sjældenhed:"almindelig",model:Hr+"coin_stack_small_gltf",tekst:"Guld.",brug:{guld:40}},styrkensSkrift:{navn:"Styrkens skrift",type:"opsamling",sjældenhed:"episk",model:yt+"spellbook_closed",farve:no,tekst:"Permanent +60 liv og +2 skade.",brug:{skrift:{hp:60,skade:2}}},visdommensSkrift:{navn:"Visdommens skrift",type:"opsamling",sjældenhed:"sjælden",model:yt+"spellbook_closed",farve:io,tekst:"Giver 250 erfaring.",brug:{xp:250}}},Ph={skade:s=>`+${s} skade`,rustning:s=>`+${s} rustning`,hp:s=>`+${s} liv`,mana:s=>`+${s} mana`,angrebsfart:s=>`+${Math.round(s*100)} % angrebsfart`,hpRegen:s=>`+${s} liv pr. sek.`,manaRegen:s=>`+${s} mana pr. sek.`};function Lh(s){const e=Mt[s],t=Object.entries(e.bonus??{}).filter(([n])=>Ph[n]).map(([n,i])=>Ph[n](i));return e.ekstra&&t.push(e.ekstra),e.tekst&&t.push(e.tekst),t}const so={1:{livseliksir:30,manaeliksir:12,kroensKrus:12,guldpose:18,rustenDolk:14,træskjold:14},2:{storLivseliksir:12,manaeliksir:8,røgbombe:10,hjemkald:10,rustenDolk:8,træskjold:8,jernsværd:12,ridderskjold:12,koggeret:10,magerensBog:10},3:{jernsværd:14,ridderskjold:14,koggeret:14,magerensBog:12,lynstav:16,styrkensSkrift:10,visdommensSkrift:12,storLivseliksir:8},4:{krigsøkse:22,pigskjold:22,stormstav:20,lynstav:12,styrkensSkrift:14,visdommensSkrift:10}},Y0={skeletter:["gravkongensSkjold","tordenøksen"],plyndrere:["kaptajnensKlinge","tordenøksen"]},Ih=["livseliksir","storLivseliksir","manaeliksir","kroensKrus","røgbombe","hjemkald","rustenDolk","træskjold"];function ro(s,e=Math.random){const t=Object.values(s).reduce((i,r)=>i+r,0);let n=e()*t;for(const[i,r]of Object.entries(s))if(n-=r,n<=0)return i;return Object.keys(s)[0]}const $0=()=>[...new Set(Object.values(Mt).map(s=>s.model))],Z0=6,Dh={skade:0,rustning:0,hp:0,mana:0,angrebsfart:0,hpRegen:0,manaRegen:0,livsstjæl:0,retur:0,blok:0,lynChance:0};class J0{constructor(e){this.helt=e,this.pladser=new Array(Z0).fill(null),this.bonus={...Dh},this.permanent={hp:0,skade:0},this.cooldown=0,this.helOverTid=null}get fuld(){return this.pladser.every(Boolean)}get guld(){return this.helt.verden.økonomi.guld}set guld(e){this.helt.verden.økonomi.guld=e}modtag(e,t){const n=Mt[e];if(n.type==="opsamling")return this.virkning(n.brug,n),Z.emit("item_samlet",{id:e}),!0;const i=this.pladser.indexOf(null);return i<0?!1:(this.pladser[i]={id:e,ladninger:t??n.ladninger??null},this.beregn(),Z.emit("item_samlet",{id:e}),!0)}smid(e){const t=this.pladser[e];if(!t)return null;this.pladser[e]=null;const n=this.helt;return this.beregn(),n.hp=Math.min(n.hp,n.maxHp),n.mana=Math.min(n.mana,n.manaMax),Z.emit("item_smidt",{id:t.id,ladninger:t.ladninger,x:n.x,z:n.z}),t}brug(e){const t=this.pladser[e];if(!t)return null;const n=Mt[t.id];if(!n.brug)return"info";if(this.helt.død)return"Helten er faldet";if(this.cooldown>0)return null;const i=this.virkning(n.brug,n);return i||(this.cooldown=.6,n.type==="opladning"?(t.ladninger-=1,t.ladninger<=0&&(this.pladser[e]=null)):this.pladser[e]=null,this.beregn(),null)}virkning(e,t){const n=this.helt;if(e.heal&&(n.hp=Math.min(n.maxHp,n.hp+e.heal),Z.emit("effekt",{type:"heal",mål:n,mængde:e.heal})),e.mana&&(n.mana=Math.min(n.manaMax,n.mana+e.mana),Z.emit("effekt",{type:"mana",mål:n})),e.helOverTid&&(this.helOverTid={pr:e.helOverTid[0],tid:e.helOverTid[1]},Z.emit("effekt",{type:"heal",mål:n})),e.guld&&this.tilføjGuld(e.guld,n),e.xp&&(n.fåXp(e.xp),Z.emit("flydetekst",{enhed:n,tekst:`+${e.xp} XP`,klasse:"xp"})),e.skrift&&(this.permanent.hp+=e.skrift.hp,this.permanent.skade+=e.skrift.skade,n.hp+=e.skrift.hp,Z.emit("flydetekst",{enhed:n,tekst:`+${e.skrift.hp} liv`,klasse:"level"})),e.røg){n.skjult=e.røg;for(const i of n.verden.creeps)!i.død&&i.tilstand==="jagt"&&i.gåHjem();Z.emit("effekt",{type:"røg",x:n.x,z:n.z})}if(e.lyn){const i=n.verden.creeps.filter(r=>!r.død&&r.rod.visible&&n.afstand(r)<16).sort((r,a)=>n.afstand(r)-n.afstand(a))[0];if(!i)return"Ingen fjende inden for rækkevidde";Z.emit("effekt",{type:"lyn",mål:i}),i.tagSkade(e.lyn,n)}if(e.hjem){if(n.sving)return"Helten er optaget";n.stop(),n.mål=null,n.spil("Spellcast_Raise",{loop:!1,gentag:!0,fart:.9}),Z.emit("effekt",{type:"portal",x:n.x,z:n.z}),n.sving={tid:0,varighed:2.2,slagTid:99,ramt:!0,vedSlut:()=>n.teleporter(n.spawn)}}return null}tilføjGuld(e,t){this.guld+=e,Z.emit("flydetekst",{enhed:t??this.helt,tekst:`+${e} guld`,klasse:"guld"})}beregn(){const e={...Dh};for(const t of this.pladser)if(t)for(const[n,i]of Object.entries(Mt[t.id].bonus??{}))e[n]+=i;e.hp+=this.permanent.hp,e.skade+=this.permanent.skade,this.bonus=e,Z.emit("inventar_ændret",{})}opdater(e){this.cooldown=Math.max(0,this.cooldown-e);const t=this.helt;this.helOverTid&&!t.død&&(t.hp=Math.min(t.maxHp,t.hp+this.helOverTid.pr*e),this.helOverTid.tid-=e,this.helOverTid.tid<=0&&(this.helOverTid=null))}vedSlag(e,t){const n=this.helt,i=this.bonus;if(i.livsstjæl&&(n.hp=Math.min(n.maxHp,n.hp+t*i.livsstjæl)),i.lynChance&&Math.random()<i.lynChance){const r=[e,...n.verden.creeps.filter(a=>a!==e&&!a.død&&a.afstand(e)<7).slice(0,2)];for(const a of r)a.død||(Z.emit("effekt",{type:"lyn",mål:a}),a.tagSkade(120,n))}}vedSkade(e,t){const n=this.helt,i=this.bonus;return i.blok&&Math.random()<i.blok&&(e=Math.max(0,e-40),Z.emit("flydetekst",{enhed:n,tekst:"Blokeret",klasse:"immun"})),i.retur&&t&&!t.død&&n.afstand(t)<4&&t.tagSkade(Math.round(e*i.retur),n),e}}const Q0={fåXp(s){const e=Zt.xp;for(this.xp+=s;this.level<e.length&&this.xp>=e[this.level];)this.levelOp()},levelOp(){this.level+=1;const s=this.level-1;this.basisHp+=Zt.hpBonus[s],this.hp=Math.min(this.maxHp,this.hp+Zt.hpBonus[s]),this.stats.skadeMin+=Zt.skadeBonus[s],this.stats.skadeMax+=Zt.skadeBonus[s],this.stats.rustning+=Zt.rustBonus[s],Z.emit("level_op",{helt:this,level:this.level})},xpProcent(){const s=Zt.xp;return this.level>=s.length?1:Math.min(1,(this.xp-s[this.level-1])/(s[this.level]-s[this.level-1]))}},ex={kommandoInteraktion(s,e,t,n){this.død||(this.mål=null,this.sving=null,this.handling={x:s,z:e,radius:t,udfør:n},this.gåOrdre=Math.hypot(s-this.x,e-this.z)<=t?!1:this.gåTil(s,e))},teleporter(s){this.rod.position.set(s.x,0,s.z),this.stop(),this.mål=null,this.handling=null,Z.emit("teleport",{helt:this})},opdaterHandling(){const s=this.handling;s&&(Math.hypot(s.x-this.x,s.z-this.z)<=s.radius?(this.handling=null,this.stop(),this.gåOrdre=!1,s.udfør()):this.bevæger||(this.handling=null))}},dl=(s,e)=>!!s&&(s===e.helt||s.side==="egen");function $d(s,e,t,n){const i=s.verden;let r=null,a=e;for(const o of i.creeps){if(o.død||o.tilstand==="hjem"||!o.rod.visible||!(o.tilstand==="jagt"&&dl(o.mål,i)||n-(t.get(o)??-99)<4))continue;const c=s.afstand(o);c<a&&(a=c,r=o)}return r}const tx=["1H_Axe","1H_Axe_Offhand","Barbarian_Round_Shield","Mug","Barbarian_Hat"],Uh=[{anim:"2H_Melee_Attack_Chop",slag:.48},{anim:"2H_Melee_Attack_Slice",slag:.42}];class Zd extends ga{constructor(e,t,n){super(e,"units/hero_tide",{skjul:tx,radius:.75}),Hl(this.model),this.spawn=t,this.stats={...s0},this.inventar=new J0(this),this.handling=null,this.skjult=0,this.maxHp=this.stats.maxHp,this.hp=this.maxHp,this.mana=this.stats.mana,this.fart=this.stats.fart,this.level=1,this.xp=0,this.evner=new V0(this,n),this.mål=null,this.cooldown=0,this.sving=null,this.sidstIKamp=-99,this.tid=0,this.genopliv=0,this.angribere=new Map,this.gåOrdre=!1,this.rod.position.set(t.x,0,t.z),this.spil("Idle")}kommandoGå(e,t){return this.død?!1:(this.mål=null,this.sving=null,this.handling=null,this.gåOrdre=this.gåTil(e,t),this.gåOrdre)}kommandoAngrib(e){this.død||e.død||(this.mål=e,this.gåOrdre=!1,this.handling=null)}get maxHp(){var e;return(this.basisHp??100)+(((e=this.inventar)==null?void 0:e.bonus.hp)??0)}set maxHp(e){this.basisHp=e}get manaMax(){return this.stats.mana+this.inventar.bonus.mana}get iKamp(){return this.tid-this.sidstIKamp<3}angrebsTid(){return this.stats.angrebsTid/(1+this.evner.angrebsBonus()+this.inventar.bonus.angrebsfart)}slagSkade(){return fa(this.stats.skadeMin,this.stats.skadeMax)+this.inventar.bonus.skade}opdater(e){var n;if(this.tid+=e,super.opdater(e),this.død){this.genopliv-=e,this.genopliv<=0&&this.rejsDig();return}this.evner.opdater(e),this.inventar.opdater(e),this.cooldown-=e,this.skjult=Math.max(0,this.skjult-e);const t=this.inventar.bonus;this.iKamp||(this.hp=Math.min(this.maxHp,this.hp+(this.stats.hpRegen+t.hpRegen)*e)),this.mana=Math.min(this.manaMax,this.mana+(this.stats.manaRegen+t.manaRegen)*e),this.opdaterHandling(),(n=this.mål)!=null&&n.død&&(this.mål=null),this.gåOrdre&&!this.bevæger&&(this.gåOrdre=!1),!this.mål&&!this.gåOrdre&&!this.sving&&(this.mål=this.findTrussel()),this.sving?this.opdaterSving(e):this.mål?this.forfølg(e):this.opdaterBevægelse(e),this.sving||(this.bevæger?this.spil("Running_A",{fart:1.1}):this.mål||this.spil(this.iKamp?"2H_Melee_Idle":"Idle"))}forfølg(e){if(this.afstand(this.mål)-this.mål.radius>this.stats.rækkevidde){this.genberegn=(this.genberegn??0)-e,(this.genberegn<=0||!this.bevæger)&&(this.gåTil(this.mål.x,this.mål.z),this.genberegn=.3),this.opdaterBevægelse(e);return}this.stop(),this.vend(this.mål.x,this.mål.z),this.cooldown<=0?this.startSving():this.spil("2H_Melee_Idle")}startSving(){const e=Uh[Math.floor(Math.random()*Uh.length)],t=Math.min(1.1,this.angrebsTid()*.75),n=this.handlinger.get(e.anim).getClip().duration;this.spil(e.anim,{loop:!1,fart:n/t,gentag:!0,fade:.08}),this.sving={tid:0,varighed:t,slagTid:t*e.slag,mål:this.mål,ramt:!1},this.cooldown=this.angrebsTid(),this.sidstIKamp=this.tid}opdaterSving(e){var n;const t=this.sving;if(t.tid+=e,t.mål&&!t.mål.død&&this.vend(t.mål.x,t.mål.z),!t.ramt&&t.tid>=t.slagTid&&(t.ramt=!0,t.mål&&!t.mål.død&&this.afstand(t.mål)-t.mål.radius<=this.stats.rækkevidde*1.5)){const i=Zs(this.evner.slagMultiplikator(this.slagSkade()),t.mål.rustning??0);t.mål.tagSkade(i,this),this.inventar.vedSlag(t.mål,i),Z.emit("slag",{kilde:this,mål:t.mål})}t.tid>=t.varighed&&(this.sving=null,(n=t.vedSlut)==null||n.call(t))}findTrussel(){return $d(this,18,this.angribere,this.tid)}tagSkade(e,t){return this.evner.erUdødelig()&&(e=0),this.sidstIKamp=this.tid,t&&t!==this&&this.angribere.set(t,this.tid),e>0&&(e=this.inventar.vedSkade(e,t)),super.tagSkade(Zs(e,this.stats.rustning+this.evner.rustningsBonus()+this.inventar.bonus.rustning),t)}dø(){super.dø(),this.mål=null,this.sving=null,this.gåOrdre=!1,this.handling=null,this.angribere.clear(),this.spil("Death_A",{loop:!1,fade:.1}),this.genopliv=this.stats.genopliv,Z.emit("helt_død",{helt:this})}rejsDig(){this.død=!1,this.hp=this.maxHp,this.mana=this.manaMax,this.rod.position.set(this.spawn.x,0,this.spawn.z),this.spil("Cheer",{loop:!1,gentag:!0}),this.sving={tid:0,varighed:1.4,slagTid:99,ramt:!0},Z.emit("helt_genoplivet",{helt:this})}}Object.assign(Zd.prototype,Q0,ex);class nx extends ga{constructor(e,t,n,i,r){const a=x0(t,n);super(e,`units/${a.model}`,{skala:a.skala??1,våben:a.våben??{},skjul:a.skjul??[],radius:.65*(a.skala??1)}),this.anim=a.anim,this.level=n,this.boss=!!a.boss,this.type=t,this.data=a,this.lejr=i,this.hjem=r,this.navn=a.navn,this.maxHp=a.hp,this.hp=a.hp,this.fart=a.fart,this.rustning=a.rustning,this.tilstand="vågner",this.mål=null,this.cooldown=0,this.sving=null,this.lammet=0,this.forsvind=0,this.rod.position.set(r.x,0,r.z),this.rod.rotation.y=this.vinkelMål=Math.random()*Math.PI*2,this.vågenTid=this.anim.vågn&&this.spil(this.anim.vågn,{loop:!1})||(this.spil(this.anim.idle),.3)}lam(e){this.død||(this.lammet=Math.max(this.lammet,e),this.sving=null,this.spil(this.anim.ramt,{loop:!1,gentag:!0}))}vækLejr(e){for(const t of this.lejr.creeps)!t.død&&t.tilstand==="hvile"&&(t.tilstand="jagt",t.mål=e)}egne(){var e,t;return((t=(e=this.verden).egne)==null?void 0:t.call(e))??[this.verden.helt].filter(n=>!n.død&&!n.skjult)}gyldigt(e){return e&&!e.død&&e.rod.visible!==!1&&!e.skjult}vælgMål(e){if(this.spot=Math.max(0,(this.spot??0)-e),this.vælgTid=(this.vælgTid??0)-e,this.spot>0&&this.gyldigt(this.mål))return this.mål;if(!this.gyldigt(this.mål)||this.vælgTid<=0){this.vælgTid=1;const t=this.gyldigt(this.mål)?this.afstand(this.mål):1/0;if(t>this.data.rækkevidde+4){let n=null,i=t===1/0?Fr.aggro*1.6:this.data.rækkevidde+3;for(const r of this.egne()){const a=this.afstand(r);a<i&&(i=a,n=r)}n?this.mål=n:t===1/0&&(this.mål=null)}}return this.mål}opdater(e){const t=this.verden.taage.erSynlig(this.x,this.z);if(this.rod.visible=t,(t||this.tilstand!=="hvile")&&super.opdater(e),this.død)return this.opdaterDød(e);if(this.tilstand==="vågner"){this.vågenTid-=e,this.vågenTid<=0&&(this.tilstand="hvile",this.spil(this.anim.idle));return}if(this.lammet>0){this.lammet-=e;return}if(this.cooldown-=e,this.tilstand==="hvile"){const n=this.egne().find(i=>this.afstand(i)<Fr.aggro||Math.hypot(i.x-this.lejr.x,i.z-this.lejr.z)<Fr.aggro*.7);n&&(this.vækLejr(n),this.spil(this.anim.råb,{loop:!1,gentag:!0}),this.sving={tid:0,varighed:.6,slagTid:99,ramt:!0})}if(this.sving)return this.opdaterSving(e);if(this.tilstand==="jagt"){const n=Math.hypot(this.x-this.lejr.x,this.z-this.lejr.z)>Fr.leash,i=this.vælgMål(e);if(!i||n)return this.gåHjem();this.afstand(i)-i.radius>this.data.rækkevidde?(this.genberegn=(this.genberegn??0)-e,(this.genberegn<=0||!this.bevæger)&&(this.gåTil(i.x,i.z),this.genberegn=.35),this.opdaterBevægelse(e),this.spil(this.anim.løb)):(this.stop(),this.vend(i.x,i.z),this.cooldown<=0?this.startSving(i):this.spil(this.anim.idle))}else this.tilstand==="hjem"&&(this.hp=Math.min(this.maxHp,this.hp+this.maxHp*.4*e),this.opdaterBevægelse(e),this.bevæger||(this.tilstand="hvile",this.hp=this.maxHp,this.spil(this.anim.idle)))}gåHjem(){this.tilstand="hjem",this.mål=null,this.gåTil(this.hjem.x,this.hjem.z),this.spil(this.anim.løb)}startSving(e){var i;const t=((i=this.handlinger.get(this.data.angreb))==null?void 0:i.getClip().duration)??1,n=Math.min(t,this.data.angrebsTid*.7);this.spil(this.data.angreb,{loop:!1,fart:t/n,gentag:!0,fade:.08}),this.sving={tid:0,varighed:n,slagTid:n*.5,mål:e,ramt:!1},this.cooldown=this.data.angrebsTid}opdaterSving(e){const t=this.sving;if(t.tid+=e,!t.ramt&&t.tid>=t.slagTid){t.ramt=!0;const n=t.mål;if(n&&!n.død){const i=fa(...this.data.skade);this.data.projektil?Z.emit("projektil",{fra:this,mål:n,skade:i,farve:this.data.projektil}):this.afstand(n)-n.radius<=this.data.rækkevidde*1.4&&n.tagSkade(i,this)}}t.tid>=t.varighed&&(this.sving=null)}tagSkade(e,t){return this.tilstand==="hjem"?!1:(this.tilstand==="hvile"&&t&&this.vækLejr(t),this.tilstand==="vågner"&&t&&(this.tilstand="jagt",this.mål=t),this.tilstand==="jagt"&&t&&!this.gyldigt(this.mål)&&(this.mål=t),super.tagSkade(e,t))}dø(e){super.dø(e),this.sving=null,this.spil(this.anim.død,{loop:!1,fade:.08}),this.forsvind=5,Z.emit("creep_død",{creep:this,xp:this.data.xp,kilde:e})}opdaterDød(e){this.forsvind-=e,this.forsvind<1.5&&(this.rod.position.y-=e*.8),this.forsvind<=0&&!this.fjernet&&(this.fjernet=!0,this.fjern())}}class ix{constructor(e,t){this.verden=e,this.data=t,this.level=Wd[t.niveau].level;const n=ot(t.q,t.r);this.x=n.x,this.z=n.z,this.creeps=[],this.tomTid=0,this.spawn()}spawn(){const e=this.data.creeps.length;this.creeps=this.data.creeps.map((t,n)=>{const i=n/e*Math.PI*2+.6,r={x:this.x+Math.cos(i)*2.6*(e>1),z:this.z+Math.sin(i)*2.6*(e>1)};return new nx(this.verden,t,this.level,this,r)}),this.verden.creeps.push(...this.creeps)}opdater(e){}}const sx=["1H_Axe_Offhand","Mug"],rx=["Knife","Knife_Offhand","1H_Crossbow","2H_Crossbow","Throwable"],Jd={grunt:{navn:"Grunt",model:"units/grunt",skala:.92,skjul:sx,radius:.7,hp:240,skade:[18,24],rustning:2,fart:4.4,rækkevidde:2.1,angrebsTid:1.6,angreb:["1H_Melee_Attack_Chop","1H_Melee_Attack_Slice_Diagonal"],slag:.45,idle:"Idle",løb:"Running_A"},spydkaster:{navn:"Spydkaster",model:"units/spydkaster",skala:.88,skjul:rx,radius:.6,våben:{r:"kaykit-skeletons/skeleton_arrow"},våbenSkala:2.4,hp:170,skade:[16,22],rustning:0,fart:4.6,rækkevidde:11,angrebsTid:2,angreb:["Throw"],slag:.42,idle:"Idle",løb:"Running_A",projektil:"spyd"}},Gl="kaykit-skeletons/skeleton_arrow",Jr={tærskel:200,prCreep:s=>5+s*5,bonusHp:.1},ni={ironhide:{navn:"Ironhide",stil:"overlevelse",farve:9416904,pris:{guld:100,træ:40,sten:40},hp:120,skade:-4,rustning:4,fart:-.2,skala:1.08,evne:"Spot",evneTekst:"Tvinger fjender tæt på til at angribe den i 2,5 sek.",tekst:"Forsvarer. Meget liv og rustning, mindre skade."},ravager:{navn:"Ravager",stil:"aggression",farve:16738890,pris:{guld:120,træ:40},hp:-40,skade:16,rustning:0,fart:.3,skala:1,evne:"Storm",evneTekst:"Spurter mod målet; første slag gør 1,5× skade.",tekst:"Angriber. Stor skade, men skrøbelig."},berserker:{navn:"Berserker",stil:"kaos",farve:16756782,pris:{guld:110,træ:50},hp:20,skade:8,rustning:-1,fart:.2,skala:1.03,variation:.3,evne:"Raseri",evneTekst:"Rammer alle fjender tæt på i 4 sek. og adlyder ikke imens.",tekst:"Kaos. Skade til alle sider, uforudsigelig."}};function Qd(s){const e=document.createElement("canvas");e.width=e.height=128;const t=e.getContext("2d"),n=t.createRadialGradient(64,64,0,64,64,64);s?(n.addColorStop(.66,"rgba(255,255,255,0)"),n.addColorStop(.82,"rgba(255,255,255,1)"),n.addColorStop(.97,"rgba(255,255,255,0)")):(n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.4,"rgba(255,255,255,0.5)"),n.addColorStop(1,"rgba(255,255,255,0)")),t.fillStyle=n,t.fillRect(0,0,128,128);const i=new Pl(e);return i.colorSpace=ft,i}const Gr=Qd(!0),ao=Qd(!1);function Ki(s,e,t,n=1,i=!1){const r=new ct(new Ai(t,t).rotateX(-Math.PI/2),new Bt({map:s,color:e,transparent:!0,opacity:n,depthWrite:!1,blending:i?Si:Mi}));return r.renderOrder=2,r}class ax{constructor(e){this.verden=e,this.scene=e.scene,this.aktive=[],this.heltRing=Ki(Gr,4063050,2.2,.85),this.målRing=Ki(Gr,16722458,2.2,.95),this.aura=Ki(ao,16726831,4,0,!0),this.scene.add(this.heltRing,this.målRing,this.aura),Z.on("effekt",t=>this.vedEffekt(t)),Z.on("projektil",t=>this.projektil(t)),Z.on("level_op",({helt:t})=>this.levelOp(t))}markør(e,t,n=10354554){const i=Ki(Gr,n,2.6);i.position.set(e,.06,t),this.tilføj(i,.6,r=>{i.scale.setScalar(1.3-r*.9),i.material.opacity=1-r})}bølge(e,t,n,i,r=.6){const a=Ki(Gr,i,2);a.position.set(e,.08,t),this.tilføj(a,r,l=>{a.scale.setScalar(.5+l*n),a.material.opacity=(1-l)*1.2});const o=Ki(ao,i,n*2,1,!0);o.position.set(e,.07,t),this.tilføj(o,r*.8,l=>{o.material.opacity=(1-l)*.8})}søjle(e,t,n=1.4,i=7){const r=new ct(new $s(1.1,1.4,i,24,1,!0),new Bt({color:t,transparent:!0,opacity:.6,blending:Si,depthWrite:!1,side:Jt}));this.tilføj(r,n,a=>{r.position.set(e.x,i/2,e.z),r.material.opacity=.6*(1-a),r.scale.set(1+a*.3,1,1+a*.3)})}levelOp(e){this.søjle(e,16765803),this.bølge(e.x,e.z,4,16765803,.9)}lyn(e){const t=new tn;let n=16,i=0,r=0;for(;n>.6;){const a=Math.max(.6,n-2-Math.random()*2),o=(Math.random()-.5)*1.6,l=(Math.random()-.5)*1.6,c=new P(i,n,r),d=new P(o,a,l),h=new ct(new $s(.12,.12,c.distanceTo(d),5),new Bt({color:12575999,transparent:!0,blending:Si,depthWrite:!1}));h.position.copy(c).add(d).multiplyScalar(.5),h.quaternion.setFromUnitVectors(new P(0,1,0),d.clone().sub(c).normalize()),t.add(h),n=a,i=o,r=l}t.position.set(e.x,0,e.z),this.tilføj(t,.3,a=>t.children.forEach(o=>{o.material.opacity=1-a}),()=>t.children.forEach(a=>{a.geometry.dispose(),a.material.dispose()})),this.bølge(e.x,e.z,2.2,10474751,.4)}vedEffekt(e){e.type==="stomp"?this.bølge(e.x,e.z,e.radius,16752704,.7):e.type==="spin"?this.bølge(e.x,e.z,e.radius,16726831,.5):e.type==="tungtSlag"?this.bølge(e.mål.x,e.mål.z,1.6,16769162,.35):e.type==="blodslag"?this.bølge(e.helt.x,e.helt.z,2.2,16715792,.45):e.type==="heal"?this.bølge(e.mål.x,e.mål.z,2.4,7208842,.7):e.type==="mana"?this.bølge(e.mål.x,e.mål.z,2.4,5939967,.7):e.type==="lyn"?this.lyn(e.mål):e.type==="portal"?this.søjle({x:e.x,z:e.z},11824127,2.2,9):e.type==="samlet"?this.bølge(e.x,e.z,1.6,e.farve??16769162,.4):e.type==="kiste"?(this.bølge(e.x,e.z,3.5,16765803,.8),this.søjle({x:e.x,z:e.z},16765803,.9,5)):e.type==="evne"?this.bølge(e.x,e.z,5,e.farve??16777215,.5):e.type==="veteran"?(this.bølge(e.x,e.z,3,16765803,.7),this.søjle({x:e.x,z:e.z},16765803,1.2,5)):e.type==="røg"&&(this.bølge(e.x,e.z,6,10132122,1.4),this.søjle({x:e.x,z:e.z},7829367,1.6,4))}projektil({fra:e,mål:t,skade:n,farve:i=11758591,model:r}){let a;if(r==="spyd"){a=new tn;const h=sn(Gl,{skygge:!0});h.scale.setScalar(3),h.rotation.x=Math.PI/2,a.add(h)}else a=new R_(new wd({map:ao,color:i,blending:Si,depthWrite:!1})),a.scale.setScalar(1.1);const o=new P(e.x,e.højde>3?e.højde:1.8,e.z);a.position.copy(o);const l=Math.max(.3,e.afstand(t)/14),c=new P,d=(h,u)=>(u.lerpVectors(o,new P(t.x,1.3,t.z),h),u.y+=Math.sin(h*Math.PI)*1.2,u);this.tilføj(a,l,h=>{d(h,a.position),r&&a.lookAt(d(Math.min(1,h+.05),c))},()=>{t.død||t.tagSkade(n,e),r||this.bølge(t.x,t.z,1.4,i,.35)})}tilføj(e,t,n,i){this.scene.add(e),this.aktive.push({obj:e,tid:0,varighed:t,opdater:n,slut:i})}opdater(e){var a,o,l;const t=this.verden.helt;this.heltRing.visible=!t.død,this.heltRing.position.set(t.x,.05,t.z);const n=t.mål;this.målRing.visible=!!(n&&!n.død),this.målRing.visible&&this.målRing.position.set(n.x,.05,n.z);const i=t.evner,r=i.tWarCry>0?16726831:i.tIronSkin>0?5944575:i.tUdødelig>0?16769658:null;this.aura.material.opacity=r?.55+Math.sin(performance.now()/150)*.15:0,r&&this.aura.material.color.setHex(r),this.aura.position.set(t.x,.06,t.z);for(let c=this.aktive.length-1;c>=0;c--){const d=this.aktive[c];d.tid+=e;const h=Math.min(1,d.tid/d.varighed);d.opdater(h),h>=1&&((a=d.slut)==null||a.call(d),this.scene.remove(d.obj),(o=d.obj.geometry)==null||o.dispose(),(l=d.obj.material)==null||l.dispose(),this.aktive.splice(c,1))}}}const oo=es.degToRad(52);class ox{constructor(e,t){this.kamera=new Rt(38,1,.5,300),this.fokus=new P,this.afstand=28,this.følger=!0,this.onTryk=t,this.pegere=new Map,this.lærred=e,this.grænser={minX:-40,maxX:40,minZ:-40,maxZ:40},e.addEventListener("pointerdown",n=>this.ned(n)),e.addEventListener("pointermove",n=>this.bevæg(n)),e.addEventListener("pointerup",n=>this.op(n)),e.addEventListener("pointercancel",n=>this.pegere.delete(n.pointerId)),e.addEventListener("wheel",n=>{n.preventDefault(),this.zoom(n.deltaY>0?1.1:.9)},{passive:!1})}ned(e){var t,n;(n=(t=this.lærred).setPointerCapture)==null||n.call(t,e.pointerId),this.pegere.set(e.pointerId,{x:e.clientX,y:e.clientY,sx:e.clientX,sy:e.clientY,t:performance.now(),trukket:!1}),this.pegere.size===2&&(this.knibStart=this.knibAfstand())}bevæg(e){const t=this.pegere.get(e.pointerId);if(!t)return;const n=e.clientX-t.x,i=e.clientY-t.y;t.x=e.clientX,t.y=e.clientY;const r=Math.hypot(t.x-t.sx,t.y-t.sy)>12;if(r&&!t.trukket&&this.pegere.size===1&&this.onBoks&&performance.now()-t.t>300&&(t.boks=!0),t.boks){t.trukket=!0,this.onBoks(t.sx,t.sy,t.x,t.y,!1);return}if(r&&(t.trukket=!0),this.pegere.size===2){const a=this.knibAfstand();this.knibStart&&this.zoom(this.knibStart/a),this.knibStart=a;for(const o of this.pegere.values())o.trukket=!0}else if(t.trukket){const a=this.afstand/this.lærred.clientHeight*1.15;this.fokus.x-=n*a,this.fokus.z-=i*a/Math.sin(oo),this.følger=!1,this.begræns()}}op(e){const t=this.pegere.get(e.pointerId);if(this.pegere.delete(e.pointerId),this.pegere.size<2&&(this.knibStart=null),t!=null&&t.boks)return this.onBoks(t.sx,t.sy,e.clientX,e.clientY,!0);t&&!t.trukket&&this.pegere.size===0&&performance.now()-t.t<450&&this.onTryk(e.clientX,e.clientY)}knibAfstand(){const[e,t]=[...this.pegere.values()];return Math.hypot(e.x-t.x,e.y-t.y)}zoom(e){this.afstand=es.clamp(this.afstand*e,12,56)}begræns(){const e=this.grænser;this.fokus.x=es.clamp(this.fokus.x,e.minX,e.maxX),this.fokus.z=es.clamp(this.fokus.z,e.minZ,e.maxZ)}centrér(){this.følger=!0}størrelse(e,t){this.kamera.aspect=e/t,this.portrætFaktor=e<t?1.25:1,this.kamera.updateProjectionMatrix()}opdater(e,t){if(this.følger&&t){const i=1-Math.exp(-e*6);this.fokus.x+=(t.x-this.fokus.x)*i,this.fokus.z+=(t.z-this.fokus.z)*i}const n=this.afstand*(this.portrætFaktor??1);this.kamera.position.set(this.fokus.x,Math.sin(oo)*n,this.fokus.z+Math.cos(oo)*n),this.kamera.lookAt(this.fokus.x,.8,this.fokus.z)}}const Vr=new P;class lx{constructor(e,t,n,i=()=>[]){this.rod=e,this.verden=t,this.kamera=n,this.ekstra=i,this.bjælker=new Map,this.toastEl=document.getElementById("toast"),Z.on("skade",({mål:r,mængde:a,kilde:o})=>{if(a<=0)return this.tal(r,"Immun","immun");const l=o===this.verden.helt;this.tal(r,a,l?a>this.verden.helt.stats.skadeMax*1.2?"krit":"helt":"fjende")}),Z.on("creep_død",({creep:r,xp:a})=>this.tal(r,`+${a} XP`,"xp",.6)),Z.on("level_op",({helt:r,level:a})=>this.tal(r,`Level ${a}!`,"level",1.2)),Z.on("besked",r=>this.toast(r)),Z.on("flydetekst",({enhed:r,tekst:a,klasse:o})=>this.tal(r,a,o,.4))}skærm(e,t,n){return Vr.set(e,t,n).project(this.kamera),{x:(Vr.x*.5+.5)*this.rod.clientWidth,y:(-Vr.y*.5+.5)*this.rod.clientHeight,synlig:Vr.z<1}}tal(e,t,n,i=0){const r=this.skærm(e.x,(e.højde??1.4)+.6+i,e.z),a=document.createElement("div");a.className=`tal ${n}`,a.textContent=t,a.style.left=`${r.x+(Math.random()-.5)*24}px`,a.style.top=`${r.y}px`,this.rod.appendChild(a),setTimeout(()=>a.remove(),1100)}toast(e){this.toastEl.textContent=e,this.toastEl.classList.remove("vis"),this.toastEl.offsetWidth,this.toastEl.classList.add("vis")}opdater(){var t,n;const e=[this.verden.helt,...this.verden.creeps,...this.ekstra()];for(const i of e){let r=this.bjælker.get(i);if(!(!i.død&&!i.fjernet&&i.rod.visible&&(i===this.verden.helt||i.tilstand!=="vågner"))){r&&(r.remove(),this.bjælker.delete(i));continue}r||(r=document.createElement("div"),r.className=`bjælke ${i===this.verden.helt?"helt":i.side==="egen"?"egen":"fjende"}`,r.innerHTML="<i></i>",this.rod.appendChild(r),this.bjælker.set(i,r));const o=this.skærm(i.x,i.højde+.35,i.z);r.style.transform=`translate(${o.x}px, ${o.y}px) translate(-50%, -50%)`,r.style.display=o.synlig?"":"none",r.firstChild.style.width=`${i.hp/i.maxHp*100}%`,i.vet&&r.dataset.vet!==`${i.vet.veteran}${(t=i.vet.gren)==null?void 0:t.id}`&&(r.dataset.vet=`${i.vet.veteran}${(n=i.vet.gren)==null?void 0:n.id}`,r.classList.toggle("vet",i.vet.veteran),i.vet.gren&&r.style.setProperty("--gren",`#${i.vet.gren.farve.toString(16).padStart(6,"0")}`))}for(const[i,r]of this.bjælker)e.includes(i)||(r.remove(),this.bjælker.delete(i))}}const eu="tww-gem-1",tu=1,Yt=s=>Math.round(s*10)/10;function cx(){try{const s=JSON.parse(localStorage.getItem(eu));return s&&s.version===tu&&s.seed===_s.seed?s:null}catch{return null}}function nu(s){try{return localStorage.setItem(eu,JSON.stringify(hx(s))),!0}catch(e){return console.warn("Kunne ikke gemme",e),!1}}function hx(s){const{helt:e,økonomi:t,base:n,verden:i,lejre:r,genstande:a,taage:o,rig:l,stil:c}=s,d=e.inventar;return{version:tu,seed:_s.seed,tidspunkt:Date.now(),spilTid:Math.round(e.tid),økonomi:{guld:t.guld,træ:t.træ,sten:t.sten,forsyning:t.forsyning,forsyningMaks:t.forsyningMaks},helt:{essens:e.evner.essens,x:Yt(e.x),z:Yt(e.z),hp:Math.ceil(e.død?e.maxHp:e.hp),mana:Math.floor(e.mana),level:e.level,xp:e.xp,spawn:e.spawn,pladser:d.pladser,permanent:d.permanent},bygninger:n.bygninger.map(h=>({type:h.type,felter:h.felter.map(u=>ol(u.q,u.r)),x:Yt(h.x),z:Yt(h.z),rot:h.rot,fremskridt:h.fremskridt,færdig:h.færdig,kø:h.kø,samling:h.samling??null})),arbejdere:n.arbejdere.filter(h=>!h.død).map(h=>{var u,f;return{x:Yt(h.x),z:Yt(h.z),opgave:((u=h.kilde)==null?void 0:u.type)??((f=h.bærer)==null?void 0:f.type)??null,byg:h.bygning?n.bygninger.indexOf(h.bygning):-1}}),soldater:n.soldater.filter(h=>!h.død).map(h=>{var u;return{type:h.type,x:Yt(h.x),z:Yt(h.z),hp:Math.ceil(h.hp),xp:h.vet.xp,veteran:h.vet.veteran,gren:((u=h.vet.gren)==null?void 0:u.id)??null}}),ressourcer:n.kilder.ressourcer.filter(h=>h[h.type]<h.start).map(h=>[h.id,h[h.type]]),miner:n.kilder.miner.map(h=>h.guld),lejre:r.map(h=>h.creeps.map(u=>u.død?-1:Math.ceil(u.hp))),items:a.liste.map(h=>({id:h.id,x:Yt(h.x),z:Yt(h.z),ladninger:h.ladninger??null})),kister:a.kister.map(h=>h.åben?1:0),udforsket:dx(o.udforsket),stil:c.score,kamera:{x:Yt(l.fokus.x),z:Yt(l.fokus.z),afstand:l.afstand}}}function dx(s){const e=[];let t=0,n=0;for(const i of s)i===t?n++:(e.push(n),t=i,n=1);return e.push(n),e.join(",")}function ux(s,e){let t=0,n=0;for(const i of s.split(",").map(Number))e.fill(n,t,t+i),t+=i,n=1-n}function fx(s,e){const t=()=>{s.helt&&nu(s)};return setInterval(t,6e4),document.addEventListener("visibilitychange",()=>{document.hidden&&t()}),window.addEventListener("pagehide",t),t}function px(s){const e=Math.floor(s.spilTid/60),t=Math.round((Date.now()-s.tidspunkt)/6e4),n=t<1?"lige gemt":t<60?`gemt for ${t} min. siden`:t<1440?`gemt for ${Math.round(t/60)} timer siden`:`gemt for ${Math.round(t/1440)} dage siden`;return`Level ${s.helt.level} · ${s.soldater.length} ${s.soldater.length===1?"soldat":"soldater"} · ${e} min. spillet · ${n}`}const it=s=>document.getElementById(s);class mx{constructor(e){this.spil=e,this.knapper=[0,1,2].map(t=>it(`evne${t}`)),this.knapper.forEach((t,n)=>t.addEventListener("pointerdown",i=>{i.preventDefault(),e.brugEvne(n)})),it("centrer").addEventListener("click",()=>e.rig.centrér()),it("menuknap").addEventListener("click",()=>it("menu").classList.toggle("åben")),it("test-level").addEventListener("click",()=>{e.helt.fåXp(Math.max(1,e.nødvendigXp()))}),it("genstart").addEventListener("click",()=>location.reload()),it("gem").addEventListener("click",()=>{Z.emit("besked",nu(e)?"Spillet er gemt":"Spillet kunne ikke gemmes"),it("menu").classList.remove("åben")}),window.addEventListener("keydown",t=>{const n=["q","w","e"].indexOf(t.key.toLowerCase());n>=0&&e.brugEvne(n),t.key===" "&&e.rig.centrér()}),Z.on("helt_død",()=>it("dødsskærm").classList.add("vis")),Z.on("helt_genoplivet",()=>it("dødsskærm").classList.remove("vis")),Z.on("level_op",({level:t})=>this.banner(`Level ${t}`,t===3||t===6?"Ny evne låst op!":"Din helt bliver stærkere"))}banner(e,t){const n=it("banner");n.innerHTML=`<b>${e}</b><span>${t}</span>`,n.classList.remove("vis"),n.offsetWidth,n.classList.add("vis")}opdater(){const e=this.spil.helt;it("level").textContent=e.level,it("hp").style.width=`${e.hp/e.maxHp*100}%`,it("hp-tal").textContent=`${Math.ceil(e.hp)} / ${Math.round(e.maxHp)}`,it("mana").style.width=`${e.mana/e.manaMax*100}%`,it("mana-tal").textContent=`${Math.floor(e.mana)} / ${e.manaMax}`,it("xp").style.width=`${e.xpProcent()*100}%`,it("centrer").classList.toggle("skjult",this.spil.rig.følger),e.død&&(it("genopliv-tid").textContent=Math.ceil(e.genopliv)),this.knapper.forEach((t,n)=>{const i=e.evner.info(n);t.querySelector(".ikon").textContent=i.ikon,t.querySelector(".navn").textContent=i.navn,t.classList.toggle("låst",!i.oplåst),t.classList.toggle("tom",i.oplåst&&e.mana<i.mana),t.querySelector(".lås").textContent=i.oplåst?"":`Lvl ${i.oplåsLevel}`;const r=i.cd>0?i.cd/i.cdMax:0;t.style.setProperty("--cd",`${r*360}deg`),t.querySelector(".cd").textContent=i.cd>0?Math.ceil(i.cd):""})}}function gx(s){return new Promise(e=>{s&&(it("fortsaet").hidden=!1,it("fortsaet-tekst").textContent=px(s),it("fortsaet").onclick=()=>{it("essensvalg").classList.remove("vis"),e("fortsæt")});const t=it("essenser");t.innerHTML="";for(const[n,i]of Object.entries(H0)){const r=document.createElement("button");r.className=`essens ${n}`,r.innerHTML=`<b>${i.navn}</b><span>${i.tekst}</span>`,r.addEventListener("click",()=>{it("essensvalg").classList.remove("vis"),e(n)}),t.appendChild(r)}it("essensvalg").classList.add("vis")})}const Pn=2,bx=110,_x=255;class vx{constructor(e){this.minX=e.minX,this.minZ=e.minZ,this.b=Math.ceil((e.maxX-e.minX)/Pn),this.h=Math.ceil((e.maxZ-e.minZ)/Pn),this.udforsket=new Uint8Array(this.b*this.h),this.synlig=new Uint8Array(this.b*this.h),this.data=new Uint8Array(this.b*this.h),this.tekstur=new Rl(this.data,this.b,this.h,ca),this.tekstur.magFilter=this.tekstur.minFilter=Ot,this.tekstur.needsUpdate=!0,this.uniforms={uTaage:{value:this.tekstur},uTaageMin:{value:new Te(this.minX,this.minZ)},uTaageStr:{value:new Te(this.b*Pn,this.h*Pn)}},this.kilder=[],this.patchet=new WeakSet,this.tid=0}tilføjKilde(e,t,n){this.kilder.push({x:e,z:t,radius:n})}erSynlig(e,t){return this.synlig[this.celle(e,t)]===1}erUdforsket(e,t){return this.udforsket[this.celle(e,t)]===1}celle(e,t){const n=Math.min(this.b-1,Math.max(0,Math.floor((e-this.minX)/Pn)));return Math.min(this.h-1,Math.max(0,Math.floor((t-this.minZ)/Pn)))*this.b+n}opdater(e,t){if(this.tid+=e,!(this.tid<.16)){this.tid=0,this.synlig.fill(0);for(const n of[...this.kilder,...t])this.cirkel(n.x,n.z,n.radius);for(let n=0;n<this.data.length;n++)this.data[n]=this.synlig[n]?_x:this.udforsket[n]?bx:0;this.tekstur.needsUpdate=!0}}cirkel(e,t,n){const i=n/Pn,r=(e-this.minX)/Pn,a=(t-this.minZ)/Pn;for(let o=Math.max(0,Math.floor(a-i));o<=Math.min(this.h-1,Math.ceil(a+i));o++)for(let l=Math.max(0,Math.floor(r-i));l<=Math.min(this.b-1,Math.ceil(r+i));l++){if((l+.5-r)**2+(o+.5-a)**2>i*i)continue;const c=o*this.b+l;this.synlig[c]=1,this.udforsket[c]=1}}patchScene(e){e.traverse(t=>{if(t.material)for(const n of Array.isArray(t.material)?t.material:[t.material])this.patch(n)})}patch(e){if(this.patchet.has(e)||!e.isMeshStandardMaterial)return;this.patchet.add(e);const t=this.uniforms;e.onBeforeCompile=n=>{Object.assign(n.uniforms,t),n.vertexShader=`varying vec2 vTaageXZ;
`+n.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
        vec4 taagePos = vec4( transformed, 1.0 );
        #ifdef USE_INSTANCING
          taagePos = instanceMatrix * taagePos;
        #endif
        vTaageXZ = ( modelMatrix * taagePos ).xz;`),n.fragmentShader=`varying vec2 vTaageXZ;
uniform sampler2D uTaage;
uniform vec2 uTaageMin;
uniform vec2 uTaageStr;
`+n.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
        float taage = texture2D( uTaage, ( vTaageXZ - uTaageMin ) / uTaageStr ).r;
        gl_FragColor.rgb *= taage;`)},e.customProgramCacheKey=()=>"taage",e.needsUpdate=!0}}class xx{constructor(e,t){this.c=e,this.ctx=e.getContext("2d"),this.spil=t;const n=t.grænser;this.g=n,this.skala=160/(n.maxX-n.minX),e.width=Math.round((n.maxX-n.minX)*this.skala),e.height=Math.round((n.maxZ-n.minZ)*this.skala),this.terræn=this.tegnTerræn(t.verden.kort),this.tåge=document.createElement("canvas"),this.tid=0,e.addEventListener("pointerdown",i=>{i.stopPropagation();const r=e.getBoundingClientRect(),a=n.minX+(i.clientX-r.left)/r.width*(n.maxX-n.minX),o=n.minZ+(i.clientY-r.top)/r.height*(n.maxZ-n.minZ);t.rig.følger=!1,t.rig.fokus.set(a,0,o)})}px(e,t){return[(e-this.g.minX)*this.skala,(t-this.g.minZ)*this.skala]}tegnTerræn(e){const t=document.createElement("canvas");t.width=this.c.width,t.height=this.c.height;const n=t.getContext("2d");n.fillStyle="#2f6f99",n.fillRect(0,0,t.width,t.height);const i=ma/2*this.skala*1.18;for(const r of e.felter.values()){const a=ot(r.q,r.r),[o,l]=this.px(a.x,a.z);if(r.type==="vand")continue;const[c,d,h]=Bl[r.region].farve;let u=`rgb(${Math.round(150*c)},${Math.round(170*d)},${Math.round(80*h)})`;r.type==="kyst"&&(u="#cdb57f"),r.blok==="skov"&&(u=r.region==="gravlandet"?"#4a463c":"#2f6b2c"),r.blok==="bjerg"&&(u="#7d7a72"),r.optaget&&!r.gåbar&&!r.blok&&(u="#d9c27a"),n.fillStyle=u,n.beginPath(),n.arc(o,l,i,0,Math.PI*2),n.fill()}return t}opdater(e){if(this.tid+=e,this.tid<.25)return;this.tid=0;const{ctx:t,spil:n}=this,i=n.taage;t.drawImage(this.terræn,0,0),this.tåge.width!==i.b&&(this.tåge.width=i.b,this.tåge.height=i.h,this.tågeData=this.tåge.getContext("2d").createImageData(i.b,i.h));const r=this.tågeData.data;for(let f=0;f<i.data.length;f++)r[f*4+3]=i.synlig[f]?0:i.udforsket[f]?120:255;this.tåge.getContext("2d").putImageData(this.tågeData,0,0),t.imageSmoothingEnabled=!0,t.drawImage(this.tåge,0,0,i.b*2*this.skala,i.h*2*this.skala);for(const f of n.lejre){if(!f.creeps.some(m=>!m.død)||!i.erUdforsket(f.x,f.z))continue;const[g,b]=this.px(f.x,f.z);t.fillStyle=Wd[f.data.niveau].farve,t.beginPath(),t.arc(g,b,f.data.niveau===5?4:2.6,0,Math.PI*2),t.fill()}const a=n.helt,[o,l]=this.px(a.x,a.z);t.fillStyle="#7dff6a",t.strokeStyle="#000",t.beginPath(),t.arc(o,l,3.2,0,Math.PI*2),t.fill(),t.stroke();const c=n.rig.fokus,d=n.rig.afstand,[h,u]=this.px(c.x-d*.55,c.z-d*.7);t.strokeStyle="rgba(255,255,255,0.8)",t.strokeRect(h,u,d*1.1*this.skala,d*1*this.skala)}}const yx=9,Mx=9;class Sx{constructor(e,t,n){this.steder=e.map(i=>({...i,aktiv:!1,puls:0})),this.taage=t,this.effekter=n}opdater(e,t){if(!t.død)for(const n of this.steder){const i=Math.hypot(t.x-n.x,t.z-n.z);n.type==="kilde"&&i<yx?(t.hp=Math.min(t.maxHp,t.hp+t.maxHp*.04*e),t.mana=Math.min(t.manaMax,t.mana+t.manaMax*.03*e),n.puls-=e,n.puls<=0&&(n.puls=1.2,this.effekter.bølge(t.x,t.z,1.8,7208842,.8)),n.aktiv||(n.aktiv=!0,Z.emit("besked","Livskilden heler dig"))):n.type==="kilde"&&(n.aktiv=!1),n.type==="udkig"&&!n.aktiv&&i<Mx&&(n.aktiv=!0,this.taage.tilføjKilde(n.x,n.z,46),this.effekter.bølge(n.x,n.z,10,16769162,1.2),Z.emit("besked","Udkigstårnet viser dig omegnen"))}}}const Ex=new $s(.18,.5,6,12,1,!0).translate(0,3,0);function iu(s,e=1.5){const t=Mt[s],n=sn(t.model,{skygge:!0}),r=new Wt().setFromObject(n).getSize(new P);return n.scale.setScalar(e/Math.max(r.x,r.y,r.z)),t.farve&&n.traverse(a=>{a.isMesh&&(a.material=a.material.clone(),a.material.color.setRGB(...t.farve))}),n}class Tx{constructor(e,t,n,i,r){this.id=t,this.ladninger=r,this.x=n,this.z=i,this.rod=new tn,this.rod.position.set(n,0,i),this.model=iu(t),this.rod.add(this.model);const a=Vs[Mt[t].sjældenhed].hex;this.stråle=new ct(Ex,new Bt({color:a,transparent:!0,opacity:.2,blending:Si,depthWrite:!1,side:Jt})),this.rod.add(this.stråle),this.fase=Math.random()*6,e.add(this.rod),this.scene=e}opdater(e){this.fase+=e,this.model.rotation.y+=e*1.2,this.model.position.y=.6+Math.sin(this.fase*2.2)*.18,this.stråle.material.opacity=.17+Math.sin(this.fase*3)*.05}fjern(){this.scene.remove(this.rod)}}class Ax{constructor(e,t){Object.assign(this,t),this.åben=!1,this.rod=sn(t.guld?"kaykit-dungeon/chest_gold":"kaykit-dungeon/chest",{skygge:!0}),this.rod.scale.setScalar(1.35),this.rod.position.set(t.x,0,t.z),this.rod.rotation.y=t.rot??0,e.add(this.rod)}}class wx{constructor(e,t,n,i){this.verden=e,this.liste=[],this.kister=t.map(r=>new Ax(e.scene,r)),this.lejre=n,this.tilf=i,this.tid=0,Z.on("creep_død",({creep:r})=>{this.verden.helt.inventar.tilføjGuld(Math.round(4+r.level*2.2+Math.random()*4)*(r.boss?5:1),r);const o=r.lejr;if(!o.creeps.some(l=>!l.død))if(o.data.niveau===5){const[l,c]=Y0[o.data.familie];this.læg(l,r.x,r.z),this.læg(this.tilf()<.5?c:ro(so[4]),r.x+1.5,r.z+1),Z.emit("besked","Bossen er besejret! Kisten er låst op")}else this.læg(ro(so[o.data.niveau]),r.x,r.z)}),Z.on("item_smidt",({id:r,ladninger:a,x:o,z:l})=>this.læg(r,o+1.2,l+.8,a))}læg(e,t,n,i){const r=new Tx(this.verden.scene,e,t,n,i);return this.liste.push(r),r}samOp(e){const t=this.verden.helt.inventar;if(this.liste.includes(e)){if(!t.modtag(e.id,e.ladninger)){Z.emit("besked","Inventaret er fuldt");return}e.fjern(),this.liste.splice(this.liste.indexOf(e),1),Z.emit("effekt",{type:"samlet",x:e.x,z:e.z,farve:Vs[Mt[e.id].sjældenhed].hex})}}åbn(e){if(e.åben)return;const t=e.lejrId&&this.lejre.find(i=>i.data.id===e.lejrId);if(t&&t.creeps.some(i=>!i.død)){Z.emit("besked","Kisten er låst, så længe vogterne lever");return}e.åben=!0,this.verden.helt.inventar.tilføjGuld(e.guld?150:45+Math.round(this.tilf()*30),e);const n=ro(so[e.niveau??2]);this.læg(n,e.x+1.6,e.z+1.2),Z.emit("effekt",{type:"kiste",x:e.x,z:e.z}),e.rod.traverse(i=>{i.isMesh&&(i.material=i.material.clone(),i.material.color.multiplyScalar(.45))})}find(e,t,n,i=46){let r=null,a=i;for(const o of this.liste){if(!o.rod.visible)continue;const l=n(o.x,.8,o.z),c=Math.hypot(l.x-e,l.y-t);c<a&&(a=c,r={type:"item",ting:o})}for(const o of this.kister){if(o.åben||!o.rod.visible)continue;const l=n(o.x,.8,o.z),c=Math.hypot(l.x-e,l.y-t);c<a+10&&(a=c,r={type:"kiste",ting:o})}return r}opdater(e){this.tid+=e;const t=this.verden.taage;for(const i of this.liste)i.rod.visible=t.erSynlig(i.x,i.z),i.rod.visible&&i.opdater(e);for(const i of this.kister)i.rod.visible=t.erUdforsket(i.x,i.z);const n=this.verden.helt;if(!n.død)for(const i of[...this.liste])Mt[i.id].type==="opsamling"&&Math.hypot(i.x-n.x,i.z-n.z)<1.6&&this.samOp(i)}}const Ut=96,su={};function vt(s){return su[s]}function Rx(s,e=[]){const t=new Td;t.add(new Fd(16777215,4478310,2.2));const n=new Ul(16777215,2.4);n.position.set(2,4,3),t.add(n);const i=new Rt(30,1,.1,50),r=new ai(Ut,Ut),a=new Uint8Array(Ut*Ut*4),o=document.createElement("canvas");o.width=o.height=Ut;const l=o.getContext("2d"),c=l.createImageData(Ut,Ut),d=new Uint8Array(256);for(let g=0;g<256;g++){const b=g/255;d[g]=Math.round(255*(b<=.0031308?b*12.92:1.055*b**(1/2.4)-.055))}const h=new ge;s.getClearColor(h);const u=s.getClearAlpha();s.setClearColor(0,0);const f=[...Object.keys(Mt).map(g=>({id:g,lav:()=>iu(g,1.6),rot:[.25,-.7,["permanent","artefakt"].includes(Mt[g].type)?-.5:0]})),...e.map(g=>({id:g.id,lav:()=>Hd(g.sti,1.75),rot:g.vinkel??[.45,-.6,0]}))];for(const{id:g,lav:b,rot:m}of f){const p=b();p.rotation.set(...m);const S=new Wt().setFromObject(p).getCenter(new P);p.position.sub(S),t.add(p),i.position.set(0,.5,3.6),i.lookAt(0,0,0),s.setRenderTarget(r),s.clear(),s.render(t,i),s.readRenderTargetPixels(r,0,0,Ut,Ut,a);for(let _=0;_<Ut;_++)for(let C=0;C<Ut;C++){const w=((Ut-1-_)*Ut+C)*4,M=(_*Ut+C)*4;c.data[M]=d[a[w]],c.data[M+1]=d[a[w+1]],c.data[M+2]=d[a[w+2]],c.data[M+3]=a[w+3]}l.putImageData(c,0,0),su[g]=o.toDataURL(),t.remove(p)}s.setRenderTarget(null),s.setClearColor(h,u),r.dispose()}const At=s=>document.getElementById(s);class kx{constructor(e){this.spil=e,this.inv=e.helt.inventar,this.pladser=[...document.querySelectorAll("#inventar .plads")],this.pladser.forEach((t,n)=>this.bindPlads(t,n)),At("info-luk").addEventListener("click",()=>this.lukInfo()),At("info-smid").addEventListener("click",()=>{this.infoPlads!=null&&this.inv.smid(this.infoPlads),this.lukInfo()}),At("info-brug").addEventListener("click",()=>{const t=this.infoPlads;this.lukInfo(),this.brug(t)}),At("butik-luk").addEventListener("click",()=>this.lukButik()),Z.on("inventar_ændret",()=>this.tegn()),Z.on("item_samlet",()=>this.tegn()),this.tegn()}bindPlads(e,t){e.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation()}),e.addEventListener("pointerup",n=>{n.stopPropagation(),this.inv.pladser[t]&&(this.infoPlads===t?this.lukInfo():this.visInfo(t))}),e.addEventListener("contextmenu",n=>n.preventDefault())}brug(e){const t=this.inv.brug(e);t&&t!=="info"&&Z.emit("besked",t),this.tegn()}tegn(){this.pladser.forEach((e,t)=>{const n=this.inv.pladser[t];e.classList.toggle("tom",!n),e.style.setProperty("--sjælden",n?Vs[Mt[n.id].sjældenhed].farve:"transparent"),e.querySelector("img").src=n?vt(n.id):"",e.querySelector("img").alt=n?Mt[n.id].navn:"",e.querySelector(".ladning").textContent=(n==null?void 0:n.ladninger)??""})}visInfo(e){const t=this.inv.pladser[e];if(!t)return;const n=Mt[t.id],i=Vs[n.sjældenhed];this.infoPlads=e,At("info-ikon").src=vt(t.id),At("info-navn").textContent=n.navn,At("info-navn").style.color=i.farve,At("info-type").textContent=`${i.navn} · ${W0[n.type]}`,At("info-tekst").innerHTML=Lh(t.id).map(r=>`<li>${r}</li>`).join(""),At("info-brug").hidden=!n.brug,At("info").classList.add("vis")}lukInfo(){this.infoPlads=null,At("info").classList.remove("vis")}åbnButik(e){this.butikSted=e;const t=At("butik-varer");t.innerHTML="";for(const n of Ih){const i=Mt[n],r=document.createElement("div");r.className="vare",r.innerHTML=`<img alt="" src="${vt(n)}"><div><b style="color:${Vs[i.sjældenhed].farve}">${i.navn}</b><span>${Lh(n)[0]}</span></div><button type="button"><i class="mønt"></i>${i.pris}</button>`,r.querySelector("button").addEventListener("click",()=>this.køb(n)),t.appendChild(r)}this.opdaterButik(),At("butik").classList.add("vis")}køb(e){const t=Mt[e];if(this.inv.guld<t.pris)return Z.emit("besked","Du har ikke guld nok");if(this.inv.fuld&&t.type!=="opsamling")return Z.emit("besked","Inventaret er fuldt");this.inv.guld-=t.pris,this.inv.modtag(e),Z.emit("effekt",{type:"samlet",x:this.spil.helt.x,z:this.spil.helt.z,farve:16765803}),this.opdaterButik()}opdaterButik(){[...document.querySelectorAll("#butik-varer .vare")].forEach((e,t)=>{const n=Mt[Ih[t]];e.querySelector("button").disabled=this.inv.guld<n.pris||this.inv.fuld}),At("butik-guld").textContent=this.inv.guld}lukButik(){this.butikSted=null,At("butik").classList.remove("vis")}opdater(){const e=this.spil.helt;this.butikSted&&(e.død||Math.hypot(e.x-this.butikSted.x,e.z-this.butikSted.z)>14?this.lukButik():this.opdaterButik());const t=this.inv.cooldown>0;this.pladser.forEach(n=>n.classList.toggle("vent",t))}}const Cx={guld:300,træ:150,sten:80},Nh={mine:8e3},Px={guld:10,træ:10,sten:8},Lx={guld:1.6,træ:4.5,sten:5.5},Ix=100;class Dx{constructor(){Object.assign(this,Cx),this.forsyning=0,this.forsyningMaks=0}harRåd(e={}){return(e.guld??0)<=this.guld&&(e.træ??0)<=this.træ&&(e.sten??0)<=this.sten}mangler(e={},t=0){const n=[];return(e.guld??0)>this.guld&&n.push(`${e.guld-this.guld} guld`),(e.træ??0)>this.træ&&n.push(`${e.træ-this.træ} træ`),(e.sten??0)>this.sten&&n.push(`${e.sten-this.sten} sten`),n.length?`Mangler ${n.join(", ")}`:t&&this.forsyning+t>Math.min(this.forsyningMaks,Ix)?"Byg en forsyningshytte for at få mere forsyning":null}betal(e={}){this.guld-=e.guld??0,this.træ-=e.træ??0,this.sten-=e.sten??0,Z.emit("økonomi",this)}refunder(e={},t=1){this.guld+=Math.floor((e.guld??0)*t),this.træ+=Math.floor((e.træ??0)*t),this.sten+=Math.floor((e.sten??0)*t),Z.emit("økonomi",this)}aflever(e,t){this[e]+=t,Z.emit("økonomi",this)}}class Ux{constructor(e,t){this.ressourcer=t,this.miner=e.filter(n=>n.type==="mine").map(n=>({...n,guld:n.start?Nh.mine*1.5:Nh.mine}))}som(e){const t=e.type==="mine";return{type:t?"guld":e.type,kilde:e,x:e.x,z:e.z,r:t?5:e.r}}nærmeste(e,t,n,i=60){let r=null,a=i;const o=e==="guld"?this.miner:this.ressourcer;for(const l of o){if(!(l[e]>0))continue;const c=Math.hypot(l.x-t,l.z-n)+(l.blokerer&&e==="træ"?3:0);c<a&&(a=c,r=l)}return r&&this.som(r)}høst(e,t,n){const i=Math.min(n,e.kilde[t]??0);return e.kilde[t]-=i,i>0&&e.kilde[t]<=0&&Z.emit("kilde_tom",{type:t,kilde:e.kilde}),i}}const Nx=["Knife_Offhand","1H_Crossbow","2H_Crossbow","Knife","Throwable"],Fx={guld:"kaykit-dungeon/coin_stack_small_gltf",træ:"kaykit-hexagon/decoration/props/resource_lumber",sten:"kaykit-hexagon/decoration/props/resource_stone"};class Vl extends ga{constructor(e,t,n,i){super(e,"units/arbejder",{skala:.85,skjul:Nx,våben:{r:"kaykit-adventurers/axe_1handed"},radius:.55}),Hl(this.model),this.base=t,this.maxHp=220,this.hp=220,this.fart=4.4,this.side="egen",this.tilstand="ledig",this.kilde=null,this.bærer=null,this.bygning=null,this.timer=0,this.rod.position.set(n,0,i),this.byrder={};for(const[r,a]of Object.entries(Fx)){const o=Hd(a,.75);o.position.set(0,1.35,-.42),o.visible=!1,this.rod.add(o),this.byrder[r]=o}this.spil("Idle")}kommandoGå(e,t){return this.nulstil(),this.tilstand=this.gåTil(e,t)?"gå":"ledig",this.tilstand==="gå"}kommandoHøst(e){this.nulstil(),this.kilde=e,this.bærer&&this.bærer.type!==e.type&&this.sætByrde(null),this.gåTilKilde()}høstNærmeste(e){const t=this.base.kilder.nærmeste(e,this.x,this.z,200);t?this.kommandoHøst(t):(this.tilstand="ledig",Z.emit("besked",`Der er ikke mere ${e} i nærheden`))}kommandoByg(e){this.nulstil(),this.bygning=e,this.tilstand="tilByg",this.gåTilKant(e.x,e.z,e.radius+1)}nulstil(){this.kilde=null,this.bygning=null,this.rod.visible=!0,this.stop()}sætByrde(e){this.bærer=e;for(const[t,n]of Object.entries(this.byrder))n.visible=(e==null?void 0:e.type)===t}gåTilKant(e,t,n){const i=this.x-e,r=this.z-t,a=Math.hypot(i,r)||1;this.gåTil(e+i/a*n,t+r/a*n)||this.gåTil(e,t)}gåTilKilde(){this.tilstand="tilKilde",this.gåTilKant(this.kilde.x,this.kilde.z,this.kilde.r+1.2)}gåHjem(){const e=this.base.afleveringssted(this.bærer.type,this.x,this.z);if(!e){this.tilstand="ledig",Z.emit("besked","Ingen bygning kan tage imod");return}this.hjem=e,this.tilstand="tilAflevering",this.gåTilKant(e.x,e.z,e.radius+1)}fremme(e,t,n,i){const r=Math.hypot(e-this.x,t-this.z);return r<=n||!this.bevæger&&r<=i}opdater(e){if(this.død)return this.opdaterDød(e);this.rod.visible=this.tilstand!=="iMine",super.opdater(e);const t=this.kilde;switch(this.tilstand){case"gå":this.opdaterBevægelse(e),this.bevæger||(this.tilstand="ledig");break;case"tilKilde":this.opdaterBevægelse(e),this.fremme(t.x,t.z,t.type==="guld"?8.5:t.r+2.6,t.type==="guld"?13:t.r+7)?this.startHøst():this.bevæger||this.høstNærmeste(t.type);break;case"høster":case"iMine":this.timer-=e,this.timer<=0&&this.færdigHøst();break;case"tilAflevering":this.opdaterBevægelse(e),this.fremme(this.hjem.x,this.hjem.z,this.hjem.radius+2,this.hjem.radius+8)?this.aflever():this.bevæger||this.gåHjem();break;case"tilByg":{const n=this.bygning;if(this.opdaterBevægelse(e),n.færdig){this.tilstand="ledig";break}this.fremme(n.x,n.z,n.radius+2.5,n.radius+8)&&(this.stop(),this.tilstand="bygger",this.vend(n.x,n.z),this.spil("1H_Melee_Attack_Chop",{fart:.9}));break}case"bygger":this.bygning.byg(e),this.bygning.færdig&&(this.tilstand="ledig",this.bygning=null,this.spil("Cheer",{loop:!1,gentag:!0}),this.timer=1.5);break}this.bevæger?this.spil("Running_A",{fart:.95}):(this.tilstand==="ledig"||this.tilstand==="gå")&&(this.timer-=e,this.timer<=0&&this.spil("Idle"))}startHøst(){const e=this.kilde;this.stop(),this.vend(e.x,e.z),this.timer=Lx[e.type],e.type==="guld"?(this.tilstand="iMine",this.rod.visible=!1):(this.tilstand="høster",this.spil("1H_Melee_Attack_Chop",{fart:e.type==="sten"?.8:1}))}færdigHøst(){const e=this.kilde,t=this.base.kilder.høst(e,e.type,Px[e.type]);if(t<=0){this.høstNærmeste(e.type);return}this.sætByrde({type:e.type,mængde:t}),this.spil("PickUp",{loop:!1,gentag:!0,fart:1.6}),this.gåHjem()}dø(e){super.dø(e),this.nulstil(),this.sætByrde(null),this.tilstand="død",this.spil("Death_A",{loop:!1,fade:.08}),this.forsvind=5,this.base.økonomi.forsyning-=1,Z.emit("besked","En bærer er død")}opdaterDød(e){super.opdater(e),this.forsvind-=e,this.forsvind<1.5&&(this.rod.position.y-=e*.8),this.forsvind<=0&&!this.fjernet&&(this.fjernet=!0,this.fjern())}aflever(){this.stop(),this.base.økonomi.aflever(this.bærer.type,this.bærer.mængde),Z.emit("flydetekst",{enhed:this,tekst:`+${this.bærer.mængde} ${this.bærer.type}`,klasse:this.bærer.type==="guld"?"guld":"ressource"});const e=this.bærer.type;this.sætByrde(null),this.kilde&&(this.kilde.kilde[e]??0)>0?this.gåTilKilde():this.høstNærmeste(e)}}const Ox=14,Fh=2.5;function Bx(s,e,t,n){const i=s.length,r=s.reduce((g,b)=>g+b.x,0)/i,a=s.reduce((g,b)=>g+b.z,0)/i;let o=e-r,l=t-a;const c=Math.hypot(o,l)||1;o/=c,l/=c;const d=-l,h=o,u=[...s].sort((g,b)=>Oh(g)-Oh(b)),f=Math.max(1,Math.ceil(Math.sqrt(i*1.6)));return u.map((g,b)=>{const m=Math.floor(b/f),p=b%f,y=Math.min(f,i-m*f),S=(p-(y-1)/2)*Fh,_=m*Fh,C={x:e+d*S-o*_,z:t+h*S-l*_};return{u:g,...n.erGåbar(C.x,C.z)?C:{x:e,z:t}}})}const Oh=s=>{var e;return(e=s.data)!=null&&e.projektil?2:s.side==="egen"&&!s.data?1:0};function zx(s,e,t,n){let i=!1;for(const{u:r,x:a,z:o}of Bx(s,e,t,n))i=r.kommandoGå(a,o)||r.kommandoGå(e,t)||i;return i}function Hx(s,e){let t=!1;for(const n of s)n.kommandoAngrib&&(n.kommandoAngrib(e),t=!0);return t}const ul=s=>!(s instanceof Vl);function Gx(s,e){const t=document.createElement("div");return t.id="boks",document.body.appendChild(t),(n,i,r,a,o)=>{const l=Math.min(n,r),c=Math.min(i,a),d=Math.abs(r-n),h=Math.abs(a-i);if(Object.assign(t.style,{left:`${l}px`,top:`${c}px`,width:`${d}px`,height:`${h}px`,display:o?"none":"block"}),!o)return;const u=s.lærred.getBoundingClientRect(),f=m=>{if(m.død||!m.rod.visible)return!1;const p=e(m.x,1,m.z),y=p.x+u.left,S=p.y+u.top;return y>=l-14&&y<=l+d+14&&S>=c-14&&S<=c+h+14},g=[s.helt,...s.base.soldater].filter(f),b=g.length?g:s.base.arbejdere.filter(f);b.length&&s.valg.vælg(b)}}function Vx(s,e,t){const n=s.lærred.getBoundingClientRect();return s.base.soldater.filter(i=>{if(i.død||i.type!==e.type)return!1;const r=t(i.x,1,i.z);return r.synlig&&r.x>=0&&r.y>=0&&r.x<=n.width&&r.y<=n.height})}function jx({spil:s,lærred:e,overlay:t,effekter:n,genstande:i,steder:r}){const{helt:a,verden:o,rig:l,valg:c,base:d}=s,h=new pv,u=new Jn(new P(0,1,0),0),f=(w,M,A)=>t.skærm(w,M,A),g=()=>e.getBoundingClientRect();function b(w,M){const A=g();h.setFromCamera(new Te(w/A.width*2-1,-(M/A.height)*2+1),l.kamera);const x=new P;return h.ray.intersectPlane(u,x)?x:null}function m(w,M,A){for(const R of d.kilder.miner){const L=f(R.x,3,R.z);if(R.guld>0&&Math.hypot(L.x-w,L.y-M)<70)return d.kilder.som(R)}if(!A)return null;let x=null,v=56;for(const R of d.kilder.ressourcer){if(!(R[R.type]>0)||Math.abs(R.x-A.x)>16||Math.abs(R.z-A.z)>16)continue;const L=f(R.x,R.y+R.h*.4,R.z),F=Math.hypot(L.x-w,L.y-M);F<v&&o.taage.erUdforsket(R.x,R.z)&&(v=F,x=R)}return x&&d.kilder.som(x)}function p(w,M,A){const x=b(M,A),v=m(M,A,x);if(v){w.kommandoHøst(v),n.markør(v.x,v.z,16765803);return}x&&w.kommandoGå(x.x,x.z)?n.markør(x.x,x.z):Z.emit("besked","Der kan bæreren ikke gå hen")}function y(w,M){let A=null,x=52;for(const v of o.creeps){if(v.død||!v.rod.visible)continue;const R=f(v.x,v.højde*.5,v.z),L=Math.hypot(R.x-w,R.y-M);L<x&&(x=L,A=v)}return[A,x]}function S(w,M,A){const x=w.filter(ul),[v]=y(M,A);if(v&&x.length)return Hx(x,v),n.markør(v.x,v.z,16734794);const R=b(M,A);if(x.length<w.length){const L=m(M,A,R);if(L){for(const F of w)ul(F)||F.kommandoHøst(L);return n.markør(L.x,L.z,16765803)}}R&&zx(w,R.x,R.z,o.kort)?n.markør(R.x,R.z):Z.emit("besked","Der kan de ikke gå hen")}function _(w,M){if(a.død)return;const[A,x]=y(w,M),v=i.find(w,M,f,Math.min(x,46));if((v==null?void 0:v.type)==="item"){const L=v.ting;return a.kommandoInteraktion(L.x,L.z,1.8,()=>i.samOp(L)),n.markør(L.x,L.z,16769162)}if((v==null?void 0:v.type)==="kiste"){const L=v.ting;return a.kommandoInteraktion(L.x,L.z,3,()=>i.åbn(L)),n.markør(L.x,L.z,16769162)}if(A)return a.kommandoAngrib(A),n.markør(A.x,A.z,16734794);for(const L of r){if(L.type!=="marked"&&L.type!=="kro"||!o.taage.erUdforsket(L.x,L.z))continue;const F=f(L.x,3,L.z);if(!(Math.hypot(F.x-w,F.y-M)>70))return L.type==="kro"?Z.emit("besked","I kroen kan du snart hyre flere helte"):s.handlVed(L)}const R=b(w,M);R&&a.kommandoGå(R.x,R.z)?n.markør(R.x,R.z):t.toast("Der kan helten ikke gå hen")}const C={s:null,t:0};return(w,M)=>{var L,F;const A=g(),x=w-A.left,v=M-A.top;if(c.placering){const O=b(x,v);c.vælgFelt(O&&o.kort.felt(O.x,O.z));return}if(!a.død&&!c.erHelt){const O=f(a.x,1.2,a.z);if(Math.hypot(O.x-x,O.y-v)<40)return c.vælg(null)}const R=d.find(x,v,f);if((R==null?void 0:R.type)==="soldat"){const O=R.ting,G=performance.now();c.vælg(C.s===O&&G-C.t<420?Vx(s,O,f):[O]),C.s=O,C.t=G;return}if(R&&c.erArbejder&&R.type==="bygning"){const O=c.valgt,G=R.ting;if(!G.færdig)return O.kommandoByg(G),n.markør(G.x,G.z,8257386);if(O.bærer&&((L=G.data.aflevering)!=null&&L.includes(O.bærer.type)))return O.gåHjem()}if(R&&R.ting!==c.valgt)return c.vælg(R.ting);if(!R){if(c.erGruppe)return S(c.gruppe,x,v);if(c.erArbejder)return p(c.valgt,x,v);if(c.erBygning){const O=c.valgt,G=b(x,v);return O.færdig&&((F=O.data.træner)!=null&&F.some(W=>W!=="arbejder"))&&G&&o.kort.erGåbar(G.x,G.z)?(O.samling={x:G.x,z:G.z},Z.emit("besked","Nye soldater samles her"),n.markør(G.x,G.z)):c.vælg(null)}_(x,v)}}}const _i="kaykit-hexagon/buildings/green/",_n={storlejr:{navn:"Storlejr",model:_i+"building_castle_green",skala:1.45,felter:3,pris:{guld:400,træ:200,sten:150},tid:90,forsyning:12,aflevering:["guld","træ","sten"],syn:34,tekst:"Hovedbygningen. Træner arbejdere og modtager alle ressourcer.",træner:["arbejder"],kanBygges:!1},hytte:{navn:"Forsyningshytte",kort:"Hytte",model:_i+"building_home_a_green",skala:2.15,pris:{guld:80,træ:50},tid:25,forsyning:10,syn:16,tekst:"+10 forsyning, så du kan have flere arbejdere og soldater."},savværk:{navn:"Savværk",model:_i+"building_lumbermill_green",skala:1.3,pris:{guld:120,træ:60},tid:35,aflevering:["træ","sten"],syn:18,tekst:"Arbejdere kan aflevere træ og sten her. Byg det ved skoven."},tårn:{navn:"Vagttårn",model:_i+"building_tower_a_green",skala:1.2,pris:{guld:100,træ:40,sten:60},tid:40,syn:30,angreb:{rækkevidde:18,skade:[22,30],tid:1.4},tekst:"Skyder fjender inden for rækkevidde."},marked:{navn:"Markedsplads",kort:"Marked",model:_i+"building_market_green",skala:1.15,pris:{guld:150,træ:80,sten:40},tid:45,syn:18,butik:!0,tekst:"Din egen butik med eliksirer og udstyr."},alter:{navn:"Ånde-alter",kort:"Alter",model:_i+"building_church_green",skala:1.5,pris:{guld:160,træ:60,sten:80},tid:50,syn:18,alter:!0,tekst:"Helten genopstår ved alteret og heles, når den står tæt på."},krigerlejr:{navn:"Krigerlejr",model:_i+"building_barracks_green",skala:1.2,pris:{guld:160,træ:80,sten:40},tid:55,syn:18,træner:["grunt","spydkaster"],tekst:"Træner grunts og spydkastere. Veteran-grunts specialiseres her."}},Wx=["hytte","savværk","tårn","krigerlejr","marked","alter"],ii={arbejder:{navn:"Bærer",pris:{guld:50},tid:12,forsyning:1,tekst:"Samler guld, træ og sten og bygger basen."},grunt:{navn:"Grunt",pris:{guld:120,træ:20},tid:18,forsyning:2,ikon:"enhed-grunt",tekst:"Nærkamp. Hærens rygrad."},spydkaster:{navn:"Spydkaster",pris:{guld:100,træ:40},tid:18,forsyning:2,ikon:"enhed-spydkaster",tekst:"Kaster spyd på afstand."}},oa=["kaykit-hexagon/buildings/neutral/building_stage_a","kaykit-hexagon/buildings/neutral/building_stage_b","kaykit-hexagon/buildings/neutral/building_stage_c"],Xx=[...new Set(["units/hero_tide","units/arbejder",...Object.values(Jd).map(s=>s.model),Gl,"kaykit-adventurers/shield_round_barbarian","kaykit-adventurers/axe_2handed",...Object.values(cl).map(s=>`units/${s.model}`),...Object.values(cl).flatMap(s=>Object.values(s.våben??{}).map(e=>`kaykit-skeletons/${e}`)),...$0(),"kaykit-dungeon/chest","kaykit-dungeon/chest_gold",...Object.values(_n).map(s=>s.model),...oa,"kaykit-hexagon/decoration/props/resource_lumber","kaykit-hexagon/decoration/props/resource_stone","kaykit-hexagon/decoration/nature/trees_a_cut","kaykit-hexagon/decoration/nature/trees_b_cut"])],qx=[{id:"res-guld",sti:"kaykit-dungeon/coin_stack_small_gltf"},{id:"res-træ",sti:"kaykit-hexagon/decoration/props/resource_lumber"},{id:"res-sten",sti:"kaykit-hexagon/decoration/props/resource_stone"},{id:"res-forsyning",sti:"kaykit-hexagon/buildings/green/building_home_a_green"},{id:"økse",sti:"kaykit-adventurers/axe_1handed",vinkel:[.2,-.6,-.6]},{id:"enhed-grunt",sti:"kaykit-adventurers/shield_round_barbarian"},{id:"enhed-spydkaster",sti:Gl,vinkel:[.5,0,.8]},{id:"hær",sti:"kaykit-adventurers/axe_2handed",vinkel:[.2,-.6,-.6]},...Object.entries(_n).map(([s,e])=>({id:"byg-"+s,sti:e.model}))],Kx=sr.hexSkala;class fl{constructor(e,t,{x:n,z:i,felter:r,rot:a=0,færdig:o=!1}){this.base=e,this.verden=e.verden,this.type=t,this.data=_n[t],this.x=n,this.z=i,this.felter=r,this.rot=a,this.radius=r.length>1?9:5.5,this.højde=7,this.side="egen",this.fremskridt=o?1:0,this.færdig=!1,this.kø=[],this.cooldown=0,this.død=!1,this.rod=null,this.visModel(o?this.data.model:oa[0],o?this.data.skala:1),o&&this.bliverFærdig(!0)}get hp(){return this.fremskridt}get maxHp(){return 1}visModel(e,t){this.rod&&this.verden.scene.remove(this.rod),this.rod=sn(e,{skygge:!0}),this.rod.position.set(this.x,0,this.z),this.rod.rotation.y=this.rot,this.rod.scale.setScalar(Kx*t),this.verden.scene.add(this.rod),this.stadie=e}byg(e){if(this.færdig)return;this.fremskridt=Math.min(1,this.fremskridt+e/this.data.tid);const t=oa[Math.min(2,Math.floor(this.fremskridt*3))];this.fremskridt<1&&t!==this.stadie&&this.visModel(t,1),this.fremskridt>=1&&this.bliverFærdig(!1)}bliverFærdig(e){this.færdig=!0,this.visModel(this.data.model,this.data.skala);const t=this.base.økonomi;this.data.forsyning&&(t.forsyningMaks+=this.data.forsyning),this.verden.taage.tilføjKilde(this.x,this.z,this.data.syn??16),this.data.alter&&(this.verden.helt.spawn={x:this.x+4,z:this.z+6}),e||(Z.emit("effekt",{type:"kiste",x:this.x,z:this.z}),Z.emit("besked",`${this.data.navn} er færdig`)),Z.emit("bygning_færdig",{bygning:this})}træn(e){const t=ii[e],n=this.base.økonomi;if(t.låst)return t.låst;if(!this.færdig)return"Bygningen er ikke færdig";if(this.kø.length>=5)return"Køen er fuld";const i=n.mangler(t.pris,t.forsyning);return i||(n.betal(t.pris),n.forsyning+=t.forsyning,this.kø.push({type:e,tid:0}),null)}annullérTræning(e){const t=this.kø[e];if(!t)return;const n=ii[t.type];this.kø.splice(e,1),this.base.økonomi.refunder(n.pris),this.base.økonomi.forsyning-=n.forsyning}opdater(e){var r,a;if(!this.færdig)return;const t=this.kø[0];t&&(t.tid+=e,t.tid>=ii[t.type].tid&&(this.kø.shift(),(a=(r=this.base).vedTrænet)==null||a.call(r,t.type,this)));const n=this.data.angreb;if(n&&(this.cooldown-=e,this.cooldown<=0)){const o=this.verden.creeps.filter(l=>!l.død&&l.rod.visible&&Math.hypot(l.x-this.x,l.z-this.z)<n.rækkevidde).sort((l,c)=>Math.hypot(l.x-this.x,l.z-this.z)-Math.hypot(c.x-this.x,c.z-this.z))[0];o&&(this.cooldown=n.tid,Z.emit("projektil",{fra:this.skytte(),mål:o,skade:fa(...n.skade),farve:16765562}))}const i=this.verden.helt;this.data.alter&&!i.død&&Math.hypot(i.x-this.x,i.z-this.z)<12&&(i.hp=Math.min(i.maxHp,i.hp+i.maxHp*.03*e))}skytte(){const e=this;return{x:e.x,z:e.z,højde:9,afstand:t=>Math.hypot(t.x-e.x,t.z-e.z)}}}const Yx={ironhide:12,ravager:10,berserker:14},lo=(s,e)=>s.verden.creeps.filter(t=>!t.død&&t.tilstand==="jagt"&&s.afstand(t)<e),$x={opdaterEvner(s){var n;const e=this.evne,t=(n=this.vet.gren)==null?void 0:n.id;if(e.cd=Math.max(0,e.cd-s),e.storm>0&&(e.storm-=s,e.storm<=0&&(this.fart=this.basisFart)),e.raseri>0&&(e.raseri-=s),!(!t||e.cd>0)){if(t==="ironhide"){const i=lo(this,7);if(i.length<2)return;for(const r of i)r.mål=this,r.spot=2.5;this.brugEvne(16734794)}else if(t==="ravager"){if(!this.mål||this.afstand(this.mål)<4.5||this.gåOrdre)return;e.storm=3,this.basisFart=this.fart,this.fart*=2,this.stormSlag=!0,this.brugEvne(16751194)}else if(t==="berserker"){if(lo(this,4.5).length<2)return;e.raseri=4,this.gåOrdre=!1,this.hen=null,this.brugEvne(16761402)}}},brugEvne(s){this.evne.cd=Yx[this.vet.gren.id],Z.emit("effekt",{type:"evne",x:this.x,z:this.z,farve:s}),Z.emit("flydetekst",{enhed:this,tekst:this.vet.gren.evne,klasse:"level"})},slagFaktor(){return this.stormSlag?(this.stormSlag=!1,1.5):1},vedSlag(s,e){if(this.evne.raseri>0)for(const t of lo(this,this.data.rækkevidde+1.6))t!==s&&t.tagSkade(Zs(Math.round(e*.8),0),this)}};class ru extends ga{constructor(e,t,n,i,r){const a=Jd[n];super(e,a.model,{skala:a.skala,skjul:a.skjul,våben:a.våben??{},våbenSkala:a.våbenSkala??1,radius:a.radius}),Hl(this.model),Object.assign(this,{base:t,type:n,data:a,navn:a.navn,side:"egen"}),this.maxHp=this.hp=a.hp,this.fart=a.fart,this.rustning=a.rustning,this.skadeBonus=0,this.mål=null,this.sving=null,this.cooldown=0,this.gåOrdre=!1,this.angrebsOrdre=!1,this.tid=0,this.sidstIKamp=-99,this.angribere=new Map,this.vet={xp:0,veteran:!1,gren:null},this.evne={cd:0,storm:0,raseri:0},this.rod.position.set(i,0,r),this.spil("Cheer",{loop:!1}),this.timer=1.2}get iKamp(){return this.tid-this.sidstIKamp<5}kommandoGå(e,t){return this.død||this.evne.raseri>0?!1:(this.mål=null,this.angrebsOrdre=!1,this.hen=null,this.gåOrdre=this.gåTil(e,t),Z.emit("soldat_ordre",{soldat:this,type:"gå"}),this.gåOrdre)}kommandoAngrib(e){this.død||e.død||this.evne.raseri>0||(this.mål=e,this.angrebsOrdre=!0,this.gåOrdre=!1,this.hen=null,Z.emit("soldat_ordre",{soldat:this,type:"angrib",mål:e}))}kommandoHen(e,t,n,i){return!this.kommandoGå(e,t)&&Math.hypot(e-this.x,t-this.z)>n?!1:(this.hen={x:e,z:t,radius:n,udfør:i},!0)}stopOrdre(){this.stop(),this.mål=null,this.gåOrdre=!1,this.angrebsOrdre=!1,this.hen=null}opdater(e){var t,n;if(this.tid+=e,super.opdater(e),this.død)return this.opdaterDød(e);if(this.cooldown-=e,this.opdaterEvner(e),this.iKamp||(this.hp=Math.min(this.maxHp,this.hp+this.maxHp*.004*e)),((t=this.mål)!=null&&t.død||((n=this.mål)==null?void 0:n.tilstand)==="hjem")&&(this.mål=null,this.angrebsOrdre=!1),this.hen&&Math.hypot(this.hen.x-this.x,this.hen.z-this.z)<=this.hen.radius){const i=this.hen;this.hen=null,this.stop(),this.gåOrdre=!1,i.udfør()}this.gåOrdre&&!this.bevæger&&(this.gåOrdre=!1,this.hen=null),!this.mål&&!this.gåOrdre&&!this.sving&&(this.mål=$d(this,15,this.angribere,this.tid)??this.nærFjende()),this.sving?this.opdaterSving(e):this.mål&&!this.gåOrdre?this.forfølg(e):this.opdaterBevægelse(e),this.timer-=e,!this.sving&&this.timer<=0&&(this.bevæger?this.spil(this.data.løb,{fart:this.fart/4.4}):this.spil(this.data.idle))}nærFjende(){let e=null,t=this.data.rækkevidde+3;for(const n of this.verden.creeps){if(n.død||n.tilstand!=="jagt"||!n.rod.visible)continue;const i=this.afstand(n);i<t&&(t=i,e=n)}return e}forfølg(e){const t=this.mål;if(this.afstand(t)-t.radius>this.data.rækkevidde){this.genberegn=(this.genberegn??0)-e,(this.genberegn<=0||!this.bevæger)&&(this.gåTil(t.x,t.z),this.genberegn=.35),this.opdaterBevægelse(e);return}this.stop(),this.vend(t.x,t.z),this.cooldown<=0&&this.startSving()}startSving(){var i;const e=this.data.angreb[Math.floor(Math.random()*this.data.angreb.length)],t=Math.min(1,this.data.angrebsTid*.7),n=((i=this.handlinger.get(e))==null?void 0:i.getClip().duration)??1;this.spil(e,{loop:!1,fart:n/t,gentag:!0,fade:.08}),this.sving={tid:0,varighed:t,slagTid:t*this.data.slag,mål:this.mål,ramt:!1},this.cooldown=this.data.angrebsTid,this.sidstIKamp=this.tid}slagSkade(){var n;let e=fa(...this.data.skade)+this.skadeBonus;const t=(n=this.vet.gren)==null?void 0:n.variation;return t&&(e*=1+(Math.random()*2-1)*t),Math.max(1,Math.round(e*this.slagFaktor()))}opdaterSving(e){const t=this.sving;if(t.tid+=e,t.mål&&!t.mål.død&&this.vend(t.mål.x,t.mål.z),!t.ramt&&t.tid>=t.slagTid){t.ramt=!0;const n=t.mål;if(n&&!n.død){const i=Zs(this.slagSkade(),n.rustning??0);this.data.projektil?Z.emit("projektil",{fra:this,mål:n,skade:i,model:"spyd"}):this.afstand(n)-n.radius<=this.data.rækkevidde*1.5&&(n.tagSkade(i,this),this.vedSlag(n,i))}}t.tid>=t.varighed&&(this.sving=null)}tagSkade(e,t){return this.sidstIKamp=this.tid,t&&t!==this&&this.angribere.set(t,this.tid),super.tagSkade(Zs(e,this.rustning),t)}dø(e){super.dø(e),this.mål=null,this.sving=null,this.gåOrdre=!1,this.spil("Death_A",{loop:!1,fade:.08}),this.forsvind=5,this.base.økonomi.forsyning-=ii[this.type].forsyning,Z.emit("soldat_død",{soldat:this,kilde:e})}opdaterDød(e){this.forsvind-=e,this.forsvind<1.5&&(this.rod.position.y-=e*.8),this.forsvind<=0&&!this.fjernet&&(this.fjernet=!0,this.fjern())}}Object.assign(ru.prototype,$x);const Zx=16;class Jx{constructor(e,t,n){this.verden=e,this.økonomi=t,this.kilder=n,this.bygninger=[],this.arbejdere=[],this.soldater=[],this.vedTrænet=(i,r)=>{i==="arbejder"?this.nyArbejder(r.x+3,r.z+r.radius+1.5,"guld"):this.nySoldat(i,r.x+(Math.random()-.5)*4,r.z+r.radius+2,r.samling)}}startBygning(e){const t=new fl(this,"storlejr",{...e,færdig:!0});return this.bygninger.push(t),this.økonomi.forsyningMaks=t.data.forsyning,t}nyArbejder(e,t,n){const i=new Vl(this.verden,this,e,t);return this.arbejdere.push(i),n&&i.høstNærmeste(n),Z.emit("arbejder_ny",{arbejder:i}),i}nySoldat(e,t,n,i){const r=new ru(this.verden,this,e,t,n);return this.soldater.push(r),i&&r.kommandoGå(i.x+(Math.random()-.5)*3,i.z+(Math.random()-.5)*3),Z.emit("soldat_ny",{soldat:r}),r}kanPlacere(e,t){var n;return t?t.type!=="græs"||t.blok?"Der skal være fladt græs":t.optaget||!t.gåbar?"Feltet er optaget":this.verden.taage.erUdforsket(...Object.values(ot(t.q,t.r)))?(n=this.verden.lejrFelter)!=null&&n.some(i=>gn(i,t)<2)?"For tæt på en creep-lejr":null:"Du har ikke udforsket stedet":"Uden for kortet"}placér(e,t){var a;const n=this.kanPlacere(e,t)??this.økonomi.mangler(_n[e].pris);if(n)return[null,n];this.økonomi.betal(_n[e].pris),t.optaget=!0,t.gåbar=!1,(a=this.verden.natur)==null||a.ryd(t);const i=ot(t.q,t.r),r=new fl(this,e,{x:i.x,z:i.z,felter:[t],rot:Math.floor(Math.random()*6)*Math.PI/3});return this.bygninger.push(r),[r,null]}afleveringssted(e,t,n){var a;let i=null,r=1/0;for(const o of this.bygninger){if(!o.færdig||!((a=o.data.aflevering)!=null&&a.includes(e)))continue;const l=Math.hypot(o.x-t,o.z-n);l<r&&(r=l,i=o)}return i}get ledige(){return this.arbejdere.filter(e=>!e.død&&e.tilstand==="ledig")}find(e,t,n){let i=null,r=44;for(const a of this.soldater){if(a.død)continue;const o=n(a.x,1.1,a.z),l=Math.hypot(o.x-e,o.y-t);l<r&&(r=l,i={type:"soldat",ting:a})}for(const a of this.arbejdere){if(a.død||!a.rod.visible)continue;const o=n(a.x,1.1,a.z),l=Math.hypot(o.x-e,o.y-t);l<r&&(r=l,i={type:"arbejder",ting:a})}if(i)return i;r=1/0;for(const a of this.bygninger){const o=n(a.x,a.felter.length>1?9:4,a.z),l=Math.hypot(o.x-e,o.y-t);l<(a.felter.length>1?95:58)&&l<r&&(r=l,i={type:"bygning",ting:a})}return i}opdater(e){for(const t of this.bygninger)t.opdater(e);for(const t of this.arbejdere)t.opdater(e);for(const t of this.soldater)t.opdater(e);this.arbejdere.some(t=>t.fjernet)&&(this.arbejdere=this.arbejdere.filter(t=>!t.fjernet)),this.soldater.some(t=>t.fjernet)&&(this.soldater=this.soldater.filter(t=>!t.fjernet))}get hær(){return this.soldater.filter(e=>!e.død)}}const Qx=5,Bh=["guld","guld","guld","træ","sten"];function ey(s,{storlejr:e,steder:t,verdensObj:n}){const i=new Dx;s.økonomi=i;const r=new Ux(t,n.ressourcer),a=new Jx(s,i,r),o=a.startBygning(e);return i.forsyning=Qx,Bh.forEach((l,c)=>{a.nyArbejder(o.x-4+c*2,o.z+o.radius+2,null).høstNærmeste(l)}),i.forsyning+=Bh.length,Z.on("kilde_tom",({type:l,kilde:c})=>{l!=="guld"&&n.fjern(c)}),{økonomi:i,kilder:r,base:a}}class au{constructor(e){this.spil=e,this.valgt=e.helt,this.placering=null;const t=ty();this.ring=new ct(new Ai(1,1).rotateX(-Math.PI/2),new Bt({map:t,color:12124026,transparent:!0,depthWrite:!1})),this.ring.renderOrder=3,e.verden.scene.add(this.ring),this.ringe=[],this.ringMat=this.ring.material,this.felt=new ct(new Ys(ma/Math.sqrt(3),6).rotateX(-Math.PI/2).rotateY(Math.PI/6),new Bt({color:8257386,transparent:!0,opacity:.35,depthWrite:!1})),this.felt.visible=!1,e.verden.scene.add(this.felt)}vælg(e){this.annullérPlacering(),Array.isArray(e)&&(e=e.filter(t=>!t.død),e.length===1&&e[0]===this.spil.helt?e=null:e.length||(e=null)),this.valgt=e??this.spil.helt,Z.emit("valg",this.valgt)}get erHelt(){return this.valgt===this.spil.helt}get erGruppe(){return Array.isArray(this.valgt)}get gruppe(){return this.erGruppe?this.valgt:[]}get erArbejder(){return this.valgt instanceof Vl}get erBygning(){var e;return!!((e=this.valgt)!=null&&e.felter)}startPlacering(e){this.annullérPlacering();const t=sn(_n[e].model);t.scale.setScalar(sr.hexSkala*_n[e].skala),t.traverse(n=>{n.isMesh&&(n.material=n.material.clone(),n.material.transparent=!0,n.material.opacity=.6)}),t.visible=!1,this.spil.verden.scene.add(t),this.placering={type:e,felt:null,spøgelse:t,fejl:"Tryk på et felt"},Z.emit("placering",this.placering)}vælgFelt(e){const t=this.placering;if(!t||!e)return;t.felt=e,t.fejl=this.spil.base.kanPlacere(t.type,e);const n=ot(e.q,e.r);t.spøgelse.position.set(n.x,0,n.z),t.spøgelse.visible=!0;const i=t.fejl?16732224:8257386;t.spøgelse.traverse(r=>{r.isMesh&&r.material.color.setHex(t.fejl?16747136:16777215)}),this.felt.position.set(n.x,.06,n.z),this.felt.material.color.setHex(i),this.felt.visible=!0,Z.emit("placering",t)}bekræftPlacering(){const e=this.placering;if(!(e!=null&&e.felt))return"Tryk på et felt";const[t,n]=this.spil.base.placér(e.type,e.felt);if(n)return n;const i=this.erArbejder?this.valgt:null;return this.annullérPlacering(),i==null||i.kommandoByg(t),Z.emit("besked",`${t.data.navn} bygges`),null}annullérPlacering(){this.placering&&(this.spil.verden.scene.remove(this.placering.spøgelse),this.placering=null,this.felt.visible=!1,Z.emit("placering",null))}opdater(){var n;this.opdaterRinge();const e=this.valgt;if(this.erGruppe){this.ring.visible=!1,e.some(i=>i.død)&&this.vælg(e);return}if(e!=null&&e.død){this.vælg(null);return}if(this.ring.visible=!!e&&!this.erHelt&&(((n=e.rod)==null?void 0:n.visible)??!0),!this.ring.visible)return;const t=this.erBygning?e.radius*2.2:2.6;this.ring.scale.set(t,1,t),this.ring.position.set(e.x,.07,e.z)}}au.prototype.opdaterRinge=function(){const s=this.gruppe.filter(e=>e!==this.spil.helt&&!e.død);for(;this.ringe.length<s.length;){const e=new ct(this.ring.geometry,this.ringMat);e.renderOrder=3,e.scale.set(2.2,1,2.2),this.spil.verden.scene.add(e),this.ringe.push(e)}this.ringe.forEach((e,t)=>{e.visible=t<s.length,e.visible&&e.position.set(s[t].x,.07,s[t].z)})};function ty(){const s=document.createElement("canvas");s.width=s.height=128;const e=s.getContext("2d");e.strokeStyle="#fff",e.lineWidth=7,e.setLineDash([16,9]),e.beginPath(),e.arc(64,64,56,0,Math.PI*2),e.stroke();const t=new Pl(s);return t.colorSpace=ft,t}const We=s=>document.getElementById(s),Qr=["guld","træ","sten"],co={ledig:()=>"Ledig",gå:()=>"Går",tilKilde:s=>{var e;return`Går efter ${(e=s.kilde)==null?void 0:e.type}`},høster:s=>{var e;return`Henter ${(e=s.kilde)==null?void 0:e.type}`},iMine:()=>"Henter guld i minen",tilAflevering:s=>{var e;return`Bærer ${(e=s.bærer)==null?void 0:e.type} hjem`},tilByg:s=>{var e;return`Går hen for at bygge ${(e=s.bygning)==null?void 0:e.data.navn}`},bygger:s=>{var e;return`Bygger ${(e=s.bygning)==null?void 0:e.data.navn}`}},ho=(s={})=>Qr.filter(e=>s[e]).map(e=>`<span><img alt="${e}" src="${vt("res-"+e)}">${s[e]}</span>`).join("");class ny{constructor(e){this.spil=e,this.valg=e.valg;for(const t of Qr)We(`res-${t}-ikon`).src=vt("res-"+t);We("res-forsyning-ikon").src=vt("res-forsyning"),We("ledige-ikon").src=vt("økse"),We("ledige").addEventListener("click",()=>this.næsteLedige()),We("hær-ikon").src=vt("hær"),We("hær").addEventListener("click",()=>this.valg.vælg(e.base.hær)),We("kmd-helt").addEventListener("click",()=>{this.valg.vælg(null)}),We("heltepanel").addEventListener("click",()=>{this.valg.vælg(null),e.rig.centrér()}),We("plac-byg").addEventListener("click",()=>{const t=this.valg.bekræftPlacering();t&&Z.emit("besked",t)}),We("plac-annuller").addEventListener("click",()=>this.valg.annullérPlacering()),Z.on("valg",()=>this.byg()),Z.on("placering",t=>this.visPlacering(t)),this.tid=0,this.byg()}næsteLedige(){const e=this.spil.base.ledige;if(!e.length)return;this.i=((this.i??-1)+1)%e.length;const t=e[this.i];this.valg.vælg(t),this.spil.rig.følger=!1,this.spil.rig.fokus.set(t.x,0,t.z)}byg(){const e=this.valg.valgt,t=this.valg.erHelt;if(document.body.classList.toggle("valgt-andet",!t),We("kommando").hidden=t,t)return;const n=We("kmd-knapper");if(n.innerHTML="",this.valg.erArbejder){We("kmd-ikon").src=vt("økse"),We("kmd-navn").textContent="Bærer";for(const i of Qr)this.knap(n,vt("res-"+i),`Hent ${i}`,"",()=>e.høstNærmeste(i));for(const i of Wx){const r=_n[i];this.knap(n,vt("byg-"+i),r.kort??r.navn,ho(r.pris),()=>{const a=this.spil.økonomi.mangler(r.pris);if(a)return Z.emit("besked",a);this.valg.startPlacering(i)},`byg-${i}`)}}else if(this.valg.erGruppe)this.bygGruppe(e,n);else if(this.valg.erBygning){We("kmd-ikon").src=vt("byg-"+e.type),We("kmd-navn").textContent=e.data.navn;for(const i of e.data.træner??[]){const r=ii[i];this.knap(n,vt(r.ikon??"økse"),`Træn ${r.navn.toLowerCase()}`,ho(r.pris),()=>{const a=e.træn(i);a&&Z.emit("besked",a)},`træn-${i}`)}e.data.butik&&this.knap(n,vt("livseliksir"),"Handl","",()=>this.spil.handlVed(e))}this.opdater(1)}bygGruppe(e,t){const n=e.length===1?e[0]:null;if(We("kmd-ikon").src=vt(n!=null&&n.type?"enhed-"+n.type:"hær"),We("kmd-navn").textContent=n?n.navn:`Hær · ${e.length}`,e.every(r=>!ul(r))){for(const r of Qr)this.knap(t,vt("res-"+r),`Hent ${r}`,"",()=>e.forEach(a=>a.høstNærmeste(r)));return}this.knap(t,vt("hær"),"Stop","",()=>e.forEach(r=>r.stopOrdre?r.stopOrdre():r.kommandoGå(r.x,r.z)));const i=this.spil.veteraner;if(n&&i.kanSpecialiseres(n))for(const r of Object.keys(ni)){const a=this.knap(t,vt("enhed-grunt"),ni[r].navn,ho(i.pris(r)),()=>{const o=i.specialisér(n,r);Z.emit("besked",o??`Grunten går til Krigerlejren og bliver ${ni[r].navn}`),this.byg()},`gren-${r}`);a.classList.add(i.passer(r)?"passer":"dobbelt"),a.title=ni[r].tekst}}knap(e,t,n,i,r,a){const o=document.createElement("button");return o.type="button",o.className="kmd",a&&(o.dataset.id=a),o.innerHTML=`<img alt="" src="${t}"><b>${n}</b><span class="pris">${i}</span>`,o.addEventListener("click",l=>{l.stopPropagation(),r(),this.opdater(1)}),e.appendChild(o),o}visPlacering(e){We("placering").hidden=!e,e&&(We("plac-tekst").textContent=e.fejl??`Byg ${_n[e.type].navn} her?`,We("plac-byg").disabled=!!e.fejl)}opdater(e){var a;const t=this.spil.økonomi;We("res-guld").textContent=t.guld,We("res-træ").textContent=t.træ,We("res-sten").textContent=t.sten,We("res-forsyning").textContent=`${t.forsyning}/${Math.min(t.forsyningMaks,100)}`,We("res-forsyning").parentElement.classList.toggle("fuld",t.forsyning>=t.forsyningMaks);const n=this.spil.base.hær.length;We("hær").classList.toggle("skjult",!n),We("hær-tal").textContent=n;const i=this.spil.base.ledige.length;if(We("ledige").classList.toggle("skjult",!i),We("ledige-tal").textContent=i,this.tid+=e,this.tid<.2)return;this.tid=0;const r=this.valg.valgt;if(this.valg.erGruppe)We("kmd-status").textContent=iy(r);else if(this.valg.erArbejder){We("kmd-status").textContent=((a=co[r.tilstand])==null?void 0:a.call(co,r))??"";for(const o of document.querySelectorAll('#kmd-knapper [data-id^="byg-"]'))o.classList.toggle("dyr",!t.harRåd(_n[o.dataset.id.slice(4)].pris))}else if(this.valg.erBygning){let o=r.data.tekst;if(r.færdig){if(r.kø.length){const l=r.kø[0];o=`Træner ${ii[l.type].navn.toLowerCase()} ${Math.floor(l.tid/ii[l.type].tid*100)} % · ${r.kø.length} i kø`}}else{const l=this.spil.base.arbejdere.some(c=>c.bygning===r&&c.tilstand==="bygger");o=`Bygges ${Math.floor(r.fremskridt*100)} %${l?"":" · Vælg en bærer og tryk på byggepladsen for at bygge videre"}`}We("kmd-status").textContent=o;for(const l of document.querySelectorAll('#kmd-knapper [data-id^="træn-"]')){const c=ii[l.dataset.id.slice(5)];l.classList.toggle("dyr",!!c.låst||!!t.mangler(c.pris,c.forsyning)||!r.færdig)}}}}function iy(s){if(s.length===1&&s[0].vet){const t=s[0],n=`${Math.ceil(t.hp)}/${t.maxHp} liv`;return t.vet.gren?`${n} · ${t.vet.gren.evne}: ${t.vet.gren.evneTekst}`:t.vet.påVej?`${n} · På vej til Krigerlejren for at blive ${ni[t.vet.påVej].navn}`:t.vet.veteran?t.type==="grunt"?`${n} · Veteran — vælg en gren (grøn kant = passer til din spillestil)`:`${n} · Veteran`:`${n} · Veteran-XP ${t.vet.xp}/${Jr.tærskel} (overlev kampe)`}const e={};for(const t of s){const n=t.navn??(t.stats?"Helt":"Bærer");e[n]=(e[n]??0)+1}return Object.entries(e).map(([t,n])=>`${n} × ${t}`).join(" · ")}const zh=10,Hh=11,Gh=12,uo=13,fo=14;function po(s,e=1){const t=new zn({color:0,emissive:s,roughness:1,metalness:0,transparent:!0,depthWrite:!1,depthFunc:ta});return t.onBeforeCompile=n=>{n.fragmentShader=n.fragmentShader.replace("#include <opaque_fragment>",`
      float kant = 1.0 - abs(dot(normalize(normal), normalize(vViewPosition)));
      gl_FragColor = vec4(totalEmissiveRadiance, ${(.16*e).toFixed(2)} + ${(.75*e).toFixed(2)} * pow(kant, 1.6));`)},t}const Yi=(s,e,t=!0)=>s.traverse(n=>{t?n.layers.enable(e):n.layers.disable(e)});class sy{constructor(e,t,n,{enheder:i,bygninger:r}){Object.assign(this,{renderer:e,scene:t,kamera:n,enheder:i,bygninger:r}),this.dybde=new Bt({colorWrite:!1}),this.grøn=po(6160234),this.rød=po(16730682),this.bygGrøn=po(7208826,.55),this.v=new P}rekt(e){var l;((l=e.userData.boks)==null?void 0:l.rod)!==e&&(e.updateMatrixWorld(!0),e.userData.boks={rod:e,b:new Wt().setFromObject(e)});const t=e.userData.boks.b,n=this.v;let i=1,r=-1,a=1,o=-1;for(let c=0;c<8;c++)n.set(c&1?t.max.x:t.min.x,c&2?t.max.y:t.min.y,c&4?t.max.z:t.min.z).project(this.kamera),i=Math.min(i,n.x),r=Math.max(r,n.x),a=Math.min(a,n.y),o=Math.max(o,n.y);return t.getCenter(n),{x0:i,x1:r,y0:a,y1:o,d:n.distanceTo(this.kamera.position),synlig:r>-1&&i<1&&o>-1&&a<1}}pas(e,t){this.kamera.layers.set(e),this.scene.overrideMaterial=t,this.renderer.render(this.scene,this.kamera)}tegn(){const{renderer:e,scene:t,kamera:n}=this,i=this.bygninger().filter(a=>{var o;return(o=a.rod)==null?void 0:o.visible}).map(a=>({...a,...this.rekt(a.rod)})).filter(a=>a.synlig);if(!i.length)return;const r={autoClear:e.autoClear,skygge:e.shadowMap.autoUpdate,baggrund:t.background,maske:n.layers.mask};e.autoClear=!1,e.shadowMap.autoUpdate=!1,t.background=null;for(const a of i)Yi(a.rod,zh);for(const a of this.enheder())Yi(a.rod,a.egen?Hh:Gh);e.clearDepth(),this.pas(zh,this.dybde),this.pas(Hh,this.grøn),this.pas(Gh,this.rød);for(const a of i){if(!a.egen)continue;const o=i.filter(l=>l!==a&&l.d<a.d-1&&l.x0<a.x1&&l.x1>a.x0&&l.y0<a.y1&&l.y1>a.y0);if(o.length){for(const l of o)Yi(l.rod,uo);Yi(a.rod,fo),e.clearDepth(),this.pas(uo,this.dybde),this.pas(fo,this.bygGrøn);for(const l of o)Yi(l.rod,uo,!1);Yi(a.rod,fo,!1)}}t.overrideMaterial=null,n.layers.mask=r.maske,t.background=r.baggrund,e.shadowMap.autoUpdate=r.skygge,e.autoClear=r.autoClear}}const ry=600;class ay{constructor(e){this.verden=e,this.score={aggression:1,overlevelse:1,kaos:1},this.tid=0,this.mål=new Map,this.timer=0,Z.on("skade",({mål:t,mængde:n,kilde:i})=>{!dl(i,e)||dl(t,e)||!(n>0)||(this.score.aggression+=n*.01*(this.tid<180?2:1),(!this.mål.has(t)||this.tid-this.mål.get(t)>20)&&(this.score.kaos+=this.nyligeMål()>=2?.6:.1),this.mål.set(t,this.tid))}),Z.on("soldat_ordre",({soldat:t,type:n})=>{n==="angrib"&&(this.score.aggression+=.3),n==="gå"&&t.iKamp&&t.hp<t.maxHp*.4&&(this.score.overlevelse+=2)})}nyligeMål(){let e=0;for(const t of this.mål.values())this.tid-t<20&&e++;return e}opdater(e,t){this.tid+=e;const n=Math.pow(.5,e/ry);for(const r in this.score)this.score[r]*=n;if(this.timer+=e,this.timer<5)return;this.timer=0;for(const r of t)!r.død&&r.tid>120&&(this.score.overlevelse+=.25);const i=new Set;for(const[r,a]of this.mål)this.tid-a<8&&r.lejr&&i.add(r.lejr),this.tid-a>60&&this.mål.delete(r);i.size>=2&&(this.score.kaos+=1.5)}andele(){const e=this.score,t=e.aggression+e.overlevelse+e.kaos;return{aggression:e.aggression/t,overlevelse:e.overlevelse/t,kaos:e.kaos/t}}dominant(){const e=this.andele(),[t,n]=Object.entries(e).sort((i,r)=>r[1]-i[1])[0];return n>.45?t:null}}class oy{constructor(e,t){this.spil=e,this.stil=t,Z.on("creep_død",({creep:n})=>{var r;const i=Jr.prCreep(((r=n.lejr)==null?void 0:r.data.niveau)??1);for(const a of e.base.soldater)!a.død&&a.iKamp&&a.afstand(n)<18&&this.givXp(a,i)})}givXp(e,t){e.vet.xp+=t,!e.vet.veteran&&e.vet.xp>=Jr.tærskel&&this.blivVeteran(e)}blivVeteran(e,t=!1){e.vet.veteran=!0;const n=Math.round(e.maxHp*Jr.bonusHp);e.maxHp+=n,e.hp+=n,Vh(e,null,.82),!t&&(Z.emit("effekt",{type:"veteran",x:e.x,z:e.z}),Z.emit("flydetekst",{enhed:e,tekst:"Veteran!",klasse:"level"}),Z.emit("besked",e.type==="grunt"?"En grunt er blevet veteran — vælg den for at specialisere den":`En ${e.navn.toLowerCase()} er blevet veteran`))}pris(e){const t=ni[e],n=this.stil.dominant(),i=!n||n===t.stil?1:2;return Object.fromEntries(Object.entries(t.pris).map(([r,a])=>[r,a*i]))}passer(e){const t=this.stil.dominant();return!t||t===ni[e].stil}kanSpecialiseres(e){return e.type==="grunt"&&e.vet.veteran&&!e.vet.gren&&!e.vet.påVej}specialisér(e,t){if(!this.kanSpecialiseres(e))return"Kun veteran-grunts kan specialiseres";const n=this.spil.base.bygninger.filter(l=>l.type==="krigerlejr"&&l.færdig).sort((l,c)=>e.afstand(l)-e.afstand(c))[0];if(!n)return"Byg en Krigerlejr først";const i=this.pris(t),r=this.spil.økonomi,a=r.mangler(i);return a||(r.betal(i),e.vet.påVej=t,e.vet.betalt=i,e.kommandoHen(n.x,n.z,n.radius+4,()=>this.anvend(e,t))?null:(e.vet.påVej=null,r.refunder(i),"Grunten kan ikke komme hen til Krigerlejren"))}anvend(e,t,n=!1){const i=ni[t];e.vet.gren={id:t,...i},e.vet.påVej=null,e.maxHp+=i.hp,e.hp=Math.max(1,Math.min(e.maxHp,e.hp+Math.max(0,i.hp))),e.skadeBonus+=i.skade,e.rustning+=i.rustning,e.fart+=i.fart,e.model.scale.multiplyScalar(i.skala),e.navn=`${i.navn}-grunt`,Vh(e,i.farve),!n&&(Z.emit("effekt",{type:"veteran",x:e.x,z:e.z}),Z.emit("besked",`Grunten er blevet ${i.navn}: ${i.evneTekst}`))}opdater(){for(const e of this.spil.base.soldater)e.vet.påVej&&(!e.hen||e.død)&&(this.spil.økonomi.refunder(e.vet.betalt),e.vet.påVej=null)}}function Vh(s,e,t=1){const n=e!=null?new ge(e):null;s.model.traverse(i=>{i.isMesh&&(i.material=i.material.clone(),n&&i.material.color.lerp(n,.3),i.material.color.multiplyScalar(t))})}function ly(s,e){var f,g;const{helt:t,base:n,verden:i,lejre:r,genstande:a,taage:o,rig:l,økonomi:c}=s,d=i.kort;for(;t.level<e.helt.level;){t.level+=1;const b=t.level-1;t.basisHp+=Zt.hpBonus[b],t.stats.skadeMin+=Zt.skadeBonus[b],t.stats.skadeMax+=Zt.skadeBonus[b],t.stats.rustning+=Zt.rustBonus[b]}t.xp=e.helt.xp;const h=t.inventar;h.pladser=e.helt.pladser.map(b=>b?{...b}:null),Object.assign(h.permanent,e.helt.permanent),h.beregn(),t.rod.position.set(e.helt.x,0,e.helt.z),t.hp=Math.min(t.maxHp,e.helt.hp),t.mana=Math.min(t.manaMax,e.helt.mana),n.bygninger[0].kø=((f=e.bygninger[0])==null?void 0:f.kø)??[],n.bygninger[0].samling=((g=e.bygninger[0])==null?void 0:g.samling)??null;for(const b of e.bygninger.slice(1)){const m=b.felter.map(y=>d.felter.get(y)).filter(Boolean);for(const y of m)y.optaget=!0,y.gåbar=!1,i.natur.ryd(y);const p=new fl(n,b.type,{x:b.x,z:b.z,felter:m,rot:b.rot,færdig:b.færdig});b.færdig||(p.fremskridt=b.fremskridt,p.visModel(oa[Math.min(2,Math.floor(b.fremskridt*3))],1)),p.kø=b.kø??[],p.samling=b.samling,n.bygninger.push(p)}e.helt.spawn&&(t.spawn=e.helt.spawn);for(const b of n.arbejdere)b.fjern();n.arbejdere=[];for(const b of e.arbejdere){const m=n.nyArbejder(b.x,b.z,null);b.byg>=0&&n.bygninger[b.byg]&&!n.bygninger[b.byg].færdig?m.kommandoByg(n.bygninger[b.byg]):b.opgave&&m.høstNærmeste(b.opgave)}for(const b of e.soldater){const m=n.nySoldat(b.type,b.x,b.z,null);m.vet.xp=b.xp,b.veteran&&s.veteraner.blivVeteran(m,!0),b.gren&&s.veteraner.anvend(m,b.gren,!0),m.hp=Math.min(m.maxHp,b.hp),m.timer=0}const u=n.kilder.ressourcer;for(const[b,m]of e.ressourcer){const p=u[b];p&&(m<=0?i.natur.fjern(p):p[p.type]=m)}e.miner.forEach((b,m)=>{n.kilder.miner[m]&&(n.kilder.miner[m].guld=b)}),e.lejre.forEach((b,m)=>{const p=r[m];p&&b.forEach((y,S)=>{const _=p.creeps[S];_&&(y<0?(_.død=!0,_.fjernet=!0,_.fjern()):_.hp=Math.min(_.maxHp,y))})});for(const b of e.items)a.læg(b.id,b.x,b.z,b.ladninger??void 0);e.kister.forEach((b,m)=>{const p=a.kister[m];!b||!p||(p.åben=!0,p.rod.traverse(y=>{y.isMesh&&(y.material=y.material.clone(),y.material.color.multiplyScalar(.45))}))}),ux(e.udforsket,o.udforsket),Object.assign(s.stil.score,e.stil),Object.assign(c,e.økonomi),l.følger=!1,l.fokus.set(e.kamera.x,0,e.kamera.z),l.afstand=e.kamera.afstand}const ea=document.getElementById("spil"),Dn=new w_({canvas:ea,antialias:!0,powerPreference:"high-performance"});Dn.setPixelRatio(Math.min(window.devicePixelRatio,2));const Ln=new Td;async function cy(){const{kort:s,heltSpawn:e,steder:t,lejre:n,kister:i,storlejr:r,tilf:a,grænser:o}=R0(),l=document.getElementById("lade-bar");await t0([...Xx,...F0(s)],$=>{l.style.width=`${Math.round($*100)}%`}),Rx(Dn,qx),document.getElementById("lader").classList.add("færdig");const c=new vx(o),d={scene:Ln,kort:s,creeps:[],helt:null,taage:c,lejrFelter:n},h=O0(Ln,s,o,t);d.natur=h;const u=B0(Ln,Dn),{økonomi:f,base:g}=ey(d,{storlejr:r,steder:t,verdensObj:h});let b=()=>{};const m=new ox(ea,($,ie)=>b($,ie));m.grænser=o;const p=()=>{Dn.setSize(window.innerWidth,window.innerHeight,!1),m.størrelse(window.innerWidth,window.innerHeight)};window.addEventListener("resize",p),p(),m.følger=!1,m.afstand=52;let y=0;Dn.setAnimationLoop(()=>{y+=.0012,m.fokus.set(e.x+28+Math.sin(y)*32,0,e.z-28+Math.cos(y)*20),m.opdater(.016,null),u.følg(m.fokus.x,m.fokus.z),Dn.render(Ln,m.kamera)});const S=cx(),_=await gx(S),C=_==="fortsæt",w=C?S.helt.essens:_;document.body.classList.add("i-spil");const M=new Zd(d,e,w);d.helt=M;const A=n.map($=>new ix(d,$)),x=new ax(d),v=new Sx(t,c,x),R=new wx(d,i,A,a);c.patchScene(Ln),c.opdater(1,[{x:M.x,z:M.z,radius:28}]);let L=[];d.egne=()=>L;const F=new ay(d),O={lærred:ea,stil:F,helt:M,verden:d,rig:m,lejre:A,taage:c,grænser:o,hexTilVerden:ot,økonomi:f,base:g,steder:t,genstande:R,nødvendigXp:()=>(Zt.xp[M.level]??M.xp)-M.xp,brugEvne($){const ie=M.evner.brug($);ie&&G.toast(ie)},handlVed($){M.død||(se.vælg(null),M.kommandoInteraktion($.x,$.z,13,()=>V.åbnButik($)),x.markør($.x,$.z,16769162))}};m.fokus.set(e.x,0,e.z),m.afstand=40,m.centrér();const G=new lx(document.getElementById("lag"),d,m.kamera,()=>[...g.arbejdere,...g.soldater,...g.bygninger.filter($=>!$.færdig)]),W=new mx(O),J=new xx(document.getElementById("minimap"),O),V=new kx(O),se=new au(O);O.valg=se,O.invHud=V,O.veteraner=new oy(O,F);const ue=new ny(O);m.onBoks=Gx(O,($,ie,re)=>G.skærm($,ie,re)),Z.on("creep_død",({xp:$})=>M.fåXp($)),Z.on("teleport",()=>m.centrér()),C?(ly(O,S),M.tid=S.spilTid,c.patchScene(Ln),c.opdater(1,[{x:M.x,z:M.z,radius:28}]),setTimeout(()=>G.toast("Velkommen tilbage — spillet fortsætter hvor du slap"),600)):setTimeout(()=>G.toast("Tryk på en bærer for at bygge — tryk på jorden for at gå med helten"),600),O.gem=fx(O),b=jx({spil:O,lærred:ea,overlay:G,effekter:x,genstande:R,steder:t});const xe={x:0,z:0,radius:28};let Pe=0;function Ke($){L=[M,...g.arbejdere,...g.soldater].filter(re=>!re.død&&re.rod.visible&&!re.skjult),M.opdater($),xe.x=M.x,xe.z=M.z;const ie=[...g.arbejdere.filter(re=>!re.død).map(re=>({x:re.x,z:re.z,radius:Ox})),...g.soldater.filter(re=>!re.død).map(re=>({x:re.x,z:re.z,radius:Zx}))];c.opdater($,M.død?ie:[xe,...ie]);for(const re of d.creeps)re.opdater($);for(const re of A)re.opdater($);g.opdater($),z0([M,...d.creeps.filter(re=>!re.død&&re.rod.visible),...g.arbejdere.filter(re=>re.rod.visible&&!re.død),...g.soldater.filter(re=>!re.død)],s),F.opdater($,g.soldater),O.veteraner.opdater(),v.opdater($,M),R.opdater($),x.opdater($),h.opdater($),se.opdater(),m.opdater($,M.død?null:M),J.opdater($),Pe+=$,Pe>1&&(Pe=0,c.patchScene(Ln))}const X=new sy(Dn,Ln,m.kamera,{enheder:()=>[M,...g.arbejdere,...g.soldater,...d.creeps].filter($=>!$.død&&$.rod.visible).map($=>({rod:$.rod,egen:$===M||$.side==="egen"})),bygninger:()=>[...g.bygninger.map($=>({rod:$.rod,egen:!0})),...h.bygninger]});O.simuler=$=>{for(let ie=0;ie<$;ie+=1/30)Ke(1/30)};const te=new ev;Dn.setAnimationLoop(()=>{const $=Math.min(te.getDelta(),.05);Ke($),u.følg(m.fokus.x,m.fokus.z),Dn.render(Ln,m.kamera),X.tegn(),G.opdater(),W.opdater(),V.opdater(),ue.opdater($)}),O.visHeleKortet=()=>c.tilføjKilde(0,0,999),window.spil=O,window.klar=!0}cy().catch(s=>{console.error(s),document.getElementById("lade-tekst").textContent=`Fejl: ${s.message}`});
