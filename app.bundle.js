var ns={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},is={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yu=0,Dc=1,vu=2;var ta=1,Mu=2,hr=3,ss=0,Tn=1,mi=2,ws=0,ur=1,Nc=2,Uc=3,Fc=4,Su=5;var Ts=100,bu=101,wu=102,Tu=103,Eu=104,Au=200,Ru=201,Cu=202,Pu=203,Oc=204,Bc=205,Iu=206,Lu=207,Du=208,Nu=209,Uu=210,Fu=211,Ou=212,Bu=213,ku=214,ro=0,ao=1,oo=2,tr=3,lo=4,co=5,ho=6,uo=7,kc=0,zu=1,Vu=2,gi=0,zc=1,Vc=2,Hc=3,Gc=4,Wc=5,Xc=6,$c=7;var qc=300,Es=301,dr=302,zo=303,Vo=304,fo=1e3,di=1001,po=1002,on=1003,Hu=1004;var ea=1005;var bn=1006,Ho=1007;var Ui=1008;var Dn=1009,Yc=1010,Zc=1011,fr=1012,Go=1013,si=1014,ri=1015,ai=1016,Wo=1017,Xo=1018,As=1020,Jc=35902,Kc=35899,jc=1021,Qc=1022,oi=1023,Ii=1026,Fi=1027,th=1028,$o=1029,rs=1030,qo=1031;var Yo=1033,na=33776,ia=33777,sa=33778,ra=33779,Zo=35840,Jo=35841,Ko=35842,jo=35843,Qo=36196,tl=37492,el=37496,nl=37488,il=37489,aa=37490,sl=37491,rl=37808,al=37809,ol=37810,ll=37811,cl=37812,hl=37813,ul=37814,dl=37815,fl=37816,pl=37817,ml=37818,gl=37819,_l=37820,xl=37821,yl=36492,vl=36494,Ml=36495,Sl=36283,bl=36284,oa=36285,wl=36286;var Dr=2300,mo=2301,io=2302,Ec=2303,Ac=2400,Rc=2401,Cc=2402;var Gu=3200;var Tl=0,Wu=1,Oi="",kn="srgb",Nr="srgb-linear",Ur="linear",Ae="srgb";var so=7680;var Xu=519,$u=512,qu=513,Yu=514,eh=515,Zu=516,Ju=517,nh=518,ih=519,Ku=35044;var sh="300 es",Zn=2e3,er=2001;function Qf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function tp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Fr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ju(){let i=Fr("canvas");return i.style.display="block",i}var Xh={},nr=null;function rh(...i){let t="THREE."+i.shift();nr?nr("log",t,...i):console.log(t,...i)}function Qu(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Jt(...i){i=Qu(i);let t="THREE."+i.shift();if(nr)nr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ne(...i){i=Qu(i);let t="THREE."+i.shift();if(nr)nr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ir(...i){let t=i.join(" ");t in Xh||(Xh[t]=!0,Jt(...i))}function td(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var ed={[ro]:ro,[oo]:ho,[lo]:lo,[tr]:co,[ao]:ao,[ho]:oo,[uo]:uo,[co]:tr},ni=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$h=1234567,js=Math.PI/180,ir=180/Math.PI;function pr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]+"-"+gn[t&255]+gn[t>>8&255]+"-"+gn[t>>16&15|64]+gn[t>>24&255]+"-"+gn[e&63|128]+gn[e>>8&255]+"-"+gn[e>>16&255]+gn[e>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function _e(i,t,e){return Math.max(t,Math.min(e,i))}function ah(i,t){return(i%t+t)%t}function ep(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function np(i,t,e){return i!==t?(e-i)/(t-i):0}function Lr(i,t,e){return(1-e)*i+e*t}function ip(i,t,e,n){return Lr(i,t,1-Math.exp(-e*n))}function sp(i,t=1){return t-Math.abs(ah(i,t*2)-t)}function rp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ap(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function op(i,t){return i+Math.floor(Math.random()*(t-i+1))}function lp(i,t){return i+Math.random()*(t-i)}function cp(i){return i*(.5-Math.random())}function hp(i){i!==void 0&&($h=i);let t=$h+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function up(i){return i*js}function dp(i){return i*ir}function fp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function pp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function oh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function mp(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),f=a((t+n)/2),g=r((t-n)/2),u=a((t-n)/2),p=r((n-t)/2),x=a((n-t)/2);switch(s){case"XYX":i.set(o*f,l*g,l*u,o*c);break;case"YZY":i.set(l*u,o*f,l*g,o*c);break;case"ZXZ":i.set(l*g,l*u,o*f,o*c);break;case"XZX":i.set(o*f,l*x,l*p,o*c);break;case"YXY":i.set(l*p,o*f,l*x,o*c);break;case"ZYZ":i.set(l*x,l*p,o*f,o*c);break;default:Jt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function lh(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function nd(i,t){if(t.constructor===Float32Array)return i;let e=lh(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function id(i,t){if(t.constructor===Float32Array)return i;let e=lh(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var ch={DEG2RAD:js,RAD2DEG:ir,generateUUID:pr,clamp:_e,euclideanModulo:ah,mapLinear:ep,inverseLerp:np,lerp:Lr,damp:ip,pingpong:sp,smoothstep:rp,smootherstep:ap,randInt:op,randFloat:lp,randFloatSpread:cp,seededRandom:hp,degToRad:up,radToDeg:dp,isPowerOfTwo:fp,ceilPowerOfTwo:pp,floorPowerOfTwo:oh,setQuaternionFromProperEuler:mp,normalize:id,denormalize:nd},ie=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_e(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Hn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],f=n[s+2],g=n[s+3],u=r[a+0],p=r[a+1],x=r[a+2],S=r[a+3];if(g!==S||l!==u||c!==p||f!==x){let m=l*u+c*p+f*x+g*S;m<0&&(u=-u,p=-p,x=-x,S=-S,m=-m);let _=1-o;if(m<.9995){let b=Math.acos(m),I=Math.sin(b);_=Math.sin(_*b)/I,o=Math.sin(o*b)/I,l=l*_+u*o,c=c*_+p*o,f=f*_+x*o,g=g*_+S*o}else{l=l*_+u*o,c=c*_+p*o,f=f*_+x*o,g=g*_+S*o;let b=1/Math.sqrt(l*l+c*c+f*f+g*g);l*=b,c*=b,f*=b,g*=b}}t[e]=l,t[e+1]=c,t[e+2]=f,t[e+3]=g}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],f=n[s+3],g=r[a],u=r[a+1],p=r[a+2],x=r[a+3];return t[e]=o*x+f*g+l*p-c*u,t[e+1]=l*x+f*u+c*g-o*p,t[e+2]=c*x+f*p+o*u-l*g,t[e+3]=f*x-o*g-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),f=o(s/2),g=o(r/2),u=l(n/2),p=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=u*f*g+c*p*x,this._y=c*p*g-u*f*x,this._z=c*f*x+u*p*g,this._w=c*f*g-u*p*x;break;case"YXZ":this._x=u*f*g+c*p*x,this._y=c*p*g-u*f*x,this._z=c*f*x-u*p*g,this._w=c*f*g+u*p*x;break;case"ZXY":this._x=u*f*g-c*p*x,this._y=c*p*g+u*f*x,this._z=c*f*x+u*p*g,this._w=c*f*g-u*p*x;break;case"ZYX":this._x=u*f*g-c*p*x,this._y=c*p*g+u*f*x,this._z=c*f*x-u*p*g,this._w=c*f*g+u*p*x;break;case"YZX":this._x=u*f*g+c*p*x,this._y=c*p*g+u*f*x,this._z=c*f*x-u*p*g,this._w=c*f*g-u*p*x;break;case"XZY":this._x=u*f*g-c*p*x,this._y=c*p*g-u*f*x,this._z=c*f*x+u*p*g,this._w=c*f*g+u*p*x;break;default:Jt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],f=e[6],g=e[10],u=n+o+g;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(f-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>g){let p=2*Math.sqrt(1+n-o-g);this._w=(f-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>g){let p=2*Math.sqrt(1+o-n-g);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+f)/p}else{let p=2*Math.sqrt(1+g-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,f=e._w;return this._x=n*f+a*o+s*c-r*l,this._y=s*f+a*l+r*o-n*c,this._z=r*f+a*c+n*l-s*o,this._w=a*f-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,e=Math.sin(e*c)/f,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Z=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),f=2*(o*e-r*s),g=2*(r*n-a*e);return this.x=e+l*c+a*g-o*f,this.y=n+l*f+o*c-r*g,this.z=s+l*g+r*f-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this.z=_e(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this.z=_e(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_e(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return sc.copy(this).projectOnVector(t),this.sub(sc)}reflect(t){return this.sub(sc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},sc=new Z,qh=new Hn,ae=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let f=this.elements;return f[0]=t,f[1]=s,f[2]=o,f[3]=e,f[4]=r,f[5]=l,f[6]=n,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],f=n[4],g=n[7],u=n[2],p=n[5],x=n[8],S=s[0],m=s[3],_=s[6],b=s[1],I=s[4],E=s[7],A=s[2],C=s[5],y=s[8];return r[0]=a*S+o*b+l*A,r[3]=a*m+o*I+l*C,r[6]=a*_+o*E+l*y,r[1]=c*S+f*b+g*A,r[4]=c*m+f*I+g*C,r[7]=c*_+f*E+g*y,r[2]=u*S+p*b+x*A,r[5]=u*m+p*I+x*C,r[8]=u*_+p*E+x*y,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],f=t[8];return e*a*f-e*o*c-n*r*f+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],f=t[8],g=f*a-o*c,u=o*l-f*r,p=c*r-a*l,x=e*g+n*u+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/x;return t[0]=g*S,t[1]=(s*c-f*n)*S,t[2]=(o*n-s*a)*S,t[3]=u*S,t[4]=(f*e-s*l)*S,t[5]=(s*r-o*e)*S,t[6]=p*S,t[7]=(n*l-c*e)*S,t[8]=(a*e-n*r)*S,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Ir("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(rc.makeScale(t,e)),this}rotate(t){return Ir("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(rc.makeRotation(-t)),this}translate(t,e){return Ir("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(rc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},rc=new ae,Yh=new ae().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zh=new ae().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gp(){let i={enabled:!0,workingColorSpace:Nr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ae&&(s.r=Pi(s.r),s.g=Pi(s.g),s.b=Pi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ae&&(s.r=Qs(s.r),s.g=Qs(s.g),s.b=Qs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Oi?Ur:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Nr]:{primaries:t,whitePoint:n,transfer:Ur,toXYZ:Yh,fromXYZ:Zh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:kn},outputColorSpaceConfig:{drawingBufferColorSpace:kn}},[kn]:{primaries:t,whitePoint:n,transfer:Ae,toXYZ:Yh,fromXYZ:Zh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:kn}}}),i}var Me=gp();function Pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ks,go=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ks===void 0&&(ks=Fr("canvas")),ks.width=t.width,ks.height=t.height;let s=ks.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ks}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Fr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Pi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Pi(e[n]/255)*255):e[n]=Pi(e[n]);return{data:e,width:t.width,height:t.height}}else return Jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},_p=0,sr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=pr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ac(s[a].image)):r.push(ac(s[a]))}else r=ac(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ac(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?go.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Jt("Texture: Unable to serialize Texture."),{})}var xp=0,oc=new Z,In=class i extends ni{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=di,s=di,r=bn,a=Ui,o=oi,l=Dn,c=i.DEFAULT_ANISOTROPY,f=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=pr(),this.name="",this.source=new sr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ae,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(oc).x}get height(){return this.source.getSize(oc).y}get depth(){return this.source.getSize(oc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Jt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fo:t.x=t.x-Math.floor(t.x);break;case di:t.x=t.x<0?0:1;break;case po:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fo:t.y=t.y-Math.floor(t.y);break;case di:t.y=t.y<0?0:1;break;case po:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=qc;In.DEFAULT_ANISOTROPY=1;var ze=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],f=l[4],g=l[8],u=l[1],p=l[5],x=l[9],S=l[2],m=l[6],_=l[10];if(Math.abs(f-u)<.01&&Math.abs(g-S)<.01&&Math.abs(x-m)<.01){if(Math.abs(f+u)<.1&&Math.abs(g+S)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let I=(c+1)/2,E=(p+1)/2,A=(_+1)/2,C=(f+u)/4,y=(g+S)/4,T=(x+m)/4;return I>E&&I>A?I<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(I),s=C/n,r=y/n):E>A?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=C/s,r=T/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=y/r,s=T/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-x)*(m-x)+(g-S)*(g-S)+(u-f)*(u-f));return Math.abs(b)<.001&&(b=1),this.x=(m-x)/b,this.y=(g-S)/b,this.z=(u-f)/b,this.w=Math.acos((c+p+_-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this.z=_e(this.z,t.z,e.z),this.w=_e(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this.z=_e(this.z,t,e),this.w=_e(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_e(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_o=class extends ni{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ze(0,0,t,e),this.scissorTest=!1,this.viewport=new ze(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new In({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:bn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new sr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gn=class extends _o{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Or=class extends In{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var xo=class extends In{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ke=class i{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,f,g,u,p,x,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,f,g,u,p,x,S,m)}set(t,e,n,s,r,a,o,l,c,f,g,u,p,x,S,m){let _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=s,_[1]=r,_[5]=a,_[9]=o,_[13]=l,_[2]=c,_[6]=f,_[10]=g,_[14]=u,_[3]=p,_[7]=x,_[11]=S,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/zs.setFromMatrixColumn(t,0).length(),r=1/zs.setFromMatrixColumn(t,1).length(),a=1/zs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),f=Math.cos(r),g=Math.sin(r);if(t.order==="XYZ"){let u=a*f,p=a*g,x=o*f,S=o*g;e[0]=l*f,e[4]=-l*g,e[8]=c,e[1]=p+x*c,e[5]=u-S*c,e[9]=-o*l,e[2]=S-u*c,e[6]=x+p*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*f,p=l*g,x=c*f,S=c*g;e[0]=u+S*o,e[4]=x*o-p,e[8]=a*c,e[1]=a*g,e[5]=a*f,e[9]=-o,e[2]=p*o-x,e[6]=S+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*f,p=l*g,x=c*f,S=c*g;e[0]=u-S*o,e[4]=-a*g,e[8]=x+p*o,e[1]=p+x*o,e[5]=a*f,e[9]=S-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*f,p=a*g,x=o*f,S=o*g;e[0]=l*f,e[4]=x*c-p,e[8]=u*c+S,e[1]=l*g,e[5]=S*c+u,e[9]=p*c-x,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,p=a*c,x=o*l,S=o*c;e[0]=l*f,e[4]=S-u*g,e[8]=x*g+p,e[1]=g,e[5]=a*f,e[9]=-o*f,e[2]=-c*f,e[6]=p*g+x,e[10]=u-S*g}else if(t.order==="XZY"){let u=a*l,p=a*c,x=o*l,S=o*c;e[0]=l*f,e[4]=-g,e[8]=c*f,e[1]=u*g+S,e[5]=a*f,e[9]=p*g-x,e[2]=x*g-p,e[6]=o*f,e[10]=S*g+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yp,t,vp)}lookAt(t,e,n){let s=this.elements;return On.subVectors(t,e),On.lengthSq()===0&&(On.z=1),On.normalize(),Xi.crossVectors(n,On),Xi.lengthSq()===0&&(Math.abs(n.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),Xi.crossVectors(n,On)),Xi.normalize(),La.crossVectors(On,Xi),s[0]=Xi.x,s[4]=La.x,s[8]=On.x,s[1]=Xi.y,s[5]=La.y,s[9]=On.y,s[2]=Xi.z,s[6]=La.z,s[10]=On.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],f=n[1],g=n[5],u=n[9],p=n[13],x=n[2],S=n[6],m=n[10],_=n[14],b=n[3],I=n[7],E=n[11],A=n[15],C=s[0],y=s[4],T=s[8],V=s[12],F=s[1],B=s[5],G=s[9],k=s[13],L=s[2],W=s[6],Q=s[10],j=s[14],pt=s[3],et=s[7],ht=s[11],mt=s[15];return r[0]=a*C+o*F+l*L+c*pt,r[4]=a*y+o*B+l*W+c*et,r[8]=a*T+o*G+l*Q+c*ht,r[12]=a*V+o*k+l*j+c*mt,r[1]=f*C+g*F+u*L+p*pt,r[5]=f*y+g*B+u*W+p*et,r[9]=f*T+g*G+u*Q+p*ht,r[13]=f*V+g*k+u*j+p*mt,r[2]=x*C+S*F+m*L+_*pt,r[6]=x*y+S*B+m*W+_*et,r[10]=x*T+S*G+m*Q+_*ht,r[14]=x*V+S*k+m*j+_*mt,r[3]=b*C+I*F+E*L+A*pt,r[7]=b*y+I*B+E*W+A*et,r[11]=b*T+I*G+E*Q+A*ht,r[15]=b*V+I*k+E*j+A*mt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],f=t[2],g=t[6],u=t[10],p=t[14],x=t[3],S=t[7],m=t[11],_=t[15],b=l*p-c*u,I=o*p-c*g,E=o*u-l*g,A=a*p-c*f,C=a*u-l*f,y=a*g-o*f;return e*(S*b-m*I+_*E)-n*(x*b-m*A+_*C)+s*(x*I-S*A+_*y)-r*(x*E-S*C+m*y)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],f=t[10];return e*(a*f-o*c)-n*(r*f-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],f=t[8],g=t[9],u=t[10],p=t[11],x=t[12],S=t[13],m=t[14],_=t[15],b=e*o-n*a,I=e*l-s*a,E=e*c-r*a,A=n*l-s*o,C=n*c-r*o,y=s*c-r*l,T=f*S-g*x,V=f*m-u*x,F=f*_-p*x,B=g*m-u*S,G=g*_-p*S,k=u*_-p*m,L=b*k-I*G+E*B+A*F-C*V+y*T;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/L;return t[0]=(o*k-l*G+c*B)*W,t[1]=(s*G-n*k-r*B)*W,t[2]=(S*y-m*C+_*A)*W,t[3]=(u*C-g*y-p*A)*W,t[4]=(l*F-a*k-c*V)*W,t[5]=(e*k-s*F+r*V)*W,t[6]=(m*E-x*y-_*I)*W,t[7]=(f*y-u*E+p*I)*W,t[8]=(a*G-o*F+c*T)*W,t[9]=(n*F-e*G-r*T)*W,t[10]=(x*C-S*E+_*b)*W,t[11]=(g*E-f*C-p*b)*W,t[12]=(o*V-a*B-l*T)*W,t[13]=(e*B-n*V+s*T)*W,t[14]=(S*I-x*A-m*b)*W,t[15]=(f*A-g*I+u*b)*W,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,f=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,f*o+n,f*l-s*a,0,c*l-s*o,f*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,f=a+a,g=o+o,u=r*c,p=r*f,x=r*g,S=a*f,m=a*g,_=o*g,b=l*c,I=l*f,E=l*g,A=n.x,C=n.y,y=n.z;return s[0]=(1-(S+_))*A,s[1]=(p+E)*A,s[2]=(x-I)*A,s[3]=0,s[4]=(p-E)*C,s[5]=(1-(u+_))*C,s[6]=(m+b)*C,s[7]=0,s[8]=(x+I)*y,s[9]=(m-b)*y,s[10]=(1-(u+S))*y,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=zs.set(s[0],s[1],s[2]).length(),o=zs.set(s[4],s[5],s[6]).length(),l=zs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Qn.copy(this);let c=1/a,f=1/o,g=1/l;return Qn.elements[0]*=c,Qn.elements[1]*=c,Qn.elements[2]*=c,Qn.elements[4]*=f,Qn.elements[5]*=f,Qn.elements[6]*=f,Qn.elements[8]*=g,Qn.elements[9]*=g,Qn.elements[10]*=g,e.setFromRotationMatrix(Qn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Zn,l=!1){let c=this.elements,f=2*r/(e-t),g=2*r/(n-s),u=(e+t)/(e-t),p=(n+s)/(n-s),x,S;if(l)x=r/(a-r),S=a*r/(a-r);else if(o===Zn)x=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===er)x=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=g,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Zn,l=!1){let c=this.elements,f=2/(e-t),g=2/(n-s),u=-(e+t)/(e-t),p=-(n+s)/(n-s),x,S;if(l)x=1/(a-r),S=a/(a-r);else if(o===Zn)x=-2/(a-r),S=-(a+r)/(a-r);else if(o===er)x=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=g,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},zs=new Z,Qn=new ke,yp=new Z(0,0,0),vp=new Z(1,1,1),Xi=new Z,La=new Z,On=new Z,Jh=new ke,Kh=new Hn,Li=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],f=s[9],g=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(_e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-g,r),this._z=0);break;case"ZXY":this._x=Math.asin(_e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-g,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_e(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(_e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-g,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-_e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-f,p),this._y=0);break;default:Jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Jh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Jh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Kh.setFromEuler(this),this.setFromQuaternion(Kh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Li.DEFAULT_ORDER="XYZ";var Br=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Mp=0,jh=new Z,Vs=new Hn,wi=new ke,Da=new Z,Er=new Z,Sp=new Z,bp=new Hn,Qh=new Z(1,0,0),tu=new Z(0,1,0),eu=new Z(0,0,1),nu={type:"added"},wp={type:"removed"},Hs={type:"childadded",child:null},lc={type:"childremoved",child:null},un=class i extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=pr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new Z,e=new Li,n=new Hn,s=new Z(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ke},normalMatrix:{value:new ae}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Br,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vs.setFromAxisAngle(t,e),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(t,e){return Vs.setFromAxisAngle(t,e),this.quaternion.premultiply(Vs),this}rotateX(t){return this.rotateOnAxis(Qh,t)}rotateY(t){return this.rotateOnAxis(tu,t)}rotateZ(t){return this.rotateOnAxis(eu,t)}translateOnAxis(t,e){return jh.copy(t).applyQuaternion(this.quaternion),this.position.add(jh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Qh,t)}translateY(t){return this.translateOnAxis(tu,t)}translateZ(t){return this.translateOnAxis(eu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Da.copy(t):Da.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(Er,Da,this.up):wi.lookAt(Da,Er,this.up),this.quaternion.setFromRotationMatrix(wi),s&&(wi.extractRotation(s.matrixWorld),Vs.setFromRotationMatrix(wi),this.quaternion.premultiply(Vs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ne("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nu),Hs.child=t,this.dispatchEvent(Hs),Hs.child=null):ne("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(wp),lc.child=t,this.dispatchEvent(lc),lc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wi.multiply(t.parent.matrixWorld)),t.applyMatrix4(wi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nu),Hs.child=t,this.dispatchEvent(Hs),Hs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,t,Sp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,bp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let g=l[c];r(t.shapes,g)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),f=a(t.images),g=a(t.shapes),u=a(t.skeletons),p=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),g.length>0&&(n.shapes=g),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let c in o){let f=o[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};un.DEFAULT_UP=new Z(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var fi=class extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}},Tp={type:"move"},rr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let S of t.hand.values()){let m=e.getJointPose(S,n),_=this._getHandJoint(c,S);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=m.radius),_.visible=m!==null}let f=c.joints["index-finger-tip"],g=c.joints["thumb-tip"],u=f.position.distanceTo(g.position),p=.02,x=.005;c.inputState.pinching&&u>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new fi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},sd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},Na={h:0,s:0,l:0};function cc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var de=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=kn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Me.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Me.workingColorSpace){return this.r=t,this.g=e,this.b=n,Me.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Me.workingColorSpace){if(t=ah(t,1),e=_e(e,0,1),n=_e(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=cc(a,r,t+1/3),this.g=cc(a,r,t),this.b=cc(a,r,t-1/3)}return Me.colorSpaceToWorking(this,s),this}setStyle(t,e=kn){function n(r){r!==void 0&&parseFloat(r)<1&&Jt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Jt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=kn){let n=sd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pi(t.r),this.g=Pi(t.g),this.b=Pi(t.b),this}copyLinearToSRGB(t){return this.r=Qs(t.r),this.g=Qs(t.g),this.b=Qs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=kn){return Me.workingToColorSpace(_n.copy(this),t),Math.round(_e(_n.r*255,0,255))*65536+Math.round(_e(_n.g*255,0,255))*256+Math.round(_e(_n.b*255,0,255))}getHexString(t=kn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Me.workingColorSpace){Me.workingToColorSpace(_n.copy(this),e);let n=_n.r,s=_n.g,r=_n.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,f=(o+a)/2;if(o===a)l=0,c=0;else{let g=a-o;switch(c=f<=.5?g/(a+o):g/(2-a-o),a){case n:l=(s-r)/g+(s<r?6:0);break;case s:l=(r-n)/g+2;break;case r:l=(n-s)/g+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,e=Me.workingColorSpace){return Me.workingToColorSpace(_n.copy(this),e),t.r=_n.r,t.g=_n.g,t.b=_n.b,t}getStyle(t=kn){Me.workingToColorSpace(_n.copy(this),t);let e=_n.r,n=_n.g,s=_n.b;return t!==kn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL($i),this.setHSL($i.h+t,$i.s+e,$i.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL($i),t.getHSL(Na);let n=Lr($i.h,Na.h,e),s=Lr($i.s,Na.s,e),r=Lr($i.l,Na.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_n=new de;de.NAMES=sd;var kr=class extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Li,this.environmentIntensity=1,this.environmentRotation=new Li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ti=new Z,Ti=new Z,hc=new Z,Ei=new Z,Gs=new Z,Ws=new Z,iu=new Z,uc=new Z,dc=new Z,fc=new Z,pc=new ze,mc=new ze,gc=new ze,Ci=class i{constructor(t=new Z,e=new Z,n=new Z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ti.subVectors(t,e),s.cross(ti);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ti.subVectors(s,e),Ti.subVectors(n,e),hc.subVectors(t,e);let a=ti.dot(ti),o=ti.dot(Ti),l=ti.dot(hc),c=Ti.dot(Ti),f=Ti.dot(hc),g=a*c-o*o;if(g===0)return r.set(0,0,0),null;let u=1/g,p=(c*l-o*f)*u,x=(a*f-o*l)*u;return r.set(1-p-x,x,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ei.x),l.addScaledVector(a,Ei.y),l.addScaledVector(o,Ei.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return pc.setScalar(0),mc.setScalar(0),gc.setScalar(0),pc.fromBufferAttribute(t,e),mc.fromBufferAttribute(t,n),gc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(pc,r.x),a.addScaledVector(mc,r.y),a.addScaledVector(gc,r.z),a}static isFrontFacing(t,e,n,s){return ti.subVectors(n,e),Ti.subVectors(t,e),ti.cross(Ti).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ti.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),ti.cross(Ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Gs.subVectors(s,n),Ws.subVectors(r,n),uc.subVectors(t,n);let l=Gs.dot(uc),c=Ws.dot(uc);if(l<=0&&c<=0)return e.copy(n);dc.subVectors(t,s);let f=Gs.dot(dc),g=Ws.dot(dc);if(f>=0&&g<=f)return e.copy(s);let u=l*g-f*c;if(u<=0&&l>=0&&f<=0&&l-f>0)return a=l/(l-f),e.copy(n).addScaledVector(Gs,a);fc.subVectors(t,r);let p=Gs.dot(fc),x=Ws.dot(fc);if(x>=0&&p<=x)return e.copy(r);let S=p*c-l*x;if(S<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(n).addScaledVector(Ws,o);let m=f*x-p*g;if(m<=0&&g-f>=0&&p-x>=0)return iu.subVectors(r,s),o=(g-f)/(g-f+(p-x)),e.copy(s).addScaledVector(iu,o);let _=1/(m+S+u);return a=S*_,o=u*_,e.copy(n).addScaledVector(Gs,a).addScaledVector(Ws,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ji=class{constructor(t=new Z(1/0,1/0,1/0),e=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ei.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ei.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ei.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ei):ei.fromBufferAttribute(r,a),ei.applyMatrix4(t.matrixWorld),this.expandByPoint(ei);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ua.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ua.copy(n.boundingBox)),Ua.applyMatrix4(t.matrixWorld),this.union(Ua)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ei),ei.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ar),Fa.subVectors(this.max,Ar),Xs.subVectors(t.a,Ar),$s.subVectors(t.b,Ar),qs.subVectors(t.c,Ar),qi.subVectors($s,Xs),Yi.subVectors(qs,$s),_s.subVectors(Xs,qs);let e=[0,-qi.z,qi.y,0,-Yi.z,Yi.y,0,-_s.z,_s.y,qi.z,0,-qi.x,Yi.z,0,-Yi.x,_s.z,0,-_s.x,-qi.y,qi.x,0,-Yi.y,Yi.x,0,-_s.y,_s.x,0];return!_c(e,Xs,$s,qs,Fa)||(e=[1,0,0,0,1,0,0,0,1],!_c(e,Xs,$s,qs,Fa))?!1:(Oa.crossVectors(qi,Yi),e=[Oa.x,Oa.y,Oa.z],_c(e,Xs,$s,qs,Fa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ei).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ei).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ai),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ai=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],ei=new Z,Ua=new Ji,Xs=new Z,$s=new Z,qs=new Z,qi=new Z,Yi=new Z,_s=new Z,Ar=new Z,Fa=new Z,Oa=new Z,xs=new Z;function _c(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){xs.fromArray(i,r);let o=s.x*Math.abs(xs.x)+s.y*Math.abs(xs.y)+s.z*Math.abs(xs.z),l=t.dot(xs),c=e.dot(xs),f=n.dot(xs);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}var qe=new Z,Ba=new ie,Ep=0,Vn=class extends ni{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ep++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ku,this.updateRanges=[],this.gpuType=ri,this.version=0,this._normalizationScale=t!==void 0?lh(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ba.fromBufferAttribute(this,e),Ba.applyMatrix3(t),this.setXY(e,Ba.x,Ba.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix3(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):nd(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):id(t,this.array)}};var zr=class extends Vn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Vr=class extends Vn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var hn=class extends Vn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Ap=new Ji,Rr=new Z,xc=new Z,Ms=class{constructor(t=new Z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ap.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Rr.subVectors(t,this.center);let e=Rr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Rr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Rr.copy(t.center).add(xc)),this.expandByPoint(Rr.copy(t.center).sub(xc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Rp=0,Yn=new ke,yc=new un,Ys=new Z,Bn=new Ji,Cr=new Ji,an=new Z,Ln=class i extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=pr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qf(t)?Vr:zr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ae().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Yn.makeRotationFromQuaternion(t),this.applyMatrix4(Yn),this}rotateX(t){return Yn.makeRotationX(t),this.applyMatrix4(Yn),this}rotateY(t){return Yn.makeRotationY(t),this.applyMatrix4(Yn),this}rotateZ(t){return Yn.makeRotationZ(t),this.applyMatrix4(Yn),this}translate(t,e,n){return Yn.makeTranslation(t,e,n),this.applyMatrix4(Yn),this}scale(t,e,n){return Yn.makeScale(t,e,n),this.applyMatrix4(Yn),this}lookAt(t){return yc.lookAt(t),yc.updateMatrix(),this.applyMatrix4(yc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new hn(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ji);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Bn.setFromBufferAttribute(r),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ms);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){let n=this.boundingSphere.center;if(Bn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Cr.setFromBufferAttribute(o),this.morphTargetsRelative?(an.addVectors(Bn.min,Cr.min),Bn.expandByPoint(an),an.addVectors(Bn.max,Cr.max),Bn.expandByPoint(an)):(Bn.expandByPoint(Cr.min),Bn.expandByPoint(Cr.max))}Bn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)an.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(an));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)an.fromBufferAttribute(o,c),l&&(Ys.fromBufferAttribute(t,c),an.add(Ys)),s=Math.max(s,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Vn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let V=0;V<n.count;V++)o[V]=new Z,l[V]=new Z;let f=new Z,g=new Z,u=new Z,p=new ie,x=new ie,S=new ie,m=new Z,_=new Z;function b(V,F,B){c[V]=c[F]=c[B]=1,f.fromBufferAttribute(n,V),g.fromBufferAttribute(n,F),u.fromBufferAttribute(n,B),p.fromBufferAttribute(r,V),x.fromBufferAttribute(r,F),S.fromBufferAttribute(r,B),g.sub(f),u.sub(f),x.sub(p),S.sub(p);let G=1/(x.x*S.y-S.x*x.y);isFinite(G)&&(m.copy(g).multiplyScalar(S.y).addScaledVector(u,-x.y).multiplyScalar(G),_.copy(u).multiplyScalar(x.x).addScaledVector(g,-S.x).multiplyScalar(G),o[V].add(m),o[F].add(m),o[B].add(m),l[V].add(_),l[F].add(_),l[B].add(_))}let I=this.groups;I.length===0&&(I=[{start:0,count:t.count}]);for(let V=0,F=I.length;V<F;++V){let B=I[V],G=B.start,k=B.count;for(let L=G,W=G+k;L<W;L+=3)b(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let E=new Z,A=new Z,C=new Z,y=new Z;function T(V){C.fromBufferAttribute(s,V),y.copy(C);let F=o[V];E.copy(F),E.sub(C.multiplyScalar(C.dot(F))).normalize(),A.crossVectors(y,F);let G=A.dot(l[V])<0?-1:1;a.setXYZW(V,E.x,E.y,E.z,G)}for(let V=0,F=n.count;V<F;++V)c[V]&&T(V);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Vn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let s=new Z,r=new Z,a=new Z,o=new Z,l=new Z,c=new Z,f=new Z,g=new Z;if(t)for(let u=0,p=t.count;u<p;u+=3){let x=t.getX(u+0),S=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,S),a.fromBufferAttribute(e,m),f.subVectors(a,r),g.subVectors(s,r),f.cross(g),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,m),o.add(f),l.add(f),c.add(f),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),f.subVectors(a,r),g.subVectors(s,r),f.cross(g),n.setXYZ(u+0,f.x,f.y,f.z),n.setXYZ(u+1,f.x,f.y,f.z),n.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)an.fromBufferAttribute(t,e),an.normalize(),t.setXYZ(e,an.x,an.y,an.z)}toNonIndexed(){function t(o,l){let c=o.array,f=o.itemSize,g=o.normalized,u=new c.constructor(l.length*f),p=0,x=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?p=l[S]*o.data.stride+o.offset:p=l[S]*f;for(let _=0;_<f;_++)u[x++]=c[p++]}return new Vn(u,f,g)}if(this.index===null)return Jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let f=0,g=c.length;f<g;f++){let u=c[f],p=t(u,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let g=0,u=c.length;g<u;g++){let p=c[g];f.push(p.toJSON(t.data))}f.length>0&&(s[l]=f,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let f=s[c];this.setAttribute(c,f.clone(e))}let r=t.morphAttributes;for(let c in r){let f=[],g=r[c];for(let u=0,p=g.length;u<p;u++)f.push(g[u].clone(e));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,f=a.length;c<f;c++){let g=a[c];this.addGroup(g.start,g.count,g.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var vc=new Z,Cp=new Z,Pp=new ae,zn=class{constructor(t=new Z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=vc.subVectors(n,e).cross(Cp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(vc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Pp.getNormalMatrix(t),s=this.coplanarPoint(vc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Ip=0,Di=class extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=pr(),this.name="",this.type="Material",this.blending=ur,this.side=ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oc,this.blendDst=Bc,this.blendEquation=Ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=so,this.stencilZFail=so,this.stencilZPass=so,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Jt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new de().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new zn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ie().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ie().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Ri=new Z,Mc=new Z,ka=new Z,za=new Z,Ss=class{constructor(t=new Z,e=new Z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ri)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ri.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ri.copy(this.origin).addScaledVector(this.direction,e),Ri.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Mc.copy(t).add(e).multiplyScalar(.5),ka.copy(e).sub(t).normalize(),za.copy(this.origin).sub(Mc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ka),o=za.dot(this.direction),l=-za.dot(ka),c=za.lengthSq(),f=Math.abs(1-a*a),g,u,p,x;if(f>0)if(g=a*l-o,u=a*o-l,x=r*f,g>=0)if(u>=-x)if(u<=x){let S=1/f;g*=S,u*=S,p=g*(g+a*u+2*o)+u*(a*g+u+2*l)+c}else u=r,g=Math.max(0,-(a*u+o)),p=-g*g+u*(u+2*l)+c;else u=-r,g=Math.max(0,-(a*u+o)),p=-g*g+u*(u+2*l)+c;else u<=-x?(g=Math.max(0,-(-a*r+o)),u=g>0?-r:Math.min(Math.max(-r,-l),r),p=-g*g+u*(u+2*l)+c):u<=x?(g=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(g=Math.max(0,-(a*r+o)),u=g>0?r:Math.min(Math.max(-r,-l),r),p=-g*g+u*(u+2*l)+c);else u=a>0?-r:r,g=Math.max(0,-(a*u+o)),p=-g*g+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(Mc).addScaledVector(ka,u),p}intersectSphere(t,e){if(t.radius<0)return null;Ri.subVectors(t.center,this.origin);let n=Ri.dot(this.direction),s=Ri.dot(Ri)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,f=1/this.direction.y,g=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),f>=0?(r=(t.min.y-u.y)*f,a=(t.max.y-u.y)*f):(r=(t.max.y-u.y)*f,a=(t.min.y-u.y)*f),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),g>=0?(o=(t.min.z-u.z)*g,l=(t.max.z-u.z)*g):(o=(t.max.z-u.z)*g,l=(t.min.z-u.z)*g),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ri)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,f=o.z,g=t.x-a.x,u=t.y-a.y,p=t.z-a.z,x=e.x-a.x,S=e.y-a.y,m=e.z-a.z,_=n.x-a.x,b=n.y-a.y,I=n.z-a.z,E=Math.abs(l),A=Math.abs(c),C=Math.abs(f),y,T,V,F,B,G,k,L,W,Q,j,pt;if(E>=A&&E>=C?(V=l,G=g,W=x,pt=_,l>=0?(y=c,T=f,F=u,B=p,k=S,L=m,Q=b,j=I):(y=f,T=c,F=p,B=u,k=m,L=S,Q=I,j=b)):A>=C?(V=c,G=u,W=S,pt=b,c>=0?(y=f,T=l,F=p,B=g,k=m,L=x,Q=I,j=_):(y=l,T=f,F=g,B=p,k=x,L=m,Q=_,j=I)):(V=f,G=p,W=m,pt=I,f>=0?(y=l,T=c,F=g,B=u,k=x,L=S,Q=_,j=b):(y=c,T=l,F=u,B=g,k=S,L=x,Q=b,j=_)),V===0)return null;let et=y/V,ht=T/V,mt=1/V,Ht=F-et*G,te=B-ht*G,ot=k-et*W,Pt=L-ht*W,Ot=Q-et*pt,Yt=j-ht*pt,It=Ot*Pt-Yt*ot,oe=Ht*Yt-te*Ot,Ge=ot*te-Pt*Ht;if(s){if(It<0||oe<0||Ge<0)return null}else if((It<0||oe<0||Ge<0)&&(It>0||oe>0||Ge>0))return null;let Kt=It+oe+Ge;if(Kt===0)return null;let Te=mt*(It*G+oe*W+Ge*pt);return(Kt>0?Te<0:Te>0)?null:this.at(Te/Kt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},yo=class extends Di{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},su=new ke,ys=new Ss,Va=new Ms,ru=new Z,Ha=new Z,Ga=new Z,Wa=new Z,Sc=new Z,Xa=new Z,au=new Z,$a=new Z,wn=class extends un{constructor(t=new Ln,e=new yo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Xa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let f=o[l],g=r[l];f!==0&&(Sc.fromBufferAttribute(g,t),a?Xa.addScaledVector(Sc,f):Xa.addScaledVector(Sc.sub(e),f))}e.add(Xa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Va.copy(n.boundingSphere),Va.applyMatrix4(r),ys.copy(t.ray).recast(t.near),!(Va.containsPoint(ys.origin)===!1&&(ys.intersectSphere(Va,ru)===null||ys.origin.distanceToSquared(ru)>(t.far-t.near)**2))&&(su.copy(r).invert(),ys.copy(t.ray).applyMatrix4(su),!(n.boundingBox!==null&&ys.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ys)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,f=r.attributes.uv1,g=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,S=u.length;x<S;x++){let m=u[x],_=a[m.materialIndex],b=Math.max(m.start,p.start),I=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let E=b,A=I;E<A;E+=3){let C=o.getX(E),y=o.getX(E+1),T=o.getX(E+2);s=qa(this,_,t,n,c,f,g,C,y,T),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let x=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let m=x,_=S;m<_;m+=3){let b=o.getX(m),I=o.getX(m+1),E=o.getX(m+2);s=qa(this,a,t,n,c,f,g,b,I,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,S=u.length;x<S;x++){let m=u[x],_=a[m.materialIndex],b=Math.max(m.start,p.start),I=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=b,A=I;E<A;E+=3){let C=E,y=E+1,T=E+2;s=qa(this,_,t,n,c,f,g,C,y,T),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let x=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=x,_=S;m<_;m+=3){let b=m,I=m+1,E=m+2;s=qa(this,a,t,n,c,f,g,b,I,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Lp(i,t,e,n,s,r,a,o){let l;if(t.side===Tn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ss,o),l===null)return null;$a.copy(o),$a.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo($a);return c<e.near||c>e.far?null:{distance:c,point:$a.clone(),object:i}}function qa(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Ha),i.getVertexPosition(l,Ga),i.getVertexPosition(c,Wa);let f=Lp(i,t,e,n,Ha,Ga,Wa,au);if(f){let g=new Z;Ci.getBarycoord(au,Ha,Ga,Wa,g),s&&(f.uv=Ci.getInterpolatedAttribute(s,o,l,c,g,new ie)),r&&(f.uv1=Ci.getInterpolatedAttribute(r,o,l,c,g,new ie)),a&&(f.normal=Ci.getInterpolatedAttribute(a,o,l,c,g,new Z),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new Z,materialIndex:0};Ci.getNormal(Ha,Ga,Wa,u.normal),f.face=u,f.barycoord=g}return f}var vo=class extends In{constructor(t=null,e=1,n=1,s,r,a,o,l,c=on,f=on,g,u){super(null,a,o,l,c,f,s,r,g,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vs=new Ms,Dp=new ie(.5,.5),Ya=new Z,Ki=class{constructor(t=new zn,e=new zn,n=new zn,s=new zn,r=new zn,a=new zn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Zn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],f=r[4],g=r[5],u=r[6],p=r[7],x=r[8],S=r[9],m=r[10],_=r[11],b=r[12],I=r[13],E=r[14],A=r[15];if(s[0].setComponents(c-a,p-f,_-x,A-b).normalize(),s[1].setComponents(c+a,p+f,_+x,A+b).normalize(),s[2].setComponents(c+o,p+g,_+S,A+I).normalize(),s[3].setComponents(c-o,p-g,_-S,A-I).normalize(),n)s[4].setComponents(l,u,m,E).normalize(),s[5].setComponents(c-l,p-u,_-m,A-E).normalize();else if(s[4].setComponents(c-l,p-u,_-m,A-E).normalize(),e===Zn)s[5].setComponents(c+l,p+u,_+m,A+E).normalize();else if(e===er)s[5].setComponents(l,u,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(t){vs.center.set(0,0,0);let e=Dp.distanceTo(t.center);return vs.radius=.7071067811865476+e,vs.applyMatrix4(t.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ya.x=s.normal.x>0?t.max.x:t.min.x,Ya.y=s.normal.y>0?t.max.y:t.min.y,Ya.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ya)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ou=new ke,Mo=class i{constructor(){this.coordinateSystem=Zn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];ou.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Ki),n[s].setFromProjectionMatrix(ou,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Ki),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var bs=class extends Di{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new de(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},So=new Z,bo=new Z,lu=new ke,Pr=new Ss,Za=new Ms,bc=new Z,cu=new Z,wo=class extends un{constructor(t=new Ln,e=new bs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)So.fromBufferAttribute(e,s-1),bo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=So.distanceTo(bo);t.setAttribute("lineDistance",new hn(n,1))}else Jt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Za.copy(n.boundingSphere),Za.applyMatrix4(s),Za.radius+=r,t.ray.intersectsSphere(Za)===!1)return;lu.copy(s).invert(),Pr.copy(t.ray).applyMatrix4(lu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,f=n.index,u=n.attributes.position;if(f!==null){let p=Math.max(0,a.start),x=Math.min(f.count,a.start+a.count);for(let S=p,m=x-1;S<m;S+=c){let _=f.getX(S),b=f.getX(S+1),I=Ja(this,t,Pr,l,_,b,S);I&&e.push(I)}if(this.isLineLoop){let S=f.getX(x-1),m=f.getX(p),_=Ja(this,t,Pr,l,S,m,x-1);_&&e.push(_)}}else{let p=Math.max(0,a.start),x=Math.min(u.count,a.start+a.count);for(let S=p,m=x-1;S<m;S+=c){let _=Ja(this,t,Pr,l,S,S+1,S);_&&e.push(_)}if(this.isLineLoop){let S=Ja(this,t,Pr,l,x-1,p,x-1);S&&e.push(S)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ja(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(So.fromBufferAttribute(o,s),bo.fromBufferAttribute(o,r),e.distanceSqToSegment(So,bo,bc,cu)>n)return;bc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(bc);if(!(c<t.near||c>t.far))return{distance:c,point:cu.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var hu=new Z,uu=new Z,ar=class extends wo{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)hu.fromBufferAttribute(e,s),uu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+hu.distanceTo(uu);t.setAttribute("lineDistance",new hn(n,1))}else Jt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Hr=class extends In{constructor(t=[],e=Es,n,s,r,a,o,l,c,f){super(t,e,n,s,r,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Ni=class extends In{constructor(t,e,n=si,s,r,a,o=on,l=on,c,f=Ii,g=1){if(f!==Ii&&f!==Fi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:g};super(u,s,r,a,o,l,f,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new sr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Gr=class extends Ni{constructor(t,e=si,n=Es,s,r,a=on,o=on,l,c=Ii){let f={width:t,height:t,depth:1},g=[f,f,f,f,f,f];super(t,t,e,n,s,r,a,o,l,c),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Wr=class extends In{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ii=class i extends Ln{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],f=[],g=[],u=0,p=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new hn(c,3)),this.setAttribute("normal",new hn(f,3)),this.setAttribute("uv",new hn(g,2));function x(S,m,_,b,I,E,A,C,y,T,V){let F=E/y,B=A/T,G=E/2,k=A/2,L=C/2,W=y+1,Q=T+1,j=0,pt=0,et=new Z;for(let ht=0;ht<Q;ht++){let mt=ht*B-k;for(let Ht=0;Ht<W;Ht++){let te=Ht*F-G;et[S]=te*b,et[m]=mt*I,et[_]=L,c.push(et.x,et.y,et.z),et[S]=0,et[m]=0,et[_]=C>0?1:-1,f.push(et.x,et.y,et.z),g.push(Ht/y),g.push(1-ht/T),j+=1}}for(let ht=0;ht<T;ht++)for(let mt=0;mt<y;mt++){let Ht=u+mt+W*ht,te=u+mt+W*(ht+1),ot=u+(mt+1)+W*(ht+1),Pt=u+(mt+1)+W*ht;l.push(Ht,te,Pt),l.push(te,ot,Pt),pt+=6}o.addGroup(p,pt,V),p+=pt,u+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ka=new Z,ja=new Z,wc=new Z,Qa=new Ci,Xr=class extends Ln{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(js*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],f=["a","b","c"],g=new Array(3),u=new Map,p=[];for(let x=0;x<l;x+=3){a?(c[0]=a.getX(x),c[1]=a.getX(x+1),c[2]=a.getX(x+2)):(c[0]=x,c[1]=x+1,c[2]=x+2);let{a:S,b:m,c:_}=Qa;if(S.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),_.fromBufferAttribute(o,c[2]),Qa.getNormal(wc),g[0]=`${Math.round(S.x*s)},${Math.round(S.y*s)},${Math.round(S.z*s)}`,g[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,g[2]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,!(g[0]===g[1]||g[1]===g[2]||g[2]===g[0]))for(let b=0;b<3;b++){let I=(b+1)%3,E=g[b],A=g[I],C=Qa[f[b]],y=Qa[f[I]],T=`${E}_${A}`,V=`${A}_${E}`,F=u.get(V);F?(wc.dot(F.normal)<=r&&(p.push(C.x,C.y,C.z),p.push(y.x,y.y,y.z)),u.set(V,null)):u.has(T)||u.set(T,{index0:c[b],index1:c[I],normal:wc.clone()})}}for(let x of u.values())if(x){let{index0:S,index1:m}=x;Ka.fromBufferAttribute(o,S),ja.fromBufferAttribute(o,m),p.push(Ka.x,Ka.y,Ka.z),p.push(ja.x,ja.y,ja.z)}this.setAttribute("position",new hn(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var $r=class i extends Ln{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,f=l+1,g=t/o,u=e/l,p=[],x=[],S=[],m=[];for(let _=0;_<f;_++){let b=_*u-a;for(let I=0;I<c;I++){let E=I*g-r;x.push(E,-b,0),S.push(0,0,1),m.push(I/o),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let b=0;b<o;b++){let I=b+c*_,E=b+c*(_+1),A=b+1+c*(_+1),C=b+1+c*_;p.push(I,E,C),p.push(E,A,C)}this.setIndex(p),this.setAttribute("position",new hn(x,3)),this.setAttribute("normal",new hn(S,3)),this.setAttribute("uv",new hn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};function Rs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(du(s))s.isRenderTargetTexture?(Jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(du(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function xn(i){let t={};for(let e=0;e<i.length;e++){let n=Rs(i[e]);for(let s in n)t[s]=n[s]}return t}function du(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Np(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function hh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Me.workingColorSpace}var rd={clone:Rs,merge:xn},Up=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,pi=class extends Di{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Up,this.fragmentShader=Fp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rs(t.uniforms),this.uniformsGroups=Np(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new de().setHex(s.value);break;case"v2":this.uniforms[n].value=new ie().fromArray(s.value);break;case"v3":this.uniforms[n].value=new Z().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ze().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ae().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ke().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},To=class extends pi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ji=class extends Di{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tl,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Eo=class extends Di{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ao=class extends Di{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Zs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function to(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Qi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ro=class extends Qi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ac,endingEnd:Ac}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Rc:r=t,o=2*e-n;break;case Cc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Rc:a=t,l=2*n-e;break;case Cc:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,f=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*f,this._offsetNext=a*f}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this._offsetPrev,g=this._offsetNext,u=this._weightPrev,p=this._weightNext,x=(n-e)/(s-e),S=x*x,m=S*x,_=-u*m+2*u*S-u*x,b=(1+u)*m+(-1.5-2*u)*S+(-.5+u)*x+1,I=(-1-p)*m+(1.5+p)*S+.5*x,E=p*m-p*S;for(let A=0;A!==o;++A)r[A]=_*a[f+A]+b*a[c+A]+I*a[l+A]+E*a[g+A];return r}},Co=class extends Qi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=(n-e)/(s-e),g=1-f;for(let u=0;u!==o;++u)r[u]=a[c+u]*g+a[l+u]*f;return r}},Po=class extends Qi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Io=class extends Qi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this.inTangents,g=this.outTangents;if(!f||!g){let x=(n-e)/(s-e),S=1-x;for(let m=0;m!==o;++m)r[m]=a[c+m]*S+a[l+m]*x;return r}let u=o*2,p=t-1;for(let x=0;x!==o;++x){let S=a[c+x],m=a[l+x],_=p*u+x*2,b=g[_],I=g[_+1],E=t*u+x*2,A=f[E],C=f[E+1],y=Bp(n,e,b,A,s);r[x]=ad(y,S,I,C,m)}return r}};function ad(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Op(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Bp(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=ad(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Op(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Wn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Zs(e,this.TimeBufferType),this.values=Zs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Zs(t.times,Array),values:Zs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),to(t.settings)&&(n.settings={inTangents:Zs(t.settings.inTangents,Array),outTangents:Zs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Po(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Co(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ro(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Io(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Dr:e=this.InterpolantFactoryMethodDiscrete;break;case mo:e=this.InterpolantFactoryMethodLinear;break;case io:e=this.InterpolantFactoryMethodSmooth;break;case Ec:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Jt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Dr;case this.InterpolantFactoryMethodLinear:return mo;case this.InterpolantFactoryMethodSmooth:return io;case this.InterpolantFactoryMethodBezier:return Ec}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;to(this.settings)&&(fu(this.settings.inTangents,t),fu(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;to(this.settings)&&(pu(this.settings.inTangents,t),pu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ne("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ne("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){ne("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){ne("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&tp(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){ne("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===io,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],f=t[o+1];if(c!==f&&(o!==1||c!==t[0]))if(s)l=!0;else{let g=o*n,u=g-n,p=g+n;for(let x=0;x!==n;++x){let S=e[g+x];if(S!==e[u+x]||S!==e[p+x]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let g=o*n,u=a*n;for(let p=0;p!==n;++p)e[u+p]=e[g+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,to(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function fu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function pu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Wn.prototype.ValueTypeName="";Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=mo;var ts=class extends Wn{constructor(t,e,n){super(t,e,n)}};ts.prototype.ValueTypeName="bool";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=Dr;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var Lo=class extends Wn{constructor(t,e,n,s){super(t,e,n,s)}};Lo.prototype.ValueTypeName="color";var Do=class extends Wn{constructor(t,e,n,s){super(t,e,n,s)}};Do.prototype.ValueTypeName="number";var No=class extends Qi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let f=c+o;c!==f;c+=4)Hn.slerpFlat(r,0,a,c-o,a,c,l);return r}},qr=class extends Wn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new No(this.times,this.values,this.getValueSize(),t)}};qr.prototype.ValueTypeName="quaternion";qr.prototype.InterpolantFactoryMethodSmooth=void 0;var es=class extends Wn{constructor(t,e,n){super(t,e,n)}};es.prototype.ValueTypeName="string";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=Dr;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;var Uo=class extends Wn{constructor(t,e,n,s){super(t,e,n,s)}};Uo.prototype.ValueTypeName="vector";var Fo=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(f){o++,r===!1&&s.onStart!==void 0&&s.onStart(f,a,o),r=!0},this.itemEnd=function(f){a++,s.onProgress!==void 0&&s.onProgress(f,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,g){return c.push(f,g),this},this.removeHandler=function(f){let g=c.indexOf(f);return g!==-1&&c.splice(g,2),this},this.getHandler=function(f){for(let g=0,u=c.length;g<u;g+=2){let p=c[g],x=c[g+1];if(p.global&&(p.lastIndex=0),p.test(f))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},od=new Fo,Oo=class{constructor(t){this.manager=t!==void 0?t:od,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Oo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Yr=class extends un{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new de(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Zr=class extends Yr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.groundColor=new de(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Tc=new ke,mu=new Z,gu=new Z,Bo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ki,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;mu.setFromMatrixPosition(t.matrixWorld),e.position.copy(mu),gu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(gu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Tc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Tc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===er||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Tc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},eo=new Z,no=new Hn,ui=new Z,Jr=class extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=Zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(eo,no,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(eo,no,ui.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(eo,no,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(eo,no,ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Zi=new Z,_u=new ie,xu=new ie,Sn=class extends Jr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ir*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(js*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ir*2*Math.atan(Math.tan(js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z)}getViewSize(t,e){return this.getViewBounds(t,_u,xu),e.subVectors(xu,_u)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(js*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Kr=class extends Jr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Pc=class extends Bo{constructor(){super(new Kr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},or=class extends Yr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.target=new un,this.shadow=new Pc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Js=-90,Ks=1,lr=class extends un{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Sn(Js,Ks,t,e);s.layers=this.layers,this.add(s);let r=new Sn(Js,Ks,t,e);r.layers=this.layers,this.add(r);let a=new Sn(Js,Ks,t,e);a.layers=this.layers,this.add(a);let o=new Sn(Js,Ks,t,e);o.layers=this.layers,this.add(o);let l=new Sn(Js,Ks,t,e);l.layers=this.layers,this.add(l);let c=new Sn(Js,Ks,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===er)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,f]=this.children,g=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let S=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=S,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),t.setRenderTarget(g,u,p),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},ko=class extends Sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var uh="\\[\\]\\.:\\/",kp=new RegExp("["+uh+"]","g"),dh="[^"+uh+"]",zp="[^"+uh.replace("\\.","")+"]",Vp=/((?:WC+[\/:])*)/.source.replace("WC",dh),Hp=/(WCOD+)?/.source.replace("WCOD",zp),Gp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dh),Wp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dh),Xp=new RegExp("^"+Vp+Hp+Gp+Wp+"$"),$p=["material","materials","bones","map"],Ic=class{constructor(t,e,n){let s=n||Be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Be=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(kp,"")}static parseTrackName(t){let e=Xp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);$p.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Jt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ne("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ne("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===c){c=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ne("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ne("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){ne("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;ne("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Be.Composite=Ic;Be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Be.prototype.GetterByBindingType=[Be.prototype._getValue_direct,Be.prototype._getValue_array,Be.prototype._getValue_arrayElement,Be.prototype._getValue_toArray];Be.prototype.SetterByBindingTypeAndVersioning=[[Be.prototype._setValue_direct,Be.prototype._setValue_direct_setNeedsUpdate,Be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_array,Be.prototype._setValue_array_setNeedsUpdate,Be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_arrayElement,Be.prototype._setValue_arrayElement_setNeedsUpdate,Be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_fromArray,Be.prototype._setValue_fromArray_setNeedsUpdate,Be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var hy=new Float32Array(1);var cr=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=_e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(_e(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Lc=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var jr=class extends ar{constructor(t=10,e=10,n=4473924,s=8947848){n=new de(n),s=new de(s);let r=e/2,a=t/e,o=t/2,l=[],c=[];for(let u=0,p=0,x=-o;u<=e;u++,x+=a){l.push(-o,0,x,o,0,x),l.push(x,0,-o,x,0,o);let S=u===r?n:s;S.toArray(c,p),p+=3,S.toArray(c,p),p+=3,S.toArray(c,p),p+=3,S.toArray(c,p),p+=3}let f=new Ln;f.setAttribute("position",new hn(l,3)),f.setAttribute("color",new hn(c,3));let g=new bs({vertexColors:!0,toneMapped:!1});super(f,g),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};var Qr=class extends ni{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function fh(i,t,e,n){let s=qp(n);switch(e){case jc:return i*t;case th:return i*t/s.components*s.byteLength;case $o:return i*t/s.components*s.byteLength;case rs:return i*t*2/s.components*s.byteLength;case qo:return i*t*2/s.components*s.byteLength;case Qc:return i*t*3/s.components*s.byteLength;case oi:return i*t*4/s.components*s.byteLength;case Yo:return i*t*4/s.components*s.byteLength;case na:case ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case sa:case ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Jo:case jo:return Math.max(i,16)*Math.max(t,8)/4;case Zo:case Ko:return Math.max(i,8)*Math.max(t,8)/2;case Qo:case tl:case nl:case il:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case el:case aa:case sl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case rl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case al:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ol:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ll:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case cl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case hl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ul:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case dl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case fl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case pl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ml:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case gl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case _l:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case xl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case yl:case vl:case Ml:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Sl:case bl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case oa:case wl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function qp(i){switch(i){case Dn:case Yc:return{byteLength:1,components:1};case fr:case Zc:case ai:return{byteLength:2,components:1};case Wo:case Xo:return{byteLength:2,components:4};case si:case Go:case ri:return{byteLength:4,components:1};case Jc:case Kc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Cd(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Zp(i){let t=new WeakMap;function e(o,l){let c=o.array,f=o.usage,g=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,f),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:g}}function n(o,l,c){let f=l.array,g=l.updateRanges;if(i.bindBuffer(c,o),g.length===0)i.bufferSubData(c,0,f);else{g.sort((p,x)=>p.start-x.start);let u=0;for(let p=1;p<g.length;p++){let x=g[u],S=g[p];S.start<=x.start+x.count+1?x.count=Math.max(x.count,S.start+S.count-x.start):(++u,g[u]=S)}g.length=u+1;for(let p=0,x=g.length;p<x;p++){let S=g[p];i.bufferSubData(c,S.start*f.BYTES_PER_ELEMENT,f,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Jp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kp=`#ifdef USE_ALPHAHASH
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
#endif`,jp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,em=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nm=`#ifdef USE_AOMAP
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
#endif`,im=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sm=`#ifdef USE_BATCHING
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
#endif`,rm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,am=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,om=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cm=`#ifdef USE_IRIDESCENCE
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
#endif`,hm=`#ifdef USE_BUMPMAP
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
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_m=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,xm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ym=`#define PI 3.141592653589793
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
} // validated`,vm=`vec3 transformedNormal = objectNormal;
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
#endif`,Mm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Em=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Am=`#ifdef USE_ENVMAP
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
#endif`,Rm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Cm=`#ifdef USE_ENVMAP
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
#endif`,Pm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Im=`#ifdef USE_ENVMAP
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
#endif`,Lm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Um=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fm=`#ifdef USE_GRADIENTMAP
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
}`,Om=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Vm=`#ifdef USE_ENVMAP
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
#endif`,Hm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$m=`PhysicalMaterial material;
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
#endif`,qm=`uniform sampler2D dfgLUT;
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
}`,Ym=`
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
#endif`,Zm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Km=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,jm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ng=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ig=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rg=`#if defined( USE_POINTS_UV )
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
#endif`,ag=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,og=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cg=`#if defined( USE_MORPHCOLORS )
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
#endif`,hg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ug=`#ifdef USE_MORPHTARGETS
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
#endif`,dg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_g=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,xg=`#ifdef USE_NORMALMAP
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
#endif`,yg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Tg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Eg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ag=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ig=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ng=`float getShadowMask() {
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
}`,Ug=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fg=`#ifdef USE_SKINNING
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
#endif`,Og=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bg=`#ifdef USE_SKINNING
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
#endif`,kg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gg=`#ifdef USE_TRANSMISSION
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
#endif`,Wg=`#ifdef USE_TRANSMISSION
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
#endif`,Xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Zg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jg=`uniform sampler2D t2D;
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
}`,Kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jg=`uniform float backgroundBlurriness;
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
}`,Qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e0=`#include <common>
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
}`,n0=`#if DEPTH_PACKING == 3200
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
}`,i0=`#define DISTANCE
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
}`,s0=`#define DISTANCE
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
}`,r0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,a0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o0=`uniform float scale;
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
}`,l0=`uniform vec3 diffuse;
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
}`,c0=`#include <common>
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
}`,h0=`uniform vec3 diffuse;
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
}`,u0=`#define LAMBERT
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
}`,d0=`#define LAMBERT
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
}`,f0=`#define MATCAP
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
}`,p0=`#define MATCAP
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
}`,m0=`#define NORMAL
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
}`,g0=`#define NORMAL
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
}`,_0=`#define PHONG
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
}`,x0=`#define PHONG
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
}`,y0=`#define STANDARD
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
}`,v0=`#define STANDARD
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
}`,M0=`#define TOON
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
}`,S0=`#define TOON
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
}`,b0=`uniform float size;
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
}`,w0=`uniform vec3 diffuse;
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
}`,T0=`#include <common>
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
}`,E0=`uniform vec3 color;
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
}`,A0=`uniform float rotation;
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
}`,R0=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:Jp,alphahash_pars_fragment:Kp,alphamap_fragment:jp,alphamap_pars_fragment:Qp,alphatest_fragment:tm,alphatest_pars_fragment:em,aomap_fragment:nm,aomap_pars_fragment:im,batching_pars_vertex:sm,batching_vertex:rm,begin_vertex:am,beginnormal_vertex:om,bsdfs:lm,iridescence_fragment:cm,bumpmap_pars_fragment:hm,clipping_planes_fragment:um,clipping_planes_pars_fragment:dm,clipping_planes_pars_vertex:fm,clipping_planes_vertex:pm,color_fragment:mm,color_pars_fragment:gm,color_pars_vertex:_m,color_vertex:xm,common:ym,defaultnormal_vertex:vm,displacementmap_pars_vertex:Mm,displacementmap_vertex:Sm,emissivemap_fragment:bm,emissivemap_pars_fragment:wm,colorspace_fragment:Tm,colorspace_pars_fragment:Em,envmap_fragment:Am,envmap_common_pars_fragment:Rm,envmap_pars_fragment:Cm,envmap_pars_vertex:Pm,envmap_physical_pars_fragment:Vm,envmap_vertex:Im,fog_vertex:Lm,fog_pars_vertex:Dm,fog_fragment:Nm,fog_pars_fragment:Um,gradientmap_pars_fragment:Fm,lightmap_pars_fragment:Om,lights_lambert_fragment:Bm,lights_lambert_pars_fragment:km,lights_pars_begin:zm,lights_toon_fragment:Hm,lights_toon_pars_fragment:Gm,lights_phong_fragment:Wm,lights_phong_pars_fragment:Xm,lights_physical_fragment:$m,lights_physical_pars_fragment:qm,lights_fragment_begin:Ym,lights_fragment_maps:Zm,lights_fragment_end:Jm,lightprobes_pars_fragment:Km,logdepthbuf_fragment:jm,logdepthbuf_pars_fragment:Qm,logdepthbuf_pars_vertex:tg,logdepthbuf_vertex:eg,map_fragment:ng,map_pars_fragment:ig,map_particle_fragment:sg,map_particle_pars_fragment:rg,metalnessmap_fragment:ag,metalnessmap_pars_fragment:og,morphinstance_vertex:lg,morphcolor_vertex:cg,morphnormal_vertex:hg,morphtarget_pars_vertex:ug,morphtarget_vertex:dg,normal_fragment_begin:fg,normal_fragment_maps:pg,normal_pars_fragment:mg,normal_pars_vertex:gg,normal_vertex:_g,normalmap_pars_fragment:xg,clearcoat_normal_fragment_begin:yg,clearcoat_normal_fragment_maps:vg,clearcoat_pars_fragment:Mg,iridescence_pars_fragment:Sg,opaque_fragment:bg,packing:wg,premultiplied_alpha_fragment:Tg,project_vertex:Eg,dithering_fragment:Ag,dithering_pars_fragment:Rg,roughnessmap_fragment:Cg,roughnessmap_pars_fragment:Pg,shadowmap_pars_fragment:Ig,shadowmap_pars_vertex:Lg,shadowmap_vertex:Dg,shadowmask_pars_fragment:Ng,skinbase_vertex:Ug,skinning_pars_vertex:Fg,skinning_vertex:Og,skinnormal_vertex:Bg,specularmap_fragment:kg,specularmap_pars_fragment:zg,tonemapping_fragment:Vg,tonemapping_pars_fragment:Hg,transmission_fragment:Gg,transmission_pars_fragment:Wg,uv_pars_fragment:Xg,uv_pars_vertex:$g,uv_vertex:qg,worldpos_vertex:Yg,background_vert:Zg,background_frag:Jg,backgroundCube_vert:Kg,backgroundCube_frag:jg,cube_vert:Qg,cube_frag:t0,depth_vert:e0,depth_frag:n0,distance_vert:i0,distance_frag:s0,equirect_vert:r0,equirect_frag:a0,linedashed_vert:o0,linedashed_frag:l0,meshbasic_vert:c0,meshbasic_frag:h0,meshlambert_vert:u0,meshlambert_frag:d0,meshmatcap_vert:f0,meshmatcap_frag:p0,meshnormal_vert:m0,meshnormal_frag:g0,meshphong_vert:_0,meshphong_frag:x0,meshphysical_vert:y0,meshphysical_frag:v0,meshtoon_vert:M0,meshtoon_frag:S0,points_vert:b0,points_frag:w0,shadow_vert:T0,shadow_frag:E0,sprite_vert:A0,sprite_frag:R0},Dt={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ae}},envmap:{envMap:{value:null},envMapRotation:{value:new ae},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ae}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ae}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ae},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ae},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ae},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ae}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ae}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ae}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0},uvTransform:{value:new ae}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}}},xi={basic:{uniforms:xn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:xn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new de(0)},envMapIntensity:{value:1}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:xn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:xn([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:xn([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new de(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:xn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:xn([Dt.points,Dt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:xn([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:xn([Dt.common,Dt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:xn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:xn([Dt.sprite,Dt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ae},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ae}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distance:{uniforms:xn([Dt.common,Dt.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distance_vert,fragmentShader:fe.distance_frag},shadow:{uniforms:xn([Dt.lights,Dt.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};xi.physical={uniforms:xn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ae},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ae},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ae},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ae},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ae},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ae},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ae},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ae},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ae},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ae},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ae},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ae},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ae}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};var El={r:0,b:0,g:0},C0=new ke,Pd=new ae;Pd.set(-1,0,0,0,1,0,0,0,1);function P0(i,t,e,n,s,r){let a=new de(0),o=s===!0?0:1,l,c,f=null,g=0,u=null;function p(b){let I=b.isScene===!0?b.background:null;if(I&&I.isTexture){let E=b.backgroundBlurriness>0;I=t.get(I,E)}return I}function x(b){let I=!1,E=p(b);E===null?m(a,o):E&&E.isColor&&(m(E,1),I=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||I)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(b,I){let E=p(I);E&&E.isCubeTexture?(c===void 0&&(c=new wn(new ii(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:Rs(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,C,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(C0.makeRotationFromEuler(I.backgroundRotation)).transpose(),E.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Pd),c.material.toneMapped=Me.getTransfer(E.colorSpace)!==Ae,(f!==E||g!==E.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,f=E,g=E.version,u=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new wn(new $r(2,2),new pi({name:"BackgroundMaterial",uniforms:Rs(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,l.material.toneMapped=Me.getTransfer(E.colorSpace)!==Ae,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||g!==E.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,f=E,g=E.version,u=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,I){b.getRGB(El,hh(i)),e.buffers.color.setClear(El.r,El.g,El.b,I,r)}function _(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,I=1){a.set(b),o=I,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(a,o)},render:x,addToRenderList:S,dispose:_}}function I0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(B,G,k,L,W){let Q=!1,j=g(B,L,k,G);r!==j&&(r=j,c(r.object)),Q=p(B,L,k,W),Q&&x(B,L,k,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,E(B,G,k,L),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(B){return i.bindVertexArray(B)}function f(B){return i.deleteVertexArray(B)}function g(B,G,k,L){let W=L.wireframe===!0,Q=n[G.id];Q===void 0&&(Q={},n[G.id]=Q);let j=B.isInstancedMesh===!0?B.id:0,pt=Q[j];pt===void 0&&(pt={},Q[j]=pt);let et=pt[k.id];et===void 0&&(et={},pt[k.id]=et);let ht=et[W];return ht===void 0&&(ht=u(l()),et[W]=ht),ht}function u(B){let G=[],k=[],L=[];for(let W=0;W<e;W++)G[W]=0,k[W]=0,L[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:k,attributeDivisors:L,object:B,attributes:{},index:null}}function p(B,G,k,L){let W=r.attributes,Q=G.attributes,j=0,pt=k.getAttributes();for(let et in pt)if(pt[et].location>=0){let mt=W[et],Ht=Q[et];if(Ht===void 0&&(et==="instanceMatrix"&&B.instanceMatrix&&(Ht=B.instanceMatrix),et==="instanceColor"&&B.instanceColor&&(Ht=B.instanceColor)),mt===void 0||mt.attribute!==Ht||Ht&&mt.data!==Ht.data)return!0;j++}return r.attributesNum!==j||r.index!==L}function x(B,G,k,L){let W={},Q=G.attributes,j=0,pt=k.getAttributes();for(let et in pt)if(pt[et].location>=0){let mt=Q[et];mt===void 0&&(et==="instanceMatrix"&&B.instanceMatrix&&(mt=B.instanceMatrix),et==="instanceColor"&&B.instanceColor&&(mt=B.instanceColor));let Ht={};Ht.attribute=mt,mt&&mt.data&&(Ht.data=mt.data),W[et]=Ht,j++}r.attributes=W,r.attributesNum=j,r.index=L}function S(){let B=r.newAttributes;for(let G=0,k=B.length;G<k;G++)B[G]=0}function m(B){_(B,0)}function _(B,G){let k=r.newAttributes,L=r.enabledAttributes,W=r.attributeDivisors;k[B]=1,L[B]===0&&(i.enableVertexAttribArray(B),L[B]=1),W[B]!==G&&(i.vertexAttribDivisor(B,G),W[B]=G)}function b(){let B=r.newAttributes,G=r.enabledAttributes;for(let k=0,L=G.length;k<L;k++)G[k]!==B[k]&&(i.disableVertexAttribArray(k),G[k]=0)}function I(B,G,k,L,W,Q,j){j===!0?i.vertexAttribIPointer(B,G,k,W,Q):i.vertexAttribPointer(B,G,k,L,W,Q)}function E(B,G,k,L){S();let W=L.attributes,Q=k.getAttributes(),j=G.defaultAttributeValues;for(let pt in Q){let et=Q[pt];if(et.location>=0){let ht=W[pt];if(ht===void 0&&(pt==="instanceMatrix"&&B.instanceMatrix&&(ht=B.instanceMatrix),pt==="instanceColor"&&B.instanceColor&&(ht=B.instanceColor)),ht!==void 0){let mt=ht.normalized,Ht=ht.itemSize,te=t.get(ht);if(te===void 0)continue;let ot=te.buffer,Pt=te.type,Ot=te.bytesPerElement,Yt=Pt===i.INT||Pt===i.UNSIGNED_INT||ht.gpuType===Go;if(ht.isInterleavedBufferAttribute){let It=ht.data,oe=It.isInterleavedBuffer===!0?It.stride:It.itemSize,Ge=ht.offset;if(It.isInstancedInterleavedBuffer||It.isInstancedBufferAttribute){for(let Kt=0;Kt<et.locationSize;Kt++)_(et.location+Kt,It.meshPerAttribute);B.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=It.meshPerAttribute*It.count)}else for(let Kt=0;Kt<et.locationSize;Kt++)m(et.location+Kt);i.bindBuffer(i.ARRAY_BUFFER,ot);for(let Kt=0;Kt<et.locationSize;Kt++)I(et.location+Kt,Ht/et.locationSize,Pt,mt,oe*Ot,(Ge+Ht/et.locationSize*Kt)*Ot,Yt)}else{if(ht.isInstancedBufferAttribute){for(let It=0;It<et.locationSize;It++)_(et.location+It,ht.meshPerAttribute);B.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let It=0;It<et.locationSize;It++)m(et.location+It);i.bindBuffer(i.ARRAY_BUFFER,ot);for(let It=0;It<et.locationSize;It++)I(et.location+It,Ht/et.locationSize,Pt,mt,Ht*Ot,Ht/et.locationSize*It*Ot,Yt)}}else if(j!==void 0){let mt=j[pt];if(mt!==void 0)switch(mt.length){case 2:i.vertexAttrib2fv(et.location,mt);break;case 3:i.vertexAttrib3fv(et.location,mt);break;case 4:i.vertexAttrib4fv(et.location,mt);break;default:i.vertexAttrib1fv(et.location,mt)}}}}b()}function A(){V();for(let B in n){let G=n[B];for(let k in G){let L=G[k];for(let W in L){let Q=L[W];for(let j in Q)f(Q[j].object),delete Q[j];delete L[W]}}delete n[B]}}function C(B){if(n[B.id]===void 0)return;let G=n[B.id];for(let k in G){let L=G[k];for(let W in L){let Q=L[W];for(let j in Q)f(Q[j].object),delete Q[j];delete L[W]}}delete n[B.id]}function y(B){for(let G in n){let k=n[G];for(let L in k){let W=k[L];if(W[B.id]===void 0)continue;let Q=W[B.id];for(let j in Q)f(Q[j].object),delete Q[j];delete W[B.id]}}}function T(B){for(let G in n){let k=n[G],L=B.isInstancedMesh===!0?B.id:0,W=k[L];if(W!==void 0){for(let Q in W){let j=W[Q];for(let pt in j)f(j[pt].object),delete j[pt];delete W[Q]}delete k[L],Object.keys(k).length===0&&delete n[G]}}}function V(){F(),a=!0,r!==s&&(r=s,c(r.object))}function F(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:V,resetDefaultState:F,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfObject:T,releaseStatesOfProgram:y,initAttributes:S,enableAttribute:m,disableUnusedAttributes:b}}function L0(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,f){f!==0&&(i.drawArraysInstanced(n,l,c,f),e.update(c,n,f))}function o(l,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,f);let u=0;for(let p=0;p<f;p++)u+=c[p];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function D0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let y=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(y){return!(y!==oi&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(y){let T=y===ai&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(y!==Dn&&y!==ri&&!T&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(y){if(y==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",f=l(c);f!==c&&(Jt("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let g=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&g===!1;e.reversedDepthBuffer===!0&&g===!1&&Jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&g===!0&&Jt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),I=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),C=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:g,maxTextures:p,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:m,maxAttributes:_,maxVertexUniforms:b,maxVaryings:I,maxFragmentUniforms:E,maxSamples:A,samples:C}}function N0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new zn,o=new ae,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(g,u){let p=g.length!==0||u||n!==0||s;return s=u,n=g.length,p},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(g,u){e=f(g,u,0)},this.setState=function(g,u,p){let x=g.clippingPlanes,S=g.clipIntersection,m=g.clipShadows,_=i.get(g);if(!s||x===null||x.length===0||r&&!m)r?f(null):c();else{let b=r?0:n,I=b*4,E=_.clippingState||null;l.value=E,E=f(x,u,I,p);for(let A=0;A!==I;++A)E[A]=e[A];_.clippingState=E,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(g,u,p,x){let S=g!==null?g.length:0,m=null;if(S!==0){if(m=l.value,x!==!0||m===null){let _=p+S*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<_)&&(m=new Float32Array(_));for(let I=0,E=p;I!==S;++I,E+=4)a.copy(g[I]).applyMatrix4(b,o),a.normal.toArray(m,E),m[E+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}var ha=class extends Gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Hr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ii(5,5,5),r=new pi({name:"CubemapFromEquirect",uniforms:Rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tn,blending:ws});r.uniforms.tEquirect.value=e;let a=new wn(s,r),o=e.minFilter;return e.minFilter===Ui&&(e.minFilter=bn),new lr(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},ld=256,U0=3,F0=20,Id=256,Ld=16,O0=3,B0=new Z,k0=new de,Rl=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new lr(1,10,null),this._boxMesh=new wn(new ii(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=B0}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),f=this._getSourceTarget(!0);e>0&&(f.texture.mipmapsAutoUpdate=!1);let g=l.autoClear,u=l.autoClearColor,p=l.autoClearDepth,x=l.autoClearStencil,S=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,S===null&&(t.background=l.getClearColor(k0));let m=new lr(n,s,f);return m.position.copy(o),m.update(l,t),l.autoClear=g,l.autoClearColor=u,l.autoClearDepth=p,l.autoClearStencil=x,t.background=S,e>0&&(f.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ud(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(ld,oh(t))}_fromTexture(t,e){t.mapping===Es||t.mapping===dr?this._setSize(t.image.length===0?ld:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=cd(t,!1,!1),n=Math.log2(t)-U0;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=cd(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Es||t.mapping===dr?(this._cubemapMaterial===null&&(this._cubemapMaterial=ud()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=hd()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=z0(),this._integrationMaterial=V0());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Ld);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-O0)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(Id*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=H0());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function cd(i,t,e){return new ha(i,{minFilter:Ui,generateMipmaps:t,type:ai,colorSpace:Nr,depthBuffer:e})}function ua(i,t,e){return new pi({name:i,uniforms:t,vertexShader:fe.cube_vert,fragmentShader:e,side:Tn,blending:ws,depthTest:!1,depthWrite:!1})}function z0(){return ua("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Id}u

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
	`)}function V0(){return ua("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Ld}},`

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
	`)}function H0(){return ua("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${F0}
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
	`)}function hd(){return ua("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function ud(){return ua("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function G0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,p=!1){return u==null?null:p?a(u):r(u)}function r(u){if(u&&u.isTexture){let p=u.mapping;if(p===zo||p===Vo)if(t.has(u)){let x=t.get(u).texture;return o(x,u.mapping)}else{let x=u.image;if(x&&x.height>0){let S=new ha(x.height);return S.fromEquirectangularTexture(i,u),t.set(u,S),u.addEventListener("dispose",c),o(S.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let p=u.mapping,x=p===zo||p===Vo,S=p===Es||p===dr;if(x||S){let m=e.get(u),_=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==_)return n===null&&(n=new Rl(i)),m=x?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let b=u.image;return x&&b&&b.height>0||S&&b&&l(b)?(n===null&&(n=new Rl(i)),m=x?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",f),m.texture):null}}}return u}function o(u,p){return p===zo?u.mapping=Es:p===Vo&&(u.mapping=dr),u}function l(u){let p=0,x=6;for(let S=0;S<x;S++)u[S]!==void 0&&p++;return p===x}function c(u){let p=u.target;p.removeEventListener("dispose",c);let x=t.get(p);x!==void 0&&(t.delete(p),x.dispose())}function f(u){let p=u.target;p.removeEventListener("dispose",f);let x=e.get(p);x!==void 0&&(e.delete(p),x.dispose())}function g(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:g}}function W0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ir("WebGLRenderer: "+n+" extension not supported."),s}}}function X0(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(x=>delete s[x]);function o(x){l(x.target)}function l(x){x.index!==null&&t.remove(x.index);for(let m in x.attributes)t.remove(x.attributes[m]);x.removeEventListener("dispose",o),delete s[x.id],a.unregister(x);let S=r.get(x);S&&(t.remove(S),r.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,e.memory.geometries--}function c(x,S){return s[S.id]!==void 0||(S.addEventListener("dispose",o),s[S.id]=new WeakRef(S),a.register(S,S.id,S),e.memory.geometries++),S}function f(x){let S=x.attributes;for(let m in S)t.update(S[m],i.ARRAY_BUFFER)}function g(x){let S=x.index,m=x.attributes.position,_=0;if(m===void 0)return;let b=S!==null?S.array.length:m.array.length/3-1,I=m.count>=65535?Vr:zr,E=new I(Math.ceil(b/3)*6,1),A=E.array;if(S!==null){let y=S.array;_=S.version;for(let T=0,V=0;T<b;T+=3){let F=y[T+0],B=y[T+1],G=y[T+2];A[V++]=F,A[V++]=B,A[V++]=B,A[V++]=G,A[V++]=G,A[V++]=F}}else{_=m.version;for(let y=0,T=0;y<b;y+=3){let V=y+0,F=y+1,B=y+2;A[T++]=V,A[T++]=F,A[T++]=F,A[T++]=B,A[T++]=B,A[T++]=V}}E.version=_;let C=r.get(x);C&&t.remove(C),r.set(x,E)}function u(x){let S=r.get(x);if(S){let m=x.index;m!==null&&S.version<m.version&&g(x)}else g(x);return r.get(x)}function p(){for(let x in s){let S=s[x].deref();S!==void 0&&l(S)}}return{get:c,update:f,getWireframeAttribute:u,dispose:p}}function $0(i,t,e){let n;function s(g){n=g}let r,a;function o(g){r=g.type,a=g.bytesPerElement}function l(g,u){i.drawElements(n,u,r,g*a),e.update(u,n,1)}function c(g,u,p){p!==0&&(i.drawElementsInstanced(n,u,r,g*a,p),e.update(u,n,p))}function f(g,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,g,0,p);let S=0;for(let m=0;m<p;m++)S+=u[m];e.update(S,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function q0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:ne("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Y0(i,t,e){let n=new WeakMap,s=new ze;function r(a,o,l){let c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,g=f!==void 0?f.length:0,u=n.get(o);if(u===void 0||u.count!==g){let V=function(){y.dispose(),n.delete(o),o.removeEventListener("dispose",V)};u!==void 0&&u.texture.dispose();let p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],I=0;p===!0&&(I=1),x===!0&&(I=2),S===!0&&(I=3);let E=o.attributes.position.count*I,A=1;E>t.maxTextureSize&&(A=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);let C=new Float32Array(E*A*4*g),y=new Or(C,E,A,g);y.type=ri,y.needsUpdate=!0;let T=I*4;for(let F=0;F<g;F++){let B=m[F],G=_[F],k=b[F],L=E*A*4*F;for(let W=0;W<B.count;W++){let Q=W*T;p===!0&&(s.fromBufferAttribute(B,W),C[L+Q+0]=s.x,C[L+Q+1]=s.y,C[L+Q+2]=s.z,C[L+Q+3]=0),x===!0&&(s.fromBufferAttribute(G,W),C[L+Q+4]=s.x,C[L+Q+5]=s.y,C[L+Q+6]=s.z,C[L+Q+7]=0),S===!0&&(s.fromBufferAttribute(k,W),C[L+Q+8]=s.x,C[L+Q+9]=s.y,C[L+Q+10]=s.z,C[L+Q+11]=k.itemSize===4?s.w:1)}}u={count:g,texture:y,size:new ie(E,A)},n.set(o,u),o.addEventListener("dispose",V)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let S=0;S<c.length;S++)p+=c[S];let x=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Z0(i,t,e,n,s){let r=new WeakMap;function a(c){let f=s.render.frame,g=c.geometry,u=t.get(c,g);if(r.get(u)!==f&&(t.update(u),r.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==f&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,f))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==f&&(p.update(),r.set(p,f))}return u}function o(){r=new WeakMap}function l(c){let f=c.target;f.removeEventListener("dispose",l),n.releaseStatesOfObject(f),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:a,dispose:o}}var J0={[zc]:"LINEAR_TONE_MAPPING",[Vc]:"REINHARD_TONE_MAPPING",[Hc]:"CINEON_TONE_MAPPING",[Gc]:"ACES_FILMIC_TONE_MAPPING",[Xc]:"AGX_TONE_MAPPING",[$c]:"NEUTRAL_TONE_MAPPING",[Wc]:"CUSTOM_TONE_MAPPING"};function K0(i,t,e,n,s,r){let a=new Gn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,f=new Ln;f.setAttribute("position",new hn([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new hn([0,2,0,0,2,0],2));let g=new To({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new wn(f,g),p=new Kr(-1,1,1,-1,0,1),x=null,S=null,m=!1,_,b=null,I=[],E=!1;this.setSize=function(A,C){a.setSize(A,C),o!==null&&o.setSize(A,C),l!==null&&l.setSize(A,C);for(let y=0;y<I.length;y++){let T=I[y];T.setSize&&T.setSize(A,C)}},this.setEffects=function(A){I=A,E=I.length>0&&I[0].isRenderPass===!0;let C=a.width,y=a.height;I.length>0&&o===null&&(o=new Gn(C,y,{type:ai,depthBuffer:!1,stencilBuffer:!1}),l=new Gn(C,y,{type:ai,depthBuffer:!1,stencilBuffer:!1}));let T=s===!0&&I.some(V=>V.needsDepthTexture===!0);T!==(a.depthTexture!==null)&&(T===!0&&c===null&&(c=new Ni(C,y),r===!0&&(c.format=Fi,c.type=As)),a.dispose(),a.depthTexture=T?c:null,a.resolveDepthBuffer=T,a.storeMultisampledDepthBuffer=T);for(let V=0;V<I.length;V++){let F=I[V];F.setSize&&F.setSize(C,y),T&&F.needsDepthTexture===!0&&F.setDepthTexture&&F.setDepthTexture(c)}},this.begin=function(A,C){if(m||A.toneMapping===gi&&I.length===0)return!1;if(b=C,C!==null){let y=C.width,T=C.height;(a.width!==y||a.height!==T)&&this.setSize(y,T)}return E===!1&&A.setRenderTarget(a),_=A.toneMapping,A.toneMapping=gi,!0},this.hasRenderPass=function(){return E},this.end=function(A,C){A.toneMapping=_,m=!0;let y=a,T=o;for(let V=0;V<I.length;V++){let F=I[V];F.enabled!==!1&&(F.render(A,T,y,C),F.needsSwap!==!1&&(y=T,T=T===o?l:o))}if(x!==A.outputColorSpace||S!==A.toneMapping){x=A.outputColorSpace,S=A.toneMapping,g.defines={},Me.getTransfer(x)===Ae&&(g.defines.SRGB_TRANSFER="");let V=J0[S];V&&(g.defines[V]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=y.texture,A.setRenderTarget(b),A.render(u,p),b=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),f.dispose(),g.dispose()}}var Dd=new In,Nd=new Ni(1,1),Ud=new Gr(1),Fd=new Or,Od=new xo,Bd=new Hr,dd=[],fd=[],pd=new Float32Array(16),md=new Float32Array(9),gd=new Float32Array(4);function gr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=dd[s];if(r===void 0&&(r=new Float32Array(s),dd[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function je(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Qe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Pl(i,t){let e=fd[t];e===void 0&&(e=new Int32Array(t),fd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function j0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Q0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;i.uniform2fv(this.addr,t),Qe(e,t)}}function t_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(je(e,t))return;i.uniform3fv(this.addr,t),Qe(e,t)}}function e_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;i.uniform4fv(this.addr,t),Qe(e,t)}}function n_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Qe(e,t)}else{if(je(e,n))return;gd.set(n),i.uniformMatrix2fv(this.addr,!1,gd),Qe(e,n)}}function i_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Qe(e,t)}else{if(je(e,n))return;md.set(n),i.uniformMatrix3fv(this.addr,!1,md),Qe(e,n)}}function s_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Qe(e,t)}else{if(je(e,n))return;pd.set(n),i.uniformMatrix4fv(this.addr,!1,pd),Qe(e,n)}}function r_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function a_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;i.uniform2iv(this.addr,t),Qe(e,t)}}function o_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;i.uniform3iv(this.addr,t),Qe(e,t)}}function l_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;i.uniform4iv(this.addr,t),Qe(e,t)}}function c_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function h_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;i.uniform2uiv(this.addr,t),Qe(e,t)}}function u_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;i.uniform3uiv(this.addr,t),Qe(e,t)}}function d_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;i.uniform4uiv(this.addr,t),Qe(e,t)}}function Il(i){return i.version===0&&(i.compareFunction=ih,i.needsUpdate=!0),i}function f_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Il(Nd):r=Dd,e.setTexture2D(t||r,s)}function p_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Od,s)}function m_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Il(Ud):r=Bd,e.setTextureCube(t||r,s)}function g_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Fd,s)}function __(i){switch(i){case 5126:return j0;case 35664:return Q0;case 35665:return t_;case 35666:return e_;case 35674:return n_;case 35675:return i_;case 35676:return s_;case 5124:case 35670:return r_;case 35667:case 35671:return a_;case 35668:case 35672:return o_;case 35669:case 35673:return l_;case 5125:return c_;case 36294:return h_;case 36295:return u_;case 36296:return d_;case 35678:case 36198:case 36298:case 36306:case 35682:return f_;case 35679:case 36299:case 36307:return p_;case 35680:case 36300:case 36308:case 36293:return m_;case 36289:case 36303:case 36311:case 36292:return g_}}function x_(i,t){i.uniform1fv(this.addr,t)}function y_(i,t){let e=gr(t,this.size,2);i.uniform2fv(this.addr,e)}function v_(i,t){let e=gr(t,this.size,3);i.uniform3fv(this.addr,e)}function M_(i,t){let e=gr(t,this.size,4);i.uniform4fv(this.addr,e)}function S_(i,t){let e=gr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function b_(i,t){let e=gr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function w_(i,t){let e=gr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function T_(i,t){i.uniform1iv(this.addr,t)}function E_(i,t){i.uniform2iv(this.addr,t)}function A_(i,t){i.uniform3iv(this.addr,t)}function R_(i,t){i.uniform4iv(this.addr,t)}function C_(i,t){i.uniform1uiv(this.addr,t)}function P_(i,t){i.uniform2uiv(this.addr,t)}function I_(i,t){i.uniform3uiv(this.addr,t)}function L_(i,t){i.uniform4uiv(this.addr,t)}function D_(i,t,e){let n=this.cache,s=t.length,r=Pl(e,s);je(n,r)||(i.uniform1iv(this.addr,r),Qe(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Il(Nd):a=Dd;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function N_(i,t,e){let n=this.cache,s=t.length,r=Pl(e,s);je(n,r)||(i.uniform1iv(this.addr,r),Qe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Od,r[a])}function U_(i,t,e){let n=this.cache,s=t.length,r=Pl(e,s);je(n,r)||(i.uniform1iv(this.addr,r),Qe(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Il(Ud):a=Bd;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function F_(i,t,e){let n=this.cache,s=t.length,r=Pl(e,s);je(n,r)||(i.uniform1iv(this.addr,r),Qe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Fd,r[a])}function O_(i){switch(i){case 5126:return x_;case 35664:return y_;case 35665:return v_;case 35666:return M_;case 35674:return S_;case 35675:return b_;case 35676:return w_;case 5124:case 35670:return T_;case 35667:case 35671:return E_;case 35668:case 35672:return A_;case 35669:case 35673:return R_;case 5125:return C_;case 36294:return P_;case 36295:return I_;case 36296:return L_;case 35678:case 36198:case 36298:case 36306:case 35682:return D_;case 35679:case 36299:case 36307:return N_;case 35680:case 36300:case 36308:case 36293:return U_;case 36289:case 36303:case 36311:case 36292:return F_}}var gh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=__(e.type)}},_h=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=O_(e.type)}},xh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},ph=/(\w+)(\])?(\[|\.)?/g;function _d(i,t){i.seq.push(t),i.map[t.id]=t}function B_(i,t,e){let n=i.name,s=n.length;for(ph.lastIndex=0;;){let r=ph.exec(n),a=ph.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){_d(e,c===void 0?new gh(o,i,t):new _h(o,i,t));break}else{let g=e.map[o];g===void 0&&(g=new xh(o),_d(e,g)),e=g}}}var mr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);B_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function xd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var k_=37297,z_=0;function V_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var yd=new ae;function H_(i){Me._getMatrix(yd,Me.workingColorSpace,i);let t=`mat3( ${yd.elements.map(e=>e.toFixed(4))} )`;switch(Me.getTransfer(i)){case Ur:return[t,"LinearTransferOETF"];case Ae:return[t,"sRGBTransferOETF"];default:return Jt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function vd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+V_(i.getShaderSource(t),o)}else return r}function G_(i,t){let e=H_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var W_={[zc]:"Linear",[Vc]:"Reinhard",[Hc]:"Cineon",[Gc]:"ACESFilmic",[Xc]:"AgX",[$c]:"Neutral",[Wc]:"Custom"};function X_(i,t){let e=W_[t];return e===void 0?(Jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Al=new Z;function $_(){Me.getLuminanceCoefficients(Al);let i=Al.x.toFixed(4),t=Al.y.toFixed(4),e=Al.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function q_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ca).join(`
`)}function Y_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Z_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ca(i){return i!==""}function Md(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Sd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var J_=/^[ \t]*#include +<([\w\d./]+)>/gm;function yh(i){return i.replace(J_,K_)}function K_(i,t){let e=fe[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return yh(e)}var j_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bd(i){return i.replace(j_,Q_)}function Q_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var tx={[ta]:"SHADOWMAP_TYPE_PCF",[hr]:"SHADOWMAP_TYPE_VSM"};function ex(i){return tx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var nx={[dr]:"ENVMAP_MODE_REFRACTION"};function ix(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":nx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var sx={[kc]:"ENVMAP_BLENDING_MULTIPLY",[zu]:"ENVMAP_BLENDING_MIX",[Vu]:"ENVMAP_BLENDING_ADD"};function rx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":sx[i.combine]||"ENVMAP_BLENDING_NONE"}function ax(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=ex(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",f=ix(e),g=rx(e),u=q_(e),p=Y_(r),x=s.createProgram(),S,m,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(S=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ca).join(`
`),S.length>0&&(S+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ca).join(`
`),m.length>0&&(m+=`
`)):(S=[wd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ca).join(`
`),m=[wd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",e.envMap?"#define "+g:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gi?"#define TONE_MAPPING":"",e.toneMapping!==gi?fe.tonemapping_pars_fragment:"",e.toneMapping!==gi?X_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,G_("linearToOutputTexel",e.outputColorSpace),$_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ca).join(`
`)),a=yh(a),a=Md(a,e),a=Sd(a,e),o=yh(o),o=Md(o,e),o=Sd(o,e),a=bd(a),o=bd(o),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,S=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,m=["#define varying in",e.glslVersion===sh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===sh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let b=_+S+a,I=_+m+o,E=xd(s,s.VERTEX_SHADER,b),A=xd(s,s.FRAGMENT_SHADER,I);s.attachShader(x,E),s.attachShader(x,A),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(F){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(x)||"",G=s.getShaderInfoLog(E)||"",k=s.getShaderInfoLog(A)||"",L=B.trim(),W=G.trim(),Q=k.trim(),j=!0,pt=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,E,A);else{let et=vd(s,E,"vertex"),ht=vd(s,A,"fragment");ne("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+L+`
`+et+`
`+ht)}else L!==""?Jt("WebGLProgram: Program Info Log:",L):(W===""||Q==="")&&(pt=!1);pt&&(F.diagnostics={runnable:j,programLog:L,vertexShader:{log:W,prefix:S},fragmentShader:{log:Q,prefix:m}})}s.deleteShader(E),s.deleteShader(A),y=new mr(s,x),T=Z_(s,x)}let y;this.getUniforms=function(){return y===void 0&&C(this),y};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let V=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=s.getProgramParameter(x,k_)),V},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=z_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=A,this}var ox=0,vh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Mh(t),e.set(t,n)),n}},Mh=class{constructor(t){this.id=ox++,this.code=t,this.usedTimes=0}};function lx(i){return i===rs||i===aa||i===oa}function cx(i,t,e,n,s,r){let a=new Br,o=new vh,l=new Set,c=[],f=new Map,g=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function x(y,T,V,F,B,G){let k=F.fog,L=B.geometry,W=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?F.environment:null,Q=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,j=t.get(y.envMap||W,Q),pt=u[y.type],et=n.precision;y.precision!==null&&(et=n.getMaxPrecision(y.precision),et!==y.precision&&Jt("WebGLProgram.getParameters:",y.precision,"not supported, using",et,"instead."));let ht=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,mt=ht!==void 0?ht.length:0,Ht=0;L.morphAttributes.position!==void 0&&(Ht=1),L.morphAttributes.normal!==void 0&&(Ht=2),L.morphAttributes.color!==void 0&&(Ht=3);let te,ot,Pt,Ot;if(pt){let Ct=xi[pt];te=Ct.vertexShader,ot=Ct.fragmentShader}else{te=y.vertexShader,ot=y.fragmentShader;let Ct=o.getVertexShaderStage(y),be=o.getFragmentShaderStage(y);o.update(y,Ct,be),Pt=Ct.id,Ot=be.id}let Yt=i.getRenderTarget(),It=i.state.buffers.depth.getReversed(),oe=B.isInstancedMesh===!0,Ge=B.isBatchedMesh===!0,Kt=!!y.map,Te=!!y.matcap,Ee=!!j,pe=Ee&&j.isPMREMTexture===!0,Ye=!!y.aoMap,We=!!y.lightMap,mn=!!y.bumpMap&&y.wireframe===!1,me=!!y.normalMap,qn=!!y.displacementMap,Ne=!!y.emissiveMap,Rn=!!y.metalnessMap,Mn=!!y.roughnessMap,Cn=y.anisotropy>0,H=y.clearcoat>0,Pn=y.diffuseRoughness>0,Re=y.dispersion>0,Ie=y.retroreflectivity>0,Et=y.iridescence>0,De=y.sheen>0,Wt=y.transmission>0,jt=Cn&&!!y.anisotropyMap,R=H&&!!y.clearcoatMap,v=H&&!!y.clearcoatNormalMap,Y=H&&!!y.clearcoatRoughnessMap,_t=Pn&&!!y.diffuseRoughnessMap,it=Et&&!!y.iridescenceMap,Mt=Et&&!!y.iridescenceThicknessMap,dt=De&&!!y.sheenColorMap,at=De&&!!y.sheenRoughnessMap,nt=!!y.specularMap,Tt=!!y.specularColorMap,N=!!y.specularIntensityMap,ct=Wt&&!!y.transmissionMap,st=Wt&&!!y.thicknessMap,St=!!y.gradientMap,yt=!!y.alphaMap,bt=y.alphaTest>0,Xt=!!y.alphaHash,le=!!y.extensions,gt=gi;y.toneMapped&&(Yt===null||Yt.isXRRenderTarget===!0)&&(gt=i.toneMapping);let $t=pe?j.isCompressedCubeTexture?j.image[0].mipmaps:j.mipmaps:null,ce={shaderID:pt,shaderType:y.type,shaderName:y.name,vertexShader:te,fragmentShader:ot,defines:y.defines,customVertexShaderID:Pt,customFragmentShaderID:Ot,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:et,batching:Ge,batchingColor:Ge&&B._colorsTexture!==null,instancing:oe,instancingColor:oe&&B.instanceColor!==null,instancingMorph:oe&&B.morphTexture!==null,outputColorSpace:Yt===null?i.outputColorSpace:Yt.isXRRenderTarget===!0?Yt.texture.colorSpace:Me.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Kt,matcap:Te,envMap:Ee,envMapMode:Ee&&j.mapping,envMapPMREM:pe,envMapMaxLod:pe?$t.length-1:null,envMapSize:pe?$t[0].width:null,aoMap:Ye,lightMap:We,bumpMap:mn,normalMap:me,displacementMap:qn,emissiveMap:Ne,normalMapObjectSpace:me&&y.normalMapType===Wu,normalMapTangentSpace:me&&y.normalMapType===Tl,packedNormalMap:me&&y.normalMapType===Tl&&lx(y.normalMap.format),metalnessMap:Rn,roughnessMap:Mn,anisotropy:Cn,anisotropyMap:jt,clearcoat:H,clearcoatMap:R,clearcoatNormalMap:v,clearcoatRoughnessMap:Y,diffuseRoughness:Pn,diffuseRoughnessMap:_t,dispersion:Re,retroreflection:Ie,iridescence:Et,iridescenceMap:it,iridescenceThicknessMap:Mt,sheen:De,sheenColorMap:dt,sheenRoughnessMap:at,specularMap:nt,specularColorMap:Tt,specularIntensityMap:N,transmission:Wt,transmissionMap:ct,thicknessMap:st,gradientMap:St,opaque:y.transparent===!1&&y.blending===ur&&y.alphaToCoverage===!1,alphaMap:yt,alphaTest:bt,alphaHash:Xt,combine:y.combine,mapUv:Kt&&p(y.map.channel),aoMapUv:Ye&&p(y.aoMap.channel),lightMapUv:We&&p(y.lightMap.channel),bumpMapUv:mn&&p(y.bumpMap.channel),normalMapUv:me&&p(y.normalMap.channel),displacementMapUv:qn&&p(y.displacementMap.channel),emissiveMapUv:Ne&&p(y.emissiveMap.channel),metalnessMapUv:Rn&&p(y.metalnessMap.channel),roughnessMapUv:Mn&&p(y.roughnessMap.channel),anisotropyMapUv:jt&&p(y.anisotropyMap.channel),clearcoatMapUv:R&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:v&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&p(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:_t&&p(y.diffuseRoughnessMap.channel),iridescenceMapUv:it&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:at&&p(y.sheenRoughnessMap.channel),specularMapUv:nt&&p(y.specularMap.channel),specularColorMapUv:Tt&&p(y.specularColorMap.channel),specularIntensityMapUv:N&&p(y.specularIntensityMap.channel),transmissionMapUv:ct&&p(y.transmissionMap.channel),thicknessMapUv:st&&p(y.thicknessMap.channel),alphaMapUv:yt&&p(y.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(me||Cn),vertexNormals:!!L.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!L.attributes.uv&&(Kt||yt),fog:!!k,useFog:y.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||L.attributes.normal===void 0&&me===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:It,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:Ht,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:G.filter(Ct=>Ct.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:gt,decodeVideoTexture:Kt&&y.map.isVideoTexture===!0&&Me.getTransfer(y.map.colorSpace)===Ae,decodeVideoTextureEmissive:Ne&&y.emissiveMap.isVideoTexture===!0&&Me.getTransfer(y.emissiveMap.colorSpace)===Ae,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===mi,flipSided:y.side===Tn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:le&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&y.extensions.multiDraw===!0||Ge)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ce.vertexUv1s=l.has(1),ce.vertexUv2s=l.has(2),ce.vertexUv3s=l.has(3),l.clear(),ce}function S(y){let T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(let V in y.defines)T.push(V),T.push(y.defines[V]);return y.isRawShaderMaterial===!1&&(m(T,y),_(T,y),T.push(i.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function m(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapPMREM),y.push(T.envMapMaxLod),y.push(T.envMapSize),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.diffuseRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.numSunLights),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numSunLightShadows),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.numLightProbeGrids),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function _(y,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.diffuseRoughness&&a.enable(25),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function b(y){let T=u[y.type],V;if(T){let F=xi[T];V=rd.clone(F.uniforms)}else V=y.uniforms;return V}function I(y,T){let V=f.get(T);return V!==void 0?++V.usedTimes:(V=new ax(i,T,y,s),c.push(V),f.set(T,V)),V}function E(y){if(--y.usedTimes===0){let T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),f.delete(y.cacheKey),y.destroy()}}function A(y){o.remove(y)}function C(){o.dispose()}return{getParameters:x,getProgramCacheKey:S,getUniforms:b,acquireProgram:I,releaseProgram:E,releaseShaderCache:A,programs:c,dispose:C}}function hx(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function ux(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Td(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ed(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,x,S,m,_){let b=i[t];return b===void 0?(b={id:u.id,object:u,geometry:p,material:x,materialVariant:a(u),groupOrder:S,renderOrder:u.renderOrder,z:m,group:_},i[t]=b):(b.id=u.id,b.object=u,b.geometry=p,b.material=x,b.materialVariant=a(u),b.groupOrder=S,b.renderOrder=u.renderOrder,b.z=m,b.group=_),t++,b}function l(u,p,x,S,m,_,b){b.reversedDepth===!0&&(m=-m);let I=o(u,p,x,S,m,_);x.transmission>0?n.push(I):x.transparent===!0?s.push(I):e.push(I)}function c(u,p,x,S,m,_){let b=o(u,p,x,S,m,_);x.transmission>0?n.unshift(b):x.transparent===!0?s.unshift(b):e.unshift(b)}function f(u,p){e.length>1&&e.sort(u||ux),n.length>1&&n.sort(p||Td),s.length>1&&s.sort(p||Td)}function g(){for(let u=t,p=i.length;u<p;u++){let x=i[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:g,sort:f}}function dx(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Ed,i.set(n,[a])):s>=r.length?(a=new Ed,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function fx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new Z,color:new de};break;case"SpotLight":e={position:new Z,direction:new Z,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Z,color:new de,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Z,skyColor:new de,groundColor:new de};break;case"RectAreaLight":e={color:new de,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return i[t.id]=e,e}}}function px(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var mx=0;function gx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function _x(i){let t=new fx,e=px(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Z);let s=new Z,r=new ke,a=new ke;function o(c){let f=0,g=0,u=0;for(let G=0;G<9;G++)n.probe[G].set(0,0,0);let p=0,x=0,S=0,m=0,_=0,b=0,I=0,E=0,A=0,C=0,y=0,T=0,V=0,F=0;c.sort(gx);for(let G=0,k=c.length;G<k;G++){let L=c[G],W=L.color,Q=L.intensity,j=L.distance,pt=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===rs?pt=L.shadow.map.texture:pt=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)f+=W.r*Q,g+=W.g*Q,u+=W.b*Q;else if(L.isLightProbe){for(let et=0;et<9;et++)n.probe[et].addScaledVector(L.sh.coefficients[et],Q);F++}else if(L.isSunLight){let et=t.get(L);if(et.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ht=L.shadow,mt=e.get(L);mt.shadowIntensity=ht.intensity,mt.shadowBias=ht.bias,mt.shadowNormalBias=ht.normalBias,mt.shadowRadius=ht.radius,mt.shadowMapSize.copy(ht.mapSize).multiply(ht.getFrameExtents()),n.sunShadow[x]=mt,n.sunShadowMap[x]=pt;let Ht=ht.getViewportCount();for(let te=0;te<Ht;te++)n.sunShadowMatrix[S+te]=ht.getMatrix(te),n.sunShadowCascade[S+te]=ht._cascadeData[te];S+=Ht,x++}n.sun[p]=et,p++}else if(L.isDirectionalLight){let et=t.get(L);if(et.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ht=L.shadow,mt=e.get(L);mt.shadowIntensity=ht.intensity,mt.shadowBias=ht.bias,mt.shadowNormalBias=ht.normalBias,mt.shadowRadius=ht.radius,mt.shadowMapSize=ht.mapSize,n.directionalShadow[m]=mt,n.directionalShadowMap[m]=pt,n.directionalShadowMatrix[m]=L.shadow.matrix,A++}n.directional[m]=et,m++}else if(L.isSpotLight){let et=t.get(L);et.position.setFromMatrixPosition(L.matrixWorld),et.color.copy(W).multiplyScalar(Q),et.distance=j,et.coneCos=Math.cos(L.angle),et.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),et.decay=L.decay,n.spot[b]=et;let ht=L.shadow;if(L.map&&(n.spotLightMap[T]=L.map,T++,ht.updateMatrices(L),L.castShadow&&V++),n.spotLightMatrix[b]=ht.matrix,L.castShadow){let mt=e.get(L);mt.shadowIntensity=ht.intensity,mt.shadowBias=ht.bias,mt.shadowNormalBias=ht.normalBias,mt.shadowRadius=ht.radius,mt.shadowMapSize=ht.mapSize,n.spotShadow[b]=mt,n.spotShadowMap[b]=pt,y++}b++}else if(L.isRectAreaLight){let et=t.get(L);et.color.copy(W).multiplyScalar(Q),et.halfWidth.set(L.width*.5,0,0),et.halfHeight.set(0,L.height*.5,0),n.rectArea[I]=et,I++}else if(L.isPointLight){let et=t.get(L);if(et.color.copy(L.color).multiplyScalar(L.intensity),et.distance=L.distance,et.decay=L.decay,L.castShadow){let ht=L.shadow,mt=e.get(L);mt.shadowIntensity=ht.intensity,mt.shadowBias=ht.bias,mt.shadowNormalBias=ht.normalBias,mt.shadowRadius=ht.radius,mt.shadowMapSize=ht.mapSize,mt.shadowCameraNear=ht.camera.near,mt.shadowCameraFar=ht.camera.far,n.pointShadow[_]=mt,n.pointShadowMap[_]=pt,n.pointShadowMatrix[_]=L.shadow.matrix,C++}n.point[_]=et,_++}else if(L.isHemisphereLight){let et=t.get(L);et.skyColor.copy(L.color).multiplyScalar(Q),et.groundColor.copy(L.groundColor).multiplyScalar(Q),n.hemi[E]=et,E++}}I>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Dt.LTC_FLOAT_1,n.rectAreaLTC2=Dt.LTC_FLOAT_2):(n.rectAreaLTC1=Dt.LTC_HALF_1,n.rectAreaLTC2=Dt.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=g,n.ambient[2]=u;let B=n.hash;(B.sunLength!==p||B.directionalLength!==m||B.pointLength!==_||B.spotLength!==b||B.rectAreaLength!==I||B.hemiLength!==E||B.numSunShadows!==x||B.numDirectionalShadows!==A||B.numPointShadows!==C||B.numSpotShadows!==y||B.numSpotMaps!==T||B.numLightProbes!==F)&&(n.sun.length=p,n.directional.length=m,n.spot.length=b,n.rectArea.length=I,n.point.length=_,n.hemi.length=E,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=C,n.pointShadowMap.length=C,n.pointShadowMatrix.length=C,n.spotShadow.length=y,n.spotShadowMap.length=y,n.spotLightMatrix.length=y+T-V,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=V,n.numLightProbes=F,B.sunLength=p,B.directionalLength=m,B.pointLength=_,B.spotLength=b,B.rectAreaLength=I,B.hemiLength=E,B.numSunShadows=x,B.numDirectionalShadows=A,B.numPointShadows=C,B.numSpotShadows=y,B.numSpotMaps=T,B.numLightProbes=F,n.version=mx++)}function l(c,f){let g=0,u=0,p=0,x=0,S=0,m=0,_=f.matrixWorldInverse;for(let b=0,I=c.length;b<I;b++){let E=c[b];if(E.isSunLight){let A=n.sun[g];A.direction.setFromMatrixPosition(E.matrixWorld),A.direction.transformDirection(_),g++}else if(E.isDirectionalLight){let A=n.directional[u];A.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(_),u++}else if(E.isSpotLight){let A=n.spot[x];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(_),A.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(_),x++}else if(E.isRectAreaLight){let A=n.rectArea[S];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(_),a.identity(),r.copy(E.matrixWorld),r.premultiply(_),a.extractRotation(r),A.halfWidth.set(E.width*.5,0,0),A.halfHeight.set(0,E.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),S++}else if(E.isPointLight){let A=n.point[p];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(_),p++}else if(E.isHemisphereLight){let A=n.hemi[m];A.direction.setFromMatrixPosition(E.matrixWorld),A.direction.transformDirection(_),m++}}}return{setup:o,setupView:l,state:n}}function Ad(i){let t=new _x(i),e=[],n=[],s=[];function r(g){f.camera=g,e.length=0,n.length=0,s.length=0}function a(g){g.isLightProbeGrid?s.push(g):e.push(g)}function o(g){n.push(g)}function l(){t.setup(e),s.sort((g,u)=>g.priority-u.priority||g.id-u.id)}function c(g){t.setupView(e,g)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function xx(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Ad(i),t.set(s,[o])):r>=a.length?(o=new Ad(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var yx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vx=`uniform sampler2D shadow_pass;
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
}`,Mx=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],Sx=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],Rd=new ke,la=new Z,mh=new Z;function bx(i,t,e){let n=new Ki,s=new ie,r=new ie,a=new ze,o=new Eo,l=new Ao,c={},f=e.maxTextureSize,g={[ss]:Tn,[Tn]:ss,[mi]:mi},u=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:yx,fragmentShader:vx}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let x=new Ln;x.setAttribute("position",new Vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new wn(x,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ta;let _=this.type;this.render=function(C,y,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;this.type===Mu&&(Jt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ta);let V=i.getRenderTarget(),F=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),G=i.state;G.setBlending(ws),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let k=_!==this.type;k&&y.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(W=>W.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,W=C.length;L<W;L++){let Q=C[L],j=Q.shadow;if(j===void 0){Jt("WebGLShadowMap:",Q,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);let pt=j.getFrameExtents();s.multiply(pt),r.copy(j.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/pt.x),s.x=r.x*pt.x,j.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/pt.y),s.y=r.y*pt.y,j.mapSize.y=r.y));let et=i.state.buffers.depth.getReversed();if(j.camera._reversedDepth=et,j.map===null||k===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===hr){if(Q.isPointLight){Jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new Gn(s.x,s.y,{format:rs,type:ai,minFilter:bn,magFilter:bn,generateMipmaps:!1}),j.map.texture.name=Q.name+".shadowMap",j.map.depthTexture=new Ni(s.x,s.y,ri),j.map.depthTexture.name=Q.name+".shadowMapDepth",j.map.depthTexture.format=Ii,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=on,j.map.depthTexture.magFilter=on}else Q.isPointLight?(j.map=new ha(s.x),j.map.depthTexture=new Gr(s.x,si)):(j.map=new Gn(s.x,s.y),j.map.depthTexture=new Ni(s.x,s.y,si)),j.map.depthTexture.name=Q.name+".shadowMap",j.map.depthTexture.format=Ii,this.type===ta?(j.map.depthTexture.compareFunction=et?nh:eh,j.map.depthTexture.minFilter=bn,j.map.depthTexture.magFilter=bn):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=on,j.map.depthTexture.magFilter=on);j.camera.updateProjectionMatrix()}j.map.isWebGLCubeRenderTarget!==!0&&(j.map.width!==s.x||j.map.height!==s.y)&&j.map.setSize(s.x,s.y);let ht=j.map.isWebGLCubeRenderTarget?6:j.getViewportCount();Q.isPointLight!==!0&&j.updateMatrices(Q,T);let mt=(j.camera.layers.mask&4294967294)!==0?j.camera.layers:T.layers;for(let Ht=0;Ht<ht;Ht++){let te=j.getCamera(Ht);if(Q.isPointLight){let ot=j.camera,Pt=j.matrix,Ot=Q.distance||ot.far;Ot!==ot.far&&(ot.far=Ot,ot.updateProjectionMatrix()),la.setFromMatrixPosition(Q.matrixWorld),ot.position.copy(la),mh.copy(ot.position),mh.add(Mx[Ht]),ot.up.copy(Sx[Ht]),ot.lookAt(mh),ot.updateMatrixWorld(),Pt.makeTranslation(-la.x,-la.y,-la.z),Rd.multiplyMatrices(ot.projectionMatrix,ot.matrixWorldInverse),j._frustum.setFromProjectionMatrix(Rd,ot.coordinateSystem,ot.reversedDepth)}if(j.map.isWebGLCubeRenderTarget)i.setRenderTarget(j.map,Ht),i.clear();else{Ht===0&&(i.setRenderTarget(j.map),i.clear());let ot=j.getViewport(Ht);a.set(r.x*ot.x,r.y*ot.y,r.x*ot.z,r.y*ot.w),G.viewport(a)}n=j.getFrustum(Ht),E(y,T,te,Q,mt,this.type)}j.isPointLightShadow!==!0&&this.type===hr&&b(j,T),j.needsUpdate=!1}_=this.type,m.needsUpdate=!1,i.setRenderTarget(V,F,B)};function b(C,y){let T=t.update(S);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null?C.mapPass=new Gn(s.x,s.y,{format:rs,type:ai}):(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)&&C.mapPass.setSize(C.map.width,C.map.height),u.uniforms.shadow_pass.value=C.map.depthTexture,u.uniforms.resolution.value.set(C.map.width,C.map.height),u.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(y,null,T,u,S,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value.set(C.map.width,C.map.height),p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(y,null,T,p,S,null)}function I(C,y,T,V){let F=null,B=T.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(B!==void 0)F=B;else if(F=T.isPointLight===!0?l:o,i.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){let G=F.uuid,k=y.uuid,L=c[G];L===void 0&&(L={},c[G]=L);let W=L[k];W===void 0&&(W=F.clone(),L[k]=W,y.addEventListener("dispose",A)),F=W}if(F.visible=y.visible,F.wireframe=y.wireframe,V===hr?F.side=y.shadowSide!==null?y.shadowSide:y.side:F.side=y.shadowSide!==null?y.shadowSide:g[y.side],F.alphaMap=y.alphaMap,F.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,F.map=y.map,F.clipShadows=y.clipShadows,F.clippingPlanes=y.clippingPlanes,F.clipIntersection=y.clipIntersection,F.displacementMap=y.displacementMap,F.displacementScale=y.displacementScale,F.displacementBias=y.displacementBias,F.wireframeLinewidth=y.wireframeLinewidth,F.linewidth=y.linewidth,T.isPointLight===!0&&F.isMeshDistanceMaterial===!0){let G=i.properties.get(F);G.light=T}return F}function E(C,y,T,V,F,B){if(C.visible===!1)return;if(C.layers.test(F)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&B===hr)&&(!C.frustumCulled||C.intersectsFrustum(n))){C.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,C.matrixWorld);let L=t.update(C),W=C.material;if(Array.isArray(W)){let Q=L.groups;for(let j=0,pt=Q.length;j<pt;j++){let et=Q[j],ht=W[et.materialIndex];if(ht&&ht.visible){let mt=I(C,ht,V,B);C.onBeforeShadow(i,C,y,T,L,mt,et),i.renderBufferDirect(T,null,L,mt,C,et),C.onAfterShadow(i,C,y,T,L,mt,et)}}}else if(W.visible){let Q=I(C,W,V,B);C.onBeforeShadow(i,C,y,T,L,Q,null),i.renderBufferDirect(T,null,L,Q,C,null),C.onAfterShadow(i,C,y,T,L,Q,null)}}let k=C.children;for(let L=0,W=k.length;L<W;L++)E(k[L],y,T,V,F,B)}function A(C){C.target.removeEventListener("dispose",A);for(let T in c){let V=c[T],F=C.target.uuid;F in V&&(V[F].dispose(),delete V[F])}}}function wx(i,t){function e(){let N=!1,ct=new ze,st=null,St=new ze(0,0,0,0);return{setMask:function(yt){st!==yt&&!N&&(i.colorMask(yt,yt,yt,yt),st=yt)},setLocked:function(yt){N=yt},setClear:function(yt,bt,Xt,le,gt){gt===!0&&(yt*=le,bt*=le,Xt*=le),ct.set(yt,bt,Xt,le),St.equals(ct)===!1&&(i.clearColor(yt,bt,Xt,le),St.copy(ct))},reset:function(){N=!1,st=null,St.set(-1,0,0,0)}}}function n(){let N=!1,ct=!1,st=null,St=null,yt=null;return{setReversed:function(bt){if(ct!==bt){let Xt=t.get("EXT_clip_control");bt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT),ct=bt;let le=yt;yt=null,this.setClear(le)}},getReversed:function(){return ct},setTest:function(bt){bt?It(i.DEPTH_TEST):oe(i.DEPTH_TEST)},setMask:function(bt){st!==bt&&!N&&(i.depthMask(bt),st=bt)},setFunc:function(bt){if(ct&&(bt=ed[bt]),St!==bt){switch(bt){case ro:i.depthFunc(i.NEVER);break;case ao:i.depthFunc(i.ALWAYS);break;case oo:i.depthFunc(i.LESS);break;case tr:i.depthFunc(i.LEQUAL);break;case lo:i.depthFunc(i.EQUAL);break;case co:i.depthFunc(i.GEQUAL);break;case ho:i.depthFunc(i.GREATER);break;case uo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}St=bt}},setLocked:function(bt){N=bt},setClear:function(bt){yt!==bt&&(yt=bt,ct&&(bt=1-bt),i.clearDepth(bt))},reset:function(){N=!1,st=null,St=null,yt=null,ct=!1}}}function s(){let N=!1,ct=null,st=null,St=null,yt=null,bt=null,Xt=null,le=null,gt=null;return{setTest:function($t){N||($t?It(i.STENCIL_TEST):oe(i.STENCIL_TEST))},setMask:function($t){ct!==$t&&!N&&(i.stencilMask($t),ct=$t)},setFunc:function($t,ce,Ct){(st!==$t||St!==ce||yt!==Ct)&&(i.stencilFunc($t,ce,Ct),st=$t,St=ce,yt=Ct)},setOp:function($t,ce,Ct){(bt!==$t||Xt!==ce||le!==Ct)&&(i.stencilOp($t,ce,Ct),bt=$t,Xt=ce,le=Ct)},setLocked:function($t){N=$t},setClear:function($t){gt!==$t&&(i.clearStencil($t),gt=$t)},reset:function(){N=!1,ct=null,st=null,St=null,yt=null,bt=null,Xt=null,le=null,gt=null}}}let r=new e,a=new n,o=new s,l={},c=new WeakMap,f={},g={},u={},p=new WeakMap,x=[],S=null,m=!1,_=null,b=null,I=null,E=null,A=null,C=null,y=null,T=new de(0,0,0),V=0,F=!1,B=null,G=null,k=null,L=null,W=null,Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,pt=0,et=i.getParameter(i.VERSION);et.indexOf("WebGL")!==-1?(pt=parseFloat(/^WebGL (\d)/.exec(et)[1]),j=pt>=1):et.indexOf("OpenGL ES")!==-1&&(pt=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),j=pt>=2);let ht=null,mt={},Ht=i.getParameter(i.SCISSOR_BOX),te=i.getParameter(i.VIEWPORT),ot=new ze().fromArray(Ht),Pt=new ze().fromArray(te);function Ot(N,ct,st,St){let yt=new Uint8Array(4),bt=i.createTexture();i.bindTexture(N,bt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<st;Xt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ct,0,i.RGBA,1,1,St,0,i.RGBA,i.UNSIGNED_BYTE,yt):i.texImage2D(ct+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,yt);return bt}let Yt={};Yt[i.TEXTURE_2D]=Ot(i.TEXTURE_2D,i.TEXTURE_2D,1),Yt[i.TEXTURE_CUBE_MAP]=Ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Yt[i.TEXTURE_2D_ARRAY]=Ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Yt[i.TEXTURE_3D]=Ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),It(i.DEPTH_TEST),a.setFunc(tr),mn(!1),me(Dc),It(i.CULL_FACE),Ye(ws);function It(N){f[N]!==!0&&(i.enable(N),f[N]=!0)}function oe(N){f[N]!==!1&&(i.disable(N),f[N]=!1)}function Ge(N,ct){return u[N]!==ct?(i.bindFramebuffer(N,ct),u[N]=ct,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ct),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ct),!0):!1}function Kt(N,ct){let st=x,St=!1;if(N){st=p.get(ct),st===void 0&&(st=[],p.set(ct,st));let yt=N.textures;if(st.length!==yt.length||st[0]!==i.COLOR_ATTACHMENT0){for(let bt=0,Xt=yt.length;bt<Xt;bt++)st[bt]=i.COLOR_ATTACHMENT0+bt;st.length=yt.length,St=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,St=!0);St&&i.drawBuffers(st)}function Te(N){return S!==N?(i.useProgram(N),S=N,!0):!1}let Ee={[Ts]:i.FUNC_ADD,[bu]:i.FUNC_SUBTRACT,[wu]:i.FUNC_REVERSE_SUBTRACT};Ee[Tu]=i.MIN,Ee[Eu]=i.MAX;let pe={[Au]:i.ZERO,[Ru]:i.ONE,[Cu]:i.SRC_COLOR,[Oc]:i.SRC_ALPHA,[Uu]:i.SRC_ALPHA_SATURATE,[Du]:i.DST_COLOR,[Iu]:i.DST_ALPHA,[Pu]:i.ONE_MINUS_SRC_COLOR,[Bc]:i.ONE_MINUS_SRC_ALPHA,[Nu]:i.ONE_MINUS_DST_COLOR,[Lu]:i.ONE_MINUS_DST_ALPHA,[Fu]:i.CONSTANT_COLOR,[Ou]:i.ONE_MINUS_CONSTANT_COLOR,[Bu]:i.CONSTANT_ALPHA,[ku]:i.ONE_MINUS_CONSTANT_ALPHA};function Ye(N,ct,st,St,yt,bt,Xt,le,gt,$t){if(N===ws){m===!0&&(oe(i.BLEND),m=!1);return}if(m===!1&&(It(i.BLEND),m=!0),N!==Su){if(N!==_||$t!==F){if((b!==Ts||A!==Ts)&&(i.blendEquation(i.FUNC_ADD),b=Ts,A=Ts),$t)switch(N){case ur:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nc:i.blendFunc(i.ONE,i.ONE);break;case Uc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ne("WebGLState: Invalid blending: ",N);break}else switch(N){case ur:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Uc:ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fc:ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ne("WebGLState: Invalid blending: ",N);break}I=null,E=null,C=null,y=null,T.set(0,0,0),V=0,_=N,F=$t}return}yt=yt||ct,bt=bt||st,Xt=Xt||St,(ct!==b||yt!==A)&&(i.blendEquationSeparate(Ee[ct],Ee[yt]),b=ct,A=yt),(st!==I||St!==E||bt!==C||Xt!==y)&&(i.blendFuncSeparate(pe[st],pe[St],pe[bt],pe[Xt]),I=st,E=St,C=bt,y=Xt),(le.equals(T)===!1||gt!==V)&&(i.blendColor(le.r,le.g,le.b,gt),T.copy(le),V=gt),_=N,F=!1}function We(N,ct){N.side===mi?oe(i.CULL_FACE):It(i.CULL_FACE);let st=N.side===Tn;ct&&(st=!st),mn(st),N.blending===ur&&N.transparent===!1?Ye(ws):Ye(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let St=N.stencilWrite;o.setTest(St),St&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ne(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?It(i.SAMPLE_ALPHA_TO_COVERAGE):oe(i.SAMPLE_ALPHA_TO_COVERAGE)}function mn(N){B!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),B=N)}function me(N){N!==yu?(It(i.CULL_FACE),N!==G&&(N===Dc?i.cullFace(i.BACK):N===vu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):oe(i.CULL_FACE),G=N}function qn(N){N!==k&&(j&&i.lineWidth(N),k=N)}function Ne(N,ct,st){N?(It(i.POLYGON_OFFSET_FILL),(L!==ct||W!==st)&&(L=ct,W=st,a.getReversed()&&(ct=-ct,st=-st),i.polygonOffset(ct,st))):oe(i.POLYGON_OFFSET_FILL)}function Rn(N){N?It(i.SCISSOR_TEST):oe(i.SCISSOR_TEST)}function Mn(N){N===void 0&&(N=i.TEXTURE0+Q-1),ht!==N&&(i.activeTexture(N),ht=N)}function Cn(N,ct,st){st===void 0&&(ht===null?st=i.TEXTURE0+Q-1:st=ht);let St=mt[st];St===void 0&&(St={type:void 0,texture:void 0},mt[st]=St),(St.type!==N||St.texture!==ct)&&(ht!==st&&(i.activeTexture(st),ht=st),i.bindTexture(N,ct||Yt[N]),St.type=N,St.texture=ct)}function H(){let N=mt[ht];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Pn(){try{i.compressedTexImage2D(...arguments)}catch(N){ne("WebGLState:",N)}}function Re(){try{i.compressedTexImage3D(...arguments)}catch(N){ne("WebGLState:",N)}}function Ie(){try{i.texSubImage2D(...arguments)}catch(N){ne("WebGLState:",N)}}function Et(){try{i.texSubImage3D(...arguments)}catch(N){ne("WebGLState:",N)}}function De(){try{i.compressedTexSubImage2D(...arguments)}catch(N){ne("WebGLState:",N)}}function Wt(){try{i.compressedTexSubImage3D(...arguments)}catch(N){ne("WebGLState:",N)}}function jt(){try{i.texStorage2D(...arguments)}catch(N){ne("WebGLState:",N)}}function R(){try{i.texStorage3D(...arguments)}catch(N){ne("WebGLState:",N)}}function v(){try{i.texImage2D(...arguments)}catch(N){ne("WebGLState:",N)}}function Y(){try{i.texImage3D(...arguments)}catch(N){ne("WebGLState:",N)}}function _t(N){return g[N]!==void 0?g[N]:i.getParameter(N)}function it(N,ct){g[N]!==ct&&(i.pixelStorei(N,ct),g[N]=ct)}function Mt(N){ot.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),ot.copy(N))}function dt(N){Pt.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Pt.copy(N))}function at(N,ct){let st=c.get(ct);st===void 0&&(st=new WeakMap,c.set(ct,st));let St=st.get(N);St===void 0&&(St=i.getUniformBlockIndex(ct,N.name),i.uniformBlockBinding(ct,St,St),st.set(N,St))}function nt(N,ct,st){let yt=c.get(ct).get(N);l[yt]!==st&&(i.bindBufferBase(i.UNIFORM_BUFFER,yt,st),l[yt]=st)}function Tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},g={},ht=null,mt={},u={},l={},p=new WeakMap,x=[],S=null,m=!1,_=null,b=null,I=null,E=null,A=null,C=null,y=null,T=new de(0,0,0),V=0,F=!1,B=null,G=null,k=null,L=null,W=null,ot.set(0,0,i.canvas.width,i.canvas.height),Pt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:It,disable:oe,bindFramebuffer:Ge,drawBuffers:Kt,useProgram:Te,setBlending:Ye,setMaterial:We,setFlipSided:mn,setCullFace:me,setLineWidth:qn,setPolygonOffset:Ne,setScissorTest:Rn,activeTexture:Mn,bindTexture:Cn,unbindTexture:H,compressedTexImage2D:Pn,compressedTexImage3D:Re,texImage2D:v,texImage3D:Y,pixelStorei:it,getParameter:_t,updateUBOMapping:at,uniformBlockBinding:nt,texStorage2D:jt,texStorage3D:R,texSubImage2D:Ie,texSubImage3D:Et,compressedTexSubImage2D:De,compressedTexSubImage3D:Wt,scissor:Mt,viewport:dt,reset:Tt}}function Tx(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ie,f=new WeakMap,g=new Set,u,p=new WeakMap,x=new Set,S=new FinalizationRegistry(R=>x.delete(R)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,v){return m?new OffscreenCanvas(R,v):Fr("canvas")}function b(R,v,Y){let _t=1,it=jt(R);if((it.width>Y||it.height>Y)&&(_t=Y/Math.max(it.width,it.height)),_t<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let Mt=Math.floor(_t*it.width),dt=Math.floor(_t*it.height);u===void 0&&(u=_(Mt,dt));let at=v?_(Mt,dt):u;return at.width=Mt,at.height=dt,at.getContext("2d").drawImage(R,0,0,Mt,dt),Jt("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+Mt+"x"+dt+")."),at}else return"data"in R&&Jt("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),R;return R}function I(R){return R.generateMipmaps}function E(R){i.generateMipmap(R)}function A(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function C(R,v,Y,_t,it,Mt=!1){if(R!==null){if(i[R]!==void 0)return i[R];Jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let dt;_t&&(dt=t.get("EXT_texture_norm16"),dt||Jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let at=v;if(v===i.RED&&(Y===i.FLOAT&&(at=i.R32F),Y===i.HALF_FLOAT&&(at=i.R16F),Y===i.UNSIGNED_BYTE&&(at=i.R8),Y===i.UNSIGNED_SHORT&&dt&&(at=dt.R16_EXT),Y===i.SHORT&&dt&&(at=dt.R16_SNORM_EXT)),v===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(at=i.R8UI),Y===i.UNSIGNED_SHORT&&(at=i.R16UI),Y===i.UNSIGNED_INT&&(at=i.R32UI),Y===i.BYTE&&(at=i.R8I),Y===i.SHORT&&(at=i.R16I),Y===i.INT&&(at=i.R32I)),v===i.RG&&(Y===i.FLOAT&&(at=i.RG32F),Y===i.HALF_FLOAT&&(at=i.RG16F),Y===i.UNSIGNED_BYTE&&(at=i.RG8),Y===i.UNSIGNED_SHORT&&dt&&(at=dt.RG16_EXT),Y===i.SHORT&&dt&&(at=dt.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(at=i.RG8UI),Y===i.UNSIGNED_SHORT&&(at=i.RG16UI),Y===i.UNSIGNED_INT&&(at=i.RG32UI),Y===i.BYTE&&(at=i.RG8I),Y===i.SHORT&&(at=i.RG16I),Y===i.INT&&(at=i.RG32I)),v===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(at=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(at=i.RGB16UI),Y===i.UNSIGNED_INT&&(at=i.RGB32UI),Y===i.BYTE&&(at=i.RGB8I),Y===i.SHORT&&(at=i.RGB16I),Y===i.INT&&(at=i.RGB32I)),v===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(at=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(at=i.RGBA16UI),Y===i.UNSIGNED_INT&&(at=i.RGBA32UI),Y===i.BYTE&&(at=i.RGBA8I),Y===i.SHORT&&(at=i.RGBA16I),Y===i.INT&&(at=i.RGBA32I)),v===i.RGB&&(Y===i.UNSIGNED_SHORT&&dt&&(at=dt.RGB16_EXT),Y===i.SHORT&&dt&&(at=dt.RGB16_SNORM_EXT),Y===i.UNSIGNED_INT_5_9_9_9_REV&&(at=i.RGB9_E5),Y===i.UNSIGNED_INT_10F_11F_11F_REV&&(at=i.R11F_G11F_B10F)),v===i.RGBA){let nt=Mt?Ur:Me.getTransfer(it);Y===i.FLOAT&&(at=i.RGBA32F),Y===i.HALF_FLOAT&&(at=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(at=nt===Ae?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT&&dt&&(at=dt.RGBA16_EXT),Y===i.SHORT&&dt&&(at=dt.RGBA16_SNORM_EXT),Y===i.UNSIGNED_SHORT_4_4_4_4&&(at=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(at=i.RGB5_A1)}return(at===i.R16F||at===i.R32F||at===i.RG16F||at===i.RG32F||at===i.RGBA16F||at===i.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function y(R,v){let Y;return R?v===null||v===si||v===As?Y=i.DEPTH24_STENCIL8:v===ri?Y=i.DEPTH32F_STENCIL8:v===fr&&(Y=i.DEPTH24_STENCIL8,Jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===si||v===As?Y=i.DEPTH_COMPONENT24:v===ri?Y=i.DEPTH_COMPONENT32F:v===fr&&(Y=i.DEPTH_COMPONENT16),Y}function T(R,v){return I(R)===!0||R.isFramebufferTexture&&R.minFilter!==on&&R.minFilter!==bn?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function V(R){let v=new WeakRef(R);n.get(R).__ref=v,x.add(v),S.register(R,v,v)}function F(R){let v=n.get(R).__ref;v!==void 0&&(x.delete(v),S.unregister(v))}function B(R){k(R.target)}function G(R){L(R.target)}function k(R){R.removeEventListener("dispose",B),F(R),Q(R),R.isVideoTexture&&f.delete(R),R.isHTMLTexture&&g.delete(R)}function L(R){R.removeEventListener("dispose",G),F(R),pt(R)}function W(){for(let R of x){let v=R.deref();v!==void 0&&(v.isRenderTarget===!0?L(v):k(v))}x.clear(),g.clear()}function Q(R){let v=n.get(R);if(v.__webglInit===void 0)return;let Y=R.source,_t=p.get(Y);if(_t){let it=_t[v.__cacheKey];it.usedTimes--,it.usedTimes===0&&j(R),Object.keys(_t).length===0&&p.delete(Y)}n.remove(R)}function j(R){let v=n.get(R);i.deleteTexture(v.__webglTexture);let Y=R.source,_t=p.get(Y);delete _t[v.__cacheKey],a.memory.textures--}function pt(R){let v=n.get(R);v.__depthDisposeCallback&&v.__depthDisposeCallback();let Y=R.depthTexture;if(Y&&Y.renderTarget===R&&k(Y),R.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(v.__webglFramebuffer[it]))for(let Mt=0;Mt<v.__webglFramebuffer[it].length;Mt++)i.deleteFramebuffer(v.__webglFramebuffer[it][Mt]);else i.deleteFramebuffer(v.__webglFramebuffer[it]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[it])}else{if(Array.isArray(v.__webglFramebuffer))for(let it=0;it<v.__webglFramebuffer.length;it++)i.deleteFramebuffer(v.__webglFramebuffer[it]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let it=0;it<v.__webglColorRenderbuffer.length;it++)v.__webglColorRenderbuffer[it]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[it]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let _t=R.textures;for(let it=0,Mt=_t.length;it<Mt;it++){let dt=n.get(_t[it]);dt.__webglTexture&&(i.deleteTexture(dt.__webglTexture),a.memory.textures--),n.remove(_t[it])}n.remove(R)}let et=0;function ht(){et=0}function mt(){return et}function Ht(R){et=R}function te(){let R=et;return R>=s.maxTextures&&Jt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),et+=1,R}function ot(R){let v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.mipmapsAutoUpdate),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function Pt(R,v){let Y=n.get(R);if(R.isVideoTexture&&De(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&Y.__version!==R.version){let _t=R.image;if(_t===null)Jt("WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)Jt("WebGLRenderer: Texture marked for update but image is incomplete");else{We(Y,R,v);return}}else R.isExternalTexture&&(Y.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+v)}function Ot(R,v){let Y=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&Y.__version!==R.version){We(Y,R,v);return}else R.isExternalTexture&&(Y.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+v)}function Yt(R,v){let Y=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&Y.__version!==R.version){We(Y,R,v);return}e.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+v)}function It(R,v){let Y=n.get(R);if(R.version>0&&Y.__version!==R.version){mn(Y,R,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+v)}let oe={[fo]:i.REPEAT,[di]:i.CLAMP_TO_EDGE,[po]:i.MIRRORED_REPEAT},Ge={[on]:i.NEAREST,[Hu]:i.NEAREST_MIPMAP_NEAREST,[ea]:i.NEAREST_MIPMAP_LINEAR,[bn]:i.LINEAR,[Ho]:i.LINEAR_MIPMAP_NEAREST,[Ui]:i.LINEAR_MIPMAP_LINEAR},Kt={[$u]:i.NEVER,[ih]:i.ALWAYS,[qu]:i.LESS,[eh]:i.LEQUAL,[Yu]:i.EQUAL,[nh]:i.GEQUAL,[Zu]:i.GREATER,[Ju]:i.NOTEQUAL};function Te(R,v){if(v.type===ri&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===bn||v.magFilter===Ho||v.magFilter===ea||v.magFilter===Ui||v.minFilter===bn||v.minFilter===Ho||v.minFilter===ea||v.minFilter===Ui)&&Jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,oe[v.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,oe[v.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,oe[v.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Ge[v.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Ge[v.minFilter]),v.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Kt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===on||v.minFilter!==ea&&v.minFilter!==Ui||v.type===ri&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let Y=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Ee(R,v){let Y=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",B),V(v));let _t=v.source,it=p.get(_t);it===void 0&&(it={},p.set(_t,it));let Mt=ot(v);if(Mt!==R.__cacheKey){it[Mt]===void 0&&(it[Mt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),it[Mt].usedTimes++;let dt=it[R.__cacheKey];dt!==void 0&&(it[R.__cacheKey].usedTimes--,dt.usedTimes===0&&j(v)),R.__cacheKey=Mt,R.__webglTexture=it[Mt].texture}return Y}function pe(R,v,Y){return Math.floor(Math.floor(R/Y)/v)}function Ye(R,v,Y,_t){let Mt=R.updateRanges;if(Mt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,Y,_t,v.data);else{Mt.sort((N,ct)=>N.start-ct.start);let dt=0;for(let N=1;N<Mt.length;N++){let ct=Mt[dt],st=Mt[N],St=ct.start+ct.count,yt=pe(st.start,v.width,4),bt=pe(ct.start,v.width,4);st.start<=St+1&&yt===bt&&pe(st.start+st.count-1,v.width,4)===yt?ct.count=Math.max(ct.count,st.start+st.count-ct.start):(++dt,Mt[dt]=st)}Mt.length=dt+1;let at=e.getParameter(i.UNPACK_ROW_LENGTH),nt=e.getParameter(i.UNPACK_SKIP_PIXELS),Tt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let N=0,ct=Mt.length;N<ct;N++){let st=Mt[N],St=Math.floor(st.start/4),yt=Math.ceil(st.count/4),bt=St%v.width,Xt=Math.floor(St/v.width),le=yt,gt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,bt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Xt),e.texSubImage2D(i.TEXTURE_2D,0,bt,Xt,le,gt,Y,_t,v.data)}R.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,at),e.pixelStorei(i.UNPACK_SKIP_PIXELS,nt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Tt)}}function We(R,v,Y){let _t=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(_t=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(_t=i.TEXTURE_3D);let it=Ee(R,v),Mt=v.source;e.bindTexture(_t,R.__webglTexture,i.TEXTURE0+Y);let dt=n.get(Mt);if(Mt.version!==dt.__version||it===!0){if(e.activeTexture(i.TEXTURE0+Y),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let gt=Me.getPrimaries(Me.workingColorSpace),$t=v.colorSpace===Oi?null:Me.getPrimaries(v.colorSpace),ce=v.colorSpace===Oi||gt===$t?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce)}e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let nt=b(v.image,!1,s.maxTextureSize);nt=Wt(v,nt);let Tt=r.convert(v.format,v.colorSpace),N=r.convert(v.type),ct=C(v.internalFormat,Tt,N,v.normalized,v.colorSpace,v.isVideoTexture);Te(_t,v);let st,St=v.mipmaps,yt=v.isVideoTexture!==!0,bt=dt.__version===void 0||it===!0,Xt=Mt.dataReady,le=T(v,nt);if(v.isDepthTexture)ct=y(v.format===Fi,v.type),bt&&(yt?e.texStorage2D(i.TEXTURE_2D,1,ct,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,ct,nt.width,nt.height,0,Tt,N,null));else if(v.isDataTexture)if(St.length>0){yt&&bt&&e.texStorage2D(i.TEXTURE_2D,le,ct,St[0].width,St[0].height);for(let gt=0,$t=St.length;gt<$t;gt++)st=St[gt],yt?Xt&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,st.width,st.height,Tt,N,st.data):e.texImage2D(i.TEXTURE_2D,gt,ct,st.width,st.height,0,Tt,N,st.data);v.generateMipmaps=!1}else yt?(bt&&e.texStorage2D(i.TEXTURE_2D,le,ct,nt.width,nt.height),Xt&&Ye(v,nt,Tt,N)):e.texImage2D(i.TEXTURE_2D,0,ct,nt.width,nt.height,0,Tt,N,nt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){yt&&bt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,le,ct,St[0].width,St[0].height,nt.depth);for(let gt=0,$t=St.length;gt<$t;gt++)if(st=St[gt],v.format!==oi)if(Tt!==null)if(yt){if(Xt)if(v.layerUpdates.size>0){let ce=fh(st.width,st.height,v.format,v.type);for(let Ct of v.layerUpdates){let be=st.data.subarray(Ct*ce/st.data.BYTES_PER_ELEMENT,(Ct+1)*ce/st.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,Ct,st.width,st.height,1,Tt,be)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,st.width,st.height,nt.depth,Tt,st.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,gt,ct,st.width,st.height,nt.depth,0,st.data,0,0);else Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else yt?Xt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,st.width,st.height,nt.depth,Tt,N,st.data):e.texImage3D(i.TEXTURE_2D_ARRAY,gt,ct,st.width,st.height,nt.depth,0,Tt,N,st.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{yt&&bt&&e.texStorage2D(i.TEXTURE_2D,le,ct,St[0].width,St[0].height);for(let gt=0,$t=St.length;gt<$t;gt++)st=St[gt],v.format!==oi?Tt!==null?yt?Xt&&e.compressedTexSubImage2D(i.TEXTURE_2D,gt,0,0,st.width,st.height,Tt,st.data):e.compressedTexImage2D(i.TEXTURE_2D,gt,ct,st.width,st.height,0,st.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):yt?Xt&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,st.width,st.height,Tt,N,st.data):e.texImage2D(i.TEXTURE_2D,gt,ct,st.width,st.height,0,Tt,N,st.data)}else if(v.isDataArrayTexture)if(yt){if(bt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,le,ct,nt.width,nt.height,nt.depth),Xt)if(v.layerUpdates.size>0){let gt=fh(nt.width,nt.height,v.format,v.type);for(let $t of v.layerUpdates){let ce=nt.data.subarray($t*gt/nt.data.BYTES_PER_ELEMENT,($t+1)*gt/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$t,nt.width,nt.height,1,Tt,N,ce)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,Tt,N,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ct,nt.width,nt.height,nt.depth,0,Tt,N,nt.data);else if(v.isData3DTexture)yt?(bt&&e.texStorage3D(i.TEXTURE_3D,le,ct,nt.width,nt.height,nt.depth),Xt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,Tt,N,nt.data)):e.texImage3D(i.TEXTURE_3D,0,ct,nt.width,nt.height,nt.depth,0,Tt,N,nt.data);else if(v.isFramebufferTexture){if(bt)if(yt)e.texStorage2D(i.TEXTURE_2D,le,ct,nt.width,nt.height);else{let gt=nt.width,$t=nt.height;for(let ce=0;ce<le;ce++)e.texImage2D(i.TEXTURE_2D,ce,ct,gt,$t,0,Tt,N,null),gt>>=1,$t>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let gt=i.canvas;if(gt.hasAttribute("layoutsubtree")||gt.setAttribute("layoutsubtree","true"),nt.parentNode!==gt){gt.appendChild(nt),g.add(v),gt.onpaint=$t=>{let ce=$t.changedElements;for(let Ct of g)ce.includes(Ct.image)&&(Ct.needsUpdate=!0)},gt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,nt);else{let ce=i.RGBA,Ct=i.RGBA,be=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ce,Ct,be,nt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(St.length>0){if(yt&&bt){let gt=jt(St[0]);e.texStorage2D(i.TEXTURE_2D,le,ct,gt.width,gt.height)}for(let gt=0,$t=St.length;gt<$t;gt++)st=St[gt],yt?Xt&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,Tt,N,st):e.texImage2D(i.TEXTURE_2D,gt,ct,Tt,N,st);v.generateMipmaps=!1}else if(yt){if(bt){let gt=jt(nt);e.texStorage2D(i.TEXTURE_2D,le,ct,gt.width,gt.height)}Xt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Tt,N,nt)}else e.texImage2D(i.TEXTURE_2D,0,ct,Tt,N,nt);I(v)&&v.mipmapsAutoUpdate===!0&&E(_t),dt.__version=Mt.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function mn(R,v,Y){if(v.image.length!==6)return;let _t=Ee(R,v),it=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+Y);let Mt=n.get(it);if(it.version!==Mt.__version||_t===!0){e.activeTexture(i.TEXTURE0+Y);let dt=Me.getPrimaries(Me.workingColorSpace),at=v.colorSpace===Oi?null:Me.getPrimaries(v.colorSpace),nt=v.colorSpace===Oi||dt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let Tt=v.isCompressedTexture||v.image[0].isCompressedTexture,N=v.image[0]&&v.image[0].isDataTexture,ct=[];for(let Ct=0;Ct<6;Ct++)!Tt&&!N?ct[Ct]=b(v.image[Ct],!0,s.maxCubemapSize):ct[Ct]=N?v.image[Ct].image:v.image[Ct],ct[Ct]=Wt(v,ct[Ct]);let st=ct[0],St=r.convert(v.format,v.colorSpace),yt=r.convert(v.type),bt=C(v.internalFormat,St,yt,v.normalized,v.colorSpace),Xt=v.isVideoTexture!==!0,le=Mt.__version===void 0||_t===!0,gt=it.dataReady,$t=T(v,st);Te(i.TEXTURE_CUBE_MAP,v);let ce;if(v.isDepthTexture){if(bt=y(v.format===Fi,v.type),le)if(Xt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,bt,st.width,st.height);else for(let Ct=0;Ct<6;Ct++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,bt,st.width,st.height,0,St,yt,null)}else if(Tt){Xt&&le&&e.texStorage2D(i.TEXTURE_CUBE_MAP,$t,bt,st.width,st.height);for(let Ct=0;Ct<6;Ct++){ce=ct[Ct].mipmaps;for(let be=0;be<ce.length;be++){let He=ce[be];v.format!==oi?St!==null?Xt?gt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,be,0,0,He.width,He.height,St,He.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,be,bt,He.width,He.height,0,He.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,be,0,0,He.width,He.height,St,yt,He.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,be,bt,He.width,He.height,0,St,yt,He.data)}}}else{if(ce=v.mipmaps,Xt&&le){ce.length>0&&$t++;let Ct=jt(ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,$t,bt,Ct.width,Ct.height)}for(let Ct=0;Ct<6;Ct++)if(N){Xt?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,0,0,ct[Ct].width,ct[Ct].height,St,yt,ct[Ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,bt,ct[Ct].width,ct[Ct].height,0,St,yt,ct[Ct].data);for(let be=0;be<ce.length;be++){let Un=ce[be].image[Ct].image;Xt?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,be+1,0,0,Un.width,Un.height,St,yt,Un.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,be+1,bt,Un.width,Un.height,0,St,yt,Un.data)}}else{Xt?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,0,0,St,yt,ct[Ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,bt,St,yt,ct[Ct]);for(let be=0;be<ce.length;be++){let He=ce[be];Xt?gt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,be+1,0,0,St,yt,He.image[Ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,be+1,bt,St,yt,He.image[Ct])}}}I(v)&&v.mipmapsAutoUpdate===!0&&E(i.TEXTURE_CUBE_MAP),Mt.__version=it.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function me(R,v,Y,_t,it,Mt){let dt=r.convert(Y.format,Y.colorSpace),at=r.convert(Y.type),nt=C(Y.internalFormat,dt,at,Y.normalized,Y.colorSpace),Tt=n.get(v),N=n.get(Y);if(N.__renderTarget=v,!Tt.__hasExternalTextures){let ct=Math.max(1,v.width>>Mt),st=Math.max(1,v.height>>Mt);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,Mt,nt,ct,st,v.depth,0,dt,at,null):e.texImage2D(it,Mt,nt,ct,st,0,dt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Et(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_t,it,N.__webglTexture,0,Ie(v)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,_t,it,N.__webglTexture,Mt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function qn(R,v,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,R),v.depthBuffer){let _t=v.depthTexture,it=_t&&_t.isDepthTexture?_t.type:null,Mt=y(v.stencilBuffer,it),dt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Et(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie(v),Mt,v.width,v.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie(v),Mt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,R)}else{let _t=v.textures;for(let it=0;it<_t.length;it++){let Mt=_t[it],dt=r.convert(Mt.format,Mt.colorSpace),at=r.convert(Mt.type),nt=C(Mt.internalFormat,dt,at,Mt.normalized,Mt.colorSpace);Et(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie(v),nt,v.width,v.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie(v),nt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,nt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ne(R,v,Y){let _t=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let it=n.get(v.depthTexture);it.__renderTarget=v;let Mt=_t?v.depthTexture.image[0]:v.depthTexture.image;(!it.__webglTexture||Mt.width!==v.width||Mt.height!==v.height)&&(Mt.width=v.width,Mt.height=v.height,v.depthTexture.needsUpdate=!0),_t?It(v.depthTexture,0):Pt(v.depthTexture,0);let dt=it.__webglTexture,at=Ie(v),nt=_t?i.TEXTURE_CUBE_MAP_POSITIVE_X+Y:i.TEXTURE_2D,Tt=v.depthTexture.format===Fi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Ii)Et(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Tt,nt,dt,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,Tt,nt,dt,0);else if(v.depthTexture.format===Fi)Et(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Tt,nt,dt,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,Tt,nt,dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Rn(R){let v=n.get(R),Y=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){let _t=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),_t){let it=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,_t.removeEventListener("dispose",it)};_t.addEventListener("dispose",it),v.__depthDisposeCallback=it}v.__boundDepthTexture=_t}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(Y)for(let _t=0;_t<6;_t++)Ne(v.__webglFramebuffer[_t],R,_t);else R.texture.mipmaps.length>0?Ne(v.__webglFramebuffer[0],R,0):Ne(v.__webglFramebuffer,R,0);else if(Y){v.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[_t]),v.__webglDepthbuffer[_t]===void 0)v.__webglDepthbuffer[_t]=i.createRenderbuffer(),qn(v.__webglDepthbuffer[_t],R,!1);else{let it=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=v.__webglDepthbuffer[_t];i.bindRenderbuffer(i.RENDERBUFFER,Mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,Mt)}}else if(R.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),qn(v.__webglDepthbuffer,R,!1);else{let it=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,Mt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Mn(R,v,Y){let _t=n.get(R);v!==void 0&&me(_t.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&Rn(R)}function Cn(R){let v=R.texture,Y=n.get(R),_t=n.get(v);R.addEventListener("dispose",G),V(R);let it=R.textures,Mt=R.isWebGLCubeRenderTarget===!0,dt=it.length>1;if(dt||(_t.__webglTexture===void 0&&(_t.__webglTexture=i.createTexture()),_t.__version=v.version,a.memory.textures++),Mt){Y.__webglFramebuffer=[];for(let at=0;at<6;at++)if(v.mipmaps.length>0){Y.__webglFramebuffer[at]=[];for(let nt=0;nt<v.mipmaps.length;nt++)Y.__webglFramebuffer[at][nt]=i.createFramebuffer()}else Y.__webglFramebuffer[at]=i.createFramebuffer()}else{if(v.mipmaps.length>0){Y.__webglFramebuffer=[];for(let at=0;at<v.mipmaps.length;at++)Y.__webglFramebuffer[at]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(dt)for(let at=0,nt=it.length;at<nt;at++){let Tt=n.get(it[at]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Et(R)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let at=0;at<it.length;at++){let nt=it[at];Y.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[at]);let Tt=r.convert(nt.format,nt.colorSpace),N=r.convert(nt.type),ct=C(nt.internalFormat,Tt,N,nt.normalized,nt.colorSpace,R.isXRRenderTarget===!0),st=Ie(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,st,ct,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,Y.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),qn(Y.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Mt){e.bindTexture(i.TEXTURE_CUBE_MAP,_t.__webglTexture),Te(i.TEXTURE_CUBE_MAP,v);for(let at=0;at<6;at++)if(v.mipmaps.length>0)for(let nt=0;nt<v.mipmaps.length;nt++)me(Y.__webglFramebuffer[at][nt],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,nt);else me(Y.__webglFramebuffer[at],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);I(v)?E(i.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}else if(dt){for(let at=0,nt=it.length;at<nt;at++){let Tt=it[at],N=n.get(Tt),ct=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ct=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,N.__webglTexture),Te(ct,Tt),me(Y.__webglFramebuffer,R,Tt,i.COLOR_ATTACHMENT0+at,ct,0),I(Tt)&&E(ct)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(at=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,_t.__webglTexture),Te(at,v),v.mipmaps.length>0)for(let nt=0;nt<v.mipmaps.length;nt++)me(Y.__webglFramebuffer[nt],R,v,i.COLOR_ATTACHMENT0,at,nt);else me(Y.__webglFramebuffer,R,v,i.COLOR_ATTACHMENT0,at,0);I(v)?E(at):v.mipmaps.length>0&&i.texParameteri(at,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}R.depthBuffer&&Rn(R)}function H(R){let v=R.textures;for(let Y=0,_t=v.length;Y<_t;Y++){let it=v[Y];if(I(it)&&it.mipmapsAutoUpdate===!0){let Mt=A(R),dt=n.get(it).__webglTexture;e.bindTexture(Mt,dt),E(Mt),e.unbindTexture()}}}let Pn=[];function Re(R){if(R.samples>0){if(Et(R)===!1){let v=R.textures,Y=R.width,_t=R.height,it=i.COLOR_BUFFER_BIT,Mt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=n.get(R),at=v.length>1;if(at)for(let Tt=0;Tt<v.length;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let Tt=0;Tt<v.length;Tt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,dt.__webglColorRenderbuffer[Tt]);let N=n.get(v[Tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,N,0)}i.blitFramebuffer(0,0,Y,_t,0,0,Y,_t,it,i.NEAREST),l===!0&&(Pn.length=0,Pn.push(i.COLOR_ATTACHMENT0+Tt),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&Pn.push(Mt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Pn))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let Tt=0;Tt<v.length;Tt++){e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,dt.__webglColorRenderbuffer[Tt]);let N=n.get(v[Tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,N,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let v=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Ie(R){return Math.min(s.maxSamples,R.samples)}function Et(R){let v=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function De(R){let v=a.render.frame;f.get(R)!==v&&(f.set(R,v),R.update())}function Wt(R,v){let Y=R.colorSpace,_t=R.format,it=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||Y!==Nr&&Y!==Oi&&(Me.getTransfer(Y)===Ae?(_t!==oi||it!==Dn)&&Jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ne("WebGLTextures: Unsupported texture color space:",Y)),v}function jt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=te,this.resetTextureUnits=ht,this.getTextureUnits=mt,this.setTextureUnits=Ht,this.setTexture2D=Pt,this.setTexture2DArray=Ot,this.setTexture3D=Yt,this.setTextureCube=It,this.rebindTextures=Mn,this.setupRenderTarget=Cn,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=Rn,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Et,this.dispose=W}function Ex(i,t){function e(n,s=Oi){let r,a=Me.getTransfer(s);if(n===Dn)return i.UNSIGNED_BYTE;if(n===Wo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Xo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Jc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Kc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Yc)return i.BYTE;if(n===Zc)return i.SHORT;if(n===fr)return i.UNSIGNED_SHORT;if(n===Go)return i.INT;if(n===si)return i.UNSIGNED_INT;if(n===ri)return i.FLOAT;if(n===ai)return i.HALF_FLOAT;if(n===jc)return i.ALPHA;if(n===Qc)return i.RGB;if(n===oi)return i.RGBA;if(n===Ii)return i.DEPTH_COMPONENT;if(n===Fi)return i.DEPTH_STENCIL;if(n===th)return i.RED;if(n===$o)return i.RED_INTEGER;if(n===rs)return i.RG;if(n===qo)return i.RG_INTEGER;if(n===Yo)return i.RGBA_INTEGER;if(n===na||n===ia||n===sa||n===ra)if(a===Ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===na)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===na)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ra)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Zo||n===Jo||n===Ko||n===jo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Zo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Jo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ko)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===jo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Qo||n===tl||n===el||n===nl||n===il||n===aa||n===sl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Qo||n===tl)return a===Ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===el)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===nl)return r.COMPRESSED_R11_EAC;if(n===il)return r.COMPRESSED_SIGNED_R11_EAC;if(n===aa)return r.COMPRESSED_RG11_EAC;if(n===sl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===rl||n===al||n===ol||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===_l||n===xl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===rl)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===al)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ol)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ll)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===cl)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===hl)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ul)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===dl)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fl)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pl)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ml)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===gl)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_l)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xl)return a===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===yl||n===vl||n===Ml)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===yl)return a===Ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ml)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sl||n===bl||n===oa||n===wl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Sl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===bl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===oa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===As?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ax=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rx=`
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

}`,Sh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Wr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new pi({vertexShader:Ax,fragmentShader:Rx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new wn(new $r(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},bh=class extends ni{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,f=null,g=null,u=null,p=null,x=null,S=typeof XRWebGLBinding<"u",m=new Sh,_={},b=e.getContextAttributes(),I=null,E=null,A=[],C=[],y=new ie,T=null,V=null,F=new Sn;F.viewport=new ze;let B=new Sn;B.viewport=new ze;let G=[F,B],k=new ko,L=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ot){let Pt=A[ot];return Pt===void 0&&(Pt=new rr,A[ot]=Pt),Pt.getTargetRaySpace()},this.getControllerGrip=function(ot){let Pt=A[ot];return Pt===void 0&&(Pt=new rr,A[ot]=Pt),Pt.getGripSpace()},this.getHand=function(ot){let Pt=A[ot];return Pt===void 0&&(Pt=new rr,A[ot]=Pt),Pt.getHandSpace()};function Q(ot){let Pt=C.indexOf(ot.inputSource);if(Pt===-1)return;let Ot=A[Pt];Ot!==void 0&&(Ot.update(ot.inputSource,ot.frame,c||a),Ot.dispatchEvent({type:ot.type,data:ot.inputSource}))}function j(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",pt);for(let ot=0;ot<A.length;ot++){let Pt=C[ot];Pt!==null&&(C[ot]=null,A[ot].disconnect(Pt))}L=null,W=null,m.reset();for(let ot in _)delete _[ot];if(t.setRenderTarget(I),p=null,u=null,g=null,s=null,E=null,te.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(y.width,y.height,!1),V!==null){let ot=V.camera;ot.fov=V.fov,ot.zoom=V.zoom,ot.updateProjectionMatrix(),V=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ot){r=ot,n.isPresenting===!0&&Jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ot){o=ot,n.isPresenting===!0&&Jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ot){c=ot},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return g===null&&S&&(g=new XRWebGLBinding(s,e)),g},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(ot){if(s=ot,s!==null){if(I=t.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",j),s.addEventListener("inputsourceschange",pt),b.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(y),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ot=null,Yt=null,It=null;b.depth&&(It=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ot=b.stencil?Fi:Ii,Yt=b.stencil?As:si);let oe={colorFormat:e.RGBA8,depthFormat:It,scaleFactor:r};g=this.getBinding(),u=g.createProjectionLayer(oe),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),E=new Gn(u.textureWidth,u.textureHeight,{format:oi,type:Dn,depthTexture:new Ni(u.textureWidth,u.textureHeight,Yt,void 0,void 0,void 0,void 0,void 0,void 0,Ot),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Ot={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,Ot),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Gn(p.framebufferWidth,p.framebufferHeight,{format:oi,type:Dn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),te.setContext(s),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function pt(ot){for(let Pt=0;Pt<ot.removed.length;Pt++){let Ot=ot.removed[Pt],Yt=C.indexOf(Ot);Yt>=0&&(C[Yt]=null,A[Yt].disconnect(Ot))}for(let Pt=0;Pt<ot.added.length;Pt++){let Ot=ot.added[Pt],Yt=C.indexOf(Ot);if(Yt===-1){for(let oe=0;oe<A.length;oe++)if(oe>=C.length){C.push(Ot),Yt=oe;break}else if(C[oe]===null){C[oe]=Ot,Yt=oe;break}if(Yt===-1)break}let It=A[Yt];It&&It.connect(Ot)}}function et(ot,Pt){Pt===null?ot.matrixWorld.copy(ot.matrix):ot.matrixWorld.multiplyMatrices(Pt.matrixWorld,ot.matrix),ot.matrixWorldInverse.copy(ot.matrixWorld).invert()}this.updateCamera=function(ot){if(s===null)return;let Pt=ot.near,Ot=ot.far;m.texture!==null&&(m.depthNear>0&&(Pt=m.depthNear),m.depthFar>0&&(Ot=m.depthFar)),k.near=B.near=F.near=Pt,k.far=B.far=F.far=Ot,(L!==k.near||W!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),L=k.near,W=k.far),k.layers.mask=ot.layers.mask|6,F.layers.mask=k.layers.mask&-5,B.layers.mask=k.layers.mask&-3;let Yt=ot.parent,It=k.cameras;et(k,Yt);for(let oe=0;oe<It.length;oe++)et(It[oe],Yt);k.projectionMatrix.copy(F.projectionMatrix),k.projectionMatrixInverse.copy(F.projectionMatrixInverse),V===null&&ot.isPerspectiveCamera&&(V={camera:ot,fov:ot.fov,zoom:ot.zoom}),ht(ot,k,Yt)};function ht(ot,Pt,Ot){Ot===null?ot.matrix.copy(Pt.matrixWorld):(ot.matrix.copy(Ot.matrixWorld),ot.matrix.invert(),ot.matrix.multiply(Pt.matrixWorld)),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.updateMatrixWorld(!0),ot.projectionMatrix.copy(Pt.projectionMatrix),ot.projectionMatrixInverse.copy(Pt.projectionMatrixInverse),ot.isPerspectiveCamera&&(ot.fov=ir*2*Math.atan(1/ot.projectionMatrix.elements[5]),ot.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(ot){l=ot,u!==null&&(u.fixedFoveation=ot),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ot)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(ot){return _[ot]};let mt=null;function Ht(ot,Pt){if(f=Pt.getViewerPose(c||a),x=Pt,f!==null){let Ot=f.views;p!==null&&(t.setRenderTargetFramebuffer(E,p.framebuffer),t.setRenderTarget(E));let Yt=!1;Ot.length!==k.cameras.length&&(k.cameras.length=0,Yt=!0);for(let Kt=0;Kt<Ot.length;Kt++){let Te=Ot[Kt],Ee=null;if(p!==null)Ee=p.getViewport(Te);else{let Ye=g.getViewSubImage(u,Te);Ee=Ye.viewport,Kt===0&&(t.setRenderTargetTextures(E,Ye.colorTexture,Ye.depthStencilTexture),t.setRenderTarget(E))}let pe=G[Kt];pe===void 0&&(pe=new Sn,pe.layers.enable(Kt),pe.viewport=new ze,G[Kt]=pe),pe.matrix.fromArray(Te.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(Te.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),Kt===0&&(k.matrix.copy(pe.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Yt===!0&&k.cameras.push(pe)}let It=s.enabledFeatures;if(It&&It.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){g=n.getBinding();let Kt=g.getDepthInformation(Ot[0]);Kt&&Kt.isValid&&Kt.texture&&m.init(Kt,s.renderState)}if(It&&It.includes("camera-access")&&S){t.state.unbindTexture(),g=n.getBinding();for(let Kt=0;Kt<Ot.length;Kt++){let Te=Ot[Kt].camera;if(Te){let Ee=_[Te];Ee||(Ee=new Wr,_[Te]=Ee);let pe=g.getCameraImage(Te);Ee.sourceTexture=pe}}}}for(let Ot=0;Ot<A.length;Ot++){let Yt=C[Ot],It=A[Ot];Yt!==null&&It!==void 0&&It.update(Yt,Pt,c||a)}mt&&mt(ot,Pt),Pt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Pt}),x=null}let te=new Cd;te.setAnimationLoop(Ht),this.setAnimationLoop=function(ot){mt=ot},this.dispose=function(){}}},Cx=new ke,kd=new ae;kd.set(-1,0,0,0,1,0,0,0,1);function Px(i,t){function e(m,_){m.matrixAutoUpdate===!0&&m.updateMatrix(),_.value.copy(m.matrix)}function n(m,_){_.color.getRGB(m.fogColor.value,hh(i)),_.isFog?(m.fogNear.value=_.near,m.fogFar.value=_.far):_.isFogExp2&&(m.fogDensity.value=_.density)}function s(m,_,b,I,E){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?r(m,_):_.isMeshLambertMaterial?(r(m,_),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(r(m,_),g(m,_)):_.isMeshPhongMaterial?(r(m,_),f(m,_),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(r(m,_),u(m,_),_.isMeshPhysicalMaterial&&p(m,_,E)):_.isMeshMatcapMaterial?(r(m,_),x(m,_)):_.isMeshDepthMaterial?r(m,_):_.isMeshDistanceMaterial?(r(m,_),S(m,_)):_.isMeshNormalMaterial?r(m,_):_.isLineBasicMaterial?(a(m,_),_.isLineDashedMaterial&&o(m,_)):_.isPointsMaterial?l(m,_,b,I):_.isSpriteMaterial?c(m,_):_.isShadowMaterial?(m.color.value.copy(_.color),m.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function r(m,_){m.opacity.value=_.opacity,_.color&&m.diffuse.value.copy(_.color),_.emissive&&m.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(m.map.value=_.map,e(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,e(_.alphaMap,m.alphaMapTransform)),_.bumpMap&&(m.bumpMap.value=_.bumpMap,e(_.bumpMap,m.bumpMapTransform),m.bumpScale.value=_.bumpScale,_.side===Tn&&(m.bumpScale.value*=-1)),_.normalMap&&(m.normalMap.value=_.normalMap,e(_.normalMap,m.normalMapTransform),m.normalScale.value.copy(_.normalScale),_.side===Tn&&m.normalScale.value.negate()),_.displacementMap&&(m.displacementMap.value=_.displacementMap,e(_.displacementMap,m.displacementMapTransform),m.displacementScale.value=_.displacementScale,m.displacementBias.value=_.displacementBias),_.emissiveMap&&(m.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,m.emissiveMapTransform)),_.specularMap&&(m.specularMap.value=_.specularMap,e(_.specularMap,m.specularMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest);let b=t.get(_),I=b.envMap,E=b.envMapRotation;I&&(m.envMap.value=I,m.envMapRotation.value.setFromMatrix4(Cx.makeRotationFromEuler(E)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(kd),m.reflectivity.value=_.reflectivity,m.ior.value=_.ior,m.refractionRatio.value=_.refractionRatio),_.lightMap&&(m.lightMap.value=_.lightMap,m.lightMapIntensity.value=_.lightMapIntensity,e(_.lightMap,m.lightMapTransform)),_.aoMap&&(m.aoMap.value=_.aoMap,m.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,m.aoMapTransform))}function a(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,_.map&&(m.map.value=_.map,e(_.map,m.mapTransform))}function o(m,_){m.dashSize.value=_.dashSize,m.totalSize.value=_.dashSize+_.gapSize,m.scale.value=_.scale}function l(m,_,b,I){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.size.value=_.size*b,m.scale.value=I*.5,_.map&&(m.map.value=_.map,e(_.map,m.uvTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,e(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function c(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.rotation.value=_.rotation,_.map&&(m.map.value=_.map,e(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,e(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function f(m,_){m.specular.value.copy(_.specular),m.shininess.value=Math.max(_.shininess,1e-4)}function g(m,_){_.gradientMap&&(m.gradientMap.value=_.gradientMap)}function u(m,_){m.metalness.value=_.metalness,_.metalnessMap&&(m.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,m.metalnessMapTransform)),m.roughness.value=_.roughness,_.roughnessMap&&(m.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,m.roughnessMapTransform)),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)}function p(m,_,b){m.ior.value=_.ior,_.diffuseRoughness>0&&(m.diffuseRoughness.value=_.diffuseRoughness,_.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=_.diffuseRoughnessMap,e(_.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),_.sheen>0&&(m.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),m.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(m.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,m.sheenColorMapTransform)),_.sheenRoughnessMap&&(m.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,m.sheenRoughnessMapTransform))),_.clearcoat>0&&(m.clearcoat.value=_.clearcoat,m.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(m.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,m.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(m.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Tn&&m.clearcoatNormalScale.value.negate())),_.dispersion>0&&(m.dispersion.value=_.dispersion),_.retroreflectivity>0&&(m.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(m.iridescence.value=_.iridescence,m.iridescenceIOR.value=_.iridescenceIOR,m.iridescenceThicknessMinimum.value=_.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=_.iridescenceThicknessMaximum,_.iridescenceMap&&(m.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,m.iridescenceMapTransform)),_.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),_.transmission>0&&(m.transmission.value=_.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),_.transmissionMap&&(m.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,m.transmissionMapTransform)),m.thickness.value=_.thickness,_.thicknessMap&&(m.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=_.attenuationDistance,m.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(m.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(m.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=_.specularIntensity,m.specularColor.value.copy(_.specularColor),_.specularColorMap&&(m.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,m.specularColorMapTransform)),_.specularIntensityMap&&(m.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,_){_.matcap&&(m.matcap.value=_.matcap)}function S(m,_){let b=t.get(_).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ix(i,t,e,n){let s={},r={};function a(b,I){let E=I.program;n.uniformBlockBinding(b,E,s[b.id])}function o(b,I){let E=s[b.id];E===void 0&&(x(b),E=l(b),s[b.id]=E,b.addEventListener("dispose",m));let A=I.program;n.updateUBOMapping(b,A);let C=t.render.frame;r[b.id]!==C&&(c(b),r[b.id]=C)}function l(b){let I=i.createBuffer(),E=b.__size,A=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,I),i.bufferData(i.UNIFORM_BUFFER,E,A),i.bindBuffer(i.UNIFORM_BUFFER,null),I}function c(b){let I=s[b.id],E=b.uniforms,A=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,I);for(let C=0,y=E.length;C<y;C++){let T=E[C];if(Array.isArray(T))for(let V=0,F=T.length;V<F;V++)f(T[V],C,V,A);else f(T,C,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,I,E,A){if(u(b,I,E,A)===!0){let C=b.__offset,y=b.value;if(Array.isArray(y)){let T=0;for(let V=0;V<y.length;V++){let F=y[V],B=S(F,!0);g(F,b.__data,T),T+=B.storage/Float32Array.BYTES_PER_ELEMENT}}else g(y,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,C,b.__data)}}function g(b,I,E){typeof b=="number"||typeof b=="boolean"?I[E]=b:b.isMatrix3?(I[E]=b.elements[0],I[E+1]=b.elements[1],I[E+2]=b.elements[2],I[E+3]=0,I[E+4]=b.elements[3],I[E+5]=b.elements[4],I[E+6]=b.elements[5],I[E+7]=0,I[E+8]=b.elements[6],I[E+9]=b.elements[7],I[E+10]=b.elements[8],I[E+11]=0):ArrayBuffer.isView(b)?I.set(b.subarray(0,I.length-E),E):b.toArray(I,E)}function u(b,I,E,A){let C=b.value,y=I+"_"+E;if(Array.isArray(C)){A[y]===void 0&&(A[y]=[]);let T=A[y],V=!1;for(let F=0;F<C.length;F++)p(C[F],T,F)===!0&&(V=!0);return V}return p(C,A,y)}function p(b,I,E){if(I[E]===void 0)return typeof b=="number"||typeof b=="boolean"?I[E]=b:ArrayBuffer.isView(b)?I[E]=b.slice():I[E]=b.clone(),!0;{let A=I[E];if(typeof b=="number"||typeof b=="boolean"){if(A!==b)return I[E]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(A.equals(b)===!1)return A.copy(b),!0}}return!1}function x(b){let I=b.uniforms,E=0,A=16;for(let y=0,T=I.length;y<T;y++){let V=Array.isArray(I[y])?I[y]:[I[y]];for(let F=0,B=V.length;F<B;F++){let G=V[F],k=Array.isArray(G.value)?G.value:[G.value],L=Array.isArray(I[y])||Array.isArray(G.value),W=E;for(let j=0,pt=k.length;j<pt;j++){let et=k[j],ht=S(et,L),mt=E%A,Ht=mt%ht.boundary,te=mt+Ht;E+=Ht,te!==0&&A-te<ht.storage&&(E+=A-te),j===0&&(W=E),E+=ht.storage}let Q=G.type==="int"?Int32Array:G.type==="uint"?Uint32Array:Float32Array;G.__data=new Q((E-W)/Float32Array.BYTES_PER_ELEMENT),G.__offset=W}}let C=E%A;return C>0&&(E+=A-C),b.__size=E,b.__cache={},this}function S(b,I){let E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=16,E.storage=48):b.isMatrix4?(E.boundary=16,E.storage=64):b.isTexture?Jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(E.boundary=16,E.storage=b.byteLength):Jt("WebGLRenderer: Unsupported uniform value type.",b),I===!0&&(E.boundary=16,E.storage=Math.ceil(E.storage/16)*16),E}function m(b){let I=b.target;I.removeEventListener("dispose",m),i.deleteBuffer(s[I.id]),delete s[I.id],delete r[I.id]}function _(){for(let b in s)i.deleteBuffer(s[b]);s={},r={}}return{bind:a,update:o,dispose:_}}var Lx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),_i=null;function Dx(){return _i===null&&(_i=new vo(Lx,16,16,rs,ai),_i.name="DFG_LUT",_i.minFilter=bn,_i.magFilter=bn,_i.wrapS=di,_i.wrapT=di,_i.generateMipmaps=!1,_i.needsUpdate=!0),_i}var Cl=class{constructor(t={}){let{canvas:e=ju(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:u=!1,outputBufferType:p=Dn}=t;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;let S=p,m=new Set([Yo,qo,$o]),_=new Set([Dn,si,fr,As,Wo,Xo]),b=new Uint32Array(4),I=new Int32Array(4),E={textures:[],min:[],max:[],resolution:[]},A=null,C=null,y=[],T=[],V=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let F=this,B=!1,G=null,k=null,L=null,W=null;this._outputColorSpace=kn;let Q=0,j=0,pt=null,et=-1,ht=null,mt=new ze,Ht=new ze,te=null,ot=new de(0),Pt=0,Ot=e.width,Yt=e.height,It=1,oe=null,Ge=null,Kt=new ze(0,0,Ot,Yt),Te=new ze(0,0,Ot,Yt),Ee=!1,pe=new Ki,Ye=new Mo,We=!1,mn=!1,me=new ke,qn=new Z,Ne=new ze,Rn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Mn=!1;function Cn(){return pt===null?It:1}let H=n;function Pn(M,O){return e.getContext(M,O)}let Re,Ie,Et,De,Wt,jt,R,v,Y,_t,it,Mt,dt,at,nt,Tt,N,ct,st,St,yt,bt,Xt;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:g};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",$t,!1),e.addEventListener("webglcontextrestored",ce,!1),e.addEventListener("webglcontextcreationerror",Ct,!1),H===null){let O="webgl2";if(H=Pn(O,M),H===null)throw Pn(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}le()}catch(M){throw e.removeEventListener("webglcontextlost",$t,!1),e.removeEventListener("webglcontextrestored",ce,!1),e.removeEventListener("webglcontextcreationerror",Ct,!1),ne("WebGLRenderer: "+M.message),M}function le(){Re=new W0(H),Re.init(),yt=new Ex(H,Re),Ie=new D0(H,Re,t,yt),Et=new wx(H,Re),Ie.reversedDepthBuffer&&u&&Et.buffers.depth.setReversed(!0),k=H.createFramebuffer(),L=H.createFramebuffer(),W=H.createFramebuffer(),De=new q0(H),Wt=new hx,jt=new Tx(H,Re,Et,Wt,Ie,yt,De),R=new G0(F),v=new Zp(H),bt=new I0(H,v),Y=new X0(H,v,De,bt),_t=new Z0(H,Y,v,bt,De),ct=new Y0(H,Ie,jt),nt=new N0(Wt),it=new cx(F,R,Re,Ie,bt,nt),Mt=new Px(F,Wt),dt=new dx,at=new xx(Re),N=new P0(F,R,Et,_t,x,l),Tt=new bx(F,_t,Ie),Xt=new Ix(H,De,Ie,Et),st=new L0(H,Re,De),St=new $0(H,Re,De),De.programs=it.programs,F.capabilities=Ie,F.extensions=Re,F.properties=Wt,F.renderLists=dt,F.shadowMap=Tt,F.state=Et,F.info=De}S!==Dn&&(V=new K0(S,e.width,e.height,o,s,r));let gt=new bh(F,H);this.xr=gt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let M=Re.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Re.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return It},this.setPixelRatio=function(M){M!==void 0&&(It=M,this.setSize(Ot,Yt,!1))},this.getSize=function(M){return M.set(Ot,Yt)},this.setSize=function(M,O,tt=!0){if(gt.isPresenting){Jt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ot=M,Yt=O,e.width=Math.floor(M*It),e.height=Math.floor(O*It),tt===!0&&(e.style.width=M+"px",e.style.height=O+"px"),V!==null&&V.setSize(e.width,e.height),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(Ot*It,Yt*It).floor()},this.setDrawingBufferSize=function(M,O,tt){Ot=M,Yt=O,It=tt,e.width=Math.floor(M*tt),e.height=Math.floor(O*tt),this.setViewport(0,0,M,O)},this.setEffects=function(M){if(S===Dn){ne("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let O=0;O<M.length;O++)if(M[O].isOutputPass===!0){Jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}V.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(mt)},this.getViewport=function(M){return M.copy(Kt)},this.setViewport=function(M,O,tt,J){M.isVector4?Kt.set(M.x,M.y,M.z,M.w):Kt.set(M,O,tt,J),Et.viewport(mt.copy(Kt).multiplyScalar(Cn()).round())},this.getScissor=function(M){return M.copy(Te)},this.setScissor=function(M,O,tt,J){M.isVector4?Te.set(M.x,M.y,M.z,M.w):Te.set(M,O,tt,J),Et.scissor(Ht.copy(Te).multiplyScalar(Cn()).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(M){Et.setScissorTest(Ee=M)},this.setOpaqueSort=function(M){oe=M},this.setTransparentSort=function(M){Ge=M},this.getClearColor=function(M){return M.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(M=!0,O=!0,tt=!0){let J=0;if(M){let q=!1;if(pt!==null){let At=pt.texture.format;q=m.has(At)}if(q){let At=pt.texture.type,Ft=_.has(At),wt=N.getClearColor(),Lt=N.getClearAlpha(),zt=wt.r,se=wt.g,ge=wt.b;Ft?(b[0]=zt,b[1]=se,b[2]=ge,b[3]=Lt,H.clearBufferuiv(H.COLOR,0,b)):(I[0]=zt,I[1]=se,I[2]=ge,I[3]=Lt,H.clearBufferiv(H.COLOR,0,I))}else J|=H.COLOR_BUFFER_BIT}O&&(J|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),tt&&(J|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&H.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),G=M},this.dispose=function(){e.removeEventListener("webglcontextlost",$t,!1),e.removeEventListener("webglcontextrestored",ce,!1),e.removeEventListener("webglcontextcreationerror",Ct,!1),N.dispose(),dt.dispose(),at.dispose(),jt.dispose(),Wt.dispose(),R.dispose(),_t.dispose(),Y.dispose(),bt.dispose(),Xt.dispose(),it.dispose(),gt.dispose(),gt.removeEventListener("sessionstart",wa),gt.removeEventListener("sessionend",Ta),Mi.stop()};function $t(M){M.preventDefault(),rh("WebGLRenderer: Context Lost."),B=!0}function ce(){rh("WebGLRenderer: Context Restored."),B=!1;let M=De.autoReset,O=Tt.enabled,tt=Tt.autoUpdate,J=Tt.needsUpdate,q=Tt.type;le(),De.autoReset=M,Tt.enabled=O,Tt.autoUpdate=tt,Tt.needsUpdate=J,Tt.type=q}function Ct(M){ne("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function be(M){let O=M.target;O.removeEventListener("dispose",be),He(O)}function He(M){Un(M),Wt.remove(M)}function Un(M){let O=Wt.get(M).programs;O!==void 0&&(O.forEach(function(tt){it.releaseProgram(tt)}),M.isShaderMaterial&&it.releaseShaderCache(M))}this.renderBufferDirect=function(M,O,tt,J,q,At){O===null&&(O=Rn);let Ft=q.isMesh&&q.matrixWorld.determinantAffine()<0,wt=Bs(M,O,tt,J,q);Et.setMaterial(J,Ft);let Lt=tt.index,zt=1;if(J.wireframe===!0){if(Lt=Y.getWireframeAttribute(tt),Lt===void 0)return;zt=2}let se=tt.drawRange,ge=tt.attributes.position,Bt=se.start*zt,ue=(se.start+se.count)*zt;At!==null&&(Bt=Math.max(Bt,At.start*zt),ue=Math.min(ue,(At.start+At.count)*zt)),Lt!==null?(Bt=Math.max(Bt,0),ue=Math.min(ue,Lt.count)):ge!=null&&(Bt=Math.max(Bt,0),ue=Math.min(ue,ge.count));let Xe=ue-Bt;if(Xe<0||Xe===1/0)return;bt.setup(q,J,wt,tt,Lt);let Ce,Pe=st;if(Lt!==null&&(Ce=v.get(Lt),Pe=St,Pe.setIndex(Ce)),q.isMesh)J.wireframe===!0?(Et.setLineWidth(J.wireframeLinewidth*Cn()),Pe.setMode(H.LINES)):Pe.setMode(H.TRIANGLES);else if(q.isLine){let Ze=J.linewidth;Ze===void 0&&(Ze=1),Et.setLineWidth(Ze*Cn()),q.isLineSegments?Pe.setMode(H.LINES):q.isLineLoop?Pe.setMode(H.LINE_LOOP):Pe.setMode(H.LINE_STRIP)}else q.isPoints?Pe.setMode(H.POINTS):q.isSprite&&Pe.setMode(H.TRIANGLES);if(q.isBatchedMesh)if(Re.get("WEBGL_multi_draw"))Pe.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let Ze=q._multiDrawStarts,Ut=q._multiDrawCounts,Je=q._multiDrawCount,Zt=Lt?v.get(Lt).bytesPerElement:1,li=Wt.get(J).currentProgram.getUniforms();for(let rn=0;rn<Je;rn++)li.setValue(H,"_gl_DrawID",rn),Pe.render(Ze[rn]/Zt,Ut[rn])}else if(q.isInstancedMesh)Pe.renderInstances(Bt,Xe,q.count);else if(tt.isInstancedBufferGeometry){let Ze=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,Ut=Math.min(tt.instanceCount,Ze);Pe.renderInstances(Bt,Xe,Ut)}else Pe.render(Bt,Xe)};function br(M,O,tt,J){G!==null&&M.isNodeMaterial&&G.setObject(J,M),We===!0&&nt.setState(M,tt,!1),M.transparent===!0&&M.side===mi&&M.forceSinglePass===!1?(M.side=Tn,M.needsUpdate=!0,Hi(M,O,J),M.side=ss,M.needsUpdate=!0,Hi(M,O,J),M.side=mi):Hi(M,O,J)}this.compile=function(M,O,tt=null){tt===null&&(tt=M),G!==null&&G.renderStart(M,O,tt),C=at.get(tt),C.init(O),T.push(C),tt.traverseVisible(function(q){q.isLight&&q.layers.test(O.layers)&&(C.pushLight(q),q.castShadow&&C.pushShadow(q))}),M!==tt&&M.traverseVisible(function(q){q.isLight&&q.layers.test(O.layers)&&(C.pushLight(q),q.castShadow&&C.pushShadow(q))}),C.setupLights(),G!==null&&G.updateLights(C.state.lightsArray),mn=this.localClippingEnabled,We=nt.init(this.clippingPlanes,mn),We===!0&&nt.setGlobalState(this.clippingPlanes,O),G!==null&&Tt.render(C.state.shadowsArray,tt,O);let J=new Set;return M.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let At=q.material;if(At)if(Array.isArray(At))for(let Ft=0;Ft<At.length;Ft++){let wt=At[Ft];br(wt,tt,O,q),J.add(wt)}else br(At,tt,O,q),J.add(At)}),C=T.pop(),G!==null&&G.renderEnd(),J},this.compileAsync=function(M,O,tt=null){let J=this.compile(M,O,tt);return new Promise(q=>{function At(){if(J.forEach(function(Ft){let Lt=Wt.get(Ft).currentProgram;(Lt===void 0||Lt.isReady())&&J.delete(Ft)}),J.size===0){q(M);return}setTimeout(At,10)}Re.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let Ns=null;function us(M){Ns&&Ns(M)}function wa(){Mi.stop()}function Ta(){Mi.start()}let Mi=new Cd;Mi.setAnimationLoop(us),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(M){Ns=M,gt.setAnimationLoop(M),M===null?Mi.stop():Mi.start()},gt.addEventListener("sessionstart",wa),gt.addEventListener("sessionend",Ta),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;G!==null&&G.renderStart(M,O);let tt=gt.enabled===!0&&gt.isPresenting===!0,J=V!==null&&(pt===null||tt)&&V.begin(F,pt);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),gt.enabled===!0&&gt.isPresenting===!0&&(V===null||V.isCompositing()===!1)&&(gt.cameraAutoUpdate===!0&&gt.updateCamera(O),O=gt.getCamera()),M.isScene===!0&&M.onBeforeRender(F,M,O,pt),C=at.get(M,T.length),C.init(O),C.state.textureUnits=jt.getTextureUnits(),T.push(C),me.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?Ye.setFromArrayCamera(O):pe.setFromProjectionMatrix(me,Zn,O.reversedDepth),mn=this.localClippingEnabled,We=nt.init(this.clippingPlanes,mn),A=dt.get(M,y.length),A.init(),y.push(A),this.info.render.frame++,gt.enabled===!0&&gt.isPresenting===!0){let Ft=F.xr.getDepthSensingMesh();Ft!==null&&wr(Ft,O,-1/0,F.sortObjects)}wr(M,O,0,F.sortObjects),A.finish(),G!==null&&G.updateLights(C.state.lightsArray),F.sortObjects===!0&&A.sort(oe,Ge),Mn=gt.enabled===!1||gt.isPresenting===!1||gt.hasDepthSensing()===!1,Mn&&N.addToRenderList(A,M),this.info.autoReset===!0&&this.info.reset(),We===!0&&nt.beginShadows();let q=C.state.shadowsArray;if(Tt.render(q,M,O),We===!0&&nt.endShadows(),(J&&V.hasRenderPass())===!1){let Ft=A.opaque,wt=A.transmissive;if(C.setupLights(),O.isArrayCamera){let Lt=O.cameras;if(wt.length>0)for(let zt=0,se=Lt.length;zt<se;zt++){let ge=Lt[zt];Fs(Ft,wt,M,ge)}Mn&&N.render(M);for(let zt=0,se=Lt.length;zt<se;zt++){let ge=Lt[zt];Us(A,M,ge,ge.viewport)}}else wt.length>0&&Fs(Ft,wt,M,O),Mn&&N.render(M),Us(A,M,O)}pt!==null&&j===0&&(jt.updateMultisampleRenderTarget(pt),jt.updateRenderTargetMipmap(pt)),J&&V.end(F),M.isScene===!0&&M.onAfterRender(F,M,O),bt.resetDefaultState(),et=-1,ht=null,T.pop(),T.length>0?(C=T[T.length-1],jt.setTextureUnits(C.state.textureUnits),We===!0&&nt.setGlobalState(F.clippingPlanes,C.state.camera)):C=null,y.pop(),y.length>0?A=y[y.length-1]:A=null,G!==null&&G.renderEnd()};function wr(M,O,tt,J){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)tt=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLight)C.pushLight(M),M.castShadow&&C.pushShadow(M);else if(M.isSprite){let Ft=O.isArrayCamera?Ye:pe;if(!M.frustumCulled||M.intersectsFrustum(Ft)){J&&Ne.setFromMatrixPosition(M.matrixWorld).applyMatrix4(me);let wt=_t.update(M),Lt=M.material;Lt.visible&&A.push(M,wt,Lt,tt,Ne.z,null,O)}}else if(M.isMesh||M.isLine||M.isPoints){let Ft=O.isArrayCamera?Ye:pe;if(!M.frustumCulled||M.intersectsFrustum(Ft)){let wt=_t.update(M),Lt=M.material;if(J&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ne.copy(M.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Ne.copy(wt.boundingSphere.center)),Ne.applyMatrix4(M.matrixWorld).applyMatrix4(me)),Array.isArray(Lt)){let zt=wt.groups;for(let se=0,ge=zt.length;se<ge;se++){let Bt=zt[se],ue=Lt[Bt.materialIndex];ue&&ue.visible&&A.push(M,wt,ue,tt,Ne.z,Bt,O)}}else Lt.visible&&A.push(M,wt,Lt,tt,Ne.z,null,O)}}}let At=M.children;for(let Ft=0,wt=At.length;Ft<wt;Ft++)wr(At[Ft],O,tt,J)}function Us(M,O,tt,J){let{opaque:q,transmissive:At,transparent:Ft}=M;C.setupLightsView(tt),We===!0&&nt.setGlobalState(F.clippingPlanes,tt),J&&Et.viewport(mt.copy(J)),q.length>0&&Os(q,O,tt),At.length>0&&Os(At,O,tt),Ft.length>0&&Os(Ft,O,tt),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function Fs(M,O,tt,J){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[J.id]===void 0){let Bt=Re.has("EXT_color_buffer_half_float")||Re.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[J.id]=new Gn(1,1,{generateMipmaps:!0,type:Bt?ai:Dn,minFilter:Ui,samples:Math.max(4,Ie.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Me.workingColorSpace})}let At=C.state.transmissionRenderTarget[J.id],Ft=J.viewport||mt;At.setSize(Ft.z*F.transmissionResolutionScale,Ft.w*F.transmissionResolutionScale);let wt=F.getRenderTarget(),Lt=F.getActiveCubeFace(),zt=F.getActiveMipmapLevel();F.setRenderTarget(At),F.getClearColor(ot),Pt=F.getClearAlpha(),Pt<1&&F.setClearColor(16777215,.5),F.clear(),Mn&&N.render(tt);let se=F.toneMapping;F.toneMapping=gi;let ge=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),C.setupLightsView(J),We===!0&&nt.setGlobalState(F.clippingPlanes,J),Os(M,tt,J),jt.updateMultisampleRenderTarget(At),jt.updateRenderTargetMipmap(At),Re.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let ue=0,Xe=O.length;ue<Xe;ue++){let Ce=O[ue],{object:Pe,geometry:Ze,material:Ut,group:Je}=Ce;if(Ut.side===mi&&Pe.layers.test(J.layers)){let Zt=Ut.side;Ut.side=Tn,Ut.needsUpdate=!0,Ea(Pe,tt,J,Ze,Ut,Je),Ut.side=Zt,Ut.needsUpdate=!0,Bt=!0}}Bt===!0&&(jt.updateMultisampleRenderTarget(At),jt.updateRenderTargetMipmap(At))}F.setRenderTarget(wt,Lt,zt),F.setClearColor(ot,Pt),ge!==void 0&&(J.viewport=ge),F.toneMapping=se}function Os(M,O,tt){let J=O.isScene===!0?O.overrideMaterial:null;for(let q=0,At=M.length;q<At;q++){let Ft=M[q],{object:wt,geometry:Lt,group:zt}=Ft,se=Ft.material;se.allowOverride===!0&&J!==null&&(se=J),wt.layers.test(tt.layers)&&Ea(wt,O,tt,Lt,se,zt)}}function Ea(M,O,tt,J,q,At){G!==null&&q.isNodeMaterial&&G.setObject(M,q),M.onBeforeRender(F,O,tt,J,q,At),M.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),q.onBeforeRender(F,O,tt,J,M,At),q.transparent===!0&&q.side===mi&&q.forceSinglePass===!1?(q.side=Tn,q.needsUpdate=!0,F.renderBufferDirect(tt,O,J,q,M,At),q.side=ss,q.needsUpdate=!0,F.renderBufferDirect(tt,O,J,q,M,At),q.side=mi):F.renderBufferDirect(tt,O,J,q,M,At),M.onAfterRender(F,O,tt,J,q,At)}function Aa(M){let O=0;for(let tt of M)tt.texture!==null&&O++;return O}function Hi(M,O,tt){O.isScene!==!0&&(O=Rn);let J=Wt.get(M),q=C.state.lights,At=C.state.shadowsArray,Ft=q.state.version,wt=it.getParameters(M,q.state,At,O,tt,C.state.lightProbeGridArray),Lt=it.getProgramCacheKey(wt),zt=J.programs;J.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?O.environment:null,J.fog=O.fog;let se=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;J.envMap=R.get(M.envMap||J.environment,se),J.envMapRotation=J.environment!==null&&M.envMap===null?O.environmentRotation:M.envMapRotation,zt===void 0&&(M.addEventListener("dispose",be),zt=new Map,J.programs=zt,J.programVariants=new Map);let ge=zt.get(Lt);if(ge!==void 0){if(J.currentProgram===ge&&J.lightsStateVersion===Ft)return Ca(M,wt),ge}else wt.uniforms=it.getUniforms(M),G!==null&&M.isNodeMaterial&&G.build(M,tt,wt),M.onBeforeCompile(wt,F),ge=it.acquireProgram(wt,Lt),zt.set(Lt,ge),J.uniforms=wt.uniforms;let Bt=J.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Bt.clippingPlanes=nt.uniform),Ca(M,wt),J.needsLights=jl(M),J.lightsStateVersion=Ft,J.needsLights&&(Bt.ambientLightColor.value=q.state.ambient,Bt.lightProbe.value=q.state.probe,Bt.sunLights.value=q.state.sun,Bt.sunLightShadows.value=q.state.sunShadow,Bt.directionalLights.value=q.state.directional,Bt.directionalLightShadows.value=q.state.directionalShadow,Bt.spotLights.value=q.state.spot,Bt.spotLightShadows.value=q.state.spotShadow,Bt.rectAreaLights.value=q.state.rectArea,Bt.ltc_1.value=q.state.rectAreaLTC1,Bt.ltc_2.value=q.state.rectAreaLTC2,Bt.pointLights.value=q.state.point,Bt.pointLightShadows.value=q.state.pointShadow,Bt.hemisphereLights.value=q.state.hemi,Bt.sunShadowMatrix.value=q.state.sunShadowMatrix,Bt.sunShadowCascade.value=q.state.sunShadowCascade,Bt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Bt.spotLightMatrix.value=q.state.spotLightMatrix,Bt.spotLightMap.value=q.state.spotLightMap,Bt.pointShadowMatrix.value=q.state.pointShadowMatrix),J.numLightProbeGrids=Aa(C.state.lightProbeGridArray),J.currentProgram=ge,J.uniformsList=null,ge}function Jl(M,O,tt,J,q){let At=Wt.get(M),Ft=At.currentProgram.id+","+J+","+q,wt=At.programVariants.get(Ft);return wt===void 0?(wt=Hi(M,O,tt),At.programVariants.set(Ft,wt)):(At.currentProgram=wt,At.uniformsList=null,At.outputColorSpace=J,At.toneMapping=q),wt}function Ra(M){if(M.uniformsList===null){let O=M.currentProgram.getUniforms();M.uniformsList=mr.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}function Ca(M,O){let tt=Wt.get(M);tt.outputColorSpace=O.outputColorSpace,tt.batching=O.batching,tt.batchingColor=O.batchingColor,tt.instancing=O.instancing,tt.instancingColor=O.instancingColor,tt.instancingMorph=O.instancingMorph,tt.skinning=O.skinning,tt.morphTargets=O.morphTargets,tt.morphNormals=O.morphNormals,tt.morphColors=O.morphColors,tt.morphTargetsCount=O.morphTargetsCount,tt.numClippingPlanes=O.numClippingPlanes,tt.numIntersection=O.numClipIntersection,tt.vertexAlphas=O.vertexAlphas,tt.vertexTangents=O.vertexTangents,tt.toneMapping=O.toneMapping}function Bs(M,O,tt,J,q){O.isScene!==!0&&(O=Rn),jt.resetTextureUnits();let At=O.fog,Ft=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?O.environment:null,wt=pt===null?F.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:Me.workingColorSpace,Lt=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,zt=R.get(J.envMap||Ft,Lt),se=J.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,ge=!!tt.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Bt=!!tt.morphAttributes.position,ue=!!tt.morphAttributes.normal,Xe=!!tt.morphAttributes.color,Ce=gi;J.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(Ce=F.toneMapping);let Pe=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,Ze=Pe!==void 0?Pe.length:0,Ut=Wt.get(J),Je=C.state.lights;if(We===!0&&(mn===!0||M!==ht)){let Ue=M===ht&&J.id===et;nt.setState(J,M,Ue)}let Zt=!1,li=!1;J.version===Ut.__version?Ut.needsLights&&Ut.lightsStateVersion!==Je.state.version||q.isBatchedMesh&&Ut.batching===!1||!q.isBatchedMesh&&Ut.batching===!0||q.isBatchedMesh&&Ut.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Ut.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Ut.instancing===!1||!q.isInstancedMesh&&Ut.instancing===!0||q.isSkinnedMesh&&Ut.skinning===!1||!q.isSkinnedMesh&&Ut.skinning===!0||q.isInstancedMesh&&Ut.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ut.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ut.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ut.instancingMorph===!1&&q.morphTexture!==null||Ut.envMap!==zt||J.fog===!0&&Ut.fog!==At||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==nt.numPlanes||Ut.numIntersection!==nt.numIntersection)||Ut.vertexAlphas!==se||Ut.vertexTangents!==ge||Ut.morphTargets!==Bt||Ut.morphNormals!==ue||Ut.morphColors!==Xe||Ut.morphTargetsCount!==Ze||Ut.numLightProbeGrids!==Aa(C.state.lightProbeGridArray)?Zt=!0:(Ut.outputColorSpace!==wt||Ut.toneMapping!==Ce)&&(li=!0):(Zt=!0,Ut.__version=J.version);let rn=Ut.currentProgram;(Zt===!0||li===!0)&&(rn=li===!0?Jl(J,O,q,wt,Ce):Hi(J,O,q),G&&J.isNodeMaterial&&G.onUpdateProgram(J,rn,Ut));let Gi=!1,ci=!1,Si=!1,ye=rn.getUniforms(),Ke=Ut.uniforms;if(Et.useProgram(rn.program)&&(Gi=!0,ci=!0,Si=!0),J.id!==et&&(et=J.id,ci=!0),Gi||ht!==M){Et.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ye.setValue(H,"projectionMatrix",M.projectionMatrix),ye.setValue(H,"viewMatrix",M.matrixWorldInverse);let $e=ye.map.cameraPosition;$e!==void 0&&$e.setValue(H,qn.setFromMatrixPosition(M.matrixWorld)),Ie.logarithmicDepthBuffer&&ye.setValue(H,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&ye.setValue(H,"isOrthographic",M.isOrthographicCamera===!0),ht!==M&&(ht=M,ci=!0,Si=!0)}if(Ut.needsLights&&(Je.state.sunShadowMap.length>0&&ye.setValue(H,"sunShadowMap",Je.state.sunShadowMap,jt),Je.state.directionalShadowMap.length>0&&ye.setValue(H,"directionalShadowMap",Je.state.directionalShadowMap,jt),Je.state.spotShadowMap.length>0&&ye.setValue(H,"spotShadowMap",Je.state.spotShadowMap,jt),Je.state.pointShadowMap.length>0&&ye.setValue(H,"pointShadowMap",Je.state.pointShadowMap,jt)),q.isSkinnedMesh){ye.setOptional(H,q,"bindMatrix"),ye.setOptional(H,q,"bindMatrixInverse");let Ue=q.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),ye.setValue(H,"boneTexture",Ue.boneTexture,jt))}q.isBatchedMesh&&(ye.setOptional(H,q,"batchingTexture"),ye.setValue(H,"batchingTexture",q._matricesTexture,jt),ye.setOptional(H,q,"batchingIdTexture"),ye.setValue(H,"batchingIdTexture",q._indirectTexture,jt),ye.setOptional(H,q,"batchingColorTexture"),q._colorsTexture!==null&&ye.setValue(H,"batchingColorTexture",q._colorsTexture,jt));let Fn=tt.morphAttributes;if((Fn.position!==void 0||Fn.normal!==void 0||Fn.color!==void 0)&&ct.update(q,tt,rn),(ci||Ut.receiveShadow!==q.receiveShadow)&&(Ut.receiveShadow=q.receiveShadow,ye.setValue(H,"receiveShadow",q.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&O.environment!==null&&(Ke.envMapIntensity.value=O.environmentIntensity),Ke.dfgLUT!==void 0&&(Ke.dfgLUT.value=Dx()),ci){if(ye.setValue(H,"toneMappingExposure",F.toneMappingExposure),Ut.needsLights&&Kl(Ke,Si),At&&J.fog===!0&&Mt.refreshFogUniforms(Ke,At),Mt.refreshMaterialUniforms(Ke,J,It,Yt,C.state.transmissionRenderTarget[M.id]),Ut.needsLights&&Ut.numLightProbeGrids>0){let Ue=E,$e=0;for(let jn of C.state.lightProbeGridArray)jn.texture!==null&&(Ue.textures[$e]=jn.texture,Ue.min[$e]=jn.boundingBox.min,Ue.max[$e]=jn.boundingBox.max,Ue.resolution[$e]=jn.resolution,$e++);for(let jn in Ue)Ue[jn].length=$e;Ke.probesSH.value=Ue.textures,Ke.probesMin.value=Ue.min,Ke.probesMax.value=Ue.max,Ke.probesResolution.value=Ue.resolution}mr.upload(H,Ra(Ut),Ke,jt)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(mr.upload(H,Ra(Ut),Ke,jt),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&ye.setValue(H,"center",q.center),ye.setValue(H,"modelViewMatrix",q.modelViewMatrix),ye.setValue(H,"normalMatrix",q.normalMatrix),ye.setValue(H,"modelMatrix",q.matrixWorld),J.uniformsGroups!==void 0){let Ue=J.uniformsGroups;for(let $e=0,jn=Ue.length;$e<jn;$e++){let Pa=Ue[$e];Xt.update(Pa,rn),Xt.bind(Pa,rn)}}return rn}function Kl(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.sunLights.needsUpdate=O,M.sunLightShadows.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}function jl(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return pt},this.setRenderTargetTextures=function(M,O,tt){let J=Wt.get(M);J.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),Wt.get(M.texture).__webglTexture=O,Wt.get(M.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:tt,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,O){let tt=Wt.get(M);tt.__webglFramebuffer=O,tt.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(M,O=0,tt=0){pt=M,Q=O,j=tt;let J=null,q=!1,At=!1;if(M){let wt=Wt.get(M);if(wt.__useDefaultFramebuffer!==void 0){Et.bindFramebuffer(H.FRAMEBUFFER,wt.__webglFramebuffer),mt.copy(M.viewport),Ht.copy(M.scissor),te=M.scissorTest,Et.viewport(mt),Et.scissor(Ht),Et.setScissorTest(te),et=-1;return}else if(wt.__webglFramebuffer===void 0)jt.setupRenderTarget(M);else if(wt.__hasExternalTextures)jt.rebindTextures(M,Wt.get(M.texture).__webglTexture,Wt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let se=M.depthTexture;if(wt.__boundDepthTexture!==se){if(se!==null&&Wt.has(se)&&(M.width!==se.image.width||M.height!==se.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");jt.setupDepthRenderbuffer(M)}}let Lt=M.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(At=!0);let zt=Wt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(zt[O])?J=zt[O][tt]:J=zt[O],q=!0):M.samples>0&&jt.useMultisampledRTT(M)===!1?J=Wt.get(M).__webglMultisampledFramebuffer:Array.isArray(zt)?J=zt[tt]:J=zt,mt.copy(M.viewport),Ht.copy(M.scissor),te=M.scissorTest}else mt.copy(Kt).multiplyScalar(It).floor(),Ht.copy(Te).multiplyScalar(It).floor(),te=Ee;if(tt!==0&&(J=k),Et.bindFramebuffer(H.FRAMEBUFFER,J)&&Et.drawBuffers(M,J),Et.viewport(mt),Et.scissor(Ht),Et.setScissorTest(te),q){let wt=Wt.get(M.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+O,wt.__webglTexture,tt)}else if(At){let wt=O;for(let Lt=0;Lt<M.textures.length;Lt++){let zt=Wt.get(M.textures[Lt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Lt,zt.__webglTexture,tt,wt)}}else if(M!==null&&tt!==0){let wt=Wt.get(M.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,wt.__webglTexture,tt)}et=-1};function ds(M){let O=Wt.get(M);return(O.__readFormat!==M.format||O.__readType!==M.type)&&(O.__readFormat=M.format,O.__readType=M.type,O.__formatReadable=Ie.textureFormatReadable(M.format),O.__typeReadable=Ie.textureTypeReadable(M.type)),O}this.readRenderTargetPixels=function(M,O,tt,J,q,At,Ft,wt=0){if(!(M&&M.isWebGLRenderTarget)){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Wt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ft!==void 0&&(Lt=Lt[Ft],Array.isArray(Lt)&&(Lt=Lt[0])),Lt){Et.bindFramebuffer(H.FRAMEBUFFER,Lt);try{let zt=M.textures[wt],se=zt.format,ge=zt.type;M.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+wt);let Bt=ds(zt);if(Bt.__formatReadable===!1){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Bt.__typeReadable===!1){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-J&&tt>=0&&tt<=M.height-q&&H.readPixels(O,tt,J,q,yt.convert(se),yt.convert(ge),At)}finally{let zt=pt!==null?Wt.get(pt).__webglFramebuffer:null;Et.bindFramebuffer(H.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(M,O,tt,J,q,At,Ft,wt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=Wt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ft!==void 0&&(Lt=Lt[Ft],Array.isArray(Lt)&&(Lt=Lt[0])),Lt)if(O>=0&&O<=M.width-J&&tt>=0&&tt<=M.height-q){Et.bindFramebuffer(H.FRAMEBUFFER,Lt);let zt=M.textures[wt],se=zt.format,ge=zt.type;M.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+wt);let Bt=ds(zt);if(Bt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Bt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ue=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ue),H.bufferData(H.PIXEL_PACK_BUFFER,At.byteLength,H.STREAM_READ),H.readPixels(O,tt,J,q,yt.convert(se),yt.convert(ge),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let Xe=pt!==null?Wt.get(pt).__webglFramebuffer:null;Et.bindFramebuffer(H.FRAMEBUFFER,Xe);let Ce=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await td(H,Ce,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ue),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,At),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(ue),H.deleteSync(Ce),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,O=null,tt=0){let J=Math.pow(2,-tt),q=Math.floor(M.image.width*J),At=Math.floor(M.image.height*J),Ft=O!==null?O.x:0,wt=O!==null?O.y:0;jt.setTexture2D(M,0),H.copyTexSubImage2D(H.TEXTURE_2D,tt,0,0,Ft,wt,q,At),Et.unbindTexture()},this.copyTextureToTexture=function(M,O,tt=null,J=null,q=0,At=0){let Ft,wt,Lt,zt,se,ge,Bt,ue,Xe,Ce=M.isCompressedTexture?M.mipmaps[At]:M.image;if(tt!==null)Ft=tt.max.x-tt.min.x,wt=tt.max.y-tt.min.y,Lt=tt.isBox3?tt.max.z-tt.min.z:1,zt=tt.min.x,se=tt.min.y,ge=tt.isBox3?tt.min.z:0;else{let ye=Math.pow(2,-q);Ft=Math.floor(Ce.width*ye),wt=Math.floor(Ce.height*ye),M.isDataArrayTexture?Lt=Ce.depth:M.isData3DTexture?Lt=Math.floor(Ce.depth*ye):Lt=1,zt=0,se=0,ge=0}J!==null?(Bt=J.x,ue=J.y,Xe=J.z):(Bt=0,ue=0,Xe=0);let Pe=yt.convert(O.format),Ze=yt.convert(O.type),Ut;O.isData3DTexture?(jt.setTexture3D(O,0),Ut=H.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(jt.setTexture2DArray(O,0),Ut=H.TEXTURE_2D_ARRAY):(jt.setTexture2D(O,0),Ut=H.TEXTURE_2D),Et.activeTexture(H.TEXTURE0),Et.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,O.flipY),Et.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),Et.pixelStorei(H.UNPACK_ALIGNMENT,O.unpackAlignment);let Je=Et.getParameter(H.UNPACK_ROW_LENGTH),Zt=Et.getParameter(H.UNPACK_IMAGE_HEIGHT),li=Et.getParameter(H.UNPACK_SKIP_PIXELS),rn=Et.getParameter(H.UNPACK_SKIP_ROWS),Gi=Et.getParameter(H.UNPACK_SKIP_IMAGES);Et.pixelStorei(H.UNPACK_ROW_LENGTH,Ce.width),Et.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ce.height),Et.pixelStorei(H.UNPACK_SKIP_PIXELS,zt),Et.pixelStorei(H.UNPACK_SKIP_ROWS,se),Et.pixelStorei(H.UNPACK_SKIP_IMAGES,ge);let ci=M.isDataArrayTexture||M.isData3DTexture,Si=O.isDataArrayTexture||O.isData3DTexture;if(M.isDepthTexture){let ye=Wt.get(M),Ke=Wt.get(O),Fn=Wt.get(ye.__renderTarget),Ue=Wt.get(Ke.__renderTarget);Et.bindFramebuffer(H.READ_FRAMEBUFFER,Fn.__webglFramebuffer),Et.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let $e=0;$e<Lt;$e++)ci&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Wt.get(M).__webglTexture,q,ge+$e),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Wt.get(O).__webglTexture,At,Xe+$e)),H.blitFramebuffer(zt,se,zt+Ft,se+wt,Bt,ue,Bt+Ft,ue+wt,H.DEPTH_BUFFER_BIT,H.NEAREST);Et.bindFramebuffer(H.READ_FRAMEBUFFER,null),Et.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(q!==0||M.isRenderTargetTexture||Wt.has(M)){let ye=Wt.get(M),Ke=Wt.get(O);Et.bindFramebuffer(H.READ_FRAMEBUFFER,L),Et.bindFramebuffer(H.DRAW_FRAMEBUFFER,W);for(let Fn=0;Fn<Lt;Fn++)ci?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ye.__webglTexture,q,ge+Fn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ye.__webglTexture,q),Si?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ke.__webglTexture,At,Xe+Fn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ke.__webglTexture,At),q!==0?H.blitFramebuffer(zt,se,zt+Ft,se+wt,Bt,ue,Bt+Ft,ue+wt,H.COLOR_BUFFER_BIT,H.NEAREST):Si?H.copyTexSubImage3D(Ut,At,Bt,ue,Xe+Fn,zt,se,Ft,wt):H.copyTexSubImage2D(Ut,At,Bt,ue,zt,se,Ft,wt);Et.bindFramebuffer(H.READ_FRAMEBUFFER,null),Et.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Si?M.isDataTexture||M.isData3DTexture?H.texSubImage3D(Ut,At,Bt,ue,Xe,Ft,wt,Lt,Pe,Ze,Ce.data):O.isCompressedArrayTexture?H.compressedTexSubImage3D(Ut,At,Bt,ue,Xe,Ft,wt,Lt,Pe,Ce.data):H.texSubImage3D(Ut,At,Bt,ue,Xe,Ft,wt,Lt,Pe,Ze,Ce):M.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,At,Bt,ue,Ft,wt,Pe,Ze,Ce.data):M.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,At,Bt,ue,Ce.width,Ce.height,Pe,Ce.data):H.texSubImage2D(H.TEXTURE_2D,At,Bt,ue,Ft,wt,Pe,Ze,Ce);Et.pixelStorei(H.UNPACK_ROW_LENGTH,Je),Et.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Zt),Et.pixelStorei(H.UNPACK_SKIP_PIXELS,li),Et.pixelStorei(H.UNPACK_SKIP_ROWS,rn),Et.pixelStorei(H.UNPACK_SKIP_IMAGES,Gi),At===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&H.generateMipmap(Ut),Et.unbindTexture()},this.initRenderTarget=function(M){Wt.get(M).__webglFramebuffer===void 0&&jt.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?jt.setTextureCube(M,0):M.isData3DTexture?jt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?jt.setTexture2DArray(M,0):jt.setTexture2D(M,0),Et.unbindTexture()},this.resetState=function(){Q=0,j=0,pt=null,Et.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Me._getDrawingBufferColorSpace(t),e.unpackColorSpace=Me._getUnpackColorSpace()}};var zd={type:"change"},Th={type:"start"},Hd={type:"end"},Ll=new Ss,Vd=new zn,Ux=Math.cos(70*ch.DEG2RAD),tn=new Z,Nn=2*Math.PI,we={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},wh=1e-6,Dl=class extends Qr{constructor(t,e=null){super(t,e),this.state=we.NONE,this.target=new Z,this.cursor=new Z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ns.ROTATE,MIDDLE:ns.DOLLY,RIGHT:ns.PAN},this.touches={ONE:is.ROTATE,TWO:is.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new Z,this._lastQuaternion=new Hn,this._lastTargetPosition=new Z,this._quat=new Hn().setFromUnitVectors(t.up,new Z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new cr,this._sphericalDelta=new cr,this._scale=1,this._panOffset=new Z,this._rotateStart=new ie,this._rotateEnd=new ie,this._rotateDelta=new ie,this._panStart=new ie,this._panEnd=new ie,this._panDelta=new ie,this._dollyStart=new ie,this._dollyEnd=new ie,this._dollyDelta=new ie,this._dollyDirection=new Z,this._mouse=new ie,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ox.bind(this),this._onPointerDown=Fx.bind(this),this._onPointerUp=Bx.bind(this),this._onContextMenu=Xx.bind(this),this._onMouseWheel=Vx.bind(this),this._onKeyDown=Hx.bind(this),this._onTouchStart=Gx.bind(this),this._onTouchMove=Wx.bind(this),this._onMouseDown=kx.bind(this),this._onMouseMove=zx.bind(this),this._interceptControlDown=$x.bind(this),this._interceptControlUp=qx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=we.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(zd),this.update(),this.state=we.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;tn.copy(e).sub(this.target),tn.applyQuaternion(this._quat),this._spherical.setFromVector3(tn),this.autoRotate&&this.state===we.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Nn:n>Math.PI&&(n-=Nn),s<-Math.PI?s+=Nn:s>Math.PI&&(s-=Nn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(tn.setFromSpherical(this._spherical),tn.applyQuaternion(this._quatInverse),e.copy(this.target).add(tn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=tn.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new Z(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new Z(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=tn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ll.origin.copy(this.object.position),Ll.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ll.direction))<Ux?this.object.lookAt(this.target):(Vd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ll.intersectPlane(Vd,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>wh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>wh||this._lastTargetPosition.distanceToSquared(this.target)>wh?(this.dispatchEvent(zd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Nn/60*this.autoRotateSpeed*t:Nn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){tn.setFromMatrixColumn(e,0),tn.multiplyScalar(-t),this._panOffset.add(tn)}_panUp(t,e){this.screenSpacePanning===!0?tn.setFromMatrixColumn(e,1):(tn.setFromMatrixColumn(e,0),tn.crossVectors(this.object.up,tn)),tn.multiplyScalar(t),this._panOffset.add(tn)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;tn.copy(s).sub(this.target);let r=tn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ie,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Fx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Ox(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Bx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Hd),this.state=we.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function kx(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ns.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=we.DOLLY;break;case ns.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=we.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=we.ROTATE}break;case ns.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=we.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=we.PAN}break;default:this.state=we.NONE}this.state!==we.NONE&&this.dispatchEvent(Th)}function zx(i){switch(this.state){case we.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case we.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case we.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Vx(i){this.enabled===!1||this.enableZoom===!1||this.state!==we.NONE||(i.preventDefault(),this.dispatchEvent(Th),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Hd))}function Hx(i){this.enabled!==!1&&this._handleKeyDown(i)}function Gx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case is.ROTATE:if(this.enableRotate===!1){this.state=we.NONE;break}this._handleTouchStartRotate(i),this.state=we.TOUCH_ROTATE;break;case is.PAN:if(this.enablePan===!1){this.state=we.NONE;break}this._handleTouchStartPan(i),this.state=we.TOUCH_PAN;break;default:this.state=we.NONE}break;case 2:switch(this.touches.TWO){case is.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=we.TOUCH_DOLLY_PAN;break;case is.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=we.TOUCH_DOLLY_ROTATE;break;default:this.state=we.NONE}break;default:this.state=we.NONE}this.state!==we.NONE&&this.dispatchEvent(Th)}function Wx(i){switch(this._trackPointer(i),this.state){case we.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case we.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case we.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case we.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=we.NONE}}function Xx(i){this.enabled!==!1&&i.preventDefault()}function $x(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function qx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}async function Yx(i={}){var t,e=i,n=!!globalThis.window,s=!!globalThis.WorkerGlobalScope,r=globalThis.process?.versions?.node&&globalThis.process?.type!="renderer";if(r){let{createRequire:h}=await import("node:module");var a=h(import.meta.url)}var o=!1;e.setup=function(){if(o)return;o=!0,e.initTBB();function h(D,z,rt=(ut=>ut)){if(z)for(let ut of z)D.push_back(rt(ut));return D}function d(D,z=(rt=>rt)){let rt=[],ut=D.size();for(let kt=0;kt<ut;kt++)rt.push(z(D.get(kt)));return rt}function w(D,z=(rt=>rt)){let rt=[],ut=D.size();for(let kt=0;kt<ut;kt++){let re=D.get(kt),ve=re.size(),Fe=[];for(let Le=0;Le<ve;Le++)Fe.push(z(re.get(Le)));rt.push(Fe)}return rt}function P(D){return D[0].length<3&&(D=[D]),h(new e.Vector2_vec2,D,z=>h(new e.Vector_vec2,z,rt=>rt instanceof Array?{x:rt[0],y:rt[1]}:rt))}function U(D){for(let z=0;z<D.size();z++)D.get(z).delete();D.delete()}function X(D){return D[0]instanceof Array?{x:D[0][0],y:D[0][1]}:typeof D[0]=="number"?{x:D[0]||0,y:D[1]||0}:D[0]}function $(D){return D[0]instanceof Array?{x:D[0][0],y:D[0][1],z:D[0][2]}:typeof D[0]=="number"?{x:D[0]||0,y:D[1]||0,z:D[2]||0}:D[0]}function K(D){return D=="EvenOdd"?0:D=="NonZero"?1:D=="Negative"?3:2}function lt(D){return D=="Round"?1:D=="Miter"?2:0}let ft=e.CrossSection;function xt(D,z="Positive"){if(D instanceof ft)return D;{let rt=P(D),ut=new ft(rt,K(z));return U(rt),ut}}e.CrossSection.prototype.translate=function(...D){return this._Translate(X(D))},e.CrossSection.prototype.scale=function(D){return typeof D=="number"?this._Scale({x:D,y:D}):this._Scale(X([D]))},e.CrossSection.prototype.mirror=function(D){return this._Mirror(X([D]))},e.CrossSection.prototype.warp=function(D){let z=ps(function(ut){let kt=me(ut,"double"),re=me(ut+8,"double"),ve=[kt,re];D(ve),Ne(ut,ve[0],"double"),Ne(ut+8,ve[1],"double")},"vi"),rt=this._Warp(z);return ms(z),rt},e.CrossSection.prototype.decompose=function(){let D=this._Decompose(),z=d(D);return D.delete(),z},e.CrossSection.prototype.bounds=function(){let D=this._Bounds();return{min:["x","y"].map(z=>D.min[z]),max:["x","y"].map(z=>D.max[z])}},e.CrossSection.prototype.offset=function(D,z="Round",rt=2,ut=0){return this._Offset(D,lt(z),rt,ut)},e.CrossSection.prototype.simplify=function(D=1e-6){return this._Simplify(D)},e.CrossSection.prototype.extrude=function(D,z=0,rt=0,ut=[1,1],kt=!1){ut=X([ut]);let re=e._Extrude(this._ToPolygons(),D,z,rt,ut);return kt?re.translate([0,0,-D/2]):re},e.CrossSection.prototype.revolve=function(D=0,z=360){return e._Revolve(this._ToPolygons(),D,z)},e.CrossSection.prototype.add=function(D){return this._add(xt(D))},e.CrossSection.prototype.subtract=function(D){return this._subtract(xt(D))},e.CrossSection.prototype.intersect=function(D){return this._intersect(xt(D))},e.CrossSection.prototype.toPolygons=function(){let D=this._ToPolygons(),z=w(D,rt=>[rt.x,rt.y]);return D.delete(),z},e.Manifold.prototype.smoothOut=function(D=52.5,z=0){return this._SmoothOut(D,z)},e.Manifold.prototype.warp=function(D){let z=ps(function(kt){let re=me(kt,"double"),ve=me(kt+8,"double"),Fe=me(kt+16,"double"),Le=[re,ve,Fe];D(Le),Ne(kt,Le[0],"double"),Ne(kt+8,Le[1],"double"),Ne(kt+16,Le[2],"double")},"vi"),rt=this._Warp(z);ms(z);let ut=rt.status();if(ut!=="NoError")throw new e.ManifoldError(ut);return rt},e.Manifold.prototype.warpBatch=function(D){let z=ps(function(kt,re){let ve=e.HEAPF64??W;if(!ve)throw new Error("WASM heap is not initialized (HEAPF64 unavailable)");let Fe=new Float64Array(ve.buffer,kt,re*3);D(Fe,re)},"vii"),rt=this._WarpBatch(z);ms(z);let ut=rt.status();if(ut!=="NoError")throw new e.ManifoldError(ut);return rt},e.Manifold.prototype.calculateNormals=function(D=0,z=52.5){return this._CalculateNormals(D,z)},e.Manifold.prototype.smoothByNormals=function(D=0){return this._SmoothByNormals(D)},e.Manifold.prototype.setProperties=function(D,z){let rt=this.numProp(),ut=ps(function(re,ve,Fe){let Le=[];for(let Oe=0;Oe<D;++Oe)Le[Oe]=me(re+8*Oe,"double");let hi=[];for(let Oe=0;Oe<3;++Oe)hi[Oe]=me(ve+8*Oe,"double");let Wi=[];for(let Oe=0;Oe<rt;++Oe)Wi[Oe]=me(Fe+8*Oe,"double");z(Le,hi,Wi);for(let Oe=0;Oe<D;++Oe)Ne(re+8*Oe,Le[Oe],"double")},"viii"),kt=this._SetProperties(D,ut);return ms(ut),kt},e.Manifold.prototype.translate=function(...D){return this._Translate($(D))},e.Manifold.prototype.rotate=function(D,z,rt){return Array.isArray(D)?this._Rotate(...D):this._Rotate(D,z||0,rt||0)},e.Manifold.prototype.scale=function(D){return typeof D=="number"?this._Scale({x:D,y:D,z:D}):this._Scale($([D]))},e.Manifold.prototype.mirror=function(D){return this._Mirror($([D]))},e.Manifold.prototype.trimByPlane=function(D,z=0){return this._TrimByPlane($([D]),z)},e.Manifold.prototype.slice=function(D=0){let z=this._Slice(D),rt=new ft(z,K("Positive"));return U(z),rt},e.Manifold.prototype.project=function(){let D=this._Project(),z=new ft(D,K("Positive"));return U(D),z},e.Manifold.prototype.rayCast=function(D,z){let rt=this._RayCast($([D]),$([z])),ut=d(rt,kt=>({faceID:kt.faceID,distance:kt.distance,position:["x","y","z"].map(re=>kt.position[re]),normal:["x","y","z"].map(re=>kt.normal[re])}));return rt.delete(),ut},e.Manifold.prototype.split=function(D){let z=this._Split(D),rt=d(z);return z.delete(),rt},e.Manifold.prototype.splitByPlane=function(D,z=0){let rt=this._SplitByPlane($([D]),z),ut=d(rt);return rt.delete(),ut},e.Manifold.prototype.decompose=function(){let D=this._Decompose(),z=d(D);return D.delete(),z},e.Manifold.prototype.boundingBox=function(){let D=this._boundingBox();return{min:["x","y","z"].map(z=>D.min[z]),max:["x","y","z"].map(z=>D.max[z])}},e.Manifold.prototype.simplify=function(D=0){return this._Simplify(D)};class Rt{constructor({numProp:z=3,triVerts:rt=new Uint32Array,vertProperties:ut=new Float32Array,mergeFromVert:kt,mergeToVert:re,runIndex:ve,runOriginalID:Fe,faceID:Le,halfedgeTangent:hi,runTransform:Wi,runFlags:Oe,tolerance:ic=0}={}){this.numProp=z,this.triVerts=rt,this.vertProperties=ut,this.mergeFromVert=kt,this.mergeToVert=re,this.runIndex=ve,this.runOriginalID=Fe,this.faceID=Le,this.halfedgeTangent=hi,this.runTransform=Wi,this.runFlags=Oe,this.tolerance=ic}get numTri(){return this.triVerts.length/3}get numVert(){return this.vertProperties.length/this.numProp}get numRun(){return this.runOriginalID.length}merge(){let{changed:z,mesh:rt}=e._Merge(this);return Object.assign(this,{...rt}),z}verts(z){return this.triVerts.subarray(3*z,3*(z+1))}position(z){return this.vertProperties.subarray(this.numProp*z,this.numProp*z+3)}extras(z){return this.vertProperties.subarray(this.numProp*z+3,this.numProp*(z+1))}tangent(z){return this.halfedgeTangent.subarray(4*z,4*(z+1))}transform(z){let rt=new Array(16);for(let ut of[0,1,2,3])for(let kt of[0,1,2])rt[4*ut+kt]=this.runTransform[12*z+3*ut+kt];return rt[15]=1,rt}backside(z){return this.runFlags!=null&&z<this.runFlags.length&&(this.runFlags[z]&1)!==0}hasNormals(z){return this.runFlags!=null&&z<this.runFlags.length&&(this.runFlags[z]&2)!==0}}e.Mesh=Rt,e.Manifold.prototype.getMesh=function(D=-1){return new Rt(this._GetMeshJS(D))},e.ManifoldError=function(z,...rt){let ut="Unknown error";switch(z){case"NonFiniteVertex":ut="Non-finite vertex";break;case"NotManifold":ut="Not manifold";break;case"VertexOutOfBounds":ut="Vertex index out of bounds";break;case"PropertiesWrongLength":ut="Properties have wrong length";break;case"MissingPositionProperties":ut="Less than three properties";break;case"MergeVectorsDifferentLengths":ut="Merge vectors have different lengths";break;case"MergeIndexOutOfBounds":ut="Merge index out of bounds";break;case"TransformWrongLength":ut="Transform vector has wrong length";break;case"RunIndexWrongLength":ut="Run index vector has wrong length";break;case"FaceIDWrongLength":ut="Face ID vector has wrong length";break;case"InvalidConstruction":ut="Manifold constructed with invalid parameters";break;case"ResultTooLarge":ut="Result exceeds maximum size";break;case"InvalidTangents":ut="Invalid halfedge tangents";break}let kt=Error.apply(this,[ut,...rt]);kt.name=this.name="ManifoldError",this.message=kt.message,this.stack=kt.stack,this.code=z},e.ManifoldError.prototype=Object.create(Error.prototype,{constructor:{value:e.ManifoldError,writable:!0,configurable:!0}}),e.CrossSection=function(D,z="Positive"){let rt=P(D),ut=new ft(rt,K(z));return U(rt),ut},e.CrossSection.ofPolygons=function(D,z="Positive"){return new e.CrossSection(D,z)},e.CrossSection.square=function(...D){let z;D.length==0?z={x:1,y:1}:typeof D[0]=="number"?z={x:D[0],y:D[0]}:z=X(D);let rt=D[1]||!1;return e._Square(z,rt)},e.CrossSection.circle=function(D,z=0){return e._Circle(D,z)};function Nt(D){return function(...z){z.length==1&&(z=z[0]);let rt=new e.Vector_crossSection;for(let kt of z)rt.push_back(xt(kt));let ut=e["_crossSection"+D](rt);return rt.delete(),ut}}e.CrossSection.compose=Nt("Compose"),e.CrossSection.union=Nt("UnionN"),e.CrossSection.difference=Nt("DifferenceN"),e.CrossSection.intersection=Nt("IntersectionN");function Vt(D,z){h(D,z,rt=>rt instanceof Array?{x:rt[0],y:rt[1]}:rt)}e.CrossSection.hull=function(...D){D.length==1&&(D=D[0]);let z=new e.Vector_vec2;for(let ut of D)if(ut instanceof ft)e._crossSectionCollectVertices(z,ut);else if(ut instanceof Array&&ut.length==2&&typeof ut[0]=="number")z.push_back({x:ut[0],y:ut[1]});else if(ut.x)z.push_back(ut);else{let re=ut[0].length==2&&typeof ut[0][0]=="number"||ut[0].x?[ut]:ut;for(let ve of re)Vt(z,ve)}let rt=e._crossSectionHullPoints(z);return z.delete(),rt},e.CrossSection.prototype=Object.create(ft.prototype),Object.defineProperty(e.CrossSection,Symbol.hasInstance,{get:()=>D=>D instanceof ft});let qt=e.Manifold;e.Manifold=function(D){let z=new qt(D),rt=z.status();if(rt!=="NoError")throw new e.ManifoldError(rt);return z},e.Manifold.ofMesh=function(D){return new e.Manifold(D)},e.Manifold.tetrahedron=function(){return e._Tetrahedron()},e.Manifold.cube=function(...D){let z;D.length==0?z={x:1,y:1,z:1}:typeof D[0]=="number"?z={x:D[0],y:D[0],z:D[0]}:z=$(D);let rt=D[1]||!1;return e._Cube(z,rt)},e.Manifold.cylinder=function(D,z,rt=-1,ut=0,kt=!1){return e._Cylinder(D,z,rt,ut,kt)},e.Manifold.sphere=function(D,z=0){return e._Sphere(D,z)},e.Manifold.smooth=function(D,z=[]){let rt=new e.Vector_smoothness;h(rt,z);let ut=e._Smooth(D,rt);return rt.delete(),ut},e.Manifold.extrude=function(D,z,rt=0,ut=0,kt=[1,1],re=!1){return(D instanceof ft?D:e.CrossSection(D,"Positive")).extrude(z,rt,ut,kt,re)},e.Manifold.revolve=function(D,z=0,rt=360){return(D instanceof ft?D:e.CrossSection(D,"Positive")).revolve(z,rt)},e.Manifold.reserveIDs=function(D){return e._ReserveIDs(D)};function Qt(D){return function(...z){z.length==1&&(z=z[0]);let rt=new e.Vector_manifold;for(let kt of z)rt.push_back(kt);let ut=e["_manifold"+D+"N"](rt);return rt.delete(),ut}}e.Manifold.union=Qt("Union"),e.Manifold.compose=e.Manifold.union,e.Manifold.difference=Qt("Difference"),e.Manifold.intersection=Qt("Intersection"),e.Manifold.levelSet=function(D,z,rt,ut=0,kt=-1){let re={min:{x:z.min[0],y:z.min[1],z:z.min[2]},max:{x:z.max[0],y:z.max[1],z:z.max[2]}},ve=ps(function(Le){let hi=me(Le,"double"),Wi=me(Le+8,"double"),Oe=me(Le+16,"double");return D([hi,Wi,Oe])},"di"),Fe=e._LevelSet(ve,re,rt,ut,kt);return ms(ve),Fe},e.ExecutionContext.prototype.fromMesh=function(D){return this._FromMesh(D)},e.ExecutionContext.prototype.smooth=function(D,z=[]){let rt=new e.Vector_smoothness;h(rt,z);let ut=this._Smooth(D,rt);return rt.delete(),ut},e.ExecutionContext.prototype.levelSet=function(D,z,rt,ut=0,kt=-1){let re={min:{x:z.min[0],y:z.min[1],z:z.min[2]},max:{x:z.max[0],y:z.max[1],z:z.max[2]}},ve=ps(function(Le){let hi=me(Le,"double"),Wi=me(Le+8,"double"),Oe=me(Le+16,"double");return D([hi,Wi,Oe])},"di"),Fe=this._LevelSet(ve,re,rt,ut,kt);return ms(ve),Fe};function he(D,z){h(D,z,rt=>rt instanceof Array?{x:rt[0],y:rt[1],z:rt[2]}:rt)}e.Manifold.hull=function(...D){D.length==1&&(D=D[0]);let z=new e.Vector_vec3;for(let ut of D)ut instanceof qt?e._manifoldCollectVertices(z,ut):ut instanceof Array&&ut.length==3&&typeof ut[0]=="number"?z.push_back({x:ut[0],y:ut[1],z:ut[2]}):ut.x?z.push_back(ut):he(z,ut);let rt=e._manifoldHullPoints(z);return z.delete(),rt},e.Manifold.prototype=Object.create(qt.prototype),Object.defineProperty(e.Manifold,Symbol.hasInstance,{get:()=>D=>D instanceof qt}),e.triangulate=function(D,z=-1,rt=!0){let ut=P(D),kt=d(e._Triangulate(ut,z,rt),re=>[re[0],re[1],re[2]]);return U(ut),kt}};var l=[],c="./this.program",f=(h,d)=>{throw d},g=import.meta.url,u="";function p(h){return e.locateFile?e.locateFile(h,u):u+h}var x,S;if(r){var m=a("node:fs");g.startsWith("file:")&&(u=a("node:path").dirname(a("node:url").fileURLToPath(g))+"/"),S=h=>{h=A(h)?new URL(h):h;var d=m.readFileSync(h);return d},x=async(h,d=!0)=>{h=A(h)?new URL(h):h;var w=m.readFileSync(h,d?void 0:"utf8");return w},process.argv.length>1&&(c=process.argv[1].replace(/\\/g,"/")),l=process.argv.slice(2),f=(h,d)=>{throw process.exitCode=h,d}}else if(n||s){try{u=new URL(".",g).href}catch{}s&&(S=h=>{var d=new XMLHttpRequest;return d.open("GET",h,!1),d.responseType="arraybuffer",d.send(null),new Uint8Array(d.response)}),x=async h=>{if(A(h))return new Promise((w,P)=>{var U=new XMLHttpRequest;U.open("GET",h,!0),U.responseType="arraybuffer",U.onload=()=>{if(U.status==200||U.status==0&&U.response){w(U.response);return}P(U.status)},U.onerror=P,U.send(null)});var d=await fetch(h,{credentials:"same-origin"});if(d.ok)return d.arrayBuffer();throw new Error(d.status+" : "+d.url)}}var _=console.log.bind(console),b=console.error.bind(console),I,E=!1,A=h=>h.startsWith("file://"),C,y,T,V,F,B,G,k,L,W,Q,j,pt=!1;function et(){var h=Ia.buffer;T=new Int8Array(h),F=new Int16Array(h),V=new Uint8Array(h),B=new Uint16Array(h),G=new Int32Array(h),k=new Uint32Array(h),L=new Float32Array(h),W=new Float64Array(h),Q=new BigInt64Array(h),j=new BigUint64Array(h)}function ht(){if(e.preRun)for(typeof e.preRun=="function"&&(e.preRun=[e.preRun]);e.preRun.length;)mn(e.preRun.shift());Ee(We)}function mt(){pt=!0,gs.J()}function Ht(){if(e.postRun)for(typeof e.postRun=="function"&&(e.postRun=[e.postRun]);e.postRun.length;)Ye(e.postRun.shift());Ee(pe)}function te(h){e.onAbort?.(h),h="Aborted("+h+")",b(h),E=!0,h+=". Build with -sASSERTIONS for more info.";var d=new WebAssembly.RuntimeError(h);throw y?.(d),d}var ot;function Pt(){return e.locateFile?p("manifold.wasm"):new URL("manifold.wasm",import.meta.url).href}function Ot(h){if(h==ot&&I)return new Uint8Array(I);if(S)return S(h);throw"both async and sync fetching of the wasm failed"}async function Yt(h){if(!I)try{var d=await x(h);return new Uint8Array(d)}catch{}return Ot(h)}async function It(h,d){try{var w=await Yt(h),P=await WebAssembly.instantiate(w,d);return P}catch(U){b(`failed to asynchronously prepare wasm: ${U}`),te(U)}}async function oe(h,d,w){if(!h&&!A(d)&&!r)try{var P=fetch(d,{credentials:"same-origin"}),U=await WebAssembly.instantiateStreaming(P,w);return U}catch(X){b(`wasm streaming compile failed: ${X}`),b("falling back to ArrayBuffer instantiation")}return It(d,w)}function Ge(){var h={a:Jf};return h}async function Kt(){function h(X,$){return gs=X.exports,gs=Kf(gs),Zf(gs),et(),gs}function d(X){return h(X.instance)}var w=Ge();if(e.instantiateWasm)return new Promise((X,$)=>{e.instantiateWasm(w,(K,lt)=>{X(h(K,lt))})});ot??=Pt();var P=await oe(I,ot,w),U=d(P);return U}class Te{name="ExitStatus";constructor(d){this.message=`Program terminated with exit(${d})`,this.status=d}}var Ee=h=>{for(;h.length>0;)h.shift()(e)},pe=[],Ye=h=>pe.push(h),We=[],mn=h=>We.push(h);function me(h,d="i8"){switch(d.endsWith("*")&&(d="*"),d){case"i1":return T[h>>>0];case"i8":return T[h>>>0];case"i16":return F[h>>>1>>>0];case"i32":return G[h>>>2>>>0];case"i64":return Q[h>>>3>>>0];case"float":return L[h>>>2>>>0];case"double":return W[h>>>3>>>0];case"*":return k[h>>>2>>>0];default:te(`invalid type for getValue: ${d}`)}}var qn=!0;function Ne(h,d,w="i8"){switch(w.endsWith("*")&&(w="*"),w){case"i1":T[h>>>0]=d;break;case"i8":T[h>>>0]=d;break;case"i16":F[h>>>1>>>0]=d;break;case"i32":G[h>>>2>>>0]=d;break;case"i64":Q[h>>>3>>>0]=BigInt(d);break;case"float":L[h>>>2>>>0]=d;break;case"double":W[h>>>3>>>0]=d;break;case"*":k[h>>>2>>>0]=d;break;default:te(`invalid type for setValue: ${w}`)}}class Rn{constructor(d){this.excPtr=d,this.ptr=d-24}set_type(d){k[this.ptr+4>>>2>>>0]=d}get_type(){return k[this.ptr+4>>>2>>>0]}set_destructor(d){k[this.ptr+8>>>2>>>0]=d}get_destructor(){return k[this.ptr+8>>>2>>>0]}set_caught(d){d=d?1:0,T[this.ptr+12>>>0]=d}get_caught(){return T[this.ptr+12>>>0]!=0}set_rethrown(d){d=d?1:0,T[this.ptr+13>>>0]=d}get_rethrown(){return T[this.ptr+13>>>0]!=0}init(d,w){this.set_adjusted_ptr(0),this.set_type(d),this.set_destructor(w)}set_adjusted_ptr(d){k[this.ptr+16>>>2>>>0]=d}get_adjusted_ptr(){return k[this.ptr+16>>>2>>>0]}}var Mn=0,Cn=0;function H(h,d,w){h>>>=0,d>>>=0,w>>>=0;var P=new Rn(h);throw P.init(d,w),Mn=h,Cn++,Mn}var Pn=()=>te(""),Re={},Ie=h=>{for(;h.length;){var d=h.pop(),w=h.pop();w(d)}};function Et(h){return this.fromWireType(k[h>>>2>>>0])}var De={},Wt={},jt={},R=class extends Error{constructor(d){super(d),this.name="InternalError"}},v=h=>{throw new R(h)},Y=(h,d,w)=>{h.forEach(K=>jt[K]=d);function P(K){var lt=w(K);lt.length!==h.length&&v("Mismatched type converter count");for(var ft=0;ft<h.length;++ft)nt(h[ft],lt[ft])}var U=new Array(d.length),X=[],$=0;for(let[K,lt]of d.entries())Wt.hasOwnProperty(lt)?U[K]=Wt[lt]:(X.push(lt),De.hasOwnProperty(lt)||(De[lt]=[]),De[lt].push(()=>{U[K]=Wt[lt],++$,$===X.length&&P(U)}));X.length===0&&P(U)},_t=function(h){h>>>=0;var d=Re[h];delete Re[h];var w=d.rawConstructor,P=d.rawDestructor,U=d.fields,X=U.map($=>$.getterReturnType).concat(U.map($=>$.setterArgumentType));Y([h],X,$=>{var K={};for(var[lt,ft]of U.entries()){let xt=$[lt],Rt=ft.getter,Nt=ft.getterContext,Vt=$[lt+U.length],qt=ft.setter,Qt=ft.setterContext;K[ft.fieldName]={read:he=>xt.fromWireType(Rt(Nt,he)),write:(he,D)=>{var z=[];qt(Qt,he,Vt.toWireType(z,D)),Ie(z)},optional:xt.optional}}return[{name:d.name,fromWireType:xt=>{var Rt={};for(var Nt in K)Rt[Nt]=K[Nt].read(xt);return P(xt),Rt},toWireType:(xt,Rt)=>{for(var Nt in K)if(!(Nt in Rt)&&!K[Nt].optional)throw new TypeError(`Missing field: "${Nt}"`);var Vt=w();for(Nt in K)K[Nt].write(Vt,Rt[Nt]);return xt!==null&&xt.push(P,Vt),Vt},readValueFromPointer:Et,destructorFunction:P}]})},it=h=>{h>>>=0;for(var d="";;){var w=V[h++>>>0];if(!w)return d;d+=String.fromCharCode(w)}},Mt=class extends Error{constructor(d){super(d),this.name="BindingError"}},dt=h=>{throw new Mt(h)};function at(h,d,w={}){var P=d.name;if(h||dt(`type "${P}" must have a positive integer typeid pointer`),Wt.hasOwnProperty(h)){if(w.ignoreDuplicateRegistrations)return;dt(`Cannot register type '${P}' twice`)}if(Wt[h]=d,delete jt[h],De.hasOwnProperty(h)){var U=De[h];delete De[h],U.forEach(X=>X())}}function nt(h,d,w={}){return at(h,d,w)}var Tt=(h,d,w)=>{switch(d){case 1:return w?P=>T[P>>>0]:P=>V[P>>>0];case 2:return w?P=>F[P>>>1>>>0]:P=>B[P>>>1>>>0];case 4:return w?P=>G[P>>>2>>>0]:P=>k[P>>>2>>>0];case 8:return w?P=>Q[P>>>3>>>0]:P=>j[P>>>3>>>0];default:throw new TypeError(`invalid integer width (${d}): ${h}`)}},N=function(h,d,w,P,U){h>>>=0,d>>>=0,w>>>=0,d=it(d);let X=P===0n,$=K=>K;if(X){let K=w*8;$=lt=>BigInt.asUintN(K,lt),U=$(U)}nt(h,{name:d,fromWireType:$,toWireType:(K,lt)=>(typeof lt=="number"&&(lt=BigInt(lt)),lt),readValueFromPointer:Tt(d,w,!X),destructorFunction:null})};function ct(h,d,w,P){h>>>=0,d>>>=0,d=it(d),nt(h,{name:d,fromWireType:function(U){return!!U},toWireType:function(U,X){return X?w:P},readValueFromPointer:function(U){return this.fromWireType(V[U>>>0])},destructorFunction:null})}var st=h=>({count:h.count,deleteScheduled:h.deleteScheduled,preservePointerOnDelete:h.preservePointerOnDelete,ptr:h.ptr,ptrType:h.ptrType,smartPtr:h.smartPtr,smartPtrType:h.smartPtrType}),St=h=>{function d(w){return w.$$.ptrType.registeredClass.name}dt(d(h)+" instance already deleted")},yt=!1,bt=h=>{},Xt=h=>{h.smartPtr?h.smartPtrType.rawDestructor(h.smartPtr):h.ptrType.registeredClass.rawDestructor(h.ptr)},le=h=>{h.count.value-=1;var d=h.count.value===0;d&&Xt(h)},gt=h=>globalThis.FinalizationRegistry?(yt=new FinalizationRegistry(d=>{le(d.$$)}),gt=d=>{var w=d.$$,P=!!w.smartPtr;if(P){var U={$$:w};yt.register(d,U,d)}return d},bt=d=>yt.unregister(d),gt(h)):(gt=d=>d,h),$t=[],ce=()=>{for(;$t.length;){var h=$t.pop();h.$$.deleteScheduled=!1,h.delete()}},Ct,be=()=>{let h=He.prototype;Object.assign(h,{isAliasOf(w){if(!(this instanceof He)||!(w instanceof He))return!1;var P=this.$$.ptrType.registeredClass,U=this.$$.ptr;w.$$=w.$$;for(var X=w.$$.ptrType.registeredClass,$=w.$$.ptr;P.baseClass;)U=P.upcast(U),P=P.baseClass;for(;X.baseClass;)$=X.upcast($),X=X.baseClass;return P===X&&U===$},clone(){if(this.$$.ptr||St(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var w=gt(Object.create(Object.getPrototypeOf(this),{$$:{value:st(this.$$)}}));return w.$$.count.value+=1,w.$$.deleteScheduled=!1,w},delete(){this.$$.ptr||St(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&dt("Object already scheduled for deletion"),bt(this),le(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||St(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&dt("Object already scheduled for deletion"),$t.push(this),$t.length===1&&Ct&&Ct(ce),this.$$.deleteScheduled=!0,this}});let d=Symbol.dispose;d&&(h[d]=h.delete)};function He(){}var Un=(h,d)=>Object.defineProperty(d,"name",{value:h}),br={},Ns=(h,d,w)=>{if(h[d].overloadTable===void 0){var P=h[d];h[d]=function(...U){return h[d].overloadTable.hasOwnProperty(U.length)||dt(`Function '${w}' called with an invalid number of arguments (${U.length}) - expects one of (${h[d].overloadTable})!`),h[d].overloadTable[U.length].apply(this,U)},h[d].overloadTable=[],h[d].overloadTable[P.argCount]=P}},us=(h,d,w)=>{e.hasOwnProperty(h)?((w===void 0||e[h].overloadTable!==void 0&&e[h].overloadTable[w]!==void 0)&&dt(`Cannot register public name '${h}' twice`),Ns(e,h,h),e[h].overloadTable.hasOwnProperty(w)&&dt(`Cannot register multiple overloads of a function with the same number of arguments (${w})!`),e[h].overloadTable[w]=d):(e[h]=d,e[h].argCount=w)},wa=48,Ta=57,Mi=h=>{h=h.replace(/[^a-zA-Z0-9_]/g,"$");var d=h.charCodeAt(0);return d>=wa&&d<=Ta?`_${h}`:h};function wr(h,d,w,P,U,X,$,K){this.name=h,this.constructor=d,this.instancePrototype=w,this.rawDestructor=P,this.baseClass=U,this.getActualType=X,this.upcast=$,this.downcast=K,this.pureVirtualFunctions=[]}var Us=(h,d,w)=>{for(;d!==w;)d.upcast||dt(`Expected null or instance of ${w.name}, got an instance of ${d.name}`),h=d.upcast(h),d=d.baseClass;return h},Fs=h=>{if(h===null)return"null";var d=typeof h;return d==="object"||d==="array"||d==="function"?h.toString():""+h};function Os(h,d){if(d===null)return this.isReference&&dt(`null is not a valid ${this.name}`),0;d.$$||dt(`Cannot pass "${Fs(d)}" as a ${this.name}`),d.$$.ptr||dt(`Cannot pass deleted object as a pointer of type ${this.name}`);var w=d.$$.ptrType.registeredClass,P=Us(d.$$.ptr,w,this.registeredClass);return P}function Ea(h,d){var w;if(d===null)return this.isReference&&dt(`null is not a valid ${this.name}`),this.isSmartPointer?(w=this.rawConstructor(),h!==null&&h.push(this.rawDestructor,w),w):0;(!d||!d.$$)&&dt(`Cannot pass "${Fs(d)}" as a ${this.name}`),d.$$.ptr||dt(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&d.$$.ptrType.isConst&&dt(`Cannot convert argument of type ${d.$$.smartPtrType?d.$$.smartPtrType.name:d.$$.ptrType.name} to parameter type ${this.name}`);var P=d.$$.ptrType.registeredClass;if(w=Us(d.$$.ptr,P,this.registeredClass),this.isSmartPointer)switch(d.$$.smartPtr===void 0&&dt("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:d.$$.smartPtrType===this?w=d.$$.smartPtr:dt(`Cannot convert argument of type ${d.$$.smartPtrType?d.$$.smartPtrType.name:d.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:w=d.$$.smartPtr;break;case 2:if(d.$$.smartPtrType===this)w=d.$$.smartPtr;else{var U=d.clone();w=this.rawShare(w,Zt.toHandle(()=>U.delete())),h!==null&&h.push(this.rawDestructor,w)}break;default:dt("Unsupported sharing policy")}return w}function Aa(h,d){if(d===null)return this.isReference&&dt(`null is not a valid ${this.name}`),0;d.$$||dt(`Cannot pass "${Fs(d)}" as a ${this.name}`),d.$$.ptr||dt(`Cannot pass deleted object as a pointer of type ${this.name}`),d.$$.ptrType.isConst&&dt(`Cannot convert argument of type ${d.$$.ptrType.name} to parameter type ${this.name}`);var w=d.$$.ptrType.registeredClass,P=Us(d.$$.ptr,w,this.registeredClass);return P}var Hi=(h,d,w)=>{if(d===w)return h;if(w.baseClass===void 0)return null;var P=Hi(h,d,w.baseClass);return P===null?null:w.downcast(P)},Jl={},Ra=(h,d)=>{for(d===void 0&&dt("ptr should not be undefined");h.baseClass;)d=h.upcast(d),h=h.baseClass;return d},Ca=(h,d)=>(d=Ra(h,d),Jl[d]),Bs=(h,d)=>{(!d.ptrType||!d.ptr)&&v("makeClassHandle requires ptr and ptrType");var w=!!d.smartPtrType,P=!!d.smartPtr;return w!==P&&v("Both smartPtrType and smartPtr must be specified"),d.count={value:1},gt(Object.create(h,{$$:{value:d,writable:!0}}))};function Kl(h){var d=this.getPointee(h);if(!d)return this.destructor(h),null;var w=Ca(this.registeredClass,d);if(w!==void 0){if(w.$$.count.value===0)return w.$$.ptr=d,w.$$.smartPtr=h,w.clone();var P=w.clone();return this.destructor(h),P}function U(){return this.isSmartPointer?Bs(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:d,smartPtrType:this,smartPtr:h}):Bs(this.registeredClass.instancePrototype,{ptrType:this,ptr:h})}var X=this.registeredClass.getActualType(d),$=br[X];if(!$)return U.call(this);var K;this.isConst?K=$.constPointerType:K=$.pointerType;var lt=Hi(d,this.registeredClass,K.registeredClass);return lt===null?U.call(this):this.isSmartPointer?Bs(K.registeredClass.instancePrototype,{ptrType:K,ptr:lt,smartPtrType:this,smartPtr:h}):Bs(K.registeredClass.instancePrototype,{ptrType:K,ptr:lt})}var jl=()=>{Object.assign(ds.prototype,{getPointee(h){return this.rawGetPointee&&(h=this.rawGetPointee(h)),h},destructor(h){this.rawDestructor?.(h)},readValueFromPointer:Et,fromWireType:Kl})};function ds(h,d,w,P,U,X,$,K,lt,ft,xt){this.name=h,this.registeredClass=d,this.isReference=w,this.isConst=P,this.isSmartPointer=U,this.pointeeType=X,this.sharingPolicy=$,this.rawGetPointee=K,this.rawConstructor=lt,this.rawShare=ft,this.rawDestructor=xt,!U&&d.baseClass===void 0?P?(this.toWireType=Os,this.destructorFunction=null):(this.toWireType=Aa,this.destructorFunction=null):this.toWireType=Ea}var M=(h,d,w)=>{e.hasOwnProperty(h)||v("Replacing nonexistent public symbol"),e[h].overloadTable!==void 0&&w!==void 0?e[h].overloadTable[w]=d:(e[h]=d,e[h].argCount=w)},O=h=>Tr.get(h),tt=(h,d,w=[],P=!1)=>{var U=O(d),X=U(...w);function $(K){return h[0]=="p"?K>>>0:K}return $(X)},J=(h,d,w=!1)=>(...P)=>tt(h,d,P,w),q=(h,d,w=!1)=>{h=it(h);function P(){if(h.includes("p"))return J(h,d,w);var X=O(d);return X}var U=P();return typeof U!="function"&&dt(`unknown function pointer with signature ${h}: ${d}`),U};class At extends Error{}var Ft=h=>{var d=Wh(h),w=it(d);return bi(d),w},wt=(h,d)=>{var w=[],P={};function U(X){if(!P[X]&&!Wt[X]){if(jt[X]){jt[X].forEach(U);return}w.push(X),P[X]=!0}}throw d.forEach(U),new At(`${h}: `+w.map(Ft).join([", "]))};function Lt(h,d,w,P,U,X,$,K,lt,ft,xt,Rt,Nt){h>>>=0,d>>>=0,w>>>=0,P>>>=0,U>>>=0,X>>>=0,$>>>=0,K>>>=0,lt>>>=0,ft>>>=0,xt>>>=0,Rt>>>=0,Nt>>>=0,xt=it(xt),X=q(U,X),K&&=q($,K),ft&&=q(lt,ft),Nt=q(Rt,Nt);var Vt=Mi(xt);us(Vt,function(){wt(`Cannot construct ${xt} due to unbound types`,[P])}),Y([h,d,w],P?[P]:[],qt=>{qt=qt[0];var Qt,he;P?(Qt=qt.registeredClass,he=Qt.instancePrototype):he=He.prototype;var D=Un(xt,function(...ve){if(Object.getPrototypeOf(this)!==z)throw new Mt(`Use 'new' to construct ${xt}`);if(rt.constructor_body===void 0)throw new Mt(`${xt} has no accessible constructor`);var Fe=rt.constructor_body[ve.length];if(Fe===void 0)throw new Mt(`Tried to invoke ctor of ${xt} with invalid number of parameters (${ve.length}) - expected (${Object.keys(rt.constructor_body).toString()}) parameters instead!`);return Fe.apply(this,ve)}),z=Object.create(he,{constructor:{value:D}});D.prototype=z;var rt=new wr(xt,D,z,Nt,Qt,X,K,ft);rt.baseClass&&(rt.baseClass.__derivedClasses??=[],rt.baseClass.__derivedClasses.push(rt));var ut=new ds(xt,rt,!0,!1,!1),kt=new ds(xt+"*",rt,!1,!1,!1),re=new ds(xt+" const*",rt,!1,!0,!1);return br[h]={pointerType:kt,constPointerType:re},M(Vt,D),[ut,kt,re]})}var zt=(h,d)=>{for(var w=[],P=0;P<h;P++)w.push(k[d+P*4>>>2>>>0]);return w};function se(h){for(var d=1;d<h.length;++d)if(h[d]!==null&&h[d].destructorFunction===void 0)return!0;return!1}var ge={ftf:function(d,w,P,U,X,$,K){return function(){var lt=P(U),ft=$(lt);return ft}},tffn:function(d,w,P,U,X,$,K){return function(){var lt=K(null,this);P(U,lt)}},ttfn:function(d,w,P,U,X,$,K){return function(){var lt=K(null,this),ft=P(U,lt),xt=$(ft);return xt}},ttfnn:function(d,w,P,U,X,$,K,lt){return function(ft){var xt=K(null,this),Rt=lt(null,ft),Nt=P(U,xt,Rt),Vt=$(Nt);return Vt}},ttfnnn:function(d,w,P,U,X,$,K,lt,ft){return function(xt,Rt){var Nt=K(null,this),Vt=lt(null,xt),qt=ft(null,Rt),Qt=P(U,Nt,Vt,qt),he=$(Qt);return he}},ttfnntnnn:function(d,w,P,U,X,$,K,lt,ft,xt,Rt,Nt,Vt){return function(qt,Qt,he,D,z){var rt=K(null,this),ut=lt(null,qt),kt=ft(null,Qt),re=xt(null,he),ve=Rt(null,D),Fe=Nt(null,z),Le=P(U,rt,ut,kt,re,ve,Fe);Vt(kt);var hi=$(Le);return hi}},tffnt:function(d,w,P,U,X,$,K,lt,ft){return function(xt){var Rt=K(null,this),Nt=lt(null,xt);P(U,Rt,Nt),ft(Nt)}},tffnnt:function(d,w,P,U,X,$,K,lt,ft,xt){return function(Rt,Nt){var Vt=K(null,this),qt=lt(null,Rt),Qt=ft(null,Nt);P(U,Vt,qt,Qt),xt(Qt)}},ttfnnt:function(d,w,P,U,X,$,K,lt,ft,xt){return function(Rt,Nt){var Vt=K(null,this),qt=lt(null,Rt),Qt=ft(null,Nt),he=P(U,Vt,qt,Qt);xt(Qt);var D=$(he);return D}},tffnn:function(d,w,P,U,X,$,K,lt){return function(ft){var xt=K(null,this),Rt=lt(null,ft);P(U,xt,Rt)}},tffnnn:function(d,w,P,U,X,$,K,lt,ft){return function(xt,Rt){var Nt=K(null,this),Vt=lt(null,xt),qt=ft(null,Rt);P(U,Nt,Vt,qt)}},ftfnn:function(d,w,P,U,X,$,K,lt,ft){return function(xt,Rt){var Nt=lt(null,xt),Vt=ft(null,Rt),qt=P(U,Nt,Vt),Qt=$(qt);return Qt}},ttfnt:function(d,w,P,U,X,$,K,lt,ft){return function(xt){var Rt=K(null,this),Nt=lt(null,xt),Vt=P(U,Rt,Nt);ft(Nt);var qt=$(Vt);return qt}},ttfnnnnn:function(d,w,P,U,X,$,K,lt,ft,xt,Rt){return function(Nt,Vt,qt,Qt){var he=K(null,this),D=lt(null,Nt),z=ft(null,Vt),rt=xt(null,qt),ut=Rt(null,Qt),kt=P(U,he,D,z,rt,ut),re=$(kt);return re}},ftftn:function(d,w,P,U,X,$,K,lt,ft,xt){return function(Rt,Nt){var Vt=lt(null,Rt),qt=ft(null,Nt),Qt=P(U,Vt,qt);xt(Vt);var he=$(Qt);return he}},ftfn:function(d,w,P,U,X,$,K,lt){return function(ft){var xt=lt(null,ft),Rt=P(U,xt),Nt=$(Rt);return Nt}},fffnn:function(d,w,P,U,X,$,K,lt,ft){return function(xt,Rt){var Nt=lt(null,xt),Vt=ft(null,Rt);P(U,Nt,Vt)}},ttfntn:function(d,w,P,U,X,$,K,lt,ft,xt){return function(Rt,Nt){var Vt=K(null,this),qt=lt(null,Rt),Qt=ft(null,Nt),he=P(U,Vt,qt,Qt);xt(qt);var D=$(he);return D}},ttfnnnn:function(d,w,P,U,X,$,K,lt,ft,xt){return function(Rt,Nt,Vt){var qt=K(null,this),Qt=lt(null,Rt),he=ft(null,Nt),D=xt(null,Vt),z=P(U,qt,Qt,he,D),rt=$(z);return rt}},ttfntt:function(d,w,P,U,X,$,K,lt,ft,xt,Rt){return function(Nt,Vt){var qt=K(null,this),Qt=lt(null,Nt),he=ft(null,Vt),D=P(U,qt,Qt,he);xt(Qt),Rt(he);var z=$(D);return z}},ftfnnnnn:function(d,w,P,U,X,$,K,lt,ft,xt,Rt,Nt){return function(Vt,qt,Qt,he,D){var z=lt(null,Vt),rt=ft(null,qt),ut=xt(null,Qt),kt=Rt(null,he),re=Nt(null,D),ve=P(U,z,rt,ut,kt,re),Fe=$(ve);return Fe}},ftfnnnnt:function(d,w,P,U,X,$,K,lt,ft,xt,Rt,Nt,Vt){return function(qt,Qt,he,D,z){var rt=lt(null,qt),ut=ft(null,Qt),kt=xt(null,he),re=Rt(null,D),ve=Nt(null,z),Fe=P(U,rt,ut,kt,re,ve);Vt(ve);var Le=$(Fe);return Le}},ftfnnn:function(d,w,P,U,X,$,K,lt,ft,xt){return function(Rt,Nt,Vt){var qt=lt(null,Rt),Qt=ft(null,Nt),he=xt(null,Vt),D=P(U,qt,Qt,he),z=$(D);return z}},ftfntnnn:function(d,w,P,U,X,$,K,lt,ft,xt,Rt,Nt,Vt){return function(qt,Qt,he,D,z){var rt=lt(null,qt),ut=ft(null,Qt),kt=xt(null,he),re=Rt(null,D),ve=Nt(null,z),Fe=P(U,rt,ut,kt,re,ve);Vt(ut);var Le=$(Fe);return Le}},fffn:function(d,w,P,U,X,$,K,lt){return function(ft){var xt=lt(null,ft);P(U,xt)}},fff:function(d,w,P,U,X,$,K){return function(){P(U)}}};function Bt(h,d,w,P){let U=[d?"t":"f",w?"t":"f",P?"t":"f"];for(let X=d?1:2;X<h.length;++X){let $=h[X],K="";$.destructorFunction===void 0?K="u":$.destructorFunction===null?K="n":K="t",U.push(K)}return U.join("")}function ue(h,d,w,P,U,X){var $=d.length;$<2&&dt("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var K=d[1]!==null&&w!==null,lt=se(d),ft=!d[0].isVoid,xt=d[0],Rt=d[1],Nt=[h,dt,P,U,Ie,xt.fromWireType.bind(xt),Rt?.toWireType.bind(Rt)],Vt=2;Vt<$;++Vt){var qt=d[Vt];Nt.push(qt.toWireType.bind(qt))}if(!lt)for(var Vt=K?1:2;Vt<d.length;++Vt)d[Vt].destructorFunction!==null&&Nt.push(d[Vt].destructorFunction);var Qt=Bt(d,K,ft,X),he=ge[Qt](...Nt);return Un(h,he)}var Xe=function(h,d,w,P,U,X){h>>>=0,w>>>=0,P>>>=0,U>>>=0,X>>>=0;var $=zt(d,w);U=q(P,U),Y([],[h],K=>{K=K[0];var lt=`constructor ${K.name}`;if(K.registeredClass.constructor_body===void 0&&(K.registeredClass.constructor_body=[]),K.registeredClass.constructor_body[d-1]!==void 0)throw new Mt(`Cannot register multiple constructors with identical number of parameters (${d-1}) for class '${K.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return K.registeredClass.constructor_body[d-1]=()=>{wt(`Cannot construct ${K.name} due to unbound types`,$)},Y([],$,ft=>(ft.splice(1,0,null),K.registeredClass.constructor_body[d-1]=ue(lt,ft,null,U,X),[])),[]})},Ce=h=>{h=h.trim();let d=h.indexOf("(");return d===-1?h:h.slice(0,d)},Pe=function(h,d,w,P,U,X,$,K,lt,ft){h>>>=0,d>>>=0,P>>>=0,U>>>=0,X>>>=0,$>>>=0;var xt=zt(w,P);d=it(d),d=Ce(d),X=q(U,X,lt),Y([],[h],Rt=>{Rt=Rt[0];var Nt=`${Rt.name}.${d}`;d.startsWith("@@")&&(d=Symbol[d.substring(2)]),K&&Rt.registeredClass.pureVirtualFunctions.push(d);function Vt(){wt(`Cannot call ${Nt} due to unbound types`,xt)}var qt=Rt.registeredClass.instancePrototype,Qt=qt[d];return Qt===void 0||Qt.overloadTable===void 0&&Qt.className!==Rt.name&&Qt.argCount===w-2?(Vt.argCount=w-2,Vt.className=Rt.name,qt[d]=Vt):(Ns(qt,d,Nt),qt[d].overloadTable[w-2]=Vt),Y([],xt,he=>{var D=ue(Nt,he,Rt,X,$,lt);return qt[d].overloadTable===void 0?(D.argCount=w-2,qt[d]=D):qt[d].overloadTable[w-2]=D,[]}),[]})},Ze=[],Ut=[0,1,,1,null,1,!0,1,!1,1];function Je(h){h>>>=0,h>9&&--Ut[h+1]===0&&(Ut[h]=void 0,Ze.push(h))}var Zt={toValue:h=>(h||dt(`Cannot use deleted val. handle = ${h}`),Ut[h]),toHandle:h=>{switch(h){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{let d=Ze.pop()||Ut.length;return Ut[d]=h,Ut[d+1]=1,d}}}},li={name:"emscripten::val",fromWireType:h=>{var d=Zt.toValue(h);return Je(h),d},toWireType:(h,d)=>Zt.toHandle(d),readValueFromPointer:Et,destructorFunction:null};function rn(h){return h>>>=0,nt(h,li)}var Gi=(h,d,w)=>{switch(d){case 1:return w?function(P){return this.fromWireType(T[P>>>0])}:function(P){return this.fromWireType(V[P>>>0])};case 2:return w?function(P){return this.fromWireType(F[P>>>1>>>0])}:function(P){return this.fromWireType(B[P>>>1>>>0])};case 4:return w?function(P){return this.fromWireType(G[P>>>2>>>0])}:function(P){return this.fromWireType(k[P>>>2>>>0])};default:throw new TypeError(`invalid integer width (${d}): ${h}`)}};function ci(h){return h===0?"object":h===1?"number":"string"}function Si(h,d,w,P,U){h>>>=0,d>>>=0,w>>>=0,d=it(d);let X=ci(U);switch(X){case"object":{let ft=function(){};ft.values={},nt(h,{name:d,constructor:ft,valueType:X,fromWireType:function(xt){return this.constructor.values[xt]},toWireType:(xt,Rt)=>Rt.value,readValueFromPointer:Gi(d,w,P),destructorFunction:null}),us(d,ft);break}case"number":{var $={};nt(h,{name:d,keysMap:$,valueType:X,fromWireType:ft=>ft,toWireType:(ft,xt)=>xt,readValueFromPointer:Gi(d,w,P),destructorFunction:null}),us(d,$),delete e[d].argCount;break}case"string":{var K={},lt={},$={};nt(h,{name:d,valuesMap:K,reverseMap:lt,keysMap:$,valueType:X,fromWireType:function(xt){return this.reverseMap[xt]},toWireType:function(xt,Rt){return this.valuesMap[Rt]},readValueFromPointer:Gi(d,w,P),destructorFunction:null}),us(d,$),delete e[d].argCount;break}}}var ye=(h,d)=>{var w=Wt[h];return w===void 0&&dt(`${d} has unknown type ${Ft(h)}`),w};function Ke(h,d,w){h>>>=0,d>>>=0;var P=ye(h,"enum");switch(d=it(d),P.valueType){case"object":{var U=P.constructor,X=Object.create(P.constructor.prototype,{value:{value:w},constructor:{value:Un(`${P.name}_${d}`,function(){})}});U.values[w]=X,U[d]=X;break}case"number":{P.keysMap[d]=w;break}case"string":{P.valuesMap[d]=w,P.reverseMap[w]=d,P.keysMap[d]=d;break}}}var Fn=(h,d)=>{switch(d){case 4:return function(w){return this.fromWireType(L[w>>>2>>>0])};case 8:return function(w){return this.fromWireType(W[w>>>3>>>0])};default:throw new TypeError(`invalid float width (${d}): ${h}`)}},Ue=function(h,d,w){h>>>=0,d>>>=0,w>>>=0,d=it(d),nt(h,{name:d,fromWireType:P=>P,toWireType:(P,U)=>U,readValueFromPointer:Fn(d,w),destructorFunction:null})};function $e(h,d,w,P,U,X,$,K){h>>>=0,w>>>=0,P>>>=0,U>>>=0,X>>>=0;var lt=zt(d,w);h=it(h),h=Ce(h),U=q(P,U,$),us(h,function(){wt(`Cannot call ${h} due to unbound types`,lt)},d-1),Y([],lt,ft=>{var xt=[ft[0],null].concat(ft.slice(1));return M(h,ue(h,xt,null,U,X,$),d-1),[]})}var jn=function(h,d,w,P,U){h>>>=0,d>>>=0,w>>>=0,d=it(d);let X=P===0,$=lt=>lt;if(X){var K=32-8*w;$=lt=>lt<<K>>>K,U=$(U)}nt(h,{name:d,fromWireType:$,toWireType:(lt,ft)=>ft,readValueFromPointer:Tt(d,w,P!==0),destructorFunction:null})},Pa=(h,d,w)=>{let P=(U,X)=>{let $=0;return{next(){if($>=U)return{done:!0};let K=$;return $++,{value:X(K),done:!1}},[Symbol.iterator](){return this}}};h[Symbol.iterator]||(h[Symbol.iterator]=function(){let U=this[d]();return P(U,X=>this[w](X))})},sf=function(h,d,w,P){h>>>=0,d>>>=0,w>>>=0,P>>>=0,w=it(w),P=it(P),Y([],[h,d],U=>{let X=U[0];return Pa(X.registeredClass.instancePrototype,w,P),[]})};function rf(h,d,w){h>>>=0,w>>>=0;var P=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],U=P[d];function X($){var K=k[$>>>2>>>0],lt=k[$+4>>>2>>>0];return new U(T.buffer,lt,K)}w=it(w),nt(h,{name:w,fromWireType:X,readValueFromPointer:X},{ignoreDuplicateRegistrations:!0})}var af=Object.assign({optional:!0},li);function of(h,d){h>>>=0,d>>>=0,nt(h,af)}var lf=(h,d,w,P)=>{if(w>>>=0,!(P>0))return 0;for(var U=w,X=w+P-1,$=0;$<h.length;++$){var K=h.codePointAt($);if(K<=127){if(w>=X)break;d[w++>>>0]=K}else if(K<=2047){if(w+1>=X)break;d[w++>>>0]=192|K>>6,d[w++>>>0]=128|K&63}else if(K<=65535){if(w+2>=X)break;d[w++>>>0]=224|K>>12,d[w++>>>0]=128|K>>6&63,d[w++>>>0]=128|K&63}else{if(w+3>=X)break;d[w++>>>0]=240|K>>18,d[w++>>>0]=128|K>>12&63,d[w++>>>0]=128|K>>6&63,d[w++>>>0]=128|K&63,$++}}return d[w>>>0]=0,w-U},cf=(h,d,w)=>lf(h,V,d,w),hf=h=>{for(var d=0,w=0;w<h.length;++w){var P=h.charCodeAt(w);P<=127?d++:P<=2047?d+=2:P>=55296&&P<=57343?(d+=4,++w):d+=3}return d},Bh=globalThis.TextDecoder&&new TextDecoder,kh=(h,d,w,P)=>{var U=d+w;if(P)return U;for(;h[d]&&!(d>=U);)++d;return d},uf=(h,d=0,w,P)=>{d>>>=0;var U=kh(h,d,w,P);if(U-d>16&&h.buffer&&Bh)return Bh.decode(h.subarray(d,U));for(var X="";d<U;){var $=h[d++];if(!($&128)){X+=String.fromCharCode($);continue}var K=h[d++]&63;if(($&224)==192){X+=String.fromCharCode(($&31)<<6|K);continue}var lt=h[d++]&63;if(($&240)==224?$=($&15)<<12|K<<6|lt:$=($&7)<<18|K<<12|lt<<6|h[d++]&63,$<65536)X+=String.fromCharCode($);else{var ft=$-65536;X+=String.fromCharCode(55296|ft>>10,56320|ft&1023)}}return X},df=(h,d,w)=>(h>>>=0,h?uf(V,h,d,w):"");function ff(h,d){h>>>=0,d>>>=0,d=it(d);var w=!0;nt(h,{name:d,fromWireType(P){var U=k[P>>>2>>>0],X=P+4,$;if(w)$=df(X,U,!0);else{$="";for(var K=0;K<U;++K)$+=String.fromCharCode(V[X+K>>>0])}return bi(P),$},toWireType(P,U){U instanceof ArrayBuffer&&(U=new Uint8Array(U));var X,$=typeof U=="string";$||ArrayBuffer.isView(U)&&U.BYTES_PER_ELEMENT==1||dt("Cannot pass non-string to std::string"),w&&$?X=hf(U):X=U.length;var K=nc(4+X+1),lt=K+4;if(k[K>>>2>>>0]=X,$)if(w)cf(U,lt,X+1);else for(var ft=0;ft<X;++ft){var xt=U.charCodeAt(ft);xt>255&&(bi(K),dt("String has UTF-16 code units that do not fit in 8 bits")),V[lt+ft>>>0]=xt}else V.set(U,lt>>>0);return P!==null&&P.push(bi,K),K},readValueFromPointer:Et,destructorFunction(P){bi(P)}})}var zh=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,pf=(h,d,w)=>{var P=h>>>1,U=kh(B,P,d/2,w);if(U-P>16&&zh)return zh.decode(B.subarray(P>>>0,U>>>0));for(var X="",$=P;$<U;++$){var K=B[$>>>0];X+=String.fromCharCode(K)}return X},mf=(h,d,w)=>{if(w??=2147483647,w<2)return 0;w-=2;for(var P=d,U=w<h.length*2?w/2:h.length,X=0;X<U;++X){var $=h.charCodeAt(X);F[d>>>1>>>0]=$,d+=2}return F[d>>>1>>>0]=0,d-P},gf=h=>h.length*2,_f=(h,d,w)=>{for(var P="",U=h>>>2,X=0;!(X>=d/4);X++){var $=k[U+X>>>0];if(!$&&!w)break;P+=String.fromCodePoint($)}return P},xf=(h,d,w)=>{if(d>>>=0,w??=2147483647,w<4)return 0;for(var P=d,U=P+w-4,X=0;X<h.length;++X){var $=h.codePointAt(X);if($>65535&&X++,G[d>>>2>>>0]=$,d+=4,d+4>U)break}return G[d>>>2>>>0]=0,d-P},yf=h=>{for(var d=0,w=0;w<h.length;++w){var P=h.codePointAt(w);P>65535&&w++,d+=4}return d};function vf(h,d,w){h>>>=0,d>>>=0,w>>>=0,w=it(w);var P,U,X;d===2?(P=pf,U=mf,X=gf):(P=_f,U=xf,X=yf),nt(h,{name:w,fromWireType:$=>{var K=k[$>>>2>>>0],lt=P($+4,K*d,!0);return bi($),lt},toWireType:($,K)=>{typeof K!="string"&&dt(`Cannot pass non-string to C++ string type ${w}`);var lt=X(K),ft=nc(4+lt+d);return k[ft>>>2>>>0]=lt/d,U(K,ft+4,lt+d),$!==null&&$.push(bi,ft),ft},readValueFromPointer:Et,destructorFunction($){bi($)}})}function Mf(h,d,w,P,U,X){h>>>=0,d>>>=0,w>>>=0,P>>>=0,U>>>=0,X>>>=0,Re[h]={name:it(d),rawConstructor:q(w,P),rawDestructor:q(U,X),fields:[]}}function Sf(h,d,w,P,U,X,$,K,lt,ft){h>>>=0,d>>>=0,w>>>=0,P>>>=0,U>>>=0,X>>>=0,$>>>=0,K>>>=0,lt>>>=0,ft>>>=0,Re[h].fields.push({fieldName:it(d),getterReturnType:w,getter:q(P,U),getterContext:X,setterArgumentType:$,setter:q(K,lt),setterContext:ft})}var bf=function(h,d){h>>>=0,d>>>=0,d=it(d),nt(h,{isVoid:!0,name:d,fromWireType:()=>{},toWireType:(w,P)=>{}})};function wf(h,d){h>>>=0,d>>>=0,h=Zt.toValue(h),d=Zt.toValue(d),h.set(d)}var Ql=[],Tf=h=>{var d=Ql.length;return Ql.push(h),d},Ef=(h,d)=>{for(var w=new Array(h),P=0;P<h;++P)w[P]=ye(k[d+P*4>>>2>>>0],`parameter ${P}`);return w},Af=(h,d,w)=>{var P=[],U=h(P,w);return P.length&&(k[d>>>2>>>0]=Zt.toHandle(P)),U},Rf={},Vh=h=>{var d=Rf[h];return d===void 0?it(h):d},Cf=function(h,d,w){d>>>=0;var P=8,[U,...X]=Ef(h,d),$=U.toWireType.bind(U),K=X.map(Rt=>Rt.readValueFromPointer.bind(Rt));h--;var lt=new Array(h),ft=(Rt,Nt,Vt,qt)=>{for(var Qt=0,he=0;he<h;++he)lt[he]=K[he](qt+Qt),Qt+=P;var D;switch(w){case 0:D=Zt.toValue(Rt).apply(null,lt);break;case 2:D=Reflect.construct(Zt.toValue(Rt),lt);break;case 3:D=lt[0];break;case 1:D=Zt.toValue(Rt)[Vh(Nt)](...lt);break}return Af($,Vt,D)},xt=`methodCaller<(${X.map(Rt=>Rt.name)}) => ${U.name}>`;return Tf(Un(xt,ft))};function Pf(h,d){return h>>>=0,d>>>=0,h=Zt.toValue(h),d=Zt.toValue(d),h==d}function If(h,d){return h>>>=0,d>>>=0,h=Zt.toValue(h),d=Zt.toValue(d),Zt.toHandle(h[d])}function Lf(h){h>>>=0,h>9&&(Ut[h+1]+=1)}function Df(h,d,w,P,U){return h>>>=0,d>>>=0,w>>>=0,P>>>=0,U>>>=0,Ql[h](d,w,P,U)}function Nf(h){return h>>>=0,Zt.toHandle(Vh(h))}function Uf(){return Zt.toHandle({})}function Ff(h){h>>>=0;var d=Zt.toValue(h);Ie(d),Je(h)}function Of(h,d,w){h>>>=0,d>>>=0,w>>>=0,h=Zt.toValue(h),d=Zt.toValue(d),w=Zt.toValue(w),h[d]=w}var Bf=()=>4294901760,kf=(h,d)=>Math.ceil(h/d)*d,zf=h=>{var d=Ia.buffer.byteLength,w=(h-d+65535)/65536|0;try{return Ia.grow(w),et(),1}catch{}};function Vf(h){h>>>=0;var d=V.length,w=Bf();if(h>w)return!1;for(var P=1;P<=4;P*=2){var U=d*(1+.2/P);U=Math.min(U,h+100663296);var X=Math.min(w,kf(Math.max(h,U),65536)),$=zf(X);if($)return!0}return!1}var Hf=(h,d)=>{if(fs)for(var w=h;w<h+d;w++){var P=O(w);P&&fs.set(P,w)}},fs,Gf=h=>(fs||(fs=new WeakMap,Hf(0,Tr.length)),fs.get(h)||0),tc=[],Wf=()=>tc.length?tc.pop():Tr.grow(1),ec=(h,d)=>Tr.set(h,d),Hh=h=>{let d=h.length;return[d%128|128,d>>7,...h]},Xf={i:127,p:127,j:126,f:125,d:124,e:111},Gh=h=>Hh(Array.from(h,d=>{var w=Xf[d];return w})),$f=(h,d)=>{var w=Uint8Array.of(0,97,115,109,1,0,0,0,1,...Hh([1,96,...Gh(d.slice(1)),...Gh(d[0]==="v"?"":d[0])]),2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0),P=new WebAssembly.Module(w),U=new WebAssembly.Instance(P,{e:{f:h}}),X=U.exports.f;return X},ps=(h,d)=>{var w=Gf(h);if(w)return w;var P=Wf();try{ec(P,h)}catch(X){if(!(X instanceof TypeError))throw X;var U=$f(h,d);ec(P,U)}return fs.set(h,P),P},ms=h=>{fs.delete(O(h)),ec(h,null),tc.push(h)};if(be(),jl(),e.noExitRuntime&&(qn=e.noExitRuntime),e.print&&(_=e.print),e.printErr&&(b=e.printErr),e.wasmBinary&&(I=e.wasmBinary),e.arguments&&(l=e.arguments),e.thisProgram&&(c=e.thisProgram),e.preInit)for(typeof e.preInit=="function"&&(e.preInit=[e.preInit]);e.preInit.length>0;)e.preInit.shift()();e.addFunction=ps,e.removeFunction=ms;var Wh,nc,bi,qf,Yf,Ia,Tr;function Zf(h){Wh=h.K,nc=h.M,bi=h.N,qf=Ia=h.I,Yf=Tr=h.L}var Jf={l:H,C:Pn,q:_t,z:N,G:ct,j:Lt,i:Xe,a:Pe,E:rn,x:Si,d:Ke,y:Ue,c:$e,p:jn,m:sf,h:rf,n:of,F:ff,w:vf,r:Mf,k:Sf,H:bf,u:wf,g:Cf,b:Je,o:Pf,B:If,t:Lf,f:Df,s:Nf,A:Uf,e:Ff,v:Of,D:Vf};function Kf(h){h=Object.assign({},h);var d=P=>U=>P(U)>>>0,w=P=>()=>P()>>>0;return h.K=d(h.K),h.M=d(h.M),h._emscripten_stack_alloc=d(h._emscripten_stack_alloc),h.emscripten_stack_get_current=w(h.emscripten_stack_get_current),h}function jf(){ht();function h(){e.calledRun=!0,!E&&(mt(),C?.(e),e.onRuntimeInitialized?.(),Ht())}e.setStatus?(e.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>e.setStatus(""),1),h()},1)):h()}var gs;return gs=await Kt(),jf(),pt?t=e:t=new Promise((h,d)=>{C=h,y=d}),t}var Gd=Yx;var en=(i,t)=>t?Bi(t,{t:"cube",s:i}):{t:"cube",s:i},Ul=(i,t,e=t,n=40)=>({t:"cyl",h:i,r1:t,r2:e,fn:n}),Xn=(i,t)=>({t:"ext",polys:i,h:t}),Bi=(i,t)=>({t:"tr",v:i,c:t}),Fl=(i,t)=>({t:"rot",v:i,c:t}),as=(...i)=>({t:"uni",c:i.flat(1/0).filter(Boolean)}),_r=(i,...t)=>({t:"dif",c:[i,...t.flat(1/0).filter(Boolean)]}),dn=(i,t,e,n)=>[[i,t],[i+e,t],[i+e,t+n],[i,t+n]];function Eh(i){let t=i.map(r=>[r[0],r[1]]).sort((r,a)=>r[0]-a[0]||r[1]-a[1]),e=(r,a,o)=>(a[0]-r[0])*(o[1]-r[1])-(a[1]-r[1])*(o[0]-r[0]),n=[],s=[];for(let r of t){for(;n.length>=2&&e(n[n.length-2],n[n.length-1],r)<=0;)n.pop();n.push(r)}for(let r of t.reverse()){for(;s.length>=2&&e(s[s.length-2],s[s.length-1],r)<=0;)s.pop();s.push(r)}return n.slice(0,-1).concat(s.slice(0,-1))}var Zx=(i,t=32,e=0,n=0)=>Array.from({length:t},(s,r)=>[e+i*Math.cos(2*Math.PI*r/t),n+i*Math.sin(2*Math.PI*r/t)]),Ah=(i,t=0,e=1)=>Eh([...Zx(i/2,32),[t*i/2*Math.SQRT2,e*i/2*Math.SQRT2]]);function Rh(i,t){let e=[],n=l=>(e.push(l),l),s=l=>{switch(l.t){case"cube":return n(t.Manifold.cube(l.s));case"cyl":return n(t.Manifold.cylinder(l.h,l.r1,l.r2,l.fn));case"ext":{let c=new t.CrossSection(l.polys,"EvenOdd");return e.push(c),n(c.extrude(l.h))}case"tr":return n(s(l.c).translate(l.v));case"rot":return n(s(l.c).rotate(l.v));case"uni":return n(t.Manifold.union(l.c.map(s)));case"dif":{let[c,...f]=l.c.map(s);return f.length?n(c.subtract(n(t.Manifold.union(f)))):c}}throw new Error("bad node "+l.t)},r=s(i),a=r.getMesh(),o={pos:Float32Array.from(a.vertProperties.filter((l,c)=>c%a.numProp<3)),idx:Uint32Array.from(a.triVerts),volume:r.volume(),bbox:r.boundingBox()};for(let l of e)try{l.delete()}catch{}return o}var da=i=>{let t=Math.round(i*1e4)/1e4;return Object.is(t,-0)?"0":String(t)},Nl=i=>"["+i.map(da).join(", ")+"]";function fa(i,t=""){let e=t+"  ",n=s=>s.map(r=>fa(r,e)).join(`
`);switch(i.t){case"cube":return`${t}cube(${Nl(i.s)});`;case"cyl":return`${t}cylinder(h = ${da(i.h)}, r1 = ${da(i.r1)}, r2 = ${da(i.r2)}, $fn = ${i.fn});`;case"ext":{let s=[],r=[];for(let a of i.polys)r.push(a.map((o,l)=>s.length+l)),s.push(...a);return`${t}linear_extrude(${da(i.h)}) polygon(points = [${s.map(Nl).join(",")}], paths = [${r.map(a=>"["+a.join(",")+"]").join(",")}]);`}case"tr":return`${t}translate(${Nl(i.v)})
${fa(i.c,e)}`;case"rot":return`${t}rotate(${Nl(i.v)})
${fa(i.c,e)}`;case"uni":return`${t}union() {
${n(i.c)}
${t}}`;case"dif":return`${t}difference() {
${n(i.c)}
${t}}`}}var pa=44.45,yi={M2:{pilot:1.6,clear:2.4,sd:5.5},"M2.5":{pilot:2.2,clear:2.9,sd:6.5},M3:{pilot:2.6,clear:3.4,sd:7},M4:{pilot:3.4,clear:4.5,sd:9}},En=15,yr=2,Jx=.2,Ol=4,nn=En+2*yr+Jx,os=6,Kx=3.3,Ch=5.8,Wd=2.8,ln={opening:222.25,pitch:236.525,hole_d:6.4,panel_t:5,side_t:4,lip:3,rear_h:14,gusset:40,band:12};ln.tray_w=ln.opening-1.25;var Ph={tray_w:450/2-1.25,ear:482.6/2-225+.625,hole:465.1/2-225+.625},Ih=8,Se={h:14,t:2,w:40},$n={homeracker:{label:"Rackerspace",sub:"Blade on two 15 mm bars (HomeRacker caps, 180 mm apart)"},rack10:{label:'10" rack',sub:"Flat tray with rack ears, ports to the open front",tray:!0},rack19h:{label:'\xBD 19" rack',sub:'Half-width tray for a 19" rack, ear on the left or right rail, ports to the open front',tray:!0},din:{label:"Hutschiene",sub:"Blade that clips onto a 35 mm DIN rail (TS35)"},skadis:{label:"SK\xC5DIS",sub:"IKEA pegboard (5 \xD7 15 mm slots, 40 mm apart, rows staggered by 20 mm): flat on the board, or a blade that sticks out"}},ee={pitch:40,row:20,slotW:5,slotH:15,stemH:6,leg:7.5,legT:3};function xa(i={}){return{name:"board",w:85,h:56,x:10,y:10,rot:0,t:1.6,sh:6,comp:20,screw:"M2.5",holes:[{x:3.5,y:3.5},{x:61.5,y:3.5},{x:3.5,y:52.5},{x:61.5,y:52.5}],...i}}function Lh(){return{version:1,name:"plate",mode:"homeracker",plate:{t:3,lattice:!0,pitch:15,bar:3,holeKind:"pilot",label:!0,autoSize:!0,L:200,H:100,margin:5},hr:{span:180,capLen:30,clamp:"ziptie",zipW:5,label:"left"},din:{clipW:20,clear:.3,latch:1.8,railX:0},r10:{units:1,depth:0,panelW:250,floor:2.5,label:"left",side:"left"},sk:{style:"flat",fit:.6,boardT:5,rows:"top",label:"bottom"},boards:[xa({name:"Raspberry Pi 4",x:20,y:12})]}}function fn(i){let t=(i.rot%360+360)%360,e=t%180?i.h:i.w,n=t%180?i.w:i.h;return{x0:i.x,y0:i.y,x1:i.x+e,y1:i.y+n,fw:e,fh:n}}function vr(i,t,e){let n=(i.rot%360+360)%360,[s,r]=n===90?[i.h-e,t]:n===180?[i.w-t,i.h-e]:n===270?[e,i.w-t]:[t,e];return[i.x+s,i.y+r]}function Bl(i,t,e){let n=(i.rot%360+360)%360,s=t-i.x,r=e-i.y;return n===90?[r,i.h-s]:n===180?[i.w-s,i.h-r]:n===270?[i.w-r,s]:[s,r]}function jx(i){let t=0,e=0;for(let n of i.boards){let s=fn(n);t=Math.max(t,s.x1),e=Math.max(e,s.y1)}return{x1:t,y1:e}}function ya(i){let t=i.plate,e=jx(i),n=t.margin;if(i.mode==="homeracker"){let a=i.hr.span+nn,o=t.autoSize?Math.max(Math.ceil(e.y1+n),40):t.H;return{L:a,H:o,area:[5,9,a-5,o-3],bot:9,sides:["front","rear","bars (bottom)","top"]}}if(i.mode==="din"){let a=t.autoSize?Math.max(Math.ceil(e.x1+n),62):t.L,o=t.autoSize?Math.max(Math.ceil(e.y1+n),30):t.H;return{L:a,H:o,area:[n,Ih+6,a-n,o-3],bot:Ih+6,sides:["","","DIN rail (bottom)","top"]}}if(i.mode==="skadis"){let a=i.sk.style==="blade",o=t.autoSize?Math.max(Math.ceil(e.x1+n),a?40:30):t.L,l=!a&&t.label,c=l&&i.sk.label==="top"?Se.h:0,f=l&&!c?Se.h:0,g=t.autoSize?Math.max(Math.ceil(e.y1+(a?n:28+c)),a?30:45+c+f):t.H;return a?{L:o,H:g,area:[10,4,o-3,g-3],bot:5,sides:["SK\xC5DIS board (wall)","away from the wall","bottom","top"]}:{L:o,H:g,area:[3,3+f,o-3,g-26-c],bot:5,top:c,sides:["","","bottom (front view)","top (hooks)"]}}let s=i.mode==="rack19h"?Ph.tray_w:ln.tray_w,r=i.r10.depth>0?i.r10.depth:Math.max(Math.ceil(e.y1+n),60);return{L:s,H:r,area:[ln.side_t,2,s-ln.side_t,r],bot:0,sides:["left wall","right wall","FRONT (ears, open)","rear"]}}function Xd(i,t,e,n){let s=e-n,r=t-i,a=r<s?0:Math.floor((r-s)/e)+1,o=a>0?a*e-n:0;return{start:i+(r-o)/2,n:a}}function ma(i,t,e,n,s,r,a,o){let l=s-r,c=Xd(i,e,s,r),f=Xd(t,n,s,r),g=[];for(let u=0;u<c.n;u++)for(let p=0;p<f.n;p++){let x=c.start+u*s,S=f.start+p*s;a.some(m=>x<m[2]&&x+l>m[0]&&S<m[3]&&S+l>m[1])||o.some(([m,_,b])=>{let I=Math.max(x,Math.min(m,x+l)),E=Math.max(S,Math.min(_,S+l));return(I-m)**2+(E-_)**2<b*b})||g.push(dn(x,S,l,l))}return g}var xr=(i,t,e)=>Bi([t,0,0],Fl([90,0,90],Xn([i],e)));function ga(i,t){let e=[],n=[],s=[];for(let r of i.boards)for(let a of r.holes){if(a.off)continue;let o=yi[a.screw||r.screw]||yi.M3,[l,c]=vr(r,a.x,a.y),f=t+r.sh,g=i.plate.holeKind==="clear"?o.clear:o.pilot;e.push(Bi([l,c,0],Ul(f,o.sd/2,o.sd/2,40))),r.sh>2&&e.push(Bi([l,c,t],Ul(1.5,o.sd/2+1.5,o.sd/2,40))),n.push(Bi([l,c,-1],Ul(f+2,g/2,g/2,24))),s.push([l,c,o.sd/2+3])}return{add:e,sub:n,circles:s}}function Qx(i,t,e){let[n,s,r,a]=t.area;i.boards.forEach((o,l)=>{let c=fn(o),f=o.name||`board ${l+1}`;(c.x0<n-.01||c.y0<s-.01||c.x1>r+.01||c.y1>a+.01)&&e.push(`${f} reaches outside the usable area (x ${n}..${r}, y ${s}..${a.toFixed(1)}).`),o.holes.forEach((g,u)=>{(g.x<0||g.y<0||g.x>o.w||g.y>o.h)&&e.push(`${f}: hole ${u+1} lies outside the board.`)}),o.holes.some(g=>!g.off)||e.push(`${f} has no mounting holes, so nothing holds it.`),i.boards.forEach((g,u)=>{if(u<=l)return;let p=fn(g);c.x0<p.x1&&c.x1>p.x0&&c.y0<p.y1&&c.y1>p.y0&&e.push(`${f} overlaps ${g.name||"board "+(u+1)}.`)})})}function kl(i){let t=ya(i),{L:e,H:n}=t,s=i.plate,r=s.label,a=[],o=[],l=[],c=[],f=null;Qx(i,t,a);let g;if(i.mode==="homeracker"){let u=s.t,p=i.hr.capLen,x=ga(i,u),S=i.hr.clamp||(i.hr.setscrew===!1?"pin":"setscrew"),m=S==="setscrew",_=S==="ziptie",b=_?6:3,I=i.hr.zipW||5,E=_?p>=2*I+12?2:1:0,A=E===2?[p/4-I/2+1,3*p/4-I/2-1]:E===1?[p/2-I/2]:[],C=[],y=[];for(let[G,k]of[[nn/2,-1],[e-nn/2,1]]){C.push(en([nn,b,p],[G-nn/2,0,0])),C.push(en([yr,En+.01,p],[G-nn/2,-En,0])),C.push(en([yr,En+.01,p],[G+nn/2-yr,-En,0]));let L=nn+(m?2*os:0)+2;y.push(en([L,Ol,Ol],[G-L/2,-En/2-Ol/2,p/2-Ol/2]));for(let W of A)y.push(en([nn+2,2.5,I],[G-nn/2-1,1.5,Math.max(W,u+.5)]));if(m){let W=G+k*nn/2,Q=p-7;C.push(en([os,En,p],[k>0?W:W-os,-En,0])),y.push(en([Wd,Ch,p],[W+k*os/2-Wd/2,-En/2-Ch/2,Q-Ch/Math.sqrt(3)-.2]));let j=k>0?W-yr-1:W-os-1,pt=os+yr+2;y.push(Bi([j,-En/2,Q],Fl([0,90,0],Xn([Ah(Kx,-1,0)],pt))))}}let T=[[u,b],[p,b],[u,b+p-u]].map(([G,k])=>[k,G]);if(C.push(xr(T,0,4),xr(T,e-4,4)),r){let G=i.hr.label==="right",k=G?e-Se.t:0;C.push(en([Se.t,n-b,Se.h],[k,b,0])),l.push({r:[k,b,Se.t,n-b],k:"wall"}),o.push(["Label",`${Se.h} mm wide strip on the ${G?"right":"left"} end`])}let V=[[0,0,5,b+p],[e-5,0,e,b+p]];c=s.lattice?ma(5,t.bot,e-5,n-5,s.pitch,s.bar,V,x.circles):[];for(let G of[nn/2,e-nn/2])l.push({r:[G-nn/2-(m&&G<e/2?os:0),-En,nn+(m?os:0),En+b],k:"cap"});g=_r(as(Xn([dn(0,0,e,n),...c],u),C,x.add),y,x.sub),f={bars:[],ties:[]};for(let G of[nn/2,e-nn/2])f.bars.push({cx:G,z:p/2,len:p+30}),A.forEach((k,L)=>f.ties.push({x0:G-nn/2-.8,x1:G+nn/2+.8,y0:-En-.8,y1:2.75,z:Math.max(k,u+.5)+I/2,w:I-.4,first:L===0}));let F=n+18;o.push(["Blade",`${_a(e)} \xD7 ${_a(n)} mm`]),o.push(["Height in rack",`${_a(F)} mm incl. bar and bracket \u2192 ${Math.ceil(F/pa-1e-6)}U`]),o.push(["Bars",`${i.hr.span} mm apart centre to centre`]);let B=Math.max(...i.boards.map(G=>u+G.sh+G.t+G.comp),r?Se.h:u);o.push(["Blade spacing",`\u2265 ${Math.ceil(B/En)*En} mm (${_a(B)} mm deep, rounded to 15 mm)`]),o.push(["Hardware",m?"2 \xD7 M3 nut + 2 \xD7 M3x10 set screw":_?`${2*E} zip ties up to ${I} mm wide (the HomeRacker pin hole stays)`:"2 HomeRacker lock pins"]),_&&o.push(["Zip ties",`thread each tie through a channel just above the bar (${E} per cap), down both cap walls, under the bar, and pull tight`]),n>240&&a.push("Blade is taller than 240 mm, which will not fit a 250 mm bed.")}else if(i.mode==="din"){let u=s.t,p=i.din.clear,x=i.din.latch,S=Math.max(i.din.clipW,u),m=Ih,_=i.din.railX>0?i.din.railX:e/2,b=Math.max(_-17.5-8,0),I=Math.min(_+17.5+p+x+6,e);(_-17.5-p-2.4<0||_+17.5+p+x>e)&&a.push("The DIN clip does not fit on the blade; move the rail or make the blade longer.");let E=ga(i,u),A=S-u;for(let k of i.boards){let L=fn(k);L.x0<I+1&&L.x1>b-1&&(A=Math.min(A,L.y0-m-1))}let C=[en([I-b,m,S],[b,0,0])];if(A>1){let k=A,W=k>=S-u?[[m,u],[m,S],[m+S-u,u]]:[[m,u],[m,S],[m+k,S-k],[m+k,u]];C.push(xr(W,b,4),xr(W,I-4,4))}let y=-(1+p),T=[dn(_-17.5-p-2.4,y-1.8,2.4+p+2.2,1.8),dn(_-17.5-p-2.4,y-1.8,2.4,1.8+1+p+.01),dn(_+17.5+p,y-1.8,x,1.8+1+p+m-2),Eh([...dn(_+17.5+p-2.2,y-.8,2.2,.8),...dn(_+17.5+p,y-1.8,.01,1.8)])];for(let k of T)C.push(Xn([k],S));r&&(C.push(en([e,Se.t,Se.h],[0,n-Se.t,0])),l.push({r:[0,n-Se.t,e,Se.t],k:"wall"}),o.push(["Label",`${Se.h} mm wide strip on the front edge`]));let V=S+10,F=[en([1,m-2+1,V],[_+17.5+p-1,-1,-1]),en([e+2,m-2+1,V],[_+17.5+p+x,-1,-1])],B=[[b-1,0,I+1,m+Math.max(A,0)+2]];c=s.lattice?ma(5,t.bot,e-5,n-5,s.pitch,s.bar,B,E.circles):[],l.push({r:[b,0,I-b,m],k:"cap"},{r:[_-17.5,-7.5,35,7.5],k:"rail"}),g=_r(as(Xn([dn(0,0,e,n),...c],u),C,E.add),F,E.sub),o.push(["Blade",`${yn(e)} \xD7 ${yn(n)} mm, clip ${yn(S)} mm wide`]),o.push(["Rail",`TS35 centred at x = ${yn(_)} mm`]);let G=Math.max(...i.boards.map(k=>u+k.sh+k.t+k.comp),S);o.push(["Blade spacing on the rail",`\u2265 ${yn(G)} mm`]),o.push(["Tuning",`din_clear ${p} (looser: higher), latch ${x} mm (softer: thinner)`]),(e>240||n>240)&&a.push("Blade is larger than 240 mm, which will not fit a 250 mm bed.")}else if(i.mode==="skadis"){let u=s.t,p=ee.slotW-i.sk.fit,x=i.sk.boardT+.4,S=i.sk.style==="blade",m=[];if(S){let _=ga(i,u),b=[en([6,n,p],[0,0,0])];for(let E=8;E+ee.stemH<=n-3;E+=ee.pitch)m.push(E),b.push(Xn([dn(-x,E,x+.01,ee.stemH)],p),Xn([dn(-x-ee.legT,E-ee.leg,ee.legT+.01,ee.stemH+ee.leg)],p)),l.push({r:[-x-ee.legT,E-ee.leg,x+ee.legT,ee.stemH+ee.leg],k:"cap"});l.push({r:[0,0,6,n],k:"wall"}),r&&(b.push(en([Se.t,n,Se.h],[e-Se.t,0,0])),l.push({r:[e-Se.t,0,Se.t,n],k:"wall"}),o.push(["Label",`${Se.h} mm wide strip on the front edge`])),c=s.lattice?ma(8,5,e-5,n-5,s.pitch,s.bar,[[0,0,9,n]],_.circles):[],g=_r(as(Xn([dn(0,0,e,n),...c],u),b,_.add),_.sub),o.push(["Blade",`${yn(e)} \xD7 ${yn(n)} mm, sticks out ${yn(e)} mm from the board`]),o.push(["Hooks",`${m.length} in one slot column, 40 mm apart`]);let I=Math.max(...i.boards.map(E=>u+E.sh+E.t+E.comp),r?Se.h:p);o.push(["Blade spacing",`\u2265 ${Math.ceil(I/ee.row)*ee.row} mm (neighbouring slot columns are 20 mm apart, their slots sit 20 mm higher)`]),m.length||a.push("The blade is too low for a hook; make it at least 17 mm tall.")}else{let _=Math.max(1,Math.floor((e-20)/ee.pitch)+1),b=[];for(let L=0;L<_;L++)b.push(e/2+ee.pitch*(L-(_-1)/2));let I=[],E=t.top?n-Se.h-2:1;for(let L=n-t.top-6-ee.slotH;L>=4+(r&&!t.top?Se.h+2:0)&&(I.push(L),i.sk.rows==="all");L-=ee.pitch);let A=ga(i,u),C=[],y=[],T=[],V=2.5,F=3,B=u+x;for(let L of b)for(let W of I)m.push([L,W]),C.push(en([ee.slotW,ee.slotH,u+2],[L-ee.slotW/2,W,-1])),y.push([L-ee.slotW/2-3,W-F-1,L+ee.slotW/2+3,W+ee.slotH+F+1]),l.push({r:[L-ee.slotW/2,W,ee.slotW,ee.slotH],k:"cap"},{r:[L-p/2,W-F,p,ee.slotH+2*F],k:"rail"});let G=[dn(-V,-F,V+.01,ee.slotH+2*F),dn(0,0,B+.01,ee.stemH),dn(B,-ee.leg,ee.legT,ee.stemH+ee.leg)],k=V+B+ee.legT+5;if(m.forEach((L,W)=>T.push(Bi([V+2+W*k,-10-ee.slotH-F,0],as(G.map(Q=>Xn([Q],p)))))),I.length){let L=b[0],W=I[0];for(let Q=-Math.ceil((W+20)/ee.row);Q<=Math.ceil((n-W+20)/ee.row);Q++)for(let j=-Math.ceil((L+40)/ee.pitch);j<=Math.ceil((e-L+40)/ee.pitch);j++){let pt=L+j*ee.pitch+Math.abs(Q)%2*ee.row-ee.slotW/2,et=W+Q*ee.row;pt>-10&&pt<e+10&&et>-20&&et<n+5&&l.push({r:[pt,et,ee.slotW,ee.slotH],k:"slot"})}}for(let L of i.boards){let W=fn(L);for(let Q of L.holes){if(Q.off)continue;let j=yi[Q.screw||L.screw]||yi.M3,[pt,et]=vr(L,Q.x,Q.y);y.some(ht=>pt+j.sd/2>ht[0]&&pt-j.sd/2<ht[2]&&et+j.sd/2>ht[1]&&et-j.sd/2<ht[3])&&a.push(`${L.name}: a standoff sits on a hook slot; move the board or the holes.`)}L.sh<V+1&&y.some(Q=>W.x0<Q[2]&&W.x1>Q[0]&&W.y0<Q[3]&&W.y1>Q[1])&&a.push(`${L.name}: the hook heads stick out ${V} mm, so the standoffs must be taller over them.`)}r&&(l.push({r:[3,E,e-6,Se.h],k:"rail"}),o.push(["Label",`${Se.h} mm solid strip at the ${t.top?"top":"bottom"}`])),c=s.lattice?ma(5,5,e-5,n-5,s.pitch,s.bar,r?[...y,[0,E-2,e,E+Se.h+2]]:y,A.circles):[],g=as(_r(as(Xn([dn(0,0,e,n),...c],u),A.add),C,A.sub),T),o.push(["Plate",`${yn(e)} \xD7 ${yn(n)} mm, ${m.length} hook slot${m.length===1?"":"s"} on the 40 mm grid`]),o.push(["Hooks",`${m.length} separate hooks, in the same file below the plate, printed on their side`]),o.push(["Hanging","push the hooks through the plate slots into the board, then slide everything down"]),o.push(["Print","plate on its back, standoffs up; no supports, no overhangs"]),I.length||a.push("The plate is too low for a hook row; make it at least 25 mm tall.")}(e>240||n>240)&&a.push("Plate is larger than 240 mm, which will not fit a 250 mm bed.")}else{let u=i.r10,p=u.floor,x=ln.side_t,S=u.units*pa-.8,m=ga(i,p),_=i.mode==="rack19h",b=e,I=u.panelW,E=_?Ph.ear:I/2-b/2,A=_?Ph.hole:ln.pitch/2-b/2,C=_?[u.side==="right"?1:-1]:[-1,1],y=[en([b-2*x,2,p+ln.lip],[x,0,0])],T=u.label==="right"?b-x-Se.w:x;r&&y.push(en([Se.w,2,Se.h],[T,0,0]));let V=Math.min(ln.gusset,n-1),F=[[0,0],[n,0],[n,p+ln.rear_h],[V,S],[0,S]];y.push(xr(F,0,x),xr(F,b-x,x));let B=E+x,G=[];for(let k of C){let L=k<0?-E:b-x;y.push(en([B,ln.panel_t,S],[L,0,0])),l.push({r:[L,0,B,ln.panel_t],k:"cap"});for(let W=0;W<u.units;W++)for(let Q of[6.35,38.1]){let j=k<0?-A:b+A;G.push(Bi([j,-1,W*pa+Q],Fl([-90,0,0],Xn([Ah(ln.hole_d,0,-1)],ln.panel_t+2))))}}c=s.lattice?ma(x+ln.band,ln.band,b-x-ln.band,n-6,s.pitch,s.bar,[],m.circles):[],g=_r(as(Xn([dn(0,0,b,n),...c],p),y,m.add),G,m.sub),l.push({r:[0,0,x,n],k:"wall"},{r:[b-x,0,x,n],k:"wall"},{r:[x,0,b-2*x,2],k:"wall"}),r&&(l.push({r:[T,0,Se.w,2],k:"wall"}),o.push(["Label",`${Se.w} \xD7 ${Se.h} mm on the front lip, ${u.label==="right"?"right":"left"} side`])),_?(o.push(["Tray",`${u.units}U, half 19", ear on the ${C[0]>0?"right":"left"} rail, ${yn(b+E)} mm wide, ${yn(n)} mm deep`]),o.push(["Rack holes","M6, 2 per U, on one rail only"]),o.push(["Support","held by one ear only: put a second half tray next to it or support the free side for heavy boards"])):(o.push(["Tray",`${u.units}U, ${I} mm across the ears, ${yn(n)} mm deep`]),o.push(["Rack holes",`M6, ${ln.pitch} mm apart, 2 per U`])),o.push(["Inner width",`${yn(b-2*x)} mm between the side walls`]);for(let k of i.boards){let L=p+k.sh+k.t+k.comp,W=fn(k);r&&W.y0<10&&W.x0<T+Se.w&&W.x1>T&&a.push(`${k.name}: the label field (${Se.h} mm tall) sits in front of it and may cover low ports.`),L>u.units*pa-.5&&a.push(`${k.name}: top at ${yn(L)} mm is taller than ${u.units}U (${yn(u.units*pa)} mm).`)}n>240&&a.push("Tray is deeper than 240 mm, which will not fit a 250 mm bed.")}return{node:g,lay:t,warn:a,info:o,cells:c,draw:l,flip:null,guides:f}}var _a=i=>(Math.round(i*10)/10).toString(),yn=_a;var zl=[{key:"o2_box-6431_pcb",name:"o2 Box 6431 (bare PCB)",w:133,h:180,sh:6,screw:"M3",holes:[{x:9,y:12.5},{x:124,y:12.5},{x:9,y:167.5},{x:124,y:167.5}],comp:20.4,box:!1},{key:"tplink_tl-wdr3600-v1",name:"TP-Link TL-WDR3600 v1",w:243,h:160.6,sh:6,screw:"M3",holes:[],comp:35,box:!0},{key:"tplink_tl-wdr4300-v1",name:"TP-Link TL-WDR4300 v1 (wifi probe)",w:243,h:160.6,sh:6,screw:"M3",holes:[],comp:35,box:!0},{key:"asus_rt-n16",name:"ASUS RT-N16, bare PCB",w:97,h:187,sh:6,screw:"M3",holes:[{x:5,y:5},{x:92,y:5},{x:5,y:182},{x:92,y:182}],comp:17.4,box:!1},{key:"genexis_pulse-ex400",name:"Genexis Pulse EX400",w:125,h:125,sh:6,screw:"M3",holes:[],comp:32,box:!0},{key:"enterasys_ws-ap3710i",name:"Enterasys WS-AP3710i",w:200,h:188,sh:6,screw:"M3",holes:[],comp:40,box:!0},{key:"ignitenet_ss-w2-ac2600",name:"IgniteNet SS-W2-AC2600",w:224,h:219,sh:6,screw:"M3",holes:[],comp:37,box:!0},{key:"aruba_ap-32x",name:"Aruba AP-32x",w:203,h:203,sh:6,screw:"M3",holes:[],comp:59,box:!0},{key:"rpi-4",name:"Raspberry Pi 4 B",w:85,h:56,sh:6,screw:"M2.5",holes:[{x:3.5,y:3.5},{x:61.5,y:3.5},{x:3.5,y:52.5},{x:61.5,y:52.5}],comp:16.4,box:!1},{key:"raspberry-pi-3b",name:"Raspberry Pi 3 B",w:85,h:56,sh:6,screw:"M2.5",holes:[{x:3.5,y:3.5},{x:61.5,y:3.5},{x:3.5,y:52.5},{x:61.5,y:52.5}],comp:16.4,box:!1},{key:"pine64_rock64",name:"Pine64 ROCK64",w:85,h:56,sh:6,screw:"M2.5",holes:[{x:3.5,y:3.5},{x:61.5,y:3.5},{x:3.5,y:52.5},{x:61.5,y:52.5}],comp:17.4,box:!1},{key:"bananapi_bpi-r4",name:"Banana Pi BPI-R4",w:100.5,h:148,sh:6,screw:"M3",holes:[{x:3.5,y:3.5},{x:77,y:3.5},{x:3.5,y:144.5},{x:77,y:144.5}],comp:27.4,box:!1},{key:"bananapi_bpi-r4-lite",name:"Banana Pi BPI-R4 Lite",w:100.5,h:148,sh:6,screw:"M3",holes:[{x:3.5,y:3.5},{x:77,y:3.5},{x:3.5,y:144.5},{x:77,y:144.5}],comp:27.4,box:!1},{key:"ubiquiti_usg",name:"Ubiquiti UniFi Security Gateway (USG), bare PCB",w:100,h:125,sh:6,screw:"M3",holes:[{x:5,y:5},{x:95,y:5},{x:5,y:120},{x:95,y:120}],comp:12.4,box:!1},{key:"starfive_visionfive2-v1.2a",name:"StarFive VisionFive 2 (v1.2A)",w:74,h:100,sh:6,screw:"M2.5",holes:[{x:3,y:3.5},{x:52,y:3.5},{x:3,y:96.5},{x:52,y:96.5}],comp:12.4,box:!1},{key:"thomson_thg571k",name:"Thomson/Technicolor THG571K (cable modem, in case)",w:170,h:165,sh:6,screw:"M3",holes:[],comp:37,box:!0},{key:"phones_iphone7_pixel5",name:"Phones: iPhone 7 + Pixel 5",w:144.7,h:140.9,sh:6,screw:"M3",holes:[],comp:8,box:!0}];var Gt=i=>document.getElementById(i),An=i=>String(i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),xe=i=>Math.round(i*100)/100,Nh="pcb-plate-designer-v1",vt=ty()||Lh(),pn=0,Ve=-1,Is=null,Mr=[],Hl=[];function ty(){try{let i=localStorage.getItem(Nh);return i?Uh(JSON.parse(i)):null}catch{return null}}function Uh(i){let t=Lh(),e={...t,...i,plate:{...t.plate,...i.plate},hr:{...t.hr,...i.hr},din:{...t.din,...i.din},r10:{...t.r10,...i.r10},sk:{...t.sk,...i.sk}};return e.boards=(i.boards||[]).map(n=>xa({...n,holes:(n.holes||[]).map(s=>({...s}))})),$n[e.mode]||(e.mode="homeracker"),e}var ey=()=>JSON.stringify(vt);function sn(){let i=ey();if(i!==Is){Is&&(Mr.push(Is),Mr.length>150&&Mr.shift(),Hl.length=0),Is=i;try{localStorage.setItem(Nh,i)}catch{}}}function $d(i){vt=Uh(JSON.parse(i)),Is=i,pn=Math.min(pn,vt.boards.length-1),Ve=-1,Vi();try{localStorage.setItem(Nh,i)}catch{}}var cn=()=>vt.boards[pn];function Yd(i,t,e){let n=document.createElement("label");i.span&&(n.style.gridColumn=`span ${i.span}`);let s;i.type==="chk"?(n.className="chk",s=document.createElement("input"),s.type="checkbox",s.checked=!!t[i.k],n.append(s,document.createTextNode(i.label))):(n.append(document.createTextNode(i.label)),i.type==="sel"?(s=document.createElement("select"),s.innerHTML=i.opts.map(([a,o])=>`<option value="${An(a)}">${An(o)}</option>`).join(""),s.value=String(t[i.k])):(s=document.createElement("input"),s.type=i.type==="text"?"text":"number",i.type!=="text"&&(s.step=i.step||.1,s.inputMode="decimal",i.min!=null&&(s.min=i.min)),s.value=t[i.k]),n.append(s)),i.dis&&(s.disabled=!0),s.id="f-"+i.id;let r=()=>i.type==="chk"?s.checked:i.type==="text"?s.value:i.type==="sel"?i.num?+s.value:s.value:s.value===""?null:+s.value;return s.addEventListener("input",()=>{let a=r();a===null||Number.isNaN(a)||(t[i.k]=a,e&&e(i.k),Kn())}),s.addEventListener("change",()=>{sn(),i.rerender&&Wl()}),n}function Zd(i,t,e,n){i.replaceChildren(...t.map(s=>Yd(s,e,n)))}function ny(){Gt("modes").innerHTML=Object.entries($n).map(([i,t])=>`<button data-mode="${i}" aria-pressed="${vt.mode===i}">${An(t.label)}</button>`).join("")}function Wl(){ny();let i=$n[vt.mode];Gt("modeTitle").textContent=i.label,Gt("modeSub").textContent=i.sub;let t={homeracker:[[{k:"span",label:"Bar spacing (mm, c-c)",step:15,id:"span"},vt.hr],[{k:"capLen",label:"Cap width (mm)",step:1,id:"cap"},vt.hr],[{k:"clamp",label:"Fix to the bar with",type:"sel",opts:[["ziptie","Zip ties (channels through the caps)"],["setscrew","M3 set screw + nut"],["pin","HomeRacker lock pin only"]],id:"clamp",span:2,rerender:!0},vt.hr],...vt.hr.clamp==="ziptie"?[[{k:"zipW",label:"Zip tie width (mm)",step:.5,id:"zw"},vt.hr]]:[]],din:[[{k:"clipW",label:"Clip width (mm)",step:1,id:"cw"},vt.din],[{k:"railX",label:"Rail position x (0 = centre)",step:1,id:"rx"},vt.din],[{k:"clear",label:"Clip clearance (mm)",step:.05,id:"dc"},vt.din],[{k:"latch",label:"Latch thickness (mm)",step:.1,id:"lt"},vt.din]],rack10:[[{k:"units",label:"Height (U)",type:"sel",num:!0,opts:[[1,"1U"],[2,"2U"],[3,"3U"]],id:"u"},vt.r10],[{k:"depth",label:"Depth (mm, 0 = auto)",step:5,id:"dp"},vt.r10],[{k:"panelW",label:"Ear width",type:"sel",num:!0,opts:[[250,"250 mm (fits 250 bed)"],[254,'254 mm (full 10")']],id:"pw"},vt.r10],[{k:"floor",label:"Floor (mm)",step:.5,id:"fl"},vt.r10]],rack19h:[[{k:"side",label:"Mount on rail",type:"sel",opts:[["left","Left"],["right","Right"]],id:"rs"},vt.r10],[{k:"units",label:"Height (U)",type:"sel",num:!0,opts:[[1,"1U"],[2,"2U"],[3,"3U"]],id:"u"},vt.r10],[{k:"depth",label:"Depth (mm, 0 = auto)",step:5,id:"dp"},vt.r10],[{k:"floor",label:"Floor (mm)",step:.5,id:"fl"},vt.r10]],skadis:[[{k:"style",label:"Mounting",type:"sel",opts:[["flat","Flat on the board"],["blade","Blade sticking out"]],id:"sks",span:2,rerender:!0},vt.sk],[{k:"fit",label:"Hook play in slot (mm)",step:.1,id:"skf"},vt.sk],[{k:"boardT",label:"Board thickness (mm)",step:.5,id:"skt"},vt.sk],...vt.sk.style==="flat"?[[{k:"rows",label:"Hooks",type:"sel",opts:[["top","Top row only"],["all","Every row (every 40 mm)"]],id:"skr",span:2},vt.sk]]:[]]}[vt.mode],e={homeracker:[[["left","Left end"],["right","Right end"]],vt.hr],rack10:[[["left","Front, left"],["right","Front, right"]],vt.r10],rack19h:[[["left","Front, left"],["right","Front, right"]],vt.r10],skadis:vt.sk.style==="flat"&&[[["bottom","Bottom"],["top","Top"]],vt.sk]}[vt.mode];t.push([{k:"label",label:"Label field on the front",type:"chk",id:"lb",span:2,rerender:!0},vt.plate]),vt.plate.label&&e&&t.push([{k:"label",label:"Label position",type:"sel",opts:e[0],id:"lbp"},e[1]]),Gt("modeFields").replaceChildren(...t.map(([a,o])=>Yd(a,o)));let n=vt.plate,s=n.autoSize,r=[];$n[vt.mode].tray||r.push({k:"t",label:"Thickness (mm)",step:.5,id:"t"}),r.push({k:"holeKind",label:"Screw holes",type:"sel",opts:[["pilot","Pilot (self-tapping)"],["clear","Clearance (screw + nut)"]],id:"hk"}),r.push({k:"margin",label:"Margin around boards",step:1,id:"mg"}),r.push({k:"lattice",label:"Open lattice (15 mm grid, zip-tie friendly)",type:"chk",id:"lat",span:2,rerender:!0}),n.lattice&&r.push({k:"pitch",label:"Grid pitch",step:1,id:"pi"},{k:"bar",label:"Bar width",step:.5,id:"ba"}),$n[vt.mode].tray||(r.push({k:"autoSize",label:"Size the plate to the boards",type:"chk",id:"as",span:2,rerender:!0}),s||((vt.mode==="din"||vt.mode==="skadis")&&r.push({k:"L",label:"Length (mm)",step:1,id:"L"}),r.push({k:"H",label:"Height (mm)",step:1,id:"H"}))),Zd(Gt("plateFields"),r,n),Sa()}function Sa(){Gt("boardList").innerHTML=vt.boards.map((t,e)=>`<button data-b="${e}" aria-pressed="${e===pn}"><span>${An(t.name||"board "+(e+1))}</span><small>${xe(t.w)} \xD7 ${xe(t.h)} \xB7 ${t.holes.length} holes</small></button>`).join("")||'<p class="sub">No boards yet. Add one below.</p>';let i=cn();if(Gt("boardBox").style.display=i?"":"none",!i){Gt("holeRows").innerHTML="";return}Zd(Gt("boardFields"),[{k:"name",label:"Name",type:"text",span:3,id:"bn"},{k:"w",label:"Width",step:.5,id:"bw"},{k:"h",label:"Height",step:.5,id:"bh"},{k:"screw",label:"Screw",type:"sel",opts:Object.keys(yi).map(t=>[t,t]),id:"bs"},{k:"x",label:"Position x",step:.5,id:"bx"},{k:"y",label:"Position y",step:.5,id:"by"},{k:"sh",label:"Standoff (mm)",step:.5,id:"bsh"},{k:"t",label:"PCB thickness",step:.1,id:"bt"},{k:"comp",label:"Tallest part",step:1,id:"bc"}],i,t=>{(t==="name"||t==="w"||t==="h")&&ba()}),cs()}function ba(){[...Gt("boardList").children].forEach((i,t)=>{let e=vt.boards[t];!e||!i.dataset||(i.innerHTML=`<span>${An(e.name||"board "+(t+1))}</span><small>${xe(e.w)} \xD7 ${xe(e.h)} \xB7 ${e.holes.length} holes</small>`)})}function cs(){let i=cn();if(!i)return;let t=e=>`<option value="">(${An(i.screw)})</option>`+Object.keys(yi).map(n=>`<option ${e===n?"selected":""}>${n}</option>`).join("");Gt("holeRows").innerHTML=i.holes.map((e,n)=>`<tr data-h="${n}" class="${n===Ve?"sel":""}"><td class="n">${n+1}</td>
    <td><input type="number" step="0.1" inputmode="decimal" data-k="x" value="${xe(e.x)}" aria-label="hole ${n+1} x"></td>
    <td><input type="number" step="0.1" inputmode="decimal" data-k="y" value="${xe(e.y)}" aria-label="hole ${n+1} y"></td>
    <td><select data-k="screw" aria-label="hole ${n+1} screw">${t(e.screw)}</select></td>
    <td><input type="checkbox" data-k="on" ${e.off?"":"checked"} aria-label="use hole ${n+1}"></td>
    <td><button class="x" data-del="${n}" aria-label="remove hole ${n+1}">\xD7</button></td></tr>`).join("")}function iy(i){Gt("msgs").innerHTML=i.warn.length?i.warn.map(t=>`<li class="w">${An(t)}</li>`).join(""):"<li>No problems found.</li>",Gt("info").innerHTML=i.info.map(([t,e])=>`<dt>${An(t)}</dt><dd>${An(e)}</dd>`).join("")}var sy="http://www.w3.org/2000/svg",Jn,Vl=null;function Jd(i){let t=i.lay,{L:e,H:n}=t,s=0,r=e,a=0;for(let A of i.draw)A.k!=="slot"&&(s=Math.min(s,A.r[0]),r=Math.max(r,A.r[0]+A.r[2]),a=Math.min(a,A.r[1]));for(let A of vt.boards){let C=fn(A);s=Math.min(s,C.x0),r=Math.max(r,C.x1),a=Math.min(a,C.y0)}let o=Math.max(n,...vt.boards.map(A=>fn(A).y1)),l=16;Vl=[s-l,-(o+l+4),r-s+2*l,o-a+2*l+12];let c=getComputedStyle(document.documentElement),f=Math.max(Vl[2],Vl[3])/70,g=[];g.push(`<rect x="0" y="${-n}" width="${e}" height="${n}" fill="var(--plate)" stroke="var(--cobalt-ink)" stroke-width="0.4"/>`);for(let A of i.cells)g.push(`<rect x="${A[0][0]}" y="${-A[2][1]}" width="${A[1][0]-A[0][0]}" height="${A[2][1]-A[0][1]}" fill="var(--bg)" opacity="0.85"/>`);for(let A of i.draw)A.k==="slot"&&g.push(`<rect x="${A.r[0]}" y="${-(A.r[1]+A.r[3])}" width="${A.r[2]}" height="${A.r[3]}" rx="2.5" fill="none" stroke="var(--mute)" stroke-width="0.3" opacity="0.6"/>`);for(let A of i.draw){if(A.k==="slot")continue;let[C,y,T,V]=A.r;g.push(`<rect x="${C}" y="${-(y+V)}" width="${T}" height="${V}" fill="${A.k==="rail"?"none":"var(--cobalt)"}" fill-opacity="${A.k==="wall"?.45:.3}" stroke="var(--cobalt-ink)" stroke-width="0.3" ${A.k==="rail"?'stroke-dasharray="2 1.5"':""}/>`)}if(i.guides)for(let A of i.guides.ties)A.first&&g.push(`<rect x="${A.x0}" y="${-A.y1}" width="${A.x1-A.x0}" height="${A.y1-A.y0}" fill="none" stroke="#ff7a1a" stroke-width="0.8"/>`,`<text x="${(A.x0+A.x1)/2}" y="${-A.y0+f*1.3}" font-size="${f*.8}" fill="#ff7a1a" text-anchor="middle">zip tie</text>`);let[u,p,x,S]=t.area;g.push(`<rect x="${u}" y="${-S}" width="${x-u}" height="${S-p}" fill="none" stroke="var(--mute)" stroke-width="0.25" stroke-dasharray="1.5 1.5"/>`),vt.boards.forEach((A,C)=>{let y=fn(A),T=C===pn;g.push(`<g data-b="${C}" class="brd" style="cursor:move"><rect x="${y.x0}" y="${-y.y1}" width="${y.fw}" height="${y.fh}" rx="1" fill="var(--pcb)" fill-opacity="${T?.32:.18}" stroke="var(--pcb)" stroke-width="${T?.8:.4}"/>`);let[V,F]=vr(A,0,0);g.push(`<circle cx="${V}" cy="${-F}" r="${f*.35}" fill="var(--pcb)"/>`),g.push(`<text x="${(y.x0+y.x1)/2}" y="${-(y.y0+y.y1)/2}" font-size="${f}" text-anchor="middle" dominant-baseline="middle" fill="var(--ink)" style="pointer-events:none">${An(A.name||"board "+(C+1))}</text></g>`),A.holes.forEach((B,G)=>{let[k,L]=vr(A,B.x,B.y),W=yi[B.screw||A.screw]||yi.M3,Q=T&&G===Ve,j=vt.plate.holeKind==="clear"?W.clear:W.pilot;g.push(`<g data-b="${C}" data-h="${G}" style="cursor:grab"><circle cx="${k}" cy="${-L}" r="${Math.max(W.sd/2+1.5,f*.9)}" fill="transparent"/>
        <circle cx="${k}" cy="${-L}" r="${W.sd/2}" fill="${B.off?"none":"var(--bg)"}" stroke="${Q?"var(--cobalt-ink)":"var(--ink)"}" stroke-width="${Q?.8:.35}" ${B.off?'stroke-dasharray="1 1"':""}/>
        <circle cx="${k}" cy="${-L}" r="${j/2}" fill="${Q?"var(--cobalt-ink)":"var(--ink)"}" opacity="${B.off?.3:1}"/></g>`),Q&&g.push(`<text x="${k+W.sd/2+1.5}" y="${-L-W.sd/2-1}" font-size="${f}" fill="var(--cobalt-ink)" style="pointer-events:none">${xe(B.x)}, ${xe(B.y)}</text>`)})});let[m,_,b,I]=t.sides,E=(A,C,y,T="middle",V=0)=>y?`<text x="${A}" y="${C}" font-size="${f}" fill="var(--mute)" text-anchor="${T}" ${V?`transform="rotate(${V} ${A} ${C})"`:""}>${An(y)}</text>`:"";g.push(E(e/2,-a+f*1.6,b),E(e/2,-n-f*.6,`${I?I+" \xB7 ":""}${xe(e)} \xD7 ${xe(n)} mm`)),g.push(E(s-f*.6,-n/2,m,"middle",-90),E(r+f*1.2,-n/2,_,"middle",90)),Jn.setAttribute("viewBox",Vl.join(" ")),Jn.innerHTML=g.join(""),Gt("sheetDims").textContent=`${xe(e)} \xD7 ${xe(n)} mm`}function Dh(i){let t=Jn.createSVGPoint();t.x=i.clientX,t.y=i.clientY;let e=t.matrixTransform(Jn.getScreenCTM().inverse());return[e.x,-e.y]}var ls=i=>{let t=+Gt("snap").value;return Math.round(i/t)*t},vn=null,Cs=null;function ry(){Jn=document.createElementNS(sy,"svg"),Jn.setAttribute("aria-label","Top view of the plate; drag boards and holes"),Gt("sheet").append(Jn),Jn.addEventListener("pointerdown",t=>{let e=t.target.closest("[data-b]");if(!e){Ve=-1,ql();return}let n=+e.dataset.b,s=e.dataset.h!=null?+e.dataset.h:-1,[r,a]=Dh(t),o=performance.now();if(s<0&&Cs&&Cs.bi===n&&o-Cs.t<450&&Math.hypot(r-Cs.x,a-Cs.y)<3){Cs=null;let u=vt.boards[n],[p,x]=Bl(u,r,a);n!==pn&&(pn=n,Wl()),u.holes.push({x:xe(ls(p)),y:xe(ls(x))}),Ve=u.holes.length-1,sn(),cs(),ba(),Kn();return}Cs={bi:n,t:o,x:r,y:a};let l=n!==pn;pn=n,Ve=s;let[c,f]=Dh(t),g=cn();vn={hk:s,mx:c,my:f,bx:g.x,by:g.y,moved:!1},Jn.setPointerCapture(t.pointerId),l?Wl():cs(),ql()}),Jn.addEventListener("pointermove",t=>{if(!vn)return;let[e,n]=Dh(t),s=cn();if(!(Math.hypot(e-vn.mx,n-vn.my)<.3&&!vn.moved)){if(vn.moved=!0,vn.hk>=0){let[r,a]=Bl(s,e,n);s.holes[vn.hk].x=xe(ls(r)),s.holes[vn.hk].y=xe(ls(a)),cs()}else{s.x=xe(ls(vn.bx+e-vn.mx)),s.y=xe(ls(vn.by+n-vn.my));for(let r of["bx","by"]){let a=Gt("f-"+r);a&&(a.value=r==="bx"?s.x:s.y)}}Kn()}});let i=()=>{vn&&(vn=null,sn())};Jn.addEventListener("pointerup",i),Jn.addEventListener("pointercancel",i)}var Ma=null,Ps,ki,vi,Gl,Xl,zi,va,Ds=null,$l=!0;function ay(){let i=Gt("view");try{Ps=new Cl({antialias:!0,alpha:!0})}catch{Gt("status").textContent="3D preview needs WebGL, which this browser does not offer. The drawing and the SCAD export still work.";return}Ps.setPixelRatio(Math.min(devicePixelRatio,2)),i.prepend(Ps.domElement),ki=new kr,vi=new Sn(35,1,1,5e3),vi.up.set(0,0,1),Gl=new Dl(vi,Ps.domElement),Gl.enableDamping=!0,ki.add(new Zr(16777215,8425648,1.6));let t=new or(16777215,1.6);t.position.set(-150,-250,400),ki.add(t);let e=new or(16777215,.5);e.position.set(200,200,100),ki.add(e),Xl=new wn(new Ln,new ji({color:3826924,roughness:.55,metalness:.05,flatShading:!0})),ki.add(Xl),zi=new fi,ki.add(zi),va=new fi,ki.add(va);let n=new jr(260,26,8952268,13160680);n.rotation.x=Math.PI/2,n.position.z=-.05,n.material.opacity=.35,n.material.transparent=!0,ki.add(n),new ResizeObserver(()=>{let r=i.clientWidth,a=i.clientHeight;Ps.setSize(r,a,!1),vi.aspect=r/Math.max(a,1),vi.updateProjectionMatrix()}).observe(i),(function r(){requestAnimationFrame(r),Gl.update(),Ps.render(ki,vi)})()}function Kd(i){let t=new Z(...i.min).add(new Z(...i.max)).multiplyScalar(.5),e=Math.max(...i.max.map((n,s)=>n-i.min[s]));Gl.target.copy(t),vi.position.set(t.x-e*.7,t.y-e*1.5,t.z+e*1.3),vi.near=e/100,vi.far=e*20,vi.updateProjectionMatrix()}function jd(i,t){if(!Ps)return;let e=new Ln;e.setAttribute("position",new Vn(i.pos,3)),e.setIndex(new Vn(i.idx,1));let n=e.toNonIndexed();if(n.computeVertexNormals(),e.dispose(),Xl.geometry.dispose(),Xl.geometry=n,zi.clear(),va.clear(),t&&t.flip?(zi.rotation.set(Math.PI,0,0),zi.position.set(0,t.flip.H,t.flip.t)):(zi.rotation.set(0,0,0),zi.position.set(0,0,0)),Gt("ghost").checked){let r=$n[vt.mode].tray?vt.r10.floor:vt.plate.t;for(let a of vt.boards){let o=fn(a),l=new wn(new ii(o.fw,o.fh,a.t),new ji({color:2067020,transparent:!0,opacity:.55}));l.position.set((o.x0+o.x1)/2,(o.y0+o.y1)/2,r+a.sh+a.t/2),zi.add(l);let c=new ar(new Xr(new ii(o.fw,o.fh,a.comp)),new bs({color:2067020,transparent:!0,opacity:.5}));c.position.set(l.position.x,l.position.y,r+a.sh+a.t+a.comp/2),zi.add(c)}}if(Gt("ghost").checked&&t&&t.guides){let r=new ji({color:9080729,transparent:!0,opacity:.45}),a=new ji({color:16742938});for(let o of t.guides.bars){let l=new wn(new ii(15,15,o.len),r);l.position.set(o.cx,-7.5,o.z),va.add(l)}for(let o of t.guides.ties){let{x0:l,x1:c,y0:f,y1:g,z:u,w:p}=o,x=1.2;for(let[S,m,_,b]of[[(l+c)/2,g,c-l,x],[(l+c)/2,f,c-l,x],[l,(f+g)/2,x,g-f],[c,(f+g)/2,x,g-f]]){let I=new wn(new ii(_,b,p),a);I.position.set(S,m,u),va.add(I)}}}$l&&(Kd(i.bbox),$l=!1);let s=i.volume/1e3*1.27;Gt("meta").textContent=`${xe(i.bbox.max[0]-i.bbox.min[0])} \xD7 ${xe(i.bbox.max[1]-i.bbox.min[1])} \xD7 ${xe(i.bbox.max[2]-i.bbox.min[2])} mm \xB7 about ${Math.round(s)} g PETG`}var hs=null,qd=0;function Kn(){hs=kl(vt),Jd(hs),iy(hs),clearTimeout(qd),qd=setTimeout(Qd,vn?90:30)}function Qd(){if(Ma)try{Ds=Rh(hs.node,Ma),Gt("status").textContent="",jd(Ds,hs)}catch(i){Gt("status").textContent="Could not build the part: "+i.message}}function ql(){hs&&Jd(hs)}function Vi(){Wl(),Kn()}Gt("modes").addEventListener("click",i=>{let t=i.target.closest("[data-mode]");if(!t)return;vt.mode=t.dataset.mode,$l=!0;let e=ya(vt),[n,s,r,a]=e.area;vt.boards.some(o=>{let l=fn(o);return l.x0<n||l.y0<s||l.x1>r||vt.mode!=="homeracker"&&vt.mode!=="din"&&l.y1>a})&&tf(),sn(),Vi()});Gt("boardList").addEventListener("click",i=>{let t=i.target.closest("[data-b]");t&&(pn=+t.dataset.b,Ve=-1,Sa(),ql())});Gt("addBoard").addEventListener("click",()=>{vt.boards.push(xa({name:"board "+(vt.boards.length+1),holes:[]})),pn=vt.boards.length-1,Ve=-1,Fh(cn()),sn(),Vi()});Gt("preset").innerHTML='<option value="">Add from devices.json\u2026</option><optgroup label="Boards with mounting holes">'+zl.filter(i=>!i.box).map(i=>`<option value="${An(i.key)}">${An(i.name)}</option>`).join("")+'</optgroup><optgroup label="Outline only (add holes yourself)">'+zl.filter(i=>i.box).map(i=>`<option value="${An(i.key)}">${An(i.name)}</option>`).join("")+"</optgroup>";Gt("preset").addEventListener("change",i=>{let t=zl.find(e=>e.key===i.target.value);i.target.value="",t&&(vt.boards.push(xa({name:t.name,w:t.w,h:t.h,sh:t.sh,screw:t.screw,comp:Math.round(t.comp),holes:t.holes.map(e=>({...e}))})),pn=vt.boards.length-1,Ve=-1,Fh(cn()),sn(),Vi())});Gt("dupBoard").addEventListener("click",()=>{let i=cn();if(!i)return;let t=JSON.parse(JSON.stringify(i));t.name+=" copy",vt.boards.push(t),pn=vt.boards.length-1,Fh(t),sn(),Vi()});Gt("delBoard").addEventListener("click",()=>{cn()&&(vt.boards.splice(pn,1),pn=Math.max(0,pn-1),Ve=-1,sn(),Vi())});Gt("arrange").addEventListener("click",()=>{tf(),sn(),Vi()});document.querySelector("#boardBox").addEventListener("click",i=>{let t=i.target.closest("[data-rot]");if(!t||!cn())return;let e=cn(),n=fn(e),s=(n.x0+n.x1)/2,r=(n.y0+n.y1)/2;e.rot=((e.rot+ +t.dataset.rot)%360+360)%360;let a=fn(e);e.x=xe(ls(s-a.fw/2)),e.y=xe(ls(r-a.fh/2)),sn(),Sa(),Kn()});Gt("holeRows").addEventListener("input",i=>{let t=i.target.closest("[data-h]");if(!t)return;let e=cn().holes[+t.dataset.h],n=i.target.dataset.k;if(n==="on")e.off=!i.target.checked;else if(n==="screw")i.target.value?e.screw=i.target.value:delete e.screw;else{let s=+i.target.value;if(i.target.value===""||Number.isNaN(s))return;e[n]=s}Ve=+t.dataset.h,Kn()});Gt("holeRows").addEventListener("change",()=>sn());Gt("holeRows").addEventListener("focusin",i=>{let t=i.target.closest("[data-h]");t&&Ve!==+t.dataset.h&&(Ve=+t.dataset.h,[...Gt("holeRows").rows].forEach((e,n)=>e.classList.toggle("sel",n===Ve)),ql())});Gt("holeRows").addEventListener("click",i=>{let t=i.target.closest("[data-del]");t&&(cn().holes.splice(+t.dataset.del,1),Ve=-1,sn(),cs(),ba(),Kn())});Gt("addHole").addEventListener("click",()=>{let i=cn();i&&(i.holes.push({x:xe(i.w/2),y:xe(i.h/2)}),Ve=i.holes.length-1,sn(),cs(),ba(),Kn())});Gt("ghost").addEventListener("change",()=>Ds&&jd(Ds,hs));Gt("resetView").addEventListener("click",()=>Ds&&Kd(Ds.bbox));document.addEventListener("keydown",i=>{let t=/INPUT|SELECT|TEXTAREA/.test(document.activeElement?.tagName||"");if((i.ctrlKey||i.metaKey)&&i.key.toLowerCase()==="z"&&!t){i.preventDefault(),i.shiftKey?Hl.length&&(Mr.push(Is),$d(Hl.pop())):Mr.length&&(Hl.push(Is),$d(Mr.pop()));return}if(t||!cn())return;if((i.key==="Delete"||i.key==="Backspace")&&Ve>=0){cn().holes.splice(Ve,1),Ve=-1,sn(),cs(),ba(),Kn(),i.preventDefault();return}let e={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,1],ArrowDown:[0,-1]}[i.key];if(e&&Ve>=0){let n=i.shiftKey?.1:.5,s=cn(),r=s.holes[Ve],[a,o]=vr(s,r.x,r.y),[l,c]=Bl(s,a+e[0]*n,o+e[1]*n);r.x=xe(l),r.y=xe(c),sn(),cs(),Kn(),i.preventDefault()}});function Fh(i){let t=ya({...vt,plate:{...vt.plate,autoSize:!0}}),[e,n,s]=t.area,r=6,a=vt.boards.filter(S=>S!==i).map(fn),o=fn(i),l=e+($n[vt.mode].tray?4:3),c=n+($n[vt.mode].tray?2:1),f=vt.mode==="din"?236:s,g=[[l,c],...a.map(S=>[S.x1+r,S.y0]),...a.map(S=>[S.x0,S.y1+r]),...a.map(S=>[l,S.y1+r])];g.sort((S,m)=>S[1]-m[1]||S[0]-m[0]);let u=([S,m])=>S+o.fw<=f&&!a.some(_=>S<_.x1+r-.01&&S+o.fw>_.x0-r+.01&&m<_.y1+r-.01&&m+o.fh>_.y0-r+.01),[p,x]=g.find(u)||[l,Math.max(c,...a.map(S=>S.y1+r))];i.x=xe(p),i.y=xe(x)}function tf(){let i=ya({...vt,plate:{...vt.plate,autoSize:!0}}),[t,e]=i.area,n=vt.mode==="homeracker"||$n[vt.mode].tray?i.area[2]:236,s=t+($n[vt.mode].tray?4:3),r=e+($n[vt.mode].tray?2:1),a=0;for(let o of vt.boards){let l=fn(o);s+l.fw>n&&s>t+4&&(s=t+3,r+=a+6,a=0),o.x=xe(s),o.y=xe(r),s+=l.fw+6,a=Math.max(a,l.fh)}}function ef(i,t){let e=Gt("dlg"),n=Gt("dlgForm");n.innerHTML=i+'<div class="row" style="justify-content:flex-end;margin-top:14px"><button class="b" value="cancel">Cancel</button><button class="b pri" value="ok">Apply</button></div>',e.onclose=()=>{e.returnValue==="ok"&&t(n)},e.returnValue="",e.showModal()}Gt("patBtn").addEventListener("click",()=>{let i=cn();i&&ef(`<h2 style="font-size:18px;margin-bottom:6px">Rectangle hole pattern</h2><p class="sub">Four holes, centre to centre spacing. Leave the offset empty to centre the pattern on the board. This replaces the board's holes; drag single holes afterwards if the pattern is not a perfect rectangle.</p>
    <div class="grid"><label>Spacing along width<input name="a" type="number" step="0.1" value="${xe(i.w-7)}"></label><label>Spacing along height<input name="b" type="number" step="0.1" value="${xe(i.h-7)}"></label>
    <label>Offset x (first hole)<input name="ox" type="number" step="0.1" placeholder="centred"></label><label>Offset y (first hole)<input name="oy" type="number" step="0.1" placeholder="centred"></label></div>`,t=>{let e=+t.a.value,n=+t.b.value,s=t.ox.value===""?(i.w-e)/2:+t.ox.value,r=t.oy.value===""?(i.h-n)/2:+t.oy.value;i.holes=[[0,0],[e,0],[e,n],[0,n]].map(([a,o])=>({x:xe(s+a),y:xe(r+o)})),Ve=-1,sn(),Sa(),Kn()})});Gt("pasteBtn").addEventListener("click",()=>{let i=cn();i&&ef(`<h2 style="font-size:18px;margin-bottom:6px">Paste hole coordinates</h2><p class="sub">One hole per line: x y, optionally a screw size (M2, M2.5, M3, M4). Commas, semicolons, tabs or spaces all work, so a column copied from a spreadsheet or KiCad's drill report fits.</p>
    <textarea name="t" rows="8">${i.holes.map(t=>`${xe(t.x)}, ${xe(t.y)}${t.screw?", "+t.screw:""}`).join(`
`)}</textarea>
    <label class="chk" style="margin-top:8px"><input type="checkbox" name="add"> add to the existing holes</label>`,t=>{let e=[];for(let n of t.t.value.split(/\n/)){let s=n.trim().split(/[\s,;]+/).filter(Boolean);if(s.length<2||Number.isNaN(+s[0])||Number.isNaN(+s[1]))continue;let r={x:+s[0],y:+s[1]},a=s.find(o=>yi[o.toUpperCase()]);a&&(r.screw=a.toUpperCase()),e.push(r)}i.holes=t.add.checked?i.holes.concat(e):e,Ve=-1,sn(),Sa(),Kn()})});var Ls=()=>(vt.name||"plate").replace(/[^\w.-]+/g,"_")+"_"+vt.mode+(vt.boards.length?"_"+vt.boards.map(i=>i.name).join("+").replace(/[^\w.-]+/g,"-").slice(0,60):"");function Oh(){let i=kl(vt),t=JSON.stringify(vt).replace(/\*\//g,"* /");return`// ${$n[vt.mode].label} plate, generated by the PCB plate designer
// ${i.info.map(([e,n])=>e+": "+n).join(`
// `)}
`+(i.warn.length?`// WARNINGS:
// ${i.warn.join(`
// `)}
`:"")+`// Prints flat as modelled, no supports.

${fa(i.node)}

/* design (open it in the plate designer):
${t}
*/
`}function nf(){let i=Ds||Ma&&Rh(kl(vt).node,Ma);if(!i)throw new Error("the 3D engine is not loaded");let t=i.idx.length/3,e=new ArrayBuffer(84+t*50),n=new DataView(e),s="PCB plate designer "+vt.mode;for(let o=0;o<s.length;o++)n.setUint8(o,s.charCodeAt(o));n.setUint32(80,t,!0);let r=84,a=i.pos;for(let o=0;o<t;o++){let l=i.idx[3*o]*3,c=i.idx[3*o+1]*3,f=i.idx[3*o+2]*3,g=a[c]-a[l],u=a[c+1]-a[l+1],p=a[c+2]-a[l+2],x=a[f]-a[l],S=a[f+1]-a[l+1],m=a[f+2]-a[l+2],_=u*m-p*S,b=p*x-g*m,I=g*S-u*x,E=Math.hypot(_,b,I)||1;for(let A of[_/E,b/E,I/E])n.setFloat32(r,A,!0),r+=4;for(let A of[l,c,f])for(let C=0;C<3;C++)n.setFloat32(r,a[A+C],!0),r+=4;r+=2}return new Uint8Array(e)}var oy=(()=>{let i=new Uint32Array(256);for(let t=0;t<256;t++){let e=t;for(let n=0;n<8;n++)e=e&1?3988292384^e>>>1:e>>>1;i[t]=e>>>0}return i})(),ly=i=>{let t=4294967295;for(let e=0;e<i.length;e++)t=oy[(t^i[e])&255]^t>>>8;return(t^4294967295)>>>0};function cy(i){let t=new TextEncoder,e=[],n=[],s=0;for(let[o,l]of i){let c=t.encode(o),f=typeof l=="string"?t.encode(l):l,g=ly(f),u=new DataView(new ArrayBuffer(30));u.setUint32(0,67324752,!0),u.setUint16(4,20,!0),u.setUint32(14,g,!0),u.setUint32(18,f.length,!0),u.setUint32(22,f.length,!0),u.setUint16(26,c.length,!0),e.push(new Uint8Array(u.buffer),c,f);let p=new DataView(new ArrayBuffer(46));p.setUint32(0,33639248,!0),p.setUint16(4,20,!0),p.setUint16(6,20,!0),p.setUint32(16,g,!0),p.setUint32(20,f.length,!0),p.setUint32(24,f.length,!0),p.setUint16(28,c.length,!0),p.setUint32(42,s,!0),n.push(new Uint8Array(p.buffer),c),s+=30+c.length+f.length}let r=n.reduce((o,l)=>o+l.length,0),a=new DataView(new ArrayBuffer(22));return a.setUint32(0,101010256,!0),a.setUint16(8,i.length,!0),a.setUint16(10,i.length,!0),a.setUint32(12,r,!0),a.setUint32(16,s,!0),new Blob([...e,...n,new Uint8Array(a.buffer)])}var Yl=null;async function Zl(i,t,e){if(Yl){try{await Yl.save({filename:i,data:t instanceof Blob?t:new Blob([t],{type:e})})}catch(r){r&&r.code!=="declined"&&Sr("Could not save: "+(r.message||r.code))}return}let n=document.createElement("a"),s=URL.createObjectURL(t instanceof Blob?t:new Blob([t],{type:e}));n.href=s,n.download=i,document.body.append(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(s),5e3)}function Sr(i){Gt("status").textContent=i,setTimeout(()=>{Gt("status").textContent===i&&(Gt("status").textContent="")},4e3)}Gt("bStl").addEventListener("click",()=>{try{Zl(Ls()+".stl",nf(),"model/stl")}catch(i){Sr("STL export failed: "+i.message)}});Gt("bScad").addEventListener("click",()=>Zl(Ls()+".scad",Oh(),"text/plain"));Gt("bJson").addEventListener("click",()=>Zl(Ls()+".json",JSON.stringify(vt,null,1),"application/json"));Gt("bZip").addEventListener("click",()=>{let i=[[Ls()+".scad",Oh()],[Ls()+".json",JSON.stringify(vt,null,1)]];try{i.unshift([Ls()+".stl",nf()])}catch{Sr("3D engine not loaded, the zip has SCAD and design only")}Zl(Ls()+".zip",cy(i),"application/zip")});Gt("bCopy").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(Oh()),Sr("SCAD copied to the clipboard")}catch{Sr("The clipboard is not available here")}});Gt("bLoad").addEventListener("click",()=>Gt("fileIn").click());Gt("fileIn").addEventListener("change",async i=>{let t=i.target.files[0];if(i.target.value="",!!t)try{let e=await t.text(),n=e.match(/\/\* design[^\n]*\n([\s\S]*?)\n\*\//);n&&(e=n[1]),vt=Uh(JSON.parse(e)),pn=0,Ve=-1,$l=!0,sn(),Vi()}catch(e){Sr("That file is not a plate design: "+e.message)}});ry();ay();sn();Vi();Gt("status").textContent="Loading the 3D engine\u2026";Gd({locateFile:()=>new URL("manifold.wasm",document.baseURI).href}).then(i=>{i.setup(),Ma=i,Gt("status").textContent="",Qd()}).catch(i=>{Gt("status").textContent="3D engine could not load ("+i.message+"). The drawing and SCAD export still work."});window.claude&&typeof window.claude.use=="function"&&window.claude.use("downloads").then(i=>{Yl=i,Yl&&(Gt("bStl").hidden=!0,Gt("bScad").hidden=!0)}).catch(()=>{});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
