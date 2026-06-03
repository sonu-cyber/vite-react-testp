import { Link } from "react-router-dom";
import styles from "./layout.module.css";

export default function Layout() {
  return (
    <div className={styles.layout}>
      <h1 className="text-center mx-auto text-2xl sm:md:text-3xl lg:xl:2xl:text-4xl text-amber-700">
        {" "}
        Layout Page
      </h1>
      <div className="grid grid-cols-2 mt-20 gap-6 align-middle text-center">
        <div className=" border-red-200 rounded-b-2xl">
          <img
            src="../src/assets/5075933-bird-4379798_1920.jpg"
            width="550px"
            height="200px"
            alt="grid1"
          />{" "}
          <p className="italic font-bold">Eagle</p>
        </div>
        <div className="">
          <img
            src="../src/assets/E101A9JA.avif"
            width="550px"
            height="150px"
            alt="grid2"
          />
          <p className="italic font-bold">Tiger</p>
        </div>
        <div className="">
          <img
            src="../src/assets/E109T3M2.avif"
            width="550px"
            height="165px"
            alt="grid3"
          />
          <p className="italic font-bold">Elephant</p>
        </div>
        <div className="">
          <img
            src="../src/assets/E10654U4.avif"
            width="550px"
            height="165px"
            alt="grid4"
          />
          <p className="italic font-bold">Cheetah</p>
        </div>
        <div className="">
          <img
            src="../src/assets/E107A6L4.avif"
            width="550px"
            height="165px"
            alt="grid5"
          />
          <p className="italic font-bold">Chimpanzee</p>
        </div>
        <div className="">
          <img
            src="../src/assets/E1075SPL.avif"
            width="550px"
            height="165px"
            alt="grid6"
          />
          <p className="italic font-bold">Giraffe/Zebra</p>
        </div>
        <div className="hover:shadow-mauve-600 ">
          <img
            src="../src/assets/roadcarrier-capuchin-monkey-8530884_1920.jpg"
            width="550px"
            height="165px"
            alt="grid7"
          />
          <p className="italic font-bold">Capuchian Monkeys</p>
        </div>
        <div>
          <img
            src="../src/assets/wenphotos-lion-1118467_1920.jpg"
            width="550px"
            height="165px"
            alt="grid8"
          />
          <p className="italic font-bold">Lion</p>
        </div>
      </div>
      <div className="flex flex-col items-start text-left pl-2 ml-2 mt-30 text-[14px] min-w-60 sm:mx-auto sm:justify-center sm:items-center sm:text-lg sm:md:w-dvw md:justify-center md:items-center md:text-xl lg:justify-center lg:items-center lg:text-2xl lg:xl:2xl:w-dvw xl:justify-center xl:items-center xl:text-2xl 2xl:mx-auto 2xl:place-items-center 2xl:text-4xl 2xl:justify-center 2xl:text-left">
        <section className="flex min-w-80 px-2 text-left text-wrap mb-30 sm:text-xl sm:text-slate-600 sm:mx-auto sm:md:lg:xl:2xl:text-wrap sm:overflow-auto sm:md:w-dvw  sm:md:text-left sm:md:mx-2 sm:md:px-2 sm:md:text-wrap lg:xl:2xl:text-left lg:xl:2xl:w-dvw">
          I have tried to use images with grid in TailwindCss. The images are
          stacked in 2 columns with a gap-6.
        </section>{" "}
        <section className="flex min-w-80 px-2 text-left text-wrap mb-30 sm:text-xl sm:text-slate-600 sm:mx-auto sm:md:lg:xl:2xl:text-wrap sm:overflow-auto sm:md:w-dvw  sm:md:text-left sm:md:mx-2 sm:md:px-2 sm:md:text-wrap lg:xl:2xl:text-left lg:xl:2xl:w-dvw">
          The above is a grid of Jungle Animals. The grid is responsive and will
          adjust to the screen size. The images are of high quality and are
          sourced from Unsplash. The grid is designed to be visually appealing
          and easy to navigate. The text below the images provides a brief
          description of the grid and its contents.
        </section>{" "}
        <section className="flex min-w-80 px-2 text-left text-wrap mb-30 sm:text-xl sm:text-slate-600 sm:mx-auto sm:md:lg:xl:2xl:text-wrap sm:overflow-auto sm:md:w-dvw  sm:md:text-left sm:md:mx-2 sm:md:px-2 sm:md:text-wrap lg:xl:2xl:text-left lg:xl:2xl:w-dvw">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          laudantium consectetur repellendus nesciunt, est tempore! Maiores eius
          ea suscipit nam ipsum est repellat magni beatae. Ullam fuga mollitia
          distinctio. Error.
        </section>{" "}
        <div className=" flex flex-row grow text-left xs:text-[15px] pl-0 ml-0 gap-5 mt-200 text-pink-500 sm:md:text-lg lg:xl:text-xl 2xl:text-2xl">
          <Link to="/">
            <p className="hover:text-2xl duration-300 ease-in  hover:text-emerald-400 ">
              Go to Home
            </p>
          </Link>
          <Link className="" to="/about">
            <p className="hover:text-2xl duration-300 ease-in  hover:text-emerald-400 ">
              Go to About
            </p>
          </Link>
          <Link to="/contact">
            <p className="hover:text-2xl duration-300 ease-in  hover:text-emerald-400 ">
              Go to Contact
            </p>
          </Link>
          <Link to="/weatherData">
            <p className="hover:text-2xl duration-300 ease-in  hover:text-emerald-400 ">
              Go to WeatherData
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
