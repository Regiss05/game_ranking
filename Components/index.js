const programs = [
  {
    id: 1,
    picture: 'https://icon-library.com/images/games-icon-png/games-icon-png-4.jpg',
    name: 'MKKE',
    description: 'In the best cinematic story that NetherRealm has crafted yet, Mortal Kombat 11 serves up a zany time-traveling adventure',
  },
  {
    id: 2,
    picture: 'https://icon-library.com/images/games-icon-png/games-icon-png-4.jpg',
    name: 'WGAME',
    description: 'A Thiefs End is an action-adventure game played from a third-person perspective, with platforming elements.',
  },
  {
    id: 3,
    picture: 'https://icon-library.com/images/games-icon-png/games-icon-png-4.jpg',
    name: 'GTA V',
    description: 'Grand Theft Auto V is an action-adventure game played from either a third-person or first-person perspective.',
  },
  {
    id: 4,
    picture: 'https://icon-library.com/images/games-icon-png/games-icon-png-4.jpg',
    name: 'FIFA',
    description: 'Single-player, multiplayer. FIFA 22 is a football simulation video game published by Electronic Arts.',
  },
  {
    id: 5,
    picture: 'https://icon-library.com/images/games-icon-png/games-icon-png-4.jpg',
    name: 'GOD OF WAR',
    description: 'this game focuses on Norse mythology and follows an older and more seasoned Kratos and his new son Atreus.',
  },
];

const gamesRanking = [
  {
    idG: 1,
    imageG: 'https://res.cloudinary.com/ujuzi/image/upload/v1643795308/MICROVERSE/capstone-project-html-css-javascript/speakers/image-1_tomeut.png',
    nameG: 'Yoa Benkel',
    titleG: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos praesentium adipisci saepe asp',
    descriptionG: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos praesentium adipisci saepe aspernatur ipsa. Esse officiis obcaecati pariatur incidunt. Porro, molestiae veniam doloribus quidem veronam illum sequi minus debitis.',
  },
  {
    idG: 2,
    imageG: 'https://res.cloudinary.com/ujuzi/image/upload/v1643795308/MICROVERSE/capstone-project-html-css-javascript/speakers/image-1_tomeut.png',
    nameG: 'Allain Bishweka',
    titleG: '',
    descriptionG: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos praesentium adipisci saepe aspernatur ipsa. Esse officiis obcaecati pariatur incidunt. Porro, molestiae veniam doloribus quidem veronam illum sequi minus debitis.',
  },
  {
    idG: 3,
    imageG: 'https://res.cloudinary.com/ujuzi/image/upload/v1643795308/MICROVERSE/capstone-project-html-css-javascript/speakers/image-1_tomeut.png',
    nameG: 'Regiss Muk',
    titleG: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos praesentium adipisci saepe asp',
    descriptionG: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos praesentium adipisci saepe aspernatur ipsa. Esse officiis obcaecati pariatur incidunt. Porro, molestiae veniam doloribus quidem veronam illum sequi minus debitis.',
  },
  {
    idG: 4,
    imageG: 'https://res.cloudinary.com/ujuzi/image/upload/v1643795308/MICROVERSE/capstone-project-html-css-javascript/speakers/image-1_tomeut.png',
    nameG: 'Kerry Eliazard',
    titleG: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos praesentium adipisci saepe asp',
    descriptionG: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos praesentium adipisci saepe aspernatur ipsa. Esse officiis obcaecati pariatur incidunt. Porro, molestiae veniam doloribus quidem veronam illum sequi minus debitis.',
  },
  {
    idG: 5,
    imageG: 'https://res.cloudinary.com/ujuzi/image/upload/v1643795308/MICROVERSE/capstone-project-html-css-javascript/speakers/image-1_tomeut.png',
    nameG: 'William Dubois',
    titleG: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos praesentium adipisci saepe asp',
    descriptionG: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos praesentium adipisci saepe aspernatur ipsa. Esse officiis obcaecati pariatur incidunt. Porro, molestiae veniam doloribus quidem veronam illum sequi minus debitis.',
  },
  {
    idG: 6,
    imageG: 'https://res.cloudinary.com/ujuzi/image/upload/v1643795308/MICROVERSE/capstone-project-html-css-javascript/speakers/image-1_tomeut.png',
    nameG: 'Regiss',
    titleG: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos praesentium adipisci saepe asp',
    descriptionG: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos praesentium adipisci saepe aspernatur ipsa. Esse officiis obcaecati pariatur incidunt. Porro, molestiae veniam doloribus quidem veronam illum sequi minus debitis.',
  },
];

const renderProgram = (program) => {
  const {
    id,
    picture,
    name,
    description,
  } = program;

  const container = document.createElement('div');
  container.classList.add('section-project', 'col-md-2', 'text-light', 'm-1', 'p-3', 'text-center', 'progra-section');
  container.setAttribute('data-id', id);

  container.innerHTML = `
    <div class="pic-lect mt">
        <img class="img-section" src="${picture}" alt="">
        <h4 class="">${name}</h4>
    </div>
    <p class="params">${description}</p>
  `;

  return container;
};

const renderPrograms = () => {
  const container = document.querySelector('.main-program-container');
  const containerDisplay = document.createElement('div');
  containerDisplay.classList.add('row', 'd-flex', 'justify-content-center', 'full-divcontainer');

  programs.forEach((program) => {
    containerDisplay.appendChild(renderProgram(program));
    container.appendChild(containerDisplay);
  });
};

renderPrograms();

const renderGame = (game) => {
  const {
    idG,
    imageG,
    nameG,
    titleG,
    descriptionG,
  } = game;

  const container = document.createElement('div');
  container.classList.add('speakers-section', 'col-md-6', 'd-flex', 'justify-content-center');
  container.setAttribute('data-id', idG);

  container.innerHTML = `
  <div col-md-6>
  <img class="m-2 img-games"
    src="${imageG}"
    alt="profile picture">
  </div>
  <div class="text-speakers col-md-6 m-2">
    <h4 class="pt-5" style="color:black; font-weight:900">${nameG}</h4>
    <span class="pt-4" style="font-style: italic; color: #EC5242;">${titleG}</span>
    <p class="pt-4">${descriptionG}</p>
  `;
  return container;
};

const renderGames = () => {
  const container = document.querySelector('.ranking-section');
  const containerDiv = document.createElement('div');
  containerDiv.classList.add('row', 'd-flex', 'justify-content-center');

  gamesRanking.forEach((game) => {
    containerDiv.appendChild(renderGame(game));
    container.appendChild(containerDiv);
  });
};

renderGames();