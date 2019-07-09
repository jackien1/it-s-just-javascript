import React, { Component } from "react";
import { Card, Icon, Typography } from "antd";

const { Text } = Typography;

class Boolean extends Component {
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
            <h1 style={{ color: "black", fontSize: "4vw" }}>Boolean</h1>
            <ul style={{ display: "flex", flexDirection: "column" }}>
              <li style={{ fontSize: "2vw", fontWeight: "bold" }}>
                Either true or false (1 or 0)
              </li>
              <li style={{ fontSize: "2vw", fontWeight: "bold" }}>
                {"Comparisons (>, <, <=, >=, ==, !=)"}
              </li>
              <Text code style={{ fontSize: "1.5vw" }}>
                console.log(2 > 1);
              </Text>
              <Text code style={{ fontSize: "1.5vw" }}>
                >> true
              </Text>
              <li style={{ fontSize: "2vw", fontWeight: "bold" }}>
                Logical Operators (&&, ||, !)
              </li>
              <Text code style={{ fontSize: "1.5vw" }}>
                console.log(true && false);
              </Text>
              <Text code style={{ fontSize: "1.5vw" }}>
                >> false
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
                  What is the output of this statement?
                </div>
                <Text code style={{ fontSize: "1.5vw" }}>
                  console.log(1 + 1 == 2 && 10 * 10 > 50)
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

export default Boolean;
