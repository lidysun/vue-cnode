<template>
    <div>
        <!--loadering动画-->
        <div class="loading" v-if="isLoading"></div>
        <!--主题列表-->
        <div class="list">
            <ul>
                <li class="nav">
                    <span class="active">全部</span>
                    <span>精华</span>
                    <span>分享</span>
                    <span>问答</span>
                    <span>招聘</span>
                    <span>客户端测试</span>
                </li>
                <li v-for="post in posts">
                    <!--头像-->
                    <router-link :to="{name:'user_info',params:{name:post.author.loginname}}">
                        <img :src="post.author.avatar_url" alt="">
                    </router-link>
                    <!--回复/浏览-->
                    <span class="text">
                        <span class="reply_count">{{post.reply_count}}/</span>
                        <span class="visit_count">{{post.visit_count}}</span>
                    </span>
                    <!--类型-->
                    <span :class="[
                        {top:post.top === true},
                        {good:post.good === true},
                        {tab:post.top !== true && post.good !== true},
                    ]">
                        {{post | tabFormatter}}
                    </span>
                    <!--标题-->
                    <router-link class="title" :to="{name:'post_count',params:{id:post.id,name:post.author.loginname}}">{{post.title}}</router-link>
                    <!--时间-->
                    <span class="last-time">{{post.last_reply_at | forTimeDate}}</span>
                </li>
                <li class="button">
                    <Pagination @handleList="renderList"></Pagination>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import Pagination from './Pagination'
    export default {
        name:'PostList',
        data(){
            return {
                isLoading:true,
                posts:[],
                postPage:1
            }
        },
        components:{
            Pagination
        },
        methods:{
            getData(){
                this.$axios.get('https://cnodejs.org/api/v1/topics',{
                    params:{
                        page:this.postPage,
                        limit:20
                    }
                })
                .then((response)=>{
                    this.posts = response.data.data;
                    this.isLoading = false;
                },(err)=>{
                    console.log(err);
                })
            },
            renderList(value){
                this.postPage = value;
                this.getData();
            }
        },
        beforeMount() {
            this.getData();
        },

    }
</script>

<style scoped lang="scss">
    .list{
        >ul{
            list-style-type:none;
        }
        > ul > .nav{
            display: flex;
            align-items: center;
            padding: 8px 10px;
            border-bottom: 1px solid #F5F5F5;
            background: #F5F5F5;
            &>span{
                margin: 0 10px;
                color: #80bd01;
                font-size: 14px;
                &:hover{
                    color: #005580;
                }
            }
            &>span.active{
                background-color: #80bd01;
                color: #fff;
                padding: 3px 4px;
                border-radius: 3px;
            }
        }
        > ul > li{
            display: flex;
            align-items: center;
            padding: 10px 10px;
            border-bottom: 1px solid #F5F5F5;
            position: relative;
            background: #fff;
            &:not(.button):hover{
                background: #F5F5F5;
                & .title{
                    text-decoration: underline;
                    cursor:pointer;
                }
            }
            &>*{
                margin: 0 6px;
            }
            &>a>img{
                width: 30px;
                height: 30px;
            }
            &>.text{
                width: 50px;
                text-align: center;
            }
            & .reply_count{
                color: #9e78c0;
                font-size: 14px;
            }
            & .visit_count{
                color: #b4b4b4;
                font-size: 10px;
            }

            &>.top,
            &>.good{
                color: #fff;
                font-size: 12px;
                background: #80bd01;
                padding: 2px 4px;
                border-radius: 3px;
                white-space: nowrap;
            }
            &>.tab{
                color: #999;
                font-size: 12px;
                background: #e5e5e5;
                padding: 2px 4px;
                border-radius: 3px;
                white-space: nowrap;
            }
            &>.title{
                max-width: 70%;
                color: #000;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            &>.last-time{
                white-space: nowrap;
                position: absolute;
                right: 9px;
                color: #778087;
                font-size: 11px;
            }
        }
    }
</style>