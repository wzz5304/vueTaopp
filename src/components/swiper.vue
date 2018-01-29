<template>
  <div>
	<el-carousel height="40vw">
	    <el-carousel-item v-for="(item,index) in swiperlist" :key="index">
			<a :href="item.actionUrl">
			    <img class="img" :src="'https://gw.alicdn.com/tfs/' + item.smallPicUrl" />
			</a>
		</el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import axios from 'axios'
export default {
	data() {
		return {
			swiperlist:[]
		}
	},
	mounted(){
		this.getData();
	},
	methods: {
		getData() {
			axios.get('/api/swiperlist').then((res) => {
				res = res.data.data;
				if(res.data.returnCode === '0') {
					this.swiperlist = res.data.returnValue;
				} else {
					this.swiperlist = '没有数据';
				}
				//console.log(this.swiperlist);
			});
		}
	}
}
</script>
<style lang="scss" scoped>
	.el-carousel{
		min-height:40vw;
		overflow: hidden;
		.el-carousel__container{
			min-height:40vw;
			.el-carousel__item{
				min-height:40vw;
				.img{
					width:100%; 
					height:100%;
				}
				h3{
					color: #475669;
                    font-size: 14px;
                    opacity: 0.75;
                    line-height: 150px;
                    margin: 0;
                    text-align: center;
				}
			}
		}
	} 
</style>

