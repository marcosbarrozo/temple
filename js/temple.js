//https://marcosbarrozo.github.io/wdd230/temple/data/data.json
const requestURL = 'data/data.json';
const cards = document.querySelector('.cards');
let id_list = getList();


function loadTemples(){
  fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const temples = jsonObject['temples'];
    temples.forEach(displayTemple);
});
}

loadTemples();

function displayTemple(temples) {
    
    let card = document.createElement('section');
    let name = document.createElement('h2');
    let image = document.createElement('img');
    let phone = document.createElement('p');
    let address = document.createElement('p');
    let services = document.createElement('ul');
    let temple_closure = document.createElement("ul");
    let services_title = document.createElement('h3');

    let like = document.createElement('img');    
    like.setAttribute('class', `like`);
  like.setAttribute('alt', `like button`);

    if(isInLike(temples.id)){
      like.setAttribute('src','images/star-fill.svg')
    } else {
      like.setAttribute('src','images/star.svg')
    }  

    temples.services.forEach(function(service){
      let li = document.createElement("li");
      li.textContent = service;
      services.appendChild(li);
    })

    temples.temple_closure.forEach(function(service){
      let li = document.createElement("li");
      li.textContent = service;
      temple_closure.appendChild(li);
    })

    name.textContent = temples.name;
    phone.textContent = temples.phone;
    address.textContent = temples.address;
    services_title.textContent =  "Services Avalible:"
     
    image.setAttribute('src', `images/${temples.image}`);
    image.setAttribute('alt', `${temples.name}`);
  
  
    
    card.appendChild(image);
    card.appendChild(name);  
    card.appendChild(services_title);  
    card.appendChild(services);
    card.appendChild(phone);  
    card.appendChild(address);
    card.appendChild(like);
    
    card.addEventListener("click",function(){
      showModal(temples);
    });

    document.querySelector('div.cards').appendChild(card);
  }

const temple_container = document.querySelector(".temple-container");

function showModal(temples){
  temple_container.innerHTML = "";
  let close_btn = document.createElement("span");
  close_btn.innerHTML = "&times;";
  close_btn.addEventListener("click", function(){
    temple_container.classList.remove("show-modal");
    cards.innerHTML = "";
    loadTemples();

  });


  // Create elements to add to the document
  let card = document.createElement('section');
  let name = document.createElement('h2');
  let image = document.createElement('img');
  let phone = document.createElement('p');
  let address = document.createElement('p');
  let services = document.createElement('ul');
  let temple_closure = document.createElement("ul");
  let services_title = document.createElement('h3');
  let temple_closure_title = document.createElement('h3');
  let like = document.createElement('img');
  like.setAttribute('alt', `like button`);

  if(isInLike(temples.id)){
    like.setAttribute('src','images/star-fill.svg')
  } else {
    like.setAttribute('src','images/star.svg')
  }

  like.setAttribute('class', `like`);

  like.addEventListener('click',function(){

    if(isInLike(temples.id)){
      like.setAttribute('src', `images/star.svg`);
     
      let value = temples.id
      id_list = id_list.filter(function(item) {
      return item !== value
})
      setList(id_list);
    } else {
      console.log("id list"+id_list)
        id_list.push(temples.id);
        like.setAttribute('src', `images/star-fill.svg`);
        setList(id_list);
      }

    }
  );

  close_btn.setAttribute("class","close");
  card.appendChild(close_btn);

  temple_container.classList.add("show-modal");

  temples.services.forEach(function(service){
    let li = document.createElement("li");
    li.textContent = service;
    services.appendChild(li);
  })

  temples.temple_closure.forEach(function(service){
    let li = document.createElement("li");
    li.textContent = service;
    temple_closure.appendChild(li);
  })

  name.textContent = temples.name;
  phone.textContent = temples.phone;
  address.textContent = temples.address;
  services_title.textContent =  "Services Avalible:";
  temple_closure_title.textContent =  "Temple Closure:";
   
  image.setAttribute('src', `images/${temples.image}`);
  image.setAttribute('alt', `${temples.name}`);
  
  card.appendChild(image);
  card.appendChild(name);  
  
  card.appendChild(services_title);  
  card.appendChild(services);
  card.appendChild(temple_closure_title);  
  card.appendChild(temple_closure);
  card.appendChild(phone);  
  card.appendChild(address);
  card.appendChild(like);

  temple_container.appendChild(card);

}
function isInLike(id){
  let list = getList();
  if (list){
    if(list.includes(id)){
      return true
    } else {
      return false;
    }

  }}

function getList(){
  
  return localStorage.getItem("id_list")?JSON.parse(localStorage.getItem("id_list")):[];
}

function setList(list){
  localStorage.setItem("id_list", JSON.stringify(list));
}

  
