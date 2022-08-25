const Total = (props) => {
console.log(props)
const sumall = props.parts.parts.map(item => item.excercises).reduce((prev, curr) => prev + curr, 0);

    return (
        
        <p>Number of exercises {sumall}</p>
        
    )

}

export default Total