//Arrays//
tourDates = [{
    date: "02/28/2020",
    city: "Sacramento",
    state: "CA",
    venue: "The Dungeon"},

    {date: "03/01/2020",
    city: "San francisco",
    state: "CA",
    venue: "The Devils Playground",
    },

    {date: "03/03/2020",
    city: "SanDiego",
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


const makeTourCards = (tourDates,divId) => {
    let Domstring = '';
for(let i = 0; i < tourDates.length; i++) {
    Domstring =+ '<div class="tour-container">';
    Domstring =+ `<h5 class="card-header">Featured</h5>`;
    Domstring =+  <div class="card-body">
    Domstring =+  <h5 class="card-title">Special title treatment</h5>
    Domstring =+  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    Domstring =+  </div>
    Domstring =+  </div>
}

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

// EVENTS
const events = () => {
    document.getElementById('emailButton').addEventListener('click', emailConfirm )
};



// INITIAL FUNCTION
const init = () => {
    events();
};

init();