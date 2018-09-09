<template>
    <div class="experience">
        <nav-bar titles='经历'></nav-bar>
        
            <div class="card">
                <div class="card_img">
                    <img src='~@/assets/imgs/timg.png'>
                </div>
                <div class="card_text">
                    <div>
                        <h3>太原诚博涵科技有限公司</h3>
                        <span>2014年8月---2018年7月</span>
                        <p>岗位：前端开发工程师</p>
                    </div>    
                </div>
            </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    }
    
}
</script>
<style scoped>
    .experience{
        width: 100%;
        height: 974px;
        background: #dadada;
    }
    .card{
        max-width: 600px;
        height: 350px;
        background: white;
        border-radius: 10px;
        margin: 0 auto;
        margin-top: 80px;
        animation: bounce 2s infinite;
    }
    .card_img{
        float: left;
        max-width: 250px;
        line-height: 350px;
    }
     @keyframes bounce {
        0% {
            transform:rotate(0deg);
            transform: scale(1.1,1.1);
        }
        25%{
             transform:rotate(4deg);
        }
        50% {
            transform:rotate(8deg);
        }
        75% {
            transform:rotate(4eg);
        }
        100% {
            transform:rotate(0deg);
            transform: scale(1.1,1.1);
        }
    }
    .card_img img{
        width: 100%;
        vertical-align: middle;
    }
    .card_text{
        max-width: 350px;
        float: left;
        width: 100%;
        height: 350px;
        display: table;
    }
    .card_text div{
        text-align: center;
        display: table-cell;
        vertical-align: middle;
    }
    .card_text div span{
        display: block;
        margin: 30px 0;
    }
</style>

