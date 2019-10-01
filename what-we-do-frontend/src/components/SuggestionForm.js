import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import SuggestionCard from "./SuggestionCard";
import EmbededVid from "./EmbededVid"

export default class SuggestionForm extends Component {
  state = {
    type: null,
    suggestion: []
  };

  handleChange = (e, { value }) => {
    this.setState({ type: value });
  };

  getGroupSuggestion = () => {
    fetch(
      this.props.BackendURL + `/groups/${this.props.currentGroup.id}/suggest`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          type: `${this.state.type}`,
          userID: JSON.parse(sessionStorage.getItem("current_user")).id
        })
      }
    )
      .then(res => res.json())
      .then(async data => {
        this.setState({
          suggestion: data.slice(0, 3)
        });
      })
  };

  generateSuggestionCards = () => {
    if (this.state.suggestion.length !== 0) {
      return this.state.suggestion.map((item, index) => (
          <div>
              <h2>Suggestions</h2>      
         <SuggestionCard
          title={item.name}
          key={index}
          itemData={item}
        />
        </div>
      ))
      
    }
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <Form>
          <Form.Group inline widths="equal">
            <label>Media type:</label>
            <Form.Checkbox
              label="Movies"
              value="movie"
              checked={value === "movies"}
              onChange={this.handleChange}
            />
            <Form.Checkbox
              label="TV Shows"
              value="show"
              checked={value === "shows"}
              onChange={this.handleChange}
            />
            <Form.Checkbox
              label="Books"
              value="book"
              checked={value === "books"}
              onChange={this.handleChange}
            />
            <Form.Checkbox
              label="Authors"
              value="author"
              checked={value === "authors"}
              onChange={this.handleChange}
            />
            <Form.Checkbox
              label="Music"
              value="music"
              checked={value === "music"}
              onChange={this.handleChange}
            />
            <Form.Checkbox
              label="Games"
              value="game"
              checked={value === "games"}
              onChange={this.handleChange}
            />
            <Form.Checkbox
              label="Podcasts"
              value="podcast"
              checked={value === "podcasts"}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Button onClick={() => this.getGroupSuggestion()}>
            Get Group Suggestion!
          </Form.Button>
        </Form>

        <div>{this.generateSuggestionCards()}</div>
      </div>
    );
  }
}
