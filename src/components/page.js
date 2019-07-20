import React from "react";

const styles = {
    font: {
        fontFamily: 'Coming Soon ,cursive',
        height: "100px"
    }
}

function Page(props) {
  return <div className="Page" style={styles.font} {...props}>{props.children}</div>;
}

export default Page;