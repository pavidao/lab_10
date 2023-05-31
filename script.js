const URL = 'https://usersdogs.dmytrominochkin.cloud/dogs';
const Src = 'https://usersdogs.dmytrominochkin.cloud';
const xhr = new XMLHttpRequest();
let close_modal = document.getElementById('close_modal');
let body = document.getElementsByTagName('body')[0];
let counter = 0;

$.getJSON(URL)
  .done(function(dogs) {
    dogs.forEach(function(dog, index) {
      const dogDiv = $('<div>').addClass('grid open_modal').attr('onclick', 'display(this)').attr('value', index);

      const image = $('<img>').attr('src', Src + dog.dogImage).attr('alt', 'dog');

      const textDiv = $('<div>').addClass('textAling');

      const title = $('<h2>').text(dog.title);

      const sex = $('<p>').text(dog.sex);

      textDiv.append(title);
      textDiv.append(sex);

      dogDiv.append(image);
      dogDiv.append(textDiv);

      const main = $('main');
      main.before(dogDiv);
    });
  })
  .fail(function(err) {
    console.error(err);
  });

function display(elm) {
    const value = $(elm).attr('value');


  fetch(URL)
    .then(result => result.json())
    .then(dogs => {
      const dog = dogs[value];

      $('#link').attr('src', Src + dog.dogImage);
      $('#name').text(dog.title);
      $('#sex').text(dog.sex);
      $('#age').text(dog.age);
      $('#description').text(dog.description);

      modal.classList.add('modal_vis');
      body.classList.add('body_block');
    })
    .catch(err => console.error(err));
}

close_modal.onclick = function() {
  modal.classList.remove('modal_vis');
  body.classList.remove('body_block');
};