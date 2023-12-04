import React, { useEffect, useState } from 'react'
import  "bootstrap/dist/css/bootstrap-reboot.min.css";
import  "bootstrap/dist/js/bootstrap";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import Pages from './components/Pages';
import  './App.css';
import Search from "./components/Search";
import Accordian from './components/Toggle/Accordian';
import CardDetails from "./components/CardDetails"

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";

function App(){
  return(
   <Router>
     <div className="App">
      <Navbar title= "Character Wiki" />
      </div>
      <Routes>
        <Route path="/" element={<Character />} />
        <Route path="/:id" element={<CardDetails />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CardDetails />} />
        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<CardDetails />} />
      </Routes>
   </Router>
  )
}

const Character = () => {
  let [pageNum, setPage]= useState(1);
  let [search, updateSearch]= useState("");
  let [species, setSpecies]= useState("");
  let [gender, setGender]= useState("");
  let [status, setStatus]= useState("");
  
  let [updatedData, setUpdatedData]= useState([]);
  let {info, results} = updatedData;
  console.log(results);
  let api= `https://rickandmortyapi.com/api/character/?page=${pageNum}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

    useEffect(()=>{
      (async function () {
        let data= await fetch(api).then((res) => res.json());
        setUpdatedData(data);
      })()
    }, [api])

  return (
    <>
    <h2 className="text-center mb-3" style={{fontFamily:"Georgia", textShadow:"2px 2px 2px grey"}}>Characters</h2>
    <Search updateSearch={updateSearch} setPage={setPage}/>
    
    
    <div className="container-fluid  py-1">
    <div className="d-flex flex-lg-row flex-col my-2 flex-lg-nowrap flex-sm-nowrap overflow-auto" style={{backgroundColor:"#FFFFF0"}}>
    <Cards page="/" results= {results} />
    </div>
    </div>


    <Accordian setStatus={setStatus} setPage={setPage} setGender={setGender} setSpecies={setSpecies} />

    <Pages info={info} setPage= {setPage}/>
    </>
  );
};

export default App;
