import React from 'react'
import ReactDOM from 'react-dom'
import Content from './Content.js'
import Header from './Header.js'
import Total from './Total.js'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course= {course} />
      <Content part1={part1} exercise1={exercises1} part2={part2} exercise2={exercises2} part3={part3} exercise3={exercises3}/>
      <Total ej1={exercises1} ej2={exercises2} ej3={exercises3}/>
      
     
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
