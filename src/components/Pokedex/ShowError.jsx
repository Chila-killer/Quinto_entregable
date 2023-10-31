const ShowError = () => {
  return (
    <div className="z-10 relative flex flex-col py-5 h-[51vh] justify-center dark:text-stone-300">
        <span className="text-[50px] mb-10">⚠</span>
        <h2 className="font-semibold text-xl pb-5">Ups, couldn't find any Pokemon!</h2>
        <p>Try again with other parameters</p>
    </div>
  )
}

export default ShowError