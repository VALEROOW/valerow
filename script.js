// script.js
console.log("Welcome to Valerow. Let’s build discipline and focus!");

// Replace this part in your <script>:
document.getElementById('ai-nav-btn').addEventListener('click', (e) => {
  e.preventDefault();
  // Toggle visibility instead of just showing
  const aiSection = document.getElementById('ai-assistant');
  aiSection.style.display = aiSection.style.display === 'block' ? 'none' : 'block';
  window.scrollTo({ 
    top: aiSection.offsetTop, 
    behavior: 'smooth' 
  });
});
