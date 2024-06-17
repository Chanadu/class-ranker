<script lang="ts">
	import { goto } from '$app/navigation';
	import { cubicIn } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import PageLink from './pageLink.svelte';
	import { isNavDown } from './stores';

	let showHiddenNav = false;
	if (!$isNavDown) {
		showHiddenNav = true;
	}
</script>

{#if $isNavDown}
	<div
		class="absolute top-0 z-20 flex w-full flex-col justify-center bg-container pt-2 shadow-xl transition-all duration-100"
		transition:fly="{{
			delay: 0,
			duration: 200,
			y: -100,
			easing: cubicIn,
			opacity: 1,
		}}"
	>
		<div class="flex w-full items-center justify-center">
			<div
				class="flex w-full max-w-xl flex-row justify-between p-2 md:max-w-2xl md:p-4 lg:max-w-3xl xl:max-w-4xl"
			>
				<PageLink onClick="{() => goto('/loading/vote')}">Vote</PageLink>
				<PageLink onClick="{() => goto('/loading/ranking')}">Ranking</PageLink>
				<PageLink onClick="{() => goto('/loading/higher-lower')}">Higher-Lower</PageLink>
				<PageLink onClick="{() => goto('/settings')}">Settings</PageLink>
			</div>
		</div>
		<div class="flex w-full items-center justify-center p-2">
			<button
				class="group w-full cursor-pointer"
				on:click="{() => {
					$isNavDown = !$isNavDown;
					setTimeout(() => {
						showHiddenNav = true;
					}, 150);
				}}"
			>
				<div
					class="arrow up m-0 h-2 w-2 border-primary p-4 transition-all duration-100 group-hover:border-accent"
				></div>
			</button>
		</div>
	</div>
{:else if showHiddenNav}
	<div
		class="absolute top-0 z-20 flex w-full items-center justify-center bg-container pt-2 shadow-xl"
		transition:fly="{{ y: 0, duration: 100, easing: cubicIn }}"
	>
		<button
			class="group w-full cursor-pointer"
			on:click="{() => {
				showHiddenNav = false;
				$isNavDown = !$isNavDown;
			}}"
		>
			<div
				class="arrow down m-0 h-2 w-2 border-primary p-4 transition-all duration-100 group-hover:border-accent"
			></div>
		</button>
	</div>
{/if}

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
