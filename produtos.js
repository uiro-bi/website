```{=html}

<h3>Conheça as soluções da Uiro</h3>

<div class="product-grid-container">
  <div class="product-grid">
    <% items.forEach(function(item, index) { %>
    <div class="product-item">
      <div class="icon-container">
      </div>
      <div class="text-container">
        <h3 class="product-name"><%= item.name %></h3>
        <p class="product-description"><%= item.description %></p>
      </div>
    </div>
    <% }); %>
  </div>
</div>

<h3>Queremos impactar</h3>


```