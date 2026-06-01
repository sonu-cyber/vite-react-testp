import { Link } from "react-router-dom";

export default function Aside() {
  return (
    <>
      <aside className="flex-1 flex-col h-200 w-40 pt-30 mt-0 mb-0 gap-15 bg-linear-to-r from-blue-200 to-emerald-600 ">
        {" "}
        <ul className="flex flex-col pt-5 mt-0 font-extrabold justify-center items-center gap-45 text-amber-200 hover:text-amber-400">
          <Link to="https://github.com/sonu-cyber/" target="_blank">
            <li>Github</li>
          </Link>
          <Link
            to="https://www.linkedin.com/in/gayathriraghuram/"
            target="_blank"
          >
            <li>LinkedIn</li>
          </Link>
          <Link to="/contact" target="_blank">
            <li>Contact me</li>
          </Link>
          <Link to="https://vite-portfolio-react.netlify.app" target="_blank">
            <li>Vite Portfolio</li>
          </Link>
          <Link
            to="https://next-portfolio-gayathri.netlify.app"
            target="_blank"
          >
            <li>Next Portfolio</li>
          </Link>
        </ul>
      </aside>
    </>
  );
}
