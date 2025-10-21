"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TicTacToe } from "@/components/games/tic-tac-toe"
import { SnakeGame } from "@/components/games/snake-game"
import { TypingSpeedGame } from "@/components/games/typing-speed-game"
import { Gamepad2 } from "lucide-react"

type GameType = "tictactoe" | "snake" | "typing"

export default function GamesPage() {
  const [activeGame, setActiveGame] = useState<GameType>("tictactoe")

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-block rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Interactive Games
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Game Zone</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            Play classic games built with modern web technologies. Choose a game below and start playing!
          </p>
        </div>

        {/* Game Selector */}
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          <Button
            variant={activeGame === "tictactoe" ? "default" : "outline"}
            size="lg"
            onClick={() => setActiveGame("tictactoe")}
            className="gap-2"
          >
            <Gamepad2 className="h-5 w-5" />
            Tic-Tac-Toe
          </Button>
          <Button
            variant={activeGame === "snake" ? "default" : "outline"}
            size="lg"
            onClick={() => setActiveGame("snake")}
            className="gap-2"
          >
            <Gamepad2 className="h-5 w-5" />
            Snake Game
          </Button>
          <Button
            variant={activeGame === "typing" ? "default" : "outline"}
            size="lg"
            onClick={() => setActiveGame("typing")}
            className="gap-2"
          >
            <Gamepad2 className="h-5 w-5" />
            Typing Speed
          </Button>
        </div>

        {/* Game Container */}
        <Card className="border-2 border-primary/20 p-6 md:p-8 shadow-xl shadow-primary/5 bg-gradient-to-br from-background to-background/50">
          {activeGame === "tictactoe" && <TicTacToe />}
          {activeGame === "snake" && <SnakeGame />}
          {activeGame === "typing" && <TypingSpeedGame />}
        </Card>
      </div>
    </div>
  )
}
