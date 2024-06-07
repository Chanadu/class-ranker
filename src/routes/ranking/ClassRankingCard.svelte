<script lang="ts">
	import NumberHolder from './NumberHolder.svelte';

	export let winningPercentage: number;
	export let winningVotes: number;
	export let losingVotes: number;
	export let name: string;

	function cap(word: string): string {
		const words = word.split(' ');

		for (let i = 0; i < words.length; i++) {
			words[i] = words[i][0].toUpperCase() + words[i].substring(1);
		}

		return words.join(' ');
	}
</script>

<div
	class="relative min-h-14 w-full rounded-2xl border-2 border-primary bg-container transition-all duration-100 hover:-translate-y-1 hover:border-accent"
>
	<div class="pointer-events-none absolute left-0 top-0 h-full w-full rounded-2xl bg-secondary opacity-0"></div>
	<div class="flex flex-row rounded-2xl p-4 pt-3">
		<div class="flex w-full flex-row">
			<p class="mr-4 text-2xl">{cap(name)}</p>
		</div>
		<div class="flex flex-row-reverse gap-4 text-nowrap pr-2 text-xl">
			<NumberHolder>{winningPercentage}%</NumberHolder>
			<p>|</p>
			<NumberHolder>{losingVotes}</NumberHolder>
			<p>|</p>
			<NumberHolder>{winningVotes}</NumberHolder>
		</div>
	</div>
</div>

<style lang="postcss">
</style>
