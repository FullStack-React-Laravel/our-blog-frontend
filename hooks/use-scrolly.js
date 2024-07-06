import { useEffect, useState } from "react";

export default function useScrollY() {
  const [scrollY100, setScrollY100] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window;
      setScrollY100(scrollY < 100);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { scrollY100 };
}
