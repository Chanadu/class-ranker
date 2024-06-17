<script lang="ts">
	import { beforeNavigate, goto } from '$app/navigation';
	import Button from '$lib/components/button.svelte';
	import { isNavDown } from '../stores';
	import Option from './option.svelte';
	import ScoreDisplay from './scoreDisplay.svelte';
	import { currentClassHigherLower, currentScore } from './stores';
	export let data;

	let classes = data.classes;
	let rankedClasses = data.rankedClasses;
	let votedForHigher = false;
	let currentState = 'play';

	async function voteForHigher(option: number): Promise<void> {
		if (votedForHigher) return;
		votedForHigher = true;

		let rankedClassObj = [rankedClasses.option1, rankedClasses.option2];
		if (rankedClassObj[option]!.winningPercentage > rankedClassObj[1 - option]!.winningPercentage) {
			$currentScore++;
			$currentClassHigherLower = rankedClassObj[1].name;
			setTimeout(() => {
				currentState = 'correct';
				setTimeout(() => {
					goto('/loading/higher-lower/nav');
				}, 1000);
			}, 500);
		} else if (rankedClassObj[option]!.winningPercentage < rankedClassObj[1 - option]!.winningPercentage) {
			$currentScore = 0;
			$currentClassHigherLower = '';
			setTimeout(() => {
				currentState = 'wrong';
			}, 1500);
		} else {
			goto('/server-error');
		}
	}

	beforeNavigate((navigation) => {
		if (
			navigation.to?.url.pathname.toString() === '/loading/higher-lower/nav' ||
			navigation.to?.url.pathname.toString() === '/higher-lower'
		) {
			return;
		}
		if (!confirm('Your current score will be lost if you leave this page.')) {
			navigation.cancel();
			return;
		}
		$currentScore = 0;
		$currentClassHigherLower = '';
	});
</script>

{#if currentState == 'play' || currentState == 'correct'}
	<div>
		<div
			class="absolute left-0 flex w-full flex-col items-center justify-center
			{$isNavDown ? 'pt-32 md:pt-36 lg:pt-40' : 'pt-12 md:pt-12'}"
		>
			<h2
				class="pointer-events-none flex-col items-center justify-center text-2xl text-text md:top-12 md:text-4xl"
			>
				{#if currentState == 'play'}
					<p class="flex items-center justify-center pb-2 text-center">Higher or Lower?</p>
					<p class="flex items-center justify-center text-center text-lg md:text-2xl">
						(Based on Each Classes' Winning Percentage)
					</p>
				{/if}
				{#if currentState == 'correct'}
					<p class="flex items-center justify-center pb-2">Correct!</p>
				{/if}
			</h2>
			<ScoreDisplay></ScoreDisplay>
		</div>
		<div
			class="flex h-full w-full flex-col items-center justify-evenly gap-20 pb-20 md:h-screen md:flex-row md:gap-20 md:pb-0 lg:gap-48
			{$isNavDown ? ' pt-80 md:pt-60 lg:pt-48' : 'pt-64 md:pt-10'}"
		>
			<Option
				vote="{voteForHigher}"
				classObj="{classes.option1}"
				percentage="{rankedClasses.option1.winningPercentage}"
				option="{0}"
			></Option>
			<Option
				vote="{voteForHigher}"
				classObj="{classes.option2}"
				percentage="{rankedClasses.option2.winningPercentage}"
				option="{1}"
			></Option>
		</div>
	</div>
{:else if currentState == 'wrong'}
	<div class="flex h-screen w-full flex-col items-center justify-center gap-8 text-2xl md:text-4xl">
		Incorrect! Rip.
		<div class="flex items-center justify-center">
			<Button
				onClick="{() => goto('/loading/higher-lower')}"
				extraClasses="w-auto h-auto p-4"
			>
				Try Again
			</Button>
		</div>
	</div>
{/if}

<style lang="postcss">
</style>
