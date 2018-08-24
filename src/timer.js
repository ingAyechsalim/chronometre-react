import React from "react";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timersec: 0
    };
    setInterval(() => {
      this.setState({
        timersec: this.state.timersec + 1
      });
    }, 1000);
  }

  render() {
    return <h1>{String(this.state.timersec % 60).padStart(2, "0")}</h1>;
  }
}
export default Timer;
