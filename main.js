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
    printToDom('bio-container', domString)
};


// MERCH CARDS
const merchItems = [
{
imageUrl: "image.jpg",
item: "t-shirt",
price: "$15"
},
{
imageUrl: "image.jpg",
item: "t-shirt",
price: "$15"
},
{
imageUrl: "image.jpg",
item: "t-shirt",
price: "$15"
},
{
imageUrl: "image.jpg",
item: "t-shirt",
price: "$15"
},    
{
imageUrl: "image.jpg",
item: "t-shirt",
price: "$15"
},
{
imageUrl: "image.jpg",
item: "t-shirt",
price: "$15"
},
{
imageUrl: "image.jpg",
item: "t-shirt",
price: "$15"
},
{
imageUrl: "image.jpg",
item: "t-shirt",
price: "$15"
},
{
imageUrl: "image.jpg",
item: "t-shirt",
price: "$15"
}
]
// MERCH CARDS
const makeMerchCards = () => {
    let domString = "";
    for (let i = 0; i < merchItems.length; i++){
        domString += `<div class="card col-md-6 col-lg-4 card-separation" style="width: 18rem;">`;
        domString += `<img src="${merchItems[i].imageUrl}" class="card-img-top" alt="...">`;
        domString += `<div class="card-body">`
        domString += `<h5 class="card-title">${merchItems[i].item}</h5>`
        domString += `<p class="card-text"></p>`
        domString += `<p class="card-text">${merchItems[i].price}</p>`
        domString += `<button class="btn btn-secondary">BUY NOW</button>`
        domString += `</div>`
        domString += `</div>`
    }
    printToDom("merchItemsCards", domString);
}

makeMerchCards();

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

// INITIAL FUNCTION
const init = () => {

    // LOCATION SWITCH STATEMENT
    switch (window.location.href) {
        case 'http://localhost:8080/index.html':
            document.getElementById('emailButton').addEventListener('click', emailConfirm );
            makeNewsCards();
            break; 
        case 'http://localhost:8080/members.html':
            makeBioCards();
            break;    
        case 'http://localhost:8080/merch.html':
            console.log('merch');
            break; 
        case 'http://localhost:8080/music.html':
            console.log('music');
            break;  
        case 'http://localhost:8080/tour.html':
            console.log('tour');
            break;             
    }
};

init();