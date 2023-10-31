import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import PokemonList from "../components/Pokedex/PokemonList"
import useMediaQuery from "../hooks/useMediaQuery"
import { bgSelectByType } from "../constants/pokemon"
import { paginateData } from "../utilities/pagination"
import PageBar from "../components/Pokedex/PageBar"
import { useNavigate } from "react-router-dom"
import Footer from "../components/Footer"
import ShowError from "../components/Pokedex/ShowError"

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([])
  const [pokemonName, setPokemonName] = useState("")
  const [types, setTypes] = useState([])
  const [currentType, setCurrentType] = useState("")
  const [actualPage, setActualPage] = useState(1)
  const [pagesPerBlock, setPagesPerBlock] = useState(3)

  const trainerName = useSelector((store) => store.trainerName)

  const itemsPerBlock = useSelector((store) => store.itemsPerBlock)

  const pokemonsByName = pokemons.filter((pokemon) => pokemon.name.includes(pokemonName))

  const isDesktop = useMediaQuery('(min-width: 768px)');

  const isTightScreen = useMediaQuery('(min-width: 450px)');

  const { minPage, PAGES_PER_BLOCK, itemsInCurrentPage, pagesInCurrentBlock, lastPage } = paginateData(pokemonsByName, actualPage, itemsPerBlock, pagesPerBlock)

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setPokemonName(e.target.pokemonName.value.toLowerCase().trim())
  }

  const handleType = (e) => {
    setCurrentType(e.target.value)
  }

  const handleStart = () => {
    setActualPage(1)
  }

  const handlePreviousPage = () => {
    const newCurrentPage = actualPage - 1
    if (newCurrentPage >= 1) {
      setActualPage(newCurrentPage)
    }
  }

  const handlePreviousBlock = () => {
    const newCurrentBlock = minPage - PAGES_PER_BLOCK
    if (newCurrentBlock >= 1) {
      setActualPage(newCurrentBlock)
    }
  }

  const handleNextPage = () => {
    const newCurrentPage = actualPage + 1
    if (newCurrentPage <= lastPage) {
      setActualPage(newCurrentPage)
    }
  }

  const handleNextBlock = () => {
    const newCurrentBlock = minPage + PAGES_PER_BLOCK
    if (minPage + 6 < lastPage) {
      setActualPage(newCurrentBlock)
    }
  }

  const handleEnd = () => {
    setActualPage(lastPage)
  }

  const hadleSetting = () => {
    navigate("/config")
  }

  useEffect(() => {
    const handlePagesPerBlock = () => {
      if (isDesktop) {
        setPagesPerBlock(7)
      } else {
        setPagesPerBlock(2)
      }
    }
    handlePagesPerBlock()
  }, [isDesktop])


  useEffect(() => {
    if (currentType === "") {
      axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=1292")
        .then(({ data }) => setPokemons(data.results))
        .catch((err) => alert(err))
    }
  }, [currentType])

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/type")
      .then(({ data }) => setTypes(data.results))
      .catch((err) => alert(err))
  }, [currentType])

  useEffect(() => {
    if (currentType !== "") {
      axios
        .get(`https://pokeapi.co/api/v2/type/${currentType}/`)
        .then(({ data }) => { setPokemons(data.pokemon.map((pokemon) => pokemon.pokemon)) })
        .catch((err) => alert(err))
    }
  }, [currentType])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [actualPage])

  useEffect(() => {
    setActualPage(1)
  }, [currentType])


  return (
    <main className={`bg-[#E3ECF2] text-center relative ${itemsInCurrentPage.length === 0 && "h-screen" }`}>
      <section className="grid relative">
        {isDesktop ?
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 40 1440 270" fill="none">
            <path d="M-10 1V-9H0H1439H1449V1V147.803V153.144L1444.56 156.114L1439 147.803C1444.56 156.114 1444.56 156.116 1444.56 156.118L1444.55 156.124L1444.53 156.137L1444.46 156.179C1444.41 156.214 1444.34 156.26 1444.25 156.319C1444.07 156.437 1443.81 156.604 1443.48 156.818C1442.81 157.246 1441.84 157.861 1440.56 158.646C1438 160.216 1434.22 162.464 1429.22 165.249C1419.23 170.819 1404.37 178.537 1384.71 187.27C1345.39 204.737 1286.86 226.262 1209.59 242.779C1122.55 261.385 845.148 277.931 541.526 216.803C317.177 171.636 99.5924 195.494 2.13281 216.77L-10 219.419V207V1Z" fill="#FF6B57" stroke="#423B3B" strokeWidth="20" />
          </svg>
          :
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 270" fill="none">
            <path d="M-10 1V-9H0H1439H1449V1V147.803V153.144L1444.56 156.114L1439 147.803C1444.56 156.114 1444.56 156.116 1444.56 156.118L1444.55 156.124L1444.53 156.137L1444.46 156.179C1444.41 156.214 1444.34 156.26 1444.25 156.319C1444.07 156.437 1443.81 156.604 1443.48 156.818C1442.81 157.246 1441.84 157.861 1440.56 158.646C1438 160.216 1434.22 162.464 1429.22 165.249C1419.23 170.819 1404.37 178.537 1384.71 187.27C1345.39 204.737 1286.86 226.262 1209.59 242.779C1122.55 261.385 845.148 277.931 541.526 216.803C317.177 171.636 99.5924 195.494 2.13281 216.77L-10 219.419V207V1Z" fill="#FF6B57" stroke="#423B3B" strokeWidth="20" />
          </svg>
        }

        <p className={`z-10 mt-10 ${!isTightScreen && "pt-4"} md:mt-1 md:px-0 px-5 md:pt-0 md:absolute right-10 md:right-6 lg:right-20 text-center my-2 lg:my-5 text-sm md:text-base lg:text-xl font-bold dark:text-stone-300`}>
          Welcome
          <span className="text-[#a53030] dark:text-[#ec4d4d] capitalize"> {trainerName}</span>
          , here you can find your favorite Pokemon
        </p>

        <button onClick={hadleSetting} className="text-3xl right-0 top-[45%] sm:top-0 md:text-4xl absolute z-20 sm:right-3 md:top-[70%] lg:top-3 hover:scale-105 active:scale-100 duration-100 dark:opacity-80">⚙</button>

        <div className="absolute grid grid-cols-3 w-full">
          <img className="z-10 dark:opacity-80 col-span-1 -translate-y-[15%] md:-translate-y-[17%] sm:w-[350px] mx-auto" src="/images/Title.png" alt="Pokemon Logo" />
          <form className="z-10 w-full font-semibold sm:w-min sm:ml-8 place-self-start text-sm sm:text-lg xl:text-2xl col-start-2 col-span-2 flex flex-col sm:place-self-end md:flex-row justify-end pt-3 sm:pt-11 md:pt-3  pb-[2%] sm:pb-[5%] md:pb-[15%] lg:pb-24 xl:py-20 pr-2 sm:px-5 gap-3 md:gap-7" onSubmit={handleSubmit}>
            <div className="bg-white dark:bg-white/0 overflow-hidden self-end w-[162.68px] flex justify-between h-[20px] sm:h-[28px] xl:h-[38px] rounded-full sm:w-max lg:w-max outline outline-3 outline-[#423B3B]">
              <input className="dark:bg-white/0 dark:text-stone-300 dark:placeholder:text-stone-400 pl-4 h-[20px] sm:h-[28px] w-[109.79px] sm:w-max xl:h-[38px] xl:pb-1 md:w-[160px] lg:w-min outline-none" name="pokemonName" type="text" />
              <button className="dark:text-stone-300 dark:bg-[#b12e2e] rounded-full h-[20px] outline outline-2 outline-[#423B3B] w-[60px] md:w-[80px] lg:w-[130px] sm:h-[28px] xl:h-[38px] bg-[#D93F3F] xl:pb-1 hover:bg-[#db2a2a] hover:scale-105 active:bg-[#d45959] active:scale-100 duration-200">Search</button>
            </div>

            <select onChange={handleType} className={`dark:text-stone-300 hover:scale-105 duration-200 self-end outline outline-3 outline-[#423B3B] capitalize h-[23px] sm:h-[28px] xl:h-[38px] px-3 pb-1 rounded-full w-min xl:w-[200px] ${currentType ? bgSelectByType[currentType] : "bg-[#D93F3F] dark:bg-[#b12e2e]"}`}>
              <option className="xl:text-3xl bg-[#D93F3F] dark:text-stone-300" value="">All Pokemons</option>
              {
                types.map((type) =>
                  <option className={`xl:text-3xl dark:text-stone-300 ${bgSelectByType[type.name]}`} value={type.name} key={type.name}>{type.name}</option>
                )
              }
            </select>
          </form>
        </div>

      </section>

      {itemsInCurrentPage.length === 0 ?
        <ShowError />
        :
        <div>
          <PageBar
            padding="pt-5"
            handleStart={handleStart}
            handlePreviousPage={handlePreviousPage}
            handlePreviousBlock={handlePreviousBlock}
            handleNextPage={handleNextPage}
            handleNextBlock={handleNextBlock}
            handleEnd={handleEnd}
            setActualPage={setActualPage}
            pagesInCurrentBlock={pagesInCurrentBlock}
            actualPage={actualPage}
            minPage={minPage}
            lastPage={lastPage}
            PAGES_PER_BLOCK={PAGES_PER_BLOCK}
            setPagesPerBlock={setPagesPerBlock}
          />

          <PokemonList pokemons={itemsInCurrentPage} />

          <PageBar
            padding="pb-16"
            handleStart={handleStart}
            handlePreviousPage={handlePreviousPage}
            handlePreviousBlock={handlePreviousBlock}
            handleNextPage={handleNextPage}
            handleNextBlock={handleNextBlock}
            handleEnd={handleEnd}
            setActualPage={setActualPage}
            pagesInCurrentBlock={pagesInCurrentBlock}
            actualPage={actualPage}
            minPage={minPage}
            lastPage={lastPage}
            PAGES_PER_BLOCK={PAGES_PER_BLOCK}
            setPagesPerBlock={setPagesPerBlock}
          />
        </div>
      }

      <Footer />
    </main >
  )
}

export default Pokedex