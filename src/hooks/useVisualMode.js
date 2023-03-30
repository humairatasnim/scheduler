import { useState } from 'react';

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(mode, replace = false) {
    if (replace) {
      setHistory(prev => [...prev].slice(1));
      setHistory(prev => [mode, ...prev]);
      setMode(mode);
    } else {
      setHistory(prev => [mode, ...prev]);
      setMode(mode); 
    }
  }

  function back() {
    if (history.length > 1) {
      setMode(history[1]);
      setHistory(prev => [...prev].slice(1));
    }
  }

  return { mode, transition, back };
};