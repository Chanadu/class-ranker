<script lang="ts">
	import Option from './option.svelte';

	export let data;
</script>

<div class="flex h-screen flex-row items-center justify-evenly">
	<Option optionText="{data.option1}"></Option>
	<Option optionText="{data.option2}"></Option>
</div>

<style lang="postcss">
</style>
