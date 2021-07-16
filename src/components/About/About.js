import React from "react";

import { PhotoStyle as Photo } from "../Photo/Photo.styled";
import { Wrapper } from "./About.styled";
import profilePic from "../../img/foto-Amenta-Fabio.jpg";
import data from "../../resume.json";

const About = () => (
  <Wrapper>
    <Photo>
      <img src={profilePic} alt={data.name + " " + data.surname} />
    </Photo>
    <div>
      <p>{data.description}</p>
    </div>
  </Wrapper>
);

export default About;
