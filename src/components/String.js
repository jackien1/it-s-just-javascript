import React, { Component } from "react";
import { Card, Icon, Typography } from "antd";

const { Text } = Typography;

class String extends Component {
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
            <h1 style={{ color: "black", fontSize: "3vw" }}>String</h1>
            <ul style={{ display: "flex", flexDirection: "column" }}>
              <li style={{ fontSize: "2vw", fontWeight: "bold" }}>
                Single Quotes
              </li>
              <Text code style={{ fontSize: "1.5vw" }}>
                'Joey likes to run.'
              </Text>
              <li style={{ fontSize: "2vw", fontWeight: "bold" }}>
                Double Quotes
              </li>
              <Text code style={{ fontSize: "1.5vw" }}>
                "Joey likes to run."
              </Text>
              <li style={{ fontSize: "2vw", fontWeight: "bold" }}>
                Escape Sequences (\n, \t, \", \\)
              </li>

              <Text code style={{ fontSize: "1.5vw" }}>
                console.log("Joey likesn\nto run.");
              </Text>

              <Text code style={{ fontSize: "1.5vw" }}>
                >> Joey likes
              </Text>
              <Text code style={{ fontSize: "1.5vw" }}>
                >> to run
              </Text>

              <li style={{ fontSize: "2vw", fontWeight: "bold" }}>
                Concatenation
              </li>
              <Text code style={{ fontSize: "1.5vw" }}>
                "Joey" + "likes" + "to" + "run."
              </Text>

              <div
                style={{
                  marginTop: "2vh",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
              >
                <div style={{ fontSize: "1.5vw" }}>
                  Write "I am learning JavaScript" with the quotes and
                  concatenation.
                </div>
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

export default String;
