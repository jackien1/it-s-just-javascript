import React, { Component } from "react";
import { Card, Icon, Typography } from "antd";

const { Text } = Typography;

class Exercises extends Component {
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
            <ol style={{ display: "flex", flexDirection: "column" }}>
              <li style={{ fontSize: "1.2vw", fontWeight: "bold" }}>
                Create a program which asks for two numbers, multiples them
                together, and print them out.
              </li>
              <li style={{ fontSize: "1.2vw", fontWeight: "bold" }}>
                Prompt users for their names. If they enter nothing, continue
                asking them.
              </li>
              <li style={{ fontSize: "1.2vw", fontWeight: "bold" }}>
                Create a guessing game that runs until you reach the number. It
                will print out "too small" or "too large" for numbers that are
                greater than or less than the correct value.
              </li>
              <li style={{ fontSize: "1.2vw", fontWeight: "bold" }}>
                Print this out
              </li>
              <div style={{ fontSize: "1.2vw", fontWeight: "bold" }}>#</div>
              <div style={{ fontSize: "1.2vw", fontWeight: "bold" }}>##</div>
              <div style={{ fontSize: "1.2vw", fontWeight: "bold" }}>###</div>
              <div style={{ fontSize: "1.2vw", fontWeight: "bold" }}>####</div>
              <div style={{ fontSize: "1.2vw", fontWeight: "bold" }}>
                Hint: you can get the length of a string using .length
              </div>
              <li style={{ fontSize: "1.2vw", fontWeight: "bold" }}>
                Attempt the FizzBuzz challenge. Make a for loop from 1 to 100.
                Console.log "Fizz" for numbers divisible by 3, "Buzz" for
                numbers divisible by 5, and "FizzBuzz" for numbers divisible by
                both 3 and 5. Print the number normally otherwise.
              </li>
            </ol>
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

export default Exercises;
