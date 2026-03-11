import { useEffect, useState } from "react";

const MOBILE_MEDIA_QUERY = "(max-width: 767px)";

export const useIsMobile = () => {
  const getInitialValue = () => {
    if (typeof window === "undefined") {
      return false;
    }
    return window.matchMedia(MOBILE_MEDIA_QUERY).matches;
  };

  const [isMobile, setIsMobile] = useState(getInitialValue);

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_MEDIA_QUERY);
    const handleChange = (event) => setIsMobile(event.matches);

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return isMobile;
};

export default useIsMobile;
