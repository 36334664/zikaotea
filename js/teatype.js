(function(){
    var oType=document.querySelector("#shen .type");
    xLie=' ';
    oType.innerHTML=" ";
    for(i=0;i<info.length;i++){
        oType.innerHTML+='<p class="zong"><img src="./img/yuan.png"><a href="teatypexiang.html?type='+info[i].type+'">'+info[i].type+'</a></p>';
        for(a=0;a<info[i].varieties.length;a++){
            xLie+='<span><a href="teatypexiang.html?type='+info[i].type+'&name='+info[i].varieties[a].tname+'">'+info[i].varieties[a].tname+'</a></span>';
        }
        oType.innerHTML+='<p class="xiangxi">'+xLie+'</p>';
        xLie=' ';
    }
})();

                