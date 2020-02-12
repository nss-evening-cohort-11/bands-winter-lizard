const newsArr = [
    {
    date: '01/01/2020',
    imageUrl: "something.jpg",
    description: "lorem ipsum"
    },
    {
    date: '01/01/2020',
    imageUrl: "something.jpg",
    description: "lorem ipsum"
    },
    {
    date: '01/01/2020',
    imageUrl: "something.jpg",
    description: "lorem ipsum"
    },
    {
    date: '01/01/2020',
    imageUrl: "something.jpg",
    description: "lorem ipsum"
    } 
]


const makeNewsCards = (newsArr) => {
    let domString = ""
    for (let i = 0; i < newsArr.length; i++) {
        domString += `<div class="card">`;
        domString +=   `<div class="card-body">`;
        domString +=      `<img src="${newsArr[i].imageUrl}"`;
        domString +=      `<h3>${newsArr[i].date}</h3>`;
        domString +=      `<h4>${newsArr[i].description}</h4>`;
        domString +=   `</div>`;
        domString += `</div>`;
    }
    printToDom("newsCards", domString);
}

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}

const init = () => {
    makeNewsCards();
}

makeNewsCards();