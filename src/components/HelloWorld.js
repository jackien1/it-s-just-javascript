import React, { Component } from "react";
import { Card, Icon, Typography } from "antd";

const { Text } = Typography;

class HelloWorld extends Component {
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
            <h1 style={{ color: "black", fontSize: "3vw" }}>Hello World</h1>
            <h1 style={{ color: "black", fontSize: "2.1vw" }}>
              Head over to &nbsp;
              <span style={{ color: "blue" }}>
                https://repl.it/languages/html
              </span>
            </h1>

            <Text code style={{ fontSize: "1vw" }}>
              console.log("Hello Sage Hill");
            </Text>
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

export default HelloWorld;
