import Part from './Part.js'
const Content = (props) => {

 

    return (
        <div>
            <Part eco={props.parts.parts[0]["name"]} suba={props.parts.parts[0]["excercises"]} />
            <Part eco={props.parts.parts[1]["name"]} suba={props.parts.parts[1]["excercises"]} />
            <Part eco={props.parts.parts[2]["name"]} suba={props.parts.parts[2]["excercises"]} />
            
                        
        </div>
        
    )

}

export default Content