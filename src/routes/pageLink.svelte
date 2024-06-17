<script lang="ts">
	import Button from '$lib/components/button.svelte';

	export let onClick: () => void;
	const buttonClasses =
		'w-auto h-auto p-1 text-base sm:text-mg shadow-background xs:p-1 md:text-2xl md:mx-4 md:p-2 lg:p-4';
</script>

<Button
	onClick="{onClick}"
	extraClasses="{buttonClasses}"
>
	<slot></slot>
</Button>

<style lang="postcss">
</style>
