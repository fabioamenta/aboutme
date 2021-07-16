import React from "react";

import data from "../../resume.json";
import { ListStyle as List } from "../List/List.styled";
import { ListStyle as Timeline } from "../List/List.styled";

const Experience = () => (
  <div>
    <h2>Experiences</h2>
    <Timeline direction="column" type="timeline">
      {data.experiences.map((value, key) => (
        <li key={key}>
          <div className="timeline-wrapper">
            <span className="date">
              {value.from} - {value.to}
            </span>
            <div className="timeline-content">
              <h3 className="title">{value.agency}</h3>
              <p className="description">{value.description}</p>
              <List direction="row" className="content-skills">
                {value.tools.map((tool, id) => (
                  <li key={id} className="tag">
                    {tool}
                  </li>
                ))}
              </List>
            </div>
          </div>
        </li>
      ))}
    </Timeline>
  </div>
);

export default Experience;
