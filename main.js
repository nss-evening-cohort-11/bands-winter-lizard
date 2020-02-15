//OBJECT ARRAYS
const albums = [
    {
        title: "WinterLizard EP",
        albumArt: "https://i1.sndcdn.com/artworks-000053909121-6qx5rc-t500x500.jpg",
        soundLink: "https://soundcloud.com/winterlizard/sets/winterlizard-ep",
        releaseDate: "August 13, 2013",
        tracks: ["Erosion of My Will", "Massacre of Inquisition", "The Abyss", "Fatal Existence"]   
    },
    {
        title: "Electric Shell - David Gardner & Jon Brown",
        albumArt: "https://scontent-den4-1.xx.fbcdn.net/v/t31.0-8/p960x960/13613698_122845534813253_8789548996796216390_o.jpg?_nc_cat=108&_nc_ohc=Gl8ADuE6PtkAX-Ab3dW&_nc_ht=scontent-den4-1.xx&_nc_tp=6&oh=79f268722c05f17d3cb21f3ea9c2650e&oe=5EBD5892",
        soundLink: "https://www.youtube.com/channel/UCaQVI-DPjGK1jjQvwH2MkpA/videos",
        releaseDate: "July 04, 2016",
        tracks: ["Neptune 8", "Sky Flash", "Premeditation", "Bed of Broken Glass", "Lasers Split by Razors"]   
    }
]

//Arrays//
tourDates = [{
    date: "02/28/2020",
    city: "Sacramento",
    state: "CA",
    venue: "The Dungeon"},

    {date: "03/01/2020",
    city: "San Francisco",
    state: "CA",
    venue: "The Devils Playground",
    },

    {date: "03/03/2020",
    city: "San Diego",
    state: "CA",
    venue: "The Labyrinth",
    },

    {date: "03/05/2020",
    city: "Los Angeles",
    state: "CA",
    venue: "Skid Row",
    },

    {date: "03/05/2020",
    city: "Las Vegas",
    state: "NV",
    venue: "Sin City",
    },

    {date: "03/09/2020",
    city: "Reno",
    state: "NV",
    venue: "The Bunny Ranch",
    }
]




const makeTourCards = () => {
    let Domstring = '';
for(let i = 0; i < tourDates.length; i++) {
    Domstring += `<div class="tour-card">`;
    Domstring += `<h5 class="tour-card-header d-flex align-items-center card-header">${tourDates[i].date}</h5>`;
    Domstring +=  '<div class="card-body bg-dark">';
    Domstring +=  `<h5 class="card-title">${tourDates[i].city}, ${tourDates[i].state}</h5>`;
    Domstring +=  `<p class="card-text">${tourDates[i].venue}</p>`;
    Domstring +=  '<div class="button-soldout d-flex flex-row-reverse">';
    Domstring +=  '<button type="button" class="btn btn-lg btn-secondary buy-btn" title="SOLD OUT">Buy Tickets</button>';
    Domstring +=  '</div>';
    Domstring +=  '</div>';
    Domstring +=  '</div>';

}
printToDom('tour-cards',Domstring);

let assignButton = document.getElementsByClassName('buy-btn');
for (var i=0; i < assignButton.length; i++) {
    assignButton[i].addEventListener('click', soldOutAlert);
};

}

const soldOutAlert = () => {
        alert('SOLD OUT')
};


// NEWS ARRAY
const newsArrInfo = [
    {
    title: "Our Newest addition to the Band",
    date: '03/31/2013',
    imageUrl: "https://i.pinimg.com/originals/99/33/8b/99338be9bba30c2cc64682c79861964c.jpg",
    description: "We wash our brush with odorless thinner. We start with a vision in our heart, and we put it on canvas. Let's put a touch more of the magic here. Let your imagination be your guide. If it's not what you want - stop and change it. Don't just keep going and expect it will get better."
    },
    {
    title: "New Album!",
    date: '02/23/2013',
    imageUrl: "https://media.npr.org/assets/img/2018/03/11/ap_18046670213384_wide-b52b8fe4baa52b6768a875605f8c516a2177d807-s800-c85.jpg",
    description: "We are excited to announce a new album coming out on 07/04/2013!! We hope to have you join us at Waffle House to celebrate!  This is an example of what you can do with just a few things, a little imagination and a happy dream in your heart. I will take some magic white, and a little bit of Vandyke brown and a little touch of yellow. In this world, everything can be happy."
    },
    {
    title: "Local Show Coming up!",
    date: '01/15/2013',
    imageUrl: "https://www.straitstimes.com/sites/default/files/styles/article_pictrure_780x520_/public/articles/2019/03/22/jtoncert220319.jpg?itok=x-woy2uM&timestamp=1553254399",
    description: "Anytime you learn something your time and energy are not wasted. Every highlight needs it's own personal shadow. Let's make a happy little mountain now. If there's two big trees invariably sooner or later there's gonna be a little tree. You need the dark in order to show the light. There comes a nice little fluffer."
    },
    {
    title: "Just another thing coming up...",
    date: '08/10/2012',
    imageUrl: "https://i.pinimg.com/originals/d2/c2/d5/d2c2d515066110a54c720174f1cba496.jpg",
    description: "We can fix anything. Maybe there's a little something happening right here. We need dark in order to show light. There he comes. Just think about these things in your mind - then bring them into your world. Just take out whatever you don't want. It'll change your entire perspective."
    } 
];

// MEMBER BIOS ARRAY
const bios = [
    {
        imageUrl: "https://scontent.fbna1-2.fna.fbcdn.net/v/t1.0-9/10678579_749345165101262_849584611814256163_n.jpg?_nc_cat=109&_nc_ohc=UZkYhRGgLlwAX_T61_T&_nc_ht=scontent.fbna1-2.fna&oh=aceeeb5d104fd4e22ff27c93145ce774&oe=5F03A3E0",
        name: "David",
        role: "Vocals & Lyrics",
        bio: "As far as we can estimate, some bronzy blades are thought of simply as surprises. The pulsing albatross comes from a negroid relation. A licit current's trip comes with it the thought that the plumaged committee is a plywood. To be more specific, some glottic profits are thought of simply as peaces."
    },
    {
        imageUrl: "https://scontent-den4-1.xx.fbcdn.net/v/t31.0-8/s960x960/1507286_616290951740018_772292319_o.jpg?_nc_cat=102&_nc_ohc=ajxH03O-sn4AX8xTXAU&_nc_ht=scontent-den4-1.xx&oh=76cbc241f6d7e705fc5815ead904c539&oe=5EBDDD97",
        name: "Gary",
        role: "Guitars",
        bio: "Those rafts are nothing more than tulips. To be more specific, before pleasures, foreheads were only bathrooms. A meter can hardly be considered an unlopped icon without also being a dibble. A quince can hardly be considered a saltless day without also being a gondola."
    },
    {
        imageUrl: "https://scontent-den4-1.xx.fbcdn.net/v/t31.0-8/s960x960/1512176_616290968406683_1448758447_o.jpg?_nc_cat=105&_nc_ohc=BGqLqyQfszcAX9AaPI3&_nc_ht=scontent-den4-1.xx&oh=37d2ae567440eeea40236e8cbc57501e&oe=5EB6C501",
        name: "Mike",
        role: "Guitars",
        bio: "The first hated trial is, in its own way, a chicken. An outright amount without sons is truly a betty of distyle starters. A tearless accelerator is a sled of the mind. The hedges could be said to resemble lengthy parentheses."
    },
    {
        imageUrl: "https://scontent-den4-1.xx.fbcdn.net/v/t31.0-8/s960x960/1511686_616291578406622_1596941626_o.jpg?_nc_cat=103&_nc_ohc=ma3eFxQDNnYAX_hmeng&_nc_ht=scontent-den4-1.xx&oh=eb63d0a45ba029dabd3cac4cb2fe2a1b&oe=5EC0FFAC",
        name: "Niamh",
        role: "Bass",
        bio: "To be more specific, the dress of a fahrenheit becomes a churchy afternoon. Nowhere is it disputed that one cannot separate koreans from forspent elements. The postponed notebook reveals itself as an unmourned cymbal to those who look. If this was somewhat unclear, the literature would have us believe that a phylloid degree is not but a fridge."
    },
    {
        imageUrl: "https://scontent-den4-1.xx.fbcdn.net/v/t1.0-9/10592735_749345121767933_1675345667679864236_n.jpg?_nc_cat=104&_nc_ohc=QX_CLfYG8bsAX--lUDV&_nc_ht=scontent-den4-1.xx&oh=9b3eb127520a3bcd9d07bc712ef48043&oe=5F02671E",
        name: "Jon",
        role: "Drums/Percussion",
        bio: "A drill can hardly be considered a risky buffet without also being an eyebrow. Those washers are nothing more than physicians. Some nary strangers are thought of simply as guns. The first selfsame zebra is, in its own way, an amusement."
    }
];

// PRINT TO DOM
const printToDom = (divId, textToPrint) => {
    const selectedId = document.getElementById(divId)
    selectedId.innerHTML = textToPrint
};

// MAKE NEWS CARDS
const makeNewsCards = () => {
    let domString = "";
    for (let i = 0; i < newsArrInfo.length; i++) {
        domString += `<div class="card mx-auto w-75 text-body" id="newsInfoCards">`;
        domString +=   `<div class="card-body">`;
        domString +=    `<h4 class="text-center">${newsArrInfo[i].title}</h4>`;
        domString +=    `<img src="${newsArrInfo[i].imageUrl}" class="float-left" id="newsImg"`;
        domString +=     `<div>`;
        domString +=       `<h5>${newsArrInfo[i].date}</h5>`;
        domString +=       `<p>${newsArrInfo[i].description}</p>`;
        domString +=     `</div>`
        domString +=   `</div>`;
        domString += `</div>`;
    }
    printToDom("newsCards", domString);
};

// MAKE MEMBER BIO CARDS
const makeBioCards = () => {
    let domString = '';
    for ( i = 0; i < bios.length; i++ ) {
        domString += '<div class="card d-flex justify-content-center bg-dark ml-5 mr-5 mt-4 mb-4">'
        domString += '   <div class="row no-gutters">'
        domString += '       <div class="col-md-2">'
        domString += `          <img src="${bios[i].imageUrl}" class="card card-img bg-dark" alt="${bios[i].name} playing music on stage">`
        domString += '       </div>'
        domString += '       <div class="card col-md-10 bg-dark text-white">'
        domString += `          <h5 class="card-header">${bios[i].name}</h5>`
        domString += '          <div class="card-body">'
        domString += `              <h6 class="card-title">${bios[i].role}</h6>`
        domString += `              <p class="card-text">${bios[i].bio}</p>`
        domString += '          </div>'
        domString += '       </div>'
        domString += '   </div>' 
        domString += '</div>'
    }
    printToDom('bio-container', domString);
};


// MERCH CARDS
const merchItems = [
{
imageUrl: "https://m.media-amazon.com/images/I/61cph-9AgVL._AC_UL320_.jpg",
item: "T-shirt",
price: 15,
description: "Yellow Winter-Lizard"  
},
{
imageUrl: "https://images.cloudpuble.com/thumb/1010x1010/129.front/White.0/8f6407fde9be360d44b64969e3fb9744/a7/2019/02/21/MXPP-5c6f500fd9218.png",
item: "Coffee Cup",
price: 10,
description: "Stay warm during the winter with your favorite hot beverage in the cup!"
},
{
imageUrl: "https://ih0.redbubble.net/image.320352350.2352/st%2Csmall%2C215x235-pad%2C210x230%2Cf8f8f8.jpg",
item: "Sticker",
price: 5,
description: "Black Winter-Lizard Sticker"
},
{
imageUrl: "https://cdn.designbyhumans.com/product_images/p/53940.f56.9c492S7ay1Cm2MjUAAA-650x650-b-p.jpg",
item: "Sticker",
price: 5,
description: "Green Winter-Lizard Sticker"
},    
{
imageUrl: "https://i.ebayimg.com/images/g/BN4AAOSw1CBbr~Rh/s-l640.jpg",
item: "Lizard Coat",
price: 15,
description: "Keep your lizard cozy this winter!"
},
{
imageUrl: "https://i.ebayimg.com/images/g/ZRsAAOSwUrZd6acf/s-l640.jpg",
item: "Socks",
price: 6,
description: "Cozy Socks"
},
{
imageUrl: "https://images-na.ssl-images-amazon.com/images/I/712CCCA1hJL._AC_SX425_.jpg",
item: "Lizard Coat",
price: 9,
description: "With this coat, you'll have the coolest lizard on the block. Seriously."
},
{
imageUrl: "https://assetsprx.matchesfashion.com/img/product/1294005_1_zoom.jpg",
item: "Sweater",
price: 150,
description: "Cozy Winter-Lizard Sweater"
},
{
imageUrl: "https://i.rocdn.com/v2/50726711?w=1024&h=1024",
item: "T-shirt",
price: 25,
description: "Green Double Winter-Lizard"
}
]

// MERCH CARDS
let buyId = 0;
const makeMerchCards = (merchandise) => {
    let domString = "";
    for (let i = 0; i < merchandise.length; i++){
        merchItems[i].buyId = buyId++;
        domString += `<div id="merchCard" class="card col-md-6 col-lg-3 m-3 card-separation text-body" style="width: 18rem;">`;
        domString +=    `<img src="${merchandise[i].imageUrl}" id="merchImage" class="card-img-top">`;
        domString +=    `<div class="card-body p-1 m-0">`;
        domString +=        `<h5 class="card-title text-center">${merchandise[i].item}</h5>`;
        domString +=        `<p class="card-text text-center">${merchandise[i].description}</p>`;
        domString +=        `<p class="card-text text-center">$${merchandise[i].price}</p>`;
        domString +=        `<footer>`;
        domString +=        `<button id="${merchandise[i].buyId}" class="btn btn-secondary btn-lg w-100 align-end">BUY</button>`;
        domString +=        `</footer>`   
        domString +=     `</div>`;
        domString += `</div>`;
    }
    printToDom("store-container", domString);
    for (const item of merchandise)
        document.getElementById(item.buyId).addEventListener('click', buyNow);
}

const buyNow = (buy) => {
    console.log(buyId);
}

// MERCH FILTER
const filterItems = (e) => {
    const buttonId = e.target.id;
    if (buttonId === "all") {
        makeMerchCards(merchItems);
    } else {
        const merchCost = [];
        for (let i = 0; i < merchItems.length; i++){
            if(merchItems[i].price <= 5) {
               if(buttonId === "under-5"){
                    merchCost.push(merchItems[i]); 
               }; 
            } 
            else if (merchItems[i].price >= 6 && merchItems[i].price <= 10) {
                if(buttonId === "between5-10"){
                    merchCost.push(merchItems[i]); 
                }; 
            } 
            else if (merchItems[i].price >= 11)
                if(buttonId === "over-10"){
                    merchCost.push(merchItems[i]); 
            };
        }
        makeMerchCards(merchCost);
    }
};


// SUBSCRIPTION FORM FUNCTION
const emailConfirm = () => {
    const textInput = document.getElementById('exampleInputEmail1')
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (textInput.value.match(mailformat)) {
        alert('You are subscribed!')
    } else {
        alert('Enter valid email address')
    }
};

// ALBUM CARDS FUNCTION
const makeAlbumCards = () => {
    let domString = '';
  for (let i = 0; i < albums.length; i++) {
    domString += '<div class="card d-flex justify-content-center bg-dark ml-5 mr-5 mt-4 mb-4">'
    domString +=    '<div class="row no-gutters">'
    domString +=        '<div class="col-md-4">'
    domString +=           `<img src="${albums[i].albumArt}" class="card card-img">`
    domString +=        '</div>'
    domString +=        '<div class="card col-md-8 bg-dark text-white">'
    domString +=           `<h5 class= "card-header green-bg text-dark">${albums[i].title}</h5>`
    domString +=           '<div class="card-body">'
    domString +=           `<h6><a href="${albums[i].soundLink}" class="font-italic text-white">click here to listen</a></h6>`
    domString +=               `<h6 class="card-title">Release Date: ${albums[i].releaseDate}</h6>`
    domString +=               `<p class="card-text">Tracks: <div id"tracks-container"></div></p>`
    domString +=                    '<ol>'
        let tracksArray = albums[i].tracks;
        for(let k = 0; k < tracksArray.length; k++){
            domString +=    `<li>${tracksArray[k]}</li>`
        };
    domString +=                    '<ol>'    
    domString +=           '</div>'
    domString +=        '</div>'
    domString +=    '</div>' 
    domString += '</div>'
  }

  printToDom('album-container',domString);
};


   

// INITIAL FUNCTION
const init = () => {

    // LOCATION SWITCH STATEMENT
    switch (window.location.href) {
        case 'http://localhost:8080/index.html':
            document.getElementById('emailButton').addEventListener('click', emailConfirm);
            makeNewsCards();
            break; 
        case 'http://localhost:8080/members.html':
            makeBioCards();
            break;    
        case 'http://localhost:8080/merch.html':
            document.getElementById('under-5').addEventListener('click', filterItems);
            document.getElementById('between5-10').addEventListener('click', filterItems);
            document.getElementById('over-10').addEventListener('click', filterItems);
            document.getElementById('all').addEventListener('click', filterItems);
            makeMerchCards(merchItems);
            break; 
        case 'http://localhost:8080/music.html':
            makeAlbumCards();
            break;  
        case 'http://localhost:8080/tour.html':
            makeTourCards();
            break;             
    }
    
};

init();