import React, { Component } from "react";
import { Card, Icon, Typography } from "antd";

const { Text } = Typography;

class ReviewExercises extends Component {
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
              Review Exercises 🚴‍♂️
            </h1>
            <ol style={{ display: "flex", flexDirection: "column" }}>
              <li style={{ fontSize: "1.2vw", fontWeight: "bold" }}>
                Ask a user for a number and store it in a variable. Print out
                the product of that number and a random number from 1 to 10.
              </li>
              <li style={{ fontSize: "1.2vw", fontWeight: "bold" }}>
                Print this out.
              </li>
              <Text code style={{ fontSize: "1.2vw" }}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#
              </Text>
              <Text code style={{ fontSize: "1.2vw" }}>
                &nbsp;&nbsp;&nbsp;&nbsp;##
              </Text>
              <Text code style={{ fontSize: "1.2vw" }}>
                &nbsp;&nbsp;&nbsp;###
              </Text>
              <Text code style={{ fontSize: "1.2vw" }}>
                &nbsp;&nbsp;####
              </Text>
              <Text code style={{ fontSize: "1.2vw" }}>
                &nbsp;#####
              </Text>
              <Text code style={{ fontSize: "1.2vw" }}>
                ######
              </Text>
              <li style={{ fontSize: "1.2vw", fontWeight: "bold" }}>
                Prompt the user for something. If they answer no, write
                something. If they answer yes, write something else. (confirm
                function?)
              </li>
              <li style={{ fontSize: "1.2vw", fontWeight: "bold" }}>
                Create a function that returns the multiple of two numbers you
                provide it.
              </li>
              <li style={{ fontSize: "1.2vw", fontWeight: "bold" }}>
                Make a chain of if statements to discern between small, medium,
                and large.
              </li>
              <li style={{ fontSize: "1.2vw", fontWeight: "bold" }}>
                Prompt the user for two numbers. Using a for loop, print out
                ranges from those ranges.
              </li>
              <li style={{ fontSize: "1.2vw", fontWeight: "bold" }}>
                {
                  "Add a <h1> tag about an endangered species and a <img> tag of that species. "
                }
              </li>
              <li style={{ fontSize: "1.2vw", fontWeight: "bold" }}>
                Change the color of your h1 tag and the size of the image
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

export default ReviewExercises;
