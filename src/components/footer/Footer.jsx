import React from 'react'

function Footer() {
  return (
    <div>
      <footer style={styles}>
        Copyright 2024 &copy;
      </footer>
    </div>
  )
}

const styles = {
    color: "var(--white-color)",
    fontSize: "21px",
    backgroundColor: "var(--blue-color)",
    display : "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50px",
}

export default Footer
