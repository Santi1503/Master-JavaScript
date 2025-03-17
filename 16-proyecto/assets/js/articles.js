let articles = document.querySelector(".layout_articles");

let posts = [
  {
    title: "Articulo 1",
    date: "30/12/2028",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum quod, id, earum vero incidunt voluptates, dolor molestiae enim vitae laboriosam alias facilis ab quis ipsam provident odio! Sequi, magnam!",
  },
  {
    title: "Articulo 2",
    date: "15/01/2029",
    body: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Articulo 3",
    date: "22/02/2029",
    body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    title: "Articulo 4",
    date: "10/03/2029",
    body: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.",
  },
  {
    title: "Articulo 5",
    date: "05/04/2029",
    body: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.",
  },
  {
    title: "Articulo 6",
    date: "18/05/2029",
    body: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
  },
  {
    title: "Articulo 7",
    date: "25/06/2029",
    body: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
  },
  {
    title: "Articulo 8",
    date: "12/07/2029",
    body: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod.",
  },
];

posts.forEach((article) => {
  articles.innerHTML += `
        <article class="articles_article">
            <h3 class="article_title">${article.title}</h3>
            <span class="article_date">${article.date}</span>
            <p class="article_body">${article.body}</p>
            <a href="#" class="article_btn">Leer más</a>
        </article>
    `;
});
