import { useNavigate } from 'react-router-dom';
import React from 'react';
import './components/ui/css/reminders.css';
import { BackgroundRippleEffect } from './components/ui/background-ripple-effect';
import Shuffle from './components/ui/Shuffle.jsx';

function Reminders() {
  const navigate = useNavigate();
  return (
    <div className="title-style relative overflow-hidden flex flex-col items-center justify-center">
      <div className="z-10 flex flex-col items-center gap-3">
        <Shuffle
          text="Reminders"
          shuffleDirection="right"
          duration={0.35}
          animationMode="evenodd"
          shuffleTimes={1}
          ease="power3.out"
          stagger={0.03}
          threshold={0.1}
          triggerOnce={true}
          triggerOnHover
          respectReducedMotion={true}
          loop={false}
          loopDelay={0}
        />
        <p className="text-zinc-400">Stay on top of your tasks</p>
        <button 
          onClick={()=>{navigate("/todo")}} 
          className="pointer-events-auto mt-8 px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-opacity-10 hover:text-white hover:border-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md border border-white backdrop-blur-sm"
        >
          Get Started
        </button>
      </div>

      <BackgroundRippleEffect rows={50} cols={60} />
    </div>
  );
}

export default Reminders;
