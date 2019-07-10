import React, { Component } from "react";
import { Card, Icon, Typography } from "antd";

const { Text } = Typography;

class TextTags extends Component {
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
            <h1 style={{ color: "black", fontSize: "3.5vw" }}>Text Tags</h1>
            <ul style={{ display: "flex", flexDirection: "column" }}>
              <li style={{ fontSize: "2.4vw", fontWeight: "bold" }}>
                h1 (heading)
              </li>
              <Text code style={{ fontSize: "1.5vw" }}>
                {"<h1> </h1>"}
              </Text>
              <li style={{ fontSize: "2.4vw", fontWeight: "bold" }}>
                p (paragraph)
              </li>
              <Text code style={{ fontSize: "1.5vw" }}>
                {"<p> </p>"}
              </Text>
              <li code style={{ fontSize: "2.4vw", fontWeight: "bold" }}>
                Write your name in a header and a description in the paragraph
                tag.
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

export default TextTags;
