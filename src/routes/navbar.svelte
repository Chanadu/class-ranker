<script lang="ts">
	import { goto } from '$app/navigation';
	import PageLink from './pageLink.svelte';
</script>

<div class="absolute top-0 flex h-20 w-full flex-row justify-center bg-container px-4 py-4 shadow-xl">
	<div class="flex w-full max-w-xl flex-row justify-between md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
		<PageLink func="{() => goto('/loading/vote')}">Voting</PageLink>
		<PageLink func="{() => goto('/loading/ranking')}">Ranking</PageLink>
		<PageLink func="{() => goto('/loading/higher-lower')}">Higher-Lower</PageLink>
		<PageLink func="{() => goto('/settings')}">Settings</PageLink>
	</div>
</div>

<style lang="postcss">
</style>
