<template>
    <div class = "wrapper">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"> 
        <el-submenu index="2">
            <template slot="title"  background-color:red ><img src = "../assets/fbzgj.png"></template>
            <el-menu-item index="2-1"><a href ="">选项1</a></el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item> 
        </el-submenu> 
        </el-menu> 
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
</style>