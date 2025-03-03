(function(){
    console.log(info);
    function getRequest() {
        var url = window.location.search; //获取url中"?"符后的字串
        var theRequest = new Object();
        if (url.indexOf("?") != -1) {
            var str = url.substr(1);
            strs = str.split("&");
            for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]]=decodeURI(strs[i].split("=")[1]);
            }
        }
        return theRequest;
    }
    var word= getRequest();
    var oTit=document.querySelector("#shen p.daohang");
    var oContit=document.querySelector("#shen .context .tit");
    var oContext=document.querySelector("#shen .context .xiang");
    for(i=0;i<info.length;i++){
        if(info[i].title==word.title){
            oTit.innerHTML='<p class="daohang"><a href="shouye.html">首页</a> >>> <span><a href="news.html">最新资讯</a></span> >>> <span>'+info[i].title+'</span></p>';
            oContit.innerHTML=info[i].title;
            console.log(info[i].title+info[i].context);
            oContext.innerHTML=info[i].context;
        }
    }
})();