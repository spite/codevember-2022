import { timewarp } from "../ccapture2/timewarp.js";
import { CCapture } from "../ccapture2/ccapture.js";

const capturer = new CCapture({
  format: "png",
  quality: 1,
  timewarp: window.timewarp,
  timeLimit: 60,
});

async function start() {
  await capturer.start();
  return capturer;
}

async function capture(canvas) {
  await capturer.capture(canvas);
  capturer.step();
}

function stop() {
  capturer.stop();
  capturer.save();
}

window.capturer = capturer;

window.start = start;
window.stop = stop();

export { start, capture };
