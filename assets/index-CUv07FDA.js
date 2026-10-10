(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rl="170",Pu=0,fc=1,Lu=2,cd=1,hd=2,Un=3,Vn=0,Gt=1,Qt=2,li=0,Ai=1,wi=2,pc=3,mc=4,Iu=5,Ei=100,Du=101,Uu=102,Nu=103,Fu=104,Ou=200,Bu=201,zu=202,Hu=203,ko=204,Co=205,Gu=206,Vu=207,ju=208,Wu=209,Xu=210,qu=211,Ku=212,Yu=213,$u=214,Po=0,Lo=1,Io=2,ds=3,Do=4,Uo=5,ba=6,No=7,dd=0,Zu=1,Ju=2,ci=0,Qu=1,ef=2,tf=3,ud=4,nf=5,sf=6,rf=7,gc="attached",af="detached",fd=300,us=301,fs=302,Fo=303,Oo=304,Ea=306,ps=1e3,ri=1001,_a=1002,Dt=1003,pd=1004,qs=1005,zt=1006,ia=1007,On=1008,jn=1009,md=1010,gd=1011,nr=1012,kl=1013,ki=1014,dn=1015,dr=1016,Cl=1017,Pl=1018,ms=1020,bd=35902,_d=1021,vd=1022,tn=1023,xd=1024,yd=1025,os=1026,gs=1027,Ta=1028,Ll=1029,Md=1030,Il=1031,Dl=1033,sa=33776,ra=33777,aa=33778,oa=33779,Bo=35840,zo=35841,Ho=35842,Go=35843,Vo=36196,jo=37492,Wo=37496,Xo=37808,qo=37809,Ko=37810,Yo=37811,$o=37812,Zo=37813,Jo=37814,Qo=37815,el=37816,tl=37817,nl=37818,il=37819,sl=37820,rl=37821,la=36492,al=36494,ol=36495,Sd=36283,ll=36284,cl=36285,hl=36286,Ed=2200,Td=2201,of=2202,ir=2300,sr=2301,Ia=2302,is=2400,ss=2401,va=2402,Ul=2500,lf=2501,cf=0,Ad=1,dl=2,hf=3200,df=3201,wd=0,uf=1,si="",ut="srgb",Ut="srgb-linear",Aa="linear",tt="srgb",Di=7680,bc=519,ff=512,pf=513,mf=514,Rd=515,gf=516,bf=517,_f=518,vf=519,ul=35044,_c="300 es",Bn=2e3,xa=2001;class Pi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let vc=1234567;const Zs=Math.PI/180,bs=180/Math.PI;function un(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tt[s&255]+Tt[s>>8&255]+Tt[s>>16&255]+Tt[s>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]).toLowerCase()}function Rt(s,e,t){return Math.max(e,Math.min(t,s))}function Nl(s,e){return(s%e+e)%e}function xf(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function yf(s,e,t){return s!==e?(t-s)/(e-s):0}function Js(s,e,t){return(1-t)*s+t*e}function Mf(s,e,t,n){return Js(s,e,1-Math.exp(-t*n))}function Sf(s,e=1){return e-Math.abs(Nl(s,e*2)-e)}function Ef(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Tf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Af(s,e){return s+Math.floor(Math.random()*(e-s+1))}function wf(s,e){return s+Math.random()*(e-s)}function Rf(s){return s*(.5-Math.random())}function kf(s){s!==void 0&&(vc=s);let e=vc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Cf(s){return s*Zs}function Pf(s){return s*bs}function Lf(s){return(s&s-1)===0&&s!==0}function If(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Df(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Uf(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),d=a((e+n)/2),h=r((e-n)/2),u=a((e-n)/2),p=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*d,l*h,l*u,o*c);break;case"YZY":s.set(l*u,o*d,l*h,o*c);break;case"ZXZ":s.set(l*h,l*u,o*d,o*c);break;case"XZX":s.set(o*d,l*g,l*p,o*c);break;case"YXY":s.set(l*p,o*d,l*g,o*c);break;case"ZYZ":s.set(l*g,l*p,o*d,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function hn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function et(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ls={DEG2RAD:Zs,RAD2DEG:bs,generateUUID:un,clamp:Rt,euclideanModulo:Nl,mapLinear:xf,inverseLerp:yf,lerp:Js,damp:Mf,pingpong:Sf,smoothstep:Ef,smootherstep:Tf,randInt:Af,randFloat:wf,randFloatSpread:Rf,seededRandom:kf,degToRad:Cf,radToDeg:Pf,isPowerOfTwo:Lf,ceilPowerOfTwo:If,floorPowerOfTwo:Df,setQuaternionFromProperEuler:Uf,normalize:et,denormalize:hn};class Ae{constructor(e=0,t=0){Ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class De{constructor(e,t,n,i,r,a,o,l,c){De.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=i,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],h=n[7],u=n[2],p=n[5],g=n[8],b=i[0],m=i[3],f=i[6],v=i[1],y=i[4],_=i[7],k=i[2],R=i[5],A=i[8];return r[0]=a*b+o*v+l*k,r[3]=a*m+o*y+l*R,r[6]=a*f+o*_+l*A,r[1]=c*b+d*v+h*k,r[4]=c*m+d*y+h*R,r[7]=c*f+d*_+h*A,r[2]=u*b+p*v+g*k,r[5]=u*m+p*y+g*R,r[8]=u*f+p*_+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*r*d+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*a-o*c,u=o*l-d*r,p=c*r-a*l,g=t*h+n*u+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/g;return e[0]=h*b,e[1]=(i*c-d*n)*b,e[2]=(o*n-i*a)*b,e[3]=u*b,e[4]=(d*t-i*l)*b,e[5]=(i*r-o*t)*b,e[6]=p*b,e[7]=(n*l-c*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Da.makeScale(e,t)),this}rotate(e){return this.premultiply(Da.makeRotation(-e)),this}translate(e,t){return this.premultiply(Da.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Da=new De;function kd(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function rr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Nf(){const s=rr("canvas");return s.style.display="block",s}const xc={};function Ks(s){s in xc||(xc[s]=!0,console.warn(s))}function Ff(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Of(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Bf(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Be={enabled:!0,workingColorSpace:Ut,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===tt&&(s.r=Hn(s.r),s.g=Hn(s.g),s.b=Hn(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===tt&&(s.r=cs(s.r),s.g=cs(s.g),s.b=cs(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===si?Aa:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Hn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function cs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const yc=[.64,.33,.3,.6,.15,.06],Mc=[.2126,.7152,.0722],Sc=[.3127,.329],Ec=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tc=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Be.define({[Ut]:{primaries:yc,whitePoint:Sc,transfer:Aa,toXYZ:Ec,fromXYZ:Tc,luminanceCoefficients:Mc,workingColorSpaceConfig:{unpackColorSpace:ut},outputColorSpaceConfig:{drawingBufferColorSpace:ut}},[ut]:{primaries:yc,whitePoint:Sc,transfer:tt,toXYZ:Ec,fromXYZ:Tc,luminanceCoefficients:Mc,outputColorSpaceConfig:{drawingBufferColorSpace:ut}}});let Ui;class zf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ui===void 0&&(Ui=rr("canvas")),Ui.width=e.width,Ui.height=e.height;const n=Ui.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ui}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=rr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Hn(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Hn(t[n]/255)*255):t[n]=Hn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Hf=0;class Cd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=un(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Ua(i[a].image)):r.push(Ua(i[a]))}else r=Ua(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ua(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?zf.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gf=0;class bt extends Pi{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,n=ri,i=ri,r=zt,a=On,o=tn,l=jn,c=bt.DEFAULT_ANISOTROPY,d=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=un(),this.name="",this.source=new Cd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ps:e.x=e.x-Math.floor(e.x);break;case ri:e.x=e.x<0?0:1;break;case _a:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ps:e.y=e.y-Math.floor(e.y);break;case ri:e.y=e.y<0?0:1;break;case _a:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=fd;bt.DEFAULT_ANISOTROPY=1;class Ke{constructor(e=0,t=0,n=0,i=1){Ke.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],d=l[4],h=l[8],u=l[1],p=l[5],g=l[9],b=l[2],m=l[6],f=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+b)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,_=(p+1)/2,k=(f+1)/2,R=(d+u)/4,A=(h+b)/4,T=(g+m)/4;return y>_&&y>k?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=R/n,r=A/n):_>k?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=R/i,r=T/i):k<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(k),n=A/r,i=T/r),this.set(n,i,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(h-b)*(h-b)+(u-d)*(u-d));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-b)/v,this.z=(u-d)/v,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vf extends Pi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ke(0,0,e,t),this.scissorTest=!1,this.viewport=new Ke(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new bt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Cd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hi extends Vf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Pd extends bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jf extends bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],d=n[i+2],h=n[i+3];const u=r[a+0],p=r[a+1],g=r[a+2],b=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h;return}if(o===1){e[t+0]=u,e[t+1]=p,e[t+2]=g,e[t+3]=b;return}if(h!==b||l!==u||c!==p||d!==g){let m=1-o;const f=l*u+c*p+d*g+h*b,v=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const k=Math.sqrt(y),R=Math.atan2(k,f*v);m=Math.sin(m*R)/k,o=Math.sin(o*R)/k}const _=o*v;if(l=l*m+u*_,c=c*m+p*_,d=d*m+g*_,h=h*m+b*_,m===1-o){const k=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=k,c*=k,d*=k,h*=k}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],d=n[i+3],h=r[a],u=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+d*h+l*p-c*u,e[t+1]=l*g+d*u+c*h-o*p,e[t+2]=c*g+d*p+o*u-l*h,e[t+3]=d*g-o*h-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(i/2),h=o(r/2),u=l(n/2),p=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=u*d*h+c*p*g,this._y=c*p*h-u*d*g,this._z=c*d*g+u*p*h,this._w=c*d*h-u*p*g;break;case"YXZ":this._x=u*d*h+c*p*g,this._y=c*p*h-u*d*g,this._z=c*d*g-u*p*h,this._w=c*d*h+u*p*g;break;case"ZXY":this._x=u*d*h-c*p*g,this._y=c*p*h+u*d*g,this._z=c*d*g+u*p*h,this._w=c*d*h-u*p*g;break;case"ZYX":this._x=u*d*h-c*p*g,this._y=c*p*h+u*d*g,this._z=c*d*g-u*p*h,this._w=c*d*h+u*p*g;break;case"YZX":this._x=u*d*h+c*p*g,this._y=c*p*h+u*d*g,this._z=c*d*g-u*p*h,this._w=c*d*h-u*p*g;break;case"XZY":this._x=u*d*h-c*p*g,this._y=c*p*h-u*d*g,this._z=c*d*g+u*p*h,this._w=c*d*h+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],h=t[10],u=n+o+h;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(d-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+i*c-r*l,this._y=i*d+a*l+r*o-n*c,this._z=r*d+a*c+n*l-i*o,this._w=a*d-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),h=Math.sin((1-t)*d)/c,u=Math.sin(t*d)/c;return this._w=a*h+this._w*u,this._x=n*h+this._x*u,this._y=i*h+this._y*u,this._z=r*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ac.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ac.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),d=2*(o*t-r*i),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*d,this.y=n+l*d+o*c-r*h,this.z=i+l*h+r*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Na.copy(this).projectOnVector(e),this.sub(Na)}reflect(e){return this.sub(Na.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Na=new P,Ac=new sn;class Kt{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(on.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(on.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=on.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,on):on.fromBufferAttribute(r,a),on.applyMatrix4(e.matrixWorld),this.expandByPoint(on);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_r.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_r.copy(n.boundingBox)),_r.applyMatrix4(e.matrixWorld),this.union(_r)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,on),on.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ls),vr.subVectors(this.max,Ls),Ni.subVectors(e.a,Ls),Fi.subVectors(e.b,Ls),Oi.subVectors(e.c,Ls),qn.subVectors(Fi,Ni),Kn.subVectors(Oi,Fi),fi.subVectors(Ni,Oi);let t=[0,-qn.z,qn.y,0,-Kn.z,Kn.y,0,-fi.z,fi.y,qn.z,0,-qn.x,Kn.z,0,-Kn.x,fi.z,0,-fi.x,-qn.y,qn.x,0,-Kn.y,Kn.x,0,-fi.y,fi.x,0];return!Fa(t,Ni,Fi,Oi,vr)||(t=[1,0,0,0,1,0,0,0,1],!Fa(t,Ni,Fi,Oi,vr))?!1:(xr.crossVectors(qn,Kn),t=[xr.x,xr.y,xr.z],Fa(t,Ni,Fi,Oi,vr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,on).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(on).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Rn=[new P,new P,new P,new P,new P,new P,new P,new P],on=new P,_r=new Kt,Ni=new P,Fi=new P,Oi=new P,qn=new P,Kn=new P,fi=new P,Ls=new P,vr=new P,xr=new P,pi=new P;function Fa(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){pi.fromArray(s,r);const o=i.x*Math.abs(pi.x)+i.y*Math.abs(pi.y)+i.z*Math.abs(pi.z),l=e.dot(pi),c=t.dot(pi),d=n.dot(pi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Wf=new Kt,Is=new P,Oa=new P;class Sn{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Wf.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Is.subVectors(e,this.center);const t=Is.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Is,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Is.copy(e.center).add(Oa)),this.expandByPoint(Is.copy(e.center).sub(Oa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const kn=new P,Ba=new P,yr=new P,Yn=new P,za=new P,Mr=new P,Ha=new P;class ur{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ba.copy(e).add(t).multiplyScalar(.5),yr.copy(t).sub(e).normalize(),Yn.copy(this.origin).sub(Ba);const r=e.distanceTo(t)*.5,a=-this.direction.dot(yr),o=Yn.dot(this.direction),l=-Yn.dot(yr),c=Yn.lengthSq(),d=Math.abs(1-a*a);let h,u,p,g;if(d>0)if(h=a*l-o,u=a*o-l,g=r*d,h>=0)if(u>=-g)if(u<=g){const b=1/d;h*=b,u*=b,p=h*(h+a*u+2*o)+u*(a*h+u+2*l)+c}else u=r,h=Math.max(0,-(a*u+o)),p=-h*h+u*(u+2*l)+c;else u=-r,h=Math.max(0,-(a*u+o)),p=-h*h+u*(u+2*l)+c;else u<=-g?(h=Math.max(0,-(-a*r+o)),u=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+u*(u+2*l)+c):u<=g?(h=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(h=Math.max(0,-(a*r+o)),u=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+u*(u+2*l)+c);else u=a>0?-r:r,h=Math.max(0,-(a*u+o)),p=-h*h+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Ba).addScaledVector(yr,u),p}intersectSphere(e,t){kn.subVectors(e.center,this.origin);const n=kn.dot(this.direction),i=kn.dot(kn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),d>=0?(r=(e.min.y-u.y)*d,a=(e.max.y-u.y)*d):(r=(e.max.y-u.y)*d,a=(e.min.y-u.y)*d),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-u.z)*h,l=(e.max.z-u.z)*h):(o=(e.max.z-u.z)*h,l=(e.min.z-u.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,n,i,r){za.subVectors(t,e),Mr.subVectors(n,e),Ha.crossVectors(za,Mr);let a=this.direction.dot(Ha),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Yn.subVectors(this.origin,e);const l=o*this.direction.dot(Mr.crossVectors(Yn,Mr));if(l<0)return null;const c=o*this.direction.dot(za.cross(Yn));if(c<0||l+c>a)return null;const d=-o*Yn.dot(Ha);return d<0?null:this.at(d/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ke{constructor(e,t,n,i,r,a,o,l,c,d,h,u,p,g,b,m){ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,d,h,u,p,g,b,m)}set(e,t,n,i,r,a,o,l,c,d,h,u,p,g,b,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=d,f[10]=h,f[14]=u,f[3]=p,f[7]=g,f[11]=b,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Bi.setFromMatrixColumn(e,0).length(),r=1/Bi.setFromMatrixColumn(e,1).length(),a=1/Bi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),d=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const u=a*d,p=a*h,g=o*d,b=o*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=u-b*c,t[9]=-o*l,t[2]=b-u*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*d,p=l*h,g=c*d,b=c*h;t[0]=u+b*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*d,t[9]=-o,t[2]=p*o-g,t[6]=b+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*d,p=l*h,g=c*d,b=c*h;t[0]=u-b*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*d,t[9]=b-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*d,p=a*h,g=o*d,b=o*h;t[0]=l*d,t[4]=g*c-p,t[8]=u*c+b,t[1]=l*h,t[5]=b*c+u,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,p=a*c,g=o*l,b=o*c;t[0]=l*d,t[4]=b-u*h,t[8]=g*h+p,t[1]=h,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=p*h+g,t[10]=u-b*h}else if(e.order==="XZY"){const u=a*l,p=a*c,g=o*l,b=o*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=u*h+b,t[5]=a*d,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*d,t[10]=b*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xf,e,qf)}lookAt(e,t,n){const i=this.elements;return Wt.subVectors(e,t),Wt.lengthSq()===0&&(Wt.z=1),Wt.normalize(),$n.crossVectors(n,Wt),$n.lengthSq()===0&&(Math.abs(n.z)===1?Wt.x+=1e-4:Wt.z+=1e-4,Wt.normalize(),$n.crossVectors(n,Wt)),$n.normalize(),Sr.crossVectors(Wt,$n),i[0]=$n.x,i[4]=Sr.x,i[8]=Wt.x,i[1]=$n.y,i[5]=Sr.y,i[9]=Wt.y,i[2]=$n.z,i[6]=Sr.z,i[10]=Wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],h=n[5],u=n[9],p=n[13],g=n[2],b=n[6],m=n[10],f=n[14],v=n[3],y=n[7],_=n[11],k=n[15],R=i[0],A=i[4],T=i[8],x=i[12],M=i[1],w=i[5],L=i[9],F=i[13],B=i[2],V=i[6],H=i[10],Z=i[14],j=i[3],ie=i[7],de=i[11],xe=i[15];return r[0]=a*R+o*M+l*B+c*j,r[4]=a*A+o*w+l*V+c*ie,r[8]=a*T+o*L+l*H+c*de,r[12]=a*x+o*F+l*Z+c*xe,r[1]=d*R+h*M+u*B+p*j,r[5]=d*A+h*w+u*V+p*ie,r[9]=d*T+h*L+u*H+p*de,r[13]=d*x+h*F+u*Z+p*xe,r[2]=g*R+b*M+m*B+f*j,r[6]=g*A+b*w+m*V+f*ie,r[10]=g*T+b*L+m*H+f*de,r[14]=g*x+b*F+m*Z+f*xe,r[3]=v*R+y*M+_*B+k*j,r[7]=v*A+y*w+_*V+k*ie,r[11]=v*T+y*L+_*H+k*de,r[15]=v*x+y*F+_*Z+k*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],u=e[10],p=e[14],g=e[3],b=e[7],m=e[11],f=e[15];return g*(+r*l*h-i*c*h-r*o*u+n*c*u+i*o*p-n*l*p)+b*(+t*l*p-t*c*u+r*a*u-i*a*p+i*c*d-r*l*d)+m*(+t*c*h-t*o*p-r*a*h+n*a*p+r*o*d-n*c*d)+f*(-i*o*d-t*l*h+t*o*u+i*a*h-n*a*u+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],u=e[10],p=e[11],g=e[12],b=e[13],m=e[14],f=e[15],v=h*m*c-b*u*c+b*l*p-o*m*p-h*l*f+o*u*f,y=g*u*c-d*m*c-g*l*p+a*m*p+d*l*f-a*u*f,_=d*b*c-g*h*c+g*o*p-a*b*p-d*o*f+a*h*f,k=g*h*l-d*b*l-g*o*u+a*b*u+d*o*m-a*h*m,R=t*v+n*y+i*_+r*k;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=v*A,e[1]=(b*u*r-h*m*r-b*i*p+n*m*p+h*i*f-n*u*f)*A,e[2]=(o*m*r-b*l*r+b*i*c-n*m*c-o*i*f+n*l*f)*A,e[3]=(h*l*r-o*u*r-h*i*c+n*u*c+o*i*p-n*l*p)*A,e[4]=y*A,e[5]=(d*m*r-g*u*r+g*i*p-t*m*p-d*i*f+t*u*f)*A,e[6]=(g*l*r-a*m*r-g*i*c+t*m*c+a*i*f-t*l*f)*A,e[7]=(a*u*r-d*l*r+d*i*c-t*u*c-a*i*p+t*l*p)*A,e[8]=_*A,e[9]=(g*h*r-d*b*r-g*n*p+t*b*p+d*n*f-t*h*f)*A,e[10]=(a*b*r-g*o*r+g*n*c-t*b*c-a*n*f+t*o*f)*A,e[11]=(d*o*r-a*h*r-d*n*c+t*h*c+a*n*p-t*o*p)*A,e[12]=k*A,e[13]=(d*b*i-g*h*i+g*n*u-t*b*u-d*n*m+t*h*m)*A,e[14]=(g*o*i-a*b*i-g*n*l+t*b*l+a*n*m-t*o*m)*A,e[15]=(a*h*i-d*o*i+d*n*l-t*h*l-a*n*u+t*o*u)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,d*o+n,d*l-i*a,0,c*l-i*o,d*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,d=a+a,h=o+o,u=r*c,p=r*d,g=r*h,b=a*d,m=a*h,f=o*h,v=l*c,y=l*d,_=l*h,k=n.x,R=n.y,A=n.z;return i[0]=(1-(b+f))*k,i[1]=(p+_)*k,i[2]=(g-y)*k,i[3]=0,i[4]=(p-_)*R,i[5]=(1-(u+f))*R,i[6]=(m+v)*R,i[7]=0,i[8]=(g+y)*A,i[9]=(m-v)*A,i[10]=(1-(u+b))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Bi.set(i[0],i[1],i[2]).length();const a=Bi.set(i[4],i[5],i[6]).length(),o=Bi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],ln.copy(this);const c=1/r,d=1/a,h=1/o;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=d,ln.elements[5]*=d,ln.elements[6]*=d,ln.elements[8]*=h,ln.elements[9]*=h,ln.elements[10]*=h,t.setFromRotationMatrix(ln),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Bn){const l=this.elements,c=2*r/(t-e),d=2*r/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i);let p,g;if(o===Bn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===xa)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Bn){const l=this.elements,c=1/(t-e),d=1/(n-i),h=1/(a-r),u=(t+e)*c,p=(n+i)*d;let g,b;if(o===Bn)g=(a+r)*h,b=-2*h;else if(o===xa)g=r*h,b=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=b,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Bi=new P,ln=new ke,Xf=new P(0,0,0),qf=new P(1,1,1),$n=new P,Sr=new P,Wt=new P,wc=new ke,Rc=new sn;class Mn{constructor(e=0,t=0,n=0,i=Mn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],d=i[9],h=i[2],u=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rc.setFromEuler(this),this.setFromQuaternion(Rc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mn.DEFAULT_ORDER="XYZ";class Fl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Kf=0;const kc=new P,zi=new sn,Cn=new ke,Er=new P,Ds=new P,Yf=new P,$f=new sn,Cc=new P(1,0,0),Pc=new P(0,1,0),Lc=new P(0,0,1),Ic={type:"added"},Zf={type:"removed"},Hi={type:"childadded",child:null},Ga={type:"childremoved",child:null};class lt extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=un(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=lt.DEFAULT_UP.clone();const e=new P,t=new Mn,n=new sn,i=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ke},normalMatrix:{value:new De}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.multiply(zi),this}rotateOnWorldAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.premultiply(zi),this}rotateX(e){return this.rotateOnAxis(Cc,e)}rotateY(e){return this.rotateOnAxis(Pc,e)}rotateZ(e){return this.rotateOnAxis(Lc,e)}translateOnAxis(e,t){return kc.copy(e).applyQuaternion(this.quaternion),this.position.add(kc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cc,e)}translateY(e){return this.translateOnAxis(Pc,e)}translateZ(e){return this.translateOnAxis(Lc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Er.copy(e):Er.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(Ds,Er,this.up):Cn.lookAt(Er,Ds,this.up),this.quaternion.setFromRotationMatrix(Cn),i&&(Cn.extractRotation(i.matrixWorld),zi.setFromRotationMatrix(Cn),this.quaternion.premultiply(zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ic),Hi.child=e,this.dispatchEvent(Hi),Hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zf),Ga.child=e,this.dispatchEvent(Ga),Ga.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ic),Hi.child=e,this.dispatchEvent(Hi),Hi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,e,Yf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,$f,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),h=a(e.shapes),u=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}lt.DEFAULT_UP=new P(0,1,0);lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cn=new P,Pn=new P,Va=new P,Ln=new P,Gi=new P,Vi=new P,Dc=new P,ja=new P,Wa=new P,Xa=new P,qa=new Ke,Ka=new Ke,Ya=new Ke;class en{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),cn.subVectors(e,t),i.cross(cn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){cn.subVectors(i,t),Pn.subVectors(n,t),Va.subVectors(e,t);const a=cn.dot(cn),o=cn.dot(Pn),l=cn.dot(Va),c=Pn.dot(Pn),d=Pn.dot(Va),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const u=1/h,p=(c*l-o*d)*u,g=(a*d-o*l)*u;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ln.x),l.addScaledVector(a,Ln.y),l.addScaledVector(o,Ln.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return qa.setScalar(0),Ka.setScalar(0),Ya.setScalar(0),qa.fromBufferAttribute(e,t),Ka.fromBufferAttribute(e,n),Ya.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(qa,r.x),a.addScaledVector(Ka,r.y),a.addScaledVector(Ya,r.z),a}static isFrontFacing(e,t,n,i){return cn.subVectors(n,t),Pn.subVectors(e,t),cn.cross(Pn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),cn.cross(Pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return en.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Gi.subVectors(i,n),Vi.subVectors(r,n),ja.subVectors(e,n);const l=Gi.dot(ja),c=Vi.dot(ja);if(l<=0&&c<=0)return t.copy(n);Wa.subVectors(e,i);const d=Gi.dot(Wa),h=Vi.dot(Wa);if(d>=0&&h<=d)return t.copy(i);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(Gi,a);Xa.subVectors(e,r);const p=Gi.dot(Xa),g=Vi.dot(Xa);if(g>=0&&p<=g)return t.copy(r);const b=p*c-l*g;if(b<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Vi,o);const m=d*g-p*h;if(m<=0&&h-d>=0&&p-g>=0)return Dc.subVectors(r,i),o=(h-d)/(h-d+(p-g)),t.copy(i).addScaledVector(Dc,o);const f=1/(m+b+u);return a=b*f,o=u*f,t.copy(n).addScaledVector(Gi,a).addScaledVector(Vi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ld={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},Tr={h:0,s:0,l:0};function $a(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class me{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Be.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Be.workingColorSpace){return this.r=e,this.g=t,this.b=n,Be.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Be.workingColorSpace){if(e=Nl(e,1),t=Rt(t,0,1),n=Rt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=$a(a,r,e+1/3),this.g=$a(a,r,e),this.b=$a(a,r,e-1/3)}return Be.toWorkingColorSpace(this,i),this}setStyle(e,t=ut){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ut){const n=Ld[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hn(e.r),this.g=Hn(e.g),this.b=Hn(e.b),this}copyLinearToSRGB(e){return this.r=cs(e.r),this.g=cs(e.g),this.b=cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ut){return Be.fromWorkingColorSpace(At.copy(this),e),Math.round(Rt(At.r*255,0,255))*65536+Math.round(Rt(At.g*255,0,255))*256+Math.round(Rt(At.b*255,0,255))}getHexString(e=ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Be.workingColorSpace){Be.fromWorkingColorSpace(At.copy(this),t);const n=At.r,i=At.g,r=At.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=d<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Be.workingColorSpace){return Be.fromWorkingColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=ut){Be.fromWorkingColorSpace(At.copy(this),e);const t=At.r,n=At.g,i=At.b;return e!==ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Zn),this.setHSL(Zn.h+e,Zn.s+t,Zn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Zn),e.getHSL(Tr);const n=Js(Zn.h,Tr.h,t),i=Js(Zn.s,Tr.s,t),r=Js(Zn.l,Tr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new me;me.NAMES=Ld;let Jf=0;class fn extends Pi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=un(),this.name="",this.blending=Ai,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ko,this.blendDst=Co,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Di,this.stencilZFail=Di,this.stencilZPass=Di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ai&&(n.blending=this.blending),this.side!==Vn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ko&&(n.blendSrc=this.blendSrc),this.blendDst!==Co&&(n.blendDst=this.blendDst),this.blendEquation!==Ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ds&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ht extends fn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=dd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new P,Ar=new Ae;class Ct{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ul,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ar.fromBufferAttribute(this,t),Ar.applyMatrix3(e),this.setXY(t,Ar.x,Ar.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hn(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hn(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hn(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),r=et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ul&&(e.usage=this.usage),e}}class Id extends Ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Dd extends Ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class yt extends Ct{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Qf=0;const Zt=new ke,Za=new lt,ji=new P,Xt=new Kt,Us=new Kt,xt=new P;class Vt extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=un(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kd(e)?Dd:Id)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new De().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return Za.lookAt(e),Za.updateMatrix(),this.applyMatrix4(Za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new yt(n,3))}else{for(let n=0,i=t.count;n<i;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Xt.setFromBufferAttribute(r),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(Xt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Us.setFromBufferAttribute(o),this.morphTargetsRelative?(xt.addVectors(Xt.min,Us.min),Xt.expandByPoint(xt),xt.addVectors(Xt.max,Us.max),Xt.expandByPoint(xt)):(Xt.expandByPoint(Us.min),Xt.expandByPoint(Us.max))}Xt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)xt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(xt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)xt.fromBufferAttribute(o,c),l&&(ji.fromBufferAttribute(e,c),xt.add(ji)),i=Math.max(i,n.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ct(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let T=0;T<n.count;T++)o[T]=new P,l[T]=new P;const c=new P,d=new P,h=new P,u=new Ae,p=new Ae,g=new Ae,b=new P,m=new P;function f(T,x,M){c.fromBufferAttribute(n,T),d.fromBufferAttribute(n,x),h.fromBufferAttribute(n,M),u.fromBufferAttribute(r,T),p.fromBufferAttribute(r,x),g.fromBufferAttribute(r,M),d.sub(c),h.sub(c),p.sub(u),g.sub(u);const w=1/(p.x*g.y-g.x*p.y);isFinite(w)&&(b.copy(d).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(w),m.copy(h).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(w),o[T].add(b),o[x].add(b),o[M].add(b),l[T].add(m),l[x].add(m),l[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let T=0,x=v.length;T<x;++T){const M=v[T],w=M.start,L=M.count;for(let F=w,B=w+L;F<B;F+=3)f(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const y=new P,_=new P,k=new P,R=new P;function A(T){k.fromBufferAttribute(i,T),R.copy(k);const x=o[T];y.copy(x),y.sub(k.multiplyScalar(k.dot(x))).normalize(),_.crossVectors(R,x);const w=_.dot(l[T])<0?-1:1;a.setXYZW(T,y.x,y.y,y.z,w)}for(let T=0,x=v.length;T<x;++T){const M=v[T],w=M.start,L=M.count;for(let F=w,B=w+L;F<B;F+=3)A(e.getX(F+0)),A(e.getX(F+1)),A(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const i=new P,r=new P,a=new P,o=new P,l=new P,c=new P,d=new P,h=new P;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),b=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,m),d.subVectors(a,r),h.subVectors(i,r),d.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,m),o.add(d),l.add(d),c.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),d.subVectors(a,r),h.subVectors(i,r),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,h=o.normalized,u=new c.constructor(l.length*d);let p=0,g=0;for(let b=0,m=l.length;b<m;b++){o.isInterleavedBufferAttribute?p=l[b]*o.data.stride+o.offset:p=l[b]*d;for(let f=0;f<d;f++)u[g++]=c[p++]}return new Ct(u,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,h=c.length;d<h;d++){const u=c[d],p=e(u,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const p=c[h];d.push(p.toJSON(e.data))}d.length>0&&(i[l]=d,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const d=i[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],h=r[c];for(let u=0,p=h.length;u<p;u++)d.push(h[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Uc=new ke,mi=new ur,wr=new Sn,Nc=new P,Rr=new P,kr=new P,Cr=new P,Ja=new P,Pr=new P,Fc=new P,Lr=new P;class ct extends lt{constructor(e=new Vt,t=new Ht){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Pr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],h=r[l];d!==0&&(Ja.fromBufferAttribute(h,e),a?Pr.addScaledVector(Ja,d):Pr.addScaledVector(Ja.sub(t),d))}t.add(Pr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere),wr.applyMatrix4(r),mi.copy(e.ray).recast(e.near),!(wr.containsPoint(mi.origin)===!1&&(mi.intersectSphere(wr,Nc)===null||mi.origin.distanceToSquared(Nc)>(e.far-e.near)**2))&&(Uc.copy(r).invert(),mi.copy(e.ray).applyMatrix4(Uc),!(n.boundingBox!==null&&mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,mi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,b=u.length;g<b;g++){const m=u[g],f=a[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=v,k=y;_<k;_+=3){const R=o.getX(_),A=o.getX(_+1),T=o.getX(_+2);i=Ir(this,f,e,n,c,d,h,R,A,T),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),b=Math.min(o.count,p.start+p.count);for(let m=g,f=b;m<f;m+=3){const v=o.getX(m),y=o.getX(m+1),_=o.getX(m+2);i=Ir(this,a,e,n,c,d,h,v,y,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,b=u.length;g<b;g++){const m=u[g],f=a[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=v,k=y;_<k;_+=3){const R=_,A=_+1,T=_+2;i=Ir(this,f,e,n,c,d,h,R,A,T),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),b=Math.min(l.count,p.start+p.count);for(let m=g,f=b;m<f;m+=3){const v=m,y=m+1,_=m+2;i=Ir(this,a,e,n,c,d,h,v,y,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function ep(s,e,t,n,i,r,a,o){let l;if(e.side===Gt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Vn,o),l===null)return null;Lr.copy(o),Lr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Lr);return c<t.near||c>t.far?null:{distance:c,point:Lr.clone(),object:s}}function Ir(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Rr),s.getVertexPosition(l,kr),s.getVertexPosition(c,Cr);const d=ep(s,e,t,n,Rr,kr,Cr,Fc);if(d){const h=new P;en.getBarycoord(Fc,Rr,kr,Cr,h),i&&(d.uv=en.getInterpolatedAttribute(i,o,l,c,h,new Ae)),r&&(d.uv1=en.getInterpolatedAttribute(r,o,l,c,h,new Ae)),a&&(d.normal=en.getInterpolatedAttribute(a,o,l,c,h,new P),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new P,materialIndex:0};en.getNormal(Rr,kr,Cr,u.normal),d.face=u,d.barycoord=h}return d}class fr extends Vt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],d=[],h=[];let u=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(d,3)),this.setAttribute("uv",new yt(h,2));function g(b,m,f,v,y,_,k,R,A,T,x){const M=_/A,w=k/T,L=_/2,F=k/2,B=R/2,V=A+1,H=T+1;let Z=0,j=0;const ie=new P;for(let de=0;de<H;de++){const xe=de*w-F;for(let Fe=0;Fe<V;Fe++){const Je=Fe*M-L;ie[b]=Je*v,ie[m]=xe*y,ie[f]=B,c.push(ie.x,ie.y,ie.z),ie[b]=0,ie[m]=0,ie[f]=R>0?1:-1,d.push(ie.x,ie.y,ie.z),h.push(Fe/A),h.push(1-de/T),Z+=1}}for(let de=0;de<T;de++)for(let xe=0;xe<A;xe++){const Fe=u+xe+V*de,Je=u+xe+V*(de+1),q=u+(xe+1)+V*(de+1),Q=u+(xe+1)+V*de;l.push(Fe,Je,Q),l.push(Je,q,Q),j+=6}o.addGroup(p,j,x),p+=j,u+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _s(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Lt(s){const e={};for(let t=0;t<s.length;t++){const n=_s(s[t]);for(const i in n)e[i]=n[i]}return e}function tp(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Ud(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Be.workingColorSpace}const np={clone:_s,merge:Lt};var ip=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends fn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ip,this.fragmentShader=sp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_s(e.uniforms),this.uniformsGroups=tp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Nd extends lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=Bn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Jn=new P,Oc=new Ae,Bc=new Ae;class kt extends Nd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bs*2*Math.atan(Math.tan(Zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z),Jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Jn.x,Jn.y).multiplyScalar(-e/Jn.z)}getViewSize(e,t){return this.getViewBounds(e,Oc,Bc),t.subVectors(Bc,Oc)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Wi=-90,Xi=1;class rp extends lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new kt(Wi,Xi,e,t);i.layers=this.layers,this.add(i);const r=new kt(Wi,Xi,e,t);r.layers=this.layers,this.add(r);const a=new kt(Wi,Xi,e,t);a.layers=this.layers,this.add(a);const o=new kt(Wi,Xi,e,t);o.layers=this.layers,this.add(o);const l=new kt(Wi,Xi,e,t);l.layers=this.layers,this.add(l);const c=new kt(Wi,Xi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,d]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,i),e.render(t,d),e.setRenderTarget(h,u,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Fd extends bt{constructor(e,t,n,i,r,a,o,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:us,super(e,t,n,i,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ap extends hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Fd(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new fr(5,5,5),r=new di({name:"CubemapFromEquirect",uniforms:_s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gt,blending:li});r.uniforms.tEquirect.value=t;const a=new ct(i,r),o=t.minFilter;return t.minFilter===On&&(t.minFilter=zt),new rp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Qa=new P,op=new P,lp=new De;class ii{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Qa.subVectors(n,t).cross(op.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Qa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||lp.getNormalMatrix(e),i=this.coplanarPoint(Qa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gi=new Sn,Dr=new P;class Ol{constructor(e=new ii,t=new ii,n=new ii,i=new ii,r=new ii,a=new ii){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Bn){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],d=i[5],h=i[6],u=i[7],p=i[8],g=i[9],b=i[10],m=i[11],f=i[12],v=i[13],y=i[14],_=i[15];if(n[0].setComponents(l-r,u-c,m-p,_-f).normalize(),n[1].setComponents(l+r,u+c,m+p,_+f).normalize(),n[2].setComponents(l+a,u+d,m+g,_+v).normalize(),n[3].setComponents(l-a,u-d,m-g,_-v).normalize(),n[4].setComponents(l-o,u-h,m-b,_-y).normalize(),t===Bn)n[5].setComponents(l+o,u+h,m+b,_+y).normalize();else if(t===xa)n[5].setComponents(o,h,b,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(e){return gi.center.set(0,0,0),gi.radius=.7071067811865476,gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Dr.x=i.normal.x>0?e.max.x:e.min.x,Dr.y=i.normal.y>0?e.max.y:e.min.y,Dr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Dr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Od(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function cp(s){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,h=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const d=l.array,h=l.updateRanges;if(s.bindBuffer(c,o),h.length===0)s.bufferSubData(c,0,d);else{h.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<h.length;p++){const g=h[u],b=h[p];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++u,h[u]=b)}h.length=u+1;for(let p=0,g=h.length;p<g;p++){const b=h[p];s.bufferSubData(c,b.start*d.BYTES_PER_ELEMENT,d,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}class Li extends Vt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,d=l+1,h=e/o,u=t/l,p=[],g=[],b=[],m=[];for(let f=0;f<d;f++){const v=f*u-a;for(let y=0;y<c;y++){const _=y*h-r;g.push(_,-v,0),b.push(0,0,1),m.push(y/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<o;v++){const y=v+c*f,_=v+c*(f+1),k=v+1+c*(f+1),R=v+1+c*f;p.push(y,_,R),p.push(_,k,R)}this.setIndex(p),this.setAttribute("position",new yt(g,3)),this.setAttribute("normal",new yt(b,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Li(e.width,e.height,e.widthSegments,e.heightSegments)}}var hp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dp=`#ifdef USE_ALPHAHASH
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
#endif`,up=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gp=`#ifdef USE_AOMAP
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
#endif`,bp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_p=`#ifdef USE_BATCHING
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
#endif`,vp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sp=`#ifdef USE_IRIDESCENCE
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
#endif`,Ep=`#ifdef USE_BUMPMAP
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
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Lp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ip=`#define PI 3.141592653589793
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
} // validated`,Dp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Up=`vec3 transformedNormal = objectNormal;
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
#endif`,Np=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Op=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gp=`#ifdef USE_ENVMAP
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
#endif`,Vp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jp=`#ifdef USE_ENVMAP
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
#endif`,Wp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xp=`#ifdef USE_ENVMAP
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
#endif`,qp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$p=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zp=`#ifdef USE_GRADIENTMAP
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
}`,Jp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,em=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tm=`uniform bool receiveShadow;
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
#endif`,nm=`#ifdef USE_ENVMAP
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
#endif`,im=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,am=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,om=`PhysicalMaterial material;
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
#endif`,lm=`struct PhysicalMaterial {
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
}`,cm=`
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
#endif`,hm=`#if defined( RE_IndirectDiffuse )
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
#endif`,dm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,um=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_m=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vm=`#if defined( USE_POINTS_UV )
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
#endif`,xm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ym=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Em=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tm=`#ifdef USE_MORPHTARGETS
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
#endif`,Am=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Rm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lm=`#ifdef USE_NORMALMAP
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
#endif`,Im=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Um=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Om=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Km=`float getShadowMask() {
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
}`,Ym=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$m=`#ifdef USE_SKINNING
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
#endif`,Zm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jm=`#ifdef USE_SKINNING
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
#endif`,Qm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ng=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ig=`#ifdef USE_TRANSMISSION
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
#endif`,sg=`#ifdef USE_TRANSMISSION
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
#endif`,rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hg=`uniform sampler2D t2D;
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
}`,dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ug=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mg=`#include <common>
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
}`,gg=`#if DEPTH_PACKING == 3200
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
}`,bg=`#define DISTANCE
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
}`,_g=`#define DISTANCE
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
}`,vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yg=`uniform float scale;
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
}`,Mg=`uniform vec3 diffuse;
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
}`,Sg=`#include <common>
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
}`,Eg=`uniform vec3 diffuse;
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
}`,Tg=`#define LAMBERT
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
}`,Ag=`#define LAMBERT
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
}`,wg=`#define MATCAP
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
}`,Rg=`#define MATCAP
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
}`,kg=`#define NORMAL
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
}`,Cg=`#define NORMAL
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
}`,Pg=`#define PHONG
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
}`,Lg=`#define PHONG
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
}`,Ig=`#define STANDARD
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
}`,Dg=`#define STANDARD
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
}`,Ug=`#define TOON
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
}`,Ng=`#define TOON
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
}`,Fg=`uniform float size;
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
}`,Og=`uniform vec3 diffuse;
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
}`,Bg=`#include <common>
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
}`,zg=`uniform vec3 color;
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
}`,Hg=`uniform float rotation;
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
}`,Gg=`uniform vec3 diffuse;
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
}`,Ne={alphahash_fragment:hp,alphahash_pars_fragment:dp,alphamap_fragment:up,alphamap_pars_fragment:fp,alphatest_fragment:pp,alphatest_pars_fragment:mp,aomap_fragment:gp,aomap_pars_fragment:bp,batching_pars_vertex:_p,batching_vertex:vp,begin_vertex:xp,beginnormal_vertex:yp,bsdfs:Mp,iridescence_fragment:Sp,bumpmap_pars_fragment:Ep,clipping_planes_fragment:Tp,clipping_planes_pars_fragment:Ap,clipping_planes_pars_vertex:wp,clipping_planes_vertex:Rp,color_fragment:kp,color_pars_fragment:Cp,color_pars_vertex:Pp,color_vertex:Lp,common:Ip,cube_uv_reflection_fragment:Dp,defaultnormal_vertex:Up,displacementmap_pars_vertex:Np,displacementmap_vertex:Fp,emissivemap_fragment:Op,emissivemap_pars_fragment:Bp,colorspace_fragment:zp,colorspace_pars_fragment:Hp,envmap_fragment:Gp,envmap_common_pars_fragment:Vp,envmap_pars_fragment:jp,envmap_pars_vertex:Wp,envmap_physical_pars_fragment:nm,envmap_vertex:Xp,fog_vertex:qp,fog_pars_vertex:Kp,fog_fragment:Yp,fog_pars_fragment:$p,gradientmap_pars_fragment:Zp,lightmap_pars_fragment:Jp,lights_lambert_fragment:Qp,lights_lambert_pars_fragment:em,lights_pars_begin:tm,lights_toon_fragment:im,lights_toon_pars_fragment:sm,lights_phong_fragment:rm,lights_phong_pars_fragment:am,lights_physical_fragment:om,lights_physical_pars_fragment:lm,lights_fragment_begin:cm,lights_fragment_maps:hm,lights_fragment_end:dm,logdepthbuf_fragment:um,logdepthbuf_pars_fragment:fm,logdepthbuf_pars_vertex:pm,logdepthbuf_vertex:mm,map_fragment:gm,map_pars_fragment:bm,map_particle_fragment:_m,map_particle_pars_fragment:vm,metalnessmap_fragment:xm,metalnessmap_pars_fragment:ym,morphinstance_vertex:Mm,morphcolor_vertex:Sm,morphnormal_vertex:Em,morphtarget_pars_vertex:Tm,morphtarget_vertex:Am,normal_fragment_begin:wm,normal_fragment_maps:Rm,normal_pars_fragment:km,normal_pars_vertex:Cm,normal_vertex:Pm,normalmap_pars_fragment:Lm,clearcoat_normal_fragment_begin:Im,clearcoat_normal_fragment_maps:Dm,clearcoat_pars_fragment:Um,iridescence_pars_fragment:Nm,opaque_fragment:Fm,packing:Om,premultiplied_alpha_fragment:Bm,project_vertex:zm,dithering_fragment:Hm,dithering_pars_fragment:Gm,roughnessmap_fragment:Vm,roughnessmap_pars_fragment:jm,shadowmap_pars_fragment:Wm,shadowmap_pars_vertex:Xm,shadowmap_vertex:qm,shadowmask_pars_fragment:Km,skinbase_vertex:Ym,skinning_pars_vertex:$m,skinning_vertex:Zm,skinnormal_vertex:Jm,specularmap_fragment:Qm,specularmap_pars_fragment:eg,tonemapping_fragment:tg,tonemapping_pars_fragment:ng,transmission_fragment:ig,transmission_pars_fragment:sg,uv_pars_fragment:rg,uv_pars_vertex:ag,uv_vertex:og,worldpos_vertex:lg,background_vert:cg,background_frag:hg,backgroundCube_vert:dg,backgroundCube_frag:ug,cube_vert:fg,cube_frag:pg,depth_vert:mg,depth_frag:gg,distanceRGBA_vert:bg,distanceRGBA_frag:_g,equirect_vert:vg,equirect_frag:xg,linedashed_vert:yg,linedashed_frag:Mg,meshbasic_vert:Sg,meshbasic_frag:Eg,meshlambert_vert:Tg,meshlambert_frag:Ag,meshmatcap_vert:wg,meshmatcap_frag:Rg,meshnormal_vert:kg,meshnormal_frag:Cg,meshphong_vert:Pg,meshphong_frag:Lg,meshphysical_vert:Ig,meshphysical_frag:Dg,meshtoon_vert:Ug,meshtoon_frag:Ng,points_vert:Fg,points_frag:Og,shadow_vert:Bg,shadow_frag:zg,sprite_vert:Hg,sprite_frag:Gg},ne={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},bn={basic:{uniforms:Lt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Lt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new me(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Lt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Lt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Lt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new me(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Lt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Lt([ne.points,ne.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Lt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Lt([ne.common,ne.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Lt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Lt([ne.sprite,ne.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:Lt([ne.common,ne.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:Lt([ne.lights,ne.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};bn.physical={uniforms:Lt([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const Ur={r:0,b:0,g:0},bi=new Mn,Vg=new ke;function jg(s,e,t,n,i,r,a){const o=new me(0);let l=r===!0?0:1,c,d,h=null,u=0,p=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y)),y}function b(v){let y=!1;const _=g(v);_===null?f(o,l):_&&_.isColor&&(f(_,1),y=!0);const k=s.xr.getEnvironmentBlendMode();k==="additive"?n.buffers.color.setClear(0,0,0,1,a):k==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(v,y){const _=g(y);_&&(_.isCubeTexture||_.mapping===Ea)?(d===void 0&&(d=new ct(new fr(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:_s(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(k,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),bi.copy(y.backgroundRotation),bi.x*=-1,bi.y*=-1,bi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),d.material.uniforms.envMap.value=_,d.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Vg.makeRotationFromEuler(bi)),d.material.toneMapped=Be.getTransfer(_.colorSpace)!==tt,(h!==_||u!==_.version||p!==s.toneMapping)&&(d.material.needsUpdate=!0,h=_,u=_.version,p=s.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new ct(new Li(2,2),new di({name:"BackgroundMaterial",uniforms:_s(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Be.getTransfer(_.colorSpace)!==tt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,h=_,u=_.version,p=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function f(v,y){v.getRGB(Ur,Ud(s)),n.buffers.color.setClear(Ur.r,Ur.g,Ur.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),l=y,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,f(o,l)},render:b,addToRenderList:m}}function Wg(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,a=!1;function o(M,w,L,F,B){let V=!1;const H=h(F,L,w);r!==H&&(r=H,c(r.object)),V=p(M,F,L,B),V&&g(M,F,L,B),B!==null&&e.update(B,s.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,_(M,w,L,F),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function d(M){return s.deleteVertexArray(M)}function h(M,w,L){const F=L.wireframe===!0;let B=n[M.id];B===void 0&&(B={},n[M.id]=B);let V=B[w.id];V===void 0&&(V={},B[w.id]=V);let H=V[F];return H===void 0&&(H=u(l()),V[F]=H),H}function u(M){const w=[],L=[],F=[];for(let B=0;B<t;B++)w[B]=0,L[B]=0,F[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:L,attributeDivisors:F,object:M,attributes:{},index:null}}function p(M,w,L,F){const B=r.attributes,V=w.attributes;let H=0;const Z=L.getAttributes();for(const j in Z)if(Z[j].location>=0){const de=B[j];let xe=V[j];if(xe===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(xe=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(xe=M.instanceColor)),de===void 0||de.attribute!==xe||xe&&de.data!==xe.data)return!0;H++}return r.attributesNum!==H||r.index!==F}function g(M,w,L,F){const B={},V=w.attributes;let H=0;const Z=L.getAttributes();for(const j in Z)if(Z[j].location>=0){let de=V[j];de===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(de=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(de=M.instanceColor));const xe={};xe.attribute=de,de&&de.data&&(xe.data=de.data),B[j]=xe,H++}r.attributes=B,r.attributesNum=H,r.index=F}function b(){const M=r.newAttributes;for(let w=0,L=M.length;w<L;w++)M[w]=0}function m(M){f(M,0)}function f(M,w){const L=r.newAttributes,F=r.enabledAttributes,B=r.attributeDivisors;L[M]=1,F[M]===0&&(s.enableVertexAttribArray(M),F[M]=1),B[M]!==w&&(s.vertexAttribDivisor(M,w),B[M]=w)}function v(){const M=r.newAttributes,w=r.enabledAttributes;for(let L=0,F=w.length;L<F;L++)w[L]!==M[L]&&(s.disableVertexAttribArray(L),w[L]=0)}function y(M,w,L,F,B,V,H){H===!0?s.vertexAttribIPointer(M,w,L,B,V):s.vertexAttribPointer(M,w,L,F,B,V)}function _(M,w,L,F){b();const B=F.attributes,V=L.getAttributes(),H=w.defaultAttributeValues;for(const Z in V){const j=V[Z];if(j.location>=0){let ie=B[Z];if(ie===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(ie=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(ie=M.instanceColor)),ie!==void 0){const de=ie.normalized,xe=ie.itemSize,Fe=e.get(ie);if(Fe===void 0)continue;const Je=Fe.buffer,q=Fe.type,Q=Fe.bytesPerElement,ge=q===s.INT||q===s.UNSIGNED_INT||ie.gpuType===kl;if(ie.isInterleavedBufferAttribute){const se=ie.data,Se=se.stride,re=ie.offset;if(se.isInstancedInterleavedBuffer){for(let Re=0;Re<j.locationSize;Re++)f(j.location+Re,se.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Re=0;Re<j.locationSize;Re++)m(j.location+Re);s.bindBuffer(s.ARRAY_BUFFER,Je);for(let Re=0;Re<j.locationSize;Re++)y(j.location+Re,xe/j.locationSize,q,de,Se*Q,(re+xe/j.locationSize*Re)*Q,ge)}else{if(ie.isInstancedBufferAttribute){for(let se=0;se<j.locationSize;se++)f(j.location+se,ie.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let se=0;se<j.locationSize;se++)m(j.location+se);s.bindBuffer(s.ARRAY_BUFFER,Je);for(let se=0;se<j.locationSize;se++)y(j.location+se,xe/j.locationSize,q,de,xe*Q,xe/j.locationSize*se*Q,ge)}}else if(H!==void 0){const de=H[Z];if(de!==void 0)switch(de.length){case 2:s.vertexAttrib2fv(j.location,de);break;case 3:s.vertexAttrib3fv(j.location,de);break;case 4:s.vertexAttrib4fv(j.location,de);break;default:s.vertexAttrib1fv(j.location,de)}}}}v()}function k(){T();for(const M in n){const w=n[M];for(const L in w){const F=w[L];for(const B in F)d(F[B].object),delete F[B];delete w[L]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;const w=n[M.id];for(const L in w){const F=w[L];for(const B in F)d(F[B].object),delete F[B];delete w[L]}delete n[M.id]}function A(M){for(const w in n){const L=n[w];if(L[M.id]===void 0)continue;const F=L[M.id];for(const B in F)d(F[B].object),delete F[B];delete L[M.id]}}function T(){x(),a=!0,r!==i&&(r=i,c(r.object))}function x(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:T,resetDefaultState:x,dispose:k,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:b,enableAttribute:m,disableUnusedAttributes:v}}function Xg(s,e,t){let n;function i(c){n=c}function r(c,d){s.drawArrays(n,c,d),t.update(d,n,1)}function a(c,d,h){h!==0&&(s.drawArraysInstanced(n,c,d,h),t.update(d,n,h))}function o(c,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,h);let p=0;for(let g=0;g<h;g++)p+=d[g];t.update(p,n,1)}function l(c,d,h,u){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],d[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,d,0,u,0,h);let g=0;for(let b=0;b<h;b++)g+=d[b]*u[b];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function qg(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==tn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const T=A===dr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==jn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==dn&&!T)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),k=g>0,R=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:k,maxSamples:R}}function Kg(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new ii,o=new De,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const p=h.length!==0||u||n!==0||i;return i=u,n=h.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){t=d(h,u,0)},this.setState=function(h,u,p){const g=h.clippingPlanes,b=h.clipIntersection,m=h.clipShadows,f=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?d(null):c();else{const v=r?0:n,y=v*4;let _=f.clippingState||null;l.value=_,_=d(g,u,y,p);for(let k=0;k!==y;++k)_[k]=t[k];f.clippingState=_,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,u,p,g){const b=h!==null?h.length:0;let m=null;if(b!==0){if(m=l.value,g!==!0||m===null){const f=p+b*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,_=p;y!==b;++y,_+=4)a.copy(h[y]).applyMatrix4(v,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}function Yg(s){let e=new WeakMap;function t(a,o){return o===Fo?a.mapping=us:o===Oo&&(a.mapping=fs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Fo||o===Oo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ap(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Bl extends Nd{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const rs=4,zc=[.125,.215,.35,.446,.526,.582],Ti=20,eo=new Bl,Hc=new me;let to=null,no=0,io=0,so=!1;const Mi=(1+Math.sqrt(5))/2,qi=1/Mi,Gc=[new P(-Mi,qi,0),new P(Mi,qi,0),new P(-qi,0,Mi),new P(qi,0,Mi),new P(0,Mi,-qi),new P(0,Mi,qi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class Vc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){to=this._renderer.getRenderTarget(),no=this._renderer.getActiveCubeFace(),io=this._renderer.getActiveMipmapLevel(),so=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(to,no,io),this._renderer.xr.enabled=so,e.scissorTest=!1,Nr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===us||e.mapping===fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),to=this._renderer.getRenderTarget(),no=this._renderer.getActiveCubeFace(),io=this._renderer.getActiveMipmapLevel(),so=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:dr,format:tn,colorSpace:Ut,depthBuffer:!1},i=jc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$g(r)),this._blurMaterial=Zg(r,e,t)}return i}_compileMaterial(e){const t=new ct(this._lodPlanes[0],e);this._renderer.compile(t,eo)}_sceneToCubeUV(e,t,n,i){const o=new kt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,u=d.toneMapping;d.getClearColor(Hc),d.toneMapping=ci,d.autoClear=!1;const p=new Ht({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),g=new ct(new fr,p);let b=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,b=!0):(p.color.copy(Hc),b=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):v===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const y=this._cubeSize;Nr(i,v*y,f>2?y:0,y,y),d.setRenderTarget(i),b&&d.render(g,o),d.render(e,o)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=u,d.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===us||e.mapping===fs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wc());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new ct(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Nr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,eo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Gc[(i-r-1)%Gc.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new ct(this._lodPlanes[i],c),u=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ti-1),b=r/g,m=isFinite(r)?1+Math.floor(d*b):Ti;m>Ti&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ti}`);const f=[];let v=0;for(let A=0;A<Ti;++A){const T=A/b,x=Math.exp(-T*T/2);f.push(x),A===0?v+=x:A<m&&(v+=2*x)}for(let A=0;A<f.length;A++)f[A]=f[A]/v;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:y}=this;u.dTheta.value=g,u.mipInt.value=y-n;const _=this._sizeLods[i],k=3*_*(i>y-rs?i-y+rs:0),R=4*(this._cubeSize-_);Nr(t,k,R,3*_,2*_),l.setRenderTarget(t),l.render(h,eo)}}function $g(s){const e=[],t=[],n=[];let i=s;const r=s-rs+1+zc.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-rs?l=zc[a-s+rs-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,h=1+c,u=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,g=6,b=3,m=2,f=1,v=new Float32Array(b*g*p),y=new Float32Array(m*g*p),_=new Float32Array(f*g*p);for(let R=0;R<p;R++){const A=R%3*2/3-1,T=R>2?0:-1,x=[A,T,0,A+2/3,T,0,A+2/3,T+1,0,A,T,0,A+2/3,T+1,0,A,T+1,0];v.set(x,b*g*R),y.set(u,m*g*R);const M=[R,R,R,R,R,R];_.set(M,f*g*R)}const k=new Vt;k.setAttribute("position",new Ct(v,b)),k.setAttribute("uv",new Ct(y,m)),k.setAttribute("faceIndex",new Ct(_,f)),e.push(k),i>rs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function jc(s,e,t){const n=new hi(s,e,t);return n.texture.mapping=Ea,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Nr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Zg(s,e,t){const n=new Float32Array(Ti),i=new P(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:zl(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Wc(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zl(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Xc(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function zl(){return`

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
	`}function Jg(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Fo||l===Oo,d=l===us||l===fs;if(c||d){let h=e.get(o);const u=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new Vc(s)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||d&&p&&i(p)?(t===null&&(t=new Vc(s)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Qg(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ks("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function eb(s,e,t,n){const i={},r=new WeakMap;function a(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const b=u.morphAttributes[g];for(let m=0,f=b.length;m<f;m++)e.remove(b[m])}u.removeEventListener("dispose",a),delete i[u.id];const p=r.get(u);p&&(e.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(h,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function l(h){const u=h.attributes;for(const g in u)e.update(u[g],s.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const b=p[g];for(let m=0,f=b.length;m<f;m++)e.update(b[m],s.ARRAY_BUFFER)}}function c(h){const u=[],p=h.index,g=h.attributes.position;let b=0;if(p!==null){const v=p.array;b=p.version;for(let y=0,_=v.length;y<_;y+=3){const k=v[y+0],R=v[y+1],A=v[y+2];u.push(k,R,R,A,A,k)}}else if(g!==void 0){const v=g.array;b=g.version;for(let y=0,_=v.length/3-1;y<_;y+=3){const k=y+0,R=y+1,A=y+2;u.push(k,R,R,A,A,k)}}else return;const m=new(kd(u)?Dd:Id)(u,1);m.version=b;const f=r.get(h);f&&e.remove(f),r.set(h,m)}function d(h){const u=r.get(h);if(u){const p=h.index;p!==null&&u.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function tb(s,e,t){let n;function i(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,p){s.drawElements(n,p,r,u*a),t.update(p,n,1)}function c(u,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,u*a,g),t.update(p,n,g))}function d(u,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,u,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function h(u,p,g,b){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)c(u[f]/a,p[f],b[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,u,0,b,0,g);let f=0;for(let v=0;v<g;v++)f+=p[v]*b[v];t.update(f,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function nb(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ib(s,e,t){const n=new WeakMap,i=new Ke;function r(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let u=n.get(o);if(u===void 0||u.count!==h){let M=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var p=M;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let _=0;g===!0&&(_=1),b===!0&&(_=2),m===!0&&(_=3);let k=o.attributes.position.count*_,R=1;k>e.maxTextureSize&&(R=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const A=new Float32Array(k*R*4*h),T=new Pd(A,k,R,h);T.type=dn,T.needsUpdate=!0;const x=_*4;for(let w=0;w<h;w++){const L=f[w],F=v[w],B=y[w],V=k*R*4*w;for(let H=0;H<L.count;H++){const Z=H*x;g===!0&&(i.fromBufferAttribute(L,H),A[V+Z+0]=i.x,A[V+Z+1]=i.y,A[V+Z+2]=i.z,A[V+Z+3]=0),b===!0&&(i.fromBufferAttribute(F,H),A[V+Z+4]=i.x,A[V+Z+5]=i.y,A[V+Z+6]=i.z,A[V+Z+7]=0),m===!0&&(i.fromBufferAttribute(B,H),A[V+Z+8]=i.x,A[V+Z+9]=i.y,A[V+Z+10]=i.z,A[V+Z+11]=B.itemSize===4?i.w:1)}}u={count:h,texture:T,size:new Ae(k,R)},n.set(o,u),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const b=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",b),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function sb(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,d=l.geometry,h=e.get(l,d);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class Bd extends bt{constructor(e,t,n,i,r,a,o,l,c,d=os){if(d!==os&&d!==gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===os&&(n=ki),n===void 0&&d===gs&&(n=ms),super(null,i,r,a,o,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Dt,this.minFilter=l!==void 0?l:Dt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const zd=new bt,qc=new Bd(1,1),Hd=new Pd,Gd=new jf,Vd=new Fd,Kc=[],Yc=[],$c=new Float32Array(16),Zc=new Float32Array(9),Jc=new Float32Array(4);function Es(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Kc[i];if(r===void 0&&(r=new Float32Array(i),Kc[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function _t(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function vt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function wa(s,e){let t=Yc[e];t===void 0&&(t=new Int32Array(e),Yc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function rb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function ab(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;s.uniform2fv(this.addr,e),vt(t,e)}}function ob(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;s.uniform3fv(this.addr,e),vt(t,e)}}function lb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;s.uniform4fv(this.addr,e),vt(t,e)}}function cb(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;Jc.set(n),s.uniformMatrix2fv(this.addr,!1,Jc),vt(t,n)}}function hb(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;Zc.set(n),s.uniformMatrix3fv(this.addr,!1,Zc),vt(t,n)}}function db(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,n))return;$c.set(n),s.uniformMatrix4fv(this.addr,!1,$c),vt(t,n)}}function ub(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function fb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;s.uniform2iv(this.addr,e),vt(t,e)}}function pb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;s.uniform3iv(this.addr,e),vt(t,e)}}function mb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;s.uniform4iv(this.addr,e),vt(t,e)}}function gb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function bb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;s.uniform2uiv(this.addr,e),vt(t,e)}}function _b(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;s.uniform3uiv(this.addr,e),vt(t,e)}}function vb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;s.uniform4uiv(this.addr,e),vt(t,e)}}function xb(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(qc.compareFunction=Rd,r=qc):r=zd,t.setTexture2D(e||r,i)}function yb(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Gd,i)}function Mb(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Vd,i)}function Sb(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Hd,i)}function Eb(s){switch(s){case 5126:return rb;case 35664:return ab;case 35665:return ob;case 35666:return lb;case 35674:return cb;case 35675:return hb;case 35676:return db;case 5124:case 35670:return ub;case 35667:case 35671:return fb;case 35668:case 35672:return pb;case 35669:case 35673:return mb;case 5125:return gb;case 36294:return bb;case 36295:return _b;case 36296:return vb;case 35678:case 36198:case 36298:case 36306:case 35682:return xb;case 35679:case 36299:case 36307:return yb;case 35680:case 36300:case 36308:case 36293:return Mb;case 36289:case 36303:case 36311:case 36292:return Sb}}function Tb(s,e){s.uniform1fv(this.addr,e)}function Ab(s,e){const t=Es(e,this.size,2);s.uniform2fv(this.addr,t)}function wb(s,e){const t=Es(e,this.size,3);s.uniform3fv(this.addr,t)}function Rb(s,e){const t=Es(e,this.size,4);s.uniform4fv(this.addr,t)}function kb(s,e){const t=Es(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Cb(s,e){const t=Es(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Pb(s,e){const t=Es(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Lb(s,e){s.uniform1iv(this.addr,e)}function Ib(s,e){s.uniform2iv(this.addr,e)}function Db(s,e){s.uniform3iv(this.addr,e)}function Ub(s,e){s.uniform4iv(this.addr,e)}function Nb(s,e){s.uniform1uiv(this.addr,e)}function Fb(s,e){s.uniform2uiv(this.addr,e)}function Ob(s,e){s.uniform3uiv(this.addr,e)}function Bb(s,e){s.uniform4uiv(this.addr,e)}function zb(s,e,t){const n=this.cache,i=e.length,r=wa(t,i);_t(n,r)||(s.uniform1iv(this.addr,r),vt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||zd,r[a])}function Hb(s,e,t){const n=this.cache,i=e.length,r=wa(t,i);_t(n,r)||(s.uniform1iv(this.addr,r),vt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Gd,r[a])}function Gb(s,e,t){const n=this.cache,i=e.length,r=wa(t,i);_t(n,r)||(s.uniform1iv(this.addr,r),vt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Vd,r[a])}function Vb(s,e,t){const n=this.cache,i=e.length,r=wa(t,i);_t(n,r)||(s.uniform1iv(this.addr,r),vt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Hd,r[a])}function jb(s){switch(s){case 5126:return Tb;case 35664:return Ab;case 35665:return wb;case 35666:return Rb;case 35674:return kb;case 35675:return Cb;case 35676:return Pb;case 5124:case 35670:return Lb;case 35667:case 35671:return Ib;case 35668:case 35672:return Db;case 35669:case 35673:return Ub;case 5125:return Nb;case 36294:return Fb;case 36295:return Ob;case 36296:return Bb;case 35678:case 36198:case 36298:case 36306:case 35682:return zb;case 35679:case 36299:case 36307:return Hb;case 35680:case 36300:case 36308:case 36293:return Gb;case 36289:case 36303:case 36311:case 36292:return Vb}}class Wb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Eb(t.type)}}class Xb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jb(t.type)}}class qb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const ro=/(\w+)(\])?(\[|\.)?/g;function Qc(s,e){s.seq.push(e),s.map[e.id]=e}function Kb(s,e,t){const n=s.name,i=n.length;for(ro.lastIndex=0;;){const r=ro.exec(n),a=ro.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Qc(t,c===void 0?new Wb(o,s,e):new Xb(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new qb(o),Qc(t,h)),t=h}}}class ca{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Kb(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function eh(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Yb=37297;let $b=0;function Zb(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const th=new De;function Jb(s){Be._getMatrix(th,Be.workingColorSpace,s);const e=`mat3( ${th.elements.map(t=>t.toFixed(4))} )`;switch(Be.getTransfer(s)){case Aa:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function nh(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Zb(s.getShaderSource(e),a)}else return i}function Qb(s,e){const t=Jb(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function e_(s,e){let t;switch(e){case Qu:t="Linear";break;case ef:t="Reinhard";break;case tf:t="Cineon";break;case ud:t="ACESFilmic";break;case sf:t="AgX";break;case rf:t="Neutral";break;case nf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Fr=new P;function t_(){Be.getLuminanceCoefficients(Fr);const s=Fr.x.toFixed(4),e=Fr.y.toFixed(4),t=Fr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function n_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ys).join(`
`)}function i_(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function s_(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Ys(s){return s!==""}function ih(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sh(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const r_=/^[ \t]*#include +<([\w\d./]+)>/gm;function fl(s){return s.replace(r_,o_)}const a_=new Map;function o_(s,e){let t=Ne[e];if(t===void 0){const n=a_.get(e);if(n!==void 0)t=Ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return fl(t)}const l_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rh(s){return s.replace(l_,c_)}function c_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ah(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function h_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===cd?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===hd?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Un&&(e="SHADOWMAP_TYPE_VSM"),e}function d_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case us:case fs:e="ENVMAP_TYPE_CUBE";break;case Ea:e="ENVMAP_TYPE_CUBE_UV";break}return e}function u_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case fs:e="ENVMAP_MODE_REFRACTION";break}return e}function f_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case dd:e="ENVMAP_BLENDING_MULTIPLY";break;case Zu:e="ENVMAP_BLENDING_MIX";break;case Ju:e="ENVMAP_BLENDING_ADD";break}return e}function p_(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function m_(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=h_(t),c=d_(t),d=u_(t),h=f_(t),u=p_(t),p=n_(t),g=i_(r),b=i.createProgram();let m,f,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ys).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ys).join(`
`),f.length>0&&(f+=`
`)):(m=[ah(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ys).join(`
`),f=[ah(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ci?"#define TONE_MAPPING":"",t.toneMapping!==ci?Ne.tonemapping_pars_fragment:"",t.toneMapping!==ci?e_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,Qb("linearToOutputTexel",t.outputColorSpace),t_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ys).join(`
`)),a=fl(a),a=ih(a,t),a=sh(a,t),o=fl(o),o=ih(o,t),o=sh(o,t),a=rh(a),o=rh(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===_c?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_c?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=v+m+a,_=v+f+o,k=eh(i,i.VERTEX_SHADER,y),R=eh(i,i.FRAGMENT_SHADER,_);i.attachShader(b,k),i.attachShader(b,R),t.index0AttributeName!==void 0?i.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(b,0,"position"),i.linkProgram(b);function A(w){if(s.debug.checkShaderErrors){const L=i.getProgramInfoLog(b).trim(),F=i.getShaderInfoLog(k).trim(),B=i.getShaderInfoLog(R).trim();let V=!0,H=!0;if(i.getProgramParameter(b,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,b,k,R);else{const Z=nh(i,k,"vertex"),j=nh(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(b,i.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+L+`
`+Z+`
`+j)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(F===""||B==="")&&(H=!1);H&&(w.diagnostics={runnable:V,programLog:L,vertexShader:{log:F,prefix:m},fragmentShader:{log:B,prefix:f}})}i.deleteShader(k),i.deleteShader(R),T=new ca(i,b),x=s_(i,b)}let T;this.getUniforms=function(){return T===void 0&&A(this),T};let x;this.getAttributes=function(){return x===void 0&&A(this),x};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(b,Yb)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$b++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=k,this.fragmentShader=R,this}let g_=0;class b_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new __(e),t.set(e,n)),n}}class __{constructor(e){this.id=g_++,this.code=e,this.usedTimes=0}}function v_(s,e,t,n,i,r,a){const o=new Fl,l=new b_,c=new Set,d=[],h=i.logarithmicDepthBuffer,u=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,M,w,L,F){const B=L.fog,V=F.geometry,H=x.isMeshStandardMaterial?L.environment:null,Z=(x.isMeshStandardMaterial?t:e).get(x.envMap||H),j=Z&&Z.mapping===Ea?Z.image.height:null,ie=g[x.type];x.precision!==null&&(p=i.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const de=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,xe=de!==void 0?de.length:0;let Fe=0;V.morphAttributes.position!==void 0&&(Fe=1),V.morphAttributes.normal!==void 0&&(Fe=2),V.morphAttributes.color!==void 0&&(Fe=3);let Je,q,Q,ge;if(ie){const Qe=bn[ie];Je=Qe.vertexShader,q=Qe.fragmentShader}else Je=x.vertexShader,q=x.fragmentShader,l.update(x),Q=l.getVertexShaderID(x),ge=l.getFragmentShaderID(x);const se=s.getRenderTarget(),Se=s.state.buffers.depth.getReversed(),re=F.isInstancedMesh===!0,Re=F.isBatchedMesh===!0,st=!!x.map,Ve=!!x.matcap,dt=!!Z,N=!!x.aoMap,Yt=!!x.lightMap,ze=!!x.bumpMap,He=!!x.normalMap,Te=!!x.displacementMap,rt=!!x.emissiveMap,Ee=!!x.metalnessMap,C=!!x.roughnessMap,S=x.anisotropy>0,O=x.clearcoat>0,Y=x.dispersion>0,J=x.iridescence>0,K=x.sheen>0,ye=x.transmission>0,oe=S&&!!x.anisotropyMap,ue=O&&!!x.clearcoatMap,je=O&&!!x.clearcoatNormalMap,ee=O&&!!x.clearcoatRoughnessMap,fe=J&&!!x.iridescenceMap,we=J&&!!x.iridescenceThicknessMap,Ce=K&&!!x.sheenColorMap,pe=K&&!!x.sheenRoughnessMap,Ge=!!x.specularMap,Ue=!!x.specularColorMap,nt=!!x.specularIntensityMap,I=ye&&!!x.transmissionMap,ae=ye&&!!x.thicknessMap,W=!!x.gradientMap,$=!!x.alphaMap,he=x.alphaTest>0,le=!!x.alphaHash,Le=!!x.extensions;let ht=ci;x.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(ht=s.toneMapping);const Et={shaderID:ie,shaderType:x.type,shaderName:x.name,vertexShader:Je,fragmentShader:q,defines:x.defines,customVertexShaderID:Q,customFragmentShaderID:ge,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:Re,batchingColor:Re&&F._colorsTexture!==null,instancing:re,instancingColor:re&&F.instanceColor!==null,instancingMorph:re&&F.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:se===null?s.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Ut,alphaToCoverage:!!x.alphaToCoverage,map:st,matcap:Ve,envMap:dt,envMapMode:dt&&Z.mapping,envMapCubeUVHeight:j,aoMap:N,lightMap:Yt,bumpMap:ze,normalMap:He,displacementMap:u&&Te,emissiveMap:rt,normalMapObjectSpace:He&&x.normalMapType===uf,normalMapTangentSpace:He&&x.normalMapType===wd,metalnessMap:Ee,roughnessMap:C,anisotropy:S,anisotropyMap:oe,clearcoat:O,clearcoatMap:ue,clearcoatNormalMap:je,clearcoatRoughnessMap:ee,dispersion:Y,iridescence:J,iridescenceMap:fe,iridescenceThicknessMap:we,sheen:K,sheenColorMap:Ce,sheenRoughnessMap:pe,specularMap:Ge,specularColorMap:Ue,specularIntensityMap:nt,transmission:ye,transmissionMap:I,thicknessMap:ae,gradientMap:W,opaque:x.transparent===!1&&x.blending===Ai&&x.alphaToCoverage===!1,alphaMap:$,alphaTest:he,alphaHash:le,combine:x.combine,mapUv:st&&b(x.map.channel),aoMapUv:N&&b(x.aoMap.channel),lightMapUv:Yt&&b(x.lightMap.channel),bumpMapUv:ze&&b(x.bumpMap.channel),normalMapUv:He&&b(x.normalMap.channel),displacementMapUv:Te&&b(x.displacementMap.channel),emissiveMapUv:rt&&b(x.emissiveMap.channel),metalnessMapUv:Ee&&b(x.metalnessMap.channel),roughnessMapUv:C&&b(x.roughnessMap.channel),anisotropyMapUv:oe&&b(x.anisotropyMap.channel),clearcoatMapUv:ue&&b(x.clearcoatMap.channel),clearcoatNormalMapUv:je&&b(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&b(x.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&b(x.iridescenceMap.channel),iridescenceThicknessMapUv:we&&b(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&b(x.sheenColorMap.channel),sheenRoughnessMapUv:pe&&b(x.sheenRoughnessMap.channel),specularMapUv:Ge&&b(x.specularMap.channel),specularColorMapUv:Ue&&b(x.specularColorMap.channel),specularIntensityMapUv:nt&&b(x.specularIntensityMap.channel),transmissionMapUv:I&&b(x.transmissionMap.channel),thicknessMapUv:ae&&b(x.thicknessMap.channel),alphaMapUv:$&&b(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(He||S),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!V.attributes.uv&&(st||$),fog:!!B,useFog:x.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Se,skinning:F.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Fe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&w.length>0,shadowMapType:s.shadowMap.type,toneMapping:ht,decodeVideoTexture:st&&x.map.isVideoTexture===!0&&Be.getTransfer(x.map.colorSpace)===tt,decodeVideoTextureEmissive:rt&&x.emissiveMap.isVideoTexture===!0&&Be.getTransfer(x.emissiveMap.colorSpace)===tt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Qt,flipSided:x.side===Gt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Le&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&x.extensions.multiDraw===!0||Re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Et.vertexUv1s=c.has(1),Et.vertexUv2s=c.has(2),Et.vertexUv3s=c.has(3),c.clear(),Et}function f(x){const M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(const w in x.defines)M.push(w),M.push(x.defines[w]);return x.isRawShaderMaterial===!1&&(v(M,x),y(M,x),M.push(s.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function v(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function y(x,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),x.push(o.mask)}function _(x){const M=g[x.type];let w;if(M){const L=bn[M];w=np.clone(L.uniforms)}else w=x.uniforms;return w}function k(x,M){let w;for(let L=0,F=d.length;L<F;L++){const B=d[L];if(B.cacheKey===M){w=B,++w.usedTimes;break}}return w===void 0&&(w=new m_(s,M,x,r),d.push(w)),w}function R(x){if(--x.usedTimes===0){const M=d.indexOf(x);d[M]=d[d.length-1],d.pop(),x.destroy()}}function A(x){l.remove(x)}function T(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:_,acquireProgram:k,releaseProgram:R,releaseShaderCache:A,programs:d,dispose:T}}function x_(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function y_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function oh(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function lh(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,u,p,g,b,m){let f=s[e];return f===void 0?(f={id:h.id,object:h,geometry:u,material:p,groupOrder:g,renderOrder:h.renderOrder,z:b,group:m},s[e]=f):(f.id=h.id,f.object=h,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=b,f.group=m),e++,f}function o(h,u,p,g,b,m){const f=a(h,u,p,g,b,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function l(h,u,p,g,b,m){const f=a(h,u,p,g,b,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function c(h,u){t.length>1&&t.sort(h||y_),n.length>1&&n.sort(u||oh),i.length>1&&i.sort(u||oh)}function d(){for(let h=e,u=s.length;h<u;h++){const p=s[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:d,sort:c}}function M_(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new lh,s.set(n,[a])):i>=r.length?(a=new lh,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function S_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new me};break;case"SpotLight":t={position:new P,direction:new P,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new me,groundColor:new me};break;case"RectAreaLight":t={color:new me,position:new P,halfWidth:new P,halfHeight:new P};break}return s[e.id]=t,t}}}function E_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let T_=0;function A_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function w_(s){const e=new S_,t=E_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const i=new P,r=new ke,a=new ke;function o(c){let d=0,h=0,u=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let p=0,g=0,b=0,m=0,f=0,v=0,y=0,_=0,k=0,R=0,A=0;c.sort(A_);for(let x=0,M=c.length;x<M;x++){const w=c[x],L=w.color,F=w.intensity,B=w.distance,V=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)d+=L.r*F,h+=L.g*F,u+=L.b*F;else if(w.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(w.sh.coefficients[H],F);A++}else if(w.isDirectionalLight){const H=e.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const Z=w.shadow,j=t.get(w);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,n.directionalShadow[p]=j,n.directionalShadowMap[p]=V,n.directionalShadowMatrix[p]=w.shadow.matrix,v++}n.directional[p]=H,p++}else if(w.isSpotLight){const H=e.get(w);H.position.setFromMatrixPosition(w.matrixWorld),H.color.copy(L).multiplyScalar(F),H.distance=B,H.coneCos=Math.cos(w.angle),H.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),H.decay=w.decay,n.spot[b]=H;const Z=w.shadow;if(w.map&&(n.spotLightMap[k]=w.map,k++,Z.updateMatrices(w),w.castShadow&&R++),n.spotLightMatrix[b]=Z.matrix,w.castShadow){const j=t.get(w);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,n.spotShadow[b]=j,n.spotShadowMap[b]=V,_++}b++}else if(w.isRectAreaLight){const H=e.get(w);H.color.copy(L).multiplyScalar(F),H.halfWidth.set(w.width*.5,0,0),H.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=H,m++}else if(w.isPointLight){const H=e.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),H.distance=w.distance,H.decay=w.decay,w.castShadow){const Z=w.shadow,j=t.get(w);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,j.shadowCameraNear=Z.camera.near,j.shadowCameraFar=Z.camera.far,n.pointShadow[g]=j,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=w.shadow.matrix,y++}n.point[g]=H,g++}else if(w.isHemisphereLight){const H=e.get(w);H.skyColor.copy(w.color).multiplyScalar(F),H.groundColor.copy(w.groundColor).multiplyScalar(F),n.hemi[f]=H,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ne.LTC_FLOAT_1,n.rectAreaLTC2=ne.LTC_FLOAT_2):(n.rectAreaLTC1=ne.LTC_HALF_1,n.rectAreaLTC2=ne.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=u;const T=n.hash;(T.directionalLength!==p||T.pointLength!==g||T.spotLength!==b||T.rectAreaLength!==m||T.hemiLength!==f||T.numDirectionalShadows!==v||T.numPointShadows!==y||T.numSpotShadows!==_||T.numSpotMaps!==k||T.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=b,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+k-R,n.spotLightMap.length=k,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,T.directionalLength=p,T.pointLength=g,T.spotLength=b,T.rectAreaLength=m,T.hemiLength=f,T.numDirectionalShadows=v,T.numPointShadows=y,T.numSpotShadows=_,T.numSpotMaps=k,T.numLightProbes=A,n.version=T_++)}function l(c,d){let h=0,u=0,p=0,g=0,b=0;const m=d.matrixWorldInverse;for(let f=0,v=c.length;f<v;f++){const y=c[f];if(y.isDirectionalLight){const _=n.directional[h];_.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),h++}else if(y.isSpotLight){const _=n.spot[p];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const _=n.point[u];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),u++}else if(y.isHemisphereLight){const _=n.hemi[b];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),b++}}}return{setup:o,setupView:l,state:n}}function ch(s){const e=new w_(s),t=[],n=[];function i(d){c.camera=d,t.length=0,n.length=0}function r(d){t.push(d)}function a(d){n.push(d)}function o(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function R_(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new ch(s),e.set(i,[o])):r>=a.length?(o=new ch(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class k_ extends fn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=hf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class C_ extends fn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const P_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,L_=`uniform sampler2D shadow_pass;
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
}`;function I_(s,e,t){let n=new Ol;const i=new Ae,r=new Ae,a=new Ke,o=new k_({depthPacking:df}),l=new C_,c={},d=t.maxTextureSize,h={[Vn]:Gt,[Gt]:Vn,[Qt]:Qt},u=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:P_,fragmentShader:L_}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new Vt;g.setAttribute("position",new Ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new ct(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cd;let f=this.type;this.render=function(R,A,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const x=s.getRenderTarget(),M=s.getActiveCubeFace(),w=s.getActiveMipmapLevel(),L=s.state;L.setBlending(li),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const F=f!==Un&&this.type===Un,B=f===Un&&this.type!==Un;for(let V=0,H=R.length;V<H;V++){const Z=R[V],j=Z.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;i.copy(j.mapSize);const ie=j.getFrameExtents();if(i.multiply(ie),r.copy(j.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(r.x=Math.floor(d/ie.x),i.x=r.x*ie.x,j.mapSize.x=r.x),i.y>d&&(r.y=Math.floor(d/ie.y),i.y=r.y*ie.y,j.mapSize.y=r.y)),j.map===null||F===!0||B===!0){const xe=this.type!==Un?{minFilter:Dt,magFilter:Dt}:{};j.map!==null&&j.map.dispose(),j.map=new hi(i.x,i.y,xe),j.map.texture.name=Z.name+".shadowMap",j.camera.updateProjectionMatrix()}s.setRenderTarget(j.map),s.clear();const de=j.getViewportCount();for(let xe=0;xe<de;xe++){const Fe=j.getViewport(xe);a.set(r.x*Fe.x,r.y*Fe.y,r.x*Fe.z,r.y*Fe.w),L.viewport(a),j.updateMatrices(Z,xe),n=j.getFrustum(),_(A,T,j.camera,Z,this.type)}j.isPointLightShadow!==!0&&this.type===Un&&v(j,T),j.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(x,M,w)};function v(R,A){const T=e.update(b);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new hi(i.x,i.y)),u.uniforms.shadow_pass.value=R.map.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(A,null,T,u,b,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(A,null,T,p,b,null)}function y(R,A,T,x){let M=null;const w=T.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(w!==void 0)M=w;else if(M=T.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const L=M.uuid,F=A.uuid;let B=c[L];B===void 0&&(B={},c[L]=B);let V=B[F];V===void 0&&(V=M.clone(),B[F]=V,A.addEventListener("dispose",k)),M=V}if(M.visible=A.visible,M.wireframe=A.wireframe,x===Un?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:h[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,T.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const L=s.properties.get(M);L.light=T}return M}function _(R,A,T,x,M){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===Un)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,R.matrixWorld);const F=e.update(R),B=R.material;if(Array.isArray(B)){const V=F.groups;for(let H=0,Z=V.length;H<Z;H++){const j=V[H],ie=B[j.materialIndex];if(ie&&ie.visible){const de=y(R,ie,x,M);R.onBeforeShadow(s,R,A,T,F,de,j),s.renderBufferDirect(T,null,F,de,R,j),R.onAfterShadow(s,R,A,T,F,de,j)}}}else if(B.visible){const V=y(R,B,x,M);R.onBeforeShadow(s,R,A,T,F,V,null),s.renderBufferDirect(T,null,F,V,R,null),R.onAfterShadow(s,R,A,T,F,V,null)}}const L=R.children;for(let F=0,B=L.length;F<B;F++)_(L[F],A,T,x,M)}function k(R){R.target.removeEventListener("dispose",k);for(const T in c){const x=c[T],M=R.target.uuid;M in x&&(x[M].dispose(),delete x[M])}}}const D_={[Po]:Lo,[Io]:ba,[Do]:No,[ds]:Uo,[Lo]:Po,[ba]:Io,[No]:Do,[Uo]:ds};function U_(s,e){function t(){let I=!1;const ae=new Ke;let W=null;const $=new Ke(0,0,0,0);return{setMask:function(he){W!==he&&!I&&(s.colorMask(he,he,he,he),W=he)},setLocked:function(he){I=he},setClear:function(he,le,Le,ht,Et){Et===!0&&(he*=ht,le*=ht,Le*=ht),ae.set(he,le,Le,ht),$.equals(ae)===!1&&(s.clearColor(he,le,Le,ht),$.copy(ae))},reset:function(){I=!1,W=null,$.set(-1,0,0,0)}}}function n(){let I=!1,ae=!1,W=null,$=null,he=null;return{setReversed:function(le){if(ae!==le){const Le=e.get("EXT_clip_control");ae?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT);const ht=he;he=null,this.setClear(ht)}ae=le},getReversed:function(){return ae},setTest:function(le){le?se(s.DEPTH_TEST):Se(s.DEPTH_TEST)},setMask:function(le){W!==le&&!I&&(s.depthMask(le),W=le)},setFunc:function(le){if(ae&&(le=D_[le]),$!==le){switch(le){case Po:s.depthFunc(s.NEVER);break;case Lo:s.depthFunc(s.ALWAYS);break;case Io:s.depthFunc(s.LESS);break;case ds:s.depthFunc(s.LEQUAL);break;case Do:s.depthFunc(s.EQUAL);break;case Uo:s.depthFunc(s.GEQUAL);break;case ba:s.depthFunc(s.GREATER);break;case No:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}$=le}},setLocked:function(le){I=le},setClear:function(le){he!==le&&(ae&&(le=1-le),s.clearDepth(le),he=le)},reset:function(){I=!1,W=null,$=null,he=null,ae=!1}}}function i(){let I=!1,ae=null,W=null,$=null,he=null,le=null,Le=null,ht=null,Et=null;return{setTest:function(Qe){I||(Qe?se(s.STENCIL_TEST):Se(s.STENCIL_TEST))},setMask:function(Qe){ae!==Qe&&!I&&(s.stencilMask(Qe),ae=Qe)},setFunc:function(Qe,rn,An){(W!==Qe||$!==rn||he!==An)&&(s.stencilFunc(Qe,rn,An),W=Qe,$=rn,he=An)},setOp:function(Qe,rn,An){(le!==Qe||Le!==rn||ht!==An)&&(s.stencilOp(Qe,rn,An),le=Qe,Le=rn,ht=An)},setLocked:function(Qe){I=Qe},setClear:function(Qe){Et!==Qe&&(s.clearStencil(Qe),Et=Qe)},reset:function(){I=!1,ae=null,W=null,$=null,he=null,le=null,Le=null,ht=null,Et=null}}}const r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let d={},h={},u=new WeakMap,p=[],g=null,b=!1,m=null,f=null,v=null,y=null,_=null,k=null,R=null,A=new me(0,0,0),T=0,x=!1,M=null,w=null,L=null,F=null,B=null;const V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Z=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(j)[1]),H=Z>=1):j.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),H=Z>=2);let ie=null,de={};const xe=s.getParameter(s.SCISSOR_BOX),Fe=s.getParameter(s.VIEWPORT),Je=new Ke().fromArray(xe),q=new Ke().fromArray(Fe);function Q(I,ae,W,$){const he=new Uint8Array(4),le=s.createTexture();s.bindTexture(I,le),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Le=0;Le<W;Le++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(ae,0,s.RGBA,1,1,$,0,s.RGBA,s.UNSIGNED_BYTE,he):s.texImage2D(ae+Le,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,he);return le}const ge={};ge[s.TEXTURE_2D]=Q(s.TEXTURE_2D,s.TEXTURE_2D,1),ge[s.TEXTURE_CUBE_MAP]=Q(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[s.TEXTURE_2D_ARRAY]=Q(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ge[s.TEXTURE_3D]=Q(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(s.DEPTH_TEST),a.setFunc(ds),ze(!1),He(fc),se(s.CULL_FACE),N(li);function se(I){d[I]!==!0&&(s.enable(I),d[I]=!0)}function Se(I){d[I]!==!1&&(s.disable(I),d[I]=!1)}function re(I,ae){return h[I]!==ae?(s.bindFramebuffer(I,ae),h[I]=ae,I===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ae),I===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ae),!0):!1}function Re(I,ae){let W=p,$=!1;if(I){W=u.get(ae),W===void 0&&(W=[],u.set(ae,W));const he=I.textures;if(W.length!==he.length||W[0]!==s.COLOR_ATTACHMENT0){for(let le=0,Le=he.length;le<Le;le++)W[le]=s.COLOR_ATTACHMENT0+le;W.length=he.length,$=!0}}else W[0]!==s.BACK&&(W[0]=s.BACK,$=!0);$&&s.drawBuffers(W)}function st(I){return g!==I?(s.useProgram(I),g=I,!0):!1}const Ve={[Ei]:s.FUNC_ADD,[Du]:s.FUNC_SUBTRACT,[Uu]:s.FUNC_REVERSE_SUBTRACT};Ve[Nu]=s.MIN,Ve[Fu]=s.MAX;const dt={[Ou]:s.ZERO,[Bu]:s.ONE,[zu]:s.SRC_COLOR,[ko]:s.SRC_ALPHA,[Xu]:s.SRC_ALPHA_SATURATE,[ju]:s.DST_COLOR,[Gu]:s.DST_ALPHA,[Hu]:s.ONE_MINUS_SRC_COLOR,[Co]:s.ONE_MINUS_SRC_ALPHA,[Wu]:s.ONE_MINUS_DST_COLOR,[Vu]:s.ONE_MINUS_DST_ALPHA,[qu]:s.CONSTANT_COLOR,[Ku]:s.ONE_MINUS_CONSTANT_COLOR,[Yu]:s.CONSTANT_ALPHA,[$u]:s.ONE_MINUS_CONSTANT_ALPHA};function N(I,ae,W,$,he,le,Le,ht,Et,Qe){if(I===li){b===!0&&(Se(s.BLEND),b=!1);return}if(b===!1&&(se(s.BLEND),b=!0),I!==Iu){if(I!==m||Qe!==x){if((f!==Ei||_!==Ei)&&(s.blendEquation(s.FUNC_ADD),f=Ei,_=Ei),Qe)switch(I){case Ai:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case wi:s.blendFunc(s.ONE,s.ONE);break;case pc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case mc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ai:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case wi:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case pc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case mc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}v=null,y=null,k=null,R=null,A.set(0,0,0),T=0,m=I,x=Qe}return}he=he||ae,le=le||W,Le=Le||$,(ae!==f||he!==_)&&(s.blendEquationSeparate(Ve[ae],Ve[he]),f=ae,_=he),(W!==v||$!==y||le!==k||Le!==R)&&(s.blendFuncSeparate(dt[W],dt[$],dt[le],dt[Le]),v=W,y=$,k=le,R=Le),(ht.equals(A)===!1||Et!==T)&&(s.blendColor(ht.r,ht.g,ht.b,Et),A.copy(ht),T=Et),m=I,x=!1}function Yt(I,ae){I.side===Qt?Se(s.CULL_FACE):se(s.CULL_FACE);let W=I.side===Gt;ae&&(W=!W),ze(W),I.blending===Ai&&I.transparent===!1?N(li):N(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const $=I.stencilWrite;o.setTest($),$&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),rt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?se(s.SAMPLE_ALPHA_TO_COVERAGE):Se(s.SAMPLE_ALPHA_TO_COVERAGE)}function ze(I){M!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),M=I)}function He(I){I!==Pu?(se(s.CULL_FACE),I!==w&&(I===fc?s.cullFace(s.BACK):I===Lu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Se(s.CULL_FACE),w=I}function Te(I){I!==L&&(H&&s.lineWidth(I),L=I)}function rt(I,ae,W){I?(se(s.POLYGON_OFFSET_FILL),(F!==ae||B!==W)&&(s.polygonOffset(ae,W),F=ae,B=W)):Se(s.POLYGON_OFFSET_FILL)}function Ee(I){I?se(s.SCISSOR_TEST):Se(s.SCISSOR_TEST)}function C(I){I===void 0&&(I=s.TEXTURE0+V-1),ie!==I&&(s.activeTexture(I),ie=I)}function S(I,ae,W){W===void 0&&(ie===null?W=s.TEXTURE0+V-1:W=ie);let $=de[W];$===void 0&&($={type:void 0,texture:void 0},de[W]=$),($.type!==I||$.texture!==ae)&&(ie!==W&&(s.activeTexture(W),ie=W),s.bindTexture(I,ae||ge[I]),$.type=I,$.texture=ae)}function O(){const I=de[ie];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Y(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function je(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ce(I){Je.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),Je.copy(I))}function pe(I){q.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),q.copy(I))}function Ge(I,ae){let W=c.get(ae);W===void 0&&(W=new WeakMap,c.set(ae,W));let $=W.get(I);$===void 0&&($=s.getUniformBlockIndex(ae,I.name),W.set(I,$))}function Ue(I,ae){const $=c.get(ae).get(I);l.get(ae)!==$&&(s.uniformBlockBinding(ae,$,I.__bindingPointIndex),l.set(ae,$))}function nt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},ie=null,de={},h={},u=new WeakMap,p=[],g=null,b=!1,m=null,f=null,v=null,y=null,_=null,k=null,R=null,A=new me(0,0,0),T=0,x=!1,M=null,w=null,L=null,F=null,B=null,Je.set(0,0,s.canvas.width,s.canvas.height),q.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:se,disable:Se,bindFramebuffer:re,drawBuffers:Re,useProgram:st,setBlending:N,setMaterial:Yt,setFlipSided:ze,setCullFace:He,setLineWidth:Te,setPolygonOffset:rt,setScissorTest:Ee,activeTexture:C,bindTexture:S,unbindTexture:O,compressedTexImage2D:Y,compressedTexImage3D:J,texImage2D:fe,texImage3D:we,updateUBOMapping:Ge,uniformBlockBinding:Ue,texStorage2D:je,texStorage3D:ee,texSubImage2D:K,texSubImage3D:ye,compressedTexSubImage2D:oe,compressedTexSubImage3D:ue,scissor:Ce,viewport:pe,reset:nt}}function hh(s,e,t,n){const i=N_(n);switch(t){case _d:return s*e;case xd:return s*e;case yd:return s*e*2;case Ta:return s*e/i.components*i.byteLength;case Ll:return s*e/i.components*i.byteLength;case Md:return s*e*2/i.components*i.byteLength;case Il:return s*e*2/i.components*i.byteLength;case vd:return s*e*3/i.components*i.byteLength;case tn:return s*e*4/i.components*i.byteLength;case Dl:return s*e*4/i.components*i.byteLength;case sa:case ra:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case aa:case oa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case zo:case Go:return Math.max(s,16)*Math.max(e,8)/4;case Bo:case Ho:return Math.max(s,8)*Math.max(e,8)/2;case Vo:case jo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Wo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Xo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case qo:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ko:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Yo:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case $o:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Zo:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Jo:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Qo:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case el:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case tl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case nl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case il:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case sl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case rl:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case la:case al:case ol:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Sd:case ll:return Math.ceil(s/4)*Math.ceil(e/4)*8;case cl:case hl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function N_(s){switch(s){case jn:case md:return{byteLength:1,components:1};case nr:case gd:case dr:return{byteLength:2,components:1};case Cl:case Pl:return{byteLength:2,components:4};case ki:case kl:case dn:return{byteLength:4,components:1};case bd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function F_(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ae,d=new WeakMap;let h;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return p?new OffscreenCanvas(C,S):rr("canvas")}function b(C,S,O){let Y=1;const J=Ee(C);if((J.width>O||J.height>O)&&(Y=O/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const K=Math.floor(Y*J.width),ye=Math.floor(Y*J.height);h===void 0&&(h=g(K,ye));const oe=S?g(K,ye):h;return oe.width=K,oe.height=ye,oe.getContext("2d").drawImage(C,0,0,K,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+K+"x"+ye+")."),oe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function m(C){return C.generateMipmaps}function f(C){s.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(C,S,O,Y,J=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let K=S;if(S===s.RED&&(O===s.FLOAT&&(K=s.R32F),O===s.HALF_FLOAT&&(K=s.R16F),O===s.UNSIGNED_BYTE&&(K=s.R8)),S===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(K=s.R8UI),O===s.UNSIGNED_SHORT&&(K=s.R16UI),O===s.UNSIGNED_INT&&(K=s.R32UI),O===s.BYTE&&(K=s.R8I),O===s.SHORT&&(K=s.R16I),O===s.INT&&(K=s.R32I)),S===s.RG&&(O===s.FLOAT&&(K=s.RG32F),O===s.HALF_FLOAT&&(K=s.RG16F),O===s.UNSIGNED_BYTE&&(K=s.RG8)),S===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(K=s.RG8UI),O===s.UNSIGNED_SHORT&&(K=s.RG16UI),O===s.UNSIGNED_INT&&(K=s.RG32UI),O===s.BYTE&&(K=s.RG8I),O===s.SHORT&&(K=s.RG16I),O===s.INT&&(K=s.RG32I)),S===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(K=s.RGB8UI),O===s.UNSIGNED_SHORT&&(K=s.RGB16UI),O===s.UNSIGNED_INT&&(K=s.RGB32UI),O===s.BYTE&&(K=s.RGB8I),O===s.SHORT&&(K=s.RGB16I),O===s.INT&&(K=s.RGB32I)),S===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),O===s.UNSIGNED_INT&&(K=s.RGBA32UI),O===s.BYTE&&(K=s.RGBA8I),O===s.SHORT&&(K=s.RGBA16I),O===s.INT&&(K=s.RGBA32I)),S===s.RGB&&O===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),S===s.RGBA){const ye=J?Aa:Be.getTransfer(Y);O===s.FLOAT&&(K=s.RGBA32F),O===s.HALF_FLOAT&&(K=s.RGBA16F),O===s.UNSIGNED_BYTE&&(K=ye===tt?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function _(C,S){let O;return C?S===null||S===ki||S===ms?O=s.DEPTH24_STENCIL8:S===dn?O=s.DEPTH32F_STENCIL8:S===nr&&(O=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ki||S===ms?O=s.DEPTH_COMPONENT24:S===dn?O=s.DEPTH_COMPONENT32F:S===nr&&(O=s.DEPTH_COMPONENT16),O}function k(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Dt&&C.minFilter!==zt?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function R(C){const S=C.target;S.removeEventListener("dispose",R),T(S),S.isVideoTexture&&d.delete(S)}function A(C){const S=C.target;S.removeEventListener("dispose",A),M(S)}function T(C){const S=n.get(C);if(S.__webglInit===void 0)return;const O=C.source,Y=u.get(O);if(Y){const J=Y[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&x(C),Object.keys(Y).length===0&&u.delete(O)}n.remove(C)}function x(C){const S=n.get(C);s.deleteTexture(S.__webglTexture);const O=C.source,Y=u.get(O);delete Y[S.__cacheKey],a.memory.textures--}function M(C){const S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(S.__webglFramebuffer[Y]))for(let J=0;J<S.__webglFramebuffer[Y].length;J++)s.deleteFramebuffer(S.__webglFramebuffer[Y][J]);else s.deleteFramebuffer(S.__webglFramebuffer[Y]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[Y])}else{if(Array.isArray(S.__webglFramebuffer))for(let Y=0;Y<S.__webglFramebuffer.length;Y++)s.deleteFramebuffer(S.__webglFramebuffer[Y]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Y=0;Y<S.__webglColorRenderbuffer.length;Y++)S.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[Y]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const O=C.textures;for(let Y=0,J=O.length;Y<J;Y++){const K=n.get(O[Y]);K.__webglTexture&&(s.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(O[Y])}n.remove(C)}let w=0;function L(){w=0}function F(){const C=w;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),w+=1,C}function B(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function V(C,S){const O=n.get(C);if(C.isVideoTexture&&Te(C),C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){const Y=C.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(O,C,S);return}}t.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+S)}function H(C,S){const O=n.get(C);if(C.version>0&&O.__version!==C.version){q(O,C,S);return}t.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+S)}function Z(C,S){const O=n.get(C);if(C.version>0&&O.__version!==C.version){q(O,C,S);return}t.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+S)}function j(C,S){const O=n.get(C);if(C.version>0&&O.__version!==C.version){Q(O,C,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+S)}const ie={[ps]:s.REPEAT,[ri]:s.CLAMP_TO_EDGE,[_a]:s.MIRRORED_REPEAT},de={[Dt]:s.NEAREST,[pd]:s.NEAREST_MIPMAP_NEAREST,[qs]:s.NEAREST_MIPMAP_LINEAR,[zt]:s.LINEAR,[ia]:s.LINEAR_MIPMAP_NEAREST,[On]:s.LINEAR_MIPMAP_LINEAR},xe={[ff]:s.NEVER,[vf]:s.ALWAYS,[pf]:s.LESS,[Rd]:s.LEQUAL,[mf]:s.EQUAL,[_f]:s.GEQUAL,[gf]:s.GREATER,[bf]:s.NOTEQUAL};function Fe(C,S){if(S.type===dn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===zt||S.magFilter===ia||S.magFilter===qs||S.magFilter===On||S.minFilter===zt||S.minFilter===ia||S.minFilter===qs||S.minFilter===On)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,ie[S.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,ie[S.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,ie[S.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,de[S.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,de[S.minFilter]),S.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,xe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Dt||S.minFilter!==qs&&S.minFilter!==On||S.type===dn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Je(C,S){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",R));const Y=S.source;let J=u.get(Y);J===void 0&&(J={},u.set(Y,J));const K=B(S);if(K!==C.__cacheKey){J[K]===void 0&&(J[K]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,O=!0),J[K].usedTimes++;const ye=J[C.__cacheKey];ye!==void 0&&(J[C.__cacheKey].usedTimes--,ye.usedTimes===0&&x(S)),C.__cacheKey=K,C.__webglTexture=J[K].texture}return O}function q(C,S,O){let Y=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Y=s.TEXTURE_3D);const J=Je(C,S),K=S.source;t.bindTexture(Y,C.__webglTexture,s.TEXTURE0+O);const ye=n.get(K);if(K.version!==ye.__version||J===!0){t.activeTexture(s.TEXTURE0+O);const oe=Be.getPrimaries(Be.workingColorSpace),ue=S.colorSpace===si?null:Be.getPrimaries(S.colorSpace),je=S.colorSpace===si||oe===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let ee=b(S.image,!1,i.maxTextureSize);ee=rt(S,ee);const fe=r.convert(S.format,S.colorSpace),we=r.convert(S.type);let Ce=y(S.internalFormat,fe,we,S.colorSpace,S.isVideoTexture);Fe(Y,S);let pe;const Ge=S.mipmaps,Ue=S.isVideoTexture!==!0,nt=ye.__version===void 0||J===!0,I=K.dataReady,ae=k(S,ee);if(S.isDepthTexture)Ce=_(S.format===gs,S.type),nt&&(Ue?t.texStorage2D(s.TEXTURE_2D,1,Ce,ee.width,ee.height):t.texImage2D(s.TEXTURE_2D,0,Ce,ee.width,ee.height,0,fe,we,null));else if(S.isDataTexture)if(Ge.length>0){Ue&&nt&&t.texStorage2D(s.TEXTURE_2D,ae,Ce,Ge[0].width,Ge[0].height);for(let W=0,$=Ge.length;W<$;W++)pe=Ge[W],Ue?I&&t.texSubImage2D(s.TEXTURE_2D,W,0,0,pe.width,pe.height,fe,we,pe.data):t.texImage2D(s.TEXTURE_2D,W,Ce,pe.width,pe.height,0,fe,we,pe.data);S.generateMipmaps=!1}else Ue?(nt&&t.texStorage2D(s.TEXTURE_2D,ae,Ce,ee.width,ee.height),I&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ee.width,ee.height,fe,we,ee.data)):t.texImage2D(s.TEXTURE_2D,0,Ce,ee.width,ee.height,0,fe,we,ee.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ue&&nt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ae,Ce,Ge[0].width,Ge[0].height,ee.depth);for(let W=0,$=Ge.length;W<$;W++)if(pe=Ge[W],S.format!==tn)if(fe!==null)if(Ue){if(I)if(S.layerUpdates.size>0){const he=hh(pe.width,pe.height,S.format,S.type);for(const le of S.layerUpdates){const Le=pe.data.subarray(le*he/pe.data.BYTES_PER_ELEMENT,(le+1)*he/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,le,pe.width,pe.height,1,fe,Le)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,0,pe.width,pe.height,ee.depth,fe,pe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,W,Ce,pe.width,pe.height,ee.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?I&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,0,pe.width,pe.height,ee.depth,fe,we,pe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,W,Ce,pe.width,pe.height,ee.depth,0,fe,we,pe.data)}else{Ue&&nt&&t.texStorage2D(s.TEXTURE_2D,ae,Ce,Ge[0].width,Ge[0].height);for(let W=0,$=Ge.length;W<$;W++)pe=Ge[W],S.format!==tn?fe!==null?Ue?I&&t.compressedTexSubImage2D(s.TEXTURE_2D,W,0,0,pe.width,pe.height,fe,pe.data):t.compressedTexImage2D(s.TEXTURE_2D,W,Ce,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?I&&t.texSubImage2D(s.TEXTURE_2D,W,0,0,pe.width,pe.height,fe,we,pe.data):t.texImage2D(s.TEXTURE_2D,W,Ce,pe.width,pe.height,0,fe,we,pe.data)}else if(S.isDataArrayTexture)if(Ue){if(nt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ae,Ce,ee.width,ee.height,ee.depth),I)if(S.layerUpdates.size>0){const W=hh(ee.width,ee.height,S.format,S.type);for(const $ of S.layerUpdates){const he=ee.data.subarray($*W/ee.data.BYTES_PER_ELEMENT,($+1)*W/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,$,ee.width,ee.height,1,fe,we,he)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,fe,we,ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ce,ee.width,ee.height,ee.depth,0,fe,we,ee.data);else if(S.isData3DTexture)Ue?(nt&&t.texStorage3D(s.TEXTURE_3D,ae,Ce,ee.width,ee.height,ee.depth),I&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,fe,we,ee.data)):t.texImage3D(s.TEXTURE_3D,0,Ce,ee.width,ee.height,ee.depth,0,fe,we,ee.data);else if(S.isFramebufferTexture){if(nt)if(Ue)t.texStorage2D(s.TEXTURE_2D,ae,Ce,ee.width,ee.height);else{let W=ee.width,$=ee.height;for(let he=0;he<ae;he++)t.texImage2D(s.TEXTURE_2D,he,Ce,W,$,0,fe,we,null),W>>=1,$>>=1}}else if(Ge.length>0){if(Ue&&nt){const W=Ee(Ge[0]);t.texStorage2D(s.TEXTURE_2D,ae,Ce,W.width,W.height)}for(let W=0,$=Ge.length;W<$;W++)pe=Ge[W],Ue?I&&t.texSubImage2D(s.TEXTURE_2D,W,0,0,fe,we,pe):t.texImage2D(s.TEXTURE_2D,W,Ce,fe,we,pe);S.generateMipmaps=!1}else if(Ue){if(nt){const W=Ee(ee);t.texStorage2D(s.TEXTURE_2D,ae,Ce,W.width,W.height)}I&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,fe,we,ee)}else t.texImage2D(s.TEXTURE_2D,0,Ce,fe,we,ee);m(S)&&f(Y),ye.__version=K.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Q(C,S,O){if(S.image.length!==6)return;const Y=Je(C,S),J=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+O);const K=n.get(J);if(J.version!==K.__version||Y===!0){t.activeTexture(s.TEXTURE0+O);const ye=Be.getPrimaries(Be.workingColorSpace),oe=S.colorSpace===si?null:Be.getPrimaries(S.colorSpace),ue=S.colorSpace===si||ye===oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const je=S.isCompressedTexture||S.image[0].isCompressedTexture,ee=S.image[0]&&S.image[0].isDataTexture,fe=[];for(let $=0;$<6;$++)!je&&!ee?fe[$]=b(S.image[$],!0,i.maxCubemapSize):fe[$]=ee?S.image[$].image:S.image[$],fe[$]=rt(S,fe[$]);const we=fe[0],Ce=r.convert(S.format,S.colorSpace),pe=r.convert(S.type),Ge=y(S.internalFormat,Ce,pe,S.colorSpace),Ue=S.isVideoTexture!==!0,nt=K.__version===void 0||Y===!0,I=J.dataReady;let ae=k(S,we);Fe(s.TEXTURE_CUBE_MAP,S);let W;if(je){Ue&&nt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ae,Ge,we.width,we.height);for(let $=0;$<6;$++){W=fe[$].mipmaps;for(let he=0;he<W.length;he++){const le=W[he];S.format!==tn?Ce!==null?Ue?I&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,he,0,0,le.width,le.height,Ce,le.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,he,Ge,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,he,0,0,le.width,le.height,Ce,pe,le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,he,Ge,le.width,le.height,0,Ce,pe,le.data)}}}else{if(W=S.mipmaps,Ue&&nt){W.length>0&&ae++;const $=Ee(fe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ae,Ge,$.width,$.height)}for(let $=0;$<6;$++)if(ee){Ue?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,fe[$].width,fe[$].height,Ce,pe,fe[$].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ge,fe[$].width,fe[$].height,0,Ce,pe,fe[$].data);for(let he=0;he<W.length;he++){const Le=W[he].image[$].image;Ue?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,he+1,0,0,Le.width,Le.height,Ce,pe,Le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,he+1,Ge,Le.width,Le.height,0,Ce,pe,Le.data)}}else{Ue?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ce,pe,fe[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ge,Ce,pe,fe[$]);for(let he=0;he<W.length;he++){const le=W[he];Ue?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,he+1,0,0,Ce,pe,le.image[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,he+1,Ge,Ce,pe,le.image[$])}}}m(S)&&f(s.TEXTURE_CUBE_MAP),K.__version=J.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ge(C,S,O,Y,J,K){const ye=r.convert(O.format,O.colorSpace),oe=r.convert(O.type),ue=y(O.internalFormat,ye,oe,O.colorSpace),je=n.get(S),ee=n.get(O);if(ee.__renderTarget=S,!je.__hasExternalTextures){const fe=Math.max(1,S.width>>K),we=Math.max(1,S.height>>K);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?t.texImage3D(J,K,ue,fe,we,S.depth,0,ye,oe,null):t.texImage2D(J,K,ue,fe,we,0,ye,oe,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),He(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,J,ee.__webglTexture,0,ze(S)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,J,ee.__webglTexture,K),t.bindFramebuffer(s.FRAMEBUFFER,null)}function se(C,S,O){if(s.bindRenderbuffer(s.RENDERBUFFER,C),S.depthBuffer){const Y=S.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,K=_(S.stencilBuffer,J),ye=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=ze(S);He(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,oe,K,S.width,S.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,oe,K,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,K,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,C)}else{const Y=S.textures;for(let J=0;J<Y.length;J++){const K=Y[J],ye=r.convert(K.format,K.colorSpace),oe=r.convert(K.type),ue=y(K.internalFormat,ye,oe,K.colorSpace),je=ze(S);O&&He(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,je,ue,S.width,S.height):He(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,je,ue,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,ue,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Se(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(S.depthTexture);Y.__renderTarget=S,(!Y.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),V(S.depthTexture,0);const J=Y.__webglTexture,K=ze(S);if(S.depthTexture.format===os)He(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(S.depthTexture.format===gs)He(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function re(C){const S=n.get(C),O=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const Y=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Y){const J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=Y}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Se(S.__webglFramebuffer,C)}else if(O){S.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[Y]),S.__webglDepthbuffer[Y]===void 0)S.__webglDepthbuffer[Y]=s.createRenderbuffer(),se(S.__webglDepthbuffer[Y],C,!1);else{const J=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,K)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),se(S.__webglDepthbuffer,C,!1);else{const Y=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,J)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Re(C,S,O){const Y=n.get(C);S!==void 0&&ge(Y.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&re(C)}function st(C){const S=C.texture,O=n.get(C),Y=n.get(S);C.addEventListener("dispose",A);const J=C.textures,K=C.isWebGLCubeRenderTarget===!0,ye=J.length>1;if(ye||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=S.version,a.memory.textures++),K){O.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[oe]=[];for(let ue=0;ue<S.mipmaps.length;ue++)O.__webglFramebuffer[oe][ue]=s.createFramebuffer()}else O.__webglFramebuffer[oe]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let oe=0;oe<S.mipmaps.length;oe++)O.__webglFramebuffer[oe]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(ye)for(let oe=0,ue=J.length;oe<ue;oe++){const je=n.get(J[oe]);je.__webglTexture===void 0&&(je.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&He(C)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let oe=0;oe<J.length;oe++){const ue=J[oe];O.__webglColorRenderbuffer[oe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[oe]);const je=r.convert(ue.format,ue.colorSpace),ee=r.convert(ue.type),fe=y(ue.internalFormat,je,ee,ue.colorSpace,C.isXRRenderTarget===!0),we=ze(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,we,fe,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.RENDERBUFFER,O.__webglColorRenderbuffer[oe])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),se(O.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(K){t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),Fe(s.TEXTURE_CUBE_MAP,S);for(let oe=0;oe<6;oe++)if(S.mipmaps&&S.mipmaps.length>0)for(let ue=0;ue<S.mipmaps.length;ue++)ge(O.__webglFramebuffer[oe][ue],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ue);else ge(O.__webglFramebuffer[oe],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(S)&&f(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let oe=0,ue=J.length;oe<ue;oe++){const je=J[oe],ee=n.get(je);t.bindTexture(s.TEXTURE_2D,ee.__webglTexture),Fe(s.TEXTURE_2D,je),ge(O.__webglFramebuffer,C,je,s.COLOR_ATTACHMENT0+oe,s.TEXTURE_2D,0),m(je)&&f(s.TEXTURE_2D)}t.unbindTexture()}else{let oe=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(oe=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(oe,Y.__webglTexture),Fe(oe,S),S.mipmaps&&S.mipmaps.length>0)for(let ue=0;ue<S.mipmaps.length;ue++)ge(O.__webglFramebuffer[ue],C,S,s.COLOR_ATTACHMENT0,oe,ue);else ge(O.__webglFramebuffer,C,S,s.COLOR_ATTACHMENT0,oe,0);m(S)&&f(oe),t.unbindTexture()}C.depthBuffer&&re(C)}function Ve(C){const S=C.textures;for(let O=0,Y=S.length;O<Y;O++){const J=S[O];if(m(J)){const K=v(C),ye=n.get(J).__webglTexture;t.bindTexture(K,ye),f(K),t.unbindTexture()}}}const dt=[],N=[];function Yt(C){if(C.samples>0){if(He(C)===!1){const S=C.textures,O=C.width,Y=C.height;let J=s.COLOR_BUFFER_BIT;const K=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=n.get(C),oe=S.length>1;if(oe)for(let ue=0;ue<S.length;ue++)t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let ue=0;ue<S.length;ue++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),oe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ye.__webglColorRenderbuffer[ue]);const je=n.get(S[ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,je,0)}s.blitFramebuffer(0,0,O,Y,0,0,O,Y,J,s.NEAREST),l===!0&&(dt.length=0,N.length=0,dt.push(s.COLOR_ATTACHMENT0+ue),C.depthBuffer&&C.resolveDepthBuffer===!1&&(dt.push(K),N.push(K),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,N)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,dt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),oe)for(let ue=0;ue<S.length;ue++){t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,ye.__webglColorRenderbuffer[ue]);const je=n.get(S[ue]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.TEXTURE_2D,je,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const S=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function ze(C){return Math.min(i.maxSamples,C.samples)}function He(C){const S=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Te(C){const S=a.render.frame;d.get(C)!==S&&(d.set(C,S),C.update())}function rt(C,S){const O=C.colorSpace,Y=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==Ut&&O!==si&&(Be.getTransfer(O)===tt?(Y!==tn||J!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}function Ee(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=L,this.setTexture2D=V,this.setTexture2DArray=H,this.setTexture3D=Z,this.setTextureCube=j,this.rebindTextures=Re,this.setupRenderTarget=st,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=Yt,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=He}function O_(s,e){function t(n,i=si){let r;const a=Be.getTransfer(i);if(n===jn)return s.UNSIGNED_BYTE;if(n===Cl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Pl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===bd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===md)return s.BYTE;if(n===gd)return s.SHORT;if(n===nr)return s.UNSIGNED_SHORT;if(n===kl)return s.INT;if(n===ki)return s.UNSIGNED_INT;if(n===dn)return s.FLOAT;if(n===dr)return s.HALF_FLOAT;if(n===_d)return s.ALPHA;if(n===vd)return s.RGB;if(n===tn)return s.RGBA;if(n===xd)return s.LUMINANCE;if(n===yd)return s.LUMINANCE_ALPHA;if(n===os)return s.DEPTH_COMPONENT;if(n===gs)return s.DEPTH_STENCIL;if(n===Ta)return s.RED;if(n===Ll)return s.RED_INTEGER;if(n===Md)return s.RG;if(n===Il)return s.RG_INTEGER;if(n===Dl)return s.RGBA_INTEGER;if(n===sa||n===ra||n===aa||n===oa)if(a===tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===sa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===sa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===oa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Bo||n===zo||n===Ho||n===Go)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Bo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===zo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ho)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Go)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vo||n===jo||n===Wo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Vo||n===jo)return a===tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wo)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Xo||n===qo||n===Ko||n===Yo||n===$o||n===Zo||n===Jo||n===Qo||n===el||n===tl||n===nl||n===il||n===sl||n===rl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Xo)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qo)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ko)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yo)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$o)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Zo)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Jo)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qo)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===el)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tl)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===nl)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===il)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===sl)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===rl)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===la||n===al||n===ol)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===la)return a===tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===al)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ol)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sd||n===ll||n===cl||n===hl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===la)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ll)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===cl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===hl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ms?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class B_ extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class nn extends lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const z_={type:"move"};class ao{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const b of e.hand.values()){const m=t.getJointPose(b,n),f=this._getHandJoint(c,b);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(z_)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new nn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const H_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,G_=`
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

}`;class V_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new bt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new di({vertexShader:H_,fragmentShader:G_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ct(new Li(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class j_ extends Pi{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,h=null,u=null,p=null,g=null;const b=new V_,m=t.getContextAttributes();let f=null,v=null;const y=[],_=[],k=new Ae;let R=null;const A=new kt;A.viewport=new Ke;const T=new kt;T.viewport=new Ke;const x=[A,T],M=new B_;let w=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=y[q];return Q===void 0&&(Q=new ao,y[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=y[q];return Q===void 0&&(Q=new ao,y[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=y[q];return Q===void 0&&(Q=new ao,y[q]=Q),Q.getHandSpace()};function F(q){const Q=_.indexOf(q.inputSource);if(Q===-1)return;const ge=y[Q];ge!==void 0&&(ge.update(q.inputSource,q.frame,c||a),ge.dispatchEvent({type:q.type,data:q.inputSource}))}function B(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",V);for(let q=0;q<y.length;q++){const Q=_[q];Q!==null&&(_[q]=null,y[q].disconnect(Q))}w=null,L=null,b.reset(),e.setRenderTarget(f),p=null,u=null,h=null,i=null,v=null,Je.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(k.width,k.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",B),i.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(k),i.renderState.layers===void 0){const Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,Q),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new hi(p.framebufferWidth,p.framebufferHeight,{format:tn,type:jn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,ge=null,se=null;m.depth&&(se=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=m.stencil?gs:os,ge=m.stencil?ms:ki);const Se={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:r};h=new XRWebGLBinding(i,t),u=h.createProjectionLayer(Se),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new hi(u.textureWidth,u.textureHeight,{format:tn,type:jn,depthTexture:new Bd(u.textureWidth,u.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Je.setContext(i),Je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function V(q){for(let Q=0;Q<q.removed.length;Q++){const ge=q.removed[Q],se=_.indexOf(ge);se>=0&&(_[se]=null,y[se].disconnect(ge))}for(let Q=0;Q<q.added.length;Q++){const ge=q.added[Q];let se=_.indexOf(ge);if(se===-1){for(let re=0;re<y.length;re++)if(re>=_.length){_.push(ge),se=re;break}else if(_[re]===null){_[re]=ge,se=re;break}if(se===-1)break}const Se=y[se];Se&&Se.connect(ge)}}const H=new P,Z=new P;function j(q,Q,ge){H.setFromMatrixPosition(Q.matrixWorld),Z.setFromMatrixPosition(ge.matrixWorld);const se=H.distanceTo(Z),Se=Q.projectionMatrix.elements,re=ge.projectionMatrix.elements,Re=Se[14]/(Se[10]-1),st=Se[14]/(Se[10]+1),Ve=(Se[9]+1)/Se[5],dt=(Se[9]-1)/Se[5],N=(Se[8]-1)/Se[0],Yt=(re[8]+1)/re[0],ze=Re*N,He=Re*Yt,Te=se/(-N+Yt),rt=Te*-N;if(Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(rt),q.translateZ(Te),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Se[10]===-1)q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const Ee=Re+Te,C=st+Te,S=ze-rt,O=He+(se-rt),Y=Ve*st/C*Ee,J=dt*st/C*Ee;q.projectionMatrix.makePerspective(S,O,Y,J,Ee,C),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ie(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let Q=q.near,ge=q.far;b.texture!==null&&(b.depthNear>0&&(Q=b.depthNear),b.depthFar>0&&(ge=b.depthFar)),M.near=T.near=A.near=Q,M.far=T.far=A.far=ge,(w!==M.near||L!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,L=M.far),A.layers.mask=q.layers.mask|2,T.layers.mask=q.layers.mask|4,M.layers.mask=A.layers.mask|T.layers.mask;const se=q.parent,Se=M.cameras;ie(M,se);for(let re=0;re<Se.length;re++)ie(Se[re],se);Se.length===2?j(M,A,T):M.projectionMatrix.copy(A.projectionMatrix),de(q,M,se)};function de(q,Q,ge){ge===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(ge.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=bs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(M)};let xe=null;function Fe(q,Q){if(d=Q.getViewerPose(c||a),g=Q,d!==null){const ge=d.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let se=!1;ge.length!==M.cameras.length&&(M.cameras.length=0,se=!0);for(let re=0;re<ge.length;re++){const Re=ge[re];let st=null;if(p!==null)st=p.getViewport(Re);else{const dt=h.getViewSubImage(u,Re);st=dt.viewport,re===0&&(e.setRenderTargetTextures(v,dt.colorTexture,u.ignoreDepthValues?void 0:dt.depthStencilTexture),e.setRenderTarget(v))}let Ve=x[re];Ve===void 0&&(Ve=new kt,Ve.layers.enable(re),Ve.viewport=new Ke,x[re]=Ve),Ve.matrix.fromArray(Re.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Re.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(st.x,st.y,st.width,st.height),re===0&&(M.matrix.copy(Ve.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),se===!0&&M.cameras.push(Ve)}const Se=i.enabledFeatures;if(Se&&Se.includes("depth-sensing")){const re=h.getDepthInformation(ge[0]);re&&re.isValid&&re.texture&&b.init(e,re,i.renderState)}}for(let ge=0;ge<y.length;ge++){const se=_[ge],Se=y[ge];se!==null&&Se!==void 0&&Se.update(se,Q,c||a)}xe&&xe(q,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Je=new Od;Je.setAnimationLoop(Fe),this.setAnimationLoop=function(q){xe=q},this.dispose=function(){}}}const _i=new Mn,W_=new ke;function X_(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Ud(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,v,y,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),d(m,f)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,_)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),b(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,v,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Gt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Gt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=e.get(f),y=v.envMap,_=v.envMapRotation;y&&(m.envMap.value=y,_i.copy(_),_i.x*=-1,_i.y*=-1,_i.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),m.envMapRotation.value.setFromMatrix4(W_.makeRotationFromEuler(_i)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=y*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function d(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Gt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function b(m,f){const v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function q_(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const _=y.program;n.uniformBlockBinding(v,_)}function c(v,y){let _=i[v.id];_===void 0&&(g(v),_=d(v),i[v.id]=_,v.addEventListener("dispose",m));const k=y.program;n.updateUBOMapping(v,k);const R=e.render.frame;r[v.id]!==R&&(u(v),r[v.id]=R)}function d(v){const y=h();v.__bindingPointIndex=y;const _=s.createBuffer(),k=v.__size,R=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,k,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,_),_}function h(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const y=i[v.id],_=v.uniforms,k=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let R=0,A=_.length;R<A;R++){const T=Array.isArray(_[R])?_[R]:[_[R]];for(let x=0,M=T.length;x<M;x++){const w=T[x];if(p(w,R,x,k)===!0){const L=w.__offset,F=Array.isArray(w.value)?w.value:[w.value];let B=0;for(let V=0;V<F.length;V++){const H=F[V],Z=b(H);typeof H=="number"||typeof H=="boolean"?(w.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,L+B,w.__data)):H.isMatrix3?(w.__data[0]=H.elements[0],w.__data[1]=H.elements[1],w.__data[2]=H.elements[2],w.__data[3]=0,w.__data[4]=H.elements[3],w.__data[5]=H.elements[4],w.__data[6]=H.elements[5],w.__data[7]=0,w.__data[8]=H.elements[6],w.__data[9]=H.elements[7],w.__data[10]=H.elements[8],w.__data[11]=0):(H.toArray(w.__data,B),B+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,L,w.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(v,y,_,k){const R=v.value,A=y+"_"+_;if(k[A]===void 0)return typeof R=="number"||typeof R=="boolean"?k[A]=R:k[A]=R.clone(),!0;{const T=k[A];if(typeof R=="number"||typeof R=="boolean"){if(T!==R)return k[A]=R,!0}else if(T.equals(R)===!1)return T.copy(R),!0}return!1}function g(v){const y=v.uniforms;let _=0;const k=16;for(let A=0,T=y.length;A<T;A++){const x=Array.isArray(y[A])?y[A]:[y[A]];for(let M=0,w=x.length;M<w;M++){const L=x[M],F=Array.isArray(L.value)?L.value:[L.value];for(let B=0,V=F.length;B<V;B++){const H=F[B],Z=b(H),j=_%k,ie=j%Z.boundary,de=j+ie;_+=ie,de!==0&&k-de<Z.storage&&(_+=k-de),L.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=_,_+=Z.storage}}}const R=_%k;return R>0&&(_+=k-R),v.__size=_,v.__cache={},this}function b(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const _=a.indexOf(y.__bindingPointIndex);a.splice(_,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function f(){for(const v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:l,update:c,dispose:f}}class K_{constructor(e={}){const{canvas:t=Nf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),b=new Int32Array(4);let m=null,f=null;const v=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ut,this.toneMapping=ci,this.toneMappingExposure=1;const _=this;let k=!1,R=0,A=0,T=null,x=-1,M=null;const w=new Ke,L=new Ke;let F=null;const B=new me(0);let V=0,H=t.width,Z=t.height,j=1,ie=null,de=null;const xe=new Ke(0,0,H,Z),Fe=new Ke(0,0,H,Z);let Je=!1;const q=new Ol;let Q=!1,ge=!1;const se=new ke,Se=new ke,re=new P,Re=new Ke,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function dt(){return T===null?j:1}let N=n;function Yt(E,D){return t.getContext(E,D)}try{const E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Rl}`),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",le,!1),N===null){const D="webgl2";if(N=Yt(D,E),N===null)throw Yt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ze,He,Te,rt,Ee,C,S,O,Y,J,K,ye,oe,ue,je,ee,fe,we,Ce,pe,Ge,Ue,nt,I;function ae(){ze=new Qg(N),ze.init(),Ue=new O_(N,ze),He=new qg(N,ze,e,Ue),Te=new U_(N,ze),He.reverseDepthBuffer&&u&&Te.buffers.depth.setReversed(!0),rt=new nb(N),Ee=new x_,C=new F_(N,ze,Te,Ee,He,Ue,rt),S=new Yg(_),O=new Jg(_),Y=new cp(N),nt=new Wg(N,Y),J=new eb(N,Y,rt,nt),K=new sb(N,J,Y,rt),Ce=new ib(N,He,C),ee=new Kg(Ee),ye=new v_(_,S,O,ze,He,nt,ee),oe=new X_(_,Ee),ue=new M_,je=new R_(ze),we=new jg(_,S,O,Te,K,p,l),fe=new I_(_,K,He),I=new q_(N,rt,He,Te),pe=new Xg(N,ze,rt),Ge=new tb(N,ze,rt),rt.programs=ye.programs,_.capabilities=He,_.extensions=ze,_.properties=Ee,_.renderLists=ue,_.shadowMap=fe,_.state=Te,_.info=rt}ae();const W=new j_(_,N);this.xr=W,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const E=ze.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ze.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(E){E!==void 0&&(j=E,this.setSize(H,Z,!1))},this.getSize=function(E){return E.set(H,Z)},this.setSize=function(E,D,z=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=E,Z=D,t.width=Math.floor(E*j),t.height=Math.floor(D*j),z===!0&&(t.style.width=E+"px",t.style.height=D+"px"),this.setViewport(0,0,E,D)},this.getDrawingBufferSize=function(E){return E.set(H*j,Z*j).floor()},this.setDrawingBufferSize=function(E,D,z){H=E,Z=D,j=z,t.width=Math.floor(E*z),t.height=Math.floor(D*z),this.setViewport(0,0,E,D)},this.getCurrentViewport=function(E){return E.copy(w)},this.getViewport=function(E){return E.copy(xe)},this.setViewport=function(E,D,z,G){E.isVector4?xe.set(E.x,E.y,E.z,E.w):xe.set(E,D,z,G),Te.viewport(w.copy(xe).multiplyScalar(j).round())},this.getScissor=function(E){return E.copy(Fe)},this.setScissor=function(E,D,z,G){E.isVector4?Fe.set(E.x,E.y,E.z,E.w):Fe.set(E,D,z,G),Te.scissor(L.copy(Fe).multiplyScalar(j).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(E){Te.setScissorTest(Je=E)},this.setOpaqueSort=function(E){ie=E},this.setTransparentSort=function(E){de=E},this.getClearColor=function(E){return E.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor.apply(we,arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha.apply(we,arguments)},this.clear=function(E=!0,D=!0,z=!0){let G=0;if(E){let U=!1;if(T!==null){const te=T.texture.format;U=te===Dl||te===Il||te===Ll}if(U){const te=T.texture.type,ce=te===jn||te===ki||te===nr||te===ms||te===Cl||te===Pl,be=we.getClearColor(),_e=we.getClearAlpha(),Pe=be.r,Ie=be.g,ve=be.b;ce?(g[0]=Pe,g[1]=Ie,g[2]=ve,g[3]=_e,N.clearBufferuiv(N.COLOR,0,g)):(b[0]=Pe,b[1]=Ie,b[2]=ve,b[3]=_e,N.clearBufferiv(N.COLOR,0,b))}else G|=N.COLOR_BUFFER_BIT}D&&(G|=N.DEPTH_BUFFER_BIT),z&&(G|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",le,!1),ue.dispose(),je.dispose(),Ee.dispose(),S.dispose(),O.dispose(),K.dispose(),nt.dispose(),I.dispose(),ye.dispose(),W.dispose(),W.removeEventListener("sessionstart",rc),W.removeEventListener("sessionend",ac),ui.stop()};function $(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const E=rt.autoReset,D=fe.enabled,z=fe.autoUpdate,G=fe.needsUpdate,U=fe.type;ae(),rt.autoReset=E,fe.enabled=D,fe.autoUpdate=z,fe.needsUpdate=G,fe.type=U}function le(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Le(E){const D=E.target;D.removeEventListener("dispose",Le),ht(D)}function ht(E){Et(E),Ee.remove(E)}function Et(E){const D=Ee.get(E).programs;D!==void 0&&(D.forEach(function(z){ye.releaseProgram(z)}),E.isShaderMaterial&&ye.releaseShaderCache(E))}this.renderBufferDirect=function(E,D,z,G,U,te){D===null&&(D=st);const ce=U.isMesh&&U.matrixWorld.determinant()<0,be=Ru(E,D,z,G,U);Te.setMaterial(G,ce);let _e=z.index,Pe=1;if(G.wireframe===!0){if(_e=J.getWireframeAttribute(z),_e===void 0)return;Pe=2}const Ie=z.drawRange,ve=z.attributes.position;let Xe=Ie.start*Pe,it=(Ie.start+Ie.count)*Pe;te!==null&&(Xe=Math.max(Xe,te.start*Pe),it=Math.min(it,(te.start+te.count)*Pe)),_e!==null?(Xe=Math.max(Xe,0),it=Math.min(it,_e.count)):ve!=null&&(Xe=Math.max(Xe,0),it=Math.min(it,ve.count));const at=it-Xe;if(at<0||at===1/0)return;nt.setup(U,G,be,z,_e);let Nt,Ye=pe;if(_e!==null&&(Nt=Y.get(_e),Ye=Ge,Ye.setIndex(Nt)),U.isMesh)G.wireframe===!0?(Te.setLineWidth(G.wireframeLinewidth*dt()),Ye.setMode(N.LINES)):Ye.setMode(N.TRIANGLES);else if(U.isLine){let Me=G.linewidth;Me===void 0&&(Me=1),Te.setLineWidth(Me*dt()),U.isLineSegments?Ye.setMode(N.LINES):U.isLineLoop?Ye.setMode(N.LINE_LOOP):Ye.setMode(N.LINE_STRIP)}else U.isPoints?Ye.setMode(N.POINTS):U.isSprite&&Ye.setMode(N.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Ye.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(ze.get("WEBGL_multi_draw"))Ye.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Me=U._multiDrawStarts,wn=U._multiDrawCounts,$e=U._multiDrawCount,an=_e?Y.get(_e).bytesPerElement:1,Ii=Ee.get(G).currentProgram.getUniforms();for(let jt=0;jt<$e;jt++)Ii.setValue(N,"_gl_DrawID",jt),Ye.render(Me[jt]/an,wn[jt])}else if(U.isInstancedMesh)Ye.renderInstances(Xe,at,U.count);else if(z.isInstancedBufferGeometry){const Me=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,wn=Math.min(z.instanceCount,Me);Ye.renderInstances(Xe,at,wn)}else Ye.render(Xe,at)};function Qe(E,D,z){E.transparent===!0&&E.side===Qt&&E.forceSinglePass===!1?(E.side=Gt,E.needsUpdate=!0,br(E,D,z),E.side=Vn,E.needsUpdate=!0,br(E,D,z),E.side=Qt):br(E,D,z)}this.compile=function(E,D,z=null){z===null&&(z=E),f=je.get(z),f.init(D),y.push(f),z.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),E!==z&&E.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();const G=new Set;return E.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const te=U.material;if(te)if(Array.isArray(te))for(let ce=0;ce<te.length;ce++){const be=te[ce];Qe(be,z,U),G.add(be)}else Qe(te,z,U),G.add(te)}),y.pop(),f=null,G},this.compileAsync=function(E,D,z=null){const G=this.compile(E,D,z);return new Promise(U=>{function te(){if(G.forEach(function(ce){Ee.get(ce).currentProgram.isReady()&&G.delete(ce)}),G.size===0){U(E);return}setTimeout(te,10)}ze.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let rn=null;function An(E){rn&&rn(E)}function rc(){ui.stop()}function ac(){ui.start()}const ui=new Od;ui.setAnimationLoop(An),typeof self<"u"&&ui.setContext(self),this.setAnimationLoop=function(E){rn=E,W.setAnimationLoop(E),E===null?ui.stop():ui.start()},W.addEventListener("sessionstart",rc),W.addEventListener("sessionend",ac),this.render=function(E,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(D),D=W.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,D,T),f=je.get(E,y.length),f.init(D),y.push(f),Se.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),q.setFromProjectionMatrix(Se),ge=this.localClippingEnabled,Q=ee.init(this.clippingPlanes,ge),m=ue.get(E,v.length),m.init(),v.push(m),W.enabled===!0&&W.isPresenting===!0){const te=_.xr.getDepthSensingMesh();te!==null&&La(te,D,-1/0,_.sortObjects)}La(E,D,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(ie,de),Ve=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Ve&&we.addToRenderList(m,E),this.info.render.frame++,Q===!0&&ee.beginShadows();const z=f.state.shadowsArray;fe.render(z,E,D),Q===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,U=m.transmissive;if(f.setupLights(),D.isArrayCamera){const te=D.cameras;if(U.length>0)for(let ce=0,be=te.length;ce<be;ce++){const _e=te[ce];lc(G,U,E,_e)}Ve&&we.render(E);for(let ce=0,be=te.length;ce<be;ce++){const _e=te[ce];oc(m,E,_e,_e.viewport)}}else U.length>0&&lc(G,U,E,D),Ve&&we.render(E),oc(m,E,D);T!==null&&(C.updateMultisampleRenderTarget(T),C.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(_,E,D),nt.resetDefaultState(),x=-1,M=null,y.pop(),y.length>0?(f=y[y.length-1],Q===!0&&ee.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function La(E,D,z,G){if(E.visible===!1)return;if(E.layers.test(D.layers)){if(E.isGroup)z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(D);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||q.intersectsSprite(E)){G&&Re.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Se);const ce=K.update(E),be=E.material;be.visible&&m.push(E,ce,be,z,Re.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||q.intersectsObject(E))){const ce=K.update(E),be=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Re.copy(E.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Re.copy(ce.boundingSphere.center)),Re.applyMatrix4(E.matrixWorld).applyMatrix4(Se)),Array.isArray(be)){const _e=ce.groups;for(let Pe=0,Ie=_e.length;Pe<Ie;Pe++){const ve=_e[Pe],Xe=be[ve.materialIndex];Xe&&Xe.visible&&m.push(E,ce,Xe,z,Re.z,ve)}}else be.visible&&m.push(E,ce,be,z,Re.z,null)}}const te=E.children;for(let ce=0,be=te.length;ce<be;ce++)La(te[ce],D,z,G)}function oc(E,D,z,G){const U=E.opaque,te=E.transmissive,ce=E.transparent;f.setupLightsView(z),Q===!0&&ee.setGlobalState(_.clippingPlanes,z),G&&Te.viewport(w.copy(G)),U.length>0&&gr(U,D,z),te.length>0&&gr(te,D,z),ce.length>0&&gr(ce,D,z),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function lc(E,D,z,G){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[G.id]===void 0&&(f.state.transmissionRenderTarget[G.id]=new hi(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float")?dr:jn,minFilter:On,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Be.workingColorSpace}));const te=f.state.transmissionRenderTarget[G.id],ce=G.viewport||w;te.setSize(ce.z,ce.w);const be=_.getRenderTarget();_.setRenderTarget(te),_.getClearColor(B),V=_.getClearAlpha(),V<1&&_.setClearColor(16777215,.5),_.clear(),Ve&&we.render(z);const _e=_.toneMapping;_.toneMapping=ci;const Pe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),f.setupLightsView(G),Q===!0&&ee.setGlobalState(_.clippingPlanes,G),gr(E,z,G),C.updateMultisampleRenderTarget(te),C.updateRenderTargetMipmap(te),ze.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let ve=0,Xe=D.length;ve<Xe;ve++){const it=D[ve],at=it.object,Nt=it.geometry,Ye=it.material,Me=it.group;if(Ye.side===Qt&&at.layers.test(G.layers)){const wn=Ye.side;Ye.side=Gt,Ye.needsUpdate=!0,cc(at,z,G,Nt,Ye,Me),Ye.side=wn,Ye.needsUpdate=!0,Ie=!0}}Ie===!0&&(C.updateMultisampleRenderTarget(te),C.updateRenderTargetMipmap(te))}_.setRenderTarget(be),_.setClearColor(B,V),Pe!==void 0&&(G.viewport=Pe),_.toneMapping=_e}function gr(E,D,z){const G=D.isScene===!0?D.overrideMaterial:null;for(let U=0,te=E.length;U<te;U++){const ce=E[U],be=ce.object,_e=ce.geometry,Pe=G===null?ce.material:G,Ie=ce.group;be.layers.test(z.layers)&&cc(be,D,z,_e,Pe,Ie)}}function cc(E,D,z,G,U,te){E.onBeforeRender(_,D,z,G,U,te),E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),U.onBeforeRender(_,D,z,G,E,te),U.transparent===!0&&U.side===Qt&&U.forceSinglePass===!1?(U.side=Gt,U.needsUpdate=!0,_.renderBufferDirect(z,D,G,U,E,te),U.side=Vn,U.needsUpdate=!0,_.renderBufferDirect(z,D,G,U,E,te),U.side=Qt):_.renderBufferDirect(z,D,G,U,E,te),E.onAfterRender(_,D,z,G,U,te)}function br(E,D,z){D.isScene!==!0&&(D=st);const G=Ee.get(E),U=f.state.lights,te=f.state.shadowsArray,ce=U.state.version,be=ye.getParameters(E,U.state,te,D,z),_e=ye.getProgramCacheKey(be);let Pe=G.programs;G.environment=E.isMeshStandardMaterial?D.environment:null,G.fog=D.fog,G.envMap=(E.isMeshStandardMaterial?O:S).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?D.environmentRotation:E.envMapRotation,Pe===void 0&&(E.addEventListener("dispose",Le),Pe=new Map,G.programs=Pe);let Ie=Pe.get(_e);if(Ie!==void 0){if(G.currentProgram===Ie&&G.lightsStateVersion===ce)return dc(E,be),Ie}else be.uniforms=ye.getUniforms(E),E.onBeforeCompile(be,_),Ie=ye.acquireProgram(be,_e),Pe.set(_e,Ie),G.uniforms=be.uniforms;const ve=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ve.clippingPlanes=ee.uniform),dc(E,be),G.needsLights=Cu(E),G.lightsStateVersion=ce,G.needsLights&&(ve.ambientLightColor.value=U.state.ambient,ve.lightProbe.value=U.state.probe,ve.directionalLights.value=U.state.directional,ve.directionalLightShadows.value=U.state.directionalShadow,ve.spotLights.value=U.state.spot,ve.spotLightShadows.value=U.state.spotShadow,ve.rectAreaLights.value=U.state.rectArea,ve.ltc_1.value=U.state.rectAreaLTC1,ve.ltc_2.value=U.state.rectAreaLTC2,ve.pointLights.value=U.state.point,ve.pointLightShadows.value=U.state.pointShadow,ve.hemisphereLights.value=U.state.hemi,ve.directionalShadowMap.value=U.state.directionalShadowMap,ve.directionalShadowMatrix.value=U.state.directionalShadowMatrix,ve.spotShadowMap.value=U.state.spotShadowMap,ve.spotLightMatrix.value=U.state.spotLightMatrix,ve.spotLightMap.value=U.state.spotLightMap,ve.pointShadowMap.value=U.state.pointShadowMap,ve.pointShadowMatrix.value=U.state.pointShadowMatrix),G.currentProgram=Ie,G.uniformsList=null,Ie}function hc(E){if(E.uniformsList===null){const D=E.currentProgram.getUniforms();E.uniformsList=ca.seqWithValue(D.seq,E.uniforms)}return E.uniformsList}function dc(E,D){const z=Ee.get(E);z.outputColorSpace=D.outputColorSpace,z.batching=D.batching,z.batchingColor=D.batchingColor,z.instancing=D.instancing,z.instancingColor=D.instancingColor,z.instancingMorph=D.instancingMorph,z.skinning=D.skinning,z.morphTargets=D.morphTargets,z.morphNormals=D.morphNormals,z.morphColors=D.morphColors,z.morphTargetsCount=D.morphTargetsCount,z.numClippingPlanes=D.numClippingPlanes,z.numIntersection=D.numClipIntersection,z.vertexAlphas=D.vertexAlphas,z.vertexTangents=D.vertexTangents,z.toneMapping=D.toneMapping}function Ru(E,D,z,G,U){D.isScene!==!0&&(D=st),C.resetTextureUnits();const te=D.fog,ce=G.isMeshStandardMaterial?D.environment:null,be=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ut,_e=(G.isMeshStandardMaterial?O:S).get(G.envMap||ce),Pe=G.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ie=!!z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),ve=!!z.morphAttributes.position,Xe=!!z.morphAttributes.normal,it=!!z.morphAttributes.color;let at=ci;G.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(at=_.toneMapping);const Nt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ye=Nt!==void 0?Nt.length:0,Me=Ee.get(G),wn=f.state.lights;if(Q===!0&&(ge===!0||E!==M)){const $t=E===M&&G.id===x;ee.setState(G,E,$t)}let $e=!1;G.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==wn.state.version||Me.outputColorSpace!==be||U.isBatchedMesh&&Me.batching===!1||!U.isBatchedMesh&&Me.batching===!0||U.isBatchedMesh&&Me.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Me.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Me.instancing===!1||!U.isInstancedMesh&&Me.instancing===!0||U.isSkinnedMesh&&Me.skinning===!1||!U.isSkinnedMesh&&Me.skinning===!0||U.isInstancedMesh&&Me.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Me.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Me.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Me.instancingMorph===!1&&U.morphTexture!==null||Me.envMap!==_e||G.fog===!0&&Me.fog!==te||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==ee.numPlanes||Me.numIntersection!==ee.numIntersection)||Me.vertexAlphas!==Pe||Me.vertexTangents!==Ie||Me.morphTargets!==ve||Me.morphNormals!==Xe||Me.morphColors!==it||Me.toneMapping!==at||Me.morphTargetsCount!==Ye)&&($e=!0):($e=!0,Me.__version=G.version);let an=Me.currentProgram;$e===!0&&(an=br(G,D,U));let Ii=!1,jt=!1,Cs=!1;const ot=an.getUniforms(),pn=Me.uniforms;if(Te.useProgram(an.program)&&(Ii=!0,jt=!0,Cs=!0),G.id!==x&&(x=G.id,jt=!0),Ii||M!==E){Te.buffers.depth.getReversed()?(se.copy(E.projectionMatrix),Of(se),Bf(se),ot.setValue(N,"projectionMatrix",se)):ot.setValue(N,"projectionMatrix",E.projectionMatrix),ot.setValue(N,"viewMatrix",E.matrixWorldInverse);const Wn=ot.map.cameraPosition;Wn!==void 0&&Wn.setValue(N,re.setFromMatrixPosition(E.matrixWorld)),He.logarithmicDepthBuffer&&ot.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ot.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,jt=!0,Cs=!0)}if(U.isSkinnedMesh){ot.setOptional(N,U,"bindMatrix"),ot.setOptional(N,U,"bindMatrixInverse");const $t=U.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),ot.setValue(N,"boneTexture",$t.boneTexture,C))}U.isBatchedMesh&&(ot.setOptional(N,U,"batchingTexture"),ot.setValue(N,"batchingTexture",U._matricesTexture,C),ot.setOptional(N,U,"batchingIdTexture"),ot.setValue(N,"batchingIdTexture",U._indirectTexture,C),ot.setOptional(N,U,"batchingColorTexture"),U._colorsTexture!==null&&ot.setValue(N,"batchingColorTexture",U._colorsTexture,C));const Ps=z.morphAttributes;if((Ps.position!==void 0||Ps.normal!==void 0||Ps.color!==void 0)&&Ce.update(U,z,an),(jt||Me.receiveShadow!==U.receiveShadow)&&(Me.receiveShadow=U.receiveShadow,ot.setValue(N,"receiveShadow",U.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(pn.envMap.value=_e,pn.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&D.environment!==null&&(pn.envMapIntensity.value=D.environmentIntensity),jt&&(ot.setValue(N,"toneMappingExposure",_.toneMappingExposure),Me.needsLights&&ku(pn,Cs),te&&G.fog===!0&&oe.refreshFogUniforms(pn,te),oe.refreshMaterialUniforms(pn,G,j,Z,f.state.transmissionRenderTarget[E.id]),ca.upload(N,hc(Me),pn,C)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ca.upload(N,hc(Me),pn,C),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ot.setValue(N,"center",U.center),ot.setValue(N,"modelViewMatrix",U.modelViewMatrix),ot.setValue(N,"normalMatrix",U.normalMatrix),ot.setValue(N,"modelMatrix",U.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const $t=G.uniformsGroups;for(let Wn=0,Xn=$t.length;Wn<Xn;Wn++){const uc=$t[Wn];I.update(uc,an),I.bind(uc,an)}}return an}function ku(E,D){E.ambientLightColor.needsUpdate=D,E.lightProbe.needsUpdate=D,E.directionalLights.needsUpdate=D,E.directionalLightShadows.needsUpdate=D,E.pointLights.needsUpdate=D,E.pointLightShadows.needsUpdate=D,E.spotLights.needsUpdate=D,E.spotLightShadows.needsUpdate=D,E.rectAreaLights.needsUpdate=D,E.hemisphereLights.needsUpdate=D}function Cu(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,D,z){Ee.get(E.texture).__webglTexture=D,Ee.get(E.depthTexture).__webglTexture=z;const G=Ee.get(E);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=z===void 0,G.__autoAllocateDepthBuffer||ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,D){const z=Ee.get(E);z.__webglFramebuffer=D,z.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(E,D=0,z=0){T=E,R=D,A=z;let G=!0,U=null,te=!1,ce=!1;if(E){const _e=Ee.get(E);if(_e.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(N.FRAMEBUFFER,null),G=!1;else if(_e.__webglFramebuffer===void 0)C.setupRenderTarget(E);else if(_e.__hasExternalTextures)C.rebindTextures(E,Ee.get(E.texture).__webglTexture,Ee.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ve=E.depthTexture;if(_e.__boundDepthTexture!==ve){if(ve!==null&&Ee.has(ve)&&(E.width!==ve.image.width||E.height!==ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(E)}}const Pe=E.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(ce=!0);const Ie=Ee.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ie[D])?U=Ie[D][z]:U=Ie[D],te=!0):E.samples>0&&C.useMultisampledRTT(E)===!1?U=Ee.get(E).__webglMultisampledFramebuffer:Array.isArray(Ie)?U=Ie[z]:U=Ie,w.copy(E.viewport),L.copy(E.scissor),F=E.scissorTest}else w.copy(xe).multiplyScalar(j).floor(),L.copy(Fe).multiplyScalar(j).floor(),F=Je;if(Te.bindFramebuffer(N.FRAMEBUFFER,U)&&G&&Te.drawBuffers(E,U),Te.viewport(w),Te.scissor(L),Te.setScissorTest(F),te){const _e=Ee.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,_e.__webglTexture,z)}else if(ce){const _e=Ee.get(E.texture),Pe=D||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,_e.__webglTexture,z||0,Pe)}x=-1},this.readRenderTargetPixels=function(E,D,z,G,U,te,ce){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Ee.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ce!==void 0&&(be=be[ce]),be){Te.bindFramebuffer(N.FRAMEBUFFER,be);try{const _e=E.texture,Pe=_e.format,Ie=_e.type;if(!He.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=E.width-G&&z>=0&&z<=E.height-U&&N.readPixels(D,z,G,U,Ue.convert(Pe),Ue.convert(Ie),te)}finally{const _e=T!==null?Ee.get(T).__webglFramebuffer:null;Te.bindFramebuffer(N.FRAMEBUFFER,_e)}}},this.readRenderTargetPixelsAsync=async function(E,D,z,G,U,te,ce){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Ee.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ce!==void 0&&(be=be[ce]),be){const _e=E.texture,Pe=_e.format,Ie=_e.type;if(!He.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=E.width-G&&z>=0&&z<=E.height-U){Te.bindFramebuffer(N.FRAMEBUFFER,be);const ve=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ve),N.bufferData(N.PIXEL_PACK_BUFFER,te.byteLength,N.STREAM_READ),N.readPixels(D,z,G,U,Ue.convert(Pe),Ue.convert(Ie),0);const Xe=T!==null?Ee.get(T).__webglFramebuffer:null;Te.bindFramebuffer(N.FRAMEBUFFER,Xe);const it=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Ff(N,it,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ve),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,te),N.deleteBuffer(ve),N.deleteSync(it),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,D=null,z=0){E.isTexture!==!0&&(Ks("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,E=arguments[1]);const G=Math.pow(2,-z),U=Math.floor(E.image.width*G),te=Math.floor(E.image.height*G),ce=D!==null?D.x:0,be=D!==null?D.y:0;C.setTexture2D(E,0),N.copyTexSubImage2D(N.TEXTURE_2D,z,0,0,ce,be,U,te),Te.unbindTexture()},this.copyTextureToTexture=function(E,D,z=null,G=null,U=0){E.isTexture!==!0&&(Ks("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,E=arguments[1],D=arguments[2],U=arguments[3]||0,z=null);let te,ce,be,_e,Pe,Ie,ve,Xe,it;const at=E.isCompressedTexture?E.mipmaps[U]:E.image;z!==null?(te=z.max.x-z.min.x,ce=z.max.y-z.min.y,be=z.isBox3?z.max.z-z.min.z:1,_e=z.min.x,Pe=z.min.y,Ie=z.isBox3?z.min.z:0):(te=at.width,ce=at.height,be=at.depth||1,_e=0,Pe=0,Ie=0),G!==null?(ve=G.x,Xe=G.y,it=G.z):(ve=0,Xe=0,it=0);const Nt=Ue.convert(D.format),Ye=Ue.convert(D.type);let Me;D.isData3DTexture?(C.setTexture3D(D,0),Me=N.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(C.setTexture2DArray(D,0),Me=N.TEXTURE_2D_ARRAY):(C.setTexture2D(D,0),Me=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);const wn=N.getParameter(N.UNPACK_ROW_LENGTH),$e=N.getParameter(N.UNPACK_IMAGE_HEIGHT),an=N.getParameter(N.UNPACK_SKIP_PIXELS),Ii=N.getParameter(N.UNPACK_SKIP_ROWS),jt=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,at.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,at.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,_e),N.pixelStorei(N.UNPACK_SKIP_ROWS,Pe),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ie);const Cs=E.isDataArrayTexture||E.isData3DTexture,ot=D.isDataArrayTexture||D.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const pn=Ee.get(E),Ps=Ee.get(D),$t=Ee.get(pn.__renderTarget),Wn=Ee.get(Ps.__renderTarget);Te.bindFramebuffer(N.READ_FRAMEBUFFER,$t.__webglFramebuffer),Te.bindFramebuffer(N.DRAW_FRAMEBUFFER,Wn.__webglFramebuffer);for(let Xn=0;Xn<be;Xn++)Cs&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ee.get(E).__webglTexture,U,Ie+Xn),E.isDepthTexture?(ot&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ee.get(D).__webglTexture,U,it+Xn),N.blitFramebuffer(_e,Pe,te,ce,ve,Xe,te,ce,N.DEPTH_BUFFER_BIT,N.NEAREST)):ot?N.copyTexSubImage3D(Me,U,ve,Xe,it+Xn,_e,Pe,te,ce):N.copyTexSubImage2D(Me,U,ve,Xe,it+Xn,_e,Pe,te,ce);Te.bindFramebuffer(N.READ_FRAMEBUFFER,null),Te.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ot?E.isDataTexture||E.isData3DTexture?N.texSubImage3D(Me,U,ve,Xe,it,te,ce,be,Nt,Ye,at.data):D.isCompressedArrayTexture?N.compressedTexSubImage3D(Me,U,ve,Xe,it,te,ce,be,Nt,at.data):N.texSubImage3D(Me,U,ve,Xe,it,te,ce,be,Nt,Ye,at):E.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,U,ve,Xe,te,ce,Nt,Ye,at.data):E.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,U,ve,Xe,at.width,at.height,Nt,at.data):N.texSubImage2D(N.TEXTURE_2D,U,ve,Xe,te,ce,Nt,Ye,at);N.pixelStorei(N.UNPACK_ROW_LENGTH,wn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,$e),N.pixelStorei(N.UNPACK_SKIP_PIXELS,an),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ii),N.pixelStorei(N.UNPACK_SKIP_IMAGES,jt),U===0&&D.generateMipmaps&&N.generateMipmap(Me),Te.unbindTexture()},this.copyTextureToTexture3D=function(E,D,z=null,G=null,U=0){return E.isTexture!==!0&&(Ks("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,G=arguments[1]||null,E=arguments[2],D=arguments[3],U=arguments[4]||0),Ks('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,D,z,G,U)},this.initRenderTarget=function(E){Ee.get(E).__webglFramebuffer===void 0&&C.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),Te.unbindTexture()},this.resetState=function(){R=0,A=0,T=null,Te.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Be._getDrawingBufferColorSpace(e),t.unpackColorSpace=Be._getUnpackColorSpace()}}class Hl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new me(e),this.near=t,this.far=n}clone(){return new Hl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class jd extends lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Wd{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ul,this.updateRanges=[],this.version=0,this.uuid=un()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Pt=new P;class ar{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=hn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=hn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=hn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=hn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),r=et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Ct(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ar(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Xd extends fn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new me(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ki;const Ns=new P,Yi=new P,$i=new P,Zi=new Ae,Fs=new Ae,qd=new ke,Or=new P,Os=new P,Br=new P,dh=new Ae,oo=new Ae,uh=new Ae;class Y_ extends lt{constructor(e=new Xd){if(super(),this.isSprite=!0,this.type="Sprite",Ki===void 0){Ki=new Vt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Wd(t,5);Ki.setIndex([0,1,2,0,2,3]),Ki.setAttribute("position",new ar(n,3,0,!1)),Ki.setAttribute("uv",new ar(n,2,3,!1))}this.geometry=Ki,this.material=e,this.center=new Ae(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Yi.setFromMatrixScale(this.matrixWorld),qd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),$i.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Yi.multiplyScalar(-$i.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;zr(Or.set(-.5,-.5,0),$i,a,Yi,i,r),zr(Os.set(.5,-.5,0),$i,a,Yi,i,r),zr(Br.set(.5,.5,0),$i,a,Yi,i,r),dh.set(0,0),oo.set(1,0),uh.set(1,1);let o=e.ray.intersectTriangle(Or,Os,Br,!1,Ns);if(o===null&&(zr(Os.set(-.5,.5,0),$i,a,Yi,i,r),oo.set(0,1),o=e.ray.intersectTriangle(Or,Br,Os,!1,Ns),o===null))return;const l=e.ray.origin.distanceTo(Ns);l<e.near||l>e.far||t.push({distance:l,point:Ns.clone(),uv:en.getInterpolation(Ns,Or,Os,Br,dh,oo,uh,new Ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function zr(s,e,t,n,i,r){Zi.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Fs.x=r*Zi.x-i*Zi.y,Fs.y=i*Zi.x+r*Zi.y):Fs.copy(Zi),s.copy(e),s.x+=Fs.x,s.y+=Fs.y,s.applyMatrix4(qd)}const fh=new P,ph=new Ke,mh=new Ke,$_=new P,gh=new ke,Hr=new P,lo=new Sn,bh=new ke,co=new ur;class Z_ extends ct{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=gc,this.bindMatrix=new ke,this.bindMatrixInverse=new ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Kt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Hr),this.boundingBox.expandByPoint(Hr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Sn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Hr),this.boundingSphere.expandByPoint(Hr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lo.copy(this.boundingSphere),lo.applyMatrix4(i),e.ray.intersectsSphere(lo)!==!1&&(bh.copy(i).invert(),co.copy(e.ray).applyMatrix4(bh),!(this.boundingBox!==null&&co.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,co)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ke,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===gc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===af?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;ph.fromBufferAttribute(i.attributes.skinIndex,e),mh.fromBufferAttribute(i.attributes.skinWeight,e),fh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=mh.getComponent(r);if(a!==0){const o=ph.getComponent(r);gh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector($_.copy(fh).applyMatrix4(gh),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Kd extends lt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Gl extends bt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Dt,d=Dt,h,u){super(null,a,o,l,c,d,i,r,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _h=new ke,J_=new ke;class Vl{constructor(e=[],t=[]){this.uuid=un(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:J_;_h.multiplyMatrices(o,t[r]),_h.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Vl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Gl(t,e,e,tn,dn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Kd),this.bones.push(a),this.boneInverses.push(new ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class pl extends Ct{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ji=new ke,vh=new ke,Gr=[],xh=new Kt,Q_=new ke,Bs=new ct,zs=new Sn;class Yd extends ct{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new pl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Q_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Kt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ji),xh.copy(e.boundingBox).applyMatrix4(Ji),this.boundingBox.union(xh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Sn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ji),zs.copy(e.boundingSphere).applyMatrix4(Ji),this.boundingSphere.union(zs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Bs.geometry=this.geometry,Bs.material=this.material,Bs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zs.copy(this.boundingSphere),zs.applyMatrix4(n),e.ray.intersectsSphere(zs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ji),vh.multiplyMatrices(n,Ji),Bs.matrixWorld=vh,Bs.raycast(e,Gr);for(let a=0,o=Gr.length;a<o;a++){const l=Gr[a];l.instanceId=r,l.object=this,t.push(l)}Gr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new pl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Gl(new Float32Array(i*this.count),i,this.count,Ta,dn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class $d extends fn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ya=new P,Ma=new P,yh=new ke,Hs=new ur,Vr=new Sn,ho=new P,Mh=new P;class jl extends lt{constructor(e=new Vt,t=new $d){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ya.fromBufferAttribute(t,i-1),Ma.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ya.distanceTo(Ma);e.setAttribute("lineDistance",new yt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(i),Vr.radius+=r,e.ray.intersectsSphere(Vr)===!1)return;yh.copy(i).invert(),Hs.copy(e.ray).applyMatrix4(yh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){const p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let b=p,m=g-1;b<m;b+=c){const f=d.getX(b),v=d.getX(b+1),y=jr(this,e,Hs,l,f,v);y&&t.push(y)}if(this.isLineLoop){const b=d.getX(g-1),m=d.getX(p),f=jr(this,e,Hs,l,b,m);f&&t.push(f)}}else{const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let b=p,m=g-1;b<m;b+=c){const f=jr(this,e,Hs,l,b,b+1);f&&t.push(f)}if(this.isLineLoop){const b=jr(this,e,Hs,l,g-1,p);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function jr(s,e,t,n,i,r){const a=s.geometry.attributes.position;if(ya.fromBufferAttribute(a,i),Ma.fromBufferAttribute(a,r),t.distanceSqToSegment(ya,Ma,ho,Mh)>n)return;ho.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(ho);if(!(l<e.near||l>e.far))return{distance:l,point:Mh.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Sh=new P,Eh=new P;class ev extends jl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Sh.fromBufferAttribute(t,i),Eh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Sh.distanceTo(Eh);e.setAttribute("lineDistance",new yt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class tv extends jl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Zd extends fn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Th=new ke,ml=new ur,Wr=new Sn,Xr=new P;class nv extends lt{constructor(e=new Vt,t=new Zd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere),Wr.applyMatrix4(i),Wr.radius+=r,e.ray.intersectsSphere(Wr)===!1)return;Th.copy(i).invert(),ml.copy(e.ray).applyMatrix4(Th);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=u,b=p;g<b;g++){const m=c.getX(g);Xr.fromBufferAttribute(h,m),Ah(Xr,m,l,i,e,t,this)}}else{const u=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=u,b=p;g<b;g++)Xr.fromBufferAttribute(h,g),Ah(Xr,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ah(s,e,t,n,i,r,a){const o=ml.distanceSqToPoint(s);if(o<t){const l=new P;ml.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Wl extends bt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class or extends Vt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new P,d=new Ae;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,u=3;h<=t;h++,u+=3){const p=n+h/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),d.x=(a[u]/e+1)/2,d.y=(a[u+1]/e+1)/2,l.push(d.x,d.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new yt(a,3)),this.setAttribute("normal",new yt(o,3)),this.setAttribute("uv",new yt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new or(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class lr extends Vt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const d=[],h=[],u=[],p=[];let g=0;const b=[],m=n/2;let f=0;v(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(d),this.setAttribute("position",new yt(h,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(p,2));function v(){const _=new P,k=new P;let R=0;const A=(t-e)/n;for(let T=0;T<=r;T++){const x=[],M=T/r,w=M*(t-e)+e;for(let L=0;L<=i;L++){const F=L/i,B=F*l+o,V=Math.sin(B),H=Math.cos(B);k.x=w*V,k.y=-M*n+m,k.z=w*H,h.push(k.x,k.y,k.z),_.set(V,A,H).normalize(),u.push(_.x,_.y,_.z),p.push(F,1-M),x.push(g++)}b.push(x)}for(let T=0;T<i;T++)for(let x=0;x<r;x++){const M=b[x][T],w=b[x+1][T],L=b[x+1][T+1],F=b[x][T+1];(e>0||x!==0)&&(d.push(M,w,F),R+=3),(t>0||x!==r-1)&&(d.push(w,L,F),R+=3)}c.addGroup(f,R,0),f+=R}function y(_){const k=g,R=new Ae,A=new P;let T=0;const x=_===!0?e:t,M=_===!0?1:-1;for(let L=1;L<=i;L++)h.push(0,m*M,0),u.push(0,M,0),p.push(.5,.5),g++;const w=g;for(let L=0;L<=i;L++){const B=L/i*l+o,V=Math.cos(B),H=Math.sin(B);A.x=x*H,A.y=m*M,A.z=x*V,h.push(A.x,A.y,A.z),u.push(0,M,0),R.x=V*.5+.5,R.y=H*.5*M+.5,p.push(R.x,R.y),g++}for(let L=0;L<i;L++){const F=k+L,B=w+L;_===!0?d.push(B,B+1,F):d.push(B+1,B,F),T+=3}c.addGroup(f,T,_===!0?1:2),f+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Xl extends Vt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),c(n),d(),this.setAttribute("position",new yt(r,3)),this.setAttribute("normal",new yt(r.slice(),3)),this.setAttribute("uv",new yt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const y=new P,_=new P,k=new P;for(let R=0;R<t.length;R+=3)p(t[R+0],y),p(t[R+1],_),p(t[R+2],k),l(y,_,k,v)}function l(v,y,_,k){const R=k+1,A=[];for(let T=0;T<=R;T++){A[T]=[];const x=v.clone().lerp(_,T/R),M=y.clone().lerp(_,T/R),w=R-T;for(let L=0;L<=w;L++)L===0&&T===R?A[T][L]=x:A[T][L]=x.clone().lerp(M,L/w)}for(let T=0;T<R;T++)for(let x=0;x<2*(R-T)-1;x++){const M=Math.floor(x/2);x%2===0?(u(A[T][M+1]),u(A[T+1][M]),u(A[T][M])):(u(A[T][M+1]),u(A[T+1][M+1]),u(A[T+1][M]))}}function c(v){const y=new P;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(v),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function d(){const v=new P;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];const _=m(v)/2/Math.PI+.5,k=f(v)/Math.PI+.5;a.push(_,1-k)}g(),h()}function h(){for(let v=0;v<a.length;v+=6){const y=a[v+0],_=a[v+2],k=a[v+4],R=Math.max(y,_,k),A=Math.min(y,_,k);R>.9&&A<.1&&(y<.2&&(a[v+0]+=1),_<.2&&(a[v+2]+=1),k<.2&&(a[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function p(v,y){const _=v*3;y.x=e[_+0],y.y=e[_+1],y.z=e[_+2]}function g(){const v=new P,y=new P,_=new P,k=new P,R=new Ae,A=new Ae,T=new Ae;for(let x=0,M=0;x<r.length;x+=9,M+=6){v.set(r[x+0],r[x+1],r[x+2]),y.set(r[x+3],r[x+4],r[x+5]),_.set(r[x+6],r[x+7],r[x+8]),R.set(a[M+0],a[M+1]),A.set(a[M+2],a[M+3]),T.set(a[M+4],a[M+5]),k.copy(v).add(y).add(_).divideScalar(3);const w=m(k);b(R,M+0,v,w),b(A,M+2,y,w),b(T,M+4,_,w)}}function b(v,y,_,k){k<0&&v.x===1&&(a[y]=v.x-1),_.x===0&&_.z===0&&(a[y]=k/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function f(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xl(e.vertices,e.indices,e.radius,e.details)}}class ql extends Xl{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ql(e.radius,e.detail)}}class Gn extends fn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wd,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class En extends Gn{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function qr(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function iv(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function sv(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function wh(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function Jd(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class pr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class rv extends pr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:is,endingEnd:is}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case ss:r=e,o=2*t-n;break;case va:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ss:a=e,l=2*n-t;break;case va:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),b=g*g,m=b*g,f=-u*m+2*u*b-u*g,v=(1+u)*m+(-1.5-2*u)*b+(-.5+u)*g+1,y=(-1-p)*m+(1.5+p)*b+.5*g,_=p*m-p*b;for(let k=0;k!==o;++k)r[k]=f*a[d+k]+v*a[c+k]+y*a[l+k]+_*a[h+k];return r}}class Qd extends pr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=(n-t)/(i-t),h=1-d;for(let u=0;u!==o;++u)r[u]=a[c+u]*h+a[l+u]*d;return r}}class av extends pr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Tn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qr(t,this.TimeBufferType),this.values=qr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:qr(e.times,Array),values:qr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new av(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Qd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new rv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ir:t=this.InterpolantFactoryMethodDiscrete;break;case sr:t=this.InterpolantFactoryMethodLinear;break;case Ia:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ir;case this.InterpolantFactoryMethodLinear:return sr;case this.InterpolantFactoryMethodSmooth:return Ia}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&iv(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ia,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],d=e[o+1];if(c!==d&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,u=h-n,p=h+n;for(let g=0;g!==n;++g){const b=t[h+g];if(b!==t[u+g]||b!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,u=a*n;for(let p=0;p!==n;++p)t[u+p]=t[h+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=sr;class Ts extends Tn{constructor(e,t,n){super(e,t,n)}}Ts.prototype.ValueTypeName="bool";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=ir;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;class eu extends Tn{}eu.prototype.ValueTypeName="color";class vs extends Tn{}vs.prototype.ValueTypeName="number";class ov extends pr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let d=c+o;c!==d;c+=4)sn.slerpFlat(r,0,a,c-o,a,c,l);return r}}class xs extends Tn{InterpolantFactoryMethodLinear(e){return new ov(this.times,this.values,this.getValueSize(),e)}}xs.prototype.ValueTypeName="quaternion";xs.prototype.InterpolantFactoryMethodSmooth=void 0;class As extends Tn{constructor(e,t,n){super(e,t,n)}}As.prototype.ValueTypeName="string";As.prototype.ValueBufferType=Array;As.prototype.DefaultInterpolation=ir;As.prototype.InterpolantFactoryMethodLinear=void 0;As.prototype.InterpolantFactoryMethodSmooth=void 0;class ys extends Tn{}ys.prototype.ValueTypeName="vector";class gl{constructor(e="",t=-1,n=[],i=Ul){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=un(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(cv(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Tn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const d=sv(l);l=wh(l,1,d),c=wh(c,1,d),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new vs(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],d=c.name.match(r);if(d&&d.length>1){const h=d[1];let u=i[h];u||(i[h]=u=[]),u.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,u,p,g,b){if(p.length!==0){const m=[],f=[];Jd(p,m,f,g),m.length!==0&&b.push(new h(u,m,f))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const u=c[h].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const p={};let g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let b=0;b<u[g].morphTargets.length;b++)p[u[g].morphTargets[b]]=-1;for(const b in p){const m=[],f=[];for(let v=0;v!==u[g].morphTargets.length;++v){const y=u[g];m.push(y.time),f.push(y.morphTarget===b?1:0)}i.push(new vs(".morphTargetInfluence["+b+"]",m,f))}l=p.length*a}else{const p=".bones["+t[h].name+"]";n(ys,p+".position",u,"pos",i),n(xs,p+".quaternion",u,"rot",i),n(ys,p+".scale",u,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function lv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return vs;case"vector":case"vector2":case"vector3":case"vector4":return ys;case"color":return eu;case"quaternion":return xs;case"bool":case"boolean":return Ts;case"string":return As}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function cv(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=lv(s.type);if(s.times===void 0){const t=[],n=[];Jd(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const ai={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class hv{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){o++,r===!1&&i.onStart!==void 0&&i.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,i.onProgress!==void 0&&i.onProgress(d,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){const h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,u=c.length;h<u;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(d))return g}return null}}}const dv=new hv;class ws{constructor(e){this.manager=e!==void 0?e:dv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ws.DEFAULT_MATERIAL_NAME="__DEFAULT";const In={};class uv extends Error{constructor(e,t){super(e),this.response=t}}class tu extends ws{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ai.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(In[e]!==void 0){In[e].push({onLoad:t,onProgress:n,onError:i});return}In[e]=[],In[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const d=In[e],h=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=u?parseInt(u):0,g=p!==0;let b=0;const m=new ReadableStream({start(f){v();function v(){h.read().then(({done:y,value:_})=>{if(y)f.close();else{b+=_.byteLength;const k=new ProgressEvent("progress",{lengthComputable:g,loaded:b,total:p});for(let R=0,A=d.length;R<A;R++){const T=d[R];T.onProgress&&T.onProgress(k)}f.enqueue(_),v()}},y=>{f.error(y)})}}});return new Response(m)}else throw new uv(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(u);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{ai.add(e,c);const d=In[e];delete In[e];for(let h=0,u=d.length;h<u;h++){const p=d[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const d=In[e];if(d===void 0)throw this.manager.itemError(e),c;delete In[e];for(let h=0,u=d.length;h<u;h++){const p=d[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class fv extends ws{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ai.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=rr("img");function l(){d(),ai.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){d(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class pv extends ws{constructor(e){super(e)}load(e,t,n,i){const r=new bt,a=new fv(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Ra extends lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new me(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class nu extends Ra{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new me(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const uo=new ke,Rh=new P,kh=new P;class Kl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ol,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Rh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rh),kh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kh),t.updateMatrixWorld(),uo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(uo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class mv extends Kl{constructor(){super(new kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=bs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class gv extends Ra{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.target=new lt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new mv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ch=new ke,Gs=new P,fo=new P;class bv extends Kl{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ae(4,2),this._viewportCount=6,this._viewports=[new Ke(2,1,1,1),new Ke(0,1,1,1),new Ke(3,1,1,1),new Ke(1,1,1,1),new Ke(3,0,1,1),new Ke(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Gs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Gs),fo.copy(n.position),fo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(fo),n.updateMatrixWorld(),i.makeTranslation(-Gs.x,-Gs.y,-Gs.z),Ch.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ch)}}class _v extends Ra{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new bv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class vv extends Kl{constructor(){super(new Bl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Yl extends Ra{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.target=new lt,this.shadow=new vv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Qs{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class xv extends ws{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ai.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ai.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),ai.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ai.add(e,l),r.manager.itemStart(e)}}class yv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ph(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ph();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ph(){return performance.now()}class Mv{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){sn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const a=this._workIndex*r;sn.multiplyQuaternionsFlat(e,a,e,t,e,n),sn.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const $l="\\[\\]\\.:\\/",Sv=new RegExp("["+$l+"]","g"),Zl="[^"+$l+"]",Ev="[^"+$l.replace("\\.","")+"]",Tv=/((?:WC+[\/:])*)/.source.replace("WC",Zl),Av=/(WCOD+)?/.source.replace("WCOD",Ev),wv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zl),Rv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zl),kv=new RegExp("^"+Tv+Av+wv+Rv+"$"),Cv=["material","materials","bones","map"];class Pv{constructor(e,t,n){const i=n||Ze.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ze{constructor(e,t,n){this.path=t,this.parsedPath=n||Ze.parseTrackName(t),this.node=Ze.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ze.Composite(e,t,n):new Ze(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Sv,"")}static parseTrackName(e){const t=kv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Cv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Ze.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ze.Composite=Pv;Ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ze.prototype.GetterByBindingType=[Ze.prototype._getValue_direct,Ze.prototype._getValue_array,Ze.prototype._getValue_arrayElement,Ze.prototype._getValue_toArray];Ze.prototype.SetterByBindingTypeAndVersioning=[[Ze.prototype._setValue_direct,Ze.prototype._setValue_direct_setNeedsUpdate,Ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_array,Ze.prototype._setValue_array_setNeedsUpdate,Ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_arrayElement,Ze.prototype._setValue_arrayElement_setNeedsUpdate,Ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_fromArray,Ze.prototype._setValue_fromArray_setNeedsUpdate,Ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Lv{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,a=r.length,o=new Array(a),l={endingStart:is,endingEnd:is};for(let c=0;c!==a;++c){const d=r[c].createInterpolant(null);o[c]=d,d.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Td,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case lf:for(let d=0,h=l.length;d!==h;++d)l[d].evaluate(a),c[d].accumulateAdditive(o);break;case Ul:default:for(let d=0,h=l.length;d!==h;++d)l[d].evaluate(a),c[d].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const a=n===of;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===Ed){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=ss,i.endingEnd=ss):(e?i.endingStart=this.zeroSlopeAtStart?ss:is:i.endingStart=va,t?i.endingEnd=this.zeroSlopeAtEnd?ss:is:i.endingEnd=va)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}}const Iv=new Float32Array(1);class Dv extends Pi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let d=c[l];d===void 0&&(d={},c[l]=d);for(let h=0;h!==r;++h){const u=i[h],p=u.name;let g=d[p];if(g!==void 0)++g.referenceCount,a[h]=g;else{if(g=a[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,p));continue}const b=t&&t._propertyBindings[h].binding.parsedPath;g=new Mv(Ze.create(n,p,b),u.ValueTypeName,u.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,p),a[h]=g}o[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],d=e._byClipCacheIndex;c._byClipCacheIndex=d,l[d]=c,l.pop(),e._byClipCacheIndex=null;const h=o.actionByRoot,u=(e._localRoot||this._root).uuid;delete h[u],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Qd(new Float32Array(2),new Float32Array(2),1,Iv),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let a=typeof e=="string"?gl.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Ul),l!==void 0){const h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const d=new Lv(this,a,t,n);return this._bindAction(d,c),this._addInactiveAction(d,o,r),d}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?gl.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const d=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=d,t[d]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const Lh=new ke;class Uv{constructor(e,t,n=0,i=1/0){this.ray=new ur(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Fl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Lh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lh),this}intersectObject(e,t=!0,n=[]){return bl(e,this,n,t),n.sort(Ih),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)bl(e[i],this,n,t);return n.sort(Ih),n}}function Ih(s,e){return s.distance-e.distance}function bl(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)bl(r[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rl);function Dh(s,e){if(e===cf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===dl||e===Ad){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===dl)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class Nv extends ws{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Hv(t)}),this.register(function(t){return new Gv(t)}),this.register(function(t){return new Zv(t)}),this.register(function(t){return new Jv(t)}),this.register(function(t){return new Qv(t)}),this.register(function(t){return new jv(t)}),this.register(function(t){return new Wv(t)}),this.register(function(t){return new Xv(t)}),this.register(function(t){return new qv(t)}),this.register(function(t){return new zv(t)}),this.register(function(t){return new Kv(t)}),this.register(function(t){return new Vv(t)}),this.register(function(t){return new $v(t)}),this.register(function(t){return new Yv(t)}),this.register(function(t){return new Ov(t)}),this.register(function(t){return new e0(t)}),this.register(function(t){return new t0(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=Qs.extractUrlBase(e);a=Qs.resolveURL(c,this.path)}else a=Qs.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new tu(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(d){t(d),r.manager.itemEnd(e)},o)}catch(d){o(d)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===iu){try{a[Oe.KHR_BINARY_GLTF]=new n0(e)}catch(h){i&&i(h);return}r=JSON.parse(a[Oe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new m0(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const h=this.pluginCallbacks[d](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let d=0;d<r.extensionsUsed.length;++d){const h=r.extensionsUsed[d],u=r.extensionsRequired||[];switch(h){case Oe.KHR_MATERIALS_UNLIT:a[h]=new Bv;break;case Oe.KHR_DRACO_MESH_COMPRESSION:a[h]=new i0(r,this.dracoLoader);break;case Oe.KHR_TEXTURE_TRANSFORM:a[h]=new s0;break;case Oe.KHR_MESH_QUANTIZATION:a[h]=new r0;break;default:u.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function Fv(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Oe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Ov{constructor(e){this.parser=e,this.name=Oe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const d=new me(16777215);l.color!==void 0&&d.setRGB(l.color[0],l.color[1],l.color[2],Ut);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Yl(d),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new _v(d),c.distance=h;break;case"spot":c=new gv(d),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Fn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class Bv{constructor(){this.name=Oe.KHR_MATERIALS_UNLIT}getMaterialType(){return Ht}extendParams(e,t,n){const i=[];e.color=new me(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Ut),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,ut))}return Promise.all(i)}}class zv{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Hv{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ae(o,o)}return Promise.all(r)}}class Gv{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Vv{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class jv{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new me(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Ut)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,ut)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class Wv{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class Xv{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new me().setRGB(o[0],o[1],o[2],Ut),Promise.all(r)}}class qv{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Kv{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new me().setRGB(o[0],o[1],o[2],Ut),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,ut)),Promise.all(r)}}class Yv{constructor(e){this.parser=e,this.name=Oe.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class $v{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class Zv{constructor(e){this.parser=e,this.name=Oe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class Jv{constructor(e){this.parser=e,this.name=Oe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Qv{constructor(e){this.parser=e,this.name=Oe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class e0{constructor(e){this.name=Oe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,d=i.count,h=i.byteStride,u=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(d,h,u,i.mode,i.filter).then(function(p){return p.buffer}):a.ready.then(function(){const p=new ArrayBuffer(d*h);return a.decodeGltfBuffer(new Uint8Array(p),d,h,u,i.mode,i.filter),p})})}else return null}}class t0{constructor(e){this.name=Oe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Jt.TRIANGLES&&c.mode!==Jt.TRIANGLE_STRIP&&c.mode!==Jt.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(d=>(l[c]=d,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const d=c.pop(),h=d.isGroup?d.children:[d],u=c[0].count,p=[];for(const g of h){const b=new ke,m=new P,f=new sn,v=new P(1,1,1),y=new Yd(g.geometry,g.material,u);for(let _=0;_<u;_++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,_),l.SCALE&&v.fromBufferAttribute(l.SCALE,_),y.setMatrixAt(_,b.compose(m,f,v));for(const _ in l)if(_==="_COLOR_0"){const k=l[_];y.instanceColor=new pl(k.array,k.itemSize,k.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,l[_]);lt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),p.push(y)}return d.isGroup?(d.clear(),d.add(...p),d):p[0]}))}}const iu="glTF",Vs=12,Uh={JSON:1313821514,BIN:5130562};class n0{constructor(e){this.name=Oe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Vs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==iu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Vs,r=new DataView(e,Vs);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===Uh.JSON){const c=new Uint8Array(e,Vs+a,o);this.content=n.decode(c)}else if(l===Uh.BIN){const c=Vs+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class i0{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Oe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const d in a){const h=_l[d]||d.toLowerCase();o[h]=a[d]}for(const d in e.attributes){const h=_l[d]||d.toLowerCase();if(a[d]!==void 0){const u=n.accessors[e.attributes[d]],p=hs[u.componentType];c[h]=p.name,l[h]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(d){return new Promise(function(h,u){i.decodeDracoFile(d,function(p){for(const g in p.attributes){const b=p.attributes[g],m=l[g];m!==void 0&&(b.normalized=m)}h(p)},o,c,Ut,u)})})}}class s0{constructor(){this.name=Oe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class r0{constructor(){this.name=Oe.KHR_MESH_QUANTIZATION}}class su extends pr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,d=i-t,h=(n-t)/d,u=h*h,p=u*h,g=e*c,b=g-c,m=-2*p+3*u,f=p-u,v=1-m,y=f-u+h;for(let _=0;_!==o;_++){const k=a[b+_+o],R=a[b+_+l]*d,A=a[g+_+o],T=a[g+_]*d;r[_]=v*k+y*R+m*A+f*T}return r}}const a0=new sn;class o0 extends su{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return a0.fromArray(r).normalize().toArray(r),r}}const Jt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},hs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Nh={9728:Dt,9729:zt,9984:pd,9985:ia,9986:qs,9987:On},Fh={33071:ri,33648:_a,10497:ps},po={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},_l={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Qn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},l0={CUBICSPLINE:void 0,LINEAR:sr,STEP:ir},mo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function c0(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Gn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Vn})),s.DefaultMaterial}function vi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Fn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function h0(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,d=e.length;c<d;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,d=e.length;c<d;c++){const h=e[c];if(n){const u=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;a.push(u)}if(i){const u=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;o.push(u)}if(r){const u=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const d=c[0],h=c[1],u=c[2];return n&&(s.morphAttributes.position=d),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=u),s.morphTargetsRelative=!0,s})}function d0(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function u0(s){let e;const t=s.extensions&&s.extensions[Oe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+go(t.attributes):e=s.indices+":"+go(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+go(s.targets[n]);return e}function go(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function vl(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function f0(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const p0=new ke;class m0{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Fv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new pv(this.options.manager):this.textureLoader=new xv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new tu(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return vi(r,o,i),Fn(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,d]of a.children.entries())r(d,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Oe.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(Qs.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=po[i.type],o=hs[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Ct(c,a,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=po[i.type],c=hs[i.componentType],d=c.BYTES_PER_ELEMENT,h=d*l,u=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let b,m;if(p&&p!==h){const f=Math.floor(u/p),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count;let y=t.cache.get(v);y||(b=new c(o,f*p,i.count*p/d),y=new Wd(b,p/d),t.cache.add(v,y)),m=new ar(y,l,u%p/d,g)}else o===null?b=new c(i.count*l):b=new c(o,u,i.count*l),m=new Ct(b,l,g);if(i.sparse!==void 0){const f=po.SCALAR,v=hs[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,k=new v(a[1],y,i.sparse.count*f),R=new c(a[2],_,i.sparse.count*l);o!==null&&(m=new Ct(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,T=k.length;A<T;A++){const x=k[A];if(m.setX(x,R[A*l]),l>=2&&m.setY(x,R[A*l+1]),l>=3&&m.setZ(x,R[A*l+2]),l>=4&&m.setW(x,R[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(d){d.flipY=!1,d.name=a.name||o.name||"",d.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(d.name=o.uri);const u=(r.samplers||{})[a.sampler]||{};return d.magFilter=Nh[u.magFilter]||zt,d.minFilter=Nh[u.minFilter]||On,d.wrapS=Fh[u.wrapS]||ps,d.wrapT=Fh[u.wrapT]||ps,d.generateMipmaps=!d.isCompressedTexture&&d.minFilter!==Dt&&d.minFilter!==zt,i.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;const u=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(u),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(l).then(function(h){return new Promise(function(u,p){let g=u;t.isImageBitmapLoader===!0&&(g=function(b){const m=new bt(b);m.needsUpdate=!0,u(m)}),t.load(Qs.resolveURL(h,r.path),g,void 0,p)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),Fn(h,a),h.userData.mimeType=a.mimeType||f0(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=d,d}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Oe.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Oe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[Oe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Zd,fn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new $d,fn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Gn}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[Oe.KHR_MATERIALS_UNLIT]){const h=i[Oe.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new me(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const u=h.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],Ut),o.opacity=u[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,ut)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Qt);const d=r.alphaMode||mo.OPAQUE;if(d===mo.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,d===mo.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Ht&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ae(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==Ht&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Ht){const h=r.emissiveFactor;o.emissive=new me().setRGB(h[0],h[1],h[2],Ut)}return r.emissiveTexture!==void 0&&a!==Ht&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,ut)),Promise.all(c).then(function(){const h=new a(o);return r.name&&(h.name=r.name),Fn(h,r),t.associations.set(h,{materials:e}),r.extensions&&vi(i,h,r),h})}createUniqueName(e){const t=Ze.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Oe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Oh(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],d=u0(c),h=i[d];if(h)a.push(h.promise);else{let u;c.extensions&&c.extensions[Oe.KHR_DRACO_MESH_COMPRESSION]?u=r(c):u=Oh(new Vt,c,t),i[d]={primitive:c,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const d=a[l].material===void 0?c0(this.cache):this.getDependency("material",a[l].material);o.push(d)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),d=l[l.length-1],h=[];for(let p=0,g=d.length;p<g;p++){const b=d[p],m=a[p];let f;const v=c[p];if(m.mode===Jt.TRIANGLES||m.mode===Jt.TRIANGLE_STRIP||m.mode===Jt.TRIANGLE_FAN||m.mode===void 0)f=r.isSkinnedMesh===!0?new Z_(b,v):new ct(b,v),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===Jt.TRIANGLE_STRIP?f.geometry=Dh(f.geometry,Ad):m.mode===Jt.TRIANGLE_FAN&&(f.geometry=Dh(f.geometry,dl));else if(m.mode===Jt.LINES)f=new ev(b,v);else if(m.mode===Jt.LINE_STRIP)f=new jl(b,v);else if(m.mode===Jt.LINE_LOOP)f=new tv(b,v);else if(m.mode===Jt.POINTS)f=new nv(b,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&d0(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),Fn(f,r),m.extensions&&vi(i,f,m),t.assignFinalMaterial(f),h.push(f)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return r.extensions&&vi(i,h[0],r),h[0];const u=new nn;r.extensions&&vi(i,u,r),t.associations.set(u,{meshes:e});for(let p=0,g=h.length;p<g;p++)u.add(h[p]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new kt(ls.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Bl(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Fn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],l=[];for(let c=0,d=a.length;c<d;c++){const h=a[c];if(h){o.push(h);const u=new ke;r!==null&&u.fromArray(r.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Vl(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],d=[];for(let h=0,u=i.channels.length;h<u;h++){const p=i.channels[h],g=i.samplers[p.sampler],b=p.target,m=b.node,f=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;b.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",v)),c.push(g),d.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(d)]).then(function(h){const u=h[0],p=h[1],g=h[2],b=h[3],m=h[4],f=[];for(let v=0,y=u.length;v<y;v++){const _=u[v],k=p[v],R=g[v],A=b[v],T=m[v];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();const x=n._createAnimationTracks(_,k,R,A,T);if(x)for(let M=0;M<x.length;M++)f.push(x[M])}return new gl(r,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,d=o.length;c<d;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const d=c[0],h=c[1],u=c[2];u!==null&&d.traverse(function(p){p.isSkinnedMesh&&p.bind(u,p0)});for(let p=0,g=h.length;p<g;p++)d.add(h[p]);return d})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let d;if(r.isBone===!0?d=new Kd:c.length>1?d=new nn:c.length===1?d=c[0]:d=new lt,d!==c[0])for(let h=0,u=c.length;h<u;h++)d.add(c[h]);if(r.name&&(d.userData.name=r.name,d.name=a),Fn(d,r),r.extensions&&vi(n,d,r),r.matrix!==void 0){const h=new ke;h.fromArray(r.matrix),d.applyMatrix4(h)}else r.translation!==void 0&&d.position.fromArray(r.translation),r.rotation!==void 0&&d.quaternion.fromArray(r.rotation),r.scale!==void 0&&d.scale.fromArray(r.scale);return i.associations.has(d)||i.associations.set(d,{}),i.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new nn;n.name&&(r.name=i.createUniqueName(n.name)),Fn(r,n),n.extensions&&vi(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let d=0,h=l.length;d<h;d++)r.add(l[d]);const c=d=>{const h=new Map;for(const[u,p]of i.associations)(u instanceof fn||u instanceof bt)&&h.set(u,p);return d.traverse(u=>{const p=i.associations.get(u);p!=null&&h.set(u,p)}),h};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,l=[];Qn[r.path]===Qn.weights?e.traverse(function(u){u.morphTargetInfluences&&l.push(u.name?u.name:u.uuid)}):l.push(o);let c;switch(Qn[r.path]){case Qn.weights:c=vs;break;case Qn.rotation:c=xs;break;case Qn.position:case Qn.scale:c=ys;break;default:switch(n.itemSize){case 1:c=vs;break;case 2:case 3:default:c=ys;break}break}const d=i.interpolation!==void 0?l0[i.interpolation]:sr,h=this._getArrayFromAccessor(n);for(let u=0,p=l.length;u<p;u++){const g=new c(l[u]+"."+Qn[r.path],t.array,h,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=vl(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof xs?o0:su;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function g0(s,e,t){const n=e.attributes,i=new Kt;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),o.normalized){const d=vl(hs[o.componentType]);i.min.multiplyScalar(d),i.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new P,l=new P;for(let c=0,d=r.length;c<d;c++){const h=r[c];if(h.POSITION!==void 0){const u=t.json.accessors[h.POSITION],p=u.min,g=u.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),u.normalized){const b=vl(hs[u.componentType]);l.multiplyScalar(b)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new Sn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Oh(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=_l[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return Be.workingColorSpace!==Ut&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Be.workingColorSpace}" not supported.`),Fn(s,e),g0(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?h0(s,e.targets,t):s})}var b0=(function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?e:s,r,a=WebAssembly.instantiate(o(i),{}).then(function(f){r=f.instance,r.exports.__wasm_call_ctors()});function o(f){for(var v=new Uint8Array(f.length),y=0;y<f.length;++y){var _=f.charCodeAt(y);v[y]=_>96?_-97:_>64?_-39:_+4}for(var k=0,y=0;y<f.length;++y)v[k++]=v[y]<60?n[v[y]]:(v[y]-60)*64+v[++y];return v.buffer.slice(0,k)}function l(f,v,y,_,k,R){var A=r.exports.sbrk,T=y+3&-4,x=A(T*_),M=A(k.length),w=new Uint8Array(r.exports.memory.buffer);w.set(k,M);var L=f(x,y,_,M,k.length);if(L==0&&R&&R(x,T,_),v.set(w.subarray(x,x+y*_)),A(x-A(0)),L!=0)throw new Error("Malformed buffer data: "+L)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},d={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},h=[],u=0;function p(f){var v={object:new Worker(f),pending:0,requests:{}};return v.object.onmessage=function(y){var _=y.data;v.pending-=_.count,v.requests[_.id][_.action](_.value),delete v.requests[_.id]},v}function g(f){for(var v="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+l.toString()+m.toString(),y=new Blob([v],{type:"text/javascript"}),_=URL.createObjectURL(y),k=0;k<f;++k)h[k]=p(_);URL.revokeObjectURL(_)}function b(f,v,y,_,k){for(var R=h[0],A=1;A<h.length;++A)h[A].pending<R.pending&&(R=h[A]);return new Promise(function(T,x){var M=new Uint8Array(y),w=u++;R.pending+=f,R.requests[w]={resolve:T,reject:x},R.object.postMessage({id:w,count:f,size:v,source:M,mode:_,filter:k},[M.buffer])})}function m(f){a.then(function(){var v=f.data;try{var y=new Uint8Array(v.count*v.size);l(r.exports[v.mode],y,v.count,v.size,v.source,r.exports[v.filter]),self.postMessage({id:v.id,count:v.count,action:"resolve",value:y},[y.buffer])}catch(_){self.postMessage({id:v.id,count:v.count,action:"reject",value:_})}})}return{ready:a,supported:!0,useWorkers:function(f){g(f)},decodeVertexBuffer:function(f,v,y,_,k){l(r.exports.meshopt_decodeVertexBuffer,f,v,y,_,r.exports[c[k]])},decodeIndexBuffer:function(f,v,y,_){l(r.exports.meshopt_decodeIndexBuffer,f,v,y,_)},decodeIndexSequence:function(f,v,y,_){l(r.exports.meshopt_decodeIndexSequence,f,v,y,_)},decodeGltfBuffer:function(f,v,y,_,k,R){l(r.exports[d[k]],f,v,y,_,r.exports[c[R]])},decodeGltfBufferAsync:function(f,v,y,_,k){return h.length>0?b(f,v,y,d[_],c[k]):a.then(function(){var R=new Uint8Array(f*v);return l(r.exports[d[_]],R,f,v,y,r.exports[c[k]]),R})}}})();function _0(s){const e=new Map,t=new Map,n=s.clone();return ru(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function ru(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)ru(s.children[n],e.children[n],t)}const Bh=new Nv().setMeshoptDecoder(b0),xl=new Map,v0="./assets/";async function x0(){return null}function y0(s){const e=atob(s),t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t.buffer}async function M0(s,e){let t=0;const n=[...new Set(s)],i=await x0();await Promise.all(n.map(async r=>{xl.has(r)||xl.set(r,i!=null&&i[r]?await Bh.parseAsync(y0(i[r]),""):await Bh.loadAsync(`${v0}${r}.glb`)),t++,e==null||e(t/n.length)}))}function Jl(s){const e=xl.get(s);if(!e)throw new Error(`Model ikke indlæst: ${s}`);return e}function qt(s,{skygge:e=!1}={}){const t=Jl(s),n=_0(t.scene);return n.traverse(i=>{i.isMesh&&(i.castShadow=e,i.receiveShadow=!0)}),n}function S0(s,e,{skygge:t=!1,modtag:n=!0,farver:i=null}={}){const r=new nn;if(!e.length)return r;const a=Jl(s);return a.scene.updateMatrixWorld(!0),a.scene.traverse(o=>{if(!o.isMesh)return;const l=new Yd(o.geometry,o.material,e.length),c=new ke;if(e.forEach((d,h)=>l.setMatrixAt(h,c.multiplyMatrices(d,o.matrixWorld))),i!=null&&i.some(Boolean)){const d=new me;i.forEach((h,u)=>l.setColorAt(u,h?d.setRGB(...h):d.setRGB(1,1,1)))}l.castShadow=t,l.receiveShadow=n,l.computeBoundingSphere(),r.add(l)}),r}function au(s,e){const t=qt(s,{skygge:!0}),n=new Kt().setFromObject(t).getSize(new P);return t.scale.setScalar(e/Math.max(n.x,n.y,n.z)),t}function E0(s){return Jl(s).animations}const Rs={hexSkala:5},ks={størrelse:48,seed:11},ha={grundHp:104,mana:80,fart:6,rækkevidde:2.2,skadeMin:12,skadeMax:22,angrebsTid:2.3,rustning:.9,hpRegen:.9,manaRegen:.4,genopliv:6},Si={xp:[0,200,500,900,1400,2100,3e3,4200,5600,7500],hpBonus:[0,25,25,30,30,40,40,50,50,60],skadeBonus:[0,4,4,5,5,6,6,7,7,8],rustBonus:[0,0,1,0,1,0,1,0,1,1]},Kr={aggro:9,leash:22};function Ci(s,e){const t=Math.min(.75,Math.max(0,e*.033));return Math.max(1,Math.round(s*(1-t)))}function mr(s,e){return Math.floor(s+Math.random()*(e-s+1))}const ka=Rs.hexSkala,Ca=2*ka,ou=2/Math.sqrt(3)*ka,lu=[[1,0],[0,1],[-1,1],[-1,0],[0,-1],[1,-1]],yl=(s,e)=>`${s},${e}`;function qe(s,e){return{x:ka*2*(s+e/2),z:ou*1.5*e}}function cu(s,e){const t=e/(ou*1.5),n=s/(ka*2)-t/2;return T0(n,t)}function T0(s,e){const t=-s-e;let n=Math.round(s),i=Math.round(e),r=Math.round(t);const a=Math.abs(n-s),o=Math.abs(i-e),l=Math.abs(r-t);return a>o&&a>l?n=-i-r:o>l&&(i=-n-r),{q:n,r:i}}function wt(s,e){return(Math.abs(s.q-e.q)+Math.abs(s.r-e.r)+Math.abs(s.q+s.r-e.q-e.r))/2}class A0{constructor(){this.felter=new Map}sæt(e,t,n){const i={q:e,r:t,gåbar:!0,pynt:[],...n};return this.felter.set(yl(e,t),i),i}hent(e,t){return this.felter.get(yl(e,t))}felt(e,t){const n=cu(e,t);return this.hent(n.q,n.r)}erGåbar(e,t){const n=this.felt(e,t);return!!(n&&n.gåbar)}naboer(e){return lu.map(([t,n])=>this.hent(e.q+t,e.r+n)).filter(Boolean)}friLinje(e,t,n,i){const r=Math.hypot(n-e,i-t),a=Math.max(1,Math.ceil(r/.8));for(let o=1;o<=a;o++){const l=o/a;if(!this.erGåbar(e+(n-e)*l,t+(i-t)*l))return!1}return!0}findVej(e,t){if(this.friLinje(e.x,e.z,t.x,t.z))return[{x:t.x,z:t.z}];const n=this.felt(e.x,e.z);if(!n)return[];if(!this.erGåbar(t.x,t.z)){const u=this.frieKant(t,e);if(u&&(t=u,this.friLinje(e.x,e.z,t.x,t.z)))return[{x:t.x,z:t.z}]}let i=this.felt(t.x,t.z);if((!i||!i.gåbar)&&(i=this.nærmesteGåbare(t.x,t.z)),!i)return[];const r=new w0,a=new Map,o=new Map([[n,0]]),l=new Set;r.læg(n,wt(n,i));let c=!1;for(;r.størrelse;){const u=r.tag();if(u===i){c=!0;break}if(!l.has(u)){l.add(u);for(const p of this.naboer(u)){if(!p.gåbar||l.has(p))continue;const g=o.get(u)+1;g<(o.get(p)??1/0)&&(a.set(p,u),o.set(p,g),r.læg(p,g+wt(p,i)*1.001))}if(l.size>6e3)break}}if(!c)return[];const d=[];for(let u=i;u&&u!==n;u=a.get(u))d.unshift(qe(u.q,u.r));const h=this.erGåbar(t.x,t.z)?{x:t.x,z:t.z}:qe(i.q,i.r);return d[d.length-1]=h,this.glat(e,d)}glat(e,t){const n=[];let i=e,r=0;for(;r<t.length;){let a=r;for(let o=t.length-1;o>r;o--)if(this.friLinje(i.x,i.z,t[o].x,t[o].z)){a=o;break}n.push(t[a]),i=t[a],r=a+1}return n}frieKant(e,t){const n=Math.hypot(t.x-e.x,t.z-e.z);for(let i=.6;i<Math.min(n,30);i+=.6){const r=e.x+(t.x-e.x)/n*i,a=e.z+(t.z-e.z)/n*i;if(this.erGåbar(r,a))return{x:r+(t.x-e.x)/n*.5,z:a+(t.z-e.z)/n*.5}}return null}nærmesteGåbare(e,t){let n=null,i=1/0;for(const r of this.felter.values()){if(!r.gåbar)continue;const a=qe(r.q,r.r),o=(a.x-e)**2+(a.z-t)**2;o<i&&(i=o,n=r)}return n}}class w0{constructor(){this.a=[]}get størrelse(){return this.a.length}læg(e,t){const n=this.a;n.push([t,e]);let i=n.length-1;for(;i>0;){const r=i-1>>1;if(n[r][0]<=n[i][0])break;[n[r],n[i]]=[n[i],n[r]],i=r}}tag(){const e=this.a,t=e[0][1],n=e.pop();if(e.length){e[0]=n;let i=0;for(;;){const r=2*i+1,a=r+1;let o=i;if(r<e.length&&e[r][0]<e[o][0]&&(o=r),a<e.length&&e[a][0]<e[o][0]&&(o=a),o===i)break;[e[o],e[i]]=[e[i],e[o]],i=o}}return t}}function R0(s){return()=>{s|=0,s=s+1831565813|0;let e=Math.imul(s^s>>>15,1|s);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Yr(s,e,t){let n=Math.imul(s,374761393)+Math.imul(e,668265263)+Math.imul(t,982451653);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}const zh=s=>s*s*(3-2*s);function k0(s,e,t){const n=Math.floor(s),i=Math.floor(e),r=zh(s-n),a=zh(e-i),o=Yr(n,i,t),l=Yr(n+1,i,t),c=Yr(n,i+1,t),d=Yr(n+1,i+1,t);return o+(l-o)*r+(c-o)*a+(o-l-c+d)*r*a}function It(s,e,t,n=8,i=3){let r=0,a=1,o=0,l=1/n;for(let c=0;c<i;c++)r+=k0(s*l,e*l,t+c*31)*a,o+=a,a*=.5,l*=2;return r/o}const C0={1:["a",1],2:["b",1],3:["c",0],4:["d",5]},Ql={askemarken:{navn:"Ashfields",frø:[[-.55,.55],[.05,.15]],farve:[1,.97,.88]},skoven:{navn:"Greenwood",frø:[[-.62,-.25],[-.18,-.6]],farve:[.86,1,.86]},gravlandet:{navn:"Gravelands",frø:[[.6,-.55]],farve:[.72,.74,.66]},bjergene:{navn:"Highlands",frø:[[.18,-.72],[.78,.02]],farve:[.93,.93,.86]},sumpen:{navn:"The Marsh",frø:[[.52,.62]],farve:[.74,.86,.7]}},P0={askemarken:{skov:.74,bjerg:.86,sø:.8},skoven:{skov:.44,bjerg:.9,sø:.8},gravlandet:{skov:.7,bjerg:.8,sø:.84},bjergene:{skov:.78,bjerg:.5,sø:.86},sumpen:{skov:.66,bjerg:.92,sø:.56}},da=(s,e)=>({q:s-Math.floor(e/2),r:e});function L0(s){const e=new A0,t=ks.størrelse,n=t/2,i=da(Math.round(-.55*n),Math.round(.55*n));e.base=i;const r=da(Math.round(.55*n),Math.round(-.55*n));e.fjendeBase=r;for(let a=-n;a<n;a++)for(let o=-n;o<n;o++){const{q:l,r:c}=da(o,a),d=o/n,h=a/n,u=D0(d,h,s),g=Math.min(o+n,n-1-o,a+n,n-1-a)+(It(o,a,s+1,5)-.5)*5>2.6,b=e.sæt(l,c,{kol:o,ræk:a,region:u,type:g?"græs":"vand",gåbar:g});if(!g)continue;const m=P0[u],f=wt(b,i),v=wt(b,r),y=Math.min(f,v),_=y<=6;if(!_&&It(o,a,s+2,4)>m.sø){b.type="vand",b.gåbar=!1;continue}if(_){I0(b,f<=6?i:r,y);continue}It(o,a,s+3,4.5)>m.bjerg?cr(b,"bjerg"):It(o,a,s+4,3.5)>m.skov&&cr(b,"skov")}return U0(e),N0(e),e}function I0(s,e,t){if(t<4)return;const n=qe(s.q,s.r),i=qe(e.q,e.r),r=Math.atan2(n.z-i.z,n.x-i.x)*180/Math.PI;r<-105||r>165?cr(s,"skov"):r>-62&&r<-28&&t<=5&&cr(s,"bjerg")}function D0(s,e,t){const n=(It(s*20,e*20,t+9,6)-.5)*.35,i=(It(e*20,s*20,t+10,6)-.5)*.35;let r=null,a=1/0;for(const[o,l]of Object.entries(Ql))for(const[c,d]of l.frø){const h=(s+n-c)**2+(e+i-d)**2;h<a&&(a=h,r=o)}return r}function cr(s,e){s.blok=e,s.gåbar=!1}function U0(s){for(let e=0;e<8;e++){let t=!1;for(const n of s.felter.values()){if(n.type==="vand")continue;const i=lu.map(([d,h])=>{const u=s.hent(n.q+d,n.r+h);return!u||u.type==="vand"}),r=i.filter(Boolean).length;if(r===0){n.type="græs";continue}const a=i.findIndex((d,h)=>d&&!i[(h+5)%6]);if(!(a>=0&&r<=4&&i.every((d,h)=>d===(h-a+6)%6<r))){n.type="vand",n.gåbar=!1,n.blok=void 0,t=!0;continue}const[l,c]=C0[r];n.type="kyst",n.variant=l,n.rot=(a-c+6)%6,n.blok=void 0,n.gåbar=!0}if(!t)break}}function N0(s){const e=s.hent(s.base.q,s.base.r),t=new Set([e]),n=[e];for(;n.length;){const i=n.pop();for(const r of s.naboer(i))r.gåbar&&!t.has(r)&&(t.add(r),n.push(r))}for(const i of s.felter.values())!i.gåbar||t.has(i)||(i.type==="græs"?cr(i,"skov"):i.gåbar=!1)}function F0(){const s=ks.størrelse/2,e=qe(s,0).x,t=qe(0,s).z;return{minX:-e-4,maxX:e+4,minZ:-t-4,maxZ:t+4}}const js={idle:"Idle",løb:"Running_C",ramt:"Hit_A",død:"Death_C_Skeletons",vågn:"Skeletons_Awaken_Standing",råb:"Taunt"},Ws={idle:"Idle",løb:"Running_A",ramt:"Hit_A",død:"Death_A",vågn:null,råb:"Cheer"},Ml={minion:{navn:"Skeleton Warrior",model:"skeleton_minion",anim:js,hp:120,skade:[12,18],angrebsTid:2,fart:3.4,rækkevidde:2,rustning:0,våben:{r:"skeleton_blade"},angreb:"1H_Melee_Attack_Chop"},rogue:{navn:"Skeleton Assassin",model:"skeleton_rogue",anim:js,hp:140,skade:[14,20],angrebsTid:1.5,fart:3.9,rækkevidde:2,rustning:0,våben:{r:"skeleton_blade"},angreb:"1H_Melee_Attack_Stab"},mage:{navn:"Bone Mage",model:"skeleton_mage",anim:js,hp:140,skade:[16,22],angrebsTid:2.6,fart:3.2,rækkevidde:9,rustning:0,våben:{r:"skeleton_staff"},angreb:"Spellcast_Shoot",projektil:11758591},warrior:{navn:"Grave Warden",model:"skeleton_warrior",anim:js,hp:280,skade:[20,28],angrebsTid:2.3,fart:3.1,rækkevidde:2.2,rustning:2,våben:{r:"skeleton_axe",l:"skeleton_shield_large_a"},angreb:"1H_Melee_Attack_Chop",skala:1.15},gravkonge:{navn:"The Grave King",model:"skeleton_warrior",anim:js,hp:900,skade:[40,55],angrebsTid:2.4,fart:3,rækkevidde:2.8,rustning:5,våben:{r:"skeleton_axe",l:"skeleton_shield_large_a"},angreb:"1H_Melee_Attack_Chop",skala:1.7,boss:!0},slagsbror:{navn:"Brawler",model:"bandit_slagsbror",anim:Ws,hp:130,skade:[12,17],angrebsTid:1.6,fart:3.6,rækkevidde:2,rustning:0,skjul:["1H_Crossbow","2H_Crossbow","Throwable"],angreb:"Dualwield_Melee_Attack_Slice"},skytte:{navn:"Crossbowman",model:"bandit_skytte",anim:Ws,hp:110,skade:[15,21],angrebsTid:2.2,fart:3.4,rækkevidde:10,rustning:0,skjul:["Knife","Knife_Offhand","1H_Crossbow","Throwable"],angreb:"2H_Ranged_Shoot",projektil:16765562},lejesoldat:{navn:"Mercenary",model:"bandit_lejesoldat",anim:Ws,hp:240,skade:[18,25],angrebsTid:2,fart:3.3,rækkevidde:2.2,rustning:3,skjul:["1H_Sword_Offhand","Badge_Shield","Rectangle_Shield","Spike_Shield","2H_Sword","Knight_Helmet"],angreb:"1H_Melee_Attack_Slice_Diagonal"},heks:{navn:"Hexmaster",model:"bandit_heks",anim:Ws,hp:150,skade:[18,26],angrebsTid:2.6,fart:3.2,rækkevidde:9,rustning:0,skjul:["Spellbook","Spellbook_open","1H_Wand"],angreb:"Spellcast_Shoot",projektil:5951999},kaptajn:{navn:"The Raider Captain",model:"bandit_kaptajn",anim:Ws,hp:950,skade:[42,58],angrebsTid:2.2,fart:3.4,rækkevidde:2.8,rustning:4,skjul:["1H_Axe","1H_Axe_Offhand","Barbarian_Round_Shield","Mug"],angreb:"2H_Melee_Attack_Chop",skala:1.6,boss:!0}},hu=[null,{navn:"Easy",farve:"#5fd35a",level:2},{navn:"Medium",farve:"#f2d14a",level:5},{navn:"Hard",farve:"#f08a35",level:8},{navn:"Deadly",farve:"#e8473c",level:12},{navn:"Boss",farve:"#b05cff",level:16}],O0={skeletter:{1:[["minion","minion"],["minion","rogue"]],2:[["minion","rogue","minion"],["rogue","mage"]],3:[["warrior","mage","minion"],["warrior","rogue","rogue"]],4:[["warrior","warrior","mage","mage"],["warrior","mage","rogue","rogue"]],5:[["gravkonge","warrior","mage","mage"]]},plyndrere:{1:[["slagsbror","slagsbror"],["slagsbror","skytte"]],2:[["slagsbror","skytte","slagsbror"],["lejesoldat","skytte"]],3:[["lejesoldat","skytte","heks"],["lejesoldat","slagsbror","slagsbror"]],4:[["lejesoldat","lejesoldat","heks","skytte"],["lejesoldat","heks","heks","slagsbror"]],5:[["kaptajn","lejesoldat","heks","skytte"]]}},B0={askemarken:"plyndrere",skoven:"plyndrere",bjergene:"plyndrere",gravlandet:"skeletter",sumpen:"skeletter"};function z0(s,e){const t=Ml[s],n=1+.3*(e-1),i=1+.18*(e-1);return{...t,level:e,hp:Math.round(t.hp*n),skade:[Math.round(t.skade[0]*i),Math.round(t.skade[1]*i)],rustning:t.rustning+Math.floor(e/4),xp:Math.round((15+e*e*2.5)*(t.boss?3:1))}}const Bt=Ca/2,hr="kaykit-hexagon/decoration/nature/",zn="kaykit-halloween/",vn=(s,e)=>e[Math.floor(s()*e.length)],ec=(s,e=.55)=>({dx:(s()-.5)*2*Bt*e,dz:(s()-.5)*2*Bt*e}),ua=(s,e,t)=>e+s()*(t-e),H0={træ:{mængde:40,r:1.4,h:6},træFrit:{mængde:30,r:1.3,h:5},blok:{mængde:150,r:3,h:4},sten:{mængde:25,r:1.3,h:1.5}};function du(s,e){if(e==="gravlandet")return vn(s,[[zn+"tree_dead_large",1.1],[zn+"tree_dead_medium",1.3],[zn+"tree_dead_small",1.5]]);if(e==="sumpen"&&s()<.35)return[zn+"tree_dead_small",1.3];const t={skoven:[1.25,1.6],sumpen:[1,1.3]}[e]??[1.1,1.4];return[hr+vn(s,["tree_single_a","tree_single_b"]),ua(s,...t)]}function G0(s,e){if(s.blok==="bjerg"){const n=3+Math.floor(e()*2);for(let i=0;i<n;i++){const r=i/n*Math.PI*2+e()*.8,a=Bt*ua(e,.15,.42);s.pynt.push({model:hr+"rock_single_"+vn(e,["c","e","c","b","d"]),dx:Math.cos(r)*a,dz:Math.sin(r)*a,rot:e()*360,skala:ua(e,2.4,3.4),y:-.25,instans:!0,skygge:!0,ressource:"blok"})}for(let i=0;i<2;i++)s.pynt.push({model:hr+"rock_single_"+vn(e,["a","b","d"]),...ec(e,.7),rot:e()*360,skala:1.3,instans:!0,skygge:!0,ressource:"sten"});return}const t=5+Math.floor(e()*2);for(let n=0;n<t;n++){const i=n/t*Math.PI*2+e()*.6,r=n===0?Bt*.1:Bt*ua(e,.45,.7),[a,o]=du(e,s.region);s.pynt.push({model:a,dx:Math.cos(i)*r,dz:Math.sin(i)*r,rot:e()*360,skala:o,instans:!0,skygge:!0,ressource:"træ"})}}function V0(s,e){const t=e(),n=(a,o=1,l=null,c=!0)=>s.pynt.push({model:a,...ec(e),rot:e()*360,skala:o,instans:!0,skygge:c,ressource:l}),i=(a=1)=>{const[o,l]=du(e,s.region);n(o,l*.75*a,"træFrit")},r=(a=1)=>n(hr+"rock_single_"+vn(e,["b","c","e"]),1.25*a,"sten");switch(s.region){case"skoven":t<.45&&i(),t>.3&&t<.6?i(.9):t>.85&&r();break;case"gravlandet":t<.22?n(zn+vn(e,["gravestone","gravemarker_a","gravemarker_b"]),.7):t<.36?i(.9):t<.46?n(zn+vn(e,["bone_a","bone_b","skull"]),.6,null,!1):t<.52&&r();break;case"bjergene":t<.32?r(1.15):t<.4&&i();break;case"sumpen":t<.22?i(.9):t<.32&&r(.9);break;default:t<.2?i():t<.36&&r()}}function j0(s,e){s.region!=="sumpen"||e()>.45||s.pynt.push({model:hr+vn(e,["waterlily_a","waterlily_b","waterplant_a","waterplant_b"]),...ec(e),rot:e()*360,skala:1.2,instans:!0,y:-.75,absolut:!0})}function W0(s,e,t,n){const i=(r,a,o)=>{const l=r/a*Math.PI*2+t()*.5;return{dx:Math.cos(l)*o,dz:Math.sin(l)*o,v:l}};if(e==="skeletter"){const r=[["grave_a",.6],["gravestone",.75],["gravemarker_a",.9],["grave_b",.6],["gravemarker_b",.9],["ribcage",.8],["skull",.6]];for(let a=0;a<6;a++){const{dx:o,dz:l,v:c}=i(a,6,Bt*.85),[d,h]=vn(t,r);s.pynt.push({model:zn+d,dx:o,dz:l,rot:-c*180/Math.PI+90,skala:h,instans:!0,skygge:!0})}s.pynt.push({model:zn+"lantern_standing",dx:Bt*.6,dz:-Bt*.55,rot:0,skala:1.4,skygge:!0}),n&&s.pynt.push({model:zn+"post_skull",dx:-Bt*.7,dz:-Bt*.45,rot:0,skala:.9,skygge:!0})}else{const r="kaykit-hexagon/decoration/props/",a=[["crate_a_big",1.3],["barrel",1.4],["sack",1.4],["crate_long_a",1.2],["resource_lumber",1.2]];s.pynt.push({model:r+"tent",...i(0,1,Bt*.7),rot:t()*360,skala:2,skygge:!0});for(let o=1;o<5;o++){const{dx:l,dz:c}=i(o,5,Bt*.8),[d,h]=vn(t,a);s.pynt.push({model:r+d,dx:l,dz:c,rot:t()*360,skala:h,instans:!0,skygge:!0})}s.pynt.push({model:r+"weaponrack",dx:-Bt*.3,dz:Bt*.75,rot:20,skala:2.2,skygge:!0})}}const X0=[[0,0],[1,-1],[0,-1]],q0="kaykit-hexagon/buildings/";function K0(s,e,t,n){const i=s.fjendeBase,r=X0.map(([b,m])=>s.hent(i.q+b,i.r+m)).filter(Boolean);for(const b of r)e(b,null);const o={felter:r,...(b=>({x:b.reduce((m,f)=>m+qe(f.q,f.r).x,0)/b.length,z:b.reduce((m,f)=>m+qe(f.q,f.r).z,0)/b.length}))(r)},l=b=>{const m=qe(b.q,b.r);return-Math.hypot(m.x,m.z)},c=[...s.felter.values()].filter(b=>wt(b,i)===3&&t(b)).sort((b,m)=>l(b)-l(m))[0];c&&(e(c,{model:q0+"yellow/building_mine_yellow",rot:60,skala:1.1,skygge:!0}),n.push({type:"mine",q:c.q,r:c.r,...qe(c.q,c.r)}));const d=b=>{const m=qe(b.q,b.r);return Math.hypot(m.x,m.z)},h=[...s.felter.values()].filter(b=>{const m=wt(b,i);return m>=2&&m<=4&&t(b)}).sort((b,m)=>d(b)-d(m)),u=[];for(const b of h){if(u.length>=8)break;u.some(m=>wt(m,b)<2)||r.some(m=>wt(m,b)<2)||(b.optaget=!0,u.push(b))}const p=Math.atan2(-o.z,-o.x),g={x:o.x+Math.cos(p)*16,z:o.z+Math.sin(p)*16};return{hal:o,pladser:u,samling:g}}const $r="kaykit-hexagon/buildings/",Y0=[[0,0],[1,-1],[0,-1]];function $0(s,e){const t=ks.størrelse/2,n=(T,x,M=!0)=>(T.optaget=!0,M&&(T.gåbar=!1),x&&T.pynt.push(x),T),i=T=>T&&T.type==="græs"&&T.gåbar&&!T.optaget&&s.naboer(T).filter(x=>x.gåbar).length>=5,r=(T,x)=>{const M=da(Math.round(T*t),Math.round(x*t));let w=null,L=1/0;for(const F of s.felter.values()){if(!i(F))continue;const B=wt(F,M);B<L&&(L=B,w=F)}return w},a=s.base,o=Y0.map(([T,x])=>s.hent(a.q+T,a.r+x)).filter(Boolean);for(const T of o)n(T,null);const l={felter:o,x:o.reduce((T,x)=>T+qe(x.q,x.r).x,0)/o.length,z:o.reduce((T,x)=>T+qe(x.q,x.r).z,0)/o.length},c=s.hent(a.q+1,a.r+1);c.optaget=!0,c.pynt.push({model:"kaykit-hexagon/decoration/props/flag_green",dx:1.6,dz:1.2,rot:0,skala:1.4});const d=qe(a.q,a.r),h=T=>{const x=qe(T.q,T.r);return Math.abs(Math.atan2(x.z-d.z,x.x-d.x)-.3)},u=[...s.felter.values()].filter(T=>wt(T,a)===3&&i(T)).sort((T,x)=>h(T)-h(x))[0],p=[];u&&(n(u,{model:$r+"yellow/building_mine_yellow",rot:240,skala:1.1,skygge:!0}),p.push({type:"mine",start:!0,q:u.q,r:u.r,...qe(u.q,u.r)}));const g=(T,x,M,w,L=1,F=!0)=>{const B=r(x,M);B&&(n(B,{model:$r+w,rot:Math.floor(e()*6)*60,skala:L,skygge:!0},F),p.push({type:T,q:B.q,r:B.r,...qe(B.q,B.r)}))};g("kro",0,0,"yellow/building_tavern_yellow",1.5),g("marked",.42,.22,"yellow/building_market_yellow",1.15);for(const[T,x]of[[-.12,.42],[.32,-.18],[-.45,-.42],[.62,.55]])g("kilde",T,x,"yellow/building_well_yellow",1.5);for(const[T,x]of[[-.05,-.15],[-.7,-.7],[.68,.28],[.15,.72]])g("udkig",T,x,"yellow/building_tower_base_yellow",1.4);g("mine",-.32,.6,"yellow/building_mine_yellow",1.1);const b=[],m=(T,x,M={})=>{const w=qe(T.q,T.r);b.push({x:w.x+(e()-.5)*3,z:w.z+(e()-.5)*3,rot:e()*Math.PI*2,niveau:x,...M}),T.optaget=!0};for(let T=0;T<4;T++){const x=r(-.3+e()*.6,-.1+e()*.5);if(!x||x.region!=="askemarken")continue;n(x,{model:$r+"neutral/"+(T%2?"building_destroyed":"building_scaffolding"),rot:e()*360,skala:1.2,skygge:!0});const M=s.naboer(x).find(i);M&&m(M,2)}for(const[T,x,M]of[[-.75,-.1,2],[.1,-.45,3],[.45,.78,3],[.92,.1,4]]){const w=r(T,x);w&&m(w,M)}const f=K0(s,n,i,p),v=[],y=(T,x,M)=>{const w=r(T,x);if(!w)return;const L=_(w,5,M);v.push(L);const F=qe(w.q,w.r);b.push({x:F.x+3.2,z:F.z-2.6,rot:-.5,niveau:4,guld:!0,lejrId:L.id})},_=(T,x,M)=>{const w=O0[M][x];return n(T,null,!1),W0(T,M,e,x===5),{id:`lejr-${T.q}-${T.r}`,q:T.q,r:T.r,niveau:x,familie:M,creeps:w[Math.floor(e()*w.length)]}};y(.12,-.84,"skeletter"),y(.82,-.05,"plyndrere");const k=Math.max(...[...s.felter.values()].filter(T=>T.gåbar).map(T=>wt(T,a))),R=[...s.felter.values()].filter(i).sort(()=>e()-.5);for(const T of R){if(v.length>=26)break;const x=wt(T,a);if(x<6||wt(T,s.fjendeBase)<9||v.some(L=>wt(L,T)<6)||p.some(L=>wt(L,T)<3))continue;const M=x/k,w=M<.3?1:M<.48?2:M<.68?3:4;v.push(_(T,w,B0[T.region]))}for(const T of v.filter(x=>x.niveau===2||x.niveau===3).slice(0,5)){const x=s.naboer(s.hent(T.q,T.r)).find(i);x&&(n(x,{model:$r+"yellow/building_mine_yellow",rot:Math.floor(e()*6)*60,skala:1.1,skygge:!0}),p.push({type:"mine",q:x.q,r:x.r,...qe(x.q,x.r)}))}const A=qe(c.q,c.r);return{heltSpawn:{x:A.x,z:A.z},steder:p,lejre:v,kister:b,storlejr:l,fjende:f}}function Z0(s=ks.seed){const e=R0(s),t=L0(s),{heltSpawn:n,steder:i,lejre:r,kister:a,storlejr:o,fjende:l}=$0(t,e);for(const c of t.felter.values())c.type==="vand"?j0(c,e):c.blok?G0(c,e):c.type==="græs"&&!c.optaget&&V0(c,e);return{kort:t,heltSpawn:n,steder:i,lejre:r,kister:a,storlejr:o,fjende:l,tilf:e,grænser:F0()}}const Qi=2.5,Hh=Ca,J0=-.55,ei=ut,ti={græs:new me().setRGB(.7,.75,.33,ei),sand:new me().setRGB(.86,.77,.55,ei),bund:new me().setRGB(.55,.49,.36,ei),klippe:new me().setRGB(.56,.53,.47,ei),guld:new me().setRGB(.8,.62,.3,ei),mørk:new me().setRGB(.45,.62,.26,ei),øde:new me().setRGB(.33,.3,.36,ei),lys:new me().setRGB(.82,.8,.42,ei)},as=(s,e,t)=>{const n=Math.min(1,Math.max(0,(t-s)/(e-s)));return n*n*(3-2*n)};function Q0(s,e,t){const n=cu(e,t);let i=0,r=0,a=0,o=0;const l=[0,0,0];for(let d=-2;d<=2;d++)for(let h=Math.max(-2,-d-2);h<=Math.min(2,-d+2);h++){const u=n.q+d,p=n.r+h,g=qe(u,p),b=Math.hypot(g.x-e,g.z-t);if(b>=Hh)continue;const m=(1-b/Hh)**2,f=s.hent(u,p);if(i+=m,!f||f.type==="vand")continue;r+=m,f.blok==="bjerg"&&(a+=m),f.blok==="skov"&&(o+=m);const v=Ql[f.region].farve;l[0]+=v[0]*m,l[1]+=v[1]*m,l[2]+=v[2]*m}return{L:i?r/i:0,K:i?a/i:0,F:i?o/i:0,tone:r?l.map(d=>d/r):[1,1,1]}}function uu(s,e,t,n){const i=Q0(s,e,t),r=i.L+(It(e,t,n+20,5)-.5)*.18,a=as(.12,.5,r);let o=-2.4*(1-a);return o+=2.6*as(.35,.9,i.K)*(.75+.5*It(e,t,n+23,6)),o+=(It(e,t,n+24,4)-.5)*.22*a,{y:o,...i,L:r}}const ex=(s,e,t,n=3)=>uu(s,e,t,n).y;function tx(s,e,t=[],n=null,i=3){const r=Math.ceil((e.maxX-e.minX)/Qi),a=Math.ceil((e.maxZ-e.minZ)/Qi),o=new Li(r*Qi,a*Qi,r,a).rotateX(-Math.PI/2);o.translate((e.minX+e.maxX)/2,0,(e.minZ+e.maxZ)/2);const l=o.attributes.position,c=new Float32Array(l.count*3),d=new me,h=new me;for(let b=0;b<l.count;b++){let m=l.getX(b),f=l.getZ(b);m+=(It(m,f,i+21,3)-.5)*Qi*.6,f+=(It(f,m,i+22,3)-.5)*Qi*.6;const{y:v,L:y,K:_,F:k,tone:R}=uu(s,m,f,i);l.setXYZ(b,m,v,f),d.copy(ti.græs).multiply(h.setRGB(R[0],R[1],R[2]));const A=It(m,f,i+27,14);d.lerp(A>.5?ti.mørk:ti.lys,Math.abs(A-.5)*.9),d.lerp(ti.bund,as(.3,.9,k)*.35),d.lerp(ti.klippe,as(.3,.8,_));for(const x of t){const M=Math.hypot(x.x-m,x.z-f);M<10&&d.lerp(ti.guld,(1-M/10)**1.2*.75)}if(n){const x=Math.hypot(n.x-m,n.z-f)+(It(m,f,i+28,5)-.5)*14;d.lerp(ti.øde,(1-as(22,44,x))*.8)}d.lerp(ti.sand,(1-as(.6,.88,y))*.9);const T=.92+It(m,f,i+25,9)*.14+(It(m*3,f*3,i+26,2)-.5)*.05;d.multiplyScalar(T),c[b*3]=d.r,c[b*3+1]=d.g,c[b*3+2]=d.b}o.setAttribute("color",new Ct(c,3)),o.computeVertexNormals();const u=new ct(o,new Gn({vertexColors:!0,flatShading:!0,roughness:.95,metalness:0}));u.receiveShadow=!0;const p=new ct(new or(800,64).rotateX(-Math.PI/2),new Gn({color:4168393,roughness:.3,metalness:0,transparent:!0,opacity:.86}));p.position.y=J0,p.receiveShadow=!0;const g=new ct(new or(800,32).rotateX(-Math.PI/2),new Gn({color:3108751,roughness:1}));return g.position.y=-2.5,[g,u,p]}const fu=Rs.hexSkala,Gh=12,pu=["kaykit-hexagon/decoration/nature/tree_single_a_cut","kaykit-hexagon/decoration/nature/tree_single_b_cut"],nx=s=>(s.skala??1)*(s.model.includes("kaykit-hexagon")?fu:1);function ix(s,e){const t=new Map,n=new P(0,1,0),i=[],r=[];for(const h of e.felter.values()){const u=qe(h.q,h.r);for(const p of h.pynt){const g=u.x+(p.dx??0),b=u.z+(p.dz??0),m=p.absolut?p.y:ex(e,g,b)+(p.y??0),f=nx(p),v=new sn().setFromAxisAngle(n,ls.degToRad(p.rot??0)),y=new ke().compose(new P(g,m,b),v,new P(f,f,f));if(Object.assign(p,{x:g,y:m,z:b}),p.instans){const _=`${p.model}|${Math.floor(h.kol/Gh)},${Math.floor(h.ræk/Gh)}`;t.has(_)||t.set(_,{sti:p.model,matricer:[],skygge:p.skygge});const k=t.get(_);k.matricer.push(y),p.ref={nøgle:_,i:k.matricer.length-1}}else{const _=qt(p.model,{skygge:p.skygge});y.decompose(_.position,_.quaternion,_.scale),s.add(_),p.model.includes("/buildings/")&&r.push({rod:_,egen:!1})}if(p.ressource){const _=H0[p.ressource],k=p.ressource.startsWith("træ")?"træ":"sten",R={id:i.length,type:k,[k]:_.mængde,start:_.mængde,x:g,z:b,y:m,r:_.r,h:_.h,f:h,pynt:p,blokerer:!!h.blok};i.push(R),(h.ressourcer??(h.ressourcer=[])).push(R)}}}const a=new Map;for(const[h,u]of t){const p=S0(u.sti,u.matricer,{skygge:u.skygge});a.set(h,p),s.add(p)}const o=new ke().makeScale(0,0,0);function l(h){var u;if(h.ref){for(const p of((u=a.get(h.ref.nøgle))==null?void 0:u.children)??[])p.setMatrixAt(h.ref.i,o),p.instanceMatrix.needsUpdate=!0;h.ref=null}}function c(h,{stub:u=!0}={}){if(h[h.type]=0,!h.pynt.ref)return;if(l(h.pynt),u&&h.type==="træ"){const g=qt(pu[h.id%2],{skygge:!1});g.position.set(h.x,h.y,h.z),g.rotation.y=h.id*1.7,g.scale.setScalar(fu*1.2),s.add(g)}const p=h.f;p.blok==="skov"&&p.ressourcer.every(g=>g.træ<=0||!g.blokerer)&&(p.blok=void 0,p.gåbar=!p.optaget)}function d(h){for(const u of h.pynt)l(u);for(const u of h.ressourcer??[])u[u.type]=0}return{ressourcer:i,bygninger:r,fjern:c,ryd:d}}const sx=Rs.hexSkala,Sl=["kaykit-hexagon/decoration/nature/rock_single_c","kaykit-hexagon/decoration/nature/rock_single_e","kaykit-dungeon/coin_stack_large_gltf"];function rx(s,e){const t=new Gn({color:16760612,metalness:.2,roughness:.32,emissive:16748544,emissiveIntensity:.35,flatShading:!0}),n=new Gn({color:16777215,emissive:16773808,emissiveIntensity:3}),i=new ql(.3,0),r=[],a=(l,c,d,h,u)=>{const p=qt(Sl[u%2],{skygge:!0});return p.traverse(g=>{g.isMesh&&(g.material=t)}),p.position.set(l,c,d),p.rotation.set(u*.7,u*2.3,u*1.1),p.scale.setScalar(sx*h),s.add(p),p};for(const[l,c]of e.entries()){for(let h=0;h<9;h++){const u=h/9*Math.PI*2+l*.7,p=2.6+h%3*.7,g=.8+h*5%4*1,b=a(c.x+Math.cos(u)*p,g,c.z+Math.sin(u)*p,.5+h%3*.12,h);if(h%2===0){const m=new ct(i,n);m.position.set(c.x+Math.cos(u)*(p+.9),g+.6,c.z+Math.sin(u)*(p+.9)),m.userData.fase=h*1.3+l,s.add(m),r.push(m)}b.userData.mine=c}for(let h=0;h<5;h++){const u=h/5*Math.PI*2+l+.3;a(c.x+Math.cos(u)*5.6,-.1,c.z+Math.sin(u)*5.6,.7+h%2*.25,h+3)}const d=qt(Sl[2],{skygge:!0});d.position.set(c.x+Math.cos(l+.45)*6.4,0,c.z+Math.sin(l+.45)*6.4),d.scale.setScalar(1.4),s.add(d)}let o=0;return{opdater(l){o+=l,t.emissiveIntensity=.3+Math.sin(o*2.2)*.1;for(const c of r){const d=Math.max(0,Math.sin(o*1.7+c.userData.fase))**6;c.scale.setScalar(.15+d*1.8),c.rotation.y=o*2}}}}function ax(s){const e=new Set([...pu,...Sl]);for(const t of s.felter.values())for(const n of t.pynt)e.add(n.model);return[...e]}function ox(s,e,t,n,i){const r=n.filter(l=>l.type==="mine");for(const l of tx(e,t,r,i))s.add(l);const a=ix(s,e),o=rx(s,r);return{...a,opdater:l=>o.opdater(l)}}function lx(s,e){s.background=new me(10474474),s.fog=new Hl(10474474,85,190),s.add(new nu(14677247,5925690,1.6));const t=new Yl(16773590,2.6);t.castShadow=!0,t.shadow.mapSize.set(2048,2048);const n=t.shadow.camera;n.left=-46,n.right=46,n.top=46,n.bottom=-46,n.near=1,n.far=180,t.shadow.bias=-6e-4,t.shadow.normalBias=.04,s.add(t,t.target),e.toneMapping=ud,e.toneMappingExposure=1.05,e.shadowMap.enabled=!0,e.shadowMap.type=hd;const i=new P(-30,60,26);return{følg(r,a){t.target.position.set(r,0,a),t.position.set(r+i.x,i.y,a+i.z)}}}const Xs=new Map,X={on(s,e){return Xs.has(s)||Xs.set(s,new Set),Xs.get(s).add(e),()=>Xs.get(s).delete(e)},emit(s,e){for(const t of Xs.get(s)??[])t(e)}};class Ms{constructor(e,t,{skala:n=1,skjul:i=[],våben:r={},våbenSkala:a=1,radius:o=.7}={}){this.verden=e,this.rod=new nn,this.model=qt(t,{skygge:!0}),this.model.scale.setScalar(n),this.rod.add(this.model),e.scene.add(this.rod),this.radius=o,this.højde=2.4*n,this.model.traverse(l=>{i.includes(l.name)&&(l.visible=!1)});for(const[l,c]of Object.entries(r)){const d=this.model.getObjectByName(l==="r"?"handslotr":"handslotl");if(!d)continue;const h=qt(c.includes("/")?c:`kaykit-skeletons/${c}`,{skygge:!0});h.scale.setScalar(a),d.add(h)}this.mixer=new Dv(this.model),this.handlinger=new Map(E0(t).map(l=>[l.name,this.mixer.clipAction(l)])),this.aktiv=null,this.mixer.addEventListener("finished",l=>{var c;return(c=this.vedAnimSlut)==null?void 0:c.call(this,l.action)}),this.maxHp=100,this.hp=100,this.død=!1,this.vej=[],this.fart=3,this.vinkelMål=0}get x(){return this.rod.position.x}get z(){return this.rod.position.z}afstand(e){return Math.hypot(e.x-this.x,e.z-this.z)}spil(e,{loop:t=!0,fade:n=.15,fart:i=1,gentag:r=!1}={}){const a=this.handlinger.get(e);return a?a===this.aktiv&&!r?(a.timeScale=i,a.getClip().duration):(a.reset(),a.setLoop(t?Td:Ed,1/0),a.clampWhenFinished=!t,a.timeScale=i,a.play(),this.aktiv&&this.aktiv!==a&&a.crossFadeFrom(this.aktiv,n,!1),this.aktiv=a,a.getClip().duration/i):0}vend(e,t){this.vinkelMål=Math.atan2(e-this.x,t-this.z)}gåTil(e,t){return this.vej=this.verden.kort.findVej({x:this.x,z:this.z},{x:e,z:t}),this.vej.length>0}stop(){this.vej=[]}get bevæger(){return this.vej.length>0}opdaterBevægelse(e){if(!this.vej.length)return;const t=this.vej[0],n=t.x-this.x,i=t.z-this.z,r=Math.hypot(n,i),a=this.fart*e;r<=a?(this.rod.position.x=t.x,this.rod.position.z=t.z,this.vej.shift()):(this.rod.position.x+=n/r*a,this.rod.position.z+=i/r*a,this.vinkelMål=Math.atan2(n,i))}opdater(e){this.mixer.update(e);let t=this.vinkelMål-this.rod.rotation.y;t=Math.atan2(Math.sin(t),Math.cos(t)),this.rod.rotation.y+=t*Math.min(1,e*12)}tagSkade(e,t){return this.død?!1:(this.hp=Math.max(0,this.hp-e),X.emit("skade",{mål:this,mængde:e,kilde:t}),this.hp<=0?(this.dø(t),!0):!1)}dø(){this.død=!0,this.vej=[]}fjern(){this.verden.scene.remove(this.rod),this.mixer.stopAllAction()}}function cx(s,e){for(let t=0;t<s.length;t++){const n=s[t];if(!n.død)for(let i=t+1;i<s.length;i++){const r=s[i];if(r.død)continue;const a=r.x-n.x,o=r.z-n.z,l=Math.hypot(a,o),c=n.radius+r.radius;if(l>=c||l<1e-4)continue;const d=(c-l)/2,h=a/l,u=o/l;Vh(n,-h*d,-u*d,e),Vh(r,h*d,u*d,e)}}}function Vh(s,e,t,n){n.erGåbar(s.x+e,s.z+t)&&(s.rod.position.x+=e,s.rod.position.z+=t)}const Pa={vold:{navn:"Violence",motto:"Strike first. Strike hard.",stil:"aggression",tekst:"Raw aggression. High burst and area damage, but little to keep you alive.",ekko:["Your warriors will learn to charge with you.","At level 10, a path paved in blood may open."]},tålmodighed:{navn:"Patience",motto:"Outlast everything.",stil:"overlevelse",tekst:"Defensive. You survive long fights and protect what is yours, but your burst is low.",ekko:["Your warriors will learn to hold the line.","At level 10, those who endure may come to lead."]},ofring:{navn:"Sacrifice",motto:"Pay in blood. Win anyway.",stil:"kaos",tekst:"Risk and reward. Spend your own health for devastating strikes.",ekko:["Chaos will follow in your wake.","At level 10, something older may answer your offering."]}},er={bruteStrike:{navn:"Brute Strike",mana:40,cd:8,ikon:"🪓",tekst:"A heavy blow for 1.8× damage on the nearest enemy."},warCry:{navn:"War Cry",mana:60,cd:20,ikon:"📯",tekst:"+30% attack speed for 5 seconds."},ironSkin:{navn:"Iron Skin",mana:50,cd:25,ikon:"🛡️",tekst:"+50% armor for 8 seconds."},bloodPrice:{navn:"Blood Price",mana:0,cd:15,ikon:"🩸",tekst:"Lose 15% health; your next blow deals 3× damage."},earthStomp:{navn:"Earth Stomp",mana:100,cd:30,ikon:"💥",tekst:"120 damage and a 1-second stun around you."},endure:{navn:"Endure",mana:80,cd:60,ikon:"⛰️",tekst:"Cannot die for 2 seconds."},martyr:{navn:"Martyr's Strike",mana:0,cd:25,ikon:"⚔️",tekst:"Hit every enemy around you. Costs 30% health."}},mu={vold:["bruteStrike","warCry","earthStomp"],tålmodighed:["bruteStrike","ironSkin","endure"],ofring:["bruteStrike","bloodPrice","martyr"]},El=[1,3,6];class hx{constructor(e,t){this.helt=e,this.essens=t,this.cooldowns=[0,0,0],this.tWarCry=0,this.tIronSkin=0,this.tUdødelig=0,this.blodAktiv=!1}info(e){const t=mu[this.essens][e];return{id:t,...er[t],oplåsLevel:El[e],oplåst:this.helt.level>=El[e],cd:this.cooldowns[e],cdMax:er[t].cd}}opdater(e){for(let t=0;t<3;t++)this.cooldowns[t]=Math.max(0,this.cooldowns[t]-e);this.tWarCry=Math.max(0,this.tWarCry-e),this.tIronSkin=Math.max(0,this.tIronSkin-e),this.tUdødelig=Math.max(0,this.tUdødelig-e)}angrebsBonus(){return this.tWarCry>0?.3:0}rustningsBonus(){return this.tIronSkin>0?Math.round(this.helt.rustning()*5)/10:0}erUdødelig(){return this.tUdødelig>0}slagMultiplikator(e){return this.blodAktiv?(this.blodAktiv=!1,X.emit("effekt",{type:"blodslag",helt:this.helt}),e*3):e}brug(e){const t=this.helt,n=this.info(e);if(t.død)return"Your hero has fallen";if(!n.oplåst)return`Unlocks at level ${n.oplåsLevel}`;if(n.cd>0)return`${n.navn} is ready in ${Math.ceil(n.cd)}s`;if(t.mana<n.mana)return"Not enough mana";const i=this[n.id]();return i||(t.mana-=n.mana,this.cooldowns[e]=n.cdMax,t.sidstIKamp=t.tid,X.emit("evne",{helt:t,id:n.id,navn:n.navn}),null)}fjenderInden(e){return this.helt.verden.creeps.filter(t=>!t.død&&this.helt.afstand(t)-t.radius<=e)}bruteStrike(){const e=this.helt,t=e.mål&&!e.mål.død&&e.afstand(e.mål)-e.mål.radius<=e.stats.rækkevidde*1.3?e.mål:this.fjenderInden(e.stats.rækkevidde*1.3).sort((n,i)=>e.afstand(n)-e.afstand(i))[0];if(!t)return"No enemy close enough";e.mål=t,e.vend(t.x,t.z),e.spil("2H_Melee_Attack_Chop",{loop:!1,fart:1.8,gentag:!0,fade:.05}),e.sving={tid:0,varighed:.9,slagTid:.4,mål:t,ramt:!0},setTimeout(()=>{t.død||(t.tagSkade(Math.round(e.slagSkade()*1.8*e.evneStyrke()),e),X.emit("effekt",{type:"tungtSlag",mål:t}))},400),e.cooldown=e.angrebsTid()}warCry(){this.tWarCry=5,this.heltRåb()}ironSkin(){this.tIronSkin=8,this.heltRåb()}endure(){this.tUdødelig=2,this.heltRåb()}bloodPrice(){const e=this.helt;e.hp=Math.max(1,e.hp-Math.floor(e.hp*.15)),this.blodAktiv=!0,this.heltRåb()}earthStomp(){const e=this.helt;e.spil("2H_Melee_Attack_Chop",{loop:!1,fart:1.6,gentag:!0,fade:.05}),e.sving={tid:0,varighed:1,slagTid:99,ramt:!0},setTimeout(()=>{var t;X.emit("effekt",{type:"stomp",x:e.x,z:e.z,radius:5});for(const n of this.fjenderInden(5))n.tagSkade(Math.round(120*e.evneStyrke()),e),(t=n.lam)==null||t.call(n,1)},450)}martyr(){const e=this.helt,t=this.fjenderInden(e.stats.rækkevidde+.8);if(!t.length)return"No enemies in range";e.hp=Math.max(1,e.hp-Math.floor(e.hp*.3)),e.spil("2H_Melee_Attack_Spin",{loop:!1,fart:2,gentag:!0,fade:.05}),e.sving={tid:0,varighed:1.2,slagTid:99,ramt:!0},setTimeout(()=>{X.emit("effekt",{type:"spin",x:e.x,z:e.z,radius:e.stats.rækkevidde+.8});for(const n of t)n.død||n.tagSkade(Math.round(e.slagSkade()*e.evneStyrke()),e)},500)}heltRåb(){const e=this.helt;e.sving||(e.spil("Spellcast_Raise",{loop:!1,fart:1.6,gentag:!0,fade:.1}),e.sving={tid:0,varighed:1,slagTid:99,ramt:!0})}}const Zr=ut,bo=new Map;function tc(s){s.traverse(e=>{var n;if(!e.isMesh||!((n=e.material)!=null&&n.map))return;const t=e.material.map;bo.has(t)||bo.set(t,dx(t)),e.material=e.material.clone(),e.material.map=bo.get(t)})}function dx(s){const e=s.image,t=document.createElement("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0);const i=n.getImageData(0,0,t.width,t.height),r=i.data,a={h:0,s:0,l:0},o=new me,l={r:0,g:0,b:0},c=t.width/8,d=t.height/4;for(let u=0;u<d;u++)for(let p=0;p<c;p++){const g=(u*t.width+p)*4;o.setRGB(r[g]/255,r[g+1]/255,r[g+2]/255,Zr),o.getHSL(a,Zr),o.setHSL(.24,.36,.17+a.l*.27,Zr).getRGB(l,Zr),r[g]=l.r*255,r[g+1]=l.g*255,r[g+2]=l.b*255}n.putImageData(i,0,0);const h=new Wl(t);return h.flipY=s.flipY,h.colorSpace=s.colorSpace,h.wrapS=s.wrapS,h.wrapT=s.wrapT,h.magFilter=s.magFilter,h.minFilter=s.minFilter,h}const tr={almindelig:{navn:"Common",farve:"#e9e4d8",hex:15328472},sjælden:{navn:"Rare",farve:"#4fa3ff",hex:5219327},episk:{navn:"Epic",farve:"#b46bff",hex:11824127},legendarisk:{navn:"Legendary",farve:"#ff9a2e",hex:16751150}},ux={forbrug:"Consumable",opladning:"Charged",permanent:"Equipment",artefakt:"Artifact",opsamling:"Pickup"},pt="kaykit-adventurers/",Jr="kaykit-dungeon/",fx="kaykit-skeletons/",_o=[1,.35,.3],vo=[.45,.6,1.25],jh=[.8,.45,1.2],Wh=[1.25,1,.45],px=[.45,1.2,.45],St={livseliksir:{navn:"Healing Potion",type:"forbrug",sjældenhed:"almindelig",model:Jr+"bottle_a_labeled_green_gltf",farve:_o,tekst:"Instantly restores 250 health.",brug:{heal:250},pris:75},storLivseliksir:{navn:"Greater Healing Potion",type:"forbrug",sjældenhed:"sjælden",model:Jr+"bottle_c_green_gltf",farve:_o,tekst:"Instantly restores 500 health.",brug:{heal:500},pris:150},manaeliksir:{navn:"Mana Potion",type:"forbrug",sjældenhed:"almindelig",model:Jr+"bottle_b_green_gltf",farve:vo,tekst:"Instantly restores 150 mana.",brug:{mana:150},pris:60},kroensKrus:{navn:"Tavern Mug",type:"forbrug",sjældenhed:"almindelig",model:pt+"mug_full",tekst:"Heals 30 health per second for 8 seconds.",brug:{helOverTid:[30,8]},pris:50},røgbombe:{navn:"Smoke Bomb",type:"forbrug",sjældenhed:"sjælden",model:pt+"smokebomb",tekst:"Enemies lose sight of you and return home. You stay hidden for 4 seconds.",brug:{røg:4},pris:90},hjemkald:{navn:"Tome of Homecoming",type:"forbrug",sjældenhed:"sjælden",model:pt+"spellbook_closed",farve:jh,tekst:"After a short ritual your hero returns home.",brug:{hjem:!0},pris:120},lynstav:{navn:"Lightning Wand",type:"opladning",sjældenhed:"sjælden",model:pt+"wand",farve:vo,ladninger:3,tekst:"Strikes the nearest enemy with lightning for 150 damage. 3 charges.",brug:{lyn:150}},rustenDolk:{navn:"Rusty Dagger",type:"permanent",sjældenhed:"almindelig",model:pt+"dagger",bonus:{skade:4,agi:2},pris:150},træskjold:{navn:"Wooden Shield",type:"permanent",sjældenhed:"almindelig",model:pt+"shield_round",bonus:{rustning:2,str:1},pris:150},jernsværd:{navn:"Iron Sword",type:"permanent",sjældenhed:"sjælden",model:pt+"sword_1handed",bonus:{skade:9,str:2}},ridderskjold:{navn:"Knight's Shield",type:"permanent",sjældenhed:"sjælden",model:pt+"shield_badge_color",bonus:{rustning:4,str:4}},koggeret:{navn:"Hunter's Quiver",type:"permanent",sjældenhed:"sjælden",model:pt+"quiver",bonus:{angrebsfart:.1,agi:5}},magerensBog:{navn:"Mage's Tome",type:"permanent",sjældenhed:"sjælden",model:pt+"spellbook_open",bonus:{int:6,manaRegen:1}},krigsøkse:{navn:"War Axe",type:"permanent",sjældenhed:"episk",model:pt+"axe_2handed",bonus:{skade:16,str:4}},pigskjold:{navn:"Spiked Shield",type:"permanent",sjældenhed:"episk",model:pt+"shield_spikes_color",bonus:{rustning:6,agi:3,retur:.25},ekstra:"Returns 25% of melee damage to the attacker."},stormstav:{navn:"Storm Staff",type:"permanent",sjældenhed:"episk",model:pt+"staff",bonus:{int:10,manaRegen:2,hpRegen:2}},tordenøksen:{navn:"Thunder Axe",type:"artefakt",sjældenhed:"legendarisk",model:pt+"axe_1handed",farve:Wh,bonus:{skade:14,str:5,lynChance:.2},ekstra:"20% chance to call lightning on the target and two nearby enemies (120 damage)."},gravkongensSkjold:{navn:"Grave King's Shield",type:"artefakt",sjældenhed:"legendarisk",model:fx+"skeleton_shield_large_a",bonus:{rustning:8,str:8,blok:.25},ekstra:"25% chance to block 40 damage."},kaptajnensKlinge:{navn:"Captain's Blade",type:"artefakt",sjældenhed:"legendarisk",model:pt+"sword_2handed_color",bonus:{skade:24,agi:6,livsstjæl:.12},ekstra:"Heals the hero for 12% of the damage dealt."},guldpose:{navn:"Pouch of Gold",type:"opsamling",sjældenhed:"almindelig",model:Jr+"coin_stack_small_gltf",tekst:"Gold.",brug:{guld:40}},styrkensSkrift:{navn:"Tome of Strength",type:"opsamling",sjældenhed:"episk",model:pt+"spellbook_closed",farve:_o,tekst:"Permanently +2 Strength.",brug:{bog:{str:2}},pris:350},smidighedensSkrift:{navn:"Tome of Agility",type:"opsamling",sjældenhed:"episk",model:pt+"spellbook_closed",farve:px,tekst:"Permanently +2 Agility.",brug:{bog:{agi:2}},pris:350},klogskabensSkrift:{navn:"Tome of Intelligence",type:"opsamling",sjældenhed:"episk",model:pt+"spellbook_closed",farve:vo,tekst:"Permanently +2 Intelligence.",brug:{bog:{int:2}},pris:350},kraftensSkrift:{navn:"Tome of Power",type:"opsamling",sjældenhed:"legendarisk",model:pt+"spellbook_closed",farve:Wh,tekst:"Permanently +2 to all attributes.",brug:{bog:{str:2,agi:2,int:2}}},visdommensSkrift:{navn:"Tome of Experience",type:"opsamling",sjældenhed:"sjælden",model:pt+"spellbook_closed",farve:jh,tekst:"Grants 250 experience.",brug:{xp:250}}},Xh={str:s=>`+${s} Strength`,agi:s=>`+${s} Agility`,int:s=>`+${s} Intelligence`,skade:s=>`+${s} damage`,rustning:s=>`+${s} armor`,hp:s=>`+${s} health`,mana:s=>`+${s} mana`,angrebsfart:s=>`+${Math.round(s*100)}% attack speed`,hpRegen:s=>`+${s} health per second`,manaRegen:s=>`+${s} mana per second`};function qh(s){const e=St[s],t=Object.entries(e.bonus??{}).filter(([n])=>Xh[n]).map(([n,i])=>Xh[n](i));return e.ekstra&&t.push(e.ekstra),e.tekst&&t.push(e.tekst),t}const xo={1:{livseliksir:30,manaeliksir:12,kroensKrus:12,guldpose:18,rustenDolk:14,træskjold:14},2:{storLivseliksir:12,manaeliksir:8,røgbombe:10,hjemkald:10,rustenDolk:8,træskjold:8,jernsværd:12,ridderskjold:12,koggeret:10,magerensBog:10,styrkensSkrift:4,smidighedensSkrift:4,klogskabensSkrift:4},3:{jernsværd:14,ridderskjold:14,koggeret:14,magerensBog:12,lynstav:16,styrkensSkrift:8,smidighedensSkrift:8,klogskabensSkrift:8,visdommensSkrift:12,storLivseliksir:8},4:{krigsøkse:22,pigskjold:22,stormstav:20,lynstav:12,styrkensSkrift:10,smidighedensSkrift:10,klogskabensSkrift:10,kraftensSkrift:6,visdommensSkrift:10}},mx={skeletter:["gravkongensSkjold","tordenøksen"],plyndrere:["kaptajnensKlinge","tordenøksen"]},Kh=["livseliksir","storLivseliksir","manaeliksir","kroensKrus","røgbombe","hjemkald","rustenDolk","træskjold","styrkensSkrift","smidighedensSkrift","klogskabensSkrift"];function fa(s,e=Math.random){const t=Object.values(s).reduce((i,r)=>i+r,0);let n=e()*t;for(const[i,r]of Object.entries(s))if(n-=r,n<=0)return i;return Object.keys(s)[0]}const gx=()=>[...new Set(Object.values(St).map(s=>s.model))],bx=6,Yh={str:0,agi:0,int:0,skade:0,rustning:0,hp:0,mana:0,angrebsfart:0,hpRegen:0,manaRegen:0,livsstjæl:0,retur:0,blok:0,lynChance:0};class _x{constructor(e){this.helt=e,this.pladser=new Array(bx).fill(null),this.bonus={...Yh},this.permanent={hp:0,skade:0,str:0,agi:0,int:0,ofringer:0},this.cooldown=0,this.helOverTid=null}get fuld(){return this.pladser.every(Boolean)}get guld(){return this.helt.verden.økonomi.guld}set guld(e){this.helt.verden.økonomi.guld=e}modtag(e,t){const n=St[e];if(n.type==="opsamling")return this.virkning(n.brug,n),X.emit("item_samlet",{id:e}),!0;const i=this.pladser.indexOf(null);return i<0?!1:(this.pladser[i]={id:e,ladninger:t??n.ladninger??null},this.beregn(),X.emit("item_samlet",{id:e}),!0)}smid(e){const t=this.pladser[e];if(!t)return null;this.pladser[e]=null;const n=this.helt;return this.beregn(),n.hp=Math.min(n.hp,n.maxHp),n.mana=Math.min(n.mana,n.manaMax),X.emit("item_smidt",{id:t.id,ladninger:t.ladninger,x:n.x,z:n.z}),t}brug(e){const t=this.pladser[e];if(!t)return null;const n=St[t.id];if(!n.brug)return"info";if(this.helt.død)return"Your hero has fallen";if(this.cooldown>0)return null;const i=this.virkning(n.brug,n);return i||(this.cooldown=.6,n.type==="opladning"?(t.ladninger-=1,t.ladninger<=0&&(this.pladser[e]=null)):this.pladser[e]=null,this.beregn(),null)}virkning(e,t){const n=this.helt;if(e.heal&&(n.hp=Math.min(n.maxHp,n.hp+e.heal),X.emit("effekt",{type:"heal",mål:n,mængde:e.heal})),e.mana&&(n.mana=Math.min(n.manaMax,n.mana+e.mana),X.emit("effekt",{type:"mana",mål:n})),e.helOverTid&&(this.helOverTid={pr:e.helOverTid[0],tid:e.helOverTid[1]},X.emit("effekt",{type:"heal",mål:n})),e.guld&&this.tilføjGuld(e.guld,n),e.xp&&(n.fåXp(e.xp),X.emit("flydetekst",{enhed:n,tekst:`+${e.xp} XP`,klasse:"xp"})),e.bog&&this.øgEgenskaber(e.bog),e.skrift&&(this.permanent.hp+=e.skrift.hp,this.permanent.skade+=e.skrift.skade,n.hp+=e.skrift.hp,X.emit("flydetekst",{enhed:n,tekst:`+${e.skrift.hp} health`,klasse:"level"})),e.røg){n.skjult=e.røg;for(const i of n.verden.creeps)!i.død&&i.tilstand==="jagt"&&i.gåHjem();X.emit("effekt",{type:"røg",x:n.x,z:n.z})}if(e.lyn){const i=n.verden.creeps.filter(r=>!r.død&&r.rod.visible&&n.afstand(r)<16).sort((r,a)=>n.afstand(r)-n.afstand(a))[0];if(!i)return"No enemy in range";X.emit("effekt",{type:"lyn",mål:i}),i.tagSkade(e.lyn,n)}if(e.hjem){if(n.sving)return"Your hero is busy";n.stop(),n.mål=null,n.spil("Spellcast_Raise",{loop:!1,gentag:!0,fart:.9}),X.emit("effekt",{type:"portal",x:n.x,z:n.z}),n.sving={tid:0,varighed:2.2,slagTid:99,ramt:!0,vedSlut:()=>n.teleporter(n.spawn)}}return null}øgEgenskaber(e){const t=this.helt,n=t.maxHp,i=t.manaMax;for(const[a,o]of Object.entries(e))this.permanent[a]+=o;t.hp+=t.maxHp-n,t.mana+=t.manaMax-i;const r=Object.entries(e).map(([a,o])=>`+${o} ${a.toUpperCase()}`).join(" ");X.emit("flydetekst",{enhed:t,tekst:r,klasse:"level"}),X.emit("inventar_ændret",{})}tilføjGuld(e,t){this.guld+=e,X.emit("flydetekst",{enhed:t??this.helt,tekst:`+${e} gold`,klasse:"guld"})}beregn(){const e={...Yh};for(const t of this.pladser)if(t)for(const[n,i]of Object.entries(St[t.id].bonus??{}))e[n]+=i;e.hp+=this.permanent.hp,e.skade+=this.permanent.skade,this.bonus=e,X.emit("inventar_ændret",{})}opdater(e){this.cooldown=Math.max(0,this.cooldown-e);const t=this.helt;this.helOverTid&&!t.død&&(t.hp=Math.min(t.maxHp,t.hp+this.helOverTid.pr*e),this.helOverTid.tid-=e,this.helOverTid.tid<=0&&(this.helOverTid=null))}vedSlag(e,t){const n=this.helt,i=this.bonus;if(i.livsstjæl&&(n.hp=Math.min(n.maxHp,n.hp+t*i.livsstjæl)),i.lynChance&&Math.random()<i.lynChance){const r=[e,...n.verden.creeps.filter(a=>a!==e&&!a.død&&a.afstand(e)<7).slice(0,2)];for(const a of r)a.død||(X.emit("effekt",{type:"lyn",mål:a}),a.tagSkade(120,n))}}vedSkade(e,t){const n=this.helt,i=this.bonus;return i.blok&&Math.random()<i.blok&&(e=Math.max(0,e-40),X.emit("flydetekst",{enhed:n,tekst:"Blocked",klasse:"immun"})),i.retur&&t&&!t.død&&n.afstand(t)<4&&t.tagSkade(Math.round(e*i.retur),n),e}}const vx={fåXp(s){const e=Si.xp;for(this.xp+=s;this.level<e.length&&this.xp>=e[this.level];)this.levelOp()},levelOp(s=!1){this.level+=1;const e=this.level-1,t=this.maxHp;this.basisHp+=Si.hpBonus[e],this.stats.skadeMin+=Si.skadeBonus[e],this.stats.skadeMax+=Si.skadeBonus[e],this.stats.rustning+=Si.rustBonus[e],this.vækstEgenskaber(),this.hp=Math.min(this.maxHp,this.hp+this.maxHp-t),s||X.emit("level_op",{helt:this,level:this.level})},xpProcent(){const s=Si.xp;return this.level>=s.length?1:Math.min(1,(this.xp-s[this.level-1])/(s[this.level]-s[this.level-1]))}},xx={kommandoInteraktion(s,e,t,n){this.død||(this.mål=null,this.sving=null,this.handling={x:s,z:e,radius:t,udfør:n},this.gåOrdre=Math.hypot(s-this.x,e-this.z)<=t?!1:this.gåTil(s,e))},teleporter(s){this.rod.position.set(s.x,0,s.z),this.stop(),this.mål=null,this.handling=null,X.emit("teleport",{helt:this})},opdaterHandling(){const s=this.handling;s&&(Math.hypot(s.x-this.x,s.z-this.z)<=s.radius?(this.handling=null,this.stop(),this.gåOrdre=!1,s.udfør()):this.bevæger||(this.handling=null))}},Tl=(s,e)=>!!s&&(s===e.helt||s.side==="egen");function gu(s,e,t,n){const i=s.verden;let r=null,a=e;for(const o of i.creeps){if(o.død||o.tilstand==="hjem"||!o.rod.visible||!(o.tilstand==="jagt"&&Tl(o.mål,i)||n-(t.get(o)??-99)<4))continue;const c=s.afstand(o);c<a&&(a=c,r=o)}return r}const xn={navn:{str:"Strength",agi:"Agility",int:"Intelligence"},kort:{str:"STR",agi:"AGI",int:"INT"},start:{str:22,agi:14,int:12},prLevel:{str:3,agi:1.5,int:1.5},essens:{vold:"str",tålmodighed:"agi",ofring:"int"},pr:{hp:18,hpRegen:.05,skade:1.5,rustning:.15,angrebsfart:.02,mana:10,manaRegen:.05,evne:.01}},es=xn.pr,$h=s=>({guld:120+40*s,sten:30+15*s}),yx={str:"styrkensSkrift",agi:"smidighedensSkrift",int:"klogskabensSkrift"},Mx={startEgenskaber(s){this.egenskaber={...xn.start},this.essensEgenskab=xn.essens[s],this.egenskaber[this.essensEgenskab]+=2},egenskab(s){const e=this.inventar;return Math.floor(this.egenskaber[s])+((e==null?void 0:e.bonus[s])??0)+((e==null?void 0:e.permanent[s])??0)},egenskabBonus(s){const e=this.inventar;return((e==null?void 0:e.bonus[s])??0)+((e==null?void 0:e.permanent[s])??0)},vækstEgenskaber(){for(const s of["str","agi","int"])this.egenskaber[s]+=xn.prLevel[s]+(s===this.essensEgenskab?1:0)},rustning(){var s;return ha.rustning+this.egenskab("agi")*es.rustning+(((s=this.inventar)==null?void 0:s.bonus.rustning)??0)},hpRegen(){return ha.hpRegen+this.egenskab("str")*es.hpRegen+this.inventar.bonus.hpRegen},manaRegen(){return ha.manaRegen+this.egenskab("int")*es.manaRegen+this.inventar.bonus.manaRegen},egenskabsSkade(){return Math.round(this.egenskab("str")*es.skade)},evneStyrke(){return 1+this.egenskab("int")*es.evne},angrebsfartBonus(){return this.egenskab("agi")*es.angrebsfart+this.inventar.bonus.angrebsfart}},Sx=["1H_Axe","1H_Axe_Offhand","Barbarian_Round_Shield","Mug","Barbarian_Hat"],Zh=[{anim:"2H_Melee_Attack_Chop",slag:.48},{anim:"2H_Melee_Attack_Slice",slag:.42}];class bu extends Ms{constructor(e,t,n){super(e,"units/hero_tide",{skjul:Sx,radius:.75}),tc(this.model),this.spawn=t,this.stats={...ha},this.startEgenskaber(n),this.inventar=new _x(this),this.handling=null,this.skjult=0,this.maxHp=this.stats.grundHp,this.hp=this.maxHp,this.mana=this.manaMax,this.fart=this.stats.fart,this.level=1,this.xp=0,this.evner=new hx(this,n),this.mål=null,this.cooldown=0,this.sving=null,this.sidstIKamp=-99,this.tid=0,this.genopliv=0,this.angribere=new Map,this.gåOrdre=!1,this.rod.position.set(t.x,0,t.z),this.spil("Idle")}kommandoGå(e,t){return this.død?!1:(this.mål=null,this.sving=null,this.handling=null,this.gåOrdre=this.gåTil(e,t),this.gåOrdre)}kommandoAngrib(e){this.død||e.død||(this.mål=e,this.gåOrdre=!1,this.handling=null)}get maxHp(){var e;return(this.basisHp??100)+(((e=this.inventar)==null?void 0:e.bonus.hp)??0)+(this.egenskaber?this.egenskab("str")*xn.pr.hp:0)}set maxHp(e){this.basisHp=e}get manaMax(){return this.stats.mana+this.inventar.bonus.mana+this.egenskab("int")*xn.pr.mana}get iKamp(){return this.tid-this.sidstIKamp<3}angrebsTid(){return this.stats.angrebsTid/(1+this.evner.angrebsBonus()+this.angrebsfartBonus())}slagSkade(){return mr(this.stats.skadeMin,this.stats.skadeMax)+this.egenskabsSkade()+this.inventar.bonus.skade}opdater(e){var t;if(this.tid+=e,super.opdater(e),this.død){this.genopliv-=e,this.genopliv<=0&&this.rejsDig();return}this.evner.opdater(e),this.inventar.opdater(e),this.cooldown-=e,this.skjult=Math.max(0,this.skjult-e),this.iKamp||(this.hp=Math.min(this.maxHp,this.hp+this.hpRegen()*e)),this.mana=Math.min(this.manaMax,this.mana+this.manaRegen()*e),this.opdaterHandling(),(t=this.mål)!=null&&t.død&&(this.mål=null),this.gåOrdre&&!this.bevæger&&(this.gåOrdre=!1),!this.mål&&!this.gåOrdre&&!this.sving&&(this.mål=this.findTrussel()),this.sving?this.opdaterSving(e):this.mål?this.forfølg(e):this.opdaterBevægelse(e),this.sving||(this.bevæger?this.spil("Running_A",{fart:1.1}):this.mål||this.spil(this.iKamp?"2H_Melee_Idle":"Idle"))}forfølg(e){if(this.afstand(this.mål)-this.mål.radius>this.stats.rækkevidde){this.genberegn=(this.genberegn??0)-e,(this.genberegn<=0||!this.bevæger)&&(this.gåTil(this.mål.x,this.mål.z),this.genberegn=.3),this.opdaterBevægelse(e);return}this.stop(),this.vend(this.mål.x,this.mål.z),this.cooldown<=0?this.startSving():this.spil("2H_Melee_Idle")}startSving(){const e=Zh[Math.floor(Math.random()*Zh.length)],t=Math.min(1.1,this.angrebsTid()*.75),n=this.handlinger.get(e.anim).getClip().duration;this.spil(e.anim,{loop:!1,fart:n/t,gentag:!0,fade:.08}),this.sving={tid:0,varighed:t,slagTid:t*e.slag,mål:this.mål,ramt:!1},this.cooldown=this.angrebsTid(),this.sidstIKamp=this.tid}opdaterSving(e){var n;const t=this.sving;if(t.tid+=e,t.mål&&!t.mål.død&&this.vend(t.mål.x,t.mål.z),!t.ramt&&t.tid>=t.slagTid&&(t.ramt=!0,t.mål&&!t.mål.død&&this.afstand(t.mål)-t.mål.radius<=this.stats.rækkevidde*1.5)){const i=Ci(this.evner.slagMultiplikator(this.slagSkade()),t.mål.rustning??0);t.mål.tagSkade(i,this),this.inventar.vedSlag(t.mål,i),X.emit("slag",{kilde:this,mål:t.mål})}t.tid>=t.varighed&&(this.sving=null,(n=t.vedSlut)==null||n.call(t))}findTrussel(){return gu(this,18,this.angribere,this.tid)}tagSkade(e,t){return this.evner.erUdødelig()&&(e=0),this.sidstIKamp=this.tid,t&&t!==this&&this.angribere.set(t,this.tid),e>0&&(e=this.inventar.vedSkade(e,t)),super.tagSkade(Ci(e,this.rustning()+this.evner.rustningsBonus()),t)}dø(){super.dø(),this.mål=null,this.sving=null,this.gåOrdre=!1,this.handling=null,this.angribere.clear(),this.spil("Death_A",{loop:!1,fade:.1}),this.genopliv=this.stats.genopliv,X.emit("helt_død",{helt:this})}rejsDig(){this.død=!1,this.hp=this.maxHp,this.mana=this.manaMax,this.rod.position.set(this.spawn.x,0,this.spawn.z),this.spil("Cheer",{loop:!1,gentag:!0}),this.sving={tid:0,varighed:1.4,slagTid:99,ramt:!0},X.emit("helt_genoplivet",{helt:this})}}Object.assign(bu.prototype,vx,xx,Mx);class _u extends Ms{constructor(e,t,n,i,r){const a=z0(t,n);super(e,`units/${a.model}`,{skala:a.skala??1,våben:a.våben??{},skjul:a.skjul??[],radius:.65*(a.skala??1)}),this.anim=a.anim,this.level=n,this.boss=!!a.boss,this.type=t,this.data=a,this.lejr=i,this.hjem=r,this.navn=a.navn,this.maxHp=a.hp,this.hp=a.hp,this.fart=a.fart,this.rustning=a.rustning,this.tilstand="vågner",this.mål=null,this.cooldown=0,this.sving=null,this.lammet=0,this.forsvind=0,this.rod.position.set(r.x,0,r.z),this.rod.rotation.y=this.vinkelMål=Math.random()*Math.PI*2,this.vågenTid=this.anim.vågn&&this.spil(this.anim.vågn,{loop:!1})||(this.spil(this.anim.idle),.3)}lam(e){this.død||(this.lammet=Math.max(this.lammet,e),this.sving=null,this.spil(this.anim.ramt,{loop:!1,gentag:!0}))}vækLejr(e){for(const t of this.lejr.creeps)!t.død&&t.tilstand==="hvile"&&(t.tilstand="jagt",t.mål=e)}egne(){var e,t;return((t=(e=this.verden).egne)==null?void 0:t.call(e))??[this.verden.helt].filter(n=>!n.død&&!n.skjult)}gyldigt(e){return e&&!e.død&&e.rod.visible!==!1&&!e.skjult}vælgMål(e){if(this.spot=Math.max(0,(this.spot??0)-e),this.vælgTid=(this.vælgTid??0)-e,this.spot>0&&this.gyldigt(this.mål))return this.mål;if(!this.gyldigt(this.mål)||this.vælgTid<=0){this.vælgTid=1;const t=this.gyldigt(this.mål)?this.afstand(this.mål):1/0;if(t>this.data.rækkevidde+4){let n=null,i=t===1/0?Kr.aggro*1.6:this.data.rækkevidde+3;for(const r of this.egne()){const a=this.afstand(r);a<i&&(i=a,n=r)}n?this.mål=n:t===1/0&&(this.mål=null)}}return this.mål}opdater(e){const t=this.verden.taage.erSynlig(this.x,this.z);if(this.rod.visible=t,(t||this.tilstand!=="hvile")&&super.opdater(e),this.død)return this.opdaterDød(e);if(this.tilstand==="vågner"){this.vågenTid-=e,this.vågenTid<=0&&(this.tilstand="hvile",this.spil(this.anim.idle));return}if(this.lammet>0){this.lammet-=e;return}if(this.cooldown-=e,this.tilstand==="hvile"){const n=this.egne().find(i=>this.afstand(i)<Kr.aggro||Math.hypot(i.x-this.lejr.x,i.z-this.lejr.z)<Kr.aggro*.7);n&&(this.vækLejr(n),this.spil(this.anim.råb,{loop:!1,gentag:!0}),this.sving={tid:0,varighed:.6,slagTid:99,ramt:!0})}if(this.sving)return this.opdaterSving(e);if(this.tilstand==="jagt"){const n=Math.hypot(this.x-this.lejr.x,this.z-this.lejr.z)>Kr.leash,i=this.vælgMål(e);if(!i||n)return this.gåHjem();this.afstand(i)-i.radius>this.data.rækkevidde?(this.genberegn=(this.genberegn??0)-e,(this.genberegn<=0||!this.bevæger)&&(this.gåTil(i.x,i.z),this.genberegn=.35),this.opdaterBevægelse(e),this.spil(this.anim.løb)):(this.stop(),this.vend(i.x,i.z),this.cooldown<=0?this.startSving(i):this.spil(this.anim.idle))}else this.tilstand==="hjem"&&(this.hp=Math.min(this.maxHp,this.hp+this.maxHp*.4*e),this.opdaterBevægelse(e),this.bevæger||(this.tilstand="hvile",this.hp=this.maxHp,this.spil(this.anim.idle)))}gåHjem(){this.tilstand="hjem",this.mål=null,this.gåTil(this.hjem.x,this.hjem.z),this.spil(this.anim.løb)}startSving(e){var i;const t=((i=this.handlinger.get(this.data.angreb))==null?void 0:i.getClip().duration)??1,n=Math.min(t,this.data.angrebsTid*.7);this.spil(this.data.angreb,{loop:!1,fart:t/n,gentag:!0,fade:.08}),this.sving={tid:0,varighed:n,slagTid:n*.5,mål:e,ramt:!1},this.cooldown=this.data.angrebsTid}opdaterSving(e){const t=this.sving;if(t.tid+=e,!t.ramt&&t.tid>=t.slagTid){t.ramt=!0;const n=t.mål;if(n&&!n.død){const i=mr(...this.data.skade);this.data.projektil?X.emit("projektil",{fra:this,mål:n,skade:i,farve:this.data.projektil}):this.afstand(n)-n.radius<=this.data.rækkevidde*1.4&&n.tagSkade(i,this)}}t.tid>=t.varighed&&(this.sving=null)}tagSkade(e,t){return this.tilstand==="hjem"?!1:(this.tilstand==="hvile"&&t&&this.vækLejr(t),this.tilstand==="vågner"&&t&&(this.tilstand="jagt",this.mål=t),this.tilstand==="jagt"&&t&&!this.gyldigt(this.mål)&&(this.mål=t),super.tagSkade(e,t))}dø(e){super.dø(e),this.sving=null,this.spil(this.anim.død,{loop:!1,fade:.08}),this.forsvind=5,X.emit("creep_død",{creep:this,xp:this.data.xp,kilde:e})}opdaterDød(e){this.forsvind-=e,this.forsvind<1.5&&(this.rod.position.y-=e*.8),this.forsvind<=0&&!this.fjernet&&(this.fjernet=!0,this.fjern())}}class Ex{constructor(e,t){this.verden=e,this.data=t,this.level=hu[t.niveau].level;const n=qe(t.q,t.r);this.x=n.x,this.z=n.z,this.creeps=[],this.tomTid=0,this.spawn()}spawn(){const e=this.data.creeps.length;this.creeps=this.data.creeps.map((t,n)=>{const i=n/e*Math.PI*2+.6,r={x:this.x+Math.cos(i)*2.6*(e>1),z:this.z+Math.sin(i)*2.6*(e>1)};return new _u(this.verden,t,this.level,this,r)}),this.verden.creeps.push(...this.creeps)}opdater(e){}}const Tx=["1H_Axe_Offhand","Mug"],Ax=["Knife","Knife_Offhand","1H_Crossbow","2H_Crossbow","Throwable"],vu={grunt:{navn:"Grunt",model:"units/grunt",skala:.92,skjul:Tx,radius:.7,hp:240,skade:[18,24],rustning:2,fart:4.4,rækkevidde:2.1,angrebsTid:1.6,angreb:["1H_Melee_Attack_Chop","1H_Melee_Attack_Slice_Diagonal"],slag:.45,idle:"Idle",løb:"Running_A"},spydkaster:{navn:"Spear Thrower",model:"units/spydkaster",skala:.88,skjul:Ax,radius:.6,våben:{r:"kaykit-skeletons/skeleton_arrow"},våbenSkala:2.4,hp:170,skade:[16,22],rustning:0,fart:4.6,rækkevidde:11,angrebsTid:2,angreb:["Throw"],slag:.42,idle:"Idle",løb:"Running_A",projektil:"spyd"}},nc="kaykit-skeletons/skeleton_arrow",pa={tærskel:200,prCreep:s=>5+s*5,bonusHp:.1},oi={ironhide:{navn:"Ironhide",stil:"overlevelse",farve:9416904,pris:{guld:100,træ:40,sten:40},hp:120,skade:-4,rustning:4,fart:-.2,skala:1.08,evne:"Taunt",evneTekst:"Forces nearby enemies to attack it for 2.5 seconds.",tekst:"Defender. Lots of health and armor, less damage."},ravager:{navn:"Ravager",stil:"aggression",farve:16738890,pris:{guld:120,træ:40},hp:-40,skade:16,rustning:0,fart:.3,skala:1,evne:"Charge",evneTekst:"Sprints at the target; the first blow deals 1.5× damage.",tekst:"Attacker. Big damage, but fragile."},berserker:{navn:"Berserker",stil:"kaos",farve:16756782,pris:{guld:110,træ:50},hp:20,skade:8,rustning:-1,fart:.2,skala:1.03,variation:.3,evne:"Frenzy",evneTekst:"Hits every nearby enemy for 4 seconds and ignores orders meanwhile.",tekst:"Chaos. Damage in every direction, unpredictable."}};function xu(s){const e=document.createElement("canvas");e.width=e.height=128;const t=e.getContext("2d"),n=t.createRadialGradient(64,64,0,64,64,64);s?(n.addColorStop(.66,"rgba(255,255,255,0)"),n.addColorStop(.82,"rgba(255,255,255,1)"),n.addColorStop(.97,"rgba(255,255,255,0)")):(n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.4,"rgba(255,255,255,0.5)"),n.addColorStop(1,"rgba(255,255,255,0)")),t.fillStyle=n,t.fillRect(0,0,128,128);const i=new Wl(e);return i.colorSpace=ut,i}const Qr=xu(!0),yo=xu(!1);function ts(s,e,t,n=1,i=!1){const r=new ct(new Li(t,t).rotateX(-Math.PI/2),new Ht({map:s,color:e,transparent:!0,opacity:n,depthWrite:!1,blending:i?wi:Ai}));return r.renderOrder=2,r}class wx{constructor(e){this.verden=e,this.scene=e.scene,this.aktive=[],this.heltRing=ts(Qr,4063050,2.2,.85),this.målRing=ts(Qr,16722458,2.2,.95),this.aura=ts(yo,16726831,4,0,!0),this.scene.add(this.heltRing,this.målRing,this.aura),X.on("effekt",t=>this.vedEffekt(t)),X.on("projektil",t=>this.projektil(t)),X.on("level_op",({helt:t})=>this.levelOp(t))}markør(e,t,n=10354554){const i=ts(Qr,n,2.6);i.position.set(e,.06,t),this.tilføj(i,.6,r=>{i.scale.setScalar(1.3-r*.9),i.material.opacity=1-r})}bølge(e,t,n,i,r=.6){const a=ts(Qr,i,2);a.position.set(e,.08,t),this.tilføj(a,r,l=>{a.scale.setScalar(.5+l*n),a.material.opacity=(1-l)*1.2});const o=ts(yo,i,n*2,1,!0);o.position.set(e,.07,t),this.tilføj(o,r*.8,l=>{o.material.opacity=(1-l)*.8})}søjle(e,t,n=1.4,i=7){const r=new ct(new lr(1.1,1.4,i,24,1,!0),new Ht({color:t,transparent:!0,opacity:.6,blending:wi,depthWrite:!1,side:Qt}));this.tilføj(r,n,a=>{r.position.set(e.x,i/2,e.z),r.material.opacity=.6*(1-a),r.scale.set(1+a*.3,1,1+a*.3)})}levelOp(e){this.søjle(e,16765803),this.bølge(e.x,e.z,4,16765803,.9)}lyn(e){const t=new nn;let n=16,i=0,r=0;for(;n>.6;){const a=Math.max(.6,n-2-Math.random()*2),o=(Math.random()-.5)*1.6,l=(Math.random()-.5)*1.6,c=new P(i,n,r),d=new P(o,a,l),h=new ct(new lr(.12,.12,c.distanceTo(d),5),new Ht({color:12575999,transparent:!0,blending:wi,depthWrite:!1}));h.position.copy(c).add(d).multiplyScalar(.5),h.quaternion.setFromUnitVectors(new P(0,1,0),d.clone().sub(c).normalize()),t.add(h),n=a,i=o,r=l}t.position.set(e.x,0,e.z),this.tilføj(t,.3,a=>t.children.forEach(o=>{o.material.opacity=1-a}),()=>t.children.forEach(a=>{a.geometry.dispose(),a.material.dispose()})),this.bølge(e.x,e.z,2.2,10474751,.4)}vedEffekt(e){e.type==="stomp"?this.bølge(e.x,e.z,e.radius,16752704,.7):e.type==="spin"?this.bølge(e.x,e.z,e.radius,16726831,.5):e.type==="tungtSlag"?this.bølge(e.mål.x,e.mål.z,1.6,16769162,.35):e.type==="blodslag"?this.bølge(e.helt.x,e.helt.z,2.2,16715792,.45):e.type==="heal"?this.bølge(e.mål.x,e.mål.z,2.4,7208842,.7):e.type==="mana"?this.bølge(e.mål.x,e.mål.z,2.4,5939967,.7):e.type==="lyn"?this.lyn(e.mål):e.type==="portal"?this.søjle({x:e.x,z:e.z},11824127,2.2,9):e.type==="samlet"?this.bølge(e.x,e.z,1.6,e.farve??16769162,.4):e.type==="kiste"?(this.bølge(e.x,e.z,3.5,16765803,.8),this.søjle({x:e.x,z:e.z},16765803,.9,5)):e.type==="evne"?this.bølge(e.x,e.z,5,e.farve??16777215,.5):e.type==="veteran"?(this.bølge(e.x,e.z,3,16765803,.7),this.søjle({x:e.x,z:e.z},16765803,1.2,5)):e.type==="røg"&&(this.bølge(e.x,e.z,6,10132122,1.4),this.søjle({x:e.x,z:e.z},7829367,1.6,4))}projektil({fra:e,mål:t,skade:n,farve:i=11758591,model:r}){let a;if(r==="spyd"){a=new nn;const h=qt(nc,{skygge:!0});h.scale.setScalar(3),h.rotation.x=Math.PI/2,a.add(h)}else a=new Y_(new Xd({map:yo,color:i,blending:wi,depthWrite:!1})),a.scale.setScalar(1.1);const o=new P(e.x,e.højde>3?e.højde:1.8,e.z);a.position.copy(o);const l=Math.max(.3,e.afstand(t)/14),c=new P,d=(h,u)=>(u.lerpVectors(o,new P(t.x,1.3,t.z),h),u.y+=Math.sin(h*Math.PI)*1.2,u);this.tilføj(a,l,h=>{d(h,a.position),r&&a.lookAt(d(Math.min(1,h+.05),c))},()=>{t.død||t.tagSkade(n,e),r||this.bølge(t.x,t.z,1.4,i,.35)})}tilføj(e,t,n,i){this.scene.add(e),this.aktive.push({obj:e,tid:0,varighed:t,opdater:n,slut:i})}opdater(e){var a,o,l;const t=this.verden.helt;this.heltRing.visible=!t.død,this.heltRing.position.set(t.x,.05,t.z);const n=t.mål;this.målRing.visible=!!(n&&!n.død),this.målRing.visible&&this.målRing.position.set(n.x,.05,n.z);const i=t.evner,r=i.tWarCry>0?16726831:i.tIronSkin>0?5944575:i.tUdødelig>0?16769658:null;this.aura.material.opacity=r?.55+Math.sin(performance.now()/150)*.15:0,r&&this.aura.material.color.setHex(r),this.aura.position.set(t.x,.06,t.z);for(let c=this.aktive.length-1;c>=0;c--){const d=this.aktive[c];d.tid+=e;const h=Math.min(1,d.tid/d.varighed);d.opdater(h),h>=1&&((a=d.slut)==null||a.call(d),this.scene.remove(d.obj),(o=d.obj.geometry)==null||o.dispose(),(l=d.obj.material)==null||l.dispose(),this.aktive.splice(c,1))}}}const Mo=ls.degToRad(52);class Rx{constructor(e,t){this.kamera=new kt(38,1,.5,300),this.fokus=new P,this.afstand=28,this.følger=!0,this.onTryk=t,this.pegere=new Map,this.lærred=e,this.grænser={minX:-40,maxX:40,minZ:-40,maxZ:40},e.addEventListener("pointerdown",n=>this.ned(n)),e.addEventListener("pointermove",n=>this.bevæg(n)),e.addEventListener("pointerup",n=>this.op(n)),e.addEventListener("pointercancel",n=>this.pegere.delete(n.pointerId)),e.addEventListener("wheel",n=>{n.preventDefault(),this.zoom(n.deltaY>0?1.1:.9)},{passive:!1})}ned(e){var t,n;(n=(t=this.lærred).setPointerCapture)==null||n.call(t,e.pointerId),this.pegere.set(e.pointerId,{x:e.clientX,y:e.clientY,sx:e.clientX,sy:e.clientY,t:performance.now(),trukket:!1}),this.pegere.size===2&&(this.knibStart=this.knibAfstand())}bevæg(e){const t=this.pegere.get(e.pointerId);if(!t)return;const n=e.clientX-t.x,i=e.clientY-t.y;t.x=e.clientX,t.y=e.clientY;const r=Math.hypot(t.x-t.sx,t.y-t.sy)>12;if(r&&!t.trukket&&this.pegere.size===1&&this.onBoks&&performance.now()-t.t>300&&(t.boks=!0),t.boks){t.trukket=!0,this.onBoks(t.sx,t.sy,t.x,t.y,!1);return}if(r&&(t.trukket=!0),this.pegere.size===2){const a=this.knibAfstand();this.knibStart&&this.zoom(this.knibStart/a),this.knibStart=a;for(const o of this.pegere.values())o.trukket=!0}else if(t.trukket){const a=this.afstand/this.lærred.clientHeight*1.15;this.fokus.x-=n*a,this.fokus.z-=i*a/Math.sin(Mo),this.følger=!1,this.begræns()}}op(e){const t=this.pegere.get(e.pointerId);if(this.pegere.delete(e.pointerId),this.pegere.size<2&&(this.knibStart=null),t!=null&&t.boks)return this.onBoks(t.sx,t.sy,e.clientX,e.clientY,!0);t&&!t.trukket&&this.pegere.size===0&&performance.now()-t.t<450&&this.onTryk(e.clientX,e.clientY)}knibAfstand(){const[e,t]=[...this.pegere.values()];return Math.hypot(e.x-t.x,e.y-t.y)}zoom(e){this.afstand=ls.clamp(this.afstand*e,12,56)}begræns(){const e=this.grænser;this.fokus.x=ls.clamp(this.fokus.x,e.minX,e.maxX),this.fokus.z=ls.clamp(this.fokus.z,e.minZ,e.maxZ)}centrér(){this.følger=!0}størrelse(e,t){this.kamera.aspect=e/t,this.portrætFaktor=e<t?1.25:1,this.kamera.updateProjectionMatrix()}opdater(e,t){if(this.følger&&t){const i=1-Math.exp(-e*6);this.fokus.x+=(t.x-this.fokus.x)*i,this.fokus.z+=(t.z-this.fokus.z)*i}const n=this.afstand*(this.portrætFaktor??1);this.kamera.position.set(this.fokus.x,Math.sin(Mo)*n,this.fokus.z+Math.cos(Mo)*n),this.kamera.lookAt(this.fokus.x,.8,this.fokus.z)}}const ea=new P;class kx{constructor(e,t,n,i=()=>[]){this.rod=e,this.verden=t,this.kamera=n,this.ekstra=i,this.bjælker=new Map,this.toastEl=document.getElementById("toast"),X.on("skade",({mål:r,mængde:a,kilde:o})=>{if(a<=0)return this.tal(r,"Immune","immun");const l=o===this.verden.helt;this.tal(r,a,l?a>this.verden.helt.stats.skadeMax*1.2?"krit":"helt":"fjende")}),X.on("creep_død",({creep:r,xp:a})=>this.tal(r,`+${a} XP`,"xp",.6)),X.on("level_op",({helt:r,level:a})=>this.tal(r,`Level ${a}!`,"level",1.2)),X.on("besked",r=>this.toast(r)),X.on("flydetekst",({enhed:r,tekst:a,klasse:o})=>this.tal(r,a,o,.4))}skærm(e,t,n){return ea.set(e,t,n).project(this.kamera),{x:(ea.x*.5+.5)*this.rod.clientWidth,y:(-ea.y*.5+.5)*this.rod.clientHeight,synlig:ea.z<1}}tal(e,t,n,i=0){const r=this.skærm(e.x,(e.højde??1.4)+.6+i,e.z),a=document.createElement("div");a.className=`tal ${n}`,a.textContent=t,a.style.left=`${r.x+(Math.random()-.5)*24}px`,a.style.top=`${r.y}px`,this.rod.appendChild(a),setTimeout(()=>a.remove(),1100)}toast(e){this.toastEl.textContent=e,this.toastEl.classList.remove("vis"),this.toastEl.offsetWidth,this.toastEl.classList.add("vis")}opdater(){var t,n;const e=[this.verden.helt,...this.verden.creeps,...this.ekstra()];for(const i of e){let r=this.bjælker.get(i);if(!(!i.død&&!i.fjernet&&i.rod.visible&&(i===this.verden.helt||i.tilstand!=="vågner")&&(!i.erBygning||i.hp<i.maxHp))){r&&(r.remove(),this.bjælker.delete(i));continue}r||(r=document.createElement("div"),r.className=`bjælke ${i===this.verden.helt?"helt":i.side==="egen"?"egen":"fjende"}`,r.innerHTML="<i></i>",this.rod.appendChild(r),this.bjælker.set(i,r));const o=this.skærm(i.x,i.højde+.35,i.z);r.style.transform=`translate(${o.x}px, ${o.y}px) translate(-50%, -50%)`,r.style.display=o.synlig?"":"none",r.firstChild.style.width=`${i.hp/i.maxHp*100}%`,i.vet&&r.dataset.vet!==`${i.vet.veteran}${(t=i.vet.gren)==null?void 0:t.id}`&&(r.dataset.vet=`${i.vet.veteran}${(n=i.vet.gren)==null?void 0:n.id}`,r.classList.toggle("vet",i.vet.veteran),i.vet.gren&&r.style.setProperty("--gren",`#${i.vet.gren.farve.toString(16).padStart(6,"0")}`))}for(const[i,r]of this.bjælker)e.includes(i)||(r.remove(),this.bjælker.delete(i))}}const ic="tww-gem-1",yu=1,Ft=s=>Math.round(s*10)/10;function Cx(){try{const s=JSON.parse(localStorage.getItem(ic));return s&&s.version===yu&&s.seed===ks.seed?s:null}catch{return null}}function Px(){try{localStorage.removeItem(ic)}catch{}}function Mu(s){if(s.slut==="nederlag")return!1;try{return localStorage.setItem(ic,JSON.stringify(Lx(s))),!0}catch(e){return console.warn("Could not save",e),!1}}function Lx(s){const{helt:e,økonomi:t,base:n,lejre:i,genstande:r,taage:a,rig:o,stil:l,memory:c}=s,d=e.inventar;return{version:yu,seed:ks.seed,tidspunkt:Date.now(),spilTid:Math.round(e.tid),økonomi:{guld:t.guld,træ:t.træ,sten:t.sten,forsyning:t.forsyning,forsyningMaks:t.forsyningMaks},helt:{essens:e.evner.essens,x:Ft(e.x),z:Ft(e.z),hp:Math.ceil(e.død?e.maxHp:e.hp),mana:Math.floor(e.mana),level:e.level,xp:e.xp,spawn:e.spawn,pladser:d.pladser,permanent:d.permanent},bygninger:n.bygninger.map(h=>({type:h.type,felter:h.felter.map(u=>yl(u.q,u.r)),x:Ft(h.x),z:Ft(h.z),rot:h.rot,fremskridt:h.fremskridt,færdig:h.færdig,kø:h.kø,samling:h.samling??null,hp:Math.ceil(h.hp)})),arbejdere:n.arbejdere.filter(h=>!h.død).map(h=>{var u,p;return{x:Ft(h.x),z:Ft(h.z),opgave:((u=h.kilde)==null?void 0:u.type)??((p=h.bærer)==null?void 0:p.type)??null,byg:h.bygning?n.bygninger.indexOf(h.bygning):-1}}),soldater:n.soldater.filter(h=>!h.død).map(h=>{var u;return{type:h.type,x:Ft(h.x),z:Ft(h.z),hp:Math.ceil(h.hp),xp:h.vet.xp,veteran:h.vet.veteran,gren:((u=h.vet.gren)==null?void 0:u.id)??null}}),ressourcer:n.kilder.ressourcer.filter(h=>h[h.type]<h.start).map(h=>[h.id,h[h.type]]),miner:n.kilder.miner.map(h=>h.guld),lejre:i.map(h=>h.creeps.map(u=>u.død?-1:Math.ceil(u.hp))),items:r.liste.map(h=>({id:h.id,x:Ft(h.x),z:Ft(h.z),ladninger:h.ladninger??null})),kister:r.kister.map(h=>h.åben?1:0),udforsket:Ix(a.udforsket),stil:l.score,kamera:{x:Ft(o.fokus.x),z:Ft(o.fokus.z),afstand:o.afstand},memory:{sværhed:c.sværhed,tid:Math.round(c.tid),guld:Math.round(c.guld),bølge:c.bølge,næsteAngreb:Math.round(c.næsteAngreb),byggePlan:c.byggePlan,bygninger:c.bygninger.map(h=>({id:h.id,hp:Math.ceil(h.hp),fremskridt:h.fremskridt,død:h.død})),enheder:c.levende.map(h=>({type:h.type,x:Ft(h.x),z:Ft(h.z),hp:Math.ceil(h.hp),level:h.level}))}}}function Ix(s){const e=[];let t=0,n=0;for(const i of s)i===t?n++:(e.push(n),t=i,n=1);return e.push(n),e.join(",")}function Dx(s,e){let t=0,n=0;for(const i of s.split(",").map(Number))e.fill(n,t,t+i),t+=i,n=1-n}function Ux(s,e){const t=()=>{s.helt&&Mu(s)};return setInterval(t,6e4),document.addEventListener("visibilitychange",()=>{document.hidden&&t()}),window.addEventListener("pagehide",t),t}function Nx(s){const e=Math.floor(s.spilTid/60),t=Math.round((Date.now()-s.tidspunkt)/6e4),n=t<1?"saved just now":t<60?`saved ${t} min ago`:t<1440?`saved ${Math.round(t/60)} h ago`:`saved ${Math.round(t/1440)} days ago`;return`${s.memory?`${s.memory.sværhed[0].toUpperCase()}${s.memory.sværhed.slice(1)} · `:""}Level ${s.helt.level} · ${s.soldater.length} ${s.soldater.length===1?"soldier":"soldiers"} · ${e} min played · ${n}`}const gn=s=>document.getElementById(s),Fx={str:"Strength — more health and damage",agi:"Agility — more armor and attack speed",int:"Intelligence — more mana and stronger abilities"};function Ox(s){return new Promise(e=>{const t=a=>{gn("essensvalg").classList.remove("vis"),e(a)};s&&(gn("fortsaet").hidden=!1,gn("fortsaet-tekst").textContent=Nx(s),gn("fortsaet").onclick=()=>t("fortsæt"));let n=null,i="normal";for(const a of document.querySelectorAll("#svaerhed button"))a.onclick=()=>{i=a.dataset.s;for(const o of document.querySelectorAll("#svaerhed button"))o.classList.toggle("valgt",o===a)};const r=gn("essenser");r.innerHTML="";for(const[a,o]of Object.entries(Pa)){const l=document.createElement("button");l.type="button",l.className=`essens ${a}`,l.innerHTML=`<b>${o.navn}</b><span>${o.motto}</span>`,l.addEventListener("click",()=>{n=a;for(const c of r.children)c.classList.toggle("valgt",c===l);Bx(a)}),r.appendChild(l)}gn("essens-start").onclick=()=>{n&&t({essens:n,sværhed:i})},gn("essensvalg").classList.add("vis")})}function Bx(s){var r;const e=Pa[s],t=xn.essens[s],n=mu[s].map((a,o)=>`<li><i>${er[a].ikon}</i><div><b>${er[a].navn}</b> <small>level ${El[o]}</small><span>${er[a].tekst}</span></div></li>`).join(""),i=gn("essens-detalje");i.className=`vis ${s}`,i.innerHTML=`
    <p class="kamp">${e.tekst}</p>
    <h3>Grows in</h3><p class="egenskab ${t}">${Fx[t]}</p><p class="kamp">Starts higher and grows fastest of your three attributes.</p>
    <h3>Abilities</h3><ul class="evneliste">${n}</ul>
    <h3>What it may lead to</h3>
    <ul class="ekko">${e.ekko.map(a=>`<li>${a}</li>`).join("")}<li class="skjult">…and more, revealed as you play.</li></ul>`,gn("essens-start").hidden=!1,gn("essens-start").textContent=`Begin as ${e.navn}`,(r=i.scrollIntoView)==null||r.call(i,{block:"nearest",behavior:"smooth"})}const mt=s=>document.getElementById(s);class zx{constructor(e){this.spil=e,this.knapper=[0,1,2].map(t=>mt(`evne${t}`)),this.knapper.forEach((t,n)=>t.addEventListener("pointerdown",i=>{i.preventDefault(),e.brugEvne(n)})),mt("centrer").addEventListener("click",()=>e.rig.centrér()),mt("menuknap").addEventListener("click",()=>mt("menu").classList.toggle("åben")),mt("test-level").addEventListener("click",()=>{e.helt.fåXp(Math.max(1,e.nødvendigXp()))}),mt("genstart").addEventListener("click",()=>location.reload()),mt("gem").addEventListener("click",()=>{X.emit("besked",Mu(e)?"Game saved":"The game could not be saved"),mt("menu").classList.remove("åben")}),window.addEventListener("keydown",t=>{const n=["q","w","e"].indexOf(t.key.toLowerCase());n>=0&&e.brugEvne(n),t.key===" "&&e.rig.centrér()}),X.on("helt_død",()=>mt("dødsskærm").classList.add("vis")),X.on("helt_genoplivet",()=>mt("dødsskærm").classList.remove("vis")),X.on("level_op",({level:t})=>this.banner(`Level ${t}`,t===3||t===6?"New ability unlocked!":"Your hero grows stronger"))}banner(e,t){const n=mt("banner");n.innerHTML=`<b>${e}</b><span>${t}</span>`,n.classList.remove("vis"),n.offsetWidth,n.classList.add("vis")}opdater(){const e=this.spil.helt;mt("level").textContent=e.level,mt("hp").style.width=`${e.hp/e.maxHp*100}%`,mt("hp-tal").textContent=`${Math.ceil(e.hp)} / ${Math.round(e.maxHp)}`,mt("mana").style.width=`${e.mana/e.manaMax*100}%`,mt("mana-tal").textContent=`${Math.floor(e.mana)} / ${e.manaMax}`,mt("xp").style.width=`${e.xpProcent()*100}%`,mt("centrer").classList.toggle("skjult",this.spil.rig.følger),e.død&&(mt("genopliv-tid").textContent=Math.ceil(e.genopliv)),this.knapper.forEach((t,n)=>{const i=e.evner.info(n);t.querySelector(".ikon").textContent=i.ikon,t.querySelector(".navn").textContent=i.navn,t.classList.toggle("låst",!i.oplåst),t.classList.toggle("tom",i.oplåst&&e.mana<i.mana),t.querySelector(".lås").textContent=i.oplåst?"":`Lvl ${i.oplåsLevel}`;const r=i.cd>0?i.cd/i.cdMax:0;t.style.setProperty("--cd",`${r*360}deg`),t.querySelector(".cd").textContent=i.cd>0?Math.ceil(i.cd):""})}}const Dn=2,Hx=110,Gx=255;class Vx{constructor(e){this.minX=e.minX,this.minZ=e.minZ,this.b=Math.ceil((e.maxX-e.minX)/Dn),this.h=Math.ceil((e.maxZ-e.minZ)/Dn),this.udforsket=new Uint8Array(this.b*this.h),this.synlig=new Uint8Array(this.b*this.h),this.data=new Uint8Array(this.b*this.h),this.tekstur=new Gl(this.data,this.b,this.h,Ta),this.tekstur.magFilter=this.tekstur.minFilter=zt,this.tekstur.needsUpdate=!0,this.uniforms={uTaage:{value:this.tekstur},uTaageMin:{value:new Ae(this.minX,this.minZ)},uTaageStr:{value:new Ae(this.b*Dn,this.h*Dn)}},this.kilder=[],this.patchet=new WeakSet,this.tid=0}tilføjKilde(e,t,n){this.kilder.push({x:e,z:t,radius:n})}erSynlig(e,t){return this.synlig[this.celle(e,t)]===1}erUdforsket(e,t){return this.udforsket[this.celle(e,t)]===1}celle(e,t){const n=Math.min(this.b-1,Math.max(0,Math.floor((e-this.minX)/Dn)));return Math.min(this.h-1,Math.max(0,Math.floor((t-this.minZ)/Dn)))*this.b+n}opdater(e,t){if(this.tid+=e,!(this.tid<.16)){this.tid=0,this.synlig.fill(0);for(const n of[...this.kilder,...t])this.cirkel(n.x,n.z,n.radius);for(let n=0;n<this.data.length;n++)this.data[n]=this.synlig[n]?Gx:this.udforsket[n]?Hx:0;this.tekstur.needsUpdate=!0}}cirkel(e,t,n){const i=n/Dn,r=(e-this.minX)/Dn,a=(t-this.minZ)/Dn;for(let o=Math.max(0,Math.floor(a-i));o<=Math.min(this.h-1,Math.ceil(a+i));o++)for(let l=Math.max(0,Math.floor(r-i));l<=Math.min(this.b-1,Math.ceil(r+i));l++){if((l+.5-r)**2+(o+.5-a)**2>i*i)continue;const c=o*this.b+l;this.synlig[c]=1,this.udforsket[c]=1}}patchScene(e){e.traverse(t=>{if(t.material)for(const n of Array.isArray(t.material)?t.material:[t.material])this.patch(n)})}patch(e){if(this.patchet.has(e)||!e.isMeshStandardMaterial)return;this.patchet.add(e);const t=this.uniforms;e.onBeforeCompile=n=>{Object.assign(n.uniforms,t),n.vertexShader=`varying vec2 vTaageXZ;
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
        gl_FragColor.rgb *= taage;`)},e.customProgramCacheKey=()=>"taage",e.needsUpdate=!0}}class jx{constructor(e,t){this.c=e,this.ctx=e.getContext("2d"),this.spil=t;const n=t.grænser;this.g=n,this.skala=160/(n.maxX-n.minX),e.width=Math.round((n.maxX-n.minX)*this.skala),e.height=Math.round((n.maxZ-n.minZ)*this.skala),this.terræn=this.tegnTerræn(t.verden.kort),this.tåge=document.createElement("canvas"),this.tid=0,e.addEventListener("pointerdown",i=>{i.stopPropagation();const r=e.getBoundingClientRect(),a=n.minX+(i.clientX-r.left)/r.width*(n.maxX-n.minX),o=n.minZ+(i.clientY-r.top)/r.height*(n.maxZ-n.minZ);t.rig.følger=!1,t.rig.fokus.set(a,0,o)})}px(e,t){return[(e-this.g.minX)*this.skala,(t-this.g.minZ)*this.skala]}tegnTerræn(e){const t=document.createElement("canvas");t.width=this.c.width,t.height=this.c.height;const n=t.getContext("2d");n.fillStyle="#2f6f99",n.fillRect(0,0,t.width,t.height);const i=Ca/2*this.skala*1.18;for(const r of e.felter.values()){const a=qe(r.q,r.r),[o,l]=this.px(a.x,a.z);if(r.type==="vand")continue;const[c,d,h]=Ql[r.region].farve;let u=`rgb(${Math.round(150*c)},${Math.round(170*d)},${Math.round(80*h)})`;r.type==="kyst"&&(u="#cdb57f"),r.blok==="skov"&&(u=r.region==="gravlandet"?"#4a463c":"#2f6b2c"),r.blok==="bjerg"&&(u="#7d7a72"),r.optaget&&!r.gåbar&&!r.blok&&(u="#d9c27a"),n.fillStyle=u,n.beginPath(),n.arc(o,l,i,0,Math.PI*2),n.fill()}return t}opdater(e){var g,b;if(this.tid+=e,this.tid<.25)return;this.tid=0;const{ctx:t,spil:n}=this,i=n.taage;t.drawImage(this.terræn,0,0),this.tåge.width!==i.b&&(this.tåge.width=i.b,this.tåge.height=i.h,this.tågeData=this.tåge.getContext("2d").createImageData(i.b,i.h));const r=this.tågeData.data;for(let m=0;m<i.data.length;m++)r[m*4+3]=i.synlig[m]?0:i.udforsket[m]?120:255;this.tåge.getContext("2d").putImageData(this.tågeData,0,0),t.imageSmoothingEnabled=!0,t.drawImage(this.tåge,0,0,i.b*2*this.skala,i.h*2*this.skala);for(const m of n.lejre){if(!m.creeps.some(y=>!y.død)||!i.erUdforsket(m.x,m.z))continue;const[f,v]=this.px(m.x,m.z);t.fillStyle=hu[m.data.niveau].farve,t.beginPath(),t.arc(f,v,m.data.niveau===5?4:2.6,0,Math.PI*2),t.fill()}const a=(m,f,v,y,_)=>{const[k,R]=this.px(m,f);t.fillStyle=v,_?t.fillRect(k-y,R-y,y*2,y*2):(t.beginPath(),t.arc(k,R,y,0,Math.PI*2),t.fill())};for(const m of n.base.bygninger)a(m.x,m.z,"#5dff6a",m.felter.length>1?4:2.6,!0);for(const m of n.base.soldater)m.død||a(m.x,m.z,"#9dff8a",1.6);for(const m of((g=n.memory)==null?void 0:g.bygninger)??[])!m.død&&i.erUdforsket(m.x,m.z)&&a(m.x,m.z,"#ff4a3a",m.type==="hal"?4:2.6,!0);for(const m of((b=n.memory)==null?void 0:b.levende)??[])m.rod.visible&&a(m.x,m.z,"#ff7a6a",1.8);const o=n.helt,[l,c]=this.px(o.x,o.z);t.fillStyle="#7dff6a",t.strokeStyle="#000",t.beginPath(),t.arc(l,c,3.2,0,Math.PI*2),t.fill(),t.stroke();const d=n.rig.fokus,h=n.rig.afstand,[u,p]=this.px(d.x-h*.55,d.z-h*.7);t.strokeStyle="rgba(255,255,255,0.8)",t.strokeRect(u,p,h*1.1*this.skala,h*1*this.skala)}}const Wx=9,Xx=9;class qx{constructor(e,t,n){this.steder=e.map(i=>({...i,aktiv:!1,puls:0})),this.taage=t,this.effekter=n}opdater(e,t){if(!t.død)for(const n of this.steder){const i=Math.hypot(t.x-n.x,t.z-n.z);n.type==="kilde"&&i<Wx?(t.hp=Math.min(t.maxHp,t.hp+t.maxHp*.04*e),t.mana=Math.min(t.manaMax,t.mana+t.manaMax*.03*e),n.puls-=e,n.puls<=0&&(n.puls=1.2,this.effekter.bølge(t.x,t.z,1.8,7208842,.8)),n.aktiv||(n.aktiv=!0,X.emit("besked","The fountain of life heals you"))):n.type==="kilde"&&(n.aktiv=!1),n.type==="udkig"&&!n.aktiv&&i<Xx&&(n.aktiv=!0,this.taage.tilføjKilde(n.x,n.z,46),this.effekter.bølge(n.x,n.z,10,16769162,1.2),X.emit("besked","The watchtower reveals the land around it"))}}}const Kx=new lr(.18,.5,6,12,1,!0).translate(0,3,0);function Su(s,e=1.5){const t=St[s],n=qt(t.model,{skygge:!0}),r=new Kt().setFromObject(n).getSize(new P);return n.scale.setScalar(e/Math.max(r.x,r.y,r.z)),t.farve&&n.traverse(a=>{a.isMesh&&(a.material=a.material.clone(),a.material.color.setRGB(...t.farve))}),n}class Yx{constructor(e,t,n,i,r){this.id=t,this.ladninger=r,this.x=n,this.z=i,this.rod=new nn,this.rod.position.set(n,0,i),this.model=Su(t),this.rod.add(this.model);const a=tr[St[t].sjældenhed].hex;this.stråle=new ct(Kx,new Ht({color:a,transparent:!0,opacity:.2,blending:wi,depthWrite:!1,side:Qt})),this.rod.add(this.stråle),this.fase=Math.random()*6,e.add(this.rod),this.scene=e}opdater(e){this.fase+=e,this.model.rotation.y+=e*1.2,this.model.position.y=.6+Math.sin(this.fase*2.2)*.18,this.stråle.material.opacity=.17+Math.sin(this.fase*3)*.05}fjern(){this.scene.remove(this.rod)}}class $x{constructor(e,t){Object.assign(this,t),this.åben=!1,this.rod=qt(t.guld?"kaykit-dungeon/chest_gold":"kaykit-dungeon/chest",{skygge:!0}),this.rod.scale.setScalar(1.35),this.rod.position.set(t.x,0,t.z),this.rod.rotation.y=t.rot??0,e.add(this.rod)}}class Zx{constructor(e,t,n,i){this.verden=e,this.liste=[],this.kister=t.map(r=>new $x(e.scene,r)),this.lejre=n,this.tilf=i,this.tid=0,X.on("creep_død",({creep:r})=>{this.verden.helt.inventar.tilføjGuld(Math.round(4+r.level*2.2+Math.random()*4)*(r.boss?5:1),r);const o=r.lejr;if(!(!o||o.fjende||o.creeps.some(l=>!l.død)))if(o.data.niveau===5){const[l,c]=mx[o.data.familie];this.læg(l,r.x,r.z),this.læg(this.tilf()<.5?c:fa(xo[4]),r.x+1.5,r.z+1),X.emit("besked","The boss is defeated! The chest is unlocked")}else this.læg(fa(xo[o.data.niveau]),r.x,r.z)}),X.on("item_smidt",({id:r,ladninger:a,x:o,z:l})=>this.læg(r,o+1.2,l+.8,a))}læg(e,t,n,i){const r=new Yx(this.verden.scene,e,t,n,i);return this.liste.push(r),r}samOp(e){const t=this.verden.helt.inventar;if(this.liste.includes(e)){if(!t.modtag(e.id,e.ladninger)){X.emit("besked","Your inventory is full");return}e.fjern(),this.liste.splice(this.liste.indexOf(e),1),X.emit("effekt",{type:"samlet",x:e.x,z:e.z,farve:tr[St[e.id].sjældenhed].hex})}}åbn(e){if(e.åben)return;const t=e.lejrId&&this.lejre.find(i=>i.data.id===e.lejrId);if(t&&t.creeps.some(i=>!i.død)){X.emit("besked","The chest stays locked while its guardians live");return}e.åben=!0,this.verden.helt.inventar.tilføjGuld(e.guld?150:45+Math.round(this.tilf()*30),e);const n=fa(xo[e.niveau??2]);this.læg(n,e.x+1.6,e.z+1.2),X.emit("effekt",{type:"kiste",x:e.x,z:e.z}),e.rod.traverse(i=>{i.isMesh&&(i.material=i.material.clone(),i.material.color.multiplyScalar(.45))})}find(e,t,n,i=46){let r=null,a=i;for(const o of this.liste){if(!o.rod.visible)continue;const l=n(o.x,.8,o.z),c=Math.hypot(l.x-e,l.y-t);c<a&&(a=c,r={type:"item",ting:o})}for(const o of this.kister){if(o.åben||!o.rod.visible)continue;const l=n(o.x,.8,o.z),c=Math.hypot(l.x-e,l.y-t);c<a+10&&(a=c,r={type:"kiste",ting:o})}return r}opdater(e){this.tid+=e;const t=this.verden.taage;for(const i of this.liste)i.rod.visible=t.erSynlig(i.x,i.z),i.rod.visible&&i.opdater(e);for(const i of this.kister)i.rod.visible=t.erUdforsket(i.x,i.z);const n=this.verden.helt;if(!n.død)for(const i of[...this.liste])St[i.id].type==="opsamling"&&Math.hypot(i.x-n.x,i.z-n.z)<1.6&&this.samOp(i)}}const Ot=96,Eu={};function gt(s){return Eu[s]}function Jx(s,e=[]){const t=new jd;t.add(new nu(16777215,4478310,2.2));const n=new Yl(16777215,2.4);n.position.set(2,4,3),t.add(n);const i=new kt(30,1,.1,50),r=new hi(Ot,Ot),a=new Uint8Array(Ot*Ot*4),o=document.createElement("canvas");o.width=o.height=Ot;const l=o.getContext("2d"),c=l.createImageData(Ot,Ot),d=new Uint8Array(256);for(let g=0;g<256;g++){const b=g/255;d[g]=Math.round(255*(b<=.0031308?b*12.92:1.055*b**(1/2.4)-.055))}const h=new me;s.getClearColor(h);const u=s.getClearAlpha();s.setClearColor(0,0);const p=[...Object.keys(St).map(g=>({id:g,lav:()=>Su(g,1.6),rot:[.25,-.7,["permanent","artefakt"].includes(St[g].type)?-.5:0]})),...e.map(g=>({id:g.id,lav:()=>au(g.sti,1.75),rot:g.vinkel??[.45,-.6,0]}))];for(const{id:g,lav:b,rot:m}of p){const f=b();f.rotation.set(...m);const y=new Kt().setFromObject(f).getCenter(new P);f.position.sub(y),t.add(f),i.position.set(0,.5,3.6),i.lookAt(0,0,0),s.setRenderTarget(r),s.clear(),s.render(t,i),s.readRenderTargetPixels(r,0,0,Ot,Ot,a);for(let _=0;_<Ot;_++)for(let k=0;k<Ot;k++){const R=((Ot-1-_)*Ot+k)*4,A=(_*Ot+k)*4;c.data[A]=d[a[R]],c.data[A+1]=d[a[R+1]],c.data[A+2]=d[a[R+2]],c.data[A+3]=a[R+3]}l.putImageData(c,0,0),Eu[g]=o.toDataURL(),t.remove(f)}s.setRenderTarget(null),s.setClearColor(h,u),r.dispose()}const Mt=s=>document.getElementById(s);class Qx{constructor(e){this.spil=e,this.inv=e.helt.inventar,this.pladser=[...document.querySelectorAll("#inventar .plads")],this.pladser.forEach((t,n)=>this.bindPlads(t,n)),Mt("info-luk").addEventListener("click",()=>this.lukInfo()),Mt("info-smid").addEventListener("click",()=>{this.infoPlads!=null&&this.inv.smid(this.infoPlads),this.lukInfo()}),Mt("info-brug").addEventListener("click",()=>{const t=this.infoPlads;this.lukInfo(),this.brug(t)}),Mt("butik-luk").addEventListener("click",()=>this.lukButik()),X.on("inventar_ændret",()=>this.tegn()),X.on("item_samlet",()=>this.tegn()),this.tegn()}bindPlads(e,t){e.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation()}),e.addEventListener("pointerup",n=>{n.stopPropagation(),this.inv.pladser[t]&&(this.infoPlads===t?this.lukInfo():this.visInfo(t))}),e.addEventListener("contextmenu",n=>n.preventDefault())}brug(e){const t=this.inv.brug(e);t&&t!=="info"&&X.emit("besked",t),this.tegn()}tegn(){this.pladser.forEach((e,t)=>{const n=this.inv.pladser[t];e.classList.toggle("tom",!n),e.style.setProperty("--sjælden",n?tr[St[n.id].sjældenhed].farve:"transparent"),e.querySelector("img").src=n?gt(n.id):"",e.querySelector("img").alt=n?St[n.id].navn:"",e.querySelector(".ladning").textContent=(n==null?void 0:n.ladninger)??""})}visInfo(e){const t=this.inv.pladser[e];if(!t)return;const n=St[t.id],i=tr[n.sjældenhed];this.infoPlads=e,Mt("info-ikon").src=gt(t.id),Mt("info-navn").textContent=n.navn,Mt("info-navn").style.color=i.farve,Mt("info-type").textContent=`${i.navn} · ${ux[n.type]}`,Mt("info-tekst").innerHTML=qh(t.id).map(r=>`<li>${r}</li>`).join(""),Mt("info-brug").hidden=!n.brug,Mt("info").classList.add("vis")}lukInfo(){this.infoPlads=null,Mt("info").classList.remove("vis")}åbnButik(e){this.butikSted=e,Mt("butik-navn").textContent=e.data?e.data.navn:"Merchant";const t=Mt("butik-varer");t.innerHTML="";for(const n of Kh){const i=St[n],r=document.createElement("div");r.className="vare",r.innerHTML=`<img alt="" src="${gt(n)}"><div><b style="color:${tr[i.sjældenhed].farve}">${i.navn}</b><span>${qh(n)[0]}</span></div><button type="button"><i class="mønt"></i>${i.pris}</button>`,r.querySelector("button").addEventListener("click",()=>this.køb(n)),t.appendChild(r)}this.opdaterButik(),Mt("butik").classList.add("vis")}køb(e){const t=St[e];if(this.inv.guld<t.pris)return X.emit("besked","Not enough gold");if(this.inv.fuld&&t.type!=="opsamling")return X.emit("besked","Your inventory is full");this.inv.guld-=t.pris,this.inv.modtag(e),X.emit("effekt",{type:"samlet",x:this.spil.helt.x,z:this.spil.helt.z,farve:16765803}),this.opdaterButik()}opdaterButik(){[...document.querySelectorAll("#butik-varer .vare")].forEach((e,t)=>{const n=St[Kh[t]];e.querySelector("button").disabled=this.inv.guld<n.pris||this.inv.fuld}),Mt("butik-guld").textContent=this.inv.guld}lukButik(){this.butikSted=null,Mt("butik").classList.remove("vis")}opdater(){const e=this.spil.helt;this.butikSted&&(e.død||Math.hypot(e.x-this.butikSted.x,e.z-this.butikSted.z)>14?this.lukButik():this.opdaterButik());const t=this.inv.cooldown>0;this.pladser.forEach(n=>n.classList.toggle("vent",t))}}const ey={guld:300,træ:150,sten:80},Jh={mine:8e3},ty={guld:10,træ:10,sten:8},ny={guld:1.6,træ:4.5,sten:5.5},iy=100,Ri={guld:"gold",træ:"wood",sten:"stone"};class sy{constructor(){Object.assign(this,ey),this.forsyning=0,this.forsyningMaks=0}harRåd(e={}){return(e.guld??0)<=this.guld&&(e.træ??0)<=this.træ&&(e.sten??0)<=this.sten}mangler(e={},t=0){const n=[];return(e.guld??0)>this.guld&&n.push(`${e.guld-this.guld} gold`),(e.træ??0)>this.træ&&n.push(`${e.træ-this.træ} wood`),(e.sten??0)>this.sten&&n.push(`${e.sten-this.sten} stone`),n.length?`Not enough: ${n.join(", ")}`:t&&this.forsyning+t>Math.min(this.forsyningMaks,iy)?"Build a Supply Hut to get more supply":null}betal(e={}){this.guld-=e.guld??0,this.træ-=e.træ??0,this.sten-=e.sten??0,X.emit("økonomi",this)}refunder(e={},t=1){this.guld+=Math.floor((e.guld??0)*t),this.træ+=Math.floor((e.træ??0)*t),this.sten+=Math.floor((e.sten??0)*t),X.emit("økonomi",this)}aflever(e,t){this[e]+=t,X.emit("økonomi",this)}}class ry{constructor(e,t){this.ressourcer=t,this.miner=e.filter(n=>n.type==="mine").map(n=>({...n,guld:n.start?Jh.mine*1.5:Jh.mine}))}som(e){const t=e.type==="mine";return{type:t?"guld":e.type,kilde:e,x:e.x,z:e.z,r:t?5:e.r}}nærmeste(e,t,n,i=60){let r=null,a=i;const o=e==="guld"?this.miner:this.ressourcer;for(const l of o){if(!(l[e]>0))continue;const c=Math.hypot(l.x-t,l.z-n)+(l.blokerer&&e==="træ"?3:0);c<a&&(a=c,r=l)}return r&&this.som(r)}høst(e,t,n){const i=Math.min(n,e.kilde[t]??0);return e.kilde[t]-=i,i>0&&e.kilde[t]<=0&&X.emit("kilde_tom",{type:t,kilde:e.kilde}),i}}const ay=["Knife_Offhand","1H_Crossbow","2H_Crossbow","Knife","Throwable"],oy={guld:"kaykit-dungeon/coin_stack_small_gltf",træ:"kaykit-hexagon/decoration/props/resource_lumber",sten:"kaykit-hexagon/decoration/props/resource_stone"};class sc extends Ms{constructor(e,t,n,i){super(e,"units/arbejder",{skala:.85,skjul:ay,våben:{r:"kaykit-adventurers/axe_1handed"},radius:.55}),tc(this.model),this.base=t,this.maxHp=220,this.hp=220,this.fart=4.4,this.side="egen",this.tilstand="ledig",this.kilde=null,this.bærer=null,this.bygning=null,this.timer=0,this.rod.position.set(n,0,i),this.byrder={};for(const[r,a]of Object.entries(oy)){const o=au(a,.75);o.position.set(0,1.35,-.42),o.visible=!1,this.rod.add(o),this.byrder[r]=o}this.spil("Idle")}kommandoGå(e,t){return this.nulstil(),this.tilstand=this.gåTil(e,t)?"gå":"ledig",this.tilstand==="gå"}kommandoHøst(e){this.nulstil(),this.kilde=e,this.bærer&&this.bærer.type!==e.type&&this.sætByrde(null),this.gåTilKilde()}høstNærmeste(e){const t=this.base.kilder.nærmeste(e,this.x,this.z,200);t?this.kommandoHøst(t):(this.tilstand="ledig",X.emit("besked",`There is no more ${Ri[e]} nearby`))}kommandoByg(e){this.nulstil(),this.bygning=e,this.tilstand="tilByg",this.gåTilKant(e.x,e.z,e.radius+1)}nulstil(){this.kilde=null,this.bygning=null,this.rod.visible=!0,this.stop()}sætByrde(e){this.bærer=e;for(const[t,n]of Object.entries(this.byrder))n.visible=(e==null?void 0:e.type)===t}gåTilKant(e,t,n){const i=this.x-e,r=this.z-t,a=Math.hypot(i,r)||1;this.gåTil(e+i/a*n,t+r/a*n)||this.gåTil(e,t)}gåTilKilde(){this.tilstand="tilKilde",this.gåTilKant(this.kilde.x,this.kilde.z,this.kilde.r+1.2)}gåHjem(){const e=this.base.afleveringssted(this.bærer.type,this.x,this.z);if(!e){this.tilstand="ledig",X.emit("besked","No building can take it");return}this.hjem=e,this.tilstand="tilAflevering",this.gåTilKant(e.x,e.z,e.radius+1)}fremme(e,t,n,i){const r=Math.hypot(e-this.x,t-this.z);return r<=n||!this.bevæger&&r<=i}opdater(e){if(this.død)return this.opdaterDød(e);this.rod.visible=this.tilstand!=="iMine",super.opdater(e);const t=this.kilde;switch(this.tilstand){case"gå":this.opdaterBevægelse(e),this.bevæger||(this.tilstand="ledig");break;case"tilKilde":this.opdaterBevægelse(e),this.fremme(t.x,t.z,t.type==="guld"?8.5:t.r+2.6,t.type==="guld"?13:t.r+7)?this.startHøst():this.bevæger||this.høstNærmeste(t.type);break;case"høster":case"iMine":this.timer-=e,this.timer<=0&&this.færdigHøst();break;case"tilAflevering":this.opdaterBevægelse(e),this.fremme(this.hjem.x,this.hjem.z,this.hjem.radius+2,this.hjem.radius+8)?this.aflever():this.bevæger||this.gåHjem();break;case"tilByg":{const n=this.bygning;if(this.opdaterBevægelse(e),n.død||n.færdig&&!n.skadet){this.tilstand="ledig";break}this.fremme(n.x,n.z,n.radius+2.5,n.radius+8)&&(this.stop(),this.tilstand="bygger",this.vend(n.x,n.z),this.spil("1H_Melee_Attack_Chop",{fart:.9}));break}case"bygger":this.bygning.byg(e),(this.bygning.død||this.bygning.færdig&&!this.bygning.skadet)&&(this.tilstand="ledig",this.bygning=null,this.spil("Cheer",{loop:!1,gentag:!0}),this.timer=1.5);break}this.bevæger?this.spil("Running_A",{fart:.95}):(this.tilstand==="ledig"||this.tilstand==="gå")&&(this.timer-=e,this.timer<=0&&this.spil("Idle"))}startHøst(){const e=this.kilde;this.stop(),this.vend(e.x,e.z),this.timer=ny[e.type],e.type==="guld"?(this.tilstand="iMine",this.rod.visible=!1):(this.tilstand="høster",this.spil("1H_Melee_Attack_Chop",{fart:e.type==="sten"?.8:1}))}færdigHøst(){const e=this.kilde,t=this.base.kilder.høst(e,e.type,ty[e.type]);if(t<=0){this.høstNærmeste(e.type);return}this.sætByrde({type:e.type,mængde:t}),this.spil("PickUp",{loop:!1,gentag:!0,fart:1.6}),this.gåHjem()}dø(e){super.dø(e),this.nulstil(),this.sætByrde(null),this.tilstand="død",this.spil("Death_A",{loop:!1,fade:.08}),this.forsvind=5,this.base.økonomi.forsyning-=1,X.emit("besked","A worker has died")}opdaterDød(e){super.opdater(e),this.forsvind-=e,this.forsvind<1.5&&(this.rod.position.y-=e*.8),this.forsvind<=0&&!this.fjernet&&(this.fjernet=!0,this.fjern())}aflever(){this.stop(),this.base.økonomi.aflever(this.bærer.type,this.bærer.mængde),X.emit("flydetekst",{enhed:this,tekst:`+${this.bærer.mængde} ${Ri[this.bærer.type]}`,klasse:this.bærer.type==="guld"?"guld":"ressource"});const e=this.bærer.type;this.sætByrde(null),this.kilde&&(this.kilde.kilde[e]??0)>0?this.gåTilKilde():this.høstNærmeste(e)}}const ly=14,Qh=2.5;function cy(s,e,t,n){const i=s.length,r=s.reduce((g,b)=>g+b.x,0)/i,a=s.reduce((g,b)=>g+b.z,0)/i;let o=e-r,l=t-a;const c=Math.hypot(o,l)||1;o/=c,l/=c;const d=-l,h=o,u=[...s].sort((g,b)=>ed(g)-ed(b)),p=Math.max(1,Math.ceil(Math.sqrt(i*1.6)));return u.map((g,b)=>{const m=Math.floor(b/p),f=b%p,v=Math.min(p,i-m*p),y=(f-(v-1)/2)*Qh,_=m*Qh,k={x:e+d*y-o*_,z:t+h*y-l*_};return{u:g,...n.erGåbar(k.x,k.z)?k:{x:e,z:t}}})}const ed=s=>{var e;return(e=s.data)!=null&&e.projektil?2:s.side==="egen"&&!s.data?1:0};function hy(s,e,t,n){let i=!1;for(const{u:r,x:a,z:o}of cy(s,e,t,n))i=r.kommandoGå(a,o)||r.kommandoGå(e,t)||i;return i}function dy(s,e){let t=!1;for(const n of s)n.kommandoAngrib&&(n.kommandoAngrib(e),t=!0);return t}const Al=s=>!(s instanceof sc);function uy(s,e){const t=document.createElement("div");return t.id="boks",document.body.appendChild(t),(n,i,r,a,o)=>{const l=Math.min(n,r),c=Math.min(i,a),d=Math.abs(r-n),h=Math.abs(a-i);if(Object.assign(t.style,{left:`${l}px`,top:`${c}px`,width:`${d}px`,height:`${h}px`,display:o?"none":"block"}),!o)return;const u=s.lærred.getBoundingClientRect(),p=m=>{if(m.død||!m.rod.visible)return!1;const f=e(m.x,1,m.z),v=f.x+u.left,y=f.y+u.top;return v>=l-14&&v<=l+d+14&&y>=c-14&&y<=c+h+14},g=[s.helt,...s.base.soldater].filter(p),b=g.length?g:s.base.arbejdere.filter(p);b.length&&s.valg.vælg(b)}}function fy(s,e,t){const n=s.lærred.getBoundingClientRect();return s.base.soldater.filter(i=>{if(i.død||i.type!==e.type)return!1;const r=t(i.x,1,i.z);return r.synlig&&r.x>=0&&r.y>=0&&r.x<=n.width&&r.y<=n.height})}function py(s){if(s.length===1&&s[0].vet){const t=s[0],n=`${Math.ceil(t.hp)}/${t.maxHp} health`;return t.vet.gren?`${n} · ${t.vet.gren.evne}: ${t.vet.gren.evneTekst}`:t.vet.påVej?`${n} · On the way to the War Camp for ${oi[t.vet.påVej].navn} training`:t.vet.veteran?t.type==="grunt"?`${n} · Veteran — choose a path (green edge = suits your way of fighting)`:`${n} · Veteran`:`${n} · Veteran XP ${t.vet.xp}/${pa.tærskel} (survive battles)`}const e={};for(const t of s){const n=t.navn??(t.stats?"Hero":"Worker");e[n]=(e[n]??0)+1}return Object.entries(e).map(([t,n])=>`${n} × ${t}`).join(" · ")}function my({spil:s,lærred:e,overlay:t,effekter:n,genstande:i,steder:r}){const{helt:a,verden:o,rig:l,valg:c,base:d}=s,h=new Uv,u=new ii(new P(0,1,0),0),p=(R,A,T)=>t.skærm(R,A,T),g=()=>e.getBoundingClientRect();function b(R,A){const T=g();h.setFromCamera(new Ae(R/T.width*2-1,-(A/T.height)*2+1),l.kamera);const x=new P;return h.ray.intersectPlane(u,x)?x:null}function m(R,A,T){for(const w of d.kilder.miner){const L=p(w.x,3,w.z);if(w.guld>0&&Math.hypot(L.x-R,L.y-A)<70)return d.kilder.som(w)}if(!T)return null;let x=null,M=56;for(const w of d.kilder.ressourcer){if(!(w[w.type]>0)||Math.abs(w.x-T.x)>16||Math.abs(w.z-T.z)>16)continue;const L=p(w.x,w.y+w.h*.4,w.z),F=Math.hypot(L.x-R,L.y-A);F<M&&o.taage.erUdforsket(w.x,w.z)&&(M=F,x=w)}return x&&d.kilder.som(x)}function f(R,A,T){const x=b(A,T),M=m(A,T,x);if(M){R.kommandoHøst(M),n.markør(M.x,M.z,16765803);return}x&&R.kommandoGå(x.x,x.z)?n.markør(x.x,x.z):X.emit("besked","The worker cannot go there")}function v(R,A){let T=null,x=52;for(const M of o.creeps){if(M.død||!M.rod.visible)continue;const w=p(M.x,M.højde*.5,M.z),L=Math.hypot(w.x-R,w.y-A)-(M.erBygning?40:0);L<x&&(x=L,T=M)}return[T,x]}function y(R,A,T){const x=R.filter(Al),[M]=v(A,T);if(M&&x.length)return dy(x,M),n.markør(M.x,M.z,16734794);const w=b(A,T);if(x.length<R.length){const L=m(A,T,w);if(L){for(const F of R)Al(F)||F.kommandoHøst(L);return n.markør(L.x,L.z,16765803)}}w&&hy(R,w.x,w.z,o.kort)?n.markør(w.x,w.z):X.emit("besked","They cannot go there")}function _(R,A){if(a.død)return;const[T,x]=v(R,A),M=i.find(R,A,p,Math.min(x,46));if((M==null?void 0:M.type)==="item"){const L=M.ting;return a.kommandoInteraktion(L.x,L.z,1.8,()=>i.samOp(L)),n.markør(L.x,L.z,16769162)}if((M==null?void 0:M.type)==="kiste"){const L=M.ting;return a.kommandoInteraktion(L.x,L.z,3,()=>i.åbn(L)),n.markør(L.x,L.z,16769162)}if(T)return a.kommandoAngrib(T),n.markør(T.x,T.z,16734794);for(const L of r){if(L.type!=="marked"&&L.type!=="kro"||!o.taage.erUdforsket(L.x,L.z))continue;const F=p(L.x,3,L.z);if(!(Math.hypot(F.x-R,F.y-A)>70))return L.type==="kro"?X.emit("besked","Soon you will be able to hire more heroes at the tavern"):s.handlVed(L)}const w=b(R,A);w&&a.kommandoGå(w.x,w.z)?n.markør(w.x,w.z):t.toast("Your hero cannot go there")}const k={s:null,t:0};return(R,A)=>{var L,F;const T=g(),x=R-T.left,M=A-T.top;if(c.placering){const B=b(x,M);c.vælgFelt(B&&o.kort.felt(B.x,B.z));return}if(!a.død&&!c.erHelt){const B=p(a.x,1.2,a.z);if(Math.hypot(B.x-x,B.y-M)<40)return c.vælg(null)}const w=d.find(x,M,p);if((w==null?void 0:w.type)==="soldat"){const B=w.ting,V=performance.now();c.vælg(k.s===B&&V-k.t<420?fy(s,B,p):[B]),k.s=B,k.t=V;return}if(w&&c.erArbejder&&w.type==="bygning"){const B=c.valgt,V=w.ting;if(!V.færdig||V.skadet)return B.kommandoByg(V),n.markør(V.x,V.z,8257386);if(B.bærer&&((L=V.data.aflevering)!=null&&L.includes(B.bærer.type)))return B.gåHjem()}if(w&&w.ting!==c.valgt)return c.vælg(w.ting);if(!w){if(c.erGruppe)return y(c.gruppe,x,M);if(c.erArbejder)return f(c.valgt,x,M);if(c.erBygning){const B=c.valgt,V=b(x,M);return B.færdig&&((F=B.data.træner)!=null&&F.some(H=>H!=="arbejder"))&&V&&o.kort.erGåbar(V.x,V.z)?(B.samling={x:V.x,z:V.z},X.emit("besked","New soldiers will gather here"),n.markør(V.x,V.z)):c.vælg(null)}_(x,M)}}}const xi="kaykit-hexagon/buildings/green/",yn={storlejr:{hp:2400,navn:"Great Hall",model:xi+"building_castle_green",skala:1.45,felter:3,pris:{guld:400,træ:200,sten:150},tid:90,forsyning:12,aflevering:["guld","træ","sten"],syn:34,tekst:"Your main building. Trains workers and receives all resources.",træner:["arbejder"],kanBygges:!1},hytte:{hp:600,navn:"Supply Hut",kort:"Hut",model:xi+"building_home_a_green",skala:2.15,pris:{guld:80,træ:50},tid:25,forsyning:10,syn:16,tekst:"+10 supply, so you can have more workers and soldiers."},savværk:{hp:800,navn:"Lumber Mill",model:xi+"building_lumbermill_green",skala:1.3,pris:{guld:120,træ:60},tid:35,aflevering:["træ","sten"],syn:18,tekst:"Workers can drop off wood and stone here. Build it near the forest."},tårn:{hp:900,navn:"Watch Tower",kort:"Tower",model:xi+"building_tower_a_green",skala:1.2,pris:{guld:100,træ:40,sten:60},tid:40,syn:30,angreb:{rækkevidde:18,skade:[22,30],tid:1.4},tekst:"Shoots enemies in range."},marked:{hp:900,navn:"Marketplace",kort:"Market",model:xi+"building_market_green",skala:1.15,pris:{guld:150,træ:80,sten:40},tid:45,syn:18,butik:!0,tekst:"Your own shop with potions, equipment and tomes."},alter:{hp:1e3,navn:"Spirit Altar",kort:"Altar",model:xi+"building_church_green",skala:1.5,pris:{guld:160,træ:60,sten:80},tid:50,syn:18,alter:!0,tekst:"Your hero is revived here and healed nearby. Make offerings to raise your hero's attributes."},krigerlejr:{hp:1100,navn:"War Camp",model:xi+"building_barracks_green",skala:1.2,pris:{guld:160,træ:80,sten:40},tid:55,syn:18,træner:["grunt","spydkaster"],tekst:"Trains grunts and spear throwers. Veteran grunts are specialised here."}},gy=["hytte","savværk","tårn","krigerlejr","marked","alter"],_n={arbejder:{navn:"Worker",pris:{guld:50},tid:12,forsyning:1,tekst:"Gathers gold, wood and stone and builds your base."},grunt:{navn:"Grunt",pris:{guld:120,træ:20},tid:18,forsyning:2,ikon:"enhed-grunt",tekst:"Melee. The backbone of your army."},spydkaster:{navn:"Spear Thrower",pris:{guld:100,træ:40},tid:18,forsyning:2,ikon:"enhed-spydkaster",tekst:"Throws spears from range."}},Ss=["kaykit-hexagon/buildings/neutral/building_stage_a","kaykit-hexagon/buildings/neutral/building_stage_b","kaykit-hexagon/buildings/neutral/building_stage_c"],ta="kaykit-hexagon/buildings/red/",Sa={hal:{navn:"Bone Throne",model:ta+"building_castle_red",skala:1.45,hp:2600,rustning:5,radius:9,højde:12,syn:26},krypt:{navn:"Crypt",model:ta+"building_barracks_red",skala:1.2,hp:1300,rustning:3,radius:5.5,højde:8,træner:!0,pris:220},spir:{navn:"Grave Spire",model:ta+"building_tower_a_red",skala:1.2,hp:950,rustning:4,radius:5,højde:10,pris:160,angreb:{rækkevidde:17,skade:[20,28],tid:1.6}},hytte:{navn:"Haunt",model:ta+"building_home_b_red",skala:2.1,hp:700,rustning:2,radius:5,højde:7,pris:100}},td=["spir","krypt","hytte","hytte","spir","krypt","spir","spir"],So=4,$s={minion:{navn:"Risen",pris:70,tid:12,vægt:4},rogue:{navn:"Bone Stalker",pris:90,tid:14,vægt:2},warrior:{navn:"Grave Knight",pris:150,tid:20,vægt:2},mage:{navn:"Bone Mage",pris:120,tid:18,vægt:2}},Tu={easy:{navn:"Easy",indtægt:2.4,førsteAngreb:10,mellemrum:4.5,level:2,loft:12,hjemme:1,bølge:[3,2]},normal:{navn:"Normal",indtægt:3.4,førsteAngreb:7,mellemrum:3.5,level:3,loft:22,hjemme:2,bølge:[5,2]},hard:{navn:"Hard",indtægt:4.8,førsteAngreb:5,mellemrum:2.5,level:4,loft:30,hjemme:3,bølge:[6,3]}},by=[[4,"spir"],[8,"krypt"],[12,"spir"],[16,"spir"]],_y=(s,e)=>Math.min(12,Tu[s].level+Math.floor(e/4)),vy=[...new Set(["units/hero_tide","units/arbejder",...Object.values(vu).map(s=>s.model),nc,"kaykit-adventurers/shield_round_barbarian","kaykit-adventurers/axe_2handed",...Object.values(Ml).map(s=>`units/${s.model}`),...Object.values(Ml).flatMap(s=>Object.values(s.våben??{}).map(e=>`kaykit-skeletons/${e}`)),...gx(),"kaykit-dungeon/chest","kaykit-dungeon/chest_gold",...Object.values(yn).map(s=>s.model),...Ss,...Object.values(Sa).map(s=>s.model),"kaykit-hexagon/buildings/neutral/building_destroyed","kaykit-hexagon/decoration/props/resource_lumber","kaykit-hexagon/decoration/props/resource_stone","kaykit-hexagon/decoration/nature/trees_a_cut","kaykit-hexagon/decoration/nature/trees_b_cut"])],xy=[{id:"res-guld",sti:"kaykit-dungeon/coin_stack_small_gltf"},{id:"res-træ",sti:"kaykit-hexagon/decoration/props/resource_lumber"},{id:"res-sten",sti:"kaykit-hexagon/decoration/props/resource_stone"},{id:"res-forsyning",sti:"kaykit-hexagon/buildings/green/building_home_a_green"},{id:"økse",sti:"kaykit-adventurers/axe_1handed",vinkel:[.2,-.6,-.6]},{id:"enhed-grunt",sti:"kaykit-adventurers/shield_round_barbarian"},{id:"enhed-spydkaster",sti:nc,vinkel:[.5,0,.8]},{id:"hær",sti:"kaykit-adventurers/axe_2handed",vinkel:[.2,-.6,-.6]},...Object.entries(yn).map(([s,e])=>({id:"byg-"+s,sti:e.model}))],yy=Rs.hexSkala;class wl{constructor(e,t,{x:n,z:i,felter:r,rot:a=0,færdig:o=!1}){this.base=e,this.verden=e.verden,this.type=t,this.data=yn[t],this.x=n,this.z=i,this.felter=r,this.rot=a,this.radius=r.length>1?9:5.5,this.højde=7,this.side="egen",this.fremskridt=o?1:0,this.færdig=!1,this.kø=[],this.cooldown=0,this.død=!1,this.maxHp=this.data.hp??900,this.rustning=this.type==="storlejr"?5:this.type==="tårn"?4:3,this.hp=o?this.maxHp:this.maxHp*.1,this.rod=null,this.visModel(o?this.data.model:Ss[0],o?this.data.skala:1),o&&this.bliverFærdig(!0)}get skadet(){return this.hp<this.maxHp-.5}visModel(e,t){this.rod&&this.verden.scene.remove(this.rod),this.rod=qt(e,{skygge:!0}),this.rod.position.set(this.x,0,this.z),this.rod.rotation.y=this.rot,this.rod.scale.setScalar(yy*t),this.verden.scene.add(this.rod),this.stadie=e}byg(e){if(this.død)return;if(this.færdig){this.hp=Math.min(this.maxHp,this.hp+this.maxHp*e/(this.data.tid*1.5));return}this.fremskridt=Math.min(1,this.fremskridt+e/this.data.tid),this.hp=Math.min(this.maxHp,this.hp+this.maxHp*.9*e/this.data.tid);const t=Ss[Math.min(2,Math.floor(this.fremskridt*3))];this.fremskridt<1&&t!==this.stadie&&this.visModel(t,1),this.fremskridt>=1&&this.bliverFærdig(!1)}bliverFærdig(e){this.færdig=!0,this.visModel(this.data.model,this.data.skala);const t=this.base.økonomi;this.data.forsyning&&(t.forsyningMaks+=this.data.forsyning),this.verden.taage.tilføjKilde(this.x,this.z,this.data.syn??16),this.tågeKilde=this.verden.taage.kilder[this.verden.taage.kilder.length-1],this.data.alter&&(this.verden.helt.spawn={x:this.x+4,z:this.z+6}),e||(X.emit("effekt",{type:"kiste",x:this.x,z:this.z}),X.emit("besked",`${this.data.navn} is complete`)),X.emit("bygning_færdig",{bygning:this})}tagSkade(e,t){if(this.død)return!1;const n=Ci(e,this.rustning);return this.hp=Math.max(0,this.hp-n),X.emit("skade",{mål:this,mængde:n,kilde:t}),X.emit("bygning_angrebet",{bygning:this,kilde:t}),this.hp<=0?(this.ødelæg(),!0):!1}ødelæg(e=!1){this.død=!0;const t=this.base.økonomi;this.færdig&&this.data.forsyning&&(t.forsyningMaks-=this.data.forsyning);for(const i of this.kø)t.refunder(_n[i.type].pris,.5),t.forsyning-=_n[i.type].forsyning;this.kø=[];for(const i of this.felter)i.optaget=!1,i.gåbar=!0;const n=this.verden.taage.kilder;n.includes(this.tågeKilde)&&n.splice(n.indexOf(this.tågeKilde),1),this.visModel("kaykit-hexagon/buildings/neutral/building_destroyed",this.felter.length>1?1.8:1.15),!e&&(X.emit("effekt",{type:"stomp",x:this.x,z:this.z,radius:this.radius+2}),X.emit("bygning_ødelagt",{bygning:this}),X.emit("besked",`Your ${this.data.navn} has been destroyed!`))}træn(e){const t=_n[e],n=this.base.økonomi;if(t.låst)return t.låst;if(!this.færdig)return"The building is not finished";if(this.kø.length>=5)return"The queue is full";const i=n.mangler(t.pris,t.forsyning);return i||(n.betal(t.pris),n.forsyning+=t.forsyning,this.kø.push({type:e,tid:0}),null)}annullérTræning(e){const t=this.kø[e];if(!t)return;const n=_n[t.type];this.kø.splice(e,1),this.base.økonomi.refunder(n.pris),this.base.økonomi.forsyning-=n.forsyning}opdater(e){var r,a;if(!this.færdig||this.død)return;const t=this.kø[0];t&&(t.tid+=e,t.tid>=_n[t.type].tid&&(this.kø.shift(),(a=(r=this.base).vedTrænet)==null||a.call(r,t.type,this)));const n=this.data.angreb;if(n&&(this.cooldown-=e,this.cooldown<=0)){const o=this.verden.creeps.filter(l=>!l.død&&!l.erBygning&&l.rod.visible&&Math.hypot(l.x-this.x,l.z-this.z)<n.rækkevidde).sort((l,c)=>Math.hypot(l.x-this.x,l.z-this.z)-Math.hypot(c.x-this.x,c.z-this.z))[0];o&&(this.cooldown=n.tid,X.emit("projektil",{fra:this.skytte(),mål:o,skade:mr(...n.skade),farve:16765562}))}const i=this.verden.helt;this.data.alter&&!i.død&&Math.hypot(i.x-this.x,i.z-this.z)<12&&(i.hp=Math.min(i.maxHp,i.hp+i.maxHp*.03*e))}skytte(){const e=this;return{x:e.x,z:e.z,højde:9,afstand:t=>Math.hypot(t.x-e.x,t.z-e.z)}}}const My={ironhide:12,ravager:10,berserker:14},Eo=(s,e)=>s.verden.creeps.filter(t=>!t.død&&t.tilstand==="jagt"&&s.afstand(t)<e),Sy={opdaterEvner(s){var n;const e=this.evne,t=(n=this.vet.gren)==null?void 0:n.id;if(e.cd=Math.max(0,e.cd-s),e.storm>0&&(e.storm-=s,e.storm<=0&&(this.fart=this.basisFart)),e.raseri>0&&(e.raseri-=s),!(!t||e.cd>0)){if(t==="ironhide"){const i=Eo(this,7);if(i.length<2)return;for(const r of i)r.mål=this,r.spot=2.5;this.brugEvne(16734794)}else if(t==="ravager"){if(!this.mål||this.afstand(this.mål)<4.5||this.gåOrdre)return;e.storm=3,this.basisFart=this.fart,this.fart*=2,this.stormSlag=!0,this.brugEvne(16751194)}else if(t==="berserker"){if(Eo(this,4.5).length<2)return;e.raseri=4,this.gåOrdre=!1,this.hen=null,this.brugEvne(16761402)}}},brugEvne(s){this.evne.cd=My[this.vet.gren.id],X.emit("effekt",{type:"evne",x:this.x,z:this.z,farve:s}),X.emit("flydetekst",{enhed:this,tekst:this.vet.gren.evne,klasse:"level"})},slagFaktor(){return this.stormSlag?(this.stormSlag=!1,1.5):1},vedSlag(s,e){if(this.evne.raseri>0)for(const t of Eo(this,this.data.rækkevidde+1.6))t!==s&&t.tagSkade(Ci(Math.round(e*.8),0),this)}};class Au extends Ms{constructor(e,t,n,i,r){const a=vu[n];super(e,a.model,{skala:a.skala,skjul:a.skjul,våben:a.våben??{},våbenSkala:a.våbenSkala??1,radius:a.radius}),tc(this.model),Object.assign(this,{base:t,type:n,data:a,navn:a.navn,side:"egen"}),this.maxHp=this.hp=a.hp,this.fart=a.fart,this.rustning=a.rustning,this.skadeBonus=0,this.mål=null,this.sving=null,this.cooldown=0,this.gåOrdre=!1,this.angrebsOrdre=!1,this.tid=0,this.sidstIKamp=-99,this.angribere=new Map,this.vet={xp:0,veteran:!1,gren:null},this.evne={cd:0,storm:0,raseri:0},this.rod.position.set(i,0,r),this.spil("Cheer",{loop:!1}),this.timer=1.2}get iKamp(){return this.tid-this.sidstIKamp<5}kommandoGå(e,t){return this.død||this.evne.raseri>0?!1:(this.mål=null,this.angrebsOrdre=!1,this.hen=null,this.gåOrdre=this.gåTil(e,t),X.emit("soldat_ordre",{soldat:this,type:"gå"}),this.gåOrdre)}kommandoAngrib(e){this.død||e.død||this.evne.raseri>0||(this.mål=e,this.angrebsOrdre=!0,this.gåOrdre=!1,this.hen=null,X.emit("soldat_ordre",{soldat:this,type:"angrib",mål:e}))}kommandoHen(e,t,n,i){return!this.kommandoGå(e,t)&&Math.hypot(e-this.x,t-this.z)>n?!1:(this.hen={x:e,z:t,radius:n,udfør:i},!0)}stopOrdre(){this.stop(),this.mål=null,this.gåOrdre=!1,this.angrebsOrdre=!1,this.hen=null}opdater(e){var t,n;if(this.tid+=e,super.opdater(e),this.død)return this.opdaterDød(e);if(this.cooldown-=e,this.opdaterEvner(e),this.iKamp||(this.hp=Math.min(this.maxHp,this.hp+this.maxHp*.004*e)),((t=this.mål)!=null&&t.død||((n=this.mål)==null?void 0:n.tilstand)==="hjem")&&(this.mål=null,this.angrebsOrdre=!1),this.hen&&Math.hypot(this.hen.x-this.x,this.hen.z-this.z)<=this.hen.radius){const i=this.hen;this.hen=null,this.stop(),this.gåOrdre=!1,i.udfør()}this.gåOrdre&&!this.bevæger&&(this.gåOrdre=!1,this.hen=null),!this.mål&&!this.gåOrdre&&!this.sving&&(this.mål=gu(this,15,this.angribere,this.tid)??this.nærFjende()),this.sving?this.opdaterSving(e):this.mål&&!this.gåOrdre?this.forfølg(e):this.opdaterBevægelse(e),this.timer-=e,!this.sving&&this.timer<=0&&(this.bevæger?this.spil(this.data.løb,{fart:this.fart/4.4}):this.spil(this.data.idle))}nærFjende(){let e=null,t=this.data.rækkevidde+3;for(const n of this.verden.creeps){if(n.død||!n.rod.visible||n.tilstand!=="jagt"&&!n.erBygning)continue;const i=this.afstand(n)-(n.erBygning?n.radius:0);i<t&&(t=i,e=n)}return e}forfølg(e){const t=this.mål;if(this.afstand(t)-t.radius>this.data.rækkevidde){this.genberegn=(this.genberegn??0)-e,(this.genberegn<=0||!this.bevæger)&&(this.gåTil(t.x,t.z),this.genberegn=.35),this.opdaterBevægelse(e);return}this.stop(),this.vend(t.x,t.z),this.cooldown<=0&&this.startSving()}startSving(){var i;const e=this.data.angreb[Math.floor(Math.random()*this.data.angreb.length)],t=Math.min(1,this.data.angrebsTid*.7),n=((i=this.handlinger.get(e))==null?void 0:i.getClip().duration)??1;this.spil(e,{loop:!1,fart:n/t,gentag:!0,fade:.08}),this.sving={tid:0,varighed:t,slagTid:t*this.data.slag,mål:this.mål,ramt:!1},this.cooldown=this.data.angrebsTid,this.sidstIKamp=this.tid}slagSkade(){var n;let e=mr(...this.data.skade)+this.skadeBonus;const t=(n=this.vet.gren)==null?void 0:n.variation;return t&&(e*=1+(Math.random()*2-1)*t),Math.max(1,Math.round(e*this.slagFaktor()))}opdaterSving(e){const t=this.sving;if(t.tid+=e,t.mål&&!t.mål.død&&this.vend(t.mål.x,t.mål.z),!t.ramt&&t.tid>=t.slagTid){t.ramt=!0;const n=t.mål;if(n&&!n.død){const i=Ci(this.slagSkade(),n.rustning??0);this.data.projektil?X.emit("projektil",{fra:this,mål:n,skade:i,model:"spyd"}):this.afstand(n)-n.radius<=this.data.rækkevidde*1.5&&(n.tagSkade(i,this),this.vedSlag(n,i))}}t.tid>=t.varighed&&(this.sving=null)}tagSkade(e,t){return this.sidstIKamp=this.tid,t&&t!==this&&this.angribere.set(t,this.tid),super.tagSkade(Ci(e,this.rustning),t)}dø(e){super.dø(e),this.mål=null,this.sving=null,this.gåOrdre=!1,this.spil("Death_A",{loop:!1,fade:.08}),this.forsvind=5,this.base.økonomi.forsyning-=_n[this.type].forsyning,X.emit("soldat_død",{soldat:this,kilde:e})}opdaterDød(e){this.forsvind-=e,this.forsvind<1.5&&(this.rod.position.y-=e*.8),this.forsvind<=0&&!this.fjernet&&(this.fjernet=!0,this.fjern())}}Object.assign(Au.prototype,Sy);const Ey=16;class Ty{constructor(e,t,n){this.verden=e,this.økonomi=t,this.kilder=n,this.bygninger=[],this.arbejdere=[],this.soldater=[],this.vedTrænet=(i,r)=>{i==="arbejder"?this.nyArbejder(r.x+3,r.z+r.radius+1.5,"guld"):this.nySoldat(i,r.x+(Math.random()-.5)*4,r.z+r.radius+2,r.samling)}}startBygning(e){const t=new wl(this,"storlejr",{...e,færdig:!0});return this.bygninger.push(t),this.økonomi.forsyningMaks=t.data.forsyning,t}nyArbejder(e,t,n){const i=new sc(this.verden,this,e,t);return this.arbejdere.push(i),n&&i.høstNærmeste(n),X.emit("arbejder_ny",{arbejder:i}),i}nySoldat(e,t,n,i){const r=new Au(this.verden,this,e,t,n);return this.soldater.push(r),i&&r.kommandoGå(i.x+(Math.random()-.5)*3,i.z+(Math.random()-.5)*3),X.emit("soldat_ny",{soldat:r}),r}kanPlacere(e,t){var n;return t?t.type!=="græs"||t.blok?"Needs flat grass":t.optaget||!t.gåbar?"The spot is taken":this.verden.taage.erUdforsket(...Object.values(qe(t.q,t.r)))?(n=this.verden.lejrFelter)!=null&&n.some(i=>wt(i,t)<2)?"Too close to a creep camp":null:"You have not explored this place":"Outside the map"}placér(e,t){var a;const n=this.kanPlacere(e,t)??this.økonomi.mangler(yn[e].pris);if(n)return[null,n];this.økonomi.betal(yn[e].pris),t.optaget=!0,t.gåbar=!1,(a=this.verden.natur)==null||a.ryd(t);const i=qe(t.q,t.r),r=new wl(this,e,{x:i.x,z:i.z,felter:[t],rot:Math.floor(Math.random()*6)*Math.PI/3});return this.bygninger.push(r),[r,null]}afleveringssted(e,t,n){var a;let i=null,r=1/0;for(const o of this.bygninger){if(!o.færdig||!((a=o.data.aflevering)!=null&&a.includes(e)))continue;const l=Math.hypot(o.x-t,o.z-n);l<r&&(r=l,i=o)}return i}get ledige(){return this.arbejdere.filter(e=>!e.død&&e.tilstand==="ledig")}find(e,t,n){let i=null,r=44;for(const a of this.soldater){if(a.død)continue;const o=n(a.x,1.1,a.z),l=Math.hypot(o.x-e,o.y-t);l<r&&(r=l,i={type:"soldat",ting:a})}for(const a of this.arbejdere){if(a.død||!a.rod.visible)continue;const o=n(a.x,1.1,a.z),l=Math.hypot(o.x-e,o.y-t);l<r&&(r=l,i={type:"arbejder",ting:a})}if(i)return i;r=1/0;for(const a of this.bygninger){const o=n(a.x,a.felter.length>1?9:4,a.z),l=Math.hypot(o.x-e,o.y-t);l<(a.felter.length>1?95:58)&&l<r&&(r=l,i={type:"bygning",ting:a})}return i}opdater(e){for(const t of this.bygninger)t.opdater(e);for(const t of this.arbejdere)t.opdater(e);for(const t of this.soldater)t.opdater(e);if(this.arbejdere.some(t=>t.fjernet)&&(this.arbejdere=this.arbejdere.filter(t=>!t.fjernet)),this.soldater.some(t=>t.fjernet)&&(this.soldater=this.soldater.filter(t=>!t.fjernet)),this.bygninger.some(t=>t.død)){for(const t of this.bygninger.filter(n=>n.død))(this.ruiner??(this.ruiner=[])).push(t);this.bygninger=this.bygninger.filter(t=>!t.død)}}get hær(){return this.soldater.filter(e=>!e.død)}}const Ay=5,nd=["guld","guld","guld","træ","sten"];function wy(s,{storlejr:e,steder:t,verdensObj:n}){const i=new sy;s.økonomi=i;const r=new ry(t,n.ressourcer),a=new Ty(s,i,r),o=a.startBygning(e);return i.forsyning=Ay,nd.forEach((l,c)=>{a.nyArbejder(o.x-4+c*2,o.z+o.radius+2,null).høstNærmeste(l)}),i.forsyning+=nd.length,X.on("kilde_tom",({type:l,kilde:c})=>{l!=="guld"&&n.fjern(c)}),{økonomi:i,kilder:r,base:a}}class wu{constructor(e){this.spil=e,this.valgt=e.helt,this.placering=null;const t=Ry();this.ring=new ct(new Li(1,1).rotateX(-Math.PI/2),new Ht({map:t,color:12124026,transparent:!0,depthWrite:!1})),this.ring.renderOrder=3,e.verden.scene.add(this.ring),this.ringe=[],this.ringMat=this.ring.material,this.felt=new ct(new or(Ca/Math.sqrt(3),6).rotateX(-Math.PI/2).rotateY(Math.PI/6),new Ht({color:8257386,transparent:!0,opacity:.35,depthWrite:!1})),this.felt.visible=!1,e.verden.scene.add(this.felt)}vælg(e){this.annullérPlacering(),Array.isArray(e)&&(e=e.filter(t=>!t.død),e.length===1&&e[0]===this.spil.helt?e=null:e.length||(e=null)),this.valgt=e??this.spil.helt,X.emit("valg",this.valgt)}get erHelt(){return this.valgt===this.spil.helt}get erGruppe(){return Array.isArray(this.valgt)}get gruppe(){return this.erGruppe?this.valgt:[]}get erArbejder(){return this.valgt instanceof sc}get erBygning(){var e;return!!((e=this.valgt)!=null&&e.felter)}startPlacering(e){this.annullérPlacering();const t=qt(yn[e].model);t.scale.setScalar(Rs.hexSkala*yn[e].skala),t.traverse(n=>{n.isMesh&&(n.material=n.material.clone(),n.material.transparent=!0,n.material.opacity=.6)}),t.visible=!1,this.spil.verden.scene.add(t),this.placering={type:e,felt:null,spøgelse:t,fejl:"Tap a spot"},X.emit("placering",this.placering)}vælgFelt(e){const t=this.placering;if(!t||!e)return;t.felt=e,t.fejl=this.spil.base.kanPlacere(t.type,e);const n=qe(e.q,e.r);t.spøgelse.position.set(n.x,0,n.z),t.spøgelse.visible=!0;const i=t.fejl?16732224:8257386;t.spøgelse.traverse(r=>{r.isMesh&&r.material.color.setHex(t.fejl?16747136:16777215)}),this.felt.position.set(n.x,.06,n.z),this.felt.material.color.setHex(i),this.felt.visible=!0,X.emit("placering",t)}bekræftPlacering(){const e=this.placering;if(!(e!=null&&e.felt))return"Tap a spot";const[t,n]=this.spil.base.placér(e.type,e.felt);if(n)return n;const i=this.erArbejder?this.valgt:null;return this.annullérPlacering(),i==null||i.kommandoByg(t),X.emit("besked",`Building ${t.data.navn}`),null}annullérPlacering(){this.placering&&(this.spil.verden.scene.remove(this.placering.spøgelse),this.placering=null,this.felt.visible=!1,X.emit("placering",null))}opdater(){var n;this.opdaterRinge();const e=this.valgt;if(this.erGruppe){this.ring.visible=!1,e.some(i=>i.død)&&this.vælg(e);return}if(e!=null&&e.død){this.vælg(null);return}if(this.ring.visible=!!e&&!this.erHelt&&(((n=e.rod)==null?void 0:n.visible)??!0),!this.ring.visible)return;const t=this.erBygning?e.radius*2.2:2.6;this.ring.scale.set(t,1,t),this.ring.position.set(e.x,.07,e.z)}}wu.prototype.opdaterRinge=function(){const s=this.gruppe.filter(e=>e!==this.spil.helt&&!e.død);for(;this.ringe.length<s.length;){const e=new ct(this.ring.geometry,this.ringMat);e.renderOrder=3,e.scale.set(2.2,1,2.2),this.spil.verden.scene.add(e),this.ringe.push(e)}this.ringe.forEach((e,t)=>{e.visible=t<s.length,e.visible&&e.position.set(s[t].x,.07,s[t].z)})};function Ry(){const s=document.createElement("canvas");s.width=s.height=128;const e=s.getContext("2d");e.strokeStyle="#fff",e.lineWidth=7,e.setLineDash([16,9]),e.beginPath(),e.arc(64,64,56,0,Math.PI*2),e.stroke();const t=new Wl(s);return t.colorSpace=ut,t}const We=s=>document.getElementById(s),ma=["guld","træ","sten"],To={ledig:()=>"Idle",gå:()=>"Walking",tilKilde:s=>{var e;return`Heading for ${Ri[(e=s.kilde)==null?void 0:e.type]}`},høster:s=>{var e;return`Gathering ${Ri[(e=s.kilde)==null?void 0:e.type]}`},iMine:()=>"Mining gold",tilAflevering:s=>{var e;return`Carrying ${Ri[(e=s.bærer)==null?void 0:e.type]} home`},tilByg:s=>{var e,t;return`On the way to ${(e=s.bygning)!=null&&e.færdig?"repair":"build"} ${(t=s.bygning)==null?void 0:t.data.navn}`},bygger:s=>{var e,t;return`${(e=s.bygning)!=null&&e.færdig?"Repairing":"Building"} ${(t=s.bygning)==null?void 0:t.data.navn}`}},na=(s={})=>ma.filter(e=>s[e]).map(e=>`<span><img alt="${e}" src="${gt("res-"+e)}">${s[e]}</span>`).join("");class ky{constructor(e){this.spil=e,this.valg=e.valg;for(const t of ma)We(`res-${t}-ikon`).src=gt("res-"+t);We("res-forsyning-ikon").src=gt("res-forsyning"),We("ledige-ikon").src=gt("økse"),We("ledige").addEventListener("click",()=>this.næsteLedige()),We("hær-ikon").src=gt("hær"),We("hær").addEventListener("click",()=>this.valg.vælg(e.base.hær)),We("kmd-helt").addEventListener("click",()=>{this.valg.vælg(null)}),We("heltepanel").addEventListener("click",()=>{this.valg.vælg(null),e.rig.centrér()}),We("plac-byg").addEventListener("click",()=>{const t=this.valg.bekræftPlacering();t&&X.emit("besked",t)}),We("plac-annuller").addEventListener("click",()=>this.valg.annullérPlacering()),X.on("valg",()=>this.byg()),X.on("placering",t=>this.visPlacering(t)),this.tid=0,this.byg()}næsteLedige(){const e=this.spil.base.ledige;if(!e.length)return;this.i=((this.i??-1)+1)%e.length;const t=e[this.i];this.valg.vælg(t),this.spil.rig.følger=!1,this.spil.rig.fokus.set(t.x,0,t.z)}byg(){const e=this.valg.valgt,t=this.valg.erHelt;if(document.body.classList.toggle("valgt-andet",!t),We("kommando").hidden=t,t)return;const n=We("kmd-knapper");if(n.innerHTML="",this.valg.erArbejder){We("kmd-ikon").src=gt("økse"),We("kmd-navn").textContent="Worker";for(const i of ma)this.knap(n,gt("res-"+i),`Get ${Ri[i]}`,"",()=>e.høstNærmeste(i));for(const i of gy){const r=yn[i];this.knap(n,gt("byg-"+i),r.kort??r.navn,na(r.pris),()=>{const a=this.spil.økonomi.mangler(r.pris);if(a)return X.emit("besked",a);this.valg.startPlacering(i)},`byg-${i}`)}}else if(this.valg.erGruppe)this.bygGruppe(e,n);else if(this.valg.erBygning){We("kmd-ikon").src=gt("byg-"+e.type),We("kmd-navn").textContent=e.data.navn;for(const i of e.data.træner??[]){const r=_n[i];this.knap(n,gt(r.ikon??"økse"),`Train ${r.navn}`,na(r.pris),()=>{const a=e.træn(i);a&&X.emit("besked",a)},`træn-${i}`)}e.data.butik&&this.knap(n,gt("livseliksir"),"Shop","",()=>this.spil.handlVed(e)),e.data.alter&&e.færdig&&this.ofringer(n)}this.opdater(1)}ofringer(e){const t=this.spil.helt.inventar;for(const n of["str","agi","int"])this.knap(e,gt(yx[n]),`+1 ${xn.kort[n]}`,na($h(t.permanent.ofringer)),()=>{const i=$h(t.permanent.ofringer),r=this.spil.økonomi,a=r.mangler(i);if(a)return X.emit("besked",a);r.betal(i),t.permanent.ofringer+=1,t.øgEgenskaber({[n]:1}),X.emit("effekt",{type:"veteran",x:this.spil.helt.x,z:this.spil.helt.z}),X.emit("besked",`Your offering is accepted: +1 ${xn.navn[n]}`),this.byg()},`ofr-${n}`)}bygGruppe(e,t){const n=e.length===1?e[0]:null;if(We("kmd-ikon").src=gt(n!=null&&n.type?"enhed-"+n.type:"hær"),We("kmd-navn").textContent=n?n.navn:`Army · ${e.length}`,e.every(r=>!Al(r))){for(const r of ma)this.knap(t,gt("res-"+r),`Get ${Ri[r]}`,"",()=>e.forEach(a=>a.høstNærmeste(r)));return}this.knap(t,gt("hær"),"Stop","",()=>e.forEach(r=>r.stopOrdre?r.stopOrdre():r.kommandoGå(r.x,r.z)));const i=this.spil.veteraner;if(n&&i.kanSpecialiseres(n))for(const r of Object.keys(oi)){const a=this.knap(t,gt("enhed-grunt"),oi[r].navn,na(i.pris(r)),()=>{const o=i.specialisér(n,r);X.emit("besked",o??`The grunt heads to the War Camp for ${oi[r].navn} training`),this.byg()},`gren-${r}`);a.classList.add(i.passer(r)?"passer":"dobbelt"),a.title=oi[r].tekst}}knap(e,t,n,i,r,a){const o=document.createElement("button");return o.type="button",o.className="kmd",a&&(o.dataset.id=a),o.innerHTML=`<img alt="" src="${t}"><b>${n}</b><span class="pris">${i}</span>`,o.addEventListener("click",l=>{l.stopPropagation(),r(),this.opdater(1)}),e.appendChild(o),o}visPlacering(e){We("placering").hidden=!e,e&&(We("plac-tekst").textContent=e.fejl??`Build ${yn[e.type].navn} here?`,We("plac-byg").disabled=!!e.fejl)}opdater(e){var a;const t=this.spil.økonomi;We("res-guld").textContent=t.guld,We("res-træ").textContent=t.træ,We("res-sten").textContent=t.sten,We("res-forsyning").textContent=`${t.forsyning}/${Math.min(t.forsyningMaks,100)}`,We("res-forsyning").parentElement.classList.toggle("fuld",t.forsyning>=t.forsyningMaks);const n=this.spil.base.hær.length;We("hær").classList.toggle("skjult",!n),We("hær-tal").textContent=n;const i=this.spil.base.ledige.length;if(We("ledige").classList.toggle("skjult",!i),We("ledige-tal").textContent=i,this.tid+=e,this.tid<.2)return;this.tid=0;const r=this.valg.valgt;if(this.valg.erGruppe)We("kmd-status").textContent=py(r);else if(this.valg.erArbejder){We("kmd-status").textContent=((a=To[r.tilstand])==null?void 0:a.call(To,r))??"";for(const o of document.querySelectorAll('#kmd-knapper [data-id^="byg-"]'))o.classList.toggle("dyr",!t.harRåd(yn[o.dataset.id.slice(4)].pris))}else if(this.valg.erBygning){let o=r.data.tekst;if(r.færdig){if(r.skadet)o=`Health ${Math.ceil(r.hp)}/${r.maxHp} · Select a worker and tap the building to repair it`;else if(r.kø.length){const l=r.kø[0];o=`Training ${_n[l.type].navn} ${Math.floor(l.tid/_n[l.type].tid*100)}% · ${r.kø.length} queued`}}else{const l=this.spil.base.arbejdere.some(c=>c.bygning===r&&c.tilstand==="bygger");o=`Under construction ${Math.floor(r.fremskridt*100)}%${l?"":" · Select a worker and tap the site to keep building"}`}We("kmd-status").textContent=o;for(const l of document.querySelectorAll('#kmd-knapper [data-id^="træn-"]')){const c=_n[l.dataset.id.slice(5)];l.classList.toggle("dyr",!!c.låst||!!t.mangler(c.pris,c.forsyning)||!r.færdig)}}}}const Cy=600;class Py{constructor(e){this.verden=e,this.score={aggression:1,overlevelse:1,kaos:1},this.tid=0,this.mål=new Map,this.timer=0,X.on("skade",({mål:t,mængde:n,kilde:i})=>{!Tl(i,e)||Tl(t,e)||!(n>0)||(this.score.aggression+=n*.01*(this.tid<180?2:1),(!this.mål.has(t)||this.tid-this.mål.get(t)>20)&&(this.score.kaos+=this.nyligeMål()>=2?.6:.1),this.mål.set(t,this.tid))}),X.on("soldat_ordre",({soldat:t,type:n})=>{n==="angrib"&&(this.score.aggression+=.3),n==="gå"&&t.iKamp&&t.hp<t.maxHp*.4&&(this.score.overlevelse+=2)})}nyligeMål(){let e=0;for(const t of this.mål.values())this.tid-t<20&&e++;return e}opdater(e,t){this.tid+=e;const n=Math.pow(.5,e/Cy);for(const r in this.score)this.score[r]*=n;if(this.timer+=e,this.timer<5)return;this.timer=0;for(const r of t)!r.død&&r.tid>120&&(this.score.overlevelse+=.25);const i=new Set;for(const[r,a]of this.mål)this.tid-a<8&&r.lejr&&i.add(r.lejr),this.tid-a>60&&this.mål.delete(r);i.size>=2&&(this.score.kaos+=1.5)}andele(){const e=this.score,t=e.aggression+e.overlevelse+e.kaos;return{aggression:e.aggression/t,overlevelse:e.overlevelse/t,kaos:e.kaos/t}}dominant(){const e=this.andele(),[t,n]=Object.entries(e).sort((i,r)=>r[1]-i[1])[0];return n>.45?t:null}}class Ly{constructor(e,t){this.spil=e,this.stil=t,X.on("creep_død",({creep:n})=>{var r;const i=pa.prCreep(((r=n.lejr)==null?void 0:r.data.niveau)??1);for(const a of e.base.soldater)!a.død&&a.iKamp&&a.afstand(n)<18&&this.givXp(a,i)})}givXp(e,t){e.vet.xp+=t,!e.vet.veteran&&e.vet.xp>=pa.tærskel&&this.blivVeteran(e)}blivVeteran(e,t=!1){e.vet.veteran=!0;const n=Math.round(e.maxHp*pa.bonusHp);e.maxHp+=n,e.hp+=n,id(e,null,.82),!t&&(X.emit("effekt",{type:"veteran",x:e.x,z:e.z}),X.emit("flydetekst",{enhed:e,tekst:"Veteran!",klasse:"level"}),X.emit("besked",e.type==="grunt"?"A grunt has become a veteran — select it to choose its path":`A ${e.navn} has become a veteran`))}pris(e){const t=oi[e],n=this.stil.dominant(),i=!n||n===t.stil?1:2;return Object.fromEntries(Object.entries(t.pris).map(([r,a])=>[r,a*i]))}passer(e){const t=this.stil.dominant();return!t||t===oi[e].stil}kanSpecialiseres(e){return e.type==="grunt"&&e.vet.veteran&&!e.vet.gren&&!e.vet.påVej}specialisér(e,t){if(!this.kanSpecialiseres(e))return"Only veteran grunts can be specialised";const n=this.spil.base.bygninger.filter(l=>l.type==="krigerlejr"&&l.færdig).sort((l,c)=>e.afstand(l)-e.afstand(c))[0];if(!n)return"Build a War Camp first";const i=this.pris(t),r=this.spil.økonomi,a=r.mangler(i);return a||(r.betal(i),e.vet.påVej=t,e.vet.betalt=i,e.kommandoHen(n.x,n.z,n.radius+4,()=>this.anvend(e,t))?null:(e.vet.påVej=null,r.refunder(i),"The grunt cannot reach the War Camp"))}anvend(e,t,n=!1){const i=oi[t];e.vet.gren={id:t,...i},e.vet.påVej=null,e.maxHp+=i.hp,e.hp=Math.max(1,Math.min(e.maxHp,e.hp+Math.max(0,i.hp))),e.skadeBonus+=i.skade,e.rustning+=i.rustning,e.fart+=i.fart,e.model.scale.multiplyScalar(i.skala),e.navn=`${i.navn} Grunt`,id(e,i.farve),!n&&(X.emit("effekt",{type:"veteran",x:e.x,z:e.z}),X.emit("besked",`Your grunt has become a ${i.navn}! ${i.evne}: ${i.evneTekst}`))}opdater(){for(const e of this.spil.base.soldater)e.vet.påVej&&(!e.hen||e.død)&&(this.spil.økonomi.refunder(e.vet.betalt),e.vet.påVej=null)}}function id(s,e,t=1){const n=e!=null?new me(e):null;s.model.traverse(i=>{i.isMesh&&(i.material=i.material.clone(),n&&i.material.color.lerp(n,.3),i.material.color.multiplyScalar(t))})}function Iy(s,e){var f;const{helt:t,base:n,verden:i,lejre:r,genstande:a,taage:o,rig:l,økonomi:c}=s,d=i.kort;for(;t.level<e.helt.level;)t.levelOp(!0);t.xp=e.helt.xp;const h=t.inventar;h.pladser=e.helt.pladser.map(v=>v?{...v}:null),Object.assign(h.permanent,e.helt.permanent),h.beregn(),t.rod.position.set(e.helt.x,0,e.helt.z),t.hp=Math.min(t.maxHp,e.helt.hp),t.mana=Math.min(t.manaMax,e.helt.mana);const u=n.bygninger[0],p=((f=e.bygninger[0])==null?void 0:f.type)==="storlejr"?e.bygninger[0]:null;p?(u.kø=p.kø??[],u.samling=p.samling??null,u.hp=Math.min(u.maxHp,p.hp??u.maxHp)):(u.ødelæg(!0),n.bygninger.shift());for(const v of e.bygninger.slice(p?1:0)){const y=v.felter.map(k=>d.felter.get(k)).filter(Boolean);for(const k of y)k.optaget=!0,k.gåbar=!1,i.natur.ryd(k);const _=new wl(n,v.type,{x:v.x,z:v.z,felter:y,rot:v.rot,færdig:v.færdig});v.færdig||(_.fremskridt=v.fremskridt,_.visModel(Ss[Math.min(2,Math.floor(v.fremskridt*3))],1)),_.kø=v.kø??[],_.samling=v.samling,_.hp=Math.min(_.maxHp,v.hp??_.maxHp),n.bygninger.push(_)}e.helt.spawn&&(t.spawn=e.helt.spawn);for(const v of n.arbejdere)v.fjern();n.arbejdere=[];for(const v of e.arbejdere){const y=n.nyArbejder(v.x,v.z,null);v.byg>=0&&n.bygninger[v.byg]&&!n.bygninger[v.byg].færdig?y.kommandoByg(n.bygninger[v.byg]):v.opgave&&y.høstNærmeste(v.opgave)}for(const v of e.soldater){const y=n.nySoldat(v.type,v.x,v.z,null);y.vet.xp=v.xp,v.veteran&&s.veteraner.blivVeteran(y,!0),v.gren&&s.veteraner.anvend(y,v.gren,!0),y.hp=Math.min(y.maxHp,v.hp),y.timer=0}const g=n.kilder.ressourcer;for(const[v,y]of e.ressourcer){const _=g[v];_&&(y<=0?i.natur.fjern(_):_[_.type]=y)}e.miner.forEach((v,y)=>{n.kilder.miner[y]&&(n.kilder.miner[y].guld=v)}),e.lejre.forEach((v,y)=>{const _=r[y];_&&v.forEach((k,R)=>{const A=_.creeps[R];A&&(k<0?(A.død=!0,A.fjernet=!0,A.fjern()):A.hp=Math.min(A.maxHp,k))})});for(const v of e.items)a.læg(v.id,v.x,v.z,v.ladninger??void 0);e.kister.forEach((v,y)=>{const _=a.kister[y];!v||!_||(_.åben=!0,_.rod.traverse(k=>{k.isMesh&&(k.material=k.material.clone(),k.material.color.multiplyScalar(.45))}))});const b=s.memory,m=e.memory;if(m){for(Object.assign(b,{tid:m.tid,guld:m.guld,bølge:m.bølge,næsteAngreb:m.næsteAngreb});b.byggePlan<m.byggePlan;)b.byg(4+b.byggePlan),b.byggePlan+=1;for(const v of m.bygninger){const y=b.bygninger.find(_=>_.id===v.id);if(y){if(v.død){y.ødelæg(null,!0);continue}y.fremskridt=v.fremskridt,y.hp=v.hp}}for(const v of m.enheder){const y=b.nyEnhed(v.type,{x:v.x,z:v.z,radius:-1.5});y.level=v.level,y.hp=Math.min(y.maxHp,v.hp),y.tilstand="march",y.spil(y.anim.idle)}}Dx(e.udforsket,o.udforsket),Object.assign(s.stil.score,e.stil),Object.assign(c,e.økonomi),l.følger=!1,l.fokus.set(e.kamera.x,0,e.kamera.z),l.afstand=e.kamera.afstand}const sd=10,rd=11,ad=12,Ao=13,wo=14;function Ro(s,e=1){const t=new Gn({color:0,emissive:s,roughness:1,metalness:0,transparent:!0,depthWrite:!1,depthFunc:ba});return t.onBeforeCompile=n=>{n.fragmentShader=n.fragmentShader.replace("#include <opaque_fragment>",`
      float kant = 1.0 - abs(dot(normalize(normal), normalize(vViewPosition)));
      gl_FragColor = vec4(totalEmissiveRadiance, ${(.16*e).toFixed(2)} + ${(.75*e).toFixed(2)} * pow(kant, 1.6));`)},t}const ns=(s,e,t=!0)=>s.traverse(n=>{t?n.layers.enable(e):n.layers.disable(e)});class Dy{constructor(e,t,n,{enheder:i,bygninger:r}){Object.assign(this,{renderer:e,scene:t,kamera:n,enheder:i,bygninger:r}),this.dybde=new Ht({colorWrite:!1}),this.grøn=Ro(6160234),this.rød=Ro(16730682),this.bygGrøn=Ro(7208826,.55),this.v=new P}rekt(e){var l;((l=e.userData.boks)==null?void 0:l.rod)!==e&&(e.updateMatrixWorld(!0),e.userData.boks={rod:e,b:new Kt().setFromObject(e)});const t=e.userData.boks.b,n=this.v;let i=1,r=-1,a=1,o=-1;for(let c=0;c<8;c++)n.set(c&1?t.max.x:t.min.x,c&2?t.max.y:t.min.y,c&4?t.max.z:t.min.z).project(this.kamera),i=Math.min(i,n.x),r=Math.max(r,n.x),a=Math.min(a,n.y),o=Math.max(o,n.y);return t.getCenter(n),{x0:i,x1:r,y0:a,y1:o,d:n.distanceTo(this.kamera.position),synlig:r>-1&&i<1&&o>-1&&a<1}}pas(e,t){this.kamera.layers.set(e),this.scene.overrideMaterial=t,this.renderer.render(this.scene,this.kamera)}tegn(){const{renderer:e,scene:t,kamera:n}=this,i=this.bygninger().filter(a=>{var o;return(o=a.rod)==null?void 0:o.visible}).map(a=>({...a,...this.rekt(a.rod)})).filter(a=>a.synlig);if(!i.length)return;const r={autoClear:e.autoClear,skygge:e.shadowMap.autoUpdate,baggrund:t.background,maske:n.layers.mask};e.autoClear=!1,e.shadowMap.autoUpdate=!1,t.background=null;for(const a of i)ns(a.rod,sd);for(const a of this.enheder())ns(a.rod,a.egen?rd:ad);e.clearDepth(),this.pas(sd,this.dybde),this.pas(rd,this.grøn),this.pas(ad,this.rød);for(const a of i){if(!a.egen)continue;const o=i.filter(l=>l!==a&&l.d<a.d-1&&l.x0<a.x1&&l.x1>a.x0&&l.y0<a.y1&&l.y1>a.y0);if(o.length){for(const l of o)ns(l.rod,Ao);ns(a.rod,wo),e.clearDepth(),this.pas(Ao,this.dybde),this.pas(wo,this.bygGrøn);for(const l of o)ns(l.rod,Ao,!1);ns(a.rod,wo,!1)}}t.overrideMaterial=null,n.layers.mask=r.maske,t.background=r.baggrund,e.shadowMap.autoUpdate=r.skygge,e.autoClear=r.autoClear}}function Uy(s,{stedLiv:e,effekter:t,minimap:n,verdensObj:i,sejr:r,sætEgne:a}){const{helt:o,base:l,taage:c,verden:d,lejre:h,stil:u,valg:p,rig:g,memory:b}=s,m={x:0,z:0,radius:28};let f=0;return function(y){a([o,...l.arbejdere,...l.soldater].filter(k=>!k.død&&k.rod.visible&&!k.skjult)),o.opdater(y),m.x=o.x,m.z=o.z;const _=[...l.arbejdere.filter(k=>!k.død).map(k=>({x:k.x,z:k.z,radius:ly})),...l.soldater.filter(k=>!k.død).map(k=>({x:k.x,z:k.z,radius:Ey}))];c.opdater(y,o.død?_:[m,..._]);for(const k of d.creeps)k.opdater(y);d.creeps.some(k=>k.fjernet)&&(d.creeps=d.creeps.filter(k=>!k.fjernet));for(const k of h)k.opdater(y);l.opdater(y),b.opdater(y),cx([o,...d.creeps.filter(k=>!k.død&&!k.erBygning&&k.rod.visible),...l.arbejdere.filter(k=>k.rod.visible&&!k.død),...l.soldater.filter(k=>!k.død)],d.kort),u.opdater(y,l.soldater),s.veteraner.opdater(),e.opdater(y,o),s.genstande.opdater(y),t.opdater(y),i.opdater(y),p.opdater(),g.opdater(y,o.død?null:o),n.opdater(y),r.opdater(y),f+=y,f>1&&(f=0,c.patchScene(d.scene))}}function Ny(s,e,t){const{helt:n,base:i,verden:r,rig:a,memory:o}=s;return new Dy(e,r.scene,a.kamera,{enheder:()=>[n,...i.arbejdere,...i.soldater,...r.creeps].filter(l=>!l.død&&!l.erBygning&&l.rod.visible).map(l=>({rod:l.rod,egen:l===n||l.side==="egen"})),bygninger:()=>[...i.bygninger.map(l=>({rod:l.rod,egen:!0})),...o.bygninger.filter(l=>!l.død).map(l=>({rod:l.rod,egen:!1})),...t.bygninger]})}const Fy=Rs.hexSkala,Oy="kaykit-hexagon/buildings/neutral/building_destroyed",od=35;class ld{constructor(e,t,{x:n,z:i,felter:r,rot:a=0,færdig:o=!0,id:l}){Object.assign(this,{verden:e,type:t,x:n,z:i,felter:r,rot:a,id:l}),this.data=Sa[t],this.navn=this.data.navn,this.erBygning=!0,this.side="fjende",this.tilstand="bygning",this.radius=this.data.radius,this.højde=this.data.højde,this.maxHp=this.data.hp,this.rustning=this.data.rustning,this.fremskridt=o?1:0,this.hp=o?this.maxHp:this.maxHp*.1,this.død=!1,this.cooldown=0;for(const c of r)c.optaget=!0,c.gåbar=!1;this.vis(o?this.data.model:Ss[0],o?this.data.skala:1)}get færdig(){return this.fremskridt>=1}vis(e,t){this.rod&&this.verden.scene.remove(this.rod),this.rod=qt(e,{skygge:!0}),this.rod.position.set(this.x,0,this.z),this.rod.rotation.y=this.rot,this.rod.scale.setScalar(Fy*t),this.rod.visible=this.verden.taage.erUdforsket(this.x,this.z),this.verden.scene.add(this.rod),this.model=e}afstand(e){return Math.hypot(e.x-this.x,e.z-this.z)}opdater(e){if(this.død)return;if(this.rod.visible||(this.rod.visible=this.verden.taage.erUdforsket(this.x,this.z)),!this.færdig){this.fremskridt=Math.min(1,this.fremskridt+e/od),this.hp=Math.min(this.maxHp,this.hp+this.maxHp*.9*e/od);const i=this.færdig?this.data.model:Ss[Math.min(2,Math.floor(this.fremskridt*3))];i!==this.model&&this.vis(i,this.færdig?this.data.skala:1);return}const t=this.data.angreb;if(!t||(this.cooldown-=e,this.cooldown>0))return;const n=this.verden.egne().filter(i=>this.afstand(i)<t.rækkevidde).sort((i,r)=>this.afstand(i)-this.afstand(r))[0];n&&(this.cooldown=t.tid,X.emit("projektil",{fra:this,mål:n,skade:mr(...t.skade),farve:11758591}))}tagSkade(e,t){if(this.død)return!1;const n=Ci(e,this.rustning);return this.hp=Math.max(0,this.hp-n),X.emit("skade",{mål:this,mængde:n,kilde:t}),this.hp<=0?(this.ødelæg(t),!0):!1}ødelæg(e,t=!1){this.død=!0;for(const n of this.felter)n.optaget=!1,n.gåbar=!0;this.vis(Oy,this.felter.length>1?1.8:1.15),this.rod.visible=!0,!t&&(X.emit("effekt",{type:"stomp",x:this.x,z:this.z,radius:this.radius+2}),X.emit("fjende_bygning_ødelagt",{bygning:this,kilde:e}),X.emit("besked",`${this.navn} destroyed!`))}}const By=11,zy=14;class Hy extends _u{constructor(e,t,n,i,r,a){var l;const o={fjende:!0,data:{niveau:2,id:"memory"},creeps:[],x:r,z:a};super(e,t,n,o,{x:r,z:a}),o.creeps.push(this),this.fjendeBase=i,this.navn=((l=$s[t])==null?void 0:l.navn)??this.navn,this.side="fjende",this.ordre="vagt",this.post={x:r,z:a},this.marchMål=null,this.søgTid=Math.random()*.5}egneBygninger(){return this.fjendeBase.spillerBygninger()}gyldigt(e){return e&&!e.død&&(e.felter||e.rod.visible!==!1&&!e.skjult)}søgMål(e,t){let n=null,i=e;for(const r of this.egne()){const a=this.afstand(r);a<i&&(i=a,n=r)}if(n)return n;i=t;for(const r of this.egneBygninger()){const a=this.afstand(r)-r.radius;a<i&&(i=a,n=r)}return n}kommandoAngreb(e,t){this.ordre="angreb",this.marchMål={x:e,z:t},this.mål=null,this.stop()}kommandoRetur(){this.ordre="retur",this.mål=null,this.gåTil(this.post.x,this.post.z)}kommandoForsvar(e){this.ordre==="vagt"&&!this.gyldigt(this.mål)&&(this.mål=e)}gåHjem(){this.kommandoRetur()}opdater(e){if(this.rod.visible=this.verden.taage.erSynlig(this.x,this.z),Ms.prototype.opdater.call(this,e),this.død)return this.opdaterDød(e);if(this.tilstand==="vågner"){this.vågenTid-=e,this.vågenTid<=0&&(this.tilstand="march",this.spil(this.anim.idle));return}if(this.lammet>0){this.lammet-=e;return}if(this.cooldown-=e,this.sving)return this.opdaterSving(e);if(this.søgTid-=e,this.søgTid<=0&&this.ordre!=="retur"&&(this.søgTid=.5,!this.gyldigt(this.mål)||this.mål.felter)){const t=this.søgMål(By,this.ordre==="angreb"?zy:0);t&&(this.mål=t)}if(this.gyldigt(this.mål)||(this.mål=null),this.tilstand=this.mål?"jagt":"march",this.mål)return this.forfølg(e);if(this.ordre==="angreb"&&this.marchMål)return this.march(e,this.marchMål,()=>{const t=this.søgMål(0,400);this.marchMål=t?{x:t.x,z:t.z}:null});if(this.ordre==="retur")return this.march(e,this.post,()=>{this.ordre="vagt"});this.spil(this.anim.idle)}march(e,t,n){if(Math.hypot(t.x-this.x,t.z-this.z)<4){this.stop(),n();return}if(this.genberegn=(this.genberegn??0)-e,(!this.bevæger||this.genberegn<=0)&&(this.gåTil(t.x,t.z),this.genberegn=2),!this.bevæger){n();return}this.opdaterBevægelse(e),this.spil(this.anim.løb)}forfølg(e){const t=this.mål;this.afstand(t)-t.radius>this.data.rækkevidde?(this.genberegn=(this.genberegn??0)-e,(this.genberegn<=0||!this.bevæger)&&(this.gåTil(t.x,t.z),this.genberegn=.4),this.opdaterBevægelse(e),this.spil(this.anim.løb)):(this.stop(),this.vend(t.x,t.z),this.cooldown<=0?this.startSving(t):this.spil(this.anim.idle))}tagSkade(e,t){return t&&!this.gyldigt(this.mål)&&this.ordre!=="retur"&&!t.felter&&t.rod&&(this.mål=t),Ms.prototype.tagSkade.call(this,e,t)}}class Gy{constructor(e,t,n="normal"){this.spil=e,this.verden=e.verden,this.sværhed=n,this.s=Tu[n],this.tid=0,this.guld=200,this.bølge=0,this.næsteAngreb=this.s.førsteAngreb*60,this.angribere=[],this.bølgeStart=0,this.kø=new Map,this.byggePlan=0;const i=this.verden.kort;this.pladser=t.pladser;let r=t.samling;if(!i.erGåbar(r.x,r.z)){const a=i.nærmesteGåbare(r.x,r.z);r=qe(a.q,a.r)}this.samling=r,this.bygninger=[new ld(this.verden,"hal",{...t.hal,id:"hal"})];for(let a=0;a<So&&a<this.pladser.length;a++)this.byg(a,!0);this.enheder=[],this.hal=this.bygninger[0],this.verden.creeps.push(...this.bygninger)}byg(e,t=!1){const n=this.pladser[e];if(!n)return null;const i=qe(n.q,n.r),r=new ld(this.verden,td[e],{x:i.x,z:i.z,felter:[n],rot:e*Math.PI/3,færdig:t,id:`plads-${e}`});return this.bygninger.push(r),t||this.verden.creeps.push(r),r}spillerBygninger(){return this.spil.base.bygninger.filter(e=>!e.død)}get levende(){return this.enheder.filter(e=>!e.død)}get besejret(){return this.bygninger.every(e=>e.død)}minutter(){return this.tid/60}loft(){return Math.min(this.s.loft,5+Math.floor(this.minutter()*1.2))}opdater(e){this.besejret||(this.tid+=e,this.hal.død||(this.guld+=this.s.indtægt*e),this.planlæg(),this.træn(e),this.forsvar(),this.angreb(),this.enheder.some(t=>t.fjernet)&&(this.enheder=this.enheder.filter(t=>!t.fjernet)))}planlæg(){const e=this.spil.stil.dominant()==="aggression"?1.5:0,t=by[this.byggePlan];if(!t||this.minutter()<t[0]-e)return;const n=td[So+this.byggePlan];this.guld<Sa[n].pris||(this.guld-=Sa[n].pris,this.byg(So+this.byggePlan),this.byggePlan+=1)}træn(e){const t=this.spil.stil.dominant(),n=Object.fromEntries(Object.entries($s).map(([i,r])=>[i,r.vægt+(t==="kaos"&&i==="mage"?2:0)+(t==="overlevelse"&&i==="warrior"?2:0)]));for(const i of this.bygninger){if(i.type!=="krypt"||i.død||!i.færdig)continue;let r=this.kø.get(i);if(!r){if(this.levende.length>=this.loft())continue;const a=fa(n);if(this.guld<$s[a].pris)continue;this.guld-=$s[a].pris,r={type:a,tid:0},this.kø.set(i,r)}r.tid+=e,r.tid>=$s[r.type].tid&&(this.kø.delete(i),this.nyEnhed(r.type,i))}}nyEnhed(e,t){const n=Math.random()*Math.PI*2,i=t.x+Math.cos(n)*(t.radius+1.5),r=t.z+Math.sin(n)*(t.radius+1.5),a=new Hy(this.verden,e,_y(this.sværhed,this.minutter()),this,i,r);return a.post={x:this.samling.x+(Math.random()-.5)*8,z:this.samling.z+(Math.random()-.5)*8},a.ordre="retur",this.enheder.push(a),this.verden.creeps.push(a),a}forsvar(){for(const e of this.verden.egne())if(this.bygninger.some(n=>!n.død&&n.afstand(e)<22)){for(const n of this.levende)n.kommandoForsvar(e);return}}angreb(){if(this.angribere.length){const a=this.angribere.filter(o=>!o.død);if(!a.length||a.every(o=>o.ordre!=="angreb")){this.angribere=[];return}if(a.length<this.bølgeStart*.35){for(const o of a)o.kommandoRetur();this.angribere=[],X.emit("besked","The Memory pulls back its forces")}return}const e=this.spil.stil.dominant()==="overlevelse"?60:0;if(this.tid<this.næsteAngreb-e)return;const t=this.levende.filter(a=>a.ordre==="vagt"&&a.tilstand!=="vågner"),n=this.s.bølge[0]+this.bølge*this.s.bølge[1];if(t.length-this.s.hjemme<Math.min(n,this.loft()-this.s.hjemme))return;const i=this.spil.base.bygninger.find(a=>!a.død&&a.type==="storlejr")??this.spillerBygninger()[0];if(!i)return;const r=t.slice(this.s.hjemme,this.s.hjemme+n);for(const a of r)a.kommandoAngreb(i.x,i.z);this.angribere=r,this.bølgeStart=r.length,this.bølge+=1,this.næsteAngreb=this.tid+this.s.mellemrum*60,X.emit("fjende_angreb",{antal:r.length,bølge:this.bølge}),X.emit("besked",`The Memory marches on your base! (${r.length} undead)`)}}const ni=s=>document.getElementById(s);class Vy{constructor(e){this.spil=e,this.tal={dræbt:0,faldne:0,ødelagt:0,tabt:0,trænet:0},this.slut=null,this.tid=0,X.on("creep_død",({creep:t})=>{var n;(n=t.lejr)!=null&&n.fjende&&this.tal.dræbt++}),X.on("soldat_død",()=>this.tal.faldne++),X.on("fjende_bygning_ødelagt",()=>this.tal.ødelagt++),X.on("bygning_ødelagt",()=>this.tal.tabt++),X.on("soldat_ny",()=>this.tal.trænet++),ni("slut-fortsaet").addEventListener("click",()=>ni("slutskærm").classList.remove("vis")),ni("slut-menu").addEventListener("click",()=>location.reload())}opdater(e){this.tid+=e,!(this.slut||this.tid<1)&&(this.tid=0,this.spil.memory.besejret?this.afslut(!0):this.spil.base.bygninger.length||this.afslut(!1))}afslut(e){this.slut=e?"sejr":"nederlag",e||Px();const t=Math.floor(this.spil.helt.tid/60),n=this.tal;ni("slut-titel").textContent=e?"Victory":"Defeat",ni("slut-under").textContent=e?"The Memory crumbles to dust. The Tide endures.":"Your last building has fallen. The Memory remembers your name.",ni("slut-tal").innerHTML=[["Time",`${t} min`],["Hero level",this.spil.helt.level],["Undead slain",n.dræbt],["Enemy buildings razed",n.ødelagt],["Soldiers trained",n.trænet],["Soldiers lost",n.faldne]].map(([i,r])=>`<span>${i}</span><b>${r}</b>`).join(""),ni("slut-fortsaet").hidden=!e,ni("slutskærm").className=`vis ${this.slut}`,X.emit("spil_slut",{vandt:e})}}const mn=s=>document.getElementById(s),jy={str:"Health, health regeneration and damage",agi:"Armor and attack speed",int:"Mana, mana regeneration and ability power"},Wy={aggression:"Lately you have fought aggressively, always pressing forward.",overlevelse:"Lately you have fought with care, keeping your warriors alive.",kaos:"Lately you have fought everywhere at once.",null:"Your way of fighting is balanced — every path is still open."};class Xy{constructor(e){this.spil=e,this.tid=0,mn("egenskaber").addEventListener("click",n=>{n.stopPropagation(),this.skift()}),mn("hk-luk").addEventListener("click",()=>this.skift(!1));const t=Pa[e.helt.evner.essens];mn("hk-essens").textContent=`Essence of ${t.navn} — ${t.motto}`}skift(e=!mn("heltekort").classList.contains("vis")){mn("heltekort").classList.toggle("vis",e),e&&this.tegnKort()}opdater(e){if(this.tid+=e,this.tid<.25)return;this.tid=0;const t=this.spil.helt;for(const n of["str","agi","int"]){const i=mn(`eg-${n}`);i.textContent=t.egenskab(n),i.classList.toggle("bonus",t.egenskabBonus(n)>0)}mn("heltekort").classList.contains("vis")&&this.tegnKort()}tegnKort(){const e=this.spil.helt;mn("hk-egenskaber").innerHTML=["str","agi","int"].map(i=>{const r=e.egenskabBonus(i);return`<div class="hk-eg ${i}${i===e.essensEgenskab?" primær":""}"><b>${xn.navn[i]}</b><em>${e.egenskab(i)}${r?` <small style="display:inline;color:#8fd06a">(+${r})</small>`:""}</em><small>${jy[i]}</small></div>`}).join("");const t=e.angrebsTid(),n=[["Health",`${Math.ceil(e.hp)} / ${Math.round(e.maxHp)}`],["Mana",`${Math.floor(e.mana)} / ${Math.round(e.manaMax)}`],["Damage",`${e.stats.skadeMin+e.egenskabsSkade()+e.inventar.bonus.skade}–${e.stats.skadeMax+e.egenskabsSkade()+e.inventar.bonus.skade}`],["Armor",e.rustning().toFixed(1)],["Attack speed",`${(1/t).toFixed(2)} / s`],["Ability power",`${Math.round(e.evneStyrke()*100)}%`],["Speed",e.fart.toFixed(1)],["Level",e.level]];mn("hk-afledt").innerHTML=n.map(([i,r])=>`<span>${i}</span><b>${r}</b>`).join(""),mn("hk-stil").textContent=`${Wy[this.spil.stil.dominant()]} The way you fight shapes the training your veterans take to.`}}const ga=document.getElementById("spil"),Nn=new K_({canvas:ga,antialias:!0,powerPreference:"high-performance"});Nn.setPixelRatio(Math.min(window.devicePixelRatio,2));const yi=new jd;async function qy(){var Se;const{kort:s,heltSpawn:e,steder:t,lejre:n,kister:i,storlejr:r,fjende:a,tilf:o,grænser:l}=Z0(),c=document.getElementById("lade-bar");await M0([...vy,...ax(s)],re=>{c.style.width=`${Math.round(re*100)}%`}),Jx(Nn,xy),document.getElementById("lader").classList.add("færdig");const d=new Vx(l),h={scene:yi,kort:s,creeps:[],helt:null,taage:d,lejrFelter:n},u=ox(yi,s,l,t,a.hal);h.natur=u;const p=lx(yi,Nn),{økonomi:g,base:b}=wy(h,{storlejr:r,steder:t,verdensObj:u});let m=()=>{};const f=new Rx(ga,(re,Re)=>m(re,Re));f.grænser=l;const v=()=>{Nn.setSize(window.innerWidth,window.innerHeight,!1),f.størrelse(window.innerWidth,window.innerHeight)};window.addEventListener("resize",v),v(),f.følger=!1,f.afstand=52;let y=0;Nn.setAnimationLoop(()=>{y+=.0012,f.fokus.set(e.x+28+Math.sin(y)*32,0,e.z-28+Math.cos(y)*20),f.opdater(.016,null),p.følg(f.fokus.x,f.fokus.z),Nn.render(yi,f.kamera)});const _=Cx(),k=await Ox(_),R=k==="fortsæt",A=R?_.helt.essens:k.essens,T=R?((Se=_.memory)==null?void 0:Se.sværhed)??"normal":k.sværhed;document.body.classList.add("i-spil");const x=new bu(h,e,A);h.helt=x;const M=n.map(re=>new Ex(h,re)),w=new wx(h),L=new qx(t,d,w),F=new Zx(h,i,M,o);d.patchScene(yi),d.opdater(1,[{x:x.x,z:x.z,radius:28}]);let B=[];h.egne=()=>B;const V=new Py(h);V.score[Pa[A].stil]+=6;const H={lærred:ga,stil:V,helt:x,verden:h,rig:f,lejre:M,taage:d,grænser:l,hexTilVerden:qe,økonomi:g,base:b,steder:t,genstande:F,nødvendigXp:()=>(Si.xp[x.level]??x.xp)-x.xp,brugEvne(re){const Re=x.evner.brug(re);Re&&Z.toast(Re)},handlVed(re){x.død||(xe.vælg(null),x.kommandoInteraktion(re.x,re.z,13,()=>de.åbnButik(re)),w.markør(re.x,re.z,16769162))}};f.fokus.set(e.x,0,e.z),f.afstand=40,f.centrér();const Z=new kx(document.getElementById("lag"),h,f.kamera,()=>[...b.arbejdere,...b.soldater,...b.bygninger.filter(re=>!re.færdig||re.skadet)]),j=new zx(H),ie=new jx(document.getElementById("minimap"),H),de=new Qx(H),xe=new wu(H);H.valg=xe,H.invHud=de,H.veteraner=new Ly(H,V);const Fe=new ky(H),Je=new Xy(H);f.onBoks=uy(H,(re,Re,st)=>Z.skærm(re,Re,st)),H.memory=new Gy(H,a,T);const q=new Vy(H);X.on("spil_slut",({vandt:re})=>{H.slut=re?"sejr":"nederlag"}),X.on("creep_død",({xp:re})=>x.fåXp(re)),X.on("teleport",()=>f.centrér()),R?(Iy(H,_),x.tid=_.spilTid,d.patchScene(yi),d.opdater(1,[{x:x.x,z:x.z,radius:28}]),setTimeout(()=>Z.toast("Welcome back — your game continues where you left off"),600)):(setTimeout(()=>Z.toast("Tap a worker to build — tap the ground to move your hero"),600),setTimeout(()=>Z.toast("The Memory stirs in the far north-east. Raze all of its buildings to win."),6e3)),H.gem=Ux(H),m=my({spil:H,lærred:ga,overlay:Z,effekter:w,genstande:F,steder:t});const Q=Uy(H,{stedLiv:L,effekter:w,minimap:ie,verdensObj:u,sejr:q,sætEgne:re=>{B=re}}),ge=Ny(H,Nn,u);H.simuler=re=>{for(let Re=0;Re<re;Re+=1/30)Q(1/30)};const se=new yv;Nn.setAnimationLoop(()=>{const re=Math.min(se.getDelta(),.05);Q(re),p.følg(f.fokus.x,f.fokus.z),Nn.render(yi,f.kamera),ge.tegn(),Z.opdater(),j.opdater(),de.opdater(),Fe.opdater(re),Je.opdater(re)}),H.visHeleKortet=()=>d.tilføjKilde(0,0,999),window.spil=H,window.klar=!0}qy().catch(s=>{console.error(s),document.getElementById("lade-tekst").textContent=`Error: ${s.message}`});
