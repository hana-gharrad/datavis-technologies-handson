export const load = ({ fetch }) => {
    const fetchFlowers = async () => { 
  //    const res = await fetch('https://raw.githubusercontent.com/domoritz/maps/master/data/iris.json')
      const res = await fetch('http://localhost:5173/data.json')

      const data = await res.json()
      data.forEach((d,i) => { d.id = i, d.species = "Iris " + d.species })
      console.log(data) 
      return data
    }
  
    return {
      flowers: fetchFlowers() 
    }
  }



//   import Papa from 'papaparse'

// export const load = ({ fetch }) => {
//   const fetchFlights = async () => {
//     const res = await fetch('https://vda-lab.gitlab.io/datavis-technologies/assets/flights_part.csv', {
//       headers: {
//         'Content-Type': 'text/csv'
//     }})
//     let csv_data = await res.text()
//     let csv_parsed = Papa.parse(csv_data, {header: true})
//     console.log(csv_parsed.data)
//     return csv_parsed.data
//   }

//   return {
//     flights: fetchFlights()
//   }
// }

