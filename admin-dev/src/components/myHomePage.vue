<template>
  <div id = "homepage_containter">
    <div class = 'nav'> 
      <div class = 'nav_pic'><img src = "../assets/mss.png"></div>
      <div class = 'nav_others'> 
        <div class = "add_bottom_line" id = 'sy'><a href=""><img src = "../assets/sy.png"></a> </div>
        <div class = "add_bottom_line"><a href=""><img src = "../assets/sqjx.png"></a> </div> 
        <div class = "without_bottom_line"> 
          <div class="dorp">
            <span><img src = "../assets/ywhz.png"><img id='dbx' src = "../assets/dbx.png"></span>
            <div class="dorp_con"> 
              <p>业务一</p> 
              <p>业务二</p> 
              <p>业务三</p> 
            </div>
          </div>
        </div>
        <div class = "without_bottom_line"> 
          <div class="dorp">
            <span><img src = "../assets/fbzgj.png"><img id='dbx' src = "../assets/dbx.png"></span>
            <div class="dorp_con"> 
              <p>工具一</p> 
              <p>工具二</p> 
            </div>
          </div>
        </div>
        <div class = "add_bottom_line"><a href=""><img src = "../assets/xwzx.png"></a> </div>
        <div class = "add_bottom_line"><a href=""><img src = "../assets/gywm.png"></a> </div>
        <div class = "add_bottom_line"><a href=""><img src = "../assets/shzr.png"></a> </div>
        <div class = "add_bottom_line"><a href=""><img src = "../assets/jrwm.png"></a> </div> 
      </div>
    </div>
    <div class = 'content'>
      <div class = 'content_left'><img src = "../assets/phone.png"></div>
      <div class = 'content_right'> 
          <div class = 'content_right_top'><img src = "../assets/logo.png"></div>
          <div class = 'content_right_middle'> <div class = 'add_line'><img src = "../assets/hfyp+yhdsj.png"></div></div>
          <div class = 'content_right_bottom'>
            <a href = ""><img src = "../assets/ios.png"></a>
            <a href = ""><img src = "../assets/android.png"></a>
          </div>   
      </div>
    </div>
    <div class = 'info'>
      <p>苏ICP备 2020057089号-1 Copyright 2020-2021 美上书（无锡）科技有限公司 | 地址：江苏省无锡市滨湖区绣溪路58号20号楼</p>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style> 

#homepage_containter{
  background-image: url("../assets/background_pic.png");
  background-size: 100% 100%;
  height:100%;
} 
#dbx{
  margin-bottom: 7px;
  height:4px;
}
#sy{
  border-bottom: 2px solid rgb(255, 255, 255); 
}

.add_bottom_line{
  text-align: center;
  float: left;  
  margin-left: 25px; 
  height:30px;
}
.add_bottom_line:hover{
  border-bottom: 2px solid rgb(255, 255, 255); 
}
.without_bottom_line{
  text-align: center;
  float: left;  
  margin-left: 25px; 
  height:30px;
}
.nav{ 
  /* background-color:rgba(69, 84, 131,0.2); */
  height:80px;
  width:100%;
  display: flex;
  justify-content: space-between;
}
.nav_pic{ 
  margin-top: 20px;
  margin-left: 50px;
}
.nav_pic img{
  height:60px;
}
.nav_others{  
  padding-top: 20px;
  margin-right: 50px;
} 
.nav_others img{
  height:18px;
}

.dorp{  
  position: relative; 
  display: inline-block;  
}

.dorp_con{ 
  display: none; 
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  margin-top:10px;
  padding: 12px 16px;
  border-radius: 10px;
}

.dorp:hover .dorp_con{display:block;}

.content{    
  height:80%; 
}
.content_left{  
  float: left;
  text-align: right;
  /* background-color:rgba(65, 225, 190,0.3); */
  margin-left: 15%;
  height:100%;
  width:30%;
}
.content_left img{
  height:90%;
  margin-top:20px;
   margin-right: 15%;
}
.content_right{
  float: left; 
  height:100%;
  width:32%;
  /* background-color: rgba(100, 84, 82, 0.3); */
  margin-left: 2%;
} 
.content_right_top{ 
 
  height:50%;
  width:100%;
  text-align: center;
  /* background-color: rgba(65, 50, 49,0.3); */
}
.content_right_top img{
  margin-top:50px;
  height:84%;
}
.content_right_middle{ 
  height:15%;
  width:100%;
  /* background-color: rgba(114, 245, 250,0.2); */
  text-align: center;
  margin-top: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content_right_middle img{ 
  width:100%;
  margin-top:20px;
}
.add_line{
  width:100%;
  height: 100%;
  border-top :3px solid rgb(255, 255, 255) ; 
}
.content_right_bottom{ 
  height:25%;
  width:100%;
  /* background-color: rgba(250, 114, 232,0.2);  */
  display: flex;
  justify-content: space-evenly;
}
.content_right_bottom img{ 
  height:40px; 
}
.info{     
  width:100%;
  float: left;
  text-align: center; 
  font-size: 10px;
}
</style>
