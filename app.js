const form = document.querySelector(".search-box");
const btn = document.querySelector(".btn");
const userName = document.querySelector(".user-title");
const userNameValue = document.querySelector("#input");
const userEmail = document.querySelector(".user-email");
const userTime = document.querySelector(".user-time");
const bio = document.querySelector(".bio");
const repo = document.querySelector(".repos");
const followers = document.querySelector(".followers");
const following = document.querySelector(".following");
const locationn = document.querySelector(".locationn");
const twitter = document.querySelector(".twitter");
const github = document.querySelector(".github");
const company = document.querySelector(".company");
const imgAvatarka = document.querySelector(".img-avatarka");

const getData = (user) => {
  fetch(`https://api.github.com/users/${user}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      userName.textContent = data.login;
      userEmail.textContent = data.email || "No email available";
      bio.textContent = data.bio;
      repo.textContent = data.public_repos;
      followers.textContent = data.followers;
      following.textContent = data.following;
      locationn.textContent = data.location || "No location available";
      imgAvatarka.src = data.avatar_url || "./img/Bitmap.png";
      github.textContent = data.html_url;
      twitter.textContent = data.twitter_username
        ? `@${data.twitter_username}`
        : "No twitter available";
      company.textContent = data.company || "No company available";
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

document.addEventListener("keydown", (e) => {
  if (e.keyCode == 13) {
    const username = userNameValue.value.trim();
    if (username) {
      getData(username);
    } else {
      alert("Please enter a GitHub username");
    }
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = userNameValue.value.trim();
  if (username) {
    getData(username);
  } else {
    alert("Please enter a GitHub username");
  }
});
