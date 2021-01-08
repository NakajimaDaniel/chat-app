import logo from './logo.svg';
import './App.css';
import react, {useState, useEffect} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


function App() {

  const [value, setValue] = useState();

  const [messageList, setMessageList] = useState([]);


  const onChangeInput = (e)=>{
    setValue(e.target.value)
  }

  const onClickButton = ()=>{
    if(value != "")
    {
      setMessageList([...messageList, {'message':value}])
      setValue("");
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
          <textarea cols='2' onChange={onChangeInput} onKeyPress={handleKeyPress} value={value}></textarea>
          <button onClick={onClickButton}>submit</button>
        </div>
      </div>



 


      
    </div>
  );
}

export default App;
