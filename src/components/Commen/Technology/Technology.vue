<template class='tmpl'>
    <div class="technology">
        <nav-bar titles="技术栈"></nav-bar>
        <div class="content">
            <div class="left_content">
                <ul class="list">
                    <li v-for="(list,index) in ulList" :key="index" class="list_detiall">{{list.technologyCont}}</li>
                </ul>
            </div>
            <div class="right_content">
                <p>{{data}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            data:'熟练掌握各种Web前端技术HTML/CSS/JavaScript,具备html5开发经验,有pc/移动端开发经验,熟悉现代主流的前端开发技术HTML, JavaScript, CSS以及比较常用的开源库jQuery、 Bootstrap、 vueJS、angularJS等。',
            ulList:[
                {
                 technologyCont:'CSS3'   
                },
                {
                 technologyCont:'html5'   
                },
                {
                 technologyCont:'JavaScript'   
                },
                {
                 technologyCont:'jquery'   
                },
                {
                 technologyCont:'Bootstrap'   
                },
                {
                 technologyCont:'vueJS'   
                }
            ]
        }
    }
}
</script>
<style scoped>
    .technology{
        width: 100%;
        height: 974px;
        background: #8c8d91;
    }
    .content{
        max-width: 600px;
        height: 300px;
        margin: 0 auto;
        margin-top: 200px;
    }
    .left_content{
        float: left;
        max-width: 40%;
        height: 300px;
    }
    .right_content{
        float: right;
        max-width: 60%;
        color: white;
        height: 300px;
        text-align: center;
        display: table;
        padding-left: 50px;
        box-sizing: border-box;
    }
    .right_content p{
        display: table-cell;
        vertical-align: middle;
    }
    .list{
        width: 100%;
    }
    .list_detiall{
        width: 50%;
        height: 100px;
        float: left;
        text-align: center;
        line-height: 100px;
        background: white;
        border-radius: 50%;
    }
</style>
