(function(){
    console.log(info);
    var oContext=document.querySelector("#shen .context");
    var oPaging=document.querySelector("#shen .paging");
    var pageSize=20;
    var page=0;
    var txt=" ";
    pageInfo(page,pageSize);
    for(var i=0;i<Math.ceil(info.length/pageSize);i++){
        txt+='<a  class="ck">'+(i+1)+'</a>';
    }
    oPaging.innerHTML=" ";
    oPaging.innerHTML+='<a class="first">首页</a><a class="shang">上一页</a>'+txt+' <a class="xia">下一页</a><a class="last">尾页</a>';
    var oA=document.querySelectorAll("#shen .paging a.ck");
    var first=oPaging.querySelector("a.first");
    var shang=oPaging.querySelector("a.shang");
    var xia=oPaging.querySelector("a.xia");
    var last=oPaging.querySelector("a.last");
    oA[0].className="ck active";
    var index2=0;
    for(var i=0;i<oA.length;i++){
        (function(i){
            oA[i].onclick=function(){
                pageInfo(i,pageSize);
                index2=i;
                for(var j=0;j<oA.length;j++){
                    oA[j].className=j==i?"ck active":"ck";
                }
            }
        })(i);
    }
    first.onclick=function(){
        if(index2==0){
            alert("已经在第一页啦~");
        }else{
            index2=0;
            pageInfo(index2,pageSize);
            oAselect(index2);
        }
    }
    last.onclick=function(){
        if(index2==oA.length-1){
            alert("已经是最后一页啦~");
        }else{
            index2=oA.length-1;
            pageInfo(index2,pageSize);
            oAselect(index2);
        }
    }
    shang.onclick=function(){
        if(index2==0){
             alert("已经在第一页啦~无法再次点击上一页~");
        }else{
            index2=index2-1;
            pageInfo(index2,pageSize);
            oAselect(index2);
        }
    }
    xia.onclick=function(){
        if(index2==oA.length-1){
             alert("已经是最后一页啦~无法再次点击下一页~");
        }else{
            index2=index2+1;
            pageInfo(index2,pageSize);
            oAselect(index2);
        }
    }
    function oAselect(a){
        for(var j=0;j<oA.length;j++){
            oA[j].className="ck";
        }
        oA[a].className="ck active";
    }
    function pageInfo(page,pageSize){
        oContext.innerHTML=' ';
        for(var i=page*pageSize;i<((page+1)*pageSize>info.length?info.length:(page+1)*pageSize);i++){
            oContext.innerHTML+='<p><img src="./img/yuan.png"><a href="newxiang.html?title='+info[i].title+'">'+info[i].title+'</a><span> '+info[i].date+' </span></p>';
        }
    }
})();