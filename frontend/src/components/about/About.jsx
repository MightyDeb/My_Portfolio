import { Typography } from "@mui/material";
import React from "react";
import "./About.css";

const About = ({ about }) => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>This is a simple quote</Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img src="https://im.rediff.com/cricket/2024/nov/25bumrah-head.jpg?w=670&h=900" alt="Debapriya" className="aboutAvatar" />

          <Typography
            variant="h4"
            style={{ margin: "1vmax 0", color: "black" }}
          >
            Debapriya Maity
          </Typography>

          <Typography>Full-stack developer</Typography>

          <Typography style={{ margin: "1vmax 0", textAlign: "center" }}>
            Hola amigo! Kaise ho thik ho?
          </Typography>
        </div>

        <div>
          <Typography
            style={{
              wordSpacing: "5px",
              lineHeight: "50px",
              letterSpacing: "5px",
              textAlign: "right",
            }}
          >
            IIT BHU
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;