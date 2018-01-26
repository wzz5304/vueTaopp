<template>
<transition name="fade" mode="out-in">
  <section ref="city" id="select-city" class="pf select-city">
		<header class="city-header mint-1px-b pr">
			<span class="fb">选择城市</span>
			<span class="close-city pa" @click="close">×</span>
		</header>
		<div ref="city" class="mt-wrapper" @click.prevent="checkCity($event)">
			<mt-index-list>
			  <mt-index-section v-for="(item,index) in cityList" :index="index" :key="index">
			    <mt-cell v-for="(name,index) in item" :title="name.regionName" :key="index"></mt-cell>
			  </mt-index-section>
			</mt-index-list>
		</div>
	</section>
</transition>
</template>

<script>
import axios from 'axios'
import '../assets/css/city.css'
export default {
	data() {
		return {
			cityList:[]
		}
	},
	mounted(){
		this.getData();
	},
	methods: {
		getData() {
			axios.get('/api/citylist').then((res) => {
				res = res.data.data;
				if(res.data.returnCode === '0') {
					this.cityList = res.data.returnValue;
				} else {
					this.cityList = '没有数据';
				}
				//console.log(this.cityList);
			});
		},
		checkCity(event){
			let ele = event.target;
			let className = ele.className;
			let name = '';
			if (className === "mint-indexsection-index" || className ==="mint-indexlist-nav" || className === "mint-indexlist-navitem") {
				return;
			} else if (className === 'mint-cell-wrapper') {
				name = ele.children[0].children[0].innerHTML
			} else if (className === "mint-cell-title") {
				name = ele.children[0].innerHTML;
			} else if (className === 'mint-cell-text') {
				name = ele.innerHTML;
			}else {
				return;
			}
			this.$store.commit('selectCity', name);
			this.$store.dispatch('getHotList');
			this.close();
			//console.log(name);
		},
		close() {
			this.$emit('closeCity');
		}
	}
}
</script>
<style lang="scss" scoped>
.select-city{
	position:fixed;
    left:0;
    z-index:30;
    width:100%;
    height:100%;
	&.fade-enter-active,&.fade-leave-active{
		transition:all 0.2s linear;
        transform:translate3d(0,0,0);
	}
	&.fade-enter ,&.fade-leave-active{
		transform:translate3d(0,-100px,0);
	}
	.city-header{
		z-index: 1002;
        position: absolute;
        top: 0;
        border-bottom: 1px solid #e9e9e9;
        width: 100%;
        height: 45px;
        background: #fff;
        color: #000;
        font-size: 16px;
        line-height: 45px;
        text-align: center;
        .close-city{
        	position: absolute;
            display: block;
            top: 0;
            right: 0;
            width: 40px;
            height: 40px;
            color: #777;
            text-align: center;
            font-size: 29px;
        }
	}
	.mt-wrapper{
		margin-top:46px;
		.mint-indexlist{
			background: #fcfcfc;
			.mint-indexlist-content{
				.mint-indexsection{
					.mint-indexsection-index{
						background: #eee;
					}
					.mint-cell{
						border-bottom: 1px solid #e5e7e7;
	                    background: #fcfcfc;
	                    color:#777;
					}
					
				}
			}
		}
	}
}
</style>


