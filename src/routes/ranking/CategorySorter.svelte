<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { type CategoryTypes } from '../../main';
	import NumberHolder from './NumberHolder.svelte';
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
	href="{'#'}"
	on:click="{() => goto(getNewUrl())}"
	class="flex cursor-pointer items-center justify-center transition-all duration-100"
>
	<NumberHolder>
		<div class="flex flex-col justify-center transition-all duration-100">
			<div class="flex w-full items-center justify-center text-lg md:text-xl lg:text-2xl">
				<p>{type}</p>
			</div>
			<div class="flex w-full flex-row justify-center pt-2">
				<div class="flex h-8 items-center justify-center rounded-2xl p-2 md:p-4">
					{#if currentState == CurrentState.Up}
						<div class="arrow up h-4 w-4 border-accent"></div>
					{:else if currentState == CurrentState.Down}
						<div class="arrow down h-4 w-4 border-accent"></div>
					{:else}
						<div class="m-0 flex flex-col p-0">
							<div class="arrow up m-0 h-2 w-2 border-primary p-0"></div>
							<div class="arrow down m-0 h-2 w-2 border-primary p-0"></div>
						</div>
					{/if}
				</div>
				<!-- <div class="h-2 w-2">-</div> -->
			</div>
		</div>
	</NumberHolder>
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
