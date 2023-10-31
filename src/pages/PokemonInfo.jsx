import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import useMediaQuery from "../hooks/useMediaQuery"
import { bgByType, bgSelectByType, imgByType, textByType } from "../constants/pokemon"
import Footer from "../components/Footer"
import { useSelector } from "react-redux"

const PokemonInfo = () => {
  const [pokemon, setPokemon] = useState(null)

  const isTightScreen = useMediaQuery('(min-width: 450px)');

  const isDesktop = useMediaQuery('(min-width: 680px)');

  const isLargeScreen = useMediaQuery('(min-width: 1024px)');

  const { id } = useParams()

  const image = pokemon?.sprites.other["official-artwork"].front_default

  const trainerName = useSelector((store) => store.trainerName)

  const navigate = useNavigate()

  const hadleGoHome = () => {
    navigate("/pokedex")
  }

  const hadleSetting = () => {
    navigate("/config")
  }

  const getPercetnStat = (statValue) => {
    const percent = ((statValue * 100) / 255).toFixed(1)
    return `${percent}%`
  }

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(({ data }) => setPokemon(data))
      .catch((err) => alert(err))
  }, [])


  return (
    <main className="grid relative text-center capitalize bg-[#E3ECF2]">
      {isDesktop ?
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 40 1440 270" fill="none">
          <path d="M-10 1V-9H0H1439H1449V1V147.803V153.144L1444.56 156.114L1439 147.803C1444.56 156.114 1444.56 156.116 1444.56 156.118L1444.55 156.124L1444.53 156.137L1444.46 156.179C1444.41 156.214 1444.34 156.26 1444.25 156.319C1444.07 156.437 1443.81 156.604 1443.48 156.818C1442.81 157.246 1441.84 157.861 1440.56 158.646C1438 160.216 1434.22 162.464 1429.22 165.249C1419.23 170.819 1404.37 178.537 1384.71 187.27C1345.39 204.737 1286.86 226.262 1209.59 242.779C1122.55 261.385 845.148 277.931 541.526 216.803C317.177 171.636 99.5924 195.494 2.13281 216.77L-10 219.419V207V1Z" fill="#FF6B57" stroke="#423B3B" strokeWidth="20" />
        </svg>
        :
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 270" fill="none">
          <path d="M-10 1V-9H0H1439H1449V1V147.803V153.144L1444.56 156.114L1439 147.803C1444.56 156.114 1444.56 156.116 1444.56 156.118L1444.55 156.124L1444.53 156.137L1444.46 156.179C1444.41 156.214 1444.34 156.26 1444.25 156.319C1444.07 156.437 1443.81 156.604 1443.48 156.818C1442.81 157.246 1441.84 157.861 1440.56 158.646C1438 160.216 1434.22 162.464 1429.22 165.249C1419.23 170.819 1404.37 178.537 1384.71 187.27C1345.39 204.737 1286.86 226.262 1209.59 242.779C1122.55 261.385 845.148 277.931 541.526 216.803C317.177 171.636 99.5924 195.494 2.13281 216.77L-10 219.419V207V1Z" fill="#FF6B57" stroke="#423B3B" strokeWidth="20" />
        </svg>
      }
      <div className="absolute grid grid-cols-3 w-full z-10 dark:opacity-80">
        <img className="col-span-1 md:-translate-x-6 lg:-translate-x-0 -translate-y-[13%] md:-translate-y-[17%] w-[200px] lg:w-[350px] mx-auto" src="/images/Title.png" alt="Pokemon Logo" />
      </div>
      <div className="z-10 px-5 sm:px-0 pt-0 right-10 md:right-16 xl:right-20 text-center my-6 lg:my-5 xl:absolute">
        <p className=" text-sm md:text-base lg:text-xl font-bold dark:text-stone-300">
          <span className="text-[#a53030] dark:text-[#ec4d4d] capitalize"> {trainerName}</span>
          , here you can find the details your favorite Pokemon
        </p>
      </div>

      <button onClick={hadleSetting} className="text-3xl md:text-4xl absolute z-10 right-0 md:right-2 top-2 sm:top-3 hover:scale-105 active:scale-100 duration-100 dark:opacity-80">⚙</button>
      <button onClick={hadleGoHome} className="text-3xl md:text-4xl absolute z-10 right-0 md:right-2 top-12 sm:top-14 md:top-16 hover:scale-105 active:scale-100 duration-100 dark:opacity-80">🔙</button>

      <article className={`${isLargeScreen ? "mt-28" : isTightScreen ? "mt-14" : "mt-10"} z-10 mb-16 pb-20 mx-auto w-[85%] grid gap-3 shadow-2xl dark:opacity-70 bg-white dark:bg-slate-300 rounded-sm`}>
        <header className={`${bgByType[pokemon?.types[0].type.name]} relative h-[105px] md:h-[145px] lg:h-[165px] xl:h-[185px] rounded-t-sm mx-1 sm:mx-2`}>
          {pokemon?.types.length === 1 ?
            <div>
              <img className="ml-2 pt-2 w-10 md:w-14" src={`${imgByType[pokemon?.types[0].type.name]}`} alt="" />
            </div> :
            <div>
              <img className="ml-2 pt-2 w-10 md:w-14" src={`${imgByType[pokemon?.types[0].type.name]}`} alt="" />
              <img className="ml-2 pt-2 w-10 md:w-14" src={`${imgByType[pokemon?.types[1].type.name]}`} alt="" />
            </div>
          }
          <div className="absolute top-0 -translate-y-[40%] w-full">
            {image ?
              <img className="h-[130px] sm:h-[180px] md:h-[200px] lg:h-[265px] xl:h-[300px] mx-auto" src={image} alt="Pokemon Img" />
              :
              <img className="h-[130px] sm:h-[180px] md:h-[200px] lg:h-[265px] xl:h-[300px] mx-auto" src="/images/default.png" alt="Default Pokemon Img" />
            }
          </div>
        </header>

        <section className="w-[80%] mx-auto gap-1 sm:gap-5 grid">
          <h3 className={`${textByType[pokemon?.types[0].type.name]} text-[33px] font-medium`}>#{pokemon?.id}</h3>

          <div className="flex w-full justify-center mx-auto gap-11">
            <hr className="dark:border-[#929292] w-[35%] self-center bg-[#dfdfdf] h-[2px]" />
            <h2 className={`${textByType[pokemon?.types[0].type.name]} text-xl sm:text-[38px] font-medium`}>{pokemon?.name}</h2>
            <hr className="dark:border-[#929292] w-[35%] self-center bg-[#dfdfdf] h-[2px]" />
          </div>

          <section className="grid grid-cols-2 mx-auto gap-24">
            <div className="grid w-max">Weight <span className="text-xl font-medium">{pokemon?.weight}</span></div>
            <div className="grid w-max">Height <span className="text-xl font-medium">{pokemon?.height}</span></div>
          </section>

          <section className="flex gap-5 justify-center w-[100%] mb-5 xl:mb-20">
            <div className="w-[50%] grid gap-5">
              <p className="font-medium text-lg md:text-2xl">Type</p>
              <div className="flex gap-5 justify-center">
                {pokemon?.types.length === 1 ?
                <span className={`${bgSelectByType[pokemon?.types[0].type.name]} h-min w-[100%] py-1 rounded-sm text-white font-medium text-base md:text-2xl`}>{pokemon?.types[0].type.name}</span>
                :
                <div className={`flex gap-5 w-[100%] flex-col ${pokemon?.abilities.length === 2 && "sm:flex-row"}`}>
                  <span className={`${bgSelectByType[pokemon?.types[0].type.name]} h-min w-[100%] py-1 rounded-sm text-white font-medium text-base md:text-2xl`}>{pokemon?.types[0].type.name}</span>
                  <span className={`${bgSelectByType[pokemon?.types[1].type.name]} h-min w-[100%] py-1 rounded-sm text-white font-medium text-base md:text-2xl`}>{pokemon?.types[1].type.name}</span>
                </div>
              }
              </div>
            </div>
            <div className="w-[50%] grid gap-5">
              <p className="font-medium text-lg md:text-2xl">Abilities</p>
              <div className={`flex gap-5 flex-col ${pokemon?.abilities.length === 2 && "sm:flex-row"} justify-center`}>
                {
                  pokemon?.abilities.map((ability) => 
                    <span key={ability.ability.name} className="w-[100%] py-1 rounded-sm border border-solid border-[#D3D3D3] dark:border-[#929292] font-medium text-base md:text-2xl">{ability.ability.name}</span>
                  )
                }
              </div>
            </div>
          </section>

          <div className="flex w-full gap-[10%]">
            <h3 className="text-start self-center font-medium text-2xl sm:text-4xl">Stats</h3>
            <div className="flex w-full">
              <hr className="w-[100%] self-center mt-2 bg-[#dfdfdf] dark:border-[#929292] h-[2px]" />
              <svg xmlns="http://www.w3.org/2000/svg" width="103" height="103" viewBox="0 0 103 103" fill="none">
                <circle className="dark:stroke-[#929292]" cx="51.4997" cy="51.4997" r="43" transform="rotate(-9.48737 51.4997 51.4997)" stroke="#F7F5F5" strokeWidth="3" />
                <path className="dark:stroke-[#929292]" d="M7.85571 60.3145L40.4043 54.8751" stroke="#F7F5F5" strokeWidth="3" />
                <path className="dark:stroke-[#929292]" d="M63.0896 51.084L95.6382 45.6446" stroke="#F7F5F5" strokeWidth="3" />
                <circle className="dark:stroke-[#929292]" cx="52.2402" cy="52.8974" r="12.5" transform="rotate(-9.48737 52.2402 52.8974)" stroke="#F7F5F5" strokeWidth="3" />
                <circle className="dark:stroke-[#929292]" cx="52.2402" cy="52.8962" r="6.5" transform="rotate(-9.48737 52.2402 52.8962)" stroke="#F7F5F5" strokeWidth="3" />
              </svg>
            </div>
          </div>

          <ul className="grid gap-4">
            {
              pokemon?.stats.map((stat) =>
                <li className="capitalize" key={stat.stat.name}>
                  <div className="flex justify-between items-center">
                    <h5 className="font-semibold text-xl">{stat.stat.name}</h5>
                    <span className="font-semibold text-lg">{stat.base_stat}/255</span>
                  </div>
                  <div className="bg-slate-200 h-6 rounded-md">
                    <div style={{ width: getPercetnStat(stat.base_stat) }} className={"bg-gradient-to-r from-[#FCD676] to-[#E6901E] h-full"}></div>
                  </div>
                </li>
              )
            }
          </ul>
        </section>
      </article>

      <article className="z-10 grid gap-6 w-[85%] mx-auto shadow-2xl mb-[20%] sm:mb-[10%] dark:opacity-70 bg-white dark:bg-slate-300">
        <section className="w-[80%] grid mx-auto gap-3 sm:gap-10 pb-[10%]">
          <div className="flex flex-col sm:flex-row pt-9 gap-[5%] sm:gap-[10%]">
            <p className="font-bold self-center text-xl sm:text-4xl">Movements</p>
            <div className="flex w-full">
              <hr className="w-[100%] self-center mt-2 bg-[#dfdfdf] dark:border-[#929292] h-[2px]" />
              <svg xmlns="http://www.w3.org/2000/svg" width="103" height="103" viewBox="0 0 103 103" fill="none">
                <circle className="dark:stroke-[#929292]" cx="51.4997" cy="51.4997" r="43" transform="rotate(-9.48737 51.4997 51.4997)" stroke="#F7F5F5" strokeWidth="3" />
                <path className="dark:stroke-[#929292]" d="M7.85571 60.3145L40.4043 54.8751" stroke="#F7F5F5" strokeWidth="3" />
                <path className="dark:stroke-[#929292]" d="M63.0896 51.084L95.6382 45.6446" stroke="#F7F5F5" strokeWidth="3" />
                <circle className="dark:stroke-[#929292]" cx="52.2402" cy="52.8974" r="12.5" transform="rotate(-9.48737 52.2402 52.8974)" stroke="#F7F5F5" strokeWidth="3" />
                <circle className="dark:stroke-[#929292]" cx="52.2402" cy="52.8962" r="6.5" transform="rotate(-9.48737 52.2402 52.8962)" stroke="#F7F5F5" strokeWidth="3" />
              </svg>
            </div>
          </div>

          <div className="flex justify-center flex-wrap gap-5 ">
            {
              pokemon?.moves.map((move) =>
                <span className="bg-[#E5E5E5] dark:bg-slate-500 dark:text-stone-300 rounded-[50px] px-[3%] py-[1%]" key={move.move.name}>{move.move.name}</span>
              )
            }

          </div>
        </section>
      </article>
      <Footer />
    </main>
  )
}

export default PokemonInfo