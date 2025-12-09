import { Moon, Sun } from "lucide-react";
import { useTheme } from "../contexts/theme-context/theme-context";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="flex justify-end py-6.5 px-6 gap-4 items-center pt-6.5 ">
      <div className="">
        <Sun size={15} />
      </div>
      <button
        onClick={toggleTheme}
        className={`h-5 w-8 bg-[#A729F5] rounded-full relative before:transition-all before:duration-200  before:absolute before:h-3 before:left-1 before:aspect-square before:rounded-full before:bg-white ${
          theme === "light" ? "" : "before:translate-x-3"
        }  before:top-1/2 before:-translate-y-1/2 before:z-10`}
      ></button>
      <div>
        <Moon size={14} />
      </div>
    </header>
  );
}
