<!--<script>
    let datapoints = [];
    fetch("https://vda-lab.gitlab.io/datavis-technologies/assets/flights_part.json")
        .then(res => res.json())
        .then(data => datapoints = data)
  
    const rescale = function(x, domain_min, domain_max, range_min, range_max) {
        return ((range_max - range_min)*(x-domain_min))/(domain_max-domain_min) + range_min
    }
  </script>
  
  <style>
    circle {
        fill: steelblue;
        fill-opacity: 0.5;
    }
  </style>
  
  <svg width="800" height="400">
    {#each datapoints as datapoint}
        <circle cx={rescale(datapoint.from_long, -180, 180, 0, 800)}
                cy={rescale(datapoint.from_lat, -90, 90, 400, 0)}
                r=3 />
    {/each}
  </svg>-->

<!--Seting scale with D3 Linear Scaler-->
<!--  <script>
    import { scaleLinear } from 'd3-scale';
  
    let datapoints = [];
    fetch("https://vda-lab.gitlab.io/datavis-technologies/assets/flights_part.json")
        .then(res => res.json())
        .then(data => datapoints = data)
  
    const scaleX = scaleLinear().domain([-180,180]).range([0,800])
    //Domain: What we have in the real word
    //Range: What we have in digital (pixels)
    const scaleY = scaleLinear().domain([-90,90]).range([400,0])
    const scaleColour = scaleLinear().domain([-180,180]).range(["red","green"])
  </script>
  
  <style>
    circle { 
        fill-opacity: 0.5;
    }
  </style>
  
  <svg width="800" height="400">
    {#each datapoints as datapoint}
        <circle cx={scaleX(datapoint.from_long)}
                cy={scaleY(datapoint.from_lat)}
                r=3
                style={"fill:" + scaleColour(datapoint.from_long)} />
    {/each}
  </svg>-->
  <!--Size of the circles D3 Scaler-->
  <!--<script>
    import { scaleLinear } from 'd3-scale';
  
    let datapoints = [];
    fetch("https://vda-lab.gitlab.io/datavis-technologies/assets/flights_part.json")
      .then(res => res.json())
      .then(data => datapoints = data)
  
    const scaleX = scaleLinear().domain([-180,180]).range([0,800])
    const scaleY = scaleLinear().domain([-90,90]).range([400,0])
    const scaleRadius = scaleLinear().domain([1,15406]).range([2,10])
    </script>
  
  <style>
    svg {
      border: 1px;
      border-style: solid;
    }
    circle {
      fill: steelblue;
      fill-opacity: 0.5;
    }
  </style>
  
  <svg width="800" height="400">
    {#each datapoints as datapoint}
      <circle cx={scaleX(datapoint.from_long)}
          cy={scaleY(datapoint.from_lat)}
          r={scaleRadius(datapoint.distance)} />
    {/each}
  </svg>-->
  <!--Conditional Class
        <circle class={datapoint.from_country != datapoint.to_country ? 'international' : 'domestic' } />
        Same as 
        <circle class:international={datapoint.from_country != datapoint.to_country} />
    -->
  <script>
    import { scaleLinear } from 'd3-scale';
  
    let datapoints = [];
    fetch("https://vda-lab.gitlab.io/datavis-technologies/assets/flights_part.json")
      .then(res => res.json())
      .then(data => datapoints = data)
  
    const scaleX = scaleLinear().domain([-180,180]).range([0,800])
    const scaleY = scaleLinear().domain([-90,90]).range([400,0])
    const scaleRadius = scaleLinear().domain([1,15406]).range([2,10])
    </script>
  
  <style>
    svg {
      border: 1px;
      border-style: solid;
    }
    circle {
      fill: steelblue;
      fill-opacity: 0.5;
    }
    circle.international {
      fill: red;
    }
  </style>
  
  <svg width="800" height="400">
    {#each datapoints as datapoint}
      <circle cx={scaleX(datapoint.from_long)}
          cy={scaleY(datapoint.from_lat)}
          r={scaleRadius(datapoint.distance)}
          class:international={datapoint.from_country != datapoint.to_country}/>
    {/each}
  </svg>