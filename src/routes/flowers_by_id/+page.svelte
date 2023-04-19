<script>
 export let data;
 //$: console.log(data)
</script>



<ul>
  {#each data.flowers as flower}
      <li><a href="flowers_by_id/{flower.id}">te</a></li>
  {/each}
</ul>