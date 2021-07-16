import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import data from "../../resume.json";
import { ListStyle as List } from "../List/List.styled";
import { BarStyle as Bar, Percentage } from "../Bar/Bar.styled";

const Skills = () => (
  <div>
    <h2>My Skills</h2>
    <List direction="row" type="skills">
      {data.skills.map((value, key) => (
        <li key={key}>
          <Bar>
            <FontAwesomeIcon icon={value.icon} />
            <span>{value.skill}</span>
            <Percentage percentage={value.percentage} />
          </Bar>
        </li>
      ))}
    </List>
  </div>
);

export default Skills;
