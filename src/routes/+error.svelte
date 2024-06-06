<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="flex h-screen flex-col items-center justify-center">
	<h1 class="text-nowrap text-5xl">{$page.status}: {$page.error?.message}</h1>
	<div class="h-16"></div>
	<a
		class="border-slate-900 bg-teal-800 text-slate-300 hover:bg-teal-600 hover:text-slate-100 m-0 box-border inline-block min-h-16 w-full min-w-0 cursor-pointer touch-manipulation select-none appearance-none rounded-2xl border-2 border-solid px-4 py-6 text-center text-xl leading-normal no-underline outline-none transition-all duration-300 ease-in-out will-change-transform hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:shadow-none disabled:pointer-events-none"
		href="/"
	>
		Back Home
	</a>
</div>

<style lang="postcss">
</style>
