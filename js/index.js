window.onload=function(){
	/*top轮播图*/
	var oUlt=document.getElementById('top_ul');
	var aBli=oUlt.getElementsByTagName('li');
	var n=0;
	function tap(){
		for(var i=0; i<aBli.length; i++){
			aBli[i].style.display='none';
			move(aBli[i],{opacity:0})
		}
		aBli[n].style.display='block';
		move(aBli[n],{opacity:1})
	}
	for(var i=0; i<aBli.length; i++){
		(function(index){
			aBli[i]=function (){
				n=index;
				tap();
			};
		})(i)
	}
	function next()
	{
		n++;

		if (n == 5)
		{
			n=0;
		}
		tap()
	}
	setInterval(next,7000);


	/*html&css*/
	var oBox=document.getElementById('css_box');
	var oUl=document.getElementById('css_ul');
	var aLi=oUl.children;
	var oOl=document.getElementById('css_btn');
	var aBtn=oOl.children;
	var oPrev=document.getElementById('prev');
	var oNext=document.getElementById('next');
	oUl.innerHTML+=oUl.innerHTML;
	oUl.style.width=aLi.length*aLi[0].offsetWidth+'px';
	var w=oUl.offsetWidth/2;
	var iNow=0;
	oBox.onmouseover=function(){
		clearInterval(timer);
		oPrev.style.display='block';
		oNext.style.display='block';
	};
	oBox.onmouseout=function(){
		timer=setInterval(function(){
			fnNext();
		},1000);
		oPrev.style.display='none';
		oNext.style.display='none';
	};
	for(var i=0;i<aBtn.length;i++){
		(function(index){
			aBtn[i].onclick=function(){
				if(iNow%aBtn.length==0&&index==(aBtn.length-1)){
					iNow--;
				}
				if((iNow%aBtn.length==(aBtn.length-1)||iNow%aBtn.length==-1)&&index==0){
					iNow++;
				}
				iNow=Math.floor(iNow/aBtn.length)*aBtn.length+index;
				tab();
			};
		})(i);
	}
	function tab(){
		for(var i=0;i<aBtn.length;i++){
			aBtn[i].className='';
		}
		if(iNow>0){
			aBtn[iNow%aBtn.length].className='on';
		}else{
			aBtn[(iNow%aBtn.length+aBtn.length)%aBtn.length].className='on';
		}
		startMove(oUl,-iNow*aLi[0].offsetWidth);
	}
	oPrev.onclick=function(){
		iNow--;
		tab();
	};
	oNext.onclick=fnNext;
	function fnNext(){
		iNow++;
		tab();
	}

	timer = setInterval(function(){
		fnNext();
	},1000);

	var left=0;
	function startMove(obj,iTarget){
		var start=left;
		var dis=iTarget-start;
		var count=Math.floor(700/30);
		var n=0;
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			n++;
			var a=1-n/count;
			left=start+dis*(1-Math.pow(a,3));
			if(left<0){
				obj.style.left=left%w+'px';
			}else{
				obj.style.left=(left%w-w)%w+'px';
			}
			if(count==n){
				clearInterval(obj.timer);
			}
		},30);
	}
	/*html&css作品展示链接*/
	var oCss1=document.getElementById('css1');
	var oCss2=document.getElementById('css2');
	var oCss3=document.getElementById('css3');
	var oCss4=document.getElementById('css4');
	oCss1.onclick=function(){
		window.open('demo/css/1/index.html','_black')
	};
	oCss2.onclick=function(){
		window.open('demo/css/2/index.html','_black')
	};
	oCss3.onclick=function(){
		window.open('demo/css/3/index.html','_black')
	};
	oCss4.onclick=function(){
		window.open('demo/css/4/index.html','_black')
	};
	//js作品
	var oJsWorkerBox=document.getElementById('js_worker_box');
	var aDiv1=getByClass(oJsWorkerBox,'js_box')
	var oOl1js=document.getElementById('ol1js');
	var aLi2=oOl1js.children;
	//选项卡
	for(var i=0;i<aLi2.length;i++){
		(function(index){
			aLi2[i].onclick=function(){
				for(var i=0;i<aLi2.length;i++){
					aLi2[i].className='none';
					aDiv1[i].style.display='none';
				}
				this.className='on';
				aDiv1[index].style.display='block';
			};
		})(i);
	}
	//穿墙
	var oCile=document.getElementById('js_worker_cile');
	var aDiv2 =oCile.children;
	var oCile2=document.getElementById('js_worker_cile2');
	var oCile3=document.getElementById('js_worker_cile3');

	var aDiv3 =oCile2.children;
	var aDiv4 =oCile3.children;

	for(var i=0;i<aDiv2.length;i++){
		through(aDiv2[i]);
		through(aDiv3[i]);
		through(aDiv4[i]);

	}
	//aDiv2每一个效果
	for(var i=0;i<aDiv2.length;i++){
		(function(index){
			aDiv2[i].onclick=function(){
				window.open('twjs/js'+(index+1)+'.html')
			};
			aDiv3[i].onclick=function(){
				window.open('twjs/js_page2-'+(index+1)+'.html')
			};
			aDiv4[i].onclick=function(){
				window.open('twjs/js_page3-'+(index+1)+'.html')
			};
		})(i);
	}
	//h5&css3
	var oHcul=document.getElementById('hc_ul');
	var oClick=document.getElementById('content_h5');
	var aHli=oHcul.children;
	oClick.onclick=function(){
		for(var i=0; i<aHli.length; i++){
			aHli[i].style.transitionDelay=200*i+'ms';

			aHli[i].style.width='700px';
		}
	};
	for(var i=0; i<aHli.length; i++){
		(function(index){
			aHli[i].onclick=function(){
				window.open('twjs/hc'+(index+1)+'.html')
			};
		})(i)
	}
	//简介
	(function(){
		var aLi=document.querySelectorAll('.slide4 ul li');
		var oLeft=document.querySelector('.slide4 #left');
		var oRight=document.querySelector('.slide4 #right');
		var arr=[];
		for(var i=0;i<aLi.length;i++)
		{
			arr[i]=aLi[i].className;
		}
		oLeft.onclick=function(){
			arr.unshift(arr.pop());
			for(var i=0;i<arr.length;i++)
			{
				aLi[i].className=arr[i];
			}
		};
		oRight.onclick=function(){
			arr.push(arr.shift());
			for(var i=0;i<arr.length;i++)
			{
				aLi[i].className=arr[i];
			}
		}
	})()


}
