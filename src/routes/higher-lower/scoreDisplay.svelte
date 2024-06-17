<script lang="ts">
	import Button from '$lib/components/button.svelte';
	import { highestHigherLowerScore } from '../stores';
	import { currentScore } from './stores';

	$: {
		if ($currentScore > $highestHigherLowerScore) {
			$highestHigherLowerScore = $currentScore;
		}
	}

	let showHigherScore: boolean = false;
	let higherScoreClasses: string = '';
	$: {
		higherScoreClasses = showHigherScore ? 'opacity-100 -translate-y-14' : 'opacity-0';
	}
</script>

<div class="relative -bottom-10 flex w-full flex-row justify-around text-2xl">
	<div></div>
	<div>
		<Button
			onClick="{() => (showHigherScore = !showHigherScore)}"
			extraClasses="flex-col gap-4 relative p-4"
		>
			<div
				class="pointer-events-none absolute opacity-0 transition-all duration-100 hover:scale-105 group-hover:-translate-y-14 group-hover:opacity-100 {higherScoreClasses}"
			>
				Highest Score: {$highestHigherLowerScore}
			</div>
			<p class="min-w-48">Score: {$currentScore}</p>
		</Button>
	</div>
</div>

<style lang="postcss">
</style>
