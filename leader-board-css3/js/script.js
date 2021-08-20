// change top player and top blogs text color
const sectionTitle = document.querySelectorAll('.section-tile')
for (const title of sectionTitle) {
    title.style.color = '#fc5c65'
};

// change all players bg color 
const players = document.querySelectorAll('.player');
for (const player of players) {
    player.style.backgroundColor = 'rgba(15, 185, 177,1.0)'
};

// add new player
document.getElementById('add-new-player').addEventListener('click', function () {
    const createNewPlayer = document.createElement('li');
    createNewPlayer.classList.add('list-item');
    // createNewPlayer.className = 'list-item'
    createNewPlayer.innerText = 'New Player'
    const studentList = document.getElementById('student-list')
    studentList.appendChild(createNewPlayer)
});

// increase number by clicking 
document.getElementById('increase-btn').addEventListener('click', function () {
    // debugger;
    const inputField = document.getElementById('input-field');
    let inputValue = parseInt(inputField.value);
    // if (inputValue <= 5) {
    //     inputValue = inputValue + 1;
    // }
    if ((inputValue < 10) && (inputValue >= 0)) {
        inputValue = inputValue + 1;
    }
    inputField.value = inputValue
    if (inputValue == 5) {
        document.getElementById('increase-btn').setAttribute('disabled', true)
    }
});


// searching javascript books

const jsBooks = [
    'A Smarter Way to Learn JavaScript: The new tech-assisted approach that requires half the effort',
    'Eloquent JavaScript: A Modern Introduction to Programming',
    'JavaScript & JQuery: Interactive Front-End Web Development',
    'JavaScript: The Good Parts',
    'Learn JavaScript VISUALLY',
    'JavaScript: The Definitive Guide',
    'Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript',
    'JavaScript for Kids: A Playful Introduction to Programming',
    'Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries',
    'High-Performance Browser Networking',
    'You Don’t Know JS',
    'JavaScript Allongé, the “Six” Edition',
];

// const searching = 'Javascript';
// let gotBook = []
// for (const book of jsBooks) {
//     if (book.toLowerCase().includes(searching.toLowerCase())) {
//         gotBook.push(book)
//     } 
// }
// console.log(gotBook);

const searching = 'javaScript';
const gotBook = [];
for (const book of jsBooks) {
    if (book.toLowerCase().includes(searching.toLowerCase())) {
        gotBook.push(book)
    }
}
console.log(gotBook);


// sort the numbers 

const numbers = [23, 45, 53, 87, 68, 14, 0, 9, 46, 71, 99, 100, 999, 5, 9, 44, 33, 13];

const sortedNumbers = numbers.sort(function (a, b) {
    return a - b;
})
console.log(sortedNumbers);