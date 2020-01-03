import React from 'react';
import movies from '../Movielist'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      List: []
    };
  }
  render(){
  console.log(movies)
    return(
      <ul>
        <li><a href="#">{movies[0].title}</a></li>
        <li><a href="#">{movies[1].title}</a></li>
        <li><a href="#">{movies[2].title}</a></li>
        <li><a href="#">{movies[3].title}</a></li>
        <li><a href="#">{movies[4].title}</a></li>
    </ul>
  )}
}
console.log(movies)
this.setState({list: Movielist})
<App List={this.state.List} />




export default App;
