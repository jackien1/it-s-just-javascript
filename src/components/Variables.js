import React, { Component } from "react";
import { Card, Icon, Typography } from "antd";

const { Text } = Typography;

class Variables extends Component {
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
            <h1 style={{ color: "black", fontSize: "3vw" }}>Variables</h1>
            <ul style={{ display: "flex", flexDirection: "column" }}>
              <li style={{ fontSize: "2.1vw", fontWeight: "bold" }}>
                Keeps track of internal state
              </li>
              <li style={{ fontSize: "2.1vw", fontWeight: "bold" }}>
                Use var with = for definition
              </li>
              <Text code style={{ fontSize: "1.2vw" }}>
                var joey = "I like to run.";
              </Text>
              <li style={{ fontSize: "2.1vw", fontWeight: "bold" }}>
                Variables can be used as expressions
              </li>
              <Text code style={{ fontSize: "1.2vw" }}>
                var joey = "I like to run.";
              </Text>
              <Text code style={{ fontSize: "1.2vw" }}>
                console.log(joey);
              </Text>
              <Text code style={{ fontSize: "1.2vw" }}>
                >> "I like to run."
              </Text>
              <li style={{ fontSize: "2.1vw", fontWeight: "bold" }}>
                You can reassign variables
              </li>
              <Text code style={{ fontSize: "1.2vw" }}>
                var joey = "I like to run.";
              </Text>
              <Text code style={{ fontSize: "1.2vw" }}>
                joey = 100;
              </Text>
              <Text code style={{ fontSize: "1.2vw" }}>
                console.log(joey);
              </Text>
              <Text code style={{ fontSize: "1.2vw" }}>
                >> 100
              </Text>
              <div
                style={{
                  marginTop: "2vh",
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "1.2vw"
                }}
              >
                Create two number variables, multiply them, and console.log them
                out
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

export default Variables;
