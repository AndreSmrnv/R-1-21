import React, { Component } from 'react';
// import ReactDom from 'react-dom';

import './style.scss';
import Message from '@components/Message';
import MsgInput from '@components/MsgInput';
//stateFull
import Paper from '@material-ui/core/Paper';
import List from "@material-ui/core/List";


export default class MessageList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            messages: [
                { name: 'one', text: 'Hey!' }, 
                { name: 'one', text: 'How are you?' }
            ],
            
            
        };
    }

    addMessage = (msg) => {        
        this.setState({
            messages: [...this.state.messages, {
                name: 'User1', text: msg
            }]
        });
        const LastMsg = document.getElementById( 'msgList' ).lastElementChild;
        LastMsg.scrollIntoView( { block: "end", behavior: "smooth" } );
                
    }
    

    render() {
        const { messages } = this.state;
        const Messages = messages.map((el, i) => 
            <Message 
                key={ 'msg_' + i } 
                name={ el.name } 
                text={ el.text }
            />);
        
        return (
            <React.Fragment>
                <Paper className="message__wrapper">
                    
                    <List className="message__items" id='msgList'>
                        {Messages}  
                    </List> 
                    <MsgInput addMsg={ this.addMessage } />
                </Paper>
                </React.Fragment>
        );
        
        // return <div className="message__wrapper">
        //     <div className="message__items">
        //         
        //     </div>
            
        //     <form action="#" onSubmit={this.sendMessage} >
        //         <input type="text" name="textMessage" id="" placeholder="Введите текст сообщения" value={this.state.inputMsg} onChange={this.handleChangeInputMsg} />
        //         <input type="submit" value="add" />
               
        //     </form>
        // </div>;

    }
};

