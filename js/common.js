//t  当前时间
//b  初始值
//c  总距离
//d  总时间
//var cur=fx(t,b,c,d)
var Tween = {
	Linear: function(t,b,c,d){ return c*t/d + b; },
	Quad: {
		easeIn: function(t,b,c,d){
			return c*(t/=d)*t + b;
		},
		easeOut: function(t,b,c,d){
			return -c *(t/=d)*(t-2) + b;
		},
		easeInOut: function(t,b,c,d){
			if ((t/=d/2) < 1) return c/2*t*t + b;
			return -c/2 * ((--t)*(t-2) - 1) + b;
		}
	},
	Cubic: {
		easeIn: function(t,b,c,d){
			return c*(t/=d)*t*t + b;
		},
		easeOut: function(t,b,c,d){
			return c*((t=t/d-1)*t*t + 1) + b;
		},
		easeInOut: function(t,b,c,d){
			if ((t/=d/2) < 1) return c/2*t*t*t + b;
			return c/2*((t-=2)*t*t + 2) + b;
		}
	},
	Quart: {
		easeIn: function(t,b,c,d){
			return c*(t/=d)*t*t*t + b;
		},
		easeOut: function(t,b,c,d){
			return -c * ((t=t/d-1)*t*t*t - 1) + b;
		},
		easeInOut: function(t,b,c,d){
			if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
			return -c/2 * ((t-=2)*t*t*t - 2) + b;
		}
	},
	Quint: {
		easeIn: function(t,b,c,d){
			return c*(t/=d)*t*t*t*t + b;
		},
		easeOut: function(t,b,c,d){
			return c*((t=t/d-1)*t*t*t*t + 1) + b;
		},
		easeInOut: function(t,b,c,d){
			if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
			return c/2*((t-=2)*t*t*t*t + 2) + b;
		}
	},
	Sine: {
		easeIn: function(t,b,c,d){
			return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
		},
		easeOut: function(t,b,c,d){
			return c * Math.sin(t/d * (Math.PI/2)) + b;
		},
		easeInOut: function(t,b,c,d){
			return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
		}
	},
	Expo: {
		easeIn: function(t,b,c,d){
			return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
		},
		easeOut: function(t,b,c,d){
			return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
		},
		easeInOut: function(t,b,c,d){
			if (t==0) return b;
			if (t==d) return b+c;
			if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
			return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
		}
	},
	Circ: {
		easeIn: function(t,b,c,d){
			return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
		},
		easeOut: function(t,b,c,d){
			return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
		},
		easeInOut: function(t,b,c,d){
			if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
			return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
		}
	},
	Elastic: {
		easeIn: function(t,b,c,d,a,p){
			if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
			if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
			else var s = p/(2*Math.PI) * Math.asin (c/a);
			return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		},
		easeOut: function(t,b,c,d,a,p){
			if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
			if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
			else var s = p/(2*Math.PI) * Math.asin (c/a);
			return (a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b);
		},
		easeInOut: function(t,b,c,d,a,p){
			if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
			if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
			else var s = p/(2*Math.PI) * Math.asin (c/a);
			if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
			return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
		}
	},
	Back: {
		easeIn: function(t,b,c,d,s){
			if (s == undefined) s = 1.70158;
			return c*(t/=d)*t*((s+1)*t - s) + b;
		},
		easeOut: function(t,b,c,d,s){
			if (s == undefined) s = 1.70158;
			return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
		},
		easeInOut: function(t,b,c,d,s){
			if (s == undefined) s = 1.70158;
			if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
			return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
		}
	},
	Bounce: {
		easeIn: function(t,b,c,d){
			return c - Tween.Bounce.easeOut(d-t, 0, c, d) + b;
		},
		easeOut: function(t,b,c,d){
			if ((t/=d) < (1/2.75)) {
				return c*(7.5625*t*t) + b;
			} else if (t < (2/2.75)) {
				return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
			} else if (t < (2.5/2.75)) {
				return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
			} else {
				return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
			}
		},
		easeInOut: function(t,b,c,d){
			if (t < d/2) return Tween.Bounce.easeIn(t*2, 0, c, d) * .5 + b;
			else return Tween.Bounce.easeOut(t*2-d, 0, c, d) * .5 + c*.5 + b;
		}
	}
}


function move(obj,json,options)
{
	options=options||{};
	var duration=options.duration||1000;
	var easing=options.easing||Tween.Linear;
	var start={};
	var dis={};
	var count=Math.floor(duration/30);
	var n=0;
//给start和dis赋值：
	for(var name in json){

		start[name]=parseFloat(getStyle(obj,name));


		dis[name]=json[name]-start[name];

	}
//加定时器：


		clearInterval(obj.timer);

		obj.timer=setInterval(function(){

			n++;
			for(var name in json)
			{
				var cur=easing(n/count*duration,start[name],dis[name],duration);
				if(name=='opacity')
				{
				obj.style[name]=cur;
				}
				else{

				obj.style[name]=cur+'px';
				}
				if( n == count ){
					clearInterval(obj.timer);
					options.complete&&options.complete();
				}

		}
		},30);




};
//获取最初行间样式:
function getStyle(obj,sName){

	return (obj.currentStyle || getComputedStyle(obj,false))[sName];
};
// JavaScript Document
function DOMReady(fn){
	if(document.addEventListener){
		document.addEventListener('DOMContentLoaded',function(){
			fn&&fn();
		},false);
	}else{
		document.attachEvent('onreadystatechange',function(){
			if(document.readyState=='complete'){
				fn&&fn();
			}
		});
	}
}

//滚轮事件封装

function addEvent(obj,sEv,fn){
	if(obj.addEventListener){
		obj.addEventListener(sEv,fn,true);
	}else{
		obj.attachEvent('on'+sEv,fn);
	}
}
function addWheel(obj,fn){
	function fnWheel(ev){
		var bDown=false;
		bDown=ev.wheelDelta?ev.wheelDelta<0:ev.detail>0;
		fn&&fn(bDown,ev);
		ev.preventDefault&&ev.preventDefault();
		return false;
	}
	if(window.navigator.userAgent.indexOf('Firefox')!=-1){
		addEvent(obj,'DOMMouseScroll',function(ev){
			var oEvent=ev||event;
			fnWheel(oEvent);
		});
	}else{
		addEvent(obj,'mousewheel',function(ev){
			var oEvent=ev||event;
			fnWheel(oEvent);
		});
	}
}

//getByClass
function getByClass(oParent,sClass){
	if(oParent.getElementsByClassName){
		return oParent.getElementsByClassName(sClass);
	}else{
		var re = new RegExp('\\b'+sClass+'\\b');
		var aResult = [];
		var aEle = oParent.getElementsByTagName('*');
		for(var i=0;i<aEle.length;i++){
			if(aEle[i].className.search(re)!=-1){
				aResult.push(aEle[i]);
			}
		}
		return aResult;
	}
}

//startMove
function startMove(obj,json,options){
	//判断默认值
	options = options||{};
	options.time = options.time||700;
	options.type = options.type||'ease-out';
	var start = {};
	var dis = {};
	for(var name in json){
		start[name]=parseFloat(getStyle(obj,name));
		if(isNaN(start[name])){
			switch(name){
				case 'left':
					start[name]=obj.offsetLeft;
				break;
				case 'top':
					start[name]=obj.offsetTop;
				break;
				case 'width':
					start[name]=obj.offsetWidth;
				break;
				case 'height':
					start[name]=obj.offsetHeight;
				break;
				case 'opacity':
					start[name]=1;
				break;
				case 'borderWidth':
					start[name]=0;
				break;
			}
		}
		dis[name]=json[name]-start[name];
	}
	var count= Math.floor(options.time/30);
	var n = 0;
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		n++;
		for(var name in json){
			switch(options.type){
				case 'linear':
					var cur = start[name]+dis[name]*n/count;
				break;
				case 'ease-in':
					var a = n/count;
					var cur = start[name]+dis[name]*Math.pow(a,3);
				break;
				case 'ease-out':
					var a = 1-n/count;
					var cur = start[name]+dis[name]*(1-Math.pow(a,3));
				break;
			}
			if(name=='opacity'){
				obj.style.opacity=cur;
				obj.style.filter='alpha(opacity:'+cur*100+')';
			}else{
				obj.style[name]=cur+'px';
			}
		}
		if(count==n){
			clearInterval(obj.timer);
			options.end&&options.end();
		}
	},30);
}

//穿墙
function hoverDir(obj,oEvent){
	var w = obj.offsetWidth/2+obj.offsetLeft;
	var h = obj.offsetHeight/2+obj.offsetTop;
	var x = w-oEvent.clientX;
	var y = h-oEvent.clientY;
	return Math.round((Math.atan2(y,x)*180/Math.PI+180)/90)%4;
}
function through(oBox){
	var oSpan = oBox.getElementsByTagName('span')[0];
	var w=oSpan.offsetWidth;
	var h=oSpan.offsetHeight;
	oBox.onmouseover=function(ev){
		var oEvent = ev||event;
		var oFrom = oEvent.fromElement||oEvent.relatedTarget;
		if(oBox.contains(oFrom))return;
		var dir = hoverDir(oBox,oEvent);
		switch(dir){
			case 0:
				oSpan.style.left=w+'px';
				oSpan.style.top=0;
				break;
			case 1:
				oSpan.style.left=0;
				oSpan.style.top=h+'px';
				break;
			case 2:
				oSpan.style.left=-w+'px';
				oSpan.style.top=0;
				break;
			case 3:
				oSpan.style.left=0;
				oSpan.style.top=-h+'px';
				break;
		}
		startMove(oSpan,{left:0,top:0});
	};
	oBox.onmouseout=function(ev){
		var oEvent = ev||event;
		var oTo = oEvent.toElement||oEvent.relatedTarget;
		if(oBox.contains(oTo))return;
		var dir = hoverDir(oBox,oEvent);
		switch(dir){
			case 0:
				startMove(oSpan,{top:0,left:w});
				break;
			case 1:
				startMove(oSpan,{top:h,left:0});
				break;
			case 2:
				startMove(oSpan,{top:0,left:-w});
				break;
			case 3:
				startMove(oSpan,{top:-h,left:0});
				break;
		}
	};
}

//事件绑定
function addEvent(obj,sEv,fn){
	if(obj.addEventListener){
		obj.addEventListener(sEv,fn,false);
	}else{
		attachEvent('on'+sEv,fn)
	}
}
