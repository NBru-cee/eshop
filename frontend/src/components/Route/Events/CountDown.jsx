import React, { useEffect, useState } from "react";

const CountDown = () => {
      const calculateTimeLeft = () => {
            const difference = +new Date("2023-06-30") - +new Date();
            let timeLeft = {};
            if (difference > 0) {
                  timeLeft = {
                        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                        minutes: Math.floor((difference / 1000 / 60) % 60),
                        seconds: Math.floor((difference / 1000) % 60),
                  };
            }
            return timeLeft;
      };
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
      useEffect(() => {
            const timer = setTimeout(() => {
                  setTimeLeft(calculateTimeLeft());
            }, 1000);
            return () => clearTimeout(timer);
      });

      const timerComponent = Object.keys(timeLeft).map((interval, index) => {
            if (!timeLeft[interval]) {
                  return null;
            }
            return (
                  <span className="text-[25px] text-[#475ad2]" key={index}>
                        {timeLeft[interval]}
                        {interval}{" "}
                  </span>
            );
      });

      return (
            <div>
                  {timerComponent.length ? (
                        timerComponent
                  ) : (
                        <span className="text-[red] text-[25px]">
                              Time's up
                        </span>
                  )}
            </div>
      );
};

export default CountDown;
