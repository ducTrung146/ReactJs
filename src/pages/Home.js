import { useState, useEffect } from "react"
import ImagePage from './Image'


function Home() {
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count => count + 1);
  }

  if (count >= 10) {
    return <ImagePage />;
}

  return (
    <div className="Home">
        <div>
            <h1>Counters that update together</h1>
            <MyButton count={count} onClick={handleClick} />
        </div>
    </div>
    
  );
}

function MyButton({ count, onClick }) {
  return(
    <button onClick={onClick}>
      Click {count} times
    </button>
  );
}


export default Home;