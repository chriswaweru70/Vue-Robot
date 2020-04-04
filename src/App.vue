<template>
	<div id="app">
		<main>
			<HomePage />
		</main>
	</div>
</template>

<script>
import HomePage from '@/components/HomePage.vue'

export default {
	name: 'app',
	components: {
		HomePage
	}
}
</script>

<style>
body {
	background: linear-gradient(to bottom, #555, #999);
	background-attachment: fixed;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

main {
	margin: 0 auto;
	padding: 30px;
	background-color: #fff;
	width: 1026px;
	min-height: 300px;
}
</style>