import useMediaQuery from "../../hooks/useMediaQuery";

const PagerBar = ({ padding, minPage, PAGES_PER_BLOCK, lastPage, handleStart, handlePreviousPage, handlePreviousBlock, handleNextPage, handleNextBlock, handleEnd, setActualPage, actualPage, pagesInCurrentBlock }) => {
    const isTightScreen = useMediaQuery('(min-width: 450px)');

    return (
        <ul className={`z-10 relative flex justify-center ${isTightScreen ? "gap-4" : "gap-2"} ${padding}`}>

            {actualPage !== 1 &&
                <div className={`flex justify-center ${isTightScreen ? "gap-4" : "gap-2"}`}>
                    <li>
                        <button className={`bg-red-500 dark:bg-[#b12e2e] ${isTightScreen ? "p-2" : "p-[3px]"} text-white font-bold rounded-md`} onClick={() => handleStart()}>{"STR"}</button>
                    </li>

                    {actualPage > PAGES_PER_BLOCK &&
                        <li>
                            <button className={`bg-red-500 dark:bg-[#b12e2e] ${isTightScreen ? "p-2" : "p-[3px]"} text-white font-bold rounded-md`} onClick={() => handlePreviousBlock()}>{"<<"}</button>
                        </li>
                    }
                    <li>
                        <button className={`bg-red-500 dark:bg-[#b12e2e] ${isTightScreen ? "p-2" : "p-[3px]"} text-white font-bold rounded-md`} onClick={() => handlePreviousPage()}>{"<"}</button>
                    </li>
                </div>
            }

            <div className={`flex justify-center ${isTightScreen ? "gap-4" : "gap-2"}`}>
                {pagesInCurrentBlock.map((page) =>
                    <li key={page}>
                        <button onClick={() => setActualPage(page)} className={`${isTightScreen ? "h-[40px] w-[40px]" : "h-[30px] w-[28px]"} text-white dark:dark:text-stone-300 font-bold rounded-md ${actualPage === page ? "bg-red-500 dark:bg-[#a51414]" : "bg-red-400 dark:bg-[#5c1818]"}`}>{page}</button>
                    </li>)}

            </div>

            {actualPage !== lastPage &&
                <div className={`flex justify-center ${isTightScreen ? "gap-4" : "gap-2"}`}>
                    <li>
                        <button className={`bg-red-500 dark:bg-[#b12e2e] ${isTightScreen ? "p-2" : "p-[3px]"} text-white font-bold rounded-md`} onClick={() => handleNextPage()}>{">"}</button>
                    </li>

                    {minPage + 6 < lastPage &&
                        <li>
                            <button className={`bg-red-500 dark:bg-[#b12e2e] ${isTightScreen ? "p-2" : "p-[3px]"} text-white font-bold rounded-md`} onClick={() => handleNextBlock()}>{">>"}</button>
                        </li>
                    }

                    <li>
                        <button className={`bg-red-500 ${isTightScreen ? "p-2" : "p-[3px]"} dark:bg-[#b12e2e] text-white font-bold rounded-md`} onClick={() => handleEnd()}>{"END"}</button>
                    </li>
                </div>
            }
        </ul>
    )
}

export default PagerBar