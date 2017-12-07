<template>
	<div class="home">
		<div class="content">
			<div class="shopStatus">
				<ul>
					<li>地址确认</li>
					<li>查看订单</li>
					<li>支付</li>
					<li>订单确认</li>
				</ul>
			</div>
			<div class="shopAddress">
				<div class="addressCont"
				v-for="(todo, index) in filterAddress"
				:class="{'addCheck': index == addIndex}"
				@click="addIndex = index">
					<p>姓名：{{todo.name}}</p>
					<p>地址：{{todo.text}}</p>
					<p>联系电话：{{todo.tel}}</p>
					<a class="editIcon aIcon"></a>
					<a class="delIcon aIcon" @click="delProduct(todos)"></a>
					<div class="addressStatus">
						<p v-if="todo.addressStatus">默认地址</p>
						<p v-if="!todo.addressStatus" @click="setAddress(todo.addId)">设为默认地址</p>
					</div>
				</div>
				<div class="addressCont newAdd">
					<span>+</span>
					<p>添加新地址</p>
				</div>
				<div class="more">
					<a class="liTop" href="javascript:;" @click="moreAddress">更多</a>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				moreList: 2,
				addIndex: 0,
				todos: [
					{
						name: '王某某',
						text: '广州市天河区天河东路',
						tel: '13588888888',
						addId: 101,
						addressStatus: true
					},
					{
						name: '卢某',
						text: '广州市天河区天河东路',
						tel: '135xxxxx',
						addId: 102,
						addressStatus: false
					},
					{
						name: 'mou某某',
						text: '广州市天河区天河东路',
						tel: '135xxx8888',
						addId: 103,
						addressStatus: false
					}
				]
			}
		},
		mounted() {

		},
		computed: {
			filterAddress() {
				return this.todos.slice(0, this.moreList);
			}
		},
		methods: {
			moreAddress() {
				this.moreList = this.todos.lenght;
			},
			setAddress(addId) {
				this.todos.forEach(function(address, index) {
					if(address.addId == addId) {
						address.addressStatus = true;
					}else {
						address.addressStatus = false;
					}
				});
			},
			delProduct() {
				// var index = this.todos.indexOf(this.addId)
				var index = this.todos.addId;
				console.log(this.todos.addId)
				this.todos.splice(index, 1);
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/style/mixin.scss';
.shopStatus {
	overflow: hidden;
	margin-bottom: 16px;
	ul {
		text-align: center;
		li{
			width: 25%;
			float: left;
			padding: 10px 0;
		}
	}
}
.shopAddress {
	.addressCont {
		font-size: 12px;
		border: 1px solid;
		margin: 10px auto;
		width: 300px;
		padding: 10px 5px;
		position: relative;
		&:hover{
			border: 3px solid red;
			// background-color: #556;
			// color: #fff;
			a {
				display: block;
			}
		}
		p {
			line-height: 25px;
		}
		a {
			width: 15px;
			height: 20px;
			position: absolute;
			right: 10px;
			display: none;
			&.delIcon {
				background: url('../assets/imgs/delete.png') no-repeat 0/100%;
				bottom: 6px;
			}
			&.editIcon {
				background: url('../assets/imgs/bian.png') no-repeat 0/100%;
				top: 3px;
			}
		}
		.addressStatus {
			color: red;
		}
	}
	.newAdd {
		text-align: center;
		span {
        font-size: 50px;
		}
	}
	.more {
		text-align: center;
		position: relative;
		a {
			color: red;
			&.liTop::after {
				left: 210px;
    			top: 8px;
			}
		}
	}

}
</style>
