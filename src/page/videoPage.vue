<template>
  <div>
    <div class="container">
      <video-player class="vjs-custom-skin"
                  ref="videoPlayer"
                  :options="playerOptions"
                  :playsinline="true"
                  @play="onPlayerPlay($event)"
                  @pause="onPlayerPause($event)"
                  @ended="onPlayerEnded($event)"
                  @loadeddata="onPlayerLoadeddata($event)"
                  @waiting="onPlayerWaiting($event)"
                  @playing="onPlayerPlaying($event)"
                  @timeupdate="onPlayerTimeupdate($event)"
                  @canplay="onPlayerCanplay($event)"
                  @canplaythrough="onPlayerCanplaythrough($event)"
                  @ready="playerReadied"
                  @statechanged="playerStateChanged($event)">
  </video-player>
    </div>
  </div>
</template>

<script>
import 'video.js/dist/video-js.css'
import '../assets/css/video.css'
import { videoPlayer } from 'vue-video-player'
import { mapMutations, mapState,mapGetters } from 'vuex'
export default {
  data() {
    return {
      message: 'Hi from Vue',
      playerOptions: {
        autoplay: true,
        muted: true,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: {
          type: "video/mp4",
          src: 'http://cloud.video.taobao.com/play/u/1745440806/p/1/e/6/t/1/d/sd/47819068.mp4'
        },
        poster: "http://img1.tbcdn.cn/tfscom/TB18pUuOpXXXXb_XpXXXXXXXXXX.jpg_336x336q75s0.jpg",
      }
    }
  },
  mounted(){
    setTimeout(() => {
        //this.player.muted(true)
        this.playerOptions.sources.src=this.videoUrl;
      }, 2000);
  },
  computed:{
    player() {
        return this.$refs.videoPlayer.player;
    },
    ...mapState(['videoUrl'])

  },
  methods: {
    onPlayerPlay(player) {
        // console.log('player play!', player)
    },
    onPlayerPause(player) {
      // console.log('player pause!', player)
    },
    onPlayerEnded(player) {
      // console.log('player ended!', player)
    },
    onPlayerLoadeddata(player) {
      // console.log('player Loadeddata!', player)
    },
    onPlayerWaiting(player) {
      // console.log('player Waiting!', player)
    },
    onPlayerPlaying(player) {
      // console.log('player Playing!', player)
    },
    onPlayerTimeupdate(player) {
      // console.log('player Timeupdate!', player.currentTime())
    },
    onPlayerCanplay(player) {
      // console.log('player Canplay!', player)
    },
    onPlayerCanplaythrough(player) {
      // console.log('player Canplaythrough!', player)
    },
    playerStateChanged(playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    },
    playerReadied(player) {
      //console.log('example player 1 readied', player)
      player.currentTime(10)
    }
  },
  components: {
    videoPlayer
  }
}
</script>
<style lang="scss" scoped>
      .vjs_video_3-dimensions {
        width: 100%;
        height: 200px;
      }

      .vjs_video_3-dimensions.vjs-fluid {
        padding-top: 41.66666666666667%;
      }
    
</style>

