```{=html}
<section id="testimonials">
  <div class="container">
    <div class="testimonial-carousel">
      <button class="nav-button prev">&lt;</button>
      <div class="testimonial-grid">
        <% items.forEach(function(item, index) { %>
          <div class="testimonial-item <% if (index !== 0) { %>hidden<% } %>">
            <img src="<%= item.image %>" alt="<%= item.name %> Photo" class="client-photo">
            <blockquote>"<%= item.text %>"</blockquote>
            <p class="client-name"><strong><%= item.name %></strong>, <%= item.designation %></p>
            <p class="company-name"><em><%= item.company.name %></em></p>
          </div>
        <% }); %>
      </div>
      <button class="nav-button next">&gt;</button>
</section>

<section id="contact-button-section">
  <h4>Bora conhecer as soluções da Uiro?</h4>
  <div class="container">
    <div class="contact-btn-wrapper">
      <a href="contato.qmd" class="contact-button">Entre em Contato</a>
    </div>
  </div>
</section>


<style>
  #testimonials {
    background-color: #f9f9f9;
    padding: 40px 0;
    text-align: center;
  }

  .testimonial-carousel {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
  }

  .testimonial-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr); /* Showing one item at a time */
    gap: 20px;
    overflow: hidden;
  }

  .testimonial-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: opacity 0.5s ease-in-out;
  }

  .testimonial-item.hidden {
    display: none;
  }

  .client-photo {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-bottom: 10px;
  }

  blockquote {
    font-size: 1.2em;
    font-style: italic;
    margin: 10px 0;
  }

  .client-name {
    font-size: 1em;
    color: #333;
  }

  .nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 10px;
    cursor: pointer;
    z-index: 1;
  }

  .nav-button.prev {
    left: 0;
  }

  .nav-button.next {
    right: 0;
  }
  
  #contact-button-section {
    padding: 20px 0;
    text-align: center;
  }

  /* Smaller button outside the grid */
  .contact-btn-wrapper {
    margin-top: 20px;
  }

  .contact-button {
    display: inline-block;
    padding: 10px 20px; /* Smaller size */
    background-color: black;
    color: white;
    font-size: 1em;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    border-radius: 8px;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }

  .contact-button:hover {
    background-color: gray;
  }
</style>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.nav-button.prev');
    const nextButton = document.querySelector('.nav-button.next');
    const items = document.querySelectorAll('.testimonial-item');
    let currentIndex = 0;

    function showItem(index) {
      items.forEach((item, i) => {
        item.classList.toggle('hidden', i !== index);
      });
    }

    prevButton.addEventListener('click', function() {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      showItem(currentIndex);
    });

    nextButton.addEventListener('click', function() {
      currentIndex = (currentIndex + 1) % items.length;
      showItem(currentIndex);
    });
  });
</script>



```