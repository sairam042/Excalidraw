const theCanvas = document.getElementById("canvasDrawing");
theCanvas.width=innerWidth;
theCanvas.height=innerHeight;

const canvas = theCanvas.getContext("2d");

// canvas.beginPath();
// canvas.moveTo(200,300);
// canvas.lineTo(400,100);
// canvas.lineWidth=5;
// canvas.strokeStyle="red";
// canvas.globalAlpha=0.2 ;
// canvas.stroke();
// canvas.closePath();



//  line drawing
const line = document.getElementById("lineButton");
let isLineIsOn = false;
let ifLineIsOn = false ;

function lineBegin(event){
    let {clientX,clientY} =event;
    canvas.beginPath();
    canvas.moveTo(clientX,clientY);
    canvas.lineWidth=4;
    canvas.strokeStyle=drawingColor;
}
function lineClose(event){
    let {clientX,clientY} =event;
    canvas.lineTo(clientX,clientY);
    canvas.stroke();
    canvas.closePath();
}
function onTheLine(){
    lock.classList.remove("active");
    line.classList.toggle("active");
    isLineIsOn = !isLineIsOn;
    if(isLineIsOn){
        theCanvas.addEventListener("mousedown",lineBegin);
        theCanvas.addEventListener("mouseup",lineClose);
        theCanvas.removeEventListener("mousedown",pencilBegin);
    }else{
        theCanvas.addEventListener("mousedown",lineBegin);
        theCanvas.addEventListener("mouseup",lineClose);
        theCanvas.removeEventListener("mousedown",pencilBegin);
    }
    ifpencilIsOn=!ifpencilIsOn;
    
    if(ifpencilIsOn){
        pencil.classList.remove("active");
    }else{
        pencil.classList.remove("active");
        theCanvas.removeEventListener("mousedown",pencilBegin);
    }
}
line.addEventListener("click",onTheLine);



//  pencil  drawing 

const pencil = document.getElementById("pencilButton");
let isPencilActive = false;
let ifpencilIsOn = false;



let previousPossion =null;
function pencilBegin(event){
    previousPossion =[event.clientX,event.clientY];
   theCanvas.addEventListener("mousemove",pencilMove);
   theCanvas.addEventListener("mouseup",pencilClose);
   canvas.strokeStyle = drawingColor;
   canvas.lineWidth=2;
}
function pencilMove(event){
    let currentPossion =[event.clientX,event.clientY];
    canvas.beginPath();
    canvas.moveTo(...previousPossion);
    canvas.lineTo(...currentPossion);
    canvas.stroke();
    previousPossion = currentPossion;
}
function pencilClose(event){
    canvas.closePath();
    theCanvas.removeEventListener("mousemove",pencilMove);
}

function onThePencil(){
    pencil.classList.toggle("active");
    isPencilActive = !isPencilActive;
    lock.classList.remove("active");
    if(isPencilActive){
        theCanvas.addEventListener("mousedown",pencilBegin);
    }else{
        theCanvas.addEventListener("mousedown",pencilBegin);
    }

    ifLineIsOn = !ifLineIsOn;
    
    if(ifLineIsOn){
        line.classList.remove("active");
        theCanvas.removeEventListener("mousedown",lineBegin);
        theCanvas.removeEventListener("mouseup",lineClose);
    }else{
        line.classList.remove("active");
        theCanvas.removeEventListener("mousedown",lineBegin);
        theCanvas.removeEventListener("mouseup",lineClose);
    }
}
pencil.addEventListener("click",onThePencil);





let lock =document.getElementById("lockButton");
let lockIsUnlocked =false;
function lockingAll(){
    lock.classList.toggle("active");
    lockIsUnlocked = !lockIsUnlocked;
    if(lockIsUnlocked){
        pencil.classList.remove("active");
        line.classList.remove("active");
        theCanvas.removeEventListener("mousedown",lineBegin);
        theCanvas.removeEventListener("mouseup",lineClose);
        theCanvas.removeEventListener("mousedown",pencilBegin);
        
    }else{
        lock.classList.remove("active");
        pencil.classList.remove("active");
        line.classList.remove("active");
        theCanvas.removeEventListener("mousedown",lineBegin);
        theCanvas.removeEventListener("mouseup",lineClose);
        // theCanvas.removeEventListener("mousedown",pencilBegin);
        // theCanvas.removeEventListener("mousedown",lineBegin);
        // theCanvas.removeEventListener("mouseup",lineClose);
        
    }
    
}
lock.addEventListener("click",lockingAll);


// color change
function colorchangingAgain(){
    drawingColor =colorPeker.value;
    console.log("hi");
}
const colorPeker =document.getElementById("colorPeker");
let drawingColor ="blue";
colorPeker.addEventListener("change",colorchangingAgain);