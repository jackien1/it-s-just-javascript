import React, { Component } from "react";
import { Card, Icon, Typography } from "antd";

const { Text } = Typography;

class Loops extends Component {
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
            width: "60vw",
            height: "60vh"
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
            <h1 style={{ color: "black", fontSize: "2.4vw" }}>for Loops</h1>
            <ul style={{ display: "flex", flexDirection: "column" }}>
              <li style={{ fontSize: "1.4vw", fontWeight: "bold" }}>
                More comprehensive version of the while loop with counter
              </li>
              <Text code style={{ fontSize: "0.8vw" }}>
                {
                  "for (var joeyBobaLevels = 1; joeyBobaLevels <= 10; joeyBobaLevels++) "
                }
              </Text>
              <Text code style={{ fontSize: "0.8vw" }}>
                console.log(joeyBobaLevels)
              </Text>
              <Text code style={{ fontSize: "0.8vw" }}>
                >> 1
              </Text>
              <Text code style={{ fontSize: "0.8vw" }}>
                >> ...10
              </Text>
              <div
                style={{
                  marginTop: "2vh",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                Attempt the FizzBuzz challenge. Make a for loop from 1 to 100.
                Console.log "Fizz" for numbers divisible by 3, "Buzz" for
                numbers divisible by 5, and "FizzBuzz" for numbers divisible by
                both 3 and 5. Print the number normally otherwise.
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

export default Loops;
