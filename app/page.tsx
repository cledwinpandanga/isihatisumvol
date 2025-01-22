"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

export default function Page() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Main Content */}
      <div className="w-full h-full relative">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('./bw.jpeg')`,
            filter: "brightness(0.7)",
          }}
        />

        {/* Content Overlay */}
        <div className="relative h-full flex flex-col items-center justify-start text-center px-4 md:px-8 lg:px-16">
          <div className="mt-2 sm:mt-8" />
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.6,
              duration: 1,
              ease: "easeOut",
            }}
            className="text-4xl md:text-8xl lg:text-[80px] font-extrabold font-luckiest-guy-bold drop-shadow-md text-yellow-300 mb-2 sm:mb-6 md:mb-8"
          >
            HALO TEMAN-TEMAN !
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 1.2,
              duration: 1,
              ease: "easeOut",
            }}
            className="max-w-5xl text-yellow-300 text-[10px] sm:text-sm"
          >
            Perjalanan kalian di AMSA adalah langkah luar biasa menuju masa depan yang gemilang. Tetap semangat dalam
            setiap kegiatan, kolaborasi, dan kontribusi kalian. Ingat, setiap usaha kecil yang kalian lakukan akan
            membawa dampak besar, baik untuk diri sendiri, tim, maupun masyarakat. Jangan pernah takut untuk bermimpi
            besar dan melangkah maju, karena di sinilah kalian belajar, tumbuh, dan menginspirasi. Kalau rintangan
            datang, hadapi dengan keberanian dan senyuman, karena kalian adalah generasi pemimpin yang penuh potensi.
          </motion.p>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 1.8,
              duration: 1,
              ease: "easeOut",
            }}
            className="max-w-5xl w-full text-end text-[10px] sm:text-sm text-yellow-300 italic font-bold mt-4 mb-0 sm:mb-8"
          >
            Sumba Volunteer - 2025
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.4, duration: 1, ease: "easeOut" }}
          >
            <button
              onClick={() => setShowModal(true)}
              className="bg-white hover:bg-yellow-300/80 text-black hover:text-white font-normal text-[10px] sm:text-sm px-8 py-1 rounded-full"
            >
              Pesan dari Kami
            </button>
          </motion.div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black"
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 z-50 text-white hover:bg-white/10"
            >
              <p className="size-10">X</p>
            </button>

            <video autoPlay controls className="w-full h-full object-cover">
              <source src="/final_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

