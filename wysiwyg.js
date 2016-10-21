var bio = [
{
  title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
},
{
  title: "President",
  name: "Thomas Jefferson",
  bio: "Thomas Jefferson, a spokesman for democracy, was an American Founding Father, the principal author of the Declaration of Independence (1776), and the third President of the United States (1801–1809).",
  image: "http://cp91279.biography.com/BIO_Mini-Bios_0_Thomas-Jefferson_151078_SF_HD_768x432-16x9.jpg",
  lifespan: {
    birth: 1743,
    death: 1826
  }
},
{
  title: "Actor",
  name: "William Shatner",
  bio: " In his seven decades of television, Shatner became a cultural icon for his portrayal of James T. Kirk, Captain of the USS Enterprise, in the Star Trek franchise.",
  image: "https://lh4.googleusercontent.com/-XZ2NLL3YDJE/AAAAAAAAAAI/AAAAAAAADg4/YLj3X-MaIO4/s0-c-k-no-ns/photo.jpg",
  lifespan: {
    birth: 1937,
    death: 2020
  }
},
{
  title: "Musician",
  name: "David Bowie",
  bio: " He was a figure in popular music for over five decades, regarded by critics and musicians as an innovator, particularly for his work in the 1970s.",
  image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/David-Bowie_Chicago_2002-08-08_photoby_Adam-Bielawski-cropped.jpg",
  lifespan: {
    birth: 1947,
    death: 2016
  }
},
{
  title: "Game Programmer",
  name: "David Crane",
  bio: " He was best known as the designer of Pitfall! Pitfall! was a huge hit, and maintained the top slot on the Billboard charts for 64 weeks and was named video game of the year in 1982.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/David_Crane_%2810453626776%29.jpg",
  lifespan: {
    birth: 1953,
    death: 2031
  }
}
];

var container = document.getElementById("container");
var placeholder = "";

for (let i = 0; i < bio.length; i++) {
  placeholder += '<article class="people"><header><h4>';
  placeholder += `${bio[i].title}</h4><h3>`;
  placeholder += `${bio[i].name}</h3></header><section><img src="`;
  placeholder += `${bio[i].image}" alt="pic"><p>`;
  placeholder += `${bio[i].bio}</p><p></p></section><footer><h5>`;
  placeholder += `${bio[i].lifespan.birth} - ${bio[i].lifespan.death}</h5></footer></article>`;
}

container.innerHTML = placeholder;

// Now containerEL will have elements in it
var containerEl = document.getElementsByClassName("people");

// Event listeners are created
// When you click on one of the person elements, a dotted border should appear around it.
// When you click on one of the person elements, the text input should immediately gain focus so that you can start typing.
// When there is a highlighted person element, and you begin typing in the input box, the person's biography should be immediately bound to what you are typing, letter by letter.
// When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank.

for (let i = 0; i < containerEl.length; i++) {
    containerEl[i].addEventListener("click", function (e) {
    event.currentTarget.classList.toggle("dotted-border");
  });
}




