(function(){
    var info1=JSON.stringify(data);
    var info=JSON.parse(info1);
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
    var oIndicate=document.querySelector("#shen p.daohang span.type");
    var oIndicate2=document.querySelector("#shen p.daohang span.ti");
    var oLie=document.querySelector("#shen .zuo .xia");
    xLie=' ';
    var oContext=document.querySelector("#shen .you .xia");
    for(i=0;i<info.length;i++){
        for(a=0;a<info[i].details.length;a++){
            if(info[i].details[a].title==word.keyword){
                oIndicate.innerHTML=info[i].type;
                oIndicate2.innerHTML=info[i].details[a].title;
                oLie.innerHTML=" ";
                for(b=0;b<info.length;b++){
                    oLie.innerHTML+='<div class="lie1"><button><img src="./img/zhangk.png"></button>'+info[b].type+'</div>';
                    for(c=0;c<info[b].details.length;c++){
                        if(info[b].details[c].title==word.keyword){
                            xLie+='<p class="on"><a href="history.html?keyword='+info[b].details[c].title+'">'+info[b].details[c].title+'</a></p>';
                        }else{
                            xLie+='<p><a href="history.html?keyword='+info[b].details[c].title+'">'+info[b].details[c].title+'</a></p>';
                        }
                    }
                    oLie.innerHTML+='<div class="lie2">'+xLie+'</div>';
                    xLie=" ";
                }
                var oBut=document.querySelectorAll("#shen .zuo .xia .lie1 button");
                var oImg=document.querySelectorAll("#shen .zuo .xia .lie1 button img");
                var oLie=document.querySelectorAll("#shen .zuo .xia .lie2");
                for(var e=0;e<oBut.length;e++){
                    (function(e){
                        oBut[e].onclick=function(){
                            if(oImg[e].src.search('zhangk')==-1){
                                oImg[e].src="img/zhangk.png";
                                oLie[e].style.display="block";
                            }else{
                                oImg[e].src="img/suo.png";
                                oLie[e].style.display="none";
                            }
                        }
                    })(e);
                }
                oContext.innerHTML=' <p class="tit">'+info[i].details[a].title+'</p><p class="time">'+info[i].details[a].time+'</p><p class="context">'+info[i].details[a].context+'</p>';
            }
        }
    }
})();
