const apiURL =
  "https://api-sa-east-1.hygraph.com/v2/cl6lj9x220qfa01uk0h6qhw9b/master";

const pageQuery = `{
    page(where: {id: "cl6ljl74m0qur0dkfp8062qum"}) {
      projects
      hours
      coffee
    }
  }`;

const requestOptions = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    query: pageQuery,
  }),
};

/**
 * Setup the Projects content
 * 
 * @returns void
 */
function setupProjects(data) {
    const projectsSpan = document.getElementById("projects-count");
    projectsSpan.innerHTML = data.page.projects

    const hoursSpan = document.getElementById("hours-count");
    hoursSpan.innerHTML = data.page.hours + '+'

    const coffeeSpan = document.getElementById("coffee-count");
    coffeeSpan.innerHTML = data.page.coffee  + '+'
}

fetch(apiURL, requestOptions)
  .then((response) => response.json())
  .then((result) => setupProjects(result.data));
