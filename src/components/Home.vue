<template>
  <div class="logo" :style="logoImg">
    <ul class="resume_list">
      <li>
        <router-link :to="{name:'user'}">
          <span class="user">关于我</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{name:'technology'}">
          <span class="technology">技术栈</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{name:'experience'}">
          <span class="experience">经历</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{name:'works'}">
          <span class="works">作品集</span>
        </router-link>
      </li>
    </ul>
    <div class="my_title">
      <div class="my_photo"></div>
      <div class='introduce_myself'>
        <p class="motto">命运总是光临在那些有准备的人身上。</p>
        <hr/>
        <div class="myself">
          <p>我叫任海军</p>
          <p>web前端工程师</p>
          <p>15810849875@163.com</p>
        </div>
      </div>
    </div>
  </div>
  
</template>
<script>
export default {
    data () {
        return {
            logoImg: {
                width:'100%',
                textAlign: 'center',
                backgroundImage:'url(' + require('./../../src/assets/imgs/logo-2.png') + ')',
                backgroundSize:'cover'
        }
    }
  }
}
</script>
<style scoped>
  .logo{
    width: 100%;
    height: 974px;
    position: relative;
    background-size: 100% 100% !important;
    background: #000;
  }
  .my_title{
    position: absolute;
    bottom: 15px;
    left: 0;
    right: 0;
    margin: 0 auto;
    min-width: 320px;
    height: 350px;
  }
  .my_photo{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 0 auto;
    background-image: url('./../../src/assets/imgs/my_photo.jpg') ; 
    background-size:100% 100%;
  }
  hr{
    background: #f7c001;
    height: 1px;
    width: 80%;
    margin: 0 auto;
  }
  .introduce_myself{
    width: 100%;
    margin: 0 auto;
    text-align: center;
    
  }
  .motto{
    margin: 20px 0px;
    font-size: 24px;
    color: white;
  }
  .myself{
    width: 100%;
    margin-top: 20px;
    color: white;
  }
  .myself p{
    font-size: 24px;
  }
  .myself p:nth-child(2){
    margin: 10px 0px;
  }
  .resume_list{
    max-width: 600px;
    height: 50px;
    position: absolute;
    top:150px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
  }
  .resume_list li{
    float: left;
    height: 50px;
    width: 25%;
    line-height: 50px;
    text-align: center;
    font-size: 24px;
    color: white;
  }
  .resume_list li a{
    text-decoration:none; 
    color:white;
  }
</style>
