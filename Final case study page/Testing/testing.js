document.addEventListener('DOMContentLoaded', function() {
  const missedRoute = document.querySelector('.missed-route-highlight');
  const simulateBtn = document.getElementById('simulateMiss');
  const resetBtn = document.getElementById('reset');
  const feedbackEmojis = document.querySelectorAll('.emoji-feedback span');

  // Simulate missed turn
  simulateBtn.addEventListener('click', function() {
    missedRoute.style.display = 'block';
    
    // Show animated rerouting
    setTimeout(() => {
      alert("Rerouting... New route calculated!");
    }, 1500);
  });

  // Reset demo
  resetBtn.addEventListener('click', function() {
    missedRoute.style.display = 'none';
  });

  // Feedback capture
  feedbackEmojis.forEach(emoji => {
    emoji.addEventListener('click', function() {
      const rating = this.getAttribute('data-rating');
      console.log(`User rating: ${rating}/5`);
      alert(`Thanks for your feedback! Rating: ${rating}/5`);
      
      // Here you would send data to analytics
      // fetch('/api/feedback', { method: 'POST', body: JSON.stringify({ rating }) });
    });
  });
});const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8
  });let startTime;
  simulateBtn.addEventListener('click', () => {
    startTime = Date.now();
    // ...
  });
  
  // On feedback submission
  const reactionTime = (Date.now() - startTime) / 1000;
  // Randomly assign users to test/control
const isTestGroup = Math.random() > 0.5;
if (isTestGroup) missedRoute.style.display = 'block';