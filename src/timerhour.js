import React from "react";
class Timerhour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timerhour: 0
    };
    setInterval(() => {
      this.setState({
        timerhour: this.state.timer + 1
      });
    }, 3600000);
  }
  render() {
    return <h1>{String(this.state.timerhour % 24).padStart(2, "0")}</h1>;
  }
}
export default Timerhour;
