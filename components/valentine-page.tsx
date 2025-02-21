import { motion, useAnimation } from "framer-motion"
import { Heart } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const FloatingHeart = ({ delay = 0 }) => (
  <motion.div
    initial={{ y: 0, opacity: 1 }}
    animate={{
      y: -100,
      opacity: [1, 1, 0],
      x: Math.random() * 50 - 25,
    }}
    transition={{
      duration: 2,
      delay,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeOut",
    }}
    className="absolute bottom-0"
  >
    <Heart className="text-rose-400 w-4 h-4 fill-current" />
  </motion.div>
)

const ShakingEmoji = ({ children }) => (
  <motion.span
    animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
    transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1.5 }}
    className="inline-block"
  >
    {children}
  </motion.span>
)

export default function ValentinePage() {
  const [showCelebration, setShowCelebration] = useState(false)
  const [sending, setSending] = useState(false)
  const noButtonControls = useAnimation()
  const router = useRouter()

  const handleNoHover = async () => {
    await noButtonControls.start({
      x: Math.random() * 200 - 100,
      y: Math.random() * 100 - 50,
      transition: { duration: 0.3 },
    })
  }

  const handleYes = async () => {
    setShowCelebration(true)
    setSending(true)

    try {
      // Send email notification
      await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "your.email@example.com", // Replace with your email
        }),
      })
    } catch (error) {
      console.error("Failed to send email:", error)
    }

    // Navigate to celebration page after a short delay
    setTimeout(() => {
      router.push("/celebration")
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-100 to-pink-200 flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden">
      {/* Rest of the component remains the same */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <FloatingHeart key={i} delay={i * 0.1} />
        ))}
      </div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 text-center relative"
      >
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
          <h1 className="text-4xl md:text-6xl font-bold text-rose-500 mb-8 font-dancing">
            Dear Joy Morenikeji
            <motion.span
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="inline-block ml-2"
            >
              <Heart className="inline-block w-8 h-8 md:w-12 md:h-12 text-rose-500 fill-current" />
            </motion.span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-6 relative z-10 mb-12"
        >
          <div className="max-w-2xl mx-auto space-y-4 text-lg md:text-2xl text-rose-700 font-medium">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
              My Valentine has always been about you,
            </motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
              still about you,
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="font-bold text-2xl md:text-3xl text-rose-600"
            >
              always will be about you.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-3xl md:text-4xl font-dancing text-rose-600 mt-8"
          >
            Will you be my Valentine?
          </motion.div>

          {!showCelebration ? (
            <div className="flex justify-center gap-4 mt-8">
              <Button
                onClick={handleYes}
                className="bg-rose-500 hover:bg-rose-600 text-white text-lg px-8 py-6 rounded-full font-semibold"
              >
                Yes, I will! <ShakingEmoji>💝</ShakingEmoji>
              </Button>
              <motion.div animate={noButtonControls}>
                <Button
                  onMouseEnter={handleNoHover}
                  variant="outline"
                  className="border-rose-300 text-lg px-8 py-6 rounded-full font-semibold"
                >
                  No <ShakingEmoji>💔</ShakingEmoji>
                </Button>
              </motion.div>
            </div>
          ) : (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring" }}
              className="text-2xl md:text-3xl text-rose-600 font-dancing mt-8"
            >
              Yay! I love you! <ShakingEmoji>💖</ShakingEmoji>
            </motion.div>
          )}
        </motion.div>

        {showCelebration && (
          <motion.div className="absolute inset-0 pointer-events-none">
            {[...Array(100)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  scale: 0,
                  x: "50%",
                  y: "50%",
                }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  scale: 1,
                  x: `${Math.random() * 100}%`,
                  y: `${Math.random() * 100}%`,
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.05,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 3,
                }}
                className="absolute"
              >
                <Heart className="text-rose-500 w-4 h-4 fill-current" />
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

