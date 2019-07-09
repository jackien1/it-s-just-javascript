import React, { Component } from "react";
import { Card, Icon, Typography } from "antd";

const { Text } = Typography;

class AdvancedFunctions extends Component {
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
              Functions (Advanced Edition)
            </h1>
            <ul style={{ display: "flex", flexDirection: "column" }}>
              <li style={{ fontSize: "1vw", fontWeight: "bold" }}>
                Helps define new vocabulary.
              </li>
              <li style={{ fontSize: "1vw", fontWeight: "bold" }}>
                Example of a function definition.
              </li>
              <Text code style={{ fontSize: "1vw" }}>
                {"var eat = function(x) {"}
              </Text>
              <Text code style={{ fontSize: "1vw" }}>
                console.log("Yum!");
              </Text>
              <Text code style={{ fontSize: "1vw" }}>
                };
              </Text>
              <Text code style={{ fontSize: "1vw" }}>
                eat();
              </Text>
              <Text code style={{ fontSize: "1vw" }}>
                >> "Yum!"
              </Text>
              <li style={{ fontSize: "1vw", fontWeight: "bold" }}>
                Parameters are like regular variables but its value comes from
                the caller of the function. They are local to the function
                (lexical scoping).
              </li>
              <Text code style={{ fontSize: "1vw" }}>
                {"var addOne = function(a) {"}
              </Text>
              <Text code style={{ fontSize: "1vw" }}>
                console.log(a);
              </Text>
              <Text code style={{ fontSize: "1vw" }}>
                {"};"}
              </Text>
              <Text code style={{ fontSize: "1vw" }}>
                addOne(5);
              </Text>
              <Text code style={{ fontSize: "1vw" }}>
                console.log(a);
              </Text>
              <Text code style={{ fontSize: "1vw" }}>
                >> 5
              </Text>
              <Text code style={{ fontSize: "1vw" }}>
                >> undefined
              </Text>

              <li style={{ fontSize: "1vw", fontWeight: "bold" }}>
                Another way to write a function (function declaration). They
                differ by hoisting.
              </li>
              <Text code style={{ fontSize: "1vw" }}>
                {"function cube(x) {"}
              </Text>
              <Text code style={{ fontSize: "1vw" }}>
                return x * x * x;
              </Text>
              <Text code style={{ fontSize: "1vw" }}>
                }
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
              style={{ fontSize: "1vw" }}
              onClick={this.props.remove}
            />
            <Icon
              type="right"
              style={{ fontSize: "1vw" }}
              onClick={this.props.add}
            />
          </div>
        </Card>
      </div>
    );
  }
}

export default AdvancedFunctions;
