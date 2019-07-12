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
            <h1 style={{ color: "black", fontSize: "3vw" }}>
              HTML with JavaScript
            </h1>
            <ul style={{ display: "flex", flexDirection: "column" }}>
              <li style={{ fontSize: "1.2vw", fontWeight: "bold" }}>
                Use getElementById to change text
              </li>
              <Text code style={{ fontSize: "1.2vw" }}>
                document.getElementById("demo").innerHTML = "Something"
              </Text>
              <li style={{ fontSize: "1.2vw", fontWeight: "bold" }}>
                onclick helps change text when something is clicked
              </li>
              <Text code style={{ fontSize: "1.2vw" }}>
                onclick="changeText(this)"
              </Text>
              <Text code style={{ fontSize: "1.2vw" }}>
                {"function changeText(id) {"}
              </Text>
              <Text code style={{ fontSize: "1.2vw" }}>
                id.innerHTML = "Ooops!";
              </Text>
              <Text code style={{ fontSize: "1.2vw" }}>
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

export default HTMLJS;
