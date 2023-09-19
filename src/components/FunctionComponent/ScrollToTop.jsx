import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/* Link로 이동시 스크롤을 맨위로 올려주기위함 */

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);

  return null;  /* return은 필요없기에 null */
};