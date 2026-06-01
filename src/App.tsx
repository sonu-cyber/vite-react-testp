import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./pages/Layout";
import WeatherData from "./components/WeatherData";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ReactQueryUsage from "./components/ReactQueryUsage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import ErrorFallback from "./ErrorFallback";

export default function App() {
  const [theme, setTheme] = useState("light");
  const queryClient = new QueryClient();
  if (theme === "light") {
    setTheme(theme === "light" ? "dark" : "light");
  }
  function Button({ color, children }) {
    const colorVariants = {
      blue: "bg-blue-600 hover:bg-blue-800",
      orange: "bg-orange-400 hover:bg-orange-600",
    };
    return <button className={`${colorVariants[color]}...`}>{children}</button>;
  }

  return (
    <div
      className="app flex flex-col min-h-dvh min-w-0 mb-0  text-slate-700 xs:justify-center xs:align-items sm:md:w-dvw sm:md: 
    justify-center lg:xl:2xl:w-dvw lg:xl:2xl:justify-center"
    >
      <Router>
        <QueryClientProvider client={queryClient}>
          <QueryErrorResetBoundary>
            {({ reset }) => (
              <ErrorBoundary
                FallbackComponent={ErrorFallback}
                onReset={reset} // Tells React Query to try fetching again
              >
                <NavBar />
                <Suspense fallback={<h2>Loading posts...</h2>}>
                  <div className="flex flex-row h-max w-dvw mt-0 pt-0">
                    <Main />

                    <section className=" flex mx-10 text-left">
                      <Routes>
                        <Route path="/" element={<Home />} />
                      </Routes>
                      <Routes>
                        <Route path="/about" element={<About />} />
                      </Routes>
                      <Routes>
                        <Route path="/contact" element={<Contact />} />
                      </Routes>
                      <Routes>
                        <Route path="/layout" element={<Layout />} />
                      </Routes>
                      <Routes>
                        <Route path="/weatherData" element={<WeatherData />} />
                      </Routes>
                      <Routes>
                        <Route
                          path="/reactQuery"
                          element={<ReactQueryUsage />}
                        />
                      </Routes>
                    </section>
                    {/*} </main> */}
                    <Button color children />
                  </div>
                  <Footer />
                  {/* Adds a floating icon to open the devtools */}
                  <ReactQueryDevtools initialIsOpen={false} />

                  {/* <ReactQueryUsage /> */}
                </Suspense>
              </ErrorBoundary>
            )}
          </QueryErrorResetBoundary>
          )
        </QueryClientProvider>
      </Router>
    </div>
  );
}
