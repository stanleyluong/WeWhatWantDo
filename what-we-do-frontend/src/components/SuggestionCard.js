import React, { Component } from "react";
import { Card, Icon, Embed } from "semantic-ui-react";

class SuggestionCard extends Component {
  render() {
    console.log("this.props.itemData", this.props.itemData);
    let { Name, Type, wTeaser, yID } = this.props.itemData;
    return (
      <div>
        <Card>
          <Embed
            aspectRatio="4:3"
            id={yID}
            placeholder="/images/image-16by9.png"
            source="youtube"
          />
          <Card.Content>
            <Card.Header>{Name}</Card.Header>
            <Card.Meta>
              <span className="date">{Type}</span>
            </Card.Meta>
            <Card.Description>{wTeaser}</Card.Description>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default SuggestionCard;
