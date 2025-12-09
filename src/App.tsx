import { useState } from "react";
import Timer from "./components/Timer";

type TimerMode = "pomodoro" | "sBreak";

const WORK_TIME = 25 * 60;
const SHORT_BREAK = 5 * 60;

function App() {
  const [mode, setMode] = useState<TimerMode>("pomodoro");

  const totalTime = mode === "pomodoro" ? WORK_TIME : SHORT_BREAK;

  return (
    <div style={{ padding: 40 }}>
      <h1>Pomodoro</h1>

      {/* ✅ Timer placed INSIDE return */}
      <Timer
        key={mode}                // ✅ Forces reset on mode change
        totalTime={totalTime}
        color="color1"
        selectT={mode}
        setTimer={setMode}
      />

      {/* ✅ Simple mode display */}
      <p style={{ marginTop: 20 }}>
        Current mode: <strong>{mode}</strong>
      </p>
    </div>
  );
}

export default App;