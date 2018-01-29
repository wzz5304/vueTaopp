<template>
  <section class="content-wrapper" ref="contentWrapper">
     <!--  <h3 class="title">热门评论</h3> -->
      <div class="rating-wrapper" v-for="(item, index) in evaluList" :key="index" >
        <div class="avatar">
          <img :src="'https://gw.alicdn.com/tfs/' + item.avatar" alt="">
        </div>
        <div class="ratings">
          <span class="username">{{item.nickName}}</span>
          <div class="rating-content">{{item.content}}</div>
          <span class="time">01-17 23:53</span>
          <div class="comment-msg">
            <span class="icon"></span>
            <span class="count">{{item.favorCount}}</span>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import axios from 'axios'
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      evaluList:[]
    }
  },
  created(){
    this.getEvaluationg();
  },
  methods: {
    getEvaluationg(){
      axios.get('/api/evaluationg').then((res=>{
        res = res.data.data.data;
        if(res.returnCode === '0') {
          this.evaluList = res.returnValue;
        }
        console.log(res);
      }));
    },
    _initScroll(){
      this.ratingScroll = new BScroll(this.$refs.contentWrapper, {
          click: true,
          probeType: 3,
      });
      console.log(this.ratingScroll);
    }
  }
}
</script>
<style lang="scss" scoped>
.content-wrapper{
    padding:0 18px;
    overflow:hidden;
    height:100%;
    .title{
      font-size:16px;
      color:#222227;
      font-weight:700;
    }
    .rating-wrapper{
      display:flex;
      width:100%;
      position:relative;
      border-bottom:1px solid #ededed;
      padding: 18px 0 18px 0;
      &:last-child{
        border-bottom:none;
      }
      .avatar{
        flex:0 0 30px;
        width:30px;
        height:30px;
        border-radius:50%;
        img{
          height:100%;
          width:100%;
          border-radius:50%;
        }
      }
      .ratings{
        flex:1;
        position:relative;
        padding:5px 0 0 10px;
        .username{
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-weight: 700;
          color: #50505a;
          font-size:14px;
        }
        .rating-content{
          text-align: justify;
          white-space: pre-line;
          word-wrap: break-word;
          font-size:13px;
          line-height:20px;
          color:#333;
          margin:5px 0 10px 0;
        }
        .time{
          font-size: 12px;
          color: #8a869e;
        }
        .comment-msg{
          position:absolute;
          right:0;
          bottom: 0;
          .icon{
            display:inline-block; 
            width: 14px;
            height: 14px;
            line-height: 1.25rem;
            vertical-align: middle;
            font-size: 12px;
            background:url('../assets/images/zan.svg');
            background-size: 14px 14px;
          }
          .count{
            vertical-align: middle;
            line-height: 1.25rem;
            font-size: 12px;
            display: inline-block;
            color: #8a869e;
          }
        }
      }
    }
  }
</style>

