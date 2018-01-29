<template>
  <div>
    <div class="container">
      <video-player class="vjs-custom-skin"
        ref="videoPlayer"
        :options="videoUrl"
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
        @statechanged="playerStateChanged($event)" >
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
    return {}
  },
  mounted(){
    setTimeout(() => {
        this.player.muted(false)
      }, 2000);
    //console.log(this.videoUrl);
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
.video-js .vjs-big-play-button{
     /*
      播放按钮换成圆形
     */
    display:none !important;
  } 
</style>

