import React, { Component } from "react";
import { Card, Icon, Typography } from "antd";

const { Text } = Typography;

class Undefined extends Component {
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
            <h1 style={{ color: "black", fontSize: "3vw" }}>Undefined</h1>
            <ul style={{ display: "flex", flexDirection: "column" }}>
              <li style={{ fontSize: "1.8vw", fontWeight: "bold" }}>
                Undefined and null are basically interchangeable
              </li>
              <li style={{ fontSize: "1.8vw", fontWeight: "bold" }}>
                Indicates the absence of a meaningful value
              </li>
              <div
                style={{
                  marginTop: "2vh",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <Text code style={{ fontSize: "1vw" }}>
                  console.log(null == undefined);
                </Text>
                <Text code style={{ fontSize: "1vw" }}>
                  >> true
                </Text>
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

export default Undefined;
