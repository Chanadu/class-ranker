<script lang="ts">
	import type { Class } from '@prisma/client';

	export let classObj: Class;
</script>

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
		{classObj.levels.join(' or ').replace('CP', 'College Prep').replace('A', 'Accelerated').replace('H', 'Honors')}
	</div>
</div>

<style lang="postcss">
</style>
