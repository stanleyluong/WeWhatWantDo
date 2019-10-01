import React, { Component } from "react";
import { Embed } from "semantic-ui-react";

class EmbededVid extends Component {
  render() {
    return (
      <Embed
        aspectRatio="21:9"
        id={this.props.vidData}
        placeholder="/images/image-16by9.png"
        source="youtube"
      />
    );
  }
}
export default EmbededVid;
