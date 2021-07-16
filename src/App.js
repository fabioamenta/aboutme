import React, { useState } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import data from "./resume.json";

import { Root } from "./components/Root/App.styled";
import { Header } from "./components/Header/Header.styled";
import Navbar from "./components/Navbar/Navbar";
import MenuButton from "./components/Menu/MenuButton";
import {
  MainStyle as Main,
  ContentWrapper,
} from "./components/Main/Main.styled";
import { ListStyle as List } from "./components/List/List.styled";
import { ContactInfo } from "./components/Contact/Contact.styled";

import About from "./components/About/About";
import Experiences from "./components/Experiences/Experiences";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faHtml5,
  faCss3,
  faSass,
  faLess,
  faJs,
  faReact,
  faGithub,
  faBootstrap,
  faWordpressSimple,
  faDrupal,
  faPhp,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(
  faHtml5,
  faCss3,
  faSass,
  faLess,
  faJs,
  faReact,
  faGithub,
  faBootstrap,
  faWordpressSimple,
  faDrupal,
  faPhp,
  faLinkedin
);

const routes = [
  { path: "/", name: "About", Component: About },
  { path: "/experiences", name: "Experiences", Component: Experiences },
  { path: "/education", name: "Education", Component: Education },
  { path: "/skills", name: "Skills", Component: Skills },
  { path: "/contact", name: "Contact me", Component: Contact },
];

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <BrowserRouter>
      <Root>
        <Header>
          <MenuButton open={open} setOpen={setOpen} />
          <h1>
            {data.name}&nbsp;{data.surname}
          </h1>
          <ContactInfo>
            <List direction="column">
              <li>
                <a href="https://github.com/fabioamenta/" target="_blank">
                  <FontAwesomeIcon icon={["fab", "github"]} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/fabioamenta/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={["fab", "linkedin"]} />
                </a>
              </li>
            </List>
          </ContactInfo>
        </Header>

        <Navbar open={open} setOpen={setOpen} />

        <Main>
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames="content"
                  unmountOnExit
                >
                  <ContentWrapper className="content">
                    <Component />
                  </ContentWrapper>
                </CSSTransition>
              )}
            </Route>
          ))}
        </Main>
      </Root>
    </BrowserRouter>
  );
};

export default App;
