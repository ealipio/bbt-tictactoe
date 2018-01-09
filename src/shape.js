export  const basicShape = new mojs.Shape({
    shape: "rect",
    isShowStart: true,
    radius:50,
    fill: "#c9cbfd",
    stroke:"#6c7dd7",
    strokeWidth:5,
    top:"20%",
    left:"200px",

    scale:{0:2},
    repeat:1,
    delay:1000,
    duration: 500
}).then({
    scale: 1,
    angle:{[-360]:0}
});

export const secondaryShape = new mojs.Shape({
    shape:"circle",
    isShowStart: true,
    radius: 50,
    top: "50%",
    left: "20%",

    fill:{"#ebcb4f" :"#ffffff"},
    strokeWidth:{20:5},
    stroke:"#4e214d",
    duration: 3000
});
