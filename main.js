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
};

init();