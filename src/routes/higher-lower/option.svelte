<script lang="ts">
	import type { Class } from '@prisma/client';
	import OptionsText from './options-text.svelte';
	export let vote;
	export let classObj: Class;
	let value = '';
</script>

{#if value == 'correct'}
	<button
		class="relative flex h-64 w-64 cursor-pointer select-none items-center justify-center rounded-2xl border-2 border-[#61e63f] bg-container text-center align-middle shadow-xl transition-all duration-200 hover:-translate-y-2 hover:scale-105 hover:border-[#61e63f] hover:shadow-lg active:translate-y-0 active:scale-95 active:shadow-none disabled:pointer-events-none md:h-72 md:w-72 lg:h-96 lg:w-96"
		on:click="{async () => {
			value = await vote();
		}}"
	>
		<OptionsText classObj="{classObj}"></OptionsText>
	</button>
{:else}
	<button
		class="relative flex h-64 w-64 cursor-pointer select-none items-center justify-center rounded-2xl border-2 border-primary bg-container text-center align-middle shadow-xl transition-all duration-200 hover:-translate-y-2 hover:scale-105 hover:border-accent hover:shadow-lg active:translate-y-0 active:scale-95 active:shadow-none disabled:pointer-events-none md:h-72 md:w-72 lg:h-96 lg:w-96"
		on:click="{async () => {
			value = await vote();
		}}"
	>
		<OptionsText classObj="{classObj}"></OptionsText>
	</button>
{/if}

<style lang="postcss">
</style>
