import React, { Component } from "react";
import { Card, Icon, Typography } from "antd";

const { Text } = Typography;

class AddingCSS extends Component {
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
            <h1 style={{ color: "black", fontSize: "3.5vw" }}>Adding Styles</h1>
            <ul style={{ display: "flex", flexDirection: "column" }}>
              <li style={{ fontSize: "2.4vw", fontWeight: "bold" }}>
                selector, attributes, and values
              </li>
              <Text code style={{ fontSize: "1.5vw" }}>
                {"img {"}
              </Text>
              <Text code style={{ fontSize: "1.5vw" }}>
                {"width: 200px;"}
              </Text>
              <Text code style={{ fontSize: "1.5vw" }}>
                {"}"}
              </Text>
              <li style={{ fontSize: "2.4vw", fontWeight: "bold" }}>
                Centering text, adding different fonts, and changing colors
              </li>
              <Text code style={{ fontSize: "1.5vw" }}>
                {"body {"}
              </Text>
              <Text code style={{ fontSize: "1.5vw" }}>
                text-align: center;
              </Text>
              <Text code style={{ fontSize: "1.5vw" }}>
                font-family: "Arial";
              </Text>
              <Text code style={{ fontSize: "1.5vw" }}>
                background: azure;
              </Text>
              <Text code style={{ fontSize: "1.5vw" }}>
                color: purple;
              </Text>
              <Text code style={{ fontSize: "1.5vw" }}>
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

export default AddingCSS;
