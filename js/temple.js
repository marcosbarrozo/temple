//https://marcosbarrozo.github.io/wdd230/temple/data/data.json
const requestURL = 'data/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  
    const temples = jsonObject['temples'];
    temples.forEach(displayTemple);
});

function displayTemple(temples) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let name = document.createElement('h2');
    let image = document.createElement('img');
    let phone = document.createElement('p');
    let address = document.createElement('p');
    let services = document.createElement('ul');
    let temple_closure = document.createElement("ul");
    let services_title = document.createElement('h3');

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
    //image.setAttribute('loading', 'lazy');
  
    
    card.appendChild(image);
    card.appendChild(name);  
    card.appendChild(services_title);  
    card.appendChild(services);
    card.appendChild(phone);  
    card.appendChild(address);
    
    card.addEventListener("click",function(){
      showModal(temples);
      console.log('click')
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
    console.log("teste")
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

  temple_container.appendChild(card);


}
  