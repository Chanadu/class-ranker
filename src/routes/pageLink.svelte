<script lang="ts">
	import Button from '$lib/components/button.svelte';

	export let onClick: () => void;
</script>

<Button
	onClick="{onClick}"
	extraClasses="w-auto text-lg shadow-background md:text-2xl"><slot></slot></Button
>

<style lang="postcss">
</style>
