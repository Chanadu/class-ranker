<script lang="ts">
	import Button from '$lib/components/button.svelte';
	import type { Class } from '@prisma/client';
	import OptionsText from './options-text.svelte';
	export let vote: (option: number) => Promise<void>;
	export let classObj: Class;
	export let percentage: number;
	export let option: number;
	export let showAnswer: boolean = false;

	let percentageDisplayValue: number | string = option === 0 ? Math.round(percentage * 100) : '?';

	let value = '';

	function changePercentageDisplayValue() {
		if (percentageDisplayValue === '?') {
			percentageDisplayValue = 0;
		}
		let interval = setInterval(() => {
			if ((percentageDisplayValue as number) < Math.round(percentage * 100)) {
				(percentageDisplayValue as number)++;
			}
		}, 5);
		setTimeout(() => {
			clearInterval(interval);
		}, 510);
	}
</script>

<div class="relative flex flex-col items-center justify-center gap-4">
	<div
		class="relative flex h-64 w-64 cursor-pointer select-none items-center justify-center rounded-2xl border-2 border-primary bg-container text-center align-middle shadow-xl transition-all duration-200 hover:-translate-y-2 hover:scale-105 hover:border-accent hover:shadow-lg active:translate-y-0 active:scale-95 active:shadow-none disabled:pointer-events-none md:h-72 md:w-72 lg:h-96 lg:w-96"
	>
		<OptionsText classObj="{classObj}"></OptionsText>
	</div>

	<div
		class="absolute -bottom-24 flex w-full flex-row items-center justify-center gap-8 rounded-2xl text-2xl transition-all duration-200"
	>
		{#if option === 0 || showAnswer}
			<div
				class="flex h-full w-full items-center justify-center rounded-2xl border-2 border-accent bg-container p-4"
			>
				{percentageDisplayValue}%
			</div>
		{:else}
			<Button
				onClick="{async () => {
					showAnswer = true;
					changePercentageDisplayValue();
					await vote(0);
				}}">Lower</Button
			>
			<Button
				onClick="{async () => {
					showAnswer = true;
					changePercentageDisplayValue();
					await vote(1);
				}}">Higher</Button
			>
		{/if}
	</div>
</div>

<style lang="postcss"></style>
