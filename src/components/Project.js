import React, { Component } from "react";
import { Card, Icon, Typography } from "antd";

const { Text } = Typography;

class Project extends Component {
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
            <h1 style={{ color: "black", fontSize: "3.5vw" }}>Exercises</h1>
            <Typography style={{ fontSize: "2.1vw", fontWeight: "bold" }}>
              CHATBOT
            </Typography>
            <Typography style={{ fontSize: "1.5vw" }}>Requirements</Typography>

            <ul style={{ display: "flex", flexDirection: "column" }}>
              <li style={{ fontSize: "1.2vw", fontWeight: "bold" }}>
                Use all primitive types.
              </li>
              <li style={{ fontSize: "1.2vw", fontWeight: "bold" }}>
                Include a calculator for the Pythagorean Theorem.
              </li>
              <li style={{ fontSize: "1.2vw", fontWeight: "bold" }}>
                Add a command that displays a random sage fact.
              </li>
              <li style={{ fontSize: "1.2vw", fontWeight: "bold" }}>
                Customize it however you want.
              </li>
              <li style={{ fontSize: "1.2vw", fontWeight: "bold" }}>
                Typing "quit" exists the program.
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

export default Project;
