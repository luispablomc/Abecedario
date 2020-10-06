const colors = ["green", "yellow", "red", "blue", "cyan"];
var lastIndex = [];
var cell = document.getElementsByClassName("cell");

for (let index = 0; index < cell.length; index++) {
    cell[index].addEventListener('click', function(){
        
        const randomNumber = getRandomNumber();
        
       cell[index].style.backgroundColor = colors[randomNumber];
       if ( lastIndex.length == 0) {
           lastIndex[0] = index;
       }

       else{
        cell[lastIndex[0]].style.backgroundColor = 'gray';
        lastIndex[0] = index;
       }
      
       
    });
}   

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}

function eraseColors(){
    for (let index = 0; index < cell.length; index++) {
        document.getElementsByClassName("cell")[index].style.backgroundColor = "transparent";
    }
    lastIndex = [];
}
