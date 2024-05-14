const url = "http://10.92.198.38:8080/feed/posts";
const main = document.getElementById("image");

fetch(url)
  .then((response) => response.json())
  .then((data) => cards(data));

function cards(data) {
  const dataArray = data.posts;

  dataArray.forEach((element) => {
    const card = document.createElement("div");
    card.className = "container";
    card.innerHTML = `
    <img src="${element.imageUrl}" alt="" />
    <h2>${element.title}</h2>
    <p>
    ${element.content}
    </p>
  `;
    main.appendChild(card);
  });
}
