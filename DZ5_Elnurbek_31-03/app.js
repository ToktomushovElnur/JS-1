function filterAndMapBooks(bookList) {
    const booksWithUAndText = bookList
        .filter(bookTitle => bookTitle.includes('у'))
        .map(bookTitle => bookTitle + ' - книга с буквой "у"')

    console.log("Книги с буквой 'у' и дополнительным текстом:")
    booksWithUAndText.forEach(book => {
        console.log(book)
    })
    const booksWithoutU = bookList.filter(bookTitle => !bookTitle.includes('у'))

    console.log("Остальные книги:")
    booksWithoutU.forEach(book => {
        console.log(book)
    });
}

const bookList = ['Портрет Дориана Грея', 'Маленький принц', 'Вино из одуванчиков', 'учитель шарлотта Бронте', 'убик Филип Дик', 'утонченный мертвец'];
filterAndMapBooks(bookList);




