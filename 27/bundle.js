var gr="145",kn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Vn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xh=0,$o=1,_h=2;var Qo=1,vh=2,ji=3,xn=0,Pt=1,It=2,_n=0,mi=1,ea=2,ta=3,na=4,yh=5,gi=100,bh=101,Mh=102,ia=103,sa=104,wh=200,Sh=201,Th=202,Ah=203,ra=204,oa=205,Eh=206,Ch=207,Lh=208,Rh=209,Ph=210,Ih=0,Dh=1,Nh=2,xr=3,Oh=4,Uh=5,zh=6,Fh=7,_r=0,Bh=1,kh=2,Jt=0,Vh=1,Gh=2,Hh=3,Wh=4,qh=5,aa=300,xi=301,_i=302,vr=303,yr=304,Ms=306,Gn=1e3,et=1001,Ji=1002,rt=1003,ws=1004;var Ss=1005;var We=1006,br=1007;var Hn=1008;var wt=1009,Xh=1010,Yh=1011,la=1012,Zh=1013,Wn=1014,vn=1015,Ki=1016,jh=1017,Jh=1018,vi=1020,Kh=1021,Mr=1022,ut=1023,$h=1024,Qh=1025,qn=1026,yi=1027,eu=1028,tu=1029,nu=1030,iu=1031,su=1033,wr=33776,Sr=33777,Tr=33778,Ar=33779,ca=35840,ha=35841,ua=35842,fa=35843,ru=36196,da=37492,pa=37496,ma=37808,ga=37809,xa=37810,_a=37811,va=37812,ya=37813,ba=37814,Ma=37815,wa=37816,Sa=37817,Ta=37818,Aa=37819,Ea=37820,Ca=37821,La=36492;var bi=2300,Xn=2301,Er=2302,Ra=2400,Pa=2401,Ia=2402,ou=2500;var Da=1,Cr=2,Yn=3e3,Be=3001,au=3200,lu=3201,$i=0,cu=1;var Kt="srgb",Zn="srgb-linear";var Lr=7680;var hu=519,Rr=35044;var jn="300 es",Pr=1035,$t=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}},dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Na=1234567,Qi=Math.PI/180,es=180/Math.PI;function Ut(){let a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dt[a&255]+dt[a>>8&255]+dt[a>>16&255]+dt[a>>24&255]+"-"+dt[e&255]+dt[e>>8&255]+"-"+dt[e>>16&15|64]+dt[e>>24&255]+"-"+dt[t&63|128]+dt[t>>8&255]+"-"+dt[t>>16&255]+dt[t>>24&255]+dt[n&255]+dt[n>>8&255]+dt[n>>16&255]+dt[n>>24&255]).toLowerCase()}function pt(a,e,t){return Math.max(e,Math.min(t,a))}function Ir(a,e){return(a%e+e)%e}function uu(a,e,t,n,i){return n+(a-e)*(i-n)/(t-e)}function fu(a,e,t){return a!==e?(t-a)/(e-a):0}function ts(a,e,t){return(1-t)*a+t*e}function du(a,e,t,n){return ts(a,e,1-Math.exp(-t*n))}function pu(a,e=1){return e-Math.abs(Ir(a,e*2)-e)}function mu(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function gu(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function xu(a,e){return a+Math.floor(Math.random()*(e-a+1))}function _u(a,e){return a+Math.random()*(e-a)}function vu(a){return a*(.5-Math.random())}function yu(a){a!==void 0&&(Na=a);let e=Na+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function bu(a){return a*Qi}function Mu(a){return a*es}function Dr(a){return(a&a-1)===0&&a!==0}function Oa(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function Ts(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function wu(a,e,t,n,i){let s=Math.cos,o=Math.sin,r=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),p=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":a.set(r*u,l*h,l*f,r*c);break;case"YZY":a.set(l*f,r*u,l*h,r*c);break;case"ZXZ":a.set(l*h,l*f,r*u,r*c);break;case"XZX":a.set(r*u,l*g,l*p,r*c);break;case"YXY":a.set(l*p,r*u,l*g,r*c);break;case"ZYZ":a.set(l*g,l*p,r*u,r*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Qt(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Ve(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}var Ua=Object.freeze({__proto__:null,DEG2RAD:Qi,RAD2DEG:es,generateUUID:Ut,clamp:pt,euclideanModulo:Ir,mapLinear:uu,inverseLerp:fu,lerp:ts,damp:du,pingpong:pu,smoothstep:mu,smootherstep:gu,randInt:xu,randFloat:_u,randFloatSpread:vu,seededRandom:yu,degToRad:bu,radToDeg:Mu,isPowerOfTwo:Dr,ceilPowerOfTwo:Oa,floorPowerOfTwo:Ts,setQuaternionFromProperEuler:wu,normalize:Ve,denormalize:Qt}),ge=class{constructor(e=0,t=0){ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},St=class{constructor(){St.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,r,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=r,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],r=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],m=i[0],d=i[3],x=i[6],v=i[1],b=i[4],_=i[7],M=i[2],A=i[5],P=i[8];return s[0]=o*m+r*v+l*M,s[3]=o*d+r*b+l*A,s[6]=o*x+r*_+l*P,s[1]=c*m+u*v+h*M,s[4]=c*d+u*b+h*A,s[7]=c*x+u*_+h*P,s[2]=f*m+p*v+g*M,s[5]=f*d+p*b+g*A,s[8]=f*x+p*_+g*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],r=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*r*c-n*s*u+n*r*l+i*s*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],r=e[5],l=e[6],c=e[7],u=e[8],h=u*o-r*c,f=r*l-u*s,p=c*s-o*l,g=t*h+n*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/g;return e[0]=h*m,e[1]=(i*c-u*n)*m,e[2]=(r*n-i*o)*m,e[3]=f*m,e[4]=(u*t-i*l)*m,e[5]=(i*s-r*t)*m,e[6]=p*m,e[7]=(n*l-c*t)*m,e[8]=(o*t-n*s)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,r){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*r)+o+e,-i*c,i*l,-i*(-c*o+l*r)+r+t,0,0,1),this}scale(e,t){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){let t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],o=i[3],r=i[6],l=i[1],c=i[4],u=i[7];return i[0]=t*s+n*l,i[3]=t*o+n*c,i[6]=t*r+n*u,i[1]=-n*s+t*l,i[4]=-n*o+t*c,i[7]=-n*r+t*u,this}translate(e,t){let n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};function za(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function ns(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Jn(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function As(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}var Nr={[Kt]:{[Zn]:Jn},[Zn]:{[Kt]:As}},zt={legacyMode:!0,get workingColorSpace(){return Zn},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,e,t){if(this.legacyMode||e===t||!e||!t)return a;if(Nr[e]&&Nr[e][t]!==void 0){let n=Nr[e][t];return a.r=n(a.r),a.g=n(a.g),a.b=n(a.b),a}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)}},Fa={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tt={r:0,g:0,b:0},Ft={h:0,s:0,l:0},Es={h:0,s:0,l:0};function Or(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}function Cs(a,e){return e.r=a.r,e.g=a.g,e.b=a.b,e}var fe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,zt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Zn){return this.r=e,this.g=t,this.b=n,zt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Zn){if(e=Ir(e,1),t=pt(t,0,1),n=pt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Or(o,s,e+1/3),this.g=Or(o,s,e),this.b=Or(o,s,e-1/3)}return zt.toWorkingColorSpace(this,i),this}setStyle(e,t=Kt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s,o=i[1],r=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,zt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,zt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)){let l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,zt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,zt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Kt){let n=Fa[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jn(e.r),this.g=Jn(e.g),this.b=Jn(e.b),this}copyLinearToSRGB(e){return this.r=As(e.r),this.g=As(e.g),this.b=As(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return zt.fromWorkingColorSpace(Cs(this,tt),e),pt(tt.r*255,0,255)<<16^pt(tt.g*255,0,255)<<8^pt(tt.b*255,0,255)<<0}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Zn){zt.fromWorkingColorSpace(Cs(this,tt),t);let n=tt.r,i=tt.g,s=tt.b,o=Math.max(n,i,s),r=Math.min(n,i,s),l,c,u=(r+o)/2;if(r===o)l=0,c=0;else{let h=o-r;switch(c=u<=.5?h/(o+r):h/(2-o-r),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Zn){return zt.fromWorkingColorSpace(Cs(this,tt),t),e.r=tt.r,e.g=tt.g,e.b=tt.b,e}getStyle(e=Kt){return zt.fromWorkingColorSpace(Cs(this,tt),e),e!==Kt?`color(${e} ${tt.r} ${tt.g} ${tt.b})`:`rgb(${tt.r*255|0},${tt.g*255|0},${tt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Ft),Ft.h+=e,Ft.s+=t,Ft.l+=n,this.setHSL(Ft.h,Ft.s,Ft.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ft),e.getHSL(Es);let n=ts(Ft.h,Es.h,t),i=ts(Ft.s,Es.s,t),s=ts(Ft.l,Es.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};fe.NAMES=Fa;var Mi,Ur=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Mi===void 0&&(Mi=ns("canvas")),Mi.width=e.width,Mi.height=e.height;let n=Mi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Mi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=ns("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Jn(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Jn(t[n]/255)*255):t[n]=Jn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},zr=class{constructor(e=null){this.isSource=!0,this.uuid=Ut(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,r=i.length;o<r;o++)i[o].isDataTexture?s.push(Fr(i[o].image)):s.push(Fr(i[o]))}else s=Fr(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function Fr(a){return typeof HTMLImageElement!="undefined"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&a instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&a instanceof ImageBitmap?Ur.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Su=0,ft=class extends $t{constructor(e=ft.DEFAULT_IMAGE,t=ft.DEFAULT_MAPPING,n=et,i=et,s=We,o=Hn,r=ut,l=wt,c=1,u=Yn){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=Ut(),this.name="",this.source=new zr(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=r,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new St,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==aa)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gn:e.x=e.x-Math.floor(e.x);break;case et:e.x=e.x<0?0:1;break;case Ji:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gn:e.y=e.y-Math.floor(e.y);break;case et:e.y=e.y<0?0:1;break;case Ji:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}};ft.DEFAULT_IMAGE=null;ft.DEFAULT_MAPPING=aa;var ke=class{constructor(e=0,t=0,n=0,i=1){ke.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,o=.01,r=.1,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],m=l[2],d=l[6],x=l[10];if(Math.abs(u-f)<o&&Math.abs(h-m)<o&&Math.abs(g-d)<o){if(Math.abs(u+f)<r&&Math.abs(h+m)<r&&Math.abs(g+d)<r&&Math.abs(c+p+x-3)<r)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,_=(p+1)/2,M=(x+1)/2,A=(u+f)/4,P=(h+m)/4,y=(g+d)/4;return b>_&&b>M?b<o?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=A/n,s=P/n):_>M?_<o?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(_),n=A/i,s=y/i):M<o?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=P/s,i=y/s),this.set(n,i,s,t),this}let v=Math.sqrt((d-g)*(d-g)+(h-m)*(h-m)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(d-g)/v,this.y=(h-m)/v,this.z=(f-u)/v,this.w=Math.acos((c+p+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Wt=class extends $t{constructor(e,t,n={}){super();this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ke(0,0,e,t),this.scissorTest=!1,this.viewport=new ke(0,0,e,t);let i={width:e,height:t,depth:1};this.texture=new ft(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:We,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new zr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Br=class extends ft{constructor(e=null,t=1,n=1,i=1){super(null);this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=rt,this.minFilter=rt,this.wrapR=et,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ba=class extends ft{constructor(e=null,t=1,n=1,i=1){super(null);this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=rt,this.minFilter=rt,this.wrapR=et,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Dt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,r){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],f=s[o+0],p=s[o+1],g=s[o+2],m=s[o+3];if(r===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(r===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=m;return}if(h!==m||l!==f||c!==p||u!==g){let d=1-r,x=l*f+c*p+u*g+h*m,v=x>=0?1:-1,b=1-x*x;if(b>Number.EPSILON){let M=Math.sqrt(b),A=Math.atan2(M,x*v);d=Math.sin(d*A)/M,r=Math.sin(r*A)/M}let _=r*v;if(l=l*d+f*_,c=c*d+p*_,u=u*d+g*_,h=h*d+m*_,d===1-r){let M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){let r=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=r*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-r*p,e[t+2]=c*g+u*p+r*f-l*h,e[t+3]=u*g-r*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){let n=e._x,i=e._y,s=e._z,o=e._order,r=Math.cos,l=Math.sin,c=r(n/2),u=r(i/2),h=r(s/2),f=l(n/2),p=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],r=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+r+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-i)*p}else if(n>r&&n>h){let p=2*Math.sqrt(1+n-r-h);this._w=(u-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+c)/p}else if(r>h){let p=2*Math.sqrt(1+r-n-h);this._w=(s-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+h-n-r);this._w=(o-i)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,r=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*r+i*c-s*l,this._y=i*u+o*l+s*r-n*c,this._z=s*u+o*c+n*l-i*r,this._w=o*u-n*r-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,o=this._w,r=o*e._w+n*e._x+i*e._y+s*e._z;if(r<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,r=-r):this.copy(e),r>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let l=1-r*r;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}let c=Math.sqrt(l),u=Math.atan2(c,r),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ka.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ka.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,r=e.z,l=e.w,c=l*t+o*i-r*n,u=l*n+r*t-s*i,h=l*i+s*n-o*t,f=-s*t-o*n-r*i;return this.x=c*l+f*-s+u*-r-h*-o,this.y=u*l+f*-o+h*-s-c*-r,this.z=h*l+f*-r+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,o=t.x,r=t.y,l=t.z;return this.x=i*l-s*r,this.y=s*o-n*l,this.z=n*r-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return kr.copy(this).projectOnVector(e),this.sub(kr)}reflect(e){return this.sub(kr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},kr=new C,ka=new Dt,yn=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,r=-1/0;for(let l=0,c=e.length;l<c;l+=3){let u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>s&&(s=u),h>o&&(o=h),f>r&&(r=f)}return this.min.set(t,n,i),this.max.set(s,o,r),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,r=-1/0;for(let l=0,c=e.count;l<c;l++){let u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>s&&(s=u),h>o&&(o=h),f>r&&(r=f)}return this.min.set(t,n,i),this.max.set(s,o,r),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){let s=n.attributes.position;for(let o=0,r=s.count;o<r;o++)Kn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Kn)}else n.boundingBox===null&&n.computeBoundingBox(),Vr.copy(n.boundingBox),Vr.applyMatrix4(e.matrixWorld),this.union(Vr);let i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(is),Ls.subVectors(this.max,is),wi.subVectors(e.a,is),Si.subVectors(e.b,is),Ti.subVectors(e.c,is),bn.subVectors(Si,wi),Mn.subVectors(Ti,Si),$n.subVectors(wi,Ti);let t=[0,-bn.z,bn.y,0,-Mn.z,Mn.y,0,-$n.z,$n.y,bn.z,0,-bn.x,Mn.z,0,-Mn.x,$n.z,0,-$n.x,-bn.y,bn.x,0,-Mn.y,Mn.x,0,-$n.y,$n.x,0];return!Gr(t,wi,Si,Ti,Ls)||(t=[1,0,0,0,1,0,0,0,1],!Gr(t,wi,Si,Ti,Ls))?!1:(Rs.crossVectors(bn,Mn),t=[Rs.x,Rs.y,Rs.z],Gr(t,wi,Si,Ti,Ls))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Kn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(en[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),en[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),en[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),en[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),en[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),en[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),en[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),en[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(en),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},en=[new C,new C,new C,new C,new C,new C,new C,new C],Kn=new C,Vr=new yn,wi=new C,Si=new C,Ti=new C,bn=new C,Mn=new C,$n=new C,is=new C,Ls=new C,Rs=new C,Qn=new C;function Gr(a,e,t,n,i){for(let s=0,o=a.length-3;s<=o;s+=3){Qn.fromArray(a,s);let r=i.x*Math.abs(Qn.x)+i.y*Math.abs(Qn.y)+i.z*Math.abs(Qn.z),l=e.dot(Qn),c=t.dot(Qn),u=n.dot(Qn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>r)return!1}return!0}var Tu=new yn,Va=new C,Ps=new C,Hr=new C,wn=class{constructor(e=new C,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Tu.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hr.subVectors(e,this.center);let t=Hr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(Hr.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?Ps.set(0,0,1).multiplyScalar(e.radius):Ps.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Va.copy(e.center).add(Ps)),this.expandByPoint(Va.copy(e.center).sub(Ps)),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},tn=new C,Wr=new C,Is=new C,Sn=new C,qr=new C,Ds=new C,Xr=new C,Ns=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,tn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(tn.copy(this.direction).multiplyScalar(t).add(this.origin),tn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Wr.copy(e).add(t).multiplyScalar(.5),Is.copy(t).sub(e).normalize(),Sn.copy(this.origin).sub(Wr);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Is),r=Sn.dot(this.direction),l=-Sn.dot(Is),c=Sn.lengthSq(),u=Math.abs(1-o*o),h,f,p,g;if(u>0)if(h=o*l-r,f=o*r-l,g=s*u,h>=0)if(f>=-g)if(f<=g){let m=1/u;h*=m,f*=m,p=h*(h+o*f+2*r)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+r)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+r)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+r)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(o*s+r)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+r)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(Is).multiplyScalar(f).add(Wr),p}intersectSphere(e,t){tn.subVectors(e.center,this.origin);let n=tn.dot(this.direction),i=tn.dot(tn)-n*n,s=e.radius*e.radius;if(i>s)return null;let o=Math.sqrt(s-i),r=n-o,l=n+o;return r<0&&l<0?null:r<0?this.at(l,t):this.at(r,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,r,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||n!==n)&&(n=s),(o<i||i!==i)&&(i=o),h>=0?(r=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(r=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||r>i)||((r>n||n!==n)&&(n=r),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,tn)!==null}intersectTriangle(e,t,n,i,s){qr.subVectors(t,e),Ds.subVectors(n,e),Xr.crossVectors(qr,Ds);let o=this.direction.dot(Xr),r;if(o>0){if(i)return null;r=1}else if(o<0)r=-1,o=-o;else return null;Sn.subVectors(this.origin,e);let l=r*this.direction.dot(Ds.crossVectors(Sn,Ds));if(l<0)return null;let c=r*this.direction.dot(qr.cross(Sn));if(c<0||l+c>o)return null;let u=-r*Sn.dot(Xr);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ae=class{constructor(){Ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,r,l,c,u,h,f,p,g,m,d){let x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=s,x[5]=o,x[9]=r,x[13]=l,x[2]=c,x[6]=u,x[10]=h,x[14]=f,x[3]=p,x[7]=g,x[11]=m,x[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ae().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Ai.setFromMatrixColumn(e,0).length(),s=1/Ai.setFromMatrixColumn(e,1).length(),o=1/Ai.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),r=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let f=o*u,p=o*h,g=r*u,m=r*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-m*c,t[9]=-r*l,t[2]=m-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,p=l*h,g=c*u,m=c*h;t[0]=f+m*r,t[4]=g*r-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-r,t[2]=p*r-g,t[6]=m+f*r,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,p=l*h,g=c*u,m=c*h;t[0]=f-m*r,t[4]=-o*h,t[8]=g+p*r,t[1]=p+g*r,t[5]=o*u,t[9]=m-f*r,t[2]=-o*c,t[6]=r,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,p=o*h,g=r*u,m=r*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+m,t[1]=l*h,t[5]=m*c+f,t[9]=p*c-g,t[2]=-c,t[6]=r*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,p=o*c,g=r*l,m=r*c;t[0]=l*u,t[4]=m-f*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-r*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-m*h}else if(e.order==="XZY"){let f=o*l,p=o*c,g=r*l,m=r*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+m,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=r*u,t[10]=m*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Au,e,Eu)}lookAt(e,t,n){let i=this.elements;return Tt.subVectors(e,t),Tt.lengthSq()===0&&(Tt.z=1),Tt.normalize(),Tn.crossVectors(n,Tt),Tn.lengthSq()===0&&(Math.abs(n.z)===1?Tt.x+=1e-4:Tt.z+=1e-4,Tt.normalize(),Tn.crossVectors(n,Tt)),Tn.normalize(),Os.crossVectors(Tt,Tn),i[0]=Tn.x,i[4]=Os.x,i[8]=Tt.x,i[1]=Tn.y,i[5]=Os.y,i[9]=Tt.y,i[2]=Tn.z,i[6]=Os.z,i[10]=Tt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],r=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],m=n[6],d=n[10],x=n[14],v=n[3],b=n[7],_=n[11],M=n[15],A=i[0],P=i[4],y=i[8],E=i[12],R=i[1],W=i[5],j=i[9],B=i[13],U=i[2],V=i[6],Z=i[10],K=i[14],G=i[3],N=i[7],z=i[11],Q=i[15];return s[0]=o*A+r*R+l*U+c*G,s[4]=o*P+r*W+l*V+c*N,s[8]=o*y+r*j+l*Z+c*z,s[12]=o*E+r*B+l*K+c*Q,s[1]=u*A+h*R+f*U+p*G,s[5]=u*P+h*W+f*V+p*N,s[9]=u*y+h*j+f*Z+p*z,s[13]=u*E+h*B+f*K+p*Q,s[2]=g*A+m*R+d*U+x*G,s[6]=g*P+m*W+d*V+x*N,s[10]=g*y+m*j+d*Z+x*z,s[14]=g*E+m*B+d*K+x*Q,s[3]=v*A+b*R+_*U+M*G,s[7]=v*P+b*W+_*V+M*N,s[11]=v*y+b*j+_*Z+M*z,s[15]=v*E+b*B+_*K+M*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],r=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],m=e[7],d=e[11],x=e[15];return g*(+s*l*h-i*c*h-s*r*f+n*c*f+i*r*p-n*l*p)+m*(+t*l*p-t*c*f+s*o*f-i*o*p+i*c*u-s*l*u)+d*(+t*c*h-t*r*p-s*o*h+n*o*p+s*r*u-n*c*u)+x*(-i*r*u-t*l*h+t*r*f+i*o*h-n*o*f+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],r=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],m=e[13],d=e[14],x=e[15],v=h*d*c-m*f*c+m*l*p-r*d*p-h*l*x+r*f*x,b=g*f*c-u*d*c-g*l*p+o*d*p+u*l*x-o*f*x,_=u*m*c-g*h*c+g*r*p-o*m*p-u*r*x+o*h*x,M=g*h*l-u*m*l-g*r*f+o*m*f+u*r*d-o*h*d,A=t*v+n*b+i*_+s*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/A;return e[0]=v*P,e[1]=(m*f*s-h*d*s-m*i*p+n*d*p+h*i*x-n*f*x)*P,e[2]=(r*d*s-m*l*s+m*i*c-n*d*c-r*i*x+n*l*x)*P,e[3]=(h*l*s-r*f*s-h*i*c+n*f*c+r*i*p-n*l*p)*P,e[4]=b*P,e[5]=(u*d*s-g*f*s+g*i*p-t*d*p-u*i*x+t*f*x)*P,e[6]=(g*l*s-o*d*s-g*i*c+t*d*c+o*i*x-t*l*x)*P,e[7]=(o*f*s-u*l*s+u*i*c-t*f*c-o*i*p+t*l*p)*P,e[8]=_*P,e[9]=(g*h*s-u*m*s-g*n*p+t*m*p+u*n*x-t*h*x)*P,e[10]=(o*m*s-g*r*s+g*n*c-t*m*c-o*n*x+t*r*x)*P,e[11]=(u*r*s-o*h*s-u*n*c+t*h*c+o*n*p-t*r*p)*P,e[12]=M*P,e[13]=(u*m*i-g*h*i+g*n*f-t*m*f-u*n*d+t*h*d)*P,e[14]=(g*r*i-o*m*i-g*n*l+t*m*l+o*n*d-t*r*d)*P,e[15]=(o*h*i-u*r*i+u*n*l-t*h*l-o*n*f+t*r*f)*P,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,r=e.y,l=e.z,c=s*o,u=s*r;return this.set(c*o+n,c*r-i*l,c*l+i*r,0,c*r+i*l,u*r+n,u*l-i*o,0,c*l-i*r,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,o=t._y,r=t._z,l=t._w,c=s+s,u=o+o,h=r+r,f=s*c,p=s*u,g=s*h,m=o*u,d=o*h,x=r*h,v=l*c,b=l*u,_=l*h,M=n.x,A=n.y,P=n.z;return i[0]=(1-(m+x))*M,i[1]=(p+_)*M,i[2]=(g-b)*M,i[3]=0,i[4]=(p-_)*A,i[5]=(1-(f+x))*A,i[6]=(d+v)*A,i[7]=0,i[8]=(g+b)*P,i[9]=(d-v)*P,i[10]=(1-(f+m))*P,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=Ai.set(i[0],i[1],i[2]).length(),o=Ai.set(i[4],i[5],i[6]).length(),r=Ai.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Bt.copy(this);let c=1/s,u=1/o,h=1/r;return Bt.elements[0]*=c,Bt.elements[1]*=c,Bt.elements[2]*=c,Bt.elements[4]*=u,Bt.elements[5]*=u,Bt.elements[6]*=u,Bt.elements[8]*=h,Bt.elements[9]*=h,Bt.elements[10]*=h,t.setFromRotationMatrix(Bt),n.x=s,n.y=o,n.z=r,this}makePerspective(e,t,n,i,s,o){let r=this.elements,l=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),f=-(o+s)/(o-s),p=-2*o*s/(o-s);return r[0]=l,r[4]=0,r[8]=u,r[12]=0,r[1]=0,r[5]=c,r[9]=h,r[13]=0,r[2]=0,r[6]=0,r[10]=f,r[14]=p,r[3]=0,r[7]=0,r[11]=-1,r[15]=0,this}makeOrthographic(e,t,n,i,s,o){let r=this.elements,l=1/(t-e),c=1/(n-i),u=1/(o-s),h=(t+e)*l,f=(n+i)*c,p=(o+s)*u;return r[0]=2*l,r[4]=0,r[8]=0,r[12]=-h,r[1]=0,r[5]=2*c,r[9]=0,r[13]=-f,r[2]=0,r[6]=0,r[10]=-2*u,r[14]=-p,r[3]=0,r[7]=0,r[11]=0,r[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ai=new C,Bt=new Ae,Au=new C(0,0,0),Eu=new C(1,1,1),Tn=new C,Os=new C,Tt=new C,Ga=new Ae,Ha=new Dt,Ei=class{constructor(e=0,t=0,n=0,i=Ei.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],o=i[4],r=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(pt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(r,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(pt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-pt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(r,p));break;case"XZY":this._z=Math.asin(-pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(r,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ga.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ga,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ha.setFromEuler(this),this.setFromQuaternion(Ha,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}};Ei.DefaultOrder="XYZ";Ei.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];var Yr=class{constructor(){this.mask=1|0}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=4294967295|0}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Cu=0,Wa=new C,Ci=new Dt,nn=new Ae,Us=new C,ss=new C,Lu=new C,Ru=new Dt,qa=new C(1,0,0),Xa=new C(0,1,0),Ya=new C(0,0,1),Pu={type:"added"},Za={type:"removed"},qe=class extends $t{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=Ut(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qe.DefaultUp.clone();let e=new C,t=new Ei,n=new Dt,i=new C(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ae},normalMatrix:{value:new St}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=qe.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=qe.DefaultMatrixWorldAutoUpdate,this.layers=new Yr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.premultiply(Ci),this}rotateX(e){return this.rotateOnAxis(qa,e)}rotateY(e){return this.rotateOnAxis(Xa,e)}rotateZ(e){return this.rotateOnAxis(Ya,e)}translateOnAxis(e,t){return Wa.copy(e).applyQuaternion(this.quaternion),this.position.add(Wa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qa,e)}translateY(e){return this.translateOnAxis(Xa,e)}translateZ(e){return this.translateOnAxis(Ya,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(nn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Us.copy(e):Us.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nn.lookAt(ss,Us,this.up):nn.lookAt(Us,ss,this.up),this.quaternion.setFromRotationMatrix(nn),i&&(nn.extractRotation(i.matrixWorld),Ci.setFromRotationMatrix(nn),this.quaternion.premultiply(Ci.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Pu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Za)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){let t=this.children[e];t.parent=null,t.dispatchEvent(Za)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(nn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,e,Lu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,Ru,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++){let r=i[s];r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){let l=r.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let r=[];for(let l=0,c=this.material.length;l<c;l++)r.push(s(e.materials,this.material[l]));i.material=r}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let r=0;r<this.children.length;r++)i.children.push(this.children[r].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let r=0;r<this.animations.length;r++){let l=this.animations[r];i.animations.push(s(e.animations,l))}}if(t){let r=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);r.length>0&&(n.geometries=r),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(r){let l=[];for(let c in r){let u=r[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};qe.DefaultUp=new C(0,1,0);qe.DefaultMatrixAutoUpdate=!0;qe.DefaultMatrixWorldAutoUpdate=!0;var kt=new C,sn=new C,Zr=new C,rn=new C,Li=new C,Ri=new C,ja=new C,jr=new C,Jr=new C,Kr=new C,qt=class{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),kt.subVectors(e,t),i.cross(kt);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){kt.subVectors(i,t),sn.subVectors(n,t),Zr.subVectors(e,t);let o=kt.dot(kt),r=kt.dot(sn),l=kt.dot(Zr),c=sn.dot(sn),u=sn.dot(Zr),h=o*c-r*r;if(h===0)return s.set(-2,-1,-1);let f=1/h,p=(c*l-r*u)*f,g=(o*u-r*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,rn),rn.x>=0&&rn.y>=0&&rn.x+rn.y<=1}static getUV(e,t,n,i,s,o,r,l){return this.getBarycoord(e,t,n,i,rn),l.set(0,0),l.addScaledVector(s,rn.x),l.addScaledVector(o,rn.y),l.addScaledVector(r,rn.z),l}static isFrontFacing(e,t,n,i){return kt.subVectors(n,t),sn.subVectors(e,t),kt.cross(sn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kt.subVectors(this.c,this.b),sn.subVectors(this.a,this.b),kt.cross(sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return qt.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,o,r;Li.subVectors(i,n),Ri.subVectors(s,n),jr.subVectors(e,n);let l=Li.dot(jr),c=Ri.dot(jr);if(l<=0&&c<=0)return t.copy(n);Jr.subVectors(e,i);let u=Li.dot(Jr),h=Ri.dot(Jr);if(u>=0&&h<=u)return t.copy(i);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Li,o);Kr.subVectors(e,s);let p=Li.dot(Kr),g=Ri.dot(Kr);if(g>=0&&p<=g)return t.copy(s);let m=p*c-l*g;if(m<=0&&c>=0&&g<=0)return r=c/(c-g),t.copy(n).addScaledVector(Ri,r);let d=u*g-p*h;if(d<=0&&h-u>=0&&p-g>=0)return ja.subVectors(s,i),r=(h-u)/(h-u+(p-g)),t.copy(i).addScaledVector(ja,r);let x=1/(d+m+f);return o=m*x,r=f*x,t.copy(n).addScaledVector(Li,o).addScaledVector(Ri,r)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Iu=0,mt=class extends $t{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=Ut(),this.name="",this.type="Material",this.blending=mi,this.side=xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ra,this.blendDst=oa,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lr,this.stencilZFail=Lr,this.stencilZPass=Lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}let i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==mi&&(n.blending=this.blending),this.side!==xn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){let o=[];for(let r in s){let l=s[r];delete l.metadata,o.push(l)}return o}if(t){let s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},on=class extends mt{constructor(e){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_r,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ke=new C,zs=new ge,_t=class{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Rr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)zs.fromBufferAttribute(this,t),zs.applyMatrix3(e),this.setXY(t,zs.x,zs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.applyMatrix3(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.applyMatrix4(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.applyNormalMatrix(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ke.fromBufferAttribute(this,t),Ke.transformDirection(e),this.setXYZ(t,Ke.x,Ke.y,Ke.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ve(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ve(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ve(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ve(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ve(t,this.array),n=Ve(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ve(t,this.array),n=Ve(n,this.array),i=Ve(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ve(t,this.array),n=Ve(n,this.array),i=Ve(i,this.array),s=Ve(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rr&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}};var $r=class extends _t{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Qr=class extends _t{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ge=class extends _t{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Du=0,Nt=new Ae,eo=new qe,Pi=new C,At=new yn,rs=new yn,ot=new C,at=class extends $t{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=Ut(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(za(e)?Qr:$r)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new St().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nt.makeRotationFromQuaternion(e),this.applyMatrix4(Nt),this}rotateX(e){return Nt.makeRotationX(e),this.applyMatrix4(Nt),this}rotateY(e){return Nt.makeRotationY(e),this.applyMatrix4(Nt),this}rotateZ(e){return Nt.makeRotationZ(e),this.applyMatrix4(Nt),this}translate(e,t,n){return Nt.makeTranslation(e,t,n),this.applyMatrix4(Nt),this}scale(e,t,n){return Nt.makeScale(e,t,n),this.applyMatrix4(Nt),this}lookAt(e){return eo.lookAt(e),eo.updateMatrix(),this.applyMatrix4(eo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pi).negate(),this.translate(Pi.x,Pi.y,Pi.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ge(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];At.setFromBufferAttribute(s),this.morphTargetsRelative?(ot.addVectors(this.boundingBox.min,At.min),this.boundingBox.expandByPoint(ot),ot.addVectors(this.boundingBox.max,At.max),this.boundingBox.expandByPoint(ot)):(this.boundingBox.expandByPoint(At.min),this.boundingBox.expandByPoint(At.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(e){let n=this.boundingSphere.center;if(At.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let r=t[s];rs.setFromBufferAttribute(r),this.morphTargetsRelative?(ot.addVectors(At.min,rs.min),At.expandByPoint(ot),ot.addVectors(At.max,rs.max),At.expandByPoint(ot)):(At.expandByPoint(rs.min),At.expandByPoint(rs.max))}At.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)ot.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(ot));if(t)for(let s=0,o=t.length;s<o;s++){let r=t[s],l=this.morphTargetsRelative;for(let c=0,u=r.count;c<u;c++)ot.fromBufferAttribute(r,c),l&&(Pi.fromBufferAttribute(e,c),ot.add(Pi)),i=Math.max(i,n.distanceToSquared(ot))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,r=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _t(new Float32Array(4*r),4));let l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<r;R++)c[R]=new C,u[R]=new C;let h=new C,f=new C,p=new C,g=new ge,m=new ge,d=new ge,x=new C,v=new C;function b(R,W,j){h.fromArray(i,R*3),f.fromArray(i,W*3),p.fromArray(i,j*3),g.fromArray(o,R*2),m.fromArray(o,W*2),d.fromArray(o,j*2),f.sub(h),p.sub(h),m.sub(g),d.sub(g);let B=1/(m.x*d.y-d.x*m.y);!isFinite(B)||(x.copy(f).multiplyScalar(d.y).addScaledVector(p,-m.y).multiplyScalar(B),v.copy(p).multiplyScalar(m.x).addScaledVector(f,-d.x).multiplyScalar(B),c[R].add(x),c[W].add(x),c[j].add(x),u[R].add(v),u[W].add(v),u[j].add(v))}let _=this.groups;_.length===0&&(_=[{start:0,count:n.length}]);for(let R=0,W=_.length;R<W;++R){let j=_[R],B=j.start,U=j.count;for(let V=B,Z=B+U;V<Z;V+=3)b(n[V+0],n[V+1],n[V+2])}let M=new C,A=new C,P=new C,y=new C;function E(R){P.fromArray(s,R*3),y.copy(P);let W=c[R];M.copy(W),M.sub(P.multiplyScalar(P.dot(W))).normalize(),A.crossVectors(y,W);let B=A.dot(u[R])<0?-1:1;l[R*4]=M.x,l[R*4+1]=M.y,l[R*4+2]=M.z,l[R*4+3]=B}for(let R=0,W=_.length;R<W;++R){let j=_[R],B=j.start,U=j.count;for(let V=B,Z=B+U;V<Z;V+=3)E(n[V+0]),E(n[V+1]),E(n[V+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let i=new C,s=new C,o=new C,r=new C,l=new C,c=new C,u=new C,h=new C;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),m=e.getX(f+1),d=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),o.fromBufferAttribute(t,d),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),r.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,d),r.add(u),l.add(u),c.add(u),n.setXYZ(g,r.x,r.y,r.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ot.fromBufferAttribute(e,t),ot.normalize(),e.setXYZ(t,ot.x,ot.y,ot.z)}toNonIndexed(){function e(r,l){let c=r.array,u=r.itemSize,h=r.normalized,f=new c.constructor(l.length*u),p=0,g=0;for(let m=0,d=l.length;m<d;m++){r.isInterleavedBufferAttribute?p=l[m]*r.data.stride+r.offset:p=l[m]*u;for(let x=0;x<u;x++)f[g++]=c[p++]}return new _t(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new at,n=this.index.array,i=this.attributes;for(let r in i){let l=i[r],c=e(l,n);t.setAttribute(r,c)}let s=this.morphAttributes;for(let r in s){let l=[],c=s[r];for(let u=0,h=c.length;u<h;u++){let f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[r]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let r=0,l=o.length;r<l;r++){let c=o[r];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let r=this.boundingSphere;return r!==null&&(e.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let r=e.boundingBox;r!==null&&(this.boundingBox=r.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}},Ja=new Ae,Ii=new Ns,to=new wn,An=new C,En=new C,Cn=new C,no=new C,io=new C,so=new C,Fs=new C,Bs=new C,ks=new C,Vs=new ge,Gs=new ge,Hs=new ge,ro=new C,Ws=new C,nt=class extends qe{constructor(e=new at,t=new on){super();this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let r=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),to.copy(n.boundingSphere),to.applyMatrix4(s),e.ray.intersectsSphere(to)===!1)||(Ja.copy(s).invert(),Ii.copy(e.ray).applyMatrix4(Ja),n.boundingBox!==null&&Ii.intersectsBox(n.boundingBox)===!1))return;let o,r=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,p=n.groups,g=n.drawRange;if(r!==null)if(Array.isArray(i))for(let m=0,d=p.length;m<d;m++){let x=p[m],v=i[x.materialIndex],b=Math.max(x.start,g.start),_=Math.min(r.count,Math.min(x.start+x.count,g.start+g.count));for(let M=b,A=_;M<A;M+=3){let P=r.getX(M),y=r.getX(M+1),E=r.getX(M+2);o=qs(this,v,e,Ii,l,c,u,h,f,P,y,E),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{let m=Math.max(0,g.start),d=Math.min(r.count,g.start+g.count);for(let x=m,v=d;x<v;x+=3){let b=r.getX(x),_=r.getX(x+1),M=r.getX(x+2);o=qs(this,i,e,Ii,l,c,u,h,f,b,_,M),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,d=p.length;m<d;m++){let x=p[m],v=i[x.materialIndex],b=Math.max(x.start,g.start),_=Math.min(l.count,Math.min(x.start+x.count,g.start+g.count));for(let M=b,A=_;M<A;M+=3){let P=M,y=M+1,E=M+2;o=qs(this,v,e,Ii,l,c,u,h,f,P,y,E),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{let m=Math.max(0,g.start),d=Math.min(l.count,g.start+g.count);for(let x=m,v=d;x<v;x+=3){let b=x,_=x+1,M=x+2;o=qs(this,i,e,Ii,l,c,u,h,f,b,_,M),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}};function Nu(a,e,t,n,i,s,o,r){let l;if(e.side===Pt?l=n.intersectTriangle(o,s,i,!0,r):l=n.intersectTriangle(i,s,o,e.side!==It,r),l===null)return null;Ws.copy(r),Ws.applyMatrix4(a.matrixWorld);let c=t.ray.origin.distanceTo(Ws);return c<t.near||c>t.far?null:{distance:c,point:Ws.clone(),object:a}}function qs(a,e,t,n,i,s,o,r,l,c,u,h){An.fromBufferAttribute(i,c),En.fromBufferAttribute(i,u),Cn.fromBufferAttribute(i,h);let f=a.morphTargetInfluences;if(s&&f){Fs.set(0,0,0),Bs.set(0,0,0),ks.set(0,0,0);for(let g=0,m=s.length;g<m;g++){let d=f[g],x=s[g];d!==0&&(no.fromBufferAttribute(x,c),io.fromBufferAttribute(x,u),so.fromBufferAttribute(x,h),o?(Fs.addScaledVector(no,d),Bs.addScaledVector(io,d),ks.addScaledVector(so,d)):(Fs.addScaledVector(no.sub(An),d),Bs.addScaledVector(io.sub(En),d),ks.addScaledVector(so.sub(Cn),d)))}An.add(Fs),En.add(Bs),Cn.add(ks)}a.isSkinnedMesh&&(a.boneTransform(c,An),a.boneTransform(u,En),a.boneTransform(h,Cn));let p=Nu(a,e,t,n,An,En,Cn,ro);if(p){r&&(Vs.fromBufferAttribute(r,c),Gs.fromBufferAttribute(r,u),Hs.fromBufferAttribute(r,h),p.uv=qt.getUV(ro,An,En,Cn,Vs,Gs,Hs,new ge)),l&&(Vs.fromBufferAttribute(l,c),Gs.fromBufferAttribute(l,u),Hs.fromBufferAttribute(l,h),p.uv2=qt.getUV(ro,An,En,Cn,Vs,Gs,Hs,new ge));let g={a:c,b:u,c:h,normal:new C,materialIndex:0};qt.getNormal(An,En,Cn,g.normal),p.face=g}return p}var Di=class extends at{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let r=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ge(c,3)),this.setAttribute("normal",new Ge(u,3)),this.setAttribute("uv",new Ge(h,2));function g(m,d,x,v,b,_,M,A,P,y,E){let R=_/P,W=M/y,j=_/2,B=M/2,U=A/2,V=P+1,Z=y+1,K=0,G=0,N=new C;for(let z=0;z<Z;z++){let Q=z*W-B;for(let J=0;J<V;J++){let ie=J*R-j;N[m]=ie*v,N[d]=Q*b,N[x]=U,c.push(N.x,N.y,N.z),N[m]=0,N[d]=0,N[x]=A>0?1:-1,u.push(N.x,N.y,N.z),h.push(J/P),h.push(1-z/y),K+=1}}for(let z=0;z<y;z++)for(let Q=0;Q<P;Q++){let J=f+Q+V*z,ie=f+Q+V*(z+1),he=f+(Q+1)+V*(z+1),ye=f+(Q+1)+V*z;l.push(J,ie,ye),l.push(ie,he,ye),G+=6}r.addGroup(p,G,E),p+=G,f+=K}}static fromJSON(e){return new Di(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ni(a){let e={};for(let t in a){e[t]={};for(let n in a[t]){let i=a[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function gt(a){let e={};for(let t=0;t<a.length;t++){let n=Ni(a[t]);for(let i in n)e[i]=n[i]}return e}function Ou(a){let e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}var Uu={clone:Ni,merge:gt},zu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,an=class extends mt{constructor(e){super();this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zu,this.fragmentShader=Fu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ni(e.uniforms),this.uniformsGroups=Ou(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},oo=class extends qe{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},lt=class extends oo{constructor(e=50,t=1,n=.1,i=2e3){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=es*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Qi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return es*2*Math.atan(Math.tan(Qi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Qi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let r=this.filmOffset;r!==0&&(s+=e*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Oi=90,Ui=1,Ka=class extends qe{constructor(e,t,n){super();this.type="CubeCamera",this.renderTarget=n;let i=new lt(Oi,Ui,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new C(1,0,0)),this.add(i);let s=new lt(Oi,Ui,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new C(-1,0,0)),this.add(s);let o=new lt(Oi,Ui,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new C(0,1,0)),this.add(o);let r=new lt(Oi,Ui,e,t);r.layers=this.layers,r.up.set(0,0,-1),r.lookAt(new C(0,-1,0)),this.add(r);let l=new lt(Oi,Ui,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new C(0,0,1)),this.add(l);let c=new lt(Oi,Ui,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new C(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();let n=this.renderTarget,[i,s,o,r,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=Jt,e.xr.enabled=!1;let p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,r),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},ao=class extends ft{constructor(e,t,n,i,s,o,r,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:xi;super(e,t,n,i,s,o,r,l,c,u);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},$a=class extends Wt{constructor(e,t={}){super(e,e,t);this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ao(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:We}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`
 
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
       `},i=new Di(5,5,5),s=new an({name:"CubemapFromEquirect",uniforms:Ni(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pt,blending:_n});s.uniforms.tEquirect.value=t;let o=new nt(i,s),r=t.minFilter;return t.minFilter===Hn&&(t.minFilter=We),new Ka(1,10,this).update(e,o),t.minFilter=r,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}},lo=new C,Bu=new C,ku=new St,Ln=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=lo.subVectors(n,t).cross(Bu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){let n=e.delta(lo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ku.getNormalMatrix(e),i=this.coplanarPoint(lo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},zi=new wn,Xs=new C,Ys=class{constructor(e=new Ln,t=new Ln,n=new Ln,i=new Ln,s=new Ln,o=new Ln){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){let r=this.planes;return r[0].copy(e),r[1].copy(t),r[2].copy(n),r[3].copy(i),r[4].copy(s),r[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){let t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],r=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],p=n[9],g=n[10],m=n[11],d=n[12],x=n[13],v=n[14],b=n[15];return t[0].setComponents(r-i,h-l,m-f,b-d).normalize(),t[1].setComponents(r+i,h+l,m+f,b+d).normalize(),t[2].setComponents(r+s,h+c,m+p,b+x).normalize(),t[3].setComponents(r-s,h-c,m-p,b-x).normalize(),t[4].setComponents(r-o,h-u,m-g,b-v).normalize(),t[5].setComponents(r+o,h+u,m+g,b+v).normalize(),this}intersectsObject(e){let t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(zi)}intersectsSprite(e){return zi.center.set(0,0,0),zi.radius=.7071067811865476,zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Xs.x=i.normal.x>0?e.max.x:e.min.x,Xs.y=i.normal.y>0?e.max.y:e.min.y,Xs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Xs)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Qa(){let a=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=a.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){a=s}}}function Vu(a,e){let t=e.isWebGL2,n=new WeakMap;function i(c,u){let h=c.array,f=c.usage,p=a.createBuffer();a.bindBuffer(u,p),a.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){let f=u.array,p=u.updateRange;a.bindBuffer(h,c),p.count===-1?a.bufferSubData(h,0,f):(t?a.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):a.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function r(c){c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);u&&(a.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){let f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:o,remove:r,update:l}}var Fi=class extends at{constructor(e=1,t=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,o=t/2,r=Math.floor(n),l=Math.floor(i),c=r+1,u=l+1,h=e/r,f=t/l,p=[],g=[],m=[],d=[];for(let x=0;x<u;x++){let v=x*f-o;for(let b=0;b<c;b++){let _=b*h-s;g.push(_,-v,0),m.push(0,0,1),d.push(b/r),d.push(1-x/l)}}for(let x=0;x<l;x++)for(let v=0;v<r;v++){let b=v+c*x,_=v+c*(x+1),M=v+1+c*(x+1),A=v+1+c*x;p.push(b,_,A),p.push(_,M,A)}this.setIndex(p),this.setAttribute("position",new Ge(g,3)),this.setAttribute("normal",new Ge(m,3)),this.setAttribute("uv",new Ge(d,2))}static fromJSON(e){return new Fi(e.width,e.height,e.widthSegments,e.heightSegments)}},Gu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Hu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,qu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zu="vec3 transformed = vec3( position );",ju=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ju=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,Ku=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,$u=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Qu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,of=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,af=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,lf=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,cf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,hf=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,uf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ff=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,df=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mf="gl_FragColor = linearToOutputTexel( gl_FragColor );",gf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xf=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
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
#endif`,_f=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vf=`#ifdef USE_ENVMAP
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
#endif`,yf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bf=`#ifdef USE_ENVMAP
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
#endif`,Mf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Af=`#ifdef USE_GRADIENTMAP
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
}`,Ef=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Cf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,Pf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,If=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Df=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Of=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,zf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Ff=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Bf=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Vf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Gf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,qf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Xf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$f=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ed=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,td=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,nd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,id=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,od=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ad=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,ld=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,cd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,hd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,ud=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,pd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,md=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_d=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,bd=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Md=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
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
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,wd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Sd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Td=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Ad=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ed=`#ifdef USE_SKINNING
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
#endif`,Cd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ld=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Id=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Dd=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Nd=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Od=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Ud=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,zd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Fd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Bd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,kd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Vd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gd=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Hd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wd=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,qd=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Xd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Yd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Zd=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Kd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$d=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qd=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,ep=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,np=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ip=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,sp=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,op=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ap=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,lp=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,hp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,up=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,fp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,pp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mp=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,xp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,_p=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ce={alphamap_fragment:Gu,alphamap_pars_fragment:Hu,alphatest_fragment:Wu,alphatest_pars_fragment:qu,aomap_fragment:Xu,aomap_pars_fragment:Yu,begin_vertex:Zu,beginnormal_vertex:ju,bsdfs:Ju,iridescence_fragment:Ku,bumpmap_pars_fragment:$u,clipping_planes_fragment:Qu,clipping_planes_pars_fragment:ef,clipping_planes_pars_vertex:tf,clipping_planes_vertex:nf,color_fragment:sf,color_pars_fragment:rf,color_pars_vertex:of,color_vertex:af,common:lf,cube_uv_reflection_fragment:cf,defaultnormal_vertex:hf,displacementmap_pars_vertex:uf,displacementmap_vertex:ff,emissivemap_fragment:df,emissivemap_pars_fragment:pf,encodings_fragment:mf,encodings_pars_fragment:gf,envmap_fragment:xf,envmap_common_pars_fragment:_f,envmap_pars_fragment:vf,envmap_pars_vertex:yf,envmap_physical_pars_fragment:If,envmap_vertex:bf,fog_vertex:Mf,fog_pars_vertex:wf,fog_fragment:Sf,fog_pars_fragment:Tf,gradientmap_pars_fragment:Af,lightmap_fragment:Ef,lightmap_pars_fragment:Cf,lights_lambert_fragment:Lf,lights_lambert_pars_fragment:Rf,lights_pars_begin:Pf,lights_toon_fragment:Df,lights_toon_pars_fragment:Nf,lights_phong_fragment:Of,lights_phong_pars_fragment:Uf,lights_physical_fragment:zf,lights_physical_pars_fragment:Ff,lights_fragment_begin:Bf,lights_fragment_maps:kf,lights_fragment_end:Vf,logdepthbuf_fragment:Gf,logdepthbuf_pars_fragment:Hf,logdepthbuf_pars_vertex:Wf,logdepthbuf_vertex:qf,map_fragment:Xf,map_pars_fragment:Yf,map_particle_fragment:Zf,map_particle_pars_fragment:jf,metalnessmap_fragment:Jf,metalnessmap_pars_fragment:Kf,morphcolor_vertex:$f,morphnormal_vertex:Qf,morphtarget_pars_vertex:ed,morphtarget_vertex:td,normal_fragment_begin:nd,normal_fragment_maps:id,normal_pars_fragment:sd,normal_pars_vertex:rd,normal_vertex:od,normalmap_pars_fragment:ad,clearcoat_normal_fragment_begin:ld,clearcoat_normal_fragment_maps:cd,clearcoat_pars_fragment:hd,iridescence_pars_fragment:ud,output_fragment:fd,packing:dd,premultiplied_alpha_fragment:pd,project_vertex:md,dithering_fragment:gd,dithering_pars_fragment:xd,roughnessmap_fragment:_d,roughnessmap_pars_fragment:vd,shadowmap_pars_fragment:yd,shadowmap_pars_vertex:bd,shadowmap_vertex:Md,shadowmask_pars_fragment:wd,skinbase_vertex:Sd,skinning_pars_vertex:Td,skinning_vertex:Ad,skinnormal_vertex:Ed,specularmap_fragment:Cd,specularmap_pars_fragment:Ld,tonemapping_fragment:Rd,tonemapping_pars_fragment:Pd,transmission_fragment:Id,transmission_pars_fragment:Dd,uv_pars_fragment:Nd,uv_pars_vertex:Od,uv_vertex:Ud,uv2_pars_fragment:zd,uv2_pars_vertex:Fd,uv2_vertex:Bd,worldpos_vertex:kd,background_vert:Vd,background_frag:Gd,cube_vert:Hd,cube_frag:Wd,depth_vert:qd,depth_frag:Xd,distanceRGBA_vert:Yd,distanceRGBA_frag:Zd,equirect_vert:jd,equirect_frag:Jd,linedashed_vert:Kd,linedashed_frag:$d,meshbasic_vert:Qd,meshbasic_frag:ep,meshlambert_vert:tp,meshlambert_frag:np,meshmatcap_vert:ip,meshmatcap_frag:sp,meshnormal_vert:rp,meshnormal_frag:op,meshphong_vert:ap,meshphong_frag:lp,meshphysical_vert:cp,meshphysical_frag:hp,meshtoon_vert:up,meshtoon_frag:fp,points_vert:dp,points_frag:pp,shadow_vert:mp,shadow_frag:gp,sprite_vert:xp,sprite_frag:_p},ne={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new St},uv2Transform:{value:new St},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new St}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new St}}},Xt={basic:{uniforms:gt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Ce.meshbasic_vert,fragmentShader:Ce.meshbasic_frag},lambert:{uniforms:gt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new fe(0)}}]),vertexShader:Ce.meshlambert_vert,fragmentShader:Ce.meshlambert_frag},phong:{uniforms:gt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30}}]),vertexShader:Ce.meshphong_vert,fragmentShader:Ce.meshphong_frag},standard:{uniforms:gt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag},toon:{uniforms:gt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new fe(0)}}]),vertexShader:Ce.meshtoon_vert,fragmentShader:Ce.meshtoon_frag},matcap:{uniforms:gt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Ce.meshmatcap_vert,fragmentShader:Ce.meshmatcap_frag},points:{uniforms:gt([ne.points,ne.fog]),vertexShader:Ce.points_vert,fragmentShader:Ce.points_frag},dashed:{uniforms:gt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ce.linedashed_vert,fragmentShader:Ce.linedashed_frag},depth:{uniforms:gt([ne.common,ne.displacementmap]),vertexShader:Ce.depth_vert,fragmentShader:Ce.depth_frag},normal:{uniforms:gt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Ce.meshnormal_vert,fragmentShader:Ce.meshnormal_frag},sprite:{uniforms:gt([ne.sprite,ne.fog]),vertexShader:Ce.sprite_vert,fragmentShader:Ce.sprite_frag},background:{uniforms:{uvTransform:{value:new St},t2D:{value:null}},vertexShader:Ce.background_vert,fragmentShader:Ce.background_frag},cube:{uniforms:gt([ne.envmap,{opacity:{value:1}}]),vertexShader:Ce.cube_vert,fragmentShader:Ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ce.equirect_vert,fragmentShader:Ce.equirect_frag},distanceRGBA:{uniforms:gt([ne.common,ne.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ce.distanceRGBA_vert,fragmentShader:Ce.distanceRGBA_frag},shadow:{uniforms:gt([ne.lights,ne.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:Ce.shadow_vert,fragmentShader:Ce.shadow_frag}};Xt.physical={uniforms:gt([Xt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ge(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag};function vp(a,e,t,n,i,s){let o=new fe(0),r=i===!0?0:1,l,c,u=null,h=0,f=null;function p(m,d){let x=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=e.get(v));let b=a.xr,_=b.getSession&&b.getSession();_&&_.environmentBlendMode==="additive"&&(v=null),v===null?g(o,r):v&&v.isColor&&(g(v,1),x=!0),(a.autoClear||x)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ms)?(c===void 0&&(c=new nt(new Di(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:Ni(Xt.cube.uniforms),vertexShader:Xt.cube.vertexShader,fragmentShader:Xt.cube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,(u!==v||h!==v.version||f!==a.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,f=a.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new nt(new Fi(2,2),new an({name:"BackgroundMaterial",uniforms:Ni(Xt.background.uniforms),vertexShader:Xt.background.vertexShader,fragmentShader:Xt.background.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||f!==a.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,f=a.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,d){t.buffers.color.setClear(m.r,m.g,m.b,d,s)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),r=d,g(o,r)},getClearAlpha:function(){return r},setClearAlpha:function(m){r=m,g(o,r)},render:p}}function yp(a,e,t,n){let i=a.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,r={},l=d(null),c=l,u=!1;function h(U,V,Z,K,G){let N=!1;if(o){let z=m(K,Z,V);c!==z&&(c=z,p(c.object)),N=x(U,K,Z,G),N&&v(U,K,Z,G)}else{let z=V.wireframe===!0;(c.geometry!==K.id||c.program!==Z.id||c.wireframe!==z)&&(c.geometry=K.id,c.program=Z.id,c.wireframe=z,N=!0)}G!==null&&t.update(G,34963),(N||u)&&(u=!1,y(U,V,Z,K),G!==null&&a.bindBuffer(34963,t.get(G).buffer))}function f(){return n.isWebGL2?a.createVertexArray():s.createVertexArrayOES()}function p(U){return n.isWebGL2?a.bindVertexArray(U):s.bindVertexArrayOES(U)}function g(U){return n.isWebGL2?a.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function m(U,V,Z){let K=Z.wireframe===!0,G=r[U.id];G===void 0&&(G={},r[U.id]=G);let N=G[V.id];N===void 0&&(N={},G[V.id]=N);let z=N[K];return z===void 0&&(z=d(f()),N[K]=z),z}function d(U){let V=[],Z=[],K=[];for(let G=0;G<i;G++)V[G]=0,Z[G]=0,K[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:Z,attributeDivisors:K,object:U,attributes:{},index:null}}function x(U,V,Z,K){let G=c.attributes,N=V.attributes,z=0,Q=Z.getAttributes();for(let J in Q)if(Q[J].location>=0){let he=G[J],ye=N[J];if(ye===void 0&&(J==="instanceMatrix"&&U.instanceMatrix&&(ye=U.instanceMatrix),J==="instanceColor"&&U.instanceColor&&(ye=U.instanceColor)),he===void 0||he.attribute!==ye||ye&&he.data!==ye.data)return!0;z++}return c.attributesNum!==z||c.index!==K}function v(U,V,Z,K){let G={},N=V.attributes,z=0,Q=Z.getAttributes();for(let J in Q)if(Q[J].location>=0){let he=N[J];he===void 0&&(J==="instanceMatrix"&&U.instanceMatrix&&(he=U.instanceMatrix),J==="instanceColor"&&U.instanceColor&&(he=U.instanceColor));let ye={};ye.attribute=he,he&&he.data&&(ye.data=he.data),G[J]=ye,z++}c.attributes=G,c.attributesNum=z,c.index=K}function b(){let U=c.newAttributes;for(let V=0,Z=U.length;V<Z;V++)U[V]=0}function _(U){M(U,0)}function M(U,V){let Z=c.newAttributes,K=c.enabledAttributes,G=c.attributeDivisors;Z[U]=1,K[U]===0&&(a.enableVertexAttribArray(U),K[U]=1),G[U]!==V&&((n.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,V),G[U]=V)}function A(){let U=c.newAttributes,V=c.enabledAttributes;for(let Z=0,K=V.length;Z<K;Z++)V[Z]!==U[Z]&&(a.disableVertexAttribArray(Z),V[Z]=0)}function P(U,V,Z,K,G,N){n.isWebGL2===!0&&(Z===5124||Z===5125)?a.vertexAttribIPointer(U,V,Z,G,N):a.vertexAttribPointer(U,V,Z,K,G,N)}function y(U,V,Z,K){if(n.isWebGL2===!1&&(U.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();let G=K.attributes,N=Z.getAttributes(),z=V.defaultAttributeValues;for(let Q in N){let J=N[Q];if(J.location>=0){let ie=G[Q];if(ie===void 0&&(Q==="instanceMatrix"&&U.instanceMatrix&&(ie=U.instanceMatrix),Q==="instanceColor"&&U.instanceColor&&(ie=U.instanceColor)),ie!==void 0){let he=ie.normalized,ye=ie.itemSize,X=t.get(ie);if(X===void 0)continue;let Ne=X.buffer,_e=X.type,be=X.bytesPerElement;if(ie.isInterleavedBufferAttribute){let ce=ie.data,Ue=ce.stride,Te=ie.offset;if(ce.isInstancedInterleavedBuffer){for(let me=0;me<J.locationSize;me++)M(J.location+me,ce.meshPerAttribute);U.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let me=0;me<J.locationSize;me++)_(J.location+me);a.bindBuffer(34962,Ne);for(let me=0;me<J.locationSize;me++)P(J.location+me,ye/J.locationSize,_e,he,Ue*be,(Te+ye/J.locationSize*me)*be)}else{if(ie.isInstancedBufferAttribute){for(let ce=0;ce<J.locationSize;ce++)M(J.location+ce,ie.meshPerAttribute);U.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ce=0;ce<J.locationSize;ce++)_(J.location+ce);a.bindBuffer(34962,Ne);for(let ce=0;ce<J.locationSize;ce++)P(J.location+ce,ye/J.locationSize,_e,he,ye*be,ye/J.locationSize*ce*be)}}else if(z!==void 0){let he=z[Q];if(he!==void 0)switch(he.length){case 2:a.vertexAttrib2fv(J.location,he);break;case 3:a.vertexAttrib3fv(J.location,he);break;case 4:a.vertexAttrib4fv(J.location,he);break;default:a.vertexAttrib1fv(J.location,he)}}}}A()}function E(){j();for(let U in r){let V=r[U];for(let Z in V){let K=V[Z];for(let G in K)g(K[G].object),delete K[G];delete V[Z]}delete r[U]}}function R(U){if(r[U.id]===void 0)return;let V=r[U.id];for(let Z in V){let K=V[Z];for(let G in K)g(K[G].object),delete K[G];delete V[Z]}delete r[U.id]}function W(U){for(let V in r){let Z=r[V];if(Z[U.id]===void 0)continue;let K=Z[U.id];for(let G in K)g(K[G].object),delete K[G];delete Z[U.id]}}function j(){B(),u=!0,c!==l&&(c=l,p(c.object))}function B(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:j,resetDefaultState:B,dispose:E,releaseStatesOfGeometry:R,releaseStatesOfProgram:W,initAttributes:b,enableAttribute:_,disableUnusedAttributes:A}}function bp(a,e,t,n){let i=n.isWebGL2,s;function o(c){s=c}function r(c,u){a.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,p;if(i)f=a,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,c,u,h),t.update(u,s,h)}this.setMode=o,this.render=r,this.renderInstances=l}function Mp(a,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(P){if(P==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext!="undefined"&&a instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&a instanceof WebGL2ComputeRenderingContext,r=t.precision!==void 0?t.precision:"highp",l=s(r);l!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",l,"instead."),r=l);let c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=a.getParameter(34930),f=a.getParameter(35660),p=a.getParameter(3379),g=a.getParameter(34076),m=a.getParameter(34921),d=a.getParameter(36347),x=a.getParameter(36348),v=a.getParameter(36349),b=f>0,_=o||e.has("OES_texture_float"),M=b&&_,A=o?a.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:r,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:d,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:b,floatFragmentTextures:_,floatVertexTextures:M,maxSamples:A}}function wp(a){let e=this,t=null,n=0,i=!1,s=!1,o=new Ln,r=new St,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,p){let g=h.length!==0||f||n!==0||i;return i=f,t=u(h,p,0),n=h.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(h,f,p){let g=h.clippingPlanes,m=h.clipIntersection,d=h.clipShadows,x=a.get(h);if(!i||g===null||g.length===0||s&&!d)s?u(null):c();else{let v=s?0:n,b=v*4,_=x.clippingState||null;l.value=_,_=u(g,f,b,p);for(let M=0;M!==b;++M)_[M]=t[M];x.clippingState=_,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,g){let m=h!==null?h.length:0,d=null;if(m!==0){if(d=l.value,g!==!0||d===null){let x=p+m*4,v=f.matrixWorldInverse;r.getNormalMatrix(v),(d===null||d.length<x)&&(d=new Float32Array(x));for(let b=0,_=p;b!==m;++b,_+=4)o.copy(h[b]).applyMatrix4(v,r),o.normal.toArray(d,_),d[_+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,d}}function Sp(a){let e=new WeakMap;function t(o,r){return r===vr?o.mapping=xi:r===yr&&(o.mapping=_i),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){let r=o.mapping;if(r===vr||r===yr)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new $a(l.height/2);return c.fromEquirectangularTexture(a,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){let r=o.target;r.removeEventListener("dispose",i);let l=e.get(r);l!==void 0&&(e.delete(r),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var ei=class extends oo{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,o=n+e,r=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,r-=u*this.view.offsetY,l=r-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,r,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Bi=4,el=[.125,.215,.35,.446,.526,.582],ti=20,co=new ei,tl=new fe,ho=null,ni=(1+Math.sqrt(5))/2,ki=1/ni,nl=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,ni,ki),new C(0,ni,-ki),new C(ki,0,ni),new C(-ki,0,ni),new C(ni,ki,0),new C(-ni,ki,0)],uo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ho=this._renderer.getRenderTarget(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ho),e.scissorTest=!1,Zs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xi||e.mapping===_i?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ho=this._renderer.getRenderTarget();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,16*7),t=4*this._cubeSize,n={magFilter:We,minFilter:We,generateMipmaps:!1,type:Ki,format:ut,encoding:Yn,depthBuffer:!1},i=il(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=il(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tp(s)),this._blurMaterial=Ap(s,e,t)}return i}_compileMaterial(e){let t=new nt(this._lodPlanes[0],e);this._renderer.compile(t,co)}_sceneToCubeUV(e,t,n,i){let s=90,o=1,r=new lt(s,o,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(tl),u.toneMapping=Jt,u.autoClear=!1;let p=new on({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1}),g=new nt(new Di,p),m=!1,d=e.background;d?d.isColor&&(p.color.copy(d),e.background=null,m=!0):(p.color.copy(tl),m=!0);for(let x=0;x<6;x++){let v=x%3;v===0?(r.up.set(0,l[x],0),r.lookAt(c[x],0,0)):v===1?(r.up.set(0,0,l[x]),r.lookAt(0,c[x],0)):(r.up.set(0,l[x],0),r.lookAt(0,0,c[x]));let b=this._cubeSize;Zs(i,v*b,x>2?b:0,b,b),u.setRenderTarget(i),m&&u.render(g,r),u.render(e,r)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=d}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===xi||e.mapping===_i;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=rl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sl());let s=i?this._cubemapMaterial:this._equirectMaterial,o=new nt(this._lodPlanes[0],s),r=s.uniforms;r.envMap.value=e;let l=this._cubeSize;Zs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,co)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=nl[(i-1)%nl.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,r){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new nt(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ti-1),m=s/g,d=isFinite(s)?1+Math.floor(u*m):ti;d>ti&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${ti}`);let x=[],v=0;for(let P=0;P<ti;++P){let y=P/m,E=Math.exp(-y*y/2);x.push(E),P===0?v+=E:P<d&&(v+=2*E)}for(let P=0;P<x.length;P++)x[P]=x[P]/v;f.envMap.value=e.texture,f.samples.value=d,f.weights.value=x,f.latitudinal.value=o==="latitudinal",r&&(f.poleAxis.value=r);let{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-n;let _=this._sizeLods[i],M=3*_*(i>b-Bi?i-b+Bi:0),A=4*(this._cubeSize-_);Zs(t,M,A,3*_,2*_),l.setRenderTarget(t),l.render(h,co)}};function Tp(a){let e=[],t=[],n=[],i=a,s=a-Bi+1+el.length;for(let o=0;o<s;o++){let r=Math.pow(2,i);t.push(r);let l=1/r;o>a-Bi?l=el[o-a+Bi-1]:o===0&&(l=0),n.push(l);let c=1/(r-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,m=3,d=2,x=1,v=new Float32Array(m*g*p),b=new Float32Array(d*g*p),_=new Float32Array(x*g*p);for(let A=0;A<p;A++){let P=A%3*2/3-1,y=A>2?0:-1,E=[P,y,0,P+2/3,y,0,P+2/3,y+1,0,P,y,0,P+2/3,y+1,0,P,y+1,0];v.set(E,m*g*A),b.set(f,d*g*A);let R=[A,A,A,A,A,A];_.set(R,x*g*A)}let M=new at;M.setAttribute("position",new _t(v,m)),M.setAttribute("uv",new _t(b,d)),M.setAttribute("faceIndex",new _t(_,x)),e.push(M),i>Bi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function il(a,e,t){let n=new Wt(a,e,t);return n.texture.mapping=Ms,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zs(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function Ap(a,e,t){let n=new Float32Array(ti),i=new C(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:ti,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:fo(),fragmentShader:`
 
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
     `,blending:_n,depthTest:!1,depthWrite:!1})}function sl(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fo(),fragmentShader:`
 
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
     `,blending:_n,depthTest:!1,depthWrite:!1})}function rl(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fo(),fragmentShader:`
 
       precision mediump float;
       precision mediump int;
 
       uniform float flipEnvMap;
 
       varying vec3 vOutputDirection;
 
       uniform samplerCube envMap;
 
       void main() {
 
         gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );
 
       }
     `,blending:_n,depthTest:!1,depthWrite:!1})}function fo(){return`
 
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
   `}function Ep(a){let e=new WeakMap,t=null;function n(r){if(r&&r.isTexture){let l=r.mapping,c=l===vr||l===yr,u=l===xi||l===_i;if(c||u)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let h=e.get(r);return t===null&&(t=new uo(a)),h=c?t.fromEquirectangular(r,h):t.fromCubemap(r,h),e.set(r,h),h.texture}else{if(e.has(r))return e.get(r).texture;{let h=r.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new uo(a));let f=c?t.fromEquirectangular(r):t.fromCubemap(r);return e.set(r,f),r.addEventListener("dispose",s),f.texture}else return null}}}return r}function i(r){let l=0,c=6;for(let u=0;u<c;u++)r[u]!==void 0&&l++;return l===c}function s(r){let l=r.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Cp(a){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Lp(a,e,t,n){let i={},s=new WeakMap;function o(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];let p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function r(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){let f=h.attributes;for(let g in f)e.update(f[g],34962);let p=h.morphAttributes;for(let g in p){let m=p[g];for(let d=0,x=m.length;d<x;d++)e.update(m[d],34962)}}function c(h){let f=[],p=h.index,g=h.attributes.position,m=0;if(p!==null){let v=p.array;m=p.version;for(let b=0,_=v.length;b<_;b+=3){let M=v[b+0],A=v[b+1],P=v[b+2];f.push(M,A,A,P,P,M)}}else{let v=g.array;m=g.version;for(let b=0,_=v.length/3-1;b<_;b+=3){let M=b+0,A=b+1,P=b+2;f.push(M,A,A,P,P,M)}}let d=new(za(f)?Qr:$r)(f,1);d.version=m;let x=s.get(h);x&&e.remove(x),s.set(h,d)}function u(h){let f=s.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:r,update:l,getWireframeAttribute:u}}function Rp(a,e,t,n){let i=n.isWebGL2,s;function o(f){s=f}let r,l;function c(f){r=f.type,l=f.bytesPerElement}function u(f,p){a.drawElements(s,p,r,f*l),t.update(p,s,1)}function h(f,p,g){if(g===0)return;let m,d;if(i)m=a,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](s,p,r,f*l,g),t.update(p,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function Pp(a){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,r){switch(t.calls++,o){case 4:t.triangles+=r*(s/3);break;case 1:t.lines+=r*(s/2);break;case 3:t.lines+=r*(s-1);break;case 2:t.lines+=r*s;break;case 0:t.points+=r*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Ip(a,e){return a[0]-e[0]}function Dp(a,e){return Math.abs(e[1])-Math.abs(a[1])}function Np(a,e,t){let n={},i=new Float32Array(8),s=new WeakMap,o=new ke,r=[];for(let c=0;c<8;c++)r[c]=[c,0];function l(c,u,h,f){let p=c.morphTargetInfluences;if(e.isWebGL2===!0){let g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=g!==void 0?g.length:0,d=s.get(u);if(d===void 0||d.count!==m){let V=function(){B.dispose(),s.delete(u),u.removeEventListener("dispose",V)};d!==void 0&&d.texture.dispose();let b=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],y=u.morphAttributes.color||[],E=0;b===!0&&(E=1),_===!0&&(E=2),M===!0&&(E=3);let R=u.attributes.position.count*E,W=1;R>e.maxTextureSize&&(W=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);let j=new Float32Array(R*W*4*m),B=new Br(j,R,W,m);B.type=vn,B.needsUpdate=!0;let U=E*4;for(let Z=0;Z<m;Z++){let K=A[Z],G=P[Z],N=y[Z],z=R*W*4*Z;for(let Q=0;Q<K.count;Q++){let J=Q*U;b===!0&&(o.fromBufferAttribute(K,Q),j[z+J+0]=o.x,j[z+J+1]=o.y,j[z+J+2]=o.z,j[z+J+3]=0),_===!0&&(o.fromBufferAttribute(G,Q),j[z+J+4]=o.x,j[z+J+5]=o.y,j[z+J+6]=o.z,j[z+J+7]=0),M===!0&&(o.fromBufferAttribute(N,Q),j[z+J+8]=o.x,j[z+J+9]=o.y,j[z+J+10]=o.z,j[z+J+11]=N.itemSize===4?o.w:1)}}d={count:m,texture:B,size:new ge(R,W)},s.set(u,d),u.addEventListener("dispose",V)}let x=0;for(let b=0;b<p.length;b++)x+=p[b];let v=u.morphTargetsRelative?1:1-x;f.getUniforms().setValue(a,"morphTargetBaseInfluence",v),f.getUniforms().setValue(a,"morphTargetInfluences",p),f.getUniforms().setValue(a,"morphTargetsTexture",d.texture,t),f.getUniforms().setValue(a,"morphTargetsTextureSize",d.size)}else{let g=p===void 0?0:p.length,m=n[u.id];if(m===void 0||m.length!==g){m=[];for(let _=0;_<g;_++)m[_]=[_,0];n[u.id]=m}for(let _=0;_<g;_++){let M=m[_];M[0]=_,M[1]=p[_]}m.sort(Dp);for(let _=0;_<8;_++)_<g&&m[_][1]?(r[_][0]=m[_][0],r[_][1]=m[_][1]):(r[_][0]=Number.MAX_SAFE_INTEGER,r[_][1]=0);r.sort(Ip);let d=u.morphAttributes.position,x=u.morphAttributes.normal,v=0;for(let _=0;_<8;_++){let M=r[_],A=M[0],P=M[1];A!==Number.MAX_SAFE_INTEGER&&P?(d&&u.getAttribute("morphTarget"+_)!==d[A]&&u.setAttribute("morphTarget"+_,d[A]),x&&u.getAttribute("morphNormal"+_)!==x[A]&&u.setAttribute("morphNormal"+_,x[A]),i[_]=P,v+=P):(d&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),x&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),i[_]=0)}let b=u.morphTargetsRelative?1:1-v;f.getUniforms().setValue(a,"morphTargetBaseInfluence",b),f.getUniforms().setValue(a,"morphTargetInfluences",i)}}return{update:l}}function Op(a,e,t,n){let i=new WeakMap;function s(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){i=new WeakMap}function r(l){let c=l.target;c.removeEventListener("dispose",r),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var ol=new ft,al=new Br,ll=new Ba,cl=new ao,hl=[],ul=[],fl=new Float32Array(16),dl=new Float32Array(9),pl=new Float32Array(4);function Vi(a,e,t){let n=a[0];if(n<=0||n>0)return a;let i=e*t,s=hl[i];if(s===void 0&&(s=new Float32Array(i),hl[i]=s),e!==0){n.toArray(s,0);for(let o=1,r=0;o!==e;++o)r+=t,a[o].toArray(s,r)}return s}function it(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function st(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function js(a,e){let t=ul[e];t===void 0&&(t=new Int32Array(e),ul[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function Up(a,e){let t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function zp(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(it(t,e))return;a.uniform2fv(this.addr,e),st(t,e)}}function Fp(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(it(t,e))return;a.uniform3fv(this.addr,e),st(t,e)}}function Bp(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(it(t,e))return;a.uniform4fv(this.addr,e),st(t,e)}}function kp(a,e){let t=this.cache,n=e.elements;if(n===void 0){if(it(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),st(t,e)}else{if(it(t,n))return;pl.set(n),a.uniformMatrix2fv(this.addr,!1,pl),st(t,n)}}function Vp(a,e){let t=this.cache,n=e.elements;if(n===void 0){if(it(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),st(t,e)}else{if(it(t,n))return;dl.set(n),a.uniformMatrix3fv(this.addr,!1,dl),st(t,n)}}function Gp(a,e){let t=this.cache,n=e.elements;if(n===void 0){if(it(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),st(t,e)}else{if(it(t,n))return;fl.set(n),a.uniformMatrix4fv(this.addr,!1,fl),st(t,n)}}function Hp(a,e){let t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function Wp(a,e){let t=this.cache;it(t,e)||(a.uniform2iv(this.addr,e),st(t,e))}function qp(a,e){let t=this.cache;it(t,e)||(a.uniform3iv(this.addr,e),st(t,e))}function Xp(a,e){let t=this.cache;it(t,e)||(a.uniform4iv(this.addr,e),st(t,e))}function Yp(a,e){let t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function Zp(a,e){let t=this.cache;it(t,e)||(a.uniform2uiv(this.addr,e),st(t,e))}function jp(a,e){let t=this.cache;it(t,e)||(a.uniform3uiv(this.addr,e),st(t,e))}function Jp(a,e){let t=this.cache;it(t,e)||(a.uniform4uiv(this.addr,e),st(t,e))}function Kp(a,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||ol,i)}function $p(a,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ll,i)}function Qp(a,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||cl,i)}function em(a,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||al,i)}function tm(a){switch(a){case 5126:return Up;case 35664:return zp;case 35665:return Fp;case 35666:return Bp;case 35674:return kp;case 35675:return Vp;case 35676:return Gp;case 5124:case 35670:return Hp;case 35667:case 35671:return Wp;case 35668:case 35672:return qp;case 35669:case 35673:return Xp;case 5125:return Yp;case 36294:return Zp;case 36295:return jp;case 36296:return Jp;case 35678:case 36198:case 36298:case 36306:case 35682:return Kp;case 35679:case 36299:case 36307:return $p;case 35680:case 36300:case 36308:case 36293:return Qp;case 36289:case 36303:case 36311:case 36292:return em}}function nm(a,e){a.uniform1fv(this.addr,e)}function im(a,e){let t=Vi(e,this.size,2);a.uniform2fv(this.addr,t)}function sm(a,e){let t=Vi(e,this.size,3);a.uniform3fv(this.addr,t)}function rm(a,e){let t=Vi(e,this.size,4);a.uniform4fv(this.addr,t)}function om(a,e){let t=Vi(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function am(a,e){let t=Vi(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function lm(a,e){let t=Vi(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function cm(a,e){a.uniform1iv(this.addr,e)}function hm(a,e){a.uniform2iv(this.addr,e)}function um(a,e){a.uniform3iv(this.addr,e)}function fm(a,e){a.uniform4iv(this.addr,e)}function dm(a,e){a.uniform1uiv(this.addr,e)}function pm(a,e){a.uniform2uiv(this.addr,e)}function mm(a,e){a.uniform3uiv(this.addr,e)}function gm(a,e){a.uniform4uiv(this.addr,e)}function xm(a,e,t){let n=this.cache,i=e.length,s=js(t,i);it(n,s)||(a.uniform1iv(this.addr,s),st(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||ol,s[o])}function _m(a,e,t){let n=this.cache,i=e.length,s=js(t,i);it(n,s)||(a.uniform1iv(this.addr,s),st(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||ll,s[o])}function vm(a,e,t){let n=this.cache,i=e.length,s=js(t,i);it(n,s)||(a.uniform1iv(this.addr,s),st(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||cl,s[o])}function ym(a,e,t){let n=this.cache,i=e.length,s=js(t,i);it(n,s)||(a.uniform1iv(this.addr,s),st(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||al,s[o])}function bm(a){switch(a){case 5126:return nm;case 35664:return im;case 35665:return sm;case 35666:return rm;case 35674:return om;case 35675:return am;case 35676:return lm;case 5124:case 35670:return cm;case 35667:case 35671:return hm;case 35668:case 35672:return um;case 35669:case 35673:return fm;case 5125:return dm;case 36294:return pm;case 36295:return mm;case 36296:return gm;case 35678:case 36198:case 36298:case 36306:case 35682:return xm;case 35679:case 36299:case 36307:return _m;case 35680:case 36300:case 36308:case 36293:return vm;case 36289:case 36303:case 36311:case 36292:return ym}}var ml=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=tm(t.type)}},gl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=bm(t.type)}},xl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let r=i[s];r.setValue(e,t[r.id],n)}}},po=/(\w+)(\])?(\[|\.)?/g;function _l(a,e){a.seq.push(e),a.map[e.id]=e}function Mm(a,e,t){let n=a.name,i=n.length;for(po.lastIndex=0;;){let s=po.exec(n),o=po.lastIndex,r=s[1],l=s[2]==="]",c=s[3];if(l&&(r=r|0),c===void 0||c==="["&&o+2===i){_l(t,c===void 0?new ml(r,a,e):new gl(r,a,e));break}else{let h=t.map[r];h===void 0&&(h=new xl(r),_l(t,h)),t=h}}}var os=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Mm(s,o,this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){let r=t[s],l=n[r.id];l.needsUpdate!==!1&&r.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function vl(a,e,t){let n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}var wm=0;function Sm(a,e){let t=a.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){let r=o+1;n.push(`${r===e?">":" "} ${r}: ${t[o]}`)}return n.join(`
`)}function Tm(a){switch(a){case Yn:return["Linear","( value )"];case Be:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function yl(a,e,t){let n=a.getShaderParameter(e,35713),i=a.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Sm(a.getShaderSource(e),o)}else return i}function Am(a,e){let t=Tm(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Em(a,e){let t;switch(e){case Vh:t="Linear";break;case Gh:t="Reinhard";break;case Hh:t="OptimizedCineon";break;case Wh:t="ACESFilmic";break;case qh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Cm(a){return[a.extensionDerivatives||!!a.envMapCubeUVHeight||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(as).join(`
`)}function Lm(a){let e=[];for(let t in a){let n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Rm(a,e){let t={},n=a.getProgramParameter(e,35721);for(let i=0;i<n;i++){let s=a.getActiveAttrib(e,i),o=s.name,r=1;s.type===35674&&(r=2),s.type===35675&&(r=3),s.type===35676&&(r=4),t[o]={type:s.type,location:a.getAttribLocation(e,o),locationSize:r}}return t}function as(a){return a!==""}function bl(a,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ml(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Pm=/^[ \t]*#include +<([\w\d./]+)>/gm;function mo(a){return a.replace(Pm,Im)}function Im(a,e){let t=Ce[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return mo(t)}var Dm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wl(a){return a.replace(Dm,Nm)}function Nm(a,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Sl(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Om(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Qo?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===vh?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===ji&&(e="SHADOWMAP_TYPE_VSM"),e}function Um(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case xi:case _i:e="ENVMAP_TYPE_CUBE";break;case Ms:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zm(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case _i:e="ENVMAP_MODE_REFRACTION";break}return e}function Fm(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case _r:e="ENVMAP_BLENDING_MULTIPLY";break;case Bh:e="ENVMAP_BLENDING_MIX";break;case kh:e="ENVMAP_BLENDING_ADD";break}return e}function Bm(a){let e=a.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function km(a,e,t,n){let i=a.getContext(),s=t.defines,o=t.vertexShader,r=t.fragmentShader,l=Om(t),c=Um(t),u=zm(t),h=Fm(t),f=Bm(t),p=t.isWebGL2?"":Cm(t),g=Lm(s),m=i.createProgram(),d,x,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[g].filter(as).join(`
`),d.length>0&&(d+=`
`),x=[p,g].filter(as).join(`
`),x.length>0&&(x+=`
`)):(d=[Sl(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(as).join(`
`),x=[p,Sl(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Jt?"#define TONE_MAPPING":"",t.toneMapping!==Jt?Ce.tonemapping_pars_fragment:"",t.toneMapping!==Jt?Em("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ce.encodings_pars_fragment,Am("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(as).join(`
`)),o=mo(o),o=bl(o,t),o=Ml(o,t),r=mo(r),r=bl(r,t),r=Ml(r,t),o=wl(o),r=wl(r),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,x=["#define varying in",t.glslVersion===jn?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jn?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let b=v+d+o,_=v+x+r,M=vl(i,35633,b),A=vl(i,35632,_);if(i.attachShader(m,M),i.attachShader(m,A),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),a.debug.checkShaderErrors){let E=i.getProgramInfoLog(m).trim(),R=i.getShaderInfoLog(M).trim(),W=i.getShaderInfoLog(A).trim(),j=!0,B=!0;if(i.getProgramParameter(m,35714)===!1){j=!1;let U=yl(i,M,"vertex"),V=yl(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,35715)+`

Program Info Log: `+E+`
`+U+`
`+V)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(R===""||W==="")&&(B=!1);B&&(this.diagnostics={runnable:j,programLog:E,vertexShader:{log:R,prefix:d},fragmentShader:{log:W,prefix:x}})}i.deleteShader(M),i.deleteShader(A);let P;this.getUniforms=function(){return P===void 0&&(P=new os(i,m)),P};let y;return this.getAttributes=function(){return y===void 0&&(y=Rm(i,m)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=wm++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=A,this}var Vm=0,Tl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Al(e),t.set(e,n)),n}},Al=class{constructor(e){this.id=Vm++,this.code=e,this.usedTimes=0}};function Gm(a,e,t,n,i,s,o){let r=new Yr,l=new Tl,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y,E,R,W,j){let B=W.fog,U=j.geometry,V=y.isMeshStandardMaterial?W.environment:null,Z=(y.isMeshStandardMaterial?t:e).get(y.envMap||V),K=!!Z&&Z.mapping===Ms?Z.image.height:null,G=g[y.type];y.precision!==null&&(p=i.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));let N=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,z=N!==void 0?N.length:0,Q=0;U.morphAttributes.position!==void 0&&(Q=1),U.morphAttributes.normal!==void 0&&(Q=2),U.morphAttributes.color!==void 0&&(Q=3);let J,ie,he,ye;if(G){let Ue=Xt[G];J=Ue.vertexShader,ie=Ue.fragmentShader}else J=y.vertexShader,ie=y.fragmentShader,l.update(y),he=l.getVertexShaderID(y),ye=l.getFragmentShaderID(y);let X=a.getRenderTarget(),Ne=y.alphaTest>0,_e=y.clearcoat>0,be=y.iridescence>0;return{isWebGL2:u,shaderID:G,shaderName:y.type,vertexShader:J,fragmentShader:ie,defines:y.defines,customVertexShaderID:he,customFragmentShaderID:ye,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,instancing:j.isInstancedMesh===!0,instancingColor:j.isInstancedMesh===!0&&j.instanceColor!==null,supportsVertexTextures:f,outputEncoding:X===null?a.outputEncoding:X.isXRRenderTarget===!0?X.texture.encoding:Yn,map:!!y.map,matcap:!!y.matcap,envMap:!!Z,envMapMode:Z&&Z.mapping,envMapCubeUVHeight:K,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===cu,tangentSpaceNormalMap:y.normalMapType===$i,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===Be,clearcoat:_e,clearcoatMap:_e&&!!y.clearcoatMap,clearcoatRoughnessMap:_e&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:_e&&!!y.clearcoatNormalMap,iridescence:be,iridescenceMap:be&&!!y.iridescenceMap,iridescenceThicknessMap:be&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===mi,alphaMap:!!y.alphaMap,alphaTest:Ne,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!U.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||y.transmission>0||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||y.sheen>0||!!y.sheenColorMap||!!y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!B,useFog:y.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:h,skinning:j.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:Q,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:a.shadowMap.enabled&&R.length>0,shadowMapType:a.shadowMap.type,toneMapping:y.toneMapped?a.toneMapping:Jt,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===It,flipSided:y.side===Pt,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function d(y){let E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(let R in y.defines)E.push(R),E.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(x(E,y),v(E,y),E.push(a.outputEncoding)),E.push(y.customProgramCacheKey),E.join()}function x(y,E){y.push(E.precision),y.push(E.outputEncoding),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.combine),y.push(E.vertexUvs),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function v(y,E){r.disableAll(),E.isWebGL2&&r.enable(0),E.supportsVertexTextures&&r.enable(1),E.instancing&&r.enable(2),E.instancingColor&&r.enable(3),E.map&&r.enable(4),E.matcap&&r.enable(5),E.envMap&&r.enable(6),E.lightMap&&r.enable(7),E.aoMap&&r.enable(8),E.emissiveMap&&r.enable(9),E.bumpMap&&r.enable(10),E.normalMap&&r.enable(11),E.objectSpaceNormalMap&&r.enable(12),E.tangentSpaceNormalMap&&r.enable(13),E.clearcoat&&r.enable(14),E.clearcoatMap&&r.enable(15),E.clearcoatRoughnessMap&&r.enable(16),E.clearcoatNormalMap&&r.enable(17),E.iridescence&&r.enable(18),E.iridescenceMap&&r.enable(19),E.iridescenceThicknessMap&&r.enable(20),E.displacementMap&&r.enable(21),E.specularMap&&r.enable(22),E.roughnessMap&&r.enable(23),E.metalnessMap&&r.enable(24),E.gradientMap&&r.enable(25),E.alphaMap&&r.enable(26),E.alphaTest&&r.enable(27),E.vertexColors&&r.enable(28),E.vertexAlphas&&r.enable(29),E.vertexUvs&&r.enable(30),E.vertexTangents&&r.enable(31),E.uvsVertexOnly&&r.enable(32),y.push(r.mask),r.disableAll(),E.fog&&r.enable(0),E.useFog&&r.enable(1),E.flatShading&&r.enable(2),E.logarithmicDepthBuffer&&r.enable(3),E.skinning&&r.enable(4),E.morphTargets&&r.enable(5),E.morphNormals&&r.enable(6),E.morphColors&&r.enable(7),E.premultipliedAlpha&&r.enable(8),E.shadowMapEnabled&&r.enable(9),E.physicallyCorrectLights&&r.enable(10),E.doubleSided&&r.enable(11),E.flipSided&&r.enable(12),E.useDepthPacking&&r.enable(13),E.dithering&&r.enable(14),E.specularIntensityMap&&r.enable(15),E.specularColorMap&&r.enable(16),E.transmission&&r.enable(17),E.transmissionMap&&r.enable(18),E.thicknessMap&&r.enable(19),E.sheen&&r.enable(20),E.sheenColorMap&&r.enable(21),E.sheenRoughnessMap&&r.enable(22),E.decodeVideoTexture&&r.enable(23),E.opaque&&r.enable(24),y.push(r.mask)}function b(y){let E=g[y.type],R;if(E){let W=Xt[E];R=Uu.clone(W.uniforms)}else R=y.uniforms;return R}function _(y,E){let R;for(let W=0,j=c.length;W<j;W++){let B=c[W];if(B.cacheKey===E){R=B,++R.usedTimes;break}}return R===void 0&&(R=new km(a,E,y,s),c.push(R)),R}function M(y){if(--y.usedTimes===0){let E=c.indexOf(y);c[E]=c[c.length-1],c.pop(),y.destroy()}}function A(y){l.remove(y)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:b,acquireProgram:_,releaseProgram:M,releaseShaderCache:A,programs:c,dispose:P}}function Hm(){let a=new WeakMap;function e(s){let o=a.get(s);return o===void 0&&(o={},a.set(s,o)),o}function t(s){a.delete(s)}function n(s,o,r){a.get(s)[o]=r}function i(){a=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Wm(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function El(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Cl(){let a=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,p,g,m,d){let x=a[e];return x===void 0?(x={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:m,group:d},a[e]=x):(x.id=h.id,x.object=h,x.geometry=f,x.material=p,x.groupOrder=g,x.renderOrder=h.renderOrder,x.z=m,x.group=d),e++,x}function r(h,f,p,g,m,d){let x=o(h,f,p,g,m,d);p.transmission>0?n.push(x):p.transparent===!0?i.push(x):t.push(x)}function l(h,f,p,g,m,d){let x=o(h,f,p,g,m,d);p.transmission>0?n.unshift(x):p.transparent===!0?i.unshift(x):t.unshift(x)}function c(h,f){t.length>1&&t.sort(h||Wm),n.length>1&&n.sort(f||El),i.length>1&&i.sort(f||El)}function u(){for(let h=e,f=a.length;h<f;h++){let p=a[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:r,unshift:l,finish:u,sort:c}}function qm(){let a=new WeakMap;function e(n,i){let s=a.get(n),o;return s===void 0?(o=new Cl,a.set(n,[o])):i>=s.length?(o=new Cl,s.push(o)):o=s[i],o}function t(){a=new WeakMap}return{get:e,dispose:t}}function Xm(){let a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new fe};break;case"SpotLight":t={position:new C,direction:new C,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":t={color:new fe,position:new C,halfWidth:new C,halfHeight:new C};break}return a[e.id]=t,t}}}function Ym(){let a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}var Zm=0;function jm(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function Jm(a,e){let t=new Xm,n=Ym(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new C);let s=new C,o=new Ae,r=new Ae;function l(u,h){let f=0,p=0,g=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let m=0,d=0,x=0,v=0,b=0,_=0,M=0,A=0,P=0,y=0;u.sort(jm);let E=h!==!0?Math.PI:1;for(let W=0,j=u.length;W<j;W++){let B=u[W],U=B.color,V=B.intensity,Z=B.distance,K=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)f+=U.r*V*E,p+=U.g*V*E,g+=U.b*V*E;else if(B.isLightProbe)for(let G=0;G<9;G++)i.probe[G].addScaledVector(B.sh.coefficients[G],V);else if(B.isDirectionalLight){let G=t.get(B);if(G.color.copy(B.color).multiplyScalar(B.intensity*E),B.castShadow){let N=B.shadow,z=n.get(B);z.shadowBias=N.bias,z.shadowNormalBias=N.normalBias,z.shadowRadius=N.radius,z.shadowMapSize=N.mapSize,i.directionalShadow[m]=z,i.directionalShadowMap[m]=K,i.directionalShadowMatrix[m]=B.shadow.matrix,_++}i.directional[m]=G,m++}else if(B.isSpotLight){let G=t.get(B);G.position.setFromMatrixPosition(B.matrixWorld),G.color.copy(U).multiplyScalar(V*E),G.distance=Z,G.coneCos=Math.cos(B.angle),G.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),G.decay=B.decay,i.spot[x]=G;let N=B.shadow;if(B.map&&(i.spotLightMap[P]=B.map,P++,N.updateMatrices(B),B.castShadow&&y++),i.spotLightMatrix[x]=N.matrix,B.castShadow){let z=n.get(B);z.shadowBias=N.bias,z.shadowNormalBias=N.normalBias,z.shadowRadius=N.radius,z.shadowMapSize=N.mapSize,i.spotShadow[x]=z,i.spotShadowMap[x]=K,A++}x++}else if(B.isRectAreaLight){let G=t.get(B);G.color.copy(U).multiplyScalar(V),G.halfWidth.set(B.width*.5,0,0),G.halfHeight.set(0,B.height*.5,0),i.rectArea[v]=G,v++}else if(B.isPointLight){let G=t.get(B);if(G.color.copy(B.color).multiplyScalar(B.intensity*E),G.distance=B.distance,G.decay=B.decay,B.castShadow){let N=B.shadow,z=n.get(B);z.shadowBias=N.bias,z.shadowNormalBias=N.normalBias,z.shadowRadius=N.radius,z.shadowMapSize=N.mapSize,z.shadowCameraNear=N.camera.near,z.shadowCameraFar=N.camera.far,i.pointShadow[d]=z,i.pointShadowMap[d]=K,i.pointShadowMatrix[d]=B.shadow.matrix,M++}i.point[d]=G,d++}else if(B.isHemisphereLight){let G=t.get(B);G.skyColor.copy(B.color).multiplyScalar(V*E),G.groundColor.copy(B.groundColor).multiplyScalar(V*E),i.hemi[b]=G,b++}}v>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ne.LTC_FLOAT_1,i.rectAreaLTC2=ne.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ne.LTC_HALF_1,i.rectAreaLTC2=ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=g;let R=i.hash;(R.directionalLength!==m||R.pointLength!==d||R.spotLength!==x||R.rectAreaLength!==v||R.hemiLength!==b||R.numDirectionalShadows!==_||R.numPointShadows!==M||R.numSpotShadows!==A||R.numSpotMaps!==P)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=v,i.point.length=d,i.hemi.length=b,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=A+P-y,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=y,R.directionalLength=m,R.pointLength=d,R.spotLength=x,R.rectAreaLength=v,R.hemiLength=b,R.numDirectionalShadows=_,R.numPointShadows=M,R.numSpotShadows=A,R.numSpotMaps=P,i.version=Zm++)}function c(u,h){let f=0,p=0,g=0,m=0,d=0,x=h.matrixWorldInverse;for(let v=0,b=u.length;v<b;v++){let _=u[v];if(_.isDirectionalLight){let M=i.directional[f];M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(x),f++}else if(_.isSpotLight){let M=i.spot[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(x),M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(x),g++}else if(_.isRectAreaLight){let M=i.rectArea[m];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(x),r.identity(),o.copy(_.matrixWorld),o.premultiply(x),r.extractRotation(o),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),m++}else if(_.isPointLight){let M=i.point[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(x),p++}else if(_.isHemisphereLight){let M=i.hemi[d];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(x),d++}}}return{setup:l,setupView:c,state:i}}function Ll(a,e){let t=new Jm(a,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function r(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:r}}function Km(a,e){let t=new WeakMap;function n(s,o=0){let r=t.get(s),l;return r===void 0?(l=new Ll(a,e),t.set(s,[l])):o>=r.length?(l=new Ll(a,e),r.push(l)):l=r[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}var Rl=class extends mt{constructor(e){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=au,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Pl=class extends mt{constructor(e){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new C,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},$m=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qm=`uniform sampler2D shadow_pass;
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
}`;function eg(a,e,t){let n=new Ys,i=new ge,s=new ge,o=new ke,r=new Rl({depthPacking:lu}),l=new Pl,c={},u=t.maxTextureSize,h={0:Pt,1:xn,2:It},f=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:$m,fragmentShader:Qm}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new at;g.setAttribute("position",new _t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let m=new nt(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qo,this.render=function(_,M,A){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||_.length===0)return;let P=a.getRenderTarget(),y=a.getActiveCubeFace(),E=a.getActiveMipmapLevel(),R=a.state;R.setBlending(_n),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let W=0,j=_.length;W<j;W++){let B=_[W],U=B.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);let V=U.getFrameExtents();if(i.multiply(V),s.copy(U.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/V.x),i.x=s.x*V.x,U.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/V.y),i.y=s.y*V.y,U.mapSize.y=s.y)),U.map===null){let K=this.type!==ji?{minFilter:rt,magFilter:rt}:{};U.map=new Wt(i.x,i.y,K),U.map.texture.name=B.name+".shadowMap",U.camera.updateProjectionMatrix()}a.setRenderTarget(U.map),a.clear();let Z=U.getViewportCount();for(let K=0;K<Z;K++){let G=U.getViewport(K);o.set(s.x*G.x,s.y*G.y,s.x*G.z,s.y*G.w),R.viewport(o),U.updateMatrices(B,K),n=U.getFrustum(),b(M,A,U.camera,B,this.type)}U.isPointLightShadow!==!0&&this.type===ji&&x(U,A),U.needsUpdate=!1}d.needsUpdate=!1,a.setRenderTarget(P,y,E)};function x(_,M){let A=e.update(m);f.defines.VSM_SAMPLES!==_.blurSamples&&(f.defines.VSM_SAMPLES=_.blurSamples,p.defines.VSM_SAMPLES=_.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),_.mapPass===null&&(_.mapPass=new Wt(i.x,i.y)),f.uniforms.shadow_pass.value=_.map.texture,f.uniforms.resolution.value=_.mapSize,f.uniforms.radius.value=_.radius,a.setRenderTarget(_.mapPass),a.clear(),a.renderBufferDirect(M,null,A,f,m,null),p.uniforms.shadow_pass.value=_.mapPass.texture,p.uniforms.resolution.value=_.mapSize,p.uniforms.radius.value=_.radius,a.setRenderTarget(_.map),a.clear(),a.renderBufferDirect(M,null,A,p,m,null)}function v(_,M,A,P,y,E){let R=null,W=A.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(W!==void 0?R=W:R=A.isPointLight===!0?l:r,a.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0){let j=R.uuid,B=M.uuid,U=c[j];U===void 0&&(U={},c[j]=U);let V=U[B];V===void 0&&(V=R.clone(),U[B]=V),R=V}return R.visible=M.visible,R.wireframe=M.wireframe,E===ji?R.side=M.shadowSide!==null?M.shadowSide:M.side:R.side=M.shadowSide!==null?M.shadowSide:h[M.side],R.alphaMap=M.alphaMap,R.alphaTest=M.alphaTest,R.clipShadows=M.clipShadows,R.clippingPlanes=M.clippingPlanes,R.clipIntersection=M.clipIntersection,R.displacementMap=M.displacementMap,R.displacementScale=M.displacementScale,R.displacementBias=M.displacementBias,R.wireframeLinewidth=M.wireframeLinewidth,R.linewidth=M.linewidth,A.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(A.matrixWorld),R.nearDistance=P,R.farDistance=y),R}function b(_,M,A,P,y){if(_.visible===!1)return;if(_.layers.test(M.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&y===ji)&&(!_.frustumCulled||n.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,_.matrixWorld);let W=e.update(_),j=_.material;if(Array.isArray(j)){let B=W.groups;for(let U=0,V=B.length;U<V;U++){let Z=B[U],K=j[Z.materialIndex];if(K&&K.visible){let G=v(_,K,P,A.near,A.far,y);a.renderBufferDirect(A,null,W,G,_,Z)}}}else if(j.visible){let B=v(_,j,P,A.near,A.far,y);a.renderBufferDirect(A,null,W,B,_,null)}}let R=_.children;for(let W=0,j=R.length;W<j;W++)b(R[W],M,A,P,y)}}function tg(a,e,t){let n=t.isWebGL2;function i(){let I=!1,oe=new ke,te=null,Y=new ke(0,0,0,0);return{setMask:function(se){te!==se&&!I&&(a.colorMask(se,se,se,se),te=se)},setLocked:function(se){I=se},setClear:function(se,ve,He,Ze,mn){mn===!0&&(se*=Ze,ve*=Ze,He*=Ze),oe.set(se,ve,He,Ze),Y.equals(oe)===!1&&(a.clearColor(se,ve,He,Ze),Y.copy(oe))},reset:function(){I=!1,te=null,Y.set(-1,0,0,0)}}}function s(){let I=!1,oe=null,te=null,Y=null;return{setTest:function(se){se?Ne(2929):_e(2929)},setMask:function(se){oe!==se&&!I&&(a.depthMask(se),oe=se)},setFunc:function(se){if(te!==se){switch(se){case Ih:a.depthFunc(512);break;case Dh:a.depthFunc(519);break;case Nh:a.depthFunc(513);break;case xr:a.depthFunc(515);break;case Oh:a.depthFunc(514);break;case Uh:a.depthFunc(518);break;case zh:a.depthFunc(516);break;case Fh:a.depthFunc(517);break;default:a.depthFunc(515)}te=se}},setLocked:function(se){I=se},setClear:function(se){Y!==se&&(a.clearDepth(se),Y=se)},reset:function(){I=!1,oe=null,te=null,Y=null}}}function o(){let I=!1,oe=null,te=null,Y=null,se=null,ve=null,He=null,Ze=null,mn=null;return{setTest:function(Xe){I||(Xe?Ne(2960):_e(2960))},setMask:function(Xe){oe!==Xe&&!I&&(a.stencilMask(Xe),oe=Xe)},setFunc:function(Xe,jt,Lt){(te!==Xe||Y!==jt||se!==Lt)&&(a.stencilFunc(Xe,jt,Lt),te=Xe,Y=jt,se=Lt)},setOp:function(Xe,jt,Lt){(ve!==Xe||He!==jt||Ze!==Lt)&&(a.stencilOp(Xe,jt,Lt),ve=Xe,He=jt,Ze=Lt)},setLocked:function(Xe){I=Xe},setClear:function(Xe){mn!==Xe&&(a.clearStencil(Xe),mn=Xe)},reset:function(){I=!1,oe=null,te=null,Y=null,se=null,ve=null,He=null,Ze=null,mn=null}}}let r=new i,l=new s,c=new o,u=new WeakMap,h=new WeakMap,f={},p={},g=new WeakMap,m=[],d=null,x=!1,v=null,b=null,_=null,M=null,A=null,P=null,y=null,E=!1,R=null,W=null,j=null,B=null,U=null,V=a.getParameter(35661),Z=!1,K=0,G=a.getParameter(7938);G.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(G)[1]),Z=K>=1):G.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),Z=K>=2);let N=null,z={},Q=a.getParameter(3088),J=a.getParameter(2978),ie=new ke().fromArray(Q),he=new ke().fromArray(J);function ye(I,oe,te){let Y=new Uint8Array(4),se=a.createTexture();a.bindTexture(I,se),a.texParameteri(I,10241,9728),a.texParameteri(I,10240,9728);for(let ve=0;ve<te;ve++)a.texImage2D(oe+ve,0,6408,1,1,0,6408,5121,Y);return se}let X={};X[3553]=ye(3553,3553,1),X[34067]=ye(34067,34069,6),r.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ne(2929),l.setFunc(xr),$e(!1),bt($o),Ne(2884),je(_n);function Ne(I){f[I]!==!0&&(a.enable(I),f[I]=!0)}function _e(I){f[I]!==!1&&(a.disable(I),f[I]=!1)}function be(I,oe){return p[I]!==oe?(a.bindFramebuffer(I,oe),p[I]=oe,n&&(I===36009&&(p[36160]=oe),I===36160&&(p[36009]=oe)),!0):!1}function ce(I,oe){let te=m,Y=!1;if(I)if(te=g.get(oe),te===void 0&&(te=[],g.set(oe,te)),I.isWebGLMultipleRenderTargets){let se=I.texture;if(te.length!==se.length||te[0]!==36064){for(let ve=0,He=se.length;ve<He;ve++)te[ve]=36064+ve;te.length=se.length,Y=!0}}else te[0]!==36064&&(te[0]=36064,Y=!0);else te[0]!==1029&&(te[0]=1029,Y=!0);Y&&(t.isWebGL2?a.drawBuffers(te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function Ue(I){return d!==I?(a.useProgram(I),d=I,!0):!1}let Te={[gi]:32774,[bh]:32778,[Mh]:32779};if(n)Te[ia]=32775,Te[sa]=32776;else{let I=e.get("EXT_blend_minmax");I!==null&&(Te[ia]=I.MIN_EXT,Te[sa]=I.MAX_EXT)}let me={[wh]:0,[Sh]:1,[Th]:768,[ra]:770,[Ph]:776,[Lh]:774,[Eh]:772,[Ah]:769,[oa]:771,[Rh]:775,[Ch]:773};function je(I,oe,te,Y,se,ve,He,Ze){if(I===_n){x===!0&&(_e(3042),x=!1);return}if(x===!1&&(Ne(3042),x=!0),I!==yh){if(I!==v||Ze!==E){if((b!==gi||A!==gi)&&(a.blendEquation(32774),b=gi,A=gi),Ze)switch(I){case mi:a.blendFuncSeparate(1,771,1,771);break;case ea:a.blendFunc(1,1);break;case ta:a.blendFuncSeparate(0,769,0,1);break;case na:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case mi:a.blendFuncSeparate(770,771,1,771);break;case ea:a.blendFunc(770,1);break;case ta:a.blendFuncSeparate(0,769,0,1);break;case na:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}_=null,M=null,P=null,y=null,v=I,E=Ze}return}se=se||oe,ve=ve||te,He=He||Y,(oe!==b||se!==A)&&(a.blendEquationSeparate(Te[oe],Te[se]),b=oe,A=se),(te!==_||Y!==M||ve!==P||He!==y)&&(a.blendFuncSeparate(me[te],me[Y],me[ve],me[He]),_=te,M=Y,P=ve,y=He),v=I,E=null}function ht(I,oe){I.side===It?_e(2884):Ne(2884);let te=I.side===Pt;oe&&(te=!te),$e(te),I.blending===mi&&I.transparent===!1?je(_n):je(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),r.setMask(I.colorWrite);let Y=I.stencilWrite;c.setTest(Y),Y&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ze(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Ne(32926):_e(32926)}function $e(I){R!==I&&(I?a.frontFace(2304):a.frontFace(2305),R=I)}function bt(I){I!==xh?(Ne(2884),I!==W&&(I===$o?a.cullFace(1029):I===_h?a.cullFace(1028):a.cullFace(1032))):_e(2884),W=I}function Qe(I){I!==j&&(Z&&a.lineWidth(I),j=I)}function ze(I,oe,te){I?(Ne(32823),(B!==oe||U!==te)&&(a.polygonOffset(oe,te),B=oe,U=te)):_e(32823)}function Et(I){I?Ne(3089):_e(3089)}function Ct(I){I===void 0&&(I=33984+V-1),N!==I&&(a.activeTexture(I),N=I)}function T(I,oe,te){te===void 0&&(N===null?te=33984+V-1:te=N);let Y=z[te];Y===void 0&&(Y={type:void 0,texture:void 0},z[te]=Y),(Y.type!==I||Y.texture!==oe)&&(N!==te&&(a.activeTexture(te),N=te),a.bindTexture(I,oe||X[I]),Y.type=I,Y.texture=oe)}function w(){let I=z[N];I!==void 0&&I.type!==void 0&&(a.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function k(){try{a.compressedTexImage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{a.texSubImage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{a.texSubImage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{a.texStorage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function L(){try{a.texStorage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function O(){try{a.texImage2D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ae(){try{a.texImage3D.apply(a,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(I){ie.equals(I)===!1&&(a.scissor(I.x,I.y,I.z,I.w),ie.copy(I))}function le(I){he.equals(I)===!1&&(a.viewport(I.x,I.y,I.z,I.w),he.copy(I))}function de(I,oe){let te=h.get(oe);te===void 0&&(te=new WeakMap,h.set(oe,te));let Y=te.get(I);Y===void 0&&(Y=a.getUniformBlockIndex(oe,I.name),te.set(I,Y))}function Me(I,oe){let Y=h.get(oe).get(I);u.get(I)!==Y&&(a.uniformBlockBinding(oe,Y,I.__bindingPointIndex),u.set(I,Y))}function Ie(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),n===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),f={},N=null,z={},p={},g=new WeakMap,m=[],d=null,x=!1,v=null,b=null,_=null,M=null,A=null,P=null,y=null,E=!1,R=null,W=null,j=null,B=null,U=null,ie.set(0,0,a.canvas.width,a.canvas.height),he.set(0,0,a.canvas.width,a.canvas.height),r.reset(),l.reset(),c.reset()}return{buffers:{color:r,depth:l,stencil:c},enable:Ne,disable:_e,bindFramebuffer:be,drawBuffers:ce,useProgram:Ue,setBlending:je,setMaterial:ht,setFlipSided:$e,setCullFace:bt,setLineWidth:Qe,setPolygonOffset:ze,setScissorTest:Et,activeTexture:Ct,bindTexture:T,unbindTexture:w,compressedTexImage2D:k,texImage2D:O,texImage3D:ae,updateUBOMapping:de,uniformBlockBinding:Me,texStorage2D:xe,texStorage3D:L,texSubImage2D:$,texSubImage3D:ee,compressedTexSubImage2D:re,scissor:ue,viewport:le,reset:Ie}}function ng(a,e,t,n,i,s,o){let r=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap,m,d=new WeakMap,x=!1;try{x=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(T,w){return x?new OffscreenCanvas(T,w):ns("canvas")}function b(T,w,k,$){let ee=1;if((T.width>$||T.height>$)&&(ee=$/Math.max(T.width,T.height)),ee<1||w===!0)if(typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&T instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&T instanceof ImageBitmap){let re=w?Ts:Math.floor,xe=re(ee*T.width),L=re(ee*T.height);m===void 0&&(m=v(xe,L));let O=k?v(xe,L):m;return O.width=xe,O.height=L,O.getContext("2d").drawImage(T,0,0,xe,L),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+xe+"x"+L+")."),O}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function _(T){return Dr(T.width)&&Dr(T.height)}function M(T){return r?!1:T.wrapS!==et||T.wrapT!==et||T.minFilter!==rt&&T.minFilter!==We}function A(T,w){return T.generateMipmaps&&w&&T.minFilter!==rt&&T.minFilter!==We}function P(T){a.generateMipmap(T)}function y(T,w,k,$,ee=!1){if(r===!1)return w;if(T!==null){if(a[T]!==void 0)return a[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let re=w;return w===6403&&(k===5126&&(re=33326),k===5131&&(re=33325),k===5121&&(re=33321)),w===33319&&(k===5126&&(re=33328),k===5131&&(re=33327),k===5121&&(re=33323)),w===6408&&(k===5126&&(re=34836),k===5131&&(re=34842),k===5121&&(re=$===Be&&ee===!1?35907:32856),k===32819&&(re=32854),k===32820&&(re=32855)),(re===33325||re===33326||re===33327||re===33328||re===34842||re===34836)&&e.get("EXT_color_buffer_float"),re}function E(T,w,k){return A(T,k)===!0||T.isFramebufferTexture&&T.minFilter!==rt&&T.minFilter!==We?Math.log2(Math.max(w.width,w.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?w.mipmaps.length:1}function R(T){return T===rt||T===ws||T===Ss?9728:9729}function W(T){let w=T.target;w.removeEventListener("dispose",W),B(w),w.isVideoTexture&&g.delete(w)}function j(T){let w=T.target;w.removeEventListener("dispose",j),V(w)}function B(T){let w=n.get(T);if(w.__webglInit===void 0)return;let k=T.source,$=d.get(k);if($){let ee=$[w.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&U(T),Object.keys($).length===0&&d.delete(k)}n.remove(T)}function U(T){let w=n.get(T);a.deleteTexture(w.__webglTexture);let k=T.source,$=d.get(k);delete $[w.__cacheKey],o.memory.textures--}function V(T){let w=T.texture,k=n.get(T),$=n.get(w);if($.__webglTexture!==void 0&&(a.deleteTexture($.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++)a.deleteFramebuffer(k.__webglFramebuffer[ee]),k.__webglDepthbuffer&&a.deleteRenderbuffer(k.__webglDepthbuffer[ee]);else{if(a.deleteFramebuffer(k.__webglFramebuffer),k.__webglDepthbuffer&&a.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&a.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let ee=0;ee<k.__webglColorRenderbuffer.length;ee++)k.__webglColorRenderbuffer[ee]&&a.deleteRenderbuffer(k.__webglColorRenderbuffer[ee]);k.__webglDepthRenderbuffer&&a.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let ee=0,re=w.length;ee<re;ee++){let xe=n.get(w[ee]);xe.__webglTexture&&(a.deleteTexture(xe.__webglTexture),o.memory.textures--),n.remove(w[ee])}n.remove(w),n.remove(T)}let Z=0;function K(){Z=0}function G(){let T=Z;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),Z+=1,T}function N(T){let w=[];return w.push(T.wrapS),w.push(T.wrapT),w.push(T.magFilter),w.push(T.minFilter),w.push(T.anisotropy),w.push(T.internalFormat),w.push(T.format),w.push(T.type),w.push(T.generateMipmaps),w.push(T.premultiplyAlpha),w.push(T.flipY),w.push(T.unpackAlignment),w.push(T.encoding),w.join()}function z(T,w){let k=n.get(T);if(T.isVideoTexture&&Et(T),T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){let $=T.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(k,T,w);return}}t.bindTexture(3553,k.__webglTexture,33984+w)}function Q(T,w){let k=n.get(T);if(T.version>0&&k.__version!==T.version){_e(k,T,w);return}t.bindTexture(35866,k.__webglTexture,33984+w)}function J(T,w){let k=n.get(T);if(T.version>0&&k.__version!==T.version){_e(k,T,w);return}t.bindTexture(32879,k.__webglTexture,33984+w)}function ie(T,w){let k=n.get(T);if(T.version>0&&k.__version!==T.version){be(k,T,w);return}t.bindTexture(34067,k.__webglTexture,33984+w)}let he={[Gn]:10497,[et]:33071,[Ji]:33648},ye={[rt]:9728,[ws]:9984,[Ss]:9986,[We]:9729,[br]:9985,[Hn]:9987};function X(T,w,k){if(k?(a.texParameteri(T,10242,he[w.wrapS]),a.texParameteri(T,10243,he[w.wrapT]),(T===32879||T===35866)&&a.texParameteri(T,32882,he[w.wrapR]),a.texParameteri(T,10240,ye[w.magFilter]),a.texParameteri(T,10241,ye[w.minFilter])):(a.texParameteri(T,10242,33071),a.texParameteri(T,10243,33071),(T===32879||T===35866)&&a.texParameteri(T,32882,33071),(w.wrapS!==et||w.wrapT!==et)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(T,10240,R(w.magFilter)),a.texParameteri(T,10241,R(w.minFilter)),w.minFilter!==rt&&w.minFilter!==We&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){let $=e.get("EXT_texture_filter_anisotropic");if(w.type===vn&&e.has("OES_texture_float_linear")===!1||r===!1&&w.type===Ki&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(a.texParameterf(T,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function Ne(T,w){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,w.addEventListener("dispose",W));let $=w.source,ee=d.get($);ee===void 0&&(ee={},d.set($,ee));let re=N(w);if(re!==T.__cacheKey){ee[re]===void 0&&(ee[re]={texture:a.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ee[re].usedTimes++;let xe=ee[T.__cacheKey];xe!==void 0&&(ee[T.__cacheKey].usedTimes--,xe.usedTimes===0&&U(w)),T.__cacheKey=re,T.__webglTexture=ee[re].texture}return k}function _e(T,w,k){let $=3553;w.isDataArrayTexture&&($=35866),w.isData3DTexture&&($=32879);let ee=Ne(T,w),re=w.source;t.bindTexture($,T.__webglTexture,33984+k);let xe=n.get(re);if(re.version!==xe.__version||ee===!0){t.activeTexture(33984+k),a.pixelStorei(37440,w.flipY),a.pixelStorei(37441,w.premultiplyAlpha),a.pixelStorei(3317,w.unpackAlignment),a.pixelStorei(37443,0);let L=M(w)&&_(w.image)===!1,O=b(w.image,L,!1,u);O=Ct(w,O);let ae=_(O)||r,ue=s.convert(w.format,w.encoding),le=s.convert(w.type),de=y(w.internalFormat,ue,le,w.encoding,w.isVideoTexture);X($,w,ae);let Me,Ie=w.mipmaps,I=r&&w.isVideoTexture!==!0,oe=xe.__version===void 0||ee===!0,te=E(w,O,ae);if(w.isDepthTexture)de=6402,r?w.type===vn?de=36012:w.type===Wn?de=33190:w.type===vi?de=35056:de=33189:w.type===vn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===qn&&de===6402&&w.type!==la&&w.type!==Wn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Wn,le=s.convert(w.type)),w.format===yi&&de===6402&&(de=34041,w.type!==vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=vi,le=s.convert(w.type))),oe&&(I?t.texStorage2D(3553,1,de,O.width,O.height):t.texImage2D(3553,0,de,O.width,O.height,0,ue,le,null));else if(w.isDataTexture)if(Ie.length>0&&ae){I&&oe&&t.texStorage2D(3553,te,de,Ie[0].width,Ie[0].height);for(let Y=0,se=Ie.length;Y<se;Y++)Me=Ie[Y],I?t.texSubImage2D(3553,Y,0,0,Me.width,Me.height,ue,le,Me.data):t.texImage2D(3553,Y,de,Me.width,Me.height,0,ue,le,Me.data);w.generateMipmaps=!1}else I?(oe&&t.texStorage2D(3553,te,de,O.width,O.height),t.texSubImage2D(3553,0,0,0,O.width,O.height,ue,le,O.data)):t.texImage2D(3553,0,de,O.width,O.height,0,ue,le,O.data);else if(w.isCompressedTexture){I&&oe&&t.texStorage2D(3553,te,de,Ie[0].width,Ie[0].height);for(let Y=0,se=Ie.length;Y<se;Y++)Me=Ie[Y],w.format!==ut?ue!==null?I?t.compressedTexSubImage2D(3553,Y,0,0,Me.width,Me.height,ue,Me.data):t.compressedTexImage2D(3553,Y,de,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?t.texSubImage2D(3553,Y,0,0,Me.width,Me.height,ue,le,Me.data):t.texImage2D(3553,Y,de,Me.width,Me.height,0,ue,le,Me.data)}else if(w.isDataArrayTexture)I?(oe&&t.texStorage3D(35866,te,de,O.width,O.height,O.depth),t.texSubImage3D(35866,0,0,0,0,O.width,O.height,O.depth,ue,le,O.data)):t.texImage3D(35866,0,de,O.width,O.height,O.depth,0,ue,le,O.data);else if(w.isData3DTexture)I?(oe&&t.texStorage3D(32879,te,de,O.width,O.height,O.depth),t.texSubImage3D(32879,0,0,0,0,O.width,O.height,O.depth,ue,le,O.data)):t.texImage3D(32879,0,de,O.width,O.height,O.depth,0,ue,le,O.data);else if(w.isFramebufferTexture){if(oe)if(I)t.texStorage2D(3553,te,de,O.width,O.height);else{let Y=O.width,se=O.height;for(let ve=0;ve<te;ve++)t.texImage2D(3553,ve,de,Y,se,0,ue,le,null),Y>>=1,se>>=1}}else if(Ie.length>0&&ae){I&&oe&&t.texStorage2D(3553,te,de,Ie[0].width,Ie[0].height);for(let Y=0,se=Ie.length;Y<se;Y++)Me=Ie[Y],I?t.texSubImage2D(3553,Y,0,0,ue,le,Me):t.texImage2D(3553,Y,de,ue,le,Me);w.generateMipmaps=!1}else I?(oe&&t.texStorage2D(3553,te,de,O.width,O.height),t.texSubImage2D(3553,0,0,0,ue,le,O)):t.texImage2D(3553,0,de,ue,le,O);A(w,ae)&&P($),xe.__version=re.version,w.onUpdate&&w.onUpdate(w)}T.__version=w.version}function be(T,w,k){if(w.image.length!==6)return;let $=Ne(T,w),ee=w.source;t.bindTexture(34067,T.__webglTexture,33984+k);let re=n.get(ee);if(ee.version!==re.__version||$===!0){t.activeTexture(33984+k),a.pixelStorei(37440,w.flipY),a.pixelStorei(37441,w.premultiplyAlpha),a.pixelStorei(3317,w.unpackAlignment),a.pixelStorei(37443,0);let xe=w.isCompressedTexture||w.image[0].isCompressedTexture,L=w.image[0]&&w.image[0].isDataTexture,O=[];for(let Y=0;Y<6;Y++)!xe&&!L?O[Y]=b(w.image[Y],!1,!0,c):O[Y]=L?w.image[Y].image:w.image[Y],O[Y]=Ct(w,O[Y]);let ae=O[0],ue=_(ae)||r,le=s.convert(w.format,w.encoding),de=s.convert(w.type),Me=y(w.internalFormat,le,de,w.encoding),Ie=r&&w.isVideoTexture!==!0,I=re.__version===void 0||$===!0,oe=E(w,ae,ue);X(34067,w,ue);let te;if(xe){Ie&&I&&t.texStorage2D(34067,oe,Me,ae.width,ae.height);for(let Y=0;Y<6;Y++){te=O[Y].mipmaps;for(let se=0;se<te.length;se++){let ve=te[se];w.format!==ut?le!==null?Ie?t.compressedTexSubImage2D(34069+Y,se,0,0,ve.width,ve.height,le,ve.data):t.compressedTexImage2D(34069+Y,se,Me,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?t.texSubImage2D(34069+Y,se,0,0,ve.width,ve.height,le,de,ve.data):t.texImage2D(34069+Y,se,Me,ve.width,ve.height,0,le,de,ve.data)}}}else{te=w.mipmaps,Ie&&I&&(te.length>0&&oe++,t.texStorage2D(34067,oe,Me,O[0].width,O[0].height));for(let Y=0;Y<6;Y++)if(L){Ie?t.texSubImage2D(34069+Y,0,0,0,O[Y].width,O[Y].height,le,de,O[Y].data):t.texImage2D(34069+Y,0,Me,O[Y].width,O[Y].height,0,le,de,O[Y].data);for(let se=0;se<te.length;se++){let He=te[se].image[Y].image;Ie?t.texSubImage2D(34069+Y,se+1,0,0,He.width,He.height,le,de,He.data):t.texImage2D(34069+Y,se+1,Me,He.width,He.height,0,le,de,He.data)}}else{Ie?t.texSubImage2D(34069+Y,0,0,0,le,de,O[Y]):t.texImage2D(34069+Y,0,Me,le,de,O[Y]);for(let se=0;se<te.length;se++){let ve=te[se];Ie?t.texSubImage2D(34069+Y,se+1,0,0,le,de,ve.image[Y]):t.texImage2D(34069+Y,se+1,Me,le,de,ve.image[Y])}}}A(w,ue)&&P(34067),re.__version=ee.version,w.onUpdate&&w.onUpdate(w)}T.__version=w.version}function ce(T,w,k,$,ee){let re=s.convert(k.format,k.encoding),xe=s.convert(k.type),L=y(k.internalFormat,re,xe,k.encoding);n.get(w).__hasExternalTextures||(ee===32879||ee===35866?t.texImage3D(ee,0,L,w.width,w.height,w.depth,0,re,xe,null):t.texImage2D(ee,0,L,w.width,w.height,0,re,xe,null)),t.bindFramebuffer(36160,T),ze(w)?f.framebufferTexture2DMultisampleEXT(36160,$,ee,n.get(k).__webglTexture,0,Qe(w)):a.framebufferTexture2D(36160,$,ee,n.get(k).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ue(T,w,k){if(a.bindRenderbuffer(36161,T),w.depthBuffer&&!w.stencilBuffer){let $=33189;if(k||ze(w)){let ee=w.depthTexture;ee&&ee.isDepthTexture&&(ee.type===vn?$=36012:ee.type===Wn&&($=33190));let re=Qe(w);ze(w)?f.renderbufferStorageMultisampleEXT(36161,re,$,w.width,w.height):a.renderbufferStorageMultisample(36161,re,$,w.width,w.height)}else a.renderbufferStorage(36161,$,w.width,w.height);a.framebufferRenderbuffer(36160,36096,36161,T)}else if(w.depthBuffer&&w.stencilBuffer){let $=Qe(w);k&&ze(w)===!1?a.renderbufferStorageMultisample(36161,$,35056,w.width,w.height):ze(w)?f.renderbufferStorageMultisampleEXT(36161,$,35056,w.width,w.height):a.renderbufferStorage(36161,34041,w.width,w.height),a.framebufferRenderbuffer(36160,33306,36161,T)}else{let $=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ee=0;ee<$.length;ee++){let re=$[ee],xe=s.convert(re.format,re.encoding),L=s.convert(re.type),O=y(re.internalFormat,xe,L,re.encoding),ae=Qe(w);k&&ze(w)===!1?a.renderbufferStorageMultisample(36161,ae,O,w.width,w.height):ze(w)?f.renderbufferStorageMultisampleEXT(36161,ae,O,w.width,w.height):a.renderbufferStorage(36161,O,w.width,w.height)}}a.bindRenderbuffer(36161,null)}function Te(T,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,T),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),z(w.depthTexture,0);let $=n.get(w.depthTexture).__webglTexture,ee=Qe(w);if(w.depthTexture.format===qn)ze(w)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,$,0,ee):a.framebufferTexture2D(36160,36096,3553,$,0);else if(w.depthTexture.format===yi)ze(w)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,$,0,ee):a.framebufferTexture2D(36160,33306,3553,$,0);else throw new Error("Unknown depthTexture format")}function me(T){let w=n.get(T),k=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!w.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Te(w.__webglFramebuffer,T)}else if(k){w.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(36160,w.__webglFramebuffer[$]),w.__webglDepthbuffer[$]=a.createRenderbuffer(),Ue(w.__webglDepthbuffer[$],T,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=a.createRenderbuffer(),Ue(w.__webglDepthbuffer,T,!1);t.bindFramebuffer(36160,null)}function je(T,w,k){let $=n.get(T);w!==void 0&&ce($.__webglFramebuffer,T,T.texture,36064,3553),k!==void 0&&me(T)}function ht(T){let w=T.texture,k=n.get(T),$=n.get(w);T.addEventListener("dispose",j),T.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=a.createTexture()),$.__version=w.version,o.memory.textures++);let ee=T.isWebGLCubeRenderTarget===!0,re=T.isWebGLMultipleRenderTargets===!0,xe=_(T)||r;if(ee){k.__webglFramebuffer=[];for(let L=0;L<6;L++)k.__webglFramebuffer[L]=a.createFramebuffer()}else{if(k.__webglFramebuffer=a.createFramebuffer(),re)if(i.drawBuffers){let L=T.texture;for(let O=0,ae=L.length;O<ae;O++){let ue=n.get(L[O]);ue.__webglTexture===void 0&&(ue.__webglTexture=a.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&T.samples>0&&ze(T)===!1){let L=re?w:[w];k.__webglMultisampledFramebuffer=a.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,k.__webglMultisampledFramebuffer);for(let O=0;O<L.length;O++){let ae=L[O];k.__webglColorRenderbuffer[O]=a.createRenderbuffer(),a.bindRenderbuffer(36161,k.__webglColorRenderbuffer[O]);let ue=s.convert(ae.format,ae.encoding),le=s.convert(ae.type),de=y(ae.internalFormat,ue,le,ae.encoding,T.isXRRenderTarget===!0),Me=Qe(T);a.renderbufferStorageMultisample(36161,Me,de,T.width,T.height),a.framebufferRenderbuffer(36160,36064+O,36161,k.__webglColorRenderbuffer[O])}a.bindRenderbuffer(36161,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=a.createRenderbuffer(),Ue(k.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(36160,null)}}if(ee){t.bindTexture(34067,$.__webglTexture),X(34067,w,xe);for(let L=0;L<6;L++)ce(k.__webglFramebuffer[L],T,w,36064,34069+L);A(w,xe)&&P(34067),t.unbindTexture()}else if(re){let L=T.texture;for(let O=0,ae=L.length;O<ae;O++){let ue=L[O],le=n.get(ue);t.bindTexture(3553,le.__webglTexture),X(3553,ue,xe),ce(k.__webglFramebuffer,T,ue,36064+O,3553),A(ue,xe)&&P(3553)}t.unbindTexture()}else{let L=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(r?L=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(L,$.__webglTexture),X(L,w,xe),ce(k.__webglFramebuffer,T,w,36064,L),A(w,xe)&&P(L),t.unbindTexture()}T.depthBuffer&&me(T)}function $e(T){let w=_(T)||r,k=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let $=0,ee=k.length;$<ee;$++){let re=k[$];if(A(re,w)){let xe=T.isWebGLCubeRenderTarget?34067:3553,L=n.get(re).__webglTexture;t.bindTexture(xe,L),P(xe),t.unbindTexture()}}}function bt(T){if(r&&T.samples>0&&ze(T)===!1){let w=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],k=T.width,$=T.height,ee=16384,re=[],xe=T.stencilBuffer?33306:36096,L=n.get(T),O=T.isWebGLMultipleRenderTargets===!0;if(O)for(let ae=0;ae<w.length;ae++)t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+ae,36161,null),t.bindFramebuffer(36160,L.__webglFramebuffer),a.framebufferTexture2D(36009,36064+ae,3553,null,0);t.bindFramebuffer(36008,L.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,L.__webglFramebuffer);for(let ae=0;ae<w.length;ae++){re.push(36064+ae),T.depthBuffer&&re.push(xe);let ue=L.__ignoreDepthValues!==void 0?L.__ignoreDepthValues:!1;if(ue===!1&&(T.depthBuffer&&(ee|=256),T.stencilBuffer&&(ee|=1024)),O&&a.framebufferRenderbuffer(36008,36064,36161,L.__webglColorRenderbuffer[ae]),ue===!0&&(a.invalidateFramebuffer(36008,[xe]),a.invalidateFramebuffer(36009,[xe])),O){let le=n.get(w[ae]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,le,0)}a.blitFramebuffer(0,0,k,$,0,0,k,$,ee,9728),p&&a.invalidateFramebuffer(36008,re)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),O)for(let ae=0;ae<w.length;ae++){t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+ae,36161,L.__webglColorRenderbuffer[ae]);let ue=n.get(w[ae]).__webglTexture;t.bindFramebuffer(36160,L.__webglFramebuffer),a.framebufferTexture2D(36009,36064+ae,3553,ue,0)}t.bindFramebuffer(36009,L.__webglMultisampledFramebuffer)}}function Qe(T){return Math.min(h,T.samples)}function ze(T){let w=n.get(T);return r&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Et(T){let w=o.render.frame;g.get(T)!==w&&(g.set(T,w),T.update())}function Ct(T,w){let k=T.encoding,$=T.format,ee=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Pr||k!==Yn&&(k===Be?r===!1?e.has("EXT_sRGB")===!0&&$===ut?(T.format=Pr,T.minFilter=We,T.generateMipmaps=!1):w=Ur.sRGBToLinear(w):($!==ut||ee!==wt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",k)),w}this.allocateTextureUnit=G,this.resetTextureUnits=K,this.setTexture2D=z,this.setTexture2DArray=Q,this.setTexture3D=J,this.setTextureCube=ie,this.rebindTextures=je,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=ze}function ig(a,e,t){let n=t.isWebGL2;function i(s,o=null){let r;if(s===wt)return 5121;if(s===jh)return 32819;if(s===Jh)return 32820;if(s===Xh)return 5120;if(s===Yh)return 5122;if(s===la)return 5123;if(s===Zh)return 5124;if(s===Wn)return 5125;if(s===vn)return 5126;if(s===Ki)return n?5131:(r=e.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(s===Kh)return 6406;if(s===ut)return 6408;if(s===$h)return 6409;if(s===Qh)return 6410;if(s===qn)return 6402;if(s===yi)return 34041;if(s===eu)return 6403;if(s===Mr)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Pr)return r=e.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(s===tu)return 36244;if(s===nu)return 33319;if(s===iu)return 33320;if(s===su)return 36249;if(s===wr||s===Sr||s===Tr||s===Ar)if(o===Be)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(s===wr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(s===wr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Sr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Tr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ar)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ca||s===ha||s===ua||s===fa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(s===ca)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ha)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ua)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===fa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ru)return r=e.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===da||s===pa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(s===da)return o===Be?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(s===pa)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ma||s===ga||s===xa||s===_a||s===va||s===ya||s===ba||s===Ma||s===wa||s===Sa||s===Ta||s===Aa||s===Ea||s===Ca)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(s===ma)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ga)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===xa)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===_a)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===va)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ya)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ba)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ma)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===wa)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Sa)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ta)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Aa)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ea)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ca)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===La)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(s===La)return o===Be?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===vi?n?34042:(r=e.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):a[s]!==void 0?a[s]:null}return{convert:i}}var Il=class extends lt{constructor(e=[]){super();this.isArrayCamera=!0,this.cameras=e}},Vt=class extends qe{constructor(){super();this.isGroup=!0,this.type="Group"}},sg={type:"move"},Js=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null,r=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let m of e.hand.values()){let d=t.getJointPose(m,n);if(c.joints[m.jointName]===void 0){let v=new Vt;v.matrixAutoUpdate=!1,v.visible=!1,c.joints[m.jointName]=v,c.add(v)}let x=c.joints[m.jointName];d!==null&&(x.matrix.fromArray(d.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=d.radius),x.visible=d!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(r.matrix.fromArray(i.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),i.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(i.linearVelocity)):r.hasLinearVelocity=!1,i.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(i.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(sg)))}return r!==null&&(r.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}},Dl=class extends ft{constructor(e,t,n,i,s,o,r,l,c,u){if(u=u!==void 0?u:qn,u!==qn&&u!==yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===qn&&(n=Wn),n===void 0&&u===yi&&(n=vi);super(null,i,s,o,r,l,u,n,c);this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=r!==void 0?r:rt,this.minFilter=l!==void 0?l:rt,this.flipY=!1,this.generateMipmaps=!1}},Nl=class extends $t{constructor(e,t){super();let n=this,i=null,s=1,o=null,r="local-floor",l=null,c=null,u=null,h=null,f=null,p=null,g=t.getContextAttributes(),m=null,d=null,x=[],v=[],b=new lt;b.layers.enable(1),b.viewport=new ke;let _=new lt;_.layers.enable(2),_.viewport=new ke;let M=[b,_],A=new Il;A.layers.enable(1),A.layers.enable(2);let P=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let z=x[N];return z===void 0&&(z=new Js,x[N]=z),z.getTargetRaySpace()},this.getControllerGrip=function(N){let z=x[N];return z===void 0&&(z=new Js,x[N]=z),z.getGripSpace()},this.getHand=function(N){let z=x[N];return z===void 0&&(z=new Js,x[N]=z),z.getHandSpace()};function E(N){let z=v.indexOf(N.inputSource);if(z===-1)return;let Q=x[z];Q!==void 0&&Q.dispatchEvent({type:N.type,data:N.inputSource})}function R(){i.removeEventListener("select",E),i.removeEventListener("selectstart",E),i.removeEventListener("selectend",E),i.removeEventListener("squeeze",E),i.removeEventListener("squeezestart",E),i.removeEventListener("squeezeend",E),i.removeEventListener("end",R),i.removeEventListener("inputsourceschange",W);for(let N=0;N<x.length;N++){let z=v[N];z!==null&&(v[N]=null,x[N].disconnect(z))}P=null,y=null,e.setRenderTarget(m),f=null,h=null,u=null,i=null,d=null,G.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){r=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(N){l=N},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(N){if(i=N,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",E),i.addEventListener("selectstart",E),i.addEventListener("selectend",E),i.addEventListener("squeeze",E),i.addEventListener("squeezestart",E),i.addEventListener("squeezeend",E),i.addEventListener("end",R),i.addEventListener("inputsourceschange",W),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let z={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,z),i.updateRenderState({baseLayer:f}),d=new Wt(f.framebufferWidth,f.framebufferHeight,{format:ut,type:wt,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let z=null,Q=null,J=null;g.depth&&(J=g.stencil?35056:33190,z=g.stencil?yi:qn,Q=g.stencil?vi:Wn);let ie={colorFormat:32856,depthFormat:J,scaleFactor:s};u=new XRWebGLBinding(i,t),h=u.createProjectionLayer(ie),i.updateRenderState({layers:[h]}),d=new Wt(h.textureWidth,h.textureHeight,{format:ut,type:wt,depthTexture:new Dl(h.textureWidth,h.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});let he=e.properties.get(d);he.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await i.requestReferenceSpace(r),G.setContext(i),G.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function W(N){for(let z=0;z<N.removed.length;z++){let Q=N.removed[z],J=v.indexOf(Q);J>=0&&(v[J]=null,x[J].dispatchEvent({type:"disconnected",data:Q}))}for(let z=0;z<N.added.length;z++){let Q=N.added[z],J=v.indexOf(Q);if(J===-1){for(let he=0;he<x.length;he++)if(he>=v.length){v.push(Q),J=he;break}else if(v[he]===null){v[he]=Q,J=he;break}if(J===-1)break}let ie=x[J];ie&&ie.dispatchEvent({type:"connected",data:Q})}}let j=new C,B=new C;function U(N,z,Q){j.setFromMatrixPosition(z.matrixWorld),B.setFromMatrixPosition(Q.matrixWorld);let J=j.distanceTo(B),ie=z.projectionMatrix.elements,he=Q.projectionMatrix.elements,ye=ie[14]/(ie[10]-1),X=ie[14]/(ie[10]+1),Ne=(ie[9]+1)/ie[5],_e=(ie[9]-1)/ie[5],be=(ie[8]-1)/ie[0],ce=(he[8]+1)/he[0],Ue=ye*be,Te=ye*ce,me=J/(-be+ce),je=me*-be;z.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(je),N.translateZ(me),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();let ht=ye+me,$e=X+me,bt=Ue-je,Qe=Te+(J-je),ze=Ne*X/$e*ht,Et=_e*X/$e*ht;N.projectionMatrix.makePerspective(bt,Qe,ze,Et,ht,$e)}function V(N,z){z===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(z.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(i===null)return;A.near=_.near=b.near=N.near,A.far=_.far=b.far=N.far,(P!==A.near||y!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),P=A.near,y=A.far);let z=N.parent,Q=A.cameras;V(A,z);for(let ie=0;ie<Q.length;ie++)V(Q[ie],z);A.matrixWorld.decompose(A.position,A.quaternion,A.scale),N.matrix.copy(A.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale);let J=N.children;for(let ie=0,he=J.length;ie<he;ie++)J[ie].updateMatrixWorld(!0);Q.length===2?U(A,b,_):A.projectionMatrix.copy(b.projectionMatrix)},this.getCamera=function(){return A},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(N){h!==null&&(h.fixedFoveation=N),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=N)};let Z=null;function K(N,z){if(c=z.getViewerPose(l||o),p=z,c!==null){let Q=c.views;f!==null&&(e.setRenderTargetFramebuffer(d,f.framebuffer),e.setRenderTarget(d));let J=!1;Q.length!==A.cameras.length&&(A.cameras.length=0,J=!0);for(let ie=0;ie<Q.length;ie++){let he=Q[ie],ye=null;if(f!==null)ye=f.getViewport(he);else{let Ne=u.getViewSubImage(h,he);ye=Ne.viewport,ie===0&&(e.setRenderTargetTextures(d,Ne.colorTexture,h.ignoreDepthValues?void 0:Ne.depthStencilTexture),e.setRenderTarget(d))}let X=M[ie];X===void 0&&(X=new lt,X.layers.enable(ie),X.viewport=new ke,M[ie]=X),X.matrix.fromArray(he.transform.matrix),X.projectionMatrix.fromArray(he.projectionMatrix),X.viewport.set(ye.x,ye.y,ye.width,ye.height),ie===0&&A.matrix.copy(X.matrix),J===!0&&A.cameras.push(X)}}for(let Q=0;Q<x.length;Q++){let J=v[Q],ie=x[Q];J!==null&&ie!==void 0&&ie.update(J,z,l||o)}Z&&Z(N,z),p=null}let G=new Qa;G.setAnimationLoop(K),this.setAnimationLoop=function(N){Z=N},this.dispose=function(){}}};function rg(a,e){function t(m,d){m.fogColor.value.copy(d.color),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function n(m,d,x,v,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?i(m,d):d.isMeshToonMaterial?(i(m,d),u(m,d)):d.isMeshPhongMaterial?(i(m,d),c(m,d)):d.isMeshStandardMaterial?(i(m,d),h(m,d),d.isMeshPhysicalMaterial&&f(m,d,b)):d.isMeshMatcapMaterial?(i(m,d),p(m,d)):d.isMeshDepthMaterial?i(m,d):d.isMeshDistanceMaterial?(i(m,d),g(m,d)):d.isMeshNormalMaterial?i(m,d):d.isLineBasicMaterial?(s(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?r(m,d,x,v):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function i(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.bumpMap&&(m.bumpMap.value=d.bumpMap,m.bumpScale.value=d.bumpScale,d.side===Pt&&(m.bumpScale.value*=-1)),d.displacementMap&&(m.displacementMap.value=d.displacementMap,m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap),d.normalMap&&(m.normalMap.value=d.normalMap,m.normalScale.value.copy(d.normalScale),d.side===Pt&&m.normalScale.value.negate()),d.specularMap&&(m.specularMap.value=d.specularMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let x=e.get(d).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;let _=a.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*_}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity);let v;d.map?v=d.map:d.specularMap?v=d.specularMap:d.displacementMap?v=d.displacementMap:d.normalMap?v=d.normalMap:d.bumpMap?v=d.bumpMap:d.roughnessMap?v=d.roughnessMap:d.metalnessMap?v=d.metalnessMap:d.alphaMap?v=d.alphaMap:d.emissiveMap?v=d.emissiveMap:d.clearcoatMap?v=d.clearcoatMap:d.clearcoatNormalMap?v=d.clearcoatNormalMap:d.clearcoatRoughnessMap?v=d.clearcoatRoughnessMap:d.iridescenceMap?v=d.iridescenceMap:d.iridescenceThicknessMap?v=d.iridescenceThicknessMap:d.specularIntensityMap?v=d.specularIntensityMap:d.specularColorMap?v=d.specularColorMap:d.transmissionMap?v=d.transmissionMap:d.thicknessMap?v=d.thicknessMap:d.sheenColorMap?v=d.sheenColorMap:d.sheenRoughnessMap&&(v=d.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix));let b;d.aoMap?b=d.aoMap:d.lightMap&&(b=d.lightMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),m.uv2Transform.value.copy(b.matrix))}function s(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function r(m,d,x,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*x,m.scale.value=v*.5,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let b;d.map?b=d.map:d.alphaMap&&(b=d.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),m.uvTransform.value.copy(b.matrix))}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let x;d.map?x=d.map:d.alphaMap&&(x=d.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix))}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.roughness.value=d.roughness,m.metalness.value=d.metalness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,x){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),m.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Pt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap)}function p(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){m.referencePosition.value.copy(d.referencePosition),m.nearDistance.value=d.nearDistance,m.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function og(a,e,t,n){let i={},s={},o=[],r=t.isWebGL2?a.getParameter(35375):0;function l(v,b){let _=b.program;n.uniformBlockBinding(v,_)}function c(v,b){let _=i[v.id];_===void 0&&(g(v),_=u(v),i[v.id]=_,v.addEventListener("dispose",d));let M=b.program;n.updateUBOMapping(v,M);let A=e.render.frame;s[v.id]!==A&&(f(v),s[v.id]=A)}function u(v){let b=h();v.__bindingPointIndex=b;let _=a.createBuffer(),M=v.__size,A=v.usage;return a.bindBuffer(35345,_),a.bufferData(35345,M,A),a.bindBuffer(35345,null),a.bindBufferBase(35345,b,_),_}function h(){for(let v=0;v<r;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let b=i[v.id],_=v.uniforms,M=v.__cache;a.bindBuffer(35345,b);for(let A=0,P=_.length;A<P;A++){let y=_[A];if(p(y,A,M)===!0){let E=y.value,R=y.__offset;typeof E=="number"?(y.__data[0]=E,a.bufferSubData(35345,R,y.__data)):(y.value.isMatrix3?(y.__data[0]=y.value.elements[0],y.__data[1]=y.value.elements[1],y.__data[2]=y.value.elements[2],y.__data[3]=y.value.elements[0],y.__data[4]=y.value.elements[3],y.__data[5]=y.value.elements[4],y.__data[6]=y.value.elements[5],y.__data[7]=y.value.elements[0],y.__data[8]=y.value.elements[6],y.__data[9]=y.value.elements[7],y.__data[10]=y.value.elements[8],y.__data[11]=y.value.elements[0]):E.toArray(y.__data),a.bufferSubData(35345,R,y.__data))}}a.bindBuffer(35345,null)}function p(v,b,_){let M=v.value;if(_[b]===void 0)return typeof M=="number"?_[b]=M:_[b]=M.clone(),!0;if(typeof M=="number"){if(_[b]!==M)return _[b]=M,!0}else{let A=_[b];if(A.equals(M)===!1)return A.copy(M),!0}return!1}function g(v){let b=v.uniforms,_=0,M=16,A=0;for(let P=0,y=b.length;P<y;P++){let E=b[P],R=m(E);if(E.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=_,P>0){A=_%M;let W=M-A;A!==0&&W-R.boundary<0&&(_+=M-A,E.__offset=_)}_+=R.storage}return A=_%M,A>0&&(_+=M-A),v.__size=_,v.__cache={},this}function m(v){let b=v.value,_={boundary:0,storage:0};return typeof b=="number"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),_}function d(v){let b=v.target;b.removeEventListener("dispose",d);let _=o.indexOf(b.__bindingPointIndex);o.splice(_,1),a.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function x(){for(let v in i)a.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:l,update:c,dispose:x}}function ag(){let a=ns("canvas");return a.style.display="block",a}function go(a={}){this.isWebGLRenderer=!0;let e=a.canvas!==void 0?a.canvas:ag(),t=a.context!==void 0?a.context:null,n=a.depth!==void 0?a.depth:!0,i=a.stencil!==void 0?a.stencil:!0,s=a.antialias!==void 0?a.antialias:!1,o=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,r=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,l=a.powerPreference!==void 0?a.powerPreference:"default",c=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1,u;t!==null?u=t.getContextAttributes().alpha:u=a.alpha!==void 0?a.alpha:!1;let h=null,f=null,p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Yn,this.physicallyCorrectLights=!1,this.toneMapping=Jt,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});let m=this,d=!1,x=0,v=0,b=null,_=-1,M=null,A=new ke,P=new ke,y=null,E=e.width,R=e.height,W=1,j=null,B=null,U=new ke(0,0,E,R),V=new ke(0,0,E,R),Z=!1,K=new Ys,G=!1,N=!1,z=null,Q=new Ae,J=new ge,ie=new C,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ye(){return b===null?W:1}let X=t;function Ne(S,F){for(let H=0;H<S.length;H++){let D=S[H],q=e.getContext(D,F);if(q!==null)return q}return null}try{let S={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:r,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${gr}`),e.addEventListener("webglcontextlost",de,!1),e.addEventListener("webglcontextrestored",Me,!1),e.addEventListener("webglcontextcreationerror",Ie,!1),X===null){let F=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&F.shift(),X=Ne(F,S),X===null)throw Ne(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let _e,be,ce,Ue,Te,me,je,ht,$e,bt,Qe,ze,Et,Ct,T,w,k,$,ee,re,xe,L,O,ae;function ue(){_e=new Cp(X),be=new Mp(X,_e,a),_e.init(be),L=new ig(X,_e,be),ce=new tg(X,_e,be),Ue=new Pp,Te=new Hm,me=new ng(X,_e,ce,Te,be,L,Ue),je=new Sp(m),ht=new Ep(m),$e=new Vu(X,be),O=new yp(X,_e,$e,be),bt=new Lp(X,$e,Ue,O),Qe=new Op(X,bt,$e,Ue),ee=new Np(X,be,me),w=new wp(Te),ze=new Gm(m,je,ht,_e,be,O,w),Et=new rg(m,Te),Ct=new qm,T=new Km(_e,be),$=new vp(m,je,ce,Qe,u,o),k=new eg(m,Qe,be),ae=new og(X,Ue,be,ce),re=new bp(X,_e,Ue,be),xe=new Rp(X,_e,Ue,be),Ue.programs=ze.programs,m.capabilities=be,m.extensions=_e,m.properties=Te,m.renderLists=Ct,m.shadowMap=k,m.state=ce,m.info=Ue}ue();let le=new Nl(m,X);this.xr=le,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let S=_e.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=_e.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(S){S!==void 0&&(W=S,this.setSize(E,R,!1))},this.getSize=function(S){return S.set(E,R)},this.setSize=function(S,F,H){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=S,R=F,e.width=Math.floor(S*W),e.height=Math.floor(F*W),H!==!1&&(e.style.width=S+"px",e.style.height=F+"px"),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(E*W,R*W).floor()},this.setDrawingBufferSize=function(S,F,H){E=S,R=F,W=H,e.width=Math.floor(S*H),e.height=Math.floor(F*H),this.setViewport(0,0,S,F)},this.getCurrentViewport=function(S){return S.copy(A)},this.getViewport=function(S){return S.copy(U)},this.setViewport=function(S,F,H,D){S.isVector4?U.set(S.x,S.y,S.z,S.w):U.set(S,F,H,D),ce.viewport(A.copy(U).multiplyScalar(W).floor())},this.getScissor=function(S){return S.copy(V)},this.setScissor=function(S,F,H,D){S.isVector4?V.set(S.x,S.y,S.z,S.w):V.set(S,F,H,D),ce.scissor(P.copy(V).multiplyScalar(W).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(S){ce.setScissorTest(Z=S)},this.setOpaqueSort=function(S){j=S},this.setTransparentSort=function(S){B=S},this.getClearColor=function(S){return S.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor.apply($,arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha.apply($,arguments)},this.clear=function(S=!0,F=!0,H=!0){let D=0;S&&(D|=16384),F&&(D|=256),H&&(D|=1024),X.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",de,!1),e.removeEventListener("webglcontextrestored",Me,!1),e.removeEventListener("webglcontextcreationerror",Ie,!1),Ct.dispose(),T.dispose(),Te.dispose(),je.dispose(),ht.dispose(),Qe.dispose(),O.dispose(),ae.dispose(),ze.dispose(),le.dispose(),le.removeEventListener("sessionstart",ve),le.removeEventListener("sessionend",He),z&&(z.dispose(),z=null),Ze.stop()};function de(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;let S=Ue.autoReset,F=k.enabled,H=k.autoUpdate,D=k.needsUpdate,q=k.type;ue(),Ue.autoReset=S,k.enabled=F,k.autoUpdate=H,k.needsUpdate=D,k.type=q}function Ie(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function I(S){let F=S.target;F.removeEventListener("dispose",I),oe(F)}function oe(S){te(S),Te.remove(S)}function te(S){let F=Te.get(S).programs;F!==void 0&&(F.forEach(function(H){ze.releaseProgram(H)}),S.isShaderMaterial&&ze.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,H,D,q,pe){F===null&&(F=he);let we=q.isMesh&&q.matrixWorld.determinant()<0,Ee=dh(S,F,H,D,q);ce.setMaterial(D,we);let Se=H.index,Fe=H.attributes.position;if(Se===null){if(Fe===void 0||Fe.count===0)return}else if(Se.count===0)return;let Re=1;D.wireframe===!0&&(Se=bt.getWireframeAttribute(H),Re=2),O.setup(q,D,Ee,H,Se);let Pe,Ye=re;Se!==null&&(Pe=$e.get(Se),Ye=xe,Ye.setIndex(Pe));let Fn=Se!==null?Se.count:Fe.count,fi=H.drawRange.start*Re,di=H.drawRange.count*Re,Ht=pe!==null?pe.start*Re:0,Oe=pe!==null?pe.count*Re:1/0,pi=Math.max(fi,Ht),Je=Math.min(Fn,fi+di,Ht+Oe)-1,Rt=Math.max(0,Je-pi+1);if(Rt!==0){if(q.isMesh)D.wireframe===!0?(ce.setLineWidth(D.wireframeLinewidth*ye()),Ye.setMode(1)):Ye.setMode(4);else if(q.isLine){let gn=D.linewidth;gn===void 0&&(gn=1),ce.setLineWidth(gn*ye()),q.isLineSegments?Ye.setMode(1):q.isLineLoop?Ye.setMode(2):Ye.setMode(3)}else q.isPoints?Ye.setMode(0):q.isSprite&&Ye.setMode(4);if(q.isInstancedMesh)Ye.renderInstances(pi,Rt,q.count);else if(H.isInstancedBufferGeometry){let gn=Math.min(H.instanceCount,H._maxInstanceCount);Ye.renderInstances(pi,Rt,gn)}else Ye.render(pi,Rt)}},this.compile=function(S,F){function H(D,q,pe){D.transparent===!0&&D.side===It?(D.side=Pt,D.needsUpdate=!0,bs(D,q,pe),D.side=xn,D.needsUpdate=!0,bs(D,q,pe),D.side=It):bs(D,q,pe)}f=T.get(S),f.init(),g.push(f),S.traverseVisible(function(D){D.isLight&&D.layers.test(F.layers)&&(f.pushLight(D),D.castShadow&&f.pushShadow(D))}),f.setupLights(m.physicallyCorrectLights),S.traverse(function(D){let q=D.material;if(q)if(Array.isArray(q))for(let pe=0;pe<q.length;pe++){let we=q[pe];H(we,S,D)}else H(q,S,D)}),g.pop(),f=null};let Y=null;function se(S){Y&&Y(S)}function ve(){Ze.stop()}function He(){Ze.start()}let Ze=new Qa;Ze.setAnimationLoop(se),typeof self!="undefined"&&Ze.setContext(self),this.setAnimationLoop=function(S){Y=S,le.setAnimationLoop(S),S===null?Ze.stop():Ze.start()},le.addEventListener("sessionstart",ve),le.addEventListener("sessionend",He),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(F),F=le.getCamera()),S.isScene===!0&&S.onBeforeRender(m,S,F,b),f=T.get(S,g.length),f.init(),g.push(f),Q.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),K.setFromProjectionMatrix(Q),N=this.localClippingEnabled,G=w.init(this.clippingPlanes,N,F),h=Ct.get(S,p.length),h.init(),p.push(h),mn(S,F,0,m.sortObjects),h.finish(),m.sortObjects===!0&&h.sort(j,B),G===!0&&w.beginShadows();let H=f.state.shadowsArray;if(k.render(H,S,F),G===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),$.render(h,S),f.setupLights(m.physicallyCorrectLights),F.isArrayCamera){let D=F.cameras;for(let q=0,pe=D.length;q<pe;q++){let we=D[q];Xe(h,S,we,we.viewport)}}else Xe(h,S,F);b!==null&&(me.updateMultisampleRenderTarget(b),me.updateRenderTargetMipmap(b)),S.isScene===!0&&S.onAfterRender(m,S,F),O.resetDefaultState(),_=-1,M=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,p.pop(),p.length>0?h=p[p.length-1]:h=null};function mn(S,F,H,D){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)H=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||K.intersectsSprite(S)){D&&ie.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Q);let we=Qe.update(S),Ee=S.material;Ee.visible&&h.push(S,we,Ee,H,ie.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&S.skeleton.frame!==Ue.render.frame&&(S.skeleton.update(),S.skeleton.frame=Ue.render.frame),!S.frustumCulled||K.intersectsObject(S))){D&&ie.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Q);let we=Qe.update(S),Ee=S.material;if(Array.isArray(Ee)){let Se=we.groups;for(let Fe=0,Re=Se.length;Fe<Re;Fe++){let Pe=Se[Fe],Ye=Ee[Pe.materialIndex];Ye&&Ye.visible&&h.push(S,we,Ye,H,ie.z,Pe)}}else Ee.visible&&h.push(S,we,Ee,H,ie.z,null)}}let pe=S.children;for(let we=0,Ee=pe.length;we<Ee;we++)mn(pe[we],F,H,D)}function Xe(S,F,H,D){let q=S.opaque,pe=S.transmissive,we=S.transparent;f.setupLightsView(H),pe.length>0&&jt(q,F,H),D&&ce.viewport(A.copy(D)),q.length>0&&Lt(q,F,H),pe.length>0&&Lt(pe,F,H),we.length>0&&Lt(we,F,H),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function jt(S,F,H){let D=be.isWebGL2;z===null&&(z=new Wt(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?Ki:wt,minFilter:Hn,samples:D&&s===!0?4:0})),m.getDrawingBufferSize(J),D?z.setSize(J.x,J.y):z.setSize(Ts(J.x),Ts(J.y));let q=m.getRenderTarget();m.setRenderTarget(z),m.clear();let pe=m.toneMapping;m.toneMapping=Jt,Lt(S,F,H),m.toneMapping=pe,me.updateMultisampleRenderTarget(z),me.updateRenderTargetMipmap(z),m.setRenderTarget(q)}function Lt(S,F,H){let D=F.isScene===!0?F.overrideMaterial:null;for(let q=0,pe=S.length;q<pe;q++){let we=S[q],Ee=we.object,Se=we.geometry,Fe=D===null?we.material:D,Re=we.group;Ee.layers.test(H.layers)&&fh(Ee,F,H,Se,Fe,Re)}}function fh(S,F,H,D,q,pe){S.onBeforeRender(m,F,H,D,q,pe),S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),q.onBeforeRender(m,F,H,D,S,pe),q.transparent===!0&&q.side===It?(q.side=Pt,q.needsUpdate=!0,m.renderBufferDirect(H,F,D,q,S,pe),q.side=xn,q.needsUpdate=!0,m.renderBufferDirect(H,F,D,q,S,pe),q.side=It):m.renderBufferDirect(H,F,D,q,S,pe),S.onAfterRender(m,F,H,D,q,pe)}function bs(S,F,H){F.isScene!==!0&&(F=he);let D=Te.get(S),q=f.state.lights,pe=f.state.shadowsArray,we=q.state.version,Ee=ze.getParameters(S,q.state,pe,F,H),Se=ze.getProgramCacheKey(Ee),Fe=D.programs;D.environment=S.isMeshStandardMaterial?F.environment:null,D.fog=F.fog,D.envMap=(S.isMeshStandardMaterial?ht:je).get(S.envMap||D.environment),Fe===void 0&&(S.addEventListener("dispose",I),Fe=new Map,D.programs=Fe);let Re=Fe.get(Se);if(Re!==void 0){if(D.currentProgram===Re&&D.lightsStateVersion===we)return Jo(S,Ee),Re}else Ee.uniforms=ze.getUniforms(S),S.onBuild(H,Ee,m),S.onBeforeCompile(Ee,m),Re=ze.acquireProgram(Ee,Se),Fe.set(Se,Re),D.uniforms=Ee.uniforms;let Pe=D.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Pe.clippingPlanes=w.uniform),Jo(S,Ee),D.needsLights=mh(S),D.lightsStateVersion=we,D.needsLights&&(Pe.ambientLightColor.value=q.state.ambient,Pe.lightProbe.value=q.state.probe,Pe.directionalLights.value=q.state.directional,Pe.directionalLightShadows.value=q.state.directionalShadow,Pe.spotLights.value=q.state.spot,Pe.spotLightShadows.value=q.state.spotShadow,Pe.rectAreaLights.value=q.state.rectArea,Pe.ltc_1.value=q.state.rectAreaLTC1,Pe.ltc_2.value=q.state.rectAreaLTC2,Pe.pointLights.value=q.state.point,Pe.pointLightShadows.value=q.state.pointShadow,Pe.hemisphereLights.value=q.state.hemi,Pe.directionalShadowMap.value=q.state.directionalShadowMap,Pe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Pe.spotShadowMap.value=q.state.spotShadowMap,Pe.spotLightMatrix.value=q.state.spotLightMatrix,Pe.spotLightMap.value=q.state.spotLightMap,Pe.pointShadowMap.value=q.state.pointShadowMap,Pe.pointShadowMatrix.value=q.state.pointShadowMatrix);let Ye=Re.getUniforms(),Fn=os.seqWithValue(Ye.seq,Pe);return D.currentProgram=Re,D.uniformsList=Fn,Re}function Jo(S,F){let H=Te.get(S);H.outputEncoding=F.outputEncoding,H.instancing=F.instancing,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function dh(S,F,H,D,q){F.isScene!==!0&&(F=he),me.resetTextureUnits();let pe=F.fog,we=D.isMeshStandardMaterial?F.environment:null,Ee=b===null?m.outputEncoding:b.isXRRenderTarget===!0?b.texture.encoding:Yn,Se=(D.isMeshStandardMaterial?ht:je).get(D.envMap||we),Fe=D.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Re=!!D.normalMap&&!!H.attributes.tangent,Pe=!!H.morphAttributes.position,Ye=!!H.morphAttributes.normal,Fn=!!H.morphAttributes.color,fi=D.toneMapped?m.toneMapping:Jt,di=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ht=di!==void 0?di.length:0,Oe=Te.get(D),pi=f.state.lights;if(G===!0&&(N===!0||S!==M)){let Mt=S===M&&D.id===_;w.setState(D,S,Mt)}let Je=!1;D.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==pi.state.version||Oe.outputEncoding!==Ee||q.isInstancedMesh&&Oe.instancing===!1||!q.isInstancedMesh&&Oe.instancing===!0||q.isSkinnedMesh&&Oe.skinning===!1||!q.isSkinnedMesh&&Oe.skinning===!0||Oe.envMap!==Se||D.fog===!0&&Oe.fog!==pe||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==w.numPlanes||Oe.numIntersection!==w.numIntersection)||Oe.vertexAlphas!==Fe||Oe.vertexTangents!==Re||Oe.morphTargets!==Pe||Oe.morphNormals!==Ye||Oe.morphColors!==Fn||Oe.toneMapping!==fi||be.isWebGL2===!0&&Oe.morphTargetsCount!==Ht)&&(Je=!0):(Je=!0,Oe.__version=D.version);let Rt=Oe.currentProgram;Je===!0&&(Rt=bs(D,F,q));let gn=!1,Zi=!1,dr=!1,xt=Rt.getUniforms(),Bn=Oe.uniforms;if(ce.useProgram(Rt.program)&&(gn=!0,Zi=!0,dr=!0),D.id!==_&&(_=D.id,Zi=!0),gn||M!==S){if(xt.setValue(X,"projectionMatrix",S.projectionMatrix),be.logarithmicDepthBuffer&&xt.setValue(X,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),M!==S&&(M=S,Zi=!0,dr=!0),D.isShaderMaterial||D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshStandardMaterial||D.envMap){let Mt=xt.map.cameraPosition;Mt!==void 0&&Mt.setValue(X,ie.setFromMatrixPosition(S.matrixWorld))}(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&xt.setValue(X,"isOrthographic",S.isOrthographicCamera===!0),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial||D.isShadowMaterial||q.isSkinnedMesh)&&xt.setValue(X,"viewMatrix",S.matrixWorldInverse)}if(q.isSkinnedMesh){xt.setOptional(X,q,"bindMatrix"),xt.setOptional(X,q,"bindMatrixInverse");let Mt=q.skeleton;Mt&&(be.floatVertexTextures?(Mt.boneTexture===null&&Mt.computeBoneTexture(),xt.setValue(X,"boneTexture",Mt.boneTexture,me),xt.setValue(X,"boneTextureSize",Mt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}let pr=H.morphAttributes;if((pr.position!==void 0||pr.normal!==void 0||pr.color!==void 0&&be.isWebGL2===!0)&&ee.update(q,H,D,Rt),(Zi||Oe.receiveShadow!==q.receiveShadow)&&(Oe.receiveShadow=q.receiveShadow,xt.setValue(X,"receiveShadow",q.receiveShadow)),D.isMeshGouraudMaterial&&D.envMap!==null&&(Bn.envMap.value=Se,Bn.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),Zi&&(xt.setValue(X,"toneMappingExposure",m.toneMappingExposure),Oe.needsLights&&ph(Bn,dr),pe&&D.fog===!0&&Et.refreshFogUniforms(Bn,pe),Et.refreshMaterialUniforms(Bn,D,W,R,z),os.upload(X,Oe.uniformsList,Bn,me)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(os.upload(X,Oe.uniformsList,Bn,me),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&xt.setValue(X,"center",q.center),xt.setValue(X,"modelViewMatrix",q.modelViewMatrix),xt.setValue(X,"normalMatrix",q.normalMatrix),xt.setValue(X,"modelMatrix",q.matrixWorld),D.isShaderMaterial||D.isRawShaderMaterial){let Mt=D.uniformsGroups;for(let mr=0,gh=Mt.length;mr<gh;mr++)if(be.isWebGL2){let Ko=Mt[mr];ae.update(Ko,Rt),ae.bind(Ko,Rt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Rt}function ph(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function mh(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(S,F,H){Te.get(S.texture).__webglTexture=F,Te.get(S.depthTexture).__webglTexture=H;let D=Te.get(S);D.__hasExternalTextures=!0,D.__hasExternalTextures&&(D.__autoAllocateDepthBuffer=H===void 0,D.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),D.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,F){let H=Te.get(S);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(S,F=0,H=0){b=S,x=F,v=H;let D=!0;if(S){let Se=Te.get(S);Se.__useDefaultFramebuffer!==void 0?(ce.bindFramebuffer(36160,null),D=!1):Se.__webglFramebuffer===void 0?me.setupRenderTarget(S):Se.__hasExternalTextures&&me.rebindTextures(S,Te.get(S.texture).__webglTexture,Te.get(S.depthTexture).__webglTexture)}let q=null,pe=!1,we=!1;if(S){let Se=S.texture;(Se.isData3DTexture||Se.isDataArrayTexture)&&(we=!0);let Fe=Te.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(q=Fe[F],pe=!0):be.isWebGL2&&S.samples>0&&me.useMultisampledRTT(S)===!1?q=Te.get(S).__webglMultisampledFramebuffer:q=Fe,A.copy(S.viewport),P.copy(S.scissor),y=S.scissorTest}else A.copy(U).multiplyScalar(W).floor(),P.copy(V).multiplyScalar(W).floor(),y=Z;if(ce.bindFramebuffer(36160,q)&&be.drawBuffers&&D&&ce.drawBuffers(S,q),ce.viewport(A),ce.scissor(P),ce.setScissorTest(y),pe){let Se=Te.get(S.texture);X.framebufferTexture2D(36160,36064,34069+F,Se.__webglTexture,H)}else if(we){let Se=Te.get(S.texture),Fe=F||0;X.framebufferTextureLayer(36160,36064,Se.__webglTexture,H||0,Fe)}_=-1},this.readRenderTargetPixels=function(S,F,H,D,q,pe,we){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Te.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&we!==void 0&&(Ee=Ee[we]),Ee){ce.bindFramebuffer(36160,Ee);try{let Se=S.texture,Fe=Se.format,Re=Se.type;if(Fe!==ut&&L.convert(Fe)!==X.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Pe=Re===Ki&&(_e.has("EXT_color_buffer_half_float")||be.isWebGL2&&_e.has("EXT_color_buffer_float"));if(Re!==wt&&L.convert(Re)!==X.getParameter(35738)&&!(Re===vn&&(be.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!Pe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-D&&H>=0&&H<=S.height-q&&X.readPixels(F,H,D,q,L.convert(Fe),L.convert(Re),pe)}finally{let Se=b!==null?Te.get(b).__webglFramebuffer:null;ce.bindFramebuffer(36160,Se)}}},this.copyFramebufferToTexture=function(S,F,H=0){let D=Math.pow(2,-H),q=Math.floor(F.image.width*D),pe=Math.floor(F.image.height*D);me.setTexture2D(F,0),X.copyTexSubImage2D(3553,H,0,0,S.x,S.y,q,pe),ce.unbindTexture()},this.copyTextureToTexture=function(S,F,H,D=0){let q=F.image.width,pe=F.image.height,we=L.convert(H.format),Ee=L.convert(H.type);me.setTexture2D(H,0),X.pixelStorei(37440,H.flipY),X.pixelStorei(37441,H.premultiplyAlpha),X.pixelStorei(3317,H.unpackAlignment),F.isDataTexture?X.texSubImage2D(3553,D,S.x,S.y,q,pe,we,Ee,F.image.data):F.isCompressedTexture?X.compressedTexSubImage2D(3553,D,S.x,S.y,F.mipmaps[0].width,F.mipmaps[0].height,we,F.mipmaps[0].data):X.texSubImage2D(3553,D,S.x,S.y,we,Ee,F.image),D===0&&H.generateMipmaps&&X.generateMipmap(3553),ce.unbindTexture()},this.copyTextureToTexture3D=function(S,F,H,D,q=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let pe=S.max.x-S.min.x+1,we=S.max.y-S.min.y+1,Ee=S.max.z-S.min.z+1,Se=L.convert(D.format),Fe=L.convert(D.type),Re;if(D.isData3DTexture)me.setTexture3D(D,0),Re=32879;else if(D.isDataArrayTexture)me.setTexture2DArray(D,0),Re=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(37440,D.flipY),X.pixelStorei(37441,D.premultiplyAlpha),X.pixelStorei(3317,D.unpackAlignment);let Pe=X.getParameter(3314),Ye=X.getParameter(32878),Fn=X.getParameter(3316),fi=X.getParameter(3315),di=X.getParameter(32877),Ht=H.isCompressedTexture?H.mipmaps[0]:H.image;X.pixelStorei(3314,Ht.width),X.pixelStorei(32878,Ht.height),X.pixelStorei(3316,S.min.x),X.pixelStorei(3315,S.min.y),X.pixelStorei(32877,S.min.z),H.isDataTexture||H.isData3DTexture?X.texSubImage3D(Re,q,F.x,F.y,F.z,pe,we,Ee,Se,Fe,Ht.data):H.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(Re,q,F.x,F.y,F.z,pe,we,Ee,Se,Ht.data)):X.texSubImage3D(Re,q,F.x,F.y,F.z,pe,we,Ee,Se,Fe,Ht),X.pixelStorei(3314,Pe),X.pixelStorei(32878,Ye),X.pixelStorei(3316,Fn),X.pixelStorei(3315,fi),X.pixelStorei(32877,di),q===0&&D.generateMipmaps&&X.generateMipmap(Re),ce.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?me.setTextureCube(S,0):S.isData3DTexture?me.setTexture3D(S,0):S.isDataArrayTexture?me.setTexture2DArray(S,0):me.setTexture2D(S,0),ce.unbindTexture()},this.resetState=function(){x=0,v=0,b=null,ce.reset(),O.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}var Ol=class extends go{};Ol.prototype.isWebGL1Renderer=!0;var ls=class extends qe{constructor(){super();this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}},xo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Rr,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Ut()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ut()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ut()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},vt=new C,cs=class{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}setX(e,t){return this.normalized&&(t=Ve(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ve(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ve(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ve(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Qt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Qt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Qt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Qt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ve(t,this.array),n=Ve(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ve(t,this.array),n=Ve(n,this.array),i=Ve(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ve(t,this.array),n=Ve(n,this.array),i=Ve(i,this.array),s=Ve(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new _t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new cs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Ul=new C,zl=new ke,Fl=new ke,lg=new C,Bl=new Ae,_o=class extends nt{constructor(e,t){super(e,t);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ae,this.bindMatrixInverse=new Ae}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ke,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){let n=this.skeleton,i=this.geometry;zl.fromBufferAttribute(i.attributes.skinIndex,e),Fl.fromBufferAttribute(i.attributes.skinWeight,e),Ul.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let o=Fl.getComponent(s);if(o!==0){let r=zl.getComponent(s);Bl.multiplyMatrices(n.bones[r].matrixWorld,n.boneInverses[r]),t.addScaledVector(lg.copy(Ul).applyMatrix4(Bl),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Ks=class extends qe{constructor(){super();this.isBone=!0,this.type="Bone"}},$s=class extends ft{constructor(e=null,t=1,n=1,i,s,o,r,l,c=rt,u=rt,h,f){super(null,o,r,l,c,u,i,s,h,f);this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},kl=new Ae,cg=new Ae,hs=class{constructor(e=[],t=[]){this.uuid=Ut(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ae)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ae;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){let r=e[s]?e[s].matrixWorld:cg;kl.multiplyMatrices(r,t[s]),kl.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new hs(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Oa(e),e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new $s(t,e,e,ut,vn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let s=e.bones[n],o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Ks),this.bones.push(o),this.boneInverses.push(new Ae().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){let o=t[i];e.bones.push(o.uuid);let r=n[i];e.boneInverses.push(r.toArray())}return e}};var Rn=class extends mt{constructor(e){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new fe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Vl=new C,Gl=new C,Hl=new Ae,vo=new Ns,Qs=new wn,us=class extends qe{constructor(e=new at,t=new Rn){super();this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Vl.fromBufferAttribute(t,i-1),Gl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Vl.distanceTo(Gl);e.setAttribute("lineDistance",new Ge(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(i),Qs.radius+=s,e.ray.intersectsSphere(Qs)===!1)return;Hl.copy(i).invert(),vo.copy(e.ray).applyMatrix4(Hl);let r=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,c=new C,u=new C,h=new C,f=new C,p=this.isLineSegments?2:1,g=n.index,d=n.attributes.position;if(g!==null){let x=Math.max(0,o.start),v=Math.min(g.count,o.start+o.count);for(let b=x,_=v-1;b<_;b+=p){let M=g.getX(b),A=g.getX(b+1);if(c.fromBufferAttribute(d,M),u.fromBufferAttribute(d,A),vo.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);let y=e.ray.origin.distanceTo(f);y<e.near||y>e.far||t.push({distance:y,point:h.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{let x=Math.max(0,o.start),v=Math.min(d.count,o.start+o.count);for(let b=x,_=v-1;b<_;b+=p){if(c.fromBufferAttribute(d,b),u.fromBufferAttribute(d,b+1),vo.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);let A=e.ray.origin.distanceTo(f);A<e.near||A>e.far||t.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let r=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}},Wl=new C,ql=new C,Gi=class extends us{constructor(e,t){super(e,t);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Wl.fromBufferAttribute(t,i),ql.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Wl.distanceTo(ql);e.setAttribute("lineDistance",new Ge(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},yo=class extends us{constructor(e,t){super(e,t);this.isLineLoop=!0,this.type="LineLoop"}},ln=class extends mt{constructor(e){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Xl=new Ae,bo=new Ns,er=new wn,tr=new C,ii=class extends qe{constructor(e=new at,t=new ln){super();this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),er.copy(n.boundingSphere),er.applyMatrix4(i),er.radius+=s,e.ray.intersectsSphere(er)===!1)return;Xl.copy(i).invert(),bo.copy(e.ray).applyMatrix4(Xl);let r=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,m=p;g<m;g++){let d=c.getX(g);tr.fromBufferAttribute(h,d),Yl(tr,d,l,i,e,t,this)}}else{let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,m=p;g<m;g++)tr.fromBufferAttribute(h,g),Yl(tr,g,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let r=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}};function Yl(a,e,t,n,i,s,o){let r=bo.distanceSqToPoint(a);if(r<t){let l=new C;bo.closestPointToPoint(a,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(r),point:l,index:e,face:null,object:o})}}var nr=class extends at{constructor(e=[],t=[],n=1,i=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],o=[];r(i),c(n),u(),this.setAttribute("position",new Ge(s,3)),this.setAttribute("normal",new Ge(s.slice(),3)),this.setAttribute("uv",new Ge(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function r(v){let b=new C,_=new C,M=new C;for(let A=0;A<t.length;A+=3)p(t[A+0],b),p(t[A+1],_),p(t[A+2],M),l(b,_,M,v)}function l(v,b,_,M){let A=M+1,P=[];for(let y=0;y<=A;y++){P[y]=[];let E=v.clone().lerp(_,y/A),R=b.clone().lerp(_,y/A),W=A-y;for(let j=0;j<=W;j++)j===0&&y===A?P[y][j]=E:P[y][j]=E.clone().lerp(R,j/W)}for(let y=0;y<A;y++)for(let E=0;E<2*(A-y)-1;E++){let R=Math.floor(E/2);E%2===0?(f(P[y][R+1]),f(P[y+1][R]),f(P[y][R])):(f(P[y][R+1]),f(P[y+1][R+1]),f(P[y+1][R]))}}function c(v){let b=new C;for(let _=0;_<s.length;_+=3)b.x=s[_+0],b.y=s[_+1],b.z=s[_+2],b.normalize().multiplyScalar(v),s[_+0]=b.x,s[_+1]=b.y,s[_+2]=b.z}function u(){let v=new C;for(let b=0;b<s.length;b+=3){v.x=s[b+0],v.y=s[b+1],v.z=s[b+2];let _=d(v)/2/Math.PI+.5,M=x(v)/Math.PI+.5;o.push(_,1-M)}g(),h()}function h(){for(let v=0;v<o.length;v+=6){let b=o[v+0],_=o[v+2],M=o[v+4],A=Math.max(b,_,M),P=Math.min(b,_,M);A>.9&&P<.1&&(b<.2&&(o[v+0]+=1),_<.2&&(o[v+2]+=1),M<.2&&(o[v+4]+=1))}}function f(v){s.push(v.x,v.y,v.z)}function p(v,b){let _=v*3;b.x=e[_+0],b.y=e[_+1],b.z=e[_+2]}function g(){let v=new C,b=new C,_=new C,M=new C,A=new ge,P=new ge,y=new ge;for(let E=0,R=0;E<s.length;E+=9,R+=6){v.set(s[E+0],s[E+1],s[E+2]),b.set(s[E+3],s[E+4],s[E+5]),_.set(s[E+6],s[E+7],s[E+8]),A.set(o[R+0],o[R+1]),P.set(o[R+2],o[R+3]),y.set(o[R+4],o[R+5]),M.copy(v).add(b).add(_).divideScalar(3);let W=d(M);m(A,R+0,v,W),m(P,R+2,b,W),m(y,R+4,_,W)}}function m(v,b,_,M){M<0&&v.x===1&&(o[b]=v.x-1),_.x===0&&_.z===0&&(o[b]=M/2/Math.PI+.5)}function d(v){return Math.atan2(v.z,-v.x)}function x(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}static fromJSON(e){return new nr(e.vertices,e.indices,e.radius,e.details)}};var si=class extends nr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t);this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new si(e.radius,e.detail)}};var fs=class extends at{constructor(e=1,t=.4,n=8,i=6,s=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let o=[],r=[],l=[],c=[],u=new C,h=new C,f=new C;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){let m=g/i*s,d=p/n*Math.PI*2;h.x=(e+t*Math.cos(d))*Math.cos(m),h.y=(e+t*Math.cos(d))*Math.sin(m),h.z=t*Math.sin(d),r.push(h.x,h.y,h.z),u.x=e*Math.cos(m),u.y=e*Math.sin(m),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){let m=(i+1)*p+g-1,d=(i+1)*(p-1)+g-1,x=(i+1)*(p-1)+g,v=(i+1)*p+g;o.push(m,d,v),o.push(d,x,v)}this.setIndex(o),this.setAttribute("position",new Ge(r,3)),this.setAttribute("normal",new Ge(l,3)),this.setAttribute("uv",new Ge(c,2))}static fromJSON(e){return new fs(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},ds=class extends at{constructor(e=1,t=.4,n=64,i=8,s=2,o=3){super();this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:o},n=Math.floor(n),i=Math.floor(i);let r=[],l=[],c=[],u=[],h=new C,f=new C,p=new C,g=new C,m=new C,d=new C,x=new C;for(let b=0;b<=n;++b){let _=b/n*s*Math.PI*2;v(_,s,o,e,p),v(_+.01,s,o,e,g),d.subVectors(g,p),x.addVectors(g,p),m.crossVectors(d,x),x.crossVectors(m,d),m.normalize(),x.normalize();for(let M=0;M<=i;++M){let A=M/i*Math.PI*2,P=-t*Math.cos(A),y=t*Math.sin(A);h.x=p.x+(P*x.x+y*m.x),h.y=p.y+(P*x.y+y*m.y),h.z=p.z+(P*x.z+y*m.z),l.push(h.x,h.y,h.z),f.subVectors(h,p).normalize(),c.push(f.x,f.y,f.z),u.push(b/n),u.push(M/i)}}for(let b=1;b<=n;b++)for(let _=1;_<=i;_++){let M=(i+1)*(b-1)+(_-1),A=(i+1)*b+(_-1),P=(i+1)*b+_,y=(i+1)*(b-1)+_;r.push(M,A,y),r.push(A,P,y)}this.setIndex(r),this.setAttribute("position",new Ge(l,3)),this.setAttribute("normal",new Ge(c,3)),this.setAttribute("uv",new Ge(u,2));function v(b,_,M,A,P){let y=Math.cos(b),E=Math.sin(b),R=M/_*b,W=Math.cos(R);P.x=A*(2+W)*.5*y,P.y=A*(2+W)*E*.5,P.z=A*Math.sin(R)*.5}}static fromJSON(e){return new ds(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}};var Hi=class extends an{constructor(e){super(e);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Wi=class extends mt{constructor(e){super();this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$i,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Pn=class extends Wi{constructor(e){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ge(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new fe(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Mo=class extends mt{constructor(e){super();this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new fe(16777215),this.specular=new fe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$i,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_r,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function In(a,e,t){return Zl(a)?new a.constructor(a.subarray(e,t!==void 0?t:a.length)):a.slice(e,t)}function ir(a,e,t){return!a||!t&&a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function Zl(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function hg(a){function e(i,s){return a[i]-a[s]}let t=a.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function jl(a,e,t){let n=a.length,i=new a.constructor(n);for(let s=0,o=0;o!==n;++s){let r=t[s]*e;for(let l=0;l!==e;++l)i[o++]=a[r+l]}return i}function Jl(a,e,t,n){let i=1,s=a[0];for(;s!==void 0&&s[n]===void 0;)s=a[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=a[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=a[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=a[i++];while(s!==void 0)}var ri=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let r=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===r)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){let r=t[1];e<r&&(n=2,s=r);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let r=n+o>>>1;e<t[r]?o=r:n=r+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Kl=class extends ri{constructor(e,t,n,i){super(e,t,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ra,endingEnd:Ra}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,o=e+1,r=i[s],l=i[o];if(r===void 0)switch(this.getSettings_().endingStart){case Pa:s=e,r=2*t-n;break;case Ia:s=i.length-2,r=t+i[s]-i[s+1];break;default:s=e,r=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Pa:o=e,l=2*n-t;break;case Ia:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-r),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,r=this.valueSize,l=e*r,c=l-r,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),m=g*g,d=m*g,x=-f*d+2*f*m-f*g,v=(1+f)*d+(-1.5-2*f)*m+(-.5+f)*g+1,b=(-1-p)*d+(1.5+p)*m+.5*g,_=p*d-p*m;for(let M=0;M!==r;++M)s[M]=x*o[u+M]+v*o[c+M]+b*o[l+M]+_*o[h+M];return s}},$l=class extends ri{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,r=this.valueSize,l=e*r,c=l-r,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==r;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}},Ql=class extends ri{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Gt=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ir(t,this.TimeBufferType),this.values=ir(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ir(e.times,Array),values:ir(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ql(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $l(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Kl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case bi:t=this.InterpolantFactoryMethodDiscrete;break;case Xn:t=this.InterpolantFactoryMethodLinear;break;case Er:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return bi;case this.InterpolantFactoryMethodLinear:return Xn;case this.InterpolantFactoryMethodSmooth:return Er}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let r=this.getValueSize();this.times=In(n,s,o),this.values=In(this.values,s*r,o*r)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let r=0;r!==s;r++){let l=n[r];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,r,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,r,l,o),e=!1;break}o=l}if(i!==void 0&&Zl(i))for(let r=0,l=i.length;r!==l;++r){let c=i[r];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,r,c),e=!1;break}}return e}optimize(){let e=In(this.times),t=In(this.values),n=this.getValueSize(),i=this.getInterpolation()===Er,s=e.length-1,o=1;for(let r=1;r<s;++r){let l=!1,c=e[r],u=e[r+1];if(c!==u&&(r!==1||c!==e[0]))if(i)l=!0;else{let h=r*n,f=h-n,p=h+n;for(let g=0;g!==n;++g){let m=t[h+g];if(m!==t[f+g]||m!==t[p+g]){l=!0;break}}}if(l){if(r!==o){e[o]=e[r];let h=r*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++o}}if(s>0){e[o]=e[s];for(let r=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[r+c];++o}return o!==e.length?(this.times=In(e,0,o),this.values=In(t,0,o*n)):(this.times=e,this.values=t),this}clone(){let e=In(this.times,0),t=In(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Gt.prototype.TimeBufferType=Float32Array;Gt.prototype.ValueBufferType=Float32Array;Gt.prototype.DefaultInterpolation=Xn;var oi=class extends Gt{};oi.prototype.ValueTypeName="bool";oi.prototype.ValueBufferType=Array;oi.prototype.DefaultInterpolation=bi;oi.prototype.InterpolantFactoryMethodLinear=void 0;oi.prototype.InterpolantFactoryMethodSmooth=void 0;var wo=class extends Gt{};wo.prototype.ValueTypeName="color";var ai=class extends Gt{};ai.prototype.ValueTypeName="number";var ec=class extends ri{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,r=this.valueSize,l=(n-t)/(i-t),c=e*r;for(let u=c+r;c!==u;c+=4)Dt.slerpFlat(s,0,o,c-r,o,c,l);return s}},cn=class extends Gt{InterpolantFactoryMethodLinear(e){return new ec(this.times,this.values,this.getValueSize(),e)}};cn.prototype.ValueTypeName="quaternion";cn.prototype.DefaultInterpolation=Xn;cn.prototype.InterpolantFactoryMethodSmooth=void 0;var li=class extends Gt{};li.prototype.ValueTypeName="string";li.prototype.ValueBufferType=Array;li.prototype.DefaultInterpolation=bi;li.prototype.InterpolantFactoryMethodLinear=void 0;li.prototype.InterpolantFactoryMethodSmooth=void 0;var ci=class extends Gt{};ci.prototype.ValueTypeName="vector";var So=class{constructor(e,t=-1,n,i=ou){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ut(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,r=n.length;o!==r;++o)t.push(fg(n[o]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Gt.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,o=[];for(let r=0;r<s;r++){let l=[],c=[];l.push((r+s-1)%s,r,(r+1)%s),c.push(0,1,0);let u=hg(l);l=jl(l,1,u),c=jl(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new ai(".morphTargetInfluences["+t[r].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let r=0,l=e.length;r<l;r++){let c=e[r],u=c.name.match(s);if(u&&u.length>1){let h=u[1],f=i[h];f||(i[h]=f=[]),f.push(c)}}let o=[];for(let r in i)o.push(this.CreateFromMorphTargetSequence(r,i[r],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,f,p,g,m){if(p.length!==0){let d=[],x=[];Jl(p,d,x,g),d.length!==0&&m.push(new h(f,d,x))}},i=[],s=e.name||"default",o=e.fps||30,r=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let p={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let m=0;m<f[g].morphTargets.length;m++)p[f[g].morphTargets[m]]=-1;for(let m in p){let d=[],x=[];for(let v=0;v!==f[g].morphTargets.length;++v){let b=f[g];d.push(b.time),x.push(b.morphTarget===m?1:0)}i.push(new ai(".morphTargetInfluence["+m+"]",d,x))}l=p.length*o}else{let p=".bones["+t[h].name+"]";n(ci,p+".position",f,"pos",i),n(cn,p+".quaternion",f,"rot",i),n(ci,p+".scale",f,"scl",i)}}return i.length===0?null:new this(s,l,i,r)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function ug(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ai;case"vector":case"vector2":case"vector3":case"vector4":return ci;case"color":return wo;case"quaternion":return cn;case"bool":case"boolean":return oi;case"string":return li}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function fg(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=ug(a.type);if(a.times===void 0){let t=[],n=[];Jl(a.keys,t,n,"value"),a.times=t,a.values=n}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}var qi={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}},tc=class{constructor(e,t,n){let i=this,s=!1,o=0,r=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){r++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,r),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,r),o===r&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}},dg=new tc,hn=class{constructor(e){this.manager=e!==void 0?e:dg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}},un={},nc=class extends Error{constructor(e,t){super(e);this.response=t}},Xi=class extends hn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=qi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(un[e]!==void 0){un[e].push({onLoad:t,onProgress:n,onError:i});return}un[e]=[],un[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),r=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;let u=un[e],h=c.body.getReader(),f=c.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0,m=0,d=new ReadableStream({start(x){v();function v(){h.read().then(({done:b,value:_})=>{if(b)x.close();else{m+=_.byteLength;let M=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:p});for(let A=0,P=u.length;A<P;A++){let y=u[A];y.onProgress&&y.onProgress(M)}x.enqueue(_),v()}})}}});return new Response(d)}else throw new nc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,r));case"json":return c.json();default:if(r===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(r),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{qi.add(e,c);let u=un[e];delete un[e];for(let h=0,f=u.length;h<f;h++){let p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{let u=un[e];if(u===void 0)throw this.manager.itemError(e),c;delete un[e];for(let h=0,f=u.length;h<f;h++){let p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var ic=class extends hn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=qi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let r=ns("img");function l(){u(),qi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){r.removeEventListener("load",l,!1),r.removeEventListener("error",c,!1)}return r.addEventListener("load",l,!1),r.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(r.crossOrigin=this.crossOrigin),s.manager.itemStart(e),r.src=e,r}};var ps=class extends hn{constructor(e){super(e)}load(e,t,n,i){let s=new ft,o=new ic(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(r){s.image=r,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},sr=class extends qe{constructor(e,t=1){super();this.isLight=!0,this.type="Light",this.color=new fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};var To=new Ae,sc=new C,rc=new C,rr=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ys,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;sc.setFromMatrixPosition(e.matrixWorld),t.position.copy(sc),rc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rc),t.updateMatrixWorld(),To.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(To),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(To)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},oc=class extends rr{constructor(){super(new lt(50,1,.5,500));this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=es*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ao=class extends sr{constructor(e,t,n=0,i=Math.PI/3,s=0,o=1){super(e,t);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(qe.DefaultUp),this.updateMatrix(),this.target=new qe,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new oc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ac=new Ae,ms=new C,Eo=new C,lc=class extends rr{constructor(){super(new lt(90,1,.5,500));this.isPointLightShadow=!0,this._frameExtents=new ge(4,2),this._viewportCount=6,this._viewports=[new ke(2,1,1,1),new ke(0,1,1,1),new ke(3,1,1,1),new ke(1,1,1,1),new ke(3,0,1,1),new ke(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ms.setFromMatrixPosition(e.matrixWorld),n.position.copy(ms),Eo.copy(n.position),Eo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Eo),n.updateMatrixWorld(),i.makeTranslation(-ms.x,-ms.y,-ms.z),ac.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ac)}},Co=class extends sr{constructor(e,t,n=0,i=1){super(e,t);this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new lc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},cc=class extends rr{constructor(){super(new ei(-5,5,5,-5,.5,500));this.isDirectionalLightShadow=!0}},Lo=class extends sr{constructor(e,t){super(e,t);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qe.DefaultUp),this.updateMatrix(),this.target=new qe,this.shadow=new cc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var fn=class{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Ro=class extends hn{constructor(e){super(e);this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=qi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let r={};r.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",r.headers=this.requestHeader,fetch(e,r).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){qi.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}};var Po="\\[\\]\\.:\\/",pg=new RegExp("["+Po+"]","g"),Io="[^"+Po+"]",mg="[^"+Po.replace("\\.","")+"]",gg=/((?:WC+[\/:])*)/.source.replace("WC",Io),xg=/(WCOD+)?/.source.replace("WCOD",mg),_g=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Io),vg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Io),yg=new RegExp("^"+gg+xg+_g+vg+"$"),bg=["material","materials","bones","map"],hc=class{constructor(e,t,n){let i=n||De.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},De=class{constructor(e,t,n){this.path=t,this.parsedPath=n||De.parseTrackName(t),this.node=De.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new De.Composite(e,t,n):new De(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(pg,"")}static parseTrackName(e){let t=yg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);bg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let r=s[o];if(r.name===t||r.uuid===t)return r;let l=n(r.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=De.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let r=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?r=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(r=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][r]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};De.Composite=hc;De.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};De.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};De.prototype.GetterByBindingType=[De.prototype._getValue_direct,De.prototype._getValue_array,De.prototype._getValue_arrayElement,De.prototype._getValue_toArray];De.prototype.SetterByBindingTypeAndVersioning=[[De.prototype._setValue_direct,De.prototype._setValue_direct_setNeedsUpdate,De.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[De.prototype._setValue_array,De.prototype._setValue_array_setNeedsUpdate,De.prototype._setValue_array_setMatrixWorldNeedsUpdate],[De.prototype._setValue_arrayElement,De.prototype._setValue_arrayElement_setNeedsUpdate,De.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[De.prototype._setValue_fromArray,De.prototype._setValue_fromArray_setNeedsUpdate,De.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var jg=new Float32Array(1);var or=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=Math.max(e,Math.min(Math.PI-e,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(pt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gr}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gr);var uc={type:"change"},Do={type:"start"},fc={type:"end"},No=class extends $t{constructor(e,t){super();this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:kn.ROTATE,MIDDLE:kn.DOLLY,RIGHT:kn.PAN},this.touches={ONE:Vn.ROTATE,TWO:Vn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return r.phi},this.getAzimuthalAngle=function(){return r.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",Ct),this._domElementKeyEvents=L},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(uc),n.update(),s=i.NONE},this.update=function(){let L=new C,O=new Dt().setFromUnitVectors(e.up,new C(0,1,0)),ae=O.clone().invert(),ue=new C,le=new Dt,de=2*Math.PI;return function(){let Ie=n.object.position;L.copy(Ie).sub(n.target),L.applyQuaternion(O),r.setFromVector3(L),n.autoRotate&&s===i.NONE&&E(P()),n.enableDamping?(r.theta+=l.theta*n.dampingFactor,r.phi+=l.phi*n.dampingFactor):(r.theta+=l.theta,r.phi+=l.phi);let I=n.minAzimuthAngle,oe=n.maxAzimuthAngle;return isFinite(I)&&isFinite(oe)&&(I<-Math.PI?I+=de:I>Math.PI&&(I-=de),oe<-Math.PI?oe+=de:oe>Math.PI&&(oe-=de),I<=oe?r.theta=Math.max(I,Math.min(oe,r.theta)):r.theta=r.theta>(I+oe)/2?Math.max(I,r.theta):Math.min(oe,r.theta)),r.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,r.phi)),r.makeSafe(),r.radius*=c,r.radius=Math.max(n.minDistance,Math.min(n.maxDistance,r.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),L.setFromSpherical(r),L.applyQuaternion(ae),Ie.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||ue.distanceToSquared(n.object.position)>o||8*(1-le.dot(n.object.quaternion))>o?(n.dispatchEvent(uc),ue.copy(n.object.position),le.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",k),n.domElement.removeEventListener("pointerdown",je),n.domElement.removeEventListener("pointercancel",bt),n.domElement.removeEventListener("wheel",Et),n.domElement.removeEventListener("pointermove",ht),n.domElement.removeEventListener("pointerup",$e),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Ct)};let n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},s=i.NONE,o=1e-6,r=new or,l=new or,c=1,u=new C,h=!1,f=new ge,p=new ge,g=new ge,m=new ge,d=new ge,x=new ge,v=new ge,b=new ge,_=new ge,M=[],A={};function P(){return 2*Math.PI/60/60*n.autoRotateSpeed}function y(){return Math.pow(.95,n.zoomSpeed)}function E(L){l.theta-=L}function R(L){l.phi-=L}let W=function(){let L=new C;return function(ae,ue){L.setFromMatrixColumn(ue,0),L.multiplyScalar(-ae),u.add(L)}}(),j=function(){let L=new C;return function(ae,ue){n.screenSpacePanning===!0?L.setFromMatrixColumn(ue,1):(L.setFromMatrixColumn(ue,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(ae),u.add(L)}}(),B=function(){let L=new C;return function(ae,ue){let le=n.domElement;if(n.object.isPerspectiveCamera){let de=n.object.position;L.copy(de).sub(n.target);let Me=L.length();Me*=Math.tan(n.object.fov/2*Math.PI/180),W(2*ae*Me/le.clientHeight,n.object.matrix),j(2*ue*Me/le.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(W(ae*(n.object.right-n.object.left)/n.object.zoom/le.clientWidth,n.object.matrix),j(ue*(n.object.top-n.object.bottom)/n.object.zoom/le.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function U(L){n.object.isPerspectiveCamera?c/=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*L)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function V(L){n.object.isPerspectiveCamera?c*=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/L)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Z(L){f.set(L.clientX,L.clientY)}function K(L){v.set(L.clientX,L.clientY)}function G(L){m.set(L.clientX,L.clientY)}function N(L){p.set(L.clientX,L.clientY),g.subVectors(p,f).multiplyScalar(n.rotateSpeed);let O=n.domElement;E(2*Math.PI*g.x/O.clientHeight),R(2*Math.PI*g.y/O.clientHeight),f.copy(p),n.update()}function z(L){b.set(L.clientX,L.clientY),_.subVectors(b,v),_.y>0?U(y()):_.y<0&&V(y()),v.copy(b),n.update()}function Q(L){d.set(L.clientX,L.clientY),x.subVectors(d,m).multiplyScalar(n.panSpeed),B(x.x,x.y),m.copy(d),n.update()}function J(L){L.deltaY<0?V(y()):L.deltaY>0&&U(y()),n.update()}function ie(L){let O=!1;switch(L.code){case n.keys.UP:B(0,n.keyPanSpeed),O=!0;break;case n.keys.BOTTOM:B(0,-n.keyPanSpeed),O=!0;break;case n.keys.LEFT:B(n.keyPanSpeed,0),O=!0;break;case n.keys.RIGHT:B(-n.keyPanSpeed,0),O=!0;break}O&&(L.preventDefault(),n.update())}function he(){if(M.length===1)f.set(M[0].pageX,M[0].pageY);else{let L=.5*(M[0].pageX+M[1].pageX),O=.5*(M[0].pageY+M[1].pageY);f.set(L,O)}}function ye(){if(M.length===1)m.set(M[0].pageX,M[0].pageY);else{let L=.5*(M[0].pageX+M[1].pageX),O=.5*(M[0].pageY+M[1].pageY);m.set(L,O)}}function X(){let L=M[0].pageX-M[1].pageX,O=M[0].pageY-M[1].pageY,ae=Math.sqrt(L*L+O*O);v.set(0,ae)}function Ne(){n.enableZoom&&X(),n.enablePan&&ye()}function _e(){n.enableZoom&&X(),n.enableRotate&&he()}function be(L){if(M.length==1)p.set(L.pageX,L.pageY);else{let ae=xe(L),ue=.5*(L.pageX+ae.x),le=.5*(L.pageY+ae.y);p.set(ue,le)}g.subVectors(p,f).multiplyScalar(n.rotateSpeed);let O=n.domElement;E(2*Math.PI*g.x/O.clientHeight),R(2*Math.PI*g.y/O.clientHeight),f.copy(p)}function ce(L){if(M.length===1)d.set(L.pageX,L.pageY);else{let O=xe(L),ae=.5*(L.pageX+O.x),ue=.5*(L.pageY+O.y);d.set(ae,ue)}x.subVectors(d,m).multiplyScalar(n.panSpeed),B(x.x,x.y),m.copy(d)}function Ue(L){let O=xe(L),ae=L.pageX-O.x,ue=L.pageY-O.y,le=Math.sqrt(ae*ae+ue*ue);b.set(0,le),_.set(0,Math.pow(b.y/v.y,n.zoomSpeed)),U(_.y),v.copy(b)}function Te(L){n.enableZoom&&Ue(L),n.enablePan&&ce(L)}function me(L){n.enableZoom&&Ue(L),n.enableRotate&&be(L)}function je(L){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",ht),n.domElement.addEventListener("pointerup",$e)),$(L),L.pointerType==="touch"?T(L):Qe(L))}function ht(L){n.enabled!==!1&&(L.pointerType==="touch"?w(L):ze(L))}function $e(L){ee(L),M.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",ht),n.domElement.removeEventListener("pointerup",$e)),n.dispatchEvent(fc),s=i.NONE}function bt(L){ee(L)}function Qe(L){let O;switch(L.button){case 0:O=n.mouseButtons.LEFT;break;case 1:O=n.mouseButtons.MIDDLE;break;case 2:O=n.mouseButtons.RIGHT;break;default:O=-1}switch(O){case kn.DOLLY:if(n.enableZoom===!1)return;K(L),s=i.DOLLY;break;case kn.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;G(L),s=i.PAN}else{if(n.enableRotate===!1)return;Z(L),s=i.ROTATE}break;case kn.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;Z(L),s=i.ROTATE}else{if(n.enablePan===!1)return;G(L),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Do)}function ze(L){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;N(L);break;case i.DOLLY:if(n.enableZoom===!1)return;z(L);break;case i.PAN:if(n.enablePan===!1)return;Q(L);break}}function Et(L){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(L.preventDefault(),n.dispatchEvent(Do),J(L),n.dispatchEvent(fc))}function Ct(L){n.enabled===!1||n.enablePan===!1||ie(L)}function T(L){switch(re(L),M.length){case 1:switch(n.touches.ONE){case Vn.ROTATE:if(n.enableRotate===!1)return;he(),s=i.TOUCH_ROTATE;break;case Vn.PAN:if(n.enablePan===!1)return;ye(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Vn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ne(),s=i.TOUCH_DOLLY_PAN;break;case Vn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;_e(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Do)}function w(L){switch(re(L),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;be(L),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ce(L),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Te(L),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;me(L),n.update();break;default:s=i.NONE}}function k(L){n.enabled!==!1&&L.preventDefault()}function $(L){M.push(L)}function ee(L){delete A[L.pointerId];for(let O=0;O<M.length;O++)if(M[O].pointerId==L.pointerId){M.splice(O,1);return}}function re(L){let O=A[L.pointerId];O===void 0&&(O=new ge,A[L.pointerId]=O),O.set(L.pageX,L.pageY)}function xe(L){let O=L.pointerId===M[0].pointerId?M[1]:M[0];return A[O.pointerId]}n.domElement.addEventListener("contextmenu",k),n.domElement.addEventListener("pointerdown",je),n.domElement.addEventListener("pointercancel",bt),n.domElement.addEventListener("wheel",Et,{passive:!1}),this.update()}};var ct=new go({antialias:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"});document.body.append(ct.domElement);ct.outputEncoding=Be;ct.setPixelRatio(window.devicePixelRatio);var ar=new ls,Dn=new lt(45,1,.1,100);Dn.position.set(2,2,2);Dn.lookAt(ar.position);function lr(){let a=window.innerWidth,e=window.innerHeight;ct.setSize(a,e),Dn.aspect=a/e,Dn.updateProjectionMatrix(),ct.setPixelRatio(window.devicePixelRatio);let t=ct.getPixelRatio();for(let n of dc)n(a,e,t)}var dc=[];function pc(a){dc.push(a)}window.addEventListener("resize",()=>lr());lr();function mc(a=Dn){return new No(a,ct.domElement)}var gc=`
vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

float mod289(float x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
  return mod289(((x*34.0)+1.0)*x);
}

vec3 permute(vec3 x) {
  return mod289(((x*34.0)+1.0)*x);
}

vec2 permute(vec2 x) {
  return mod289(((x*34.0)+1.0)*x);
}

float permute(float x) {
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

float taylorInvSqrt(float r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}
`;var xc=`
vec4 screen(vec4 base, vec4 blend, float opacity) {
  vec4 color = 1. - (1.-base) * (1.-blend);
  color = color * opacity + base * ( 1. - opacity );
  return color;
}

vec3 screen(vec3 base, vec3 blend, float opacity) {
  vec3 color = 1. - (1.-base) * (1.-blend);
  color = color * opacity + base * ( 1. - opacity );
  return color;
}`;var _c=`
#define UI0 1597334673U
#define UI1 3812015801U
#define UI2 uvec2(UI0, UI1)
#define UI3 uvec3(UI0, UI1, 2798796415U)
#define UIF (1.0 / float(0xffffffffU))

vec3 hash33(vec3 p)
{
	uvec3 q = uvec3(ivec3(p)) * UI3;
	q = (q.x ^ q.y ^ q.z)*UI3;
	return -1. + 2. * vec3(q) * UIF;
}

float remap(float x, float a, float b, float c, float d)
{
    return (((x - a) / (b - a)) * (d - c)) + c;
}

// Gradient noise by iq (modified to be tileable)
float gradientNoise(vec3 x, float freq)
{
    // grid
    vec3 p = floor(x);
    vec3 w = fract(x);
    
    // quintic interpolant
    vec3 u = w * w * w * (w * (w * 6. - 15.) + 10.);

    
    // gradients
    vec3 ga = hash33(mod(p + vec3(0., 0., 0.), freq));
    vec3 gb = hash33(mod(p + vec3(1., 0., 0.), freq));
    vec3 gc = hash33(mod(p + vec3(0., 1., 0.), freq));
    vec3 gd = hash33(mod(p + vec3(1., 1., 0.), freq));
    vec3 ge = hash33(mod(p + vec3(0., 0., 1.), freq));
    vec3 gf = hash33(mod(p + vec3(1., 0., 1.), freq));
    vec3 gg = hash33(mod(p + vec3(0., 1., 1.), freq));
    vec3 gh = hash33(mod(p + vec3(1., 1., 1.), freq));
    
    // projections
    float va = dot(ga, w - vec3(0., 0., 0.));
    float vb = dot(gb, w - vec3(1., 0., 0.));
    float vc = dot(gc, w - vec3(0., 1., 0.));
    float vd = dot(gd, w - vec3(1., 1., 0.));
    float ve = dot(ge, w - vec3(0., 0., 1.));
    float vf = dot(gf, w - vec3(1., 0., 1.));
    float vg = dot(gg, w - vec3(0., 1., 1.));
    float vh = dot(gh, w - vec3(1., 1., 1.));
	
    // interpolation
    return va + 
           u.x * (vb - va) + 
           u.y * (vc - va) + 
           u.z * (ve - va) + 
           u.x * u.y * (va - vb - vc + vd) + 
           u.y * u.z * (va - vc - ve + vg) + 
           u.z * u.x * (va - vb - ve + vf) + 
           u.x * u.y * u.z * (-va + vb + vc - vd + ve - vf - vg + vh);
}

// Tileable 3D worley noise
float worleyNoise(vec3 uv, float freq)
{    
    vec3 id = floor(uv);
    vec3 p = fract(uv);
    
    float minDist = 10000.;
    for (float x = -1.; x <= 1.; ++x)
    {
        for(float y = -1.; y <= 1.; ++y)
        {
            for(float z = -1.; z <= 1.; ++z)
            {
                vec3 offset = vec3(x, y, z);
            	vec3 h = hash33(mod(id + offset, vec3(freq))) * .5 + .5;
    			h += offset;
            	vec3 d = p - h;
           		minDist = min(minDist, dot(d, d));
            }
        }
    }
    
    // inverted worley noise
    return 1. - minDist;
}

// Fbm for Perlin noise based on iq's blog
float perlinfbm(vec3 p, float freq, int octaves)
{
    float G = exp2(-.85);
    float amp = 1.;
    float noise = 0.;
    for (int i = 0; i < octaves; ++i)
    {
        noise += amp * gradientNoise(p * freq, freq);
        freq *= 2.;
        amp *= G;
    }
    
    return noise;
}

// Tileable Worley fbm inspired by Andrew Schneider's Real-Time Volumetric Cloudscapes
// chapter in GPU Pro 7.
float worleyFbm(vec3 p, float freq)
{
    return worleyNoise(p*freq, freq) * .625 +
        	 worleyNoise(p*freq*2., freq*2.) * .25 +
        	 worleyNoise(p*freq*4., freq*4.) * .125;
}

float edge(vec3 p, float freq) {
    float d= 0.;
    float up = worleyFbm(p - vec3(0.,d,0.), freq);
    float down = worleyFbm(p- vec3(0.,d,0.), freq);
    float right = worleyFbm(p- vec3(d,0.,0.), freq);
    float left = worleyFbm(p+ vec3(d,0.,0.), freq);
    return (up+down+right+left)/4.;
}
  `;var Mg=Math.PI,r0=2*Mg;function Oo(a,e,t){return Math.min(t,Math.max(e,a))}function cr(a,e,t){return t<=0?a:t>=1?e:a+t*(e-a)}function hi(a,e){return a+Math.random()*(e-a)}var Uo=class{constructor(e){this.colors=e.map(t=>new fe(t))}getAt(e){e=Oo(e,0,1);let t=Math.floor(e*this.colors.length*.9999),n=Oo(t+1,0,this.colors.length-1),i=this.colors[t],s=this.colors[n],o=(e-t/this.colors.length)/(1/this.colors.length),r=new fe;return r.r=cr(i.r,s.r,o),r.g=cr(i.g,s.g,o),r.b=cr(i.b,s.b,o),r}};var vc=`

vec3 rgb2hsv(vec3 c)
{
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

// All components are in the range [0\u20261], including hue.
vec3 hsv2rgb(vec3 c)
{
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

`;var yc=[["#f2ead6","#327172","#2d3e58","#f47e72","#f2cab1"],["#bd1603","#3aa4ac","#fabf55","#b80b01","#a70a01"],["#369d9b","#50a69d","#f08a19","#b00a01","#fcbe8a"],["#720b04","#480d07","#d3e6dd","#fdad6c","#51a79d"],["#480d07","#d2470c","#f6f6e9","#49aab0","#fac25c"],["#a4c3a1","#d44c0d","#8ac7c6","#f9d07f","#480d07"],["#fe8930","#480d07","#b4d9d3","#480d07","#379e9b"],["#028b99","#f8da95","#720b04","#480d07","#d44c0d"],["#480d07","#c5e0d9","#cb3609","#730b04","#fe8326"],["#67ae9e","#d2e6dd","#d8550f","#480d07","#a8d4d0"],["#ee7f1c","#d01a05","#e7540f","#660701","#e81e05"],["#6c0802","#380000","#f7f1ac","#9d1003","#390000"],["#f62f64","#f97698","#b98baf","#a43c62","#9877a8"],["#fddde5","#c2364d","#fa98b2","#be8fb1","#e5a8ba"],["#0654c5","#f8810b","#1a2c73","#d03702","#d03401"],["#0b3481","#f36003","#0d75d5","#e8b396","#0b2a77"],["#a6a387","#739998","#bb530b","#3e4a48","#cd1409"],["#dc6a1c","#6e9695","#b1b4a4","#93afad","#9f9772"],["#3c1711","#63160f","#733833","#492a11","#9f9772"],["#206262","#bb530b","#9f9772","#195d5d","#a8261d"],["#295151","#a12820","#444845","#414947","#511610"],["#356f70","#81332d","#9e2921","#583010","#d9deda"],["#ab4d0c","#2b6969","#db6c1e","#603210","#326e6e"],["#512d11","#b1b4a4","#81150d","#b7bdb3","#bcb09b"],["#8e70a5","#824379","#feebb9","#f54026","#836aa3"],["#ecacbc","#7863a0","#ecacbc","#9a78a8","#f43729"],["#ecacbc","#f76919","#9172a6","#f986a5","#ecacbc"],["#c493b2","#ecacbc","#fcab03","#f87296","#fa99b3"],["#bc8eb0","#923f6d","#5a4a93","#f64e21","#ecacbc"]];function wg(){let a=yc[Math.floor(Math.random()*yc.length)],e=new Uo(a),t=[],n=Math.round(hi(3,12));for(let r=0;r<n;r++){let l=e.getAt(Math.random());t.push(l)}t=t.sort((r,l)=>{let c=new fe;r.getHSL(c);let u=new fe;return l.getHSL(u),c.l-u.l});let i=t[0].clone(),s=new Uint8Array(t.length*4);for(let r=0;r<t.length;r++){let l=t[r];s[r*4]=l.r*255,s[r*4+1]=l.g*255,s[r*4+2]=l.b*255,s[r*4*3]=1*255}let o=new $s(s,t.length,1,ut,wt,void 0,void 0,void 0,We,We);return o.needsUpdate=!0,{bkg:i,gradientTex:o}}var Sg=`precision highp float;

in vec3 position;
in vec3 normal;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat3 normalMatrix;

out vec3 vNormal;
out vec3 vONormal;
out vec3 vPosition;
out vec4 mvPosition;

void main() {
  vONormal = normal;
  vPosition = position;
  vNormal = normalMatrix * normal;
  mvPosition = modelViewMatrix * vec4(position, 1.); 
  gl_Position = projectionMatrix * mvPosition;
}
`,Tg=`precision highp float;

in vec3 vNormal;
in vec3 vPosition;
in vec4 mvPosition;
in vec3 vONormal;

uniform sampler2D gradient;
uniform sampler2D matcapTexture;
uniform float seed;
uniform float scale;
uniform float time;
uniform float epsilon;
uniform float bumpScale;
uniform vec3 bkgColor;
uniform float roughness;

out vec4 color;

${gc}
${_c}
${vc}
${xc}

float fbm(vec3 p, float freq, int start, int end, float noise) {
  float G = exp2(-.85);
  float amp = 1.;
  for (int i = 0; i < start; ++i) {
    freq *= 2.;
    amp *= G;
  }
  for (int i = start; i < end; ++i) {
    noise += amp * gradientNoise(p * freq * vec3(.1, 2., .1), freq);
    freq *= 2.;
    amp *= G;
  }
  return noise;
}

float random(vec3 scale, float seed) {
  return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
}

vec3 random3(vec3 p, in float seed) {
  return vec3(
    random(p, seed),
    random(p + vec3(31, 72, 54), seed),
    random(p + vec3(156, 87, 99), seed)
  );
}

vec3 convert(in vec3 p) {
  return p + perlinfbm(p * vec3(.5, .25, .5) + seed + time, scale * 1., 4);
}

// https://www.ics.uci.edu/~majumder/VC/classes/BEmap.pdf

vec3 normal(in vec3 pos, in float d0, in vec3 n) {
  float e = epsilon;
  float s = bumpScale;

  vec3 pu = cross(n, vec3(0.,1.,0.));
  vec3 p1 = pos + pu * e;
  p1 = convert(p1);
  float du = s * (fbm(p1, 10., 0, 4, 0.) - d0);
  
  vec3 pv = cross(n, p1);
  vec3 p2 = pos + pv * e; 
  p2 = convert(p2);
  float dv = s * (fbm(p2, 10., 0, 4, 0.) - d0);

  vec3 np = n + du * cross(pu, n) + dv * cross(pv, n);
  return normalize(np + roughness * d0 * random3(pos, pos.y * 123222.1212));
}

void main() {

  vec3 eye = normalize(mvPosition.xyz);

  vec3 p = convert(vPosition);

  float c = fbm(p, scale * 10., 0, 2, 0.);
  float c2 = fbm(p, scale * 10., 2, 4, c);
  float c3 = fbm(p, scale * 10., 4, 8, c2);

  vec3 n = normal(vPosition, c3, normalize(vNormal));

  vec3 ld = normalize(vec3(0.,1.,0.));
  float rim = 1.- dot(n, -eye);
  float diffuse = .5 + .5 * dot(n, ld);

  vec3 hue = texture(gradient, vec2(.5 + .5 * c, .5)).xyz;
  vec3 hsv = rgb2hsv(hue);
  hsv.x += .1 * (.5 + .5 * c2);
  hsv.x = mod(hsv.x, 1.);
  hsv.z = .5 + .5 * c3;
  hsv.z += rim;
  hsv.y += rim;
  hue = hsv2rgb(hsv);
  hue += rim;
  color = vec4(hue * diffuse, 1.);

  vec3 r = reflect(eye, n);
  float m = sqrt(8.) * sqrt(r.z+1.);//2. * sqrt( pow( 1., 2. ) + pow( r.y, 2. ) + pow( r.z + 1., 2. ) );
  vec2 vN = r.xy / m + .5;
  vec4 mat = texture(matcapTexture, vN);

  color.rgb = clamp(color.rgb, vec3(0.), vec3(1.));
  color.rgb = mix(color.rgb, bkgColor , pow(rim, 4.));
  color.rgb = screen(color.rgb, mat.rgb, 1.);
}
`,Ag=new ps,Eg=Ag.load("../assets/matcap_1k.jpg"),dn=new Hi({uniforms:{gradient:{value:null},matcapTexture:{value:Eg},epsilon:{value:.001},bkgColor:{value:new fe},bumpScale:{value:.2},scale:{value:1},time:{value:0},seed:{value:null},roughness:{value:0}},vertexShader:Sg,fragmentShader:Tg,glslVersion:jn,side:It});function gs(a){dn.uniforms.scale.value=hi(.75,1.5);let{bkg:e,gradientTex:t}=wg();a.setClearColor(e,1),dn.uniforms.bkgColor.value.copy(e),dn.uniforms.gradient.value=t,dn.uniforms.seed.value=hi(-1e3,1e3),dn.uniforms.epsilon.value=hi(.001,.01),dn.uniforms.epsilon.bumpScale=hi(.1,.2),dn.uniforms.roughness.value=hi(0,.15)}var zo=class extends hn{constructor(e){super(e);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new wc(t)}),this.register(function(t){return new Lc(t)}),this.register(function(t){return new Rc(t)}),this.register(function(t){return new Sc(t)}),this.register(function(t){return new Tc(t)}),this.register(function(t){return new Ac(t)}),this.register(function(t){return new Ec(t)}),this.register(function(t){return new Cc(t)}),this.register(function(t){return new bc(t)}),this.register(function(t){return new Pc(t)})}load(e,t,n,i){let s=this,o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=fn.extractUrlBase(e),this.manager.itemStart(e);let r=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Xi(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},r)}catch(u){r(u)}},n,r)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s,o={},r={};if(typeof e=="string")s=e;else if(fn.decodeText(new Uint8Array(e,0,4))===Ic){try{o[Le.KHR_BINARY_GLTF]=new Nc(e)}catch(h){i&&i(h);return}s=o[Le.KHR_BINARY_GLTF].content}else s=fn.decodeText(new Uint8Array(e));let l=JSON.parse(s);if(l.asset===void 0||l.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Wc(l,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);r[h.name]=h,o[h.name]=!0}if(l.extensionsUsed)for(let u=0;u<l.extensionsUsed.length;++u){let h=l.extensionsUsed[u],f=l.extensionsRequired||[];switch(h){case Le.KHR_MATERIALS_UNLIT:o[h]=new Mc;break;case Le.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:o[h]=new zc;break;case Le.KHR_DRACO_MESH_COMPRESSION:o[h]=new Oc(l,this.dracoLoader);break;case Le.KHR_TEXTURE_TRANSFORM:o[h]=new Uc;break;case Le.KHR_MESH_QUANTIZATION:o[h]=new Fc;break;default:f.indexOf(h)>=0&&r[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(r),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}};function Cg(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}var Le={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"},bc=class{constructor(e){this.parser=e,this.name=Le.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],c,u=new fe(16777215);l.color!==void 0&&u.fromArray(l.color);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Lo(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Co(u),c.distance=h;break;case"spot":c=new Ao(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],r=(s.extensions&&s.extensions[this.name]||{}).light;return r===void 0?null:this._loadLight(r).then(function(l){return n._getNodeRef(t.cache,r,l)})}},Mc=class{constructor(){this.name=Le.KHR_MATERIALS_UNLIT}getMaterialType(){return on}extendParams(e,t,n){let i=[];e.color=new fe(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let o=s.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture))}return Promise.all(i)}},wc=class{constructor(e){this.parser=e,this.name=Le.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let r=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ge(r,r)}return Promise.all(s)}},Sc=class{constructor(e){this.parser=e,this.name=Le.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[];t.sheenColor=new fe(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}},Tc=class{constructor(e){this.parser=e,this.name=Le.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}},Ac=class{constructor(e){this.parser=e,this.name=Le.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||0;let r=o.attenuationColor||[1,1,1];return t.attenuationColor=new fe(r[0],r[1],r[2]),Promise.all(s)}},Ec=class{constructor(e){this.parser=e,this.name=Le.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},Cc=class{constructor(e){this.parser=e,this.name=Le.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let r=o.specularColorFactor||[1,1,1];return t.specularColor=new fe(r[0],r[1],r[2]),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture).then(function(l){l.encoding=Be})),Promise.all(s)}},Lc=class{constructor(e){this.parser=e,this.name=Le.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],o=n.images[s.source],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,o,r)}},Rc=class{constructor(e){this.parser=e,this.name=Le.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],r=i.images[o.source],l=n.textureLoader;if(r.uri){let c=n.options.manager.getHandler(r.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,r,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Pc=class{constructor(e){this.name=Le.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return Promise.all([s,o.ready]).then(function(r){let l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new ArrayBuffer(u*h),p=new Uint8Array(r[0],l,c);return o.decodeGltfBuffer(new Uint8Array(f),u,h,p,i.mode,i.filter),f})}else return null}},Ic="glTF",xs=12,Dc={JSON:1313821514,BIN:5130562},Nc=class{constructor(e){this.name=Le.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,xs);if(this.header={magic:fn.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ic)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let n=this.header.length-xs,i=new DataView(e,xs),s=0;for(;s<n;){let o=i.getUint32(s,!0);s+=4;let r=i.getUint32(s,!0);if(s+=4,r===Dc.JSON){let l=new Uint8Array(e,xs+s,o);this.content=fn.decodeText(l)}else if(r===Dc.BIN){let l=xs+s;this.body=e.slice(l,l+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Oc=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Le.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,r={},l={},c={};for(let u in o){let h=Fo[u]||u.toLowerCase();r[h]=o[u]}for(let u in e.attributes){let h=Fo[u]||u.toLowerCase();if(o[u]!==void 0){let f=n.accessors[e.attributes[u]],p=_s[f.componentType];c[h]=p,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(f){for(let p in f.attributes){let g=f.attributes[p],m=l[p];m!==void 0&&(g.normalized=m)}h(f)},r,c)})})}},Uc=class{constructor(){this.name=Le.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},hr=class extends Wi{constructor(e){super();this.isGLTFSpecularGlossinessMaterial=!0;let t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),n=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),i=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	texelSpecular = sRGBToLinear( texelSpecular );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),s=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),o=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),r={specular:{value:new fe().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=r,this.onBeforeCompile=function(l){for(let c in r)l.uniforms[c]=r[c];l.fragmentShader=l.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",n).replace("#include <roughnessmap_fragment>",i).replace("#include <metalnessmap_fragment>",s).replace("#include <lights_physical_fragment>",o)},Object.defineProperties(this,{specular:{get:function(){return r.specular.value},set:function(l){r.specular.value=l}},specularMap:{get:function(){return r.specularMap.value},set:function(l){r.specularMap.value=l,l?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return r.glossiness.value},set:function(l){r.glossiness.value=l}},glossinessMap:{get:function(){return r.glossinessMap.value},set:function(l){r.glossinessMap.value=l,l?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}},zc=class{constructor(){this.name=Le.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity","refractionRatio"]}getMaterialType(){return hr}extendParams(e,t,n){let i=t.extensions[this.name];e.color=new fe(1,1,1),e.opacity=1;let s=[];if(Array.isArray(i.diffuseFactor)){let o=i.diffuseFactor;e.color.fromArray(o),e.opacity=o[3]}if(i.diffuseTexture!==void 0&&s.push(n.assignTexture(e,"map",i.diffuseTexture)),e.emissive=new fe(0,0,0),e.glossiness=i.glossinessFactor!==void 0?i.glossinessFactor:1,e.specular=new fe(1,1,1),Array.isArray(i.specularFactor)&&e.specular.fromArray(i.specularFactor),i.specularGlossinessTexture!==void 0){let o=i.specularGlossinessTexture;s.push(n.assignTexture(e,"glossinessMap",o)),s.push(n.assignTexture(e,"specularMap",o))}return Promise.all(s)}createMaterial(e){let t=new hr(e);return t.fog=!0,t.color=e.color,t.map=e.map===void 0?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=e.aoMap===void 0?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=1,t.emissiveMap=e.emissiveMap===void 0?null:e.emissiveMap,t.bumpMap=e.bumpMap===void 0?null:e.bumpMap,t.bumpScale=1,t.normalMap=e.normalMap===void 0?null:e.normalMap,t.normalMapType=$i,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=e.specularMap===void 0?null:e.specularMap,t.specular=e.specular,t.glossinessMap=e.glossinessMap===void 0?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=e.envMap===void 0?null:e.envMap,t.envMapIntensity=1,t.refractionRatio=.98,t}},Fc=class{constructor(){this.name=Le.KHR_MESH_QUANTIZATION}},Nn=class extends ri{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}};Nn.prototype.beforeStart_=Nn.prototype.copySampleValue_;Nn.prototype.afterEnd_=Nn.prototype.copySampleValue_;Nn.prototype.interpolate_=function(a,e,t,n){let i=this.resultBuffer,s=this.sampleValues,o=this.valueSize,r=o*2,l=o*3,c=n-e,u=(t-e)/c,h=u*u,f=h*u,p=a*l,g=p-l,m=-2*f+3*h,d=f-h,x=1-m,v=d-h+u;for(let b=0;b!==o;b++){let _=s[g+b+o],M=s[g+b+r]*c,A=s[p+b+o],P=s[p+b]*c;i[b]=x*_+v*M+m*A+d*P}return i};var Lg=new Dt,Bc=class extends Nn{interpolate_(e,t,n,i){let s=super.interpolate_(e,t,n,i);return Lg.fromArray(s).normalize().toArray(s),s}},pn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},_s={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},kc={9728:rt,9729:We,9984:ws,9985:br,9986:Ss,9987:Hn},Vc={33071:et,33648:Ji,10497:Gn},Gc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Fo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},On={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Rg={CUBICSPLINE:void 0,LINEAR:Xn,STEP:bi},Bo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Pg(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new Wi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:xn})),a.DefaultMaterial}function vs(a,e,t){for(let n in t.extensions)a[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ui(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ig(a,e,t){let n=!1,i=!1;for(let r=0,l=e.length;r<l;r++){let c=e[r];if(c.POSITION!==void 0&&(n=!0),c.NORMAL!==void 0&&(i=!0),n&&i)break}if(!n&&!i)return Promise.resolve(a);let s=[],o=[];for(let r=0,l=e.length;r<l;r++){let c=e[r];if(n){let u=c.POSITION!==void 0?t.getDependency("accessor",c.POSITION):a.attributes.position;s.push(u)}if(i){let u=c.NORMAL!==void 0?t.getDependency("accessor",c.NORMAL):a.attributes.normal;o.push(u)}}return Promise.all([Promise.all(s),Promise.all(o)]).then(function(r){let l=r[0],c=r[1];return n&&(a.morphAttributes.position=l),i&&(a.morphAttributes.normal=c),a.morphTargetsRelative=!0,a})}function Dg(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)a.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ng(a){let e=a.extensions&&a.extensions[Le.KHR_DRACO_MESH_COMPRESSION],t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Hc(e.attributes):t=a.indices+":"+Hc(a.attributes)+":"+a.mode,t}function Hc(a){let e="",t=Object.keys(a).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+a[t[n]]+";";return e}function ko(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}var Wc=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Cg,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.textureCache={},this.nodeNamesUsed={},typeof createImageBitmap!="undefined"&&/Firefox/.test(navigator.userAgent)===!1?this.textureLoader=new Ro(this.options.manager):this.textureLoader=new ps(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Xi(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let r={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};vs(s,r,i),ui(r,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(r)})).then(function(){e(r)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){let o=t[i].joints;for(let r=0,l=o.length;r<l;r++)e[o[r]].isBone=!0}for(let i=0,s=e.length;i<s;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),s=(o,r)=>{let l=this.associations.get(o);l!=null&&this.associations.set(r,l);for(let[c,u]of o.children.entries())s(u,r.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this.loadNode(t);break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this.loadAnimation(t);break;case"camera":i=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Le.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,o){n.load(fn.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0)return Promise.resolve(null);let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){let r=o[0],l=Gc[i.type],c=_s[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,m,d;if(p&&p!==h){let x=Math.floor(f/p),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+x+":"+i.count,b=t.cache.get(v);b||(m=new c(r,x*p,i.count*p/u),b=new xo(m,p/u),t.cache.add(v,b)),d=new cs(b,l,f%p/u,g)}else r===null?m=new c(i.count*l):m=new c(r,f,i.count*l),d=new _t(m,l,g);if(i.sparse!==void 0){let x=Gc.SCALAR,v=_s[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,M=new v(o[1],b,i.sparse.count*x),A=new c(o[2],_,i.sparse.count*l);r!==null&&(d=new _t(d.array.slice(),d.itemSize,d.normalized));for(let P=0,y=M.length;P<y;P++){let E=M[P];if(d.setX(E,A[P*l]),l>=2&&d.setY(E,A[P*l+1]),l>=3&&d.setZ(E,A[P*l+2]),l>=4&&d.setW(E,A[P*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return d})}loadTexture(e){let t=this.json,n=this.options,i=t.textures[e],s=t.images[i.source],o=this.textureLoader;if(s.uri){let r=n.manager.getHandler(s.uri);r!==null&&(o=r)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let i=this,s=this.json,o=this.options,r=s.textures[e],l=(t.uri||t.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];let c=self.URL||self.webkitURL,u=t.uri||"",h=!1;if(t.bufferView!==void 0)u=i.getDependency("bufferView",t.bufferView).then(function(p){h=!0;let g=new Blob([p],{type:t.mimeType});return u=c.createObjectURL(g),u});else if(t.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let f=Promise.resolve(u).then(function(p){return new Promise(function(g,m){let d=g;n.isImageBitmapLoader===!0&&(d=function(x){let v=new ft(x);v.needsUpdate=!0,g(v)}),n.load(fn.resolveURL(p,o.path),d,void 0,m)})}).then(function(p){h===!0&&c.revokeObjectURL(u),p.flipY=!1,r.name&&(p.name=r.name);let m=(s.samplers||{})[r.sampler]||{};return p.magFilter=kc[m.magFilter]||We,p.minFilter=kc[m.minFilter]||Hn,p.wrapS=Vc[m.wrapS]||Gn,p.wrapT=Vc[m.wrapT]||Gn,i.associations.set(p,{textures:e}),p}).catch(function(){return console.error("THREE.GLTFLoader: Couldn't load texture",u),null});return this.textureCache[l]=f,f}assignTexture(e,t,n){let i=this;return this.getDependency("texture",n.index).then(function(s){if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),i.extensions[Le.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Le.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let r=i.associations.get(s);s=i.extensions[Le.KHR_TEXTURE_TRANSFORM].extendTexture(s,o),i.associations.set(s,r)}}return e[t]=s,s})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let r="PointsMaterial:"+n.uuid,l=this.cache.get(r);l||(l=new ln,mt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(r,l)),n=l}else if(e.isLine){let r="LineBasicMaterial:"+n.uuid,l=this.cache.get(r);l||(l=new Rn,mt.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(r,l)),n=l}if(i||s||o){let r="ClonedMaterial:"+n.uuid+":";n.isGLTFSpecularGlossinessMaterial&&(r+="specular-glossiness:"),i&&(r+="derivative-tangents:"),s&&(r+="vertex-colors:"),o&&(r+="flat-shading:");let l=this.cache.get(r);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(r,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return Wi}loadMaterial(e){let t=this,n=this.json,i=this.extensions,s=n.materials[e],o,r={},l=s.extensions||{},c=[];if(l[Le.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){let h=i[Le.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];o=h.getMaterialType(),c.push(h.extendParams(r,s,t))}else if(l[Le.KHR_MATERIALS_UNLIT]){let h=i[Le.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(r,s,t))}else{let h=s.pbrMetallicRoughness||{};if(r.color=new fe(1,1,1),r.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;r.color.fromArray(f),r.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(r,"map",h.baseColorTexture)),r.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,r.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(r,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(r,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,r)})))}s.doubleSided===!0&&(r.side=It);let u=s.alphaMode||Bo.OPAQUE;if(u===Bo.BLEND?(r.transparent=!0,r.depthWrite=!1):(r.format=Mr,r.transparent=!1,u===Bo.MASK&&(r.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==on&&(c.push(t.assignTexture(r,"normalMap",s.normalTexture)),r.normalScale=new ge(1,1),s.normalTexture.scale!==void 0)){let h=s.normalTexture.scale;r.normalScale.set(h,h)}return s.occlusionTexture!==void 0&&o!==on&&(c.push(t.assignTexture(r,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(r.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==on&&(r.emissive=new fe().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&o!==on&&c.push(t.assignTexture(r,"emissiveMap",s.emissiveTexture)),Promise.all(c).then(function(){let h;return o===hr?h=i[Le.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(r):h=new o(r),s.name&&(h.name=s.name),h.map&&(h.map.encoding=Be),h.emissiveMap&&(h.emissiveMap.encoding=Be),ui(h,s),t.associations.set(h,{materials:e}),s.extensions&&vs(i,h,s),h})}createUniqueName(e){let t=De.sanitizeNodeName(e||""),n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function s(r){return n[Le.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(r,t).then(function(l){return Xc(l,r,t)})}let o=[];for(let r=0,l=e.length;r<l;r++){let c=e[r],u=Ng(c),h=i[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[Le.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=Xc(new at,c,t),i[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,r=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?Pg(this.cache):this.getDependency("material",o[l].material);r.push(u)}return r.push(t.loadGeometries(o)),Promise.all(r).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,g=u.length;p<g;p++){let m=u[p],d=o[p],x,v=c[p];if(d.mode===pn.TRIANGLES||d.mode===pn.TRIANGLE_STRIP||d.mode===pn.TRIANGLE_FAN||d.mode===void 0)x=s.isSkinnedMesh===!0?new _o(m,v):new nt(m,v),x.isSkinnedMesh===!0&&!x.geometry.attributes.skinWeight.normalized&&x.normalizeSkinWeights(),d.mode===pn.TRIANGLE_STRIP?x.geometry=Yc(x.geometry,Da):d.mode===pn.TRIANGLE_FAN&&(x.geometry=Yc(x.geometry,Cr));else if(d.mode===pn.LINES)x=new Gi(m,v);else if(d.mode===pn.LINE_STRIP)x=new us(m,v);else if(d.mode===pn.LINE_LOOP)x=new yo(m,v);else if(d.mode===pn.POINTS)x=new ii(m,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+d.mode);Object.keys(x.geometry.morphAttributes).length>0&&Dg(x,s),x.name=t.createUniqueName(s.name||"mesh_"+e),ui(x,s),d.extensions&&vs(i,x,d),t.assignFinalMaterial(x),h.push(x)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return h[0];let f=new Vt;t.associations.set(f,{meshes:e});for(let p=0,g=h.length;p<g;p++)f.add(h[p]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new lt(Ua.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ei(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ui(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n={joints:t.joints};return t.inverseBindMatrices===void 0?Promise.resolve(n):this.getDependency("accessor",t.inverseBindMatrices).then(function(i){return n.inverseBindMatrices=i,n})}loadAnimation(e){let n=this.json.animations[e],i=[],s=[],o=[],r=[],l=[];for(let c=0,u=n.channels.length;c<u;c++){let h=n.channels[c],f=n.samplers[h.sampler],p=h.target,g=p.node!==void 0?p.node:p.id,m=n.parameters!==void 0?n.parameters[f.input]:f.input,d=n.parameters!==void 0?n.parameters[f.output]:f.output;i.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",m)),o.push(this.getDependency("accessor",d)),r.push(f),l.push(p)}return Promise.all([Promise.all(i),Promise.all(s),Promise.all(o),Promise.all(r),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],f=c[2],p=c[3],g=c[4],m=[];for(let x=0,v=u.length;x<v;x++){let b=u[x],_=h[x],M=f[x],A=p[x],P=g[x];if(b===void 0)continue;b.updateMatrix(),b.matrixAutoUpdate=!0;let y;switch(On[P.path]){case On.weights:y=ai;break;case On.rotation:y=cn;break;case On.position:case On.scale:default:y=ci;break}let E=b.name?b.name:b.uuid,R=A.interpolation!==void 0?Rg[A.interpolation]:Xn,W=[];On[P.path]===On.weights?b.traverse(function(B){B.morphTargetInfluences&&W.push(B.name?B.name:B.uuid)}):W.push(E);let j=M.array;if(M.normalized){let B=ko(j.constructor),U=new Float32Array(j.length);for(let V=0,Z=j.length;V<Z;V++)U[V]=j[V]*B;j=U}for(let B=0,U=W.length;B<U;B++){let V=new y(W[B]+"."+On[P.path],_.array,j,R);A.interpolation==="CUBICSPLINE"&&(V.createInterpolant=function(K){let G=this instanceof cn?Bc:Nn;return new G(this.times,this.values,this.getValueSize()/3,K)},V.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(V)}}let d=n.name?n.name:"animation_"+e;return new So(d,void 0,m)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(r){if(!!r.isMesh)for(let l=0,c=i.weights.length;l<c;l++)r.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this.extensions,i=this,s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"";return function(){let r=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&r.push(l),s.camera!==void 0&&r.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){r.push(c)}),Promise.all(r)}().then(function(r){let l;if(s.isBone===!0?l=new Ks:r.length>1?l=new Vt:r.length===1?l=r[0]:l=new qe,l!==r[0])for(let c=0,u=r.length;c<u;c++)l.add(r[c]);if(s.name&&(l.userData.name=s.name,l.name=o),ui(l,s),s.extensions&&vs(n,l,s),s.matrix!==void 0){let c=new Ae;c.fromArray(s.matrix),l.applyMatrix4(c)}else s.translation!==void 0&&l.position.fromArray(s.translation),s.rotation!==void 0&&l.quaternion.fromArray(s.rotation),s.scale!==void 0&&l.scale.fromArray(s.scale);return i.associations.has(l)||i.associations.set(l,{}),i.associations.get(l).nodes=e,l})}loadScene(e){let t=this.json,n=this.extensions,i=this.json.scenes[e],s=this,o=new Vt;i.name&&(o.name=s.createUniqueName(i.name)),ui(o,i),i.extensions&&vs(n,o,i);let r=i.nodes||[],l=[];for(let c=0,u=r.length;c<u;c++)l.push(qc(r[c],o,t,s));return Promise.all(l).then(function(){let c=u=>{let h=new Map;for(let[f,p]of s.associations)(f instanceof mt||f instanceof ft)&&h.set(f,p);return u.traverse(f=>{let p=s.associations.get(f);p!=null&&h.set(f,p)}),h};return s.associations=c(o),o})}};function qc(a,e,t,n){let i=t.nodes[a];return n.getDependency("node",a).then(function(s){if(i.skin===void 0)return s;let o;return n.getDependency("skin",i.skin).then(function(r){o=r;let l=[];for(let c=0,u=o.joints.length;c<u;c++)l.push(n.getDependency("node",o.joints[c]));return Promise.all(l)}).then(function(r){return s.traverse(function(l){if(!l.isMesh)return;let c=[],u=[];for(let h=0,f=r.length;h<f;h++){let p=r[h];if(p){c.push(p);let g=new Ae;o.inverseBindMatrices!==void 0&&g.fromArray(o.inverseBindMatrices.array,h*16),u.push(g)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',o.joints[h])}l.bind(new hs(c,u),l.matrixWorld)}),s})}).then(function(s){e.add(s);let o=[];if(i.children){let r=i.children;for(let l=0,c=r.length;l<c;l++){let u=r[l];o.push(qc(u,s,t,n))}}return Promise.all(o)})}function Og(a,e,t){let n=e.attributes,i=new yn;if(n.POSITION!==void 0){let r=t.json.accessors[n.POSITION],l=r.min,c=r.max;if(l!==void 0&&c!==void 0){if(i.set(new C(l[0],l[1],l[2]),new C(c[0],c[1],c[2])),r.normalized){let u=ko(_s[r.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let r=new C,l=new C;for(let c=0,u=s.length;c<u;c++){let h=s[c];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){let m=ko(_s[f.componentType]);l.multiplyScalar(m)}r.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(r)}a.boundingBox=i;let o=new wn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,a.boundingSphere=o}function Xc(a,e,t){let n=e.attributes,i=[];function s(o,r){return t.getDependency("accessor",o).then(function(l){a.setAttribute(r,l)})}for(let o in n){let r=Fo[o]||o.toLowerCase();r in a.attributes||i.push(s(n[o],r))}if(e.indices!==void 0&&!a.index){let o=t.getDependency("accessor",e.indices).then(function(r){a.setIndex(r)});i.push(o)}return ui(a,e),Og(a,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Ig(a,e.targets,t):a})}function Yc(a,e){let t=a.getIndex();if(t===null){let o=[],r=a.getAttribute("position");if(r!==void 0){for(let l=0;l<r.count;l++)o.push(l);a.setIndex(o),t=a.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}let n=t.count-2,i=[];if(e===Cr)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=a.clone();return s.setIndex(i),s}var Ug=/^[og]\s*(.+)?/,zg=/^mtllib /,Fg=/^usemtl /,Bg=/^usemap /,Zc=new C,Vo=new C,jc=new C,Jc=new C,Ot=new C;function kg(){let a={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}let n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(i,s){let o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);let r={index:this.materials.length,name:i||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){let c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(r),r},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(i){let s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),i&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return i&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},n&&n.name&&typeof n.clone=="function"){let i=n.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){let n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){let n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){let n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){let i=this.vertices,s=this.object.geometry.vertices;s.push(i[e+0],i[e+1],i[e+2]),s.push(i[t+0],i[t+1],i[t+2]),s.push(i[n+0],i[n+1],i[n+2])},addVertexPoint:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){let i=this.normals,s=this.object.geometry.normals;s.push(i[e+0],i[e+1],i[e+2]),s.push(i[t+0],i[t+1],i[t+2]),s.push(i[n+0],i[n+1],i[n+2])},addFaceNormal:function(e,t,n){let i=this.vertices,s=this.object.geometry.normals;Zc.fromArray(i,e),Vo.fromArray(i,t),jc.fromArray(i,n),Ot.subVectors(jc,Vo),Jc.subVectors(Zc,Vo),Ot.cross(Jc),Ot.normalize(),s.push(Ot.x,Ot.y,Ot.z),s.push(Ot.x,Ot.y,Ot.z),s.push(Ot.x,Ot.y,Ot.z)},addColor:function(e,t,n){let i=this.colors,s=this.object.geometry.colors;i[e]!==void 0&&s.push(i[e+0],i[e+1],i[e+2]),i[t]!==void 0&&s.push(i[t+0],i[t+1],i[t+2]),i[n]!==void 0&&s.push(i[n+0],i[n+1],i[n+2])},addUV:function(e,t,n){let i=this.uvs,s=this.object.geometry.uvs;s.push(i[e+0],i[e+1]),s.push(i[t+0],i[t+1]),s.push(i[n+0],i[n+1])},addDefaultUV:function(){let e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){let t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,i,s,o,r,l,c){let u=this.vertices.length,h=this.parseVertexIndex(e,u),f=this.parseVertexIndex(t,u),p=this.parseVertexIndex(n,u);if(this.addVertex(h,f,p),this.addColor(h,f,p),r!==void 0&&r!==""){let g=this.normals.length;h=this.parseNormalIndex(r,g),f=this.parseNormalIndex(l,g),p=this.parseNormalIndex(c,g),this.addNormal(h,f,p)}else this.addFaceNormal(h,f,p);if(i!==void 0&&i!==""){let g=this.uvs.length;h=this.parseUVIndex(i,g),f=this.parseUVIndex(s,g),p=this.parseUVIndex(o,g),this.addUV(h,f,p),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";let t=this.vertices.length;for(let n=0,i=e.length;n<i;n++){let s=this.parseVertexIndex(e[n],t);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";let n=this.vertices.length,i=this.uvs.length;for(let s=0,o=e.length;s<o;s++)this.addVertexLine(this.parseVertexIndex(e[s],n));for(let s=0,o=t.length;s<o;s++)this.addUVLine(this.parseUVIndex(t[s],i))}};return a.startObject("",!1),a}var Go=class extends hn{constructor(e){super(e);this.materials=null}load(e,t,n,i){let s=this,o=new Xi(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(r){try{t(s.parse(r))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}setMaterials(e){return this.materials=e,this}parse(e){let t=new kg;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));let n=e.split(`
`),i="",s="",o=0,r=[],l=typeof"".trimLeft=="function";for(let h=0,f=n.length;h<f;h++)if(i=n[h],i=l?i.trimLeft():i.trim(),o=i.length,o!==0&&(s=i.charAt(0),s!=="#"))if(s==="v"){let p=i.split(/\s+/);switch(p[0]){case"v":t.vertices.push(parseFloat(p[1]),parseFloat(p[2]),parseFloat(p[3])),p.length>=7?t.colors.push(parseFloat(p[4]),parseFloat(p[5]),parseFloat(p[6])):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(p[1]),parseFloat(p[2]),parseFloat(p[3]));break;case"vt":t.uvs.push(parseFloat(p[1]),parseFloat(p[2]));break}}else if(s==="f"){let g=i.substr(1).trim().split(/\s+/),m=[];for(let x=0,v=g.length;x<v;x++){let b=g[x];if(b.length>0){let _=b.split("/");m.push(_)}}let d=m[0];for(let x=1,v=m.length-1;x<v;x++){let b=m[x],_=m[x+1];t.addFace(d[0],b[0],_[0],d[1],b[1],_[1],d[2],b[2],_[2])}}else if(s==="l"){let p=i.substring(1).trim().split(" "),g=[],m=[];if(i.indexOf("/")===-1)g=p;else for(let d=0,x=p.length;d<x;d++){let v=p[d].split("/");v[0]!==""&&g.push(v[0]),v[1]!==""&&m.push(v[1])}t.addLineGeometry(g,m)}else if(s==="p"){let g=i.substr(1).trim().split(" ");t.addPointGeometry(g)}else if((r=Ug.exec(i))!==null){let p=(" "+r[0].substr(1).trim()).substr(1);t.startObject(p)}else if(Fg.test(i))t.object.startMaterial(i.substring(7).trim(),t.materialLibraries);else if(zg.test(i))t.materialLibraries.push(i.substring(7).trim());else if(Bg.test(i))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(s==="s"){if(r=i.split(" "),r.length>1){let g=r[1].trim().toLowerCase();t.object.smooth=g!=="0"&&g!=="off"}else t.object.smooth=!0;let p=t.object.currentMaterial();p&&(p.smooth=t.object.smooth)}else{if(i==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+i+'"')}t.finalize();let c=new Vt;if(c.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let h=0,f=t.objects.length;h<f;h++){let p=t.objects[h],g=p.geometry,m=p.materials,d=g.type==="Line",x=g.type==="Points",v=!1;if(g.vertices.length===0)continue;let b=new at;b.setAttribute("position",new Ge(g.vertices,3)),g.normals.length>0&&b.setAttribute("normal",new Ge(g.normals,3)),g.colors.length>0&&(v=!0,b.setAttribute("color",new Ge(g.colors,3))),g.hasUVIndices===!0&&b.setAttribute("uv",new Ge(g.uvs,2));let _=[];for(let A=0,P=m.length;A<P;A++){let y=m[A],E=y.name+"_"+y.smooth+"_"+v,R=t.materials[E];if(this.materials!==null){if(R=this.materials.create(y.name),d&&R&&!(R instanceof Rn)){let W=new Rn;mt.prototype.copy.call(W,R),W.color.copy(R.color),R=W}else if(x&&R&&!(R instanceof ln)){let W=new ln({size:10,sizeAttenuation:!1});mt.prototype.copy.call(W,R),W.color.copy(R.color),W.map=R.map,R=W}}R===void 0&&(d?R=new Rn:x?R=new ln({size:1,sizeAttenuation:!1}):R=new Mo,R.name=y.name,R.flatShading=!y.smooth,R.vertexColors=v,t.materials[E]=R),_.push(R)}let M;if(_.length>1){for(let A=0,P=m.length;A<P;A++){let y=m[A];b.addGroup(y.groupStart,y.groupCount,A)}d?M=new Gi(b,_):x?M=new ii(b,_):M=new nt(b,_)}else d?M=new Gi(b,_[0]):x?M=new ii(b,_[0]):M=new nt(b,_[0]);M.name=p.name,c.add(M)}else if(t.vertices.length>0){let h=new ln({size:1,sizeAttenuation:!1}),f=new at;f.setAttribute("position",new Ge(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(f.setAttribute("color",new Ge(t.colors,3)),h.vertexColors=!0);let p=new ii(f,h);c.add(p)}return c}};function yt(a,e,t){this.x=a,this.y=e,this.z=t}yt.prototype.dot2=function(a,e){return this.x*a+this.y*e};yt.prototype.dot3=function(a,e,t){return this.x*a+this.y*e+this.z*t};var Vg=[new yt(1,1,0),new yt(-1,1,0),new yt(1,-1,0),new yt(-1,-1,0),new yt(1,0,1),new yt(-1,0,1),new yt(1,0,-1),new yt(-1,0,-1),new yt(0,1,1),new yt(0,-1,1),new yt(0,1,-1),new yt(0,-1,-1)],Kc=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],Yt=new Array(512),Yi=new Array(512);function Gg(a){a>0&&a<1&&(a*=65536),a=Math.floor(a),a<256&&(a|=a<<8);for(var e=0;e<256;e++){var t;e&1?t=Kc[e]^a&255:t=Kc[e]^a>>8&255,Yt[e]=Yt[e+256]=t,Yi[e]=Yi[e+256]=Vg[t%12]}}Gg(0);var w0=.5*(Math.sqrt(3)-1),S0=(3-Math.sqrt(3))/6,Hg=1/3,Zt=1/6;function Ho(a,e,t){var n,i,s,o,r=(a+e+t)*Hg,l=Math.floor(a+r),c=Math.floor(e+r),u=Math.floor(t+r),h=(l+c+u)*Zt,f=a-l+h,p=e-c+h,g=t-u+h,m,d,x,v,b,_;f>=p?p>=g?(m=1,d=0,x=0,v=1,b=1,_=0):f>=g?(m=1,d=0,x=0,v=1,b=0,_=1):(m=0,d=0,x=1,v=1,b=0,_=1):p<g?(m=0,d=0,x=1,v=0,b=1,_=1):f<g?(m=0,d=1,x=0,v=0,b=1,_=1):(m=0,d=1,x=0,v=1,b=1,_=0);var M=f-m+Zt,A=p-d+Zt,P=g-x+Zt,y=f-v+2*Zt,E=p-b+2*Zt,R=g-_+2*Zt,W=f-1+3*Zt,j=p-1+3*Zt,B=g-1+3*Zt;l&=255,c&=255,u&=255;var U=Yi[l+Yt[c+Yt[u]]],V=Yi[l+m+Yt[c+d+Yt[u+x]]],Z=Yi[l+v+Yt[c+b+Yt[u+_]]],K=Yi[l+1+Yt[c+1+Yt[u+1]]],G=.6-f*f-p*p-g*g;G<0?n=0:(G*=G,n=G*G*U.dot3(f,p,g));var N=.6-M*M-A*A-P*P;N<0?i=0:(N*=N,i=N*N*V.dot3(M,A,P));var z=.6-y*y-E*E-R*R;z<0?s=0:(z*=z,s=z*z*Z.dot3(y,E,R));var Q=.6-W*W-j*j-B*B;return Q<0?o=0:(Q*=Q,o=Q*Q*K.dot3(W,j,B)),32*(n+i+s+o)}function Wo(a){return`${a.x}:${a.y}:${a.z}`}function $c(a){let e=new Map,t=a.attributes.position.array,n=[];for(let i=0;i<a.attributes.position.count;i++){let s=new C;s.set(t[i*3],t[i*3+1],t[i*3+2]);let o=Wo(s),r=e.get(o);r?n.push(r.id):(e.set(o,{point:s,id:i}),n.push(i))}return a.setIndex(n),a}function Qc(a){let e=new Map,t=a.attributes.position.array;for(let i=0;i<a.attributes.position.count;i++){let s=new C;s.set(t[i*3],t[i*3+1],t[i*3+2]);let o=Wo(s);e.get(o)||e.set(o,{point:s,id:i})}let n=a.index.array;for(let i=0;i<n.length;i++){let s=new C,o=n[i];s.set(t[o*3],t[o*3+1],t[o*3+2]);let r=Wo(s),l=e.get(r);n[i]=l.id}return a}async function qo(a){return new Promise((e,t)=>{new Go().load(a,e,null,t)})}async function Wg(a){return new Promise((e,t)=>{new zo().load(a,e,null,t)})}async function eh(){let e=(await Wg("../assets/suzanne.glb")).scenes[0].children[0].geometry,t=new Ae().makeRotationX(-Math.PI/2);return e.applyMatrix4(t),e.scale(.75,.75,.75),e}async function th(){let e=(await qo("../assets/icosahedron.obj")).children[0].geometry;e.center();let t=.5;return e.applyMatrix4(new Ae().makeScale(t,t,t)),e}async function nh(){let e=(await qo("../assets/dodecahedron.obj")).children[0].geometry;e.center();let t=.6;return e.applyMatrix4(new Ae().makeScale(t,t,t)),e}async function ih(){let e=(await qo("../assets/box.obj")).children[0].geometry;e.center();let t=.6;return e.applyMatrix4(new Ae().makeScale(t,t,t)),e}function sh(){let a=Qc($c(new si(1,30))),e=a.attributes.position.array,t=new C,n=.1,i=1;for(let s=0;s<e.length;s+=3){t.set(e[s],e[s+1],e[s+2]),t.normalize().multiplyScalar(i);let o=n*(Ho(t.x,t.y,t.z)+Ho(2*t.x,2*t.y,2*t.z));t.multiplyScalar(1+o),e[s]=t.x,e[s+1]=t.y,e[s+2]=t.z}return a.scale(.75,.75,.75),a.computeVertexNormals(),a}var Xo=`
precision highp float;

in vec3 position;
in vec2 uv;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

out vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4( position, 1. );
}`;function ur(a,e,t={}){return new Wt(a,e,{wrapS:t.wrapS||et,wrapT:t.wrapT||et,minFilter:t.minFilter||We,magFilter:t.magFilter||We,format:t.format||ut,type:t.type||wt,stencilBuffer:t.stencilBuffer||!1,depthBuffer:t.depthBuffer||!0,samples:t.samples||0})}var fr=class{constructor(e,t={},n){this.shader=e,this.orthoScene=new ls,this.fbo=ur(1,1,t,n),this.orthoCamera=new ei(-1,-1,-1,-1,0,1),this.orthoQuad=new nt(new Fi(2,2),this.shader),this.orthoQuad.scale.set(1,1,1),this.orthoScene.add(this.orthoQuad),this.texture=this.fbo.texture}render(e,t){t||e.setRenderTarget(this.fbo),e.render(this.orthoScene,this.orthoCamera),e.setRenderTarget(null)}setSize(e,t){this.fbo.setSize(e,t),this.orthoQuad.scale.set(e,t,1)}};var rh=`
float vignette(vec2 uv, float boost, float reduction) {
  vec2 position = vUv - .5;
  return boost - length(position) * reduction;
}
`;var Yo=`
float hash1( uint n ) 
{
    // integer hash copied from Hugo Elias
	n = (n << 13U) ^ n;
    n = n * (n * n * 15731U + 789221U) + 1376312589U;
    return float( n & uint(0x7fffffffU))/float(0x7fffffff);
}

float noise(in vec2 uv, in float time) {
  uvec2 p = uvec2(uv);
  return hash1( p.x + 1920U*p.y + (1920U*1080U)*uint(time) );
}
`;var oh=`
vec2 barrelDistortion(vec2 coord, float amt) {
  vec2 cc = coord - 0.5;
  float dist = dot(cc, cc);
  return coord + cc * dist * amt;
}

float sat( float t ){
  return clamp( t, 0.0, 1.0 );
}

float linterp( float t ) {
  return sat( 1.0 - abs( 2.0*t - 1.0 ) );
}

float remap( float t, float a, float b ) {
  return sat( (t - a) / (b - a) );
}

vec4 spectrum_offset( float t ) {
  vec4 ret;
  float lo = step(t,0.5);
  float hi = 1.0-lo;
  float w = linterp( remap( t, 1.0/6.0, 5.0/6.0 ) );
  ret = vec4(lo,1.0,hi, 1.) * vec4(1.0-w, w, 1.0-w, 1.);
  return pow( ret, vec4(1.0/2.2) );
}

const float max_distort = 2.2;
const int num_iter = 8;
const float reci_num_iter_f = 1.0 / float(num_iter);

vec4 chromaticAberration(sampler2D inputTexture, vec2 uv, float amount, vec2 dir) {
  vec4 sumcol = vec4(0.0);
  vec4 sumw = vec4(0.0);
  for ( int i=0; i<num_iter;++i ) {
    float t = float(i) * reci_num_iter_f;
    vec4 w = spectrum_offset( t );
    sumw += w;
    sumcol += w * texture(inputTexture, barrelDistortion(uv, amount * max_distort*t ) );
  }
  return sumcol / sumw;
}
`;var qg=`
precision highp float;

uniform sampler2D inputTexture;

uniform float vignetteBoost;
uniform float vignetteReduction;

uniform float time;

in vec2 vUv;

out vec4 fragColor;

${rh}

${Yo}

void main() {
  vec4 color = texture(inputTexture, vUv);
  fragColor = color;
  fragColor *= vignette(vUv, vignetteBoost, vignetteReduction);
  fragColor += color.a * .01 * noise(gl_FragCoord.xy, time/100.);
  fragColor.a = 1.;
}
`,Xg=`precision highp float;

uniform sampler2D inputTexture;
uniform float time;

in vec2 vUv;

out vec4 fragColor;

${oh}
${Yo}

void main() {
  vec2 uv = .8 * (vUv - .5) + .5;
  fragColor = chromaticAberration(inputTexture, uv, .1, (vUv-.5) );
  fragColor += .05 * noise(gl_FragCoord.xy, time/100.);
  fragColor.a = 1.;
}`,Zo=class{constructor(e,t={}){this.renderer=e,this.colorFBO=ur(1,1,{samples:4}),this.finalShader=new Hi({uniforms:{vignetteBoost:{value:t.vignetteBoost||1.3},vignetteReduction:{value:t.vignetteReduction||1.2},inputTexture:{value:null},blur0Texture:{value:null},blur1Texture:{value:null},blur2Texture:{value:null},blur3Texture:{value:null},blur4Texture:{value:null},time:{value:0}},vertexShader:Xo,fragmentShader:qg,glslVersion:jn}),this.finalPass=new fr(this.finalShader,{format:ut,type:wt,minFilter:We,magFilter:We,wrapS:et,wrapT:et});let n=new Hi({uniforms:{inputTexture:{value:this.finalPass.texture},time:{value:0}},vertexShader:Xo,fragmentShader:Xg,glslVersion:jn});this.rgbPass=new fr(n)}setSize(e,t,n){let i=e*n,s=t*n;this.colorFBO.setSize(i,s),this.finalPass.setSize(i,s),this.rgbPass.setSize(i,s)}render(e,t){this.renderer.setRenderTarget(this.colorFBO),this.renderer.render(e,t),this.renderer.setRenderTarget(null),this.finalPass.shader.uniforms.inputTexture.value=this.colorFBO.texture,this.finalPass.render(this.renderer),this.rgbPass.render(this.renderer,!0)}};var ah=new Zo(ct);Dn.position.set(0,0,1).setLength(4);var nx=mc(),Un,zn;async function Yg(){gs(ct),zn=await Promise.all([nh(),th(),ih(),sh(),eh(),new si(.75,10),new ds(.5,.15,200,40),new fs(.5,.2,200,40)]),Un=new nt(zn[0],dn),Un.rotation.set(.1,0,.2),ar.add(Un),ch()}var jo=0,lh=performance.now();function ch(){let a=performance.now(),e=a-lh;lh=a,ys&&(jo+=e),Un.rotation.y=jo/1e4,Un.material.uniforms.time.value=jo/1e5,ah.render(ar,Dn),ct.setAnimationLoop(ch)}function hh(){ct.domElement.webkitRequestFullscreen?ct.domElement.webkitRequestFullscreen():ct.domElement.requestFullscreen()}function uh(){Un.geometry=zn[Math.floor(Math.random()*zn.length)],gs(ct)}var ys=!0;window.addEventListener("keydown",a=>{a.code==="KeyR"&&uh(),a.code==="KeyS"&&(Un.geometry=zn[Math.floor(Math.random()*zn.length)]),a.code==="KeyM"&&gs(ct),a.code==="Space"&&(ys=!ys),a.code==="KeyF"&&hh()});document.querySelector("#randomizeShapeBtn").addEventListener("click",a=>{Un.geometry=zn[Math.floor(Math.random()*zn.length)]});document.querySelector("#randomizeMaterialBtn").addEventListener("click",a=>{gs(ct)});document.querySelector("#randomizeAllBtn").addEventListener("click",a=>{uh()});document.querySelector("#pauseBtn").addEventListener("click",a=>{ys=!ys});document.querySelector("#fullscreenBtn").addEventListener("click",a=>{hh()});ct.setClearColor(1052688,1);function Zg(a,e,t){ah.setSize(a,e,t)}pc(Zg);lr();Yg();
/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
