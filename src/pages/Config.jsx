import { useDispatch, useSelector } from "react-redux";
import useMediaQuery from "../hooks/useMediaQuery";
import { useNavigate } from "react-router-dom";
import { setTrainerName } from "../store/slices/trainerName.slice"
import Switcher from "../components/Switcher";
import Footer from "../components/Footer";
import { setItemsPerBlock } from "../store/slices/itemsPerBlock.slice";
import useDarkSide from "../hooks/useDarkSide";

const Config = () => {
    const isDesktop = useMediaQuery('(min-width: 768px)');
    const trainerName = useSelector((store) => store.trainerName)
    const itemsPerBlock = useSelector((store) => store.itemsPerBlock)
    const [colorTheme, setTheme] = useDarkSide();
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handlePagesPerBlock = (e) => {
        dispatch(setItemsPerBlock(e.target.value))
    }

    const hadleSubmit = (e) => {
        e.preventDefault()
        dispatch(setTrainerName(e.target.trainerName.value))
    }

    const hadleGoHome = () => {
        navigate("/pokedex")
    }

    return (
        <main className="bg-[#E3ECF2] dark:text-slate-300 capitalize relative h-screen flex flex-col">
            {/* <section className="grid relative h-screen"> */}
            {isDesktop ?
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 20 1440 270" fill="none">
                    <path d="M-10 1V-9H0H1439H1449V1V147.803V153.144L1444.56 156.114L1439 147.803C1444.56 156.114 1444.56 156.116 1444.56 156.118L1444.55 156.124L1444.53 156.137L1444.46 156.179C1444.41 156.214 1444.34 156.26 1444.25 156.319C1444.07 156.437 1443.81 156.604 1443.48 156.818C1442.81 157.246 1441.84 157.861 1440.56 158.646C1438 160.216 1434.22 162.464 1429.22 165.249C1419.23 170.819 1404.37 178.537 1384.71 187.27C1345.39 204.737 1286.86 226.262 1209.59 242.779C1122.55 261.385 845.148 277.931 541.526 216.803C317.177 171.636 99.5924 195.494 2.13281 216.77L-10 219.419V207V1Z" fill="#FF6B57" stroke="#423B3B" strokeWidth="20" />
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 270" fill="none">
                    <path d="M-10 1V-9H0H1439H1449V1V147.803V153.144L1444.56 156.114L1439 147.803C1444.56 156.114 1444.56 156.116 1444.56 156.118L1444.55 156.124L1444.53 156.137L1444.46 156.179C1444.41 156.214 1444.34 156.26 1444.25 156.319C1444.07 156.437 1443.81 156.604 1443.48 156.818C1442.81 157.246 1441.84 157.861 1440.56 158.646C1438 160.216 1434.22 162.464 1429.22 165.249C1419.23 170.819 1404.37 178.537 1384.71 187.27C1345.39 204.737 1286.86 226.262 1209.59 242.779C1122.55 261.385 845.148 277.931 541.526 216.803C317.177 171.636 99.5924 195.494 2.13281 216.77L-10 219.419V207V1Z" fill="#FF6B57" stroke="#423B3B" strokeWidth="20" />
                </svg>
            }

            <div className="top-0 absolute grid grid-cols-3 w-full z-10 dark:opacity-80">
                <img className="col-span-1 -translate-y-[15%] md:-translate-y-[17%] sm:w-[350px] mx-auto" src="/images/Title.png" alt="Pokemon Logo" />
            </div>

            <button onClick={hadleGoHome} className="text-3xl md:text-4xl absolute z-10 right-2 md:right-3 top-3 hover:scale-105 active:scale-100 duration-100 dark:opacity-80">🏠</button>


            <section className="pt-7 gap-10 grid">
                <p className="z-10 px-5 h-min sm:px-0 lg:top-0 w-screen mx-auto lg:absolute sm:w-max sm:right-10 md:right-16 xl:right-20 text-center sm:my-2 lg:my-5 text-sm md:text-base lg:text-xl font-bold dark:text-stone-300">
                    {trainerName &&
                        <span className="text-[#a53030] dark:text-[#ec4d4d] capitalize"> {trainerName}</span>
                    }

                    , here you can set the configuration settings
                </p>
                <div className="z-10 relative grid text-center justify-center gap-8 text-sm md:text-base lg:text-xl font-semibold">
                    {trainerName &&
                        <form onSubmit={hadleSubmit} className="grid gap-5" >
                            <p>Change your Name</p>
                            <div className="overflow-hidden self-end bg-white w-[162.68px] flex justify-between h-[20px] sm:h-[28px] xl:h-[38px] rounded-full sm:w-max lg:w-max outline outline-3 outline-[#423B3B]">
                                <input className="pl-4 h-[20px] sm:h-[28px] w-[109.79px] sm:w-max xl:h-[38px] xl:pb-1 md:w-[160px] lg:w-min outline-none" name="trainerName" type="text" />
                                <button className="rounded-full h-[20px] outline outline-2 outline-[#423B3B] w-[60px] md:w-[80px] lg:w-[130px] sm:h-[28px] xl:h-[38px] bg-[#D93F3F] xl:pb-1 hover:bg-[#db2a2a] hover:scale-105 active:bg-[#d45959] active:scale-100 duration-100">Change</button>
                            </div>
                        </form>
                    }


                    <hr className={`h-[2px] ${trainerName ? "bg-[#d6d6d6]" : "invisible"}`} />

                    <div className="grid justify-center gap-5">
                        <p>Set Darkmode {colorTheme === "dark" ? 
                        "on"
                        :
                        "off"
                        }</p>
                        <Switcher 
                          colorTheme={colorTheme}
                          setTheme={setTheme}/>
                    </div>

                    <hr className="h-[2px] bg-[#d6d6d6] fill-black" />

                    <div className="grid justify-center gap-5">
                        <p>Set Pokemons Per Page</p>
                        <select defaultValue={itemsPerBlock} onChange={handlePagesPerBlock} className={`dark:bg-black/10 mx-auto xl:text-2xl outline outline-3 outline-[#423B3B] h-[20px] sm:h-[28px] xl:h-[38px] px-3  rounded-full w-min`}>
                            <option className="dark:bg-black/50" value="18">Default</option>
                            <option className="dark:bg-black/50" value="4">4</option>
                            <option className="dark:bg-black/50" value="8">8</option>
                            <option className="dark:bg-black/50" value="12">12</option>
                            <option className="dark:bg-black/50" value="16">16</option>
                            <option className="dark:bg-black/50" value="20">20</option>
                        </select>
                    </div>
                </div>
            </section>

            {/* </section> */}
            <Footer />


        </main >
    )
}

export default Config