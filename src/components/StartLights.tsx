import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { motion } from "framer-motion";

import startSound from "../assets/sounds/f1-one.mp3";

const StartLights = () => {
  const [lights, setLights] = useState([false, false, false, false, false]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showStartButton, setShowStartButton] = useState(false);
  const navigate = useNavigate();

  const handleStart = () => {
    const audio = new Audio(startSound);
    audio.play();

    setIsTransitioning(true);

    setTimeout(() => {
      navigate("/home");
    }, 1500);
  };

  useEffect(() => {
    const lightSequence = async () => {
      // 5개의 신호등을 순차적으로 켜기
      for (let i = 0; i < 5; i++) {
        await new Promise((resolve) => setTimeout(resolve, 800));
        setLights((prev) => prev.map((_, index) => index <= i));
      }

      // 1초 대기 후 모든 신호등 끄기
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // 모든 신호등 끄기
      setLights([false, false, false, false, false]);

      // Start 버튼 활성화
      setShowStartButton(true);
    };

    lightSequence();
  }, [navigate]);

  return (
    <>
      <div
        className={`fixed inset-0 bg-white transition-all duration-1500 ${
          isTransitioning ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
        style={{
          transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      >
        <div className="flex flex-col justify-center items-center h-full">
          <div className="flex space-x-4 ">
            {lights.map((isOn, index) => (
              <div
                key={index}
                className={`w-16 h-16 rounded-full transition-all duration-300 ${
                  isOn
                    ? "bg-red-500 shadow-lg shadow-red-500/50"
                    : "bg-gray-300"
                }`}
                style={{
                  boxShadow: isOn ? "0 0 30px rgba(239, 68, 68, 0.6)" : "none",
                }}
              />
            ))}
          </div>
          <div className="mt-8">
            <motion.button
              onClick={showStartButton ? handleStart : undefined}
              whileHover={{
                scale: 1.1,
                rotate: -1,
                transition: { type: "spring", stiffness: 300 },
              }}
              whileTap={{
                scale: 0.95,
                rotate: 0,
                transition: { type: "spring", stiffness: 500 },
              }}
              className={`relative px-10 py-4 rounded-full text-xl font-extrabold tracking-widest uppercase transition-all duration-300 overflow-hidden
    ${
      showStartButton
        ? "bg-[linear-gradient(135deg,_#ff1a1a,_#ffaa00)] text-white border-4 border-white shadow-xl hover:border-yellow-400 hover:scale-105"
        : "bg-gray-500 text-gray-300 border-4 border-gray-400 cursor-not-allowed"
    }
  `}
            >
              {showStartButton && (
                <span className="absolute inset-0 rounded-full bg-yellow-400 opacity-20 blur-xl animate-ping z-[-1]" />
              )}

              {showStartButton ? "Start Race" : "Get Ready..."}
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartLights;
