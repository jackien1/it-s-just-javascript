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
                width: "60vw",
                height: "60vh"
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
                <h1 style={{ color: "black", fontSize: "2.4vw" }}>
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
