import {writeCode,readCode} from "./code.js";
import code from "./code.js"

const me=new code('Alex', 'Alex@abv.bg');
console.log(me);

writeCode();
readCode();


const obj= {
  name: "Alexey",
  actions: ['eat', 'drink', 'code'],
  greet: function() {
    console.log(`Hi! I'm ${this.name}!`);
  }
}

obj.greet();

sessionStorage.setItem('mySessionStore', JSON.stringify(obj));
const data=JSON.parse(sessionStorage.getItem('mySessionStore'));
console.log(data);

const flexbox = document.querySelector('.flexbox');
flexbox.style.display = 'grid';
flexbox.style.gridTemplateColumns = "100px 100px 100px"
flexbox.style.backgroundColor = 'green';
flexbox.style.width = "600px";
flexbox.style.height = "600px";
flexbox.style.justifyContent = "space-evenly";
flexbox.style.alignItems = "center";

const createDivs = (parent, iter) => {
  const newDiv = document.createElement("p");
  newDiv.textContent = iter;
  newDiv.style.width = "100px";
  newDiv.style.height = "100px";
  newDiv.style.justifyContent = "center";
  newDiv.style.alignItems = "center";
  newDiv.style.display = "flex";
  newDiv.style.backgroundColor = "black";
  newDiv.style.color = "white";
  parent.append(newDiv);
}

for (let i = 1; i <= 12; i++) {
  createDivs(flexbox, i);
}

document.addEventListener('readystatechange', (e) => {
  if (e.target.readyState === "complete") {
    console.log("ready");
    initApp();
  }
});

const initApp = () => {
  const divs = document.querySelectorAll('div p');
  divs.forEach((div) => {
    div.addEventListener("click", (e) => {
      e.stopPropagation();
      div.style.backgroundColor = 'purple';
    });
  });
  const mains = document.querySelectorAll('body div');
  mains.forEach((main) => {
    main.addEventListener('click', (e) => {
      main.style.backgroundColor = 'orange';
    });
  })
  
}