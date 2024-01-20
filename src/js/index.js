//*Funktion för enkelt bildspel*//

let index = 0;

const playBilder = () => {


    const bildspel = document.getElementById("bildspel");

    for (let i = 0; i < bildspel.children.length; i++) {

        console.log(i);

        const showImage = i === index;

        if (showImage) {
            bildspel.children[i].style.display = "block";

        } else {
            bildspel.children[i].style.display = "none";

        }

    }
    index++;
    if(index >= bildspel.children.length){
        index = 0;
    }
}
setInterval(playBilder, 5000);

playBilder()