document.addEventListener("DOMContentLoaded", () => {
  const reviewsContainer = document.getElementById("reviewsContainer");
  const allReviews = JSON.parse(localStorage.getItem("swiftReviews")) || [];
  const user = JSON.parse(sessionStorage.getItem("loggedUser"));

  if (!user) {
    reviewsContainer.innerHTML = "<p>You must be logged in to view your reviews.</p>";
    document.querySelector(".end-message").style.display = "none";
    return;
  }

  const userReviews = allReviews.filter(r => r.username === user.username);

  if (userReviews.length === 0) {
    reviewsContainer.innerHTML = "<p>You haven’t written any reviews yet.</p>";
    return;
  }

  userReviews.forEach(r => {
    const card = document.createElement("div");
    card.classList.add("review-card");
    card.innerHTML = `
    <h3>${r.city}, ${r.date}</h3>
    <p class="review-user">by ${r.username}</p>
    <p>${r.review}</p>
    <div class="stars">
        ${'<img src="/assets/img/birdreview.png" class="bird active">'.repeat(r.rating)}
        ${'<img src="/assets/img/birdreview.png" class="bird">'.repeat(5 - r.rating)}
    </div>
    `;
    reviewsContainer.appendChild(card);
  });
});