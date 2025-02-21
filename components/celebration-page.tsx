"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Heart } from "lucide-react"

export default function CelebrationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-100 to-pink-200 py-12 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex flex-col lg:flex-row gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:w-1/2"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 text-center relative overflow-hidden h-full">
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [-20, -40, -20],
                      x: Math.random() * 20 - 10,
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      delay: i * 0.2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                    className="absolute"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                  >
                    <Heart className="text-rose-300 w-4 h-4 fill-current" />
                  </motion.div>
                ))}
              </div>

              <div className="relative z-10 space-y-6 font-dancing">
                <p className="text-xl md:text-2xl text-rose-700 leading-relaxed">
                Unlike every other person I chose to love you everyday 
I chose to show you love everyday 



                </p>
                <p className="text-xl md:text-2xl text-rose-700 leading-relaxed">
                All I want is to share everyday with you; the little things and the big things, the love and the laughter, the anger and the emotions


                </p>
                <motion.p
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                  className="text-3xl md:text-4xl font-bold text-rose-600 pt-4"
                >
                  Happy Valentine ❤️
                </motion.p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:w-1/2"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-4">
                <div>
                  <Image
                    src="https://g0e6rrwqbju8beeg.public.blob.vercel-storage.com/42225d37-7297-4b2e-9c66-5a63ffdd7599-bJLL0J5pJxxPprgat7QuPaTC0VP9cG.jpeg"
                    alt="Romantic dinner"
                    width={600}
                    height={800}
                    className="h-auto max-w-full rounded-lg object-cover"
                  />
                </div>
                <div>
                  <Image
                    src="https://g0e6rrwqbju8beeg.public.blob.vercel-storage.com/5d2f2afc-978c-45c5-b2ce-5d90e86e8aae-IHW2ZhzkvISZERQJvHkOrw6uKFZ2JU.jpeg"
                    alt="Blue light portrait"
                    width={600}
                    height={800}
                    className="h-auto max-w-full rounded-lg object-cover"
                  />
                </div>
              </div>
              <div className="grid gap-4">
                <div>
                  <Image
                    src="https://g0e6rrwqbju8beeg.public.blob.vercel-storage.com/afad8361-ffbf-4499-8b17-8797901dae74-NJIBuqoYDId1h1XNhiAbyJIkpw4MJq.jpeg"
                    alt="Mirror selfie"
                    width={600}
                    height={800}
                    className="h-auto max-w-full rounded-lg object-cover"
                  />
                </div>
                <div>
                  <Image
                    src="https://g0e6rrwqbju8beeg.public.blob.vercel-storage.com/42225d37-7297-4b2e-9c66-5a63ffdd7599-bJLL0J5pJxxPprgat7QuPaTC0VP9cG.jpeg"
                    alt="Car selfie"
                    width={600}
                    height={800}
                    className="h-auto max-w-full rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

