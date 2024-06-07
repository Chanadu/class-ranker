<script lang="ts">
	import { goto } from '$app/navigation';
	import Option from './option.svelte';
	let voted = false;
	async function voteA(option1: string, option2: string) {
		setTimeout(() => {
			goto('/loading/vote');
		}, 50);
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
	}
	export let data;
</script>

<h2 class="absolute left-0 top-32 flex max-h-12 w-full flex-row items-center justify-center text-4xl text-text">
	Vote for the "Better" Class
</h2>
<div class="flex h-screen w-full flex-row items-center justify-evenly">
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
