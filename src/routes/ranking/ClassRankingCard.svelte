<script lang="ts">
	import NumberHolder from './NumberHolder.svelte';
	import Separator from './separator.svelte';

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
	class="min-h-14 w-full rounded-2xl border-2 border-primary bg-container transition-all duration-100 hover:-translate-y-1 hover:border-accent"
>
	<div class="flex flex-row rounded-2xl px-2 py-4 pt-3 md:px-4">
		<div class="flex w-full flex-row">
			<p class="mr-4 text-lg md:text-xl lg:text-2xl">{cap(name)}</p>
		</div>
		<div class="flex flex-row-reverse gap-1 text-nowrap pr-2 text-lg md:gap-2 md:text-xl lg:gap-4 lg:text-2xl">
			<NumberHolder>{winningPercentage}%</NumberHolder>
			<Separator></Separator>
			<NumberHolder>{losingVotes}</NumberHolder>
			<Separator></Separator>
			<NumberHolder>{winningVotes}</NumberHolder>
		</div>
	</div>
</div>

<style lang="postcss">
</style>
