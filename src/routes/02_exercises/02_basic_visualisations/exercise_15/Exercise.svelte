<script>
    const width = 100;
    const height = 100;
    const margin = { top: 5, right: 5, bottom: 5, left: 5 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
  </script>
  
  <svg {width} {height}>
    <g transform="translate({margin.left}, {margin.top})">
      <rect class='rec' x=20 y=20 width=40 height=40 />
    </g>
    <g transform="translate({margin.left}, {margin.top})">
      <circle cx=75 cy=75 r=20 class="cir"/>
    </g>
    <!--  -->
  </svg>
  
  <style>
    svg {
      border: 1px solid rgb(0, 0, 0);
      border-radius: 5px;
      
    }
    .rec {
      fill:yellow;
        }
    .cir {
      fill: skyblue;
    }
  </style>
  