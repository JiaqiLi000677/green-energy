const p = console.log;

const ctrlBtns = document.querySelectorAll('.controls button');
const cntnr = document.querySelector('.container');
const img = document.querySelector('#image');
let btnsArray = [
    ctrlBtns[0],
    ctrlBtns[1],
    ctrlBtns[2]
];

let pages = [{
        heading: "Mercedes-Benz SLR McLaren",
        bodyText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In itaque molestiae quas est explicabo accusamus officiis, mollitia quaerat iusto natus repellendus adipisci sequi, dicta omnis maxime cum a debitis consequatur?",
        thumb: "./images/1.jpg"
    },
    {
        heading: "BMW",
        bodyText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic perferendis fugiat, provident dolore, asperiores laborum, magni tempore adipisci earum, error quam quos dolorum ipsam nemo labore facere totam incidunt! Quibusdam.",
        thumb: "./images/2.jpg"
    },
    {
        heading: "Red",
        bodyText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita rem atque voluptatum possimus quisquam saepe rerum dolores est incidunt nam nesciunt, magni doloremque repellat necessitatibus provident, eius vero tenetur ab?",
        thumb: "./images/3.jpg"
    }
];

function clickBtn(ev) {

    let clickedButton = ev.target;

    let index = btnsArray.indexOf(clickedButton);
    p(index);

    p(clickedButton.id);

    for (let i = 0; i < ctrlBtns.length; i++) {
        if (ctrlBtns[i].id) {
            ctrlBtns[i].removeAttribute('id');
        }
    }


    clickedButton.id = 'active';

    cntnr.innerHTML = `
        <h2>${pages[index].heading}</h2>
        <img src=${pages[index].thumb} class = "image"></img>
        <p class = "content">${pages[index].bodyText}</p>
    `;
}

for (let i = 0; i < ctrlBtns.length; i++) {
    ctrlBtns[i].addEventListener('click', clickBtn);
}