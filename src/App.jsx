import './App.css'
import Counter from './counter'
import Friends from './Friends'
import Team from './Team'
import Users from './user'


function App() {
  function handleClick(){
    alert('Button clicked')
  }

  const handleClick2=()=>{
    alert('button 2 clicked')
  }
   const addToFive = (num)=>{
    alert(num+5)
   }

  return (
    <>
      <h3>React Core Concepts</h3>
      
  <Counter></Counter>
  <Team></Team>
  <Users></Users>
  <Friends></Friends>









      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick}>Click-2</button>
      <button onClick={() =>{alert('third clicked')}}>Third</button>
      {/* <button onClick={() => addToFive(3)}>Four</button> */}

    </>
  )
}

export default App
