<script>
	let clicked = false;
	let message = "rr";
	
</script>

<div>
	<button class="btn btn-primary" on:click={() => (clicked = true)}>
		click here
	</button>
	{#if !clicked}
     You have to click the button
	{:else}
	You have clicked the button
{/if}
	<!--  -->
</div>

