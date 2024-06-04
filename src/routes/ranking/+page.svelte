<script lang="ts">
	export let data;
</script>

<div>
	<h1>Test</h1>
	<main>
		<div>
			{#each data.feed as vote (vote.id)}
				<div>
					<p>{vote.id}</p>
					<p>{vote.winningClass}</p>
					<p>{vote.losingClass}</p>
					<p>{vote.createdAt}</p>
				</div>
			{/each}
		</div>
	</main>
</div>

<style lang="postcss">
</style>
