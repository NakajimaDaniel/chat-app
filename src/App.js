import logo from './logo.svg';
import './App.css';
import react, {useState, useEffect, useRef} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import { useSpring, config } from "react-spring";


function App() {

  const [value, setValue] = useState();

  const [messageList, setMessageList] = useState([]);

  const messageBoxStyle = {
    backgroundColor: "#E7E7E7",
    width: '80%',
    margin: '0 25px'
  }


  const onChangeInput = (e)=>{
    setValue(e.target.value)
  }

  const onClickButton = ()=>{
    if(value !== null && value !== '')
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
        
      </div>

      <div className="chat-main">
        <div className="message-list">
        {
          messageList.map((val)=>{
            return(

              <div className="message">{val.message}</div>

            );
          })
        }
        </div>
        <div className="message-input">
          <TextField variant="outlined"  style={messageBoxStyle} inputProps={{style: {fontSize: 15}}} onChange={onChangeInput} onKeyPress={handleKeyPress} value={value} size="small"></TextField>
          <button onClick={onClickButton}>submit</button>
        </div>
      </div>


    </div>
  );
}

export default App;
