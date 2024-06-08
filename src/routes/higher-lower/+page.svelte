<script lang="ts">
	import { goto } from '$app/navigation';
	import { currentScore, highestHigherLowerScore } from '../stores';
	import Option from './option.svelte';
	export let data;

	let classes = data.classes;
	let rankedClasses = data.rankedClasses;
	let voted = false;
	let currentText = 'Higher or Lower?';

	$: {
		if ($currentScore > $highestHigherLowerScore) {
			$highestHigherLowerScore = $currentScore;
		}
	}
	async function vote(option: number) {
		if (voted) return;
		voted = true;
		console.log('Ran');

		let rankedClassObj = [rankedClasses.option1, rankedClasses.option2];
		if (rankedClassObj[option]!.winningPercentage > rankedClassObj[1 - option]!.winningPercentage) {
			console.log('Correct');
			$currentScore++;
		} else if (rankedClassObj[option]!.winningPercentage < rankedClassObj[1 - option]!.winningPercentage) {
			console.log('Incorrect');
			$currentScore = 0;
		} else {
			console.log('huh');
			goto('/server-error');
		}
		setTimeout(() => {
			goto('/loading/higher-lower');
		}, 1000);
	}
</script>

<div class="absolute left-0 top-8 flex w-full flex-col items-center justify-center pt-28">
	<h2 class="flex-row items-center justify-center text-2xl text-text md:top-12 md:text-4xl">
		<p>{currentText}</p>
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

<style lang="postcss">
</style>
