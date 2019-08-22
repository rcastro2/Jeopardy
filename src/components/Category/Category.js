import React from 'react'
import './Category.css'
import { Question } from '../Question/Question'

const Category = (props) => {
    let data;
    let build = [];
    for(let i = 1; i <= 5; i++){
        data = props.questions[i-1];
        build.push(<Question key={i} value={i * 200} question={data.question} answer={data.answer} onQuestionClick={props.onQuestionClick}/>)
    }
    return (
        <div className="Category">
            <div className="title">
                <h3>{props.title}</h3>
            </div>
            {build} 
        </div>
    )
}
export default Category;
