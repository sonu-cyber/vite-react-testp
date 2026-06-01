export default function Footer() {
  return (
    <div>
      <footer className="flex gap-3 bg-linear-to-r w-200 mx-auto from-blue-200 to-emerald-600 text-orange-800 hover:text-yellow-300 sm:mx-auto sm:md:w-400 md:mx-auto ">
        {/* <footer className="flex h-35 pt-15 min-w-150 mb-0 font-extrabold justify-center text-center align-middle max-w-400 text-amber-200 hover:text-amber-400 bg-linear-to-r from-blue-200 to-emerald-600"> */}
        <ul className="flex gap-15 justify-between text-sm items-center p-10 mx-auto  sm:text-lg sm:mx-auto sm:gap-30 md:text-xl md:mx-auto md:gap-40 lg:text-2xl lg:mx-auto lg:gap-60 xl:text-3xl xl:mx-auto xl:gap-60 2xl:4xl 2xl:mx-auto 2xl:gap-60">
          <li>Footer</li>
          <li>Contact Me</li>
        </ul>
      </footer>
    </div>
  );
}
