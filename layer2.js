class LayerDuaComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        /* Kode sakti langsung di dalam komponen agar tidak bisa ditindih */
        @media (max-width: 768px) {
          .about {
            padding: 60px 4% 40px 4% !important;
          }
          .about .grid-foto {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important; /* Paksa 2 kolom di HP */
            gap: 10px !important;
          }
          .about .card-item {
            width: 100% !important;
          }
          .about .card-thumb {
            height: 220px !important; /* Jinakkan tinggi poster film di HP */
          }
          .about .card-info h3 {
            font-size: 0.85rem !important;
          }
          .about .card-info p {
            font-size: 0.7rem !important;
          }
        }
      </style>

      <section class="about">
        <div class="about-content">
          <div class="section-title"><h2>Serie Terbaru</h2></div>
          <div class="grid-foto">
            
            <!-- KARTU 1 -->
            <div class="card-item">
              <div class="card-thumb">
                <span class="badge-eps">E8 END</span>
                <span class="badge-time">1:08:03</span>
                <img src="./img/film/harry.jpg" alt="Film 1">
              </div>
              <div class="card-info">
                <h3>Harry Potter Series (2026)</h3>
                <p class="quality">1080p, 720p & 480p</p>
                <p class="updated">diperbarui: kemarin</p>
              </div>
            </div>

            <!-- KARTU 2 -->
            <div class="card-item">
              <div class="card-thumb">
                <span class="badge-eps">E3/10</span>
                <span class="badge-time">1:07:54</span>
                <img src="./img/film/harry.jpg" alt="Film 2">
              </div>
              <div class="card-info">
                <h3>Agent Kim Reactivated (2026)</h3>
                <p class="quality">1080p, 720p & 480p</p>
                <p class="updated">diperbarui: 3 hari lalu</p>
              </div>
            </div>

            <!-- KARTU 3 -->
            <div class="card-item">
              <div class="card-thumb">
                <span class="badge-eps">E6 END</span>
                <span class="badge-time">1:10:29</span>
                <img src="./img/film/harry.jpg" alt="Film 3">
              </div>
              <div class="card-info">
                <h3>Notes from the Last Row (2026)</h3>
                <p class="quality">1080p & 720p</p>
                <p class="updated">diperbarui: 1 minggu lalu</p>
              </div>
            </div>

            <!-- KARTU 4 -->
            <div class="card-item">
              <div class="card-thumb">
                <span class="badge-eps">E4/12</span>
                <span class="badge-time">1:12:20</span>
                <img src="./img/film/harry.jpg" alt="Film 4">
              </div>
              <div class="card-info">
                <h3>See You at Work Tomorrow! (2026)</h3>
                <p class="quality">720p & 480p</p>
                <p class="updated">diperbarui: 2 minggu lalu</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    `;
  }
}
customElements.define('layer-dua', LayerDuaComponent);
