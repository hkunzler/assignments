import React from "react";
import Buttons from './Buttons.js'
import "./style.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      color1: "white",
      color2: "black",
      color3: "black",
      color4: "white"
    };
  }

  handleChangeColor = () => {
    const colors = ["black", "white"];
    const currentColor1 = colors[Math.floor(Math.random() * colors.length)];
    const currentColor2 = colors[Math.floor(Math.random() * colors.length)];
    const currentColor3 = colors[Math.floor(Math.random() * colors.length)];
    const currentColor4 = colors[Math.floor(Math.random() * colors.length)];

    this.setState({
      color1: currentColor1,
      color2: currentColor2,
      color3: currentColor3,
      color4: currentColor4
    });

  };
  handleChangeColorPurple = () => {
    this.setState({
      color1: "purple",
      color4: "purple"
    });
  };
  handleChangeColorPurple = () => {
    this.setState(prevState => {
      return {
        color1: prevState.color1 === "white" ? "purple" : "white",
        color4: prevState.color4 === "white" ? "purple" : "white"
      }
    });
  };
  handleChangeColorBlue1 = () => {
    this.setState({
      color2: "blue"
    });
  };
  handleChangeColorBlue2 = () => {
    this.setState({
      color3: "blue"
    });
  };
  handleChangeColor1 = () => {
    const colors = [
      "red",
      "blue",
      "green",
      "yellow",
      "pink",
      "purple",
      "blueviolet",
      "chartreuse",
      "hotpink",
      "fuchsia"
    ];
    const currentColor = colors[Math.floor(Math.random() * colors.length)];
    this.setState({
      color1: currentColor
    });
  };
  handleChangeColor2 = () => {
    const colors = [
      "red",
      "blue",
      "green",
      "yellow",
      "pink",
      "purple",
      "blueviolet",
      "chartreuse",
      "hotpink",
      "fuchsia"
    ];
    const currentColor = colors[Math.floor(Math.random() * colors.length)];
    this.setState({
      color2: currentColor
    });
  };
  handleChangeColor3 = () => {
    const colors = [
      "red",
      "blue",
      "green",
      "yellow",
      "pink",
      "purple",
      "blueviolet",
      "chartreuse",
      "hotpink",
      "fuchsia"
    ];
    const currentColor = colors[Math.floor(Math.random() * colors.length)];
    this.setState({
      color3: currentColor
    });
  };
  handleChangeColor4 = () => {
    const colors = [
      "red",
      "blue",
      "green",
      "yellow",
      "pink",
      "purple",
      "blueviolet",
      "chartreuse",
      "hotpink",
      "fuchsia"
    ];
    const currentColor = colors[Math.floor(Math.random() * colors.length)];
    this.setState({
      color4: currentColor
    });
  };
  render() {
    return (
      <div>
        <div className="flex-container">
          <div className="box" style={{ backgroundColor: this.state.color1 }}>
            Box1
          </div>
          <div className="box" style={{ backgroundColor: this.state.color2 }}>
            Box2
          </div>
        </div>
        <div className="flex-container">
          <div className="box" style={{ backgroundColor: this.state.color3 }}>
            Box3
          </div>
          <div className="box" style={{ backgroundColor: this.state.color4 }}>
            Box4
          </div>
        </div>
            <div className="buttons">
                <Buttons
                    handleChangeColor={this.handleChangeColor}
                    handleChangeColorPurple={this.handleChangeColorPurple}
                    handleChangeColorBlue1={this.handleChangeColorBlue1}
                    handleChangeColorBlue2={this.handleChangeColorBlue2}
                    handleChangeColor1={this.handleChangeColor1}
                    handleChangeColor2={this.handleChangeColor2}
                    handleChangeColor3={this.handleChangeColor3}
                    handleChangeColor4={this.handleChangeColor4}
                    />
        </div>
      </div>
    );
  }
}
export default App;
