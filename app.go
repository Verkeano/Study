package main

import (
	"context"
	"time"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// Pomodoro returns the remaining time for the given duration in seconds
func (a *App) Pomodoro(duration uint) uint {
	timer := duration
	ticker := time.NewTicker(time.Second)
	defer ticker.Stop()

	for range ticker.C {
		if timer == 0 {
			break
		}
		timer--
	}

	return timer
}
