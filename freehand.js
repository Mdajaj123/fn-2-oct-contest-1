const pencil = document.getElementById("pencil");
let isPencilActive = false;// intially the pencil is inactive.

const colorPicker = document.getElementById("color-picker");


colorPicker.addEventListener("change", () => {
    drawingColor = colorPicker.value;
    c.strokeStyle = drawingColor;
    console.log(drawingColor);
});

function onPencilClick() {
    pencil.classList.toggle("active")
    isPencilActive = !isPencilActive; // enabling the drawing 
    // isPencilActive = !false = true
    if (isPencilActive) {
        // c.strokeStyle = drawingColor;
        canvas.style.cursor = "crosshair";
        
        canvas.addEventListener("mousedown", onMouseDown);
    
    }
    else {
        canvas.style.cursor = "auto";
        canvas.removeEventListener("mousedown", onMouseDown)
    }
}

pencil.addEventListener("click", onPencilClick);