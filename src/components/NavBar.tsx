import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      {/* <nav
        className="flex h-30 mb-0 min-w-150 justify-center align-middle sm:md:w-full sm:md:lg:justify-between
        lg:xl:2xl:max-w-450 w-max lg:xl:2xl:justify-between bg-linear-to-r from-blue-200 to-emerald-600 dark:bg-blue-200 dark:text-amber-300"
  > */}
      <nav className="flex gap-3 bg-linear-to-r w-200 mx-auto from-blue-200 to-emerald-600 text-orange-800 hover:text-yellow-300 sm:md:w-400 md:mx-auto ">
        {
          <h1 className="justify-center align-middle pl-20 italic text-sm">
            Tailwindcss App using Vite React
          </h1>
        }
        <br />
        <ul className="flex gap-15 justify-between text-sm items-center p-10 mx-auto  sm:text-lg sm:mx-auto sm:gap-30 md:text-xl md:mx-auto md:gap-40 lg:text-2xl lg:mx-auto lg:xl:2xl:gap-60 xl:text-3xl xl:mx-auto 2xl:mx-auto ">
          {/* <ul className="flex gap-3 justify-between text-[12px] items-center p-6 pl-10 mx-auto sm:text-lg sm:mx-auto sm:gap-15 md:text-xl md:mx-auto lg:text-2xl lg:mx-auto xl:2xl:text-3xl xl:mx-auto md:lg:xl:2xl:gap-30 2xl:mx-auto font-extrabold text-amber-200 hover:text-amber-400"> */}
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/layout">
            <li>Layout</li>
          </Link>
          <Link to="/weatherData">
            <li>Weather Data</li>
          </Link>
        </ul>
      </nav>
    </>
  );
}
