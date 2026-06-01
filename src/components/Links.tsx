import { Link } from "react-router-dom";

export default function Links() {
  return (
    <div>
      <div className=" flex flex-row text-left text-xl italic pl-0 ml-0 gap-5 mt-400 text-pink-500 ">
        <Link to="/about">
          <p className="hover:text-2xl transition-normal ">Go to About</p>
        </Link>
        <Link to="/contact">
          <p className="hover:text-2xl transition-normal ">Go to Contact</p>
        </Link>
        <Link className="" to="/about">
          <p className="hover:text-2xl transition-normal ">Go to Layout</p>
        </Link>
      </div>
    </div>
  );
}
