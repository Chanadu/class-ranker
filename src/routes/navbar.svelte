<script lang="ts">
	import { goto } from '$app/navigation';
	import PageLink from './pageLink.svelte';
	import { darkState } from './stores';
</script>

<div class="absolute top-0 flex h-20 w-full flex-row justify-center bg-container py-4 shadow-xl">
	<div class="flex w-full max-w-4xl flex-row justify-between">
		<PageLink func="{() => goto('/loading/vote')}">Voting</PageLink>
		<PageLink func="{() => goto('/loading/ranking')}">Ranking</PageLink>
		<PageLink func="{() => darkState.update((state) => !state)}">Color</PageLink>
	</div>
</div>

<style lang="postcss">
</style>
