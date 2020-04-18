var colors = 
[
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb( 0, 0, 255)",
    "rgb(255, 0, 255)"
]
 var squares = document.querySelectorAll(".square");
 var pickedColor = colors[3];
 var colorDisplay = document.getElementById("pickedColor");

 colorDisplay.textContent = pickedColor;

 for(var i = 0 ; i<colors.length ; i++ )
 {
    squares[i].style.background = colors[i]; // add initial color to square
    squares[i].addEventListener("click",function() // add clicked listener to every square
    {
        var clickedColor = this.style.background; // color of this square(clicked)
        if(clickedColor == pickedColor) // compare color to picked color
        {
            alert("correct");
        }
        else
        {
            alert("Wrong");
        }
    });
 } 