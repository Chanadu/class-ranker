<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import Option from './option.svelte';
	async function voteA(option1: string, option2: string) {
		await fetch('/home', {
			method: 'POST',
			body: JSON.stringify({
				option1,
				option2,
			}),
		});
		invalidateAll();
	}
	export let data;
</script>

<div class="flex h-screen flex-row items-center justify-evenly">
	<Option
		optionText="{data.option1}"
		vote="{voteA}"
		options="{[data.option1, data.option2]}"
	></Option>
	<Option
		optionText="{data.option2}"
		vote="{voteA}"
		options="{[data.option2, data.option1]}"
	></Option>
</div>

<style lang="postcss">
</style>
