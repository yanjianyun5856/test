<template>
  <div style="height: 500px; width: 500px; border: 1px solid red; position: relative;">
    <vue-draggable-resizable :w="100" :h="100" v-on:dragging="onDrag" v-on:resizing="onResize" :parent="true" style="border: 1px solid">
      <p>Hello! I'm a flexible component. You can drag me around and you can resize me.<br>
      X: {{ x }} / Y: {{ y }} - Width: {{ width }} / Height: {{ height }}</p>
    </vue-draggable-resizable>
  </div>
</template>

<script>
import VueDraggableResizable from 'vue-draggable-resizable'

export default {
  data: function () {
    return {
      width: 0,
      height: 0,
      x: 0,
      y: 0
    }
  },
  methods: {
    onResize: function (x, y, width, height) {
      this.x = x
      this.y = y
      this.width = width
      this.height = height
    },
    onDrag: function (x, y) {
      this.x = x
      this.y = y
    }
  }
}
</script>


<!-- <template>
  <div>  
	<div id="box">                                                       
    	位置
    	<br>x:{{val.x}} <br>y:{{val.y}}
    	<div v-drag="greet" id="drag" :style="style">
    	 
    	</div>
	</div>
  </div>
</template>

<script>

  export default {  
    data()  {
      return {
	    val: '123',
        style: {
            width: '100px',
            height: '100px',
            background: 'aqua',
	        position: 'absolute',
            right: '30px',
            top: 0
        }
      }
    },
    methods:{
    //接受传来的位置数据，并将数据绑定给data下的val
        greet(val){
            this.val = val;
        }
    },
    directives: {
  		drag: {
    	  // 指令的定义
    	  bind:function (el, binding) {
                let oDiv = el;   //当前元素
                let self = this;  //上下文
                oDiv.onmousedown = function (e) {
                 //鼠标按下，计算当前元素距离可视区的距离
                    let disX = e.clientX - oDiv.offsetLeft;
                    let disY = e.clientY - oDiv.offsetTop;

                    console.log(e.clientX + '---' + e.clientY);
					console.log(oDiv.offsetLeft + '---' + oDiv.offsetTop);

                    document.onmousemove = function (e) {
                      //通过事件委托，计算移动的距离 
                        let l = e.clientX - disX;
                        let t = e.clientY - disY;
                      //移动当前元素  
                        oDiv.style.left = l + 'px';
                        oDiv.style.top = t + 'px';
                         //将此时的位置传出去
                        binding.value({x:l,y:t})
                    };
                    document.onmouseup = function (e) {
                    
                        document.onmousemove = null;
                        document.onmouseup = null;
                     };
                };
            }
  		}
	}
  }

 
        
        
  
</script> -->