// globalThis.alert("Alert");

// let age = window.prompt("Podaj swój wiek");
// console.log(`masz ${age} lat`)

// let accept = window.confirm('akceptuję umowę');
// if (accept) {
//     console.log("umowa zaakceptowana");
// } else {
//     console.log("umowa nie zaakceptowana");
// }

// console.log(`here is ${window.innerHeight}, ${window.innerWidth}`)

window.document.write(`<h2>Hello</h2>`);

// const bubbleSort = (array) => {
	
//     for(let i = 0; i < array.length; i++) {
//         for(let n = 0; n < ( array.length - i -1); n++) {
//             if(array[n] > array[n+1]) {
//             let tmp = array[n]
//             array[n] = array[n + 1]
//             array[n+1] = tmp
//             }
//         }
//     }
//     console.log(array);
// }

// var array = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];
// bubbleSort(array);







// Pobierz do zmiennej jsonPracownicy poniższy obiekt. Wyświetl go w konsoli, a następnie za pomocą pętli forEach przeiteruj po każdym pracowniku, oraz wyświetl w konsoli index elementu tablicy oraz imie i nazwisko pracownika.


// const jsonPracownicy = {
//     "pracownicy":[
//         {"firstName": "Krystian", "lastName": "Dziopa"}, 
//         {"firstName": "Anna", "lastName": "Szapiel"},
//         {"firstName": "Piotr", "lastName": "Żmuda"}
//     ]
// };

// console.log(jsonPracownicy);
// // console.log(jsonPracownicy.pracownicy);
// // console.log(jsonPracownicy.pracownicy[0].firstName);

// jsonPracownicy.pracownicy.forEach(element => {
//     console.log(element.firstName, element.lastName)
// });

// jsonPracownicy.forEach(element => console.log($element)); 

// console.log(jsonPracownicy);

// console.log(JSON.parse(jsonPracownicy));

// console.log(employeesList.pracownicy[0]);

// for (let employee of jsonPracownicy.pracownicy) {
//     console.log(employee.firstName)
// }




// class Person {
//     constructor(name, lastName) {
// this.name = name;
// this.lastName = lastName
//     }
//     printInfo() {
//         console.log(`Imie: ${this.name}, Nazwisko: ${this.lastName}`);
//     }
// }

// let person = new Person("Lary", "David");
// let personTwo = new Person("Fat", "Bastard");
// personTwo.printInfo();
// console.log(person);


// 7-obiekty-ksiazka
// Napisz klasę "Ksiazka", która ma właściwości "tytul", "autor", "przeczytana" (przeczytana jest typu Boolean) oraz jedną metodę "opiszKsiazke", która zwraca stringa opisującego tą książkę wg. wzoru "Książka ma tytuł Wiedźmin, autorem jest Andrzej Sapkowski i została przeczytana.".

// Stwórz 3 instancje obiektu tej klasy z czego jedna z książek ma być już przeczytana, a następnie stwórz nową tablicę globalną i dodaj do niej te 3 książki.

// Następnie napisz funkcję "iloscPrzeczytanych", która jako parametr przyjmuje tablicę obiektów (naszych książek, ktore stworzyliśmy), a zwraca nam ilość książek, ktore zostały przeczytane. Podczas iteracji po tablicy (wewnątrz tej funkcji) i sprawdzania, czy książka jest przeczytana, wywołuj także na obiekcie metodę opiszKsiazke(), a wynik jej działania wyświetlaj w konsoli.

// Na samym końcu wyświetl w konsoli ilość przeczytanych książek


// class Book {
//     constructor(title, author, isRead) {
//         this.title = title;
//         this.author = author;
//         this.isRead = isRead;
//     }
    
//     bookInfo() {
//             console.log(`Książka ma tytuł ${this.title}, autorem jest ${this.author} i została przeczytana.`);
//     }
// }

// let book1 = new Book("Wiedźmin", "Andrzej Sapkowski", false);
// let book2 = new Book("The Wealth of Nations", "Adam Smith", true);
// let book3 = new Book("Poetyka", "Arystoteles", false);
// let book4 = new Book("ECMAScript Language Specification (ECMA-262)", "Albert Einstein", false);

// const booksArray = [book1, book2, book3, book4];

// const showReadBooks = (a) => {
//             let ifIsRead = 0;
//             a.forEach(i => {
//                 if (a[i].isRead) {
//                     ifIsRead += 1;
//                     a[i].bookInfo();
//                 } else {
//                     console.log(`Książka ma tytuł ${a[i].title}, autorem jest ${a[i].author} i niestety nie została przeczytana.`);
//                 }
//             });
            
            
//             // for (let i = 0; i < a.length; i++) {
//             //     if (a[i].isRead) {
//         //     ifIsRead += 1;
//         //     a[i].bookInfo();
//         // } else {
//         //     console.log(`Książka ma tytuł ${a[i].title}, autorem jest ${a[i].author} i niestety nie została przeczytana.`);
//         // }
//     // }
//     console.log(`Ilość przeczytanych książek tylko ${ifIsRead}, oraz ${a.length - ifIsRead} zostało do przeczytania`)
// }

// showReadBooks(booksArray);




// var king = {
// name: "Nabuchodonozor",
// number: 1,
// print: function() {
// console.log("Krol kraju " + this.country + " ma na imie " + this.name + " " + this.number);
// },
// printThis: function() {
// console.log("Jestem metodą `printThis` i teraz uruchomie  wewnętrzna metode `print`");
// this.print();
// }
// };

// var queen = {
//     name: "Kleopatra",
//     number: 7,
//     country: "Egipt"
// }

// // queen.country = "Egipt"
// king.country = "Babilonia"
// let {name, number, country} = queen;

// console.log(name, country);

// // console.log(person.height);
// // console.log(king["number"]);

// // king["print"]()
// // king.print()

// king.printThis()






/* 1-odwroc-string
Napisz funkcję, która pobiera jako parametr stringa (czyli napis) i zwraca ten sam napis tylko napisany wspak */

/* a */

// function makeReverseText(myString) {
//     let reverseString = Array.from(myString);
//     reverseString.reverse();
//     reverseString = reverseString.join("");
//     console.log("Reversed text:\n"+reverseString+"\nmade with dividing string to an array & joining back")
// }

// makeReverseText("qwerty108")



/* b */

// function makeReverseText(myString) {
//     let reverseString = "";
//     let letterNr = myString.length - 1;
//     while (letterNr >= 0) {
//         reverseString = reverseString + myString.charAt(letterNr--);
//     }
//     console.log("Reversed text:\n"+reverseString+"\n(made with while loop & charAt indexing)")
// }

// makeReverseText("qwerty108")



/* 2-sortuj-litery-stringa
Napisz funkcję, która pobiera jako parametr stringa (czyli napis) i zwraca ten napis z posortowanymi literami */

// function makeSortedText(myString) {
//     let sortedString = Array.from(myString);

//     function checkNumber(number) {
//         if (number % 1 == 0)
//           return false;
//         else
//           return true;
//       }
//       sortedString = sortedString.filter(checkNumber);
//     sortedString.sort();
//     sortedString = sortedString.join("");
//     console.log(`Alphabetically sorted text with numbers excluded:\n${sortedString}`)
// }

// makeSortedText("qwerty108")



/* 3-suma-iloczyn
Napisz funkcję ze zmiennymi lokalnymi, która policzy sumę i iloczyn elementów tablicy [1, 2, 3, 4, 5, 6]. Funkcja przyjmuje jeden parametr - ww. tablicę z liczbami. Funkcja nie zwraca nic. Funkcja wyświetla wyniki w konsoli */

// function sumAndProduct(myArray) {
//     let sum = 0;
//     let product = 0;
//     let numberCheck = false;
//         myArray.forEach(element => {
//             if (typeof element !== "number") {
//                 console.log(element)
//                 return 
//             }
//             sum += element;
//             product *= element
//         });
//         console.log("Sum of your array is "+sum+" & "+"the product of your array is "+product);
// }

// sumAndProduct([1, 0, 8, 2, "i"])



/* 4-suma-kwadratow
Napisz funkcję ze zmiennymi lokalnymi, która liczy sumę kwadratów elementów tablicy [0,1,2,3,4,5]. Funkcja przyjmuje jeden parametr - w/w tablicę z liczbami. Funkcja zwraca sumę kwadratow. Wyświetl wynik działania funkcji w konsoli. */

// function makeSquareNumbers(myArray) {
//     let sum = 0;
//     let numberCheck = true;
//     myArray.forEach(item => {
// numberCheck = isNaN(item);
//     });
//     if (numberCheck === false) {
//         myArray.forEach(element => {
//             element *= element; 
//             sum += element;
//         });
//         console.log("Sum of your array squares is "+sum);
//     } else {
//         console.log("Please check your array. Not all values are numbers!")
//     }
// }

// makeSquareNumbers([1, 0, 8, 2, 2, "2"])

// /* 5-element-fibonacci
// Napisz funkcję, która zwraca wartość n-tego elementu ciągu fibbonaciego. Wynik działań i funkcji wyświetl w konsoli */

// function makeFibonacciSequence(numberOfSequence) {
//     let firstNr = 0;
//     let secondNr = 1;
//     let nextNr;
//         for (let i = 2 ; i <= numberOfSequence; i++) {
//             nextNr = firstNr + secondNr; 
//             firstNr = secondNr;
//             secondNr = nextNr;
//     }
// console.log("The Fibonacci sequence element number "+numberOfSequence+" is: \n"+secondNr)
// }

// makeFibonacciSequence(5)
