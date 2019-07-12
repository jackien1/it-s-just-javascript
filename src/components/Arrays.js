import React, { Component } from "react";
import { Card, Icon, Typography } from "antd";

const { Text } = Typography;

class Arrays extends Component {
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
            <h1 style={{ color: "black", fontSize: "3vw" }}>Arrays</h1>
            <ul style={{ display: "flex", flexDirection: "column" }}>
              <li style={{ fontSize: "1.2vw", fontWeight: "bold" }}>
                Data type for storing sequences of values (same type)
              </li>
              <Text code style={{ fontSize: "1.2vw" }}>
                var list = ["jackie", "joey", "god"];
              </Text>
              <li style={{ fontSize: "1.2vw", fontWeight: "bold" }}>
                Access values using a bracket (arrays start at 0).
              </li>
              <Text code style={{ fontSize: "1.2vw" }}>
                console.log(list[2]);
              </Text>
              <Text code style={{ fontSize: "1.2vw" }}>
                >> 2
              </Text>
              <li style={{ fontSize: "1.2vw", fontWeight: "bold" }}>
                .length gives you the length of an array.
              </li>
              <Text code style={{ fontSize: "1.2vw" }}>
                console.log(list.length);
              </Text>
              <Text code style={{ fontSize: "1.2vw" }}>
                >> 3
              </Text>
              <li style={{ fontSize: "1.2vw", fontWeight: "bold" }}>
                Modify arrays with .push .pop or just assignment
              </li>
            </ul>

            <Typography style={{ fontSize: "1.2vw" }}>
              Make an array of everyone in the class. Then use a for loop to
              print them out.
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

export default Arrays;
