/*动态生成100个小格
  点击左键：
  1 显示数字（代表以当前小格为中心，周围8个格的雷数）
  2 扩散（当前周围八个格没有雷）
  点击右键：
   没有标记且没有数字：标记雷的位置
   已有标记：取消已有的标记
   10个标记均正确提示成功
   有雷：gameOver
  */
 var startBtn=document.getElementById("btn");
 var box=document.getElementById("box");
 var flagBox=document.getElementById("flagBox");
 var message=document.getElementById("message");
 var closeBtn=document.getElementById("closeBtn");
 var alertBox=document.getElementById("alertBox");
 var score=document.getElementById("score");
 var totalNum;//总共的雷数
 var tagNum;//标记的雷数
 var mineMap=[];//标识符，判断是否有0
var startGameBool=true;
 bindEvent();
 function bindEvent(){
    startBtn.onclick=function(){
        if(startGameBool){
        box.style.display="block";
        flagBox.style.display="block";
        init();
        startGameBool=false;
    }
}
    box.oncontextmenu=function(){
        return false;
    }
    box.onmousedown=function(e){
        var event=e.target;
        if(e.which==1){
              leftClick(event);
        }
        else if(e.which==3){
            rightClick(event);
        }    
    }
    closeBtn.onclick=function(){
       alertBox.style.display="none";
       box.innerHTML="";
       startGameBool=false;
    }
 }
 function init(){
    totalNum=10;
    tagNum=10;
    for(var i=0;i<10;i++){
       for(var j=0;j<10;j++){
           var con=document.createElement('div');
           con.classList.add('block');
           con.setAttribute('id',i+'-'+j);
           box.appendChild(con);
           mineMap.push({mine:0});//无雷状态
       }
    }
    block=document.getElementsByClassName('block');
    

    while(totalNum){   
    var index=Math.floor(Math.random()*100);//Math.random()   0.0 ~ 1.0 之间的一个伪随机数。

     if(mineMap[index].mine==0){
        mineMap[index].mine=1;
        block[index].classList.add("isLei");
        totalNum--;
     }
     
   }
   
}
 function leftClick(dom){
     if(dom.classList.contains("flag")){
         return;
     }
        var isLei=document.getElementsByClassName("isLei");
        if(dom&&dom.classList.contains("isLei")){
            console.log("game over");
            for(var i=0;i<isLei.length;i++){
                isLei[i].classList.add('show');
                //var show=document.getElementsByClassName("show");
                //show.innerHTML="炸弹";
            }
            setTimeout(function(){
                alertBox.style.display="block";
                message.innerHTML="Game Over!";
            },800);
        }
        else{
        var n=0;
        var posArray= dom&&dom.getAttribute('id').split('-');
        var posX=posArray && +posArray[0];
        var posY=posArray && +posArray[1];
        dom&&dom.classList.add('num');
        
          /*   i-1,j-1  i-1,j  i-1,j+1
             i,j-1    i,j    i,j+1
            i+1,j-1   i+1,j  i+1,j+1
    
        */
        for(var i=posX-1;i<=posX+1;i++){
            for(var j=posY-1;j<=posY+1;j++){
                var aroundBox=document.getElementById(i+'-'+j);
                if(aroundBox && aroundBox.classList.contains("isLei")){
                    n++;
                }
            }
        }
        dom&&(dom.innerHTML=n);
        if(n==0){
           for(var i=posX-1;i<=posX+1;i++){
               for(var j=posY-1;j<=posY+1;j++){
                   var nearBox=document.getElementById(i+'-'+j);
                   
                   if(nearBox){
                       if(!nearBox.classList.contains("check")){                     
                           nearBox.classList.add("check");
                           leftClick(nearBox);
                           console.log(nearBox);
                      }
                   }
               }
           }
        }
     }
}
function rightClick(dom){
    if(dom.classList.contains("num")){
        return;
    }
    dom.classList.toggle("flag");
    
    dom.innerHTML="Tag";
    if(!dom.classList.contains("flag")){
        dom.innerHTML="";
    }
    if(dom.classList.contains("isLei")&&dom.classList.contains('flag')){
        tagNum--;
    }
    if(dom.classList.contains("isLei")&&!dom.classList.contains('flag')){
        tagNum++;    
    }
    if( tagNum==0){
        alertBox.style.display="block";
        message.innerHTML="Success!";
    }
    score.innerHTML=tagNum;
}
