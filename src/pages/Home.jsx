import { useDispatch } from "react-redux"
import { setTrainerName } from "../store/slices/trainerName.slice"
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import Footer from "../components/Footer";


const Home = () => {
  const [theme] = useState(localStorage.theme);

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const hadleSubmit = (e) => {
    e.preventDefault()
    dispatch(setTrainerName(e.target.trainerName.value))
    navigate("/pokedex")
  }

  const hadleSetting = () => {
    navigate("/config")
  }

  return (
    <main className={`${theme === "dark" ? "bg-[url('/images/darkBackground.jpg')]" : "bg-[url('/images/background.jpg')]"} bg-center bg-cover w-screen h-screen`}>
      <div className="flex flex-wrap justify-center relative h-full">
        <button onClick={hadleSetting} className="text-4xl absolute z-10 right-3 top-3 hover:scale-105 active:scale-100 duration-100 dark:opacity-80">⚙</button>
        <img className="w-60 top-20 sm:top-[55px] sm:w-[340px] lg:top-[6px] absolute lg:w-[539px] mx-auto" src="/images/Title.png" alt="Pokemon Logo" />
        <section className="flex flex-col items-center text-center gap-10 justify-center bg-gradient-to-r w-5/6 h-[60%] lg:h-[69%] mt-36 from-[rgb(217,217,217)]/80 to-[rgb(217,217,217)] rounded-[65px] border-[20px] border-[#423B3B]">
          <h3 className="z-10 font-bold text-4xl text-[#1D1D1D] dark:text-stone-300" >Hi trainer!</h3>
          <form className="z-10 grid gap-12" onSubmit={hadleSubmit}>
            <input required className="dark:text-stone-300 dark:placeholder:text-stone-400 text-xs h-[40px] sm:w-[350px] sm:h-[50px] lg:w-[497px] lg:h-[68px] text-center bg-white/0 rounded-3xl border-[2px] border-[#004280] dark:border-[#296fb1] placeholder-[#1D1D1D] sm:text-base lg:text-lg text-[#1D1D1D]" autoComplete="off" name="trainerName" type="text" placeholder="Give me your name to start" />
            <button className="dark:text-stone-300 hover:scale-95 hover:bg-[#ff5943] dark:hover:bg-[#be3c2b] active:bg-[#ff806f] dark:active:bg-[#aa564b] active:scale-105 duration-200 w-[167px] h-[34px] sm:w-[177px] sm:h-[34px]  lg:w-[187px] lg:h-[44px] mx-auto rounded-[9px] bg-[#FF6B57] dark:bg-[#ac4535] text-[#000] text-base font-semibold">Start!</button>
          </form>
        </section>
        <img className="overflow-hidden fixed bottom-10 -right-28 lg:-right-32 sm:bottom-20 lg:bottom-[116px] w-[250px] sm:w-[300px] lg:w-[350px]" src="/images/Pokeball.png" alt="Pokeball" />
        <Footer />
      </div>
    </main>
  )
}

export default Home