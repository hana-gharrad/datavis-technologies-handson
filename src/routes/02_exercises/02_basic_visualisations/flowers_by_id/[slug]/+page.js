export const load = ({ fetch, params }) => {
  const fetchFlower = async () => {
    const res = await fetch('https://raw.githubusercontent.com/domoritz/maps/master/data/iris.json')
    const data = await res.json()
    data.forEach((d,i) => { d.id = i })
    let data_for_slug = data.filter((d) => { return d.id == params.slug})[0]
    return data_for_slug
  }

  return {
    flower: fetchFlower()
  }
}