import React, {useState} from 'react';
import './App.css';
import ResidentsList from './Components/ResidentsList';
import Search, {checkValidity} from './Components/Search';
import Error from './Components/Error';
import 'h8k-components';
import {STUDENTS} from "./studentsList";

const title = "Hacker Dormitory";
function App() {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [err, setErr] = useState('');
    const [nameList, setNameList] = useState([]);

    const handleAdd = () => {
        if (name !== '' && date !== '') {
            const student = STUDENTS.find(e => e.name.toLowerCase() === name.toLowerCase());

            if(student){
                const valid = checkValidity(date, student.validityDate);

                if(!valid){
                    setErr(`Sorry, ${name}'s validity has Expired!`);
                }

                if(valid && nameList.includes(name)){
                    setErr(`${name} is already in the Dormitory`);
                }
                else {
                    setErr('');
                    setNameList(oldArray => [...oldArray, name]);
                }
            }

            else {
                setErr(`sorry ${name} is not a verified student`);

            }

        }

        setName('');
        setDate('');
    };


    return (
    <div className="App">
        <h8k-navbar header={title} />
      <div className="layout-column justify-content-center align-items-center w-50 mx-auto">
        <Search setDate={setDate} setName={setName} handleAdd={handleAdd} />
        <Error err={err} />
        <ResidentsList nameList={nameList} />
      </div>
    </div>
  );
}


export default App;
