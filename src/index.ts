interface Review {
  id: number;
  name: string;
  job: string;
  img: string;
  text: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Suguru Geto',
    job: 'Curse User',
    img: 'https://64.media.tumblr.com/fcea22222cf383da19e3e43f7aa12cba/b0aab984248a410b-5f/s400x600/2821fb3816de788c87fa101b3c71ab1a4a89d91d.jpg',
    text: "I'm baby meggings twee health goth. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'Gojou Satoru',
    job: 'Teacher',
    img: 'https://64.media.tumblr.com/9bf6c0151bd18b16beb8459651f12cad/b0aab984248a410b-0b/s400x600/7233cc0d65d896eec945ebff4ea54a63934c4421.jpg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'Tsukumo Yuki',
    job: 'Special Grade',
    img: 'https://64.media.tumblr.com/22d7ba57a8972fd9f45b852e2dd2ab21/a15df80ff830868e-e3/s400x600/29deb1e71973786acae91346a8d671fa419eaf01.jpg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'Fushiguro Megumi',
    job: 'Student',
    img: 'https://64.media.tumblr.com/17e13607cb0e38f0889a2100910bb757/b0aab984248a410b-37/s400x600/f0bc535f93f215f08e434a01eddc13d226643faa.jpg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

const img = document.getElementById('person-img') as HTMLImageElement;
const author = document.getElementById('author') as HTMLParagraphElement;
const job = document.getElementById('job') as HTMLParagraphElement;
const info = document.getElementById('info') as HTMLParagraphElement;

const prevBtn = document.querySelector('#prev-btn') as HTMLButtonElement;
const nextBtn = document.querySelector('#next-btn') as HTMLButtonElement;
const randomBtn = document.querySelector('#random-btn') as HTMLButtonElement;

let currentItem: number = 0;

function showPerson(person: number): void {
  const item: Review = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

function updateCurrentItem(direction: number): void {
  currentItem = (currentItem + direction + reviews.length) % reviews.length;
  showPerson(currentItem);
}

window.addEventListener('DOMContentLoaded', function () {
  showPerson(currentItem);
});

nextBtn.addEventListener('click', function () {
  updateCurrentItem(1);
});

prevBtn.addEventListener('click', function () {
  updateCurrentItem(-1);
});

randomBtn.addEventListener('click', function () {
  let newIndex: number;
  do {
    newIndex = Math.floor(Math.random() * reviews.length);
  } while (newIndex === currentItem);

  currentItem = newIndex;
  showPerson(currentItem);
});
