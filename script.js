window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = "black";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    var rectCount = 6;
    var rectSpace = 100;
    var verticalOffset = -20;
    const colors = ["blue", "purple", "red", "orange", "yellow", "green"]
    for(let i = 0; i < rectCount; i++){
        console.log(i);
        ctx.fillStyle = colors[i];
        ctx.fillRect(0, (i* rectSpace/20), 1600, rectSpace/rectCount);
        // var rect = new Rectangle(1600, rectSpace/rectCount);
        // rect.setPosition(getWidth()/2 - rect.width/2,(rectSpace - verticalOffset) - getHeight()/2 + (i * rectSpace/rectCount))
        // rect.color = colors[i]
        // rect.setRotation(-20)
        // canvas.add(rect)
    }
})



// background.color = Color.BLACK
// add(background);
// var rectCount = 6
// var rectSpace = 300;
// var verticalOffset = -20;
// const colors = [Color.BLUE, Color.PURPLE, Color.RED, Color.ORANGE, Color.YELLOW, Color.GREEN]
// for(let i = 0; i < rectCount; i++){
//     var rect = new Rectangle(1600, rectSpace/rectCount);
//     rect.setPosition(getWidth()/2 - rect.width/2,(rectSpace - verticalOffset) - getHeight()/2 + (i * rectSpace/rectCount))
//     rect.color = colors[i]
//     rect.setRotation(-20)
//     canvas.add(rect)
// }