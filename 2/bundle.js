var ws="145",_n={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},yn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ml=0,kr=1,gl=2;var Vr=1,xl=2,pi=3,Nn=0,Tt=1,Ot=2,on=0,On=1,Gr=2,Hr=3,Wr=4,vl=5,Un=100,_l=101,yl=102,qr=103,Xr=104,bl=200,Ml=201,wl=202,Sl=203,Yr=204,Zr=205,Tl=206,Al=207,El=208,Cl=209,Pl=210,Ll=0,Rl=1,Il=2,Ss=3,Dl=4,zl=5,Nl=6,Ol=7,Jr=0,Ul=1,Fl=2,qt=0,Bl=1,kl=2,Vl=3,Gl=4,Hl=5,$r=300,Fn=301,Bn=302,Ts=303,As=304,zi=306,kn=1e3,Je=1001,Es=1002,ot=1003,Kr=1004;var jr=1005;var Ue=1006,Wl=1007;var Ni=1008;var At=1009,ql=1010,Xl=1011,Qr=1012,Yl=1013,bn=1014,Xt=1015,mi=1016,Zl=1017,Jl=1018,Vn=1020,$l=1021,Kl=1022,He=1023,jl=1024,Ql=1025,Mn=1026,Gn=1027,ec=1028,tc=1029,nc=1030,ic=1031,sc=1033,Cs=33776,Ps=33777,Ls=33778,Rs=33779,eo=35840,to=35841,no=35842,io=35843,rc=36196,so=37492,ro=37496,oo=37808,ao=37809,lo=37810,co=37811,ho=37812,uo=37813,fo=37814,po=37815,mo=37816,go=37817,xo=37818,vo=37819,_o=37820,yo=37821,bo=36492;var Oi=2300,Ui=2301,Is=2302,Mo=2400,wo=2401,So=2402;var wn=3e3,Fe=3001,oc=3200,ac=3201,lc=0,cc=1;var Yt="srgb",Sn="srgb-linear";var Ds=7680;var hc=519,To=35044;var Zt="300 es",zs=1035,Jt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}},at=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ns=Math.PI/180,Ao=180/Math.PI;function gi(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(at[r&255]+at[r>>8&255]+at[r>>16&255]+at[r>>24&255]+"-"+at[e&255]+at[e>>8&255]+"-"+at[e>>16&15|64]+at[e>>24&255]+"-"+at[t&63|128]+at[t>>8&255]+"-"+at[t>>16&255]+at[t>>24&255]+at[n&255]+at[n>>8&255]+at[n>>16&255]+at[n>>24&255]).toLowerCase()}function ht(r,e,t){return Math.max(e,Math.min(t,r))}function uc(r,e){return(r%e+e)%e}function Os(r,e,t){return(1-t)*r+t*e}function Eo(r){return(r&r-1)===0&&r!==0}function Us(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Fi(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function gt(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var fe=class{constructor(e=0,t=0){fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},xt=class{constructor(){xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],f=n[7],d=n[2],m=n[5],g=n[8],p=i[0],u=i[3],_=i[6],y=i[1],S=i[4],v=i[7],w=i[2],C=i[5],I=i[8];return s[0]=a*p+o*y+c*w,s[3]=a*u+o*S+c*C,s[6]=a*_+o*v+c*I,s[1]=l*p+h*y+f*w,s[4]=l*u+h*S+f*C,s[7]=l*_+h*v+f*I,s[2]=d*p+m*y+g*w,s[5]=d*u+m*S+g*C,s[8]=d*_+m*v+g*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+i*s*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=h*a-o*l,d=o*c-h*s,m=l*s-a*c,g=t*f+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let p=1/g;return e[0]=f*p,e[1]=(i*l-h*n)*p,e[2]=(o*n-i*a)*p,e[3]=d*p,e[4]=(h*t-i*c)*p,e[5]=(i*s-o*t)*p,e[6]=m*p,e[7]=(n*c-l*t)*p,e[8]=(a*t-n*s)*p,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){let t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],a=i[3],o=i[6],c=i[1],l=i[4],h=i[7];return i[0]=t*s+n*c,i[3]=t*a+n*l,i[6]=t*o+n*h,i[1]=-n*s+t*c,i[4]=-n*a+t*l,i[7]=-n*o+t*h,this}translate(e,t){let n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};function Co(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Bi(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Tn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ki(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Fs={[Yt]:{[Sn]:Tn},[Sn]:{[Yt]:ki}},Ct={legacyMode:!0,get workingColorSpace(){return Sn},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(Fs[e]&&Fs[e][t]!==void 0){let n=Fs[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},Po={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$e={r:0,g:0,b:0},Pt={h:0,s:0,l:0},Vi={h:0,s:0,l:0};function Bs(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function Gi(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}var Oe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Sn){return this.r=e,this.g=t,this.b=n,Ct.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Sn){if(e=uc(e,1),t=ht(t,0,1),n=ht(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Bs(a,s,e+1/3),this.g=Bs(a,s,e),this.b=Bs(a,s,e-1/3)}return Ct.toWorkingColorSpace(this,i),this}setStyle(e,t=Yt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Ct.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Ct.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){let c=parseFloat(s[1])/360,l=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(c,l,h,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Ct.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Ct.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Yt){let n=Po[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tn(e.r),this.g=Tn(e.g),this.b=Tn(e.b),this}copyLinearToSRGB(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return Ct.fromWorkingColorSpace(Gi(this,$e),e),ht($e.r*255,0,255)<<16^ht($e.g*255,0,255)<<8^ht($e.b*255,0,255)<<0}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Sn){Ct.fromWorkingColorSpace(Gi(this,$e),t);let n=$e.r,i=$e.g,s=$e.b,a=Math.max(n,i,s),o=Math.min(n,i,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(i-s)/f+(i<s?6:0);break;case i:c=(s-n)/f+2;break;case s:c=(n-i)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Sn){return Ct.fromWorkingColorSpace(Gi(this,$e),t),e.r=$e.r,e.g=$e.g,e.b=$e.b,e}getStyle(e=Yt){return Ct.fromWorkingColorSpace(Gi(this,$e),e),e!==Yt?`color(${e} ${$e.r} ${$e.g} ${$e.b})`:`rgb(${$e.r*255|0},${$e.g*255|0},${$e.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Pt),Pt.h+=e,Pt.s+=t,Pt.l+=n,this.setHSL(Pt.h,Pt.s,Pt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pt),e.getHSL(Vi);let n=Os(Pt.h,Vi.h,t),i=Os(Pt.s,Vi.s,t),s=Os(Pt.l,Vi.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};Oe.NAMES=Po;var Hn,ks=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Hn===void 0&&(Hn=Bi("canvas")),Hn.width=e.width,Hn.height=e.height;let n=Hn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Hn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Bi("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Tn(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Tn(t[n]/255)*255):t[n]=Tn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Vs=class{constructor(e=null){this.isSource=!0,this.uuid=gi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Gs(i[a].image)):s.push(Gs(i[a]))}else s=Gs(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function Gs(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?ks.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var dc=0,vt=class extends Jt{constructor(e=vt.DEFAULT_IMAGE,t=vt.DEFAULT_MAPPING,n=Je,i=Je,s=Ue,a=Ni,o=He,c=At,l=1,h=wn){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:dc++}),this.uuid=gi(),this.name="",this.source=new Vs(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$r)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kn:e.x=e.x-Math.floor(e.x);break;case Je:e.x=e.x<0?0:1;break;case Es:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kn:e.y=e.y-Math.floor(e.y);break;case Je:e.y=e.y<0?0:1;break;case Es:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}};vt.DEFAULT_IMAGE=null;vt.DEFAULT_MAPPING=$r;var Qe=class{constructor(e=0,t=0,n=0,i=1){Qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,a=.01,o=.1,c=e.elements,l=c[0],h=c[4],f=c[8],d=c[1],m=c[5],g=c[9],p=c[2],u=c[6],_=c[10];if(Math.abs(h-d)<a&&Math.abs(f-p)<a&&Math.abs(g-u)<a){if(Math.abs(h+d)<o&&Math.abs(f+p)<o&&Math.abs(g+u)<o&&Math.abs(l+m+_-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let S=(l+1)/2,v=(m+1)/2,w=(_+1)/2,C=(h+d)/4,I=(f+p)/4,x=(g+u)/4;return S>v&&S>w?S<a?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=C/n,s=I/n):v>w?v<a?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=C/i,s=x/i):w<a?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=I/s,i=x/s),this.set(n,i,s,t),this}let y=Math.sqrt((u-g)*(u-g)+(f-p)*(f-p)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(u-g)/y,this.y=(f-p)/y,this.z=(d-h)/y,this.w=Math.acos((l+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ut=class extends Jt{constructor(e,t,n={}){super();this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);let i={width:e,height:t,depth:1};this.texture=new vt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ue,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Vs(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hs=class extends vt{constructor(e=null,t=1,n=1,i=1){super(null);this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ot,this.minFilter=ot,this.wrapR=Je,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Lo=class extends vt{constructor(e=null,t=1,n=1,i=1){super(null);this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ot,this.minFilter=ot,this.wrapR=Je,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ft=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],f=n[i+3],d=s[a+0],m=s[a+1],g=s[a+2],p=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=p;return}if(f!==p||c!==d||l!==m||h!==g){let u=1-o,_=c*d+l*m+h*g+f*p,y=_>=0?1:-1,S=1-_*_;if(S>Number.EPSILON){let w=Math.sqrt(S),C=Math.atan2(w,_*y);u=Math.sin(u*C)/w,o=Math.sin(o*C)/w}let v=o*y;if(c=c*u+d*v,l=l*u+m*v,h=h*u+g*v,f=f*u+p*v,u===1-o){let w=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=w,l*=w,h*=w,f*=w}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],f=s[a],d=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+h*f+c*m-l*d,e[t+1]=c*g+h*d+l*f-o*m,e[t+2]=l*g+h*m+o*d-c*f,e[t+3]=h*g-o*f-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),f=o(s/2),d=c(n/2),m=c(i/2),g=c(s/2);switch(a){case"XYZ":this._x=d*h*f+l*m*g,this._y=l*m*f-d*h*g,this._z=l*h*g+d*m*f,this._w=l*h*f-d*m*g;break;case"YXZ":this._x=d*h*f+l*m*g,this._y=l*m*f-d*h*g,this._z=l*h*g-d*m*f,this._w=l*h*f+d*m*g;break;case"ZXY":this._x=d*h*f-l*m*g,this._y=l*m*f+d*h*g,this._z=l*h*g+d*m*f,this._w=l*h*f-d*m*g;break;case"ZYX":this._x=d*h*f-l*m*g,this._y=l*m*f+d*h*g,this._z=l*h*g-d*m*f,this._w=l*h*f+d*m*g;break;case"YZX":this._x=d*h*f+l*m*g,this._y=l*m*f+d*h*g,this._z=l*h*g-d*m*f,this._w=l*h*f-d*m*g;break;case"XZY":this._x=d*h*f-l*m*g,this._y=l*m*f-d*h*g,this._z=l*h*g+d*m*f,this._w=l*h*f+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],f=t[10],d=n+o+f;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(a-i)*m}else if(n>o&&n>f){let m=2*Math.sqrt(1+n-o-f);this._w=(h-c)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(s+l)/m}else if(o>f){let m=2*Math.sqrt(1+o-n-f);this._w=(s-l)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+f-n-o);this._w=(a-i)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-s*c,this._y=i*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let c=1-o*o;if(c<=Number.EPSILON){let m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),f=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ro.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ro.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=c*t+a*i-o*n,h=c*n+o*t-s*i,f=c*i+s*n-a*t,d=-s*t-a*n-o*i;return this.x=l*c+d*-s+h*-o-f*-a,this.y=h*c+d*-a+f*-s-l*-o,this.z=f*c+d*-o+l*-a-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ws.copy(this).projectOnVector(e),this.sub(Ws)}reflect(e){return this.sub(Ws.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ws=new L,Ro=new Ft,Wn=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let c=0,l=e.length;c<l;c+=3){let h=e[c],f=e[c+1],d=e[c+2];h<t&&(t=h),f<n&&(n=f),d<i&&(i=d),h>s&&(s=h),f>a&&(a=f),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let c=0,l=e.count;c<l;c++){let h=e.getX(c),f=e.getY(c),d=e.getZ(c);h<t&&(t=h),f<n&&(n=f),d<i&&(i=d),h>s&&(s=h),f>a&&(a=f),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=An.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){let s=n.attributes.position;for(let a=0,o=s.count;a<o;a++)An.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(An)}else n.boundingBox===null&&n.computeBoundingBox(),qs.copy(n.boundingBox),qs.applyMatrix4(e.matrixWorld),this.union(qs);let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xi),Hi.subVectors(this.max,xi),qn.subVectors(e.a,xi),Xn.subVectors(e.b,xi),Yn.subVectors(e.c,xi),an.subVectors(Xn,qn),ln.subVectors(Yn,Xn),En.subVectors(qn,Yn);let t=[0,-an.z,an.y,0,-ln.z,ln.y,0,-En.z,En.y,an.z,0,-an.x,ln.z,0,-ln.x,En.z,0,-En.x,-an.y,an.x,0,-ln.y,ln.x,0,-En.y,En.x,0];return!Xs(t,qn,Xn,Yn,Hi)||(t=[1,0,0,0,1,0,0,0,1],!Xs(t,qn,Xn,Yn,Hi))?!1:(Wi.crossVectors(an,ln),t=[Wi.x,Wi.y,Wi.z],Xs(t,qn,Xn,Yn,Hi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return An.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(An).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($t[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$t[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$t[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$t[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$t[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$t[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$t[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$t[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($t),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},$t=[new L,new L,new L,new L,new L,new L,new L,new L],An=new L,qs=new Wn,qn=new L,Xn=new L,Yn=new L,an=new L,ln=new L,En=new L,xi=new L,Hi=new L,Wi=new L,Cn=new L;function Xs(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Cn.fromArray(r,s);let o=i.x*Math.abs(Cn.x)+i.y*Math.abs(Cn.y)+i.z*Math.abs(Cn.z),c=e.dot(Cn),l=t.dot(Cn),h=n.dot(Cn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var fc=new Wn,Io=new L,qi=new L,Ys=new L,Xi=class{constructor(e=new L,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):fc.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ys.subVectors(e,this.center);let t=Ys.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(Ys.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?qi.set(0,0,1).multiplyScalar(e.radius):qi.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Io.copy(e.center).add(qi)),this.expandByPoint(Io.copy(e.center).sub(qi)),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Kt=new L,Zs=new L,Yi=new L,cn=new L,Js=new L,Zi=new L,$s=new L,Ks=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Kt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kt.copy(this.direction).multiplyScalar(t).add(this.origin),Kt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Zs.copy(e).add(t).multiplyScalar(.5),Yi.copy(t).sub(e).normalize(),cn.copy(this.origin).sub(Zs);let s=e.distanceTo(t)*.5,a=-this.direction.dot(Yi),o=cn.dot(this.direction),c=-cn.dot(Yi),l=cn.lengthSq(),h=Math.abs(1-a*a),f,d,m,g;if(h>0)if(f=a*c-o,d=a*o-c,g=s*h,f>=0)if(d>=-g)if(d<=g){let p=1/h;f*=p,d*=p,m=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+d*(d+2*c)+l);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),i&&i.copy(Yi).multiplyScalar(d).add(Zs),m}intersectSphere(e,t){Kt.subVectors(e.center,this.origin);let n=Kt.dot(this.direction),i=Kt.dot(Kt)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,c=n+a;return o<0&&c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>i||((s>n||n!==n)&&(n=s),(a<i||i!==i)&&(i=a),f>=0?(o=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Kt)!==null}intersectTriangle(e,t,n,i,s){Js.subVectors(t,e),Zi.subVectors(n,e),$s.crossVectors(Js,Zi);let a=this.direction.dot($s),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;cn.subVectors(this.origin,e);let c=o*this.direction.dot(Zi.crossVectors(cn,Zi));if(c<0)return null;let l=o*this.direction.dot(Js.cross(cn));if(l<0||c+l>a)return null;let h=-o*cn.dot($s);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},et=class{constructor(){et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,a,o,c,l,h,f,d,m,g,p,u){let _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=a,_[9]=o,_[13]=c,_[2]=l,_[6]=h,_[10]=f,_[14]=d,_[3]=m,_[7]=g,_[11]=p,_[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new et().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Zn.setFromMatrixColumn(e,0).length(),s=1/Zn.setFromMatrixColumn(e,1).length(),a=1/Zn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let d=a*h,m=a*f,g=o*h,p=o*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=m+g*l,t[5]=d-p*l,t[9]=-o*c,t[2]=p-d*l,t[6]=g+m*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,m=c*f,g=l*h,p=l*f;t[0]=d+p*o,t[4]=g*o-m,t[8]=a*l,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=m*o-g,t[6]=p+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,m=c*f,g=l*h,p=l*f;t[0]=d-p*o,t[4]=-a*f,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*h,t[9]=p-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,m=a*f,g=o*h,p=o*f;t[0]=c*h,t[4]=g*l-m,t[8]=d*l+p,t[1]=c*f,t[5]=p*l+d,t[9]=m*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,m=a*l,g=o*c,p=o*l;t[0]=c*h,t[4]=p-d*f,t[8]=g*f+m,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=m*f+g,t[10]=d-p*f}else if(e.order==="XZY"){let d=a*c,m=a*l,g=o*c,p=o*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=d*f+p,t[5]=a*h,t[9]=m*f-g,t[2]=g*f-m,t[6]=o*h,t[10]=p*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pc,e,mc)}lookAt(e,t,n){let i=this.elements;return _t.subVectors(e,t),_t.lengthSq()===0&&(_t.z=1),_t.normalize(),hn.crossVectors(n,_t),hn.lengthSq()===0&&(Math.abs(n.z)===1?_t.x+=1e-4:_t.z+=1e-4,_t.normalize(),hn.crossVectors(n,_t)),hn.normalize(),Ji.crossVectors(_t,hn),i[0]=hn.x,i[4]=Ji.x,i[8]=_t.x,i[1]=hn.y,i[5]=Ji.y,i[9]=_t.y,i[2]=hn.z,i[6]=Ji.z,i[10]=_t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],f=n[5],d=n[9],m=n[13],g=n[2],p=n[6],u=n[10],_=n[14],y=n[3],S=n[7],v=n[11],w=n[15],C=i[0],I=i[4],x=i[8],A=i[12],R=i[1],Y=i[5],j=i[9],V=i[13],U=i[2],q=i[6],Z=i[10],K=i[14],H=i[3],N=i[7],F=i[11],te=i[15];return s[0]=a*C+o*R+c*U+l*H,s[4]=a*I+o*Y+c*q+l*N,s[8]=a*x+o*j+c*Z+l*F,s[12]=a*A+o*V+c*K+l*te,s[1]=h*C+f*R+d*U+m*H,s[5]=h*I+f*Y+d*q+m*N,s[9]=h*x+f*j+d*Z+m*F,s[13]=h*A+f*V+d*K+m*te,s[2]=g*C+p*R+u*U+_*H,s[6]=g*I+p*Y+u*q+_*N,s[10]=g*x+p*j+u*Z+_*F,s[14]=g*A+p*V+u*K+_*te,s[3]=y*C+S*R+v*U+w*H,s[7]=y*I+S*Y+v*q+w*N,s[11]=y*x+S*j+v*Z+w*F,s[15]=y*A+S*V+v*K+w*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],f=e[6],d=e[10],m=e[14],g=e[3],p=e[7],u=e[11],_=e[15];return g*(+s*c*f-i*l*f-s*o*d+n*l*d+i*o*m-n*c*m)+p*(+t*c*m-t*l*d+s*a*d-i*a*m+i*l*h-s*c*h)+u*(+t*l*f-t*o*m-s*a*f+n*a*m+s*o*h-n*l*h)+_*(-i*o*h-t*c*f+t*o*d+i*a*f-n*a*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=e[9],d=e[10],m=e[11],g=e[12],p=e[13],u=e[14],_=e[15],y=f*u*l-p*d*l+p*c*m-o*u*m-f*c*_+o*d*_,S=g*d*l-h*u*l-g*c*m+a*u*m+h*c*_-a*d*_,v=h*p*l-g*f*l+g*o*m-a*p*m-h*o*_+a*f*_,w=g*f*c-h*p*c-g*o*d+a*p*d+h*o*u-a*f*u,C=t*y+n*S+i*v+s*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/C;return e[0]=y*I,e[1]=(p*d*s-f*u*s-p*i*m+n*u*m+f*i*_-n*d*_)*I,e[2]=(o*u*s-p*c*s+p*i*l-n*u*l-o*i*_+n*c*_)*I,e[3]=(f*c*s-o*d*s-f*i*l+n*d*l+o*i*m-n*c*m)*I,e[4]=S*I,e[5]=(h*u*s-g*d*s+g*i*m-t*u*m-h*i*_+t*d*_)*I,e[6]=(g*c*s-a*u*s-g*i*l+t*u*l+a*i*_-t*c*_)*I,e[7]=(a*d*s-h*c*s+h*i*l-t*d*l-a*i*m+t*c*m)*I,e[8]=v*I,e[9]=(g*f*s-h*p*s-g*n*m+t*p*m+h*n*_-t*f*_)*I,e[10]=(a*p*s-g*o*s+g*n*l-t*p*l-a*n*_+t*o*_)*I,e[11]=(h*o*s-a*f*s-h*n*l+t*f*l+a*n*m-t*o*m)*I,e[12]=w*I,e[13]=(h*p*i-g*f*i+g*n*d-t*p*d-h*n*u+t*f*u)*I,e[14]=(g*o*i-a*p*i-g*n*c+t*p*c+a*n*u-t*o*u)*I,e[15]=(a*f*i-h*o*i+h*n*c-t*f*c-a*n*d+t*o*d)*I,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,f=o+o,d=s*l,m=s*h,g=s*f,p=a*h,u=a*f,_=o*f,y=c*l,S=c*h,v=c*f,w=n.x,C=n.y,I=n.z;return i[0]=(1-(p+_))*w,i[1]=(m+v)*w,i[2]=(g-S)*w,i[3]=0,i[4]=(m-v)*C,i[5]=(1-(d+_))*C,i[6]=(u+y)*C,i[7]=0,i[8]=(g+S)*I,i[9]=(u-y)*I,i[10]=(1-(d+p))*I,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=Zn.set(i[0],i[1],i[2]).length(),a=Zn.set(i[4],i[5],i[6]).length(),o=Zn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Lt.copy(this);let l=1/s,h=1/a,f=1/o;return Lt.elements[0]*=l,Lt.elements[1]*=l,Lt.elements[2]*=l,Lt.elements[4]*=h,Lt.elements[5]*=h,Lt.elements[6]*=h,Lt.elements[8]*=f,Lt.elements[9]*=f,Lt.elements[10]*=f,t.setFromRotationMatrix(Lt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a){let o=this.elements,c=2*s/(t-e),l=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i),d=-(a+s)/(a-s),m=-2*a*s/(a-s);return o[0]=c,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=l,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,a){let o=this.elements,c=1/(t-e),l=1/(n-i),h=1/(a-s),f=(t+e)*c,d=(n+i)*l,m=(a+s)*h;return o[0]=2*c,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*l,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Zn=new L,Lt=new et,pc=new L(0,0,0),mc=new L(1,1,1),hn=new L,Ji=new L,_t=new L,Do=new et,zo=new Ft,Jn=class{constructor(e=0,t=0,n=0,i=Jn.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],f=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ht(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Do.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Do,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zo.setFromEuler(this),this.setFromQuaternion(zo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}};Jn.DefaultOrder="XYZ";Jn.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];var $i=class{constructor(){this.mask=1|0}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=4294967295|0}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},gc=0,No=new L,$n=new Ft,jt=new et,Ki=new L,vi=new L,xc=new L,vc=new Ft,Oo=new L(1,0,0),Uo=new L(0,1,0),Fo=new L(0,0,1),_c={type:"added"},Bo={type:"removed"},ut=class extends Jt{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:gc++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ut.DefaultUp.clone();let e=new L,t=new Jn,n=new Ft,i=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new et},normalMatrix:{value:new xt}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=ut.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ut.DefaultMatrixWorldAutoUpdate,this.layers=new $i,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $n.setFromAxisAngle(e,t),this.quaternion.multiply($n),this}rotateOnWorldAxis(e,t){return $n.setFromAxisAngle(e,t),this.quaternion.premultiply($n),this}rotateX(e){return this.rotateOnAxis(Oo,e)}rotateY(e){return this.rotateOnAxis(Uo,e)}rotateZ(e){return this.rotateOnAxis(Fo,e)}translateOnAxis(e,t){return No.copy(e).applyQuaternion(this.quaternion),this.position.add(No.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Oo,e)}translateY(e){return this.translateOnAxis(Uo,e)}translateZ(e){return this.translateOnAxis(Fo,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(jt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ki.copy(e):Ki.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),vi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jt.lookAt(vi,Ki,this.up):jt.lookAt(Ki,vi,this.up),this.quaternion.setFromRotationMatrix(jt),i&&(jt.extractRotation(i.matrixWorld),$n.setFromRotationMatrix(jt),this.quaternion.premultiply($n.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(_c)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bo)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){let t=this.children[e];t.parent=null,t.dispatchEvent(Bo)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),jt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jt.multiply(e.parent.matrixWorld)),e.applyMatrix4(jt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vi,e,xc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vi,vc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++){let o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};ut.DefaultUp=new L(0,1,0);ut.DefaultMatrixAutoUpdate=!0;ut.DefaultMatrixWorldAutoUpdate=!0;var Rt=new L,Qt=new L,js=new L,en=new L,Kn=new L,jn=new L,ko=new L,Qs=new L,er=new L,tr=new L,Bt=class{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Rt.subVectors(e,t),i.cross(Rt);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Rt.subVectors(i,t),Qt.subVectors(n,t),js.subVectors(e,t);let a=Rt.dot(Rt),o=Rt.dot(Qt),c=Rt.dot(js),l=Qt.dot(Qt),h=Qt.dot(js),f=a*l-o*o;if(f===0)return s.set(-2,-1,-1);let d=1/f,m=(l*c-o*h)*d,g=(a*h-o*c)*d;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,en),en.x>=0&&en.y>=0&&en.x+en.y<=1}static getUV(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,en),c.set(0,0),c.addScaledVector(s,en.x),c.addScaledVector(a,en.y),c.addScaledVector(o,en.z),c}static isFrontFacing(e,t,n,i){return Rt.subVectors(n,t),Qt.subVectors(e,t),Rt.cross(Qt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rt.subVectors(this.c,this.b),Qt.subVectors(this.a,this.b),Rt.cross(Qt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Bt.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Bt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;Kn.subVectors(i,n),jn.subVectors(s,n),Qs.subVectors(e,n);let c=Kn.dot(Qs),l=jn.dot(Qs);if(c<=0&&l<=0)return t.copy(n);er.subVectors(e,i);let h=Kn.dot(er),f=jn.dot(er);if(h>=0&&f<=h)return t.copy(i);let d=c*f-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Kn,a);tr.subVectors(e,s);let m=Kn.dot(tr),g=jn.dot(tr);if(g>=0&&m<=g)return t.copy(s);let p=m*l-c*g;if(p<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(jn,o);let u=h*g-m*f;if(u<=0&&f-h>=0&&m-g>=0)return ko.subVectors(s,i),o=(f-h)/(f-h+(m-g)),t.copy(i).addScaledVector(ko,o);let _=1/(u+p+d);return a=p*_,o=d*_,t.copy(n).addScaledVector(Kn,a).addScaledVector(jn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},yc=0,_i=class extends Jt{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:yc++}),this.uuid=gi(),this.name="",this.type="Material",this.blending=On,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Yr,this.blendDst=Zr,this.blendEquation=Un,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}let i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==On&&(n.blending=this.blending),this.side!==Nn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},yi=class extends _i{constructor(e){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Jr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Xe=new L,ji=new fe,It=class{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=To,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ji.fromBufferAttribute(this,t),ji.applyMatrix3(e),this.setXY(t,ji.x,ji.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Xe.fromBufferAttribute(this,t),Xe.applyMatrix3(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Xe.fromBufferAttribute(this,t),Xe.applyMatrix4(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xe.fromBufferAttribute(this,t),Xe.applyNormalMatrix(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xe.fromBufferAttribute(this,t),Xe.transformDirection(e),this.setXYZ(t,Xe.x,Xe.y,Xe.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fi(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fi(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fi(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==To&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}};var nr=class extends It{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ir=class extends It{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var st=class extends It{constructor(e,t,n){super(new Float32Array(e),t,n)}};var bc=0,Et=new et,sr=new ut,Qn=new L,yt=new Wn,bi=new Wn,tt=new L,Dt=class extends Jt{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bc++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Co(e)?ir:nr)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new xt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Et.makeRotationFromQuaternion(e),this.applyMatrix4(Et),this}rotateX(e){return Et.makeRotationX(e),this.applyMatrix4(Et),this}rotateY(e){return Et.makeRotationY(e),this.applyMatrix4(Et),this}rotateZ(e){return Et.makeRotationZ(e),this.applyMatrix4(Et),this}translate(e,t,n){return Et.makeTranslation(e,t,n),this.applyMatrix4(Et),this}scale(e,t,n){return Et.makeScale(e,t,n),this.applyMatrix4(Et),this}lookAt(e){return sr.lookAt(e),sr.updateMatrix(),this.applyMatrix4(sr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qn).negate(),this.translate(Qn.x,Qn.y,Qn.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new st(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];yt.setFromBufferAttribute(s),this.morphTargetsRelative?(tt.addVectors(this.boundingBox.min,yt.min),this.boundingBox.expandByPoint(tt),tt.addVectors(this.boundingBox.max,yt.max),this.boundingBox.expandByPoint(tt)):(this.boundingBox.expandByPoint(yt.min),this.boundingBox.expandByPoint(yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(yt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];bi.setFromBufferAttribute(o),this.morphTargetsRelative?(tt.addVectors(yt.min,bi.min),yt.expandByPoint(tt),tt.addVectors(yt.max,bi.max),yt.expandByPoint(tt)):(yt.expandByPoint(bi.min),yt.expandByPoint(bi.max))}yt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)tt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(tt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)tt.fromBufferAttribute(o,l),c&&(Qn.fromBufferAttribute(e,l),tt.add(Qn)),i=Math.max(i,n.distanceToSquared(tt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new It(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let R=0;R<o;R++)l[R]=new L,h[R]=new L;let f=new L,d=new L,m=new L,g=new fe,p=new fe,u=new fe,_=new L,y=new L;function S(R,Y,j){f.fromArray(i,R*3),d.fromArray(i,Y*3),m.fromArray(i,j*3),g.fromArray(a,R*2),p.fromArray(a,Y*2),u.fromArray(a,j*2),d.sub(f),m.sub(f),p.sub(g),u.sub(g);let V=1/(p.x*u.y-u.x*p.y);!isFinite(V)||(_.copy(d).multiplyScalar(u.y).addScaledVector(m,-p.y).multiplyScalar(V),y.copy(m).multiplyScalar(p.x).addScaledVector(d,-u.x).multiplyScalar(V),l[R].add(_),l[Y].add(_),l[j].add(_),h[R].add(y),h[Y].add(y),h[j].add(y))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let R=0,Y=v.length;R<Y;++R){let j=v[R],V=j.start,U=j.count;for(let q=V,Z=V+U;q<Z;q+=3)S(n[q+0],n[q+1],n[q+2])}let w=new L,C=new L,I=new L,x=new L;function A(R){I.fromArray(s,R*3),x.copy(I);let Y=l[R];w.copy(Y),w.sub(I.multiplyScalar(I.dot(Y))).normalize(),C.crossVectors(x,Y);let V=C.dot(h[R])<0?-1:1;c[R*4]=w.x,c[R*4+1]=w.y,c[R*4+2]=w.z,c[R*4+3]=V}for(let R=0,Y=v.length;R<Y;++R){let j=v[R],V=j.start,U=j.count;for(let q=V,Z=V+U;q<Z;q+=3)A(n[q+0]),A(n[q+1]),A(n[q+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new It(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let i=new L,s=new L,a=new L,o=new L,c=new L,l=new L,h=new L,f=new L;if(e)for(let d=0,m=e.count;d<m;d+=3){let g=e.getX(d+0),p=e.getX(d+1),u=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),a.fromBufferAttribute(t,u),h.subVectors(a,s),f.subVectors(i,s),h.cross(f),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,u),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(u,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),f.subVectors(i,s),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)tt.fromBufferAttribute(e,t),tt.normalize(),e.setXYZ(t,tt.x,tt.y,tt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,f=o.normalized,d=new l.constructor(c.length*h),m=0,g=0;for(let p=0,u=c.length;p<u;p++){o.isInterleavedBufferAttribute?m=c[p]*o.data.stride+o.offset:m=c[p]*h;for(let _=0;_<h;_++)d[g++]=l[m++]}return new It(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new Dt,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=e(c,n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,f=l.length;h<f;h++){let d=l[h],m=e(d,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,d=l.length;f<d;f++){let m=l[f];h.push(m.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],f=s[l];for(let d=0,m=f.length;d<m;d++)h.push(f[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}},Vo=new et,ei=new Ks,rr=new Xi,un=new L,dn=new L,fn=new L,or=new L,ar=new L,lr=new L,Qi=new L,es=new L,ts=new L,ns=new fe,is=new fe,ss=new fe,cr=new L,rs=new L,rt=class extends ut{constructor(e=new Dt,t=new yi){super();this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere),rr.applyMatrix4(s),e.ray.intersectsSphere(rr)===!1)||(Vo.copy(s).invert(),ei.copy(e.ray).applyMatrix4(Vo),n.boundingBox!==null&&ei.intersectsBox(n.boundingBox)===!1))return;let a,o=n.index,c=n.attributes.position,l=n.morphAttributes.position,h=n.morphTargetsRelative,f=n.attributes.uv,d=n.attributes.uv2,m=n.groups,g=n.drawRange;if(o!==null)if(Array.isArray(i))for(let p=0,u=m.length;p<u;p++){let _=m[p],y=i[_.materialIndex],S=Math.max(_.start,g.start),v=Math.min(o.count,Math.min(_.start+_.count,g.start+g.count));for(let w=S,C=v;w<C;w+=3){let I=o.getX(w),x=o.getX(w+1),A=o.getX(w+2);a=os(this,y,e,ei,c,l,h,f,d,I,x,A),a&&(a.faceIndex=Math.floor(w/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{let p=Math.max(0,g.start),u=Math.min(o.count,g.start+g.count);for(let _=p,y=u;_<y;_+=3){let S=o.getX(_),v=o.getX(_+1),w=o.getX(_+2);a=os(this,i,e,ei,c,l,h,f,d,S,v,w),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}else if(c!==void 0)if(Array.isArray(i))for(let p=0,u=m.length;p<u;p++){let _=m[p],y=i[_.materialIndex],S=Math.max(_.start,g.start),v=Math.min(c.count,Math.min(_.start+_.count,g.start+g.count));for(let w=S,C=v;w<C;w+=3){let I=w,x=w+1,A=w+2;a=os(this,y,e,ei,c,l,h,f,d,I,x,A),a&&(a.faceIndex=Math.floor(w/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{let p=Math.max(0,g.start),u=Math.min(c.count,g.start+g.count);for(let _=p,y=u;_<y;_+=3){let S=_,v=_+1,w=_+2;a=os(this,i,e,ei,c,l,h,f,d,S,v,w),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}}};function Mc(r,e,t,n,i,s,a,o){let c;if(e.side===Tt?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,e.side!==Ot,o),c===null)return null;rs.copy(o),rs.applyMatrix4(r.matrixWorld);let l=t.ray.origin.distanceTo(rs);return l<t.near||l>t.far?null:{distance:l,point:rs.clone(),object:r}}function os(r,e,t,n,i,s,a,o,c,l,h,f){un.fromBufferAttribute(i,l),dn.fromBufferAttribute(i,h),fn.fromBufferAttribute(i,f);let d=r.morphTargetInfluences;if(s&&d){Qi.set(0,0,0),es.set(0,0,0),ts.set(0,0,0);for(let g=0,p=s.length;g<p;g++){let u=d[g],_=s[g];u!==0&&(or.fromBufferAttribute(_,l),ar.fromBufferAttribute(_,h),lr.fromBufferAttribute(_,f),a?(Qi.addScaledVector(or,u),es.addScaledVector(ar,u),ts.addScaledVector(lr,u)):(Qi.addScaledVector(or.sub(un),u),es.addScaledVector(ar.sub(dn),u),ts.addScaledVector(lr.sub(fn),u)))}un.add(Qi),dn.add(es),fn.add(ts)}r.isSkinnedMesh&&(r.boneTransform(l,un),r.boneTransform(h,dn),r.boneTransform(f,fn));let m=Mc(r,e,t,n,un,dn,fn,cr);if(m){o&&(ns.fromBufferAttribute(o,l),is.fromBufferAttribute(o,h),ss.fromBufferAttribute(o,f),m.uv=Bt.getUV(cr,un,dn,fn,ns,is,ss,new fe)),c&&(ns.fromBufferAttribute(c,l),is.fromBufferAttribute(c,h),ss.fromBufferAttribute(c,f),m.uv2=Bt.getUV(cr,un,dn,fn,ns,is,ss,new fe));let g={a:l,b:h,c:f,normal:new L,materialIndex:0};Bt.getNormal(un,dn,fn,g.normal),m.face=g}return m}var ti=class extends Dt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],f=[],d=0,m=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(f,2));function g(p,u,_,y,S,v,w,C,I,x,A){let R=v/I,Y=w/x,j=v/2,V=w/2,U=C/2,q=I+1,Z=x+1,K=0,H=0,N=new L;for(let F=0;F<Z;F++){let te=F*Y-V;for(let J=0;J<q;J++){let ie=J*R-j;N[p]=ie*y,N[u]=te*S,N[_]=U,l.push(N.x,N.y,N.z),N[p]=0,N[u]=0,N[_]=C>0?1:-1,h.push(N.x,N.y,N.z),f.push(J/I),f.push(1-F/x),K+=1}}for(let F=0;F<x;F++)for(let te=0;te<I;te++){let J=d+te+q*F,ie=d+te+q*(F+1),he=d+(te+1)+q*(F+1),_e=d+(te+1)+q*F;c.push(J,ie,_e),c.push(ie,he,_e),H+=6}o.addGroup(m,H,A),m+=H,d+=K}}static fromJSON(e){return new ti(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ni(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function lt(r){let e={};for(let t=0;t<r.length;t++){let n=ni(r[t]);for(let i in n)e[i]=n[i]}return e}function wc(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}var Sc={clone:ni,merge:lt},Tc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ac=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,tn=class extends _i{constructor(e){super();this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tc,this.fragmentShader=Ac,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ni(e.uniforms),this.uniformsGroups=wc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},hr=class extends ut{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},dt=class extends hr{constructor(e=50,t=1,n=.1,i=2e3){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ao*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ns*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ao*2*Math.atan(Math.tan(Ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ns*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ii=90,si=1,Go=class extends ut{constructor(e,t,n){super();this.type="CubeCamera",this.renderTarget=n;let i=new dt(ii,si,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new L(1,0,0)),this.add(i);let s=new dt(ii,si,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new L(-1,0,0)),this.add(s);let a=new dt(ii,si,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new L(0,1,0)),this.add(a);let o=new dt(ii,si,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new L(0,-1,0)),this.add(o);let c=new dt(ii,si,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new L(0,0,1)),this.add(c);let l=new dt(ii,si,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new L(0,0,-1)),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();let n=this.renderTarget,[i,s,a,o,c,l]=this.children,h=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=qt,e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(h),e.toneMapping=f,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}},ur=class extends vt{constructor(e,t,n,i,s,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Fn;super(e,t,n,i,s,a,o,c,l,h);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ho=class extends Ut{constructor(e,t={}){super(e,e,t);this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ur(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ue}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`
 
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
       `},i=new ti(5,5,5),s=new tn({name:"CubemapFromEquirect",uniforms:ni(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tt,blending:on});s.uniforms.tEquirect.value=t;let a=new rt(i,s),o=t.minFilter;return t.minFilter===Ni&&(t.minFilter=Ue),new Go(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}},dr=new L,Ec=new L,Cc=new xt,pn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=dr.subVectors(n,t).cross(Ec.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){let n=e.delta(dr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Cc.getNormalMatrix(e),i=this.coplanarPoint(dr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ri=new Xi,as=new L,fr=class{constructor(e=new pn,t=new pn,n=new pn,i=new pn,s=new pn,a=new pn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){let t=this.planes,n=e.elements,i=n[0],s=n[1],a=n[2],o=n[3],c=n[4],l=n[5],h=n[6],f=n[7],d=n[8],m=n[9],g=n[10],p=n[11],u=n[12],_=n[13],y=n[14],S=n[15];return t[0].setComponents(o-i,f-c,p-d,S-u).normalize(),t[1].setComponents(o+i,f+c,p+d,S+u).normalize(),t[2].setComponents(o+s,f+l,p+m,S+_).normalize(),t[3].setComponents(o-s,f-l,p-m,S-_).normalize(),t[4].setComponents(o-a,f-h,p-g,S-y).normalize(),t[5].setComponents(o+a,f+h,p+g,S+y).normalize(),this}intersectsObject(e){let t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ri)}intersectsSprite(e){return ri.center.set(0,0,0),ri.radius=.7071067811865476,ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(as.x=i.normal.x>0?e.max.x:e.min.x,as.y=i.normal.y>0?e.max.y:e.min.y,as.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(as)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Wo(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Pc(r,e){let t=e.isWebGL2,n=new WeakMap;function i(l,h){let f=l.array,d=l.usage,m=r.createBuffer();r.bindBuffer(h,m),r.bufferData(h,f,d),l.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version}}function s(l,h,f){let d=h.array,m=h.updateRange;r.bindBuffer(f,l),m.count===-1?r.bufferSubData(f,0,d):(t?r.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):r.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1)}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(r.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let f=n.get(l);f===void 0?n.set(l,i(l,h)):f.version<l.version&&(s(f.buffer,l,h),f.version=l.version)}return{get:a,remove:o,update:c}}var kt=class extends Dt{constructor(e=1,t=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,f=e/o,d=t/c,m=[],g=[],p=[],u=[];for(let _=0;_<h;_++){let y=_*d-a;for(let S=0;S<l;S++){let v=S*f-s;g.push(v,-y,0),p.push(0,0,1),u.push(S/o),u.push(1-_/c)}}for(let _=0;_<c;_++)for(let y=0;y<o;y++){let S=y+l*_,v=y+l*(_+1),w=y+1+l*(_+1),C=y+1+l*_;m.push(S,v,C),m.push(v,w,C)}this.setIndex(m),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(p,3)),this.setAttribute("uv",new st(u,2))}static fromJSON(e){return new kt(e.width,e.height,e.widthSegments,e.heightSegments)}},Lc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Rc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ic=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Dc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Nc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Oc="vec3 transformed = vec3( position );",Uc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fc=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,Bc=`#ifdef USE_IRIDESCENCE
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
#endif`,kc=`#ifdef USE_BUMPMAP
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
#endif`,Vc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Zc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Jc=`#define PI 3.141592653589793
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
}`,$c=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kc=`vec3 transformedNormal = objectNormal;
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
#endif`,jc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,eh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,th=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nh="gl_FragColor = linearToOutputTexel( gl_FragColor );",ih=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sh=`#ifdef USE_ENVMAP
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
#endif`,rh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,oh=`#ifdef USE_ENVMAP
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
#endif`,ah=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lh=`#ifdef USE_ENVMAP
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
#endif`,ch=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fh=`#ifdef USE_GRADIENTMAP
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
}`,ph=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,mh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xh=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,vh=`uniform bool receiveShadow;
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
#endif`,_h=`#if defined( USE_ENVMAP )
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
#endif`,yh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bh=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Mh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wh=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Sh=`PhysicalMaterial material;
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
#endif`,Th=`struct PhysicalMaterial {
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
}`,Ah=`
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
#endif`,Eh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ch=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Ph=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ih=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Dh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Oh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kh=`#ifdef USE_MORPHNORMALS
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
#endif`,Vh=`#ifdef USE_MORPHTARGETS
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
#endif`,Gh=`#ifdef USE_MORPHTARGETS
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
#endif`,Hh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Wh=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,qh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zh=`#ifdef USE_NORMALMAP
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
#endif`,Jh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,$h=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Kh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,jh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,iu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,su=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ru=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ou=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,au=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cu=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hu=`float getShadowMask() {
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
}`,uu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,du=`#ifdef USE_SKINNING
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
#endif`,fu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pu=`#ifdef USE_SKINNING
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
#endif`,mu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_u=`#ifdef USE_TRANSMISSION
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
#endif`,yu=`#ifdef USE_TRANSMISSION
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
#endif`,bu=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Mu=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,wu=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Su=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Tu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Au=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Eu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Cu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pu=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Lu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ru=`#include <envmap_common_pars_fragment>
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
}`,Iu=`#include <common>
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
}`,Du=`#if DEPTH_PACKING == 3200
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
}`,zu=`#define DISTANCE
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
}`,Nu=`#define DISTANCE
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
}`,Ou=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Uu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Fu=`uniform float scale;
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
}`,Bu=`uniform vec3 diffuse;
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
}`,ku=`#include <common>
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
}`,Vu=`uniform vec3 diffuse;
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
}`,Gu=`#define LAMBERT
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
}`,Hu=`#define LAMBERT
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
}`,Wu=`#define MATCAP
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
}`,qu=`#define MATCAP
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
}`,Xu=`#define NORMAL
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
}`,Yu=`#define NORMAL
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
}`,Zu=`#define PHONG
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
}`,Ju=`#define PHONG
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
}`,$u=`#define STANDARD
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
}`,Ku=`#define STANDARD
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
}`,ju=`#define TOON
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
}`,Qu=`#define TOON
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
}`,ed=`uniform float size;
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
}`,td=`uniform vec3 diffuse;
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
}`,nd=`#include <common>
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
}`,id=`uniform vec3 color;
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
}`,sd=`uniform float rotation;
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
}`,rd=`uniform vec3 diffuse;
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
}`,Ae={alphamap_fragment:Lc,alphamap_pars_fragment:Rc,alphatest_fragment:Ic,alphatest_pars_fragment:Dc,aomap_fragment:zc,aomap_pars_fragment:Nc,begin_vertex:Oc,beginnormal_vertex:Uc,bsdfs:Fc,iridescence_fragment:Bc,bumpmap_pars_fragment:kc,clipping_planes_fragment:Vc,clipping_planes_pars_fragment:Gc,clipping_planes_pars_vertex:Hc,clipping_planes_vertex:Wc,color_fragment:qc,color_pars_fragment:Xc,color_pars_vertex:Yc,color_vertex:Zc,common:Jc,cube_uv_reflection_fragment:$c,defaultnormal_vertex:Kc,displacementmap_pars_vertex:jc,displacementmap_vertex:Qc,emissivemap_fragment:eh,emissivemap_pars_fragment:th,encodings_fragment:nh,encodings_pars_fragment:ih,envmap_fragment:sh,envmap_common_pars_fragment:rh,envmap_pars_fragment:oh,envmap_pars_vertex:ah,envmap_physical_pars_fragment:_h,envmap_vertex:lh,fog_vertex:ch,fog_pars_vertex:hh,fog_fragment:uh,fog_pars_fragment:dh,gradientmap_pars_fragment:fh,lightmap_fragment:ph,lightmap_pars_fragment:mh,lights_lambert_fragment:gh,lights_lambert_pars_fragment:xh,lights_pars_begin:vh,lights_toon_fragment:yh,lights_toon_pars_fragment:bh,lights_phong_fragment:Mh,lights_phong_pars_fragment:wh,lights_physical_fragment:Sh,lights_physical_pars_fragment:Th,lights_fragment_begin:Ah,lights_fragment_maps:Eh,lights_fragment_end:Ch,logdepthbuf_fragment:Ph,logdepthbuf_pars_fragment:Lh,logdepthbuf_pars_vertex:Rh,logdepthbuf_vertex:Ih,map_fragment:Dh,map_pars_fragment:zh,map_particle_fragment:Nh,map_particle_pars_fragment:Oh,metalnessmap_fragment:Uh,metalnessmap_pars_fragment:Fh,morphcolor_vertex:Bh,morphnormal_vertex:kh,morphtarget_pars_vertex:Vh,morphtarget_vertex:Gh,normal_fragment_begin:Hh,normal_fragment_maps:Wh,normal_pars_fragment:qh,normal_pars_vertex:Xh,normal_vertex:Yh,normalmap_pars_fragment:Zh,clearcoat_normal_fragment_begin:Jh,clearcoat_normal_fragment_maps:$h,clearcoat_pars_fragment:Kh,iridescence_pars_fragment:jh,output_fragment:Qh,packing:eu,premultiplied_alpha_fragment:tu,project_vertex:nu,dithering_fragment:iu,dithering_pars_fragment:su,roughnessmap_fragment:ru,roughnessmap_pars_fragment:ou,shadowmap_pars_fragment:au,shadowmap_pars_vertex:lu,shadowmap_vertex:cu,shadowmask_pars_fragment:hu,skinbase_vertex:uu,skinning_pars_vertex:du,skinning_vertex:fu,skinnormal_vertex:pu,specularmap_fragment:mu,specularmap_pars_fragment:gu,tonemapping_fragment:xu,tonemapping_pars_fragment:vu,transmission_fragment:_u,transmission_pars_fragment:yu,uv_pars_fragment:bu,uv_pars_vertex:Mu,uv_vertex:wu,uv2_pars_fragment:Su,uv2_pars_vertex:Tu,uv2_vertex:Au,worldpos_vertex:Eu,background_vert:Cu,background_frag:Pu,cube_vert:Lu,cube_frag:Ru,depth_vert:Iu,depth_frag:Du,distanceRGBA_vert:zu,distanceRGBA_frag:Nu,equirect_vert:Ou,equirect_frag:Uu,linedashed_vert:Fu,linedashed_frag:Bu,meshbasic_vert:ku,meshbasic_frag:Vu,meshlambert_vert:Gu,meshlambert_frag:Hu,meshmatcap_vert:Wu,meshmatcap_frag:qu,meshnormal_vert:Xu,meshnormal_frag:Yu,meshphong_vert:Zu,meshphong_frag:Ju,meshphysical_vert:$u,meshphysical_frag:Ku,meshtoon_vert:ju,meshtoon_frag:Qu,points_vert:ed,points_frag:td,shadow_vert:nd,shadow_frag:id,sprite_vert:sd,sprite_frag:rd},ne={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new xt},uv2Transform:{value:new xt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new xt}}},Vt={basic:{uniforms:lt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Ae.meshbasic_vert,fragmentShader:Ae.meshbasic_frag},lambert:{uniforms:lt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ae.meshlambert_vert,fragmentShader:Ae.meshlambert_frag},phong:{uniforms:lt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:Ae.meshphong_vert,fragmentShader:Ae.meshphong_frag},standard:{uniforms:lt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag},toon:{uniforms:lt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ae.meshtoon_vert,fragmentShader:Ae.meshtoon_frag},matcap:{uniforms:lt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Ae.meshmatcap_vert,fragmentShader:Ae.meshmatcap_frag},points:{uniforms:lt([ne.points,ne.fog]),vertexShader:Ae.points_vert,fragmentShader:Ae.points_frag},dashed:{uniforms:lt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ae.linedashed_vert,fragmentShader:Ae.linedashed_frag},depth:{uniforms:lt([ne.common,ne.displacementmap]),vertexShader:Ae.depth_vert,fragmentShader:Ae.depth_frag},normal:{uniforms:lt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Ae.meshnormal_vert,fragmentShader:Ae.meshnormal_frag},sprite:{uniforms:lt([ne.sprite,ne.fog]),vertexShader:Ae.sprite_vert,fragmentShader:Ae.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null}},vertexShader:Ae.background_vert,fragmentShader:Ae.background_frag},cube:{uniforms:lt([ne.envmap,{opacity:{value:1}}]),vertexShader:Ae.cube_vert,fragmentShader:Ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ae.equirect_vert,fragmentShader:Ae.equirect_frag},distanceRGBA:{uniforms:lt([ne.common,ne.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ae.distanceRGBA_vert,fragmentShader:Ae.distanceRGBA_frag},shadow:{uniforms:lt([ne.lights,ne.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Ae.shadow_vert,fragmentShader:Ae.shadow_frag}};Vt.physical={uniforms:lt([Vt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new fe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ae.meshphysical_vert,fragmentShader:Ae.meshphysical_frag};function od(r,e,t,n,i,s){let a=new Oe(0),o=i===!0?0:1,c,l,h=null,f=0,d=null;function m(p,u){let _=!1,y=u.isScene===!0?u.background:null;y&&y.isTexture&&(y=e.get(y));let S=r.xr,v=S.getSession&&S.getSession();v&&v.environmentBlendMode==="additive"&&(y=null),y===null?g(a,o):y&&y.isColor&&(g(y,1),_=!0),(r.autoClear||_)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),y&&(y.isCubeTexture||y.mapping===zi)?(l===void 0&&(l=new rt(new ti(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:ni(Vt.cube.uniforms),vertexShader:Vt.cube.vertexShader,fragmentShader:Vt.cube.fragmentShader,side:Tt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,C,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,(h!==y||f!==y.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,h=y,f=y.version,d=r.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new rt(new kt(2,2),new tn({name:"BackgroundMaterial",uniforms:ni(Vt.background.uniforms),vertexShader:Vt.background.vertexShader,fragmentShader:Vt.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,d=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,u){t.buffers.color.setClear(p.r,p.g,p.b,u,s)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),o=u,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,g(a,o)},render:m}}function ad(r,e,t,n){let i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},c=u(null),l=c,h=!1;function f(U,q,Z,K,H){let N=!1;if(a){let F=p(K,Z,q);l!==F&&(l=F,m(l.object)),N=_(U,K,Z,H),N&&y(U,K,Z,H)}else{let F=q.wireframe===!0;(l.geometry!==K.id||l.program!==Z.id||l.wireframe!==F)&&(l.geometry=K.id,l.program=Z.id,l.wireframe=F,N=!0)}H!==null&&t.update(H,34963),(N||h)&&(h=!1,x(U,q,Z,K),H!==null&&r.bindBuffer(34963,t.get(H).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(U){return n.isWebGL2?r.bindVertexArray(U):s.bindVertexArrayOES(U)}function g(U){return n.isWebGL2?r.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function p(U,q,Z){let K=Z.wireframe===!0,H=o[U.id];H===void 0&&(H={},o[U.id]=H);let N=H[q.id];N===void 0&&(N={},H[q.id]=N);let F=N[K];return F===void 0&&(F=u(d()),N[K]=F),F}function u(U){let q=[],Z=[],K=[];for(let H=0;H<i;H++)q[H]=0,Z[H]=0,K[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:Z,attributeDivisors:K,object:U,attributes:{},index:null}}function _(U,q,Z,K){let H=l.attributes,N=q.attributes,F=0,te=Z.getAttributes();for(let J in te)if(te[J].location>=0){let he=H[J],_e=N[J];if(_e===void 0&&(J==="instanceMatrix"&&U.instanceMatrix&&(_e=U.instanceMatrix),J==="instanceColor"&&U.instanceColor&&(_e=U.instanceColor)),he===void 0||he.attribute!==_e||_e&&he.data!==_e.data)return!0;F++}return l.attributesNum!==F||l.index!==K}function y(U,q,Z,K){let H={},N=q.attributes,F=0,te=Z.getAttributes();for(let J in te)if(te[J].location>=0){let he=N[J];he===void 0&&(J==="instanceMatrix"&&U.instanceMatrix&&(he=U.instanceMatrix),J==="instanceColor"&&U.instanceColor&&(he=U.instanceColor));let _e={};_e.attribute=he,he&&he.data&&(_e.data=he.data),H[J]=_e,F++}l.attributes=H,l.attributesNum=F,l.index=K}function S(){let U=l.newAttributes;for(let q=0,Z=U.length;q<Z;q++)U[q]=0}function v(U){w(U,0)}function w(U,q){let Z=l.newAttributes,K=l.enabledAttributes,H=l.attributeDivisors;Z[U]=1,K[U]===0&&(r.enableVertexAttribArray(U),K[U]=1),H[U]!==q&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,q),H[U]=q)}function C(){let U=l.newAttributes,q=l.enabledAttributes;for(let Z=0,K=q.length;Z<K;Z++)q[Z]!==U[Z]&&(r.disableVertexAttribArray(Z),q[Z]=0)}function I(U,q,Z,K,H,N){n.isWebGL2===!0&&(Z===5124||Z===5125)?r.vertexAttribIPointer(U,q,Z,H,N):r.vertexAttribPointer(U,q,Z,K,H,N)}function x(U,q,Z,K){if(n.isWebGL2===!1&&(U.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();let H=K.attributes,N=Z.getAttributes(),F=q.defaultAttributeValues;for(let te in N){let J=N[te];if(J.location>=0){let ie=H[te];if(ie===void 0&&(te==="instanceMatrix"&&U.instanceMatrix&&(ie=U.instanceMatrix),te==="instanceColor"&&U.instanceColor&&(ie=U.instanceColor)),ie!==void 0){let he=ie.normalized,_e=ie.itemSize,W=t.get(ie);if(W===void 0)continue;let Le=W.buffer,xe=W.type,ye=W.bytesPerElement;if(ie.isInterleavedBufferAttribute){let ce=ie.data,Ie=ce.stride,Se=ie.offset;if(ce.isInstancedInterleavedBuffer){for(let me=0;me<J.locationSize;me++)w(J.location+me,ce.meshPerAttribute);U.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let me=0;me<J.locationSize;me++)v(J.location+me);r.bindBuffer(34962,Le);for(let me=0;me<J.locationSize;me++)I(J.location+me,_e/J.locationSize,xe,he,Ie*ye,(Se+_e/J.locationSize*me)*ye)}else{if(ie.isInstancedBufferAttribute){for(let ce=0;ce<J.locationSize;ce++)w(J.location+ce,ie.meshPerAttribute);U.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ce=0;ce<J.locationSize;ce++)v(J.location+ce);r.bindBuffer(34962,Le);for(let ce=0;ce<J.locationSize;ce++)I(J.location+ce,_e/J.locationSize,xe,he,_e*ye,_e/J.locationSize*ce*ye)}}else if(F!==void 0){let he=F[te];if(he!==void 0)switch(he.length){case 2:r.vertexAttrib2fv(J.location,he);break;case 3:r.vertexAttrib3fv(J.location,he);break;case 4:r.vertexAttrib4fv(J.location,he);break;default:r.vertexAttrib1fv(J.location,he)}}}}C()}function A(){j();for(let U in o){let q=o[U];for(let Z in q){let K=q[Z];for(let H in K)g(K[H].object),delete K[H];delete q[Z]}delete o[U]}}function R(U){if(o[U.id]===void 0)return;let q=o[U.id];for(let Z in q){let K=q[Z];for(let H in K)g(K[H].object),delete K[H];delete q[Z]}delete o[U.id]}function Y(U){for(let q in o){let Z=o[q];if(Z[U.id]===void 0)continue;let K=Z[U.id];for(let H in K)g(K[H].object),delete K[H];delete Z[U.id]}}function j(){V(),h=!0,l!==c&&(l=c,m(l.object))}function V(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:j,resetDefaultState:V,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:Y,initAttributes:S,enableAttribute:v,disableUnusedAttributes:C}}function ld(r,e,t,n){let i=n.isWebGL2,s;function a(l){s=l}function o(l,h){r.drawArrays(s,l,h),t.update(h,s,1)}function c(l,h,f){if(f===0)return;let d,m;if(i)d=r,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,l,h,f),t.update(h,s,f)}this.setMode=a,this.render=o,this.renderInstances=c}function cd(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(I){if(I==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext!="undefined"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&r instanceof WebGL2ComputeRenderingContext,o=t.precision!==void 0?t.precision:"highp",c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,f=r.getParameter(34930),d=r.getParameter(35660),m=r.getParameter(3379),g=r.getParameter(34076),p=r.getParameter(34921),u=r.getParameter(36347),_=r.getParameter(36348),y=r.getParameter(36349),S=d>0,v=a||e.has("OES_texture_float"),w=S&&v,C=a?r.getParameter(36183):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:u,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:S,floatFragmentTextures:v,floatVertexTextures:w,maxSamples:C}}function hd(r){let e=this,t=null,n=0,i=!1,s=!1,a=new pn,o=new xt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d,m){let g=f.length!==0||d||n!==0||i;return i=d,t=h(f,m,0),n=f.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,l()},this.setState=function(f,d,m){let g=f.clippingPlanes,p=f.clipIntersection,u=f.clipShadows,_=r.get(f);if(!i||g===null||g.length===0||s&&!u)s?h(null):l();else{let y=s?0:n,S=y*4,v=_.clippingState||null;c.value=v,v=h(g,d,S,m);for(let w=0;w!==S;++w)v[w]=t[w];_.clippingState=v,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,m,g){let p=f!==null?f.length:0,u=null;if(p!==0){if(u=c.value,g!==!0||u===null){let _=m+p*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(u===null||u.length<_)&&(u=new Float32Array(_));for(let S=0,v=m;S!==p;++S,v+=4)a.copy(f[S]).applyMatrix4(y,o),a.normal.toArray(u,v),u[v+3]=a.constant}c.value=u,c.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,u}}function ud(r){let e=new WeakMap;function t(a,o){return o===Ts?a.mapping=Fn:o===As&&(a.mapping=Bn),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){let o=a.mapping;if(o===Ts||o===As)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Ho(c.height/2);return l.fromEquirectangularTexture(r,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var oi=class extends hr{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ai=4,qo=[.125,.215,.35,.446,.526,.582],Pn=20,pr=new oi,Xo=new Oe,mr=null,Ln=(1+Math.sqrt(5))/2,li=1/Ln,Yo=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Ln,li),new L(0,Ln,-li),new L(li,0,Ln),new L(-li,0,Ln),new L(Ln,li,0),new L(-Ln,li,0)],gr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){mr=this._renderer.getRenderTarget(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$o(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(mr),e.scissorTest=!1,ls(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fn||e.mapping===Bn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mr=this._renderer.getRenderTarget();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,16*7),t=4*this._cubeSize,n={magFilter:Ue,minFilter:Ue,generateMipmaps:!1,type:mi,format:He,encoding:wn,depthBuffer:!1},i=Zo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zo(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dd(s)),this._blurMaterial=fd(s,e,t)}return i}_compileMaterial(e){let t=new rt(this._lodPlanes[0],e);this._renderer.compile(t,pr)}_sceneToCubeUV(e,t,n,i){let s=90,a=1,o=new dt(s,a,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Xo),h.toneMapping=qt,h.autoClear=!1;let m=new yi({name:"PMREM.Background",side:Tt,depthWrite:!1,depthTest:!1}),g=new rt(new ti,m),p=!1,u=e.background;u?u.isColor&&(m.color.copy(u),e.background=null,p=!0):(m.color.copy(Xo),p=!0);for(let _=0;_<6;_++){let y=_%3;y===0?(o.up.set(0,c[_],0),o.lookAt(l[_],0,0)):y===1?(o.up.set(0,0,c[_]),o.lookAt(0,l[_],0)):(o.up.set(0,c[_],0),o.lookAt(0,0,l[_]));let S=this._cubeSize;ls(i,y*S,_>2?S:0,S,S),h.setRenderTarget(i),p&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=u}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Fn||e.mapping===Bn;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=$o()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jo());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new rt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;let c=this._cubeSize;ls(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,pr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Yo[(i-1)%Yo.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new rt(this._lodPlanes[i],l),d=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Pn-1),p=s/g,u=isFinite(s)?1+Math.floor(h*p):Pn;u>Pn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${Pn}`);let _=[],y=0;for(let I=0;I<Pn;++I){let x=I/p,A=Math.exp(-x*x/2);_.push(A),I===0?y+=A:I<u&&(y+=2*A)}for(let I=0;I<_.length;I++)_[I]=_[I]/y;d.envMap.value=e.texture,d.samples.value=u,d.weights.value=_,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;let v=this._sizeLods[i],w=3*v*(i>S-ai?i-S+ai:0),C=4*(this._cubeSize-v);ls(t,w,C,3*v,2*v),c.setRenderTarget(t),c.render(f,pr)}};function dd(r){let e=[],t=[],n=[],i=r,s=r-ai+1+qo.length;for(let a=0;a<s;a++){let o=Math.pow(2,i);t.push(o);let c=1/o;a>r-ai?c=qo[a-r+ai-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,f=1+l,d=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,g=6,p=3,u=2,_=1,y=new Float32Array(p*g*m),S=new Float32Array(u*g*m),v=new Float32Array(_*g*m);for(let C=0;C<m;C++){let I=C%3*2/3-1,x=C>2?0:-1,A=[I,x,0,I+2/3,x,0,I+2/3,x+1,0,I,x,0,I+2/3,x+1,0,I,x+1,0];y.set(A,p*g*C),S.set(d,u*g*C);let R=[C,C,C,C,C,C];v.set(R,_*g*C)}let w=new Dt;w.setAttribute("position",new It(y,p)),w.setAttribute("uv",new It(S,u)),w.setAttribute("faceIndex",new It(v,_)),e.push(w),i>ai&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Zo(r,e,t){let n=new Ut(r,e,t);return n.texture.mapping=zi,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ls(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function fd(r,e,t){let n=new Float32Array(Pn),i=new L(0,1,0);return new tn({name:"SphericalGaussianBlur",defines:{n:Pn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:xr(),fragmentShader:`
 
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
     `,blending:on,depthTest:!1,depthWrite:!1})}function Jo(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xr(),fragmentShader:`
 
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
     `,blending:on,depthTest:!1,depthWrite:!1})}function $o(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xr(),fragmentShader:`
 
       precision mediump float;
       precision mediump int;
 
       uniform float flipEnvMap;
 
       varying vec3 vOutputDirection;
 
       uniform samplerCube envMap;
 
       void main() {
 
         gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );
 
       }
     `,blending:on,depthTest:!1,depthWrite:!1})}function xr(){return`
 
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
   `}function pd(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Ts||c===As,h=c===Fn||c===Bn;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new gr(r)),f=l?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{let f=o.image;if(l&&f&&f.height>0||h&&f&&i(f)){t===null&&(t=new gr(r));let d=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function i(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){let c=o.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function md(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function gd(r,e,t,n){let i={},s=new WeakMap;function a(f){let d=f.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];let m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(f){let d=f.attributes;for(let g in d)e.update(d[g],34962);let m=f.morphAttributes;for(let g in m){let p=m[g];for(let u=0,_=p.length;u<_;u++)e.update(p[u],34962)}}function l(f){let d=[],m=f.index,g=f.attributes.position,p=0;if(m!==null){let y=m.array;p=m.version;for(let S=0,v=y.length;S<v;S+=3){let w=y[S+0],C=y[S+1],I=y[S+2];d.push(w,C,C,I,I,w)}}else{let y=g.array;p=g.version;for(let S=0,v=y.length/3-1;S<v;S+=3){let w=S+0,C=S+1,I=S+2;d.push(w,C,C,I,I,w)}}let u=new(Co(d)?ir:nr)(d,1);u.version=p;let _=s.get(f);_&&e.remove(_),s.set(f,u)}function h(f){let d=s.get(f);if(d){let m=f.index;m!==null&&d.version<m.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function xd(r,e,t,n){let i=n.isWebGL2,s;function a(d){s=d}let o,c;function l(d){o=d.type,c=d.bytesPerElement}function h(d,m){r.drawElements(s,m,o,d*c),t.update(m,s,1)}function f(d,m,g){if(g===0)return;let p,u;if(i)p=r,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](s,m,o,d*c,g),t.update(m,s,g)}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=f}function vd(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function _d(r,e){return r[0]-e[0]}function yd(r,e){return Math.abs(e[1])-Math.abs(r[1])}function bd(r,e,t){let n={},i=new Float32Array(8),s=new WeakMap,a=new Qe,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,f,d){let m=l.morphTargetInfluences;if(e.isWebGL2===!0){let g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=g!==void 0?g.length:0,u=s.get(h);if(u===void 0||u.count!==p){let q=function(){V.dispose(),s.delete(h),h.removeEventListener("dispose",q)};u!==void 0&&u.texture.dispose();let S=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],x=h.morphAttributes.color||[],A=0;S===!0&&(A=1),v===!0&&(A=2),w===!0&&(A=3);let R=h.attributes.position.count*A,Y=1;R>e.maxTextureSize&&(Y=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);let j=new Float32Array(R*Y*4*p),V=new Hs(j,R,Y,p);V.type=Xt,V.needsUpdate=!0;let U=A*4;for(let Z=0;Z<p;Z++){let K=C[Z],H=I[Z],N=x[Z],F=R*Y*4*Z;for(let te=0;te<K.count;te++){let J=te*U;S===!0&&(a.fromBufferAttribute(K,te),j[F+J+0]=a.x,j[F+J+1]=a.y,j[F+J+2]=a.z,j[F+J+3]=0),v===!0&&(a.fromBufferAttribute(H,te),j[F+J+4]=a.x,j[F+J+5]=a.y,j[F+J+6]=a.z,j[F+J+7]=0),w===!0&&(a.fromBufferAttribute(N,te),j[F+J+8]=a.x,j[F+J+9]=a.y,j[F+J+10]=a.z,j[F+J+11]=N.itemSize===4?a.w:1)}}u={count:p,texture:V,size:new fe(R,Y)},s.set(h,u),h.addEventListener("dispose",q)}let _=0;for(let S=0;S<m.length;S++)_+=m[S];let y=h.morphTargetsRelative?1:1-_;d.getUniforms().setValue(r,"morphTargetBaseInfluence",y),d.getUniforms().setValue(r,"morphTargetInfluences",m),d.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}else{let g=m===void 0?0:m.length,p=n[h.id];if(p===void 0||p.length!==g){p=[];for(let v=0;v<g;v++)p[v]=[v,0];n[h.id]=p}for(let v=0;v<g;v++){let w=p[v];w[0]=v,w[1]=m[v]}p.sort(yd);for(let v=0;v<8;v++)v<g&&p[v][1]?(o[v][0]=p[v][0],o[v][1]=p[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(_d);let u=h.morphAttributes.position,_=h.morphAttributes.normal,y=0;for(let v=0;v<8;v++){let w=o[v],C=w[0],I=w[1];C!==Number.MAX_SAFE_INTEGER&&I?(u&&h.getAttribute("morphTarget"+v)!==u[C]&&h.setAttribute("morphTarget"+v,u[C]),_&&h.getAttribute("morphNormal"+v)!==_[C]&&h.setAttribute("morphNormal"+v,_[C]),i[v]=I,y+=I):(u&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),_&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}let S=h.morphTargetsRelative?1:1-y;d.getUniforms().setValue(r,"morphTargetBaseInfluence",S),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function Md(r,e,t,n){let i=new WeakMap;function s(c){let l=n.render.frame,h=c.geometry,f=e.get(c,h);return i.get(f)!==l&&(e.update(f),i.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),f}function a(){i=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}var Ko=new vt,jo=new Hs,Qo=new Lo,ea=new ur,ta=[],na=[],ia=new Float32Array(16),sa=new Float32Array(9),ra=new Float32Array(4);function ci(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=ta[i];if(s===void 0&&(s=new Float32Array(i),ta[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Ke(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function je(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function cs(r,e){let t=na[e];t===void 0&&(t=new Int32Array(e),na[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function wd(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Sd(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ke(t,e))return;r.uniform2fv(this.addr,e),je(t,e)}}function Td(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ke(t,e))return;r.uniform3fv(this.addr,e),je(t,e)}}function Ad(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ke(t,e))return;r.uniform4fv(this.addr,e),je(t,e)}}function Ed(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ke(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),je(t,e)}else{if(Ke(t,n))return;ra.set(n),r.uniformMatrix2fv(this.addr,!1,ra),je(t,n)}}function Cd(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ke(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),je(t,e)}else{if(Ke(t,n))return;sa.set(n),r.uniformMatrix3fv(this.addr,!1,sa),je(t,n)}}function Pd(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ke(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),je(t,e)}else{if(Ke(t,n))return;ia.set(n),r.uniformMatrix4fv(this.addr,!1,ia),je(t,n)}}function Ld(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Rd(r,e){let t=this.cache;Ke(t,e)||(r.uniform2iv(this.addr,e),je(t,e))}function Id(r,e){let t=this.cache;Ke(t,e)||(r.uniform3iv(this.addr,e),je(t,e))}function Dd(r,e){let t=this.cache;Ke(t,e)||(r.uniform4iv(this.addr,e),je(t,e))}function zd(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Nd(r,e){let t=this.cache;Ke(t,e)||(r.uniform2uiv(this.addr,e),je(t,e))}function Od(r,e){let t=this.cache;Ke(t,e)||(r.uniform3uiv(this.addr,e),je(t,e))}function Ud(r,e){let t=this.cache;Ke(t,e)||(r.uniform4uiv(this.addr,e),je(t,e))}function Fd(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Ko,i)}function Bd(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Qo,i)}function kd(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ea,i)}function Vd(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||jo,i)}function Gd(r){switch(r){case 5126:return wd;case 35664:return Sd;case 35665:return Td;case 35666:return Ad;case 35674:return Ed;case 35675:return Cd;case 35676:return Pd;case 5124:case 35670:return Ld;case 35667:case 35671:return Rd;case 35668:case 35672:return Id;case 35669:case 35673:return Dd;case 5125:return zd;case 36294:return Nd;case 36295:return Od;case 36296:return Ud;case 35678:case 36198:case 36298:case 36306:case 35682:return Fd;case 35679:case 36299:case 36307:return Bd;case 35680:case 36300:case 36308:case 36293:return kd;case 36289:case 36303:case 36311:case 36292:return Vd}}function Hd(r,e){r.uniform1fv(this.addr,e)}function Wd(r,e){let t=ci(e,this.size,2);r.uniform2fv(this.addr,t)}function qd(r,e){let t=ci(e,this.size,3);r.uniform3fv(this.addr,t)}function Xd(r,e){let t=ci(e,this.size,4);r.uniform4fv(this.addr,t)}function Yd(r,e){let t=ci(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Zd(r,e){let t=ci(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Jd(r,e){let t=ci(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function $d(r,e){r.uniform1iv(this.addr,e)}function Kd(r,e){r.uniform2iv(this.addr,e)}function jd(r,e){r.uniform3iv(this.addr,e)}function Qd(r,e){r.uniform4iv(this.addr,e)}function ef(r,e){r.uniform1uiv(this.addr,e)}function tf(r,e){r.uniform2uiv(this.addr,e)}function nf(r,e){r.uniform3uiv(this.addr,e)}function sf(r,e){r.uniform4uiv(this.addr,e)}function rf(r,e,t){let n=this.cache,i=e.length,s=cs(t,i);Ke(n,s)||(r.uniform1iv(this.addr,s),je(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Ko,s[a])}function of(r,e,t){let n=this.cache,i=e.length,s=cs(t,i);Ke(n,s)||(r.uniform1iv(this.addr,s),je(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Qo,s[a])}function af(r,e,t){let n=this.cache,i=e.length,s=cs(t,i);Ke(n,s)||(r.uniform1iv(this.addr,s),je(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||ea,s[a])}function lf(r,e,t){let n=this.cache,i=e.length,s=cs(t,i);Ke(n,s)||(r.uniform1iv(this.addr,s),je(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||jo,s[a])}function cf(r){switch(r){case 5126:return Hd;case 35664:return Wd;case 35665:return qd;case 35666:return Xd;case 35674:return Yd;case 35675:return Zd;case 35676:return Jd;case 5124:case 35670:return $d;case 35667:case 35671:return Kd;case 35668:case 35672:return jd;case 35669:case 35673:return Qd;case 5125:return ef;case 36294:return tf;case 36295:return nf;case 36296:return sf;case 35678:case 36198:case 36298:case 36306:case 35682:return rf;case 35679:case 36299:case 36307:return of;case 35680:case 36300:case 36308:case 36293:return af;case 36289:case 36303:case 36311:case 36292:return lf}}var oa=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Gd(t.type)}},aa=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=cf(t.type)}},la=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},vr=/(\w+)(\])?(\[|\.)?/g;function ca(r,e){r.seq.push(e),r.map[e.id]=e}function hf(r,e,t){let n=r.name,i=n.length;for(vr.lastIndex=0;;){let s=vr.exec(n),a=vr.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){ca(t,l===void 0?new oa(o,r,e):new aa(o,r,e));break}else{let f=t.map[o];f===void 0&&(f=new la(o),ca(t,f)),t=f}}}var Mi=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);hf(s,a,this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function ha(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var uf=0;function df(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function ff(r){switch(r){case wn:return["Linear","( value )"];case Fe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function ua(r,e,t){let n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+df(r.getShaderSource(e),a)}else return i}function pf(r,e){let t=ff(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function mf(r,e){let t;switch(e){case Bl:t="Linear";break;case kl:t="Reinhard";break;case Vl:t="OptimizedCineon";break;case Gl:t="ACESFilmic";break;case Hl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function gf(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(wi).join(`
`)}function xf(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function vf(r,e){let t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),a=s.name,o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function wi(r){return r!==""}function da(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fa(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var _f=/^[ \t]*#include +<([\w\d./]+)>/gm;function _r(r){return r.replace(_f,yf)}function yf(r,e){let t=Ae[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return _r(t)}var bf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pa(r){return r.replace(bf,Mf)}function Mf(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ma(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function wf(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Vr?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===xl?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function Sf(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Fn:case Bn:e="ENVMAP_TYPE_CUBE";break;case zi:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Tf(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Bn:e="ENVMAP_MODE_REFRACTION";break}return e}function Af(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Jr:e="ENVMAP_BLENDING_MULTIPLY";break;case Ul:e="ENVMAP_BLENDING_MIX";break;case Fl:e="ENVMAP_BLENDING_ADD";break}return e}function Ef(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Cf(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=wf(t),l=Sf(t),h=Tf(t),f=Af(t),d=Ef(t),m=t.isWebGL2?"":gf(t),g=xf(s),p=i.createProgram(),u,_,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=[g].filter(wi).join(`
`),u.length>0&&(u+=`
`),_=[m,g].filter(wi).join(`
`),_.length>0&&(_+=`
`)):(u=[ma(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wi).join(`
`),_=[m,ma(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qt?"#define TONE_MAPPING":"",t.toneMapping!==qt?Ae.tonemapping_pars_fragment:"",t.toneMapping!==qt?mf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ae.encodings_pars_fragment,pf("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wi).join(`
`)),a=_r(a),a=da(a,t),a=fa(a,t),o=_r(o),o=da(o,t),o=fa(o,t),a=pa(a),o=pa(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,u=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,_=["#define varying in",t.glslVersion===Zt?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zt?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let S=y+u+a,v=y+_+o,w=ha(i,35633,S),C=ha(i,35632,v);if(i.attachShader(p,w),i.attachShader(p,C),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),r.debug.checkShaderErrors){let A=i.getProgramInfoLog(p).trim(),R=i.getShaderInfoLog(w).trim(),Y=i.getShaderInfoLog(C).trim(),j=!0,V=!0;if(i.getProgramParameter(p,35714)===!1){j=!1;let U=ua(i,w,"vertex"),q=ua(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+A+`
`+U+`
`+q)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(R===""||Y==="")&&(V=!1);V&&(this.diagnostics={runnable:j,programLog:A,vertexShader:{log:R,prefix:u},fragmentShader:{log:Y,prefix:_}})}i.deleteShader(w),i.deleteShader(C);let I;this.getUniforms=function(){return I===void 0&&(I=new Mi(i,p)),I};let x;return this.getAttributes=function(){return x===void 0&&(x=vf(i,p)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=uf++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=C,this}var Pf=0,ga=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new xa(e),t.set(e,n)),n}},xa=class{constructor(e){this.id=Pf++,this.code=e,this.usedTimes=0}};function Lf(r,e,t,n,i,s,a){let o=new $i,c=new ga,l=[],h=i.isWebGL2,f=i.logarithmicDepthBuffer,d=i.vertexTextures,m=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x,A,R,Y,j){let V=Y.fog,U=j.geometry,q=x.isMeshStandardMaterial?Y.environment:null,Z=(x.isMeshStandardMaterial?t:e).get(x.envMap||q),K=!!Z&&Z.mapping===zi?Z.image.height:null,H=g[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));let N=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,F=N!==void 0?N.length:0,te=0;U.morphAttributes.position!==void 0&&(te=1),U.morphAttributes.normal!==void 0&&(te=2),U.morphAttributes.color!==void 0&&(te=3);let J,ie,he,_e;if(H){let Ie=Vt[H];J=Ie.vertexShader,ie=Ie.fragmentShader}else J=x.vertexShader,ie=x.fragmentShader,c.update(x),he=c.getVertexShaderID(x),_e=c.getFragmentShaderID(x);let W=r.getRenderTarget(),Le=x.alphaTest>0,xe=x.clearcoat>0,ye=x.iridescence>0;return{isWebGL2:h,shaderID:H,shaderName:x.type,vertexShader:J,fragmentShader:ie,defines:x.defines,customVertexShaderID:he,customFragmentShaderID:_e,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:j.isInstancedMesh===!0,instancingColor:j.isInstancedMesh===!0&&j.instanceColor!==null,supportsVertexTextures:d,outputEncoding:W===null?r.outputEncoding:W.isXRRenderTarget===!0?W.texture.encoding:wn,map:!!x.map,matcap:!!x.matcap,envMap:!!Z,envMapMode:Z&&Z.mapping,envMapCubeUVHeight:K,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===cc,tangentSpaceNormalMap:x.normalMapType===lc,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===Fe,clearcoat:xe,clearcoatMap:xe&&!!x.clearcoatMap,clearcoatRoughnessMap:xe&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:xe&&!!x.clearcoatNormalMap,iridescence:ye,iridescenceMap:ye&&!!x.iridescenceMap,iridescenceThicknessMap:ye&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===On,alphaMap:!!x.alphaMap,alphaTest:Le,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!U.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||x.transmission>0||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||x.sheen>0||!!x.sheenColorMap||!!x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!V,useFog:x.fog===!0,fogExp2:V&&V.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:f,skinning:j.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:te,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:x.toneMapped?r.toneMapping:qt,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ot,flipSided:x.side===Tt,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function u(x){let A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)A.push(R),A.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(_(A,x),y(A,x),A.push(r.outputEncoding)),A.push(x.customProgramCacheKey),A.join()}function _(x,A){x.push(A.precision),x.push(A.outputEncoding),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.combine),x.push(A.vertexUvs),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function y(x,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.map&&o.enable(4),A.matcap&&o.enable(5),A.envMap&&o.enable(6),A.lightMap&&o.enable(7),A.aoMap&&o.enable(8),A.emissiveMap&&o.enable(9),A.bumpMap&&o.enable(10),A.normalMap&&o.enable(11),A.objectSpaceNormalMap&&o.enable(12),A.tangentSpaceNormalMap&&o.enable(13),A.clearcoat&&o.enable(14),A.clearcoatMap&&o.enable(15),A.clearcoatRoughnessMap&&o.enable(16),A.clearcoatNormalMap&&o.enable(17),A.iridescence&&o.enable(18),A.iridescenceMap&&o.enable(19),A.iridescenceThicknessMap&&o.enable(20),A.displacementMap&&o.enable(21),A.specularMap&&o.enable(22),A.roughnessMap&&o.enable(23),A.metalnessMap&&o.enable(24),A.gradientMap&&o.enable(25),A.alphaMap&&o.enable(26),A.alphaTest&&o.enable(27),A.vertexColors&&o.enable(28),A.vertexAlphas&&o.enable(29),A.vertexUvs&&o.enable(30),A.vertexTangents&&o.enable(31),A.uvsVertexOnly&&o.enable(32),x.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.physicallyCorrectLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.specularIntensityMap&&o.enable(15),A.specularColorMap&&o.enable(16),A.transmission&&o.enable(17),A.transmissionMap&&o.enable(18),A.thicknessMap&&o.enable(19),A.sheen&&o.enable(20),A.sheenColorMap&&o.enable(21),A.sheenRoughnessMap&&o.enable(22),A.decodeVideoTexture&&o.enable(23),A.opaque&&o.enable(24),x.push(o.mask)}function S(x){let A=g[x.type],R;if(A){let Y=Vt[A];R=Sc.clone(Y.uniforms)}else R=x.uniforms;return R}function v(x,A){let R;for(let Y=0,j=l.length;Y<j;Y++){let V=l[Y];if(V.cacheKey===A){R=V,++R.usedTimes;break}}return R===void 0&&(R=new Cf(r,A,x,s),l.push(R)),R}function w(x){if(--x.usedTimes===0){let A=l.indexOf(x);l[A]=l[l.length-1],l.pop(),x.destroy()}}function C(x){c.remove(x)}function I(){c.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:S,acquireProgram:v,releaseProgram:w,releaseShaderCache:C,programs:l,dispose:I}}function Rf(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function If(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function va(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function _a(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(f,d,m,g,p,u){let _=r[e];return _===void 0?(_={id:f.id,object:f,geometry:d,material:m,groupOrder:g,renderOrder:f.renderOrder,z:p,group:u},r[e]=_):(_.id=f.id,_.object=f,_.geometry=d,_.material=m,_.groupOrder=g,_.renderOrder=f.renderOrder,_.z=p,_.group=u),e++,_}function o(f,d,m,g,p,u){let _=a(f,d,m,g,p,u);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):t.push(_)}function c(f,d,m,g,p,u){let _=a(f,d,m,g,p,u);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):t.unshift(_)}function l(f,d){t.length>1&&t.sort(f||If),n.length>1&&n.sort(d||va),i.length>1&&i.sort(d||va)}function h(){for(let f=e,d=r.length;f<d;f++){let m=r[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:h,sort:l}}function Df(){let r=new WeakMap;function e(n,i){let s=r.get(n),a;return s===void 0?(a=new _a,r.set(n,[a])):i>=s.length?(a=new _a,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function zf(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Oe};break;case"SpotLight":t={position:new L,direction:new L,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new L,halfWidth:new L,halfHeight:new L};break}return r[e.id]=t,t}}}function Nf(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var Of=0;function Uf(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Ff(r,e){let t=new zf,n=Nf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new L);let s=new L,a=new et,o=new et;function c(h,f){let d=0,m=0,g=0;for(let Y=0;Y<9;Y++)i.probe[Y].set(0,0,0);let p=0,u=0,_=0,y=0,S=0,v=0,w=0,C=0,I=0,x=0;h.sort(Uf);let A=f!==!0?Math.PI:1;for(let Y=0,j=h.length;Y<j;Y++){let V=h[Y],U=V.color,q=V.intensity,Z=V.distance,K=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)d+=U.r*q*A,m+=U.g*q*A,g+=U.b*q*A;else if(V.isLightProbe)for(let H=0;H<9;H++)i.probe[H].addScaledVector(V.sh.coefficients[H],q);else if(V.isDirectionalLight){let H=t.get(V);if(H.color.copy(V.color).multiplyScalar(V.intensity*A),V.castShadow){let N=V.shadow,F=n.get(V);F.shadowBias=N.bias,F.shadowNormalBias=N.normalBias,F.shadowRadius=N.radius,F.shadowMapSize=N.mapSize,i.directionalShadow[p]=F,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=V.shadow.matrix,v++}i.directional[p]=H,p++}else if(V.isSpotLight){let H=t.get(V);H.position.setFromMatrixPosition(V.matrixWorld),H.color.copy(U).multiplyScalar(q*A),H.distance=Z,H.coneCos=Math.cos(V.angle),H.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),H.decay=V.decay,i.spot[_]=H;let N=V.shadow;if(V.map&&(i.spotLightMap[I]=V.map,I++,N.updateMatrices(V),V.castShadow&&x++),i.spotLightMatrix[_]=N.matrix,V.castShadow){let F=n.get(V);F.shadowBias=N.bias,F.shadowNormalBias=N.normalBias,F.shadowRadius=N.radius,F.shadowMapSize=N.mapSize,i.spotShadow[_]=F,i.spotShadowMap[_]=K,C++}_++}else if(V.isRectAreaLight){let H=t.get(V);H.color.copy(U).multiplyScalar(q),H.halfWidth.set(V.width*.5,0,0),H.halfHeight.set(0,V.height*.5,0),i.rectArea[y]=H,y++}else if(V.isPointLight){let H=t.get(V);if(H.color.copy(V.color).multiplyScalar(V.intensity*A),H.distance=V.distance,H.decay=V.decay,V.castShadow){let N=V.shadow,F=n.get(V);F.shadowBias=N.bias,F.shadowNormalBias=N.normalBias,F.shadowRadius=N.radius,F.shadowMapSize=N.mapSize,F.shadowCameraNear=N.camera.near,F.shadowCameraFar=N.camera.far,i.pointShadow[u]=F,i.pointShadowMap[u]=K,i.pointShadowMatrix[u]=V.shadow.matrix,w++}i.point[u]=H,u++}else if(V.isHemisphereLight){let H=t.get(V);H.skyColor.copy(V.color).multiplyScalar(q*A),H.groundColor.copy(V.groundColor).multiplyScalar(q*A),i.hemi[S]=H,S++}}y>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ne.LTC_FLOAT_1,i.rectAreaLTC2=ne.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ne.LTC_HALF_1,i.rectAreaLTC2=ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=g;let R=i.hash;(R.directionalLength!==p||R.pointLength!==u||R.spotLength!==_||R.rectAreaLength!==y||R.hemiLength!==S||R.numDirectionalShadows!==v||R.numPointShadows!==w||R.numSpotShadows!==C||R.numSpotMaps!==I)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=y,i.point.length=u,i.hemi.length=S,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=C+I-x,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=x,R.directionalLength=p,R.pointLength=u,R.spotLength=_,R.rectAreaLength=y,R.hemiLength=S,R.numDirectionalShadows=v,R.numPointShadows=w,R.numSpotShadows=C,R.numSpotMaps=I,i.version=Of++)}function l(h,f){let d=0,m=0,g=0,p=0,u=0,_=f.matrixWorldInverse;for(let y=0,S=h.length;y<S;y++){let v=h[y];if(v.isDirectionalLight){let w=i.directional[d];w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(_),d++}else if(v.isSpotLight){let w=i.spot[g];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(_),w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(_),g++}else if(v.isRectAreaLight){let w=i.rectArea[p];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(_),o.identity(),a.copy(v.matrixWorld),a.premultiply(_),o.extractRotation(a),w.halfWidth.set(v.width*.5,0,0),w.halfHeight.set(0,v.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),p++}else if(v.isPointLight){let w=i.point[m];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(_),m++}else if(v.isHemisphereLight){let w=i.hemi[u];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(_),u++}}}return{setup:c,setupView:l,state:i}}function ya(r,e){let t=new Ff(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(f){n.push(f)}function o(f){i.push(f)}function c(f){t.setup(n,f)}function l(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Bf(r,e){let t=new WeakMap;function n(s,a=0){let o=t.get(s),c;return o===void 0?(c=new ya(r,e),t.set(s,[c])):a>=o.length?(c=new ya(r,e),o.push(c)):c=o[a],c}function i(){t=new WeakMap}return{get:n,dispose:i}}var ba=class extends _i{constructor(e){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ma=class extends _i{constructor(e){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new L,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},kf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vf=`uniform sampler2D shadow_pass;
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
}`;function Gf(r,e,t){let n=new fr,i=new fe,s=new fe,a=new Qe,o=new ba({depthPacking:ac}),c=new Ma,l={},h=t.maxTextureSize,f={0:Tt,1:Nn,2:Ot},d=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:kf,fragmentShader:Vf}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new Dt;g.setAttribute("position",new It(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let p=new rt(g,d),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vr,this.render=function(v,w,C){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||v.length===0)return;let I=r.getRenderTarget(),x=r.getActiveCubeFace(),A=r.getActiveMipmapLevel(),R=r.state;R.setBlending(on),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let Y=0,j=v.length;Y<j;Y++){let V=v[Y],U=V.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);let q=U.getFrameExtents();if(i.multiply(q),s.copy(U.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/q.x),i.x=s.x*q.x,U.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/q.y),i.y=s.y*q.y,U.mapSize.y=s.y)),U.map===null){let K=this.type!==pi?{minFilter:ot,magFilter:ot}:{};U.map=new Ut(i.x,i.y,K),U.map.texture.name=V.name+".shadowMap",U.camera.updateProjectionMatrix()}r.setRenderTarget(U.map),r.clear();let Z=U.getViewportCount();for(let K=0;K<Z;K++){let H=U.getViewport(K);a.set(s.x*H.x,s.y*H.y,s.x*H.z,s.y*H.w),R.viewport(a),U.updateMatrices(V,K),n=U.getFrustum(),S(w,C,U.camera,V,this.type)}U.isPointLightShadow!==!0&&this.type===pi&&_(U,C),U.needsUpdate=!1}u.needsUpdate=!1,r.setRenderTarget(I,x,A)};function _(v,w){let C=e.update(p);d.defines.VSM_SAMPLES!==v.blurSamples&&(d.defines.VSM_SAMPLES=v.blurSamples,m.defines.VSM_SAMPLES=v.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new Ut(i.x,i.y)),d.uniforms.shadow_pass.value=v.map.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,r.setRenderTarget(v.mapPass),r.clear(),r.renderBufferDirect(w,null,C,d,p,null),m.uniforms.shadow_pass.value=v.mapPass.texture,m.uniforms.resolution.value=v.mapSize,m.uniforms.radius.value=v.radius,r.setRenderTarget(v.map),r.clear(),r.renderBufferDirect(w,null,C,m,p,null)}function y(v,w,C,I,x,A){let R=null,Y=C.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(Y!==void 0?R=Y:R=C.isPointLight===!0?c:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0){let j=R.uuid,V=w.uuid,U=l[j];U===void 0&&(U={},l[j]=U);let q=U[V];q===void 0&&(q=R.clone(),U[V]=q),R=q}return R.visible=w.visible,R.wireframe=w.wireframe,A===pi?R.side=w.shadowSide!==null?w.shadowSide:w.side:R.side=w.shadowSide!==null?w.shadowSide:f[w.side],R.alphaMap=w.alphaMap,R.alphaTest=w.alphaTest,R.clipShadows=w.clipShadows,R.clippingPlanes=w.clippingPlanes,R.clipIntersection=w.clipIntersection,R.displacementMap=w.displacementMap,R.displacementScale=w.displacementScale,R.displacementBias=w.displacementBias,R.wireframeLinewidth=w.wireframeLinewidth,R.linewidth=w.linewidth,C.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(C.matrixWorld),R.nearDistance=I,R.farDistance=x),R}function S(v,w,C,I,x){if(v.visible===!1)return;if(v.layers.test(w.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&x===pi)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,v.matrixWorld);let Y=e.update(v),j=v.material;if(Array.isArray(j)){let V=Y.groups;for(let U=0,q=V.length;U<q;U++){let Z=V[U],K=j[Z.materialIndex];if(K&&K.visible){let H=y(v,K,I,C.near,C.far,x);r.renderBufferDirect(C,null,Y,H,v,Z)}}}else if(j.visible){let V=y(v,j,I,C.near,C.far,x);r.renderBufferDirect(C,null,Y,V,v,null)}}let R=v.children;for(let Y=0,j=R.length;Y<j;Y++)S(R[Y],w,C,I,x)}}function Hf(r,e,t){let n=t.isWebGL2;function i(){let P=!1,oe=new Qe,ee=null,X=new Qe(0,0,0,0);return{setMask:function(se){ee!==se&&!P&&(r.colorMask(se,se,se,se),ee=se)},setLocked:function(se){P=se},setClear:function(se,ve,Be,Ge,sn){sn===!0&&(se*=Ge,ve*=Ge,Be*=Ge),oe.set(se,ve,Be,Ge),X.equals(oe)===!1&&(r.clearColor(se,ve,Be,Ge),X.copy(oe))},reset:function(){P=!1,ee=null,X.set(-1,0,0,0)}}}function s(){let P=!1,oe=null,ee=null,X=null;return{setTest:function(se){se?Le(2929):xe(2929)},setMask:function(se){oe!==se&&!P&&(r.depthMask(se),oe=se)},setFunc:function(se){if(ee!==se){switch(se){case Ll:r.depthFunc(512);break;case Rl:r.depthFunc(519);break;case Il:r.depthFunc(513);break;case Ss:r.depthFunc(515);break;case Dl:r.depthFunc(514);break;case zl:r.depthFunc(518);break;case Nl:r.depthFunc(516);break;case Ol:r.depthFunc(517);break;default:r.depthFunc(515)}ee=se}},setLocked:function(se){P=se},setClear:function(se){X!==se&&(r.clearDepth(se),X=se)},reset:function(){P=!1,oe=null,ee=null,X=null}}}function a(){let P=!1,oe=null,ee=null,X=null,se=null,ve=null,Be=null,Ge=null,sn=null;return{setTest:function(ke){P||(ke?Le(2960):xe(2960))},setMask:function(ke){oe!==ke&&!P&&(r.stencilMask(ke),oe=ke)},setFunc:function(ke,Wt,wt){(ee!==ke||X!==Wt||se!==wt)&&(r.stencilFunc(ke,Wt,wt),ee=ke,X=Wt,se=wt)},setOp:function(ke,Wt,wt){(ve!==ke||Be!==Wt||Ge!==wt)&&(r.stencilOp(ke,Wt,wt),ve=ke,Be=Wt,Ge=wt)},setLocked:function(ke){P=ke},setClear:function(ke){sn!==ke&&(r.clearStencil(ke),sn=ke)},reset:function(){P=!1,oe=null,ee=null,X=null,se=null,ve=null,Be=null,Ge=null,sn=null}}}let o=new i,c=new s,l=new a,h=new WeakMap,f=new WeakMap,d={},m={},g=new WeakMap,p=[],u=null,_=!1,y=null,S=null,v=null,w=null,C=null,I=null,x=null,A=!1,R=null,Y=null,j=null,V=null,U=null,q=r.getParameter(35661),Z=!1,K=0,H=r.getParameter(7938);H.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(H)[1]),Z=K>=1):H.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),Z=K>=2);let N=null,F={},te=r.getParameter(3088),J=r.getParameter(2978),ie=new Qe().fromArray(te),he=new Qe().fromArray(J);function _e(P,oe,ee){let X=new Uint8Array(4),se=r.createTexture();r.bindTexture(P,se),r.texParameteri(P,10241,9728),r.texParameteri(P,10240,9728);for(let ve=0;ve<ee;ve++)r.texImage2D(oe+ve,0,6408,1,1,0,6408,5121,X);return se}let W={};W[3553]=_e(3553,3553,1),W[34067]=_e(34067,34069,6),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Le(2929),c.setFunc(Ss),Ye(!1),pt(kr),Le(2884),We(on);function Le(P){d[P]!==!0&&(r.enable(P),d[P]=!0)}function xe(P){d[P]!==!1&&(r.disable(P),d[P]=!1)}function ye(P,oe){return m[P]!==oe?(r.bindFramebuffer(P,oe),m[P]=oe,n&&(P===36009&&(m[36160]=oe),P===36160&&(m[36009]=oe)),!0):!1}function ce(P,oe){let ee=p,X=!1;if(P)if(ee=g.get(oe),ee===void 0&&(ee=[],g.set(oe,ee)),P.isWebGLMultipleRenderTargets){let se=P.texture;if(ee.length!==se.length||ee[0]!==36064){for(let ve=0,Be=se.length;ve<Be;ve++)ee[ve]=36064+ve;ee.length=se.length,X=!0}}else ee[0]!==36064&&(ee[0]=36064,X=!0);else ee[0]!==1029&&(ee[0]=1029,X=!0);X&&(t.isWebGL2?r.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function Ie(P){return u!==P?(r.useProgram(P),u=P,!0):!1}let Se={[Un]:32774,[_l]:32778,[yl]:32779};if(n)Se[qr]=32775,Se[Xr]=32776;else{let P=e.get("EXT_blend_minmax");P!==null&&(Se[qr]=P.MIN_EXT,Se[Xr]=P.MAX_EXT)}let me={[bl]:0,[Ml]:1,[wl]:768,[Yr]:770,[Pl]:776,[El]:774,[Tl]:772,[Sl]:769,[Zr]:771,[Cl]:775,[Al]:773};function We(P,oe,ee,X,se,ve,Be,Ge){if(P===on){_===!0&&(xe(3042),_=!1);return}if(_===!1&&(Le(3042),_=!0),P!==vl){if(P!==y||Ge!==A){if((S!==Un||C!==Un)&&(r.blendEquation(32774),S=Un,C=Un),Ge)switch(P){case On:r.blendFuncSeparate(1,771,1,771);break;case Gr:r.blendFunc(1,1);break;case Hr:r.blendFuncSeparate(0,769,0,1);break;case Wr:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case On:r.blendFuncSeparate(770,771,1,771);break;case Gr:r.blendFunc(770,1);break;case Hr:r.blendFuncSeparate(0,769,0,1);break;case Wr:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}v=null,w=null,I=null,x=null,y=P,A=Ge}return}se=se||oe,ve=ve||ee,Be=Be||X,(oe!==S||se!==C)&&(r.blendEquationSeparate(Se[oe],Se[se]),S=oe,C=se),(ee!==v||X!==w||ve!==I||Be!==x)&&(r.blendFuncSeparate(me[ee],me[X],me[ve],me[Be]),v=ee,w=X,I=ve,x=Be),y=P,A=null}function it(P,oe){P.side===Ot?xe(2884):Le(2884);let ee=P.side===Tt;oe&&(ee=!ee),Ye(ee),P.blending===On&&P.transparent===!1?We(on):We(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),c.setFunc(P.depthFunc),c.setTest(P.depthTest),c.setMask(P.depthWrite),o.setMask(P.colorWrite);let X=P.stencilWrite;l.setTest(X),X&&(l.setMask(P.stencilWriteMask),l.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),l.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),De(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Le(32926):xe(32926)}function Ye(P){R!==P&&(P?r.frontFace(2304):r.frontFace(2305),R=P)}function pt(P){P!==ml?(Le(2884),P!==Y&&(P===kr?r.cullFace(1029):P===gl?r.cullFace(1028):r.cullFace(1032))):xe(2884),Y=P}function Ze(P){P!==j&&(Z&&r.lineWidth(P),j=P)}function De(P,oe,ee){P?(Le(32823),(V!==oe||U!==ee)&&(r.polygonOffset(oe,ee),V=oe,U=ee)):xe(32823)}function bt(P){P?Le(3089):xe(3089)}function Mt(P){P===void 0&&(P=33984+q-1),N!==P&&(r.activeTexture(P),N=P)}function T(P,oe,ee){ee===void 0&&(N===null?ee=33984+q-1:ee=N);let X=F[ee];X===void 0&&(X={type:void 0,texture:void 0},F[ee]=X),(X.type!==P||X.texture!==oe)&&(N!==ee&&(r.activeTexture(ee),N=ee),r.bindTexture(P,oe||W[P]),X.type=P,X.texture=oe)}function b(){let P=F[N];P!==void 0&&P.type!==void 0&&(r.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function B(){try{r.compressedTexImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{r.texSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{r.texSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ge(){try{r.texStorage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function E(){try{r.texStorage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function z(){try{r.texImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ae(){try{r.texImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ue(P){ie.equals(P)===!1&&(r.scissor(P.x,P.y,P.z,P.w),ie.copy(P))}function le(P){he.equals(P)===!1&&(r.viewport(P.x,P.y,P.z,P.w),he.copy(P))}function de(P,oe){let ee=f.get(oe);ee===void 0&&(ee=new WeakMap,f.set(oe,ee));let X=ee.get(P);X===void 0&&(X=r.getUniformBlockIndex(oe,P.name),ee.set(P,X))}function be(P,oe){let X=f.get(oe).get(P);h.get(P)!==X&&(r.uniformBlockBinding(oe,X,P.__bindingPointIndex),h.set(P,X))}function Pe(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},N=null,F={},m={},g=new WeakMap,p=[],u=null,_=!1,y=null,S=null,v=null,w=null,C=null,I=null,x=null,A=!1,R=null,Y=null,j=null,V=null,U=null,ie.set(0,0,r.canvas.width,r.canvas.height),he.set(0,0,r.canvas.width,r.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Le,disable:xe,bindFramebuffer:ye,drawBuffers:ce,useProgram:Ie,setBlending:We,setMaterial:it,setFlipSided:Ye,setCullFace:pt,setLineWidth:Ze,setPolygonOffset:De,setScissorTest:bt,activeTexture:Mt,bindTexture:T,unbindTexture:b,compressedTexImage2D:B,texImage2D:z,texImage3D:ae,updateUBOMapping:de,uniformBlockBinding:be,texStorage2D:ge,texStorage3D:E,texSubImage2D:$,texSubImage3D:Q,compressedTexSubImage2D:re,scissor:ue,viewport:le,reset:Pe}}function Wf(r,e,t,n,i,s,a){let o=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,h=i.maxTextureSize,f=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap,p,u=new WeakMap,_=!1;try{_=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(T,b){return _?new OffscreenCanvas(T,b):Bi("canvas")}function S(T,b,B,$){let Q=1;if((T.width>$||T.height>$)&&(Q=$/Math.max(T.width,T.height)),Q<1||b===!0)if(typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&T instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&T instanceof ImageBitmap){let re=b?Us:Math.floor,ge=re(Q*T.width),E=re(Q*T.height);p===void 0&&(p=y(ge,E));let z=B?y(ge,E):p;return z.width=ge,z.height=E,z.getContext("2d").drawImage(T,0,0,ge,E),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+ge+"x"+E+")."),z}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function v(T){return Eo(T.width)&&Eo(T.height)}function w(T){return o?!1:T.wrapS!==Je||T.wrapT!==Je||T.minFilter!==ot&&T.minFilter!==Ue}function C(T,b){return T.generateMipmaps&&b&&T.minFilter!==ot&&T.minFilter!==Ue}function I(T){r.generateMipmap(T)}function x(T,b,B,$,Q=!1){if(o===!1)return b;if(T!==null){if(r[T]!==void 0)return r[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let re=b;return b===6403&&(B===5126&&(re=33326),B===5131&&(re=33325),B===5121&&(re=33321)),b===33319&&(B===5126&&(re=33328),B===5131&&(re=33327),B===5121&&(re=33323)),b===6408&&(B===5126&&(re=34836),B===5131&&(re=34842),B===5121&&(re=$===Fe&&Q===!1?35907:32856),B===32819&&(re=32854),B===32820&&(re=32855)),(re===33325||re===33326||re===33327||re===33328||re===34842||re===34836)&&e.get("EXT_color_buffer_float"),re}function A(T,b,B){return C(T,B)===!0||T.isFramebufferTexture&&T.minFilter!==ot&&T.minFilter!==Ue?Math.log2(Math.max(b.width,b.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?b.mipmaps.length:1}function R(T){return T===ot||T===Kr||T===jr?9728:9729}function Y(T){let b=T.target;b.removeEventListener("dispose",Y),V(b),b.isVideoTexture&&g.delete(b)}function j(T){let b=T.target;b.removeEventListener("dispose",j),q(b)}function V(T){let b=n.get(T);if(b.__webglInit===void 0)return;let B=T.source,$=u.get(B);if($){let Q=$[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&U(T),Object.keys($).length===0&&u.delete(B)}n.remove(T)}function U(T){let b=n.get(T);r.deleteTexture(b.__webglTexture);let B=T.source,$=u.get(B);delete $[b.__cacheKey],a.memory.textures--}function q(T){let b=T.texture,B=n.get(T),$=n.get(b);if($.__webglTexture!==void 0&&(r.deleteTexture($.__webglTexture),a.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++)r.deleteFramebuffer(B.__webglFramebuffer[Q]),B.__webglDepthbuffer&&r.deleteRenderbuffer(B.__webglDepthbuffer[Q]);else{if(r.deleteFramebuffer(B.__webglFramebuffer),B.__webglDepthbuffer&&r.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&r.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let Q=0;Q<B.__webglColorRenderbuffer.length;Q++)B.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(B.__webglColorRenderbuffer[Q]);B.__webglDepthRenderbuffer&&r.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let Q=0,re=b.length;Q<re;Q++){let ge=n.get(b[Q]);ge.__webglTexture&&(r.deleteTexture(ge.__webglTexture),a.memory.textures--),n.remove(b[Q])}n.remove(b),n.remove(T)}let Z=0;function K(){Z=0}function H(){let T=Z;return T>=c&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+c),Z+=1,T}function N(T){let b=[];return b.push(T.wrapS),b.push(T.wrapT),b.push(T.magFilter),b.push(T.minFilter),b.push(T.anisotropy),b.push(T.internalFormat),b.push(T.format),b.push(T.type),b.push(T.generateMipmaps),b.push(T.premultiplyAlpha),b.push(T.flipY),b.push(T.unpackAlignment),b.push(T.encoding),b.join()}function F(T,b){let B=n.get(T);if(T.isVideoTexture&&bt(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){let $=T.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(B,T,b);return}}t.bindTexture(3553,B.__webglTexture,33984+b)}function te(T,b){let B=n.get(T);if(T.version>0&&B.__version!==T.version){xe(B,T,b);return}t.bindTexture(35866,B.__webglTexture,33984+b)}function J(T,b){let B=n.get(T);if(T.version>0&&B.__version!==T.version){xe(B,T,b);return}t.bindTexture(32879,B.__webglTexture,33984+b)}function ie(T,b){let B=n.get(T);if(T.version>0&&B.__version!==T.version){ye(B,T,b);return}t.bindTexture(34067,B.__webglTexture,33984+b)}let he={[kn]:10497,[Je]:33071,[Es]:33648},_e={[ot]:9728,[Kr]:9984,[jr]:9986,[Ue]:9729,[Wl]:9985,[Ni]:9987};function W(T,b,B){if(B?(r.texParameteri(T,10242,he[b.wrapS]),r.texParameteri(T,10243,he[b.wrapT]),(T===32879||T===35866)&&r.texParameteri(T,32882,he[b.wrapR]),r.texParameteri(T,10240,_e[b.magFilter]),r.texParameteri(T,10241,_e[b.minFilter])):(r.texParameteri(T,10242,33071),r.texParameteri(T,10243,33071),(T===32879||T===35866)&&r.texParameteri(T,32882,33071),(b.wrapS!==Je||b.wrapT!==Je)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(T,10240,R(b.magFilter)),r.texParameteri(T,10241,R(b.minFilter)),b.minFilter!==ot&&b.minFilter!==Ue&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){let $=e.get("EXT_texture_filter_anisotropic");if(b.type===Xt&&e.has("OES_texture_float_linear")===!1||o===!1&&b.type===mi&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(r.texParameterf(T,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function Le(T,b){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,b.addEventListener("dispose",Y));let $=b.source,Q=u.get($);Q===void 0&&(Q={},u.set($,Q));let re=N(b);if(re!==T.__cacheKey){Q[re]===void 0&&(Q[re]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Q[re].usedTimes++;let ge=Q[T.__cacheKey];ge!==void 0&&(Q[T.__cacheKey].usedTimes--,ge.usedTimes===0&&U(b)),T.__cacheKey=re,T.__webglTexture=Q[re].texture}return B}function xe(T,b,B){let $=3553;b.isDataArrayTexture&&($=35866),b.isData3DTexture&&($=32879);let Q=Le(T,b),re=b.source;t.bindTexture($,T.__webglTexture,33984+B);let ge=n.get(re);if(re.version!==ge.__version||Q===!0){t.activeTexture(33984+B),r.pixelStorei(37440,b.flipY),r.pixelStorei(37441,b.premultiplyAlpha),r.pixelStorei(3317,b.unpackAlignment),r.pixelStorei(37443,0);let E=w(b)&&v(b.image)===!1,z=S(b.image,E,!1,h);z=Mt(b,z);let ae=v(z)||o,ue=s.convert(b.format,b.encoding),le=s.convert(b.type),de=x(b.internalFormat,ue,le,b.encoding,b.isVideoTexture);W($,b,ae);let be,Pe=b.mipmaps,P=o&&b.isVideoTexture!==!0,oe=ge.__version===void 0||Q===!0,ee=A(b,z,ae);if(b.isDepthTexture)de=6402,o?b.type===Xt?de=36012:b.type===bn?de=33190:b.type===Vn?de=35056:de=33189:b.type===Xt&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Mn&&de===6402&&b.type!==Qr&&b.type!==bn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=bn,le=s.convert(b.type)),b.format===Gn&&de===6402&&(de=34041,b.type!==Vn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Vn,le=s.convert(b.type))),oe&&(P?t.texStorage2D(3553,1,de,z.width,z.height):t.texImage2D(3553,0,de,z.width,z.height,0,ue,le,null));else if(b.isDataTexture)if(Pe.length>0&&ae){P&&oe&&t.texStorage2D(3553,ee,de,Pe[0].width,Pe[0].height);for(let X=0,se=Pe.length;X<se;X++)be=Pe[X],P?t.texSubImage2D(3553,X,0,0,be.width,be.height,ue,le,be.data):t.texImage2D(3553,X,de,be.width,be.height,0,ue,le,be.data);b.generateMipmaps=!1}else P?(oe&&t.texStorage2D(3553,ee,de,z.width,z.height),t.texSubImage2D(3553,0,0,0,z.width,z.height,ue,le,z.data)):t.texImage2D(3553,0,de,z.width,z.height,0,ue,le,z.data);else if(b.isCompressedTexture){P&&oe&&t.texStorage2D(3553,ee,de,Pe[0].width,Pe[0].height);for(let X=0,se=Pe.length;X<se;X++)be=Pe[X],b.format!==He?ue!==null?P?t.compressedTexSubImage2D(3553,X,0,0,be.width,be.height,ue,be.data):t.compressedTexImage2D(3553,X,de,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?t.texSubImage2D(3553,X,0,0,be.width,be.height,ue,le,be.data):t.texImage2D(3553,X,de,be.width,be.height,0,ue,le,be.data)}else if(b.isDataArrayTexture)P?(oe&&t.texStorage3D(35866,ee,de,z.width,z.height,z.depth),t.texSubImage3D(35866,0,0,0,0,z.width,z.height,z.depth,ue,le,z.data)):t.texImage3D(35866,0,de,z.width,z.height,z.depth,0,ue,le,z.data);else if(b.isData3DTexture)P?(oe&&t.texStorage3D(32879,ee,de,z.width,z.height,z.depth),t.texSubImage3D(32879,0,0,0,0,z.width,z.height,z.depth,ue,le,z.data)):t.texImage3D(32879,0,de,z.width,z.height,z.depth,0,ue,le,z.data);else if(b.isFramebufferTexture){if(oe)if(P)t.texStorage2D(3553,ee,de,z.width,z.height);else{let X=z.width,se=z.height;for(let ve=0;ve<ee;ve++)t.texImage2D(3553,ve,de,X,se,0,ue,le,null),X>>=1,se>>=1}}else if(Pe.length>0&&ae){P&&oe&&t.texStorage2D(3553,ee,de,Pe[0].width,Pe[0].height);for(let X=0,se=Pe.length;X<se;X++)be=Pe[X],P?t.texSubImage2D(3553,X,0,0,ue,le,be):t.texImage2D(3553,X,de,ue,le,be);b.generateMipmaps=!1}else P?(oe&&t.texStorage2D(3553,ee,de,z.width,z.height),t.texSubImage2D(3553,0,0,0,ue,le,z)):t.texImage2D(3553,0,de,ue,le,z);C(b,ae)&&I($),ge.__version=re.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function ye(T,b,B){if(b.image.length!==6)return;let $=Le(T,b),Q=b.source;t.bindTexture(34067,T.__webglTexture,33984+B);let re=n.get(Q);if(Q.version!==re.__version||$===!0){t.activeTexture(33984+B),r.pixelStorei(37440,b.flipY),r.pixelStorei(37441,b.premultiplyAlpha),r.pixelStorei(3317,b.unpackAlignment),r.pixelStorei(37443,0);let ge=b.isCompressedTexture||b.image[0].isCompressedTexture,E=b.image[0]&&b.image[0].isDataTexture,z=[];for(let X=0;X<6;X++)!ge&&!E?z[X]=S(b.image[X],!1,!0,l):z[X]=E?b.image[X].image:b.image[X],z[X]=Mt(b,z[X]);let ae=z[0],ue=v(ae)||o,le=s.convert(b.format,b.encoding),de=s.convert(b.type),be=x(b.internalFormat,le,de,b.encoding),Pe=o&&b.isVideoTexture!==!0,P=re.__version===void 0||$===!0,oe=A(b,ae,ue);W(34067,b,ue);let ee;if(ge){Pe&&P&&t.texStorage2D(34067,oe,be,ae.width,ae.height);for(let X=0;X<6;X++){ee=z[X].mipmaps;for(let se=0;se<ee.length;se++){let ve=ee[se];b.format!==He?le!==null?Pe?t.compressedTexSubImage2D(34069+X,se,0,0,ve.width,ve.height,le,ve.data):t.compressedTexImage2D(34069+X,se,be,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?t.texSubImage2D(34069+X,se,0,0,ve.width,ve.height,le,de,ve.data):t.texImage2D(34069+X,se,be,ve.width,ve.height,0,le,de,ve.data)}}}else{ee=b.mipmaps,Pe&&P&&(ee.length>0&&oe++,t.texStorage2D(34067,oe,be,z[0].width,z[0].height));for(let X=0;X<6;X++)if(E){Pe?t.texSubImage2D(34069+X,0,0,0,z[X].width,z[X].height,le,de,z[X].data):t.texImage2D(34069+X,0,be,z[X].width,z[X].height,0,le,de,z[X].data);for(let se=0;se<ee.length;se++){let Be=ee[se].image[X].image;Pe?t.texSubImage2D(34069+X,se+1,0,0,Be.width,Be.height,le,de,Be.data):t.texImage2D(34069+X,se+1,be,Be.width,Be.height,0,le,de,Be.data)}}else{Pe?t.texSubImage2D(34069+X,0,0,0,le,de,z[X]):t.texImage2D(34069+X,0,be,le,de,z[X]);for(let se=0;se<ee.length;se++){let ve=ee[se];Pe?t.texSubImage2D(34069+X,se+1,0,0,le,de,ve.image[X]):t.texImage2D(34069+X,se+1,be,le,de,ve.image[X])}}}C(b,ue)&&I(34067),re.__version=Q.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function ce(T,b,B,$,Q){let re=s.convert(B.format,B.encoding),ge=s.convert(B.type),E=x(B.internalFormat,re,ge,B.encoding);n.get(b).__hasExternalTextures||(Q===32879||Q===35866?t.texImage3D(Q,0,E,b.width,b.height,b.depth,0,re,ge,null):t.texImage2D(Q,0,E,b.width,b.height,0,re,ge,null)),t.bindFramebuffer(36160,T),De(b)?d.framebufferTexture2DMultisampleEXT(36160,$,Q,n.get(B).__webglTexture,0,Ze(b)):r.framebufferTexture2D(36160,$,Q,n.get(B).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ie(T,b,B){if(r.bindRenderbuffer(36161,T),b.depthBuffer&&!b.stencilBuffer){let $=33189;if(B||De(b)){let Q=b.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Xt?$=36012:Q.type===bn&&($=33190));let re=Ze(b);De(b)?d.renderbufferStorageMultisampleEXT(36161,re,$,b.width,b.height):r.renderbufferStorageMultisample(36161,re,$,b.width,b.height)}else r.renderbufferStorage(36161,$,b.width,b.height);r.framebufferRenderbuffer(36160,36096,36161,T)}else if(b.depthBuffer&&b.stencilBuffer){let $=Ze(b);B&&De(b)===!1?r.renderbufferStorageMultisample(36161,$,35056,b.width,b.height):De(b)?d.renderbufferStorageMultisampleEXT(36161,$,35056,b.width,b.height):r.renderbufferStorage(36161,34041,b.width,b.height),r.framebufferRenderbuffer(36160,33306,36161,T)}else{let $=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let Q=0;Q<$.length;Q++){let re=$[Q],ge=s.convert(re.format,re.encoding),E=s.convert(re.type),z=x(re.internalFormat,ge,E,re.encoding),ae=Ze(b);B&&De(b)===!1?r.renderbufferStorageMultisample(36161,ae,z,b.width,b.height):De(b)?d.renderbufferStorageMultisampleEXT(36161,ae,z,b.width,b.height):r.renderbufferStorage(36161,z,b.width,b.height)}}r.bindRenderbuffer(36161,null)}function Se(T,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,T),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),F(b.depthTexture,0);let $=n.get(b.depthTexture).__webglTexture,Q=Ze(b);if(b.depthTexture.format===Mn)De(b)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,$,0,Q):r.framebufferTexture2D(36160,36096,3553,$,0);else if(b.depthTexture.format===Gn)De(b)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,$,0,Q):r.framebufferTexture2D(36160,33306,3553,$,0);else throw new Error("Unknown depthTexture format")}function me(T){let b=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!b.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Se(b.__webglFramebuffer,T)}else if(B){b.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(36160,b.__webglFramebuffer[$]),b.__webglDepthbuffer[$]=r.createRenderbuffer(),Ie(b.__webglDepthbuffer[$],T,!1)}else t.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=r.createRenderbuffer(),Ie(b.__webglDepthbuffer,T,!1);t.bindFramebuffer(36160,null)}function We(T,b,B){let $=n.get(T);b!==void 0&&ce($.__webglFramebuffer,T,T.texture,36064,3553),B!==void 0&&me(T)}function it(T){let b=T.texture,B=n.get(T),$=n.get(b);T.addEventListener("dispose",j),T.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=r.createTexture()),$.__version=b.version,a.memory.textures++);let Q=T.isWebGLCubeRenderTarget===!0,re=T.isWebGLMultipleRenderTargets===!0,ge=v(T)||o;if(Q){B.__webglFramebuffer=[];for(let E=0;E<6;E++)B.__webglFramebuffer[E]=r.createFramebuffer()}else{if(B.__webglFramebuffer=r.createFramebuffer(),re)if(i.drawBuffers){let E=T.texture;for(let z=0,ae=E.length;z<ae;z++){let ue=n.get(E[z]);ue.__webglTexture===void 0&&(ue.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&De(T)===!1){let E=re?b:[b];B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,B.__webglMultisampledFramebuffer);for(let z=0;z<E.length;z++){let ae=E[z];B.__webglColorRenderbuffer[z]=r.createRenderbuffer(),r.bindRenderbuffer(36161,B.__webglColorRenderbuffer[z]);let ue=s.convert(ae.format,ae.encoding),le=s.convert(ae.type),de=x(ae.internalFormat,ue,le,ae.encoding,T.isXRRenderTarget===!0),be=Ze(T);r.renderbufferStorageMultisample(36161,be,de,T.width,T.height),r.framebufferRenderbuffer(36160,36064+z,36161,B.__webglColorRenderbuffer[z])}r.bindRenderbuffer(36161,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),Ie(B.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(36160,null)}}if(Q){t.bindTexture(34067,$.__webglTexture),W(34067,b,ge);for(let E=0;E<6;E++)ce(B.__webglFramebuffer[E],T,b,36064,34069+E);C(b,ge)&&I(34067),t.unbindTexture()}else if(re){let E=T.texture;for(let z=0,ae=E.length;z<ae;z++){let ue=E[z],le=n.get(ue);t.bindTexture(3553,le.__webglTexture),W(3553,ue,ge),ce(B.__webglFramebuffer,T,ue,36064+z,3553),C(ue,ge)&&I(3553)}t.unbindTexture()}else{let E=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?E=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(E,$.__webglTexture),W(E,b,ge),ce(B.__webglFramebuffer,T,b,36064,E),C(b,ge)&&I(E),t.unbindTexture()}T.depthBuffer&&me(T)}function Ye(T){let b=v(T)||o,B=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let $=0,Q=B.length;$<Q;$++){let re=B[$];if(C(re,b)){let ge=T.isWebGLCubeRenderTarget?34067:3553,E=n.get(re).__webglTexture;t.bindTexture(ge,E),I(ge),t.unbindTexture()}}}function pt(T){if(o&&T.samples>0&&De(T)===!1){let b=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],B=T.width,$=T.height,Q=16384,re=[],ge=T.stencilBuffer?33306:36096,E=n.get(T),z=T.isWebGLMultipleRenderTargets===!0;if(z)for(let ae=0;ae<b.length;ae++)t.bindFramebuffer(36160,E.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+ae,36161,null),t.bindFramebuffer(36160,E.__webglFramebuffer),r.framebufferTexture2D(36009,36064+ae,3553,null,0);t.bindFramebuffer(36008,E.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,E.__webglFramebuffer);for(let ae=0;ae<b.length;ae++){re.push(36064+ae),T.depthBuffer&&re.push(ge);let ue=E.__ignoreDepthValues!==void 0?E.__ignoreDepthValues:!1;if(ue===!1&&(T.depthBuffer&&(Q|=256),T.stencilBuffer&&(Q|=1024)),z&&r.framebufferRenderbuffer(36008,36064,36161,E.__webglColorRenderbuffer[ae]),ue===!0&&(r.invalidateFramebuffer(36008,[ge]),r.invalidateFramebuffer(36009,[ge])),z){let le=n.get(b[ae]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,le,0)}r.blitFramebuffer(0,0,B,$,0,0,B,$,Q,9728),m&&r.invalidateFramebuffer(36008,re)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),z)for(let ae=0;ae<b.length;ae++){t.bindFramebuffer(36160,E.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+ae,36161,E.__webglColorRenderbuffer[ae]);let ue=n.get(b[ae]).__webglTexture;t.bindFramebuffer(36160,E.__webglFramebuffer),r.framebufferTexture2D(36009,36064+ae,3553,ue,0)}t.bindFramebuffer(36009,E.__webglMultisampledFramebuffer)}}function Ze(T){return Math.min(f,T.samples)}function De(T){let b=n.get(T);return o&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function bt(T){let b=a.render.frame;g.get(T)!==b&&(g.set(T,b),T.update())}function Mt(T,b){let B=T.encoding,$=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===zs||B!==wn&&(B===Fe?o===!1?e.has("EXT_sRGB")===!0&&$===He?(T.format=zs,T.minFilter=Ue,T.generateMipmaps=!1):b=ks.sRGBToLinear(b):($!==He||Q!==At)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",B)),b}this.allocateTextureUnit=H,this.resetTextureUnits=K,this.setTexture2D=F,this.setTexture2DArray=te,this.setTexture3D=J,this.setTextureCube=ie,this.rebindTextures=We,this.setupRenderTarget=it,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=De}function qf(r,e,t){let n=t.isWebGL2;function i(s,a=null){let o;if(s===At)return 5121;if(s===Zl)return 32819;if(s===Jl)return 32820;if(s===ql)return 5120;if(s===Xl)return 5122;if(s===Qr)return 5123;if(s===Yl)return 5124;if(s===bn)return 5125;if(s===Xt)return 5126;if(s===mi)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===$l)return 6406;if(s===He)return 6408;if(s===jl)return 6409;if(s===Ql)return 6410;if(s===Mn)return 6402;if(s===Gn)return 34041;if(s===ec)return 6403;if(s===Kl)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===zs)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===tc)return 36244;if(s===nc)return 33319;if(s===ic)return 33320;if(s===sc)return 36249;if(s===Cs||s===Ps||s===Ls||s===Rs)if(a===Fe)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Cs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ps)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ls)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Rs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Cs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ps)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ls)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Rs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===eo||s===to||s===no||s===io)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===eo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===to)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===no)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===io)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===rc)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===so||s===ro)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===so)return a===Fe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===ro)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===oo||s===ao||s===lo||s===co||s===ho||s===uo||s===fo||s===po||s===mo||s===go||s===xo||s===vo||s===_o||s===yo)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===oo)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ao)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===lo)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===co)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ho)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===uo)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===fo)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===po)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===mo)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===go)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===xo)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===vo)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===_o)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===yo)return a===Fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===bo)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===bo)return a===Fe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Vn?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}var wa=class extends dt{constructor(e=[]){super();this.isArrayCamera=!0,this.cameras=e}},Si=class extends ut{constructor(){super();this.isGroup=!0,this.type="Group"}},Xf={type:"move"},hs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let p of e.hand.values()){let u=t.getJointPose(p,n);if(l.joints[p.jointName]===void 0){let y=new Si;y.matrixAutoUpdate=!1,y.visible=!1,l.joints[p.jointName]=y,l.add(y)}let _=l.joints[p.jointName];u!==null&&(_.matrix.fromArray(u.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=u.radius),_.visible=u!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=h.position.distanceTo(f.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Xf)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}},Sa=class extends vt{constructor(e,t,n,i,s,a,o,c,l,h){if(h=h!==void 0?h:Mn,h!==Mn&&h!==Gn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Mn&&(n=bn),n===void 0&&h===Gn&&(n=Vn);super(null,i,s,a,o,c,h,n,l);this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:ot,this.minFilter=c!==void 0?c:ot,this.flipY=!1,this.generateMipmaps=!1}},Ta=class extends Jt{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",c=null,l=null,h=null,f=null,d=null,m=null,g=t.getContextAttributes(),p=null,u=null,_=[],y=[],S=new dt;S.layers.enable(1),S.viewport=new Qe;let v=new dt;v.layers.enable(2),v.viewport=new Qe;let w=[S,v],C=new wa;C.layers.enable(1),C.layers.enable(2);let I=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let F=_[N];return F===void 0&&(F=new hs,_[N]=F),F.getTargetRaySpace()},this.getControllerGrip=function(N){let F=_[N];return F===void 0&&(F=new hs,_[N]=F),F.getGripSpace()},this.getHand=function(N){let F=_[N];return F===void 0&&(F=new hs,_[N]=F),F.getHandSpace()};function A(N){let F=y.indexOf(N.inputSource);if(F===-1)return;let te=_[F];te!==void 0&&te.dispatchEvent({type:N.type,data:N.inputSource})}function R(){i.removeEventListener("select",A),i.removeEventListener("selectstart",A),i.removeEventListener("selectend",A),i.removeEventListener("squeeze",A),i.removeEventListener("squeezestart",A),i.removeEventListener("squeezeend",A),i.removeEventListener("end",R),i.removeEventListener("inputsourceschange",Y);for(let N=0;N<_.length;N++){let F=y[N];F!==null&&(y[N]=null,_[N].disconnect(F))}I=null,x=null,e.setRenderTarget(p),d=null,f=null,h=null,i=null,u=null,H.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){o=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(N){if(i=N,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",A),i.addEventListener("selectstart",A),i.addEventListener("selectend",A),i.addEventListener("squeeze",A),i.addEventListener("squeezestart",A),i.addEventListener("squeezeend",A),i.addEventListener("end",R),i.addEventListener("inputsourceschange",Y),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let F={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,F),i.updateRenderState({baseLayer:d}),u=new Ut(d.framebufferWidth,d.framebufferHeight,{format:He,type:At,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let F=null,te=null,J=null;g.depth&&(J=g.stencil?35056:33190,F=g.stencil?Gn:Mn,te=g.stencil?Vn:bn);let ie={colorFormat:32856,depthFormat:J,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(ie),i.updateRenderState({layers:[f]}),u=new Ut(f.textureWidth,f.textureHeight,{format:He,type:At,depthTexture:new Sa(f.textureWidth,f.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});let he=e.properties.get(u);he.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(1),c=null,a=await i.requestReferenceSpace(o),H.setContext(i),H.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function Y(N){for(let F=0;F<N.removed.length;F++){let te=N.removed[F],J=y.indexOf(te);J>=0&&(y[J]=null,_[J].dispatchEvent({type:"disconnected",data:te}))}for(let F=0;F<N.added.length;F++){let te=N.added[F],J=y.indexOf(te);if(J===-1){for(let he=0;he<_.length;he++)if(he>=y.length){y.push(te),J=he;break}else if(y[he]===null){y[he]=te,J=he;break}if(J===-1)break}let ie=_[J];ie&&ie.dispatchEvent({type:"connected",data:te})}}let j=new L,V=new L;function U(N,F,te){j.setFromMatrixPosition(F.matrixWorld),V.setFromMatrixPosition(te.matrixWorld);let J=j.distanceTo(V),ie=F.projectionMatrix.elements,he=te.projectionMatrix.elements,_e=ie[14]/(ie[10]-1),W=ie[14]/(ie[10]+1),Le=(ie[9]+1)/ie[5],xe=(ie[9]-1)/ie[5],ye=(ie[8]-1)/ie[0],ce=(he[8]+1)/he[0],Ie=_e*ye,Se=_e*ce,me=J/(-ye+ce),We=me*-ye;F.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(We),N.translateZ(me),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();let it=_e+me,Ye=W+me,pt=Ie-We,Ze=Se+(J-We),De=Le*W/Ye*it,bt=xe*W/Ye*it;N.projectionMatrix.makePerspective(pt,Ze,De,bt,it,Ye)}function q(N,F){F===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(F.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(i===null)return;C.near=v.near=S.near=N.near,C.far=v.far=S.far=N.far,(I!==C.near||x!==C.far)&&(i.updateRenderState({depthNear:C.near,depthFar:C.far}),I=C.near,x=C.far);let F=N.parent,te=C.cameras;q(C,F);for(let ie=0;ie<te.length;ie++)q(te[ie],F);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),N.matrix.copy(C.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale);let J=N.children;for(let ie=0,he=J.length;ie<he;ie++)J[ie].updateMatrixWorld(!0);te.length===2?U(C,S,v):C.projectionMatrix.copy(S.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(N){f!==null&&(f.fixedFoveation=N),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=N)};let Z=null;function K(N,F){if(l=F.getViewerPose(c||a),m=F,l!==null){let te=l.views;d!==null&&(e.setRenderTargetFramebuffer(u,d.framebuffer),e.setRenderTarget(u));let J=!1;te.length!==C.cameras.length&&(C.cameras.length=0,J=!0);for(let ie=0;ie<te.length;ie++){let he=te[ie],_e=null;if(d!==null)_e=d.getViewport(he);else{let Le=h.getViewSubImage(f,he);_e=Le.viewport,ie===0&&(e.setRenderTargetTextures(u,Le.colorTexture,f.ignoreDepthValues?void 0:Le.depthStencilTexture),e.setRenderTarget(u))}let W=w[ie];W===void 0&&(W=new dt,W.layers.enable(ie),W.viewport=new Qe,w[ie]=W),W.matrix.fromArray(he.transform.matrix),W.projectionMatrix.fromArray(he.projectionMatrix),W.viewport.set(_e.x,_e.y,_e.width,_e.height),ie===0&&C.matrix.copy(W.matrix),J===!0&&C.cameras.push(W)}}for(let te=0;te<_.length;te++){let J=y[te],ie=_[te];J!==null&&ie!==void 0&&ie.update(J,F,c||a)}Z&&Z(N,F),m=null}let H=new Wo;H.setAnimationLoop(K),this.setAnimationLoop=function(N){Z=N},this.dispose=function(){}}};function Yf(r,e){function t(p,u){p.fogColor.value.copy(u.color),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function n(p,u,_,y,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?i(p,u):u.isMeshToonMaterial?(i(p,u),h(p,u)):u.isMeshPhongMaterial?(i(p,u),l(p,u)):u.isMeshStandardMaterial?(i(p,u),f(p,u),u.isMeshPhysicalMaterial&&d(p,u,S)):u.isMeshMatcapMaterial?(i(p,u),m(p,u)):u.isMeshDepthMaterial?i(p,u):u.isMeshDistanceMaterial?(i(p,u),g(p,u)):u.isMeshNormalMaterial?i(p,u):u.isLineBasicMaterial?(s(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?o(p,u,_,y):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function i(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map),u.alphaMap&&(p.alphaMap.value=u.alphaMap),u.bumpMap&&(p.bumpMap.value=u.bumpMap,p.bumpScale.value=u.bumpScale,u.side===Tt&&(p.bumpScale.value*=-1)),u.displacementMap&&(p.displacementMap.value=u.displacementMap,p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap),u.normalMap&&(p.normalMap.value=u.normalMap,p.normalScale.value.copy(u.normalScale),u.side===Tt&&p.normalScale.value.negate()),u.specularMap&&(p.specularMap.value=u.specularMap),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);let _=e.get(u).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;let v=r.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*v}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity);let y;u.map?y=u.map:u.specularMap?y=u.specularMap:u.displacementMap?y=u.displacementMap:u.normalMap?y=u.normalMap:u.bumpMap?y=u.bumpMap:u.roughnessMap?y=u.roughnessMap:u.metalnessMap?y=u.metalnessMap:u.alphaMap?y=u.alphaMap:u.emissiveMap?y=u.emissiveMap:u.clearcoatMap?y=u.clearcoatMap:u.clearcoatNormalMap?y=u.clearcoatNormalMap:u.clearcoatRoughnessMap?y=u.clearcoatRoughnessMap:u.iridescenceMap?y=u.iridescenceMap:u.iridescenceThicknessMap?y=u.iridescenceThicknessMap:u.specularIntensityMap?y=u.specularIntensityMap:u.specularColorMap?y=u.specularColorMap:u.transmissionMap?y=u.transmissionMap:u.thicknessMap?y=u.thicknessMap:u.sheenColorMap?y=u.sheenColorMap:u.sheenRoughnessMap&&(y=u.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix));let S;u.aoMap?S=u.aoMap:u.lightMap&&(S=u.lightMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uv2Transform.value.copy(S.matrix))}function s(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function o(p,u,_,y){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*_,p.scale.value=y*.5,u.map&&(p.map.value=u.map),u.alphaMap&&(p.alphaMap.value=u.alphaMap),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);let S;u.map?S=u.map:u.alphaMap&&(S=u.alphaMap),S!==void 0&&(S.matrixAutoUpdate===!0&&S.updateMatrix(),p.uvTransform.value.copy(S.matrix))}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map),u.alphaMap&&(p.alphaMap.value=u.alphaMap),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);let _;u.map?_=u.map:u.alphaMap&&(_=u.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function l(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function h(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.roughness.value=u.roughness,p.metalness.value=u.metalness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap),u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function d(p,u,_){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap)),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap),u.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),p.clearcoatNormalMap.value=u.clearcoatNormalMap,u.side===Tt&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap)),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap)}function m(p,u){u.matcap&&(p.matcap.value=u.matcap)}function g(p,u){p.referencePosition.value.copy(u.referencePosition),p.nearDistance.value=u.nearDistance,p.farDistance.value=u.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Zf(r,e,t,n){let i={},s={},a=[],o=t.isWebGL2?r.getParameter(35375):0;function c(y,S){let v=S.program;n.uniformBlockBinding(y,v)}function l(y,S){let v=i[y.id];v===void 0&&(g(y),v=h(y),i[y.id]=v,y.addEventListener("dispose",u));let w=S.program;n.updateUBOMapping(y,w);let C=e.render.frame;s[y.id]!==C&&(d(y),s[y.id]=C)}function h(y){let S=f();y.__bindingPointIndex=S;let v=r.createBuffer(),w=y.__size,C=y.usage;return r.bindBuffer(35345,v),r.bufferData(35345,w,C),r.bindBuffer(35345,null),r.bindBufferBase(35345,S,v),v}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let S=i[y.id],v=y.uniforms,w=y.__cache;r.bindBuffer(35345,S);for(let C=0,I=v.length;C<I;C++){let x=v[C];if(m(x,C,w)===!0){let A=x.value,R=x.__offset;typeof A=="number"?(x.__data[0]=A,r.bufferSubData(35345,R,x.__data)):(x.value.isMatrix3?(x.__data[0]=x.value.elements[0],x.__data[1]=x.value.elements[1],x.__data[2]=x.value.elements[2],x.__data[3]=x.value.elements[0],x.__data[4]=x.value.elements[3],x.__data[5]=x.value.elements[4],x.__data[6]=x.value.elements[5],x.__data[7]=x.value.elements[0],x.__data[8]=x.value.elements[6],x.__data[9]=x.value.elements[7],x.__data[10]=x.value.elements[8],x.__data[11]=x.value.elements[0]):A.toArray(x.__data),r.bufferSubData(35345,R,x.__data))}}r.bindBuffer(35345,null)}function m(y,S,v){let w=y.value;if(v[S]===void 0)return typeof w=="number"?v[S]=w:v[S]=w.clone(),!0;if(typeof w=="number"){if(v[S]!==w)return v[S]=w,!0}else{let C=v[S];if(C.equals(w)===!1)return C.copy(w),!0}return!1}function g(y){let S=y.uniforms,v=0,w=16,C=0;for(let I=0,x=S.length;I<x;I++){let A=S[I],R=p(A);if(A.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=v,I>0){C=v%w;let Y=w-C;C!==0&&Y-R.boundary<0&&(v+=w-C,A.__offset=v)}v+=R.storage}return C=v%w,C>0&&(v+=w-C),y.__size=v,y.__cache={},this}function p(y){let S=y.value,v={boundary:0,storage:0};return typeof S=="number"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function u(y){let S=y.target;S.removeEventListener("dispose",u);let v=a.indexOf(S.__bindingPointIndex);a.splice(v,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function _(){for(let y in i)r.deleteBuffer(i[y]);a=[],i={},s={}}return{bind:c,update:l,dispose:_}}function Jf(){let r=Bi("canvas");return r.style.display="block",r}function yr(r={}){this.isWebGLRenderer=!0;let e=r.canvas!==void 0?r.canvas:Jf(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,a=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,o=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,c=r.powerPreference!==void 0?r.powerPreference:"default",l=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1,h;t!==null?h=t.getContextAttributes().alpha:h=r.alpha!==void 0?r.alpha:!1;let f=null,d=null,m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=wn,this.physicallyCorrectLights=!1,this.toneMapping=qt,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});let p=this,u=!1,_=0,y=0,S=null,v=-1,w=null,C=new Qe,I=new Qe,x=null,A=e.width,R=e.height,Y=1,j=null,V=null,U=new Qe(0,0,A,R),q=new Qe(0,0,A,R),Z=!1,K=new fr,H=!1,N=!1,F=null,te=new et,J=new fe,ie=new L,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function _e(){return S===null?Y:1}let W=t;function Le(M,O){for(let k=0;k<M.length;k++){let D=M[k],G=e.getContext(D,O);if(G!==null)return G}return null}try{let M={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ws}`),e.addEventListener("webglcontextlost",de,!1),e.addEventListener("webglcontextrestored",be,!1),e.addEventListener("webglcontextcreationerror",Pe,!1),W===null){let O=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&O.shift(),W=Le(O,M),W===null)throw Le(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let xe,ye,ce,Ie,Se,me,We,it,Ye,pt,Ze,De,bt,Mt,T,b,B,$,Q,re,ge,E,z,ae;function ue(){xe=new md(W),ye=new cd(W,xe,r),xe.init(ye),E=new qf(W,xe,ye),ce=new Hf(W,xe,ye),Ie=new vd,Se=new Rf,me=new Wf(W,xe,ce,Se,ye,E,Ie),We=new ud(p),it=new pd(p),Ye=new Pc(W,ye),z=new ad(W,xe,Ye,ye),pt=new gd(W,Ye,Ie,z),Ze=new Md(W,pt,Ye,Ie),Q=new bd(W,ye,me),b=new hd(Se),De=new Lf(p,We,it,xe,ye,z,b),bt=new Yf(p,Se),Mt=new Df,T=new Bf(xe,ye),$=new od(p,We,ce,Ze,h,a),B=new Gf(p,Ze,ye),ae=new Zf(W,Ie,ye,ce),re=new ld(W,xe,Ie,ye),ge=new xd(W,xe,Ie,ye),Ie.programs=De.programs,p.capabilities=ye,p.extensions=xe,p.properties=Se,p.renderLists=Mt,p.shadowMap=B,p.state=ce,p.info=Ie}ue();let le=new Ta(p,W);this.xr=le,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){let M=xe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=xe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(M){M!==void 0&&(Y=M,this.setSize(A,R,!1))},this.getSize=function(M){return M.set(A,R)},this.setSize=function(M,O,k){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=M,R=O,e.width=Math.floor(M*Y),e.height=Math.floor(O*Y),k!==!1&&(e.style.width=M+"px",e.style.height=O+"px"),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(A*Y,R*Y).floor()},this.setDrawingBufferSize=function(M,O,k){A=M,R=O,Y=k,e.width=Math.floor(M*k),e.height=Math.floor(O*k),this.setViewport(0,0,M,O)},this.getCurrentViewport=function(M){return M.copy(C)},this.getViewport=function(M){return M.copy(U)},this.setViewport=function(M,O,k,D){M.isVector4?U.set(M.x,M.y,M.z,M.w):U.set(M,O,k,D),ce.viewport(C.copy(U).multiplyScalar(Y).floor())},this.getScissor=function(M){return M.copy(q)},this.setScissor=function(M,O,k,D){M.isVector4?q.set(M.x,M.y,M.z,M.w):q.set(M,O,k,D),ce.scissor(I.copy(q).multiplyScalar(Y).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(M){ce.setScissorTest(Z=M)},this.setOpaqueSort=function(M){j=M},this.setTransparentSort=function(M){V=M},this.getClearColor=function(M){return M.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor.apply($,arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha.apply($,arguments)},this.clear=function(M=!0,O=!0,k=!0){let D=0;M&&(D|=16384),O&&(D|=256),k&&(D|=1024),W.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",de,!1),e.removeEventListener("webglcontextrestored",be,!1),e.removeEventListener("webglcontextcreationerror",Pe,!1),Mt.dispose(),T.dispose(),Se.dispose(),We.dispose(),it.dispose(),Ze.dispose(),z.dispose(),ae.dispose(),De.dispose(),le.dispose(),le.removeEventListener("sessionstart",ve),le.removeEventListener("sessionend",Be),F&&(F.dispose(),F=null),Ge.stop()};function de(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),u=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),u=!1;let M=Ie.autoReset,O=B.enabled,k=B.autoUpdate,D=B.needsUpdate,G=B.type;ue(),Ie.autoReset=M,B.enabled=O,B.autoUpdate=k,B.needsUpdate=D,B.type=G}function Pe(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function P(M){let O=M.target;O.removeEventListener("dispose",P),oe(O)}function oe(M){ee(M),Se.remove(M)}function ee(M){let O=Se.get(M).programs;O!==void 0&&(O.forEach(function(k){De.releaseProgram(k)}),M.isShaderMaterial&&De.releaseShaderCache(M))}this.renderBufferDirect=function(M,O,k,D,G,pe){O===null&&(O=he);let Me=G.isMesh&&G.matrixWorld.determinant()<0,Te=ul(M,O,k,D,G);ce.setMaterial(D,Me);let we=k.index,ze=k.attributes.position;if(we===null){if(ze===void 0||ze.count===0)return}else if(we.count===0)return;let Ee=1;D.wireframe===!0&&(we=pt.getWireframeAttribute(k),Ee=2),z.setup(G,D,Te,k,we);let Ce,Ve=re;we!==null&&(Ce=Ye.get(we),Ve=ge,Ve.setIndex(Ce));let xn=we!==null?we.count:ze.count,In=k.drawRange.start*Ee,Dn=k.drawRange.count*Ee,Nt=pe!==null?pe.start*Ee:0,Re=pe!==null?pe.count*Ee:1/0,zn=Math.max(In,Nt),qe=Math.min(xn,In+Dn,Nt+Re)-1,St=Math.max(0,qe-zn+1);if(St!==0){if(G.isMesh)D.wireframe===!0?(ce.setLineWidth(D.wireframeLinewidth*_e()),Ve.setMode(1)):Ve.setMode(4);else if(G.isLine){let rn=D.linewidth;rn===void 0&&(rn=1),ce.setLineWidth(rn*_e()),G.isLineSegments?Ve.setMode(1):G.isLineLoop?Ve.setMode(2):Ve.setMode(3)}else G.isPoints?Ve.setMode(0):G.isSprite&&Ve.setMode(4);if(G.isInstancedMesh)Ve.renderInstances(zn,St,G.count);else if(k.isInstancedBufferGeometry){let rn=Math.min(k.instanceCount,k._maxInstanceCount);Ve.renderInstances(zn,St,rn)}else Ve.render(zn,St)}},this.compile=function(M,O){function k(D,G,pe){D.transparent===!0&&D.side===Ot?(D.side=Tt,D.needsUpdate=!0,Di(D,G,pe),D.side=Nn,D.needsUpdate=!0,Di(D,G,pe),D.side=Ot):Di(D,G,pe)}d=T.get(M),d.init(),g.push(d),M.traverseVisible(function(D){D.isLight&&D.layers.test(O.layers)&&(d.pushLight(D),D.castShadow&&d.pushShadow(D))}),d.setupLights(p.physicallyCorrectLights),M.traverse(function(D){let G=D.material;if(G)if(Array.isArray(G))for(let pe=0;pe<G.length;pe++){let Me=G[pe];k(Me,M,D)}else k(G,M,D)}),g.pop(),d=null};let X=null;function se(M){X&&X(M)}function ve(){Ge.stop()}function Be(){Ge.start()}let Ge=new Wo;Ge.setAnimationLoop(se),typeof self!="undefined"&&Ge.setContext(self),this.setAnimationLoop=function(M){X=M,le.setAnimationLoop(M),M===null?Ge.stop():Ge.start()},le.addEventListener("sessionstart",ve),le.addEventListener("sessionend",Be),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(u===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(O),O=le.getCamera()),M.isScene===!0&&M.onBeforeRender(p,M,O,S),d=T.get(M,g.length),d.init(),g.push(d),te.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),K.setFromProjectionMatrix(te),N=this.localClippingEnabled,H=b.init(this.clippingPlanes,N,O),f=Mt.get(M,m.length),f.init(),m.push(f),sn(M,O,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(j,V),H===!0&&b.beginShadows();let k=d.state.shadowsArray;if(B.render(k,M,O),H===!0&&b.endShadows(),this.info.autoReset===!0&&this.info.reset(),$.render(f,M),d.setupLights(p.physicallyCorrectLights),O.isArrayCamera){let D=O.cameras;for(let G=0,pe=D.length;G<pe;G++){let Me=D[G];ke(f,M,Me,Me.viewport)}}else ke(f,M,O);S!==null&&(me.updateMultisampleRenderTarget(S),me.updateRenderTargetMipmap(S)),M.isScene===!0&&M.onAfterRender(p,M,O),z.resetDefaultState(),v=-1,w=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function sn(M,O,k,D){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)k=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLight)d.pushLight(M),M.castShadow&&d.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||K.intersectsSprite(M)){D&&ie.setFromMatrixPosition(M.matrixWorld).applyMatrix4(te);let Me=Ze.update(M),Te=M.material;Te.visible&&f.push(M,Me,Te,k,ie.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(M.isSkinnedMesh&&M.skeleton.frame!==Ie.render.frame&&(M.skeleton.update(),M.skeleton.frame=Ie.render.frame),!M.frustumCulled||K.intersectsObject(M))){D&&ie.setFromMatrixPosition(M.matrixWorld).applyMatrix4(te);let Me=Ze.update(M),Te=M.material;if(Array.isArray(Te)){let we=Me.groups;for(let ze=0,Ee=we.length;ze<Ee;ze++){let Ce=we[ze],Ve=Te[Ce.materialIndex];Ve&&Ve.visible&&f.push(M,Me,Ve,k,ie.z,Ce)}}else Te.visible&&f.push(M,Me,Te,k,ie.z,null)}}let pe=M.children;for(let Me=0,Te=pe.length;Me<Te;Me++)sn(pe[Me],O,k,D)}function ke(M,O,k,D){let G=M.opaque,pe=M.transmissive,Me=M.transparent;d.setupLightsView(k),pe.length>0&&Wt(G,O,k),D&&ce.viewport(C.copy(D)),G.length>0&&wt(G,O,k),pe.length>0&&wt(pe,O,k),Me.length>0&&wt(Me,O,k),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function Wt(M,O,k){let D=ye.isWebGL2;F===null&&(F=new Ut(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?mi:At,minFilter:Ni,samples:D&&s===!0?4:0})),p.getDrawingBufferSize(J),D?F.setSize(J.x,J.y):F.setSize(Us(J.x),Us(J.y));let G=p.getRenderTarget();p.setRenderTarget(F),p.clear();let pe=p.toneMapping;p.toneMapping=qt,wt(M,O,k),p.toneMapping=pe,me.updateMultisampleRenderTarget(F),me.updateRenderTargetMipmap(F),p.setRenderTarget(G)}function wt(M,O,k){let D=O.isScene===!0?O.overrideMaterial:null;for(let G=0,pe=M.length;G<pe;G++){let Me=M[G],Te=Me.object,we=Me.geometry,ze=D===null?Me.material:D,Ee=Me.group;Te.layers.test(k.layers)&&hl(Te,O,k,we,ze,Ee)}}function hl(M,O,k,D,G,pe){M.onBeforeRender(p,O,k,D,G,pe),M.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),G.onBeforeRender(p,O,k,D,M,pe),G.transparent===!0&&G.side===Ot?(G.side=Tt,G.needsUpdate=!0,p.renderBufferDirect(k,O,D,G,M,pe),G.side=Nn,G.needsUpdate=!0,p.renderBufferDirect(k,O,D,G,M,pe),G.side=Ot):p.renderBufferDirect(k,O,D,G,M,pe),M.onAfterRender(p,O,k,D,G,pe)}function Di(M,O,k){O.isScene!==!0&&(O=he);let D=Se.get(M),G=d.state.lights,pe=d.state.shadowsArray,Me=G.state.version,Te=De.getParameters(M,G.state,pe,O,k),we=De.getProgramCacheKey(Te),ze=D.programs;D.environment=M.isMeshStandardMaterial?O.environment:null,D.fog=O.fog,D.envMap=(M.isMeshStandardMaterial?it:We).get(M.envMap||D.environment),ze===void 0&&(M.addEventListener("dispose",P),ze=new Map,D.programs=ze);let Ee=ze.get(we);if(Ee!==void 0){if(D.currentProgram===Ee&&D.lightsStateVersion===Me)return Fr(M,Te),Ee}else Te.uniforms=De.getUniforms(M),M.onBuild(k,Te,p),M.onBeforeCompile(Te,p),Ee=De.acquireProgram(Te,we),ze.set(we,Ee),D.uniforms=Te.uniforms;let Ce=D.uniforms;(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ce.clippingPlanes=b.uniform),Fr(M,Te),D.needsLights=fl(M),D.lightsStateVersion=Me,D.needsLights&&(Ce.ambientLightColor.value=G.state.ambient,Ce.lightProbe.value=G.state.probe,Ce.directionalLights.value=G.state.directional,Ce.directionalLightShadows.value=G.state.directionalShadow,Ce.spotLights.value=G.state.spot,Ce.spotLightShadows.value=G.state.spotShadow,Ce.rectAreaLights.value=G.state.rectArea,Ce.ltc_1.value=G.state.rectAreaLTC1,Ce.ltc_2.value=G.state.rectAreaLTC2,Ce.pointLights.value=G.state.point,Ce.pointLightShadows.value=G.state.pointShadow,Ce.hemisphereLights.value=G.state.hemi,Ce.directionalShadowMap.value=G.state.directionalShadowMap,Ce.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ce.spotShadowMap.value=G.state.spotShadowMap,Ce.spotLightMatrix.value=G.state.spotLightMatrix,Ce.spotLightMap.value=G.state.spotLightMap,Ce.pointShadowMap.value=G.state.pointShadowMap,Ce.pointShadowMatrix.value=G.state.pointShadowMatrix);let Ve=Ee.getUniforms(),xn=Mi.seqWithValue(Ve.seq,Ce);return D.currentProgram=Ee,D.uniformsList=xn,Ee}function Fr(M,O){let k=Se.get(M);k.outputEncoding=O.outputEncoding,k.instancing=O.instancing,k.skinning=O.skinning,k.morphTargets=O.morphTargets,k.morphNormals=O.morphNormals,k.morphColors=O.morphColors,k.morphTargetsCount=O.morphTargetsCount,k.numClippingPlanes=O.numClippingPlanes,k.numIntersection=O.numClipIntersection,k.vertexAlphas=O.vertexAlphas,k.vertexTangents=O.vertexTangents,k.toneMapping=O.toneMapping}function ul(M,O,k,D,G){O.isScene!==!0&&(O=he),me.resetTextureUnits();let pe=O.fog,Me=D.isMeshStandardMaterial?O.environment:null,Te=S===null?p.outputEncoding:S.isXRRenderTarget===!0?S.texture.encoding:wn,we=(D.isMeshStandardMaterial?it:We).get(D.envMap||Me),ze=D.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ee=!!D.normalMap&&!!k.attributes.tangent,Ce=!!k.morphAttributes.position,Ve=!!k.morphAttributes.normal,xn=!!k.morphAttributes.color,In=D.toneMapped?p.toneMapping:qt,Dn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Nt=Dn!==void 0?Dn.length:0,Re=Se.get(D),zn=d.state.lights;if(H===!0&&(N===!0||M!==w)){let mt=M===w&&D.id===v;b.setState(D,M,mt)}let qe=!1;D.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==zn.state.version||Re.outputEncoding!==Te||G.isInstancedMesh&&Re.instancing===!1||!G.isInstancedMesh&&Re.instancing===!0||G.isSkinnedMesh&&Re.skinning===!1||!G.isSkinnedMesh&&Re.skinning===!0||Re.envMap!==we||D.fog===!0&&Re.fog!==pe||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==b.numPlanes||Re.numIntersection!==b.numIntersection)||Re.vertexAlphas!==ze||Re.vertexTangents!==Ee||Re.morphTargets!==Ce||Re.morphNormals!==Ve||Re.morphColors!==xn||Re.toneMapping!==In||ye.isWebGL2===!0&&Re.morphTargetsCount!==Nt)&&(qe=!0):(qe=!0,Re.__version=D.version);let St=Re.currentProgram;qe===!0&&(St=Di(D,O,G));let rn=!1,fi=!1,ys=!1,ct=St.getUniforms(),vn=Re.uniforms;if(ce.useProgram(St.program)&&(rn=!0,fi=!0,ys=!0),D.id!==v&&(v=D.id,fi=!0),rn||w!==M){if(ct.setValue(W,"projectionMatrix",M.projectionMatrix),ye.logarithmicDepthBuffer&&ct.setValue(W,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),w!==M&&(w=M,fi=!0,ys=!0),D.isShaderMaterial||D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshStandardMaterial||D.envMap){let mt=ct.map.cameraPosition;mt!==void 0&&mt.setValue(W,ie.setFromMatrixPosition(M.matrixWorld))}(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&ct.setValue(W,"isOrthographic",M.isOrthographicCamera===!0),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial||D.isShadowMaterial||G.isSkinnedMesh)&&ct.setValue(W,"viewMatrix",M.matrixWorldInverse)}if(G.isSkinnedMesh){ct.setOptional(W,G,"bindMatrix"),ct.setOptional(W,G,"bindMatrixInverse");let mt=G.skeleton;mt&&(ye.floatVertexTextures?(mt.boneTexture===null&&mt.computeBoneTexture(),ct.setValue(W,"boneTexture",mt.boneTexture,me),ct.setValue(W,"boneTextureSize",mt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}let bs=k.morphAttributes;if((bs.position!==void 0||bs.normal!==void 0||bs.color!==void 0&&ye.isWebGL2===!0)&&Q.update(G,k,D,St),(fi||Re.receiveShadow!==G.receiveShadow)&&(Re.receiveShadow=G.receiveShadow,ct.setValue(W,"receiveShadow",G.receiveShadow)),D.isMeshGouraudMaterial&&D.envMap!==null&&(vn.envMap.value=we,vn.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),fi&&(ct.setValue(W,"toneMappingExposure",p.toneMappingExposure),Re.needsLights&&dl(vn,ys),pe&&D.fog===!0&&bt.refreshFogUniforms(vn,pe),bt.refreshMaterialUniforms(vn,D,Y,R,F),Mi.upload(W,Re.uniformsList,vn,me)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(Mi.upload(W,Re.uniformsList,vn,me),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&ct.setValue(W,"center",G.center),ct.setValue(W,"modelViewMatrix",G.modelViewMatrix),ct.setValue(W,"normalMatrix",G.normalMatrix),ct.setValue(W,"modelMatrix",G.matrixWorld),D.isShaderMaterial||D.isRawShaderMaterial){let mt=D.uniformsGroups;for(let Ms=0,pl=mt.length;Ms<pl;Ms++)if(ye.isWebGL2){let Br=mt[Ms];ae.update(Br,St),ae.bind(Br,St)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return St}function dl(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}function fl(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(M,O,k){Se.get(M.texture).__webglTexture=O,Se.get(M.depthTexture).__webglTexture=k;let D=Se.get(M);D.__hasExternalTextures=!0,D.__hasExternalTextures&&(D.__autoAllocateDepthBuffer=k===void 0,D.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),D.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,O){let k=Se.get(M);k.__webglFramebuffer=O,k.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(M,O=0,k=0){S=M,_=O,y=k;let D=!0;if(M){let we=Se.get(M);we.__useDefaultFramebuffer!==void 0?(ce.bindFramebuffer(36160,null),D=!1):we.__webglFramebuffer===void 0?me.setupRenderTarget(M):we.__hasExternalTextures&&me.rebindTextures(M,Se.get(M.texture).__webglTexture,Se.get(M.depthTexture).__webglTexture)}let G=null,pe=!1,Me=!1;if(M){let we=M.texture;(we.isData3DTexture||we.isDataArrayTexture)&&(Me=!0);let ze=Se.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(G=ze[O],pe=!0):ye.isWebGL2&&M.samples>0&&me.useMultisampledRTT(M)===!1?G=Se.get(M).__webglMultisampledFramebuffer:G=ze,C.copy(M.viewport),I.copy(M.scissor),x=M.scissorTest}else C.copy(U).multiplyScalar(Y).floor(),I.copy(q).multiplyScalar(Y).floor(),x=Z;if(ce.bindFramebuffer(36160,G)&&ye.drawBuffers&&D&&ce.drawBuffers(M,G),ce.viewport(C),ce.scissor(I),ce.setScissorTest(x),pe){let we=Se.get(M.texture);W.framebufferTexture2D(36160,36064,34069+O,we.__webglTexture,k)}else if(Me){let we=Se.get(M.texture),ze=O||0;W.framebufferTextureLayer(36160,36064,we.__webglTexture,k||0,ze)}v=-1},this.readRenderTargetPixels=function(M,O,k,D,G,pe,Me){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Se.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te){ce.bindFramebuffer(36160,Te);try{let we=M.texture,ze=we.format,Ee=we.type;if(ze!==He&&E.convert(ze)!==W.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ce=Ee===mi&&(xe.has("EXT_color_buffer_half_float")||ye.isWebGL2&&xe.has("EXT_color_buffer_float"));if(Ee!==At&&E.convert(Ee)!==W.getParameter(35738)&&!(Ee===Xt&&(ye.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!Ce){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-D&&k>=0&&k<=M.height-G&&W.readPixels(O,k,D,G,E.convert(ze),E.convert(Ee),pe)}finally{let we=S!==null?Se.get(S).__webglFramebuffer:null;ce.bindFramebuffer(36160,we)}}},this.copyFramebufferToTexture=function(M,O,k=0){let D=Math.pow(2,-k),G=Math.floor(O.image.width*D),pe=Math.floor(O.image.height*D);me.setTexture2D(O,0),W.copyTexSubImage2D(3553,k,0,0,M.x,M.y,G,pe),ce.unbindTexture()},this.copyTextureToTexture=function(M,O,k,D=0){let G=O.image.width,pe=O.image.height,Me=E.convert(k.format),Te=E.convert(k.type);me.setTexture2D(k,0),W.pixelStorei(37440,k.flipY),W.pixelStorei(37441,k.premultiplyAlpha),W.pixelStorei(3317,k.unpackAlignment),O.isDataTexture?W.texSubImage2D(3553,D,M.x,M.y,G,pe,Me,Te,O.image.data):O.isCompressedTexture?W.compressedTexSubImage2D(3553,D,M.x,M.y,O.mipmaps[0].width,O.mipmaps[0].height,Me,O.mipmaps[0].data):W.texSubImage2D(3553,D,M.x,M.y,Me,Te,O.image),D===0&&k.generateMipmaps&&W.generateMipmap(3553),ce.unbindTexture()},this.copyTextureToTexture3D=function(M,O,k,D,G=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let pe=M.max.x-M.min.x+1,Me=M.max.y-M.min.y+1,Te=M.max.z-M.min.z+1,we=E.convert(D.format),ze=E.convert(D.type),Ee;if(D.isData3DTexture)me.setTexture3D(D,0),Ee=32879;else if(D.isDataArrayTexture)me.setTexture2DArray(D,0),Ee=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(37440,D.flipY),W.pixelStorei(37441,D.premultiplyAlpha),W.pixelStorei(3317,D.unpackAlignment);let Ce=W.getParameter(3314),Ve=W.getParameter(32878),xn=W.getParameter(3316),In=W.getParameter(3315),Dn=W.getParameter(32877),Nt=k.isCompressedTexture?k.mipmaps[0]:k.image;W.pixelStorei(3314,Nt.width),W.pixelStorei(32878,Nt.height),W.pixelStorei(3316,M.min.x),W.pixelStorei(3315,M.min.y),W.pixelStorei(32877,M.min.z),k.isDataTexture||k.isData3DTexture?W.texSubImage3D(Ee,G,O.x,O.y,O.z,pe,Me,Te,we,ze,Nt.data):k.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(Ee,G,O.x,O.y,O.z,pe,Me,Te,we,Nt.data)):W.texSubImage3D(Ee,G,O.x,O.y,O.z,pe,Me,Te,we,ze,Nt),W.pixelStorei(3314,Ce),W.pixelStorei(32878,Ve),W.pixelStorei(3316,xn),W.pixelStorei(3315,In),W.pixelStorei(32877,Dn),G===0&&D.generateMipmaps&&W.generateMipmap(Ee),ce.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?me.setTextureCube(M,0):M.isData3DTexture?me.setTexture3D(M,0):M.isDataArrayTexture?me.setTexture2DArray(M,0):me.setTexture2D(M,0),ce.unbindTexture()},this.resetState=function(){_=0,y=0,S=null,ce.reset(),z.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}var Aa=class extends yr{};Aa.prototype.isWebGL1Renderer=!0;var Rn=class extends ut{constructor(){super();this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}};var br=class extends vt{constructor(e=null,t=1,n=1,i,s,a,o,c,l=ot,h=ot,f,d){super(null,a,o,c,l,h,i,s,f,d);this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var us=class extends Dt{constructor(e=[],t=[],n=1,i=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],a=[];o(i),l(n),h(),this.setAttribute("position",new st(s,3)),this.setAttribute("normal",new st(s.slice(),3)),this.setAttribute("uv",new st(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let S=new L,v=new L,w=new L;for(let C=0;C<t.length;C+=3)m(t[C+0],S),m(t[C+1],v),m(t[C+2],w),c(S,v,w,y)}function c(y,S,v,w){let C=w+1,I=[];for(let x=0;x<=C;x++){I[x]=[];let A=y.clone().lerp(v,x/C),R=S.clone().lerp(v,x/C),Y=C-x;for(let j=0;j<=Y;j++)j===0&&x===C?I[x][j]=A:I[x][j]=A.clone().lerp(R,j/Y)}for(let x=0;x<C;x++)for(let A=0;A<2*(C-x)-1;A++){let R=Math.floor(A/2);A%2===0?(d(I[x][R+1]),d(I[x+1][R]),d(I[x][R])):(d(I[x][R+1]),d(I[x+1][R+1]),d(I[x+1][R]))}}function l(y){let S=new L;for(let v=0;v<s.length;v+=3)S.x=s[v+0],S.y=s[v+1],S.z=s[v+2],S.normalize().multiplyScalar(y),s[v+0]=S.x,s[v+1]=S.y,s[v+2]=S.z}function h(){let y=new L;for(let S=0;S<s.length;S+=3){y.x=s[S+0],y.y=s[S+1],y.z=s[S+2];let v=u(y)/2/Math.PI+.5,w=_(y)/Math.PI+.5;a.push(v,1-w)}g(),f()}function f(){for(let y=0;y<a.length;y+=6){let S=a[y+0],v=a[y+2],w=a[y+4],C=Math.max(S,v,w),I=Math.min(S,v,w);C>.9&&I<.1&&(S<.2&&(a[y+0]+=1),v<.2&&(a[y+2]+=1),w<.2&&(a[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function m(y,S){let v=y*3;S.x=e[v+0],S.y=e[v+1],S.z=e[v+2]}function g(){let y=new L,S=new L,v=new L,w=new L,C=new fe,I=new fe,x=new fe;for(let A=0,R=0;A<s.length;A+=9,R+=6){y.set(s[A+0],s[A+1],s[A+2]),S.set(s[A+3],s[A+4],s[A+5]),v.set(s[A+6],s[A+7],s[A+8]),C.set(a[R+0],a[R+1]),I.set(a[R+2],a[R+3]),x.set(a[R+4],a[R+5]),w.copy(y).add(S).add(v).divideScalar(3);let Y=u(w);p(C,R+0,y,Y),p(I,R+2,S,Y),p(x,R+4,v,Y)}}function p(y,S,v,w){w<0&&y.x===1&&(a[S]=y.x-1),v.x===0&&v.z===0&&(a[S]=w/2/Math.PI+.5)}function u(y){return Math.atan2(y.z,-y.x)}function _(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}static fromJSON(e){return new us(e.vertices,e.indices,e.radius,e.details)}};var Ti=class extends us{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t);this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ti(e.radius,e.detail)}};var Ai=class extends Dt{constructor(e=1,t=.4,n=8,i=6,s=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],c=[],l=[],h=new L,f=new L,d=new L;for(let m=0;m<=n;m++)for(let g=0;g<=i;g++){let p=g/i*s,u=m/n*Math.PI*2;f.x=(e+t*Math.cos(u))*Math.cos(p),f.y=(e+t*Math.cos(u))*Math.sin(p),f.z=t*Math.sin(u),o.push(f.x,f.y,f.z),h.x=e*Math.cos(p),h.y=e*Math.sin(p),d.subVectors(f,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=i;g++){let p=(i+1)*m+g-1,u=(i+1)*(m-1)+g-1,_=(i+1)*(m-1)+g,y=(i+1)*m+g;a.push(p,u,y),a.push(u,_,y)}this.setIndex(a),this.setAttribute("position",new st(o,3)),this.setAttribute("normal",new st(c,3)),this.setAttribute("uv",new st(l,2))}static fromJSON(e){return new Ai(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Ei=class extends Dt{constructor(e=1,t=.4,n=64,i=8,s=2,a=3){super();this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:a},n=Math.floor(n),i=Math.floor(i);let o=[],c=[],l=[],h=[],f=new L,d=new L,m=new L,g=new L,p=new L,u=new L,_=new L;for(let S=0;S<=n;++S){let v=S/n*s*Math.PI*2;y(v,s,a,e,m),y(v+.01,s,a,e,g),u.subVectors(g,m),_.addVectors(g,m),p.crossVectors(u,_),_.crossVectors(p,u),p.normalize(),_.normalize();for(let w=0;w<=i;++w){let C=w/i*Math.PI*2,I=-t*Math.cos(C),x=t*Math.sin(C);f.x=m.x+(I*_.x+x*p.x),f.y=m.y+(I*_.y+x*p.y),f.z=m.z+(I*_.z+x*p.z),c.push(f.x,f.y,f.z),d.subVectors(f,m).normalize(),l.push(d.x,d.y,d.z),h.push(S/n),h.push(w/i)}}for(let S=1;S<=n;S++)for(let v=1;v<=i;v++){let w=(i+1)*(S-1)+(v-1),C=(i+1)*S+(v-1),I=(i+1)*S+v,x=(i+1)*(S-1)+v;o.push(w,C,x),o.push(C,I,x)}this.setIndex(o),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(l,3)),this.setAttribute("uv",new st(h,2));function y(S,v,w,C,I){let x=Math.cos(S),A=Math.sin(S),R=w/v*S,Y=Math.cos(R);I.x=C*(2+Y)*.5*x,I.y=C*(2+Y)*A*.5,I.z=C*Math.sin(R)*.5}}static fromJSON(e){return new Ei(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}};var Gt=class extends tn{constructor(e){super(e);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};function mn(r,e,t){return Ea(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)}function ds(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Ea(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var Ci=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ca=class extends Ci{constructor(e,t,n,i){super(e,t,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mo,endingEnd:Mo}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case wo:s=e,o=2*t-n;break;case So:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case wo:a=e,c=2*n-t;break;case So:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-t)/(i-t),p=g*g,u=p*g,_=-d*u+2*d*p-d*g,y=(1+d)*u+(-1.5-2*d)*p+(-.5+d)*g+1,S=(-1-m)*u+(1.5+m)*p+.5*g,v=m*u-m*p;for(let w=0;w!==o;++w)s[w]=_*a[h+w]+y*a[l+w]+S*a[c+w]+v*a[f+w];return s}},Pa=class extends Ci{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),f=1-h;for(let d=0;d!==o;++d)s[d]=a[l+d]*f+a[c+d]*h;return s}},La=class extends Ci{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Ht=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ds(t,this.TimeBufferType),this.values=ds(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ds(e.times,Array),values:ds(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new La(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Pa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ca(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Oi:t=this.InterpolantFactoryMethodDiscrete;break;case Ui:t=this.InterpolantFactoryMethodLinear;break;case Is:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Oi;case this.InterpolantFactoryMethodLinear:return Ui;case this.InterpolantFactoryMethodSmooth:return Is}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=mn(n,s,a),this.values=mn(this.values,s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&Ea(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=mn(this.times),t=mn(this.values),n=this.getValueSize(),i=this.getInterpolation()===Is,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{let f=o*n,d=f-n,m=f+n;for(let g=0;g!==n;++g){let p=t[f+g];if(p!==t[d+g]||p!==t[m+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let f=o*n,d=a*n;for(let m=0;m!==n;++m)t[d+m]=t[f+m]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=mn(e,0,a),this.values=mn(t,0,a*n)):(this.times=e,this.values=t),this}clone(){let e=mn(this.times,0),t=mn(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Ht.prototype.TimeBufferType=Float32Array;Ht.prototype.ValueBufferType=Float32Array;Ht.prototype.DefaultInterpolation=Ui;var hi=class extends Ht{};hi.prototype.ValueTypeName="bool";hi.prototype.ValueBufferType=Array;hi.prototype.DefaultInterpolation=Oi;hi.prototype.InterpolantFactoryMethodLinear=void 0;hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ra=class extends Ht{};Ra.prototype.ValueTypeName="color";var Ia=class extends Ht{};Ia.prototype.ValueTypeName="number";var Da=class extends Ci{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let h=l+o;l!==h;l+=4)Ft.slerpFlat(s,0,a,l-o,a,l,c);return s}},fs=class extends Ht{InterpolantFactoryMethodLinear(e){return new Da(this.times,this.values,this.getValueSize(),e)}};fs.prototype.ValueTypeName="quaternion";fs.prototype.DefaultInterpolation=Ui;fs.prototype.InterpolantFactoryMethodSmooth=void 0;var ui=class extends Ht{};ui.prototype.ValueTypeName="string";ui.prototype.ValueBufferType=Array;ui.prototype.DefaultInterpolation=Oi;ui.prototype.InterpolantFactoryMethodLinear=void 0;ui.prototype.InterpolantFactoryMethodSmooth=void 0;var za=class extends Ht{};za.prototype.ValueTypeName="vector";var Mr="\\[\\]\\.:\\/",$f=new RegExp("["+Mr+"]","g"),wr="[^"+Mr+"]",Kf="[^"+Mr.replace("\\.","")+"]",jf=/((?:WC+[\/:])*)/.source.replace("WC",wr),Qf=/(WCOD+)?/.source.replace("WCOD",Kf),ep=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wr),tp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wr),np=new RegExp("^"+jf+Qf+ep+tp+"$"),ip=["material","materials","bones","map"],Na=class{constructor(e,t,n){let i=n||Ne.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ne=class{constructor(e,t,n){this.path=t,this.parsedPath=n||Ne.parseTrackName(t),this.node=Ne.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ne.Composite(e,t,n):new Ne(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($f,"")}static parseTrackName(e){let t=np.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);ip.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=Ne.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ne.Composite=Na;Ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ne.prototype.GetterByBindingType=[Ne.prototype._getValue_direct,Ne.prototype._getValue_array,Ne.prototype._getValue_arrayElement,Ne.prototype._getValue_toArray];Ne.prototype.SetterByBindingTypeAndVersioning=[[Ne.prototype._setValue_direct,Ne.prototype._setValue_direct_setNeedsUpdate,Ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_array,Ne.prototype._setValue_array_setNeedsUpdate,Ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_arrayElement,Ne.prototype._setValue_arrayElement_setNeedsUpdate,Ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_fromArray,Ne.prototype._setValue_fromArray_setNeedsUpdate,Ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _p=new Float32Array(1);var Sr=class{constructor(e,t,n=0,i=1/0){this.ray=new Ks(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new $i,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Tr(e,this,n,t),n.sort(Oa),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Tr(e[i],this,n,t);return n.sort(Oa),n}};function Oa(r,e){return r.distance-e.distance}function Tr(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){let i=r.children;for(let s=0,a=i.length;s<a;s++)Tr(i[s],e,t,!0)}}var ps=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=Math.max(e,Math.min(Math.PI-e,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ht(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ws}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ws);var Ua={type:"change"},Ar={type:"start"},Fa={type:"end"},Er=class extends Jt{constructor(e,t){super();this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:_n.ROTATE,MIDDLE:_n.DOLLY,RIGHT:_n.PAN},this.touches={ONE:yn.ROTATE,TWO:yn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(E){E.addEventListener("keydown",Mt),this._domElementKeyEvents=E},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Ua),n.update(),s=i.NONE},this.update=function(){let E=new L,z=new Ft().setFromUnitVectors(e.up,new L(0,1,0)),ae=z.clone().invert(),ue=new L,le=new Ft,de=2*Math.PI;return function(){let Pe=n.object.position;E.copy(Pe).sub(n.target),E.applyQuaternion(z),o.setFromVector3(E),n.autoRotate&&s===i.NONE&&A(I()),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let P=n.minAzimuthAngle,oe=n.maxAzimuthAngle;return isFinite(P)&&isFinite(oe)&&(P<-Math.PI?P+=de:P>Math.PI&&(P-=de),oe<-Math.PI?oe+=de:oe>Math.PI&&(oe-=de),P<=oe?o.theta=Math.max(P,Math.min(oe,o.theta)):o.theta=o.theta>(P+oe)/2?Math.max(P,o.theta):Math.min(oe,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=l,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),E.setFromSpherical(o),E.applyQuaternion(ae),Pe.copy(n.target).add(E),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0)),l=1,f||ue.distanceToSquared(n.object.position)>a||8*(1-le.dot(n.object.quaternion))>a?(n.dispatchEvent(Ua),ue.copy(n.object.position),le.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",B),n.domElement.removeEventListener("pointerdown",We),n.domElement.removeEventListener("pointercancel",pt),n.domElement.removeEventListener("wheel",bt),n.domElement.removeEventListener("pointermove",it),n.domElement.removeEventListener("pointerup",Ye),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Mt)};let n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},s=i.NONE,a=1e-6,o=new ps,c=new ps,l=1,h=new L,f=!1,d=new fe,m=new fe,g=new fe,p=new fe,u=new fe,_=new fe,y=new fe,S=new fe,v=new fe,w=[],C={};function I(){return 2*Math.PI/60/60*n.autoRotateSpeed}function x(){return Math.pow(.95,n.zoomSpeed)}function A(E){c.theta-=E}function R(E){c.phi-=E}let Y=function(){let E=new L;return function(ae,ue){E.setFromMatrixColumn(ue,0),E.multiplyScalar(-ae),h.add(E)}}(),j=function(){let E=new L;return function(ae,ue){n.screenSpacePanning===!0?E.setFromMatrixColumn(ue,1):(E.setFromMatrixColumn(ue,0),E.crossVectors(n.object.up,E)),E.multiplyScalar(ae),h.add(E)}}(),V=function(){let E=new L;return function(ae,ue){let le=n.domElement;if(n.object.isPerspectiveCamera){let de=n.object.position;E.copy(de).sub(n.target);let be=E.length();be*=Math.tan(n.object.fov/2*Math.PI/180),Y(2*ae*be/le.clientHeight,n.object.matrix),j(2*ue*be/le.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(Y(ae*(n.object.right-n.object.left)/n.object.zoom/le.clientWidth,n.object.matrix),j(ue*(n.object.top-n.object.bottom)/n.object.zoom/le.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function U(E){n.object.isPerspectiveCamera?l/=E:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*E)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(E){n.object.isPerspectiveCamera?l*=E:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/E)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Z(E){d.set(E.clientX,E.clientY)}function K(E){y.set(E.clientX,E.clientY)}function H(E){p.set(E.clientX,E.clientY)}function N(E){m.set(E.clientX,E.clientY),g.subVectors(m,d).multiplyScalar(n.rotateSpeed);let z=n.domElement;A(2*Math.PI*g.x/z.clientHeight),R(2*Math.PI*g.y/z.clientHeight),d.copy(m),n.update()}function F(E){S.set(E.clientX,E.clientY),v.subVectors(S,y),v.y>0?U(x()):v.y<0&&q(x()),y.copy(S),n.update()}function te(E){u.set(E.clientX,E.clientY),_.subVectors(u,p).multiplyScalar(n.panSpeed),V(_.x,_.y),p.copy(u),n.update()}function J(E){E.deltaY<0?q(x()):E.deltaY>0&&U(x()),n.update()}function ie(E){let z=!1;switch(E.code){case n.keys.UP:V(0,n.keyPanSpeed),z=!0;break;case n.keys.BOTTOM:V(0,-n.keyPanSpeed),z=!0;break;case n.keys.LEFT:V(n.keyPanSpeed,0),z=!0;break;case n.keys.RIGHT:V(-n.keyPanSpeed,0),z=!0;break}z&&(E.preventDefault(),n.update())}function he(){if(w.length===1)d.set(w[0].pageX,w[0].pageY);else{let E=.5*(w[0].pageX+w[1].pageX),z=.5*(w[0].pageY+w[1].pageY);d.set(E,z)}}function _e(){if(w.length===1)p.set(w[0].pageX,w[0].pageY);else{let E=.5*(w[0].pageX+w[1].pageX),z=.5*(w[0].pageY+w[1].pageY);p.set(E,z)}}function W(){let E=w[0].pageX-w[1].pageX,z=w[0].pageY-w[1].pageY,ae=Math.sqrt(E*E+z*z);y.set(0,ae)}function Le(){n.enableZoom&&W(),n.enablePan&&_e()}function xe(){n.enableZoom&&W(),n.enableRotate&&he()}function ye(E){if(w.length==1)m.set(E.pageX,E.pageY);else{let ae=ge(E),ue=.5*(E.pageX+ae.x),le=.5*(E.pageY+ae.y);m.set(ue,le)}g.subVectors(m,d).multiplyScalar(n.rotateSpeed);let z=n.domElement;A(2*Math.PI*g.x/z.clientHeight),R(2*Math.PI*g.y/z.clientHeight),d.copy(m)}function ce(E){if(w.length===1)u.set(E.pageX,E.pageY);else{let z=ge(E),ae=.5*(E.pageX+z.x),ue=.5*(E.pageY+z.y);u.set(ae,ue)}_.subVectors(u,p).multiplyScalar(n.panSpeed),V(_.x,_.y),p.copy(u)}function Ie(E){let z=ge(E),ae=E.pageX-z.x,ue=E.pageY-z.y,le=Math.sqrt(ae*ae+ue*ue);S.set(0,le),v.set(0,Math.pow(S.y/y.y,n.zoomSpeed)),U(v.y),y.copy(S)}function Se(E){n.enableZoom&&Ie(E),n.enablePan&&ce(E)}function me(E){n.enableZoom&&Ie(E),n.enableRotate&&ye(E)}function We(E){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(E.pointerId),n.domElement.addEventListener("pointermove",it),n.domElement.addEventListener("pointerup",Ye)),$(E),E.pointerType==="touch"?T(E):Ze(E))}function it(E){n.enabled!==!1&&(E.pointerType==="touch"?b(E):De(E))}function Ye(E){Q(E),w.length===0&&(n.domElement.releasePointerCapture(E.pointerId),n.domElement.removeEventListener("pointermove",it),n.domElement.removeEventListener("pointerup",Ye)),n.dispatchEvent(Fa),s=i.NONE}function pt(E){Q(E)}function Ze(E){let z;switch(E.button){case 0:z=n.mouseButtons.LEFT;break;case 1:z=n.mouseButtons.MIDDLE;break;case 2:z=n.mouseButtons.RIGHT;break;default:z=-1}switch(z){case _n.DOLLY:if(n.enableZoom===!1)return;K(E),s=i.DOLLY;break;case _n.ROTATE:if(E.ctrlKey||E.metaKey||E.shiftKey){if(n.enablePan===!1)return;H(E),s=i.PAN}else{if(n.enableRotate===!1)return;Z(E),s=i.ROTATE}break;case _n.PAN:if(E.ctrlKey||E.metaKey||E.shiftKey){if(n.enableRotate===!1)return;Z(E),s=i.ROTATE}else{if(n.enablePan===!1)return;H(E),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Ar)}function De(E){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;N(E);break;case i.DOLLY:if(n.enableZoom===!1)return;F(E);break;case i.PAN:if(n.enablePan===!1)return;te(E);break}}function bt(E){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(E.preventDefault(),n.dispatchEvent(Ar),J(E),n.dispatchEvent(Fa))}function Mt(E){n.enabled===!1||n.enablePan===!1||ie(E)}function T(E){switch(re(E),w.length){case 1:switch(n.touches.ONE){case yn.ROTATE:if(n.enableRotate===!1)return;he(),s=i.TOUCH_ROTATE;break;case yn.PAN:if(n.enablePan===!1)return;_e(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case yn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Le(),s=i.TOUCH_DOLLY_PAN;break;case yn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;xe(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Ar)}function b(E){switch(re(E),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ye(E),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ce(E),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Se(E),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;me(E),n.update();break;default:s=i.NONE}}function B(E){n.enabled!==!1&&E.preventDefault()}function $(E){w.push(E)}function Q(E){delete C[E.pointerId];for(let z=0;z<w.length;z++)if(w[z].pointerId==E.pointerId){w.splice(z,1);return}}function re(E){let z=C[E.pointerId];z===void 0&&(z=new fe,C[E.pointerId]=z),z.set(E.pageX,E.pageY)}function ge(E){let z=E.pointerId===w[0].pointerId?w[1]:w[0];return C[z.pointerId]}n.domElement.addEventListener("contextmenu",B),n.domElement.addEventListener("pointerdown",We),n.domElement.addEventListener("pointercancel",pt),n.domElement.addEventListener("wheel",bt,{passive:!1}),this.update()}};var nt=new yr({antialias:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"});document.body.append(nt.domElement);nt.outputEncoding=Fe;nt.setPixelRatio(window.devicePixelRatio);var Pi=new Rn,zt=new dt(45,1,.1,100);zt.position.set(2,2,2);zt.lookAt(Pi.position);function ms(){let r=window.innerWidth,e=window.innerHeight;nt.setSize(r,e),zt.aspect=r/e,zt.updateProjectionMatrix(),nt.setPixelRatio(window.devicePixelRatio);let t=nt.getPixelRatio();for(let n of Ba)n(r,e,t)}var Ba=[];function ka(r){Ba.push(r)}window.addEventListener("resize",()=>ms());ms();function Va(r=zt){return new Er(r,nt.domElement)}var sp=Math.PI,Ap=2*sp;function Cr(r,e,t){return Math.min(t,Math.max(e,r))}function gs(r,e,t){return t<=0?r:t>=1?e:r+t*(e-r)}function gn(r,e){return r+Math.random()*(e-r)}function di(r,e,t={}){return new Ut(r,e,{wrapS:t.wrapS||Je,wrapT:t.wrapT||Je,minFilter:t.minFilter||Ue,magFilter:t.magFilter||Ue,format:t.format||He,type:t.type||At,stencilBuffer:t.stencilBuffer||!1,depthBuffer:t.depthBuffer||!0,samples:t.samples||0})}var Li=class{constructor(e,t={}){this.shader=e,this.orthoScene=new Rn,this.fbo=di(1,1,t),this.fbos=[this.fbo,this.fbo.clone()],this.currentFBO=0,this.orthoCamera=new oi(1/-2,1/2,1/2,1/-2,1e-5,1e3),this.orthoQuad=new rt(new kt(1,1),this.shader),this.orthoQuad.scale.set(1,1,1),this.orthoScene.add(this.orthoQuad)}render(e,t){t||e.setRenderTarget(this.fbos[1-this.currentFBO]),e.render(this.orthoScene,this.orthoCamera),e.setRenderTarget(null),this.currentFBO=1-this.currentFBO}get current(){return this.fbos[this.currentFBO]}get prev(){return this.fbos[1-this.currentFBO]}get texture(){return this.current.texture}setSize(e,t){this.orthoQuad.scale.set(e,t,1),this.fbos[0].setSize(e,t),this.fbos[1].setSize(e,t),this.orthoQuad.scale.set(e,t,1),this.orthoCamera.left=-e/2,this.orthoCamera.right=e/2,this.orthoCamera.top=t/2,this.orthoCamera.bottom=-t/2,this.orthoCamera.updateProjectionMatrix()}};var rp=`#version 300 es
precision highp float;

in vec3 position;
in vec2 uv;

uniform vec2 resolution;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

out vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1. );
}
`,op=`#version 300 es
precision highp float;

in vec2 vUv;

uniform sampler2D map;
uniform sampler2D test;
uniform sampler2D modulate;
uniform vec2 resolution;
uniform vec2 pointer;
uniform float feed;
uniform float kill;
uniform float da;
uniform float db;
uniform float radius;
uniform bool contact;
uniform bool spherical;

out vec4 color;

#define M_PI 3.1415926535897932384626433832795
#define M_TAU (2. * M_PI)

float azimuth( vec3 vector ) {
	return atan( vector.z, - 1.0 * vector.x );
}

float inclination( vec3 vector ) {
	return atan( - vector.y, sqrt( ( vector.x * vector.x ) + ( vector.z * vector.z ) ) );
}

vec2 lookupPolar(vec2 uv) {
  uv = mod(uv + 1., vec2(1.));
  float phi = uv.x * M_TAU;
  float theta = uv.y * M_PI;
  float x = sin(theta) * cos(phi);
  float y = sin(theta) * sin(phi);
  float z = cos(theta);
  vec3 p = vec3(x,y,z);
  vec2 uv2 = vec2( azimuth( p ) / 2. / M_PI + 0.5, inclination( p ) / M_PI + 0.5 );
  return uv2;
}

vec2 lookupRect(vec2 uv) {
  return uv;
}

vec2 lookup(vec2 uv) {
  if(spherical) {
    return lookupPolar(uv);
  }
  return lookupRect(uv);
}

void main() {

    vec2 step = 1./resolution;

    vec2 uv = texture(map, lookup(vUv)).xy;
    
    vec2 uv0 = texture(map, lookup(vUv+vec2(-step.x, 0.0))).xy;
    vec2 uv1 = texture(map, lookup(vUv+vec2(step.x, 0.0))).xy;
    vec2 uv2 = texture(map, lookup(vUv+vec2(0.0, -step.y))).xy;
    vec2 uv3 = texture(map, lookup(vUv+vec2(0.0, step.y))).xy;
    
    float delta = 1.;

    vec2 lapl = (uv0 + uv1 + uv2 + uv3 - 4.0*uv);
    float a = uv.x;
    float b = uv.y;
    float reaction = a*b*b;
    float du = da * lapl.x - reaction + feed*(1.0 - a);
    float dv = db * lapl.y + reaction - (feed+kill)*b;
    vec2 dst = uv + delta*vec2(du, dv);

    color = vec4(dst, 0., 1.);
    vec2 p = lookup(pointer);
    if(contact && length(lookup(vUv)-lookup(p))<radius) {
      color.rg = vec2(0., .9);
    }
}`,Pr=class{constructor(e,t,n){this.renderer=e,this.width=t,this.height=n,this.pointer=new fe(.5,.5);let i=new Gt({uniforms:{map:{value:null},feed:{value:.029},kill:{value:.057},da:{value:.2097},db:{value:.105},radius:{value:.005},resolution:{value:new fe(t,n)},pointer:{value:this.pointer},contact:{value:!1},spherical:{value:!1}},vertexShader:rp,fragmentShader:op});this.simulation=new Li(i,{format:He,type:Xt,minFilter:Ue,magFilter:Ue,wrapS:kn,wrapT:kn}),this.simulation.setSize(t,n)}randomize(){this.simulation.shader.uniforms.feed.value=gn(.02,.03),this.simulation.shader.uniforms.kill.value=gn(.05,.06),this.simulation.shader.uniforms.da.value=gn(.2,.21),this.simulation.shader.uniforms.db.value=gn(.1,.11)}get texture(){return this.simulation.fbos[this.simulation.currentFBO].texture}setSize(e,t){this.simulation.setSize(e,t),this.simulation.shader.uniforms.resolution.value.set(e,t)}spherical(e){this.simulation.shader.uniforms.spherical.value=e}step(){this.simulation.shader.uniforms.map.value=this.simulation.fbos[this.simulation.currentFBO].texture,this.simulation.render(this.renderer)}};var Ga=`
vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
  return mod289(((x*34.0)+10.0)*x);
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
     return mod289(((x*34.0)+10.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}`;var Ha=`
//
// Description : Array and textureless GLSL 2D/3D/4D simplex 
//               noise functions.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : stegu
//     Lastmod : 20201014 (stegu)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//               https://github.com/stegu/webgl-noise
// 

float noise3d(vec3 v)
  { 
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

// Permutations
  i = mod289(i); 
  vec4 p = permute( permute( permute( 
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients: 7x7 points over a square, mapped onto an octahedron.
// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.5 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 105.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                dot(p2,x2), dot(p3,x3) ) );
  }`;var Wa=`//
// Description : Array and textureless GLSL 2D simplex noise function.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : stegu
//     Lastmod : 20110822 (ijm)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//               https://github.com/stegu/webgl-noise
// 

float snoise(vec2 v)
  {
  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                     -0.577350269189626,  // -1.0 + 2.0 * C.x
                      0.024390243902439); // 1.0 / 41.0
// First corner
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);

// Other corners
  vec2 i1;
  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0
  //i1.y = 1.0 - i1.x;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  // x0 = x0 - 0.0 + 0.0 * C.xx ;
  // x1 = x0 - i1 + 1.0 * C.xx ;
  // x2 = x0 - 1.0 + 2.0 * C.xx ;
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

// Permutations
  i = mod289(i); // Avoid truncation effects in permutation
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
		+ i.x + vec3(0.0, i1.x, 1.0 ));

  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;

// Gradients: 41 points uniformly over a line, mapped onto a diamond.
// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

// Normalise gradients implicitly by scaling m
// Approximation of: m *= inversesqrt( a0*a0 + h*h );
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

// Compute final noise value at P
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}`;var xs=`
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
`;var vs=`
vec4 screen(vec4 base, vec4 blend, float opacity) {
  vec4 color = 1. - (1.-base) * (1.-blend);
  color = color * opacity + base * ( 1. - opacity );
  return color;
}

vec3 screen(vec3 base, vec3 blend, float opacity) {
  vec3 color = 1. - (1.-base) * (1.-blend);
  color = color * opacity + base * ( 1. - opacity );
  return color;
}`;var qa=`

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

`;var ap=`
precision highp float;

in vec3 position;
in vec3 normal;
in vec2 uv;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat3 normalMatrix;

uniform float level;

out vec2 vUv;
out vec3 vPosition;
out vec3 vViewPosition;
out vec3 vNormal;

void main() {
  vUv = uv;
  vNormal = normalMatrix * normal;
  vPosition = position - .025 * normal * level;
  vec4 mvPosition = modelViewMatrix * vec4( vPosition, 1.0 );
  vViewPosition = -mvPosition.xyz;
  gl_Position = projectionMatrix * mvPosition;
}`,lp=`precision highp float;

uniform sampler2D inputMap;
uniform float level;
uniform sampler2D gradientMap1;
uniform sampler2D gradientMap2;
uniform float time;
uniform float scale;
uniform float seed;
uniform bool sphericalUvs;

in vec2 vUv;
in vec3 vPosition;
in vec3 vViewPosition;
in vec3 vNormal;

out vec4 fragColor;

#define M_PI 3.1415926535897932384626433832795
#define M_TAU (2. * M_PI)

float aastep(float threshold, float value) {
  float afwidth = length(vec2(dFdx(value), dFdy(value))) * 0.70710678118654757;
  return smoothstep(threshold-afwidth, threshold+afwidth, value);
}

vec2 sphericalToUV(vec3 p) {
  return vec2((atan(p.x, -p.z) / M_PI + 1.) / 2., asin(p.y) / M_PI + .5);
}

${Ga}

${Ha}

${Wa}

${xs}

${vs}

${qa}

void main() {
  vec2 uv = vUv;
  if(sphericalUvs) {
    uv = sphericalToUV(normalize(vPosition.yzx*vec3(-1.,1.,1.)));
  }

  float n = smoothstep(.45, .55, .5 * noise3d(vPosition * scale * 5. + seed) + .5);
  vec4 c = texture(inputMap, uv);
  c.g += .01;
  c.g += .05 * (noise(gl_FragCoord.xy, time) - .5) * c.g;

  float a = aastep(.5 - .5 * level, c.g) - .5 * level;
  float shade = mix(0., 1., 1. - level );
  vec4 color1 = texture(gradientMap1, vec2(c.g, 0.));
  vec4 color2 = texture(gradientMap2, vec2(c.g, 0.));
  vec4 color = mix(color1, color2, n);
  vec3 h = rgb2hsv(color.rgb);
  h.y = clamp(h.y +.5, 0., 1.)  ;
  h.z *= shade;
  color.rgb = hsv2rgb(h);

  vec3 e = normalize( vViewPosition );
  float rim = pow(abs(dot(e,vNormal)),.5);
  color.rgb = mix(vec3(40., 122., 224.) / 255., color.rgb, rim * (1.-c.g));

  fragColor = vec4(color.rgb, a);
}`;var Xa=new Ai(.25,.1,100,30),cp=new Ei(.25,.1,100,30).scale(.75,.75,.75),hp=new Ti(.25,4),Lr=class extends rt{constructor(e){let t=new Gt({uniforms:{inputMap:{value:null},level:{value:0},gradientMap1:{value:null},gradientMap2:{value:null},time:{value:0},seed:{value:0},scale:{value:0},sphericalUvs:{value:!1}},vertexShader:ap,fragmentShader:lp,glslVersion:Zt,side:Ot,transparent:!0});super(Xa,t);this.renderer=e}set gradient(e){this.material.uniforms.gradientMap1.value=e}set gradient2(e){this.material.uniforms.gradientMap2.value=e}setTorus(){this.geometry=Xa}setTorusKnot(){this.geometry=cp}setSphere(){this.geometry=hp}};var Ya=["#FF6D00","#FBF8EB","#008B99","#F8E1A6","#FDA81F","#B80A01","#480D07"],Za=["#EF2006","#350000","#A11104","#ED5910","#F1B52E","#7B5614","#F7F1AC"];var Rr=class{constructor(e){this.colors=e.map(t=>new Oe(t))}getAt(e){e=Cr(e,0,1);let t=Math.floor(e*this.colors.length*.9999),n=Cr(t+1,0,this.colors.length-1),i=this.colors[t],s=this.colors[n],a=(e-t/this.colors.length)/(1/this.colors.length),o=new Oe;return o.r=gs(i.r,s.r,a),o.g=gs(i.g,s.g,a),o.b=gs(i.b,s.b,a),o}};var Ri=`
precision highp float;

in vec3 position;
in vec2 uv;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

out vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1. );
}`;var _s=class{constructor(e,t={},n){this.shader=e,this.orthoScene=new Rn,this.fbo=di(1,1,t,n),this.orthoCamera=new oi(1/-2,1/2,1/2,1/-2,1e-5,1e3),this.orthoQuad=new rt(new kt(1,1),this.shader),this.orthoQuad.scale.set(1,1,1),this.orthoScene.add(this.orthoQuad),this.texture=this.fbo.texture}render(e,t){t||e.setRenderTarget(this.fbo),e.render(this.orthoScene,this.orthoCamera),e.setRenderTarget(null)}setSize(e,t){this.fbo.setSize(e,t),this.orthoQuad.scale.set(e,t,1),this.orthoCamera.left=-e/2,this.orthoCamera.right=e/2,this.orthoCamera.top=t/2,this.orthoCamera.bottom=-t/2,this.orthoCamera.updateProjectionMatrix()}};var Ja=`
float vignette(vec2 uv, float boost, float reduction) {
  vec2 position = vUv - .5;
  return boost - length(position) * reduction;
}
`;var $a=`
vec3 gammaCorrect(vec3 color, vec3 gamma){
    return pow(color, 1.0/gamma);
}

vec3 levelRange(vec3 color, vec3 minInput, vec3 maxInput){
    return min(max(color - minInput, vec3(0.0)) / (maxInput - minInput), vec3(1.0));
}

vec3 finalLevels(vec3 color, vec3 minInput, vec3 gamma, vec3 maxInput){
    return gammaCorrect(levelRange(color, minInput, maxInput), gamma);
}`;var Ka=`
vec4 blur13(sampler2D image, vec2 uv, vec2 direction) {
  vec2 resolution = vec2(textureSize(image,0));
  vec4 color = vec4(0.0);
  vec2 off1 = vec2(1.411764705882353) * direction;
  vec2 off2 = vec2(3.2941176470588234) * direction;
  vec2 off3 = vec2(5.176470588235294) * direction;
  color += texture(image, uv) * 0.1964825501511404;
  color += texture(image, uv + (off1 / resolution)) * 0.2969069646728344;
  color += texture(image, uv - (off1 / resolution)) * 0.2969069646728344;
  color += texture(image, uv + (off2 / resolution)) * 0.09447039785044732;
  color += texture(image, uv - (off2 / resolution)) * 0.09447039785044732;
  color += texture(image, uv + (off3 / resolution)) * 0.010381362401148057;
  color += texture(image, uv - (off3 / resolution)) * 0.010381362401148057;
  return color;
}
`;var ja=`
precision highp float;

uniform sampler2D inputTexture;
uniform vec2 direction;

in vec2 vUv;

out vec4 color;

${Ka}

void main() {
  color = blur13(inputTexture, vUv, direction);
}`;var Ir=new Gt({uniforms:{inputTexture:{value:null},direction:{value:new fe(0,1)}},vertexShader:Ri,fragmentShader:ja,glslVersion:Zt}),Dr=class{constructor(e=1,t=5){this.strength=e,this.levels=t,this.blurPasses=[],this.width=1,this.height=1,this.aspectRatio=1;for(let n=0;n<this.levels;n++){let i=new Li(Ir,{format:He,encoding:Fe});this.blurPasses.push(i)}}setSize(e,t){this.width=e,this.height=t,this.aspectRatio=e/t;let n=e,i=t;for(let s=0;s<this.levels;s++)n/=2,i/=2,n=Math.round(n),i=Math.round(i),this.blurPasses[s].setSize(n,i)}set source(e){Ir.uniforms.inputTexture.value=e}render(e){let t=this.strength,n=Ir.uniforms;for(let i=0;i<this.levels;i++){let s=this.blurPasses[i];n.direction.value.set(t,0),s.render(e),n.inputTexture.value=s.current.texture,n.direction.value.set(0,t/2),s.render(e),n.inputTexture.value=s.current.texture}}};var up=`
precision highp float;

uniform vec2 resolution;
uniform sampler2D inputTexture;

uniform sampler2D blur0Texture;
uniform sampler2D blur1Texture;
uniform sampler2D blur2Texture;
uniform sampler2D blur3Texture;
uniform sampler2D blur4Texture;

uniform float vignetteBoost;
uniform float vignetteReduction;

uniform float time;

in vec2 vUv;

out vec4 fragColor;

${Ja}

${xs}

${vs}

${$a}

void main() {
  vec4 b0 = texture(blur0Texture, vUv);
  vec4 b1 = texture(blur1Texture, vUv);
  vec4 b2 = texture(blur2Texture, vUv);
  vec4 b3 = texture(blur3Texture, vUv);
  vec4 b4 = texture(blur4Texture, vUv);
  
  vec4 color = texture(inputTexture, vUv);

  vec4 b =  b0 / 40.;
  b +=  2.*b1 / 40.;
  b +=  4.*b2 / 40.;
  b +=  8.*b3 / 40.;
  b +=  16.*b4 / 40.;

  fragColor = screen(color, b,1.);
  fragColor *= vignette(vUv, vignetteBoost, vignetteReduction);
  fragColor += .01 * noise(gl_FragCoord.xy, time);
  fragColor.a = 1.;

  fragColor.rgb = finalLevels(fragColor.rgb, vec3(.1), vec3(1.), vec3(.8));
}
`,dp=`precision highp float;

uniform sampler2D inputTexture;

in vec2 vUv;

out vec4 fragColor;

void main() {
  vec2 size = vec2(textureSize(inputTexture, 0));
  int steps = 10;
  float total = 0.;
  float fSteps = float(steps);
  vec4 accum = vec4(0.);
  for( int i = 0; i < steps; i++){
    vec2 inc = 20. * float(i) / (fSteps*size);
    vec2 dir = vUv-.5;
    vec4 r = texture(inputTexture, vUv - dir * inc);
    vec4 g = texture(inputTexture, vUv);
    vec4 b = texture(inputTexture, vUv + dir * inc);
    float w = float(steps - i)/fSteps;
    accum += vec4(r.r, g.g, b.b, 0.) * w;
    total += w;
  }
  accum /= total;
  fragColor = vec4(accum.rgb , 1.);
}`,zr=class{constructor(e,t={}){this.renderer=e;let n=!0;this.colorFBO=di(1,1,{},n),this.colorShader=new Gt({uniforms:{inputTexture:{value:this.colorFBO.texture}},vertexShader:Ri,fragmentShader:dp,glslVersion:Zt}),this.colorPass=new _s(this.colorShader,{format:He,type:At,minFilter:Ue,magFilter:Ue,wrapS:Je,wrapT:Je}),this.finalShader=new Gt({uniforms:{resolution:{value:new fe(1,1)},vignetteBoost:{value:t.vignetteBoost||1.2},vignetteReduction:{value:t.vignetteReduction||1.2},inputTexture:{value:this.colorPass.texture},blur0Texture:{value:null},blur1Texture:{value:null},blur2Texture:{value:null},blur3Texture:{value:null},blur4Texture:{value:null},time:{value:0}},vertexShader:Ri,fragmentShader:up,glslVersion:Zt}),this.finalPass=new _s(this.finalShader,{format:He,type:At,minFilter:Ue,magFilter:Ue,wrapS:Je,wrapT:Je}),this.bloomPass=new Dr(5,5)}setSize(e,t){this.colorFBO.setSize(e,t),this.colorPass.setSize(e,t),this.finalPass.setSize(e,t),this.finalShader.uniforms.resolution.value.set(e,t),this.bloomPass.setSize(e,t)}render(e,t){this.renderer.setRenderTarget(this.colorFBO),this.renderer.render(e,t,this.colorFBO),this.renderer.setRenderTarget(null),this.colorPass.shader.uniforms.inputTexture.value=this.colorFBO.texture,this.colorPass.render(this.renderer),this.bloomPass.source=this.colorPass.texture,this.bloomPass.render(this.renderer),this.finalPass.shader.uniforms.blur0Texture.value=this.bloomPass.blurPasses[0].texture,this.finalPass.shader.uniforms.blur1Texture.value=this.bloomPass.blurPasses[1].texture,this.finalPass.shader.uniforms.blur2Texture.value=this.bloomPass.blurPasses[2].texture,this.finalPass.shader.uniforms.blur3Texture.value=this.bloomPass.blurPasses[3].texture,this.finalPass.shader.uniforms.blur4Texture.value=this.bloomPass.blurPasses[4].texture,this.finalPass.shader.uniforms.time.value=Math.random()*1e5,this.finalPass.render(this.renderer,!0)}};var Hm=Va(zt),Qa=new zr(nt);function el(r){let e=new Rr(r),t=[e.getAt(Math.random()),e.getAt(Math.random()),e.getAt(Math.random())],n=new Uint8Array(t.length*4);for(let s=0;s<t.length;s++){let a=t[s];n[s*3]=a.r*255,n[s*3+1]=a.g*255,n[s*3+2]=a.b*255,n[s*3+3]=255}let i=new br(n,t.length,1,He,void 0,void 0,void 0,void 0,Ue,Ue);return i.needsUpdate=!0,i}nt.setClearColor(2652896,1);var fp=256*4,pp=256,ft=new Pr(nt,fp,pp),tl=new Sr,Nr=new fe;function nl(r){Nr.x=r.clientX/window.innerWidth*2-1,Nr.y=-(r.clientY/window.innerHeight)*2+1}nt.domElement.addEventListener("pointermove",nl,!1);nt.domElement.addEventListener("pointerdown",nl,!1);var mp=40,nn=[],gp=.0025;function Or(){let r=el(Ya),e=el(Za),t=gn(-1e3,1e3),n=gn(1,2);for(let i of nn)i.gradient=r,i.gradient2=e,i.material.uniforms.seed.value=t,i.material.uniforms.scale.value=n}for(let r=0;r<mp;r++){let e=new Lr(nt),t=1+r*gp;Pi.add(e),nn.push(e)}Or();var il=0;function sl(){let r;do r=Math.floor(Math.random()*3);while(r===il);switch(il=r,r){case 0:ft.setSize(256*4,256),ft.spherical(!1);for(let e of nn)e.setTorus();break;case 1:ft.setSize(256*10,256),ft.spherical(!1);for(let e of nn)e.setTorusKnot();break;case 2:ft.setSize(1024,1024),ft.spherical(!0);for(let e of nn)e.setSphere();break}}function rl(){nt.domElement.webkitRequestFullscreen?nt.domElement.webkitRequestFullscreen():nt.domElement.requestFullscreen()}var Ii=!0;window.addEventListener("keydown",r=>{r.code==="Space"&&(Ii=!Ii),r.code==="KeyS"&&sl(),r.code==="KeyC"&&Or(),r.code==="KeyR"&&ft.randomize(),r.code==="KeyF"&&rl()});document.querySelector("#pauseBtn").addEventListener("click",r=>{Ii=!Ii});document.querySelector("#randomizeReactionBtn").addEventListener("click",r=>{ft.randomize()});document.querySelector("#randomizeColorsBtn").addEventListener("click",r=>{Or()});document.querySelector("#randomizeShapeBtn").addEventListener("click",r=>{sl()});document.querySelector("#fullscreenBtn").addEventListener("click",r=>{rl()});var ol=new fe,al=new fe(0,0),Ur=0,ll=performance.now(),xp=new rt(new kt,new yi({map:ft.texture}));xp.position.x=1;function cl(){if(Ii){Ur+=(performance.now()-ll)/1e3,ll=Ur,tl.setFromCamera(Nr,zt);let t=tl.intersectObject(nn[0]);t.length?(ol.copy(t[0].uv),ft.simulation.shader.uniforms.contact.value=!0):ft.simulation.shader.uniforms.contact.value=!1,al.copy(ol),ft.simulation.shader.uniforms.pointer.value.copy(al);for(let i=0;i<12;i++)ft.step();let n=Math.sin(Ur/1e3);for(let i=0;i<nn.length;i++){let s=nn[i];s.material.uniforms.inputMap.value=ft.texture,s.material.uniforms.level.value=1-i/nn.length,s.material.uniforms.time.value=performance.now()}}Qa.render(Pi,zt),nt.setAnimationLoop(cl)}function vp(r,e,t){Qa.setSize(r*t,e*t)}ka(vp);zt.position.set(0,0,1.25);zt.lookAt(Pi.position);ms();cl();
/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
