<template>
	<el-form ref="form" :model="form" label-width="80px" >
		<el-form-item label="用户名:">
			<el-input v-model="form.username" placeholder="请输入用户名">
			</el-input>
		</el-form-item>
		<el-form-item label="密码:">
			<el-input v-model="form.password" placeholder="请输入密码">
			</el-input>
		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click="onLogin" >登录</el-button>
		</el-form-item>
	</el-form>
</template>

<script >
	export default{
		name:'login',
		data() {
			return {
				form: {
					username:'',
					password:''
				}	
			}
		},
		methods:{
			onLogin(){
				console.log('submit!'+this.$refs.form);
				this.$refs.form.validate(valid => {
      				console.log('submit!'+valid);
					this.$router.push({ path: '/table' })
      			})
			}
		}
	}
</script>