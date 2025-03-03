
var oBths=document.querySelectorAll("#shen .leibie .zhanshi .btns span");
var oUl=document.querySelector("#shen .leibie .zhanshi .lie");
var index=0;
oBths[0].onclick=function(){
    if(index!=0){
        index++;
        oUl.style.left=index*278+"px";
    }
}
oBths[1].onclick=function(){
    if(index!=-3){
        index--;
        oUl.style.left=index*278+"px";
    }
}

var oNewz=document.querySelector("#shen .news .zhanshi .zuo div");
var oNewy=document.querySelector("#shen .news .zhanshi .you div");
oNewy.innerHTML=' ';
for(i=0;i<5;i++){
    oNewy.innerHTML+='<p><img src="./img/yuan.png"><a href="newxiang.html??title='+info[i].title+'">'+info[i].title+'<span>'+info[i].date+'</span></p>';
}
for(a=0;a<info.length;a++){
    if(info[a].img!=""){
        oNewz.innerHTML='<div><img src="./'+info[a].img+'" alt=""><p><a href="newxiang.html?title='+info[a].title+'">'+info[a].title+'</a></p></div>';
        break;
    }
}
