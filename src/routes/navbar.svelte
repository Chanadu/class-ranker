<script lang="ts">
	import { darkState } from './stores';
</script>

<div class="absolute top-0 z-0 flex h-16 w-full flex-row justify-around bg-secondary">
	<div class="pointer-events-none absolute h-full w-full bg-secondary opacity-0"></div>
	<a
		href="/home"
		class="flex h-full cursor-pointer items-center px-8 text-center text-2xl">Class-Ranker</a
	>
	<a
		href="/ranking"
		class="flex h-full cursor-pointer items-center px-8 text-center text-2xl">Ranking</a
	>
	<button
		on:click="{() => darkState.update((state) => !state)}"
		class="flex h-full cursor-pointer items-center px-8 text-center text-2xl">Color</button
	>
</div>

<style lang="postcss">
</style>
