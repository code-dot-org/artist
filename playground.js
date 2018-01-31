const Visualization = require("./artist.js");

window.viz = new Visualization({
  lineStylePatternOptions: [],
  linePatterns: {
    rainbowLine: require("./assets/patterns/rainbow.png"),
    ropeLine: require("./assets/patterns/rope.png"),
    squigglyLine: require("./assets/patterns/squiggly.png"),
    swirlyLine: require("./assets/patterns/swirly.png"),
  },
});

viz.preload().then(() => {
  const log = [];
  document.body.appendChild(viz.ctxDisplay.canvas);

  for (let i = 0; i < 5; i++) {
    log.push({command: 'moveForward', args: [100]});
    log.push({command: 'turnByDegrees', args: [216]});
  }

  const drawLoop = setInterval(() => {
    const step = log.shift();
    if (!step) {
      clearInterval(drawLoop);
    } else {
      viz[step.command].apply(viz, step.args);
      viz.display();
    }
  }, 500);

});
