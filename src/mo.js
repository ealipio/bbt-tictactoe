const burst = new mojs.Burst({
    left: 0, top: 0,
    radius: { 0: 50 },
    count: 12,
    children: {
        shape: 'rect',
        radius: 20,
        angle: { 360: 0 },
        fill: { '#f70909': '#eddc80' },
        duration: 1300
    }
});

const circle = new mojs.Shape({
    left: 0, top: 0,
    count: 10,
    stroke: { '#e2441d': '#f99931' },
    strokeWidth: { 20: 0 },
    fill: 'none',
    scale: { 0: 1.5, easing: 'elastic.out' },
    radius: { 0: 60 },
    duration: 1000,
    opacity: { 1: 0.2 }
});

const timeline = new mojs.Timeline({repeat:0, isYoyo:false});

timeline.add(burst, circle);

var clickHandler = ('ontouchstart' in document.documentElement ? "touchstart" : "click");

export default document.addEventListener(clickHandler, (e) => {
    const coords = { x: e.pageX, y: e.pageY };

    burst.tune(coords);
    circle.tune(coords);

    timeline.replay();
}, false);