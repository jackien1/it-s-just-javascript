import React, { Component } from "react";
import { Card, Icon, Typography } from "antd";

const { Text } = Typography;

class ConnectingCSS extends Component {
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
              Connecting CSS
            </h1>
            <ul style={{ display: "flex", flexDirection: "column" }}>
              <li style={{ fontSize: "2.4vw", fontWeight: "bold" }}>
                {"<link /> tag"}
              </li>
              <Text code style={{ fontSize: "1.5vw" }}>
                {'<link rel="stylesheet" href="style.css" />'}
              </Text>
              <li style={{ fontSize: "2.4vw", fontWeight: "bold" }}>
                {"Add the tag to <head> </head>"}
              </li>
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

export default ConnectingCSS;
