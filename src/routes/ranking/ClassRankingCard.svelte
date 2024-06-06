<script lang="ts">
	export let winningPercentage: number;
	export let winningVotes: number;
	export let losingVotes: number;
	export let name: string;
</script>

<div class="relative w-full">
	<div class="absolute left-0 top-0 h-full w-full rounded-2xl bg-secondary opacity-30"></div>
	<div class="flex flex-row rounded-2xl px-4 py-4">
		<p class="mr-4">{name}</p>
		<p class="mx-4">{winningPercentage}</p>
		<p class="mx-4">{winningVotes}</p>
		<p class="mx-4">{losingVotes}</p>
	</div>
</div>

<style lang="postcss">
</style>
