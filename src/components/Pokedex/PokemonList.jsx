import PokemonCard from "./PokemonCard"

const PokemonList = ({pokemons}) => {
  return (
    <section className="z-10 relative px-4 grid grid-cols-[repeat(auto-fit,_280px)] md:grid-cols-[repeat(auto-fit,_350px)] justify-center max-w-[1300px] mx-auto gap-6 py-10">
        {
           pokemons.map ((pokemon) => 
           <PokemonCard key={pokemon.url} url={pokemon.url}/>
           ) 
        }
    </section>
  )
}

export default PokemonList