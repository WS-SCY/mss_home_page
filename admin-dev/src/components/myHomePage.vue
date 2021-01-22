<template>
  <div id = "homepage_containter">
    <div class = 'nav'> 
      <div class = 'nav_pic'><img src = "../assets/mss.png"></div>
      <div class = 'nav_others'> 
        <div class = "add_bottom_line"><a href=""><img src = "../assets/sy.png"></a> </div>
        <div class = "add_bottom_line"><a href=""><img src = "../assets/sqjx.png"></a> </div> 
        <div class = "add_bottom_line_special"> 
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"> 
          <el-submenu index="2">
              <template slot="title"  background-color:red ><img src = "../assets/ywhz.png"></template>
              <el-menu-item index="2-1">合作1</el-menu-item>
              <el-menu-item index="2-2">合作2</el-menu-item>
              <el-menu-item index="2-3">合作3</el-menu-item> 
          </el-submenu> 
          </el-menu> 
        </div>
        <div class = "add_bottom_line_special"> 
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"> 
          <el-submenu index="2">
              <template slot="title"  background-color:red ><img src = "../assets/fbzgj.png"></template>
              <el-menu-item index="2-1">工具1</el-menu-item>
              <el-menu-item index="2-2">工具2</el-menu-item>
              <el-menu-item index="2-3">工具3</el-menu-item> 
          </el-submenu> 
          </el-menu> 
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
 .wrapper{
    background-color: violet;
    height: 200px;
    float:left;
}
.el-menu-demo{
    height: 40px; 
    background:transparent;
    /* border-bottom-color:none!important; */
    background-color:rgba(0,0,0,0);
    float:right; 

}
/* 点击出来的下划线进行隐藏 */
.el-menu-item.is-active {
    border-bottom: none!important;
    color: rgba(0,0,0,0);
}
/* 整体的下划线进行隐藏 */
.el-menu.el-menu--horizontal{
  border-bottom: none;
}
/* 导航栏的间距等样式 */
.el-menu-item {
  padding: 0 62px;
  font-size: 16px;
}

/* 点击出来的下划线动效残留进行隐藏 */
.el-menu--horizontal>.el-menu-item{
    border-bottom: none;
}
/* 点击以后的背景色进行隐藏 */
.el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover {
    background-color: rgba(0,0,0,0); 
}


#homepage_containter{
  background-image: url("../assets/background_pic.png");
  background-size: 100% 100%;
  height:100%;
} 
.nav{ 
  /* background-color:rgba(69, 84, 131,0.2); */
  height:80px;
  width:100%;
  float: left;
}
.add_bottom_line{
  text-align: center;
  float: left;  
  margin-left: 20px;
  margin-right: 20px;
  height:30px;
}
.add_bottom_line_special{
  float: left;  
  margin-top: -19px;
  margin-right: -12px;
}
.nav_pic{
  float: left; 
  margin-top: 20px;
}
.nav_others{ 
  float: right;
  padding-top: 20px;
}

.add_bottom_line:hover{
  border-bottom: 2px solid rgb(255, 255, 255); 
}
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
  
</style>
