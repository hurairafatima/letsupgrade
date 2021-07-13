let cards=[
    {
        image:"https://th.bing.com/th/id/OIP.gZPbCoGTxnRLx5Nug33DCQHaPO?w=170&h=349&c=7&o=5&pid=1.7",
        value:1,
        status:"closed"
    },
    {
        image:"https://th.bing.com/th/id/OIP.gZPbCoGTxnRLx5Nug33DCQHaPO?w=170&h=349&c=7&o=5&pid=1.7",
        value:1,
        status:"closed"
    },
    {
        image:"https://hdqwalls.com/download/anime-boy-crying-in-front-of-apple-laptop-52-1440x2560.jpg",
        value:2,
        status:"closed"
    },
    {
        image:"https://hdqwalls.com/download/anime-boy-crying-in-front-of-apple-laptop-52-1440x2560.jpg",
        value:2,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/736x/9e/f8/22/9ef8220b12a398a3a3f1adf421b3cf69--anime-characters-anime-guys.jpg",
        value:3,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/736x/9e/f8/22/9ef8220b12a398a3a3f1adf421b3cf69--anime-characters-anime-guys.jpg",
        value:3,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/originals/64/d1/1b/64d11b581df93bc4d319c76da0ec7cc3.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/originals/64/d1/1b/64d11b581df93bc4d319c76da0ec7cc3.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/originals/b5/3a/d8/b53ad86000b53e6e01716fff126d6357.jpg",
        value:5,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/originals/b5/3a/d8/b53ad86000b53e6e01716fff126d6357.jpg",
        value:5,
        status:"closed"
    },

]

let temp;
for(let i=cards.length-1;i>=0;i--) {
    let j=Math.floor(Math.random()*(i+1));

    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
}

let cardsCopy=cards;


function displayCards(data){
    let cardsString="";

    data.forEach(function(card,index){
        cardsString+=`
        
           <div class="card" style="background-image:url('${card.image}')">
                <div class=" overlay ${card.status}" onclick="openCard(${index})"></div>
           </div>
        
        `;
    });

    document.getElementById('cards').innerHTML=cardsString;
}

displayCards(cards);

let cardCount=1;
let val1=null,val2=null;
let score=0;

function openCard(index){
   console.log(cards);
    cards[index].status="opened";
    if(cardCount===1){
        val1=cards[index].value;
        cardCount++;
    }
    else if(cardCount===2){
        val2=cards[index].value;

        if(val1===val2){
            score++;
            document.getElementById('score').innerHTML=score;

            val1=null;
            val2=null;
            cardCount=1;
        }
        else {
            alert("Game Over!!");
            location.reload();
        }
    }

    displayCards(cards);
} 