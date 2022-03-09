const programs = [
  {
    id: 1,
    picture: 'https://www.vhv.rs/viewpic/mhwRw_white-controller-icon-png-transparent-png/',
    name: 'Regiss',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos praesentium adipisci saepe aspernatur ipsa. Esse officiis obcaecati pariatur incidunt. Porro, molestiae veniam doloribus quidem veronam illum sequi minus debitis.',
  },
  {
    id: 2,
    picture: './Pages/Assets/iconsPartners/program2.png',
    name: 'Mwafrika',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos praesentium adipisci saepe aspernatur ipsa. Esse officiis obcaecati pariatur incidunt. Porro, molestiae veniam doloribus quidem veronam illum sequi minus debitis.',
  },
  {
    id: 3,
    picture: './Pages/Assets/iconsPartners/program3.png',
    name: 'Lecture',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos praesentium adipisci saepe aspernatur ipsa. Esse officiis obcaecati pariatur incidunt. Porro, molestiae veniam doloribus quidem veronam illum sequi minus debitis.',
  },
  {
    id: 4,
    picture: '../Pages/Assets/iconsPartners/program4.png',
    name: 'Lecture',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos praesentium adipisci saepe aspernatur ipsa. Esse officiis obcaecati pariatur incidunt. Porro, molestiae veniam doloribus quidem veronam illum sequi minus debitis.',
  },
  {
    id: 5,
    picture: './Pages/Assets/iconsPartners/program5.png',
    name: 'Lecture',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos praesentium adipisci saepe aspernatur ipsa. Esse officiis obcaecati pariatur incidunt. Porro, molestiae veniam doloribus quidem veronam illum sequi minus debitis.',
  },
];

const gamesRanking = [
  {
    idG: 1,
    imageG: 'https://res.cloudinary.com/ujuzi/image/upload/v1643795308/MICROVERSE/capstone-project-html-css-javascript/speakers/image-1_tomeut.png',
    nameG: 'Regiss',
    titleG: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos praesentium adipisci saepe asp',
    descriptionG: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos praesentium adipisci saepe aspernatur ipsa. Esse officiis obcaecati pariatur incidunt. Porro, molestiae veniam doloribus quidem veronam illum sequi minus debitis.',
  },
  {
    idG: 2,
    imageG: 'https://res.cloudinary.com/ujuzi/image/upload/v1643795308/MICROVERSE/capstone-project-html-css-javascript/speakers/image-1_tomeut.png',
    nameG: 'Mwafrika',
    titleG: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos praesentium adipisci saepe asp',
    descriptionG: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos praesentium adipisci saepe aspernatur ipsa. Esse officiis obcaecati pariatur incidunt. Porro, molestiae veniam doloribus quidem veronam illum sequi minus debitis.',
  },
  {
    idG: 3,
    imageG: 'https://res.cloudinary.com/ujuzi/image/upload/v1643795308/MICROVERSE/capstone-project-html-css-javascript/speakers/image-1_tomeut.png',
    nameG: 'Regiss',
    titleG: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos praesentium adipisci saepe asp',
    descriptionG: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos praesentium adipisci saepe aspernatur ipsa. Esse officiis obcaecati pariatur incidunt. Porro, molestiae veniam doloribus quidem veronam illum sequi minus debitis.',
  },
  {
    idG: 4,
    imageG: 'https://res.cloudinary.com/ujuzi/image/upload/v1643795308/MICROVERSE/capstone-project-html-css-javascript/speakers/image-1_tomeut.png',
    nameG: 'Regiss',
    titleG: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos praesentium adipisci saepe asp',
    descriptionG: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos praesentium adipisci saepe aspernatur ipsa. Esse officiis obcaecati pariatur incidunt. Porro, molestiae veniam doloribus quidem veronam illum sequi minus debitis.',
  },
  {
    idG: 5,
    imageG: 'https://res.cloudinary.com/ujuzi/image/upload/v1643795308/MICROVERSE/capstone-project-html-css-javascript/speakers/image-1_tomeut.png',
    nameG: 'Regiss',
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
  container.classList.add('section-project', 'col-md-2', 'text-light', 'm-1', 'p-1', 'text-center', 'progra-section');
  container.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
  container.setAttribute('data-id', id);

  container.innerHTML = `
    <div class="pic-lect">
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
  containerDisplay.classList.add('row', 'd-flex', 'justify-content-center');

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
  <img class="m-4 w-25 img-games"
    src="${imageG}"
    alt="profile picture">
  <div class="text-speakers w-50">
    <h4 class="pt-5" style="color:black; font-weight:900">${nameG}</h4>
    <span class="pt-4" style="font-style: italic; color: #EC5242;">${titleG}</span>
    <p class="pt-4">${descriptionG}</p>
  `;
  return container;
};

const renderGames = () => {
  const container = document.querySelector('.ranking-section');
  const containerDiv = document.createElement('div');
  containerDiv.classList.add('container');

  gamesRanking.forEach((game) => {
    containerDiv.appendChild(renderGame(game));
    container.appendChild(containerDiv);
  });
};

renderGames();