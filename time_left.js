$(document).ready(function(){
	//获得当前时间,刻度为一千分一秒 
	
	var length, current;

	function showLeftTime()	{
		var now=new Date();
		var year=now.getFullYear();
		var month=now.getMonth()+1;
		var day=now.getDate();
		var hours=now.getHours();
		var minutes=now.getMinutes();
		var seconds=now.getSeconds();
		document.all.show.innerHTML="当前时间:"+year+"年"+month+"月"+day+"日"+hours+"小时"+minutes+"分"+seconds+"秒";
		//设定结束时间
		//1秒=1000毫秒
		endTime=current+length;
		//设定并显示剩余时间
		var leftTime=endTime-(new Date()).getTime();

		if(leftTime>0)
		{
			rleftTime = new Date(leftTime);
			var rmonth=rleftTime.getMonth()+1;
			var rday=rleftTime.getDate();
			var rhours=rleftTime.getHours();
			var rminutes=rleftTime.getMinutes();
			var rseconds=rleftTime.getSeconds();
			//document.all.showLeft.innerHTML=leftTime+"豪秒后停止!";
			document.all.showLeft.innerHTML="剩余时间:"+rmonth+"月"+rday+"日"+rhours+"小时"+rminutes+"分"+rseconds+"秒";
		}
		else
		{ 
			clearTimeout(timeID);
			document.all.showLeft.innerHTML="TimeOut!";
			return false;
		}
		//一秒刷新一次显示时间 
		var timeID=setTimeout(showLeftTime(),1000); 
	}
	$("#start").click(function(){
		length = $("#last").val()*1000*60;
		alert(length);
		current = new Date().getTime();
		var finall = current + length;
		var finallDate = new Date(finall);
		var fyear=finallDate.getFullYear();
		var fmonth=finallDate.getMonth()+1;
		var fday=finallDate.getDate();
		var fhours=finallDate.getHours();
		var fminutes=finallDate.getMinutes();
		var fseconds=finallDate.getSeconds();

		document.all.showFinal.innerHTML="当前时间:"+fyear+"年"+fmonth+"月"+fday+"日"+fhours+"小时"+fminutes+"分"+fseconds+"秒";
		
	});
	showLeftTime();
	
});