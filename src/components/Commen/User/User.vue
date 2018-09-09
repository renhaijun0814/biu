<template class='tmpl'>
    <div class="user">
        <nav-bar titles='关于我'></nav-bar>
        <div class="content">
            <ul>
                <li>
                    <div class="circular">
                        <img src="~@/assets/imgs/age.png">
                    </div>
                    <div>
                        年龄/26岁
                    </div>
                </li>
                <li>
                    <div class="circular">
                        <img src="~@/assets/imgs/学历.png">
                    </div>
                    <div>
                        学历/本科
                    </div>
                </li>
                <li>
                    <div class="circular">
                        <img src="~@/assets/imgs/位置.png">
                    </div>
                    <div>
                        坐标/北京
                    </div>
                </li>
                <li>
                    <div class="circular">
                        <img src="~@/assets/imgs/状态.png">
                    </div>
                    <div>
                        状态/离职
                    </div>
                </li>
            </ul>
        </div>
        <div class="text_content">
            计算机相关专业，3年多前端开发经验；良好的学习能力和团队合作精神，逻辑思维能力强,有较强的工作责任心。
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .user{
        width: 100%;
        height: 974px;
        background: #505050;
    }
    .content{
        position: absolute;
        top: 160px;
        bottom: 0;
        left: 0;
        right: 0;
        
    }
    .content ul{
        max-width: 500px;
        height: 80px;
        text-align: center;
        line-height: 80px;
        margin: 0 auto;
        color: white;
    }
    .user li{
        width: 25%;
        height: 80px;
        float: left;
    }
    .circular{
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: 1px solid #5d5d5d;
        position: relative;
        margin: 0 auto;
    }
    .circular img{
        width: 50%;
        position: absolute;
        top: 25%;
        right: 25%;
    }
    .text_content{
        max-width: 500px;
        text-align: center;
        color: white;
        position: absolute;
        top:425px;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
    }
</style>

