<script lang="ts">
	export let optionNumber: number;
	export let vote: (option1: string, option2: string) => Promise<void>;
	export let options: {
		id: number;
		name: string;
		categories: string[];
		officalTags: string[];
		levels: string[];
	}[];
</script>

<button
	class="relative flex h-96 w-96 cursor-pointer select-none items-center justify-center rounded-2xl border-2 border-primary bg-secondary text-center align-middle shadow-sm shadow-accent transition-all duration-200 hover:-translate-y-2 hover:border-accent hover:shadow-lg active:translate-y-0 active:shadow-none disabled:pointer-events-none"
	on:click="{async () => {
		try {
			await vote(options[optionNumber].name.toUpperCase(), options[1 - optionNumber].name.toUpperCase());
		} catch (e) {}
	}}"
>
	<div class="pointer-events-none absolute left-0 top-0 h-full w-full bg-secondary opacity-0"></div>
	<div class="items-around flex h-full w-full flex-col justify-center text-wrap px-4 py-4">
		<div class="text-3xl">
			{options[optionNumber].name.toUpperCase()}
		</div>
		<div class="h-8"></div>
		<div class="text-2xl">
			{options[optionNumber].categories
				.join(', ')
				.toLowerCase()
				.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())}
		</div>
		<div class="h-2"></div>
		<div class="text-xl">
			{options[optionNumber].officalTags.join(', ')}
		</div>
		<div class="h-2"></div>
		<div class="text-xl">
			{options[optionNumber].levels
				.join(' or ')
				.replace('CP', 'College Prep')
				.replace('A', 'Accelerated')
				.replace('H', 'Honors')}
		</div>
	</div>
</button>

<style lang="postcss">
</style>
