<body>
  <div class="background">
    <div class="box">
      <div class="pomodoro">
        <!-- pomodoro timer -->
        <div class="display">
          <p>00:90:00</p>
        </div>
        <div class="display">
          <p>(:</p>
        </div>
        <div class="display">
          <button>Start</button>
          <button>Stop</button>
          <button>Reset</button>
        </div>
      </div>
      
    </div>
  </div>
</body>

<style>
  .display {
    justify-content: center;
    align-items: center;
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