const bgByType = {
    normal: "bg-gradient-to-t from-[#BC6B7C] via-[#7C3F4C] to-[#735259]",
    fighting: "bg-gradient-to-t from-[#CB735D] via-[#F1613C] to-[#96402A]",
    flying: "bg-gradient-to-t from-[#acd6ee] via-[#7ac1eb] to-[#53b1e7]",
    poison: "bg-gradient-to-t from-[#CE9BFF] via-[#A564E3] to-[#5B3184]",
    ground: "bg-gradient-to-t from-[#D69638] via-[#895C1A] to-[#654008]",
    rock: "bg-gradient-to-t from-[#D3D3D3] via-[#8D8D94] to-[#7E7E7E]",
    bug: "bg-gradient-to-t from-green-300 to-green-500",
    ghost: "bg-gradient-to-t from-[#787DDA] via-[#454AA8] to-[#323569]",
    steel: "bg-gradient-to-t from-[#A8A8A8] via-[#728881] to-[#5E736C]",
    fire: "bg-gradient-to-t from-[#E8AE1B] via-[#E35825] to-[#F96D6F]",
    water: "bg-gradient-to-t from-[#82B2F1] via-[#1479FB] to-[#133258]",
    grass: "bg-gradient-to-t from-[#7EC6C5] via-[#3accca] to-[#20bdba]",
    electric: "bg-gradient-to-t from-[#7075D9] via-[#2B319B] to-[#0C1395]",
    psychic: "bg-gradient-to-t from-[#e7a3e7] via-[#e270e2] to-[#e449e4]",
    ice: "bg-gradient-to-t from-[#BDEBFE] via-[#64CBF5] to-[#6FBEDF]",
    dragon: "bg-gradient-to-t from-[#A2BEC1] via-[#56A4AE] to-[#478A93]",
    dark: "bg-gradient-to-t from-[#5A5E5D] via-[#0D1211] to-[#030706]",
    fairy: "bg-gradient-to-t from-[#CD7D98] via-[#C23867] to-[#971B45]",
    unknown: "",
    shadow: ""
}

const imgByType = {
    normal: "/images/Normal.png",
    fighting: "/images/Fighting.png",
    flying: "/images/Flying.png",
    poison: "/images/Poison.png",
    ground: "/images/Ground.png",
    rock: "/images/Rock.png",
    bug: "/images/Bug.png",
    ghost: "/images/Ghost.png",
    steel: "/images/Steel.png",
    fire: "/images/Fire.png",
    water: "/images/Tretta_Water_type.png",
    grass: "/images/Tretta_Grass_type.png",
    electric: "/images/Electric.png",
    psychic: "/images/Psychic.png",
    ice: "/images/Ice.png",
    dragon: "/images/Dragon.png",
    dark: "/images/Dark.png",
    fairy: "/images/Fairy.png",
    unknown: "",
    shadow: ""
}

const borderByType = {
    normal: "bg-gradient-to-t from-[#BA707F] to-[#735259]",
    fighting: "bg-gradient-to-t from-[#E95B36] to-[#96402A]",
    flying: "bg-gradient-to-t from-[#7ac1eb] to-[#53b1e7]",
    poison: "bg-gradient-to-t from-[#A564E3] to-[#5B3184]",
    ground: "bg-gradient-to-t from-[#9C6614] to-[#654008]",
    rock: "bg-gradient-to-t from-[#B9B9BA] to-[#7E7E7E]",
    bug: "bg-gradient-to-t from-[#C3DEA3] to-[#4AB648]",
    ghost: "bg-gradient-to-t from-[#5A61DD] to-[#323569]",
    steel: "bg-gradient-to-t from-[#9BB7AD] to-[#5E736C]",
    fire: "bg-gradient-to-t from-[#E75C35] to-[#E6901E]",
    water: "bg-gradient-to-t from-[#1479FB] to-[#83B9FF]",
    grass: "bg-gradient-to-t from-[#C3DEA3] to-[#B1DBBC]",
    electric: "bg-gradient-to-t from-[#8E94FE] to-[#0C1395]",
    psychic: "bg-gradient-to-t from-[#e270e2] to-[#e449e4]",
    ice: "bg-gradient-to-t from-[#C4EBFB] to-[#6FBEDF]",
    dragon: "bg-gradient-to-t from-[#8DD6E0] to-[#478A93]",
    dark: "bg-gradient-to-t from-[#4F4F4F] to-[#0B0E0D]",
    fairy: "bg-gradient-to-t from-[#C5597E] to-[#971B45]",
    unknown: "",
    shadow: ""
}

const bgSelectByType = {
    normal: "bg-[#735259]",
    fighting: "bg-[#96402A]",
    flying: "bg-[#53b1e7]",
    poison: "bg-[#5B3184]",
    ground: "bg-[#654008]",
    rock: "bg-[#7E7E7E]",
    bug: "bg-[#4AB648]",
    ghost: "bg-[#323569]",
    steel: "bg-[#5E736C]",
    fire: "bg-[#E6901E]",
    water: "bg-[#83B9FF]",
    grass: "bg-[#B1DBBC]",
    electric: "bg-[#0C1395]",
    psychic: "bg-[#e449e4]",
    ice: "bg-[#6FBEDF]",
    dragon: "bg-[#478A93]",
    dark: "bg-[#0B0E0D]",
    fairy: "bg-[#971B45]",
    unknown: "bg-[#a5a75b]",
    shadow: "bg-[#585858]",
}

const textByType = {
    normal: "text-[#735259]",
    fighting: "text-[#96402A]",
    flying: "text-[#53b1e7]",
    poison: "text-[#5B3184]",
    ground: "text-[#654008]",
    rock: "text-[#7E7E7E]",
    bug: "text-[#4AB648]",
    ghost: "text-[#323569]",
    steel: "text-[#5E736C]",
    fire: "text-[#E75C35]",
    water: "text-[#1479FB]",
    grass: "text-[#416460]",
    electric: "text-[#0C1395]",
    psychic: "text-[#e449e4]",
    ice: "text-[#6FBEDF]",
    dragon: "text-[#478A93]",
    dark: "text-[#030706]",
    fairy: "text-[#971B45]",
    unknown: "text-[#a5a75b]",
    shadow: "text-[#585858]",
    "": "bg-[#D93F3F]"
}

export{
    bgByType,
    imgByType,
    borderByType,
    bgSelectByType,
    textByType,
}
