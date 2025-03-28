// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Get Started button in Hero Section
  const getStartedBtn = document.getElementById("get-started-btn");
  getStartedBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default link behavior
    alert("Get Started clicked! Redirecting to signup page...");
    // You can replace the alert with a redirect, e.g.:
    // window.location.href = "/signup";
  });

  // Learn More button in Hero Section
  const learnMoreBtn = document.getElementById("learn-more-btn");
  learnMoreBtn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Learn More clicked! Showing more details...");
    // You can replace the alert with a modal or scroll to a section, e.g.:
    // document.querySelector(".wealth").scrollIntoView({ behavior: "smooth" });
  });

  // Get Started button in Wealth Section
  const wealthGetStartedBtn = document.getElementById("wealth-get-started-btn");
  wealthGetStartedBtn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Get Started (Wealth) clicked! Redirecting to signup page...");
    // You can replace the alert with a redirect, e.g.:
    // window.location.href = "/signup";
  });
});
