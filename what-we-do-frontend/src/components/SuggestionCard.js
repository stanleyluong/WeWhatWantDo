import React, { Component } from "react";
import { Card, Embed, Image } from "semantic-ui-react";

class SuggestionCard extends Component {
  generateImage = () => {
      console.log("yID",this.props.itemData.yID)
    let yID = this.props.itemData.yID;
    return yID = !null ? (
       <Embed
        aspectRatio="4:3"
        id={yID}
        placeholder="https://cdn.saultonline.com/wp-content/uploads/2017/04/FILM-REELS.jpg"
        source="youtube"
      />
    ) : (
      <Image
        src="https://us.123rf.com/450wm/sabelskaya/sabelskaya1805/sabelskaya180500549/101969224-stock-vector-two-human-hands-giving-fist-bump-gesture-in-sketch-style-isolated-on-white-background-hand-drawn-vec.jpg?ver=6"
        wrapped
        ui={false}
      />
    );
  };

  render() {
    let { Name, Type, wTeaser } = this.props.itemData;
    return (
        <div>
            <br></br>
      <div>
        <Card>
         {this.generateImage()}
          <Card.Content>
            <Card.Header>{Name}</Card.Header>
            <Card.Meta>
              <span className="date">{Type}</span>
            </Card.Meta>
            <Card.Description>{wTeaser}</Card.Description>
          </Card.Content>
        </Card>
      </div>
      </div>
    );
  }
}

export default SuggestionCard;
