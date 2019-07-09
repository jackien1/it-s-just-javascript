import React, { Component } from "react";
import { Card, Icon } from "antd";

class Index extends Component {
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
            <h1 style={{ color: "black", fontSize: "3.1vw" }}>Welcome to</h1>
            <h1
              style={{ color: "black", fontSize: "4vw", fontStyle: "italic" }}
            >
              It's Just JavaScript
            </h1>
            <h1
              style={{
                color: "black",
                fontSize: "2vw",
                textAlign: "right"
              }}
            >
              With Jackie Ni (and Joey Cha)
            </h1>
          </div>

          <div
            style={{
              display: "flex",
              flex: 1,
              width: "100%",
              justifyContent: "flex-end",
              alignItems: "flex-end"
            }}
          >
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

export default Index;
