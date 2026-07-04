class LayerTigaComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        @media (max-width: 768px) {
          .layer-tiga {
            padding: 40px 4% 40px 4% !important;
          }
          .layer-tiga .grid-foto {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important; /* Paksa 2 kolom di HP */
            gap: 10px !important;
          }
          .layer-tiga .card-item {
            width: 100% !important;
          }
          .layer-tiga .card-thumb {
            height: 220px !important;
          }
          .layer-tiga .card-info h3 {
            font-size: 0.85rem !important;
          }
          .layer-tiga .card-info p {
            font-size: 0.7rem !important;
          }
        }
      </style>

      <section class="layer-tiga">
        <div class="layer-tiga-content">
          <div class="section-title"><h2>Rekomendasi Film Populer</h2></div>
          <div class="grid-foto">
            
            <!-- KARTU 1 (LAYER 3) -->
            <div class="card-item">
              <div class="card-thumb">
                <span class="badge-eps">MOVIE</span>
                <span class="badge-time">2:15:40</span>
                <img src="./img/film/harry.jpg" alt="Film 5">
              </div>
              <div class="card-info">
                <h3>The Avengers Assemble (2026)</h3>
                <p class="quality">1080p & 720p</p>
                <p class="updated">diperbarui: 3 hari lalu</p>
              </div>
            </div>

            <!-- KARTU 2 (LAYER 3) -->
            <div class="card-item">
              <div class="card-thumb">
                <span class="badge-eps">MOVIE</span>
                <span class="badge-time">1:55:10</span>
                <img src="./img/film/harry.jpg" alt="Film 6">
              </div>
              <div class="card-info">
                <h3>Cyberpunk Nightmare (2026)</h3>
                <p class="quality">1080p, 720p & 480p</p>
                <p class="updated">diperbarui: 5 hari lalu</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    `;
  }
}
customElements.define('layer-tiga', LayerTigaComponent);

