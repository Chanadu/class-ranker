<script lang="ts">
	import Button from '$lib/components/button.svelte';

	export let onClick: () => void;
	const buttonClasses = 'w-auto p-0 text-base sm:text-mg shadow-background md:text-2xl md:mx-4 md:p-4';
</script>

<Button
	onClick="{onClick}"
	extraClasses="{buttonClasses}"><slot></slot></Button
>

<style lang="postcss">
</style>
