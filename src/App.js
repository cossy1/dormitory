import React, {useState} from 'react';
import './App.css';
import ResidentsList from './Components/ResidentsList';
import Search, {checkValidity} from './Components/Search';
import Error from './Components/Error';
import 'h8k-components';

const title = "Hacker Dormitory";
function App() {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [nameList, setNameList] = useState([]);
    const [err, setErr] = useState('');

    const handleAdd = () => {
        if (name !== '' && date !== '') {
            checkValidity(date, '2022-03-30');
            const addItem = {
                name,
                date
            };
            setNameList(oldArray => [...oldArray, addItem]);
        }
    };


    return (
    <div className="App">
        <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-column justify-content-center align-items-center w-50 mx-auto">
        <Search setDate={setDate} setName={setName} handleAdd={handleAdd} />
        <Error err={err} />
        <ResidentsList nameList={nameList} setErr={setErr} />
      </div>
    </div>
  );
}


export default App;
