import React from 'react'
import './Board.css'
import Category from '../Category/Category'
import  Modal  from '../Modal/Modal'


class Board extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            score:0,
            modalStatus:"ModalClose",
            selectedQuestion:"",
        }
        this.questionClick = this.questionClick.bind(this)
        this.modalClick = this.modalClick.bind(this)
    }
    questionClick(currentQuestion){
        this.setState({
            modalStatus: "ModalOpen",
            selectedQuestion: currentQuestion
        })

    }
    modalClick(score){
        this.state.selectedQuestion.setState({status:"viewed"});
        this.setState({
            modalStatus: "ModalClose",
            score: score
        })
    }

    render(){
        return (
            <div className="Board">
                <Modal onModalClick={this.modalClick} info={this.state}/>
                <h1>Jeopardy</h1>
                {this.props.info.map(function(i,key){
                    return <Category key={key}title={i.title} questions={i.questions} onQuestionClick={this.questionClick}/>
                },this)}
                <div className="score">
                    <h2>${this.state.score}</h2>
                </div>
            </div>
        )
    }
}
export default Board;