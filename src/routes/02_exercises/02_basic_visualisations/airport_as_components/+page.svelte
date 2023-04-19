<!--Lat Long Hard Coded -->
<!--<script>
    import Scatterplot from '../../../../components/ScatterPlot.svelte';
    let datapoints_from_app = []
    fetch("https://vda-lab.gitlab.io/datavis-technologies/assets/flights_part.json")
        .then(res => res.json())
        .then(data => datapoints_from_app = data)
</script>

<h1>Airports</h1>
<Scatterplot datapoints={datapoints_from_app}/>
-->
<!-- Lat Long as parameter -->
<script>
    import Scatterplot from '../../../../components/ScatterPlot.svelte'
    let datapoints_from_app = []
    fetch("https://vda-lab.github.io/assets/svelte-flights.json")
        .then(res => res.json())
        .then(data => datapoints_from_app = data.slice(1,5000))
</script>

<h1>Airports</h1>
<Scatterplot datapoints={datapoints_from_app} long="from_long" lat="from_lat" />  (3)
<Scatterplot datapoints={datapoints_from_app} long="to_long" lat="to_lat" />