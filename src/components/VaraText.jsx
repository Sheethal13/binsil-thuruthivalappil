import { useEffect } from "react";
import Vara from "vara";
export default function VaraText({fontSize}) {
    useEffect(() => {
        const container = document.getElementById("vara-container");

        // Prevent double rendering
        if (container && container.childNodes.length === 0) {
          new Vara(
            "#vara-container",
            "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
            [
              {
                text: "Binsil Thuruthivalappil",
                fontSize: fontSize,
                strokeWidth: 2,
                color: "white"
              },
            ]
          );
        }
      }, [fontSize]);
   
    return <div id="vara-container" className="z-[20]"></div>;
  }