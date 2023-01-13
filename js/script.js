



// 1) Створити сторінку на якій виводиться  вікно в яке юзер вводить дані.
// Дані виводяться в стилізований список, можете підключити bootstrap чи написати свої стилі.При введені більше 5 пунктів, перший пункт видаляється.В пункті який добавляється повино бути данні які введено і час створення в форматі день, номер місяця, рік і час години хвилини.



window.onload = () => {
    let btn = document.querySelector('.button');
    let ol = document.querySelector('.list');
    let li = '';
    let b = new Date;
    function a() {
        li = document.createElement('li');
        ol.appendChild(li);
        li.innerText = `${ prompt() }  ${ b.toLocaleString() }`;
        let q = document.querySelectorAll('li');
        console.log(q)
        let qq = Array.from(q);
        if (qq.length > 5) {
            q[0].remove()
        }
    }
    btn.addEventListener('click', a);
}




// 2) створити массив обєктів і на сонові нього вивести на сторінку лінки в яких знаходяться зображення і alt для зображення, стилізувати задовільно, кількість обєктів в массиві більше 3

const showArr = [
    {
        imgPath: '/img/1.jpg',
        alt: 'panda',
        href: 'https://pustunchik.ua/uploads/school/cache/old/interesting/animals/Nevozmozhnyje-milashki/184712.jpg'
    },
    {
        imgPath: '/img/1.jpg',
        alt: 'cat',
        href: 'https://pustunchik.ua/uploads/school/cache/old/interesting/animals/Nevozmozhnyje-milashki/1924806_622830051104742_1872612786_n.jpgi'
    },
    {
        imgPath: '/img/1.jpg',
        alt: 'dog',
        href: 'https://pustunchik.ua/uploads/school/cache/old/interesting/animals/Nevozmozhnyje-milashki/10322716_639479616106452_794670378783623704_n.jpg'
    },
    {
        imgPath: '/img/1.jpg',
        alt: 'birds',
        href: 'https://pustunchik.ua/uploads/school/cache/old/interesting/animals/Nevozmozhnyje-milashki/6321960-R3L8T8D-650-loving-animals-using-each-other-as-pillows-my-heart-has-melted-completely-16-620x-620x.jpg'
    },
]


let imgList = document.querySelector('.img-list');
imgList.setAttribute('style', 'margin: 100px auto 0; max-width: 50%;')
showArr.forEach((item) => {
    let link = document.createElement('a');
    link.setAttribute('style', 'color:black');
    link.innerText = item.alt;
    link.setAttribute('href', item.href);
    let liA = document.createElement("li");
    liA.setAttribute('style', 'margin-top:20px; font-size: 20px; ')
    imgList.appendChild(liA);
    imgList.lastChild.appendChild(link);
});


// 3) Створити таблицю за допомогою js з полями імя, місто, курс і заповнити її даними також за допомогою js.В таблиці повино бути мінімум 2 рядки
// Якщо є питання по роботі питайте

let tableArr = [
    {
        name: 'Імя',
    },
    {
        name: 'Місто',
    },
    {
        name: 'Курс',
    },
];

let body = document.querySelector('.three-task');
let table = document.createElement('table');
table.setAttribute('style', 'display: flex;flex-direction: column;max-width: 50%;margin: 100px auto;border: 1px solid #000;padding:50px');
body.appendChild(table);


tableArr.forEach((item) => {
    let input = document.createElement('input');
    let label = document.createElement('label');
    input.setAttribute('style', 'margin-top: 5px;margin-bottom: 20px;max-width: 50%;');
    label.setAttribute('style', 'font-size: 20px;');
    input.setAttribute('type', 'text');
    label.innerText = item.name;
    table.appendChild(label);
    table.appendChild(input);
});

let button = document.createElement('butoon');
button.setAttribute('style', 'border: 1px solid #000;text-align:center;font-size: 20px;padding:20px 0 20px 0 ; max-width: 50%;')
button.setAttribute('type', 'submit');
button.innerText = 'Відправити';
table.appendChild(button);



console.log(table);

