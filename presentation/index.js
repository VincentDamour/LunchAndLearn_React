// Import React
import React from "react";
import "../styles/app.css";

// Import Spectacle Core tags
import {
  Appear,
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  CodePane
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quaternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const backgroundSlideImage = "https://vincentdamour.github.io/LunchAndLearn_React/background-slide.png";

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary" bgImage="https://vincentdamour.github.io/LunchAndLearn_React/background.jpg">
          <h1 class="vectro">
            <span class="vectro-body">REACT</span>
            <span class="vectro-red">I</span>
            <span class="vectro-green">I</span>
            <span class="vectro-blue">I</span>
            </h1>
        </Slide>
        <Slide transition={["fade"]} bgImage={backgroundSlideImage}>
          <Heading size={1} textColor="primary" caps>Composante</Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/composante.example")}
            margin="20px auto"
            textSize="0.7em"/>
        </Slide>
        <Slide transition={["fade"]} bgImage={backgroundSlideImage}>
          <Heading size={1} textColor="primary" caps>SFC</Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/sfc.example")}
            margin="20px auto"
            textSize="0.7em"/>
        </Slide>
        <Slide transition={["fade"]} bgImage={backgroundSlideImage}>
          <Heading size={1} textColor="primary" caps>Props</Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/props.example")}
            margin="20px auto"
            textSize="0.7em"/>
        </Slide>
        <Slide transition={["fade"]} bgImage={backgroundSlideImage}>
          <Heading size={1} textColor="primary" caps>DefaultProps</Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/defaultprops.example")}
            margin="20px auto"
            textSize="0.7em"/>
        </Slide>
        <Slide transition={["fade"]} bgImage={backgroundSlideImage}>
          <Heading size={1} textColor="primary" caps>Proptypes</Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/proptypes.example")}
            margin="20px auto"
            textSize="0.7em"/>
        </Slide>
        <Slide transition={["fade"]} bgImage={backgroundSlideImage}>
          <Heading size={3} textColor="primary" caps>Proptypes (suite)</Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/proptypes2.example")}
            margin="20px auto"
            textSize="0.7em"/>
        </Slide>
        <Slide transition={["fade"]} bgImage={backgroundSlideImage}>
          <Heading size={1} textColor="primary" caps>State</Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/state.example")}
            margin="20px auto"
            textSize="0.7em"/>
        </Slide>
        <Slide transition={["fade"]} bgImage={backgroundSlideImage}>
          <Heading size={3} textColor="primary" caps>Lifecycle hooks</Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/lifecyclehooks.example")}
            margin="20px auto"
            textSize="0.7em"/>
        </Slide>
        <Slide transition={["fade"]} bgImage={backgroundSlideImage}>
          <Heading size={3} textColor="primary" caps>Bonnes Pratiques</Heading>
          <List>
            <Appear><ListItem textSize="1.25em" textColor="white">defaultProps, state avec toutes les props, etc.</ListItem></Appear>
            <Appear><ListItem textSize="1.25em" textColor="white">Ordre: static, constructor, hooks, handlers, getter, optionalRender, render</ListItem></Appear>
            <Appear><ListItem textSize="1.15em" textColor="white">Binding, re-render, mutation</ListItem></Appear>
            <Appear><ListItem textSize="1.15em" textColor="white">Airbnb</ListItem></Appear>
          </List>
        </Slide>
      </Deck>
    );
  }
}
