import { Link } from "react-router-dom";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <h1 className="flex text-center mx-auto text-2xl sm:md:text-3xl lg:xl:2xl:text-4xl text-amber-700">
        Home Page
      </h1>
      <div className="flex flex-col items-start text-left mt-30 pl-2 ml-2 text-[12px] min-w-60 sm:mx-auto sm:justify-center sm:items-center sm:text-lg sm:md:w-dvw md:justify-center md:items-center md:text-xl lg:justify-center lg:items-center lg:text-2xl lg:xl:2xl:w-dvw xl:justify-center xl:items-center xl:text-2xl 2xl:mx-auto 2xl:place-items-center 2xl:text-4xl 2xl:justify-center 2xl:text-left">
        <section className="flex min-w-80 px-2 text-left text-wrap mb-75 sm:text-xl sm:text-green-400 sm:mx-auto sm:md:lg:xl:2xl:text-wrap sm:overflow-auto sm:md:w-dvw  sm:md:text-left sm:md:mx-2 sm:md:px-2 sm:md:text-wrap lg:xl:2xl:text-left lg:xl:2xl:w-dvw">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          laudantium consectetur repellendus nesciunt, est tempore! Maiores eius
          ea suscipit nam ipsum est repellat magni beatae. Ullam fuga mollitia
          distinctio. Error.
        </section>{" "}
        <section className="flex min-w-80 px-2 text-left text-wrap mb-75 sm:text-xl sm:text-green-400 sm:mx-auto sm:md:lg:xl:2xl:text-wrap sm:overflow-auto sm:md:w-dvw  sm:md:text-left sm:md:mx-2 sm:md:px-2 sm:md:text-wrap lg:xl:2xl:text-left lg:xl:2xl:w-dvw">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          laudantium consectetur repellendus nesciunt, est tempore! Maiores eius
          ea suscipit nam ipsum est repellat magni beatae. Ullam fuga mollitia
          distinctio. Error.
        </section>{" "}
        <section className="flex min-w-80 px-2 text-left text-wrap mb-75 sm:text-xl sm:text-green-400 sm:mx-auto sm:md:lg:xl:2xl:text-wrap sm:overflow-auto sm:md:w-dvw  sm:md:text-left sm:md:mx-2 sm:md:px-2 sm:md:text-wrap lg:xl:2xl:text-left lg:xl:2xl:w-dvw">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          laudantium consectetur repellendus nesciunt, est tempore! Maiores eius
          ea suscipit nam ipsum est repellat magni beatae. Ullam fuga mollitia
          distinctio. Error.
        </section>{" "}
        <div className=" flex flex-row grow text-left xs:text-[15px] pl-0 ml-0 gap-5 mt-400 text-pink-500 sm:md:text-lg lg:xl:text-xl 2xl:text-2xl">
          <Link to="/about">
            <p className="hover:text-2xl duration-300 ease-in  hover:text-emerald-400 ">
              Go to About
            </p>
          </Link>
          <Link to="/contact">
            <p className="hover:text-2xl duration-300 ease-in  hover:text-emerald-400 ">
              Go to Contact
            </p>
          </Link>
          <Link className="" to="/layout">
            <p className="hover:text-2xl duration-300 ease-in  hover:text-emerald-400 ">
              Go to Layout
            </p>
          </Link>
        </div>
        {/*  <div className=" mt-400 border border-amber-600">
        <Link className={styles.linkAbout} to="/about">
          <p>Go to About</p>
        </Link>
        <Link className={styles.linkContact} to="/contact">
          <p>Go to Contact</p>
        </Link>
        <Link className={styles.linkLayout} to="/about">
          <p>Go to Layout</p>
        </Link>
      </div> */}
      </div>
    </div>
  );
}
