<template>
    <div class = "wrapper">


<div class="dorp">

  <span>下拉菜单测试</span>

  <div class="dorp_con"> 
     <p>子菜单一</p> 
     <p>子菜单二</p> 
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

<style scope>
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
  padding: 12px 16px;
  border-radius: 10px;
}

.dorp:hover .dorp_con{display:block;}

</style>