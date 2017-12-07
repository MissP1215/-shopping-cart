<template>
  <div class="home">
    <div class="content">
            <div class="shopHead">
                <ul>
                    <li>商品信息</li>
                    <li>商品金额</li>
                    <li>商品数量</li>
                    <li>总金额</li>
                    <li>编辑</li>
                </ul>
            </div>
            <div class="shopCont" v-for="(todo, index) in todos">
                <div class="products">
                    <span class="kko" :class="{'listCheck': todo.checked}" @click="choosed(todo)"></span>
                    <img :src="todo.productImg">
                        <p class="productsName">{{todo.name}}</p>
                        <dl>
                            <dt>赠送：</dt>
                            <dd v-for="list in todo.present">{{list.presentName}}</dd>
                        </dl>

                </div>
                <div class="money">单价：{{todo.price | proMoney}}</div>
                <div class="quantity">
                    <a class="cut" href="javascript:;" @click="changeMoeny(todo, -1)">-</a>
                    <input type="text" value="0" v-model="todo.quantity">
                    <a class="add" href="javascript:;" @click="changeMoeny(todo, 1)">+</a>
                </div>
                <div class="moneys">总金额：{{todo.price*todo.quantity | proMoney('元')}}</div>
                <div class="delOrder" @click="delP(todo)">
                    编辑：<a class="add" href="javascript:;" @click="divUp"></a>
                </div>
            </div>
            <div class="checkOut">
                <span class="kko" :class="{'listCheck': checkAll}"></span>
                <a class="choose" href="javascript:;" @click="allCheck(true)">全选</a>
                <a class="offChoose" href="javascript:;" @click="allCheck(false)">取消全选</a>
                <p>item:{{totalMoney}}</p>
                <router-link to="/address" tag="button">
                  结账
                </router-link>
            </div>
            <div class="over" v-if="divShow">
                <div  class="delLlist">
                    <button>关闭</button>
                    <p>你确认删除此订单信息吗？</p>
                    <div class="delBtn">
                        <a class="sureBtn" @click="delProduct(todos)">确定</a>
                        <a class="offBtn" @click="divUp(false)">取消</a>
                    </div>
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
			car: '请选择你要水果',
			titles: '欢迎光临',
			checkAll: false,
			totalMoney: 0,
			divShow: false,
			cutP: '',
			ind: '',
			todos:  [
				{
					name: '黄鹤楼香烟',
					price: 20,
					quantity: 1,
					present: [
						{
							presentId: '101',
							presentName: '烟嘴'
						},
						{
							presentId: '102',
							presentName: '打火机'
						}
					],
					productImg: 'static/imgs/cont_piture.png'

				},
				{
					name: '芙蓉王',
					price: 25,
					quantity: 2,
					present: [
						{
							presentId: '201',
							presentName: '打火机'
						}
					],
					productImg: require('../assets/imgs/logo.png')
				}
			]
      	}
    },
	// 局部过滤器
	filters: {
		proMoney: function(value, type) {
			var Ptype = type || '';
			return "￥" + value.toFixed(2)+ Ptype;
		}
	},
	created() {
		// this.liOpen(this.todos[0].name);

    },
	mounted() {


	},
	methods: {
		changeMoeny(product, way) {
			if(way>0) {
				product.quantity++;
			}else {
				product.quantity--;
				if(product.quantity<1) {
					product.quantity = 1;
				}
			}
			this.countPrice();
		},
		choosed(item) {
			console.log(item)
			if(typeof item.checked == 'undefined') {
				this.$set(item, 'checked', true);
			}else {
				item.checked = !item.checked;
			}
			this.countPrice();
		},
		allCheck(flag) {
			this.checkAll = flag;
			var _this = this;
			_this.totalMoney = 0;
			this.todos.forEach(function(item, index) {
				if(typeof item.checked == 'undefined') {
					_this.$set(item, 'checked', _this.checkAll);
				}else {
					item.checked = _this.checkAll;
				}
			});
			this.countPrice();
		},
		countPrice() {
			var _this = this;
			_this.totalMoney = 0;
			this.todos.forEach(function(item, index) {
				if(item.checked) {
					_this.totalMoney += item.price*item.quantity;
				}
			});
		},
		divUp() {
			this.divShow = !this.divShow;
		},
		delP(item) {
			this.divShow = true;
			this.cutP = item;
		},
		delProduct() {

			var index = this.todos.indexOf(this.cutP)
			// console.log(index)
			this.todos.splice(index, 1);
			this.divShow = !this.divShow;
		}
	}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/style/mixin.scss';
.home {
  .content {
        position: relative;
        span {
            &.kko {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                border: 1px solid;
                display: block;
            }
            &.listCheck {
                background-color: red;
            }
        }
        .shopHead {
            height: 50px;
            ul {
                li {
                    float: left;
                    width: 62.5px;
                    text-align: center;
                    line-height: 50px;
                    background: #999;
                    color: #fff;
                    &:first-child {
                        width: 125px;
                    }
                }
            }
        }
        .shopCont {
            overflow: hidden;
            font-size: 12px;
            border-bottom: 1px solid #ddd;
            padding-bottom: 10px;
            div {
                margin-top: 20px;
                margin-left: 20px;
                &.products {
                    overflow: hidden;
                    height: 86px;

                    img {
                        width: 100px;
                        float: left;
                    }
                    p {
                        margin-left: 90px;
                        &.productsName {
                            // padding-top: 8px;
                            padding-bottom: 30px;
                        }
                    }
                }
                &.quantity {
                    input {
                        border: 1px solid #ddd;
                        text-align: center;
                    }
                }
                &.moneys {
                    color: red;
                }
                &.delOrder {
                    a {
                        width: 20px;
                        height: 20px;
                        display: inline-block;
                        background: url('../assets/imgs/bian.png') no-repeat 0/100%;
                    }
                }

            }
        }
        .checkOut {
            margin-top: 20px;
            margin-left: 20px;
            span {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                border: 1px solid;
                display: inline-block;
            }
            .choose {
                color: red;
                padding-right: 20px;
            }
            p {
                display: inline-block;
                margin-left: 70px;
                margin-right: 10px;
            }
            button {
                padding: 5px 30px;
                background-color: #333;
                color: #fff;
            }
        }
        .over {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            // display: none;
            .delLlist {
                width: 260px;
                height: 150px;
                border: 1px solid #ddd;
                text-align: center;
                position: relative;
                background: #fff;
                top: 100px;
                left: 60px;

                button {
                    position: absolute;
                    top: 0;
                    right: 0px;
                }
                p {
                    line-height: 80px;
                    margin-bottom: 15px;
                }
                .delBtn {
                    // margin-top: 65px;
                    a {
                        padding: 8px 20px;
                        background-color: red;
                        color: #fff;
                    }
                }
            }
        }

  }
}
</style>
