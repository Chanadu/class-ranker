<script lang="ts">
	import { goto } from '$app/navigation';
	import PageLink from './pageLink.svelte';
</script>

<div class="Sshadow-xl absolute top-0 z-20 flex h-24 w-full flex-row justify-center bg-container p-4">
	<div class="flex w-full max-w-xl flex-row justify-between md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
		<PageLink onClick="{() => goto('/loading/vote')}">Vote</PageLink>
		<PageLink onClick="{() => goto('/loading/ranking')}">Ranking</PageLink>
		<PageLink onClick="{() => goto('/loading/higher-lower')}">Higher-Lower</PageLink>
		<PageLink onClick="{() => goto('/settings')}">Settings</PageLink>
	</div>
</div>

<style lang="postcss">
</style>
