const books = [
    {
        title: 'Don Quixote',
        author: 'Miguel de Cervantes',
        path: 'img/don_quixote'
    },
    {
        title: 'Lord of the Rings',
        author: 'J.R.R. Tolkien',
        path: 'img/lord_of_the_rings'
    },
    {
        title: 'Harry Potter and the Sorcerer\'s Stone',
        author: 'J.K. Rowling',
        path: 'img/harry_potter'
    },
    {
        title: 'Alice\'s Adventures in Wonderland',
        author: 'Lewis Carroll',
        path: 'img/alice_adventures_in_wonderland'
    },
    {
        title: 'Twenty Thousand Leagues Under the Sea',
        author: 'Jules Verne',
        path: 'img/twenty_thousand_leagues_under_the_sea'
    },
    {
        title: 'Moby Dick',
        author: 'Herman Melville',
        path: 'img/moby_dick'
    },
    {
        title: 'The Picture of Dorian Gray',
        author: 'Oscar Wilde',
        path: 'img/the_picture_of_dorian_gray'
    }
];

const findBooks = () => {
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);
    document.getElementById('body').appendChild(table);

    for (let i = 0; i < books.length; i++) {
        if (i === 0) {         
            let row_1 = document.createElement('tr');
            let head_1 = document.createElement('th');
            head_1.innerHTML = "<p>Books</p>";
            let head_2 = document.createElement('th');
            head_2.innerHTML = "<p>Tittle</p>";
            let head_3 = document.createElement('th');
            head_3.innerHTML = "<p>Author</p>";

            row_1.appendChild(head_1);
            row_1.appendChild(head_2);
            row_1.appendChild(head_3);
            thead.appendChild(row_1);
        } else {
            let row_2 = document.createElement('tr');
            let row_2_1_item = document.createElement('td');
            row_2_1_item.innerHTML = `<img src="${books[i].path}.jpeg" alt="">`;
            let row_2_2_item = document.createElement('td');
            row_2_2_item.innerHTML = `<p>${books[i].title}</p>`;
            let row_2_3_item = document.createElement('td');
            row_2_3_item.innerHTML = `<p id ="author">${books[i].author}</p>`;

            row_2.appendChild(row_2_1_item);
            row_2.appendChild(row_2_2_item);
            row_2.appendChild(row_2_3_item);
            thead.appendChild(row_2);
        };
    };
};

findBooks();