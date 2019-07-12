import React, { Component } from "react";
import { Card, Icon, Typography } from "antd";
import Index from "../src/components/Index";
import Programming from "../src/components/Programming";
import JavaScript from "../src/components/JavaScript";
import Why from "../src/components/Why";
import HelloWorld from "../src/components/HelloWorld";
import Types from "../src/components/Types";
import Number from "../src/components/Number";
import String from "../src/components/String";
import Boolean from "../src/components/Boolean";
import Undefined from "../src/components/Undefined";
import Variables from "../src/components/Variables";
import BasicFunctions from "../src/components/BasicFunctions";
import If from "../src/components/If";
import Loops from "../src/components/Loops";
import For from "../src/components/For";
import Switch from "../src/components/Switch";
import Exercises from "../src/components/Exercises";
import AdvancedFunctions from "../src/components/AdvancedFunctions";
import Project from "../src/components/Project";
import HTMLIntro from "../src/components/HTMLIntro";
import BasicTags from "../src/components/BasicTags";
import TextTags from "../src/components/TextTags";
import ImageTags from "../src/components/ImageTags";
import CSS from "../src/components/CSS";
import ConnectingCSS from "../src/components/ConnectingCSS";
import AddingCSS from "../src/components/AddingCSS";
import Publish from "../src/components/Publish";
import Review from "../src/components/Review";
import ReviewExercises from "../src/components/ReviewExercises";
import Arrays from "../src/components/Arrays";
import Objects from "../src/components/Objects";
import HTMLJS from "../src/components/HTMLJS";
import NewTags from "../src/components/NewTags";
import MemeGenerator from "../src/components/MemeGenerator";

const { Text } = Typography;

class App extends Component {
  state = {
    index: 0
  };

  addIndex = () => {
    this.setState({ index: this.state.index + 1 });
  };

  removeIndex = () => {
    this.setState({ index: this.state.index - 1 });
  };

  renderPresentation = () => {
    switch (this.state.index) {
      case 0:
        return <Index add={this.addIndex} />;
        break;

      case 1:
        return <Programming add={this.addIndex} remove={this.removeIndex} />;
        break;

      case 2:
        return <JavaScript add={this.addIndex} remove={this.removeIndex} />;
        break;

      case 3:
        return <Why add={this.addIndex} remove={this.removeIndex} />;
        break;

      case 4:
        return <HelloWorld add={this.addIndex} remove={this.removeIndex} />;
        break;

      case 5:
        return <Types add={this.addIndex} remove={this.removeIndex} />;
        break;

      case 6:
        return <Number add={this.addIndex} remove={this.removeIndex} />;
        break;

      case 7:
        return <String add={this.addIndex} remove={this.removeIndex} />;
        break;

      case 8:
        return <Boolean add={this.addIndex} remove={this.removeIndex} />;
        break;

      case 9:
        return <Undefined add={this.addIndex} remove={this.removeIndex} />;
        break;

      case 10:
        return <Variables add={this.addIndex} remove={this.removeIndex} />;
        break;

      case 11:
        return <BasicFunctions add={this.addIndex} remove={this.removeIndex} />;
        break;

      case 12:
        return <If add={this.addIndex} remove={this.removeIndex} />;
        break;

      case 13:
        return <Loops add={this.addIndex} remove={this.removeIndex} />;
        break;

      case 14:
        return <For add={this.addIndex} remove={this.removeIndex} />;
        break;

      case 15:
        return <Switch add={this.addIndex} remove={this.removeIndex} />;
        break;

      case 16:
        return <Exercises add={this.addIndex} remove={this.removeIndex} />;
        break;

      case 17:
        return (
          <AdvancedFunctions add={this.addIndex} remove={this.removeIndex} />
        );
        break;

      case 18:
        return <Project add={this.addIndex} remove={this.removeIndex} />;
        break;

      case 19:
        return <HTMLIntro add={this.addIndex} remove={this.removeIndex} />;
        break;

      case 20:
        return <BasicTags add={this.addIndex} remove={this.removeIndex} />;
        break;

      case 21:
        return <TextTags add={this.addIndex} remove={this.removeIndex} />;
        break;

      case 22:
        return <ImageTags add={this.addIndex} remove={this.removeIndex} />;
        break;

      case 23:
        return <CSS add={this.addIndex} remove={this.removeIndex} />;
        break;

      case 24:
        return <ConnectingCSS add={this.addIndex} remove={this.removeIndex} />;
        break;

      case 25:
        return <AddingCSS add={this.addIndex} remove={this.removeIndex} />;
        break;

      case 26:
        return <Publish add={this.addIndex} remove={this.removeIndex} />;
        break;

      case 27:
        return <Review add={this.addIndex} remove={this.removeIndex} />;
        break;

      case 28:
        return (
          <ReviewExercises add={this.addIndex} remove={this.removeIndex} />
        );
        break;

      case 29:
        return <Arrays add={this.addIndex} remove={this.removeIndex} />;
        break;

      case 30:
        return <Objects add={this.addIndex} remove={this.removeIndex} />;
        break;

      case 31:
        return <HTMLJS add={this.addIndex} remove={this.removeIndex} />;
        break;

      case 32:
        return <NewTags add={this.addIndex} remove={this.removeIndex} />;
        break;

      case 33:
        return <MemeGenerator add={this.addIndex} remove={this.removeIndex} />;
        break;

      default:
        return (
          <div
            style={{
              height: "100vh",
              width: "100wv",
              display: "flex",
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Card
              style={{
                backgroundColor: "white",
                width: "80vw",
                height: "80vh"
              }}
              bodyStyle={{
                display: "flex",
                flex: 1,
                height: "100%",
                flexDirection: "column"
              }}
            >
              <div
                style={{
                  display: "flex",
                  height: "100%",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <h1 style={{ color: "black", fontSize: "4vw" }}>
                  Any Questions?
                </h1>
              </div>

              <div
                style={{
                  display: "flex",
                  flex: 1,
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "flex-end"
                }}
              >
                <Icon
                  type="left"
                  style={{ fontSize: "1.2vw" }}
                  onClick={this.removeIndex}
                />
              </div>
            </Card>
          </div>
        );
    }
  };

  render() {
    return this.renderPresentation();
  }
}

export default App;
