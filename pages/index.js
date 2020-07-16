import Home from '../screens/Home'


async function getServerSideProps() {
  const dataApi = await fetch(`http://localhost:3000/api/jogos`)
  .then((res) => {
    if (res.ok) {
      return res.json()
    }
  })
  .then((res)=>{
    return res
  })

  return {
    props: {
      jogos: dataApi.games
    }
  }

}

export default Home
