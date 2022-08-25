import React from 'react'
import ReactDOM from 'react-dom'
import Content from './Content.js'
import Header from './Header.js'
import Total from './Total.js'

const App = () => {
  const course = {
    name:'Half Stack application development',
   parts: [
    { 
    name: 'Fundamentals of React',
    excercises: 10
   },

  {
name: 'Using props to pass data',
excercises: 7
  },
  
 {
    name: 'State of a component',
    excercises: 14
  } 
]
  }

  return (
    <div>
      <Header course= {course} />
      <Content parts={course}/>
      <Total parts={course}/>
     </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
