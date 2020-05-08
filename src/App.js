import Friend from "./components/Friend"
import React from 'react'
import frinedsData from './data'
class App extends React.Component{
  state={
    friends:[],
    isLoading:"true"
  }
  componentDidMount(){
     setTimeout(() => {
      this.setState({ isLoading: false });
      }, 6000);
      const friends = frinedsData.info
      this.setState({friends, isLoading:false})
  }
  render(){
    const {isLoading, friends} = this.state
    console.log(friends)
    return(
      <div>
      {isLoading ? "loading" : friends.map(friend =>
      <Friend 
        key={friend.id}
        season={friend.season}
        episode={friend.episode}
        quote={friend.quote}
        character={friend.character}
        yt_code={friend.yt_code}
        url={friend.url}
        />
      
      )}
      </div>
  )
  }
}
export default App