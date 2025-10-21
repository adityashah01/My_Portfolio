"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { RotateCcw } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

type Player = "X" | "O" | null

export function TicTacToe() {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null))
  const [isXNext, setIsXNext] = useState(true)
  const [winner, setWinner] = useState<Player | "Draw" | null>(null)
  const [botMode, setBotMode] = useState(false)

  const calculateWinner = (squares: Player[]): Player | null => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for (const [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }
    return null
  }

  const minimax = (squares: Player[], depth: number, isMaximizing: boolean): number => {
    const winner = calculateWinner(squares)
    if (winner === "O") return 10 - depth
    if (winner === "X") return depth - 10
    if (squares.every((s) => s !== null)) return 0

    if (isMaximizing) {
      let bestScore = Number.NEGATIVE_INFINITY
      for (let i = 0; i < 9; i++) {
        if (squares[i] === null) {
          squares[i] = "O"
          const score = minimax(squares, depth + 1, false)
          squares[i] = null
          bestScore = Math.max(score, bestScore)
        }
      }
      return bestScore
    } else {
      let bestScore = Number.POSITIVE_INFINITY
      for (let i = 0; i < 9; i++) {
        if (squares[i] === null) {
          squares[i] = "X"
          const score = minimax(squares, depth + 1, true)
          squares[i] = null
          bestScore = Math.min(score, bestScore)
        }
      }
      return bestScore
    }
  }

  const getBestMove = (squares: Player[]): number => {
    let bestScore = Number.NEGATIVE_INFINITY
    let bestMove = -1

    for (let i = 0; i < 9; i++) {
      if (squares[i] === null) {
        squares[i] = "O"
        const score = minimax(squares, 0, false)
        squares[i] = null
        if (score > bestScore) {
          bestScore = score
          bestMove = i
        }
      }
    }
    return bestMove
  }

  useEffect(() => {
    if (botMode && !isXNext && !winner) {
      const timer = setTimeout(() => {
        const bestMove = getBestMove(board)
        if (bestMove !== -1) {
          handleClick(bestMove)
        }
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [botMode, isXNext, winner, board])

  const handleClick = (index: number) => {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = isXNext ? "X" : "O"
    setBoard(newBoard)

    const gameWinner = calculateWinner(newBoard)
    if (gameWinner) {
      setWinner(gameWinner)
    } else if (newBoard.every((square) => square !== null)) {
      setWinner("Draw")
    } else {
      setIsXNext(!isXNext)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setIsXNext(true)
    setWinner(null)
  }

  return (
    <div className="flex flex-col items-center">
      <div className="mb-6 text-center">
        <h2 className="mb-2 text-2xl font-bold text-glow">Tic-Tac-Toe</h2>
        {winner ? (
          <p className="text-lg font-semibold text-primary">
            {winner === "Draw" ? "It's a Draw!" : `Winner: ${winner}`}
          </p>
        ) : (
          <p className="text-lg text-muted-foreground">Current Player: {isXNext ? "X" : "O"}</p>
        )}
      </div>

      <div className="mb-4 flex items-center gap-2">
        <Switch id="bot-mode" checked={botMode} onCheckedChange={setBotMode} />
        <Label htmlFor="bot-mode" className="cursor-pointer">
          Play vs Expert Bot
        </Label>
      </div>

      <div className="mb-6 grid grid-cols-3 gap-3">
        {board.map((cell, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className="flex h-20 w-20 items-center justify-center rounded-lg border-2 border-border bg-card text-4xl font-bold transition-all hover:border-primary hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/20 disabled:cursor-not-allowed disabled:opacity-50 sm:h-24 sm:w-24"
            disabled={!!cell || !!winner || (botMode && !isXNext)}
          >
            {cell && <span className={cell === "X" ? "text-primary text-glow" : "text-blue-500"}>{cell}</span>}
          </button>
        ))}
      </div>

      <Button onClick={resetGame} size="lg" className="gap-2 border-glow">
        <RotateCcw className="h-4 w-4" />
        Reset Game
      </Button>
    </div>
  )
}
