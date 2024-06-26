<script>
// @ts-nocheck
  let duration  
  import { Pomodoro } from '../wailsjs/go/main/App.js'
</script>
<body>
  <div class="background">
    <div class="box">
      <div class="pomodoro">
        <!-- pomodoro timer -->
         <div>
          <h1>{Timertime}</h1>
         </div>
        <div class="display">
          <input type="time" autocomplete="on" bind:value={duration}>
        </div>
        <div class="display">
          <button on:click={}>Start</button>
          <button>Stop</button>
          <button>Reset</button>
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