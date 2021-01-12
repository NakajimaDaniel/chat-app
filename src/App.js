import logo from './logo.svg';
import './App.css';
import react, {useState, useEffect, useRef} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';


function App() {

  const [value, setValue] = useState();

  const [messageList, setMessageList] = useState([]);

  const commentIcon = <FontAwesomeIcon icon={faComment} color='#474747'/>

  const messageBoxStyle = {
    backgroundColor: "#E7E7E7",
    width: '70%',
    margin: '0 25px'
  }

  const buttonSend = {
    backgroundColor:"#8EAEFF",

  }

  const onChangeInput = (e)=>{
    setValue(e.target.value)
  }

  const onClickButton = ()=>{
    
    if(value !== null && value !== '' && !/^\s*$/.test(value))
    {
      setMessageList([...messageList, {'message':value}])
      setValue('');
    }

  }

  const handleKeyPress = (e)=>{
    if(e.key==='Enter'){
      onClickButton();
    }
  }


 

  return (
    
    <div className="App">
      <div className="menu-wrap">
        <div className="menu-title">
          {commentIcon} Chat-App
        </div>

        <div className="room-data">
         <div className="room-name">  
          Room Name:
         </div>
         <div className="room-password">
          Password:
         </div>
        </div>

        <div className="divider">

        </div>

      </div>

      <div className="chat-main">
        <div className="message-list">
        {
          messageList.map((val)=>{
            return(
              <div className="message"> <p>{val.message}</p></div>

            );
          })
        }
        </div>
        <div className="message-input">
          <TextField variant="outlined"  style={messageBoxStyle} inputProps={{style: {fontSize: 15}}} onChange={onChangeInput} onKeyPress={handleKeyPress} value={value} size="small"></TextField>
          
          <IconButton  style={buttonSend} onClick={onClickButton}><SendIcon/></IconButton>
          
        </div>
      </div>


    </div>
  );
}

export default App;
