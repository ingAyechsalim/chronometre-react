import React from "react";
class Timermin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timermin: 0
    };
    setInterval(() => {
      this.setState({
        timermin: this.state.timermin + 1
      });
    }, 60000);
  }
  render() {
    return <h1>{String(this.state.timermin % 60).padStart(2, "0")}</h1>;
  }
}
export default Timermin;
