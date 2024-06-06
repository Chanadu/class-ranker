<script lang="ts">
	import { page } from '$app/stores';
	import { CategoryTypes } from '../../main';
	import CategorySorter from './CategorySorter.svelte';
	import ClassRankingCard from './ClassRankingCard.svelte';
	export let data;

	enum CurrentSortingState {
		Wins = 'Wins',
		NWins = '-Wins',
		Losses = 'Losses',
		NLosses = '-Losses',
		Percentage = 'Percentage',
		NPercentage = '-Percentage',
	}

	let currentSortingState = CurrentSortingState.Percentage;
	$: {
		currentSortingState = $page.url.searchParams.get('sortingBy') as CurrentSortingState;
		console.log(currentSortingState);
		sortData();
	}

	let newData: {
		id: number;
		name: string;
		winningPercentage: number;
		winningVotes: number;
		losingVotes: number;
	}[];

	function sortData() {
		let atr: keyof (typeof newData)[0] = 'winningPercentage' as keyof (typeof newData)[0];
		if (currentSortingState.toLowerCase().includes('wins')) atr = 'winningVotes' as keyof (typeof newData)[0];
		if (currentSortingState.toLowerCase().includes('losses')) atr = 'losingVotes' as keyof (typeof newData)[0];

		let isNegative: number = currentSortingState.toLowerCase().includes('-') ? -1 : 1;

		for (let i = 0; i < data.feed.length; i++) {
			newData = data.feed.sort((a, b) => {
				if (isNaN(a[atr] as number) && isNaN(b[atr] as number)) {
					return 0;
				}
				if (isNaN(a[atr] as number)) {
					return -1 * isNegative;
				}
				if (isNaN(b[atr] as number)) {
					return 1 * isNegative;
				}

				return isNegative * ((b[atr] as number) - (a[atr] as number));
			});
		}
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
			<div class="flex flex-col gap-6 pb-12 pt-4">
				<div class="relative min-h-[4.5rem]">
					<div
						class="pointer-events-none absolute left-0 top-0 z-0 h-full w-full rounded-t-2xl bg-primary opacity-20"
					></div>
					<div class="z-10 flex flex-row items-center rounded-t-2xl p-4 pt-3">
						<div class="flex w-full flex-row">
							<p class="mr-4 text-2xl">Class Name</p>
						</div>
						<div class="flex w-full flex-row-reverse gap-4 pr-2 text-xl">
							<CategorySorter type="{CategoryTypes.Percentage}"></CategorySorter>
							<p>|</p>
							<CategorySorter type="{CategoryTypes.Losses}"></CategorySorter>
							<p>|</p>
							<CategorySorter type="{CategoryTypes.Wins}"></CategorySorter>
						</div>
					</div>
				</div>
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
