<template>
  <div class="list-wrapper" style="height: 100%">
    <loading v-if="loadingFlag"></loading>
    <City v-if="cityShow" @closeCity="cityClose"></City>
    <el-container class="container">
    	<el-header>
    		<div class="city fl i-logo" @click="">
		        <span class="vm city-name f14" @click="cityShow=true">{{cityName}}</span>
		        <span class="city-arrow-icon vm" @click="cityShow=true"></span>
		    </div>
		    <div class="sel-lists f14 fl pr" @click="">
		        <div :class="{selnav: colorFlag}" @click="colorFlag=1">正在热映</div>
		        <div :class="{selnav: !colorFlag}" @click="colorFlag=0">即将上映</div>
		        <span class="move pa" :class="{moveposition: !colorFlag}"></span>
		    </div>
    	</el-header>
    	<el-main class="main-wrapper">
    	   <Swiper></Swiper>
    	   <hot-list></hot-list>
    	</el-main>
    	<el-footer>
    		<ul>
    			<li class="footer-item">
    				<router-link to="/" >
    					<div class="nav-icon" @click="selectBox(1)">
    						<img src="../assets/images/hno.svg" alt="" v-if="selectIcon !== 1">
    						<img src="../assets/images/hok.svg" alt="" v-else="selectIcon === 1">
    					</div>
    					<div @click="selectBox(1)">
	    					<span class="text-style" style="color:#777;" v-if="selectIcon !== 1">热映</span>
	    					<span class="text-style" style="color:#ff4d64;" v-else="selectIcon === 1">热映</span>
    					</div>
    				</router-link>
    			</li>
    			<li class="footer-item">
    				<router-link to="/" >
    					<div class="nav-icon" @click="selectBox(2)">
    						<img src="../assets/images/mno.svg" alt="" v-if="selectIcon !== 2">
    						<img src="../assets/images/mok.svg" alt="" v-else="selectIcon === 2">
    					</div>
    					<div @click="selectBox(2)">
	    					<span class="text-style" style="color:#777;" v-if="selectIcon !== 2">影院</span>
	    					<span class="text-style" style="color:#ff4d64;" v-else="selectIcon === 2">影院</span>
    					</div>
    				</router-link>
    			</li>
    			<li class="footer-item">
    				<router-link to="/" >
    					<div class="nav-icon" @click="selectBox(3)">
    						<img src="../assets/images/eno.svg" alt="" v-if="selectIcon !== 3">
    						<img src="../assets/images/eok.svg" alt="" v-else="selectIcon === 3">
    					</div>
    					<div @click="selectBox(3)">
	    					<span class="text-style" style="color:#777;" v-if="selectIcon !== 3" >我的</span>
	    					<span class="text-style" style="color:#ff4d64;" v-else="selectIcon === 3">我的</span>
    					</div>
    					
    				</router-link>
    			</li>
    		</ul>
    	</el-footer>
    </el-container>
  </div>
</template>

<script>
import Swiper from '../components/swiper.vue'
import '../assets/css/reset.css'
import '../assets/css/home.css'
import City from '../components/selectCity.vue'
import hotList from '../components/hotList.vue'
import loading from '../components/loading.vue'
import { mapMutations, mapState } from 'vuex'
export default {
	data() {
		return {
			colorFlag:1,
			cityShow:false,
			loadingFlag: false,
			selectIcon:1
		}
	},
	created(){
		this.loadingFlag = true;
	},
	mounted(){
		this.loadingFlag = false;
	},
	computed:{
		...mapState(['cityName'])
	},
	methods:{
		cityClose() {
			this.cityShow = false;
		},
		selectBox(val) {
			this.selectIcon = val;
		}
	},
	components: {
		Swiper,
		City,
		hotList,
		loading
	}
}
</script>
<style lang="scss" scoped>
	.container{
		.el-header{
			display:flex;
			padding: 0;
			.selnav {
			  color: #ff4d64;
			}
			.i-logo{
			  background: url('../assets/images/logo.svg') no-repeat;
			  background-size: 25px 25px;
			  background-position: 13px 8px;
			}
			.city {
			  width: 35%;
			  flex: 0 0 35%;
			  height: 100%;
			  line-height: 40px;
			  text-align: center;
			  .city-arrow-icon{
			  	margin-left: 4px;
			    width: 12px;
			    height: 12px;
			    display: inline-block;
			    &:after{
			    	content: "";
			    	display: block;
				    width: 6px;
				    height: 6px;
				    margin-left: 0;
				    border: 1px solid #50505a;
				    border-top: 0 none;
				    border-left: 0 none;
				    margin-left: 2px;
				    -webkit-transform: rotate(45deg);
				    transform: rotate(45deg);
			    }
			  }
			}
			.sel-lists{
				flex:1;
			    div{
			    	width:40%;
			    	display: inline-block;
				    line-height: 40px;
				    text-align: center;
			    }
			    .move{
			    	display: inline-block;
				    bottom: 0px;
				    width: 40%;
				    margin:0 auto;
				    border-bottom: 3px solid #ff4d64;
				    transition: all 0.7s ease-in-out;
			    }
			    .moveposition{
			    	transform: translate3d(100%, 0px, 0px);
			    }
			}
		}
		.main-wrapper{
			padding:0;
		}
		.el-footer{
			position: fixed;
			padding:6px 0;
			width:100%;
			height:50px !important;
			background:#fff;
			bottom:0;
			ul{
				display: flex;
				.footer-item{
					flex:1 1 auto;
					// border:1px solid red;
					.nav-icon{
						width: 22px;
	                    height: 22px;
	                    margin: 0 auto;
	                    img{
	                    	width:100%;
	                    	height:100%;
	                    }
					}
					.text-style{
						display: block;
						font-size: 10px;
						text-align:center;
						line-height: 16px;
					}
				}
			}
		}
	}
</style>

