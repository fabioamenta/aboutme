import React from "react";

import data from "../../resume.json";
import { ListStyle as Timeline } from "../List/List.styled";

const Education = () => (
  <div>
    <h2>Training</h2>
    <Timeline direction="column" type="timeline">
      {data.training.map((value, key) => (
        <li key={key}>
          <div className="timeline-wrapper">
            <span className="date">{value.date}</span>
            <div className="timeline-content">
              <h3 className="title">
                <span>{value.name}</span>
              </h3>
              <p className="description">{value.course}</p>
              <p className="tag">{value.certificate}</p>
            </div>
          </div>
        </li>
      ))}
    </Timeline>
  </div>
);

export default Education;
