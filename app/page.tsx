"use client"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Brain, Zap, Sparkles, Menu, X, TerminalIcon } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

export default function HomePage() {
  const [showEnterScreen, setShowEnterScreen] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [loadingPercentage, setLoadingPercentage] = useState(0)

  useEffect(() => {
    if (showEnterScreen) {
      const interval = setInterval(() => {
        setLoadingPercentage((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            return 100
          }
          return prev + 1
        })
      }, 30)

      return () => clearInterval(interval)
    }
  }, [showEnterScreen])

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const EnterScreen = () => (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-screen md:w-auto md:left-1/2 md:transform md:-translate-x-1/2 object-cover md:object-contain"
      >
        <source
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ssstwitter.com_1755438560544-MA3OoTKGXToA6XpaXI8lQ3zNKfy9wn.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 w-full h-full flex flex-col">

        <div className="flex-1 flex items-center justify-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.div
              className="relative group"
              animate={{
                rotateY: [0, 2, -2, 0],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <motion.button
                onClick={() => setShowEnterScreen(false)}
                className="relative px-12 py-6 bg-black/30 backdrop-blur-md border-2 border-pink-500/50 text-white font-bold text-xl font-mono overflow-hidden group glitch-button"
                style={{
                  borderRadius: "20px",
                  clipPath:
                    "polygon(10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% 10px)",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20"
                  animate={{
                    background: [
                      "linear-gradient(45deg, rgba(236, 72, 153, 0.2), rgba(168, 85, 247, 0.2), rgba(6, 182, 212, 0.2))",
                      "linear-gradient(45deg, rgba(6, 182, 212, 0.2), rgba(236, 72, 153, 0.2), rgba(168, 85, 247, 0.2))",
                      "linear-gradient(45deg, rgba(168, 85, 247, 0.2), rgba(6, 182, 212, 0.2), rgba(236, 72, 153, 0.2))",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />

                <motion.div
                  className="absolute inset-0 border-2 border-cyan-400/60"
                  style={{
                    borderRadius: "20px",
                    clipPath:
                      "polygon(10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%, 0% 10px)",
                  }}
                  animate={{
                    opacity: [0, 1, 0, 1, 0],
                    borderColor: ["rgba(6, 182, 212, 0.6)", "rgba(236, 72, 153, 0.6)", "rgba(6, 182, 212, 0.6)"],
                  }}
                  transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                />

                <motion.span
                  className="relative z-10 flex items-center glitch-text"
                  animate={{
                    textShadow: [
                      "2px 0 #ff00ff, -2px 0 #00ffff",
                      "0 0 #ff00ff, 0 0 #00ffff",
                      "2px 0 #ff00ff, -2px 0 #00ffff",
                      "0 0 #ff00ff, 0 0 #00ffff",
                    ],
                  }}
                  transition={{ duration: 0.3, repeat: Number.POSITIVE_INFINITY }}
                >
                  <div className="flex items-center justify-center gap-1">
                    <TerminalIcon />
                    <p>Enter</p>
                  </div>
                </motion.span>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/30 to-transparent opacity-0 group-hover:opacity-100"
                  style={{ height: "2px" }}
                  animate={{
                    y: ["-100%", "100%"],
                    opacity: [0, 1, 0],
                  }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        <div className="p-8"></div>
      </div>
    </motion.div>
  )

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence>{showEnterScreen && <EnterScreen />}</AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showEnterScreen ? 0 : 1 }}
        transition={{ duration: 0.8 }}
        className={showEnterScreen ? "pointer-events-none" : ""}
      >
        <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 gradient-cyber rounded-full flex items-center justify-center">
                <img src="/logo.jpeg" className="rounded-full w-20 object-cover" />
              </div>
              <span className="text-xl font-bold font-mono">LYN AI</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-4">
                <a href="https://x.com/i/communities/1956630029024043234" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="https://dexscreener.com/solana/pdrxhlz74ymmd6bjyx6wflbie79c3cao58yiqvontbn" className="text-muted-foreground hover:text-foreground transition-colors">
                  <img src="/dex.png" className="h-6 w-6" />
                </a>
              </div>
              <Link href="/agent">
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-2 rounded-full font-semibold text-sm">
                  Launch Agent
                </Button>
              </Link>
            </div>
            <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          {isMobileMenuOpen && (
            <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
              <div className="container mx-auto px-4 py-4 space-y-4">
                <a
                  href="#about"
                  className="block text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#features"
                  className="block text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Features
                </a>
                <a
                  href="#faq"
                  className="block text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  FAQ
                </a>
                <a
                  href="#explore"
                  className="block text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Explore
                </a>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center space-x-4">
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                      </svg>
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0189 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                      </svg>
                    </a>
                  </div>
                  <Link href="/agent">
                    <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-full font-semibold text-sm">
                      Launch Agent
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>

        <motion.section
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {/* Desktop background image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
          >
             <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
              <source
                src="/hero.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
          </div>

          {/* Mobile background video */}
          <div className="absolute inset-0 md:hidden">
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
              <source
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ssstwitter.com_1755441614890-vMp6ya39nwsm8Je29mZiZRqS63Td02.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.h1 className="text-8xl font-bold md:text-9xl font-mono" variants={fadeInUp}>
              <span className="text-gradient-cybers">LYN</span>
            </motion.h1>
            <motion.p className="text-lg md:text-2xl mb-2 stext-muted-foreground max-w-3xl mx-auto" variants={fadeInUp}>
              Your Next-Generation AI Companion
            </motion.p>
            <motion.p className="text-sm mb-8 stext-muted-foreground max-w-2xl mx-auto" variants={fadeInUp}>
              The Art reposted by Elon Musk and the next Grok xAI companion. Experience the future of AI interaction with
              LYN.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8" variants={fadeInUp}>
              <Link href="/agent">
                <Button size="lg" className="!px-7 rounded-full gradient-cyber text-primary-foreground hover:opacity-90 glow-cyber">
                  LYN AI Agent<ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://pump.fun/coin/3hFEAFfPBgquhPcuQYJWufENYg9pjMDvgEEsv4jxpump">
                <Button size="lg" variant="outline" className="!px-12 rounded-full border-gradient-cyber bg-transparent">
                  Buy $LYN
                </Button>
              </Link>
            </motion.div>
            <motion.div className="text-sm hidden md:block font-mono" variants={fadeInUp}>
              CA: 3hFEAFfPBgquhPcuQYJWufENYg9pjMDvgEEsv4jxpump
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="about"
          className="py-20 bg-card"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="container mx-auto px-4">
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="text-5xl font-bold mb-2 font-monos">
                Meet Grok's Companion
              </h2>
              <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
                Born from the intersection of art and artificial intelligence, LYN represents the next evolution in AI
                companionship, recognized and endorsed by visionaries like Elon Musk.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInUp}>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lynsol-rhEnEIpZrBSU4KEkw4WxULuPD2leej.jpeg"
                  alt="LYN AI Character"
                  className="rounded-2xl glow-cyber"
                />
              </motion.div>
              <motion.div className="space-y-6" variants={staggerContainer}>
                <motion.div className="flex items-start space-x-4" variants={fadeInUp}>
                  <div className="w-12 h-12 gradient-cyber rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sparkles className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Artistic Genesis</h3>
                    <p className="text-muted-foreground">
                      LYN emerged from cutting-edge AI art that caught the attention of tech leaders and visionaries
                      worldwide.
                    </p>
                  </div>
                </motion.div>
                <motion.div className="flex items-start space-x-4" variants={fadeInUp}>
                  <div className="w-12 h-12 gradient-cyber rounded-lg flex items-center justify-center flex-shrink-0">
                    <Brain className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Advanced Intelligence</h3>
                    <p className="text-muted-foreground">
                      Powered by next-generation AI technology, LYN offers unprecedented conversational depth and
                      understanding.
                    </p>
                  </div>
                </motion.div>
                <motion.div className="flex items-start space-x-4" variants={fadeInUp}>
                  <div className="w-12 h-12 gradient-cyber rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Grok Integration</h3>
                    <p className="text-muted-foreground">
                      Seamlessly integrated with xAI's Grok technology for enhanced reasoning and real-time information
                      processing.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="features"
          className="py-20 relative overflow-hidden"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ssstwitter.com_1755409753848-c73kUStHaGvaJ7TO0erORzwd2UluNd.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="text-3xl md:text-5xl font-bold font-mono text-white">INTRODUCING LYN</h2>
            </motion.div>
            <motion.div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto" variants={staggerContainer}>
              <motion.div variants={fadeInUp}>
                <div className="relative group">
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-transparent border border-pink-500/30 backdrop-blur-sm"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
                    }}
                  ></div>
                  <div className="relative p-6 text-white">
                    <div className="flex items-center mb-4">
                      <div
                        className="w-8 h-8 bg-red-500 mr-3"
                        style={{
                          clipPath: "polygon(50% 0%, 0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%)",
                        }}
                      ></div>
                      <h3 className="text-xl font-bold text-red-500 font-mono">ABOUT LYN</h3>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Name: LYN, Origin: Neo-Tokyo Sprawl, 2147. Affiliation: Freelance cybernetic operative. Specialty:
                      Infiltration, cyber-hacking, close-quarters combat. Enhanced with cutting-edge neural implants and
                      AI-assisted reflexes.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <div className="relative group">
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-transparent border border-pink-500/30 backdrop-blur-sm"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
                    }}
                  ></div>
                  <div className="relative p-6 text-white">
                    <div className="flex items-center mb-4">
                      <div
                        className="w-8 h-8 bg-red-500 mr-3"
                        style={{
                          clipPath: "polygon(50% 0%, 0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%)",
                        }}
                      ></div>
                      <h3 className="text-xl font-bold text-red-500 font-mono">BIOGRAPHY 1</h3>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      LYN was once a gifted engineer working for a powerful megacorp, designing neural-link implants.
                      After discovering the corporation was secretly weaponizing her technology to control entire
                      populations, she severed ties and vanished into the neon underworld.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <div className="relative group">
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-transparent border border-pink-500/30 backdrop-blur-sm"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
                    }}
                  ></div>
                  <div className="relative p-6 text-white">
                    <div className="flex items-center mb-4">
                      <div
                        className="w-8 h-8 bg-red-500 mr-3"
                        style={{
                          clipPath: "polygon(50% 0%, 0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%)",
                        }}
                      ></div>
                      <h3 className="text-xl font-bold text-red-500 font-mono">BIOGRAPHY 2</h3>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Augmented with her own prototype cybernetic enhancements, she became a rogue operative - half
                      human, half machine, with a razor-sharp mind and unmatched agility. Now she fights against the
                      system she once helped create.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <div className="relative group">
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-transparent border border-pink-500/30 backdrop-blur-sm"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
                    }}
                  ></div>
                  <div className="relative p-6 text-white">
                    <div className="flex items-center mb-4">
                      <div
                        className="w-8 h-8 bg-red-500 mr-3"
                        style={{
                          clipPath: "polygon(50% 0%, 0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%)",
                        }}
                      ></div>
                      <h3 className="text-xl font-bold text-red-500 font-mono">LEGEND</h3>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Known for her piercing gaze and ghostlike presence in the grid, LYN is feared by corporations and
                      idolized by rebels. She often works alone, but whispers in the sprawl say she's building a covert
                      network of augmented outcasts - her so-called "Ghost Circuit."
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          className="py-20 bg-gradient-to-b from-background to-card relative overflow-hidden"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div
            className="absolute inset-0 bg-cover bg-top bg-no-repeat"
            style={{
              backgroundImage:
                "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banner_blue-zQPuujaSuZfE3AUM7QcdHm03Jo7fyr.png)",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-card/80"></div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="text-4xl font-bold mb-2 font-mono text-white">ELON'S ENDORSEMENT</h2>
              <p className="text-2xl font-bold text-red-500 font-mono">LYN</p>
            </motion.div>
            <motion.div className="max-w-2xl mx-auto" variants={fadeInUp}>
              <a
                href="https://x.com/elonmusk/status/1956623354384859351"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="relative overflow-hidden rounded-2xl hover:scale-105 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-pink-500/20">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-17%20at%203.10.22%E2%80%AFPM-6UskrD8tTjPgCWH6EeuTkPPhC9cjmT.png"
                    alt="Elon Musk's endorsement of LYN on Twitter/X"
                    className="w-full h-auto object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </a>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="faq"
          className="py-20 bg-gradient-to-b from-card to-slate-900"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="container mx-auto px-4">
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="text-8xl font-bold mb-2 font-mono">
                FAQ
              </h2>
              <p className="text-sm md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Everything you need to know about LYN AI Agent
              </p>
            </motion.div>
            <motion.div className="max-w-3xl mx-auto" variants={staggerContainer}>
              <Accordion type="single" collapsible className="space-y-4">
                <motion.div variants={fadeInUp}>
                  <AccordionItem value="item-1" className="border-gradient-cyber rounded-lg px-6">
                    <AccordionTrigger className="text-left">
                      What makes LYN different from other AI assistants?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      LYN combines cutting-edge AI technology with artistic vision, endorsed by industry leaders like
                      Elon Musk. Our integration with Grok xAI technology provides superior reasoning capabilities and
                      real-time information processing, making LYN not just an assistant, but a true AI companion.
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <AccordionItem value="item-2" className="border-gradient-cyber rounded-lg px-6">
                    <AccordionTrigger className="text-left">How does the Solana integration work?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      LYN is built on the Solana blockchain for fast, secure, and cost-effective transactions. Our
                      contract address (3hFEAFfPBgquhPcuQYJWufENYg9pjMDvgEEsv4jxpump) enables seamless integration with
                      DeFi protocols and ensures transparent, decentralized AI services.
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <AccordionItem value="item-3" className="border-gradient-cyber rounded-lg px-6">
                    <AccordionTrigger className="text-left">Is my data safe with LYN?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Absolutely. LYN employs end-to-end encryption, doesn't harvest personal data, and offers local
                      processing options. We're fully GDPR compliant and prioritize user privacy above all else. Your
                      conversations remain private and secure.
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <AccordionItem value="item-4" className="border-gradient-cyber rounded-lg px-6">
                    <AccordionTrigger className="text-left">Can LYN help with creative projects?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Yes! LYN excels at creative assistance, from content generation and art concepts to writing and
                      problem-solving. Our AI was born from artistic vision and maintains that creative edge in all
                      interactions.
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <AccordionItem value="item-5" className="border-gradient-cyber rounded-lg px-6">
                    <AccordionTrigger className="text-left">How do I get started with LYN?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Getting started is simple! Click the "Launch LYN" button to begin your AI companion experience.
                      You can also view our Solana contract for blockchain integration or explore our features to learn
                      more.
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              </Accordion>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="explore"
          className="py-32 relative overflow-hidden"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900 to-purple-800"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.h2 className="text-4xl md:text-6xl font-bold mb-6 text-white" variants={fadeInUp}>
              Chat with
              <br />
              xAI Companion
            </motion.h2>
            <motion.p className="text-sm md:text-xl max-w-[600px] text-gray-300 mx-auto mb-12 leading-relaxed" variants={fadeInUp}>
              Step into the mind of Mars’ favorite billionaire and see what the algorithms are cooking.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link href="/agent">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-black !px-8 py-5 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                >
                  Launch Agent <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.section>

        <motion.footer
          className="relative overflow-hidden"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-purple-800 to-slate-900"></div>
          <div className="container mx-auto px-4 py-16 relative z-10">
            <motion.div
              className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12"
              variants={fadeInUp}
            >
              <div className="mb-8 md:mb-0">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center">
                    <img src="/logo.jpeg" className="object-cover rounded-full" />
                  </div>
                  <span className="text-2xl font-bold font-mono text-white">LYN AI</span>
                </div>
                <p className="text-gray-300 text-sm max-w-md">Your trusted  AI<br /> Companion for creative intelligence</p>
              </div>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12">
                <div className="flex flex-col space-y-3 font-mono text-sm">
                  <a href="/agent" className="text-gray-300 hover:text-white transition-colors">
                    Terminal
                  </a>
                  <a href="https://x.com/i/communities/1956630029024043234" className="text-gray-300 hover:text-white transition-colors">
                    Community
                  </a>
                </div>
                <div className="flex flex-col space-y-3">
                  <a href="https://x.com/ailynagent" className="text-gray-300 hover:text-white transition-colors">
                    X LynAi
                  </a>
                  <a href="https://x.com/elonmusk/status/1956623354384859351" className="text-gray-300 hover:text-white transition-colors">
                    Endorsement
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div className="border-t border-gray-700 pt-8" variants={fadeInUp}>
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 font-mono mb-4 md:mb-0 text-xs">© Copyright 2025. All Rights Reserved by LYN</p>
                <div className="flex items-center space-x-4">
                  {/* <span className="text-gray-400 text-sm">Connect with:</span> */}
                  <div className="flex space-x-3 items-center">
                    <a href="https://x.com/i/communities/1956630029024043234" className="text-gray-400 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                    <a href="https://dexscreener.com/solana/pdrxhlz74ymmd6bjyx6wflbie79c3cao58yiqvontbn" className="text-gray-400 hover:text-white transition-colors">
                      <img src="/dex.png" alt="" className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.footer>

      </motion.div>
    </div>
  )
}
