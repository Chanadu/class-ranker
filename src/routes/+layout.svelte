<script lang="ts">
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
</script>

<div class="m-0 min-h-screen bg-background text-text">
	<Navbar></Navbar>
	<div class="mx-auto max-w-6xl">
		<slot></slot>
	</div>
</div>

<style lang="postcss">
</style>
