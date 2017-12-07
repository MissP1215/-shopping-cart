<template>
	<div class="home">
		<div class="content">
            <p class="tips">{{car}}</p>
            <ul class="carUl">
                <li v-for="todo in todos">  
                    <p @click="liClick(todo.name)" :class="[ 'liMsg', 'liTop', {'liBottom': todo.isClass}]">{{todo.name}}</p>     
                    <div class="carMsg" :class="{'carShow': todo.isClass}">
                        <p v-for="list in todo.data">
                            <span class="title">{{list.cName}}</span>
                            <span>{{list.value}}</span>
                        </p>
                    </div>
                </li>
            </ul>
            <div class="shop">
                <table>
                    <tr>
                        <td>商品信息</td>
                        <td>商品金额</td>
                        <td>商品数量</td>
                        <td>总金额</td>
                        <td>编辑</td>
                    </tr>
                </table>
                <div>
                   
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
                todos: [
                    {
                        name: '基本参数',
                        data: [
                            {
                                cName: '名称:',
                                value: '西瓜'
                            },
                            {
                                cName: '重量:',
                                value: '1.598'
                            },
                            {
                                cName: '甜度:',
                                value: 'xxxx'
                            }
                        ]
                    },
                    {
                        name: '西瓜信息',
                        data: [
                             {
                                cName: '长宽高:',
                                value: '3500*1500*1800'
                            },
                            {
                                cName: '个数:',
                                value: 'xxxx'
                            },
                            {
                                cName: '行李箱容积:',
                                value: 'xxxx'
                            },
                        ]
                    },
                    {
                        name: '西瓜类型',
                        data: [
                            {
                                cName: '黄小凤:',
                                value: '3500*1500*1800'
                            },
                            {
                                cName: '黑美人:',
                                value: 'xxxx'
                            },
                            {
                                cName: '麒麟:',
                                value: 'xxxx'
                            },
                        ]
                    }
                ]
			}	
		},
        created() {
            this.liOpen(this.todos[0].name);
		},
        mounted() {
            this.carT();
            
        },
        methods: {
            liOpen(name) {
                console.log(typeof this.todos[0].isClass)
                for(var i = 0; i<this.todos.length; i++) {
                    if(typeof this.todos[i].isClass == 'undefined') {
                        this.$set(this.todos[i], 'isClass', false);
                    }
                    if(this.todos[i].name == name) {
                        this.todos[i].isClass = true;
                    }else {
                        this.todos[i].isClass = false;
                    }
                    
                }
            },
            liClick(name) {
                // console.log(name)
                this.liOpen(name);
            },
            carT() {
                this.titles = '你好吗'
            }
        }	
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/style/mixin.scss';
.home {
	.content {	
        .carUl {
            border-top: 1px solid #ddd; 
            li { 
                position: relative;
                .liMsg {
                    line-height: 44px;
                    padding-left: 11px;
                }
                .icon {
                    position: absolute;
                    top: 18px;
                    right: 10px;
                }
                .carMsg {
                    background-color: #efefef;
                    padding: 10px 0 12px 11px;
                    transition: 3s;
                    display: none; 
                    &.carShow {
                        display: block;
                    }
                    p {
                        span{
                            font-size: 12px;
                            &.title {
                                width: 90px;
                                display: inline-block;
                            }
                        }
                    }
                }
            }
        }
        .shop {
            margin-top: 10px;
            td {


            }
        }
	}
}
</style>
