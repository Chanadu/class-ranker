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

	$: if ($page.url.searchParams.get('sortingBy') == null) {
		$page.url.searchParams.set('sortingBy', CurrentSortingState.Percentage);
	}
	let currentSortingState = CurrentSortingState.Percentage;
	$: {
		currentSortingState = $page.url.searchParams.get('sortingBy') as CurrentSortingState;
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
		<div class="flex w-full items-center justify-center">
			<div class="group w-96 pb-4 pt-6 md:pb-12 md:pt-24">
				<div class="flex items-center justify-center">
					<h1 class="inline-block justify-center pb-2 text-3xl md:text-4xl">Class Rankings</h1>
				</div>
				<div class="flex items-center justify-center">
					<div
						class="h-1 w-64 rounded-2xl bg-primary transition-all duration-100 group-hover:bg-accent md:w-96"
					></div>
				</div>
			</div>
		</div>
		<main>
			<div class="flex flex-col gap-6 px-4 pb-12 pt-4">
				<div class="min-h-[4.5rem] rounded-2xl border-2 border-accent bg-container">
					<div class="flex flex-row items-center rounded-t-2xl p-2 pt-3 md:p-4">
						<div class="flex w-full flex-row">
							<p class="mr-4 text-xl lg:text-2xl">Class Name</p>
						</div>
						<div
							class="flex h-full w-full flex-row-reverse items-center gap-2 pr-2 text-lg md:text-xl lg:gap-4 lg:text-2xl"
						>
							<CategorySorter type="{CategoryTypes.Percentage}"></CategorySorter>
							<div></div>
							<CategorySorter type="{CategoryTypes.Losses}"></CategorySorter>
							<div></div>
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
