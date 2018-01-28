import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
const state = {
  cityName:'深圳',
  hotList:[],
  videoUrl: {
        autoplay: true,
        muted: true,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: {
          type: "video/mp4",
          src: ''
        },
        poster: "",
      }
}
export default new Vuex.Store({
  state,
  mutations: {
  // 选择城市名
    selectCity(state, cityName){
      state.cityName = cityName;
    },
    updateHotList(state,hot) {
      state.hotList = hot;
    },
    //选择播放视频
    playVideo(state,videoUrl,videoImg){
      state.videoUrl.sources.src = videoUrl;
      state.videoUrl.poster = videoImg;
    }
  },
  actions:{
    //获取hotlist
    getHotList(context){
      var param = ({
        cityname:context.state.cityName
      });
      axios.get('/api/hostlist',{
        params:param
      }).then((res) => {
        res = res.data.data;
        if(res.data.returnCode === '0') {
          var val = res.data.returnValue;
          //console.log(res.data.returnValue);
          context.commit('updateHotList',val);
        } else {
          context.commit('updateHotList','');
        }
      });
    }
  }
  	
});
