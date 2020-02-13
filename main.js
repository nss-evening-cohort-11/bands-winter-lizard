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
]


const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}

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
}

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

// EVENTS
const events = () => {
    document.getElementById('emailButton').addEventListener('click', emailConfirm )
};

// INITIAL FUNCTION
const init = () => {
    events();
    makeNewsCards();
};

init();
