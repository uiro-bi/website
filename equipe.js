```{=html}
<section id="team">
  <div class="container">
    <div class="team-grid">
      <% items.forEach(function(item) { %>
        <div class="team-member">
          <img src="<%= item.image %>" alt="<%= item.name %> Photo" class="team-photo">
          <h3 class="team-name"><%= item.name %></h3>
          <p class="team-role"><%= item.role %></p>
          <p class="team-bio"><%= item.bio %></p>
          <% if (item.linkedin) { %>
            <a href="<%= item.linkedin %>" target="_blank" class="linkedin-link">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" class="linkedin-icon">
            </a>
          <% } %>
        </div>
      <% }); %>
    </div>
  </div>
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
  #team {
  background-color: #f9f9f9;
  padding: 40px 0;
  text-align: center;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.team-member {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
  overflow: hidden; /* Ensure the icon stays within the container */
}

.team-photo {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 10px;
}

.team-name {
  font-size: 1.2em;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}

.team-role {
  font-size: 1em;
  color: #666;
  margin-bottom: 10px;
}

.team-bio {
  font-size: 0.9em;
  color: #999;
  margin-bottom: 40px; /* Space for the LinkedIn icon */
}

.linkedin-link {
  display: block;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}

.linkedin-icon {
  width: 24px; /* Adjust width as needed */
  height: 24px; /* Adjust height as needed */
  object-fit: contain;
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




```