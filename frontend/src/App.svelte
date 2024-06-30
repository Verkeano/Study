<script>
  // @ts-nocheck
    import { onMount } from 'svelte';
    import { Pomodoro } from '../wailsjs/go/main/App.js';
  
    let Duration = 0;
    let Timertime = Duration;
    let timerInterval;
  
    const startPomodoro = async () => {
      clearInterval(timerInterval);
      Timertime = Duration;
  
      // Simulate the Pomodoro function call
      timerInterval = setInterval(async () => {
        Timertime = await Pomodoro(Timertime);
        if (Timertime <= 0) {
          clearInterval(timerInterval);
        }
      }, 1000);
    };
  
    const stopPomodoro = () => {
      clearInterval(timerInterval);
    };
  
    const resetPomodoro = () => {
      clearInterval(timerInterval);
      Timertime = Duration;
    };
  </script>
  
  <body>
    <div class="background">
      <div class="box">
        <div class="pomodoro">
          <!-- pomodoro timer -->
           <div>
            <h1 class="time">{Timertime}</h1>
           </div>
          <div class="display">
            <input type="number" min="0" bind:value={Duration}>
            <input type="number" min="0" >
            <p>Minutes and Seconds</p>
          </div>
          <div class="display">
            <button on:click={startPomodoro}>Start</button>
            <button on:click={stopPomodoro}>Stop</button>
            <button on:click={resetPomodoro}>Reset</button>
          </div>
        </div>
        
      </div>
    </div>
  </body>
  
  <style>
    .display {
      text-align: center;
    }
    .background {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(40, 12, 80, 0.438);
    }
  
    .pomodoro {
      width: auto;
      height: auto;
      background-color: blue;
      position: absolute;
      border-radius: 15px;
    }
  
    .box {
      position: absolute;
      width: 90%;
      height: 90%;
      background-color: rgba(0, 0, 0, 0);
      top: 50%;
      left: 50%;
      padding: 10px;
      transform: translate(-50%, -50%);
    }
  </style>