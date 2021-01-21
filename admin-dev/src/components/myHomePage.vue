<template>
  <div id = "homepage_containter">
    <div class = 'nav'> 
      <div class = 'nav_pic'><img src = "../assets/mss.png"></div>
      <div class = 'nav_others'>
        
        <a href=""><img src = "../assets/sy.png"></a> 
        <a href=""><img src = "../assets/sqjx.png"></a> 
        <a href=""><img src = "../assets/ywhz.png"></a>
        <a href=""><img src = "../assets/fbzgj.png"></a>
        <a href=""><img src = "../assets/xwzx.png"></a>
        <a href=""><img src = "../assets/gywm.png"></a> 
        <a href=""><img src = "../assets/shzr.png"></a> 
        <a href=""><img src = "../assets/jrwm.png"></a> 
        
      </div>
    </div>
    <div class = 'content'>
      <div class = 'content_left'><img src = "../assets/phone.png"></div>
      <div class = 'content_right'>
        <div class = 'content_right_top'><img src = "../assets/logo.png"></div>
        <div class = 'content_right_middle'> <div class = 'add_line'><img src = "../assets/hfyp+yhdsj.png"></div></div>
        <div class = 'content_right_bottom'><img src = "../assets/ios.png"><img src = "../assets/android.png"></div> 
      </div>
    </div>
  </div>
</template>

<script>
export default { 
  data () {
    return {
      msg: 'Welcome to HomePage'
    }
  }
}
</script>

<style scoped>
#homepage_containter{
  background-image: url("../assets/background_pic.png");
  background-size: 100% 100%;
  height:100%;
} 
.nav{ 
  background-color:rgba(69, 84, 131,0.2);
  height:80px;
  width:100%;
  float: left;
}
.nav_pic{
  float: left;
  margin-left: 30px;
  margin-top:20px;
  width:30%;
}
.nav_others{
  padding-top: 20px;
}
.nav_others a{
  margin-left: 20px; 
}
.content{   
  height:80%;
  width:100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.content_left{ 
  text-align: center;
  float: left;
  background-color:rgba(65, 225, 190,0.3);
  height:100%;
  width:40%;
}
.content_left img{
  height:90%;
  margin-top:20px;
}
.content_right{
  float: left; 
  height:100%;
  width:40%;
}
.content_right_top{ 
  height:60%;
  width:100%;
  text-align: center;
  background-color: rgba(65, 50, 49,0.3);
}
.content_right_top img{
  height:100%;
}
.content_right_middle{ 
  height:20%;
  width:100%;
  background-color: rgba(114, 245, 250,0.2);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.content_right_middle img{ 
  width:100%;
  margin-top:20px;
}
.add_line{
  width:80%;
  height: 100%;
  border-top :4px solid rgb(255, 255, 255) ;
  margin-top:15px; 
}
.content_right_bottom{ 
  height:20%;
  width:100%;
  background-color: rgba(250, 114, 232,0.2);
  
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
