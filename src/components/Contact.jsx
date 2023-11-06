import { useEffect, useState } from "react";


const Contact = () => {
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
                  "1px 0px 4px #46FB38, 2px 0px 4px #46FB38, 3px 0px 4px #46FB38, 2px 0px 3px #D42CCA, 2px 3px 15px #220126, 2px 0px 15px, 5px 0px 20px, 20px 0vw 35px #9538F2, 10px 0vw 20px #9538F2",
              }}
            ><span className="flicker-slow">C</span>
              on<span className="flicker-fast">ta</span>ct
              <span className="flicker-slow"> Sec</span>ti
              <span className="flicker-fast">o</span>n
            </h2>
          }
        </div>
      </>
    )
  };
  
  export default Contact;