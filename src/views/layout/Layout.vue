<template>
	<div class="app-wrapper">
		<header-container />
		<main class="main-container">
			<router-view />
		</main>
		<footer-container />
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import HeaderContainer from './components/header/Header.vue'
import FooterContainer from './components/footer/Footer.vue'

</script>
<style>
	.main-container {
		min-height: calc(100vh - 112px - 420px);
		/* background-color: #f9f9f9; */
		box-sizing: border-box;
	}
	.main-content {
		padding: 20px 0 80px 0;
	}
</style>
