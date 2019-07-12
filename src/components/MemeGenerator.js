import React, { Component } from "react";
import { Card, Icon, Typography } from "antd";

const { Text } = Typography;

class HTMLJS extends Component {
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
            <h1 style={{ color: "black", fontSize: "3vw" }}>Meme Generator</h1>
            <ul style={{ display: "flex", flexDirection: "column" }}>
              <li style={{ fontSize: "1.2vw", fontWeight: "bold" }}>
                We are using axios a package to request links (REST)
              </li>
              <li style={{ fontSize: "1.2vw", fontWeight: "bold" }}>
                Imgflip returns a list of meme links. Grab a random one.
              </li>
              <li style={{ fontSize: "1.2vw", fontWeight: "bold" }}>
                Use getElementById to replace image
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

export default HTMLJS;
