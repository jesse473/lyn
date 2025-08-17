"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Terminal,
  Wallet,
  Zap,
  TrendingUp,
  DollarSign,
  BarChart3,
  Shield,
  Send,
  User,
  Sparkles,
  MessageSquare,
  Settings,
  HelpCircle,
  Menu,
  X,
} from "lucide-react"

interface Message {
  id: string
  type: "user" | "assistant"
  content: string
  timestamp: Date
}

const sidebarItems = [
  { icon: Terminal, label: "Terminal", active: true },
  { icon: Wallet, label: "Agent Wallet" },
  { icon: Zap, label: "Automated Tasks" },
  { icon: TrendingUp, label: "Trading", badge: "Soon" },
  { icon: BarChart3, label: "Analytics" },
]

const tokenItems = [
  { icon: DollarSign, label: "Burn Tracker", badge: "New" },
  { icon: BarChart3, label: "Metrics" },
  { icon: Shield, label: "Buy $LYN" },
  { icon: Sparkles, label: "Staking" },
]

const suggestedActions = [
  "Explain what LYN AI can do for me",
  "Give me a quick analysis for $LYN token",
  "Show me trading opportunities",
  "Help me with portfolio management",
]

const demoResponses = [
  "Hello! I'm LYN, your AI companion powered by Grok xAI technology. I can help you with trading analysis, portfolio management, and market insights. What would you like to explore today?",
  "I'm analyzing the current market conditions for $LYN token. Based on recent data, I'm seeing strong community engagement and growing adoption. The token has shown resilience in volatile market conditions.",
  "I can help you identify trading opportunities across multiple chains. My algorithms scan 24/7 for optimal entry and exit points, risk assessment, and portfolio optimization strategies.",
  "For portfolio management, I recommend diversifying across different sectors while maintaining exposure to high-growth AI and DeFi projects. Would you like me to create a personalized strategy?",
]

export default function AgentPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [typingText, setTypingText] = useState("")
  const [showComingSoon, setShowComingSoon] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const typeMessage = async (text: string) => {
    setIsTyping(true)
    setTypingText("")

    for (let i = 0; i <= text.length; i++) {
      setTypingText(text.slice(0, i))
      await new Promise((resolve) => setTimeout(resolve, 30))
    }

    setIsTyping(false)
    setTypingText("")

    const assistantMessage: Message = {
      id: Date.now().toString(),
      type: "assistant",
      content: text,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, assistantMessage])
  }

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: content.trim(),
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    // Simulate AI response
    setTimeout(() => {
      const randomResponse = demoResponses[Math.floor(Math.random() * demoResponses.length)]
      typeMessage(randomResponse)
    }, 1000)
  }

  const handleSuggestedAction = (action: string) => {
    handleSendMessage(action)
  }

  const handleSidebarClick = (item: any) => {
    if (!item.active) {
      setShowComingSoon(true)
      setTimeout(() => setShowComingSoon(false), 2000)
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-black flex">
      {/* Coming Soon Toast */}
      <AnimatePresence>
        {showComingSoon && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-4 right-4 z-50 bg-gray-900 border border-pink-500/30 rounded-lg p-4 text-white"
          >
            <div className="text-sm font-medium">Coming Soon</div>
            <div className="text-xs text-gray-400">This feature will be available soon!</div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={false}
        animate={{
          x: window.innerWidth >= 768 ? 0 : isMobileMenuOpen ? 0 : "-100%",
        }}
        className="fixed h-screen md:static w-64 bg-black backdrop-blur-xl border-r border-pink-500/20 flex flex-col z-50"
      >
        <div className="md:hidden absolute top-4 right-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Header */}
        <div className="p-6 border-b border-pink-500/20">
          <div className="flex items-center gap-3">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lyn1-rQmdjMyNM3j0GapXG4j68QjEGHpMdF.jpeg"
              alt="LYN AI"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-white font-semibold text-lg">LYN AI</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 p-4 space-y-2">
          <div className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-4">My Agent</div>

          {sidebarItems.map((item, index) => (
            <motion.div
              key={item.label}
              whileHover={{ x: 4 }}
              onClick={() => handleSidebarClick(item)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-all ${
                item.active
                  ? "bg-pink-500/10 text-white border border-pink-500/30"
                  : "text-gray-400 hover:text-white hover:bg-pink-500/5"
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{item.label}</span>
              {item.badge && (
                <Badge variant="secondary" className="ml-auto text-xs bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                  {item.badge}
                </Badge>
              )}
            </motion.div>
          ))}

          <div className="text-gray-400 text-xs font-medium uppercase tracking-wider mt-8 mb-4">LYN Token</div>

          {tokenItems.map((item, index) => (
            <motion.div
              key={item.label}
              whileHover={{ x: 4 }}
              onClick={() => handleSidebarClick({ active: false })}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-gray-400 hover:text-white hover:bg-pink-500/5 transition-all"
            >
              <item.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{item.label}</span>
              {item.badge && (
                <Badge variant="secondary" className="ml-auto text-xs bg-pink-500/20 text-pink-400 border-pink-500/30">
                  {item.badge}
                </Badge>
              )}
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-pink-500/20">
          <div className="text-gray-500 text-xs">Need help? Join our community</div>
          <div className="flex items-center gap-2 mt-2">
            <div className="w-6 h-6 bg-gray-900 rounded flex items-center justify-center">
              <MessageSquare className="w-3 h-3 text-gray-400" />
            </div>
            <div className="w-6 h-6 bg-gray-900 rounded flex items-center justify-center">
              <Settings className="w-3 h-3 text-gray-400" />
            </div>
            <div className="w-6 h-6 bg-gray-900 rounded flex items-center justify-center">
              <HelpCircle className="w-3 h-3 text-gray-400" />
            </div>
          </div>
          <div className="text-gray-600 text-xs mt-2">2025 © LYN AI. v1.1 | 0xc4f8B</div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <div className="h-16 bg-black backdrop-blur-xl border-b border-pink-500/20 flex items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden text-gray-400 hover:text-white p-2"
            >
              <Menu className="w-5 h-5" />
            </Button>
            <div className="hidden md:flex items-center gap-4">
              <div className="w-6 h-6 bg-gray-700 rounded"></div>
              <div className="text-gray-400 text-sm">Edit</div>
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-6">
            <div className="hidden lg:flex items-center gap-8">
              {[
                { step: 1, label: "Login", status: "completed" },
                { step: 2, label: "Deploy", status: "completed" },
                { step: 3, label: "Fund", status: "current" },
                { step: 4, label: "Create", status: "pending" },
              ].map((item, index) => (
                <div key={item.step} className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      item.status === "completed"
                        ? "bg-cyan-400"
                        : item.status === "current"
                          ? "bg-pink-400"
                          : "bg-gray-600"
                    }`}
                  ></div>
                  <div className="text-xs">
                    <div className="text-gray-400">
                      {item.step}. {item.label}
                    </div>
                    <div className="text-gray-600 text-[10px]">
                      {item.status === "completed"
                        ? "completed"
                        : item.status === "current"
                          ? "in progress"
                          : "pending"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span className="hidden sm:inline">0 LYN</span>
              <Button size="sm" className="bg-pink-600 hover:bg-pink-700 text-white text-xs px-2 md:px-4">
                Login
              </Button>
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col min-h-0">
          {messages.length === 0 ? (
            /* Welcome Screen */
            <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-md"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mb-6 mx-auto border-2 border-pink-500/30">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lyn1-rQmdjMyNM3j0GapXG4j68QjEGHpMdF.jpeg"
                    alt="LYN AI"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">Hey, I'm LYN AI</h1>
                <p className="text-gray-400 text-sm md:text-base mb-2">
                  I scan the markets 24/7, powered by Grok xAI. I steal alpha from other agents, run your strategy in
                  the background, and grow your bags while you touch grass.
                </p>
                <p className="text-gray-500 text-sm">
                  Want to know more? Dive into my{" "}
                  <span className="text-cyan-400 cursor-pointer hover:underline">docs</span>.
                </p>
              </motion.div>
            </div>
          ) : (
            /* Messages */
            <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`flex gap-3 ${message.type === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {message.type === "assistant" && (
                      <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 border border-pink-500/30">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lyn1-rQmdjMyNM3j0GapXG4j68QjEGHpMdF.jpeg"
                          alt="LYN AI"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div
                      className={`max-w-xs md:max-w-md p-3 rounded-lg text-sm md:text-base ${
                        message.type === "user"
                          ? "bg-pink-600 text-white"
                          : "bg-gray-900/50 text-gray-200 border border-gray-700/50"
                      }`}
                    >
                      {message.content}
                    </div>
                    {message.type === "user" && (
                      <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4 text-gray-300" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex gap-3">
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-pink-500/30">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lyn1-rQmdjMyNM3j0GapXG4j68QjEGHpMdF.jpeg"
                      alt="LYN AI"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="max-w-xs md:max-w-md p-3 rounded-lg bg-gray-900/50 border border-gray-700/50">
                    <div className="text-gray-200 text-sm md:text-base">
                      {typingText}
                      <span className="animate-pulse">|</span>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}

          {/* Input Area */}
          <div className="p-4 md:p-6 border-t border-pink-500/20">
            {messages.length === 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                {suggestedActions.map((action, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleSuggestedAction(action)}
                    className="p-3 text-left text-sm text-gray-400 bg-gray-900/30 hover:bg-gray-900/50 border border-gray-700/50 rounded-lg transition-all hover:text-white"
                  >
                    {action}
                  </motion.button>
                ))}
              </div>
            )}

            <div className="flex gap-3">
              <div className="flex-1 relative">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage(inputValue)}
                  placeholder="Ask me anything..."
                  className="bg-gray-900/50 border-gray-700/50 text-white placeholder-gray-500 pr-16 md:pr-20 text-sm md:text-base"
                />
                <Button
                  size="sm"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-700 hover:bg-gray-600 text-white text-xs px-2"
                >
                  <Sparkles className="w-3 h-3 md:mr-1" />
                  <span className="hidden md:inline">My Tasks</span>
                </Button>
              </div>
              <Button
                onClick={() => handleSendMessage(inputValue)}
                disabled={!inputValue.trim() || isTyping}
                className="bg-pink-600 hover:bg-pink-700 text-white px-3 md:px-4"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
