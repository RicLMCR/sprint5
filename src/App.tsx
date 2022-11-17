
import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const [data, setData] = useState<Object>("");
  return (
    <div className="App">
      <Navbar setData={setData} data={data} />
    </div>
  );
}


export default App;
