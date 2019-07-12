import React, { Component } from "react";
import { Card, Icon, Typography } from "antd";

const { Text } = Typography;

class Objects extends Component {
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
            <h1 style={{ color: "black", fontSize: "3vw" }}>Objects</h1>
            <ul style={{ display: "flex", flexDirection: "column" }}>
              <li style={{ fontSize: "1.2vw", fontWeight: "bold" }}>
                Collections of properties. Created using brace notation.
              </li>
              <Text code style={{ fontSize: "1.2vw" }}>
                {"var car = {"}
              </Text>
              <Text code style={{ fontSize: "1.2vw" }}>
                {"isWorking: true,"}
                {'parts: ["engine", "steering wheel"],'}
              </Text>
              <Text code style={{ fontSize: "1.2vw" }}>
                {"}"}
              </Text>
              <li style={{ fontSize: "1.2vw", fontWeight: "bold" }}>
                Use . operator to grab values in objects
              </li>
              <Text code style={{ fontSize: "1.2vw" }}>
                console.log(car.isWorking);
              </Text>
              <Text code style={{ fontSize: "1.2vw" }}>
                >> true
              </Text>
              <li style={{ fontSize: "1.2vw", fontWeight: "bold" }}>
                Modify objects with assignment
              </li>
            </ul>

            <Typography style={{ fontSize: "1.2vw" }}>
              Make an object of yourself! (name, birthday, etc...)
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

export default Objects;
