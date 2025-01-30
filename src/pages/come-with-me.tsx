import { useState } from "react";
import { motion } from "framer-motion";

export default function Buttons() {
  const [yesSize, setYesSize] = useState(1);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-500 text-white text-center">
      <h1 className="text-4xl font-bold">
        So will you come with me on a movie date? ❤️
      </h1>
      <div className="mt-6 flex gap-4">
        <motion.button
          className="bg-white text-green-500 px-6 py-3 rounded-lg text-lg font-bold shadow-lg"
          style={{ transform: `scale(${yesSize})` }}
          onClick={() => alert("Me along with something is waiting for youuuuu! 💖")}
          whileTap={{
            scale: 1.5,
            rotate: 360,
            opacity: 0.7,
            transition: { type: "spring", stiffness: 300, damping: 10 },
          }}
          whileHover={{
            scale: 1.2,
            rotate: 10,
            transition: { type: "spring", stiffness: 200, damping: 10 },
          }}
        >
          Yes
        </motion.button>

        <motion.button
          className="bg-white text-green-500 px-6 py-3 rounded-lg text-lg font-bold shadow-lg"
          onClick={() => setYesSize((prev) => prev * 1.2)}
        >
          No
        </motion.button>
      </div>

      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: yesSize,
          rotate: [0, 10, -10, 0],
          opacity: [1, 0.8, 1],
        }}
        transition={{
          scale: { type: "spring", stiffness: 300, damping: 25 },
          rotate: { type: "spring", stiffness: 100, damping: 20 },
          opacity: { duration: 0.2, ease: "easeInOut" },
        }}
      />
    </div>
  );
}
