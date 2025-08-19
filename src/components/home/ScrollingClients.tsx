import { motion } from "framer-motion";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

const clientNames = [
  "VITOSHA",
  "IMPETUS",
  "CYEN",
  "SEEDBLINK",
  "TECHNOLOGY",
  "INNOVATION",
  "SECURITY",
  "SOLUTIONS",
];

export function ScrollingClients() {
  return (
    <AnimatedBackground className="w-[99.1vw]">
      <div className="w-full bg-gray-500 overflow-hidden relative z-2">
        <div className="w-full py-12 relative flex items-center">
          <motion.div
            className="flex whitespace-nowrap absolute"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[
              ...clientNames,
              ...clientNames,
              ...clientNames,
              ...clientNames,
            ].map((name, index) => (
              <span
                key={`${name}-${index}`}
                className="text-white font-bold text-xl mx-8"
              >
                {name}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </AnimatedBackground>
  );
}
