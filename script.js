const pics = Array.from(document.querySelectorAll('.item .card-after img'));
const items = document.querySelectorAll('.item');
let firstCard = false, secondCard = false ,winCount=0;
let firstCardValue;

let cards = [
    { name: "pic1", src: "images/pic1.jpg" }, { name: "pic2", src: "images/pic2.jpg" },
    { name: "pic3", src: "images/pic3.jpg" }, { name: "pic4", src: "images/pic4.jpg" },
    { name: "pic5", src: "images/pic5.jpg" }, { name: "pic6", src: "images/pic6.jpg" },
    { name: "pic7", src: "images/pic7.jpg" }, { name: "pic8", src: "images/pic8.jpg" },
    { name: "pic4", src: "images/pic4.jpg" }, { name: "pic1", src: "images/pic1.jpg" },
    { name: "pic2", src: "images/pic2.jpg" }, { name: "pic5", src: "images/pic5.jpg" },
    { name: "pic7", src: "images/pic7.jpg" }, { name: "pic8", src: "images/pic8.jpg" },
    { name: "pic6", src: "images/pic6.jpg" }, { name: "pic3", src: "images/pic3.jpg" }
];

function resetGame() {
    var shugCards = cards.sort(() => Math.random() > 0.5 ? 1 : -1);
    
    for (let i = 0; i < items.length; i++) {
        pics[i].src = shugCards[i].src;
        items[i].setAttribute("data-card-value", shugCards[i].name);
        items[i].classList.remove("matched", "flipped");
    }
    firstCard = false;
    secondCard = false;
    winCount = 0;
}
resetGame();
items.forEach(item =>{
    item.addEventListener('click', ()=>{
        if(!item.classList.contains("matched")){
            item.classList.add("flipped");
            if(!firstCard){
                firstCard = item;
                firstCardValue = item.getAttribute("data-card-value");
            } else {
                secondCard = item;
                let secondCardValue = item.getAttribute("data-card-value");
                if(firstCardValue === secondCardValue){
                    firstCard.classList.add("matched");
                    secondCard.classList.add("matched");
                    firstCard=false;
                    winCount+=1;
                    if(winCount == items.length/2 ){
                        setTimeout(() => {
                            alert("Congratulations! You won the game.");
                            resetGame();
                        }, 300);
                    }
                } else {
                    let tmpFirst = firstCard, tmpSecond = secondCard;
                    firstCard=false;
                    secondCard= false;
                    let delay = setTimeout(() => {
                        tmpFirst.classList.remove("flipped");
                        tmpSecond.classList.remove("flipped");
                    }, 900);    
                }
            }
        }
        if (item.classList.contains("matched") || item.classList.contains("flipped")) {
            return;
        }
    });
});