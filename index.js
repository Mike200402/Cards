const createCardNode = () => {
  const card = document.createElement("div");
  card.className = "card";

  const figure = document.createElement("figure");
  const image = document.createElement("img");
  image.src = "assets/images/avatar-jessica.jpeg";
  figure.appendChild(image);
  card.appendChild(figure);

  const titleName = document.createElement("div");
  titleName.className = "title-name";
  const h2 = document.createElement("h2");
  h2.textContent = "Jessica Randall";
  const h4 = document.createElement("h4");
  h4.textContent = "London. United Kingdom";
  titleName.appendChild(h2);
  titleName.appendChild(h4);
  card.appendChild(titleName);

  const p = document.createElement("p");
  p.textContent = "\"Front-end developer and avid reader.\"";
  card.appendChild(p);

  const ul = document.createElement("ul");
  ul.id = "social-media";
  const socialMediaLinks = ["GitHub", "Frontend Mentor", "LinkedIn", "Twitter", "Instagram"];
  socialMediaLinks.forEach(link => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = link;
    li.appendChild(a);
    ul.appendChild(li);
  });
  card.appendChild(ul);

  return card;
}

const addCard = () => {
  const cardContainer = document.querySelector('.container');
  cardContainer.appendChild(createCardNode());
}

const addCardButton = document.querySelector('#addCardButton');
addCardButton.classList.add('boton-card');
addCardButton.addEventListener('click', addCard);
