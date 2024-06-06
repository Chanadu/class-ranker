<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		setTimeout(() => {
			goto('/home');
		}, 250);
	});
</script>

<svelte:head>
	<title></title>
	<meta
		name="description"
		content="Loading"
		title="Loading"
	/>
</svelte:head>

<div><slot></slot></div>

<style lang="postcss">
</style>
