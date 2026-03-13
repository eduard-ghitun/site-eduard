import { useEffect, useState } from "react";

const MOBILE_QUERY = "(max-width: 767px)";
const TABLET_QUERY = "(min-width: 768px) and (max-width: 1023px)";
const COARSE_POINTER_QUERY = "(hover: none), (pointer: coarse)";

const getProfile = () => {
  if (typeof window === "undefined") {
    return {
      isMobile: false,
      isTablet: false,
      isTouch: false,
      isDesktop: true
    };
  }

  const isMobile = window.matchMedia(MOBILE_QUERY).matches;
  const isTablet = window.matchMedia(TABLET_QUERY).matches;
  const isTouch = window.matchMedia(COARSE_POINTER_QUERY).matches;

  return {
    isMobile,
    isTablet,
    isTouch,
    isDesktop: !isMobile && !isTablet
  };
};

const useViewportProfile = () => {
  const [profile, setProfile] = useState(getProfile);

  useEffect(() => {
    const mediaQueries = [
      window.matchMedia(MOBILE_QUERY),
      window.matchMedia(TABLET_QUERY),
      window.matchMedia(COARSE_POINTER_QUERY)
    ];

    const handleChange = () => {
      setProfile((current) => {
        const next = getProfile();

        if (
          current.isMobile === next.isMobile &&
          current.isTablet === next.isTablet &&
          current.isTouch === next.isTouch &&
          current.isDesktop === next.isDesktop
        ) {
          return current;
        }

        return next;
      });
    };

    handleChange();
    mediaQueries.forEach((query) => query.addEventListener("change", handleChange));

    return () => {
      mediaQueries.forEach((query) => query.removeEventListener("change", handleChange));
    };
  }, []);

  return profile;
};

export default useViewportProfile;
