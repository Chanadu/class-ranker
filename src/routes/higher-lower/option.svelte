<script lang="ts">
	export let vote;
	export let classObj: {
		id: number;
		name: string;
		categories: string[];
		officalTags: string[];
		levels: string[];
	};
</script>

<button
	class="relative flex h-64 w-64 cursor-pointer select-none items-center justify-center rounded-2xl border-2 border-primary bg-container text-center align-middle shadow-xl transition-all duration-200 hover:-translate-y-2 hover:scale-105 hover:border-accent hover:shadow-lg active:translate-y-0 active:scale-95 active:shadow-none disabled:pointer-events-none md:h-72 md:w-72 lg:h-96 lg:w-96"
	on:click="{async () => {
		await vote();
	}}"
>
	<div class="items-around flex h-full w-full flex-col justify-center text-wrap px-4 py-4">
		<div class="text-lg md:text-2xl lg:text-3xl">
			{classObj.name.toUpperCase()}
		</div>
		<div class="h-4 md:h-8"></div>
		<div class="text-base md:text-xl lg:text-2xl">
			{classObj.categories}
		</div>
		<div class="h-2"></div>
		<div class="text-sm md:text-lg lg:text-xl">
			{classObj.officalTags.join(', ')}
		</div>
		<div class="h-2"></div>
		<div class="text-sm md:text-lg lg:text-xl">
			{classObj.levels
				.join(' or ')
				.replace('CP', 'College Prep')
				.replace('A', 'Accelerated')
				.replace('H', 'Honors')}
		</div>
	</div>
</button>

<style lang="postcss">
</style>
