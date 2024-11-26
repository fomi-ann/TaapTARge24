document.addEventListener("DOMContentLoaded", () => {
    const navbarPlaceholder = document.getElementById("navbar");
    if (navbarPlaceholder) {
      fetch("../navbar.html")
        .then(response => {
          if (!response.ok) {
            throw new Error(`Failed to fetch navbar: ${response.statusText}`);
          }
          return response.text();
        })
        .then(data => {
          navbarPlaceholder.innerHTML = data;
        })
        .catch(error => {
          console.error(error);
        });
    }
  });