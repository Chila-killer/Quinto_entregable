import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { bgByType, borderByType, imgByType, textByType } from "../../constants/pokemon"

const PokemonCard = ({ url }) => {
    const [pokemon, setPokemon] = useState(null)

    const image = pokemon?.sprites.other["official-artwork"].front_default
    const types = pokemon?.types.map((type) => type.type.name).join(" / ")

    useEffect(() => {
        axios
            .get(url)
            .then(({ data }) => setPokemon(data))
            .catch((err) => alert(err))
    }, [])


    return (
        <Link to={`/pokedex/${pokemon?.id}`} className={`text-center capitalize ${borderByType[pokemon?.types[0].type.name]} p-3 rounded-lg dark:opacity-70 hover:scale-105 active:scale-95 duration-200`}>
            <header className={`${bgByType[pokemon?.types[0].type.name]} h-[105px] md:h-[140px] rounded-t-sm`}>
                {pokemon?.types.length === 1 ?
                    <div>
                        <img className="ml-2 pt-2 w-10 md:w-14" src={`${imgByType[pokemon?.types[0].type.name]}`} alt="" />
                    </div> :
                    <div>
                        <img className="ml-2 pt-2 w-10 md:w-14" src={`${imgByType[pokemon?.types[0].type.name]}`} alt="" />
                        <img className="ml-2 pt-2 w-10 md:w-14" src={`${imgByType[pokemon?.types[1].type.name]}`} alt="" />
                    </div>
                }

            </header>
            <div className="relative pt-14 bg-slate-200 rounded-b-sm">
                <div className="absolute top-0 -translate-y-2/3 w-full">
                    {image ?
                        <img className="max-w-[140px] md:max-w-[180px] mx-auto" src={image} alt="Pokemon Img" />
                        :
                        <img className="max-w-[140px] md:max-w-[180px] mx-auto" src="/images/default.png" alt="Default Pokemon Img" />
                    }
                </div>
                <h3 className={`text-xl font-semibold ${textByType[pokemon?.types[0].type.name]}`}>{pokemon?.name}</h3>
                <span className="text-sm font-semibold">{types}</span>
                <h5 className="font-semibold text-slate-400 text-xs mb-2">type</h5>
                <hr className="h-[2px] bg-[#d6d6d6]" />
                <ul className="grid gap-2 grid-cols-3 text-sm py-2">
                    {
                        pokemon?.stats.map((stat) =>
                            <li className="grid gap-1 md:uppercase" key={stat.stat.name}>
                                <h6 className="font-semibold text-[10px] md:text-xs">{stat.stat.name}</h6>
                                <span className={`font-bold ${textByType[pokemon?.types[0].type.name]}`}>{stat.base_stat}</span>
                            </li>
                        )
                    }
                </ul>
            </div>
            
        </Link>
    )
}

export default PokemonCard