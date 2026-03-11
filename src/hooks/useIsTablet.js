import { useEffect, useState } from "react";

const TABLET_MEDIA_QUERY = "(min-width: 768px) and (max-width: 1023px)";

export const useIsTablet = () => {
  const getInitialValue = () => {
    if (typeof window === "undefined") {
      return false;
    }
    return window.matchMedia(TABLET_MEDIA_QUERY).matches;
  };

  const [isTablet, setIsTablet] = useState(getInitialValue);

  useEffect(() => {
    const mediaQuery = window.matchMedia(TABLET_MEDIA_QUERY);
    const handleChange = (event) => setIsTablet(event.matches);

    setIsTablet(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return isTablet;
};

export default useIsTablet;
