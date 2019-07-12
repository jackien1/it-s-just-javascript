import React, { Component } from "react";
import { Card, Icon, Typography } from "antd";

const { Text } = Typography;

class Review extends Component {
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
            <h1 style={{ color: "black", fontSize: "3.5vw" }}>Review 🖥</h1>
            <Typography style={{ fontSize: "2.1vw" }}>
              What we have covered:
            </Typography>

            <ul style={{ display: "flex", flexDirection: "column" }}>
              <li style={{ fontSize: "1.2vw", fontWeight: "bold" }}>Numbers</li>
              <li style={{ fontSize: "1.2vw", fontWeight: "bold" }}>Strings</li>
              <li style={{ fontSize: "1.2vw", fontWeight: "bold" }}>
                Booleans
              </li>
              <li style={{ fontSize: "1.2vw", fontWeight: "bold" }}>
                Undefined
              </li>
              <li style={{ fontSize: "1.2vw", fontWeight: "bold" }}>
                Variables
              </li>
              <li style={{ fontSize: "1.2vw", fontWeight: "bold" }}>
                Functions
              </li>
              <li style={{ fontSize: "1.2vw", fontWeight: "bold" }}>
                If Statements
              </li>
              <li style={{ fontSize: "1.2vw", fontWeight: "bold" }}>
                While and For Loops
              </li>
              <li style={{ fontSize: "1.2vw", fontWeight: "bold" }}>Switch</li>
              <li style={{ fontSize: "1.2vw", fontWeight: "bold" }}>HTML</li>
              <li style={{ fontSize: "1.2vw", fontWeight: "bold" }}>CSS</li>
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

export default Review;
