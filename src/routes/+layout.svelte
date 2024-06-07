<script lang="ts">
	import { inject } from '@vercel/analytics';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import { onMount } from 'svelte';
	import '../app.css';
	import Navbar from './navbar.svelte';
	import { darkState } from './stores';
	let isMounted = false;

	onMount(() => {
		isMounted = true;

		$darkState ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
	});

	$: {
		if (isMounted) {
			$darkState ?
				document.documentElement.classList.add('dark')
			:	document.documentElement.classList.remove('dark');
		}
	}
	injectSpeedInsights();
	inject();
</script>

<div class="m-0 min-h-screen bg-background text-text transition-all duration-100">
	<Navbar></Navbar>
	<div class="mx-auto max-w-5xl">
		<slot></slot>
	</div>
</div>

<style lang="postcss">
</style>
