import React, { Component } from "react";
import { Card, Icon, Typography } from "antd";

const { Text } = Typography;

class NewTags extends Component {
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
            <h1 style={{ color: "black", fontSize: "3vw" }}>New Tags</h1>
            <ul style={{ display: "flex", flexDirection: "column" }}>
              <li style={{ fontSize: "1.2vw", fontWeight: "bold" }}>
                {"<button /> tag"}
              </li>
              <Text code style={{ fontSize: "1.2vw" }}>
                {'<button onclick="myFunction()">Try it</button>'}
              </Text>
              <li style={{ fontSize: "1.2vw", fontWeight: "bold" }}>
                {"<input /> tag"}
              </li>
              <Text code style={{ fontSize: "1.2vw" }}>
                {'<input type="text" id="myText" value="Some text...">'}
              </Text>
            </ul>

            <Typography style={{ fontSize: "1.2vw" }}>
              Try to make a guessing game now.
            </Typography>
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

export default NewTags;
