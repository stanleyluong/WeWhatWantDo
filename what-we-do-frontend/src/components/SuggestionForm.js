
import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

export default class SuggestionForm extends Component {
  state = {
      type: null,
      suggestion: null
  }

  handleChange = (e, { value }) => {
      this.setState({ type: value })
      console.log(this.state)
  }
  
//   handleChange = (e, { newValue }) => this.setState(async prevState => {
//     console.log(this.state)
//     debugger
//     return {value: [...prevState, newValue ]}})

  getGroupSuggestion = () => {
      fetch(this.props.BackendURL+`/groups/${this.props.currentGroup.id}/suggest`, {
          method: "POST",
          headers:{
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            type: "movie",
            userID: JSON.parse(sessionStorage.getItem('current_user')).id
          })
      }).then(res => res.json())
      .then(data => console.log(data))
      
  }

  render() {
    const { value } = this.state
    return (
      <Form>
        
        <Form.Group inline widths='equal'>
          <label>Media type:</label>
          <Form.Checkbox
            label='Movies'
            value='movies'
            checked={value === 'movies'}
            onChange={this.handleChange}
          />
          <Form.Checkbox
            label='TV Shows'
            value='shows'
            checked={value === 'shows'}
            onChange={this.handleChange}
          />
          <Form.Checkbox
            label='Books'
            value='books'
            checked={value === 'books'}
            onChange={this.handleChange}
          />
          <Form.Checkbox
            label='Authors'
            value='authors'
            checked={value === 'authors'}
            onChange={this.handleChange}
          />
          <Form.Checkbox
            label='Music'
            value='music'
            checked={value === 'music'}
            onChange={this.handleChange}
          />
          <Form.Checkbox
            label='Games'
            value='games'
            checked={value === 'games'}
            onChange={this.handleChange}
          />
          <Form.Checkbox
            label='Podcasts'
            value='podcasts'
            checked={value === 'podcasts'}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Button onClick={() => this.getGroupSuggestion()}>Get Group Suggestion!</Form.Button>
      </Form>
    )
  }
}


// import React, { Component } from 'react'



// export default class SuggestionForm extends Component {
//     constructor(){
//     super()

//     this.state = {

//     }
// }


// render(){
//     return (

// <form class="ui form">
//   <div class="field">
//     <label>Media Type</label>
//     <select multiple="" class="ui dropdown">
//       <option value="">Select Media Type</option>
//       <option value="movies">Movies</option>
//       <option value="shows">TV Shows</option>
//       <option value="books">Books</option>
//       <option value="authors">Authors</option>
//       <option value="music">Music</option>
//       <option value="games">Games</option>
//       <option value="podcasts">Podcasts</option>


//     </select>
//   </div>
// </form>
//     )}


//     }
