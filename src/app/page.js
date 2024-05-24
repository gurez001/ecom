"use client";
import { useEffect, useState } from "react";
import HeroSlider from "./pages/components/home/HeroSlider";
import './pages/components/home/home.css'

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <main>
      {/* <section>{windowWidth < 768 ? <Mobi /> : <HeroSlider />}</section> */}
      <section>
        <HeroSlider />
      </section>
    </main>
  );
}
