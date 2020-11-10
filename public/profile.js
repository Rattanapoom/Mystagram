const addInfo = (res) =>{
  const gallery = document.querySelector(".profile");
  let html = "";
    html += `
    <section class="photo">
    <header class="photo__header">
    <header>

    <div class="container">
  
      <div class="profile">
  
        <div class="profile-image">
  
        <div class="photo__header-column"> <img class="photo__avatar" src="${element.user.profile_image.small}"/> </div>
        </div>
    </header>
    
    </section>
      `;
  gallery.innerHTML = html;
};
const callAPI = async (username) => {
  try {
    console.log("username --> ", username);
    const response = await fetch("/api/searchUser", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    });
    const res = await response.json();
    //check response return from our API
    console.log("response ----> ", res);
    addInfo(res);
  } catch (error) {
    console.log("message error --->", error);
    //Do Something
  }
};
const main = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    //conlsile.log(queryString);
    const username = urlParams.get('username');

 callAPI(username);
};
main();