<script lang="ts">
	import NumberHolder from './NumberHolder.svelte';

	export let winningPercentage: number;
	export let winningVotes: number;
	export let losingVotes: number;
	export let name: string;
</script>

<div class="relative min-h-14 w-full rounded-2xl bg-secondary">
	<div class="pointer-events-none absolute left-0 top-0 h-full w-full rounded-2xl bg-secondary opacity-0"></div>
	<div class="flex flex-row rounded-2xl p-4 pt-3">
		<div class="flex w-full flex-row">
			<p class="mr-4 text-2xl">{name}</p>
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
