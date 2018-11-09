import React, { Component } from "react";

const inputStyle = {
  width: 235,
  margin: 15,
  marginTop: 50,
  textAlign: "center"
};

const containerStyle = {
  width: 300,
  height: 300,
  borderStyle: "dotted solid double dashed",
  marginLeft: "40%",
  marginTop: 100,
  borderRadius: "50%",
  padding: 20
};

class MagicEightBall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      randomIndex: ""
    };
    this.click = this.click.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  click() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: ""
      });
    }
  }

  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }

  render() {
    const possibleAnswers = [
      "It is certain",
      "It is decidedly so",
      "Without a doubt",
      "Yes, definitely",
      "You may rely on it",
      "As I see it, yes",
      "Outlook good",
      "Yes",
      "Signs point to yes",
      "Reply hazy try again",
      "Ask again later",
      "Better not tell you now",
      "Cannot predict now",
      "Concentrate and ask again",
      "Don't count on it",
      "My reply is no",
      "My sources say no",
      "Most likely",
      "Outlook not so good",
      "Very doubtful"
    ];

    const answer = possibleAnswers[this.state.randomIndex];
    return (
      <div style={containerStyle}>
        <input
          type="text"
          value={this.state.userInput}
          onChange={this.handleChange}
          style={inputStyle}
        />
        <br />
        <button onClick={this.click}>Ask the Magic Eight Ball!</button> <br />
        <h3>Answer: </h3>
        <p>{answer}</p>
      </div>
    );
  }
}

export default MagicEightBall;
