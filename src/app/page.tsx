'use client';
import { useRef } from "react";

import NumberTicker from "../components/ui/number-ticker";
import ConfettiSideCannons from "../components/ui/ConfettiSideCannons";
import TypingAnimation from "@/components/ui/typing-animation";
import IconCloud from "@/components/ui/icon-cloud";
import img1 from "@/images/aa.jpeg";
import img2 from "@/images/bb.jpeg";
import img3 from "@/images/cc.jpeg";
import img4 from "@/images/dd.jpeg";
import img5 from "@/images/ee.jpeg";
import img6 from "@/images/ff.jpeg";
import img7 from "@/images/gg.jpeg";
import img8 from "@/images/hh.jpeg";

const images = [
  img1.src,
  img2.src,
  img3.src,
  img4.src,
  img5.src,
  img6.src,
  img7.src,
  img8.src,
];



export default function Home() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const handlePlay = async () => {
    try {
      if (audioRef.current) {
        await audioRef.current.play();
        console.log("Audio is playing!");
      }
    } catch (error) {
      console.error("Audio playback failed:", error);
    }
  };
  // useEffect(()=>{
  //   handlePlay();
  // },[]);

  return (
    <div className="w-full flex flex-col items-center justify-center p-4 bg-gradient-to-b from-green-700 to-indigo-900 min-h-screen">
      {/* Confetti Cannons */}
      <ConfettiSideCannons />

      {/* Number Ticker */}
      <NumberTicker
        value={28}
        direction="up"
        delay={1}
        decimalPlaces={0}
        className="text-5xl sm:text-6xl lg:text-7xl font-bold text-yellow-400"
      />

      {/* Typing Animations */}
      <div className="mt-4 text-center">
        <TypingAnimation
          className="bg-gradient-to-r from-red-500 via-white to-purple-500 bg-clip-text text-transparent animate-rainbow text-3xl sm:text-4xl lg:text-5xl font-semibold"
          delay={2}
        >
          Happy Birthday
        </TypingAnimation>
        <TypingAnimation className="bg-gradient-to-r from-red-500 via-white to-purple-500 bg-clip-text text-transparent animate-rainbow text-3xl sm:text-4xl lg:text-5xl font-semibold" delay={2}>
          Dear Dev Ji
        </TypingAnimation>
      </div>

      {/* Audio Autoplay */}
      <audio ref={audioRef} autoPlay >
        <source src="/happy-birthday-220024.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <button
        onClick={handlePlay}
        className="mt-4 px-6 py-3 bg-yellow-400 text-black rounded-lg font-semibold"
      >
        Play Birthday Song 🎵
      </button>
      {/* Icon Cloud */}
      <div
        className="relative flex w-full max-w-sm sm:max-w-md md:max-w-lg items-center justify-center overflow-hidden rounded-full border border-gray-500 
        mx-auto mt-6 bg-white/10 p-6 sm:p-10 lg:p-14 shadow-lg"
      >
        <IconCloud imageArray={images} />
      </div>

      {/* Footer */}
      <footer className="mt-8 text-center text-white text-sm sm:text-base">
        Made with ❤️ for a special celebration. <br />
        by Girendra Sinsinwar
      </footer>
    </div>
  );
}
