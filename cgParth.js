var colors = [
    "rgb(255, 0, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(255, 0, 255)",
];
var squares = document.querySelectorAll(".square");
var pickedColor =  colors[1];

for(var i = 0; i <= squares.length; i++){
    squares[i].style.backgrgoundColor = colors[i];
    squares[i].addEventListener("click",function(){
        var clickedcolor = this.style.backgrgoundColor;
        if(clickedcolor === pickedColor){
            alert("Correct");
        }else{
            alert("Wrong");
        }
    });
}