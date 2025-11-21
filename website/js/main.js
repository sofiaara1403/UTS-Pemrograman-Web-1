console.log(">>> MAIN.JS BERHASIL LOADED <<<");
const API_BASE = "http://localhost:3000";

/* ==============================
   INDEX PAGE
================================= */
if (window.location.pathname.includes("index.html")) {

    fetch(`${API_BASE}/informasi`)
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById("cardContainer");
            container.innerHTML = data.map(item => `
                <div class="col-md-4">
                    <div class="card info-card shadow-sm">
                        <img src="${item.image}" class="card-img-top">
                        <div class="card-body">
                            <h5 class="info-title">${item.title}</h5>
                            <p>${item.content.substring(0, 80)}...</p>
                            <a href="detail.html?id=${item.id}" class="btn btn-primary">Lihat Detail</a>
                        </div>
                    </div>
                </div>
            `).join("");
        })
        .catch(() => {
            document.getElementById("cardContainer").innerHTML =
                "<p class='text-danger'>Gagal memuat data dari API...</p>";
        });
}


/* ==============================
   DETAIL PAGE
================================= */
if (window.location.pathname.includes("detail.html")) {

    console.log("DETAIL PAGE LOADED");

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    console.log("ID =", id);

    fetch(`${API_BASE}/informasi/${id}`)
        .then(res => {
            console.log("Status:", res.status);
            if (!res.ok) throw new Error("Data tidak ditemukan");
            return res.json();
        })
        .then(item => {
            console.log("Data from API:", item);

            const detailBox = document.getElementById("detailContent");

            detailBox.innerHTML = `
                <h2 class="fw-bold mb-3">${item.title}</h2>
                <img src="${item.image}" class="img-fluid rounded mb-3"
                     style="max-height:300px; object-fit:cover">
                <p>${item.content}</p>
            `;
        })
        .catch(err => {
            console.error(err);
            document.getElementById("detailContent").innerHTML =
                "<p class='text-danger'>Gagal memuat detail informasi...</p>";
        });
}
