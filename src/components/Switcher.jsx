export default function Switcher({colorTheme, setTheme}) {
    
    const toggleDarkMode = () => {
        setTheme(colorTheme);
    };
 
    return (
        <>
            {colorTheme === "dark" ? 
            <button onClick={toggleDarkMode} className="overflow-hidden pb-2 rounded-full hover:scale-105 active:scale-100 text-5xl z-10 dark:opacity-80">🌚</button>
            :
            <button onClick={toggleDarkMode} className="overflow-hidden pb-2 rounded-full hover:scale-105 active:scale-100 text-5xl z-10 dark:opacity-80">😎</button>
            }
        </>
    );
}