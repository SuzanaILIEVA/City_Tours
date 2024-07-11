
import { useState } from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import TourList from './components/TourList';


function App() {
  const [searchTerm , setSearchTerm] = useState("")

  const handleSearch =(term)=>{
    setSearchTerm(term)
  }
  return (
   <div>
    <Navbar onSearch={handleSearch}/>
    <TourList searchTerm={searchTerm}/>
   </div>
  );
}

export default App;
