import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import SuggestionCard from "./SuggestionCard";

export default class SuggestionForm extends Component {
  state = {
    type: null,
    allSuggestions: [],
    suggestion: [],
    sliceCounter: 0
  };

  handleChange = (e, { value }) => {
    this.setState({ type: value, sliceCounter: 0 });
  };

  getGroupSuggestion = () => {
    console.log("suggestion types", this.state.type);
    fetch(
      this.props.BackendURL + `/groups/${this.props.currentGroup.id}/suggest`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          types: `${this.state.type}`,
          userID: JSON.parse(sessionStorage.getItem("current_user")).id
        })
      }
    )
      .then(res => res.json())
      .then(async data => {
        console.log(data);
        this.setState({
          allSuggestions: data,
          suggestion: data.slice(
            this.state.sliceCounter,
            this.state.sliceCounter + 4
          )
        });
      })
      .then(response =>
        this.setState({
          sliceCounter: 1
        })
      );
  };

  generateSuggestionCards = () => {
    if (this.state.suggestion.length !== 0) {
      return this.state.allSuggestions.slice((this.state.sliceCounter - 1), (this.state.sliceCounter + 3)).map((item, index) => (
        <div>
          <SuggestionCard key={index} itemData={item} />
        </div>
      ));
    }
  };

  generateSuggestionButton = () => {
    if (this.state.sliceCounter <= 17) {
      return this.state.sliceCounter === 0 ? (
        <Form.Button onClick={() => this.getGroupSuggestion()}>
          Get Group Suggestion!
        </Form.Button>
      ) : (
        <Form.Button onClick={() => this.incrementSliceCounter()}>
          Get More Suggestions!
        </Form.Button>
      );
    } else {
        this.setState({
            sliceCounter: 1
        })
    }
  };

  incrementSliceCounter = () => {
      this.setState(prevState =>{
          return {sliceCounter: (prevState.sliceCounter +4)}
      })
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <label>Media type:</label>

        <Form>


    
          <Form.Group inline widths="equal">
            <Form.Checkbox
              label='Movies'
              value='movie'
              checked={this.state.type === 'movie'}
              onChange={this.handleChange}
            />
            <Form.Checkbox
              label="TV Shows"
              value="show"
              checked={this.state.type === "show"}
              onChange={this.handleChange}
            />
            <Form.Checkbox
              label="Books"
              value="book"
              checked={this.state.type === "book"}
              onChange={this.handleChange}
            />
            <Form.Checkbox
              label="Authors"
              value="author"
              checked={this.state.type === "author"}
              onChange={this.handleChange}
            />
            <Form.Checkbox
              label="Music"
              value="music"
              checked={this.state.type === "music"}
              onChange={this.handleChange}
            />
            <Form.Checkbox
              label="Games"
              value="game"
              checked={this.state.type === "game"}
              onChange={this.handleChange}
            />
          </Form.Group>
          {this.generateSuggestionButton()}
        </Form>

        <div class="suggestionContainer">{this.generateSuggestionCards()}</div>
      </div>
    );
  }
}
