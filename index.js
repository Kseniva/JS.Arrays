// создаем переменные для первого блока, 
// в котором будет располагаться основная информация о режиссерах,
// и второго блока, где расположим список лучших фильмов всех режиссеров
const firstBlock = document.querySelector(".firstblock");
const secondBlock = document.querySelector(".secondblock");

// массив с информацией о режиссерах
let directorsList = [
    {
      name: '1. Стивен Спилберг',
      career: 'Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр',
      films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
      top_rated_film: 'Список Шиндлера'
    },
    {
      name: '2. Кристофер Нолан',
      career: 'Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор',
      films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
      top_rated_film: 'Начало'
    },
    {
      name: '3. Мартин МакДона',
      career: 'Сценарист, Режиссёр, Продюсер',
      films: 'https://www.film.ru/person/martin-makdonah',
      top_rated_film: 'Три билборда на границе Эббинга, Миссури'
    },
    {
      name: '4. Алексей Балабанов',
      career: 'Режиссёр, Сценарист, Актёр, Продюсер',
      films: 'https://www.film.ru/person/aleksey-balabanov',
      top_rated_film: 'Брат'
    },
    {
      name: '5. Питер Фаррелли',
      career: 'Продюсер, Режиссёр, Сценарист, Актёр',
      films: 'https://www.film.ru/person/piter-farrelli',
      top_rated_film: 'Зелёная книга'
    },
    {
      name: '6. Юрий Быков',
      career: 'Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер',
      films: 'https://www.film.ru/person/yuriy-bykov',
      top_rated_film: 'Дурак'
    },
    {
      name: '7. Жан-Марк Валле',
      career: 'Режиссер, Продюсер, Монтажёр, Актёр, Сценарист',
      films: 'https://www.film.ru/person/zhan-mark-valle',
      top_rated_film: 'Далласский клуб покупателей'
    },
  ];

  // Cоздаем и записываем в переменную новый массив лучших фильмов на основе массива с информацией о режиссерах
  let topRatedFilms = directorsList.map(element => element.top_rated_film);
  // Создаем из элементов массива строку с перечислением элементов через запятую
    let topRatedFilmsString = topRatedFilms.join(', ');
    // Создаем контейнер для информации лучших фильмах и добавляем класс
    let topRatedFilmSection = document.createElement("div");
    topRatedFilmSection.classList.add('top-rated-films')
    topRatedFilmSection.textContent = topRatedFilmsString;

    // Создаем три переменные для элементов из массива: 
    // для имен режиссеров
  directorsList.forEach ((element) => {
    let nameSection = document.createElement("div");
    nameSection.classList.add('name');
    nameSection.textContent = element.name;

    // переменная для информации о карьере 
    let careerSection = document.createElement("div");
    careerSection.classList.add('career');
    careerSection.textContent = element.career;

    // переменная для фильмографии
    // создаем ссылку, при нажатии на которую происходит переход на сайт с фильмографиепй
    let filmography = document.createElement("a");
    filmography.classList.add('filmography');
    filmography.href = element.films;
    filmography.textContent = 'фильмография';

    // добавляем новые элементы (имена режиссеров, карьеру, фильмографию) в первый блок
    firstBlock.append(nameSection);
    firstBlock.append(careerSection);
    firstBlock.append(filmography);

    // добавляем список лучших фильмов во второй блок
    secondBlock.append(topRatedFilmSection);
  });
