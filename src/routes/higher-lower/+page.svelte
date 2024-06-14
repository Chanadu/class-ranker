<script lang="ts">
	import { goto } from '$app/navigation';
	import { highestHigherLowerScore } from '../stores';
	import Option from './option.svelte';
	import { currentClassHigherLower, currentScore } from './stores';
	export let data;

	let classes = data.classes;
	let rankedClasses = data.rankedClasses;
	let votedForHigher = false;
	let currentState = 'play';

	$: {
		if ($currentScore > $highestHigherLowerScore) {
			$highestHigherLowerScore = $currentScore;
		}
	}
	async function voteForHigher(option: number): Promise<void> {
		if (votedForHigher) return;
		votedForHigher = true;
		console.log('option: ', option);

		let rankedClassObj = [rankedClasses.option1, rankedClasses.option2];
		if (rankedClassObj[option]!.winningPercentage > rankedClassObj[1 - option]!.winningPercentage) {
			$currentScore++;
			$currentClassHigherLower = rankedClassObj[1].name;
			setTimeout(() => {
				currentState = 'correct';
				setTimeout(() => {
					goto('/loading/higher-lower');
				}, 1000);
			}, 500);
		} else if (rankedClassObj[option]!.winningPercentage < rankedClassObj[1 - option]!.winningPercentage) {
			$currentScore = 0;
			$currentClassHigherLower = '';
			setTimeout(() => {
				currentState = 'wrong';
			}, 1500);
		} else {
			console.log('huh');
			goto('/server-error');
		}
	}
</script>

{#if currentState == 'play' || currentState == 'correct'}
	<div>
		<div class="absolute left-0 top-0 flex w-full flex-col items-center justify-center pt-20">
			<div class="flex w-full flex-row justify-around">
				<div></div>
				<div
					class="group relative -bottom-4 cursor-pointer text-2xl text-text transition-all duration-100 hover:-translate-y-1 hover:scale-105 hover:border-accent hover:shadow-lg"
				>
					<div
						class="pointer-events-none relative opacity-0 transition-all duration-100 hover:scale-105 group-hover:-translate-y-2 group-hover:opacity-100"
					>
						Highest Score: {$highestHigherLowerScore}
						<br />
					</div>
					<div
						class="flex w-full items-center justify-center rounded-2xl border-2 border-primary bg-container p-4 shadow-sm transition-all duration-100 hover:scale-105 hover:border-accent hover:shadow-lg"
					>
						Score: {$currentScore}
					</div>
				</div>
			</div>

			<h2
				class="pointer-events-none flex-col items-center justify-center text-2xl text-text md:top-12 md:text-4xl"
			>
				{#if currentState == 'play'}
					<p class="flex items-center justify-center pb-2">Higher or Lower?</p>
					<p class="flex items-center justify-center text-lg md:text-2xl">
						(Based on each classes' winning percentage)
					</p>
				{/if}
				{#if currentState == 'correct'}
					<p class="flex items-center justify-center pb-2">Correct!</p>
				{/if}
			</h2>
		</div>
		<div class="flex h-screen w-full flex-col items-center justify-evenly pt-36 md:flex-row md:pt-20">
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
	<div class="flex h-screen w-full flex-col items-center justify-center gap-8 text-4xl">
		Incorrect! Rip.

		<button
			on:click="{() => goto('/loading/higher-lower')}"
			class="flex cursor-pointer items-center rounded-2xl border-2 border-primary p-4 text-center text-lg shadow-xl shadow-background transition-all duration-100 hover:-translate-y-1 hover:scale-105 hover:border-accent active:translate-y-0 active:scale-95 md:p-4 md:text-2xl"
			>Try again.</button
		>
	</div>
{/if}

<style lang="postcss">
</style>
