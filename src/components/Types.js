import React, { Component } from "react";
import { Card, Icon } from "antd";

class Types extends Component {
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
            <h1 style={{ color: "black", fontSize: "4vw" }}>
              The 6 Basic Types of Values
            </h1>
            <ul>
              <li style={{ fontSize: "3.1vw", fontWeight: "bold" }}>Numbers</li>
              <li style={{ fontSize: "3.1vw", fontWeight: "bold" }}>Strings</li>
              <li style={{ fontSize: "3.1vw", fontWeight: "bold" }}>
                Booleans
              </li>
              <li style={{ fontSize: "3.1vw" }}>Functions</li>
              <li style={{ fontSize: "3.1vw" }}>Objects</li>
              <li style={{ fontSize: "3.1vw", fontWeight: "bold" }}>
                Undefined Values
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

export default Types;
