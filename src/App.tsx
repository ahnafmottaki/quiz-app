import Header from "./components/Header";
import StartMenu from "./components/StartMenu";

export default function App() {
  return (
    <div className="relative section-inline-padding max-w-[1160px] mx-auto">
      <div className="h-[997px] aspect-square border-144 border-[#2D3949] rounded-full absolute left-full -translate-x-full md:left-[438px] -z-10 -top-[22%] md:top-0 md:-translate-y-[446px]"></div>
      <Header />
      <StartMenu />
    </div>
  );
}
