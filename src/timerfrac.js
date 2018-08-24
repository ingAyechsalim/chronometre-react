import React from "react";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timerfrac: 0
    };
    setInterval(() => {
      this.setState({
        timerfrac: this.state.timerfrac + 1
      });
    }, 100);
  }

  render() {
    return <h1>{String(this.state.timerfrac % 10).padStart(2, "0")}</h1>;
  }
}
export default Timer;
