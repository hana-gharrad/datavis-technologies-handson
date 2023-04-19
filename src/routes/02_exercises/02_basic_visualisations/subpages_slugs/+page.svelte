<script>
 export let data;
 //$: console.log(data)
</script>
<!--http://vda-lab.github.io/-->
<!--https://vda-lab.gitlab.io/datavis-technologies/_basic_data_visualisation_with_svelte.html#_data_subpages_and_slugs-->
<style>
  .left {
    margin: 5px;
    width: 30%;
  }
  .right {
    display: block;
    width: 40%;
    float: left;
    display: block;
    margin: 5px;
  }
</style>
<div>
<ul class="left">
  {#each data.flowers as flower}
      <li><a href="flowers_by_species/{flower.species}">With Species</a></li>
  {/each}
</ul>

<ul class="right">
  {#each data.flowers as flower}
      <li><a href="flowers_by_id/{flower.id}">With ID {flower.id}</a></li>
  {/each}
</ul>
</div>