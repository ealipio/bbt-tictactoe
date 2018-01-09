/**
 * Burst is a collection of shapes
 */

export const myBurst = new mojs.Burst({
    count: 20,
    radius: { 50: 150 },
    angle: { 0: 180 },
    children: {
        shape:"polygon",
        fill:{"red": "yellow"},
        duration: 5000,
        radius: 10,
        delay:"stagger(50)"
    }
});

document.addEventListener("click", () => {
    //myBurst.play();
    myBurst.replay();
})