```
   如果触发向左移动
　　遍历所有非空元素
　　　　如果当前元素在第一个位置
           不动
　　　　如果当前元素不在第一个位置
　　　　　　如果当前元素左侧是空元素    
              向左移动
　　　　　　如果当前元素左侧是非空元素    
　　　　　　　　如果左侧元素和当前元素的内容不同    
                  不动
　　　　　　　　如果左侧元素和当前元素的内容相同    
                  向左合并

如果触发向右移动
　　遍历所有非空元素
　　　　如果当前元素在最后一个位置     
           不动
　　　　如果当前元素不在最后一个位置
　　　　　　如果当前元素右侧是空元素   
              向右移动
　　　　　　如果当前元素右侧是非空元素    
　　　　　　　　如果右侧元素和当前元素的内容不同    
                  不动
　　　　　　　　如果右侧元素和当前元素的内容相同    
                  向右合并

```

![1543295113585](C:\Users\ADMINI~1\AppData\Local\Temp\1543295113585.png)

```
 <div class="modal fade" id="gameOverModal" aria-labelledby="myModalLabel" aria-hidden="true"

      data-backdrop="static">

     <div class="modal-dialog">

         <div class="modal-content">

             <div class="modal-header">

                 <button type="button" class="close" data-dismiss="modal" aria-hidden="true">

                     ×

                 </button>

                 <h4 class="modal-tittle" id="myModalLabel">2048小游戏</h4>

             </div>

             <div class="modal-body">

                 Game Over!

             </div>

             <div class="modal-footer">

                 <button type="button" class="btn btn-info" data-dismiss="modal">关闭</button>

                 <button type="button" class="btn btn-danger refreshBtn" onclick="refreshGame()">再玩一次</button>

             </div>

         </div>

     </div>
```

