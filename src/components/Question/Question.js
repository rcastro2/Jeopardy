import React from 'react'
import './Question.css'

export class Question extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            text:this.props.value,
            value:this.props.value,
            question:this.props.question,
            answer:this.props.answer,
            status:""
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.props.onQuestionClick(this);
    }
    render(){
        const style = "Question " + this.state.status;
        return(
            <div className={style} onClick={this.handleClick}>
                <div className="description">
                    <h3>{this.state.text}</h3>
                </div>
            </div>
        );
    }

}
