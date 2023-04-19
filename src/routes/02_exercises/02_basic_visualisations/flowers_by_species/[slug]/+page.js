export const load = ({ fetch, params }) => {
  const fetchFlower = async () => {
    const res = await fetch('https://raw.githubusercontent.com/domoritz/maps/master/data/iris.json')
    const data = await res.json()
    return data.filter((d)=> {return  d.species==params.slug})
  }

  return {
    flower: fetchFlower()
  }
}