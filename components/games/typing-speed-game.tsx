"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { RotateCcw, Zap, Clock, Target, Trophy } from "lucide-react"

const sampleTexts = [
  "The quick brown fox jumps over the lazy dog near the riverbank.",
  "Programming is the art of telling another human what one wants the computer to do.",
  "In the world of technology, innovation is the key to success and growth.",
  "Practice makes perfect when learning to type faster and more accurately.",
  "Web development combines creativity with technical skills to build amazing experiences.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Code is like humor. When you have to explain it, it's bad.",
  "First, solve the problem. Then, write the code that implements the solution.",
]

export function TypingSpeedGame() {
  const [text, setText] = useState("")
  const [input, setInput] = useState("")
  const [startTime, setStartTime] = useState<number | null>(null)
  const [endTime, setEndTime] = useState<number | null>(null)
  const [isActive, setIsActive] = useState(false)
  const [wpm, setWpm] = useState(0)
  const [accuracy, setAccuracy] = useState(100)
  const [errors, setErrors] = useState(0)
  const [currentWpm, setCurrentWpm] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    resetGame()
  }, [])

  useEffect(() => {
    if (isActive && startTime && input.length > 0) {
      const timeElapsed = (Date.now() - startTime) / 60000 // in minutes
      const wordsTyped = input.trim().split(/\s+/).length
      const calculatedWpm = Math.round(wordsTyped / timeElapsed)
      setCurrentWpm(calculatedWpm)
    }
  }, [input, isActive, startTime])

  const resetGame = () => {
    const randomText = sampleTexts[Math.floor(Math.random() * sampleTexts.length)]
    setText(randomText)
    setInput("")
    setStartTime(null)
    setEndTime(null)
    setIsActive(false)
    setWpm(0)
    setCurrentWpm(0)
    setAccuracy(100)
    setErrors(0)
    inputRef.current?.focus()
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    if (!isActive && value.length === 1) {
      setStartTime(Date.now())
      setIsActive(true)
    }

    setInput(value)

    // Calculate errors
    let errorCount = 0
    for (let i = 0; i < value.length; i++) {
      if (value[i] !== text[i]) {
        errorCount++
      }
    }
    setErrors(errorCount)

    // Calculate accuracy
    const acc = value.length > 0 ? ((value.length - errorCount) / value.length) * 100 : 100
    setAccuracy(Math.round(acc))

    // Check if completed
    if (value === text) {
      const end = Date.now()
      setEndTime(end)
      setIsActive(false)

      if (startTime) {
        const timeInMinutes = (end - startTime) / 60000
        const words = text.split(" ").length
        const calculatedWpm = Math.round(words / timeInMinutes)
        setWpm(calculatedWpm)
      }
    }
  }

  const getCharacterClass = (index: number) => {
    if (index >= input.length) return "text-muted-foreground/50"
    if (input[index] === text[index]) return "text-emerald-500 font-semibold"
    return "text-red-500 bg-red-500/20 rounded px-0.5"
  }

  const displayWpm = endTime ? wpm : currentWpm

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/20 to-purple-500/20 px-4 py-2">
          <Zap className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">Test Your Speed</span>
        </div>
        <h2 className="mb-2 bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-3xl font-bold text-transparent">
          Typing Speed Challenge
        </h2>
        <p className="text-muted-foreground">Type the text below as fast and accurately as you can!</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Card className="group relative overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent p-4 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
          <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/5 blur-2xl transition-all group-hover:bg-primary/10"></div>
          <div className="relative flex items-center gap-3">
            <div className="rounded-lg bg-primary/10 p-2.5 ring-2 ring-primary/20">
              <Zap className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-xs font-medium text-muted-foreground">Speed</p>
              <p className="text-2xl font-bold tabular-nums">
                {displayWpm} <span className="text-sm text-muted-foreground">WPM</span>
              </p>
            </div>
          </div>
        </Card>

        <Card className="group relative overflow-hidden border-2 border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-transparent p-4 transition-all hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/10">
          <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-emerald-500/5 blur-2xl transition-all group-hover:bg-emerald-500/10"></div>
          <div className="relative flex items-center gap-3">
            <div className="rounded-lg bg-emerald-500/10 p-2.5 ring-2 ring-emerald-500/20">
              <Target className="h-5 w-5 text-emerald-500" />
            </div>
            <div>
              <p className="text-xs font-medium text-muted-foreground">Accuracy</p>
              <p className="text-2xl font-bold tabular-nums">
                {accuracy}
                <span className="text-sm text-muted-foreground">%</span>
              </p>
            </div>
          </div>
        </Card>

        <Card className="group relative overflow-hidden border-2 border-red-500/20 bg-gradient-to-br from-red-500/5 to-transparent p-4 transition-all hover:border-red-500/40 hover:shadow-lg hover:shadow-red-500/10">
          <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-red-500/5 blur-2xl transition-all group-hover:bg-red-500/10"></div>
          <div className="relative flex items-center gap-3">
            <div className="rounded-lg bg-red-500/10 p-2.5 ring-2 ring-red-500/20">
              <Clock className="h-5 w-5 text-red-500" />
            </div>
            <div>
              <p className="text-xs font-medium text-muted-foreground">Errors</p>
              <p className="text-2xl font-bold tabular-nums">{errors}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Text Display */}
      <Card className="relative overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-background to-primary/5 p-6 shadow-xl">
        <div className="absolute right-0 top-0 h-32 w-32 bg-gradient-to-br from-primary/10 to-transparent blur-3xl"></div>
        <div className="relative mb-4 min-h-[120px] rounded-xl border border-border/50 bg-muted/30 p-5 font-mono text-lg leading-relaxed backdrop-blur-sm">
          {text.split("").map((char, index) => (
            <span key={index} className={getCharacterClass(index)}>
              {char}
            </span>
          ))}
        </div>

        {/* Input */}
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={handleInputChange}
          disabled={endTime !== null}
          className="w-full rounded-xl border-2 border-input bg-background/50 px-5 py-3.5 font-mono text-lg backdrop-blur-sm transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
          placeholder="Start typing here..."
          autoComplete="off"
          spellCheck="false"
        />
      </Card>

      {/* Result Message */}
      {endTime && (
        <Card className="relative overflow-hidden border-2 border-emerald-500/50 bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 p-8 text-center shadow-xl shadow-emerald-500/10">
          <div className="absolute left-1/2 top-0 h-32 w-32 -translate-x-1/2 bg-emerald-500/20 blur-3xl"></div>
          <div className="relative">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 ring-4 ring-emerald-500/30">
              <Trophy className="h-8 w-8 text-emerald-500" />
            </div>
            <h3 className="mb-3 text-3xl font-bold text-emerald-500">Completed!</h3>
            <p className="text-lg">
              You typed at <span className="font-bold text-emerald-500">{wpm} WPM</span> with{" "}
              <span className="font-bold text-emerald-500">{accuracy}% accuracy</span>
            </p>
          </div>
        </Card>
      )}

      {/* Reset Button */}
      <div className="flex justify-center">
        <Button
          onClick={resetGame}
          size="lg"
          className="gap-2 shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30"
        >
          <RotateCcw className="h-5 w-5" />
          New Challenge
        </Button>
      </div>
    </div>
  )
}
