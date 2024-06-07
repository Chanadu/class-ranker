<script lang="ts">
	import { onMount } from 'svelte';

	let showLoading = false;
	onMount(() => {
		setTimeout(() => {
			showLoading = true;
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

<div class="relative">
	{#if showLoading}
		<div class="top-32 flex w-full justify-center text-4xl">Loading...</div>
	{/if}
	<slot></slot>
</div>

<style lang="postcss">
</style>
