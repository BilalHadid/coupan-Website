function fetchData() {
  fetch("http://localhost:5000/posts")
    .then((response) => {
      if (!response.ok) {
        throw Error("Error");
      }
      return response.json();
    })
    .then((store) => {
      console.log(store);
      const html = store.map((user) => {
        return `<div class="custom-control custom-checkbox" >
        <input type="checkbox" class="custom-control-input" id="cb6">
        <label class="custom-control-label" for="cb6">${user.title}</label>
        </div>`;
      });
      document
        .querySelector("#categories")
        .insertAdjacentHTML("afterbegin", html);
    })
    .catch((error) => {
      console.log(error);
    });
}
fetchData();
