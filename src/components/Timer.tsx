import { useEffect, useState } from "react";
import formatTime from "../tools/formatTime";

type TimerMode = "pomodoro" | "sBreak";

type TimerProps = {
  totalTime: number;
  color: "color1" | "color2" | "color3";
  selectT: TimerMode;
  setTimer: (mode: TimerMode) => void;
};

const Timer = ({ totalTime, color, selectT, setTimer }: TimerProps) => {
  const [timeRemaining, setTimeRemaining] = useState<number>(totalTime);
  const [isPaused, setIsPaused] = useState<boolean>(true);

  const handleTimer = (word: TimerMode): TimerMode => {
    return word === "pomodoro" ? "sBreak" : "pomodoro";
  };

  // Countdown logic
  useEffect(() => {
    if (isPaused) return;
  
    const id = window.setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          // ✅ Safe: state updates occur inside the interval callback
          setIsPaused(true);
  
          const audio = new Audio("/alarm.mp3");
          audio.play();
  
          setTimer(handleTimer(selectT));
          return 0;
        }
  
        return prev - 1;
      });
    }, 1000);
  
    return () => clearInterval(id);
  }, [isPaused, selectT, setTimer]);

  const calculateProgress = (): number => {
    return (timeRemaining / totalTime) * 100;
  };

  return (
    <div className="flex justify-center items-center">
      <div className="p-6 bg-gradient-to-tl from-[#2E325A] to-[#0E112A] rounded-full drop-shadow-custom">
        <div className="relative min-[1300px]:w-96 min-[1300px]:h-96 flex items-center justify-center flex-col bg-[#161932] rounded-full h-64 w-64 ">
          <svg
            viewBox="0 0 120 120"
            className={
              "absolute inset-0 " +
              (color === "color1"
                ? "stroke-color1"
                : color === "color2"
                ? "stroke-color2"
                : "stroke-color3")
            }
          >
            <circle cx="60" cy="60" r="54" fill="none" stroke="none" />
            <circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              strokeWidth="4"
              strokeDasharray="339.292"
              strokeDashoffset={
                339.292 - (calculateProgress() / 100) * 339.292
              }
              strokeLinecap="round"
              transform="rotate(-90) translate(-120)"
              style={{ transition: "stroke-dashoffset 1s linear" }}
            />
          </svg>

          <div className="font-bold text-fontcolor1 min-[1300px]:text-8xl leading-snug font-sans text-7xl">
            {formatTime(timeRemaining)}
          </div>

          {isPaused ? (
            <div
              className="z-10 text-fontcolor1 font-bold tracking-[15px] min-[1300px]:text-xl hover:cursor-pointer align-middle text-lg mt-3"
              onClick={() => setIsPaused(false)}
            >
              PLAY
            </div>
            
          ) : (
            <div
              className="z-10 text-fontcolor1 font-bold tracking-[15px] min-[1300px]:text-xl hover:cursor-pointer align-middle text-lg mt-3"
              onClick={() => setIsPaused(true)}
            >
              PAUSE
            </div>
          )}
          {
            <div
              className="z-10 text-fontcolor1 font-bold tracking-[15px] min-[1300px]:text-xl hover:cursor-pointer align-middle text-lg mt-3"
              onClick={() => setIsPaused(true)}
            >
              Set Timer Length
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Timer;
