function fetchData() {
  fetch("http://localhost:5000/slider")
    .then((response) => {
      if (!response.ok) {
        throw Error("Error");
      }
      return response.json();
    })
    .then((slide) => {
      console.log(slide);
      const html = slide.map((user) => {
        return `
        <div class="item">
        <div class="great-deals-sstore-banners">
        <a href="stores.html"><img alt="placeholder image" src=${user.image} class="img-fluid rounded"></a>
        </div>
        </div>`;
      });
      console.log(html);
      document.querySelector("#slido").insertAdjacentHTML("afterbegin", html);
    })
    .catch((error) => {
      console.log(error);
    });
}
fetchData();
