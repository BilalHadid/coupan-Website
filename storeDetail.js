function fetchData() {
  fetch("http://localhost:5000/store")
    .then((response) => {
      if (!response.ok) {
        throw Error("Error");
      }
      return response.json();
    })
    .then((store) => {
      console.log(store);
      const html = store.map((user) => {
        return `<li><a href="#">${user.title}</a></li>`;
      });
      document
        .querySelector("#storeDet")
        .insertAdjacentHTML("afterbegin", html);
    })
    .catch((error) => {
      console.log(error);
    });
}
fetchData();
