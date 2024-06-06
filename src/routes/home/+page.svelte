<script lang="ts">
	import { goto } from '$app/navigation';
	import Option from './option.svelte';
	let voted = false;
	async function voteA(option1: string, option2: string) {
		if (voted) return;
		voted = true;
		option1 = option1.toUpperCase();
		option2 = option2.toUpperCase();
		await fetch('/home', {
			method: 'POST',
			body: JSON.stringify({
				option1,
				option2,
			}),
		});
		goto('/loading');
	}
	export let data;
</script>

<div class="flex h-screen flex-row items-center justify-evenly">
	<Option
		optionNumber="{0}"
		vote="{voteA}"
		options="{[data.option1, data.option2]}"
	></Option>
	<Option
		optionNumber="{1}"
		vote="{voteA}"
		options="{[data.option1, data.option2]}"
	></Option>
</div>

<style lang="postcss">
</style>
