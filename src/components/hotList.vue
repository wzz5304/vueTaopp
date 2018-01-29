<template>
  <section id='hot'>
    <ul>
      <li class="item-wrapper" v-for="item in hotList">
        <div class="m-info">
          <div class="poster-c">
            <a class="poster" @click="clickVideo(item)">
              <img v-lazy="`https://gw.alicdn.com/${item.poster}`" alt="">
              <i class="el-icon-caret-right"></i>
            </a>   
          </div>
          <div class="m-item-content">
            <a href="" style="overflow:hidden;">       
              <div class="title">         
                <div class="show-name">{{item.showName}}</div>
                <div class="vm type-3dimax" v-if="item.showMark == 'IMAX3D'"></div>
                <div class="vm type-imax" v-if="item.showMark == 'IMAX'"></div>
                <div class="vm type-3d" v-if="item.showMark == '3D'"></div>                         
              </div>       
              <div class="brief">                  
                <el-rate
                  v-model="item.remark/2"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                  >
                </el-rate>              
              </div>       
              <div class="brief">导演：{{item.director}}</div>       
              <div class="brief">主演：{{item.leadingRole}}</div>       
              <div class="fantastic">         
                <i class="tpp-lbl tpp-lbl-outline-primary">今日最热</i>
                <i class="tpp-lbl tpp-lbl-outline-warning">一周最热</i>       
              </div>     
            </a>
          </div>
          <div class="btn-wrap">     
            <a href=""class="tpp-btn tpp-btn-primary">购票</a>          
            <div class="act-tag">特惠</div>          
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
import '../assets/css/hot.css'
import axios from 'axios'
import Vue from 'vue'
import { mapMutations, mapState,mapGetters } from 'vuex'
export default {
  data() {
    return {
      value5:4.5
      //hotList:[]
    }
  },
  mounted(){
    //this.getHotList();
    this.$store.dispatch('getHotList');
  },
  computed:{
    ...mapState(['cityName','hotList'])
    //...mapGetters(['hotList'])
  },
  methods: {
    clickVideo(data) {
      let url = data.preview[0].iphoneUrl;
      let imgUrl = data.preview[0].coverUrl;
      this.$store.commit('playVideo', url,imgUrl);
      this.$store.commit('playVideoDesc', data);
      this.$router.push({
        path:`videoPage`
      }); 
    }
  }
}
</script>
<style lang="scss" scoped>
#hot{
  ul{
    .item-wrapper{
      position: relative;
      background: #fff;
      padding-left: 4vw;
      border-bottom:1px solid #ededed;
      .m-info{
        display: flex;
        padding:4vw 4vw 4vw 0;
        .poster-c{
          flex: 0 0 auto;
          width: 17.3vw;
          height: 25.3vw;
          background-size: 8vw 8vw;
          .poster{
            position:relative;
            display:block;
            img{
              width:100%;
              height:auto;
            }
            img[lazy=loading] {
              width:100%;
              height:auto;
              margin: auto;
            }
            .el-icon-caret-right{
              display: block;
              top: 50%;
              left: 50%;
              position: absolute;
              background: hsla(0,0%,100%,.9);
              border-radius: 100%;
              width: 20px;
              height: 20px;
              margin: -10px 0 0 -10px;
              &:before{
                position:absolute;
                display:block;
                top:8%; 
                left:8%;
              }
            }
          }
        }
        .m-item-content{
          padding-left: 2.7vw;  
          padding-right: 2.7vw; 
          flex: 1 1 auto;
          overflow: hidden;
          text-decoration: none;
          .title{
            display: flex;
            align-items: center;
            overflow: hidden;
            max-width: 56.8vw;
            .show-name{
              color: #000;
              font-weight: 500;
              flex: 0 1 auto;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              display: block;
              max-width: 100%;
            }
            .type-3dimax{
              width: 45px;
              height: 17px;
              background-image: url('../assets/images/3dimax.svg');

            }
            .type-3d{
              width: 17px;
              height: 17px;
              background-image: url('../assets/images/3d.svg');
            }
            .type-imax{
              width: 27px;
              height: 15px;
              background-image: url('../assets/images/imax.svg');
            }
            .type-3d,.type-3dimax,.type-imax{
              margin: 5px 0 0 5px;
              background-size: 100%;
              background-repeat: no-repeat;
              float: left;
            }
          }
          .brief{
            color: #999;
            font-size: .8125rem;
            margin-top: .1875rem;
            margin-top: .8vw;
            width: auto;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            .el-rate{
              height:15px;
            }
          }
          .fantastic{
            .tpp-lbl{
              margin: 0 4px 0 0;
              display: inline-block;
              text-align: center;
              vertical-align: middle;
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              white-space: nowrap;
              height: 16px;
              line-height: 16px;
              padding: 0 4px;
              border-radius: 2px;
              user-select: none;
              border: 1px solid;
            }
            .tpp-lbl-outline-primary{
              color: #ff4d64;
              background-color: transparent;
              position: relative;
            }
            .tpp-lbl-outline-warning{
              color: #fea54c;
              background-color: transparent;
              position: relative;
            }
          }
        }
        .btn-wrap{
          display: flex;
          flex: 0 0 auto;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          .tpp-btn{
            display:block;
            border: 0;
            text-align: center;
            vertical-align: middle;
            user-select: none;
            color: #fff;
            background-color: transparent;
            box-sizing: border-box;
            height: 28px;
            line-height: 28px;
            padding: 0 13px;
            font-size: 12px;
            border-radius: 56px;
          }
          .tpp-btn, .tpp-btn-primary{
            background-image: linear-gradient(45deg,#4da9f7,#0588f8);
          }
          .act-tag{
            color: #999;
            font-size: 12px;
            width: auto;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }

    }
  }
}
</style>

