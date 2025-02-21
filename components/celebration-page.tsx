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
                  Life is full of twists and turns along the way, everyone gets to choose their own path in search of
                  fulfillment.
                </p>
                <p className="text-xl md:text-2xl text-rose-700 leading-relaxed">
                  I am glad I chose you as my partner in this search and that alone gave me all the fulfillment I want,
                  and I want you to also know that no matter the twists and turns I&apos;ll always be beside you and
                  I&apos;ll always be that loyal and loving man.
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
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0e9e39d1-bbe5-43da-baab-7035a76e2dd7-LO7bex2yGILVyTVGukFPiPqeyeZsSo.jpeg"
                    alt="Romantic dinner"
                    width={600}
                    height={800}
                    className="h-auto max-w-full rounded-lg object-cover"
                  />
                </div>
                <div>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bc87579c-fc44-47a1-8dbb-d9dec1d65f68-PW7KlxkvCQRSkXlUzT4UVBJONwEyTp.jpeg"
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
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/48b9cefd-86ea-499b-ab03-bc80923223d1-ykIHubLDXI8OxXx10MeVhi8ZB9r145.jpeg"
                    alt="Mirror selfie"
                    width={600}
                    height={800}
                    className="h-auto max-w-full rounded-lg object-cover"
                  />
                </div>
                <div>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a6502fc5-aa0c-44c3-994c-62538ab3c779-ew7IWKyygdsIO6xUFm5gX331iiQsB8.jpeg"
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

