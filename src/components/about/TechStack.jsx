import React, { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";

import {
  DiJava,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
} from "react-icons/di";
import { FaGolang } from "react-icons/fa6";
import { FaCuttlefish } from "react-icons/fa";
import {
  SiMui,
  SiChakraui,
  SiTypescript,
 SiPostgresql,
  SiHtml5,
  SiCss3,
  SiSolidity,
  SiSupabase
} from "react-icons/si";





const TechStack = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getItemsPerRow = () => {
    if (width >= 1000) {
      return 6;
    } else
    if (width >= 799 && width <= 999) {
      return 4;
    } else {
      return 3;
    }
  };

  return (
    <div className="techstack">
      <h1>
        My{" "}
        <span
          style={{
            color: "#32CD30",
            marginTop: "3rem",
            fontFamily: "Fira Code",
            fontWeight: "bold",
          }}
        >
          SkillSet
        </span>
      </h1>
      <div className="techstack-row">
        <Card.Group itemsPerRow={getItemsPerRow()}>
         

         

          <Card
            raised
            className="item"
            style={{
              backgroundColor: "#10265ddc",
              boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <DiJavascript1
              style={{ width: "60%", height: "5rem", color: "#FFC300" }}
            />
          </Card>
          <Card
            raised
            className="item"
            style={{
              backgroundColor: "#10265ddc",
              boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <FaGolang
              style={{ width: "60%", height: "5rem", color: "#FFC300" }}
            />
          </Card>

          <Card
            raised
            className="item"
            style={{
              backgroundColor: "#10265ddc",
              boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <SiTypescript
              style={{
                width: "60%",
                height: "5rem",
                backgroundColor: "#FFFFFF",
                color: "#007ACC",
              }}
            />
          </Card>

          <Card
            raised
            className="item"
            style={{
              backgroundColor: "#10265ddc",
              boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <SiSolidity
              style={{
                width: "60%",
                height: "5rem",
                backgroundColor: "#FFFFFF",
                color: "#007ACC",
              }}
            />
          </Card>
          <Card
            raised
            className="item"
            style={{
              backgroundColor: "#10265ddc",
              boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <SiHtml5
              style={{
                width: "60%",
                height: "5rem",

                color: "#E34F26",
              }}
            />
            
          </Card>
          <Card
            raised
            className="item"
            style={{
              backgroundColor: "#10265ddc",
              boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <SiSupabase
              style={{
                width: "60%",
                height: "5rem",

                color: "#E34F26",
              }}
            />
            
          </Card>
          <Card
            raised
            className="item"
            style={{
              backgroundColor: "#10265ddc",
              boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <SiCss3
              style={{ width: "60%", height: "5rem", color: "#1572B6" }}
            />
          </Card>

          <Card
            raised
            className="item"
            style={{
              backgroundColor: "#10265ddc",
              boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <DiReact
              style={{ width: "60%", height: "5rem", color: "#61DBFB" }}
            />
          </Card>

         
          

          <Card
            raised
            className="item"
            style={{
              backgroundColor: "#10265ddc",
              boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <DiNodejs
              style={{ width: "60%", height: "5rem", color: "green" }}
            />
          </Card>

          <Card
            raised
            className="item"
            style={{
              backgroundColor: "#10265ddc",
              boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <DiMongodb
              style={{ width: "60%", height: "5rem", color: "green" }}
            />
          </Card>
          
        </Card.Group>
      </div>
    </div>
  );
};




export default TechStack; 
