import  { useState, useEffect } from "react";


const Header = () => {
  const [isFlickering, setIsFlickering] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlickering(!isFlickering);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const [isScrolling, setIsScrolling] = useState(false);

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
          textAlign: "center",
        }}
      >
        {
          <h1
            className={`neon ${isFlickering ? "active" : ""}`}
            style={{
              fontFamily: "'Warnes', Monoton, cursive",
              fontSize: "130px",
              color: "#9538F2",
              fontWeight: "400",
              letterSpacing: "8px",
              marginTop: "5px",
              textShadow:
                "1px 0px 4px #46FB38, 2px 0px 4px #46FB38, 3px 0px 4px #46FB38, 2px 0px 3px #D42CCA, 2px 3px 15px #220126, 2px 0px 15px, 5px 0px 20px, 20px 0vw 35px #9538F2, 10px 0vw 20px #9538F2",
            }}
          ><span className="flicker-slow">Ho</span>
            ld<span className="flicker-fast">en</span>tu
            <span className="flicker-slow">diks</span>9
            <span className="flicker-fast">1</span>9
          </h1>
        }
      </div>
    </>
  );
};

export default Header;
