import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Page from "./components/page";
import spiders from "./friends.json";
import Score from "./components/score";
import "./App.css";


class App extends React.Component {
  state = {
    friends: spiders,
    guesses: [],
    score: 0,
    topScore: 0
  }

  reOrganize = () => {
    const newOrder = []
    const newFriendsOrder = []
    let i = 0
    while(i<12){
      let rand = Math.floor(Math.random()*12);
      if(!newOrder.includes(rand)){
        newOrder.push(rand);
        newFriendsOrder[i] = spiders[rand];
        i++;
        console.log(newOrder); 
      };
    };
    this.setState({friends: newFriendsOrder})
  }

  deleteFriend = (id) => {
    const friends = this.state.friends.filter((friend) => friend.id !== id );
    this.setState({friends: friends});
    console.log(friends)
  }

  guessCard = (id) => {
    const correct = !this.state.guesses.includes(id);
    if(correct){
    this.state.guesses.push(id);
    this.setState({score: this.state.guesses.length})
    }else {
      if(this.state.score>this.state.topScore){
        this.setState({topScore: this.state.score})
      };
      this.setState({score: 0,
        guesses: []});
    }
    this.reOrganize();
  }

  styles = {
    box: {
      fontFamily: 'Coming Soon ,cursive',
      width: "100%",
      position: "relative",
      // height: "1200px"
     },
     font: {
         fontFamily: 'Coming Soon ,cursive',
         marginLeft: "2rem"
     },
     fontTitle: {
         fontFamily: 'Coming Soon ,cursive',
        fontsize: "3rem"
     }
  }

  render(){
  return (
    <Page>
      <h1 className="title" style={this.styles.fontTitle}>SpiderVerse</h1>
      <p style={this.styles.font}>Click on any spiderman you like!</p>
      <p style={this.styles.font}>How many can you click without repeating?</p>
      <div style={this.styles.box}>

        <Score 
        score={this.state.score}
        topScore={this.state.topScore}>
        </Score>

        <Wrapper>

          {this.state.friends.map(item =>
                <FriendCard
                guessCard={this.guessCard}
                id={item.id}
                key={item.id}
                name={item.name}
                image={item.image}
                location={item.location}
                />
            )}
        </Wrapper>
      </div>
    </Page>
  )};
}

export default App;
