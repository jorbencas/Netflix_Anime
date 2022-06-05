// returns the current hash location in a normalized form
// (excluding the leading '#' symbol)
import { useState, useEffect } from "react";
const currentLocation = () => {
  return window.location.hash.replace(/^#/, "") || "/";
};

const navigate = (to) => (window.location.hash = to);

export const useHashLocation = () => {
  const [loc, setLoc] = useState(currentLocation());

  useEffect(() => {
    // this function is called whenever the hash changes
    const handler = () => setLoc(currentLocation());

    // subscribe to hash changes
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  return [loc, navigate];
};
