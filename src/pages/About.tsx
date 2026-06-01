import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import styles from "./about.module.css";
import styled from "styled-components";
type Post = {
  id: number;
  title: string;
  book: string;
};
type RestData = {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
};
type DataAPI = {
  name: string;
  data: {
    color: string;
    price: number;
  };
};

export default function About() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dataAPI, setDataAPI] = useState<DataAPI | null>(null);

  const [dataAxios, setDataAxios] = useState<Post[]>([]);
  /*Use Go REST API to get data from a free website */
  const [restData, setRestData] = useState<RestData[]>([]);
  const goAPI = "https://gorest.co.in/public/v2";
  const URL = "http://localhost:8000/posts/";

  /*  const TOKEN =
    "c8dbce988a2a5c234807a4fdeb736ac49a5b602c0eb7e53ff52cb32179301a32";
  const headers = {
    Authorization: `Bearer ${TOKEN}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  }; */
  const Button = styled.button`
    color: tertiary;
    background-color: secondary;
  `;

  function handleClick() {
    const fetchData = async () => {
      try {
        if (!loading) {
          setLoading(true);
        }

        // Axios automatically parses JSON data into response.data
        const response = await axios.get(URL);
        setDataAxios(response.data);
        console.log("Response Data from AXIOS:", response.data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred.");
        }
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }

  async function getRestAPI() {
    try {
      if (!loading) {
        setLoading(true);
      }

      const res = await fetch("https://api.restful-api.dev/objects/4");
      if (!res.ok) throw new Error(`Got ${res.status}`);
      const data = await res.json();
      console.log("data", data);
      setDataAPI(data);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred.");
      }
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  }
  async function goRestAPI() {
    try {
      if (!loading) {
        setLoading(true);
      }
      const res = await fetch(`${goAPI}/users/`);
      if (res.status === 404) return null;
      if (!res.ok) throw new Error(`Got ${res.status}`);
      const goDataAPI = await res.json();
      console.log("goDataAPI", goDataAPI);
      setRestData(goDataAPI);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred.");
      }
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className={styles.about}>
      <h1 className="text-center mx-auto text-2xl sm:md:text-3xl lg:xl:2xl:text-4xl text-wrap text-orange-800">
        About Page!
      </h1>
      <div className="flex flex-col justify-center items-center text-left mt-30 pl-2 mx-auto text-[12px] min-w-fit sm:mx-auto sm:justify-center sm:items-center sm:text-lg sm:md:w-dvw md:justify-center md:items-center md:text-xl lg:justify-center lg:items-center lg:text-xl lg:xl:2xl:w-dvw xl:justify-center xl:items-center xl:text-xl  2xl:mx-auto 2xl:place-items-center 2xl:justify-center 2xl:text-left ">
        <section className="flex min-w-80 px-2 text-left text-wrap mb-30 sm:text-xl sm:text-gray-500 sm:mx-auto sm:md:lg:xl:2xl:text-wrap sm:overflow-auto sm:md:w-dvw  sm:md:text-left sm:md:mx-2 sm:md:px-2 sm:md:text-wrap lg:xl:2xl:text-left lg:xl:2xl:w-dvw sm:md:text-[18px] lg:xl:text-2xl 2xl:text-3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          laudantium consectetur repellendus nesciunt, est tempore! Maiores eius
          ea suscipit nam ipsum est repellat magni beatae. Ullam fuga mollitia
          distinctio. Error.
        </section>
        <Button
          className="flex bg-amber-600 w-fit p-4 h-10 mt-2 justify-center text-left items-center text-white rounded-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-colors duration-300 ease-in-out sm:md:text-[18px] lg:xl:text-2xl 2xl:text-3xl"
          onClick={() => handleClick()}
        >
          Fetch Axios Data!
        </Button>
        <br />
        <div className="grid grid-cols-1 p-3 mt-3 ">
          {/* Display Axios data in a list */}
          <h4 className="flex text-center ml-6">Fetched Data Using Axios</h4>
          {dataAxios &&
            dataAxios.map((post) => (
              <ul
                className="grid text-[14px] p-2 border-2 italic border-amber-400 md:lg:text-[16px] xl:2xl:text-[18px] text-wrap overflow-auto"
                key={post.id}
              >
                <li className=" ">id:{post.id}</li>
                <li>title:{post.title}</li>
                <li>book:{post.book}</li>
              </ul>
            ))}
        </div>
        <section className="flex min-w-80 px-2 text-left text-wrap mb-30 sm:text-xl sm:text-gray-500 sm:mx-auto sm:md:lg:xl:2xl:text-wrap sm:overflow-auto sm:md:w-dvw  sm:md:text-left sm:md:mx-2 sm:md:px-2 sm:md:text-wrap lg:xl:2xl:text-left lg:xl:2xl:w-dvw sm:md:text-[18px] lg:xl:text-2xl 2xl:text-3xl">
          Get Rest API data from https://api.restful-api.dev/. The API provides
          a simple way to access a variety of data, including users, posts,
          comments, and more. The API is free to use and does not require an API
          key. The API is easy to use and provides accurate data. The API is a
          great resource for developers who want to build applications or
          integrate data into their existing applications.
        </section>{" "}
        <button
          className="flex bg-amber-600 w-fit p-3 h-10 mt-2 justify-center items-center text-white rounded-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-colors duration-300 ease-in-out"
          onClick={() => getRestAPI()}
        >
          Display Rest API Data
        </button>
        <br />
        <br />
        <div>
          {/* Display Rest API data in a list */}
          {dataAPI && (
            <ul className="text-[16px] p-2 sm:md:text-[18px] lg:xl:text-2xl 2xl:text-3xl">
              <li>Name:{dataAPI.name}</li>
              <li>Color:{dataAPI.data.color}</li>
              <li>Price:{dataAPI.data.price}</li>
            </ul>
          )}
        </div>
        <br />
        <br />
        <section className="flex min-w-80 px-2 text-left text-wrap mb-30 sm:text-xl sm:text-gray-500 sm:mx-auto sm:md:lg:xl:2xl:text-wrap sm:overflow-auto sm:md:w-dvw  sm:md:text-left sm:md:mx-2 sm:md:px-2 sm:md:text-wrap lg:xl:2xl:text-left lg:xl:2xl:w-dvw sm:md:text-[18px] lg:xl:text-2xl 2xl:text-3xl">
          Get Rest API data from
          https://gorest.co.in/docs/javascript#fetch-a-single-user. The API
          provides a simple way to access a variety of data, including users,
          posts, comments, and more. The API is free to use and does not require
          an API key. The API is easy to use and provides accurate data. The API
          is a good resource for developers who want to build applications or
          integrate data into their existing applications. It has a simple and
          intuitive interface that makes it easy to access the data you need.
        </section>{" "}
        <button
          className="flex bg-amber-600 w-fit pl-6 p-3 h-10 mt-2 mb-10 justify-left items-center text-white rounded-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-colors duration-300 ease-in-out"
          onClick={() => goRestAPI()}
        >
          Display Go Rest API Data
        </button>
        {/* Display Go Rest API data in a list */}
        <div className="grid grid-cols-1 gap-4 p-2 text-[16px] md:lg:grid-cols-2 xl:2xl:grid-cols-3 xl:2xl:gap-6">
          {restData &&
            restData.map((item) => (
              <ul
                className="grid p-3 w-fit not-visited:border-2 border-amber-500 text-wrap overflow-auto"
                key={item.id}
              >
                <li>id:{item.id}</li>
                <li>name:{item.name}</li>
                <li className="grid text-wrap overflow-x-visible">
                  email:{item.email}
                </li>
                <li>gender:{item.gender}</li>
                <li>status:{item.status}</li>
              </ul>
            ))}
        </div>
        <br />
        <div className=" flex flex-row grow text-left xs:text-[15px] pl-0 ml-0 gap-5 mt-400 text-pink-500 sm:md:text-lg lg:xl:text-xl 2xl:text-2xl">
          <Link to="/">
            <p className="hover:text-2xl duration-300 ease-in  hover:text-emerald-400 ">
              Go to Home{" "}
            </p>
          </Link>

          <Link to="/contact">
            <p className="hover:text-2xl duration-300 ease-in hover:text-emerald-400">
              Go to Contact
            </p>
          </Link>

          <Link className="" to="/layout">
            <p className="hover:text-2xl duration-300 ease-in hover:text-emerald-400">
              Go to Layout
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
