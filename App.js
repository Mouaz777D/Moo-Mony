const opportunities = [
  {
    title: "Paid Surveys",
    category: "Cash",
    description: "Find paid surveys available in Germany.",
    url: "https://www.google.com/search?q=paid+surveys+Germany"
  },
  {
    title: "Free Giveaways",
    category: "Prizes",
    description: "Discover free competitions and prize draws.",
    url: "https://www.google.com/search?q=free+giveaways+Germany"
  },
  {
    title: "Website Testing",
    category: "Tasks",
    description: "Find website testing opportunities.",
    url: "https://www.google.com/search?q=paid+website+testing+Germany"
  }
];

const list = document.getElementById("opportunityList");
const search = document.getElementById("searchInput");

if (list && search) {
  function displayOpportunities(query = "") {
    const filtered = opportunities.filter(item =>
      (item.title + " " + item.category + " " + item.description)
        .toLowerCase()
        .includes(query.toLowerCase())
    );

    list.innerHTML = filtered.map(item => `
      <article class="card">
        <div class="card-main">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <span>${item.category}</span>
          <p>
            <a class="open-link"
               href="${item.url}"
               target="_blank"
               rel="noopener noreferrer">
               Explore opportunities ↗
            </a>
          </p>
        </div>
      </article>
    `).join("");
  }

  search.addEventListener("input", () => {
    displayOpportunities(search.value);
  });

  displayOpportunities();
}
