export const load = ({ fetch }) => {
  const fetchFlowers = async () => { 
   const res = await fetch('https://raw.githubusercontent.com/domoritz/maps/master/data/iris.json')

    const data = await res.json()
    data.forEach((d,i) => { d.id = i })
    console.log(data) 
    return data
  }

  return {
    flowers: fetchFlowers() 
  }
}
