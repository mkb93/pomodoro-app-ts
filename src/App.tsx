import { useEffect, useState } from "react";

const WORK_TIME = 25 * 60;

function App() {
  const [seconds, setSeconds] = useState<number>(WORK_TIME);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const toggle = () => setIsRunning((prev) => !prev);
  const reset = () => {
    setIsRunning(false);
    setSeconds(WORK_TIME);
  };

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return (
    <div style={{ padding: 40 }}>
      <h1>Pomodoro</h1>
      <h2>
        {minutes}:{String(secs).padStart(2, "0")}
      </h2>

      <button onClick={toggle}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button onClick={reset} style={{ marginLeft: 10 }}>
        Reset
      </button>
    </div>
  );
}

export default App;