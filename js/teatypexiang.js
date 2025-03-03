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
      var oIndicate=document.querySelector("#shen p.daohang");
      var ozuo=document.querySelector("#shen .zuo");
      var oTit=document.querySelector("#shen .you .tit");
      var oContext=document.querySelector("#shen .you .context");
      var oLie=document.querySelector("#shen .you .lie");
      var oTurn=document.querySelector("#shen .you .turn");
      xLie=' ';
      if(word.name==undefined && word.details==undefined){
        for(i=0;i<info.length;i++){
            if(info[i].type==word.type){
                oIndicate.innerHTML='<p class="daohang"><a href="shouye.html">首页</a> >>> <span><a href="teatype.html">茶类及制茶技艺</a></span> >>> <span><a href="teatypexiang.html?type='+info[i].type+'">'+info[i].type+'</a></span></p>';
                ozuo.innerHTML='<div class="ding"><a href="teatypexiang.html?type='+info[i].type+'">'+info[i].type+'</a></div>';
                for(a=0;a<info[i].varieties.length;a++){
                    xLie+='<p><a href="teatypexiang.html?type='+info[i].type+'&name='+info[i].varieties[a].tname+'">'+info[i].varieties[a].tname+'</a></p>';
                }
                ozuo.innerHTML+=xLie;
                oTit.innerHTML=info[i].type;
                oContext.innerHTML=info[i].jieshao;
                oLie.style.display="none";
                oTurn.style.display="none";
            }
        }
      }else if(word.name!==undefined && word.details==undefined){
        for(i=0;i<info.length;i++){
            if(info[i].type==word.type){
                for(a=0;a<info[i].varieties.length;a++){
                    if(info[i].varieties[a].tname==word.name){
                        oIndicate.innerHTML='<p class="daohang"><a href="shouye.html">首页</a> >>> <span><a href="teatype.html">茶类及制茶技艺</a></span> >>> <span><a href="teatypexiang.html?type='+info[i].type+'">'+info[i].type+'</a></span> >>> <span><a href="teatypexiang.html?type='+info[i].type+'&name='+info[i].varieties[a].tname+'">'+info[i].varieties[a].tname+'</a></span></p>';
                        ozuo.innerHTML='<div class="ding"><a href="teatypexiang.html?type='+info[i].type+'">'+info[i].type+'</a></div>';
                        for(c=0;c<info[i].varieties.length;c++){
                            if(info[i].varieties[c].tname==word.name){
                                xLie+='<p class="on"><a href="teatypexiang.html?type='+info[i].type+'&name='+info[i].varieties[c].tname+'">'+info[i].varieties[c].tname+'</a></p>';
                            }else{
                                xLie+='<p><a href="teatypexiang.html?type='+info[i].type+'&name='+info[i].varieties[c].tname+'">'+info[i].varieties[c].tname+'</a></p>';
                            }
                        }
                        ozuo.innerHTML+=xLie;
                        oTit.innerHTML=info[i].varieties[a].tname;
                        oContext.innerHTML=info[i].varieties[a].introduce;
                        oLie.innerHTML='  ';
                        for(b=0;b<info[i].varieties[a].details.length;b++){
                            oLie.innerHTML+='<p><img src="./img/yuan.png"><a href="teatypexiang.html?type='+info[i].type+'&name='+info[i].varieties[a].tname+'&details='+info[i].varieties[a].details[b].title+'">'+info[i].varieties[a].details[b].title+'</a></p>';
                        }
                        oTurn.style.display="none";
                    }
                }
            }
        }
      }else{
        for(i=0;i<info.length;i++){
            if(info[i].type==word.type){
                for(a=0;a<info[i].varieties.length;a++){
                    if(info[i].varieties[a].tname == word.name){
                        for(b=0;b<info[i].varieties[a].details.length;b++){
                            if(info[i].varieties[a].details[b].title == word.details){
                                oIndicate.innerHTML='<p class="daohang"><a href="shouye.html">首页</a> >>> <span><a href="teatype.html">茶类及制茶技艺</a></span> >>> <span><a href="teatypexiang.html?type='+info[i].type+'">'+info[i].type+'</a></span> >>> <span><a href="teatypexiang.html?type='+info[i].type+'&name='+info[i].varieties[a].tname+'">'+info[i].varieties[a].tname+'</a></span> >>> <span>'+info[i].varieties[a].details[b].title+'</span></p>';
                                ozuo.innerHTML='<div class="ding"><a href="teatypexiang.html?type='+info[i].type+'">'+info[i].type+'</a></div>';
                                for(c=0;c<info[i].varieties.length;c++){
                                    if(info[i].varieties[c].tname==word.name){
                                        xLie+='<p class="on"><a href="teatypexiang.html?type='+info[i].type+'&name='+info[i].varieties[c].tname+'">'+info[i].varieties[c].tname+'</a></p>';
                                    }else{
                                        xLie+='<p><a href="teatypexiang.html?type='+info[i].type+'&name='+info[i].varieties[c].tname+'">'+info[i].varieties[c].tname+'</a></p>';
                                    }
                                }
                                ozuo.innerHTML+=xLie;
                                oTit.innerHTML=info[i].varieties[a].details[b].title ;
                                oContext.innerHTML=info[i].varieties[a].details[b].more;
                                oLie.style.display="none";
                                oTurn.innerHTML='<div class="turn"><a href="teatypexiang.html?type='+info[i].type+'&name='+info[i].varieties[a].tname+'"><img src="./img/返回.png">返回</a></div>';
                            }
                        }
                    }
                }
            }
        }
      }
})();