<script>
  let current = "";
  let click1 = false;
  let click2 = false;
  let click3 = false;
</script>
<style>
  .myclick {
    background-color:blue;
  }
</style>

<!-- We will cover buttons later on! -->
<button class:myclick={click1} on:click={() => (current = "messi", click1=true,click2=false,click3=false)}>
  Messi
</button>

<button class:myclick={click2} on:click={() => (current = "ronaldo", click2=true,click1=false,click3=false)}>
  Ronaldo
</button>

<button class:myclick={click3} on:click={() => (current = "neymar", click3=true,click1=false,click2=false)}>
  Neymar
</button>
