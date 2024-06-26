package main

import (
	"context"
	"fmt"
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

// Greet returns a greeting for the given name
func (a *App) Pomodoro(DurationParsed string) string {
	Timertime := DurationParsed
	if Timertime == "0" {
		return fmt.Sprintf("Hello It's time for a break!")
	} else {

		return fmt.Sprint(Timertime)

	}

}
