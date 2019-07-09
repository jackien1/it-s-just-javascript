import React, { Component } from "react";
import { Card, Icon, Typography } from "antd";

const { Text } = Typography;

class Loops extends Component {
  render() {
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
            <h1 style={{ color: "black", fontSize: "3.5vw" }}>
              While and do Loops
            </h1>
            <ul style={{ display: "flex", flexDirection: "column" }}>
              <li style={{ fontSize: "2vw", fontWeight: "bold" }}>
                The body of a while loop continues until the boolean is false
              </li>
              <Text code style={{ fontSize: "1.2vw" }}>
                var joeyBobaLevels = 1;
              </Text>
              <Text code style={{ fontSize: "1.2vw" }}>
                {"while (joeyBobaLevels <= 10) {"}
              </Text>
              <Text code style={{ fontSize: "1.2vw" }}>
                console.log(joeyBobaLevels); joeyBobaLevels++;
              </Text>
              <Text code style={{ fontSize: "1.2vw" }}>
                }
              </Text>
              <Text code style={{ fontSize: "1.2vw" }}>
                >> 1
              </Text>
              <Text code style={{ fontSize: "1.2vw" }}>
                >> ...10
              </Text>
              <li style={{ fontSize: "2vw", fontWeight: "bold" }}>
                a do loop first executes its body and then checks the boolean
                value
              </li>
              <Text code style={{ fontSize: "1.2vw" }}>
                {"do {"}
              </Text>
              <Text code style={{ fontSize: "1.2vw" }}>
                var joeySecret = prompt("What is his secret?");
              </Text>
              <Text code style={{ fontSize: "1.2vw" }}>
                } while (joeySecret != "he watches My Little Ponu")
              </Text>
              <Text code style={{ fontSize: "1.2vw" }}>
                console.log("You guessed successfully!");
              </Text>
            </ul>
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
              onClick={this.props.remove}
            />
            <Icon
              type="right"
              style={{ fontSize: "1.2vw" }}
              onClick={this.props.add}
            />
          </div>
        </Card>
      </div>
    );
  }
}

export default Loops;
