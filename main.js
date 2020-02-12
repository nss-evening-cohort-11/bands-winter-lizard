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
const printToDom = (divId, textToPrint) => {
    document.getElementById(divId).innerHTML = textToPrint;
  };

const makeAlbumCards = () => {
    let domString = '';
  for (let i = 0; i < albums.length; i++) {
    domString += '<div class="album-card card mb-3" style="max-width: 540px;">'
    domString +=    '<div class="row no-gutters">'
    domString +=        '<div class="col-md-4">'
    domString +=            `<img class="album-art" src="${albums[i].albumArt}">`
    domString +=        '</div>'
    domString +=    `<h3 class="album-card-title card-title col-md-8">${albums[i].title}</h3>`
    domString +=        '<div class="album-card-body card-body">'
    domString +=            `<h5 class="album-card-release">Release Date: ${albums[i].releaseDate}</h5>`
    domString +=        `<p class="album-card-text card-text"> Tracks: ${albums[i].tracks}</p>`
    domString +=        '</div>'
    domString +=    '</div>'
    domString += '</div>'
  }

  printToDom('album-container',domString);
};

makeAlbumCards();


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
