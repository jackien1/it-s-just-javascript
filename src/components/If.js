import React, { Component } from "react";
import { Card, Icon, Typography } from "antd";

const { Text } = Typography;

class If extends Component {
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
              Conditional Execution
            </h1>
            <ul style={{ display: "flex", flexDirection: "column" }}>
              <li style={{ fontSize: "2vw", fontWeight: "bold" }}>
                if - else statement
              </li>
              <Text code style={{ fontSize: "1.2vw" }}>
                var isJoeyAwake = false;
              </Text>
              <Text code style={{ fontSize: "1.2vw" }}>
                if (isJoeyAwake) console.log('Joey is given a lot of money.');
              </Text>
              <Text code style={{ fontSize: "1.2vw" }}>
                else console.log('Joey loses all his money.');
              </Text>
              <Text code style={{ fontSize: "1.2vw" }}>
                >> Joey loses all his money.
              </Text>
              <li style={{ fontSize: "2vw", fontWeight: "bold" }}>
                If/else pair chains
              </li>
              <Text code style={{ fontSize: "1.2vw" }}>
                var joeyPowerLevel = 9000;
              </Text>
              <Text code style={{ fontSize: "1.2vw" }}>
                {"if (joeyPowerLevel < 10) console.log('Joey is weak.');"}
              </Text>
              <Text code style={{ fontSize: "1.2vw" }}>
                {
                  "else if (joeyPowerLevel < 100) console.log('Joey is still weak.');"
                }
              </Text>
              <Text code style={{ fontSize: "1.2vw" }}>
                else console.log("The apocalypse is coming.");
              </Text>
              <Text code style={{ fontSize: "1.2vw" }}>
                >> The apocalypse is coming.
              </Text>
              <div
                style={{
                  marginTop: "2vh",
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "1.2vw"
                }}
              >
                Prompt the user for a number, then determine its size as either
                "small", "medium", or "large" using if/else pair chains.
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

export default If;
