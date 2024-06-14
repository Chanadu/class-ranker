<script lang="ts">
	import Button from '$lib/components/button.svelte';
	import type { Class } from '@prisma/client';

	export let optionNumber: number;
	export let vote: (option1: string, option2: string) => Promise<void>;
	export let options: Class[];
</script>

<Button
	onClick="{async () => {
		try {
			await vote(options[optionNumber].name.toUpperCase(), options[1 - optionNumber].name.toUpperCase());
		} catch (e) {}
	}}"
	extraClasses="h-64 w-64 md:h-72 md:w-72 lg:h-96 lg:w-96"
>
	<div class="items-around flex h-full w-full flex-col justify-center text-wrap px-4 py-4">
		<div class="text-lg md:text-2xl lg:text-3xl">
			{options[optionNumber].name.toUpperCase()}
		</div>
		<div class="h-4 md:h-8"></div>
		<div class="text-base md:text-xl lg:text-2xl">
			{options[optionNumber].categories
				.join(', ')
				.toLowerCase()
				.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())}
		</div>
		<div class="h-2"></div>
		<div class="text-sm md:text-lg lg:text-xl">
			{options[optionNumber].officalTags.join(', ')}
		</div>
		<div class="h-2"></div>
		<div class="text-sm md:text-lg lg:text-xl">
			{options[optionNumber].levels
				.join(' or ')
				.replace('CP', 'College Prep')
				.replace('A', 'Accelerated')
				.replace('H', 'Honors')}
		</div>
	</div>
</Button>

<style lang="postcss">
</style>
