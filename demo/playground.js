const Visualization = require("../visualization.js");

window.viz = new Visualization({
  isFrozenSkin: false,
  avatar: {
    src: require('./assets/avatar.png'),
    width: 70,
    height: 51,
    numHeadings: 180,
    numFrames: 1,
    visible: true,
  },
  lineStylePatternOptions: [],
  linePatterns: {
    rainbowLine: require("./assets/patterns/rainbow.png"),
    ropeLine: require("./assets/patterns/rope.png"),
    squigglyLine: require("./assets/patterns/squiggly.png"),
    swirlyLine: require("./assets/patterns/swirly.png"),
  },
});

function preload(src, target) {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => resolve();
    img.onerror = () => reject();

    img.src = src;
    target.image = img;
  });
}

Promise.all([
  preload(viz.avatar.src, viz.avatar),
]).then(() => {
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
