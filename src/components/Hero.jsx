import { useEffect, useState } from "react";
// import Holden from './assets/holdentudiks919.jpg';

const Hero = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isFlickering, setIsFlickering] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlickering(!isFlickering);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScrolling(true);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        setIsScrolling(false);
      });
    };
  }, []);

  return (
    <>
      <div
        className={`section ${isScrolling ? "active" : ""}`}
        style={{
          height: "100vh",
          textAlign: "left",
          border: "1px solid green",
        }}
      >
        {
          <h2
            className={`neon ${isFlickering ? "active" : ""}`}
            style={{
              fontFamily: "'Warnes', Monoton, cursive",
              fontSize: "40px",
              color: "#9538F2",
              fontWeight: "400",
              letterSpacing: "8px",
              marginTop: "5px",
              textShadow:
                "1px 0px 4px #46FB38, 2px 0px 4px #46FB38, 3px 0px 4px #46FB38, 2px 0px 3px #D42CCA, 2px 3px 8px #220126, 2px 0px 12px, 5px 0px 15px, 8px 0vw 18px #9538F2, 10px 0vw 20px #9538F2",
            }}
          >
            <span className="flicker-slow">H</span>e
            <span className="flicker-fast">r</span>o
            <span className="flicker-slow"> Sec</span>ti
            <span className="flicker-fast">o</span>n
          </h2>
        }
      </div>
    </>
  );
};

export default Hero;
