import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Carousel from './components/Carousel';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="data-theme='business'">
        <Navbar />
        <div className="flex justify-center items-center text-5xl font-bold text-gray-800 my-8">
          <h1>Admin dashboard</h1>
        </div>
        <div className="w-full h-16 flex items-end">
          <h2 className="text-white font-bold p-2 text-2xl bg-slate-500 w-full">
            Top event images
          </h2>
        </div>
        <div className="w-full flex justify-center">
          <div className="flex flex-col md:flex-row h-auto md:h-[500px] p-10 items-center justify-center gap-8 ">
            <div>
              <Card className="w-full md:w-1/2" />
            </div>
            <div className=' flex justify-center items-center'>
              <Carousel className=" " />
            </div>

          </div>
        </div>
        <div className="w-full h-16 flex items-end">
          <h2 className="text-white font-bold p-2 text-2xl bg-slate-500 w-full">
            Top event images
          </h2>
        </div>
        <div className=" w-full h-96 flex justify-around items-center">
          <Card />
          <p className="text-white text-2xl">This is a red background section</p>
        </div>
      </div>
    </>
  );
}

export default App;
