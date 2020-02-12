const newsArrInfo = [
    {
    date: '06/23/2013',
    imageUrl: "something.jpg",
    description: "New album coming out on  07/04/2013!! We hope to have you join us at "
    },
    {
    date: '01/15/2013',
    imageUrl: "something.jpg",
    description: "lorem ipsum"
    },
    {
    date: '08/10/2012',
    imageUrl: "something.jpg",
    description: "lorem ipsum"
    },
    {
    date: '03/01/2012',
    imageUrl: "something.jpg",
    description: "lorem ipsum"
    } 
]


const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}

const makeNewsCards = () => {
    let domString = "";
    for (let i = 0; i < newsArrInfo.length; i++) {
        domString += `<div class="card">`;
        domString +=   `<div class="card-body">`;
        domString +=      `<img src="${newsArrInfo[i].imageUrl}"`;
        domString +=      `<h3>${newsArrInfo[i].date}</h3>`;
        domString +=      `<h4>${newsArrInfo[i].description}</h4>`;
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
