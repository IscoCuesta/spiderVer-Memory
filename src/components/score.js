import React from "react";

const styles = {
    card: {
    },
    heading: {
      background: "#3f51b5",
      minHeight: 50,
      lineHeight: 3.5,
      fontSize: "1.2rem",
      color: "white",
      padding: "0 20px",
      fontFamily: 'Coming Soon ,cursive'
    },
    content: {
      padding: 20
    },
    topScores: {
        float: "right",
        fontFamily: 'Coming Soon ,cursive'
    },
    font: {
        fontFamily: 'Coming Soon ,cursive'
    }
  };

function Score(props) {
  return <div className="score" style={styles.heading}>
     Score: {props.score} <div style={styles.topScores}>All-Time-TopScore= {props.topScore} </div>
</div>
}

export default Score;