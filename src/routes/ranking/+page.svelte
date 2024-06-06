<script lang="ts">
	import ClassRankingCard from './ClassRankingCard.svelte';
	export let data;

	let newData: {
		id: number;
		name: string;
		winningPercentage: number;
		winningVotes: number;
		losingVotes: number;
	}[];
	for (let i = 0; i < data.feed.length; i++) {
		newData = data.feed.sort((a, b) => {
			if (isNaN(a.winningPercentage) && isNaN(b.winningPercentage)) {
				return 0;
			}
			if (isNaN(a.winningPercentage)) {
				return -1;
			}
			if (isNaN(b.winningPercentage)) {
				return 1;
			}

			return b.winningPercentage - a.winningPercentage;
		});
	}
</script>

<div>
	<div>
		<div class="pb-12 pt-24">
			<h1 class="flex flex-row justify-center pb-2 text-4xl">Class Rankings</h1>
			<div class="flex w-full items-center justify-center">
				<div class="h-1 w-96 rounded-2xl bg-primary"></div>
			</div>
		</div>
		<main>
			<div class="flex flex-col gap-6">
				{#each newData as cla (cla.id)}
					<ClassRankingCard
						name="{cla.name}"
						winningPercentage="{cla.winningPercentage < 0 ? 0 : Math.round(cla.winningPercentage * 100)}"
						winningVotes="{cla.winningVotes}"
						losingVotes="{cla.losingVotes}"
					></ClassRankingCard>
				{/each}
			</div>
		</main>
	</div>
</div>

<style lang="postcss">
</style>
