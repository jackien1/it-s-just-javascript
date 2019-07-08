import React, { Component } from "react";
import { Card, Icon, Typography } from "antd";

const { Text } = Typography;

class BasicFunctions extends Component {
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
              Functions (basic edition)
            </h1>
            <ul style={{ display: "flex", flexDirection: "column" }}>
              <li style={{ fontSize: "1.4vw", fontWeight: "bold" }}>
                A piece of program wrapped in a value
              </li>
              <li style={{ fontSize: "1.4vw", fontWeight: "bold" }}>
                You can call a function by adding parentheses after a function
                expression
              </li>
              Try this
              <Text code style={{ fontSize: "0.8vw" }}>
                alert("Good morning!");
              </Text>
              <li style={{ fontSize: "1.4vw", fontWeight: "bold" }}>
                The log portion of console.log is a function
              </li>
              <li style={{ fontSize: "1.4vw", fontWeight: "bold" }}>
                Some functions return values (Math.min, Math.max)
              </li>
              <Text code style={{ fontSize: "0.8vw" }}>
                console.log(Math.max(0, 10));
              </Text>
              <Text code style={{ fontSize: "0.8vw" }}>
                >> 10
              </Text>
              <li style={{ fontSize: "1.4vw", fontWeight: "bold" }}>
                You can use the prompt function for browser input
              </li>
              <Text code style={{ fontSize: "0.8vw" }}>
                var name = prompt("What is your name, "");
              </Text>
              <Text code style={{ fontSize: "0.8vw" }}>
                console.log(name);
              </Text>
              <div
                style={{
                  marginTop: "2vh",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                Ask the user for a number (wrap prompt with Number), multiply it
                by 10, and return it.
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

export default BasicFunctions;
