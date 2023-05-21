import { Fab } from "@mui/material";
import UpIcon from "@mui/icons-material/KeyboardArrowUp";
import { fabStyles } from "./ToTopBtn.styled";
import { useEffect, useState } from "react";

const ToTopBtn = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showTopBtn && (
        <Fab onClick={goToTop} size="large" aria-label="to top" sx={fabStyles}>
          <UpIcon />
        </Fab>
      )}
    </>
  );
};

export default ToTopBtn;
