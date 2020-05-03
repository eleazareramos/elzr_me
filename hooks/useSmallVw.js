import { useEffect, useState } from "react";

const useSmallVw = (window) => {
  const [smallVw, setSmallVw] = useState(false);

  const handleResize = () => setSmallVw(window.innerWidth <= 500);
  useEffect(() => {
    if (window) {
      handleResize()
      window.addEventListener("resize", handleResize);
    }
    return () => window.removeEventListener("resize", handleResize);
  }, [typeof window]);

  return smallVw;
};

export default useSmallVw;
