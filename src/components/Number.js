import React, { Component } from "react";
import { Card, Icon, Typography } from "antd";

const { Text } = Typography;

class Number extends Component {
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
            <h1 style={{ color: "black", fontSize: "3vw" }}>Number</h1>
            <ul>
              <li style={{ fontSize: "2.1vw", fontWeight: "bold" }}>
                Integers
              </li>
              <li style={{ fontSize: "2.1vw", fontWeight: "bold" }}>
                Decimals
              </li>
              <li style={{ fontSize: "2.1vw", fontWeight: "bold" }}>
                Operations (+, -, *, /, %, PEMDAS)
              </li>
              <div
                style={{
                  marginTop: "2vh",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
              >
                <Text code style={{ fontSize: "1vw" }}>
                  console.log(10 + 15 * 4);
                </Text>
                <Text code style={{ fontSize: "1vw" }}>
                  >> 70
                </Text>
                <Text code style={{ fontSize: "1vw" }}>
                  console.log((10 + 15) * 4);
                </Text>
                <Text code style={{ fontSize: "1vw" }}>
                  >> 100
                </Text>

                <div style={{ fontSize: "1vw" }}>
                  Try each of these operations on your own.
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

export default Number;
