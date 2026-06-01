import { Link } from "react-router-dom";
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <h1 className="flex text-center ml-2 text-2xl text-amber-700 sm:md:text-3xl sm:md:justify-center lg:xl:2xl:text-4xl sm:md:lg:xl:2xl:pl-10 ">
        {" "}
        Contact Page
      </h1>
      <div className="flex flex-col items-start text-left mt-30 pl-2 ml-2 text-[14px] min-w-60 sm:mx-auto sm:justify-center sm:items-center sm:text-lg sm:md:w-dvw md:justify-center md:items-center md:text-xl lg:justify-center lg:items-center lg:text-2xl lg:xl:2xl:w-dvw xl:justify-center xl:items-center xl:text-2xl 2xl:mx-auto 2xl:place-items-center 2xl:text-4xl 2xl:justify-center 2xl:text-left">
        <section className="flex min-w-80 px-2 text-left text-wrap mb-30 sm:text-xl sm:text-orange-400 sm:mx-auto sm:md:lg:xl:2xl:text-wrap sm:overflow-auto sm:md:w-dvw  sm:md:text-left sm:md:mx-2 sm:md:px-2 sm:md:text-wrap lg:xl:2xl:text-left lg:xl:2xl:w-dvw">
          We will use React Query to fetch data fro posts stored in a json file
          in the data folder.
        </section>
        <Link
          className="flex bg-amber-600 w-fit p-3 h-10 mt-2 justify-center items-center text-white rounded-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-colors duration-300 ease-in-out"
          to="/reactQuery"
        >
          Fetch Posts using React Query!
        </Link>
        ;
        <section className="flex min-w-80 px-2 text-left text-wrap mb-30 sm:text-xl sm:text-orange-400 sm:mx-auto sm:md:lg:xl:2xl:text-wrap sm:overflow-auto sm:md:w-dvw  sm:md:text-left sm:md:mx-2 sm:md:px-2 sm:md:text-wrap lg:xl:2xl:text-left lg:xl:2xl:w-dvw">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          laudantium consectetur repellendus nesciunt, est tempore! Maiores eius
          ea suscipit nam ipsum est repellat magni beatae. Ullam fuga mollitia
          distinctio. Error.
        </section>{" "}
        <section className="flex min-w-80 px-2 text-left text-wrap mb-30 sm:text-xl sm:text-orange-400 sm:mx-auto sm:md:lg:xl:2xl:text-wrap sm:overflow-auto sm:md:w-dvw  sm:md:text-left sm:md:mx-2 sm:md:px-2 sm:md:text-wrap lg:xl:2xl:text-left lg:xl:2xl:w-dvw">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          laudantium consectetur repellendus nesciunt, est tempore! Maiores eius
          ea suscipit nam ipsum est repellat magni beatae. Ullam fuga mollitia
          distinctio. Error.
        </section>{" "}
        <div className=" flex flex-row grow text-left xs:text-[15px] pl-0 ml-0 gap-5 mt-400 text-pink-500 sm:md:text-lg lg:xl:text-xl 2xl:text-2xl">
          <Link to="/">
            <p className="hover:text-2xl duration-300 ease-in  hover:text-emerald-400 ">
              Go to Home{" "}
            </p>
          </Link>
          <Link to="/about">
            <p className="hover:text-2xl duration-300 ease-in  hover:text-emerald-400 ">
              Go to About
            </p>
          </Link>
          <Link className="" to="/layout">
            <p className="hover:text-2xl duration-300 ease-in  hover:text-emerald-400 ">
              Go to Layout
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
