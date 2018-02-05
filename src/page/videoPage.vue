<template>
  <div>
    <div class="container">
    <loading v-if="loadingFlag"></loading>
    <header class="header-wrapper">
      <router-link to="/">
        <div class="logo">
          <img src="../assets/images/logo.png">
        </div>
      </router-link>
    </header>
    <section class="video-wrapper">
      <video-player></video-player>
      <div class="main-header">
        <div class="remark-title">
          <div class="show-name">{{selectVedioList.showName}}</div>
          <div class="remark">
            <el-rate
              v-model="selectVedioList.remark/2"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}"
              >
            </el-rate>
          </div>
        </div>
        <div class="brief">{{selectVedioList.leadingRole}}</div>
        <div class="btn-wrap">     
          <a href=""class="tpp-btn tpp-btn-primary">购票</a>                 
        </div>
      </div>
    </section>
    <split></split>
    <rating></rating>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState,mapGetters } from 'vuex'
import '../assets/css/videopage.css'
import videoPlayer from '../components/videoPlayer.vue'
import split from '../components/split.vue'
import rating from '../components/ratings.vue'
import loading from '../components/loading.vue'
export default {
  data() {
    return {
      loadingFlag:false
    }
  },
  created(){
    this.loadingFlag = true;
  },
  mounted(){
    this.loadingFlag = false;
  },
  computed:{
    ...mapState(['selectVedioList'])
  },
  methods: {
    
  },
  components: {
    videoPlayer,
    split,
    rating,
    loading
  }
}
</script>
<style lang="scss" scoped>
.container{
  position:relative;
  overflow: hidden;
  .header-wrapper{
    background: #fff;
    width:100%;
    position: fixed;
    top:0;
    padding:18px 0 18px 18px; 
    z-index: 9999;
    .logo{
      img{
        display: block;
        height:38px;
      }
    }
  }
  .video-wrapper{
    margin-top:74px;
    overflow:hidden;
    .main-header{
      padding:18px;
      position:relative;
      .remark-title{
        display:flex;
        .show-name{
          flex:1;
          max-width: 160px;
          color: #222227;
          font-size:16px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-weight: 500;
        }
        .remark{
          flex:0 0 140px;
        }
      }
      .brief{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #8a869e;
        font-size:12px;
        margin-top:5px;
        max-width: 70%;
      }
      .btn-wrap{
        position:absolute;
        right:18px;
        top:25.5px;
        display: flex;
        flex: 0 0 auto;
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
</style>

