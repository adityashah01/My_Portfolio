"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { Button } from "@/components/ui/button"
import { RotateCcw, Play, Pause } from "lucide-react"

type Position = { x: number; y: number }
type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT"

const GRID_SIZE = 20
const CELL_SIZE = 20
const INITIAL_SNAKE: Position[] = [{ x: 10, y: 10 }]
const INITIAL_DIRECTION: Direction = "RIGHT"
const GAME_SPEED = 150

export function SnakeGame() {
  const [snake, setSnake] = useState<Position[]>(INITIAL_SNAKE)
  const [food, setFood] = useState<Position>({ x: 15, y: 15 })
  const [direction, setDirection] = useState<Direction>(INITIAL_DIRECTION)
  const [isPlaying, setIsPlaying] = useState(false)
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const directionRef = useRef<Direction>(INITIAL_DIRECTION)

  const generateFood = useCallback((): Position => {
    return {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    }
  }, [])

  const resetGame = () => {
    setSnake(INITIAL_SNAKE)
    setFood(generateFood())
    setDirection(INITIAL_DIRECTION)
    directionRef.current = INITIAL_DIRECTION
    setIsPlaying(false)
    setScore(0)
    setGameOver(false)
  }

  const checkCollision = useCallback((head: Position, snakeBody: Position[]): boolean => {
    if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
      return true
    }
    return snakeBody.some((segment) => segment.x === head.x && segment.y === head.y)
  }, [])

  const moveSnake = useCallback(() => {
    setSnake((prevSnake) => {
      const head = { ...prevSnake[0] }

      switch (directionRef.current) {
        case "UP":
          head.y -= 1
          break
        case "DOWN":
          head.y += 1
          break
        case "LEFT":
          head.x -= 1
          break
        case "RIGHT":
          head.x += 1
          break
      }

      if (checkCollision(head, prevSnake)) {
        setGameOver(true)
        setIsPlaying(false)
        return prevSnake
      }

      const newSnake = [head, ...prevSnake]

      if (head.x === food.x && head.y === food.y) {
        setFood(generateFood())
        setScore((prev) => prev + 10)
      } else {
        newSnake.pop()
      }

      return newSnake
    })
  }, [food, checkCollision, generateFood])

  useEffect(() => {
    if (!isPlaying) return

    const gameLoop = setInterval(moveSnake, GAME_SPEED)
    return () => clearInterval(gameLoop)
  }, [isPlaying, moveSnake])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isPlaying) return

      switch (e.key) {
        case "ArrowUp":
          if (directionRef.current !== "DOWN") {
            directionRef.current = "UP"
            setDirection("UP")
          }
          break
        case "ArrowDown":
          if (directionRef.current !== "UP") {
            directionRef.current = "DOWN"
            setDirection("DOWN")
          }
          break
        case "ArrowLeft":
          if (directionRef.current !== "RIGHT") {
            directionRef.current = "LEFT"
            setDirection("LEFT")
          }
          break
        case "ArrowRight":
          if (directionRef.current !== "LEFT") {
            directionRef.current = "RIGHT"
            setDirection("RIGHT")
          }
          break
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [isPlaying])

  return (
    <div className="flex flex-col items-center">
      <div className="mb-6 text-center">
        <h2 className="mb-2 text-2xl font-bold">Snake Game</h2>
        <p className="text-lg font-semibold text-primary">Score: {score}</p>
        {gameOver && <p className="mt-2 text-lg font-semibold text-destructive">Game Over!</p>}
      </div>

      <div
        className="mb-6 border-2 border-border bg-muted/30"
        style={{
          width: GRID_SIZE * CELL_SIZE,
          height: GRID_SIZE * CELL_SIZE,
          position: "relative",
        }}
      >
        {snake.map((segment, index) => (
          <div
            key={index}
            className="absolute bg-primary"
            style={{
              width: CELL_SIZE - 2,
              height: CELL_SIZE - 2,
              left: segment.x * CELL_SIZE,
              top: segment.y * CELL_SIZE,
              borderRadius: index === 0 ? "4px" : "2px",
            }}
          />
        ))}
        <div
          className="absolute rounded-full bg-destructive"
          style={{
            width: CELL_SIZE - 4,
            height: CELL_SIZE - 4,
            left: food.x * CELL_SIZE + 2,
            top: food.y * CELL_SIZE + 2,
          }}
        />
      </div>

      <div className="flex gap-3">
        <Button onClick={() => setIsPlaying(!isPlaying)} disabled={gameOver} size="lg" className="gap-2">
          {isPlaying ? (
            <>
              <Pause className="h-4 w-4" />
              Pause
            </>
          ) : (
            <>
              <Play className="h-4 w-4" />
              {score === 0 ? "Start" : "Resume"}
            </>
          )}
        </Button>
        <Button onClick={resetGame} variant="outline" size="lg" className="gap-2 bg-transparent">
          <RotateCcw className="h-4 w-4" />
          Reset
        </Button>
      </div>

      <p className="mt-4 text-sm text-muted-foreground">Use arrow keys to control the snake</p>
    </div>
  )
}
