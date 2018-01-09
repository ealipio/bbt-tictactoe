/**
 * Burst is a collection of shapes
 */

export const myBurst = new mojs.Burst({
    count: 10,
    radius: { 50: 150 },
    angle: { 0: 180 },
    children: {
        shape:"polygon",
        fill:["red","green","blue","yellow","white", "peru"],
        duration: 3000,
        radius: 10,
        delay:"stagger(100)"
    }
});

document.addEventListener("click", () => {
    //myBurst.play();
    myBurst.replay();
})