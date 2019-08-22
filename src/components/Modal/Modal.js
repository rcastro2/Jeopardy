import React from 'react'
import './Modal.css'

class Modal extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            response:""
        }
        this.handleClick = this.handleClick.bind(this)
        this.updateInput =  this.updateInput.bind(this)
        this.keyPress = this.keyPress.bind(this)
    }   
    handleClick(){
        let delay = 0;
        if(this.state.response.toUpperCase() === this.props.info.selectedQuestion.state.answer.toUpperCase()){
            this.setState({  response:"Correct"  })
            this.props.info.score += this.props.info.selectedQuestion.state.value;
        }else{
            this.setState({  response:"Incorrect"  })
            this.props.info.score -= this.props.info.selectedQuestion.state.value;
            delay = 2000;
            setTimeout( () => 
                        {
                            const answer = this.props.info.selectedQuestion.state.answer;
                            this.setState({response:"What is " + answer + "?"});
                        }       
            , 1000);
        }
        setTimeout( () => 
                        {
                            this.setState({response:""})
                            this.props.onModalClick( this.props.info.score )
                        }       
        , 1000 + delay);
        
    }
    keyPress(e){
        if(e.charCode === 13){
            this.handleClick();
        }
    }
    updateInput(e){
        this.setState({
            response:e.target.value
        }) 
    }
    render(){
        return(
            <div className={this.props.info.modalStatus} >
                <div>
                <h1>{this.props.info.selectedQuestion !== "" ? this.props.info.selectedQuestion.state.question : ""}</h1><br/>
                <input className="userInput" type="text" value={this.state.response} onKeyPress={this.keyPress} onChange={this.updateInput}/><br/>
                </div>
            </div>
        )
    }
 
}
export default Modal