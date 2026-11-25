var ts={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},es={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},_u=0,Lc=1,xu=2;var jr=1,yu=2,lr=3,ns=0,Sn=1,fi=2,Ss=0,cr=1,Dc=2,Nc=3,Uc=4,vu=5;var bs=100,Mu=101,Su=102,bu=103,wu=104,Tu=200,Eu=201,Au=202,Ru=203,Fc=204,Oc=205,Cu=206,Pu=207,Iu=208,Lu=209,Du=210,Nu=211,Uu=212,Fu=213,Ou=214,so=0,ro=1,ao=2,js=3,oo=4,lo=5,co=6,ho=7,Bc=0,Bu=1,ku=2,pi=0,kc=1,zc=2,Vc=3,Hc=4,Gc=5,Wc=6,Xc=7;var $c=300,ws=301,hr=302,ko=303,zo=304,uo=1e3,hi=1001,fo=1002,an=1003,zu=1004;var Qr=1005;var vn=1006,Vo=1007;var Di=1008;var In=1009,qc=1010,Yc=1011,ur=1012,Ho=1013,ni=1014,ii=1015,si=1016,Go=1017,Wo=1018,Ts=1020,Zc=35902,Jc=35899,Kc=1021,jc=1022,ri=1023,Ci=1026,Ni=1027,Qc=1028,Xo=1029,is=1030,$o=1031;var qo=1033,ta=33776,ea=33777,na=33778,ia=33779,Yo=35840,Zo=35841,Jo=35842,Ko=35843,jo=36196,Qo=37492,tl=37496,el=37488,nl=37489,sa=37490,il=37491,sl=37808,rl=37809,al=37810,ol=37811,ll=37812,cl=37813,hl=37814,ul=37815,dl=37816,fl=37817,pl=37818,ml=37819,gl=37820,_l=37821,xl=36492,yl=36494,vl=36495,Ml=36283,Sl=36284,ra=36285,bl=36286;var Ir=2300,po=2301,no=2302,Tc=2303,Ec=2400,Ac=2401,Rc=2402;var Vu=3200;var wl=0,Hu=1,Ui="",Bn="srgb",Lr="srgb-linear",Dr="linear",Ae="srgb";var io=7680;var Gu=519,Wu=512,Xu=513,$u=514,th=515,qu=516,Yu=517,eh=518,nh=519,Zu=35044;var ih="300 es",qn=2e3,Qs=2001;function Kf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function jf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Nr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ju(){let i=Nr("canvas");return i.style.display="block",i}var Gh={},tr=null;function sh(...i){let t="THREE."+i.shift();tr?tr("log",t,...i):console.log(t,...i)}function Ku(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Jt(...i){i=Ku(i);let t="THREE."+i.shift();if(tr)tr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ne(...i){i=Ku(i);let t="THREE."+i.shift();if(tr)tr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Cr(...i){let t=i.join(" ");t in Gh||(Gh[t]=!0,Jt(...i))}function ju(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Qu={[so]:so,[ao]:co,[oo]:oo,[js]:lo,[ro]:ro,[co]:ao,[ho]:ho,[lo]:js},ti=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wh=1234567,Js=Math.PI/180,er=180/Math.PI;function dr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]+"-"+fn[t&255]+fn[t>>8&255]+"-"+fn[t>>16&15|64]+fn[t>>24&255]+"-"+fn[e&63|128]+fn[e>>8&255]+"-"+fn[e>>16&255]+fn[e>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function _e(i,t,e){return Math.max(t,Math.min(e,i))}function rh(i,t){return(i%t+t)%t}function Qf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function tp(i,t,e){return i!==t?(e-i)/(t-i):0}function Pr(i,t,e){return(1-e)*i+e*t}function ep(i,t,e,n){return Pr(i,t,1-Math.exp(-e*n))}function np(i,t=1){return t-Math.abs(rh(i,t*2)-t)}function ip(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function sp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function rp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function ap(i,t){return i+Math.random()*(t-i)}function op(i){return i*(.5-Math.random())}function lp(i){i!==void 0&&(Wh=i);let t=Wh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function cp(i){return i*Js}function hp(i){return i*er}function up(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function dp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ah(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function fp(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),f=a((t+n)/2),p=r((t-n)/2),u=a((t-n)/2),m=r((n-t)/2),y=a((n-t)/2);switch(s){case"XYX":i.set(o*f,l*p,l*u,o*c);break;case"YZY":i.set(l*u,o*f,l*p,o*c);break;case"ZXZ":i.set(l*p,l*u,o*f,o*c);break;case"XZX":i.set(o*f,l*y,l*m,o*c);break;case"YXY":i.set(l*m,o*f,l*y,o*c);break;case"ZYZ":i.set(l*y,l*m,o*f,o*c);break;default:Jt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function oh(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function td(i,t){if(t.constructor===Float32Array)return i;let e=oh(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function ed(i,t){if(t.constructor===Float32Array)return i;let e=oh(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var lh={DEG2RAD:Js,RAD2DEG:er,generateUUID:dr,clamp:_e,euclideanModulo:rh,mapLinear:Qf,inverseLerp:tp,lerp:Pr,damp:ep,pingpong:np,smoothstep:ip,smootherstep:sp,randInt:rp,randFloat:ap,randFloatSpread:op,seededRandom:lp,degToRad:cp,radToDeg:hp,isPowerOfTwo:up,ceilPowerOfTwo:dp,floorPowerOfTwo:ah,setQuaternionFromProperEuler:fp,normalize:ed,denormalize:td},ie=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_e(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Vn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],f=n[s+2],p=n[s+3],u=r[a+0],m=r[a+1],y=r[a+2],M=r[a+3];if(p!==M||l!==u||c!==m||f!==y){let g=l*u+c*m+f*y+p*M;g<0&&(u=-u,m=-m,y=-y,M=-M,g=-g);let _=1-o;if(g<.9995){let b=Math.acos(g),I=Math.sin(b);_=Math.sin(_*b)/I,o=Math.sin(o*b)/I,l=l*_+u*o,c=c*_+m*o,f=f*_+y*o,p=p*_+M*o}else{l=l*_+u*o,c=c*_+m*o,f=f*_+y*o,p=p*_+M*o;let b=1/Math.sqrt(l*l+c*c+f*f+p*p);l*=b,c*=b,f*=b,p*=b}}t[e]=l,t[e+1]=c,t[e+2]=f,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],f=n[s+3],p=r[a],u=r[a+1],m=r[a+2],y=r[a+3];return t[e]=o*y+f*p+l*m-c*u,t[e+1]=l*y+f*u+c*p-o*m,t[e+2]=c*y+f*m+o*u-l*p,t[e+3]=f*y-o*p-l*u-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),f=o(s/2),p=o(r/2),u=l(n/2),m=l(s/2),y=l(r/2);switch(a){case"XYZ":this._x=u*f*p+c*m*y,this._y=c*m*p-u*f*y,this._z=c*f*y+u*m*p,this._w=c*f*p-u*m*y;break;case"YXZ":this._x=u*f*p+c*m*y,this._y=c*m*p-u*f*y,this._z=c*f*y-u*m*p,this._w=c*f*p+u*m*y;break;case"ZXY":this._x=u*f*p-c*m*y,this._y=c*m*p+u*f*y,this._z=c*f*y+u*m*p,this._w=c*f*p-u*m*y;break;case"ZYX":this._x=u*f*p-c*m*y,this._y=c*m*p+u*f*y,this._z=c*f*y-u*m*p,this._w=c*f*p+u*m*y;break;case"YZX":this._x=u*f*p+c*m*y,this._y=c*m*p+u*f*y,this._z=c*f*y-u*m*p,this._w=c*f*p-u*m*y;break;case"XZY":this._x=u*f*p-c*m*y,this._y=c*m*p-u*f*y,this._z=c*f*y+u*m*p,this._w=c*f*p+u*m*y;break;default:Jt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],f=e[6],p=e[10],u=n+o+p;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(f-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>p){let m=2*Math.sqrt(1+n-o-p);this._w=(f-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>p){let m=2*Math.sqrt(1+o-n-p);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+f)/m}else{let m=2*Math.sqrt(1+p-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,f=e._w;return this._x=n*f+a*o+s*c-r*l,this._y=s*f+a*l+r*o-n*c,this._z=r*f+a*c+n*l-s*o,this._w=a*f-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,e=Math.sin(e*c)/f,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Y=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),f=2*(o*e-r*s),p=2*(r*n-a*e);return this.x=e+l*c+a*p-o*f,this.y=n+l*f+o*c-r*p,this.z=s+l*p+r*f-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this.z=_e(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this.z=_e(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_e(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ic.copy(this).projectOnVector(t),this.sub(ic)}reflect(t){return this.sub(ic.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ic=new Y,Xh=new Vn,ae=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let f=this.elements;return f[0]=t,f[1]=s,f[2]=o,f[3]=e,f[4]=r,f[5]=l,f[6]=n,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],f=n[4],p=n[7],u=n[2],m=n[5],y=n[8],M=s[0],g=s[3],_=s[6],b=s[1],I=s[4],A=s[7],E=s[2],C=s[5],x=s[8];return r[0]=a*M+o*b+l*E,r[3]=a*g+o*I+l*C,r[6]=a*_+o*A+l*x,r[1]=c*M+f*b+p*E,r[4]=c*g+f*I+p*C,r[7]=c*_+f*A+p*x,r[2]=u*M+m*b+y*E,r[5]=u*g+m*I+y*C,r[8]=u*_+m*A+y*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],f=t[8];return e*a*f-e*o*c-n*r*f+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],f=t[8],p=f*a-o*c,u=o*l-f*r,m=c*r-a*l,y=e*p+n*u+s*m;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/y;return t[0]=p*M,t[1]=(s*c-f*n)*M,t[2]=(o*n-s*a)*M,t[3]=u*M,t[4]=(f*e-s*l)*M,t[5]=(s*r-o*e)*M,t[6]=m*M,t[7]=(n*l-c*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Cr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(sc.makeScale(t,e)),this}rotate(t){return Cr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(sc.makeRotation(-t)),this}translate(t,e){return Cr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(sc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},sc=new ae,$h=new ae().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qh=new ae().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pp(){let i={enabled:!0,workingColorSpace:Lr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ae&&(s.r=Ri(s.r),s.g=Ri(s.g),s.b=Ri(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ae&&(s.r=Ks(s.r),s.g=Ks(s.g),s.b=Ks(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ui?Dr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Lr]:{primaries:t,whitePoint:n,transfer:Dr,toXYZ:$h,fromXYZ:qh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Bn},outputColorSpaceConfig:{drawingBufferColorSpace:Bn}},[Bn]:{primaries:t,whitePoint:n,transfer:Ae,toXYZ:$h,fromXYZ:qh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Bn}}}),i}var Me=pp();function Ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ks(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Os,mo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Os===void 0&&(Os=Nr("canvas")),Os.width=t.width,Os.height=t.height;let s=Os.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Os}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Nr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ri(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ri(e[n]/255)*255):e[n]=Ri(e[n]);return{data:e,width:t.width,height:t.height}}else return Jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},mp=0,nr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=dr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(rc(s[a].image)):r.push(rc(s[a]))}else r=rc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function rc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?mo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Jt("Texture: Unable to serialize Texture."),{})}var gp=0,ac=new Y,Cn=class i extends ti{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=hi,s=hi,r=vn,a=Di,o=ri,l=In,c=i.DEFAULT_ANISOTROPY,f=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=dr(),this.name="",this.source=new nr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ae,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ac).x}get height(){return this.source.getSize(ac).y}get depth(){return this.source.getSize(ac).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Jt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$c)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case uo:t.x=t.x-Math.floor(t.x);break;case hi:t.x=t.x<0?0:1;break;case fo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case uo:t.y=t.y-Math.floor(t.y);break;case hi:t.y=t.y<0?0:1;break;case fo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=$c;Cn.DEFAULT_ANISOTROPY=1;var ze=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],f=l[4],p=l[8],u=l[1],m=l[5],y=l[9],M=l[2],g=l[6],_=l[10];if(Math.abs(f-u)<.01&&Math.abs(p-M)<.01&&Math.abs(y-g)<.01){if(Math.abs(f+u)<.1&&Math.abs(p+M)<.1&&Math.abs(y+g)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let I=(c+1)/2,A=(m+1)/2,E=(_+1)/2,C=(f+u)/4,x=(p+M)/4,w=(y+g)/4;return I>A&&I>E?I<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(I),s=C/n,r=x/n):A>E?A<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),n=C/s,r=w/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=x/r,s=w/r),this.set(n,s,r,e),this}let b=Math.sqrt((g-y)*(g-y)+(p-M)*(p-M)+(u-f)*(u-f));return Math.abs(b)<.001&&(b=1),this.x=(g-y)/b,this.y=(p-M)/b,this.z=(u-f)/b,this.w=Math.acos((c+m+_-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this.z=_e(this.z,t.z,e.z),this.w=_e(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this.z=_e(this.z,t,e),this.w=_e(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_e(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},go=class extends ti{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ze(0,0,t,e),this.scissorTest=!1,this.viewport=new ze(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Cn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:vn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new nr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hn=class extends go{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ur=class extends Cn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var _o=class extends Cn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ke=class i{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,f,p,u,m,y,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,f,p,u,m,y,M,g)}set(t,e,n,s,r,a,o,l,c,f,p,u,m,y,M,g){let _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=s,_[1]=r,_[5]=a,_[9]=o,_[13]=l,_[2]=c,_[6]=f,_[10]=p,_[14]=u,_[3]=m,_[7]=y,_[11]=M,_[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Bs.setFromMatrixColumn(t,0).length(),r=1/Bs.setFromMatrixColumn(t,1).length(),a=1/Bs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),f=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let u=a*f,m=a*p,y=o*f,M=o*p;e[0]=l*f,e[4]=-l*p,e[8]=c,e[1]=m+y*c,e[5]=u-M*c,e[9]=-o*l,e[2]=M-u*c,e[6]=y+m*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*f,m=l*p,y=c*f,M=c*p;e[0]=u+M*o,e[4]=y*o-m,e[8]=a*c,e[1]=a*p,e[5]=a*f,e[9]=-o,e[2]=m*o-y,e[6]=M+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*f,m=l*p,y=c*f,M=c*p;e[0]=u-M*o,e[4]=-a*p,e[8]=y+m*o,e[1]=m+y*o,e[5]=a*f,e[9]=M-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*f,m=a*p,y=o*f,M=o*p;e[0]=l*f,e[4]=y*c-m,e[8]=u*c+M,e[1]=l*p,e[5]=M*c+u,e[9]=m*c-y,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,m=a*c,y=o*l,M=o*c;e[0]=l*f,e[4]=M-u*p,e[8]=y*p+m,e[1]=p,e[5]=a*f,e[9]=-o*f,e[2]=-c*f,e[6]=m*p+y,e[10]=u-M*p}else if(t.order==="XZY"){let u=a*l,m=a*c,y=o*l,M=o*c;e[0]=l*f,e[4]=-p,e[8]=c*f,e[1]=u*p+M,e[5]=a*f,e[9]=m*p-y,e[2]=y*p-m,e[6]=o*f,e[10]=M*p+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_p,t,xp)}lookAt(t,e,n){let s=this.elements;return Fn.subVectors(t,e),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),Gi.crossVectors(n,Fn),Gi.lengthSq()===0&&(Math.abs(n.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),Gi.crossVectors(n,Fn)),Gi.normalize(),Ia.crossVectors(Fn,Gi),s[0]=Gi.x,s[4]=Ia.x,s[8]=Fn.x,s[1]=Gi.y,s[5]=Ia.y,s[9]=Fn.y,s[2]=Gi.z,s[6]=Ia.z,s[10]=Fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],f=n[1],p=n[5],u=n[9],m=n[13],y=n[2],M=n[6],g=n[10],_=n[14],b=n[3],I=n[7],A=n[11],E=n[15],C=s[0],x=s[4],w=s[8],H=s[12],B=s[1],F=s[5],k=s[9],G=s[13],D=s[2],K=s[6],tt=s[10],j=s[14],pt=s[3],it=s[7],dt=s[11],mt=s[15];return r[0]=a*C+o*B+l*D+c*pt,r[4]=a*x+o*F+l*K+c*it,r[8]=a*w+o*k+l*tt+c*dt,r[12]=a*H+o*G+l*j+c*mt,r[1]=f*C+p*B+u*D+m*pt,r[5]=f*x+p*F+u*K+m*it,r[9]=f*w+p*k+u*tt+m*dt,r[13]=f*H+p*G+u*j+m*mt,r[2]=y*C+M*B+g*D+_*pt,r[6]=y*x+M*F+g*K+_*it,r[10]=y*w+M*k+g*tt+_*dt,r[14]=y*H+M*G+g*j+_*mt,r[3]=b*C+I*B+A*D+E*pt,r[7]=b*x+I*F+A*K+E*it,r[11]=b*w+I*k+A*tt+E*dt,r[15]=b*H+I*G+A*j+E*mt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],f=t[2],p=t[6],u=t[10],m=t[14],y=t[3],M=t[7],g=t[11],_=t[15],b=l*m-c*u,I=o*m-c*p,A=o*u-l*p,E=a*m-c*f,C=a*u-l*f,x=a*p-o*f;return e*(M*b-g*I+_*A)-n*(y*b-g*E+_*C)+s*(y*I-M*E+_*x)-r*(y*A-M*C+g*x)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],f=t[10];return e*(a*f-o*c)-n*(r*f-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],f=t[8],p=t[9],u=t[10],m=t[11],y=t[12],M=t[13],g=t[14],_=t[15],b=e*o-n*a,I=e*l-s*a,A=e*c-r*a,E=n*l-s*o,C=n*c-r*o,x=s*c-r*l,w=f*M-p*y,H=f*g-u*y,B=f*_-m*y,F=p*g-u*M,k=p*_-m*M,G=u*_-m*g,D=b*G-I*k+A*F+E*B-C*H+x*w;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let K=1/D;return t[0]=(o*G-l*k+c*F)*K,t[1]=(s*k-n*G-r*F)*K,t[2]=(M*x-g*C+_*E)*K,t[3]=(u*C-p*x-m*E)*K,t[4]=(l*B-a*G-c*H)*K,t[5]=(e*G-s*B+r*H)*K,t[6]=(g*A-y*x-_*I)*K,t[7]=(f*x-u*A+m*I)*K,t[8]=(a*k-o*B+c*w)*K,t[9]=(n*B-e*k-r*w)*K,t[10]=(y*C-M*A+_*b)*K,t[11]=(p*A-f*C-m*b)*K,t[12]=(o*H-a*F-l*w)*K,t[13]=(e*F-n*H+s*w)*K,t[14]=(M*I-y*E-g*b)*K,t[15]=(f*E-p*I+u*b)*K,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,f=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,f*o+n,f*l-s*a,0,c*l-s*o,f*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,f=a+a,p=o+o,u=r*c,m=r*f,y=r*p,M=a*f,g=a*p,_=o*p,b=l*c,I=l*f,A=l*p,E=n.x,C=n.y,x=n.z;return s[0]=(1-(M+_))*E,s[1]=(m+A)*E,s[2]=(y-I)*E,s[3]=0,s[4]=(m-A)*C,s[5]=(1-(u+_))*C,s[6]=(g+b)*C,s[7]=0,s[8]=(y+I)*x,s[9]=(g-b)*x,s[10]=(1-(u+M))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Bs.set(s[0],s[1],s[2]).length(),o=Bs.set(s[4],s[5],s[6]).length(),l=Bs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Kn.copy(this);let c=1/a,f=1/o,p=1/l;return Kn.elements[0]*=c,Kn.elements[1]*=c,Kn.elements[2]*=c,Kn.elements[4]*=f,Kn.elements[5]*=f,Kn.elements[6]*=f,Kn.elements[8]*=p,Kn.elements[9]*=p,Kn.elements[10]*=p,e.setFromRotationMatrix(Kn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=qn,l=!1){let c=this.elements,f=2*r/(e-t),p=2*r/(n-s),u=(e+t)/(e-t),m=(n+s)/(n-s),y,M;if(l)y=r/(a-r),M=a*r/(a-r);else if(o===qn)y=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===Qs)y=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=y,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=qn,l=!1){let c=this.elements,f=2/(e-t),p=2/(n-s),u=-(e+t)/(e-t),m=-(n+s)/(n-s),y,M;if(l)y=1/(a-r),M=a/(a-r);else if(o===qn)y=-2/(a-r),M=-(a+r)/(a-r);else if(o===Qs)y=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=y,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Bs=new Y,Kn=new ke,_p=new Y(0,0,0),xp=new Y(1,1,1),Gi=new Y,Ia=new Y,Fn=new Y,Yh=new ke,Zh=new Vn,Pi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],f=s[9],p=s[2],u=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(_e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(_e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_e(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(_e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-_e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-f,m),this._y=0);break;default:Jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Yh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Zh.setFromEuler(this),this.setFromQuaternion(Zh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pi.DEFAULT_ORDER="XYZ";var Fr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},yp=0,Jh=new Y,ks=new Vn,Si=new ke,La=new Y,wr=new Y,vp=new Y,Mp=new Vn,Kh=new Y(1,0,0),jh=new Y(0,1,0),Qh=new Y(0,0,1),tu={type:"added"},Sp={type:"removed"},zs={type:"childadded",child:null},oc={type:"childremoved",child:null},cn=class i extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=dr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new Y,e=new Pi,n=new Vn,s=new Y(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ke},normalMatrix:{value:new ae}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.multiply(ks),this}rotateOnWorldAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.premultiply(ks),this}rotateX(t){return this.rotateOnAxis(Kh,t)}rotateY(t){return this.rotateOnAxis(jh,t)}rotateZ(t){return this.rotateOnAxis(Qh,t)}translateOnAxis(t,e){return Jh.copy(t).applyQuaternion(this.quaternion),this.position.add(Jh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Kh,t)}translateY(t){return this.translateOnAxis(jh,t)}translateZ(t){return this.translateOnAxis(Qh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?La.copy(t):La.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(wr,La,this.up):Si.lookAt(La,wr,this.up),this.quaternion.setFromRotationMatrix(Si),s&&(Si.extractRotation(s.matrixWorld),ks.setFromRotationMatrix(Si),this.quaternion.premultiply(ks.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ne("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(tu),zs.child=t,this.dispatchEvent(zs),zs.child=null):ne("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sp),oc.child=t,this.dispatchEvent(oc),oc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Si.multiply(t.parent.matrixWorld)),t.applyMatrix4(Si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(tu),zs.child=t,this.dispatchEvent(zs),zs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,t,vp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,Mp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let p=l[c];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),f=a(t.images),p=a(t.shapes),u=a(t.skeletons),m=a(t.animations),y=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),p.length>0&&(n.shapes=p),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),y.length>0&&(n.nodes=y)}return n.object=s,n;function a(o){let l=[];for(let c in o){let f=o[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};cn.DEFAULT_UP=new Y(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ui=class extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}},bp={type:"move"},ir=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let M of t.hand.values()){let g=e.getJointPose(M,n),_=this._getHandJoint(c,M);g!==null&&(_.matrix.fromArray(g.transform.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=g.radius),_.visible=g!==null}let f=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=f.position.distanceTo(p.position),m=.02,y=.005;c.inputState.pinching&&u>m+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=m-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ui;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},nd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},Da={h:0,s:0,l:0};function lc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var de=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Bn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Me.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Me.workingColorSpace){return this.r=t,this.g=e,this.b=n,Me.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Me.workingColorSpace){if(t=rh(t,1),e=_e(e,0,1),n=_e(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=lc(a,r,t+1/3),this.g=lc(a,r,t),this.b=lc(a,r,t-1/3)}return Me.colorSpaceToWorking(this,s),this}setStyle(t,e=Bn){function n(r){r!==void 0&&parseFloat(r)<1&&Jt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Jt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Bn){let n=nd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ri(t.r),this.g=Ri(t.g),this.b=Ri(t.b),this}copyLinearToSRGB(t){return this.r=Ks(t.r),this.g=Ks(t.g),this.b=Ks(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Bn){return Me.workingToColorSpace(pn.copy(this),t),Math.round(_e(pn.r*255,0,255))*65536+Math.round(_e(pn.g*255,0,255))*256+Math.round(_e(pn.b*255,0,255))}getHexString(t=Bn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Me.workingColorSpace){Me.workingToColorSpace(pn.copy(this),e);let n=pn.r,s=pn.g,r=pn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,f=(o+a)/2;if(o===a)l=0,c=0;else{let p=a-o;switch(c=f<=.5?p/(a+o):p/(2-a-o),a){case n:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-n)/p+2;break;case r:l=(n-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,e=Me.workingColorSpace){return Me.workingToColorSpace(pn.copy(this),e),t.r=pn.r,t.g=pn.g,t.b=pn.b,t}getStyle(t=Bn){Me.workingToColorSpace(pn.copy(this),t);let e=pn.r,n=pn.g,s=pn.b;return t!==Bn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Wi),this.setHSL(Wi.h+t,Wi.s+e,Wi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Wi),t.getHSL(Da);let n=Pr(Wi.h,Da.h,e),s=Pr(Wi.s,Da.s,e),r=Pr(Wi.l,Da.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new de;de.NAMES=nd;var Or=class extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},jn=new Y,bi=new Y,cc=new Y,wi=new Y,Vs=new Y,Hs=new Y,eu=new Y,hc=new Y,uc=new Y,dc=new Y,fc=new ze,pc=new ze,mc=new ze,Ai=class i{constructor(t=new Y,e=new Y,n=new Y){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),jn.subVectors(t,e),s.cross(jn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){jn.subVectors(s,e),bi.subVectors(n,e),cc.subVectors(t,e);let a=jn.dot(jn),o=jn.dot(bi),l=jn.dot(cc),c=bi.dot(bi),f=bi.dot(cc),p=a*c-o*o;if(p===0)return r.set(0,0,0),null;let u=1/p,m=(c*l-o*f)*u,y=(a*f-o*l)*u;return r.set(1-m-y,y,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wi.x),l.addScaledVector(a,wi.y),l.addScaledVector(o,wi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return fc.setScalar(0),pc.setScalar(0),mc.setScalar(0),fc.fromBufferAttribute(t,e),pc.fromBufferAttribute(t,n),mc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(fc,r.x),a.addScaledVector(pc,r.y),a.addScaledVector(mc,r.z),a}static isFrontFacing(t,e,n,s){return jn.subVectors(n,e),bi.subVectors(t,e),jn.cross(bi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return jn.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),jn.cross(bi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Vs.subVectors(s,n),Hs.subVectors(r,n),hc.subVectors(t,n);let l=Vs.dot(hc),c=Hs.dot(hc);if(l<=0&&c<=0)return e.copy(n);uc.subVectors(t,s);let f=Vs.dot(uc),p=Hs.dot(uc);if(f>=0&&p<=f)return e.copy(s);let u=l*p-f*c;if(u<=0&&l>=0&&f<=0&&l-f>0)return a=l/(l-f),e.copy(n).addScaledVector(Vs,a);dc.subVectors(t,r);let m=Vs.dot(dc),y=Hs.dot(dc);if(y>=0&&m<=y)return e.copy(r);let M=m*c-l*y;if(M<=0&&c>=0&&y<=0)return o=c/(c-y),e.copy(n).addScaledVector(Hs,o);let g=f*y-m*p;if(g<=0&&p-f>=0&&m-y>=0)return eu.subVectors(r,s),o=(p-f)/(p-f+(m-y)),e.copy(s).addScaledVector(eu,o);let _=1/(g+M+u);return a=M*_,o=u*_,e.copy(n).addScaledVector(Vs,a).addScaledVector(Hs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Yi=class{constructor(t=new Y(1/0,1/0,1/0),e=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Qn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Qn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Qn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Qn):Qn.fromBufferAttribute(r,a),Qn.applyMatrix4(t.matrixWorld),this.expandByPoint(Qn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Na.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Na.copy(n.boundingBox)),Na.applyMatrix4(t.matrixWorld),this.union(Na)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Qn),Qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Tr),Ua.subVectors(this.max,Tr),Gs.subVectors(t.a,Tr),Ws.subVectors(t.b,Tr),Xs.subVectors(t.c,Tr),Xi.subVectors(Ws,Gs),$i.subVectors(Xs,Ws),ms.subVectors(Gs,Xs);let e=[0,-Xi.z,Xi.y,0,-$i.z,$i.y,0,-ms.z,ms.y,Xi.z,0,-Xi.x,$i.z,0,-$i.x,ms.z,0,-ms.x,-Xi.y,Xi.x,0,-$i.y,$i.x,0,-ms.y,ms.x,0];return!gc(e,Gs,Ws,Xs,Ua)||(e=[1,0,0,0,1,0,0,0,1],!gc(e,Gs,Ws,Xs,Ua))?!1:(Fa.crossVectors(Xi,$i),e=[Fa.x,Fa.y,Fa.z],gc(e,Gs,Ws,Xs,Ua))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ti=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Qn=new Y,Na=new Yi,Gs=new Y,Ws=new Y,Xs=new Y,Xi=new Y,$i=new Y,ms=new Y,Tr=new Y,Ua=new Y,Fa=new Y,gs=new Y;function gc(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){gs.fromArray(i,r);let o=s.x*Math.abs(gs.x)+s.y*Math.abs(gs.y)+s.z*Math.abs(gs.z),l=t.dot(gs),c=e.dot(gs),f=n.dot(gs);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}var qe=new Y,Oa=new ie,wp=0,zn=class extends ti{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Zu,this.updateRanges=[],this.gpuType=ii,this.version=0,this._normalizationScale=t!==void 0?oh(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Oa.fromBufferAttribute(this,e),Oa.applyMatrix3(t),this.setXY(e,Oa.x,Oa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix3(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):td(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):ed(t,this.array)}};var Br=class extends zn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var kr=class extends zn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ln=class extends zn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Tp=new Yi,Er=new Y,_c=new Y,ys=class{constructor(t=new Y,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Tp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Er.subVectors(t,this.center);let e=Er.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Er,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_c.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Er.copy(t.center).add(_c)),this.expandByPoint(Er.copy(t.center).sub(_c))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Ep=0,$n=new ke,xc=new cn,$s=new Y,On=new Yi,Ar=new Yi,rn=new Y,Pn=class i extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=dr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Kf(t)?kr:Br)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ae().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return $n.makeRotationFromQuaternion(t),this.applyMatrix4($n),this}rotateX(t){return $n.makeRotationX(t),this.applyMatrix4($n),this}rotateY(t){return $n.makeRotationY(t),this.applyMatrix4($n),this}rotateZ(t){return $n.makeRotationZ(t),this.applyMatrix4($n),this}translate(t,e,n){return $n.makeTranslation(t,e,n),this.applyMatrix4($n),this}scale(t,e,n){return $n.makeScale(t,e,n),this.applyMatrix4($n),this}lookAt(t){return xc.lookAt(t),xc.updateMatrix(),this.applyMatrix4(xc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ln(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];On.setFromBufferAttribute(r),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ys);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(t){let n=this.boundingSphere.center;if(On.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ar.setFromBufferAttribute(o),this.morphTargetsRelative?(rn.addVectors(On.min,Ar.min),On.expandByPoint(rn),rn.addVectors(On.max,Ar.max),On.expandByPoint(rn)):(On.expandByPoint(Ar.min),On.expandByPoint(Ar.max))}On.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)rn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(rn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)rn.fromBufferAttribute(o,c),l&&($s.fromBufferAttribute(t,c),rn.add($s)),s=Math.max(s,n.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new zn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let H=0;H<n.count;H++)o[H]=new Y,l[H]=new Y;let f=new Y,p=new Y,u=new Y,m=new ie,y=new ie,M=new ie,g=new Y,_=new Y;function b(H,B,F){c[H]=c[B]=c[F]=1,f.fromBufferAttribute(n,H),p.fromBufferAttribute(n,B),u.fromBufferAttribute(n,F),m.fromBufferAttribute(r,H),y.fromBufferAttribute(r,B),M.fromBufferAttribute(r,F),p.sub(f),u.sub(f),y.sub(m),M.sub(m);let k=1/(y.x*M.y-M.x*y.y);isFinite(k)&&(g.copy(p).multiplyScalar(M.y).addScaledVector(u,-y.y).multiplyScalar(k),_.copy(u).multiplyScalar(y.x).addScaledVector(p,-M.x).multiplyScalar(k),o[H].add(g),o[B].add(g),o[F].add(g),l[H].add(_),l[B].add(_),l[F].add(_))}let I=this.groups;I.length===0&&(I=[{start:0,count:t.count}]);for(let H=0,B=I.length;H<B;++H){let F=I[H],k=F.start,G=F.count;for(let D=k,K=k+G;D<K;D+=3)b(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let A=new Y,E=new Y,C=new Y,x=new Y;function w(H){C.fromBufferAttribute(s,H),x.copy(C);let B=o[H];A.copy(B),A.sub(C.multiplyScalar(C.dot(B))).normalize(),E.crossVectors(x,B);let k=E.dot(l[H])<0?-1:1;a.setXYZW(H,A.x,A.y,A.z,k)}for(let H=0,B=n.count;H<B;++H)c[H]&&w(H);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new zn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);let s=new Y,r=new Y,a=new Y,o=new Y,l=new Y,c=new Y,f=new Y,p=new Y;if(t)for(let u=0,m=t.count;u<m;u+=3){let y=t.getX(u+0),M=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,y),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,g),f.subVectors(a,r),p.subVectors(s,r),f.cross(p),o.fromBufferAttribute(n,y),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,g),o.add(f),l.add(f),c.add(f),n.setXYZ(y,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,m=e.count;u<m;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),f.subVectors(a,r),p.subVectors(s,r),f.cross(p),n.setXYZ(u+0,f.x,f.y,f.z),n.setXYZ(u+1,f.x,f.y,f.z),n.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)rn.fromBufferAttribute(t,e),rn.normalize(),t.setXYZ(e,rn.x,rn.y,rn.z)}toNonIndexed(){function t(o,l){let c=o.array,f=o.itemSize,p=o.normalized,u=new c.constructor(l.length*f),m=0,y=0;for(let M=0,g=l.length;M<g;M++){o.isInterleavedBufferAttribute?m=l[M]*o.data.stride+o.offset:m=l[M]*f;for(let _=0;_<f;_++)u[y++]=c[m++]}return new zn(u,f,p)}if(this.index===null)return Jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let f=0,p=c.length;f<p;f++){let u=c[f],m=t(u,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let p=0,u=c.length;p<u;p++){let m=c[p];f.push(m.toJSON(t.data))}f.length>0&&(s[l]=f,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let f=s[c];this.setAttribute(c,f.clone(e))}let r=t.morphAttributes;for(let c in r){let f=[],p=r[c];for(let u=0,m=p.length;u<m;u++)f.push(p[u].clone(e));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,f=a.length;c<f;c++){let p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var yc=new Y,Ap=new Y,Rp=new ae,kn=class{constructor(t=new Y(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=yc.subVectors(n,e).cross(Ap.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(yc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Rp.getNormalMatrix(t),s=this.coplanarPoint(yc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Cp=0,Ii=class extends ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=dr(),this.name="",this.type="Material",this.blending=cr,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fc,this.blendDst=Oc,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=io,this.stencilZFail=io,this.stencilZPass=io,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Jt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new de().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new kn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ie().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ie().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Ei=new Y,vc=new Y,Ba=new Y,ka=new Y,vs=class{constructor(t=new Y,e=new Y(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ei.copy(this.origin).addScaledVector(this.direction,e),Ei.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){vc.copy(t).add(e).multiplyScalar(.5),Ba.copy(e).sub(t).normalize(),ka.copy(this.origin).sub(vc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ba),o=ka.dot(this.direction),l=-ka.dot(Ba),c=ka.lengthSq(),f=Math.abs(1-a*a),p,u,m,y;if(f>0)if(p=a*l-o,u=a*o-l,y=r*f,p>=0)if(u>=-y)if(u<=y){let M=1/f;p*=M,u*=M,m=p*(p+a*u+2*o)+u*(a*p+u+2*l)+c}else u=r,p=Math.max(0,-(a*u+o)),m=-p*p+u*(u+2*l)+c;else u=-r,p=Math.max(0,-(a*u+o)),m=-p*p+u*(u+2*l)+c;else u<=-y?(p=Math.max(0,-(-a*r+o)),u=p>0?-r:Math.min(Math.max(-r,-l),r),m=-p*p+u*(u+2*l)+c):u<=y?(p=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+c):(p=Math.max(0,-(a*r+o)),u=p>0?r:Math.min(Math.max(-r,-l),r),m=-p*p+u*(u+2*l)+c);else u=a>0?-r:r,p=Math.max(0,-(a*u+o)),m=-p*p+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(vc).addScaledVector(Ba,u),m}intersectSphere(t,e){if(t.radius<0)return null;Ei.subVectors(t.center,this.origin);let n=Ei.dot(this.direction),s=Ei.dot(Ei)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),f>=0?(r=(t.min.y-u.y)*f,a=(t.max.y-u.y)*f):(r=(t.max.y-u.y)*f,a=(t.min.y-u.y)*f),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(t.min.z-u.z)*p,l=(t.max.z-u.z)*p):(o=(t.max.z-u.z)*p,l=(t.min.z-u.z)*p),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ei)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,f=o.z,p=t.x-a.x,u=t.y-a.y,m=t.z-a.z,y=e.x-a.x,M=e.y-a.y,g=e.z-a.z,_=n.x-a.x,b=n.y-a.y,I=n.z-a.z,A=Math.abs(l),E=Math.abs(c),C=Math.abs(f),x,w,H,B,F,k,G,D,K,tt,j,pt;if(A>=E&&A>=C?(H=l,k=p,K=y,pt=_,l>=0?(x=c,w=f,B=u,F=m,G=M,D=g,tt=b,j=I):(x=f,w=c,B=m,F=u,G=g,D=M,tt=I,j=b)):E>=C?(H=c,k=u,K=M,pt=b,c>=0?(x=f,w=l,B=m,F=p,G=g,D=y,tt=I,j=_):(x=l,w=f,B=p,F=m,G=y,D=g,tt=_,j=I)):(H=f,k=m,K=g,pt=I,f>=0?(x=l,w=c,B=p,F=u,G=y,D=M,tt=_,j=b):(x=c,w=l,B=u,F=p,G=M,D=y,tt=b,j=_)),H===0)return null;let it=x/H,dt=w/H,mt=1/H,Ht=B-it*k,te=F-dt*k,ot=G-it*K,Pt=D-dt*K,Ot=tt-it*pt,Yt=j-dt*pt,It=Ot*Pt-Yt*ot,oe=Ht*Yt-te*Ot,Ge=ot*te-Pt*Ht;if(s){if(It<0||oe<0||Ge<0)return null}else if((It<0||oe<0||Ge<0)&&(It>0||oe>0||Ge>0))return null;let Kt=It+oe+Ge;if(Kt===0)return null;let Te=mt*(It*k+oe*K+Ge*pt);return(Kt>0?Te<0:Te>0)?null:this.at(Te/Kt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xo=class extends Ii{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=Bc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},nu=new ke,_s=new vs,za=new ys,iu=new Y,Va=new Y,Ha=new Y,Ga=new Y,Mc=new Y,Wa=new Y,su=new Y,Xa=new Y,Mn=class extends cn{constructor(t=new Pn,e=new xo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Wa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let f=o[l],p=r[l];f!==0&&(Mc.fromBufferAttribute(p,t),a?Wa.addScaledVector(Mc,f):Wa.addScaledVector(Mc.sub(e),f))}e.add(Wa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),za.copy(n.boundingSphere),za.applyMatrix4(r),_s.copy(t.ray).recast(t.near),!(za.containsPoint(_s.origin)===!1&&(_s.intersectSphere(za,iu)===null||_s.origin.distanceToSquared(iu)>(t.far-t.near)**2))&&(nu.copy(r).invert(),_s.copy(t.ray).applyMatrix4(nu),!(n.boundingBox!==null&&_s.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,_s)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,f=r.attributes.uv1,p=r.attributes.normal,u=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,M=u.length;y<M;y++){let g=u[y],_=a[g.materialIndex],b=Math.max(g.start,m.start),I=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let A=b,E=I;A<E;A+=3){let C=o.getX(A),x=o.getX(A+1),w=o.getX(A+2);s=$a(this,_,t,n,c,f,p,C,x,w),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let y=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let g=y,_=M;g<_;g+=3){let b=o.getX(g),I=o.getX(g+1),A=o.getX(g+2);s=$a(this,a,t,n,c,f,p,b,I,A),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let y=0,M=u.length;y<M;y++){let g=u[y],_=a[g.materialIndex],b=Math.max(g.start,m.start),I=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let A=b,E=I;A<E;A+=3){let C=A,x=A+1,w=A+2;s=$a(this,_,t,n,c,f,p,C,x,w),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let y=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let g=y,_=M;g<_;g+=3){let b=g,I=g+1,A=g+2;s=$a(this,a,t,n,c,f,p,b,I,A),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Pp(i,t,e,n,s,r,a,o){let l;if(t.side===Sn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ns,o),l===null)return null;Xa.copy(o),Xa.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Xa);return c<e.near||c>e.far?null:{distance:c,point:Xa.clone(),object:i}}function $a(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Va),i.getVertexPosition(l,Ha),i.getVertexPosition(c,Ga);let f=Pp(i,t,e,n,Va,Ha,Ga,su);if(f){let p=new Y;Ai.getBarycoord(su,Va,Ha,Ga,p),s&&(f.uv=Ai.getInterpolatedAttribute(s,o,l,c,p,new ie)),r&&(f.uv1=Ai.getInterpolatedAttribute(r,o,l,c,p,new ie)),a&&(f.normal=Ai.getInterpolatedAttribute(a,o,l,c,p,new Y),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new Y,materialIndex:0};Ai.getNormal(Va,Ha,Ga,u.normal),f.face=u,f.barycoord=p}return f}var yo=class extends Cn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=an,f=an,p,u){super(null,a,o,l,c,f,s,r,p,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xs=new ys,Ip=new ie(.5,.5),qa=new Y,Zi=class{constructor(t=new kn,e=new kn,n=new kn,s=new kn,r=new kn,a=new kn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=qn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],f=r[4],p=r[5],u=r[6],m=r[7],y=r[8],M=r[9],g=r[10],_=r[11],b=r[12],I=r[13],A=r[14],E=r[15];if(s[0].setComponents(c-a,m-f,_-y,E-b).normalize(),s[1].setComponents(c+a,m+f,_+y,E+b).normalize(),s[2].setComponents(c+o,m+p,_+M,E+I).normalize(),s[3].setComponents(c-o,m-p,_-M,E-I).normalize(),n)s[4].setComponents(l,u,g,A).normalize(),s[5].setComponents(c-l,m-u,_-g,E-A).normalize();else if(s[4].setComponents(c-l,m-u,_-g,E-A).normalize(),e===qn)s[5].setComponents(c+l,m+u,_+g,E+A).normalize();else if(e===Qs)s[5].setComponents(l,u,g,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(t){xs.center.set(0,0,0);let e=Ip.distanceTo(t.center);return xs.radius=.7071067811865476+e,xs.applyMatrix4(t.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(qa.x=s.normal.x>0?t.max.x:t.min.x,qa.y=s.normal.y>0?t.max.y:t.min.y,qa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(qa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ru=new ke,vo=class i{constructor(){this.coordinateSystem=qn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];ru.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Zi),n[s].setFromProjectionMatrix(ru,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Zi),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var Ms=class extends Ii{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new de(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Mo=new Y,So=new Y,au=new ke,Rr=new vs,Ya=new ys,Sc=new Y,ou=new Y,bo=class extends cn{constructor(t=new Pn,e=new Ms){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Mo.fromBufferAttribute(e,s-1),So.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Mo.distanceTo(So);t.setAttribute("lineDistance",new ln(n,1))}else Jt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ya.copy(n.boundingSphere),Ya.applyMatrix4(s),Ya.radius+=r,t.ray.intersectsSphere(Ya)===!1)return;au.copy(s).invert(),Rr.copy(t.ray).applyMatrix4(au);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,f=n.index,u=n.attributes.position;if(f!==null){let m=Math.max(0,a.start),y=Math.min(f.count,a.start+a.count);for(let M=m,g=y-1;M<g;M+=c){let _=f.getX(M),b=f.getX(M+1),I=Za(this,t,Rr,l,_,b,M);I&&e.push(I)}if(this.isLineLoop){let M=f.getX(y-1),g=f.getX(m),_=Za(this,t,Rr,l,M,g,y-1);_&&e.push(_)}}else{let m=Math.max(0,a.start),y=Math.min(u.count,a.start+a.count);for(let M=m,g=y-1;M<g;M+=c){let _=Za(this,t,Rr,l,M,M+1,M);_&&e.push(_)}if(this.isLineLoop){let M=Za(this,t,Rr,l,y-1,m,y-1);M&&e.push(M)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Za(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(Mo.fromBufferAttribute(o,s),So.fromBufferAttribute(o,r),e.distanceSqToSegment(Mo,So,Sc,ou)>n)return;Sc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Sc);if(!(c<t.near||c>t.far))return{distance:c,point:ou.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var lu=new Y,cu=new Y,sr=class extends bo{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)lu.fromBufferAttribute(e,s),cu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+lu.distanceTo(cu);t.setAttribute("lineDistance",new ln(n,1))}else Jt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var zr=class extends Cn{constructor(t=[],e=ws,n,s,r,a,o,l,c,f){super(t,e,n,s,r,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Li=class extends Cn{constructor(t,e,n=ni,s,r,a,o=an,l=an,c,f=Ci,p=1){if(f!==Ci&&f!==Ni)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:p};super(u,s,r,a,o,l,f,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new nr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Vr=class extends Li{constructor(t,e=ni,n=ws,s,r,a=an,o=an,l,c=Ci){let f={width:t,height:t,depth:1},p=[f,f,f,f,f,f];super(t,t,e,n,s,r,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Hr=class extends Cn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ei=class i extends Pn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],f=[],p=[],u=0,m=0;y("z","y","x",-1,-1,n,e,t,a,r,0),y("z","y","x",1,-1,n,e,-t,a,r,1),y("x","z","y",1,1,t,n,e,s,a,2),y("x","z","y",1,-1,t,n,-e,s,a,3),y("x","y","z",1,-1,t,e,n,s,r,4),y("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ln(c,3)),this.setAttribute("normal",new ln(f,3)),this.setAttribute("uv",new ln(p,2));function y(M,g,_,b,I,A,E,C,x,w,H){let B=A/x,F=E/w,k=A/2,G=E/2,D=C/2,K=x+1,tt=w+1,j=0,pt=0,it=new Y;for(let dt=0;dt<tt;dt++){let mt=dt*F-G;for(let Ht=0;Ht<K;Ht++){let te=Ht*B-k;it[M]=te*b,it[g]=mt*I,it[_]=D,c.push(it.x,it.y,it.z),it[M]=0,it[g]=0,it[_]=C>0?1:-1,f.push(it.x,it.y,it.z),p.push(Ht/x),p.push(1-dt/w),j+=1}}for(let dt=0;dt<w;dt++)for(let mt=0;mt<x;mt++){let Ht=u+mt+K*dt,te=u+mt+K*(dt+1),ot=u+(mt+1)+K*(dt+1),Pt=u+(mt+1)+K*dt;l.push(Ht,te,Pt),l.push(te,ot,Pt),pt+=6}o.addGroup(m,pt,H),m+=pt,u+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ja=new Y,Ka=new Y,bc=new Y,ja=new Ai,Gr=class extends Pn{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(Js*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],f=["a","b","c"],p=new Array(3),u=new Map,m=[];for(let y=0;y<l;y+=3){a?(c[0]=a.getX(y),c[1]=a.getX(y+1),c[2]=a.getX(y+2)):(c[0]=y,c[1]=y+1,c[2]=y+2);let{a:M,b:g,c:_}=ja;if(M.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),_.fromBufferAttribute(o,c[2]),ja.getNormal(bc),p[0]=`${Math.round(M.x*s)},${Math.round(M.y*s)},${Math.round(M.z*s)}`,p[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,p[2]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,!(p[0]===p[1]||p[1]===p[2]||p[2]===p[0]))for(let b=0;b<3;b++){let I=(b+1)%3,A=p[b],E=p[I],C=ja[f[b]],x=ja[f[I]],w=`${A}_${E}`,H=`${E}_${A}`,B=u.get(H);B?(bc.dot(B.normal)<=r&&(m.push(C.x,C.y,C.z),m.push(x.x,x.y,x.z)),u.set(H,null)):u.has(w)||u.set(w,{index0:c[b],index1:c[I],normal:bc.clone()})}}for(let y of u.values())if(y){let{index0:M,index1:g}=y;Ja.fromBufferAttribute(o,M),Ka.fromBufferAttribute(o,g),m.push(Ja.x,Ja.y,Ja.z),m.push(Ka.x,Ka.y,Ka.z)}this.setAttribute("position",new ln(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var Wr=class i extends Pn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,f=l+1,p=t/o,u=e/l,m=[],y=[],M=[],g=[];for(let _=0;_<f;_++){let b=_*u-a;for(let I=0;I<c;I++){let A=I*p-r;y.push(A,-b,0),M.push(0,0,1),g.push(I/o),g.push(1-_/l)}}for(let _=0;_<l;_++)for(let b=0;b<o;b++){let I=b+c*_,A=b+c*(_+1),E=b+1+c*(_+1),C=b+1+c*_;m.push(I,A,C),m.push(A,E,C)}this.setIndex(m),this.setAttribute("position",new ln(y,3)),this.setAttribute("normal",new ln(M,3)),this.setAttribute("uv",new ln(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};function Es(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(hu(s))s.isRenderTargetTexture?(Jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(hu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function mn(i){let t={};for(let e=0;e<i.length;e++){let n=Es(i[e]);for(let s in n)t[s]=n[s]}return t}function hu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Lp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ch(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Me.workingColorSpace}var id={clone:Es,merge:mn},Dp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Np=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,di=class extends Ii{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dp,this.fragmentShader=Np,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Es(t.uniforms),this.uniformsGroups=Lp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new de().setHex(s.value);break;case"v2":this.uniforms[n].value=new ie().fromArray(s.value);break;case"v3":this.uniforms[n].value=new Y().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ze().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ae().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ke().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},wo=class extends di{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ji=class extends Ii{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wl,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var To=class extends Ii{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Eo=class extends Ii{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function qs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Qa(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ki=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ao=class extends Ki{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ec,endingEnd:Ec}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ac:r=t,o=2*e-n;break;case Rc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ac:a=t,l=2*n-e;break;case Rc:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,f=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*f,this._offsetNext=a*f}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,m=this._weightNext,y=(n-e)/(s-e),M=y*y,g=M*y,_=-u*g+2*u*M-u*y,b=(1+u)*g+(-1.5-2*u)*M+(-.5+u)*y+1,I=(-1-m)*g+(1.5+m)*M+.5*y,A=m*g-m*M;for(let E=0;E!==o;++E)r[E]=_*a[f+E]+b*a[c+E]+I*a[l+E]+A*a[p+E];return r}},Ro=class extends Ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=(n-e)/(s-e),p=1-f;for(let u=0;u!==o;++u)r[u]=a[c+u]*p+a[l+u]*f;return r}},Co=class extends Ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Po=class extends Ki{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this.inTangents,p=this.outTangents;if(!f||!p){let y=(n-e)/(s-e),M=1-y;for(let g=0;g!==o;++g)r[g]=a[c+g]*M+a[l+g]*y;return r}let u=o*2,m=t-1;for(let y=0;y!==o;++y){let M=a[c+y],g=a[l+y],_=m*u+y*2,b=p[_],I=p[_+1],A=t*u+y*2,E=f[A],C=f[A+1],x=Fp(n,e,b,E,s);r[y]=sd(x,M,I,C,g)}return r}};function sd(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Up(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Fp(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=sd(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Up(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Gn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=qs(e,this.TimeBufferType),this.values=qs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:qs(t.times,Array),values:qs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Qa(t.settings)&&(n.settings={inTangents:qs(t.settings.inTangents,Array),outTangents:qs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Co(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ro(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ao(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Po(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ir:e=this.InterpolantFactoryMethodDiscrete;break;case po:e=this.InterpolantFactoryMethodLinear;break;case no:e=this.InterpolantFactoryMethodSmooth;break;case Tc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Jt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ir;case this.InterpolantFactoryMethodLinear:return po;case this.InterpolantFactoryMethodSmooth:return no;case this.InterpolantFactoryMethodBezier:return Tc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;Qa(this.settings)&&(uu(this.settings.inTangents,t),uu(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Qa(this.settings)&&(du(this.settings.inTangents,t),du(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ne("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ne("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){ne("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){ne("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&jf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){ne("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===no,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],f=t[o+1];if(c!==f&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*n,u=p-n,m=p+n;for(let y=0;y!==n;++y){let M=e[p+y];if(M!==e[u+y]||M!==e[m+y]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let p=o*n,u=a*n;for(let m=0;m!==n;++m)e[u+m]=e[p+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Qa(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function uu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function du(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Gn.prototype.ValueTypeName="";Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=po;var ji=class extends Gn{constructor(t,e,n){super(t,e,n)}};ji.prototype.ValueTypeName="bool";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=Ir;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var Io=class extends Gn{constructor(t,e,n,s){super(t,e,n,s)}};Io.prototype.ValueTypeName="color";var Lo=class extends Gn{constructor(t,e,n,s){super(t,e,n,s)}};Lo.prototype.ValueTypeName="number";var Do=class extends Ki{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let f=c+o;c!==f;c+=4)Vn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Xr=class extends Gn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Do(this.times,this.values,this.getValueSize(),t)}};Xr.prototype.ValueTypeName="quaternion";Xr.prototype.InterpolantFactoryMethodSmooth=void 0;var Qi=class extends Gn{constructor(t,e,n){super(t,e,n)}};Qi.prototype.ValueTypeName="string";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=Ir;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var No=class extends Gn{constructor(t,e,n,s){super(t,e,n,s)}};No.prototype.ValueTypeName="vector";var Uo=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(f){o++,r===!1&&s.onStart!==void 0&&s.onStart(f,a,o),r=!0},this.itemEnd=function(f){a++,s.onProgress!==void 0&&s.onProgress(f,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,p){return c.push(f,p),this},this.removeHandler=function(f){let p=c.indexOf(f);return p!==-1&&c.splice(p,2),this},this.getHandler=function(f){for(let p=0,u=c.length;p<u;p+=2){let m=c[p],y=c[p+1];if(m.global&&(m.lastIndex=0),m.test(f))return y}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},rd=new Uo,Fo=class{constructor(t){this.manager=t!==void 0?t:rd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Fo.DEFAULT_MATERIAL_NAME="__DEFAULT";var $r=class extends cn{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new de(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},qr=class extends $r{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new de(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},wc=new ke,fu=new Y,pu=new Y,Oo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zi,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;fu.setFromMatrixPosition(t.matrixWorld),e.position.copy(fu),pu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(pu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){wc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(wc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Qs||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(wc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},to=new Y,eo=new Vn,ci=new Y,Yr=class extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(to,eo,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(to,eo,ci.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(to,eo,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(to,eo,ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},qi=new Y,mu=new ie,gu=new ie,yn=class extends Yr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=er*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return er*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(qi.x,qi.y).multiplyScalar(-t/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qi.x,qi.y).multiplyScalar(-t/qi.z)}getViewSize(t,e){return this.getViewBounds(t,mu,gu),e.subVectors(gu,mu)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Js*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Zr=class extends Yr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Cc=class extends Oo{constructor(){super(new Zr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},rr=class extends $r{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.shadow=new Cc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ys=-90,Zs=1,ar=class extends cn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new yn(Ys,Zs,t,e);s.layers=this.layers,this.add(s);let r=new yn(Ys,Zs,t,e);r.layers=this.layers,this.add(r);let a=new yn(Ys,Zs,t,e);a.layers=this.layers,this.add(a);let o=new yn(Ys,Zs,t,e);o.layers=this.layers,this.add(o);let l=new yn(Ys,Zs,t,e);l.layers=this.layers,this.add(l);let c=new yn(Ys,Zs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,f]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=M,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),t.setRenderTarget(p,u,m),t.xr.enabled=y,n.texture.needsPMREMUpdate=!0}},Bo=class extends yn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var hh="\\[\\]\\.:\\/",Op=new RegExp("["+hh+"]","g"),uh="[^"+hh+"]",Bp="[^"+hh.replace("\\.","")+"]",kp=/((?:WC+[\/:])*)/.source.replace("WC",uh),zp=/(WCOD+)?/.source.replace("WCOD",Bp),Vp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uh),Hp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uh),Gp=new RegExp("^"+kp+zp+Vp+Hp+"$"),Wp=["material","materials","bones","map"],Pc=class{constructor(t,e,n){let s=n||Be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Be=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Op,"")}static parseTrackName(t){let e=Gp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Wp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Jt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ne("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ne("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===c){c=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ne("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ne("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){ne("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;ne("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Be.Composite=Pc;Be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Be.prototype.GetterByBindingType=[Be.prototype._getValue_direct,Be.prototype._getValue_array,Be.prototype._getValue_arrayElement,Be.prototype._getValue_toArray];Be.prototype.SetterByBindingTypeAndVersioning=[[Be.prototype._setValue_direct,Be.prototype._setValue_direct_setNeedsUpdate,Be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_array,Be.prototype._setValue_array_setNeedsUpdate,Be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_arrayElement,Be.prototype._setValue_arrayElement_setNeedsUpdate,Be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_fromArray,Be.prototype._setValue_fromArray_setNeedsUpdate,Be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ly=new Float32Array(1);var or=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=_e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(_e(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Ic=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var Jr=class extends sr{constructor(t=10,e=10,n=4473924,s=8947848){n=new de(n),s=new de(s);let r=e/2,a=t/e,o=t/2,l=[],c=[];for(let u=0,m=0,y=-o;u<=e;u++,y+=a){l.push(-o,0,y,o,0,y),l.push(y,0,-o,y,0,o);let M=u===r?n:s;M.toArray(c,m),m+=3,M.toArray(c,m),m+=3,M.toArray(c,m),m+=3,M.toArray(c,m),m+=3}let f=new Pn;f.setAttribute("position",new ln(l,3)),f.setAttribute("color",new ln(c,3));let p=new Ms({vertexColors:!0,toneMapped:!1});super(f,p),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};var Kr=class extends ti{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function dh(i,t,e,n){let s=Xp(n);switch(e){case Kc:return i*t;case Qc:return i*t/s.components*s.byteLength;case Xo:return i*t/s.components*s.byteLength;case is:return i*t*2/s.components*s.byteLength;case $o:return i*t*2/s.components*s.byteLength;case jc:return i*t*3/s.components*s.byteLength;case ri:return i*t*4/s.components*s.byteLength;case qo:return i*t*4/s.components*s.byteLength;case ta:case ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case na:case ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Zo:case Ko:return Math.max(i,16)*Math.max(t,8)/4;case Yo:case Jo:return Math.max(i,8)*Math.max(t,8)/2;case jo:case Qo:case el:case nl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case tl:case sa:case il:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case rl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case al:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ol:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ll:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case cl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case hl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ul:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case dl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case fl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case pl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ml:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case gl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case _l:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case xl:case yl:case vl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ml:case Sl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ra:case bl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Xp(i){switch(i){case In:case qc:return{byteLength:1,components:1};case ur:case Yc:case si:return{byteLength:2,components:1};case Go:case Wo:return{byteLength:2,components:4};case ni:case Ho:case ii:return{byteLength:4,components:1};case Zc:case Jc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Ad(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function qp(i){let t=new WeakMap;function e(o,l){let c=o.array,f=o.usage,p=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,f),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,c){let f=l.array,p=l.updateRanges;if(i.bindBuffer(c,o),p.length===0)i.bufferSubData(c,0,f);else{p.sort((m,y)=>m.start-y.start);let u=0;for(let m=1;m<p.length;m++){let y=p[u],M=p[m];M.start<=y.start+y.count+1?y.count=Math.max(y.count,M.start+M.count-y.start):(++u,p[u]=M)}p.length=u+1;for(let m=0,y=p.length;m<y;m++){let M=p[m];i.bufferSubData(c,M.start*f.BYTES_PER_ELEMENT,f,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Yp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zp=`#ifdef USE_ALPHAHASH
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
#endif`,Jp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tm=`#ifdef USE_AOMAP
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
#endif`,em=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nm=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,im=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,am=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,om=`#ifdef USE_IRIDESCENCE
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
#endif`,lm=`#ifdef USE_BUMPMAP
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
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,pm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,mm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,_m=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,xm=`vec3 transformedNormal = objectNormal;
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
#endif`,ym=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bm="gl_FragColor = linearToOutputTexel( gl_FragColor );",wm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Em=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Am=`#ifdef USE_ENVMAP
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
#endif`,Rm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Pm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Im=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nm=`#ifdef USE_GRADIENTMAP
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
}`,Um=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bm=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,km=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,zm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Xm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$m=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ym=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zm=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Jm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Km=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ng=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ig=`#if defined( USE_POINTS_UV )
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
#endif`,sg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ag=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,og=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cg=`#ifdef USE_MORPHTARGETS
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
#endif`,hg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ug=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,gg=`#ifdef USE_NORMALMAP
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
#endif`,_g=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,bg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Eg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ag=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Pg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,Ig=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Lg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,Dg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ng=`#ifdef USE_SKINNING
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
#endif`,Ug=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fg=`#ifdef USE_SKINNING
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
#endif`,Og=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vg=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hg=`#ifdef USE_TRANSMISSION
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
#endif`,Gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,$g=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,qg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yg=`uniform sampler2D t2D;
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
}`,Zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jg=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qg=`#include <common>
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
}`,t0=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,e0=`#define DISTANCE
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
}`,n0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,i0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,s0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r0=`uniform float scale;
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
}`,a0=`uniform vec3 diffuse;
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
}`,o0=`#include <common>
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
}`,l0=`uniform vec3 diffuse;
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
}`,c0=`#define LAMBERT
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
}`,h0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,u0=`#define MATCAP
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
}`,d0=`#define MATCAP
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
}`,f0=`#define NORMAL
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
}`,p0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,m0=`#define PHONG
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
}`,g0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,_0=`#define STANDARD
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
}`,x0=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,y0=`#define TOON
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
}`,v0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,M0=`uniform float size;
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
}`,S0=`uniform vec3 diffuse;
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
}`,b0=`#include <common>
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
}`,w0=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,T0=`uniform float rotation;
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
}`,E0=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:Yp,alphahash_pars_fragment:Zp,alphamap_fragment:Jp,alphamap_pars_fragment:Kp,alphatest_fragment:jp,alphatest_pars_fragment:Qp,aomap_fragment:tm,aomap_pars_fragment:em,batching_pars_vertex:nm,batching_vertex:im,begin_vertex:sm,beginnormal_vertex:rm,bsdfs:am,iridescence_fragment:om,bumpmap_pars_fragment:lm,clipping_planes_fragment:cm,clipping_planes_pars_fragment:hm,clipping_planes_pars_vertex:um,clipping_planes_vertex:dm,color_fragment:fm,color_pars_fragment:pm,color_pars_vertex:mm,color_vertex:gm,common:_m,defaultnormal_vertex:xm,displacementmap_pars_vertex:ym,displacementmap_vertex:vm,emissivemap_fragment:Mm,emissivemap_pars_fragment:Sm,colorspace_fragment:bm,colorspace_pars_fragment:wm,envmap_fragment:Tm,envmap_common_pars_fragment:Em,envmap_pars_fragment:Am,envmap_pars_vertex:Rm,envmap_physical_pars_fragment:km,envmap_vertex:Cm,fog_vertex:Pm,fog_pars_vertex:Im,fog_fragment:Lm,fog_pars_fragment:Dm,gradientmap_pars_fragment:Nm,lightmap_pars_fragment:Um,lights_lambert_fragment:Fm,lights_lambert_pars_fragment:Om,lights_pars_begin:Bm,lights_toon_fragment:zm,lights_toon_pars_fragment:Vm,lights_phong_fragment:Hm,lights_phong_pars_fragment:Gm,lights_physical_fragment:Wm,lights_physical_pars_fragment:Xm,lights_fragment_begin:$m,lights_fragment_maps:qm,lights_fragment_end:Ym,lightprobes_pars_fragment:Zm,logdepthbuf_fragment:Jm,logdepthbuf_pars_fragment:Km,logdepthbuf_pars_vertex:jm,logdepthbuf_vertex:Qm,map_fragment:tg,map_pars_fragment:eg,map_particle_fragment:ng,map_particle_pars_fragment:ig,metalnessmap_fragment:sg,metalnessmap_pars_fragment:rg,morphinstance_vertex:ag,morphcolor_vertex:og,morphnormal_vertex:lg,morphtarget_pars_vertex:cg,morphtarget_vertex:hg,normal_fragment_begin:ug,normal_fragment_maps:dg,normal_pars_fragment:fg,normal_pars_vertex:pg,normal_vertex:mg,normalmap_pars_fragment:gg,clearcoat_normal_fragment_begin:_g,clearcoat_normal_fragment_maps:xg,clearcoat_pars_fragment:yg,iridescence_pars_fragment:vg,opaque_fragment:Mg,packing:Sg,premultiplied_alpha_fragment:bg,project_vertex:wg,dithering_fragment:Tg,dithering_pars_fragment:Eg,roughnessmap_fragment:Ag,roughnessmap_pars_fragment:Rg,shadowmap_pars_fragment:Cg,shadowmap_pars_vertex:Pg,shadowmap_vertex:Ig,shadowmask_pars_fragment:Lg,skinbase_vertex:Dg,skinning_pars_vertex:Ng,skinning_vertex:Ug,skinnormal_vertex:Fg,specularmap_fragment:Og,specularmap_pars_fragment:Bg,tonemapping_fragment:kg,tonemapping_pars_fragment:zg,transmission_fragment:Vg,transmission_pars_fragment:Hg,uv_pars_fragment:Gg,uv_pars_vertex:Wg,uv_vertex:Xg,worldpos_vertex:$g,background_vert:qg,background_frag:Yg,backgroundCube_vert:Zg,backgroundCube_frag:Jg,cube_vert:Kg,cube_frag:jg,depth_vert:Qg,depth_frag:t0,distance_vert:e0,distance_frag:n0,equirect_vert:i0,equirect_frag:s0,linedashed_vert:r0,linedashed_frag:a0,meshbasic_vert:o0,meshbasic_frag:l0,meshlambert_vert:c0,meshlambert_frag:h0,meshmatcap_vert:u0,meshmatcap_frag:d0,meshnormal_vert:f0,meshnormal_frag:p0,meshphong_vert:m0,meshphong_frag:g0,meshphysical_vert:_0,meshphysical_frag:x0,meshtoon_vert:y0,meshtoon_frag:v0,points_vert:M0,points_frag:S0,shadow_vert:b0,shadow_frag:w0,sprite_vert:T0,sprite_frag:E0},Dt={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ae}},envmap:{envMap:{value:null},envMapRotation:{value:new ae},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ae}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ae}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ae},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ae},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ae},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ae}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ae}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ae}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0},uvTransform:{value:new ae}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}}},gi={basic:{uniforms:mn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:mn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new de(0)},envMapIntensity:{value:1}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:mn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:mn([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:mn([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new de(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:mn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:mn([Dt.points,Dt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:mn([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:mn([Dt.common,Dt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:mn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:mn([Dt.sprite,Dt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ae},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ae}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distance:{uniforms:mn([Dt.common,Dt.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distance_vert,fragmentShader:fe.distance_frag},shadow:{uniforms:mn([Dt.lights,Dt.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};gi.physical={uniforms:mn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ae},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ae},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ae},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ae},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ae},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ae},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ae},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ae},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ae},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ae},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ae},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ae},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ae}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};var Tl={r:0,b:0,g:0},A0=new ke,Rd=new ae;Rd.set(-1,0,0,0,1,0,0,0,1);function R0(i,t,e,n,s,r){let a=new de(0),o=s===!0?0:1,l,c,f=null,p=0,u=null;function m(b){let I=b.isScene===!0?b.background:null;if(I&&I.isTexture){let A=b.backgroundBlurriness>0;I=t.get(I,A)}return I}function y(b){let I=!1,A=m(b);A===null?g(a,o):A&&A.isColor&&(g(A,1),I=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||I)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(b,I){let A=m(I);A&&A.isCubeTexture?(c===void 0&&(c=new Mn(new ei(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:Es(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,C,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=A,c.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(A0.makeRotationFromEuler(I.backgroundRotation)).transpose(),A.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Rd),c.material.toneMapped=Me.getTransfer(A.colorSpace)!==Ae,(f!==A||p!==A.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,f=A,p=A.version,u=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new Mn(new Wr(2,2),new di({name:"BackgroundMaterial",uniforms:Es(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,l.material.toneMapped=Me.getTransfer(A.colorSpace)!==Ae,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||p!==A.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,f=A,p=A.version,u=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function g(b,I){b.getRGB(Tl,ch(i)),e.buffers.color.setClear(Tl.r,Tl.g,Tl.b,I,r)}function _(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,I=1){a.set(b),o=I,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,g(a,o)},render:y,addToRenderList:M,dispose:_}}function C0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(F,k,G,D,K){let tt=!1,j=p(F,D,G,k);r!==j&&(r=j,c(r.object)),tt=m(F,D,G,K),tt&&y(F,D,G,K),K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(tt||a)&&(a=!1,A(F,k,G,D),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function l(){return i.createVertexArray()}function c(F){return i.bindVertexArray(F)}function f(F){return i.deleteVertexArray(F)}function p(F,k,G,D){let K=D.wireframe===!0,tt=n[k.id];tt===void 0&&(tt={},n[k.id]=tt);let j=F.isInstancedMesh===!0?F.id:0,pt=tt[j];pt===void 0&&(pt={},tt[j]=pt);let it=pt[G.id];it===void 0&&(it={},pt[G.id]=it);let dt=it[K];return dt===void 0&&(dt=u(l()),it[K]=dt),dt}function u(F){let k=[],G=[],D=[];for(let K=0;K<e;K++)k[K]=0,G[K]=0,D[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:G,attributeDivisors:D,object:F,attributes:{},index:null}}function m(F,k,G,D){let K=r.attributes,tt=k.attributes,j=0,pt=G.getAttributes();for(let it in pt)if(pt[it].location>=0){let mt=K[it],Ht=tt[it];if(Ht===void 0&&(it==="instanceMatrix"&&F.instanceMatrix&&(Ht=F.instanceMatrix),it==="instanceColor"&&F.instanceColor&&(Ht=F.instanceColor)),mt===void 0||mt.attribute!==Ht||Ht&&mt.data!==Ht.data)return!0;j++}return r.attributesNum!==j||r.index!==D}function y(F,k,G,D){let K={},tt=k.attributes,j=0,pt=G.getAttributes();for(let it in pt)if(pt[it].location>=0){let mt=tt[it];mt===void 0&&(it==="instanceMatrix"&&F.instanceMatrix&&(mt=F.instanceMatrix),it==="instanceColor"&&F.instanceColor&&(mt=F.instanceColor));let Ht={};Ht.attribute=mt,mt&&mt.data&&(Ht.data=mt.data),K[it]=Ht,j++}r.attributes=K,r.attributesNum=j,r.index=D}function M(){let F=r.newAttributes;for(let k=0,G=F.length;k<G;k++)F[k]=0}function g(F){_(F,0)}function _(F,k){let G=r.newAttributes,D=r.enabledAttributes,K=r.attributeDivisors;G[F]=1,D[F]===0&&(i.enableVertexAttribArray(F),D[F]=1),K[F]!==k&&(i.vertexAttribDivisor(F,k),K[F]=k)}function b(){let F=r.newAttributes,k=r.enabledAttributes;for(let G=0,D=k.length;G<D;G++)k[G]!==F[G]&&(i.disableVertexAttribArray(G),k[G]=0)}function I(F,k,G,D,K,tt,j){j===!0?i.vertexAttribIPointer(F,k,G,K,tt):i.vertexAttribPointer(F,k,G,D,K,tt)}function A(F,k,G,D){M();let K=D.attributes,tt=G.getAttributes(),j=k.defaultAttributeValues;for(let pt in tt){let it=tt[pt];if(it.location>=0){let dt=K[pt];if(dt===void 0&&(pt==="instanceMatrix"&&F.instanceMatrix&&(dt=F.instanceMatrix),pt==="instanceColor"&&F.instanceColor&&(dt=F.instanceColor)),dt!==void 0){let mt=dt.normalized,Ht=dt.itemSize,te=t.get(dt);if(te===void 0)continue;let ot=te.buffer,Pt=te.type,Ot=te.bytesPerElement,Yt=Pt===i.INT||Pt===i.UNSIGNED_INT||dt.gpuType===Ho;if(dt.isInterleavedBufferAttribute){let It=dt.data,oe=It.isInterleavedBuffer===!0?It.stride:It.itemSize,Ge=dt.offset;if(It.isInstancedInterleavedBuffer||It.isInstancedBufferAttribute){for(let Kt=0;Kt<it.locationSize;Kt++)_(it.location+Kt,It.meshPerAttribute);F.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=It.meshPerAttribute*It.count)}else for(let Kt=0;Kt<it.locationSize;Kt++)g(it.location+Kt);i.bindBuffer(i.ARRAY_BUFFER,ot);for(let Kt=0;Kt<it.locationSize;Kt++)I(it.location+Kt,Ht/it.locationSize,Pt,mt,oe*Ot,(Ge+Ht/it.locationSize*Kt)*Ot,Yt)}else{if(dt.isInstancedBufferAttribute){for(let It=0;It<it.locationSize;It++)_(it.location+It,dt.meshPerAttribute);F.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let It=0;It<it.locationSize;It++)g(it.location+It);i.bindBuffer(i.ARRAY_BUFFER,ot);for(let It=0;It<it.locationSize;It++)I(it.location+It,Ht/it.locationSize,Pt,mt,Ht*Ot,Ht/it.locationSize*It*Ot,Yt)}}else if(j!==void 0){let mt=j[pt];if(mt!==void 0)switch(mt.length){case 2:i.vertexAttrib2fv(it.location,mt);break;case 3:i.vertexAttrib3fv(it.location,mt);break;case 4:i.vertexAttrib4fv(it.location,mt);break;default:i.vertexAttrib1fv(it.location,mt)}}}}b()}function E(){H();for(let F in n){let k=n[F];for(let G in k){let D=k[G];for(let K in D){let tt=D[K];for(let j in tt)f(tt[j].object),delete tt[j];delete D[K]}}delete n[F]}}function C(F){if(n[F.id]===void 0)return;let k=n[F.id];for(let G in k){let D=k[G];for(let K in D){let tt=D[K];for(let j in tt)f(tt[j].object),delete tt[j];delete D[K]}}delete n[F.id]}function x(F){for(let k in n){let G=n[k];for(let D in G){let K=G[D];if(K[F.id]===void 0)continue;let tt=K[F.id];for(let j in tt)f(tt[j].object),delete tt[j];delete K[F.id]}}}function w(F){for(let k in n){let G=n[k],D=F.isInstancedMesh===!0?F.id:0,K=G[D];if(K!==void 0){for(let tt in K){let j=K[tt];for(let pt in j)f(j[pt].object),delete j[pt];delete K[tt]}delete G[D],Object.keys(G).length===0&&delete n[k]}}}function H(){B(),a=!0,r!==s&&(r=s,c(r.object))}function B(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:H,resetDefaultState:B,dispose:E,releaseStatesOfGeometry:C,releaseStatesOfObject:w,releaseStatesOfProgram:x,initAttributes:M,enableAttribute:g,disableUnusedAttributes:b}}function P0(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,f){f!==0&&(i.drawArraysInstanced(n,l,c,f),e.update(c,n,f))}function o(l,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,f);let u=0;for(let m=0;m<f;m++)u+=c[m];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function I0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==ri&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let w=x===si&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==In&&x!==ii&&!w&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",f=l(c);f!==c&&(Jt("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&p===!1;e.reversedDepthBuffer===!0&&p===!1&&Jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&p===!0&&Jt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),I=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),C=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:y,maxTextureSize:M,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:b,maxVaryings:I,maxFragmentUniforms:A,maxSamples:E,samples:C}}function L0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new kn,o=new ae,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let m=p.length!==0||u||n!==0||s;return s=u,n=p.length,m},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,u){e=f(p,u,0)},this.setState=function(p,u,m){let y=p.clippingPlanes,M=p.clipIntersection,g=p.clipShadows,_=i.get(p);if(!s||y===null||y.length===0||r&&!g)r?f(null):c();else{let b=r?0:n,I=b*4,A=_.clippingState||null;l.value=A,A=f(y,u,I,m);for(let E=0;E!==I;++E)A[E]=e[E];_.clippingState=A,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(p,u,m,y){let M=p!==null?p.length:0,g=null;if(M!==0){if(g=l.value,y!==!0||g===null){let _=m+M*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<_)&&(g=new Float32Array(_));for(let I=0,A=m;I!==M;++I,A+=4)a.copy(p[I]).applyMatrix4(b,o),a.normal.toArray(g,A),g[A+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,g}}var la=class extends Hn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new zr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ei(5,5,5),r=new di({name:"CubemapFromEquirect",uniforms:Es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Sn,blending:Ss});r.uniforms.tEquirect.value=e;let a=new Mn(s,r),o=e.minFilter;return e.minFilter===Di&&(e.minFilter=vn),new ar(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},ad=256,D0=3,N0=20,Cd=256,Pd=16,U0=3,F0=new Y,O0=new de,Al=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ar(1,10,null),this._boxMesh=new Mn(new ei(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=F0}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),f=this._getSourceTarget(!0);e>0&&(f.texture.mipmapsAutoUpdate=!1);let p=l.autoClear,u=l.autoClearColor,m=l.autoClearDepth,y=l.autoClearStencil,M=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(t.background=l.getClearColor(O0));let g=new ar(n,s,f);return g.position.copy(o),g.update(l,t),l.autoClear=p,l.autoClearColor=u,l.autoClearDepth=m,l.autoClearStencil=y,t.background=M,e>0&&(f.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ld(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(ad,ah(t))}_fromTexture(t,e){t.mapping===ws||t.mapping===hr?this._setSize(t.image.length===0?ad:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=od(t,!1,!1),n=Math.log2(t)-D0;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=od(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===ws||t.mapping===hr?(this._cubemapMaterial===null&&(this._cubemapMaterial=cd()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=ld()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=B0(),this._integrationMaterial=k0());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Pd);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-U0)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(Cd*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=z0());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function od(i,t,e){return new la(i,{minFilter:Di,generateMipmaps:t,type:si,colorSpace:Lr,depthBuffer:e})}function ca(i,t,e){return new di({name:i,uniforms:t,vertexShader:fe.cube_vert,fragmentShader:e,side:Sn,blending:Ss,depthTest:!1,depthWrite:!1})}function B0(){return ca("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Cd}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function k0(){return ca("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Pd}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function z0(){return ca("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${N0}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function ld(){return ca("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function cd(){return ca("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function V0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,m=!1){return u==null?null:m?a(u):r(u)}function r(u){if(u&&u.isTexture){let m=u.mapping;if(m===ko||m===zo)if(t.has(u)){let y=t.get(u).texture;return o(y,u.mapping)}else{let y=u.image;if(y&&y.height>0){let M=new la(y.height);return M.fromEquirectangularTexture(i,u),t.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let m=u.mapping,y=m===ko||m===zo,M=m===ws||m===hr;if(y||M){let g=e.get(u),_=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==_)return n===null&&(n=new Al(i)),g=y?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let b=u.image;return y&&b&&b.height>0||M&&b&&l(b)?(n===null&&(n=new Al(i)),g=y?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",f),g.texture):null}}}return u}function o(u,m){return m===ko?u.mapping=ws:m===zo&&(u.mapping=hr),u}function l(u){let m=0,y=6;for(let M=0;M<y;M++)u[M]!==void 0&&m++;return m===y}function c(u){let m=u.target;m.removeEventListener("dispose",c);let y=t.get(m);y!==void 0&&(t.delete(m),y.dispose())}function f(u){let m=u.target;m.removeEventListener("dispose",f);let y=e.get(m);y!==void 0&&(e.delete(m),y.dispose())}function p(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function H0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Cr("WebGLRenderer: "+n+" extension not supported."),s}}}function G0(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(y=>delete s[y]);function o(y){l(y.target)}function l(y){y.index!==null&&t.remove(y.index);for(let g in y.attributes)t.remove(y.attributes[g]);y.removeEventListener("dispose",o),delete s[y.id],a.unregister(y);let M=r.get(y);M&&(t.remove(M),r.delete(y)),n.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,e.memory.geometries--}function c(y,M){return s[M.id]!==void 0||(M.addEventListener("dispose",o),s[M.id]=new WeakRef(M),a.register(M,M.id,M),e.memory.geometries++),M}function f(y){let M=y.attributes;for(let g in M)t.update(M[g],i.ARRAY_BUFFER)}function p(y){let M=y.index,g=y.attributes.position,_=0;if(g===void 0)return;let b=M!==null?M.array.length:g.array.length/3-1,I=g.count>=65535?kr:Br,A=new I(Math.ceil(b/3)*6,1),E=A.array;if(M!==null){let x=M.array;_=M.version;for(let w=0,H=0;w<b;w+=3){let B=x[w+0],F=x[w+1],k=x[w+2];E[H++]=B,E[H++]=F,E[H++]=F,E[H++]=k,E[H++]=k,E[H++]=B}}else{_=g.version;for(let x=0,w=0;x<b;x+=3){let H=x+0,B=x+1,F=x+2;E[w++]=H,E[w++]=B,E[w++]=B,E[w++]=F,E[w++]=F,E[w++]=H}}A.version=_;let C=r.get(y);C&&t.remove(C),r.set(y,A)}function u(y){let M=r.get(y);if(M){let g=y.index;g!==null&&M.version<g.version&&p(y)}else p(y);return r.get(y)}function m(){for(let y in s){let M=s[y].deref();M!==void 0&&l(M)}}return{get:c,update:f,getWireframeAttribute:u,dispose:m}}function W0(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,u){i.drawElements(n,u,r,p*a),e.update(u,n,1)}function c(p,u,m){m!==0&&(i.drawElementsInstanced(n,u,r,p*a,m),e.update(u,n,m))}function f(p,u,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,p,0,m);let M=0;for(let g=0;g<m;g++)M+=u[g];e.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function X0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:ne("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function $0(i,t,e){let n=new WeakMap,s=new ze;function r(a,o,l){let c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=f!==void 0?f.length:0,u=n.get(o);if(u===void 0||u.count!==p){let H=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",H)};u!==void 0&&u.texture.dispose();let m=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],I=0;m===!0&&(I=1),y===!0&&(I=2),M===!0&&(I=3);let A=o.attributes.position.count*I,E=1;A>t.maxTextureSize&&(E=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);let C=new Float32Array(A*E*4*p),x=new Ur(C,A,E,p);x.type=ii,x.needsUpdate=!0;let w=I*4;for(let B=0;B<p;B++){let F=g[B],k=_[B],G=b[B],D=A*E*4*B;for(let K=0;K<F.count;K++){let tt=K*w;m===!0&&(s.fromBufferAttribute(F,K),C[D+tt+0]=s.x,C[D+tt+1]=s.y,C[D+tt+2]=s.z,C[D+tt+3]=0),y===!0&&(s.fromBufferAttribute(k,K),C[D+tt+4]=s.x,C[D+tt+5]=s.y,C[D+tt+6]=s.z,C[D+tt+7]=0),M===!0&&(s.fromBufferAttribute(G,K),C[D+tt+8]=s.x,C[D+tt+9]=s.y,C[D+tt+10]=s.z,C[D+tt+11]=G.itemSize===4?s.w:1)}}u={count:p,texture:x,size:new ie(A,E)},n.set(o,u),o.addEventListener("dispose",H)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let M=0;M<c.length;M++)m+=c[M];let y=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",y),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function q0(i,t,e,n,s){let r=new WeakMap;function a(c){let f=s.render.frame,p=c.geometry,u=t.get(c,p);if(r.get(u)!==f&&(t.update(u),r.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==f&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,f))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==f&&(m.update(),r.set(m,f))}return u}function o(){r=new WeakMap}function l(c){let f=c.target;f.removeEventListener("dispose",l),n.releaseStatesOfObject(f),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:a,dispose:o}}var Y0={[kc]:"LINEAR_TONE_MAPPING",[zc]:"REINHARD_TONE_MAPPING",[Vc]:"CINEON_TONE_MAPPING",[Hc]:"ACES_FILMIC_TONE_MAPPING",[Wc]:"AGX_TONE_MAPPING",[Xc]:"NEUTRAL_TONE_MAPPING",[Gc]:"CUSTOM_TONE_MAPPING"};function Z0(i,t,e,n,s,r){let a=new Hn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,f=new Pn;f.setAttribute("position",new ln([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new ln([0,2,0,0,2,0],2));let p=new wo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Mn(f,p),m=new Zr(-1,1,1,-1,0,1),y=null,M=null,g=!1,_,b=null,I=[],A=!1;this.setSize=function(E,C){a.setSize(E,C),o!==null&&o.setSize(E,C),l!==null&&l.setSize(E,C);for(let x=0;x<I.length;x++){let w=I[x];w.setSize&&w.setSize(E,C)}},this.setEffects=function(E){I=E,A=I.length>0&&I[0].isRenderPass===!0;let C=a.width,x=a.height;I.length>0&&o===null&&(o=new Hn(C,x,{type:si,depthBuffer:!1,stencilBuffer:!1}),l=new Hn(C,x,{type:si,depthBuffer:!1,stencilBuffer:!1}));let w=s===!0&&I.some(H=>H.needsDepthTexture===!0);w!==(a.depthTexture!==null)&&(w===!0&&c===null&&(c=new Li(C,x),r===!0&&(c.format=Ni,c.type=Ts)),a.dispose(),a.depthTexture=w?c:null,a.resolveDepthBuffer=w,a.storeMultisampledDepthBuffer=w);for(let H=0;H<I.length;H++){let B=I[H];B.setSize&&B.setSize(C,x),w&&B.needsDepthTexture===!0&&B.setDepthTexture&&B.setDepthTexture(c)}},this.begin=function(E,C){if(g||E.toneMapping===pi&&I.length===0)return!1;if(b=C,C!==null){let x=C.width,w=C.height;(a.width!==x||a.height!==w)&&this.setSize(x,w)}return A===!1&&E.setRenderTarget(a),_=E.toneMapping,E.toneMapping=pi,!0},this.hasRenderPass=function(){return A},this.end=function(E,C){E.toneMapping=_,g=!0;let x=a,w=o;for(let H=0;H<I.length;H++){let B=I[H];B.enabled!==!1&&(B.render(E,w,x,C),B.needsSwap!==!1&&(x=w,w=w===o?l:o))}if(y!==E.outputColorSpace||M!==E.toneMapping){y=E.outputColorSpace,M=E.toneMapping,p.defines={},Me.getTransfer(y)===Ae&&(p.defines.SRGB_TRANSFER="");let H=Y0[M];H&&(p.defines[H]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=x.texture,E.setRenderTarget(b),E.render(u,m),b=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),f.dispose(),p.dispose()}}var Id=new Cn,Ld=new Li(1,1),Dd=new Vr(1),Nd=new Ur,Ud=new _o,Fd=new zr,hd=[],ud=[],dd=new Float32Array(16),fd=new Float32Array(9),pd=new Float32Array(4);function pr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=hd[s];if(r===void 0&&(r=new Float32Array(s),hd[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function je(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Qe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Cl(i,t){let e=ud[t];e===void 0&&(e=new Int32Array(t),ud[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function J0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function K0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;i.uniform2fv(this.addr,t),Qe(e,t)}}function j0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(je(e,t))return;i.uniform3fv(this.addr,t),Qe(e,t)}}function Q0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;i.uniform4fv(this.addr,t),Qe(e,t)}}function t_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Qe(e,t)}else{if(je(e,n))return;pd.set(n),i.uniformMatrix2fv(this.addr,!1,pd),Qe(e,n)}}function e_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Qe(e,t)}else{if(je(e,n))return;fd.set(n),i.uniformMatrix3fv(this.addr,!1,fd),Qe(e,n)}}function n_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Qe(e,t)}else{if(je(e,n))return;dd.set(n),i.uniformMatrix4fv(this.addr,!1,dd),Qe(e,n)}}function i_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function s_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;i.uniform2iv(this.addr,t),Qe(e,t)}}function r_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;i.uniform3iv(this.addr,t),Qe(e,t)}}function a_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;i.uniform4iv(this.addr,t),Qe(e,t)}}function o_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function l_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;i.uniform2uiv(this.addr,t),Qe(e,t)}}function c_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;i.uniform3uiv(this.addr,t),Qe(e,t)}}function h_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;i.uniform4uiv(this.addr,t),Qe(e,t)}}function Pl(i){return i.version===0&&(i.compareFunction=nh,i.needsUpdate=!0),i}function u_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Pl(Ld):r=Id,e.setTexture2D(t||r,s)}function d_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ud,s)}function f_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Pl(Dd):r=Fd,e.setTextureCube(t||r,s)}function p_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Nd,s)}function m_(i){switch(i){case 5126:return J0;case 35664:return K0;case 35665:return j0;case 35666:return Q0;case 35674:return t_;case 35675:return e_;case 35676:return n_;case 5124:case 35670:return i_;case 35667:case 35671:return s_;case 35668:case 35672:return r_;case 35669:case 35673:return a_;case 5125:return o_;case 36294:return l_;case 36295:return c_;case 36296:return h_;case 35678:case 36198:case 36298:case 36306:case 35682:return u_;case 35679:case 36299:case 36307:return d_;case 35680:case 36300:case 36308:case 36293:return f_;case 36289:case 36303:case 36311:case 36292:return p_}}function g_(i,t){i.uniform1fv(this.addr,t)}function __(i,t){let e=pr(t,this.size,2);i.uniform2fv(this.addr,e)}function x_(i,t){let e=pr(t,this.size,3);i.uniform3fv(this.addr,e)}function y_(i,t){let e=pr(t,this.size,4);i.uniform4fv(this.addr,e)}function v_(i,t){let e=pr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function M_(i,t){let e=pr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function S_(i,t){let e=pr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function b_(i,t){i.uniform1iv(this.addr,t)}function w_(i,t){i.uniform2iv(this.addr,t)}function T_(i,t){i.uniform3iv(this.addr,t)}function E_(i,t){i.uniform4iv(this.addr,t)}function A_(i,t){i.uniform1uiv(this.addr,t)}function R_(i,t){i.uniform2uiv(this.addr,t)}function C_(i,t){i.uniform3uiv(this.addr,t)}function P_(i,t){i.uniform4uiv(this.addr,t)}function I_(i,t,e){let n=this.cache,s=t.length,r=Cl(e,s);je(n,r)||(i.uniform1iv(this.addr,r),Qe(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Pl(Ld):a=Id;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function L_(i,t,e){let n=this.cache,s=t.length,r=Cl(e,s);je(n,r)||(i.uniform1iv(this.addr,r),Qe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Ud,r[a])}function D_(i,t,e){let n=this.cache,s=t.length,r=Cl(e,s);je(n,r)||(i.uniform1iv(this.addr,r),Qe(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Pl(Dd):a=Fd;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function N_(i,t,e){let n=this.cache,s=t.length,r=Cl(e,s);je(n,r)||(i.uniform1iv(this.addr,r),Qe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Nd,r[a])}function U_(i){switch(i){case 5126:return g_;case 35664:return __;case 35665:return x_;case 35666:return y_;case 35674:return v_;case 35675:return M_;case 35676:return S_;case 5124:case 35670:return b_;case 35667:case 35671:return w_;case 35668:case 35672:return T_;case 35669:case 35673:return E_;case 5125:return A_;case 36294:return R_;case 36295:return C_;case 36296:return P_;case 35678:case 36198:case 36298:case 36306:case 35682:return I_;case 35679:case 36299:case 36307:return L_;case 35680:case 36300:case 36308:case 36293:return D_;case 36289:case 36303:case 36311:case 36292:return N_}}var mh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=m_(e.type)}},gh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=U_(e.type)}},_h=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},fh=/(\w+)(\])?(\[|\.)?/g;function md(i,t){i.seq.push(t),i.map[t.id]=t}function F_(i,t,e){let n=i.name,s=n.length;for(fh.lastIndex=0;;){let r=fh.exec(n),a=fh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){md(e,c===void 0?new mh(o,i,t):new gh(o,i,t));break}else{let p=e.map[o];p===void 0&&(p=new _h(o),md(e,p)),e=p}}}var fr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);F_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function gd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var O_=37297,B_=0;function k_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var _d=new ae;function z_(i){Me._getMatrix(_d,Me.workingColorSpace,i);let t=`mat3( ${_d.elements.map(e=>e.toFixed(4))} )`;switch(Me.getTransfer(i)){case Dr:return[t,"LinearTransferOETF"];case Ae:return[t,"sRGBTransferOETF"];default:return Jt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function xd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+k_(i.getShaderSource(t),o)}else return r}function V_(i,t){let e=z_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var H_={[kc]:"Linear",[zc]:"Reinhard",[Vc]:"Cineon",[Hc]:"ACESFilmic",[Wc]:"AgX",[Xc]:"Neutral",[Gc]:"Custom"};function G_(i,t){let e=H_[t];return e===void 0?(Jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var El=new Y;function W_(){Me.getLuminanceCoefficients(El);let i=El.x.toFixed(4),t=El.y.toFixed(4),e=El.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function X_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oa).join(`
`)}function $_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function q_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function oa(i){return i!==""}function yd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function vd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Y_=/^[ \t]*#include +<([\w\d./]+)>/gm;function xh(i){return i.replace(Y_,Z_)}function Z_(i,t){let e=fe[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return xh(e)}var J_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Md(i){return i.replace(J_,K_)}function K_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Sd(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var j_={[jr]:"SHADOWMAP_TYPE_PCF",[lr]:"SHADOWMAP_TYPE_VSM"};function Q_(i){return j_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var tx={[hr]:"ENVMAP_MODE_REFRACTION"};function ex(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":tx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var nx={[Bc]:"ENVMAP_BLENDING_MULTIPLY",[Bu]:"ENVMAP_BLENDING_MIX",[ku]:"ENVMAP_BLENDING_ADD"};function ix(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":nx[i.combine]||"ENVMAP_BLENDING_NONE"}function sx(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Q_(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",f=ex(e),p=ix(e),u=X_(e),m=$_(r),y=s.createProgram(),M,g,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(M=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(oa).join(`
`),M.length>0&&(M+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(oa).join(`
`),g.length>0&&(g+=`
`)):(M=[Sd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oa).join(`
`),g=[Sd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",e.envMap?"#define "+p:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==pi?"#define TONE_MAPPING":"",e.toneMapping!==pi?fe.tonemapping_pars_fragment:"",e.toneMapping!==pi?G_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,V_("linearToOutputTexel",e.outputColorSpace),W_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(oa).join(`
`)),a=xh(a),a=yd(a,e),a=vd(a,e),o=xh(o),o=yd(o,e),o=vd(o,e),a=Md(a),o=Md(o),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,M=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,g=["#define varying in",e.glslVersion===ih?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ih?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let b=_+M+a,I=_+g+o,A=gd(s,s.VERTEX_SHADER,b),E=gd(s,s.FRAGMENT_SHADER,I);s.attachShader(y,A),s.attachShader(y,E),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function C(B){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(y)||"",k=s.getShaderInfoLog(A)||"",G=s.getShaderInfoLog(E)||"",D=F.trim(),K=k.trim(),tt=G.trim(),j=!0,pt=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,A,E);else{let it=xd(s,A,"vertex"),dt=xd(s,E,"fragment");ne("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+D+`
`+it+`
`+dt)}else D!==""?Jt("WebGLProgram: Program Info Log:",D):(K===""||tt==="")&&(pt=!1);pt&&(B.diagnostics={runnable:j,programLog:D,vertexShader:{log:K,prefix:M},fragmentShader:{log:tt,prefix:g}})}s.deleteShader(A),s.deleteShader(E),x=new fr(s,y),w=q_(s,y)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let H=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=s.getProgramParameter(y,O_)),H},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=B_++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=A,this.fragmentShader=E,this}var rx=0,yh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new vh(t),e.set(t,n)),n}},vh=class{constructor(t){this.id=rx++,this.code=t,this.usedTimes=0}};function ax(i){return i===is||i===sa||i===ra}function ox(i,t,e,n,s,r){let a=new Fr,o=new yh,l=new Set,c=[],f=new Map,p=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function y(x,w,H,B,F,k){let G=B.fog,D=F.geometry,K=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?B.environment:null,tt=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,j=t.get(x.envMap||K,tt),pt=u[x.type],it=n.precision;x.precision!==null&&(it=n.getMaxPrecision(x.precision),it!==x.precision&&Jt("WebGLProgram.getParameters:",x.precision,"not supported, using",it,"instead."));let dt=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,mt=dt!==void 0?dt.length:0,Ht=0;D.morphAttributes.position!==void 0&&(Ht=1),D.morphAttributes.normal!==void 0&&(Ht=2),D.morphAttributes.color!==void 0&&(Ht=3);let te,ot,Pt,Ot;if(pt){let Ct=gi[pt];te=Ct.vertexShader,ot=Ct.fragmentShader}else{te=x.vertexShader,ot=x.fragmentShader;let Ct=o.getVertexShaderStage(x),be=o.getFragmentShaderStage(x);o.update(x,Ct,be),Pt=Ct.id,Ot=be.id}let Yt=i.getRenderTarget(),It=i.state.buffers.depth.getReversed(),oe=F.isInstancedMesh===!0,Ge=F.isBatchedMesh===!0,Kt=!!x.map,Te=!!x.matcap,Ee=!!j,pe=Ee&&j.isPMREMTexture===!0,Ye=!!x.aoMap,We=!!x.lightMap,dn=!!x.bumpMap&&x.wireframe===!1,me=!!x.normalMap,Xn=!!x.displacementMap,Ne=!!x.emissiveMap,En=!!x.metalnessMap,xn=!!x.roughnessMap,An=x.anisotropy>0,V=x.clearcoat>0,Rn=x.diffuseRoughness>0,Re=x.dispersion>0,Ie=x.retroreflectivity>0,Tt=x.iridescence>0,De=x.sheen>0,Wt=x.transmission>0,jt=An&&!!x.anisotropyMap,R=V&&!!x.clearcoatMap,v=V&&!!x.clearcoatNormalMap,q=V&&!!x.clearcoatRoughnessMap,_t=Rn&&!!x.diffuseRoughnessMap,nt=Tt&&!!x.iridescenceMap,vt=Tt&&!!x.iridescenceThicknessMap,ut=De&&!!x.sheenColorMap,at=De&&!!x.sheenRoughnessMap,et=!!x.specularMap,wt=!!x.specularColorMap,N=!!x.specularIntensityMap,ct=Wt&&!!x.transmissionMap,st=Wt&&!!x.thicknessMap,Mt=!!x.gradientMap,yt=!!x.alphaMap,St=x.alphaTest>0,Xt=!!x.alphaHash,le=!!x.extensions,gt=pi;x.toneMapped&&(Yt===null||Yt.isXRRenderTarget===!0)&&(gt=i.toneMapping);let $t=pe?j.isCompressedCubeTexture?j.image[0].mipmaps:j.mipmaps:null,ce={shaderID:pt,shaderType:x.type,shaderName:x.name,vertexShader:te,fragmentShader:ot,defines:x.defines,customVertexShaderID:Pt,customFragmentShaderID:Ot,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:it,batching:Ge,batchingColor:Ge&&F._colorsTexture!==null,instancing:oe,instancingColor:oe&&F.instanceColor!==null,instancingMorph:oe&&F.morphTexture!==null,outputColorSpace:Yt===null?i.outputColorSpace:Yt.isXRRenderTarget===!0?Yt.texture.colorSpace:Me.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Kt,matcap:Te,envMap:Ee,envMapMode:Ee&&j.mapping,envMapPMREM:pe,envMapMaxLod:pe?$t.length-1:null,envMapSize:pe?$t[0].width:null,aoMap:Ye,lightMap:We,bumpMap:dn,normalMap:me,displacementMap:Xn,emissiveMap:Ne,normalMapObjectSpace:me&&x.normalMapType===Hu,normalMapTangentSpace:me&&x.normalMapType===wl,packedNormalMap:me&&x.normalMapType===wl&&ax(x.normalMap.format),metalnessMap:En,roughnessMap:xn,anisotropy:An,anisotropyMap:jt,clearcoat:V,clearcoatMap:R,clearcoatNormalMap:v,clearcoatRoughnessMap:q,diffuseRoughness:Rn,diffuseRoughnessMap:_t,dispersion:Re,retroreflection:Ie,iridescence:Tt,iridescenceMap:nt,iridescenceThicknessMap:vt,sheen:De,sheenColorMap:ut,sheenRoughnessMap:at,specularMap:et,specularColorMap:wt,specularIntensityMap:N,transmission:Wt,transmissionMap:ct,thicknessMap:st,gradientMap:Mt,opaque:x.transparent===!1&&x.blending===cr&&x.alphaToCoverage===!1,alphaMap:yt,alphaTest:St,alphaHash:Xt,combine:x.combine,mapUv:Kt&&m(x.map.channel),aoMapUv:Ye&&m(x.aoMap.channel),lightMapUv:We&&m(x.lightMap.channel),bumpMapUv:dn&&m(x.bumpMap.channel),normalMapUv:me&&m(x.normalMap.channel),displacementMapUv:Xn&&m(x.displacementMap.channel),emissiveMapUv:Ne&&m(x.emissiveMap.channel),metalnessMapUv:En&&m(x.metalnessMap.channel),roughnessMapUv:xn&&m(x.roughnessMap.channel),anisotropyMapUv:jt&&m(x.anisotropyMap.channel),clearcoatMapUv:R&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:v&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&m(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:_t&&m(x.diffuseRoughnessMap.channel),iridescenceMapUv:nt&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:at&&m(x.sheenRoughnessMap.channel),specularMapUv:et&&m(x.specularMap.channel),specularColorMapUv:wt&&m(x.specularColorMap.channel),specularIntensityMapUv:N&&m(x.specularIntensityMap.channel),transmissionMapUv:ct&&m(x.transmissionMap.channel),thicknessMapUv:st&&m(x.thicknessMap.channel),alphaMapUv:yt&&m(x.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(me||An),vertexNormals:!!D.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!D.attributes.uv&&(Kt||yt),fog:!!G,useFog:x.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||D.attributes.normal===void 0&&me===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:It,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:Ht,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:k.filter(Ct=>Ct.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:gt,decodeVideoTexture:Kt&&x.map.isVideoTexture===!0&&Me.getTransfer(x.map.colorSpace)===Ae,decodeVideoTextureEmissive:Ne&&x.emissiveMap.isVideoTexture===!0&&Me.getTransfer(x.emissiveMap.colorSpace)===Ae,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===fi,flipSided:x.side===Sn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:le&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&x.extensions.multiDraw===!0||Ge)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ce.vertexUv1s=l.has(1),ce.vertexUv2s=l.has(2),ce.vertexUv3s=l.has(3),l.clear(),ce}function M(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let H in x.defines)w.push(H),w.push(x.defines[H]);return x.isRawShaderMaterial===!1&&(g(w,x),_(w,x),w.push(i.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function g(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapPMREM),x.push(w.envMapMaxLod),x.push(w.envMapSize),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.diffuseRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.numLightProbeGrids),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function _(x,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.diffuseRoughness&&a.enable(25),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function b(x){let w=u[x.type],H;if(w){let B=gi[w];H=id.clone(B.uniforms)}else H=x.uniforms;return H}function I(x,w){let H=f.get(w);return H!==void 0?++H.usedTimes:(H=new sx(i,w,x,s),c.push(H),f.set(w,H)),H}function A(x){if(--x.usedTimes===0){let w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),f.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function C(){o.dispose()}return{getParameters:y,getProgramCacheKey:M,getUniforms:b,acquireProgram:I,releaseProgram:A,releaseShaderCache:E,programs:c,dispose:C}}function lx(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function cx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function bd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function wd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,y,M,g,_){let b=i[t];return b===void 0?(b={id:u.id,object:u,geometry:m,material:y,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:g,group:_},i[t]=b):(b.id=u.id,b.object=u,b.geometry=m,b.material=y,b.materialVariant=a(u),b.groupOrder=M,b.renderOrder=u.renderOrder,b.z=g,b.group=_),t++,b}function l(u,m,y,M,g,_,b){b.reversedDepth===!0&&(g=-g);let I=o(u,m,y,M,g,_);y.transmission>0?n.push(I):y.transparent===!0?s.push(I):e.push(I)}function c(u,m,y,M,g,_){let b=o(u,m,y,M,g,_);y.transmission>0?n.unshift(b):y.transparent===!0?s.unshift(b):e.unshift(b)}function f(u,m){e.length>1&&e.sort(u||cx),n.length>1&&n.sort(m||bd),s.length>1&&s.sort(m||bd)}function p(){for(let u=t,m=i.length;u<m;u++){let y=i[u];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:p,sort:f}}function hx(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new wd,i.set(n,[a])):s>=r.length?(a=new wd,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function ux(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new Y,color:new de};break;case"SpotLight":e={position:new Y,direction:new Y,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Y,color:new de,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Y,skyColor:new de,groundColor:new de};break;case"RectAreaLight":e={color:new de,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return i[t.id]=e,e}}}function dx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var fx=0;function px(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function mx(i){let t=new ux,e=dx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Y);let s=new Y,r=new ke,a=new ke;function o(c){let f=0,p=0,u=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let m=0,y=0,M=0,g=0,_=0,b=0,I=0,A=0,E=0,C=0,x=0,w=0,H=0,B=0;c.sort(px);for(let k=0,G=c.length;k<G;k++){let D=c[k],K=D.color,tt=D.intensity,j=D.distance,pt=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===is?pt=D.shadow.map.texture:pt=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)f+=K.r*tt,p+=K.g*tt,u+=K.b*tt;else if(D.isLightProbe){for(let it=0;it<9;it++)n.probe[it].addScaledVector(D.sh.coefficients[it],tt);B++}else if(D.isSunLight){let it=t.get(D);if(it.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let dt=D.shadow,mt=e.get(D);mt.shadowIntensity=dt.intensity,mt.shadowBias=dt.bias,mt.shadowNormalBias=dt.normalBias,mt.shadowRadius=dt.radius,mt.shadowMapSize.copy(dt.mapSize).multiply(dt.getFrameExtents()),n.sunShadow[y]=mt,n.sunShadowMap[y]=pt;let Ht=dt.getViewportCount();for(let te=0;te<Ht;te++)n.sunShadowMatrix[M+te]=dt.getMatrix(te),n.sunShadowCascade[M+te]=dt._cascadeData[te];M+=Ht,y++}n.sun[m]=it,m++}else if(D.isDirectionalLight){let it=t.get(D);if(it.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let dt=D.shadow,mt=e.get(D);mt.shadowIntensity=dt.intensity,mt.shadowBias=dt.bias,mt.shadowNormalBias=dt.normalBias,mt.shadowRadius=dt.radius,mt.shadowMapSize=dt.mapSize,n.directionalShadow[g]=mt,n.directionalShadowMap[g]=pt,n.directionalShadowMatrix[g]=D.shadow.matrix,E++}n.directional[g]=it,g++}else if(D.isSpotLight){let it=t.get(D);it.position.setFromMatrixPosition(D.matrixWorld),it.color.copy(K).multiplyScalar(tt),it.distance=j,it.coneCos=Math.cos(D.angle),it.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),it.decay=D.decay,n.spot[b]=it;let dt=D.shadow;if(D.map&&(n.spotLightMap[w]=D.map,w++,dt.updateMatrices(D),D.castShadow&&H++),n.spotLightMatrix[b]=dt.matrix,D.castShadow){let mt=e.get(D);mt.shadowIntensity=dt.intensity,mt.shadowBias=dt.bias,mt.shadowNormalBias=dt.normalBias,mt.shadowRadius=dt.radius,mt.shadowMapSize=dt.mapSize,n.spotShadow[b]=mt,n.spotShadowMap[b]=pt,x++}b++}else if(D.isRectAreaLight){let it=t.get(D);it.color.copy(K).multiplyScalar(tt),it.halfWidth.set(D.width*.5,0,0),it.halfHeight.set(0,D.height*.5,0),n.rectArea[I]=it,I++}else if(D.isPointLight){let it=t.get(D);if(it.color.copy(D.color).multiplyScalar(D.intensity),it.distance=D.distance,it.decay=D.decay,D.castShadow){let dt=D.shadow,mt=e.get(D);mt.shadowIntensity=dt.intensity,mt.shadowBias=dt.bias,mt.shadowNormalBias=dt.normalBias,mt.shadowRadius=dt.radius,mt.shadowMapSize=dt.mapSize,mt.shadowCameraNear=dt.camera.near,mt.shadowCameraFar=dt.camera.far,n.pointShadow[_]=mt,n.pointShadowMap[_]=pt,n.pointShadowMatrix[_]=D.shadow.matrix,C++}n.point[_]=it,_++}else if(D.isHemisphereLight){let it=t.get(D);it.skyColor.copy(D.color).multiplyScalar(tt),it.groundColor.copy(D.groundColor).multiplyScalar(tt),n.hemi[A]=it,A++}}I>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Dt.LTC_FLOAT_1,n.rectAreaLTC2=Dt.LTC_FLOAT_2):(n.rectAreaLTC1=Dt.LTC_HALF_1,n.rectAreaLTC2=Dt.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=p,n.ambient[2]=u;let F=n.hash;(F.sunLength!==m||F.directionalLength!==g||F.pointLength!==_||F.spotLength!==b||F.rectAreaLength!==I||F.hemiLength!==A||F.numSunShadows!==y||F.numDirectionalShadows!==E||F.numPointShadows!==C||F.numSpotShadows!==x||F.numSpotMaps!==w||F.numLightProbes!==B)&&(n.sun.length=m,n.directional.length=g,n.spot.length=b,n.rectArea.length=I,n.point.length=_,n.hemi.length=A,n.sunShadow.length=y,n.sunShadowMap.length=y,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=C,n.pointShadowMap.length=C,n.pointShadowMatrix.length=C,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+w-H,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=H,n.numLightProbes=B,F.sunLength=m,F.directionalLength=g,F.pointLength=_,F.spotLength=b,F.rectAreaLength=I,F.hemiLength=A,F.numSunShadows=y,F.numDirectionalShadows=E,F.numPointShadows=C,F.numSpotShadows=x,F.numSpotMaps=w,F.numLightProbes=B,n.version=fx++)}function l(c,f){let p=0,u=0,m=0,y=0,M=0,g=0,_=f.matrixWorldInverse;for(let b=0,I=c.length;b<I;b++){let A=c[b];if(A.isSunLight){let E=n.sun[p];E.direction.setFromMatrixPosition(A.matrixWorld),E.direction.transformDirection(_),p++}else if(A.isDirectionalLight){let E=n.directional[u];E.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(_),u++}else if(A.isSpotLight){let E=n.spot[y];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(_),E.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(_),y++}else if(A.isRectAreaLight){let E=n.rectArea[M];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(_),a.identity(),r.copy(A.matrixWorld),r.premultiply(_),a.extractRotation(r),E.halfWidth.set(A.width*.5,0,0),E.halfHeight.set(0,A.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),M++}else if(A.isPointLight){let E=n.point[m];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(_),m++}else if(A.isHemisphereLight){let E=n.hemi[g];E.direction.setFromMatrixPosition(A.matrixWorld),E.direction.transformDirection(_),g++}}}return{setup:o,setupView:l,state:n}}function Td(i){let t=new mx(i),e=[],n=[],s=[];function r(p){f.camera=p,e.length=0,n.length=0,s.length=0}function a(p){p.isLightProbeGrid?s.push(p):e.push(p)}function o(p){n.push(p)}function l(){t.setup(e),s.sort((p,u)=>p.priority-u.priority||p.id-u.id)}function c(p){t.setupView(e,p)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function gx(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Td(i),t.set(s,[o])):r>=a.length?(o=new Td(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var _x=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,yx=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],vx=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],Ed=new ke,aa=new Y,ph=new Y;function Mx(i,t,e){let n=new Zi,s=new ie,r=new ie,a=new ze,o=new To,l=new Eo,c={},f=e.maxTextureSize,p={[ns]:Sn,[Sn]:ns,[fi]:fi},u=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:_x,fragmentShader:xx}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let y=new Pn;y.setAttribute("position",new zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Mn(y,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jr;let _=this.type;this.render=function(C,x,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;this.type===yu&&(Jt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=jr);let H=i.getRenderTarget(),B=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Ss),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let G=_!==this.type;G&&x.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(K=>K.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,K=C.length;D<K;D++){let tt=C[D],j=tt.shadow;if(j===void 0){Jt("WebGLShadowMap:",tt,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);let pt=j.getFrameExtents();s.multiply(pt),r.copy(j.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/pt.x),s.x=r.x*pt.x,j.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/pt.y),s.y=r.y*pt.y,j.mapSize.y=r.y));let it=i.state.buffers.depth.getReversed();if(j.camera._reversedDepth=it,j.map===null||G===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===lr){if(tt.isPointLight){Jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new Hn(s.x,s.y,{format:is,type:si,minFilter:vn,magFilter:vn,generateMipmaps:!1}),j.map.texture.name=tt.name+".shadowMap",j.map.depthTexture=new Li(s.x,s.y,ii),j.map.depthTexture.name=tt.name+".shadowMapDepth",j.map.depthTexture.format=Ci,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=an,j.map.depthTexture.magFilter=an}else tt.isPointLight?(j.map=new la(s.x),j.map.depthTexture=new Vr(s.x,ni)):(j.map=new Hn(s.x,s.y),j.map.depthTexture=new Li(s.x,s.y,ni)),j.map.depthTexture.name=tt.name+".shadowMap",j.map.depthTexture.format=Ci,this.type===jr?(j.map.depthTexture.compareFunction=it?eh:th,j.map.depthTexture.minFilter=vn,j.map.depthTexture.magFilter=vn):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=an,j.map.depthTexture.magFilter=an);j.camera.updateProjectionMatrix()}j.map.isWebGLCubeRenderTarget!==!0&&(j.map.width!==s.x||j.map.height!==s.y)&&j.map.setSize(s.x,s.y);let dt=j.map.isWebGLCubeRenderTarget?6:j.getViewportCount();tt.isPointLight!==!0&&j.updateMatrices(tt,w);let mt=(j.camera.layers.mask&4294967294)!==0?j.camera.layers:w.layers;for(let Ht=0;Ht<dt;Ht++){let te=j.getCamera(Ht);if(tt.isPointLight){let ot=j.camera,Pt=j.matrix,Ot=tt.distance||ot.far;Ot!==ot.far&&(ot.far=Ot,ot.updateProjectionMatrix()),aa.setFromMatrixPosition(tt.matrixWorld),ot.position.copy(aa),ph.copy(ot.position),ph.add(yx[Ht]),ot.up.copy(vx[Ht]),ot.lookAt(ph),ot.updateMatrixWorld(),Pt.makeTranslation(-aa.x,-aa.y,-aa.z),Ed.multiplyMatrices(ot.projectionMatrix,ot.matrixWorldInverse),j._frustum.setFromProjectionMatrix(Ed,ot.coordinateSystem,ot.reversedDepth)}if(j.map.isWebGLCubeRenderTarget)i.setRenderTarget(j.map,Ht),i.clear();else{Ht===0&&(i.setRenderTarget(j.map),i.clear());let ot=j.getViewport(Ht);a.set(r.x*ot.x,r.y*ot.y,r.x*ot.z,r.y*ot.w),k.viewport(a)}n=j.getFrustum(Ht),A(x,w,te,tt,mt,this.type)}j.isPointLightShadow!==!0&&this.type===lr&&b(j,w),j.needsUpdate=!1}_=this.type,g.needsUpdate=!1,i.setRenderTarget(H,B,F)};function b(C,x){let w=t.update(M);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null?C.mapPass=new Hn(s.x,s.y,{format:is,type:si}):(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)&&C.mapPass.setSize(C.map.width,C.map.height),u.uniforms.shadow_pass.value=C.map.depthTexture,u.uniforms.resolution.value.set(C.map.width,C.map.height),u.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(x,null,w,u,M,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value.set(C.map.width,C.map.height),m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(x,null,w,m,M,null)}function I(C,x,w,H){let B=null,F=w.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(F!==void 0)B=F;else if(B=w.isPointLight===!0?l:o,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let k=B.uuid,G=x.uuid,D=c[k];D===void 0&&(D={},c[k]=D);let K=D[G];K===void 0&&(K=B.clone(),D[G]=K,x.addEventListener("dispose",E)),B=K}if(B.visible=x.visible,B.wireframe=x.wireframe,H===lr?B.side=x.shadowSide!==null?x.shadowSide:x.side:B.side=x.shadowSide!==null?x.shadowSide:p[x.side],B.alphaMap=x.alphaMap,B.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,B.map=x.map,B.clipShadows=x.clipShadows,B.clippingPlanes=x.clippingPlanes,B.clipIntersection=x.clipIntersection,B.displacementMap=x.displacementMap,B.displacementScale=x.displacementScale,B.displacementBias=x.displacementBias,B.wireframeLinewidth=x.wireframeLinewidth,B.linewidth=x.linewidth,w.isPointLight===!0&&B.isMeshDistanceMaterial===!0){let k=i.properties.get(B);k.light=w}return B}function A(C,x,w,H,B,F){if(C.visible===!1)return;if(C.layers.test(B)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&F===lr)&&(!C.frustumCulled||C.intersectsFrustum(n))){C.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,C.matrixWorld);let D=t.update(C),K=C.material;if(Array.isArray(K)){let tt=D.groups;for(let j=0,pt=tt.length;j<pt;j++){let it=tt[j],dt=K[it.materialIndex];if(dt&&dt.visible){let mt=I(C,dt,H,F);C.onBeforeShadow(i,C,x,w,D,mt,it),i.renderBufferDirect(w,null,D,mt,C,it),C.onAfterShadow(i,C,x,w,D,mt,it)}}}else if(K.visible){let tt=I(C,K,H,F);C.onBeforeShadow(i,C,x,w,D,tt,null),i.renderBufferDirect(w,null,D,tt,C,null),C.onAfterShadow(i,C,x,w,D,tt,null)}}let G=C.children;for(let D=0,K=G.length;D<K;D++)A(G[D],x,w,H,B,F)}function E(C){C.target.removeEventListener("dispose",E);for(let w in c){let H=c[w],B=C.target.uuid;B in H&&(H[B].dispose(),delete H[B])}}}function Sx(i,t){function e(){let N=!1,ct=new ze,st=null,Mt=new ze(0,0,0,0);return{setMask:function(yt){st!==yt&&!N&&(i.colorMask(yt,yt,yt,yt),st=yt)},setLocked:function(yt){N=yt},setClear:function(yt,St,Xt,le,gt){gt===!0&&(yt*=le,St*=le,Xt*=le),ct.set(yt,St,Xt,le),Mt.equals(ct)===!1&&(i.clearColor(yt,St,Xt,le),Mt.copy(ct))},reset:function(){N=!1,st=null,Mt.set(-1,0,0,0)}}}function n(){let N=!1,ct=!1,st=null,Mt=null,yt=null;return{setReversed:function(St){if(ct!==St){let Xt=t.get("EXT_clip_control");St?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT),ct=St;let le=yt;yt=null,this.setClear(le)}},getReversed:function(){return ct},setTest:function(St){St?It(i.DEPTH_TEST):oe(i.DEPTH_TEST)},setMask:function(St){st!==St&&!N&&(i.depthMask(St),st=St)},setFunc:function(St){if(ct&&(St=Qu[St]),Mt!==St){switch(St){case so:i.depthFunc(i.NEVER);break;case ro:i.depthFunc(i.ALWAYS);break;case ao:i.depthFunc(i.LESS);break;case js:i.depthFunc(i.LEQUAL);break;case oo:i.depthFunc(i.EQUAL);break;case lo:i.depthFunc(i.GEQUAL);break;case co:i.depthFunc(i.GREATER);break;case ho:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Mt=St}},setLocked:function(St){N=St},setClear:function(St){yt!==St&&(yt=St,ct&&(St=1-St),i.clearDepth(St))},reset:function(){N=!1,st=null,Mt=null,yt=null,ct=!1}}}function s(){let N=!1,ct=null,st=null,Mt=null,yt=null,St=null,Xt=null,le=null,gt=null;return{setTest:function($t){N||($t?It(i.STENCIL_TEST):oe(i.STENCIL_TEST))},setMask:function($t){ct!==$t&&!N&&(i.stencilMask($t),ct=$t)},setFunc:function($t,ce,Ct){(st!==$t||Mt!==ce||yt!==Ct)&&(i.stencilFunc($t,ce,Ct),st=$t,Mt=ce,yt=Ct)},setOp:function($t,ce,Ct){(St!==$t||Xt!==ce||le!==Ct)&&(i.stencilOp($t,ce,Ct),St=$t,Xt=ce,le=Ct)},setLocked:function($t){N=$t},setClear:function($t){gt!==$t&&(i.clearStencil($t),gt=$t)},reset:function(){N=!1,ct=null,st=null,Mt=null,yt=null,St=null,Xt=null,le=null,gt=null}}}let r=new e,a=new n,o=new s,l={},c=new WeakMap,f={},p={},u={},m=new WeakMap,y=[],M=null,g=!1,_=null,b=null,I=null,A=null,E=null,C=null,x=null,w=new de(0,0,0),H=0,B=!1,F=null,k=null,G=null,D=null,K=null,tt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,pt=0,it=i.getParameter(i.VERSION);it.indexOf("WebGL")!==-1?(pt=parseFloat(/^WebGL (\d)/.exec(it)[1]),j=pt>=1):it.indexOf("OpenGL ES")!==-1&&(pt=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),j=pt>=2);let dt=null,mt={},Ht=i.getParameter(i.SCISSOR_BOX),te=i.getParameter(i.VIEWPORT),ot=new ze().fromArray(Ht),Pt=new ze().fromArray(te);function Ot(N,ct,st,Mt){let yt=new Uint8Array(4),St=i.createTexture();i.bindTexture(N,St),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<st;Xt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ct,0,i.RGBA,1,1,Mt,0,i.RGBA,i.UNSIGNED_BYTE,yt):i.texImage2D(ct+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,yt);return St}let Yt={};Yt[i.TEXTURE_2D]=Ot(i.TEXTURE_2D,i.TEXTURE_2D,1),Yt[i.TEXTURE_CUBE_MAP]=Ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Yt[i.TEXTURE_2D_ARRAY]=Ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Yt[i.TEXTURE_3D]=Ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),It(i.DEPTH_TEST),a.setFunc(js),dn(!1),me(Lc),It(i.CULL_FACE),Ye(Ss);function It(N){f[N]!==!0&&(i.enable(N),f[N]=!0)}function oe(N){f[N]!==!1&&(i.disable(N),f[N]=!1)}function Ge(N,ct){return u[N]!==ct?(i.bindFramebuffer(N,ct),u[N]=ct,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ct),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ct),!0):!1}function Kt(N,ct){let st=y,Mt=!1;if(N){st=m.get(ct),st===void 0&&(st=[],m.set(ct,st));let yt=N.textures;if(st.length!==yt.length||st[0]!==i.COLOR_ATTACHMENT0){for(let St=0,Xt=yt.length;St<Xt;St++)st[St]=i.COLOR_ATTACHMENT0+St;st.length=yt.length,Mt=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,Mt=!0);Mt&&i.drawBuffers(st)}function Te(N){return M!==N?(i.useProgram(N),M=N,!0):!1}let Ee={[bs]:i.FUNC_ADD,[Mu]:i.FUNC_SUBTRACT,[Su]:i.FUNC_REVERSE_SUBTRACT};Ee[bu]=i.MIN,Ee[wu]=i.MAX;let pe={[Tu]:i.ZERO,[Eu]:i.ONE,[Au]:i.SRC_COLOR,[Fc]:i.SRC_ALPHA,[Du]:i.SRC_ALPHA_SATURATE,[Iu]:i.DST_COLOR,[Cu]:i.DST_ALPHA,[Ru]:i.ONE_MINUS_SRC_COLOR,[Oc]:i.ONE_MINUS_SRC_ALPHA,[Lu]:i.ONE_MINUS_DST_COLOR,[Pu]:i.ONE_MINUS_DST_ALPHA,[Nu]:i.CONSTANT_COLOR,[Uu]:i.ONE_MINUS_CONSTANT_COLOR,[Fu]:i.CONSTANT_ALPHA,[Ou]:i.ONE_MINUS_CONSTANT_ALPHA};function Ye(N,ct,st,Mt,yt,St,Xt,le,gt,$t){if(N===Ss){g===!0&&(oe(i.BLEND),g=!1);return}if(g===!1&&(It(i.BLEND),g=!0),N!==vu){if(N!==_||$t!==B){if((b!==bs||E!==bs)&&(i.blendEquation(i.FUNC_ADD),b=bs,E=bs),$t)switch(N){case cr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dc:i.blendFunc(i.ONE,i.ONE);break;case Nc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Uc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ne("WebGLState: Invalid blending: ",N);break}else switch(N){case cr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Nc:ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Uc:ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ne("WebGLState: Invalid blending: ",N);break}I=null,A=null,C=null,x=null,w.set(0,0,0),H=0,_=N,B=$t}return}yt=yt||ct,St=St||st,Xt=Xt||Mt,(ct!==b||yt!==E)&&(i.blendEquationSeparate(Ee[ct],Ee[yt]),b=ct,E=yt),(st!==I||Mt!==A||St!==C||Xt!==x)&&(i.blendFuncSeparate(pe[st],pe[Mt],pe[St],pe[Xt]),I=st,A=Mt,C=St,x=Xt),(le.equals(w)===!1||gt!==H)&&(i.blendColor(le.r,le.g,le.b,gt),w.copy(le),H=gt),_=N,B=!1}function We(N,ct){N.side===fi?oe(i.CULL_FACE):It(i.CULL_FACE);let st=N.side===Sn;ct&&(st=!st),dn(st),N.blending===cr&&N.transparent===!1?Ye(Ss):Ye(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let Mt=N.stencilWrite;o.setTest(Mt),Mt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ne(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?It(i.SAMPLE_ALPHA_TO_COVERAGE):oe(i.SAMPLE_ALPHA_TO_COVERAGE)}function dn(N){F!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),F=N)}function me(N){N!==_u?(It(i.CULL_FACE),N!==k&&(N===Lc?i.cullFace(i.BACK):N===xu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):oe(i.CULL_FACE),k=N}function Xn(N){N!==G&&(j&&i.lineWidth(N),G=N)}function Ne(N,ct,st){N?(It(i.POLYGON_OFFSET_FILL),(D!==ct||K!==st)&&(D=ct,K=st,a.getReversed()&&(ct=-ct,st=-st),i.polygonOffset(ct,st))):oe(i.POLYGON_OFFSET_FILL)}function En(N){N?It(i.SCISSOR_TEST):oe(i.SCISSOR_TEST)}function xn(N){N===void 0&&(N=i.TEXTURE0+tt-1),dt!==N&&(i.activeTexture(N),dt=N)}function An(N,ct,st){st===void 0&&(dt===null?st=i.TEXTURE0+tt-1:st=dt);let Mt=mt[st];Mt===void 0&&(Mt={type:void 0,texture:void 0},mt[st]=Mt),(Mt.type!==N||Mt.texture!==ct)&&(dt!==st&&(i.activeTexture(st),dt=st),i.bindTexture(N,ct||Yt[N]),Mt.type=N,Mt.texture=ct)}function V(){let N=mt[dt];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Rn(){try{i.compressedTexImage2D(...arguments)}catch(N){ne("WebGLState:",N)}}function Re(){try{i.compressedTexImage3D(...arguments)}catch(N){ne("WebGLState:",N)}}function Ie(){try{i.texSubImage2D(...arguments)}catch(N){ne("WebGLState:",N)}}function Tt(){try{i.texSubImage3D(...arguments)}catch(N){ne("WebGLState:",N)}}function De(){try{i.compressedTexSubImage2D(...arguments)}catch(N){ne("WebGLState:",N)}}function Wt(){try{i.compressedTexSubImage3D(...arguments)}catch(N){ne("WebGLState:",N)}}function jt(){try{i.texStorage2D(...arguments)}catch(N){ne("WebGLState:",N)}}function R(){try{i.texStorage3D(...arguments)}catch(N){ne("WebGLState:",N)}}function v(){try{i.texImage2D(...arguments)}catch(N){ne("WebGLState:",N)}}function q(){try{i.texImage3D(...arguments)}catch(N){ne("WebGLState:",N)}}function _t(N){return p[N]!==void 0?p[N]:i.getParameter(N)}function nt(N,ct){p[N]!==ct&&(i.pixelStorei(N,ct),p[N]=ct)}function vt(N){ot.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),ot.copy(N))}function ut(N){Pt.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Pt.copy(N))}function at(N,ct){let st=c.get(ct);st===void 0&&(st=new WeakMap,c.set(ct,st));let Mt=st.get(N);Mt===void 0&&(Mt=i.getUniformBlockIndex(ct,N.name),i.uniformBlockBinding(ct,Mt,Mt),st.set(N,Mt))}function et(N,ct,st){let yt=c.get(ct).get(N);l[yt]!==st&&(i.bindBufferBase(i.UNIFORM_BUFFER,yt,st),l[yt]=st)}function wt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},p={},dt=null,mt={},u={},l={},m=new WeakMap,y=[],M=null,g=!1,_=null,b=null,I=null,A=null,E=null,C=null,x=null,w=new de(0,0,0),H=0,B=!1,F=null,k=null,G=null,D=null,K=null,ot.set(0,0,i.canvas.width,i.canvas.height),Pt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:It,disable:oe,bindFramebuffer:Ge,drawBuffers:Kt,useProgram:Te,setBlending:Ye,setMaterial:We,setFlipSided:dn,setCullFace:me,setLineWidth:Xn,setPolygonOffset:Ne,setScissorTest:En,activeTexture:xn,bindTexture:An,unbindTexture:V,compressedTexImage2D:Rn,compressedTexImage3D:Re,texImage2D:v,texImage3D:q,pixelStorei:nt,getParameter:_t,updateUBOMapping:at,uniformBlockBinding:et,texStorage2D:jt,texStorage3D:R,texSubImage2D:Ie,texSubImage3D:Tt,compressedTexSubImage2D:De,compressedTexSubImage3D:Wt,scissor:vt,viewport:ut,reset:wt}}function bx(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ie,f=new WeakMap,p=new Set,u,m=new WeakMap,y=new Set,M=new FinalizationRegistry(R=>y.delete(R)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,v){return g?new OffscreenCanvas(R,v):Nr("canvas")}function b(R,v,q){let _t=1,nt=jt(R);if((nt.width>q||nt.height>q)&&(_t=q/Math.max(nt.width,nt.height)),_t<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let vt=Math.floor(_t*nt.width),ut=Math.floor(_t*nt.height);u===void 0&&(u=_(vt,ut));let at=v?_(vt,ut):u;return at.width=vt,at.height=ut,at.getContext("2d").drawImage(R,0,0,vt,ut),Jt("WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+vt+"x"+ut+")."),at}else return"data"in R&&Jt("WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),R;return R}function I(R){return R.generateMipmaps}function A(R){i.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function C(R,v,q,_t,nt,vt=!1){if(R!==null){if(i[R]!==void 0)return i[R];Jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ut;_t&&(ut=t.get("EXT_texture_norm16"),ut||Jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let at=v;if(v===i.RED&&(q===i.FLOAT&&(at=i.R32F),q===i.HALF_FLOAT&&(at=i.R16F),q===i.UNSIGNED_BYTE&&(at=i.R8),q===i.UNSIGNED_SHORT&&ut&&(at=ut.R16_EXT),q===i.SHORT&&ut&&(at=ut.R16_SNORM_EXT)),v===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(at=i.R8UI),q===i.UNSIGNED_SHORT&&(at=i.R16UI),q===i.UNSIGNED_INT&&(at=i.R32UI),q===i.BYTE&&(at=i.R8I),q===i.SHORT&&(at=i.R16I),q===i.INT&&(at=i.R32I)),v===i.RG&&(q===i.FLOAT&&(at=i.RG32F),q===i.HALF_FLOAT&&(at=i.RG16F),q===i.UNSIGNED_BYTE&&(at=i.RG8),q===i.UNSIGNED_SHORT&&ut&&(at=ut.RG16_EXT),q===i.SHORT&&ut&&(at=ut.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(at=i.RG8UI),q===i.UNSIGNED_SHORT&&(at=i.RG16UI),q===i.UNSIGNED_INT&&(at=i.RG32UI),q===i.BYTE&&(at=i.RG8I),q===i.SHORT&&(at=i.RG16I),q===i.INT&&(at=i.RG32I)),v===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(at=i.RGB8UI),q===i.UNSIGNED_SHORT&&(at=i.RGB16UI),q===i.UNSIGNED_INT&&(at=i.RGB32UI),q===i.BYTE&&(at=i.RGB8I),q===i.SHORT&&(at=i.RGB16I),q===i.INT&&(at=i.RGB32I)),v===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(at=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(at=i.RGBA16UI),q===i.UNSIGNED_INT&&(at=i.RGBA32UI),q===i.BYTE&&(at=i.RGBA8I),q===i.SHORT&&(at=i.RGBA16I),q===i.INT&&(at=i.RGBA32I)),v===i.RGB&&(q===i.UNSIGNED_SHORT&&ut&&(at=ut.RGB16_EXT),q===i.SHORT&&ut&&(at=ut.RGB16_SNORM_EXT),q===i.UNSIGNED_INT_5_9_9_9_REV&&(at=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(at=i.R11F_G11F_B10F)),v===i.RGBA){let et=vt?Dr:Me.getTransfer(nt);q===i.FLOAT&&(at=i.RGBA32F),q===i.HALF_FLOAT&&(at=i.RGBA16F),q===i.UNSIGNED_BYTE&&(at=et===Ae?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT&&ut&&(at=ut.RGBA16_EXT),q===i.SHORT&&ut&&(at=ut.RGBA16_SNORM_EXT),q===i.UNSIGNED_SHORT_4_4_4_4&&(at=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(at=i.RGB5_A1)}return(at===i.R16F||at===i.R32F||at===i.RG16F||at===i.RG32F||at===i.RGBA16F||at===i.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function x(R,v){let q;return R?v===null||v===ni||v===Ts?q=i.DEPTH24_STENCIL8:v===ii?q=i.DEPTH32F_STENCIL8:v===ur&&(q=i.DEPTH24_STENCIL8,Jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ni||v===Ts?q=i.DEPTH_COMPONENT24:v===ii?q=i.DEPTH_COMPONENT32F:v===ur&&(q=i.DEPTH_COMPONENT16),q}function w(R,v){return I(R)===!0||R.isFramebufferTexture&&R.minFilter!==an&&R.minFilter!==vn?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function H(R){let v=new WeakRef(R);n.get(R).__ref=v,y.add(v),M.register(R,v,v)}function B(R){let v=n.get(R).__ref;v!==void 0&&(y.delete(v),M.unregister(v))}function F(R){G(R.target)}function k(R){D(R.target)}function G(R){R.removeEventListener("dispose",F),B(R),tt(R),R.isVideoTexture&&f.delete(R),R.isHTMLTexture&&p.delete(R)}function D(R){R.removeEventListener("dispose",k),B(R),pt(R)}function K(){for(let R of y){let v=R.deref();v!==void 0&&(v.isRenderTarget===!0?D(v):G(v))}y.clear(),p.clear()}function tt(R){let v=n.get(R);if(v.__webglInit===void 0)return;let q=R.source,_t=m.get(q);if(_t){let nt=_t[v.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&j(R),Object.keys(_t).length===0&&m.delete(q)}n.remove(R)}function j(R){let v=n.get(R);i.deleteTexture(v.__webglTexture);let q=R.source,_t=m.get(q);delete _t[v.__cacheKey],a.memory.textures--}function pt(R){let v=n.get(R);v.__depthDisposeCallback&&v.__depthDisposeCallback();let q=R.depthTexture;if(q&&q.renderTarget===R&&G(q),R.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(v.__webglFramebuffer[nt]))for(let vt=0;vt<v.__webglFramebuffer[nt].length;vt++)i.deleteFramebuffer(v.__webglFramebuffer[nt][vt]);else i.deleteFramebuffer(v.__webglFramebuffer[nt]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[nt])}else{if(Array.isArray(v.__webglFramebuffer))for(let nt=0;nt<v.__webglFramebuffer.length;nt++)i.deleteFramebuffer(v.__webglFramebuffer[nt]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let nt=0;nt<v.__webglColorRenderbuffer.length;nt++)v.__webglColorRenderbuffer[nt]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[nt]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let _t=R.textures;for(let nt=0,vt=_t.length;nt<vt;nt++){let ut=n.get(_t[nt]);ut.__webglTexture&&(i.deleteTexture(ut.__webglTexture),a.memory.textures--),n.remove(_t[nt])}n.remove(R)}let it=0;function dt(){it=0}function mt(){return it}function Ht(R){it=R}function te(){let R=it;return R>=s.maxTextures&&Jt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),it+=1,R}function ot(R){let v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.mipmapsAutoUpdate),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function Pt(R,v){let q=n.get(R);if(R.isVideoTexture&&De(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&q.__version!==R.version){let _t=R.image;if(_t===null)Jt("WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)Jt("WebGLRenderer: Texture marked for update but image is incomplete");else{We(q,R,v);return}}else R.isExternalTexture&&(q.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+v)}function Ot(R,v){let q=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&q.__version!==R.version){We(q,R,v);return}else R.isExternalTexture&&(q.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+v)}function Yt(R,v){let q=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&q.__version!==R.version){We(q,R,v);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+v)}function It(R,v){let q=n.get(R);if(R.version>0&&q.__version!==R.version){dn(q,R,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+v)}let oe={[uo]:i.REPEAT,[hi]:i.CLAMP_TO_EDGE,[fo]:i.MIRRORED_REPEAT},Ge={[an]:i.NEAREST,[zu]:i.NEAREST_MIPMAP_NEAREST,[Qr]:i.NEAREST_MIPMAP_LINEAR,[vn]:i.LINEAR,[Vo]:i.LINEAR_MIPMAP_NEAREST,[Di]:i.LINEAR_MIPMAP_LINEAR},Kt={[Wu]:i.NEVER,[nh]:i.ALWAYS,[Xu]:i.LESS,[th]:i.LEQUAL,[$u]:i.EQUAL,[eh]:i.GEQUAL,[qu]:i.GREATER,[Yu]:i.NOTEQUAL};function Te(R,v){if(v.type===ii&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===vn||v.magFilter===Vo||v.magFilter===Qr||v.magFilter===Di||v.minFilter===vn||v.minFilter===Vo||v.minFilter===Qr||v.minFilter===Di)&&Jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,oe[v.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,oe[v.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,oe[v.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Ge[v.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Ge[v.minFilter]),v.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Kt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===an||v.minFilter!==Qr&&v.minFilter!==Di||v.type===ii&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Ee(R,v){let q=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",F),H(v));let _t=v.source,nt=m.get(_t);nt===void 0&&(nt={},m.set(_t,nt));let vt=ot(v);if(vt!==R.__cacheKey){nt[vt]===void 0&&(nt[vt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,q=!0),nt[vt].usedTimes++;let ut=nt[R.__cacheKey];ut!==void 0&&(nt[R.__cacheKey].usedTimes--,ut.usedTimes===0&&j(v)),R.__cacheKey=vt,R.__webglTexture=nt[vt].texture}return q}function pe(R,v,q){return Math.floor(Math.floor(R/q)/v)}function Ye(R,v,q,_t){let vt=R.updateRanges;if(vt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,q,_t,v.data);else{vt.sort((N,ct)=>N.start-ct.start);let ut=0;for(let N=1;N<vt.length;N++){let ct=vt[ut],st=vt[N],Mt=ct.start+ct.count,yt=pe(st.start,v.width,4),St=pe(ct.start,v.width,4);st.start<=Mt+1&&yt===St&&pe(st.start+st.count-1,v.width,4)===yt?ct.count=Math.max(ct.count,st.start+st.count-ct.start):(++ut,vt[ut]=st)}vt.length=ut+1;let at=e.getParameter(i.UNPACK_ROW_LENGTH),et=e.getParameter(i.UNPACK_SKIP_PIXELS),wt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let N=0,ct=vt.length;N<ct;N++){let st=vt[N],Mt=Math.floor(st.start/4),yt=Math.ceil(st.count/4),St=Mt%v.width,Xt=Math.floor(Mt/v.width),le=yt,gt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,St),e.pixelStorei(i.UNPACK_SKIP_ROWS,Xt),e.texSubImage2D(i.TEXTURE_2D,0,St,Xt,le,gt,q,_t,v.data)}R.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,at),e.pixelStorei(i.UNPACK_SKIP_PIXELS,et),e.pixelStorei(i.UNPACK_SKIP_ROWS,wt)}}function We(R,v,q){let _t=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(_t=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(_t=i.TEXTURE_3D);let nt=Ee(R,v),vt=v.source;e.bindTexture(_t,R.__webglTexture,i.TEXTURE0+q);let ut=n.get(vt);if(vt.version!==ut.__version||nt===!0){if(e.activeTexture(i.TEXTURE0+q),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let gt=Me.getPrimaries(Me.workingColorSpace),$t=v.colorSpace===Ui?null:Me.getPrimaries(v.colorSpace),ce=v.colorSpace===Ui||gt===$t?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce)}e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let et=b(v.image,!1,s.maxTextureSize);et=Wt(v,et);let wt=r.convert(v.format,v.colorSpace),N=r.convert(v.type),ct=C(v.internalFormat,wt,N,v.normalized,v.colorSpace,v.isVideoTexture);Te(_t,v);let st,Mt=v.mipmaps,yt=v.isVideoTexture!==!0,St=ut.__version===void 0||nt===!0,Xt=vt.dataReady,le=w(v,et);if(v.isDepthTexture)ct=x(v.format===Ni,v.type),St&&(yt?e.texStorage2D(i.TEXTURE_2D,1,ct,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,ct,et.width,et.height,0,wt,N,null));else if(v.isDataTexture)if(Mt.length>0){yt&&St&&e.texStorage2D(i.TEXTURE_2D,le,ct,Mt[0].width,Mt[0].height);for(let gt=0,$t=Mt.length;gt<$t;gt++)st=Mt[gt],yt?Xt&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,st.width,st.height,wt,N,st.data):e.texImage2D(i.TEXTURE_2D,gt,ct,st.width,st.height,0,wt,N,st.data);v.generateMipmaps=!1}else yt?(St&&e.texStorage2D(i.TEXTURE_2D,le,ct,et.width,et.height),Xt&&Ye(v,et,wt,N)):e.texImage2D(i.TEXTURE_2D,0,ct,et.width,et.height,0,wt,N,et.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){yt&&St&&e.texStorage3D(i.TEXTURE_2D_ARRAY,le,ct,Mt[0].width,Mt[0].height,et.depth);for(let gt=0,$t=Mt.length;gt<$t;gt++)if(st=Mt[gt],v.format!==ri)if(wt!==null)if(yt){if(Xt)if(v.layerUpdates.size>0){let ce=dh(st.width,st.height,v.format,v.type);for(let Ct of v.layerUpdates){let be=st.data.subarray(Ct*ce/st.data.BYTES_PER_ELEMENT,(Ct+1)*ce/st.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,Ct,st.width,st.height,1,wt,be)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,st.width,st.height,et.depth,wt,st.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,gt,ct,st.width,st.height,et.depth,0,st.data,0,0);else Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else yt?Xt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,st.width,st.height,et.depth,wt,N,st.data):e.texImage3D(i.TEXTURE_2D_ARRAY,gt,ct,st.width,st.height,et.depth,0,wt,N,st.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{yt&&St&&e.texStorage2D(i.TEXTURE_2D,le,ct,Mt[0].width,Mt[0].height);for(let gt=0,$t=Mt.length;gt<$t;gt++)st=Mt[gt],v.format!==ri?wt!==null?yt?Xt&&e.compressedTexSubImage2D(i.TEXTURE_2D,gt,0,0,st.width,st.height,wt,st.data):e.compressedTexImage2D(i.TEXTURE_2D,gt,ct,st.width,st.height,0,st.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):yt?Xt&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,st.width,st.height,wt,N,st.data):e.texImage2D(i.TEXTURE_2D,gt,ct,st.width,st.height,0,wt,N,st.data)}else if(v.isDataArrayTexture)if(yt){if(St&&e.texStorage3D(i.TEXTURE_2D_ARRAY,le,ct,et.width,et.height,et.depth),Xt)if(v.layerUpdates.size>0){let gt=dh(et.width,et.height,v.format,v.type);for(let $t of v.layerUpdates){let ce=et.data.subarray($t*gt/et.data.BYTES_PER_ELEMENT,($t+1)*gt/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$t,et.width,et.height,1,wt,N,ce)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,wt,N,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ct,et.width,et.height,et.depth,0,wt,N,et.data);else if(v.isData3DTexture)yt?(St&&e.texStorage3D(i.TEXTURE_3D,le,ct,et.width,et.height,et.depth),Xt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,wt,N,et.data)):e.texImage3D(i.TEXTURE_3D,0,ct,et.width,et.height,et.depth,0,wt,N,et.data);else if(v.isFramebufferTexture){if(St)if(yt)e.texStorage2D(i.TEXTURE_2D,le,ct,et.width,et.height);else{let gt=et.width,$t=et.height;for(let ce=0;ce<le;ce++)e.texImage2D(i.TEXTURE_2D,ce,ct,gt,$t,0,wt,N,null),gt>>=1,$t>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let gt=i.canvas;if(gt.hasAttribute("layoutsubtree")||gt.setAttribute("layoutsubtree","true"),et.parentNode!==gt){gt.appendChild(et),p.add(v),gt.onpaint=$t=>{let ce=$t.changedElements;for(let Ct of p)ce.includes(Ct.image)&&(Ct.needsUpdate=!0)},gt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,et);else{let ce=i.RGBA,Ct=i.RGBA,be=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ce,Ct,be,et)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Mt.length>0){if(yt&&St){let gt=jt(Mt[0]);e.texStorage2D(i.TEXTURE_2D,le,ct,gt.width,gt.height)}for(let gt=0,$t=Mt.length;gt<$t;gt++)st=Mt[gt],yt?Xt&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,wt,N,st):e.texImage2D(i.TEXTURE_2D,gt,ct,wt,N,st);v.generateMipmaps=!1}else if(yt){if(St){let gt=jt(et);e.texStorage2D(i.TEXTURE_2D,le,ct,gt.width,gt.height)}Xt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,wt,N,et)}else e.texImage2D(i.TEXTURE_2D,0,ct,wt,N,et);I(v)&&v.mipmapsAutoUpdate===!0&&A(_t),ut.__version=vt.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function dn(R,v,q){if(v.image.length!==6)return;let _t=Ee(R,v),nt=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+q);let vt=n.get(nt);if(nt.version!==vt.__version||_t===!0){e.activeTexture(i.TEXTURE0+q);let ut=Me.getPrimaries(Me.workingColorSpace),at=v.colorSpace===Ui?null:Me.getPrimaries(v.colorSpace),et=v.colorSpace===Ui||ut===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let wt=v.isCompressedTexture||v.image[0].isCompressedTexture,N=v.image[0]&&v.image[0].isDataTexture,ct=[];for(let Ct=0;Ct<6;Ct++)!wt&&!N?ct[Ct]=b(v.image[Ct],!0,s.maxCubemapSize):ct[Ct]=N?v.image[Ct].image:v.image[Ct],ct[Ct]=Wt(v,ct[Ct]);let st=ct[0],Mt=r.convert(v.format,v.colorSpace),yt=r.convert(v.type),St=C(v.internalFormat,Mt,yt,v.normalized,v.colorSpace),Xt=v.isVideoTexture!==!0,le=vt.__version===void 0||_t===!0,gt=nt.dataReady,$t=w(v,st);Te(i.TEXTURE_CUBE_MAP,v);let ce;if(v.isDepthTexture){if(St=x(v.format===Ni,v.type),le)if(Xt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,St,st.width,st.height);else for(let Ct=0;Ct<6;Ct++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,St,st.width,st.height,0,Mt,yt,null)}else if(wt){Xt&&le&&e.texStorage2D(i.TEXTURE_CUBE_MAP,$t,St,st.width,st.height);for(let Ct=0;Ct<6;Ct++){ce=ct[Ct].mipmaps;for(let be=0;be<ce.length;be++){let He=ce[be];v.format!==ri?Mt!==null?Xt?gt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,be,0,0,He.width,He.height,Mt,He.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,be,St,He.width,He.height,0,He.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,be,0,0,He.width,He.height,Mt,yt,He.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,be,St,He.width,He.height,0,Mt,yt,He.data)}}}else{if(ce=v.mipmaps,Xt&&le){ce.length>0&&$t++;let Ct=jt(ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,$t,St,Ct.width,Ct.height)}for(let Ct=0;Ct<6;Ct++)if(N){Xt?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,0,0,ct[Ct].width,ct[Ct].height,Mt,yt,ct[Ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,St,ct[Ct].width,ct[Ct].height,0,Mt,yt,ct[Ct].data);for(let be=0;be<ce.length;be++){let Nn=ce[be].image[Ct].image;Xt?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,be+1,0,0,Nn.width,Nn.height,Mt,yt,Nn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,be+1,St,Nn.width,Nn.height,0,Mt,yt,Nn.data)}}else{Xt?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,0,0,Mt,yt,ct[Ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,St,Mt,yt,ct[Ct]);for(let be=0;be<ce.length;be++){let He=ce[be];Xt?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,be+1,0,0,Mt,yt,He.image[Ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,be+1,St,Mt,yt,He.image[Ct])}}}I(v)&&v.mipmapsAutoUpdate===!0&&A(i.TEXTURE_CUBE_MAP),vt.__version=nt.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function me(R,v,q,_t,nt,vt){let ut=r.convert(q.format,q.colorSpace),at=r.convert(q.type),et=C(q.internalFormat,ut,at,q.normalized,q.colorSpace),wt=n.get(v),N=n.get(q);if(N.__renderTarget=v,!wt.__hasExternalTextures){let ct=Math.max(1,v.width>>vt),st=Math.max(1,v.height>>vt);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,vt,et,ct,st,v.depth,0,ut,at,null):e.texImage2D(nt,vt,et,ct,st,0,ut,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Tt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_t,nt,N.__webglTexture,0,Ie(v)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,_t,nt,N.__webglTexture,vt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Xn(R,v,q){if(i.bindRenderbuffer(i.RENDERBUFFER,R),v.depthBuffer){let _t=v.depthTexture,nt=_t&&_t.isDepthTexture?_t.type:null,vt=x(v.stencilBuffer,nt),ut=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Tt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie(v),vt,v.width,v.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie(v),vt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,vt,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,R)}else{let _t=v.textures;for(let nt=0;nt<_t.length;nt++){let vt=_t[nt],ut=r.convert(vt.format,vt.colorSpace),at=r.convert(vt.type),et=C(vt.internalFormat,ut,at,vt.normalized,vt.colorSpace);Tt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie(v),et,v.width,v.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie(v),et,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,et,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ne(R,v,q){let _t=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let nt=n.get(v.depthTexture);nt.__renderTarget=v;let vt=_t?v.depthTexture.image[0]:v.depthTexture.image;(!nt.__webglTexture||vt.width!==v.width||vt.height!==v.height)&&(vt.width=v.width,vt.height=v.height,v.depthTexture.needsUpdate=!0),_t?It(v.depthTexture,0):Pt(v.depthTexture,0);let ut=nt.__webglTexture,at=Ie(v),et=_t?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,wt=v.depthTexture.format===Ni?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Ci)Tt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,wt,et,ut,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,wt,et,ut,0);else if(v.depthTexture.format===Ni)Tt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,wt,et,ut,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,wt,et,ut,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function En(R){let v=n.get(R),q=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){let _t=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),_t){let nt=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,_t.removeEventListener("dispose",nt)};_t.addEventListener("dispose",nt),v.__depthDisposeCallback=nt}v.__boundDepthTexture=_t}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(q)for(let _t=0;_t<6;_t++)Ne(v.__webglFramebuffer[_t],R,_t);else R.texture.mipmaps.length>0?Ne(v.__webglFramebuffer[0],R,0):Ne(v.__webglFramebuffer,R,0);else if(q){v.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[_t]),v.__webglDepthbuffer[_t]===void 0)v.__webglDepthbuffer[_t]=i.createRenderbuffer(),Xn(v.__webglDepthbuffer[_t],R,!1);else{let nt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=v.__webglDepthbuffer[_t];i.bindRenderbuffer(i.RENDERBUFFER,vt),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,vt)}}else if(R.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Xn(v.__webglDepthbuffer,R,!1);else{let nt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,vt),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,vt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function xn(R,v,q){let _t=n.get(R);v!==void 0&&me(_t.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&En(R)}function An(R){let v=R.texture,q=n.get(R),_t=n.get(v);R.addEventListener("dispose",k),H(R);let nt=R.textures,vt=R.isWebGLCubeRenderTarget===!0,ut=nt.length>1;if(ut||(_t.__webglTexture===void 0&&(_t.__webglTexture=i.createTexture()),_t.__version=v.version,a.memory.textures++),vt){q.__webglFramebuffer=[];for(let at=0;at<6;at++)if(v.mipmaps.length>0){q.__webglFramebuffer[at]=[];for(let et=0;et<v.mipmaps.length;et++)q.__webglFramebuffer[at][et]=i.createFramebuffer()}else q.__webglFramebuffer[at]=i.createFramebuffer()}else{if(v.mipmaps.length>0){q.__webglFramebuffer=[];for(let at=0;at<v.mipmaps.length;at++)q.__webglFramebuffer[at]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(ut)for(let at=0,et=nt.length;at<et;at++){let wt=n.get(nt[at]);wt.__webglTexture===void 0&&(wt.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Tt(R)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let at=0;at<nt.length;at++){let et=nt[at];q.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[at]);let wt=r.convert(et.format,et.colorSpace),N=r.convert(et.type),ct=C(et.internalFormat,wt,N,et.normalized,et.colorSpace,R.isXRRenderTarget===!0),st=Ie(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,st,ct,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,q.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),Xn(q.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(vt){e.bindTexture(i.TEXTURE_CUBE_MAP,_t.__webglTexture),Te(i.TEXTURE_CUBE_MAP,v);for(let at=0;at<6;at++)if(v.mipmaps.length>0)for(let et=0;et<v.mipmaps.length;et++)me(q.__webglFramebuffer[at][et],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,et);else me(q.__webglFramebuffer[at],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);I(v)?A(i.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}else if(ut){for(let at=0,et=nt.length;at<et;at++){let wt=nt[at],N=n.get(wt),ct=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ct=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,N.__webglTexture),Te(ct,wt),me(q.__webglFramebuffer,R,wt,i.COLOR_ATTACHMENT0+at,ct,0),I(wt)&&A(ct)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(at=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,_t.__webglTexture),Te(at,v),v.mipmaps.length>0)for(let et=0;et<v.mipmaps.length;et++)me(q.__webglFramebuffer[et],R,v,i.COLOR_ATTACHMENT0,at,et);else me(q.__webglFramebuffer,R,v,i.COLOR_ATTACHMENT0,at,0);I(v)?A(at):v.mipmaps.length>0&&i.texParameteri(at,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}R.depthBuffer&&En(R)}function V(R){let v=R.textures;for(let q=0,_t=v.length;q<_t;q++){let nt=v[q];if(I(nt)&&nt.mipmapsAutoUpdate===!0){let vt=E(R),ut=n.get(nt).__webglTexture;e.bindTexture(vt,ut),A(vt),e.unbindTexture()}}}let Rn=[];function Re(R){if(R.samples>0){if(Tt(R)===!1){let v=R.textures,q=R.width,_t=R.height,nt=i.COLOR_BUFFER_BIT,vt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=n.get(R),at=v.length>1;if(at)for(let wt=0;wt<v.length;wt++)e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let wt=0;wt<v.length;wt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ut.__webglColorRenderbuffer[wt]);let N=n.get(v[wt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,N,0)}i.blitFramebuffer(0,0,q,_t,0,0,q,_t,nt,i.NEAREST),l===!0&&(Rn.length=0,Rn.push(i.COLOR_ATTACHMENT0+wt),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&Rn.push(vt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Rn))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let wt=0;wt<v.length;wt++){e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,ut.__webglColorRenderbuffer[wt]);let N=n.get(v[wt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,N,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let v=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Ie(R){return Math.min(s.maxSamples,R.samples)}function Tt(R){let v=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function De(R){let v=a.render.frame;f.get(R)!==v&&(f.set(R,v),R.update())}function Wt(R,v){let q=R.colorSpace,_t=R.format,nt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||q!==Lr&&q!==Ui&&(Me.getTransfer(q)===Ae?(_t!==ri||nt!==In)&&Jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ne("WebGLTextures: Unsupported texture color space:",q)),v}function jt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=te,this.resetTextureUnits=dt,this.getTextureUnits=mt,this.setTextureUnits=Ht,this.setTexture2D=Pt,this.setTexture2DArray=Ot,this.setTexture3D=Yt,this.setTextureCube=It,this.rebindTextures=xn,this.setupRenderTarget=An,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=En,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Tt,this.dispose=K}function wx(i,t){function e(n,s=Ui){let r,a=Me.getTransfer(s);if(n===In)return i.UNSIGNED_BYTE;if(n===Go)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Zc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Jc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===qc)return i.BYTE;if(n===Yc)return i.SHORT;if(n===ur)return i.UNSIGNED_SHORT;if(n===Ho)return i.INT;if(n===ni)return i.UNSIGNED_INT;if(n===ii)return i.FLOAT;if(n===si)return i.HALF_FLOAT;if(n===Kc)return i.ALPHA;if(n===jc)return i.RGB;if(n===ri)return i.RGBA;if(n===Ci)return i.DEPTH_COMPONENT;if(n===Ni)return i.DEPTH_STENCIL;if(n===Qc)return i.RED;if(n===Xo)return i.RED_INTEGER;if(n===is)return i.RG;if(n===$o)return i.RG_INTEGER;if(n===qo)return i.RGBA_INTEGER;if(n===ta||n===ea||n===na||n===ia)if(a===Ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ta)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ta)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ia)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Yo||n===Zo||n===Jo||n===Ko)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Yo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Jo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ko)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jo||n===Qo||n===tl||n===el||n===nl||n===sa||n===il)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===jo||n===Qo)return a===Ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===tl)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===el)return r.COMPRESSED_R11_EAC;if(n===nl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===sa)return r.COMPRESSED_RG11_EAC;if(n===il)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===sl||n===rl||n===al||n===ol||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===_l)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===sl)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===rl)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===al)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ol)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ll)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===cl)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===hl)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ul)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===dl)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fl)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===pl)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ml)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===gl)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_l)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xl||n===yl||n===vl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===xl)return a===Ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===vl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ml||n===Sl||n===ra||n===bl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ml)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Sl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ra)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===bl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Tx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ex=`
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

}`,Mh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Hr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new di({vertexShader:Tx,fragmentShader:Ex,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Mn(new Wr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Sh=class extends ti{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,f=null,p=null,u=null,m=null,y=null,M=typeof XRWebGLBinding<"u",g=new Mh,_={},b=e.getContextAttributes(),I=null,A=null,E=[],C=[],x=new ie,w=null,H=null,B=new yn;B.viewport=new ze;let F=new yn;F.viewport=new ze;let k=[B,F],G=new Bo,D=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ot){let Pt=E[ot];return Pt===void 0&&(Pt=new ir,E[ot]=Pt),Pt.getTargetRaySpace()},this.getControllerGrip=function(ot){let Pt=E[ot];return Pt===void 0&&(Pt=new ir,E[ot]=Pt),Pt.getGripSpace()},this.getHand=function(ot){let Pt=E[ot];return Pt===void 0&&(Pt=new ir,E[ot]=Pt),Pt.getHandSpace()};function tt(ot){let Pt=C.indexOf(ot.inputSource);if(Pt===-1)return;let Ot=E[Pt];Ot!==void 0&&(Ot.update(ot.inputSource,ot.frame,c||a),Ot.dispatchEvent({type:ot.type,data:ot.inputSource}))}function j(){s.removeEventListener("select",tt),s.removeEventListener("selectstart",tt),s.removeEventListener("selectend",tt),s.removeEventListener("squeeze",tt),s.removeEventListener("squeezestart",tt),s.removeEventListener("squeezeend",tt),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",pt);for(let ot=0;ot<E.length;ot++){let Pt=C[ot];Pt!==null&&(C[ot]=null,E[ot].disconnect(Pt))}D=null,K=null,g.reset();for(let ot in _)delete _[ot];if(t.setRenderTarget(I),m=null,u=null,p=null,s=null,A=null,te.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(x.width,x.height,!1),H!==null){let ot=H.camera;ot.fov=H.fov,ot.zoom=H.zoom,ot.updateProjectionMatrix(),H=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ot){r=ot,n.isPresenting===!0&&Jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ot){o=ot,n.isPresenting===!0&&Jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ot){c=ot},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(ot){if(s=ot,s!==null){if(I=t.getRenderTarget(),s.addEventListener("select",tt),s.addEventListener("selectstart",tt),s.addEventListener("selectend",tt),s.addEventListener("squeeze",tt),s.addEventListener("squeezestart",tt),s.addEventListener("squeezeend",tt),s.addEventListener("end",j),s.addEventListener("inputsourceschange",pt),b.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(x),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ot=null,Yt=null,It=null;b.depth&&(It=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ot=b.stencil?Ni:Ci,Yt=b.stencil?Ts:ni);let oe={colorFormat:e.RGBA8,depthFormat:It,scaleFactor:r};p=this.getBinding(),u=p.createProjectionLayer(oe),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),A=new Hn(u.textureWidth,u.textureHeight,{format:ri,type:In,depthTexture:new Li(u.textureWidth,u.textureHeight,Yt,void 0,void 0,void 0,void 0,void 0,void 0,Ot),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Ot={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,Ot),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),A=new Hn(m.framebufferWidth,m.framebufferHeight,{format:ri,type:In,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),te.setContext(s),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function pt(ot){for(let Pt=0;Pt<ot.removed.length;Pt++){let Ot=ot.removed[Pt],Yt=C.indexOf(Ot);Yt>=0&&(C[Yt]=null,E[Yt].disconnect(Ot))}for(let Pt=0;Pt<ot.added.length;Pt++){let Ot=ot.added[Pt],Yt=C.indexOf(Ot);if(Yt===-1){for(let oe=0;oe<E.length;oe++)if(oe>=C.length){C.push(Ot),Yt=oe;break}else if(C[oe]===null){C[oe]=Ot,Yt=oe;break}if(Yt===-1)break}let It=E[Yt];It&&It.connect(Ot)}}function it(ot,Pt){Pt===null?ot.matrixWorld.copy(ot.matrix):ot.matrixWorld.multiplyMatrices(Pt.matrixWorld,ot.matrix),ot.matrixWorldInverse.copy(ot.matrixWorld).invert()}this.updateCamera=function(ot){if(s===null)return;let Pt=ot.near,Ot=ot.far;g.texture!==null&&(g.depthNear>0&&(Pt=g.depthNear),g.depthFar>0&&(Ot=g.depthFar)),G.near=F.near=B.near=Pt,G.far=F.far=B.far=Ot,(D!==G.near||K!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),D=G.near,K=G.far),G.layers.mask=ot.layers.mask|6,B.layers.mask=G.layers.mask&-5,F.layers.mask=G.layers.mask&-3;let Yt=ot.parent,It=G.cameras;it(G,Yt);for(let oe=0;oe<It.length;oe++)it(It[oe],Yt);G.projectionMatrix.copy(B.projectionMatrix),G.projectionMatrixInverse.copy(B.projectionMatrixInverse),H===null&&ot.isPerspectiveCamera&&(H={camera:ot,fov:ot.fov,zoom:ot.zoom}),dt(ot,G,Yt)};function dt(ot,Pt,Ot){Ot===null?ot.matrix.copy(Pt.matrixWorld):(ot.matrix.copy(Ot.matrixWorld),ot.matrix.invert(),ot.matrix.multiply(Pt.matrixWorld)),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.updateMatrixWorld(!0),ot.projectionMatrix.copy(Pt.projectionMatrix),ot.projectionMatrixInverse.copy(Pt.projectionMatrixInverse),ot.isPerspectiveCamera&&(ot.fov=er*2*Math.atan(1/ot.projectionMatrix.elements[5]),ot.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(ot){l=ot,u!==null&&(u.fixedFoveation=ot),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ot)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(G)},this.getCameraTexture=function(ot){return _[ot]};let mt=null;function Ht(ot,Pt){if(f=Pt.getViewerPose(c||a),y=Pt,f!==null){let Ot=f.views;m!==null&&(t.setRenderTargetFramebuffer(A,m.framebuffer),t.setRenderTarget(A));let Yt=!1;Ot.length!==G.cameras.length&&(G.cameras.length=0,Yt=!0);for(let Kt=0;Kt<Ot.length;Kt++){let Te=Ot[Kt],Ee=null;if(m!==null)Ee=m.getViewport(Te);else{let Ye=p.getViewSubImage(u,Te);Ee=Ye.viewport,Kt===0&&(t.setRenderTargetTextures(A,Ye.colorTexture,Ye.depthStencilTexture),t.setRenderTarget(A))}let pe=k[Kt];pe===void 0&&(pe=new yn,pe.layers.enable(Kt),pe.viewport=new ze,k[Kt]=pe),pe.matrix.fromArray(Te.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(Te.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),Kt===0&&(G.matrix.copy(pe.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Yt===!0&&G.cameras.push(pe)}let It=s.enabledFeatures;if(It&&It.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){p=n.getBinding();let Kt=p.getDepthInformation(Ot[0]);Kt&&Kt.isValid&&Kt.texture&&g.init(Kt,s.renderState)}if(It&&It.includes("camera-access")&&M){t.state.unbindTexture(),p=n.getBinding();for(let Kt=0;Kt<Ot.length;Kt++){let Te=Ot[Kt].camera;if(Te){let Ee=_[Te];Ee||(Ee=new Hr,_[Te]=Ee);let pe=p.getCameraImage(Te);Ee.sourceTexture=pe}}}}for(let Ot=0;Ot<E.length;Ot++){let Yt=C[Ot],It=E[Ot];Yt!==null&&It!==void 0&&It.update(Yt,Pt,c||a)}mt&&mt(ot,Pt),Pt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Pt}),y=null}let te=new Ad;te.setAnimationLoop(Ht),this.setAnimationLoop=function(ot){mt=ot},this.dispose=function(){}}},Ax=new ke,Od=new ae;Od.set(-1,0,0,0,1,0,0,0,1);function Rx(i,t){function e(g,_){g.matrixAutoUpdate===!0&&g.updateMatrix(),_.value.copy(g.matrix)}function n(g,_){_.color.getRGB(g.fogColor.value,ch(i)),_.isFog?(g.fogNear.value=_.near,g.fogFar.value=_.far):_.isFogExp2&&(g.fogDensity.value=_.density)}function s(g,_,b,I,A){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?r(g,_):_.isMeshLambertMaterial?(r(g,_),_.envMap&&(g.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(r(g,_),p(g,_)):_.isMeshPhongMaterial?(r(g,_),f(g,_),_.envMap&&(g.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(r(g,_),u(g,_),_.isMeshPhysicalMaterial&&m(g,_,A)):_.isMeshMatcapMaterial?(r(g,_),y(g,_)):_.isMeshDepthMaterial?r(g,_):_.isMeshDistanceMaterial?(r(g,_),M(g,_)):_.isMeshNormalMaterial?r(g,_):_.isLineBasicMaterial?(a(g,_),_.isLineDashedMaterial&&o(g,_)):_.isPointsMaterial?l(g,_,b,I):_.isSpriteMaterial?c(g,_):_.isShadowMaterial?(g.color.value.copy(_.color),g.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function r(g,_){g.opacity.value=_.opacity,_.color&&g.diffuse.value.copy(_.color),_.emissive&&g.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(g.map.value=_.map,e(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,e(_.alphaMap,g.alphaMapTransform)),_.bumpMap&&(g.bumpMap.value=_.bumpMap,e(_.bumpMap,g.bumpMapTransform),g.bumpScale.value=_.bumpScale,_.side===Sn&&(g.bumpScale.value*=-1)),_.normalMap&&(g.normalMap.value=_.normalMap,e(_.normalMap,g.normalMapTransform),g.normalScale.value.copy(_.normalScale),_.side===Sn&&g.normalScale.value.negate()),_.displacementMap&&(g.displacementMap.value=_.displacementMap,e(_.displacementMap,g.displacementMapTransform),g.displacementScale.value=_.displacementScale,g.displacementBias.value=_.displacementBias),_.emissiveMap&&(g.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,g.emissiveMapTransform)),_.specularMap&&(g.specularMap.value=_.specularMap,e(_.specularMap,g.specularMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest);let b=t.get(_),I=b.envMap,A=b.envMapRotation;I&&(g.envMap.value=I,g.envMapRotation.value.setFromMatrix4(Ax.makeRotationFromEuler(A)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Od),g.reflectivity.value=_.reflectivity,g.ior.value=_.ior,g.refractionRatio.value=_.refractionRatio),_.lightMap&&(g.lightMap.value=_.lightMap,g.lightMapIntensity.value=_.lightMapIntensity,e(_.lightMap,g.lightMapTransform)),_.aoMap&&(g.aoMap.value=_.aoMap,g.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,g.aoMapTransform))}function a(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,_.map&&(g.map.value=_.map,e(_.map,g.mapTransform))}function o(g,_){g.dashSize.value=_.dashSize,g.totalSize.value=_.dashSize+_.gapSize,g.scale.value=_.scale}function l(g,_,b,I){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.size.value=_.size*b,g.scale.value=I*.5,_.map&&(g.map.value=_.map,e(_.map,g.uvTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,e(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function c(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.rotation.value=_.rotation,_.map&&(g.map.value=_.map,e(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,e(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function f(g,_){g.specular.value.copy(_.specular),g.shininess.value=Math.max(_.shininess,1e-4)}function p(g,_){_.gradientMap&&(g.gradientMap.value=_.gradientMap)}function u(g,_){g.metalness.value=_.metalness,_.metalnessMap&&(g.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,g.metalnessMapTransform)),g.roughness.value=_.roughness,_.roughnessMap&&(g.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,g.roughnessMapTransform)),_.envMap&&(g.envMapIntensity.value=_.envMapIntensity)}function m(g,_,b){g.ior.value=_.ior,_.diffuseRoughness>0&&(g.diffuseRoughness.value=_.diffuseRoughness,_.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=_.diffuseRoughnessMap,e(_.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),_.sheen>0&&(g.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),g.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(g.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,g.sheenColorMapTransform)),_.sheenRoughnessMap&&(g.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,g.sheenRoughnessMapTransform))),_.clearcoat>0&&(g.clearcoat.value=_.clearcoat,g.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(g.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,g.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(g.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Sn&&g.clearcoatNormalScale.value.negate())),_.dispersion>0&&(g.dispersion.value=_.dispersion),_.retroreflectivity>0&&(g.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(g.iridescence.value=_.iridescence,g.iridescenceIOR.value=_.iridescenceIOR,g.iridescenceThicknessMinimum.value=_.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=_.iridescenceThicknessMaximum,_.iridescenceMap&&(g.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,g.iridescenceMapTransform)),_.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),_.transmission>0&&(g.transmission.value=_.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),_.transmissionMap&&(g.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,g.transmissionMapTransform)),g.thickness.value=_.thickness,_.thicknessMap&&(g.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=_.attenuationDistance,g.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(g.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(g.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=_.specularIntensity,g.specularColor.value.copy(_.specularColor),_.specularColorMap&&(g.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,g.specularColorMapTransform)),_.specularIntensityMap&&(g.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,g.specularIntensityMapTransform))}function y(g,_){_.matcap&&(g.matcap.value=_.matcap)}function M(g,_){let b=t.get(_).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Cx(i,t,e,n){let s={},r={};function a(b,I){let A=I.program;n.uniformBlockBinding(b,A,s[b.id])}function o(b,I){let A=s[b.id];A===void 0&&(y(b),A=l(b),s[b.id]=A,b.addEventListener("dispose",g));let E=I.program;n.updateUBOMapping(b,E);let C=t.render.frame;r[b.id]!==C&&(c(b),r[b.id]=C)}function l(b){let I=i.createBuffer(),A=b.__size,E=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,I),i.bufferData(i.UNIFORM_BUFFER,A,E),i.bindBuffer(i.UNIFORM_BUFFER,null),I}function c(b){let I=s[b.id],A=b.uniforms,E=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,I);for(let C=0,x=A.length;C<x;C++){let w=A[C];if(Array.isArray(w))for(let H=0,B=w.length;H<B;H++)f(w[H],C,H,E);else f(w,C,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,I,A,E){if(u(b,I,A,E)===!0){let C=b.__offset,x=b.value;if(Array.isArray(x)){let w=0;for(let H=0;H<x.length;H++){let B=x[H],F=M(B,!0);p(B,b.__data,w),w+=F.storage/Float32Array.BYTES_PER_ELEMENT}}else p(x,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,C,b.__data)}}function p(b,I,A){typeof b=="number"||typeof b=="boolean"?I[A]=b:b.isMatrix3?(I[A]=b.elements[0],I[A+1]=b.elements[1],I[A+2]=b.elements[2],I[A+3]=0,I[A+4]=b.elements[3],I[A+5]=b.elements[4],I[A+6]=b.elements[5],I[A+7]=0,I[A+8]=b.elements[6],I[A+9]=b.elements[7],I[A+10]=b.elements[8],I[A+11]=0):ArrayBuffer.isView(b)?I.set(b.subarray(0,I.length-A),A):b.toArray(I,A)}function u(b,I,A,E){let C=b.value,x=I+"_"+A;if(Array.isArray(C)){E[x]===void 0&&(E[x]=[]);let w=E[x],H=!1;for(let B=0;B<C.length;B++)m(C[B],w,B)===!0&&(H=!0);return H}return m(C,E,x)}function m(b,I,A){if(I[A]===void 0)return typeof b=="number"||typeof b=="boolean"?I[A]=b:ArrayBuffer.isView(b)?I[A]=b.slice():I[A]=b.clone(),!0;{let E=I[A];if(typeof b=="number"||typeof b=="boolean"){if(E!==b)return I[A]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(E.equals(b)===!1)return E.copy(b),!0}}return!1}function y(b){let I=b.uniforms,A=0,E=16;for(let x=0,w=I.length;x<w;x++){let H=Array.isArray(I[x])?I[x]:[I[x]];for(let B=0,F=H.length;B<F;B++){let k=H[B],G=Array.isArray(k.value)?k.value:[k.value],D=Array.isArray(I[x])||Array.isArray(k.value),K=A;for(let j=0,pt=G.length;j<pt;j++){let it=G[j],dt=M(it,D),mt=A%E,Ht=mt%dt.boundary,te=mt+Ht;A+=Ht,te!==0&&E-te<dt.storage&&(A+=E-te),j===0&&(K=A),A+=dt.storage}let tt=k.type==="int"?Int32Array:k.type==="uint"?Uint32Array:Float32Array;k.__data=new tt((A-K)/Float32Array.BYTES_PER_ELEMENT),k.__offset=K}}let C=A%E;return C>0&&(A+=E-C),b.__size=A,b.__cache={},this}function M(b,I){let A={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(A.boundary=4,A.storage=4):b.isVector2?(A.boundary=8,A.storage=8):b.isVector3||b.isColor?(A.boundary=16,A.storage=12):b.isVector4?(A.boundary=16,A.storage=16):b.isMatrix3?(A.boundary=16,A.storage=48):b.isMatrix4?(A.boundary=16,A.storage=64):b.isTexture?Jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(A.boundary=16,A.storage=b.byteLength):Jt("WebGLRenderer: Unsupported uniform value type.",b),I===!0&&(A.boundary=16,A.storage=Math.ceil(A.storage/16)*16),A}function g(b){let I=b.target;I.removeEventListener("dispose",g),i.deleteBuffer(s[I.id]),delete s[I.id],delete r[I.id]}function _(){for(let b in s)i.deleteBuffer(s[b]);s={},r={}}return{bind:a,update:o,dispose:_}}var Px=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),mi=null;function Ix(){return mi===null&&(mi=new yo(Px,16,16,is,si),mi.name="DFG_LUT",mi.minFilter=vn,mi.magFilter=vn,mi.wrapS=hi,mi.wrapT=hi,mi.generateMipmaps=!1,mi.needsUpdate=!0),mi}var Rl=class{constructor(t={}){let{canvas:e=Ju(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:m=In}=t;this.isWebGLRenderer=!0;let y;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=n.getContextAttributes().alpha}else y=a;let M=m,g=new Set([qo,$o,Xo]),_=new Set([In,ni,ur,Ts,Go,Wo]),b=new Uint32Array(4),I=new Int32Array(4),A={textures:[],min:[],max:[],resolution:[]},E=null,C=null,x=[],w=[],H=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let B=this,F=!1,k=null,G=null,D=null,K=null;this._outputColorSpace=Bn;let tt=0,j=0,pt=null,it=-1,dt=null,mt=new ze,Ht=new ze,te=null,ot=new de(0),Pt=0,Ot=e.width,Yt=e.height,It=1,oe=null,Ge=null,Kt=new ze(0,0,Ot,Yt),Te=new ze(0,0,Ot,Yt),Ee=!1,pe=new Zi,Ye=new vo,We=!1,dn=!1,me=new ke,Xn=new Y,Ne=new ze,En={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},xn=!1;function An(){return pt===null?It:1}let V=n;function Rn(S,O){return e.getContext(S,O)}let Re,Ie,Tt,De,Wt,jt,R,v,q,_t,nt,vt,ut,at,et,wt,N,ct,st,Mt,yt,St,Xt;try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",$t,!1),e.addEventListener("webglcontextrestored",ce,!1),e.addEventListener("webglcontextcreationerror",Ct,!1),V===null){let O="webgl2";if(V=Rn(O,S),V===null)throw Rn(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}le()}catch(S){throw e.removeEventListener("webglcontextlost",$t,!1),e.removeEventListener("webglcontextrestored",ce,!1),e.removeEventListener("webglcontextcreationerror",Ct,!1),ne("WebGLRenderer: "+S.message),S}function le(){Re=new H0(V),Re.init(),yt=new wx(V,Re),Ie=new I0(V,Re,t,yt),Tt=new Sx(V,Re),Ie.reversedDepthBuffer&&u&&Tt.buffers.depth.setReversed(!0),G=V.createFramebuffer(),D=V.createFramebuffer(),K=V.createFramebuffer(),De=new X0(V),Wt=new lx,jt=new bx(V,Re,Tt,Wt,Ie,yt,De),R=new V0(B),v=new qp(V),St=new C0(V,v),q=new G0(V,v,De,St),_t=new q0(V,q,v,St,De),ct=new $0(V,Ie,jt),et=new L0(Wt),nt=new ox(B,R,Re,Ie,St,et),vt=new Rx(B,Wt),ut=new hx,at=new gx(Re),N=new R0(B,R,Tt,_t,y,l),wt=new Mx(B,_t,Ie),Xt=new Cx(V,De,Ie,Tt),st=new P0(V,Re,De),Mt=new W0(V,Re,De),De.programs=nt.programs,B.capabilities=Ie,B.extensions=Re,B.properties=Wt,B.renderLists=ut,B.shadowMap=wt,B.state=Tt,B.info=De}M!==In&&(H=new Z0(M,e.width,e.height,o,s,r));let gt=new Sh(B,V);this.xr=gt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let S=Re.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Re.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return It},this.setPixelRatio=function(S){S!==void 0&&(It=S,this.setSize(Ot,Yt,!1))},this.getSize=function(S){return S.set(Ot,Yt)},this.setSize=function(S,O,Q=!0){if(gt.isPresenting){Jt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ot=S,Yt=O,e.width=Math.floor(S*It),e.height=Math.floor(O*It),Q===!0&&(e.style.width=S+"px",e.style.height=O+"px"),H!==null&&H.setSize(e.width,e.height),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(Ot*It,Yt*It).floor()},this.setDrawingBufferSize=function(S,O,Q){Ot=S,Yt=O,It=Q,e.width=Math.floor(S*Q),e.height=Math.floor(O*Q),this.setViewport(0,0,S,O)},this.setEffects=function(S){if(M===In){ne("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let O=0;O<S.length;O++)if(S[O].isOutputPass===!0){Jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}H.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(mt)},this.getViewport=function(S){return S.copy(Kt)},this.setViewport=function(S,O,Q,Z){S.isVector4?Kt.set(S.x,S.y,S.z,S.w):Kt.set(S,O,Q,Z),Tt.viewport(mt.copy(Kt).multiplyScalar(An()).round())},this.getScissor=function(S){return S.copy(Te)},this.setScissor=function(S,O,Q,Z){S.isVector4?Te.set(S.x,S.y,S.z,S.w):Te.set(S,O,Q,Z),Tt.scissor(Ht.copy(Te).multiplyScalar(An()).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(S){Tt.setScissorTest(Ee=S)},this.setOpaqueSort=function(S){oe=S},this.setTransparentSort=function(S){Ge=S},this.getClearColor=function(S){return S.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(S=!0,O=!0,Q=!0){let Z=0;if(S){let $=!1;if(pt!==null){let Et=pt.texture.format;$=g.has(Et)}if($){let Et=pt.texture.type,Ft=_.has(Et),bt=N.getClearColor(),Lt=N.getClearAlpha(),zt=bt.r,se=bt.g,ge=bt.b;Ft?(b[0]=zt,b[1]=se,b[2]=ge,b[3]=Lt,V.clearBufferuiv(V.COLOR,0,b)):(I[0]=zt,I[1]=se,I[2]=ge,I[3]=Lt,V.clearBufferiv(V.COLOR,0,I))}else Z|=V.COLOR_BUFFER_BIT}O&&(Z|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(Z|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&V.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),k=S},this.dispose=function(){e.removeEventListener("webglcontextlost",$t,!1),e.removeEventListener("webglcontextrestored",ce,!1),e.removeEventListener("webglcontextcreationerror",Ct,!1),N.dispose(),ut.dispose(),at.dispose(),jt.dispose(),Wt.dispose(),R.dispose(),_t.dispose(),q.dispose(),St.dispose(),Xt.dispose(),nt.dispose(),gt.dispose(),gt.removeEventListener("sessionstart",ba),gt.removeEventListener("sessionend",wa),yi.stop()};function $t(S){S.preventDefault(),sh("WebGLRenderer: Context Lost."),F=!0}function ce(){sh("WebGLRenderer: Context Restored."),F=!1;let S=De.autoReset,O=wt.enabled,Q=wt.autoUpdate,Z=wt.needsUpdate,$=wt.type;le(),De.autoReset=S,wt.enabled=O,wt.autoUpdate=Q,wt.needsUpdate=Z,wt.type=$}function Ct(S){ne("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function be(S){let O=S.target;O.removeEventListener("dispose",be),He(O)}function He(S){Nn(S),Wt.remove(S)}function Nn(S){let O=Wt.get(S).programs;O!==void 0&&(O.forEach(function(Q){nt.releaseProgram(Q)}),S.isShaderMaterial&&nt.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,Q,Z,$,Et){O===null&&(O=En);let Ft=$.isMesh&&$.matrixWorld.determinantAffine()<0,bt=Fs(S,O,Q,Z,$);Tt.setMaterial(Z,Ft);let Lt=Q.index,zt=1;if(Z.wireframe===!0){if(Lt=q.getWireframeAttribute(Q),Lt===void 0)return;zt=2}let se=Q.drawRange,ge=Q.attributes.position,Bt=se.start*zt,ue=(se.start+se.count)*zt;Et!==null&&(Bt=Math.max(Bt,Et.start*zt),ue=Math.min(ue,(Et.start+Et.count)*zt)),Lt!==null?(Bt=Math.max(Bt,0),ue=Math.min(ue,Lt.count)):ge!=null&&(Bt=Math.max(Bt,0),ue=Math.min(ue,ge.count));let Xe=ue-Bt;if(Xe<0||Xe===1/0)return;St.setup($,Z,bt,Q,Lt);let Ce,Pe=st;if(Lt!==null&&(Ce=v.get(Lt),Pe=Mt,Pe.setIndex(Ce)),$.isMesh)Z.wireframe===!0?(Tt.setLineWidth(Z.wireframeLinewidth*An()),Pe.setMode(V.LINES)):Pe.setMode(V.TRIANGLES);else if($.isLine){let Ze=Z.linewidth;Ze===void 0&&(Ze=1),Tt.setLineWidth(Ze*An()),$.isLineSegments?Pe.setMode(V.LINES):$.isLineLoop?Pe.setMode(V.LINE_LOOP):Pe.setMode(V.LINE_STRIP)}else $.isPoints?Pe.setMode(V.POINTS):$.isSprite&&Pe.setMode(V.TRIANGLES);if($.isBatchedMesh)if(Re.get("WEBGL_multi_draw"))Pe.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let Ze=$._multiDrawStarts,Ut=$._multiDrawCounts,Je=$._multiDrawCount,Zt=Lt?v.get(Lt).bytesPerElement:1,ai=Wt.get(Z).currentProgram.getUniforms();for(let sn=0;sn<Je;sn++)ai.setValue(V,"_gl_DrawID",sn),Pe.render(Ze[sn]/Zt,Ut[sn])}else if($.isInstancedMesh)Pe.renderInstances(Bt,Xe,$.count);else if(Q.isInstancedBufferGeometry){let Ze=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ut=Math.min(Q.instanceCount,Ze);Pe.renderInstances(Bt,Xe,Ut)}else Pe.render(Bt,Xe)};function Mr(S,O,Q,Z){k!==null&&S.isNodeMaterial&&k.setObject(Z,S),We===!0&&et.setState(S,Q,!1),S.transparent===!0&&S.side===fi&&S.forceSinglePass===!1?(S.side=Sn,S.needsUpdate=!0,zi(S,O,Z),S.side=ns,S.needsUpdate=!0,zi(S,O,Z),S.side=fi):zi(S,O,Z)}this.compile=function(S,O,Q=null){Q===null&&(Q=S),k!==null&&k.renderStart(S,O,Q),C=at.get(Q),C.init(O),w.push(C),Q.traverseVisible(function($){$.isLight&&$.layers.test(O.layers)&&(C.pushLight($),$.castShadow&&C.pushShadow($))}),S!==Q&&S.traverseVisible(function($){$.isLight&&$.layers.test(O.layers)&&(C.pushLight($),$.castShadow&&C.pushShadow($))}),C.setupLights(),k!==null&&k.updateLights(C.state.lightsArray),dn=this.localClippingEnabled,We=et.init(this.clippingPlanes,dn),We===!0&&et.setGlobalState(this.clippingPlanes,O),k!==null&&wt.render(C.state.shadowsArray,Q,O);let Z=new Set;return S.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let Et=$.material;if(Et)if(Array.isArray(Et))for(let Ft=0;Ft<Et.length;Ft++){let bt=Et[Ft];Mr(bt,Q,O,$),Z.add(bt)}else Mr(Et,Q,O,$),Z.add(Et)}),C=w.pop(),k!==null&&k.renderEnd(),Z},this.compileAsync=function(S,O,Q=null){let Z=this.compile(S,O,Q);return new Promise($=>{function Et(){if(Z.forEach(function(Ft){let Lt=Wt.get(Ft).currentProgram;(Lt===void 0||Lt.isReady())&&Z.delete(Ft)}),Z.size===0){$(S);return}setTimeout(Et,10)}Re.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Ls=null;function cs(S){Ls&&Ls(S)}function ba(){yi.stop()}function wa(){yi.start()}let yi=new Ad;yi.setAnimationLoop(cs),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(S){Ls=S,gt.setAnimationLoop(S),S===null?yi.stop():yi.start()},gt.addEventListener("sessionstart",ba),gt.addEventListener("sessionend",wa),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;k!==null&&k.renderStart(S,O);let Q=gt.enabled===!0&&gt.isPresenting===!0,Z=H!==null&&(pt===null||Q)&&H.begin(B,pt);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),gt.enabled===!0&&gt.isPresenting===!0&&(H===null||H.isCompositing()===!1)&&(gt.cameraAutoUpdate===!0&&gt.updateCamera(O),O=gt.getCamera()),S.isScene===!0&&S.onBeforeRender(B,S,O,pt),C=at.get(S,w.length),C.init(O),C.state.textureUnits=jt.getTextureUnits(),w.push(C),me.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?Ye.setFromArrayCamera(O):pe.setFromProjectionMatrix(me,qn,O.reversedDepth),dn=this.localClippingEnabled,We=et.init(this.clippingPlanes,dn),E=ut.get(S,x.length),E.init(),x.push(E),this.info.render.frame++,gt.enabled===!0&&gt.isPresenting===!0){let Ft=B.xr.getDepthSensingMesh();Ft!==null&&Sr(Ft,O,-1/0,B.sortObjects)}Sr(S,O,0,B.sortObjects),E.finish(),k!==null&&k.updateLights(C.state.lightsArray),B.sortObjects===!0&&E.sort(oe,Ge),xn=gt.enabled===!1||gt.isPresenting===!1||gt.hasDepthSensing()===!1,xn&&N.addToRenderList(E,S),this.info.autoReset===!0&&this.info.reset(),We===!0&&et.beginShadows();let $=C.state.shadowsArray;if(wt.render($,S,O),We===!0&&et.endShadows(),(Z&&H.hasRenderPass())===!1){let Ft=E.opaque,bt=E.transmissive;if(C.setupLights(),O.isArrayCamera){let Lt=O.cameras;if(bt.length>0)for(let zt=0,se=Lt.length;zt<se;zt++){let ge=Lt[zt];Ns(Ft,bt,S,ge)}xn&&N.render(S);for(let zt=0,se=Lt.length;zt<se;zt++){let ge=Lt[zt];Ds(E,S,ge,ge.viewport)}}else bt.length>0&&Ns(Ft,bt,S,O),xn&&N.render(S),Ds(E,S,O)}pt!==null&&j===0&&(jt.updateMultisampleRenderTarget(pt),jt.updateRenderTargetMipmap(pt)),Z&&H.end(B),S.isScene===!0&&S.onAfterRender(B,S,O),St.resetDefaultState(),it=-1,dt=null,w.pop(),w.length>0?(C=w[w.length-1],jt.setTextureUnits(C.state.textureUnits),We===!0&&et.setGlobalState(B.clippingPlanes,C.state.camera)):C=null,x.pop(),x.length>0?E=x[x.length-1]:E=null,k!==null&&k.renderEnd()};function Sr(S,O,Q,Z){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)Q=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLight)C.pushLight(S),S.castShadow&&C.pushShadow(S);else if(S.isSprite){let Ft=O.isArrayCamera?Ye:pe;if(!S.frustumCulled||S.intersectsFrustum(Ft)){Z&&Ne.setFromMatrixPosition(S.matrixWorld).applyMatrix4(me);let bt=_t.update(S),Lt=S.material;Lt.visible&&E.push(S,bt,Lt,Q,Ne.z,null,O)}}else if(S.isMesh||S.isLine||S.isPoints){let Ft=O.isArrayCamera?Ye:pe;if(!S.frustumCulled||S.intersectsFrustum(Ft)){let bt=_t.update(S),Lt=S.material;if(Z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ne.copy(S.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Ne.copy(bt.boundingSphere.center)),Ne.applyMatrix4(S.matrixWorld).applyMatrix4(me)),Array.isArray(Lt)){let zt=bt.groups;for(let se=0,ge=zt.length;se<ge;se++){let Bt=zt[se],ue=Lt[Bt.materialIndex];ue&&ue.visible&&E.push(S,bt,ue,Q,Ne.z,Bt,O)}}else Lt.visible&&E.push(S,bt,Lt,Q,Ne.z,null,O)}}}let Et=S.children;for(let Ft=0,bt=Et.length;Ft<bt;Ft++)Sr(Et[Ft],O,Q,Z)}function Ds(S,O,Q,Z){let{opaque:$,transmissive:Et,transparent:Ft}=S;C.setupLightsView(Q),We===!0&&et.setGlobalState(B.clippingPlanes,Q),Z&&Tt.viewport(mt.copy(Z)),$.length>0&&Us($,O,Q),Et.length>0&&Us(Et,O,Q),Ft.length>0&&Us(Ft,O,Q),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function Ns(S,O,Q,Z){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[Z.id]===void 0){let Bt=Re.has("EXT_color_buffer_half_float")||Re.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[Z.id]=new Hn(1,1,{generateMipmaps:!0,type:Bt?si:In,minFilter:Di,samples:Math.max(4,Ie.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Me.workingColorSpace})}let Et=C.state.transmissionRenderTarget[Z.id],Ft=Z.viewport||mt;Et.setSize(Ft.z*B.transmissionResolutionScale,Ft.w*B.transmissionResolutionScale);let bt=B.getRenderTarget(),Lt=B.getActiveCubeFace(),zt=B.getActiveMipmapLevel();B.setRenderTarget(Et),B.getClearColor(ot),Pt=B.getClearAlpha(),Pt<1&&B.setClearColor(16777215,.5),B.clear(),xn&&N.render(Q);let se=B.toneMapping;B.toneMapping=pi;let ge=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),C.setupLightsView(Z),We===!0&&et.setGlobalState(B.clippingPlanes,Z),Us(S,Q,Z),jt.updateMultisampleRenderTarget(Et),jt.updateRenderTargetMipmap(Et),Re.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let ue=0,Xe=O.length;ue<Xe;ue++){let Ce=O[ue],{object:Pe,geometry:Ze,material:Ut,group:Je}=Ce;if(Ut.side===fi&&Pe.layers.test(Z.layers)){let Zt=Ut.side;Ut.side=Sn,Ut.needsUpdate=!0,Ta(Pe,Q,Z,Ze,Ut,Je),Ut.side=Zt,Ut.needsUpdate=!0,Bt=!0}}Bt===!0&&(jt.updateMultisampleRenderTarget(Et),jt.updateRenderTargetMipmap(Et))}B.setRenderTarget(bt,Lt,zt),B.setClearColor(ot,Pt),ge!==void 0&&(Z.viewport=ge),B.toneMapping=se}function Us(S,O,Q){let Z=O.isScene===!0?O.overrideMaterial:null;for(let $=0,Et=S.length;$<Et;$++){let Ft=S[$],{object:bt,geometry:Lt,group:zt}=Ft,se=Ft.material;se.allowOverride===!0&&Z!==null&&(se=Z),bt.layers.test(Q.layers)&&Ta(bt,O,Q,Lt,se,zt)}}function Ta(S,O,Q,Z,$,Et){k!==null&&$.isNodeMaterial&&k.setObject(S,$),S.onBeforeRender(B,O,Q,Z,$,Et),S.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),$.onBeforeRender(B,O,Q,Z,S,Et),$.transparent===!0&&$.side===fi&&$.forceSinglePass===!1?($.side=Sn,$.needsUpdate=!0,B.renderBufferDirect(Q,O,Z,$,S,Et),$.side=ns,$.needsUpdate=!0,B.renderBufferDirect(Q,O,Z,$,S,Et),$.side=fi):B.renderBufferDirect(Q,O,Z,$,S,Et),S.onAfterRender(B,O,Q,Z,$,Et)}function Ea(S){let O=0;for(let Q of S)Q.texture!==null&&O++;return O}function zi(S,O,Q){O.isScene!==!0&&(O=En);let Z=Wt.get(S),$=C.state.lights,Et=C.state.shadowsArray,Ft=$.state.version,bt=nt.getParameters(S,$.state,Et,O,Q,C.state.lightProbeGridArray),Lt=nt.getProgramCacheKey(bt),zt=Z.programs;Z.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?O.environment:null,Z.fog=O.fog;let se=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;Z.envMap=R.get(S.envMap||Z.environment,se),Z.envMapRotation=Z.environment!==null&&S.envMap===null?O.environmentRotation:S.envMapRotation,zt===void 0&&(S.addEventListener("dispose",be),zt=new Map,Z.programs=zt,Z.programVariants=new Map);let ge=zt.get(Lt);if(ge!==void 0){if(Z.currentProgram===ge&&Z.lightsStateVersion===Ft)return Ra(S,bt),ge}else bt.uniforms=nt.getUniforms(S),k!==null&&S.isNodeMaterial&&k.build(S,Q,bt),S.onBeforeCompile(bt,B),ge=nt.acquireProgram(bt,Lt),zt.set(Lt,ge),Z.uniforms=bt.uniforms;let Bt=Z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Bt.clippingPlanes=et.uniform),Ra(S,bt),Z.needsLights=Kl(S),Z.lightsStateVersion=Ft,Z.needsLights&&(Bt.ambientLightColor.value=$.state.ambient,Bt.lightProbe.value=$.state.probe,Bt.sunLights.value=$.state.sun,Bt.sunLightShadows.value=$.state.sunShadow,Bt.directionalLights.value=$.state.directional,Bt.directionalLightShadows.value=$.state.directionalShadow,Bt.spotLights.value=$.state.spot,Bt.spotLightShadows.value=$.state.spotShadow,Bt.rectAreaLights.value=$.state.rectArea,Bt.ltc_1.value=$.state.rectAreaLTC1,Bt.ltc_2.value=$.state.rectAreaLTC2,Bt.pointLights.value=$.state.point,Bt.pointLightShadows.value=$.state.pointShadow,Bt.hemisphereLights.value=$.state.hemi,Bt.sunShadowMatrix.value=$.state.sunShadowMatrix,Bt.sunShadowCascade.value=$.state.sunShadowCascade,Bt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Bt.spotLightMatrix.value=$.state.spotLightMatrix,Bt.spotLightMap.value=$.state.spotLightMap,Bt.pointShadowMatrix.value=$.state.pointShadowMatrix),Z.numLightProbeGrids=Ea(C.state.lightProbeGridArray),Z.currentProgram=ge,Z.uniformsList=null,ge}function Zl(S,O,Q,Z,$){let Et=Wt.get(S),Ft=Et.currentProgram.id+","+Z+","+$,bt=Et.programVariants.get(Ft);return bt===void 0?(bt=zi(S,O,Q),Et.programVariants.set(Ft,bt)):(Et.currentProgram=bt,Et.uniformsList=null,Et.outputColorSpace=Z,Et.toneMapping=$),bt}function Aa(S){if(S.uniformsList===null){let O=S.currentProgram.getUniforms();S.uniformsList=fr.seqWithValue(O.seq,S.uniforms)}return S.uniformsList}function Ra(S,O){let Q=Wt.get(S);Q.outputColorSpace=O.outputColorSpace,Q.batching=O.batching,Q.batchingColor=O.batchingColor,Q.instancing=O.instancing,Q.instancingColor=O.instancingColor,Q.instancingMorph=O.instancingMorph,Q.skinning=O.skinning,Q.morphTargets=O.morphTargets,Q.morphNormals=O.morphNormals,Q.morphColors=O.morphColors,Q.morphTargetsCount=O.morphTargetsCount,Q.numClippingPlanes=O.numClippingPlanes,Q.numIntersection=O.numClipIntersection,Q.vertexAlphas=O.vertexAlphas,Q.vertexTangents=O.vertexTangents,Q.toneMapping=O.toneMapping}function Fs(S,O,Q,Z,$){O.isScene!==!0&&(O=En),jt.resetTextureUnits();let Et=O.fog,Ft=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?O.environment:null,bt=pt===null?B.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:Me.workingColorSpace,Lt=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,zt=R.get(Z.envMap||Ft,Lt),se=Z.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,ge=!!Q.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Bt=!!Q.morphAttributes.position,ue=!!Q.morphAttributes.normal,Xe=!!Q.morphAttributes.color,Ce=pi;Z.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(Ce=B.toneMapping);let Pe=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Ze=Pe!==void 0?Pe.length:0,Ut=Wt.get(Z),Je=C.state.lights;if(We===!0&&(dn===!0||S!==dt)){let Ue=S===dt&&Z.id===it;et.setState(Z,S,Ue)}let Zt=!1,ai=!1;Z.version===Ut.__version?Ut.needsLights&&Ut.lightsStateVersion!==Je.state.version||$.isBatchedMesh&&Ut.batching===!1||!$.isBatchedMesh&&Ut.batching===!0||$.isBatchedMesh&&Ut.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Ut.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Ut.instancing===!1||!$.isInstancedMesh&&Ut.instancing===!0||$.isSkinnedMesh&&Ut.skinning===!1||!$.isSkinnedMesh&&Ut.skinning===!0||$.isInstancedMesh&&Ut.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ut.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ut.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ut.instancingMorph===!1&&$.morphTexture!==null||Ut.envMap!==zt||Z.fog===!0&&Ut.fog!==Et||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==et.numPlanes||Ut.numIntersection!==et.numIntersection)||Ut.vertexAlphas!==se||Ut.vertexTangents!==ge||Ut.morphTargets!==Bt||Ut.morphNormals!==ue||Ut.morphColors!==Xe||Ut.morphTargetsCount!==Ze||Ut.numLightProbeGrids!==Ea(C.state.lightProbeGridArray)?Zt=!0:(Ut.outputColorSpace!==bt||Ut.toneMapping!==Ce)&&(ai=!0):(Zt=!0,Ut.__version=Z.version);let sn=Ut.currentProgram;(Zt===!0||ai===!0)&&(sn=ai===!0?Zl(Z,O,$,bt,Ce):zi(Z,O,$),k&&Z.isNodeMaterial&&k.onUpdateProgram(Z,sn,Ut));let Vi=!1,oi=!1,vi=!1,ye=sn.getUniforms(),Ke=Ut.uniforms;if(Tt.useProgram(sn.program)&&(Vi=!0,oi=!0,vi=!0),Z.id!==it&&(it=Z.id,oi=!0),Vi||dt!==S){Tt.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ye.setValue(V,"projectionMatrix",S.projectionMatrix),ye.setValue(V,"viewMatrix",S.matrixWorldInverse);let $e=ye.map.cameraPosition;$e!==void 0&&$e.setValue(V,Xn.setFromMatrixPosition(S.matrixWorld)),Ie.logarithmicDepthBuffer&&ye.setValue(V,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&ye.setValue(V,"isOrthographic",S.isOrthographicCamera===!0),dt!==S&&(dt=S,oi=!0,vi=!0)}if(Ut.needsLights&&(Je.state.sunShadowMap.length>0&&ye.setValue(V,"sunShadowMap",Je.state.sunShadowMap,jt),Je.state.directionalShadowMap.length>0&&ye.setValue(V,"directionalShadowMap",Je.state.directionalShadowMap,jt),Je.state.spotShadowMap.length>0&&ye.setValue(V,"spotShadowMap",Je.state.spotShadowMap,jt),Je.state.pointShadowMap.length>0&&ye.setValue(V,"pointShadowMap",Je.state.pointShadowMap,jt)),$.isSkinnedMesh){ye.setOptional(V,$,"bindMatrix"),ye.setOptional(V,$,"bindMatrixInverse");let Ue=$.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),ye.setValue(V,"boneTexture",Ue.boneTexture,jt))}$.isBatchedMesh&&(ye.setOptional(V,$,"batchingTexture"),ye.setValue(V,"batchingTexture",$._matricesTexture,jt),ye.setOptional(V,$,"batchingIdTexture"),ye.setValue(V,"batchingIdTexture",$._indirectTexture,jt),ye.setOptional(V,$,"batchingColorTexture"),$._colorsTexture!==null&&ye.setValue(V,"batchingColorTexture",$._colorsTexture,jt));let Un=Q.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&ct.update($,Q,sn),(oi||Ut.receiveShadow!==$.receiveShadow)&&(Ut.receiveShadow=$.receiveShadow,ye.setValue(V,"receiveShadow",$.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&O.environment!==null&&(Ke.envMapIntensity.value=O.environmentIntensity),Ke.dfgLUT!==void 0&&(Ke.dfgLUT.value=Ix()),oi){if(ye.setValue(V,"toneMappingExposure",B.toneMappingExposure),Ut.needsLights&&Jl(Ke,vi),Et&&Z.fog===!0&&vt.refreshFogUniforms(Ke,Et),vt.refreshMaterialUniforms(Ke,Z,It,Yt,C.state.transmissionRenderTarget[S.id]),Ut.needsLights&&Ut.numLightProbeGrids>0){let Ue=A,$e=0;for(let Jn of C.state.lightProbeGridArray)Jn.texture!==null&&(Ue.textures[$e]=Jn.texture,Ue.min[$e]=Jn.boundingBox.min,Ue.max[$e]=Jn.boundingBox.max,Ue.resolution[$e]=Jn.resolution,$e++);for(let Jn in Ue)Ue[Jn].length=$e;Ke.probesSH.value=Ue.textures,Ke.probesMin.value=Ue.min,Ke.probesMax.value=Ue.max,Ke.probesResolution.value=Ue.resolution}fr.upload(V,Aa(Ut),Ke,jt)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(fr.upload(V,Aa(Ut),Ke,jt),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&ye.setValue(V,"center",$.center),ye.setValue(V,"modelViewMatrix",$.modelViewMatrix),ye.setValue(V,"normalMatrix",$.normalMatrix),ye.setValue(V,"modelMatrix",$.matrixWorld),Z.uniformsGroups!==void 0){let Ue=Z.uniformsGroups;for(let $e=0,Jn=Ue.length;$e<Jn;$e++){let Ca=Ue[$e];Xt.update(Ca,sn),Xt.bind(Ca,sn)}}return sn}function Jl(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.sunLights.needsUpdate=O,S.sunLightShadows.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function Kl(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return tt},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return pt},this.setRenderTargetTextures=function(S,O,Q){let Z=Wt.get(S);Z.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),Wt.get(S.texture).__webglTexture=O,Wt.get(S.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:Q,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,O){let Q=Wt.get(S);Q.__webglFramebuffer=O,Q.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(S,O=0,Q=0){pt=S,tt=O,j=Q;let Z=null,$=!1,Et=!1;if(S){let bt=Wt.get(S);if(bt.__useDefaultFramebuffer!==void 0){Tt.bindFramebuffer(V.FRAMEBUFFER,bt.__webglFramebuffer),mt.copy(S.viewport),Ht.copy(S.scissor),te=S.scissorTest,Tt.viewport(mt),Tt.scissor(Ht),Tt.setScissorTest(te),it=-1;return}else if(bt.__webglFramebuffer===void 0)jt.setupRenderTarget(S);else if(bt.__hasExternalTextures)jt.rebindTextures(S,Wt.get(S.texture).__webglTexture,Wt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let se=S.depthTexture;if(bt.__boundDepthTexture!==se){if(se!==null&&Wt.has(se)&&(S.width!==se.image.width||S.height!==se.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");jt.setupDepthRenderbuffer(S)}}let Lt=S.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(Et=!0);let zt=Wt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(zt[O])?Z=zt[O][Q]:Z=zt[O],$=!0):S.samples>0&&jt.useMultisampledRTT(S)===!1?Z=Wt.get(S).__webglMultisampledFramebuffer:Array.isArray(zt)?Z=zt[Q]:Z=zt,mt.copy(S.viewport),Ht.copy(S.scissor),te=S.scissorTest}else mt.copy(Kt).multiplyScalar(It).floor(),Ht.copy(Te).multiplyScalar(It).floor(),te=Ee;if(Q!==0&&(Z=G),Tt.bindFramebuffer(V.FRAMEBUFFER,Z)&&Tt.drawBuffers(S,Z),Tt.viewport(mt),Tt.scissor(Ht),Tt.setScissorTest(te),$){let bt=Wt.get(S.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+O,bt.__webglTexture,Q)}else if(Et){let bt=O;for(let Lt=0;Lt<S.textures.length;Lt++){let zt=Wt.get(S.textures[Lt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Lt,zt.__webglTexture,Q,bt)}}else if(S!==null&&Q!==0){let bt=Wt.get(S.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,bt.__webglTexture,Q)}it=-1};function hs(S){let O=Wt.get(S);return(O.__readFormat!==S.format||O.__readType!==S.type)&&(O.__readFormat=S.format,O.__readType=S.type,O.__formatReadable=Ie.textureFormatReadable(S.format),O.__typeReadable=Ie.textureTypeReadable(S.type)),O}this.readRenderTargetPixels=function(S,O,Q,Z,$,Et,Ft,bt=0){if(!(S&&S.isWebGLRenderTarget)){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Wt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ft!==void 0&&(Lt=Lt[Ft],Array.isArray(Lt)&&(Lt=Lt[0])),Lt){Tt.bindFramebuffer(V.FRAMEBUFFER,Lt);try{let zt=S.textures[bt],se=zt.format,ge=zt.type;S.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+bt);let Bt=hs(zt);if(Bt.__formatReadable===!1){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Bt.__typeReadable===!1){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-Z&&Q>=0&&Q<=S.height-$&&V.readPixels(O,Q,Z,$,yt.convert(se),yt.convert(ge),Et)}finally{let zt=pt!==null?Wt.get(pt).__webglFramebuffer:null;Tt.bindFramebuffer(V.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(S,O,Q,Z,$,Et,Ft,bt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=Wt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ft!==void 0&&(Lt=Lt[Ft],Array.isArray(Lt)&&(Lt=Lt[0])),Lt)if(O>=0&&O<=S.width-Z&&Q>=0&&Q<=S.height-$){Tt.bindFramebuffer(V.FRAMEBUFFER,Lt);let zt=S.textures[bt],se=zt.format,ge=zt.type;S.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+bt);let Bt=hs(zt);if(Bt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Bt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ue=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,ue),V.bufferData(V.PIXEL_PACK_BUFFER,Et.byteLength,V.STREAM_READ),V.readPixels(O,Q,Z,$,yt.convert(se),yt.convert(ge),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let Xe=pt!==null?Wt.get(pt).__webglFramebuffer:null;Tt.bindFramebuffer(V.FRAMEBUFFER,Xe);let Ce=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await ju(V,Ce,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,ue),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Et),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(ue),V.deleteSync(Ce),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,O=null,Q=0){let Z=Math.pow(2,-Q),$=Math.floor(S.image.width*Z),Et=Math.floor(S.image.height*Z),Ft=O!==null?O.x:0,bt=O!==null?O.y:0;jt.setTexture2D(S,0),V.copyTexSubImage2D(V.TEXTURE_2D,Q,0,0,Ft,bt,$,Et),Tt.unbindTexture()},this.copyTextureToTexture=function(S,O,Q=null,Z=null,$=0,Et=0){let Ft,bt,Lt,zt,se,ge,Bt,ue,Xe,Ce=S.isCompressedTexture?S.mipmaps[Et]:S.image;if(Q!==null)Ft=Q.max.x-Q.min.x,bt=Q.max.y-Q.min.y,Lt=Q.isBox3?Q.max.z-Q.min.z:1,zt=Q.min.x,se=Q.min.y,ge=Q.isBox3?Q.min.z:0;else{let ye=Math.pow(2,-$);Ft=Math.floor(Ce.width*ye),bt=Math.floor(Ce.height*ye),S.isDataArrayTexture?Lt=Ce.depth:S.isData3DTexture?Lt=Math.floor(Ce.depth*ye):Lt=1,zt=0,se=0,ge=0}Z!==null?(Bt=Z.x,ue=Z.y,Xe=Z.z):(Bt=0,ue=0,Xe=0);let Pe=yt.convert(O.format),Ze=yt.convert(O.type),Ut;O.isData3DTexture?(jt.setTexture3D(O,0),Ut=V.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(jt.setTexture2DArray(O,0),Ut=V.TEXTURE_2D_ARRAY):(jt.setTexture2D(O,0),Ut=V.TEXTURE_2D),Tt.activeTexture(V.TEXTURE0),Tt.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,O.flipY),Tt.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),Tt.pixelStorei(V.UNPACK_ALIGNMENT,O.unpackAlignment);let Je=Tt.getParameter(V.UNPACK_ROW_LENGTH),Zt=Tt.getParameter(V.UNPACK_IMAGE_HEIGHT),ai=Tt.getParameter(V.UNPACK_SKIP_PIXELS),sn=Tt.getParameter(V.UNPACK_SKIP_ROWS),Vi=Tt.getParameter(V.UNPACK_SKIP_IMAGES);Tt.pixelStorei(V.UNPACK_ROW_LENGTH,Ce.width),Tt.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ce.height),Tt.pixelStorei(V.UNPACK_SKIP_PIXELS,zt),Tt.pixelStorei(V.UNPACK_SKIP_ROWS,se),Tt.pixelStorei(V.UNPACK_SKIP_IMAGES,ge);let oi=S.isDataArrayTexture||S.isData3DTexture,vi=O.isDataArrayTexture||O.isData3DTexture;if(S.isDepthTexture){let ye=Wt.get(S),Ke=Wt.get(O),Un=Wt.get(ye.__renderTarget),Ue=Wt.get(Ke.__renderTarget);Tt.bindFramebuffer(V.READ_FRAMEBUFFER,Un.__webglFramebuffer),Tt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let $e=0;$e<Lt;$e++)oi&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Wt.get(S).__webglTexture,$,ge+$e),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Wt.get(O).__webglTexture,Et,Xe+$e)),V.blitFramebuffer(zt,se,zt+Ft,se+bt,Bt,ue,Bt+Ft,ue+bt,V.DEPTH_BUFFER_BIT,V.NEAREST);Tt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if($!==0||S.isRenderTargetTexture||Wt.has(S)){let ye=Wt.get(S),Ke=Wt.get(O);Tt.bindFramebuffer(V.READ_FRAMEBUFFER,D),Tt.bindFramebuffer(V.DRAW_FRAMEBUFFER,K);for(let Un=0;Un<Lt;Un++)oi?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ye.__webglTexture,$,ge+Un):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,ye.__webglTexture,$),vi?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ke.__webglTexture,Et,Xe+Un):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ke.__webglTexture,Et),$!==0?V.blitFramebuffer(zt,se,zt+Ft,se+bt,Bt,ue,Bt+Ft,ue+bt,V.COLOR_BUFFER_BIT,V.NEAREST):vi?V.copyTexSubImage3D(Ut,Et,Bt,ue,Xe+Un,zt,se,Ft,bt):V.copyTexSubImage2D(Ut,Et,Bt,ue,zt,se,Ft,bt);Tt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else vi?S.isDataTexture||S.isData3DTexture?V.texSubImage3D(Ut,Et,Bt,ue,Xe,Ft,bt,Lt,Pe,Ze,Ce.data):O.isCompressedArrayTexture?V.compressedTexSubImage3D(Ut,Et,Bt,ue,Xe,Ft,bt,Lt,Pe,Ce.data):V.texSubImage3D(Ut,Et,Bt,ue,Xe,Ft,bt,Lt,Pe,Ze,Ce):S.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Et,Bt,ue,Ft,bt,Pe,Ze,Ce.data):S.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Et,Bt,ue,Ce.width,Ce.height,Pe,Ce.data):V.texSubImage2D(V.TEXTURE_2D,Et,Bt,ue,Ft,bt,Pe,Ze,Ce);Tt.pixelStorei(V.UNPACK_ROW_LENGTH,Je),Tt.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Zt),Tt.pixelStorei(V.UNPACK_SKIP_PIXELS,ai),Tt.pixelStorei(V.UNPACK_SKIP_ROWS,sn),Tt.pixelStorei(V.UNPACK_SKIP_IMAGES,Vi),Et===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&V.generateMipmap(Ut),Tt.unbindTexture()},this.initRenderTarget=function(S){Wt.get(S).__webglFramebuffer===void 0&&jt.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?jt.setTextureCube(S,0):S.isData3DTexture?jt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?jt.setTexture2DArray(S,0):jt.setTexture2D(S,0),Tt.unbindTexture()},this.resetState=function(){tt=0,j=0,pt=null,Tt.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Me._getDrawingBufferColorSpace(t),e.unpackColorSpace=Me._getUnpackColorSpace()}};var Bd={type:"change"},wh={type:"start"},zd={type:"end"},Il=new vs,kd=new kn,Dx=Math.cos(70*lh.DEG2RAD),tn=new Y,Ln=2*Math.PI,we={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},bh=1e-6,Ll=class extends Kr{constructor(t,e=null){super(t,e),this.state=we.NONE,this.target=new Y,this.cursor=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ts.ROTATE,MIDDLE:ts.DOLLY,RIGHT:ts.PAN},this.touches={ONE:es.ROTATE,TWO:es.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new Y,this._lastQuaternion=new Vn,this._lastTargetPosition=new Y,this._quat=new Vn().setFromUnitVectors(t.up,new Y(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new or,this._sphericalDelta=new or,this._scale=1,this._panOffset=new Y,this._rotateStart=new ie,this._rotateEnd=new ie,this._rotateDelta=new ie,this._panStart=new ie,this._panEnd=new ie,this._panDelta=new ie,this._dollyStart=new ie,this._dollyEnd=new ie,this._dollyDelta=new ie,this._dollyDirection=new Y,this._mouse=new ie,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ux.bind(this),this._onPointerDown=Nx.bind(this),this._onPointerUp=Fx.bind(this),this._onContextMenu=Gx.bind(this),this._onMouseWheel=kx.bind(this),this._onKeyDown=zx.bind(this),this._onTouchStart=Vx.bind(this),this._onTouchMove=Hx.bind(this),this._onMouseDown=Ox.bind(this),this._onMouseMove=Bx.bind(this),this._interceptControlDown=Wx.bind(this),this._interceptControlUp=Xx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=we.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Bd),this.update(),this.state=we.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;tn.copy(e).sub(this.target),tn.applyQuaternion(this._quat),this._spherical.setFromVector3(tn),this.autoRotate&&this.state===we.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ln:n>Math.PI&&(n-=Ln),s<-Math.PI?s+=Ln:s>Math.PI&&(s-=Ln),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(tn.setFromSpherical(this._spherical),tn.applyQuaternion(this._quatInverse),e.copy(this.target).add(tn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=tn.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new Y(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new Y(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=tn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Il.origin.copy(this.object.position),Il.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Il.direction))<Dx?this.object.lookAt(this.target):(kd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Il.intersectPlane(kd,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>bh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>bh||this._lastTargetPosition.distanceToSquared(this.target)>bh?(this.dispatchEvent(Bd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ln/60*this.autoRotateSpeed*t:Ln/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){tn.setFromMatrixColumn(e,0),tn.multiplyScalar(-t),this._panOffset.add(tn)}_panUp(t,e){this.screenSpacePanning===!0?tn.setFromMatrixColumn(e,1):(tn.setFromMatrixColumn(e,0),tn.crossVectors(this.object.up,tn)),tn.multiplyScalar(t),this._panOffset.add(tn)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;tn.copy(s).sub(this.target);let r=tn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ln*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ln*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ln*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ln*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ie,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Nx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Ux(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Fx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(zd),this.state=we.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Ox(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ts.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=we.DOLLY;break;case ts.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=we.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=we.ROTATE}break;case ts.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=we.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=we.PAN}break;default:this.state=we.NONE}this.state!==we.NONE&&this.dispatchEvent(wh)}function Bx(i){switch(this.state){case we.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case we.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case we.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function kx(i){this.enabled===!1||this.enableZoom===!1||this.state!==we.NONE||(i.preventDefault(),this.dispatchEvent(wh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(zd))}function zx(i){this.enabled!==!1&&this._handleKeyDown(i)}function Vx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case es.ROTATE:if(this.enableRotate===!1){this.state=we.NONE;break}this._handleTouchStartRotate(i),this.state=we.TOUCH_ROTATE;break;case es.PAN:if(this.enablePan===!1){this.state=we.NONE;break}this._handleTouchStartPan(i),this.state=we.TOUCH_PAN;break;default:this.state=we.NONE}break;case 2:switch(this.touches.TWO){case es.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=we.TOUCH_DOLLY_PAN;break;case es.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=we.TOUCH_DOLLY_ROTATE;break;default:this.state=we.NONE}break;default:this.state=we.NONE}this.state!==we.NONE&&this.dispatchEvent(wh)}function Hx(i){switch(this._trackPointer(i),this.state){case we.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case we.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case we.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case we.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=we.NONE}}function Gx(i){this.enabled!==!1&&i.preventDefault()}function Wx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Xx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}async function $x(i={}){var t,e=i,n=!!globalThis.window,s=!!globalThis.WorkerGlobalScope,r=globalThis.process?.versions?.node&&globalThis.process?.type!="renderer";if(r){let{createRequire:h}=await import("node:module");var a=h(import.meta.url)}var o=!1;e.setup=function(){if(o)return;o=!0,e.initTBB();function h(L,z,rt=(ht=>ht)){if(z)for(let ht of z)L.push_back(rt(ht));return L}function d(L,z=(rt=>rt)){let rt=[],ht=L.size();for(let kt=0;kt<ht;kt++)rt.push(z(L.get(kt)));return rt}function T(L,z=(rt=>rt)){let rt=[],ht=L.size();for(let kt=0;kt<ht;kt++){let re=L.get(kt),ve=re.size(),Fe=[];for(let Le=0;Le<ve;Le++)Fe.push(z(re.get(Le)));rt.push(Fe)}return rt}function P(L){return L[0].length<3&&(L=[L]),h(new e.Vector2_vec2,L,z=>h(new e.Vector_vec2,z,rt=>rt instanceof Array?{x:rt[0],y:rt[1]}:rt))}function U(L){for(let z=0;z<L.size();z++)L.get(z).delete();L.delete()}function W(L){return L[0]instanceof Array?{x:L[0][0],y:L[0][1]}:typeof L[0]=="number"?{x:L[0]||0,y:L[1]||0}:L[0]}function X(L){return L[0]instanceof Array?{x:L[0][0],y:L[0][1],z:L[0][2]}:typeof L[0]=="number"?{x:L[0]||0,y:L[1]||0,z:L[2]||0}:L[0]}function J(L){return L=="EvenOdd"?0:L=="NonZero"?1:L=="Negative"?3:2}function lt(L){return L=="Round"?1:L=="Miter"?2:0}let ft=e.CrossSection;function xt(L,z="Positive"){if(L instanceof ft)return L;{let rt=P(L),ht=new ft(rt,J(z));return U(rt),ht}}e.CrossSection.prototype.translate=function(...L){return this._Translate(W(L))},e.CrossSection.prototype.scale=function(L){return typeof L=="number"?this._Scale({x:L,y:L}):this._Scale(W([L]))},e.CrossSection.prototype.mirror=function(L){return this._Mirror(W([L]))},e.CrossSection.prototype.warp=function(L){let z=ds(function(ht){let kt=me(ht,"double"),re=me(ht+8,"double"),ve=[kt,re];L(ve),Ne(ht,ve[0],"double"),Ne(ht+8,ve[1],"double")},"vi"),rt=this._Warp(z);return fs(z),rt},e.CrossSection.prototype.decompose=function(){let L=this._Decompose(),z=d(L);return L.delete(),z},e.CrossSection.prototype.bounds=function(){let L=this._Bounds();return{min:["x","y"].map(z=>L.min[z]),max:["x","y"].map(z=>L.max[z])}},e.CrossSection.prototype.offset=function(L,z="Round",rt=2,ht=0){return this._Offset(L,lt(z),rt,ht)},e.CrossSection.prototype.simplify=function(L=1e-6){return this._Simplify(L)},e.CrossSection.prototype.extrude=function(L,z=0,rt=0,ht=[1,1],kt=!1){ht=W([ht]);let re=e._Extrude(this._ToPolygons(),L,z,rt,ht);return kt?re.translate([0,0,-L/2]):re},e.CrossSection.prototype.revolve=function(L=0,z=360){return e._Revolve(this._ToPolygons(),L,z)},e.CrossSection.prototype.add=function(L){return this._add(xt(L))},e.CrossSection.prototype.subtract=function(L){return this._subtract(xt(L))},e.CrossSection.prototype.intersect=function(L){return this._intersect(xt(L))},e.CrossSection.prototype.toPolygons=function(){let L=this._ToPolygons(),z=T(L,rt=>[rt.x,rt.y]);return L.delete(),z},e.Manifold.prototype.smoothOut=function(L=52.5,z=0){return this._SmoothOut(L,z)},e.Manifold.prototype.warp=function(L){let z=ds(function(kt){let re=me(kt,"double"),ve=me(kt+8,"double"),Fe=me(kt+16,"double"),Le=[re,ve,Fe];L(Le),Ne(kt,Le[0],"double"),Ne(kt+8,Le[1],"double"),Ne(kt+16,Le[2],"double")},"vi"),rt=this._Warp(z);fs(z);let ht=rt.status();if(ht!=="NoError")throw new e.ManifoldError(ht);return rt},e.Manifold.prototype.warpBatch=function(L){let z=ds(function(kt,re){let ve=e.HEAPF64??K;if(!ve)throw new Error("WASM heap is not initialized (HEAPF64 unavailable)");let Fe=new Float64Array(ve.buffer,kt,re*3);L(Fe,re)},"vii"),rt=this._WarpBatch(z);fs(z);let ht=rt.status();if(ht!=="NoError")throw new e.ManifoldError(ht);return rt},e.Manifold.prototype.calculateNormals=function(L=0,z=52.5){return this._CalculateNormals(L,z)},e.Manifold.prototype.smoothByNormals=function(L=0){return this._SmoothByNormals(L)},e.Manifold.prototype.setProperties=function(L,z){let rt=this.numProp(),ht=ds(function(re,ve,Fe){let Le=[];for(let Oe=0;Oe<L;++Oe)Le[Oe]=me(re+8*Oe,"double");let li=[];for(let Oe=0;Oe<3;++Oe)li[Oe]=me(ve+8*Oe,"double");let Hi=[];for(let Oe=0;Oe<rt;++Oe)Hi[Oe]=me(Fe+8*Oe,"double");z(Le,li,Hi);for(let Oe=0;Oe<L;++Oe)Ne(re+8*Oe,Le[Oe],"double")},"viii"),kt=this._SetProperties(L,ht);return fs(ht),kt},e.Manifold.prototype.translate=function(...L){return this._Translate(X(L))},e.Manifold.prototype.rotate=function(L,z,rt){return Array.isArray(L)?this._Rotate(...L):this._Rotate(L,z||0,rt||0)},e.Manifold.prototype.scale=function(L){return typeof L=="number"?this._Scale({x:L,y:L,z:L}):this._Scale(X([L]))},e.Manifold.prototype.mirror=function(L){return this._Mirror(X([L]))},e.Manifold.prototype.trimByPlane=function(L,z=0){return this._TrimByPlane(X([L]),z)},e.Manifold.prototype.slice=function(L=0){let z=this._Slice(L),rt=new ft(z,J("Positive"));return U(z),rt},e.Manifold.prototype.project=function(){let L=this._Project(),z=new ft(L,J("Positive"));return U(L),z},e.Manifold.prototype.rayCast=function(L,z){let rt=this._RayCast(X([L]),X([z])),ht=d(rt,kt=>({faceID:kt.faceID,distance:kt.distance,position:["x","y","z"].map(re=>kt.position[re]),normal:["x","y","z"].map(re=>kt.normal[re])}));return rt.delete(),ht},e.Manifold.prototype.split=function(L){let z=this._Split(L),rt=d(z);return z.delete(),rt},e.Manifold.prototype.splitByPlane=function(L,z=0){let rt=this._SplitByPlane(X([L]),z),ht=d(rt);return rt.delete(),ht},e.Manifold.prototype.decompose=function(){let L=this._Decompose(),z=d(L);return L.delete(),z},e.Manifold.prototype.boundingBox=function(){let L=this._boundingBox();return{min:["x","y","z"].map(z=>L.min[z]),max:["x","y","z"].map(z=>L.max[z])}},e.Manifold.prototype.simplify=function(L=0){return this._Simplify(L)};class At{constructor({numProp:z=3,triVerts:rt=new Uint32Array,vertProperties:ht=new Float32Array,mergeFromVert:kt,mergeToVert:re,runIndex:ve,runOriginalID:Fe,faceID:Le,halfedgeTangent:li,runTransform:Hi,runFlags:Oe,tolerance:nc=0}={}){this.numProp=z,this.triVerts=rt,this.vertProperties=ht,this.mergeFromVert=kt,this.mergeToVert=re,this.runIndex=ve,this.runOriginalID=Fe,this.faceID=Le,this.halfedgeTangent=li,this.runTransform=Hi,this.runFlags=Oe,this.tolerance=nc}get numTri(){return this.triVerts.length/3}get numVert(){return this.vertProperties.length/this.numProp}get numRun(){return this.runOriginalID.length}merge(){let{changed:z,mesh:rt}=e._Merge(this);return Object.assign(this,{...rt}),z}verts(z){return this.triVerts.subarray(3*z,3*(z+1))}position(z){return this.vertProperties.subarray(this.numProp*z,this.numProp*z+3)}extras(z){return this.vertProperties.subarray(this.numProp*z+3,this.numProp*(z+1))}tangent(z){return this.halfedgeTangent.subarray(4*z,4*(z+1))}transform(z){let rt=new Array(16);for(let ht of[0,1,2,3])for(let kt of[0,1,2])rt[4*ht+kt]=this.runTransform[12*z+3*ht+kt];return rt[15]=1,rt}backside(z){return this.runFlags!=null&&z<this.runFlags.length&&(this.runFlags[z]&1)!==0}hasNormals(z){return this.runFlags!=null&&z<this.runFlags.length&&(this.runFlags[z]&2)!==0}}e.Mesh=At,e.Manifold.prototype.getMesh=function(L=-1){return new At(this._GetMeshJS(L))},e.ManifoldError=function(z,...rt){let ht="Unknown error";switch(z){case"NonFiniteVertex":ht="Non-finite vertex";break;case"NotManifold":ht="Not manifold";break;case"VertexOutOfBounds":ht="Vertex index out of bounds";break;case"PropertiesWrongLength":ht="Properties have wrong length";break;case"MissingPositionProperties":ht="Less than three properties";break;case"MergeVectorsDifferentLengths":ht="Merge vectors have different lengths";break;case"MergeIndexOutOfBounds":ht="Merge index out of bounds";break;case"TransformWrongLength":ht="Transform vector has wrong length";break;case"RunIndexWrongLength":ht="Run index vector has wrong length";break;case"FaceIDWrongLength":ht="Face ID vector has wrong length";break;case"InvalidConstruction":ht="Manifold constructed with invalid parameters";break;case"ResultTooLarge":ht="Result exceeds maximum size";break;case"InvalidTangents":ht="Invalid halfedge tangents";break}let kt=Error.apply(this,[ht,...rt]);kt.name=this.name="ManifoldError",this.message=kt.message,this.stack=kt.stack,this.code=z},e.ManifoldError.prototype=Object.create(Error.prototype,{constructor:{value:e.ManifoldError,writable:!0,configurable:!0}}),e.CrossSection=function(L,z="Positive"){let rt=P(L),ht=new ft(rt,J(z));return U(rt),ht},e.CrossSection.ofPolygons=function(L,z="Positive"){return new e.CrossSection(L,z)},e.CrossSection.square=function(...L){let z;L.length==0?z={x:1,y:1}:typeof L[0]=="number"?z={x:L[0],y:L[0]}:z=W(L);let rt=L[1]||!1;return e._Square(z,rt)},e.CrossSection.circle=function(L,z=0){return e._Circle(L,z)};function Nt(L){return function(...z){z.length==1&&(z=z[0]);let rt=new e.Vector_crossSection;for(let kt of z)rt.push_back(xt(kt));let ht=e["_crossSection"+L](rt);return rt.delete(),ht}}e.CrossSection.compose=Nt("Compose"),e.CrossSection.union=Nt("UnionN"),e.CrossSection.difference=Nt("DifferenceN"),e.CrossSection.intersection=Nt("IntersectionN");function Vt(L,z){h(L,z,rt=>rt instanceof Array?{x:rt[0],y:rt[1]}:rt)}e.CrossSection.hull=function(...L){L.length==1&&(L=L[0]);let z=new e.Vector_vec2;for(let ht of L)if(ht instanceof ft)e._crossSectionCollectVertices(z,ht);else if(ht instanceof Array&&ht.length==2&&typeof ht[0]=="number")z.push_back({x:ht[0],y:ht[1]});else if(ht.x)z.push_back(ht);else{let re=ht[0].length==2&&typeof ht[0][0]=="number"||ht[0].x?[ht]:ht;for(let ve of re)Vt(z,ve)}let rt=e._crossSectionHullPoints(z);return z.delete(),rt},e.CrossSection.prototype=Object.create(ft.prototype),Object.defineProperty(e.CrossSection,Symbol.hasInstance,{get:()=>L=>L instanceof ft});let qt=e.Manifold;e.Manifold=function(L){let z=new qt(L),rt=z.status();if(rt!=="NoError")throw new e.ManifoldError(rt);return z},e.Manifold.ofMesh=function(L){return new e.Manifold(L)},e.Manifold.tetrahedron=function(){return e._Tetrahedron()},e.Manifold.cube=function(...L){let z;L.length==0?z={x:1,y:1,z:1}:typeof L[0]=="number"?z={x:L[0],y:L[0],z:L[0]}:z=X(L);let rt=L[1]||!1;return e._Cube(z,rt)},e.Manifold.cylinder=function(L,z,rt=-1,ht=0,kt=!1){return e._Cylinder(L,z,rt,ht,kt)},e.Manifold.sphere=function(L,z=0){return e._Sphere(L,z)},e.Manifold.smooth=function(L,z=[]){let rt=new e.Vector_smoothness;h(rt,z);let ht=e._Smooth(L,rt);return rt.delete(),ht},e.Manifold.extrude=function(L,z,rt=0,ht=0,kt=[1,1],re=!1){return(L instanceof ft?L:e.CrossSection(L,"Positive")).extrude(z,rt,ht,kt,re)},e.Manifold.revolve=function(L,z=0,rt=360){return(L instanceof ft?L:e.CrossSection(L,"Positive")).revolve(z,rt)},e.Manifold.reserveIDs=function(L){return e._ReserveIDs(L)};function Qt(L){return function(...z){z.length==1&&(z=z[0]);let rt=new e.Vector_manifold;for(let kt of z)rt.push_back(kt);let ht=e["_manifold"+L+"N"](rt);return rt.delete(),ht}}e.Manifold.union=Qt("Union"),e.Manifold.compose=e.Manifold.union,e.Manifold.difference=Qt("Difference"),e.Manifold.intersection=Qt("Intersection"),e.Manifold.levelSet=function(L,z,rt,ht=0,kt=-1){let re={min:{x:z.min[0],y:z.min[1],z:z.min[2]},max:{x:z.max[0],y:z.max[1],z:z.max[2]}},ve=ds(function(Le){let li=me(Le,"double"),Hi=me(Le+8,"double"),Oe=me(Le+16,"double");return L([li,Hi,Oe])},"di"),Fe=e._LevelSet(ve,re,rt,ht,kt);return fs(ve),Fe},e.ExecutionContext.prototype.fromMesh=function(L){return this._FromMesh(L)},e.ExecutionContext.prototype.smooth=function(L,z=[]){let rt=new e.Vector_smoothness;h(rt,z);let ht=this._Smooth(L,rt);return rt.delete(),ht},e.ExecutionContext.prototype.levelSet=function(L,z,rt,ht=0,kt=-1){let re={min:{x:z.min[0],y:z.min[1],z:z.min[2]},max:{x:z.max[0],y:z.max[1],z:z.max[2]}},ve=ds(function(Le){let li=me(Le,"double"),Hi=me(Le+8,"double"),Oe=me(Le+16,"double");return L([li,Hi,Oe])},"di"),Fe=this._LevelSet(ve,re,rt,ht,kt);return fs(ve),Fe};function he(L,z){h(L,z,rt=>rt instanceof Array?{x:rt[0],y:rt[1],z:rt[2]}:rt)}e.Manifold.hull=function(...L){L.length==1&&(L=L[0]);let z=new e.Vector_vec3;for(let ht of L)ht instanceof qt?e._manifoldCollectVertices(z,ht):ht instanceof Array&&ht.length==3&&typeof ht[0]=="number"?z.push_back({x:ht[0],y:ht[1],z:ht[2]}):ht.x?z.push_back(ht):he(z,ht);let rt=e._manifoldHullPoints(z);return z.delete(),rt},e.Manifold.prototype=Object.create(qt.prototype),Object.defineProperty(e.Manifold,Symbol.hasInstance,{get:()=>L=>L instanceof qt}),e.triangulate=function(L,z=-1,rt=!0){let ht=P(L),kt=d(e._Triangulate(ht,z,rt),re=>[re[0],re[1],re[2]]);return U(ht),kt}};var l=[],c="./this.program",f=(h,d)=>{throw d},p=import.meta.url,u="";function m(h){return e.locateFile?e.locateFile(h,u):u+h}var y,M;if(r){var g=a("node:fs");p.startsWith("file:")&&(u=a("node:path").dirname(a("node:url").fileURLToPath(p))+"/"),M=h=>{h=E(h)?new URL(h):h;var d=g.readFileSync(h);return d},y=async(h,d=!0)=>{h=E(h)?new URL(h):h;var T=g.readFileSync(h,d?void 0:"utf8");return T},process.argv.length>1&&(c=process.argv[1].replace(/\\/g,"/")),l=process.argv.slice(2),f=(h,d)=>{throw process.exitCode=h,d}}else if(n||s){try{u=new URL(".",p).href}catch{}s&&(M=h=>{var d=new XMLHttpRequest;return d.open("GET",h,!1),d.responseType="arraybuffer",d.send(null),new Uint8Array(d.response)}),y=async h=>{if(E(h))return new Promise((T,P)=>{var U=new XMLHttpRequest;U.open("GET",h,!0),U.responseType="arraybuffer",U.onload=()=>{if(U.status==200||U.status==0&&U.response){T(U.response);return}P(U.status)},U.onerror=P,U.send(null)});var d=await fetch(h,{credentials:"same-origin"});if(d.ok)return d.arrayBuffer();throw new Error(d.status+" : "+d.url)}}var _=console.log.bind(console),b=console.error.bind(console),I,A=!1,E=h=>h.startsWith("file://"),C,x,w,H,B,F,k,G,D,K,tt,j,pt=!1;function it(){var h=Pa.buffer;w=new Int8Array(h),B=new Int16Array(h),H=new Uint8Array(h),F=new Uint16Array(h),k=new Int32Array(h),G=new Uint32Array(h),D=new Float32Array(h),K=new Float64Array(h),tt=new BigInt64Array(h),j=new BigUint64Array(h)}function dt(){if(e.preRun)for(typeof e.preRun=="function"&&(e.preRun=[e.preRun]);e.preRun.length;)dn(e.preRun.shift());Ee(We)}function mt(){pt=!0,ps.J()}function Ht(){if(e.postRun)for(typeof e.postRun=="function"&&(e.postRun=[e.postRun]);e.postRun.length;)Ye(e.postRun.shift());Ee(pe)}function te(h){e.onAbort?.(h),h="Aborted("+h+")",b(h),A=!0,h+=". Build with -sASSERTIONS for more info.";var d=new WebAssembly.RuntimeError(h);throw x?.(d),d}var ot;function Pt(){return e.locateFile?m("manifold.wasm"):new URL("manifold.wasm",import.meta.url).href}function Ot(h){if(h==ot&&I)return new Uint8Array(I);if(M)return M(h);throw"both async and sync fetching of the wasm failed"}async function Yt(h){if(!I)try{var d=await y(h);return new Uint8Array(d)}catch{}return Ot(h)}async function It(h,d){try{var T=await Yt(h),P=await WebAssembly.instantiate(T,d);return P}catch(U){b(`failed to asynchronously prepare wasm: ${U}`),te(U)}}async function oe(h,d,T){if(!h&&!E(d)&&!r)try{var P=fetch(d,{credentials:"same-origin"}),U=await WebAssembly.instantiateStreaming(P,T);return U}catch(W){b(`wasm streaming compile failed: ${W}`),b("falling back to ArrayBuffer instantiation")}return It(d,T)}function Ge(){var h={a:Yf};return h}async function Kt(){function h(W,X){return ps=W.exports,ps=Zf(ps),qf(ps),it(),ps}function d(W){return h(W.instance)}var T=Ge();if(e.instantiateWasm)return new Promise((W,X)=>{e.instantiateWasm(T,(J,lt)=>{W(h(J,lt))})});ot??=Pt();var P=await oe(I,ot,T),U=d(P);return U}class Te{name="ExitStatus";constructor(d){this.message=`Program terminated with exit(${d})`,this.status=d}}var Ee=h=>{for(;h.length>0;)h.shift()(e)},pe=[],Ye=h=>pe.push(h),We=[],dn=h=>We.push(h);function me(h,d="i8"){switch(d.endsWith("*")&&(d="*"),d){case"i1":return w[h>>>0];case"i8":return w[h>>>0];case"i16":return B[h>>>1>>>0];case"i32":return k[h>>>2>>>0];case"i64":return tt[h>>>3>>>0];case"float":return D[h>>>2>>>0];case"double":return K[h>>>3>>>0];case"*":return G[h>>>2>>>0];default:te(`invalid type for getValue: ${d}`)}}var Xn=!0;function Ne(h,d,T="i8"){switch(T.endsWith("*")&&(T="*"),T){case"i1":w[h>>>0]=d;break;case"i8":w[h>>>0]=d;break;case"i16":B[h>>>1>>>0]=d;break;case"i32":k[h>>>2>>>0]=d;break;case"i64":tt[h>>>3>>>0]=BigInt(d);break;case"float":D[h>>>2>>>0]=d;break;case"double":K[h>>>3>>>0]=d;break;case"*":G[h>>>2>>>0]=d;break;default:te(`invalid type for setValue: ${T}`)}}class En{constructor(d){this.excPtr=d,this.ptr=d-24}set_type(d){G[this.ptr+4>>>2>>>0]=d}get_type(){return G[this.ptr+4>>>2>>>0]}set_destructor(d){G[this.ptr+8>>>2>>>0]=d}get_destructor(){return G[this.ptr+8>>>2>>>0]}set_caught(d){d=d?1:0,w[this.ptr+12>>>0]=d}get_caught(){return w[this.ptr+12>>>0]!=0}set_rethrown(d){d=d?1:0,w[this.ptr+13>>>0]=d}get_rethrown(){return w[this.ptr+13>>>0]!=0}init(d,T){this.set_adjusted_ptr(0),this.set_type(d),this.set_destructor(T)}set_adjusted_ptr(d){G[this.ptr+16>>>2>>>0]=d}get_adjusted_ptr(){return G[this.ptr+16>>>2>>>0]}}var xn=0,An=0;function V(h,d,T){h>>>=0,d>>>=0,T>>>=0;var P=new En(h);throw P.init(d,T),xn=h,An++,xn}var Rn=()=>te(""),Re={},Ie=h=>{for(;h.length;){var d=h.pop(),T=h.pop();T(d)}};function Tt(h){return this.fromWireType(G[h>>>2>>>0])}var De={},Wt={},jt={},R=class extends Error{constructor(d){super(d),this.name="InternalError"}},v=h=>{throw new R(h)},q=(h,d,T)=>{h.forEach(J=>jt[J]=d);function P(J){var lt=T(J);lt.length!==h.length&&v("Mismatched type converter count");for(var ft=0;ft<h.length;++ft)et(h[ft],lt[ft])}var U=new Array(d.length),W=[],X=0;for(let[J,lt]of d.entries())Wt.hasOwnProperty(lt)?U[J]=Wt[lt]:(W.push(lt),De.hasOwnProperty(lt)||(De[lt]=[]),De[lt].push(()=>{U[J]=Wt[lt],++X,X===W.length&&P(U)}));W.length===0&&P(U)},_t=function(h){h>>>=0;var d=Re[h];delete Re[h];var T=d.rawConstructor,P=d.rawDestructor,U=d.fields,W=U.map(X=>X.getterReturnType).concat(U.map(X=>X.setterArgumentType));q([h],W,X=>{var J={};for(var[lt,ft]of U.entries()){let xt=X[lt],At=ft.getter,Nt=ft.getterContext,Vt=X[lt+U.length],qt=ft.setter,Qt=ft.setterContext;J[ft.fieldName]={read:he=>xt.fromWireType(At(Nt,he)),write:(he,L)=>{var z=[];qt(Qt,he,Vt.toWireType(z,L)),Ie(z)},optional:xt.optional}}return[{name:d.name,fromWireType:xt=>{var At={};for(var Nt in J)At[Nt]=J[Nt].read(xt);return P(xt),At},toWireType:(xt,At)=>{for(var Nt in J)if(!(Nt in At)&&!J[Nt].optional)throw new TypeError(`Missing field: "${Nt}"`);var Vt=T();for(Nt in J)J[Nt].write(Vt,At[Nt]);return xt!==null&&xt.push(P,Vt),Vt},readValueFromPointer:Tt,destructorFunction:P}]})},nt=h=>{h>>>=0;for(var d="";;){var T=H[h++>>>0];if(!T)return d;d+=String.fromCharCode(T)}},vt=class extends Error{constructor(d){super(d),this.name="BindingError"}},ut=h=>{throw new vt(h)};function at(h,d,T={}){var P=d.name;if(h||ut(`type "${P}" must have a positive integer typeid pointer`),Wt.hasOwnProperty(h)){if(T.ignoreDuplicateRegistrations)return;ut(`Cannot register type '${P}' twice`)}if(Wt[h]=d,delete jt[h],De.hasOwnProperty(h)){var U=De[h];delete De[h],U.forEach(W=>W())}}function et(h,d,T={}){return at(h,d,T)}var wt=(h,d,T)=>{switch(d){case 1:return T?P=>w[P>>>0]:P=>H[P>>>0];case 2:return T?P=>B[P>>>1>>>0]:P=>F[P>>>1>>>0];case 4:return T?P=>k[P>>>2>>>0]:P=>G[P>>>2>>>0];case 8:return T?P=>tt[P>>>3>>>0]:P=>j[P>>>3>>>0];default:throw new TypeError(`invalid integer width (${d}): ${h}`)}},N=function(h,d,T,P,U){h>>>=0,d>>>=0,T>>>=0,d=nt(d);let W=P===0n,X=J=>J;if(W){let J=T*8;X=lt=>BigInt.asUintN(J,lt),U=X(U)}et(h,{name:d,fromWireType:X,toWireType:(J,lt)=>(typeof lt=="number"&&(lt=BigInt(lt)),lt),readValueFromPointer:wt(d,T,!W),destructorFunction:null})};function ct(h,d,T,P){h>>>=0,d>>>=0,d=nt(d),et(h,{name:d,fromWireType:function(U){return!!U},toWireType:function(U,W){return W?T:P},readValueFromPointer:function(U){return this.fromWireType(H[U>>>0])},destructorFunction:null})}var st=h=>({count:h.count,deleteScheduled:h.deleteScheduled,preservePointerOnDelete:h.preservePointerOnDelete,ptr:h.ptr,ptrType:h.ptrType,smartPtr:h.smartPtr,smartPtrType:h.smartPtrType}),Mt=h=>{function d(T){return T.$$.ptrType.registeredClass.name}ut(d(h)+" instance already deleted")},yt=!1,St=h=>{},Xt=h=>{h.smartPtr?h.smartPtrType.rawDestructor(h.smartPtr):h.ptrType.registeredClass.rawDestructor(h.ptr)},le=h=>{h.count.value-=1;var d=h.count.value===0;d&&Xt(h)},gt=h=>globalThis.FinalizationRegistry?(yt=new FinalizationRegistry(d=>{le(d.$$)}),gt=d=>{var T=d.$$,P=!!T.smartPtr;if(P){var U={$$:T};yt.register(d,U,d)}return d},St=d=>yt.unregister(d),gt(h)):(gt=d=>d,h),$t=[],ce=()=>{for(;$t.length;){var h=$t.pop();h.$$.deleteScheduled=!1,h.delete()}},Ct,be=()=>{let h=He.prototype;Object.assign(h,{isAliasOf(T){if(!(this instanceof He)||!(T instanceof He))return!1;var P=this.$$.ptrType.registeredClass,U=this.$$.ptr;T.$$=T.$$;for(var W=T.$$.ptrType.registeredClass,X=T.$$.ptr;P.baseClass;)U=P.upcast(U),P=P.baseClass;for(;W.baseClass;)X=W.upcast(X),W=W.baseClass;return P===W&&U===X},clone(){if(this.$$.ptr||Mt(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var T=gt(Object.create(Object.getPrototypeOf(this),{$$:{value:st(this.$$)}}));return T.$$.count.value+=1,T.$$.deleteScheduled=!1,T},delete(){this.$$.ptr||Mt(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&ut("Object already scheduled for deletion"),St(this),le(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||Mt(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&ut("Object already scheduled for deletion"),$t.push(this),$t.length===1&&Ct&&Ct(ce),this.$$.deleteScheduled=!0,this}});let d=Symbol.dispose;d&&(h[d]=h.delete)};function He(){}var Nn=(h,d)=>Object.defineProperty(d,"name",{value:h}),Mr={},Ls=(h,d,T)=>{if(h[d].overloadTable===void 0){var P=h[d];h[d]=function(...U){return h[d].overloadTable.hasOwnProperty(U.length)||ut(`Function '${T}' called with an invalid number of arguments (${U.length}) - expects one of (${h[d].overloadTable})!`),h[d].overloadTable[U.length].apply(this,U)},h[d].overloadTable=[],h[d].overloadTable[P.argCount]=P}},cs=(h,d,T)=>{e.hasOwnProperty(h)?((T===void 0||e[h].overloadTable!==void 0&&e[h].overloadTable[T]!==void 0)&&ut(`Cannot register public name '${h}' twice`),Ls(e,h,h),e[h].overloadTable.hasOwnProperty(T)&&ut(`Cannot register multiple overloads of a function with the same number of arguments (${T})!`),e[h].overloadTable[T]=d):(e[h]=d,e[h].argCount=T)},ba=48,wa=57,yi=h=>{h=h.replace(/[^a-zA-Z0-9_]/g,"$");var d=h.charCodeAt(0);return d>=ba&&d<=wa?`_${h}`:h};function Sr(h,d,T,P,U,W,X,J){this.name=h,this.constructor=d,this.instancePrototype=T,this.rawDestructor=P,this.baseClass=U,this.getActualType=W,this.upcast=X,this.downcast=J,this.pureVirtualFunctions=[]}var Ds=(h,d,T)=>{for(;d!==T;)d.upcast||ut(`Expected null or instance of ${T.name}, got an instance of ${d.name}`),h=d.upcast(h),d=d.baseClass;return h},Ns=h=>{if(h===null)return"null";var d=typeof h;return d==="object"||d==="array"||d==="function"?h.toString():""+h};function Us(h,d){if(d===null)return this.isReference&&ut(`null is not a valid ${this.name}`),0;d.$$||ut(`Cannot pass "${Ns(d)}" as a ${this.name}`),d.$$.ptr||ut(`Cannot pass deleted object as a pointer of type ${this.name}`);var T=d.$$.ptrType.registeredClass,P=Ds(d.$$.ptr,T,this.registeredClass);return P}function Ta(h,d){var T;if(d===null)return this.isReference&&ut(`null is not a valid ${this.name}`),this.isSmartPointer?(T=this.rawConstructor(),h!==null&&h.push(this.rawDestructor,T),T):0;(!d||!d.$$)&&ut(`Cannot pass "${Ns(d)}" as a ${this.name}`),d.$$.ptr||ut(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&d.$$.ptrType.isConst&&ut(`Cannot convert argument of type ${d.$$.smartPtrType?d.$$.smartPtrType.name:d.$$.ptrType.name} to parameter type ${this.name}`);var P=d.$$.ptrType.registeredClass;if(T=Ds(d.$$.ptr,P,this.registeredClass),this.isSmartPointer)switch(d.$$.smartPtr===void 0&&ut("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:d.$$.smartPtrType===this?T=d.$$.smartPtr:ut(`Cannot convert argument of type ${d.$$.smartPtrType?d.$$.smartPtrType.name:d.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:T=d.$$.smartPtr;break;case 2:if(d.$$.smartPtrType===this)T=d.$$.smartPtr;else{var U=d.clone();T=this.rawShare(T,Zt.toHandle(()=>U.delete())),h!==null&&h.push(this.rawDestructor,T)}break;default:ut("Unsupported sharing policy")}return T}function Ea(h,d){if(d===null)return this.isReference&&ut(`null is not a valid ${this.name}`),0;d.$$||ut(`Cannot pass "${Ns(d)}" as a ${this.name}`),d.$$.ptr||ut(`Cannot pass deleted object as a pointer of type ${this.name}`),d.$$.ptrType.isConst&&ut(`Cannot convert argument of type ${d.$$.ptrType.name} to parameter type ${this.name}`);var T=d.$$.ptrType.registeredClass,P=Ds(d.$$.ptr,T,this.registeredClass);return P}var zi=(h,d,T)=>{if(d===T)return h;if(T.baseClass===void 0)return null;var P=zi(h,d,T.baseClass);return P===null?null:T.downcast(P)},Zl={},Aa=(h,d)=>{for(d===void 0&&ut("ptr should not be undefined");h.baseClass;)d=h.upcast(d),h=h.baseClass;return d},Ra=(h,d)=>(d=Aa(h,d),Zl[d]),Fs=(h,d)=>{(!d.ptrType||!d.ptr)&&v("makeClassHandle requires ptr and ptrType");var T=!!d.smartPtrType,P=!!d.smartPtr;return T!==P&&v("Both smartPtrType and smartPtr must be specified"),d.count={value:1},gt(Object.create(h,{$$:{value:d,writable:!0}}))};function Jl(h){var d=this.getPointee(h);if(!d)return this.destructor(h),null;var T=Ra(this.registeredClass,d);if(T!==void 0){if(T.$$.count.value===0)return T.$$.ptr=d,T.$$.smartPtr=h,T.clone();var P=T.clone();return this.destructor(h),P}function U(){return this.isSmartPointer?Fs(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:d,smartPtrType:this,smartPtr:h}):Fs(this.registeredClass.instancePrototype,{ptrType:this,ptr:h})}var W=this.registeredClass.getActualType(d),X=Mr[W];if(!X)return U.call(this);var J;this.isConst?J=X.constPointerType:J=X.pointerType;var lt=zi(d,this.registeredClass,J.registeredClass);return lt===null?U.call(this):this.isSmartPointer?Fs(J.registeredClass.instancePrototype,{ptrType:J,ptr:lt,smartPtrType:this,smartPtr:h}):Fs(J.registeredClass.instancePrototype,{ptrType:J,ptr:lt})}var Kl=()=>{Object.assign(hs.prototype,{getPointee(h){return this.rawGetPointee&&(h=this.rawGetPointee(h)),h},destructor(h){this.rawDestructor?.(h)},readValueFromPointer:Tt,fromWireType:Jl})};function hs(h,d,T,P,U,W,X,J,lt,ft,xt){this.name=h,this.registeredClass=d,this.isReference=T,this.isConst=P,this.isSmartPointer=U,this.pointeeType=W,this.sharingPolicy=X,this.rawGetPointee=J,this.rawConstructor=lt,this.rawShare=ft,this.rawDestructor=xt,!U&&d.baseClass===void 0?P?(this.toWireType=Us,this.destructorFunction=null):(this.toWireType=Ea,this.destructorFunction=null):this.toWireType=Ta}var S=(h,d,T)=>{e.hasOwnProperty(h)||v("Replacing nonexistent public symbol"),e[h].overloadTable!==void 0&&T!==void 0?e[h].overloadTable[T]=d:(e[h]=d,e[h].argCount=T)},O=h=>br.get(h),Q=(h,d,T=[],P=!1)=>{var U=O(d),W=U(...T);function X(J){return h[0]=="p"?J>>>0:J}return X(W)},Z=(h,d,T=!1)=>(...P)=>Q(h,d,P,T),$=(h,d,T=!1)=>{h=nt(h);function P(){if(h.includes("p"))return Z(h,d,T);var W=O(d);return W}var U=P();return typeof U!="function"&&ut(`unknown function pointer with signature ${h}: ${d}`),U};class Et extends Error{}var Ft=h=>{var d=Hh(h),T=nt(d);return Mi(d),T},bt=(h,d)=>{var T=[],P={};function U(W){if(!P[W]&&!Wt[W]){if(jt[W]){jt[W].forEach(U);return}T.push(W),P[W]=!0}}throw d.forEach(U),new Et(`${h}: `+T.map(Ft).join([", "]))};function Lt(h,d,T,P,U,W,X,J,lt,ft,xt,At,Nt){h>>>=0,d>>>=0,T>>>=0,P>>>=0,U>>>=0,W>>>=0,X>>>=0,J>>>=0,lt>>>=0,ft>>>=0,xt>>>=0,At>>>=0,Nt>>>=0,xt=nt(xt),W=$(U,W),J&&=$(X,J),ft&&=$(lt,ft),Nt=$(At,Nt);var Vt=yi(xt);cs(Vt,function(){bt(`Cannot construct ${xt} due to unbound types`,[P])}),q([h,d,T],P?[P]:[],qt=>{qt=qt[0];var Qt,he;P?(Qt=qt.registeredClass,he=Qt.instancePrototype):he=He.prototype;var L=Nn(xt,function(...ve){if(Object.getPrototypeOf(this)!==z)throw new vt(`Use 'new' to construct ${xt}`);if(rt.constructor_body===void 0)throw new vt(`${xt} has no accessible constructor`);var Fe=rt.constructor_body[ve.length];if(Fe===void 0)throw new vt(`Tried to invoke ctor of ${xt} with invalid number of parameters (${ve.length}) - expected (${Object.keys(rt.constructor_body).toString()}) parameters instead!`);return Fe.apply(this,ve)}),z=Object.create(he,{constructor:{value:L}});L.prototype=z;var rt=new Sr(xt,L,z,Nt,Qt,W,J,ft);rt.baseClass&&(rt.baseClass.__derivedClasses??=[],rt.baseClass.__derivedClasses.push(rt));var ht=new hs(xt,rt,!0,!1,!1),kt=new hs(xt+"*",rt,!1,!1,!1),re=new hs(xt+" const*",rt,!1,!0,!1);return Mr[h]={pointerType:kt,constPointerType:re},S(Vt,L),[ht,kt,re]})}var zt=(h,d)=>{for(var T=[],P=0;P<h;P++)T.push(G[d+P*4>>>2>>>0]);return T};function se(h){for(var d=1;d<h.length;++d)if(h[d]!==null&&h[d].destructorFunction===void 0)return!0;return!1}var ge={ftf:function(d,T,P,U,W,X,J){return function(){var lt=P(U),ft=X(lt);return ft}},tffn:function(d,T,P,U,W,X,J){return function(){var lt=J(null,this);P(U,lt)}},ttfn:function(d,T,P,U,W,X,J){return function(){var lt=J(null,this),ft=P(U,lt),xt=X(ft);return xt}},ttfnn:function(d,T,P,U,W,X,J,lt){return function(ft){var xt=J(null,this),At=lt(null,ft),Nt=P(U,xt,At),Vt=X(Nt);return Vt}},ttfnnn:function(d,T,P,U,W,X,J,lt,ft){return function(xt,At){var Nt=J(null,this),Vt=lt(null,xt),qt=ft(null,At),Qt=P(U,Nt,Vt,qt),he=X(Qt);return he}},ttfnntnnn:function(d,T,P,U,W,X,J,lt,ft,xt,At,Nt,Vt){return function(qt,Qt,he,L,z){var rt=J(null,this),ht=lt(null,qt),kt=ft(null,Qt),re=xt(null,he),ve=At(null,L),Fe=Nt(null,z),Le=P(U,rt,ht,kt,re,ve,Fe);Vt(kt);var li=X(Le);return li}},tffnt:function(d,T,P,U,W,X,J,lt,ft){return function(xt){var At=J(null,this),Nt=lt(null,xt);P(U,At,Nt),ft(Nt)}},tffnnt:function(d,T,P,U,W,X,J,lt,ft,xt){return function(At,Nt){var Vt=J(null,this),qt=lt(null,At),Qt=ft(null,Nt);P(U,Vt,qt,Qt),xt(Qt)}},ttfnnt:function(d,T,P,U,W,X,J,lt,ft,xt){return function(At,Nt){var Vt=J(null,this),qt=lt(null,At),Qt=ft(null,Nt),he=P(U,Vt,qt,Qt);xt(Qt);var L=X(he);return L}},tffnn:function(d,T,P,U,W,X,J,lt){return function(ft){var xt=J(null,this),At=lt(null,ft);P(U,xt,At)}},tffnnn:function(d,T,P,U,W,X,J,lt,ft){return function(xt,At){var Nt=J(null,this),Vt=lt(null,xt),qt=ft(null,At);P(U,Nt,Vt,qt)}},ftfnn:function(d,T,P,U,W,X,J,lt,ft){return function(xt,At){var Nt=lt(null,xt),Vt=ft(null,At),qt=P(U,Nt,Vt),Qt=X(qt);return Qt}},ttfnt:function(d,T,P,U,W,X,J,lt,ft){return function(xt){var At=J(null,this),Nt=lt(null,xt),Vt=P(U,At,Nt);ft(Nt);var qt=X(Vt);return qt}},ttfnnnnn:function(d,T,P,U,W,X,J,lt,ft,xt,At){return function(Nt,Vt,qt,Qt){var he=J(null,this),L=lt(null,Nt),z=ft(null,Vt),rt=xt(null,qt),ht=At(null,Qt),kt=P(U,he,L,z,rt,ht),re=X(kt);return re}},ftftn:function(d,T,P,U,W,X,J,lt,ft,xt){return function(At,Nt){var Vt=lt(null,At),qt=ft(null,Nt),Qt=P(U,Vt,qt);xt(Vt);var he=X(Qt);return he}},ftfn:function(d,T,P,U,W,X,J,lt){return function(ft){var xt=lt(null,ft),At=P(U,xt),Nt=X(At);return Nt}},fffnn:function(d,T,P,U,W,X,J,lt,ft){return function(xt,At){var Nt=lt(null,xt),Vt=ft(null,At);P(U,Nt,Vt)}},ttfntn:function(d,T,P,U,W,X,J,lt,ft,xt){return function(At,Nt){var Vt=J(null,this),qt=lt(null,At),Qt=ft(null,Nt),he=P(U,Vt,qt,Qt);xt(qt);var L=X(he);return L}},ttfnnnn:function(d,T,P,U,W,X,J,lt,ft,xt){return function(At,Nt,Vt){var qt=J(null,this),Qt=lt(null,At),he=ft(null,Nt),L=xt(null,Vt),z=P(U,qt,Qt,he,L),rt=X(z);return rt}},ttfntt:function(d,T,P,U,W,X,J,lt,ft,xt,At){return function(Nt,Vt){var qt=J(null,this),Qt=lt(null,Nt),he=ft(null,Vt),L=P(U,qt,Qt,he);xt(Qt),At(he);var z=X(L);return z}},ftfnnnnn:function(d,T,P,U,W,X,J,lt,ft,xt,At,Nt){return function(Vt,qt,Qt,he,L){var z=lt(null,Vt),rt=ft(null,qt),ht=xt(null,Qt),kt=At(null,he),re=Nt(null,L),ve=P(U,z,rt,ht,kt,re),Fe=X(ve);return Fe}},ftfnnnnt:function(d,T,P,U,W,X,J,lt,ft,xt,At,Nt,Vt){return function(qt,Qt,he,L,z){var rt=lt(null,qt),ht=ft(null,Qt),kt=xt(null,he),re=At(null,L),ve=Nt(null,z),Fe=P(U,rt,ht,kt,re,ve);Vt(ve);var Le=X(Fe);return Le}},ftfnnn:function(d,T,P,U,W,X,J,lt,ft,xt){return function(At,Nt,Vt){var qt=lt(null,At),Qt=ft(null,Nt),he=xt(null,Vt),L=P(U,qt,Qt,he),z=X(L);return z}},ftfntnnn:function(d,T,P,U,W,X,J,lt,ft,xt,At,Nt,Vt){return function(qt,Qt,he,L,z){var rt=lt(null,qt),ht=ft(null,Qt),kt=xt(null,he),re=At(null,L),ve=Nt(null,z),Fe=P(U,rt,ht,kt,re,ve);Vt(ht);var Le=X(Fe);return Le}},fffn:function(d,T,P,U,W,X,J,lt){return function(ft){var xt=lt(null,ft);P(U,xt)}},fff:function(d,T,P,U,W,X,J){return function(){P(U)}}};function Bt(h,d,T,P){let U=[d?"t":"f",T?"t":"f",P?"t":"f"];for(let W=d?1:2;W<h.length;++W){let X=h[W],J="";X.destructorFunction===void 0?J="u":X.destructorFunction===null?J="n":J="t",U.push(J)}return U.join("")}function ue(h,d,T,P,U,W){var X=d.length;X<2&&ut("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var J=d[1]!==null&&T!==null,lt=se(d),ft=!d[0].isVoid,xt=d[0],At=d[1],Nt=[h,ut,P,U,Ie,xt.fromWireType.bind(xt),At?.toWireType.bind(At)],Vt=2;Vt<X;++Vt){var qt=d[Vt];Nt.push(qt.toWireType.bind(qt))}if(!lt)for(var Vt=J?1:2;Vt<d.length;++Vt)d[Vt].destructorFunction!==null&&Nt.push(d[Vt].destructorFunction);var Qt=Bt(d,J,ft,W),he=ge[Qt](...Nt);return Nn(h,he)}var Xe=function(h,d,T,P,U,W){h>>>=0,T>>>=0,P>>>=0,U>>>=0,W>>>=0;var X=zt(d,T);U=$(P,U),q([],[h],J=>{J=J[0];var lt=`constructor ${J.name}`;if(J.registeredClass.constructor_body===void 0&&(J.registeredClass.constructor_body=[]),J.registeredClass.constructor_body[d-1]!==void 0)throw new vt(`Cannot register multiple constructors with identical number of parameters (${d-1}) for class '${J.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return J.registeredClass.constructor_body[d-1]=()=>{bt(`Cannot construct ${J.name} due to unbound types`,X)},q([],X,ft=>(ft.splice(1,0,null),J.registeredClass.constructor_body[d-1]=ue(lt,ft,null,U,W),[])),[]})},Ce=h=>{h=h.trim();let d=h.indexOf("(");return d===-1?h:h.slice(0,d)},Pe=function(h,d,T,P,U,W,X,J,lt,ft){h>>>=0,d>>>=0,P>>>=0,U>>>=0,W>>>=0,X>>>=0;var xt=zt(T,P);d=nt(d),d=Ce(d),W=$(U,W,lt),q([],[h],At=>{At=At[0];var Nt=`${At.name}.${d}`;d.startsWith("@@")&&(d=Symbol[d.substring(2)]),J&&At.registeredClass.pureVirtualFunctions.push(d);function Vt(){bt(`Cannot call ${Nt} due to unbound types`,xt)}var qt=At.registeredClass.instancePrototype,Qt=qt[d];return Qt===void 0||Qt.overloadTable===void 0&&Qt.className!==At.name&&Qt.argCount===T-2?(Vt.argCount=T-2,Vt.className=At.name,qt[d]=Vt):(Ls(qt,d,Nt),qt[d].overloadTable[T-2]=Vt),q([],xt,he=>{var L=ue(Nt,he,At,W,X,lt);return qt[d].overloadTable===void 0?(L.argCount=T-2,qt[d]=L):qt[d].overloadTable[T-2]=L,[]}),[]})},Ze=[],Ut=[0,1,,1,null,1,!0,1,!1,1];function Je(h){h>>>=0,h>9&&--Ut[h+1]===0&&(Ut[h]=void 0,Ze.push(h))}var Zt={toValue:h=>(h||ut(`Cannot use deleted val. handle = ${h}`),Ut[h]),toHandle:h=>{switch(h){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{let d=Ze.pop()||Ut.length;return Ut[d]=h,Ut[d+1]=1,d}}}},ai={name:"emscripten::val",fromWireType:h=>{var d=Zt.toValue(h);return Je(h),d},toWireType:(h,d)=>Zt.toHandle(d),readValueFromPointer:Tt,destructorFunction:null};function sn(h){return h>>>=0,et(h,ai)}var Vi=(h,d,T)=>{switch(d){case 1:return T?function(P){return this.fromWireType(w[P>>>0])}:function(P){return this.fromWireType(H[P>>>0])};case 2:return T?function(P){return this.fromWireType(B[P>>>1>>>0])}:function(P){return this.fromWireType(F[P>>>1>>>0])};case 4:return T?function(P){return this.fromWireType(k[P>>>2>>>0])}:function(P){return this.fromWireType(G[P>>>2>>>0])};default:throw new TypeError(`invalid integer width (${d}): ${h}`)}};function oi(h){return h===0?"object":h===1?"number":"string"}function vi(h,d,T,P,U){h>>>=0,d>>>=0,T>>>=0,d=nt(d);let W=oi(U);switch(W){case"object":{let ft=function(){};ft.values={},et(h,{name:d,constructor:ft,valueType:W,fromWireType:function(xt){return this.constructor.values[xt]},toWireType:(xt,At)=>At.value,readValueFromPointer:Vi(d,T,P),destructorFunction:null}),cs(d,ft);break}case"number":{var X={};et(h,{name:d,keysMap:X,valueType:W,fromWireType:ft=>ft,toWireType:(ft,xt)=>xt,readValueFromPointer:Vi(d,T,P),destructorFunction:null}),cs(d,X),delete e[d].argCount;break}case"string":{var J={},lt={},X={};et(h,{name:d,valuesMap:J,reverseMap:lt,keysMap:X,valueType:W,fromWireType:function(xt){return this.reverseMap[xt]},toWireType:function(xt,At){return this.valuesMap[At]},readValueFromPointer:Vi(d,T,P),destructorFunction:null}),cs(d,X),delete e[d].argCount;break}}}var ye=(h,d)=>{var T=Wt[h];return T===void 0&&ut(`${d} has unknown type ${Ft(h)}`),T};function Ke(h,d,T){h>>>=0,d>>>=0;var P=ye(h,"enum");switch(d=nt(d),P.valueType){case"object":{var U=P.constructor,W=Object.create(P.constructor.prototype,{value:{value:T},constructor:{value:Nn(`${P.name}_${d}`,function(){})}});U.values[T]=W,U[d]=W;break}case"number":{P.keysMap[d]=T;break}case"string":{P.valuesMap[d]=T,P.reverseMap[T]=d,P.keysMap[d]=d;break}}}var Un=(h,d)=>{switch(d){case 4:return function(T){return this.fromWireType(D[T>>>2>>>0])};case 8:return function(T){return this.fromWireType(K[T>>>3>>>0])};default:throw new TypeError(`invalid float width (${d}): ${h}`)}},Ue=function(h,d,T){h>>>=0,d>>>=0,T>>>=0,d=nt(d),et(h,{name:d,fromWireType:P=>P,toWireType:(P,U)=>U,readValueFromPointer:Un(d,T),destructorFunction:null})};function $e(h,d,T,P,U,W,X,J){h>>>=0,T>>>=0,P>>>=0,U>>>=0,W>>>=0;var lt=zt(d,T);h=nt(h),h=Ce(h),U=$(P,U,X),cs(h,function(){bt(`Cannot call ${h} due to unbound types`,lt)},d-1),q([],lt,ft=>{var xt=[ft[0],null].concat(ft.slice(1));return S(h,ue(h,xt,null,U,W,X),d-1),[]})}var Jn=function(h,d,T,P,U){h>>>=0,d>>>=0,T>>>=0,d=nt(d);let W=P===0,X=lt=>lt;if(W){var J=32-8*T;X=lt=>lt<<J>>>J,U=X(U)}et(h,{name:d,fromWireType:X,toWireType:(lt,ft)=>ft,readValueFromPointer:wt(d,T,P!==0),destructorFunction:null})},Ca=(h,d,T)=>{let P=(U,W)=>{let X=0;return{next(){if(X>=U)return{done:!0};let J=X;return X++,{value:W(J),done:!1}},[Symbol.iterator](){return this}}};h[Symbol.iterator]||(h[Symbol.iterator]=function(){let U=this[d]();return P(U,W=>this[T](W))})},ef=function(h,d,T,P){h>>>=0,d>>>=0,T>>>=0,P>>>=0,T=nt(T),P=nt(P),q([],[h,d],U=>{let W=U[0];return Ca(W.registeredClass.instancePrototype,T,P),[]})};function nf(h,d,T){h>>>=0,T>>>=0;var P=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],U=P[d];function W(X){var J=G[X>>>2>>>0],lt=G[X+4>>>2>>>0];return new U(w.buffer,lt,J)}T=nt(T),et(h,{name:T,fromWireType:W,readValueFromPointer:W},{ignoreDuplicateRegistrations:!0})}var sf=Object.assign({optional:!0},ai);function rf(h,d){h>>>=0,d>>>=0,et(h,sf)}var af=(h,d,T,P)=>{if(T>>>=0,!(P>0))return 0;for(var U=T,W=T+P-1,X=0;X<h.length;++X){var J=h.codePointAt(X);if(J<=127){if(T>=W)break;d[T++>>>0]=J}else if(J<=2047){if(T+1>=W)break;d[T++>>>0]=192|J>>6,d[T++>>>0]=128|J&63}else if(J<=65535){if(T+2>=W)break;d[T++>>>0]=224|J>>12,d[T++>>>0]=128|J>>6&63,d[T++>>>0]=128|J&63}else{if(T+3>=W)break;d[T++>>>0]=240|J>>18,d[T++>>>0]=128|J>>12&63,d[T++>>>0]=128|J>>6&63,d[T++>>>0]=128|J&63,X++}}return d[T>>>0]=0,T-U},of=(h,d,T)=>af(h,H,d,T),lf=h=>{for(var d=0,T=0;T<h.length;++T){var P=h.charCodeAt(T);P<=127?d++:P<=2047?d+=2:P>=55296&&P<=57343?(d+=4,++T):d+=3}return d},Fh=globalThis.TextDecoder&&new TextDecoder,Oh=(h,d,T,P)=>{var U=d+T;if(P)return U;for(;h[d]&&!(d>=U);)++d;return d},cf=(h,d=0,T,P)=>{d>>>=0;var U=Oh(h,d,T,P);if(U-d>16&&h.buffer&&Fh)return Fh.decode(h.subarray(d,U));for(var W="";d<U;){var X=h[d++];if(!(X&128)){W+=String.fromCharCode(X);continue}var J=h[d++]&63;if((X&224)==192){W+=String.fromCharCode((X&31)<<6|J);continue}var lt=h[d++]&63;if((X&240)==224?X=(X&15)<<12|J<<6|lt:X=(X&7)<<18|J<<12|lt<<6|h[d++]&63,X<65536)W+=String.fromCharCode(X);else{var ft=X-65536;W+=String.fromCharCode(55296|ft>>10,56320|ft&1023)}}return W},hf=(h,d,T)=>(h>>>=0,h?cf(H,h,d,T):"");function uf(h,d){h>>>=0,d>>>=0,d=nt(d);var T=!0;et(h,{name:d,fromWireType(P){var U=G[P>>>2>>>0],W=P+4,X;if(T)X=hf(W,U,!0);else{X="";for(var J=0;J<U;++J)X+=String.fromCharCode(H[W+J>>>0])}return Mi(P),X},toWireType(P,U){U instanceof ArrayBuffer&&(U=new Uint8Array(U));var W,X=typeof U=="string";X||ArrayBuffer.isView(U)&&U.BYTES_PER_ELEMENT==1||ut("Cannot pass non-string to std::string"),T&&X?W=lf(U):W=U.length;var J=ec(4+W+1),lt=J+4;if(G[J>>>2>>>0]=W,X)if(T)of(U,lt,W+1);else for(var ft=0;ft<W;++ft){var xt=U.charCodeAt(ft);xt>255&&(Mi(J),ut("String has UTF-16 code units that do not fit in 8 bits")),H[lt+ft>>>0]=xt}else H.set(U,lt>>>0);return P!==null&&P.push(Mi,J),J},readValueFromPointer:Tt,destructorFunction(P){Mi(P)}})}var Bh=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,df=(h,d,T)=>{var P=h>>>1,U=Oh(F,P,d/2,T);if(U-P>16&&Bh)return Bh.decode(F.subarray(P>>>0,U>>>0));for(var W="",X=P;X<U;++X){var J=F[X>>>0];W+=String.fromCharCode(J)}return W},ff=(h,d,T)=>{if(T??=2147483647,T<2)return 0;T-=2;for(var P=d,U=T<h.length*2?T/2:h.length,W=0;W<U;++W){var X=h.charCodeAt(W);B[d>>>1>>>0]=X,d+=2}return B[d>>>1>>>0]=0,d-P},pf=h=>h.length*2,mf=(h,d,T)=>{for(var P="",U=h>>>2,W=0;!(W>=d/4);W++){var X=G[U+W>>>0];if(!X&&!T)break;P+=String.fromCodePoint(X)}return P},gf=(h,d,T)=>{if(d>>>=0,T??=2147483647,T<4)return 0;for(var P=d,U=P+T-4,W=0;W<h.length;++W){var X=h.codePointAt(W);if(X>65535&&W++,k[d>>>2>>>0]=X,d+=4,d+4>U)break}return k[d>>>2>>>0]=0,d-P},_f=h=>{for(var d=0,T=0;T<h.length;++T){var P=h.codePointAt(T);P>65535&&T++,d+=4}return d};function xf(h,d,T){h>>>=0,d>>>=0,T>>>=0,T=nt(T);var P,U,W;d===2?(P=df,U=ff,W=pf):(P=mf,U=gf,W=_f),et(h,{name:T,fromWireType:X=>{var J=G[X>>>2>>>0],lt=P(X+4,J*d,!0);return Mi(X),lt},toWireType:(X,J)=>{typeof J!="string"&&ut(`Cannot pass non-string to C++ string type ${T}`);var lt=W(J),ft=ec(4+lt+d);return G[ft>>>2>>>0]=lt/d,U(J,ft+4,lt+d),X!==null&&X.push(Mi,ft),ft},readValueFromPointer:Tt,destructorFunction(X){Mi(X)}})}function yf(h,d,T,P,U,W){h>>>=0,d>>>=0,T>>>=0,P>>>=0,U>>>=0,W>>>=0,Re[h]={name:nt(d),rawConstructor:$(T,P),rawDestructor:$(U,W),fields:[]}}function vf(h,d,T,P,U,W,X,J,lt,ft){h>>>=0,d>>>=0,T>>>=0,P>>>=0,U>>>=0,W>>>=0,X>>>=0,J>>>=0,lt>>>=0,ft>>>=0,Re[h].fields.push({fieldName:nt(d),getterReturnType:T,getter:$(P,U),getterContext:W,setterArgumentType:X,setter:$(J,lt),setterContext:ft})}var Mf=function(h,d){h>>>=0,d>>>=0,d=nt(d),et(h,{isVoid:!0,name:d,fromWireType:()=>{},toWireType:(T,P)=>{}})};function Sf(h,d){h>>>=0,d>>>=0,h=Zt.toValue(h),d=Zt.toValue(d),h.set(d)}var jl=[],bf=h=>{var d=jl.length;return jl.push(h),d},wf=(h,d)=>{for(var T=new Array(h),P=0;P<h;++P)T[P]=ye(G[d+P*4>>>2>>>0],`parameter ${P}`);return T},Tf=(h,d,T)=>{var P=[],U=h(P,T);return P.length&&(G[d>>>2>>>0]=Zt.toHandle(P)),U},Ef={},kh=h=>{var d=Ef[h];return d===void 0?nt(h):d},Af=function(h,d,T){d>>>=0;var P=8,[U,...W]=wf(h,d),X=U.toWireType.bind(U),J=W.map(At=>At.readValueFromPointer.bind(At));h--;var lt=new Array(h),ft=(At,Nt,Vt,qt)=>{for(var Qt=0,he=0;he<h;++he)lt[he]=J[he](qt+Qt),Qt+=P;var L;switch(T){case 0:L=Zt.toValue(At).apply(null,lt);break;case 2:L=Reflect.construct(Zt.toValue(At),lt);break;case 3:L=lt[0];break;case 1:L=Zt.toValue(At)[kh(Nt)](...lt);break}return Tf(X,Vt,L)},xt=`methodCaller<(${W.map(At=>At.name)}) => ${U.name}>`;return bf(Nn(xt,ft))};function Rf(h,d){return h>>>=0,d>>>=0,h=Zt.toValue(h),d=Zt.toValue(d),h==d}function Cf(h,d){return h>>>=0,d>>>=0,h=Zt.toValue(h),d=Zt.toValue(d),Zt.toHandle(h[d])}function Pf(h){h>>>=0,h>9&&(Ut[h+1]+=1)}function If(h,d,T,P,U){return h>>>=0,d>>>=0,T>>>=0,P>>>=0,U>>>=0,jl[h](d,T,P,U)}function Lf(h){return h>>>=0,Zt.toHandle(kh(h))}function Df(){return Zt.toHandle({})}function Nf(h){h>>>=0;var d=Zt.toValue(h);Ie(d),Je(h)}function Uf(h,d,T){h>>>=0,d>>>=0,T>>>=0,h=Zt.toValue(h),d=Zt.toValue(d),T=Zt.toValue(T),h[d]=T}var Ff=()=>4294901760,Of=(h,d)=>Math.ceil(h/d)*d,Bf=h=>{var d=Pa.buffer.byteLength,T=(h-d+65535)/65536|0;try{return Pa.grow(T),it(),1}catch{}};function kf(h){h>>>=0;var d=H.length,T=Ff();if(h>T)return!1;for(var P=1;P<=4;P*=2){var U=d*(1+.2/P);U=Math.min(U,h+100663296);var W=Math.min(T,Of(Math.max(h,U),65536)),X=Bf(W);if(X)return!0}return!1}var zf=(h,d)=>{if(us)for(var T=h;T<h+d;T++){var P=O(T);P&&us.set(P,T)}},us,Vf=h=>(us||(us=new WeakMap,zf(0,br.length)),us.get(h)||0),Ql=[],Hf=()=>Ql.length?Ql.pop():br.grow(1),tc=(h,d)=>br.set(h,d),zh=h=>{let d=h.length;return[d%128|128,d>>7,...h]},Gf={i:127,p:127,j:126,f:125,d:124,e:111},Vh=h=>zh(Array.from(h,d=>{var T=Gf[d];return T})),Wf=(h,d)=>{var T=Uint8Array.of(0,97,115,109,1,0,0,0,1,...zh([1,96,...Vh(d.slice(1)),...Vh(d[0]==="v"?"":d[0])]),2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0),P=new WebAssembly.Module(T),U=new WebAssembly.Instance(P,{e:{f:h}}),W=U.exports.f;return W},ds=(h,d)=>{var T=Vf(h);if(T)return T;var P=Hf();try{tc(P,h)}catch(W){if(!(W instanceof TypeError))throw W;var U=Wf(h,d);tc(P,U)}return us.set(h,P),P},fs=h=>{us.delete(O(h)),tc(h,null),Ql.push(h)};if(be(),Kl(),e.noExitRuntime&&(Xn=e.noExitRuntime),e.print&&(_=e.print),e.printErr&&(b=e.printErr),e.wasmBinary&&(I=e.wasmBinary),e.arguments&&(l=e.arguments),e.thisProgram&&(c=e.thisProgram),e.preInit)for(typeof e.preInit=="function"&&(e.preInit=[e.preInit]);e.preInit.length>0;)e.preInit.shift()();e.addFunction=ds,e.removeFunction=fs;var Hh,ec,Mi,Xf,$f,Pa,br;function qf(h){Hh=h.K,ec=h.M,Mi=h.N,Xf=Pa=h.I,$f=br=h.L}var Yf={l:V,C:Rn,q:_t,z:N,G:ct,j:Lt,i:Xe,a:Pe,E:sn,x:vi,d:Ke,y:Ue,c:$e,p:Jn,m:ef,h:nf,n:rf,F:uf,w:xf,r:yf,k:vf,H:Mf,u:Sf,g:Af,b:Je,o:Rf,B:Cf,t:Pf,f:If,s:Lf,A:Df,e:Nf,v:Uf,D:kf};function Zf(h){h=Object.assign({},h);var d=P=>U=>P(U)>>>0,T=P=>()=>P()>>>0;return h.K=d(h.K),h.M=d(h.M),h._emscripten_stack_alloc=d(h._emscripten_stack_alloc),h.emscripten_stack_get_current=T(h.emscripten_stack_get_current),h}function Jf(){dt();function h(){e.calledRun=!0,!A&&(mt(),C?.(e),e.onRuntimeInitialized?.(),Ht())}e.setStatus?(e.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>e.setStatus(""),1),h()},1)):h()}var ps;return ps=await Kt(),Jf(),pt?t=e:t=new Promise((h,d)=>{C=h,x=d}),t}var Vd=$x;var bn=(i,t)=>t?Fi(t,{t:"cube",s:i}):{t:"cube",s:i},Nl=(i,t,e=t,n=40)=>({t:"cyl",h:i,r1:t,r2:e,fn:n}),Wn=(i,t)=>({t:"ext",polys:i,h:t}),Fi=(i,t)=>({t:"tr",v:i,c:t}),Ul=(i,t)=>({t:"rot",v:i,c:t}),ss=(...i)=>({t:"uni",c:i.flat(1/0).filter(Boolean)}),mr=(i,...t)=>({t:"dif",c:[i,...t.flat(1/0).filter(Boolean)]}),hn=(i,t,e,n)=>[[i,t],[i+e,t],[i+e,t+n],[i,t+n]];function Th(i){let t=i.map(r=>[r[0],r[1]]).sort((r,a)=>r[0]-a[0]||r[1]-a[1]),e=(r,a,o)=>(a[0]-r[0])*(o[1]-r[1])-(a[1]-r[1])*(o[0]-r[0]),n=[],s=[];for(let r of t){for(;n.length>=2&&e(n[n.length-2],n[n.length-1],r)<=0;)n.pop();n.push(r)}for(let r of t.reverse()){for(;s.length>=2&&e(s[s.length-2],s[s.length-1],r)<=0;)s.pop();s.push(r)}return n.slice(0,-1).concat(s.slice(0,-1))}var qx=(i,t=32,e=0,n=0)=>Array.from({length:t},(s,r)=>[e+i*Math.cos(2*Math.PI*r/t),n+i*Math.sin(2*Math.PI*r/t)]),Eh=(i,t=0,e=1)=>Th([...qx(i/2,32),[t*i/2*Math.SQRT2,e*i/2*Math.SQRT2]]);function Ah(i,t){let e=[],n=l=>(e.push(l),l),s=l=>{switch(l.t){case"cube":return n(t.Manifold.cube(l.s));case"cyl":return n(t.Manifold.cylinder(l.h,l.r1,l.r2,l.fn));case"ext":{let c=new t.CrossSection(l.polys,"EvenOdd");return e.push(c),n(c.extrude(l.h))}case"tr":return n(s(l.c).translate(l.v));case"rot":return n(s(l.c).rotate(l.v));case"uni":return n(t.Manifold.union(l.c.map(s)));case"dif":{let[c,...f]=l.c.map(s);return f.length?n(c.subtract(n(t.Manifold.union(f)))):c}}throw new Error("bad node "+l.t)},r=s(i),a=r.getMesh(),o={pos:Float32Array.from(a.vertProperties.filter((l,c)=>c%a.numProp<3)),idx:Uint32Array.from(a.triVerts),volume:r.volume(),bbox:r.boundingBox()};for(let l of e)try{l.delete()}catch{}return o}var ha=i=>{let t=Math.round(i*1e4)/1e4;return Object.is(t,-0)?"0":String(t)},Dl=i=>"["+i.map(ha).join(", ")+"]";function ua(i,t=""){let e=t+"  ",n=s=>s.map(r=>ua(r,e)).join(`
`);switch(i.t){case"cube":return`${t}cube(${Dl(i.s)});`;case"cyl":return`${t}cylinder(h = ${ha(i.h)}, r1 = ${ha(i.r1)}, r2 = ${ha(i.r2)}, $fn = ${i.fn});`;case"ext":{let s=[],r=[];for(let a of i.polys)r.push(a.map((o,l)=>s.length+l)),s.push(...a);return`${t}linear_extrude(${ha(i.h)}) polygon(points = [${s.map(Dl).join(",")}], paths = [${r.map(a=>"["+a.join(",")+"]").join(",")}]);`}case"tr":return`${t}translate(${Dl(i.v)})
${ua(i.c,e)}`;case"rot":return`${t}rotate(${Dl(i.v)})
${ua(i.c,e)}`;case"uni":return`${t}union() {
${n(i.c)}
${t}}`;case"dif":return`${t}difference() {
${n(i.c)}
${t}}`}}var da=44.45,_i={M2:{pilot:1.6,clear:2.4,sd:5.5},"M2.5":{pilot:2.2,clear:2.9,sd:6.5},M3:{pilot:2.6,clear:3.4,sd:7},M4:{pilot:3.4,clear:4.5,sd:9}},wn=15,_r=2,Yx=.2,Fl=4,en=wn+2*_r+Yx,rs=6,Zx=3.3,Rh=5.8,Hd=2.8,Se={opening:222.25,pitch:236.525,hole_d:6.4,panel_t:5,side_t:4,lip:3,rear_h:14,gusset:40,band:12};Se.tray_w=Se.opening-1.25;var Ch=8,ga={homeracker:{label:"Rackerspace",sub:"Blade on two 15 mm bars (HomeRacker caps, 180 mm apart)"},rack10:{label:'10" rack',sub:"Flat tray with rack ears, ports to the open front"},din:{label:"Hutschiene",sub:"Blade that clips onto a 35 mm DIN rail (TS35)"},skadis:{label:"SK\xC5DIS",sub:"IKEA pegboard (5 \xD7 15 mm slots, 40 mm apart, rows staggered by 20 mm): flat on the board, or a blade that sticks out"}},ee={pitch:40,row:20,slotW:5,slotH:15,stemH:6,leg:7.5,legT:3};function _a(i={}){return{name:"board",w:85,h:56,x:10,y:10,rot:0,t:1.6,sh:6,comp:20,screw:"M2.5",holes:[{x:3.5,y:3.5},{x:61.5,y:3.5},{x:3.5,y:52.5},{x:61.5,y:52.5}],...i}}function Ph(){return{version:1,name:"plate",mode:"homeracker",plate:{t:3,lattice:!0,pitch:15,bar:3,holeKind:"pilot",autoSize:!0,L:200,H:100,margin:5},hr:{span:180,capLen:30,clamp:"ziptie",zipW:5},din:{clipW:20,clear:.3,latch:1.8,railX:0},r10:{units:1,depth:0,panelW:250,floor:2.5},sk:{style:"flat",fit:.6,boardT:5,rows:"top"},boards:[_a({name:"Raspberry Pi 4",x:20,y:12})]}}function gn(i){let t=(i.rot%360+360)%360,e=t%180?i.h:i.w,n=t%180?i.w:i.h;return{x0:i.x,y0:i.y,x1:i.x+e,y1:i.y+n,fw:e,fh:n}}function xr(i,t,e){let n=(i.rot%360+360)%360,[s,r]=n===90?[i.h-e,t]:n===180?[i.w-t,i.h-e]:n===270?[e,i.w-t]:[t,e];return[i.x+s,i.y+r]}function Ol(i,t,e){let n=(i.rot%360+360)%360,s=t-i.x,r=e-i.y;return n===90?[r,i.h-s]:n===180?[i.w-s,i.h-r]:n===270?[i.w-r,s]:[s,r]}function Jx(i){let t=0,e=0;for(let n of i.boards){let s=gn(n);t=Math.max(t,s.x1),e=Math.max(e,s.y1)}return{x1:t,y1:e}}function xa(i){let t=i.plate,e=Jx(i),n=t.margin;if(i.mode==="homeracker"){let a=i.hr.span+en,o=t.autoSize?Math.max(Math.ceil(e.y1+n),40):t.H;return{L:a,H:o,area:[5,9,a-5,o-3],bot:9,sides:["front","rear","bars (bottom)","top"]}}if(i.mode==="din"){let a=t.autoSize?Math.max(Math.ceil(e.x1+n),62):t.L,o=t.autoSize?Math.max(Math.ceil(e.y1+n),30):t.H;return{L:a,H:o,area:[n,Ch+6,a-n,o-3],bot:Ch+6,sides:["","","DIN rail (bottom)","top"]}}if(i.mode==="skadis"){let a=i.sk.style==="blade",o=t.autoSize?Math.max(Math.ceil(e.x1+n),a?40:30):t.L,l=t.autoSize?Math.max(Math.ceil(e.y1+(a?n:28)),a?30:45):t.H;return a?{L:o,H:l,area:[10,4,o-3,l-3],bot:5,sides:["SK\xC5DIS board (wall)","away from the wall","bottom","top"]}:{L:o,H:l,area:[3,3,o-3,l-26],bot:5,sides:["","","bottom (front view)","top (hooks)"]}}let s=Se.tray_w,r=i.r10.depth>0?i.r10.depth:Math.max(Math.ceil(e.y1+n),60);return{L:s,H:r,area:[Se.side_t,2,s-Se.side_t,r],bot:0,sides:["left wall","right wall","FRONT (ears, open)","rear"]}}function Gd(i,t,e,n){let s=e-n,r=t-i,a=r<s?0:Math.floor((r-s)/e)+1,o=a>0?a*e-n:0;return{start:i+(r-o)/2,n:a}}function fa(i,t,e,n,s,r,a,o){let l=s-r,c=Gd(i,e,s,r),f=Gd(t,n,s,r),p=[];for(let u=0;u<c.n;u++)for(let m=0;m<f.n;m++){let y=c.start+u*s,M=f.start+m*s;a.some(g=>y<g[2]&&y+l>g[0]&&M<g[3]&&M+l>g[1])||o.some(([g,_,b])=>{let I=Math.max(y,Math.min(g,y+l)),A=Math.max(M,Math.min(_,M+l));return(I-g)**2+(A-_)**2<b*b})||p.push(hn(y,M,l,l))}return p}var gr=(i,t,e)=>Fi([t,0,0],Ul([90,0,90],Wn([i],e)));function pa(i,t){let e=[],n=[],s=[];for(let r of i.boards)for(let a of r.holes){if(a.off)continue;let o=_i[a.screw||r.screw]||_i.M3,[l,c]=xr(r,a.x,a.y),f=t+r.sh,p=i.plate.holeKind==="clear"?o.clear:o.pilot;e.push(Fi([l,c,0],Nl(f,o.sd/2,o.sd/2,40))),r.sh>2&&e.push(Fi([l,c,t],Nl(1.5,o.sd/2+1.5,o.sd/2,40))),n.push(Fi([l,c,-1],Nl(f+2,p/2,p/2,24))),s.push([l,c,o.sd/2+3])}return{add:e,sub:n,circles:s}}function Kx(i,t,e){let[n,s,r,a]=t.area;i.boards.forEach((o,l)=>{let c=gn(o),f=o.name||`board ${l+1}`;(c.x0<n-.01||c.y0<s-.01||c.x1>r+.01||c.y1>a+.01)&&e.push(`${f} reaches outside the usable area (x ${n}..${r}, y ${s}..${a.toFixed(1)}).`),o.holes.forEach((p,u)=>{(p.x<0||p.y<0||p.x>o.w||p.y>o.h)&&e.push(`${f}: hole ${u+1} lies outside the board.`)}),o.holes.some(p=>!p.off)||e.push(`${f} has no mounting holes, so nothing holds it.`),i.boards.forEach((p,u)=>{if(u<=l)return;let m=gn(p);c.x0<m.x1&&c.x1>m.x0&&c.y0<m.y1&&c.y1>m.y0&&e.push(`${f} overlaps ${p.name||"board "+(u+1)}.`)})})}function Bl(i){let t=xa(i),{L:e,H:n}=t,s=i.plate,r=[],a=[],o=[],l=[],c=null;Kx(i,t,r);let f;if(i.mode==="homeracker"){let p=s.t,u=i.hr.capLen,m=pa(i,p),y=i.hr.clamp||(i.hr.setscrew===!1?"pin":"setscrew"),M=y==="setscrew",g=y==="ziptie",_=g?6:3,b=i.hr.zipW||5,I=g?u>=2*b+12?2:1:0,A=I===2?[u/4-b/2+1,3*u/4-b/2-1]:I===1?[u/2-b/2]:[],E=[],C=[];for(let[F,k]of[[en/2,-1],[e-en/2,1]]){E.push(bn([en,_,u],[F-en/2,0,0])),E.push(bn([_r,wn+.01,u],[F-en/2,-wn,0])),E.push(bn([_r,wn+.01,u],[F+en/2-_r,-wn,0]));let G=en+(M?2*rs:0)+2;C.push(bn([G,Fl,Fl],[F-G/2,-wn/2-Fl/2,u/2-Fl/2]));for(let D of A)C.push(bn([en+2,2.5,b],[F-en/2-1,1.5,Math.max(D,p+.5)]));if(M){let D=F+k*en/2,K=u-7;E.push(bn([rs,wn,u],[k>0?D:D-rs,-wn,0])),C.push(bn([Hd,Rh,u],[D+k*rs/2-Hd/2,-wn/2-Rh/2,K-Rh/Math.sqrt(3)-.2]));let tt=k>0?D-_r-1:D-rs-1,j=rs+_r+2;C.push(Fi([tt,-wn/2,K],Ul([0,90,0],Wn([Eh(Zx,-1,0)],j))))}}let x=[[p,_],[u,_],[p,_+u-p]].map(([F,k])=>[k,F]);E.push(gr(x,0,4),gr(x,e-4,4));let w=[[0,0,5,_+u],[e-5,0,e,_+u]];l=s.lattice?fa(5,t.bot,e-5,n-5,s.pitch,s.bar,w,m.circles):[];for(let F of[en/2,e-en/2])o.push({r:[F-en/2-(M&&F<e/2?rs:0),-wn,en+(M?rs:0),wn+_],k:"cap"});f=mr(ss(Wn([hn(0,0,e,n),...l],p),E,m.add),C,m.sub),c={bars:[],ties:[]};for(let F of[en/2,e-en/2])c.bars.push({cx:F,z:u/2,len:u+30}),A.forEach((k,G)=>c.ties.push({x0:F-en/2-.8,x1:F+en/2+.8,y0:-wn-.8,y1:2.75,z:Math.max(k,p+.5)+b/2,w:b-.4,first:G===0}));let H=n+18;a.push(["Blade",`${ma(e)} \xD7 ${ma(n)} mm`]),a.push(["Height in rack",`${ma(H)} mm incl. bar and bracket \u2192 ${Math.ceil(H/da-1e-6)}U`]),a.push(["Bars",`${i.hr.span} mm apart centre to centre`]);let B=Math.max(...i.boards.map(F=>p+F.sh+F.t+F.comp),p);a.push(["Blade spacing",`\u2265 ${Math.ceil(B/wn)*wn} mm (${ma(B)} mm deep, rounded to 15 mm)`]),a.push(["Hardware",M?"2 \xD7 M3 nut + 2 \xD7 M3x10 set screw":g?`${2*I} zip ties up to ${b} mm wide (the HomeRacker pin hole stays)`:"2 HomeRacker lock pins"]),g&&a.push(["Zip ties",`thread each tie through a channel just above the bar (${I} per cap), down both cap walls, under the bar, and pull tight`]),n>240&&r.push("Blade is taller than 240 mm, which will not fit a 250 mm bed.")}else if(i.mode==="din"){let p=s.t,u=i.din.clear,m=i.din.latch,y=Math.max(i.din.clipW,p),M=Ch,g=i.din.railX>0?i.din.railX:e/2,_=Math.max(g-17.5-8,0),b=Math.min(g+17.5+u+m+6,e);(g-17.5-u-2.4<0||g+17.5+u+m>e)&&r.push("The DIN clip does not fit on the blade; move the rail or make the blade longer.");let I=pa(i,p),A=y-p;for(let k of i.boards){let G=gn(k);G.x0<b+1&&G.x1>_-1&&(A=Math.min(A,G.y0-M-1))}let E=[bn([b-_,M,y],[_,0,0])];if(A>1){let k=A,D=k>=y-p?[[M,p],[M,y],[M+y-p,p]]:[[M,p],[M,y],[M+k,y-k],[M+k,p]];E.push(gr(D,_,4),gr(D,b-4,4))}let C=-(1+u),x=[hn(g-17.5-u-2.4,C-1.8,2.4+u+2.2,1.8),hn(g-17.5-u-2.4,C-1.8,2.4,1.8+1+u+.01),hn(g+17.5+u,C-1.8,m,1.8+1+u+M-2),Th([...hn(g+17.5+u-2.2,C-.8,2.2,.8),...hn(g+17.5+u,C-1.8,.01,1.8)])];for(let k of x)E.push(Wn([k],y));let w=y+10,H=[bn([1,M-2+1,w],[g+17.5+u-1,-1,-1]),bn([e+2,M-2+1,w],[g+17.5+u+m,-1,-1])],B=[[_-1,0,b+1,M+Math.max(A,0)+2]];l=s.lattice?fa(5,t.bot,e-5,n-5,s.pitch,s.bar,B,I.circles):[],o.push({r:[_,0,b-_,M],k:"cap"},{r:[g-17.5,-7.5,35,7.5],k:"rail"}),f=mr(ss(Wn([hn(0,0,e,n),...l],p),E,I.add),H,I.sub),a.push(["Blade",`${Dn(e)} \xD7 ${Dn(n)} mm, clip ${Dn(y)} mm wide`]),a.push(["Rail",`TS35 centred at x = ${Dn(g)} mm`]);let F=Math.max(...i.boards.map(k=>p+k.sh+k.t+k.comp),y);a.push(["Blade spacing on the rail",`\u2265 ${Dn(F)} mm`]),a.push(["Tuning",`din_clear ${u} (looser: higher), latch ${m} mm (softer: thinner)`]),(e>240||n>240)&&r.push("Blade is larger than 240 mm, which will not fit a 250 mm bed.")}else if(i.mode==="skadis"){let p=s.t,u=ee.slotW-i.sk.fit,m=i.sk.boardT+.4,y=i.sk.style==="blade",M=[];if(y){let g=pa(i,p),_=[bn([6,n,u],[0,0,0])];for(let I=8;I+ee.stemH<=n-3;I+=ee.pitch)M.push(I),_.push(Wn([hn(-m,I,m+.01,ee.stemH)],u),Wn([hn(-m-ee.legT,I-ee.leg,ee.legT+.01,ee.stemH+ee.leg)],u)),o.push({r:[-m-ee.legT,I-ee.leg,m+ee.legT,ee.stemH+ee.leg],k:"cap"});o.push({r:[0,0,6,n],k:"wall"}),l=s.lattice?fa(8,5,e-5,n-5,s.pitch,s.bar,[[0,0,9,n]],g.circles):[],f=mr(ss(Wn([hn(0,0,e,n),...l],p),_,g.add),g.sub),a.push(["Blade",`${Dn(e)} \xD7 ${Dn(n)} mm, sticks out ${Dn(e)} mm from the board`]),a.push(["Hooks",`${M.length} in one slot column, 40 mm apart`]);let b=Math.max(...i.boards.map(I=>p+I.sh+I.t+I.comp),u);a.push(["Blade spacing",`\u2265 ${Math.ceil(b/ee.row)*ee.row} mm (neighbouring slot columns are 20 mm apart, their slots sit 20 mm higher)`]),M.length||r.push("The blade is too low for a hook; make it at least 17 mm tall.")}else{let g=Math.max(1,Math.floor((e-20)/ee.pitch)+1),_=[];for(let k=0;k<g;k++)_.push(e/2+ee.pitch*(k-(g-1)/2));let b=[];for(let k=n-6-ee.slotH;k>=4&&(b.push(k),i.sk.rows==="all");k-=ee.pitch);let I=pa(i,p),A=[],E=[],C=[],x=2.5,w=3,H=p+m;for(let k of _)for(let G of b)M.push([k,G]),A.push(bn([ee.slotW,ee.slotH,p+2],[k-ee.slotW/2,G,-1])),E.push([k-ee.slotW/2-3,G-w-1,k+ee.slotW/2+3,G+ee.slotH+w+1]),o.push({r:[k-ee.slotW/2,G,ee.slotW,ee.slotH],k:"cap"},{r:[k-u/2,G-w,u,ee.slotH+2*w],k:"rail"});let B=[hn(-x,-w,x+.01,ee.slotH+2*w),hn(0,0,H+.01,ee.stemH),hn(H,-ee.leg,ee.legT,ee.stemH+ee.leg)],F=x+H+ee.legT+5;if(M.forEach((k,G)=>C.push(Fi([x+2+G*F,-10-ee.slotH-w,0],ss(B.map(D=>Wn([D],u)))))),b.length){let k=_[0],G=b[0];for(let D=-Math.ceil((G+20)/ee.row);D<=Math.ceil((n-G+20)/ee.row);D++)for(let K=-Math.ceil((k+40)/ee.pitch);K<=Math.ceil((e-k+40)/ee.pitch);K++){let tt=k+K*ee.pitch+Math.abs(D)%2*ee.row-ee.slotW/2,j=G+D*ee.row;tt>-10&&tt<e+10&&j>-20&&j<n+5&&o.push({r:[tt,j,ee.slotW,ee.slotH],k:"slot"})}}for(let k of i.boards){let G=gn(k);for(let D of k.holes){if(D.off)continue;let K=_i[D.screw||k.screw]||_i.M3,[tt,j]=xr(k,D.x,D.y);E.some(pt=>tt+K.sd/2>pt[0]&&tt-K.sd/2<pt[2]&&j+K.sd/2>pt[1]&&j-K.sd/2<pt[3])&&r.push(`${k.name}: a standoff sits on a hook slot; move the board or the holes.`)}k.sh<x+1&&E.some(D=>G.x0<D[2]&&G.x1>D[0]&&G.y0<D[3]&&G.y1>D[1])&&r.push(`${k.name}: the hook heads stick out ${x} mm, so the standoffs must be taller over them.`)}l=s.lattice?fa(5,5,e-5,n-5,s.pitch,s.bar,E,I.circles):[],f=ss(mr(ss(Wn([hn(0,0,e,n),...l],p),I.add),A,I.sub),C),a.push(["Plate",`${Dn(e)} \xD7 ${Dn(n)} mm, ${M.length} hook slot${M.length===1?"":"s"} on the 40 mm grid`]),a.push(["Hooks",`${M.length} separate hooks, in the same file below the plate, printed on their side`]),a.push(["Hanging","push the hooks through the plate slots into the board, then slide everything down"]),a.push(["Print","plate on its back, standoffs up; no supports, no overhangs"]),b.length||r.push("The plate is too low for a hook row; make it at least 25 mm tall.")}(e>240||n>240)&&r.push("Plate is larger than 240 mm, which will not fit a 250 mm bed.")}else{let p=i.r10,u=p.floor,m=Se.side_t,y=p.units*da-.8,M=pa(i,u),g=p.panelW,_=Se.tray_w/2-Se.pitch/2,b=[bn([Se.tray_w-2*m,2,u+Se.lip],[m,0,0])],I=Math.min(Se.gusset,n-1),A=[[0,0],[n,0],[n,u+Se.rear_h],[I,y],[0,y]];b.push(gr(A,0,m),gr(A,Se.tray_w-m,m));let E=g/2-(Se.tray_w/2-m),C=[];for(let x of[-1,1]){let w=x<0?Se.tray_w/2-g/2:Se.tray_w-m;b.push(bn([E,Se.panel_t,y],[w,0,0]));for(let H=0;H<p.units;H++)for(let B of[6.35,38.1]){let F=x<0?_:Se.tray_w-_;C.push(Fi([F,-1,H*da+B],Ul([-90,0,0],Wn([Eh(Se.hole_d,0,-1)],Se.panel_t+2))))}}l=s.lattice?fa(m+Se.band,Se.band,Se.tray_w-m-Se.band,n-6,s.pitch,s.bar,[],M.circles):[],f=mr(ss(Wn([hn(0,0,Se.tray_w,n),...l],u),b,M.add),C,M.sub),o.push({r:[Se.tray_w/2-g/2,0,E,Se.panel_t],k:"cap"},{r:[Se.tray_w-m,0,E,Se.panel_t],k:"cap"},{r:[0,0,m,n],k:"wall"},{r:[Se.tray_w-m,0,m,n],k:"wall"},{r:[m,0,Se.tray_w-2*m,2],k:"wall"}),a.push(["Tray",`${p.units}U, ${g} mm across the ears, ${Dn(n)} mm deep`]),a.push(["Inner width",`${Dn(Se.tray_w-2*m)} mm between the side walls`]),a.push(["Rack holes",`M6, ${Se.pitch} mm apart, 2 per U`]);for(let x of i.boards){let w=u+x.sh+x.t+x.comp;w>p.units*da-.5&&r.push(`${x.name}: top at ${Dn(w)} mm is taller than ${p.units}U (${Dn(p.units*da)} mm).`)}n>240&&r.push("Tray is deeper than 240 mm, which will not fit a 250 mm bed.")}return{node:f,lay:t,warn:r,info:a,cells:l,draw:o,flip:null,guides:c}}var ma=i=>(Math.round(i*10)/10).toString(),Dn=ma;var kl=[{key:"o2_box-6431_pcb",name:"o2 Box 6431 (bare PCB)",w:133,h:180,sh:6,screw:"M3",holes:[{x:9,y:12.5},{x:124,y:12.5},{x:9,y:167.5},{x:124,y:167.5}],comp:20.4,box:!1},{key:"tplink_tl-wdr3600-v1",name:"TP-Link TL-WDR3600 v1",w:243,h:160.6,sh:6,screw:"M3",holes:[],comp:35,box:!0},{key:"tplink_tl-wdr4300-v1",name:"TP-Link TL-WDR4300 v1 (wifi probe)",w:243,h:160.6,sh:6,screw:"M3",holes:[],comp:35,box:!0},{key:"asus_rt-n16",name:"ASUS RT-N16, bare PCB",w:97,h:187,sh:6,screw:"M3",holes:[{x:5,y:5},{x:92,y:5},{x:5,y:182},{x:92,y:182}],comp:17.4,box:!1},{key:"genexis_pulse-ex400",name:"Genexis Pulse EX400",w:125,h:125,sh:6,screw:"M3",holes:[],comp:32,box:!0},{key:"enterasys_ws-ap3710i",name:"Enterasys WS-AP3710i",w:200,h:188,sh:6,screw:"M3",holes:[],comp:40,box:!0},{key:"ignitenet_ss-w2-ac2600",name:"IgniteNet SS-W2-AC2600",w:224,h:219,sh:6,screw:"M3",holes:[],comp:37,box:!0},{key:"aruba_ap-32x",name:"Aruba AP-32x",w:203,h:203,sh:6,screw:"M3",holes:[],comp:59,box:!0},{key:"rpi-4",name:"Raspberry Pi 4 B",w:85,h:56,sh:6,screw:"M2.5",holes:[{x:3.5,y:3.5},{x:61.5,y:3.5},{x:3.5,y:52.5},{x:61.5,y:52.5}],comp:16.4,box:!1},{key:"raspberry-pi-3b",name:"Raspberry Pi 3 B",w:85,h:56,sh:6,screw:"M2.5",holes:[{x:3.5,y:3.5},{x:61.5,y:3.5},{x:3.5,y:52.5},{x:61.5,y:52.5}],comp:16.4,box:!1},{key:"pine64_rock64",name:"Pine64 ROCK64",w:85,h:56,sh:6,screw:"M2.5",holes:[{x:3.5,y:3.5},{x:61.5,y:3.5},{x:3.5,y:52.5},{x:61.5,y:52.5}],comp:17.4,box:!1},{key:"bananapi_bpi-r4",name:"Banana Pi BPI-R4",w:100.5,h:148,sh:6,screw:"M3",holes:[{x:3.5,y:3.5},{x:77,y:3.5},{x:3.5,y:144.5},{x:77,y:144.5}],comp:27.4,box:!1},{key:"bananapi_bpi-r4-lite",name:"Banana Pi BPI-R4 Lite",w:100.5,h:148,sh:6,screw:"M3",holes:[{x:3.5,y:3.5},{x:77,y:3.5},{x:3.5,y:144.5},{x:77,y:144.5}],comp:27.4,box:!1},{key:"ubiquiti_usg",name:"Ubiquiti UniFi Security Gateway (USG), bare PCB",w:100,h:125,sh:6,screw:"M3",holes:[{x:5,y:5},{x:95,y:5},{x:5,y:120},{x:95,y:120}],comp:12.4,box:!1},{key:"starfive_visionfive2-v1.2a",name:"StarFive VisionFive 2 (v1.2A)",w:74,h:100,sh:6,screw:"M2.5",holes:[{x:3,y:3.5},{x:52,y:3.5},{x:3,y:96.5},{x:52,y:96.5}],comp:12.4,box:!1},{key:"thomson_thg571k",name:"Thomson/Technicolor THG571K (cable modem, in case)",w:170,h:165,sh:6,screw:"M3",holes:[],comp:37,box:!0},{key:"phones_iphone7_pixel5",name:"Phones: iPhone 7 + Pixel 5",w:144.7,h:140.9,sh:6,screw:"M3",holes:[],comp:8,box:!0}];var Gt=i=>document.getElementById(i),Tn=i=>String(i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),xe=i=>Math.round(i*100)/100,Lh="pcb-plate-designer-v1",Rt=jx()||Ph(),un=0,Ve=-1,Cs=null,yr=[],Vl=[];function jx(){try{let i=localStorage.getItem(Lh);return i?Dh(JSON.parse(i)):null}catch{return null}}function Dh(i){let t=Ph(),e={...t,...i,plate:{...t.plate,...i.plate},hr:{...t.hr,...i.hr},din:{...t.din,...i.din},r10:{...t.r10,...i.r10},sk:{...t.sk,...i.sk}};return e.boards=(i.boards||[]).map(n=>_a({...n,holes:(n.holes||[]).map(s=>({...s}))})),ga[e.mode]||(e.mode="homeracker"),e}var Qx=()=>JSON.stringify(Rt);function nn(){let i=Qx();if(i!==Cs){Cs&&(yr.push(Cs),yr.length>150&&yr.shift(),Vl.length=0),Cs=i;try{localStorage.setItem(Lh,i)}catch{}}}function Wd(i){Rt=Dh(JSON.parse(i)),Cs=i,un=Math.min(un,Rt.boards.length-1),Ve=-1,ki();try{localStorage.setItem(Lh,i)}catch{}}var on=()=>Rt.boards[un];function $d(i,t,e){let n=document.createElement("label");i.span&&(n.style.gridColumn=`span ${i.span}`);let s;i.type==="chk"?(n.className="chk",s=document.createElement("input"),s.type="checkbox",s.checked=!!t[i.k],n.append(s,document.createTextNode(i.label))):(n.append(document.createTextNode(i.label)),i.type==="sel"?(s=document.createElement("select"),s.innerHTML=i.opts.map(([a,o])=>`<option value="${Tn(a)}">${Tn(o)}</option>`).join(""),s.value=String(t[i.k])):(s=document.createElement("input"),s.type=i.type==="text"?"text":"number",i.type!=="text"&&(s.step=i.step||.1,s.inputMode="decimal",i.min!=null&&(s.min=i.min)),s.value=t[i.k]),n.append(s)),i.dis&&(s.disabled=!0),s.id="f-"+i.id;let r=()=>i.type==="chk"?s.checked:i.type==="text"?s.value:i.type==="sel"?i.num?+s.value:s.value:s.value===""?null:+s.value;return s.addEventListener("input",()=>{let a=r();a===null||Number.isNaN(a)||(t[i.k]=a,e&&e(i.k),Zn())}),s.addEventListener("change",()=>{nn(),i.rerender&&Gl()}),n}function qd(i,t,e,n){i.replaceChildren(...t.map(s=>$d(s,e,n)))}function ty(){Gt("modes").innerHTML=Object.entries(ga).map(([i,t])=>`<button data-mode="${i}" aria-pressed="${Rt.mode===i}">${Tn(t.label)}</button>`).join("")}function Gl(){ty();let i=ga[Rt.mode];Gt("modeTitle").textContent=i.label,Gt("modeSub").textContent=i.sub;let t={homeracker:[[{k:"span",label:"Bar spacing (mm, c-c)",step:15,id:"span"},Rt.hr],[{k:"capLen",label:"Cap width (mm)",step:1,id:"cap"},Rt.hr],[{k:"clamp",label:"Fix to the bar with",type:"sel",opts:[["ziptie","Zip ties (channels through the caps)"],["setscrew","M3 set screw + nut"],["pin","HomeRacker lock pin only"]],id:"clamp",span:2,rerender:!0},Rt.hr],...Rt.hr.clamp==="ziptie"?[[{k:"zipW",label:"Zip tie width (mm)",step:.5,id:"zw"},Rt.hr]]:[]],din:[[{k:"clipW",label:"Clip width (mm)",step:1,id:"cw"},Rt.din],[{k:"railX",label:"Rail position x (0 = centre)",step:1,id:"rx"},Rt.din],[{k:"clear",label:"Clip clearance (mm)",step:.05,id:"dc"},Rt.din],[{k:"latch",label:"Latch thickness (mm)",step:.1,id:"lt"},Rt.din]],rack10:[[{k:"units",label:"Height (U)",type:"sel",num:!0,opts:[[1,"1U"],[2,"2U"],[3,"3U"]],id:"u"},Rt.r10],[{k:"depth",label:"Depth (mm, 0 = auto)",step:5,id:"dp"},Rt.r10],[{k:"panelW",label:"Ear width",type:"sel",num:!0,opts:[[250,"250 mm (fits 250 bed)"],[254,'254 mm (full 10")']],id:"pw"},Rt.r10],[{k:"floor",label:"Floor (mm)",step:.5,id:"fl"},Rt.r10]],skadis:[[{k:"style",label:"Mounting",type:"sel",opts:[["flat","Flat on the board"],["blade","Blade sticking out"]],id:"sks",span:2,rerender:!0},Rt.sk],[{k:"fit",label:"Hook play in slot (mm)",step:.1,id:"skf"},Rt.sk],[{k:"boardT",label:"Board thickness (mm)",step:.5,id:"skt"},Rt.sk],...Rt.sk.style==="flat"?[[{k:"rows",label:"Hooks",type:"sel",opts:[["top","Top row only"],["all","Every row (every 40 mm)"]],id:"skr",span:2},Rt.sk]]:[]]}[Rt.mode];Gt("modeFields").replaceChildren(...t.map(([r,a])=>$d(r,a)));let e=Rt.plate,n=e.autoSize,s=[];Rt.mode!=="rack10"&&s.push({k:"t",label:"Thickness (mm)",step:.5,id:"t"}),s.push({k:"holeKind",label:"Screw holes",type:"sel",opts:[["pilot","Pilot (self-tapping)"],["clear","Clearance (screw + nut)"]],id:"hk"}),s.push({k:"margin",label:"Margin around boards",step:1,id:"mg"}),s.push({k:"lattice",label:"Open lattice (15 mm grid, zip-tie friendly)",type:"chk",id:"lat",span:2,rerender:!0}),e.lattice&&s.push({k:"pitch",label:"Grid pitch",step:1,id:"pi"},{k:"bar",label:"Bar width",step:.5,id:"ba"}),Rt.mode!=="rack10"&&(s.push({k:"autoSize",label:"Size the plate to the boards",type:"chk",id:"as",span:2,rerender:!0}),n||((Rt.mode==="din"||Rt.mode==="skadis")&&s.push({k:"L",label:"Length (mm)",step:1,id:"L"}),s.push({k:"H",label:"Height (mm)",step:1,id:"H"}))),qd(Gt("plateFields"),s,e),Ma()}function Ma(){Gt("boardList").innerHTML=Rt.boards.map((t,e)=>`<button data-b="${e}" aria-pressed="${e===un}"><span>${Tn(t.name||"board "+(e+1))}</span><small>${xe(t.w)} \xD7 ${xe(t.h)} \xB7 ${t.holes.length} holes</small></button>`).join("")||'<p class="sub">No boards yet. Add one below.</p>';let i=on();if(Gt("boardBox").style.display=i?"":"none",!i){Gt("holeRows").innerHTML="";return}qd(Gt("boardFields"),[{k:"name",label:"Name",type:"text",span:3,id:"bn"},{k:"w",label:"Width",step:.5,id:"bw"},{k:"h",label:"Height",step:.5,id:"bh"},{k:"screw",label:"Screw",type:"sel",opts:Object.keys(_i).map(t=>[t,t]),id:"bs"},{k:"x",label:"Position x",step:.5,id:"bx"},{k:"y",label:"Position y",step:.5,id:"by"},{k:"sh",label:"Standoff (mm)",step:.5,id:"bsh"},{k:"t",label:"PCB thickness",step:.1,id:"bt"},{k:"comp",label:"Tallest part",step:1,id:"bc"}],i,t=>{(t==="name"||t==="w"||t==="h")&&Sa()}),os()}function Sa(){[...Gt("boardList").children].forEach((i,t)=>{let e=Rt.boards[t];!e||!i.dataset||(i.innerHTML=`<span>${Tn(e.name||"board "+(t+1))}</span><small>${xe(e.w)} \xD7 ${xe(e.h)} \xB7 ${e.holes.length} holes</small>`)})}function os(){let i=on();if(!i)return;let t=e=>`<option value="">(${Tn(i.screw)})</option>`+Object.keys(_i).map(n=>`<option ${e===n?"selected":""}>${n}</option>`).join("");Gt("holeRows").innerHTML=i.holes.map((e,n)=>`<tr data-h="${n}" class="${n===Ve?"sel":""}"><td class="n">${n+1}</td>
    <td><input type="number" step="0.1" inputmode="decimal" data-k="x" value="${xe(e.x)}" aria-label="hole ${n+1} x"></td>
    <td><input type="number" step="0.1" inputmode="decimal" data-k="y" value="${xe(e.y)}" aria-label="hole ${n+1} y"></td>
    <td><select data-k="screw" aria-label="hole ${n+1} screw">${t(e.screw)}</select></td>
    <td><input type="checkbox" data-k="on" ${e.off?"":"checked"} aria-label="use hole ${n+1}"></td>
    <td><button class="x" data-del="${n}" aria-label="remove hole ${n+1}">\xD7</button></td></tr>`).join("")}function ey(i){Gt("msgs").innerHTML=i.warn.length?i.warn.map(t=>`<li class="w">${Tn(t)}</li>`).join(""):"<li>No problems found.</li>",Gt("info").innerHTML=i.info.map(([t,e])=>`<dt>${Tn(t)}</dt><dd>${Tn(e)}</dd>`).join("")}var ny="http://www.w3.org/2000/svg",Yn,zl=null;function Yd(i){let t=i.lay,{L:e,H:n}=t,s=0,r=e,a=0;for(let E of i.draw)E.k!=="slot"&&(s=Math.min(s,E.r[0]),r=Math.max(r,E.r[0]+E.r[2]),a=Math.min(a,E.r[1]));for(let E of Rt.boards){let C=gn(E);s=Math.min(s,C.x0),r=Math.max(r,C.x1),a=Math.min(a,C.y0)}let o=Math.max(n,...Rt.boards.map(E=>gn(E).y1)),l=16;zl=[s-l,-(o+l+4),r-s+2*l,o-a+2*l+12];let c=getComputedStyle(document.documentElement),f=Math.max(zl[2],zl[3])/70,p=[];p.push(`<rect x="0" y="${-n}" width="${e}" height="${n}" fill="var(--plate)" stroke="var(--cobalt-ink)" stroke-width="0.4"/>`);for(let E of i.cells)p.push(`<rect x="${E[0][0]}" y="${-E[2][1]}" width="${E[1][0]-E[0][0]}" height="${E[2][1]-E[0][1]}" fill="var(--bg)" opacity="0.85"/>`);for(let E of i.draw)E.k==="slot"&&p.push(`<rect x="${E.r[0]}" y="${-(E.r[1]+E.r[3])}" width="${E.r[2]}" height="${E.r[3]}" rx="2.5" fill="none" stroke="var(--mute)" stroke-width="0.3" opacity="0.6"/>`);for(let E of i.draw){if(E.k==="slot")continue;let[C,x,w,H]=E.r;p.push(`<rect x="${C}" y="${-(x+H)}" width="${w}" height="${H}" fill="${E.k==="rail"?"none":"var(--cobalt)"}" fill-opacity="${E.k==="wall"?.45:.3}" stroke="var(--cobalt-ink)" stroke-width="0.3" ${E.k==="rail"?'stroke-dasharray="2 1.5"':""}/>`)}if(i.guides)for(let E of i.guides.ties)E.first&&p.push(`<rect x="${E.x0}" y="${-E.y1}" width="${E.x1-E.x0}" height="${E.y1-E.y0}" fill="none" stroke="#ff7a1a" stroke-width="0.8"/>`,`<text x="${(E.x0+E.x1)/2}" y="${-E.y0+f*1.3}" font-size="${f*.8}" fill="#ff7a1a" text-anchor="middle">zip tie</text>`);let[u,m,y,M]=t.area;p.push(`<rect x="${u}" y="${-M}" width="${y-u}" height="${M-m}" fill="none" stroke="var(--mute)" stroke-width="0.25" stroke-dasharray="1.5 1.5"/>`),Rt.boards.forEach((E,C)=>{let x=gn(E),w=C===un;p.push(`<g data-b="${C}" class="brd" style="cursor:move"><rect x="${x.x0}" y="${-x.y1}" width="${x.fw}" height="${x.fh}" rx="1" fill="var(--pcb)" fill-opacity="${w?.32:.18}" stroke="var(--pcb)" stroke-width="${w?.8:.4}"/>`);let[H,B]=xr(E,0,0);p.push(`<circle cx="${H}" cy="${-B}" r="${f*.35}" fill="var(--pcb)"/>`),p.push(`<text x="${(x.x0+x.x1)/2}" y="${-(x.y0+x.y1)/2}" font-size="${f}" text-anchor="middle" dominant-baseline="middle" fill="var(--ink)" style="pointer-events:none">${Tn(E.name||"board "+(C+1))}</text></g>`),E.holes.forEach((F,k)=>{let[G,D]=xr(E,F.x,F.y),K=_i[F.screw||E.screw]||_i.M3,tt=w&&k===Ve,j=Rt.plate.holeKind==="clear"?K.clear:K.pilot;p.push(`<g data-b="${C}" data-h="${k}" style="cursor:grab"><circle cx="${G}" cy="${-D}" r="${Math.max(K.sd/2+1.5,f*.9)}" fill="transparent"/>
        <circle cx="${G}" cy="${-D}" r="${K.sd/2}" fill="${F.off?"none":"var(--bg)"}" stroke="${tt?"var(--cobalt-ink)":"var(--ink)"}" stroke-width="${tt?.8:.35}" ${F.off?'stroke-dasharray="1 1"':""}/>
        <circle cx="${G}" cy="${-D}" r="${j/2}" fill="${tt?"var(--cobalt-ink)":"var(--ink)"}" opacity="${F.off?.3:1}"/></g>`),tt&&p.push(`<text x="${G+K.sd/2+1.5}" y="${-D-K.sd/2-1}" font-size="${f}" fill="var(--cobalt-ink)" style="pointer-events:none">${xe(F.x)}, ${xe(F.y)}</text>`)})});let[g,_,b,I]=t.sides,A=(E,C,x,w="middle",H=0)=>x?`<text x="${E}" y="${C}" font-size="${f}" fill="var(--mute)" text-anchor="${w}" ${H?`transform="rotate(${H} ${E} ${C})"`:""}>${Tn(x)}</text>`:"";p.push(A(e/2,-a+f*1.6,b),A(e/2,-n-f*.6,`${I?I+" \xB7 ":""}${xe(e)} \xD7 ${xe(n)} mm`)),p.push(A(s-f*.6,-n/2,g,"middle",-90),A(r+f*1.2,-n/2,_,"middle",90)),Yn.setAttribute("viewBox",zl.join(" ")),Yn.innerHTML=p.join(""),Gt("sheetDims").textContent=`${xe(e)} \xD7 ${xe(n)} mm`}function Ih(i){let t=Yn.createSVGPoint();t.x=i.clientX,t.y=i.clientY;let e=t.matrixTransform(Yn.getScreenCTM().inverse());return[e.x,-e.y]}var as=i=>{let t=+Gt("snap").value;return Math.round(i/t)*t},_n=null,As=null;function iy(){Yn=document.createElementNS(ny,"svg"),Yn.setAttribute("aria-label","Top view of the plate; drag boards and holes"),Gt("sheet").append(Yn),Yn.addEventListener("pointerdown",t=>{let e=t.target.closest("[data-b]");if(!e){Ve=-1,$l();return}let n=+e.dataset.b,s=e.dataset.h!=null?+e.dataset.h:-1,[r,a]=Ih(t),o=performance.now();if(s<0&&As&&As.bi===n&&o-As.t<450&&Math.hypot(r-As.x,a-As.y)<3){As=null;let u=Rt.boards[n],[m,y]=Ol(u,r,a);n!==un&&(un=n,Gl()),u.holes.push({x:xe(as(m)),y:xe(as(y))}),Ve=u.holes.length-1,nn(),os(),Sa(),Zn();return}As={bi:n,t:o,x:r,y:a};let l=n!==un;un=n,Ve=s;let[c,f]=Ih(t),p=on();_n={hk:s,mx:c,my:f,bx:p.x,by:p.y,moved:!1},Yn.setPointerCapture(t.pointerId),l?Gl():os(),$l()}),Yn.addEventListener("pointermove",t=>{if(!_n)return;let[e,n]=Ih(t),s=on();if(!(Math.hypot(e-_n.mx,n-_n.my)<.3&&!_n.moved)){if(_n.moved=!0,_n.hk>=0){let[r,a]=Ol(s,e,n);s.holes[_n.hk].x=xe(as(r)),s.holes[_n.hk].y=xe(as(a)),os()}else{s.x=xe(as(_n.bx+e-_n.mx)),s.y=xe(as(_n.by+n-_n.my));for(let r of["bx","by"]){let a=Gt("f-"+r);a&&(a.value=r==="bx"?s.x:s.y)}}Zn()}});let i=()=>{_n&&(_n=null,nn())};Yn.addEventListener("pointerup",i),Yn.addEventListener("pointercancel",i)}var va=null,Rs,Oi,xi,Hl,Wl,Bi,ya,Is=null,Xl=!0;function sy(){let i=Gt("view");try{Rs=new Rl({antialias:!0,alpha:!0})}catch{Gt("status").textContent="3D preview needs WebGL, which this browser does not offer. The drawing and the SCAD export still work.";return}Rs.setPixelRatio(Math.min(devicePixelRatio,2)),i.prepend(Rs.domElement),Oi=new Or,xi=new yn(35,1,1,5e3),xi.up.set(0,0,1),Hl=new Ll(xi,Rs.domElement),Hl.enableDamping=!0,Oi.add(new qr(16777215,8425648,1.6));let t=new rr(16777215,1.6);t.position.set(-150,-250,400),Oi.add(t);let e=new rr(16777215,.5);e.position.set(200,200,100),Oi.add(e),Wl=new Mn(new Pn,new Ji({color:3826924,roughness:.55,metalness:.05,flatShading:!0})),Oi.add(Wl),Bi=new ui,Oi.add(Bi),ya=new ui,Oi.add(ya);let n=new Jr(260,26,8952268,13160680);n.rotation.x=Math.PI/2,n.position.z=-.05,n.material.opacity=.35,n.material.transparent=!0,Oi.add(n),new ResizeObserver(()=>{let r=i.clientWidth,a=i.clientHeight;Rs.setSize(r,a,!1),xi.aspect=r/Math.max(a,1),xi.updateProjectionMatrix()}).observe(i),(function r(){requestAnimationFrame(r),Hl.update(),Rs.render(Oi,xi)})()}function Zd(i){let t=new Y(...i.min).add(new Y(...i.max)).multiplyScalar(.5),e=Math.max(...i.max.map((n,s)=>n-i.min[s]));Hl.target.copy(t),xi.position.set(t.x-e*.7,t.y-e*1.5,t.z+e*1.3),xi.near=e/100,xi.far=e*20,xi.updateProjectionMatrix()}function Jd(i,t){if(!Rs)return;let e=new Pn;e.setAttribute("position",new zn(i.pos,3)),e.setIndex(new zn(i.idx,1));let n=e.toNonIndexed();if(n.computeVertexNormals(),e.dispose(),Wl.geometry.dispose(),Wl.geometry=n,Bi.clear(),ya.clear(),t&&t.flip?(Bi.rotation.set(Math.PI,0,0),Bi.position.set(0,t.flip.H,t.flip.t)):(Bi.rotation.set(0,0,0),Bi.position.set(0,0,0)),Gt("ghost").checked){let r=Rt.mode==="rack10"?Rt.r10.floor:Rt.plate.t;for(let a of Rt.boards){let o=gn(a),l=new Mn(new ei(o.fw,o.fh,a.t),new Ji({color:2067020,transparent:!0,opacity:.55}));l.position.set((o.x0+o.x1)/2,(o.y0+o.y1)/2,r+a.sh+a.t/2),Bi.add(l);let c=new sr(new Gr(new ei(o.fw,o.fh,a.comp)),new Ms({color:2067020,transparent:!0,opacity:.5}));c.position.set(l.position.x,l.position.y,r+a.sh+a.t+a.comp/2),Bi.add(c)}}if(Gt("ghost").checked&&t&&t.guides){let r=new Ji({color:9080729,transparent:!0,opacity:.45}),a=new Ji({color:16742938});for(let o of t.guides.bars){let l=new Mn(new ei(15,15,o.len),r);l.position.set(o.cx,-7.5,o.z),ya.add(l)}for(let o of t.guides.ties){let{x0:l,x1:c,y0:f,y1:p,z:u,w:m}=o,y=1.2;for(let[M,g,_,b]of[[(l+c)/2,p,c-l,y],[(l+c)/2,f,c-l,y],[l,(f+p)/2,y,p-f],[c,(f+p)/2,y,p-f]]){let I=new Mn(new ei(_,b,m),a);I.position.set(M,g,u),ya.add(I)}}}Xl&&(Zd(i.bbox),Xl=!1);let s=i.volume/1e3*1.27;Gt("meta").textContent=`${xe(i.bbox.max[0]-i.bbox.min[0])} \xD7 ${xe(i.bbox.max[1]-i.bbox.min[1])} \xD7 ${xe(i.bbox.max[2]-i.bbox.min[2])} mm \xB7 about ${Math.round(s)} g PETG`}var ls=null,Xd=0;function Zn(){ls=Bl(Rt),Yd(ls),ey(ls),clearTimeout(Xd),Xd=setTimeout(Kd,_n?90:30)}function Kd(){if(va)try{Is=Ah(ls.node,va),Gt("status").textContent="",Jd(Is,ls)}catch(i){Gt("status").textContent="Could not build the part: "+i.message}}function $l(){ls&&Yd(ls)}function ki(){Gl(),Zn()}Gt("modes").addEventListener("click",i=>{let t=i.target.closest("[data-mode]");if(!t)return;Rt.mode=t.dataset.mode,Xl=!0;let e=xa(Rt),[n,s,r,a]=e.area;Rt.boards.some(o=>{let l=gn(o);return l.x0<n||l.y0<s||l.x1>r||Rt.mode!=="homeracker"&&Rt.mode!=="din"&&l.y1>a})&&jd(),nn(),ki()});Gt("boardList").addEventListener("click",i=>{let t=i.target.closest("[data-b]");t&&(un=+t.dataset.b,Ve=-1,Ma(),$l())});Gt("addBoard").addEventListener("click",()=>{Rt.boards.push(_a({name:"board "+(Rt.boards.length+1),holes:[]})),un=Rt.boards.length-1,Ve=-1,Nh(on()),nn(),ki()});Gt("preset").innerHTML='<option value="">Add from devices.json\u2026</option><optgroup label="Boards with mounting holes">'+kl.filter(i=>!i.box).map(i=>`<option value="${Tn(i.key)}">${Tn(i.name)}</option>`).join("")+'</optgroup><optgroup label="Outline only (add holes yourself)">'+kl.filter(i=>i.box).map(i=>`<option value="${Tn(i.key)}">${Tn(i.name)}</option>`).join("")+"</optgroup>";Gt("preset").addEventListener("change",i=>{let t=kl.find(e=>e.key===i.target.value);i.target.value="",t&&(Rt.boards.push(_a({name:t.name,w:t.w,h:t.h,sh:t.sh,screw:t.screw,comp:Math.round(t.comp),holes:t.holes.map(e=>({...e}))})),un=Rt.boards.length-1,Ve=-1,Nh(on()),nn(),ki())});Gt("dupBoard").addEventListener("click",()=>{let i=on();if(!i)return;let t=JSON.parse(JSON.stringify(i));t.name+=" copy",Rt.boards.push(t),un=Rt.boards.length-1,Nh(t),nn(),ki()});Gt("delBoard").addEventListener("click",()=>{on()&&(Rt.boards.splice(un,1),un=Math.max(0,un-1),Ve=-1,nn(),ki())});Gt("arrange").addEventListener("click",()=>{jd(),nn(),ki()});document.querySelector("#boardBox").addEventListener("click",i=>{let t=i.target.closest("[data-rot]");if(!t||!on())return;let e=on(),n=gn(e),s=(n.x0+n.x1)/2,r=(n.y0+n.y1)/2;e.rot=((e.rot+ +t.dataset.rot)%360+360)%360;let a=gn(e);e.x=xe(as(s-a.fw/2)),e.y=xe(as(r-a.fh/2)),nn(),Ma(),Zn()});Gt("holeRows").addEventListener("input",i=>{let t=i.target.closest("[data-h]");if(!t)return;let e=on().holes[+t.dataset.h],n=i.target.dataset.k;if(n==="on")e.off=!i.target.checked;else if(n==="screw")i.target.value?e.screw=i.target.value:delete e.screw;else{let s=+i.target.value;if(i.target.value===""||Number.isNaN(s))return;e[n]=s}Ve=+t.dataset.h,Zn()});Gt("holeRows").addEventListener("change",()=>nn());Gt("holeRows").addEventListener("focusin",i=>{let t=i.target.closest("[data-h]");t&&Ve!==+t.dataset.h&&(Ve=+t.dataset.h,[...Gt("holeRows").rows].forEach((e,n)=>e.classList.toggle("sel",n===Ve)),$l())});Gt("holeRows").addEventListener("click",i=>{let t=i.target.closest("[data-del]");t&&(on().holes.splice(+t.dataset.del,1),Ve=-1,nn(),os(),Sa(),Zn())});Gt("addHole").addEventListener("click",()=>{let i=on();i&&(i.holes.push({x:xe(i.w/2),y:xe(i.h/2)}),Ve=i.holes.length-1,nn(),os(),Sa(),Zn())});Gt("ghost").addEventListener("change",()=>Is&&Jd(Is,ls));Gt("resetView").addEventListener("click",()=>Is&&Zd(Is.bbox));document.addEventListener("keydown",i=>{let t=/INPUT|SELECT|TEXTAREA/.test(document.activeElement?.tagName||"");if((i.ctrlKey||i.metaKey)&&i.key.toLowerCase()==="z"&&!t){i.preventDefault(),i.shiftKey?Vl.length&&(yr.push(Cs),Wd(Vl.pop())):yr.length&&(Vl.push(Cs),Wd(yr.pop()));return}if(t||!on())return;if((i.key==="Delete"||i.key==="Backspace")&&Ve>=0){on().holes.splice(Ve,1),Ve=-1,nn(),os(),Sa(),Zn(),i.preventDefault();return}let e={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,1],ArrowDown:[0,-1]}[i.key];if(e&&Ve>=0){let n=i.shiftKey?.1:.5,s=on(),r=s.holes[Ve],[a,o]=xr(s,r.x,r.y),[l,c]=Ol(s,a+e[0]*n,o+e[1]*n);r.x=xe(l),r.y=xe(c),nn(),os(),Zn(),i.preventDefault()}});function Nh(i){let t=xa({...Rt,plate:{...Rt.plate,autoSize:!0}}),[e,n,s]=t.area,r=6,a=Rt.boards.filter(M=>M!==i).map(gn),o=gn(i),l=e+(Rt.mode==="rack10"?4:3),c=n+(Rt.mode==="rack10"?2:1),f=Rt.mode==="din"?236:s,p=[[l,c],...a.map(M=>[M.x1+r,M.y0]),...a.map(M=>[M.x0,M.y1+r]),...a.map(M=>[l,M.y1+r])];p.sort((M,g)=>M[1]-g[1]||M[0]-g[0]);let u=([M,g])=>M+o.fw<=f&&!a.some(_=>M<_.x1+r-.01&&M+o.fw>_.x0-r+.01&&g<_.y1+r-.01&&g+o.fh>_.y0-r+.01),[m,y]=p.find(u)||[l,Math.max(c,...a.map(M=>M.y1+r))];i.x=xe(m),i.y=xe(y)}function jd(){let i=xa({...Rt,plate:{...Rt.plate,autoSize:!0}}),[t,e]=i.area,n=Rt.mode==="homeracker"||Rt.mode==="rack10"?i.area[2]:236,s=t+(Rt.mode==="rack10"?4:3),r=e+(Rt.mode==="rack10"?2:1),a=0;for(let o of Rt.boards){let l=gn(o);s+l.fw>n&&s>t+4&&(s=t+3,r+=a+6,a=0),o.x=xe(s),o.y=xe(r),s+=l.fw+6,a=Math.max(a,l.fh)}}function Qd(i,t){let e=Gt("dlg"),n=Gt("dlgForm");n.innerHTML=i+'<div class="row" style="justify-content:flex-end;margin-top:14px"><button class="b" value="cancel">Cancel</button><button class="b pri" value="ok">Apply</button></div>',e.onclose=()=>{e.returnValue==="ok"&&t(n)},e.returnValue="",e.showModal()}Gt("patBtn").addEventListener("click",()=>{let i=on();i&&Qd(`<h2 style="font-size:18px;margin-bottom:6px">Rectangle hole pattern</h2><p class="sub">Four holes, centre to centre spacing. Leave the offset empty to centre the pattern on the board. This replaces the board's holes; drag single holes afterwards if the pattern is not a perfect rectangle.</p>
    <div class="grid"><label>Spacing along width<input name="a" type="number" step="0.1" value="${xe(i.w-7)}"></label><label>Spacing along height<input name="b" type="number" step="0.1" value="${xe(i.h-7)}"></label>
    <label>Offset x (first hole)<input name="ox" type="number" step="0.1" placeholder="centred"></label><label>Offset y (first hole)<input name="oy" type="number" step="0.1" placeholder="centred"></label></div>`,t=>{let e=+t.a.value,n=+t.b.value,s=t.ox.value===""?(i.w-e)/2:+t.ox.value,r=t.oy.value===""?(i.h-n)/2:+t.oy.value;i.holes=[[0,0],[e,0],[e,n],[0,n]].map(([a,o])=>({x:xe(s+a),y:xe(r+o)})),Ve=-1,nn(),Ma(),Zn()})});Gt("pasteBtn").addEventListener("click",()=>{let i=on();i&&Qd(`<h2 style="font-size:18px;margin-bottom:6px">Paste hole coordinates</h2><p class="sub">One hole per line: x y, optionally a screw size (M2, M2.5, M3, M4). Commas, semicolons, tabs or spaces all work, so a column copied from a spreadsheet or KiCad's drill report fits.</p>
    <textarea name="t" rows="8">${i.holes.map(t=>`${xe(t.x)}, ${xe(t.y)}${t.screw?", "+t.screw:""}`).join(`
`)}</textarea>
    <label class="chk" style="margin-top:8px"><input type="checkbox" name="add"> add to the existing holes</label>`,t=>{let e=[];for(let n of t.t.value.split(/\n/)){let s=n.trim().split(/[\s,;]+/).filter(Boolean);if(s.length<2||Number.isNaN(+s[0])||Number.isNaN(+s[1]))continue;let r={x:+s[0],y:+s[1]},a=s.find(o=>_i[o.toUpperCase()]);a&&(r.screw=a.toUpperCase()),e.push(r)}i.holes=t.add.checked?i.holes.concat(e):e,Ve=-1,nn(),Ma(),Zn()})});var Ps=()=>(Rt.name||"plate").replace(/[^\w.-]+/g,"_")+"_"+Rt.mode+(Rt.boards.length?"_"+Rt.boards.map(i=>i.name).join("+").replace(/[^\w.-]+/g,"-").slice(0,60):"");function Uh(){let i=Bl(Rt),t=JSON.stringify(Rt).replace(/\*\//g,"* /");return`// ${ga[Rt.mode].label} plate, generated by the PCB plate designer
// ${i.info.map(([e,n])=>e+": "+n).join(`
// `)}
`+(i.warn.length?`// WARNINGS:
// ${i.warn.join(`
// `)}
`:"")+`// Prints flat as modelled, no supports.

${ua(i.node)}

/* design (open it in the plate designer):
${t}
*/
`}function tf(){let i=Is||va&&Ah(Bl(Rt).node,va);if(!i)throw new Error("the 3D engine is not loaded");let t=i.idx.length/3,e=new ArrayBuffer(84+t*50),n=new DataView(e),s="PCB plate designer "+Rt.mode;for(let o=0;o<s.length;o++)n.setUint8(o,s.charCodeAt(o));n.setUint32(80,t,!0);let r=84,a=i.pos;for(let o=0;o<t;o++){let l=i.idx[3*o]*3,c=i.idx[3*o+1]*3,f=i.idx[3*o+2]*3,p=a[c]-a[l],u=a[c+1]-a[l+1],m=a[c+2]-a[l+2],y=a[f]-a[l],M=a[f+1]-a[l+1],g=a[f+2]-a[l+2],_=u*g-m*M,b=m*y-p*g,I=p*M-u*y,A=Math.hypot(_,b,I)||1;for(let E of[_/A,b/A,I/A])n.setFloat32(r,E,!0),r+=4;for(let E of[l,c,f])for(let C=0;C<3;C++)n.setFloat32(r,a[E+C],!0),r+=4;r+=2}return new Uint8Array(e)}var ry=(()=>{let i=new Uint32Array(256);for(let t=0;t<256;t++){let e=t;for(let n=0;n<8;n++)e=e&1?3988292384^e>>>1:e>>>1;i[t]=e>>>0}return i})(),ay=i=>{let t=4294967295;for(let e=0;e<i.length;e++)t=ry[(t^i[e])&255]^t>>>8;return(t^4294967295)>>>0};function oy(i){let t=new TextEncoder,e=[],n=[],s=0;for(let[o,l]of i){let c=t.encode(o),f=typeof l=="string"?t.encode(l):l,p=ay(f),u=new DataView(new ArrayBuffer(30));u.setUint32(0,67324752,!0),u.setUint16(4,20,!0),u.setUint32(14,p,!0),u.setUint32(18,f.length,!0),u.setUint32(22,f.length,!0),u.setUint16(26,c.length,!0),e.push(new Uint8Array(u.buffer),c,f);let m=new DataView(new ArrayBuffer(46));m.setUint32(0,33639248,!0),m.setUint16(4,20,!0),m.setUint16(6,20,!0),m.setUint32(16,p,!0),m.setUint32(20,f.length,!0),m.setUint32(24,f.length,!0),m.setUint16(28,c.length,!0),m.setUint32(42,s,!0),n.push(new Uint8Array(m.buffer),c),s+=30+c.length+f.length}let r=n.reduce((o,l)=>o+l.length,0),a=new DataView(new ArrayBuffer(22));return a.setUint32(0,101010256,!0),a.setUint16(8,i.length,!0),a.setUint16(10,i.length,!0),a.setUint32(12,r,!0),a.setUint32(16,s,!0),new Blob([...e,...n,new Uint8Array(a.buffer)])}var ql=null;async function Yl(i,t,e){if(ql){try{await ql.save({filename:i,data:t instanceof Blob?t:new Blob([t],{type:e})})}catch(r){r&&r.code!=="declined"&&vr("Could not save: "+(r.message||r.code))}return}let n=document.createElement("a"),s=URL.createObjectURL(t instanceof Blob?t:new Blob([t],{type:e}));n.href=s,n.download=i,document.body.append(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(s),5e3)}function vr(i){Gt("status").textContent=i,setTimeout(()=>{Gt("status").textContent===i&&(Gt("status").textContent="")},4e3)}Gt("bStl").addEventListener("click",()=>{try{Yl(Ps()+".stl",tf(),"model/stl")}catch(i){vr("STL export failed: "+i.message)}});Gt("bScad").addEventListener("click",()=>Yl(Ps()+".scad",Uh(),"text/plain"));Gt("bJson").addEventListener("click",()=>Yl(Ps()+".json",JSON.stringify(Rt,null,1),"application/json"));Gt("bZip").addEventListener("click",()=>{let i=[[Ps()+".scad",Uh()],[Ps()+".json",JSON.stringify(Rt,null,1)]];try{i.unshift([Ps()+".stl",tf()])}catch{vr("3D engine not loaded, the zip has SCAD and design only")}Yl(Ps()+".zip",oy(i),"application/zip")});Gt("bCopy").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(Uh()),vr("SCAD copied to the clipboard")}catch{vr("The clipboard is not available here")}});Gt("bLoad").addEventListener("click",()=>Gt("fileIn").click());Gt("fileIn").addEventListener("change",async i=>{let t=i.target.files[0];if(i.target.value="",!!t)try{let e=await t.text(),n=e.match(/\/\* design[^\n]*\n([\s\S]*?)\n\*\//);n&&(e=n[1]),Rt=Dh(JSON.parse(e)),un=0,Ve=-1,Xl=!0,nn(),ki()}catch(e){vr("That file is not a plate design: "+e.message)}});iy();sy();nn();ki();Gt("status").textContent="Loading the 3D engine\u2026";Vd({locateFile:()=>new URL("manifold.wasm",document.baseURI).href}).then(i=>{i.setup(),va=i,Gt("status").textContent="",Kd()}).catch(i=>{Gt("status").textContent="3D engine could not load ("+i.message+"). The drawing and SCAD export still work."});window.claude&&typeof window.claude.use=="function"&&window.claude.use("downloads").then(i=>{ql=i,ql&&(Gt("bStl").hidden=!0,Gt("bScad").hidden=!0)}).catch(()=>{});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
