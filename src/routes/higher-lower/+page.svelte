<script lang="ts">
	import { goto } from '$app/navigation';
	import { currentClassHigherLower, currentScore, highestHigherLowerScore } from '../stores';
	import Option from './option.svelte';
	export let data;

	let classes = data.classes;
	let rankedClasses = data.rankedClasses;
	let voted = false;
	let currentState = 'play';

	$: {
		if ($currentScore > $highestHigherLowerScore) {
			$highestHigherLowerScore = $currentScore;
		}
	}
	async function vote(option: number): Promise<string> {
		if (voted) return '';
		voted = true;

		let rankedClassObj = [rankedClasses.option1, rankedClasses.option2];
		if (rankedClassObj[option]!.winningPercentage > rankedClassObj[1 - option]!.winningPercentage) {
			currentState = 'correct';
			$currentScore++;
			$currentClassHigherLower = rankedClassObj[option].name;
			setTimeout(() => {
				goto('/loading/higher-lower');
			}, 1000);
		} else if (rankedClassObj[option]!.winningPercentage < rankedClassObj[1 - option]!.winningPercentage) {
			currentState = 'wrong';
			$currentScore = 0;
		} else {
			console.log('huh');
			goto('/server-error');
		}
		return currentState;
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
			</h2>
		</div>
		<div class="flex h-screen w-full flex-col items-center justify-evenly pt-36 md:flex-row md:pt-20">
			<Option
				vote="{() => vote(0)}"
				classObj="{classes.option1}"
			></Option>
			<Option
				vote="{() => vote(1)}"
				classObj="{classes.option2}"
			></Option>
		</div>
	</div>
{:else if currentState == 'wrong'}
	<div class="flex h-full w-full items-center justify-center text-4xl">Incorrect! Rip.</div>
{:else}
	HUH
{/if}

<style lang="postcss">
</style>
