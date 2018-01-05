<template>
	<el-menu model="vertical" theme="dark" :default-active="$route.path"
		 background-color="#545c64"
         text-color="#fff"
         active-text-color="#ffd04b" >
		<sidebar-item :routes="routes"></sidebar-item>
	</el-menu>
</template>

<script>
	import SidebarItem from './SidebarItem'
	export default {
		components: { SidebarItem },
		computed: {
			routes(){
				return this.$router.options.routes
			}
		}
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped >
.el-menu {
  min-height: 100%;
}
</style>