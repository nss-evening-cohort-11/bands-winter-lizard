// MEMBER BIOS ARRAY
const bios = [
    {
        imageUrl: "https://scontent-den4-1.xx.fbcdn.net/v/t1.0-9/11188388_855799771122467_8248206020299838593_n.jpg?_nc_cat=107&_nc_ohc=K4mALcX0AMEAX_BbIdz&_nc_ht=scontent-den4-1.xx&oh=68ad399803320dffbfa1a845c7ae9fe6&oe=5EBAFFB6",
        name: "WinterLizard",
        role: "About Us",
        bio: "Mistakes have been made. You’re going to be home by 8, listening to the Talking Heads and reading Vonnegut or something. That sounds like a nice night. Um, I'm happy you're home. YOU BETTER RUN! She's our friend, and she's crazy! Hey kiddo, would you like a balloon?"
    },
    {
        imageUrl: "https://scontent-den4-1.xx.fbcdn.net/v/t31.0-8/12695058_979043065464803_6165821191574967721_o.jpg?_nc_cat=106&_nc_ohc=tEBFQMTUOz0AX_Ssiw7&_nc_ht=scontent-den4-1.xx&oh=f57e9c72d699f4aa4eb7b79a27d94690&oe=5F01A2E7",
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

// MAKE MEMBER BIO CARDS
const makeBioCards = () => {
    let domString = '';
    for ( i = 0; i < bios.length; i++ ) {
        domString += '<div class="bios-card d-flex justify-content-center text-dark m-3">'
        domString += '   <div class="card-image">'
        domString += `      <img src="${bios[i].imageUrl}" alt="${bios[i].name} playing music on stage">`
        domString += '   </div>'
        domString += '   <div class="card">'
        domString += `      <h5 class="card-header">${bios[i].name}</h5>`
        domString += '      <div class="card-body">'
        domString += `          <h5 class="card-title">${bios[i].role}</h5>`
        domString += `          <p class="card-text">${bios[i].bio}</p>`
        domString += '      </div>'
        domString += '   </div>'
        domString += '</div>'
    }
    printToDom('bio-container', domString)
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

// EVENTS
const events = () => {
    document.getElementById('emailButton').addEventListener('click', emailConfirm )
};

// INITIAL FUNCTION
const init = () => {
    makeBioCards();
};

init();
//events();