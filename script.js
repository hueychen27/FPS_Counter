const times = [];
const prog = document.getElementById("prog");
const fps_counter = document.getElementById("fps_counter");
let fps;

function refreshLoop() {
  window.requestAnimationFrame(() => {
    const now = performance.now();
    while (times.length > 0 && times[0] <= now - 1000) {
      times.shift();
    }
    times.push(now);
    fps = times.length;
	prog.value = fps;
	fps_counter.innerText = fps;
    refreshLoop();
  });
}

refreshLoop();