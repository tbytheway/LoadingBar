import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import "./styles.css"



const App = () => {
  const [width, setWidth] = useState(1)

const styles = {
backroundColor: "#00cb00",
width: width + '%'
}

useEffect(() => {
  if (width < 100){
const interval = setInterval(() => {
setWidth(width + 0.1)
}, 5)
    return () => clearInterval(interval)
  }
})

return(
<div>
<div className='App'>
  <div style={styles}>
    <span>{width.toFixed()}%</span>
  </div>
<button onClick={() => setWidth(0)}>Reset</button>
</div>
</div>
)
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
