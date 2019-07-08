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
              While and do Loops
            </h1>
            <ul style={{ display: "flex", flexDirection: "column" }}>
              <li style={{ fontSize: "1.4vw", fontWeight: "bold" }}>
                The body of a while loop continues until the boolean is false
              </li>
              <Text code style={{ fontSize: "0.8vw" }}>
                var joeyBobaLevels = 1;
              </Text>
              <Text code style={{ fontSize: "0.8vw" }}>
                {"while (joeyBobaLevels <= 10) {"}
              </Text>
              <Text code style={{ fontSize: "0.8vw" }}>
                console.log(joeyBobaLevels); joeyBobaLevels++;
              </Text>
              <Text code style={{ fontSize: "0.8vw" }}>
                }
              </Text>
              <Text code style={{ fontSize: "0.8vw" }}>
                >> 1
              </Text>
              <Text code style={{ fontSize: "0.8vw" }}>
                >> ...10
              </Text>
              <li style={{ fontSize: "1.4vw", fontWeight: "bold" }}>
                a do loop first executes its body and then checks the boolean
                value
              </li>
              <Text code style={{ fontSize: "0.8vw" }}>
                {"do {"}
              </Text>
              <Text code style={{ fontSize: "0.8vw" }}>
                var joeySecret = prompt("What is his secret?");
              </Text>
              <Text code style={{ fontSize: "0.8vw" }}>
                } while (joeySecret != "he watches My Little Ponu")
              </Text>
              <Text code style={{ fontSize: "0.8vw" }}>
                console.log("You guessed successfully!");
              </Text>
              <div
                style={{
                  marginTop: "2vh",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                Prompt users for their names. If they enter nothing, continue
                asking them.
              </div>
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
