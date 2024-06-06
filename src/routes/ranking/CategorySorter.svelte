<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { type CategoryTypes } from '../../main';
	export let type: CategoryTypes;
	enum CurrentState {
		Up,
		Down,
		Middle,
	}

	let currentState = CurrentState.Middle;

	$: {
		currentState =
			(
				$page.url.searchParams
					.get('sortingBy')
					?.toLowerCase()
					.includes(type.toLowerCase() == '%' ? 'percentage' : type.toLowerCase())
			) ?
				$page.url.searchParams.get('sortingBy')?.toLowerCase().includes('-') ?
					CurrentState.Down
				:	CurrentState.Up
			:	CurrentState.Middle;
	}

	function getNewUrl(): string {
		let currentUrlParams = $page.url.searchParams;
		let sortingBy = currentUrlParams.get('sortingBy');
		if (sortingBy?.toLowerCase() == (type.toLowerCase() == '%' ? 'percentage' : type.toLowerCase())) {
			return '?' + 'sortingBy=-' + (type == '%' ? 'Percentage' : type);
		}
		return '?' + 'sortingBy=' + (type == '%' ? 'Percentage' : type);
	}
</script>

<a
	class="flex w-12 flex-col items-center justify-center"
	href="{'#'}"
	on:click="{() => goto(getNewUrl())}"
>
	<div>
		<p>{type}</p>
	</div>
	<div class="flex w-full flex-row justify-center pt-2">
		<div class="flex h-8 items-center justify-center">
			{#if currentState == CurrentState.Up}
				<div class="arrow up h-4 w-4 border-text"></div>
			{:else if currentState == CurrentState.Down}
				<div class="arrow down h-4 w-4 border-text"></div>
			{:else}
				<div class="m-0 flex flex-col p-0">
					<div class="arrow up m-0 h-2 w-2 p-0"></div>
					<div class="arrow down m-0 h-2 w-2 p-0"></div>
				</div>
			{/if}
		</div>
		<!-- <div class="h-2 w-2">-</div> -->
	</div>
</a>

<style lang="postcss">
	.arrow {
		border-width: 0 3px 3px 0;
		display: inline-block;
		padding: 3px;
	}

	.up {
		transform: rotate(-135deg);
		-webkit-transform: rotate(-135deg);
	}

	.down {
		transform: rotate(45deg);
		-webkit-transform: rotate(45deg);
	}
</style>
