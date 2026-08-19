@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Inter:wght@300;400;500;600&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Inter", sans-serif;
  background: #faf9f6;
  color: #171614;
}

a {
  text-decoration: none;
  color: inherit;
}


/* =========================
   NAVBAR
========================= */

.navbar {
  height: 85px;
  padding: 0 6%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #faf9f6;
  border-bottom: 1px solid #e7e1d8;
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  font-family: "Cormorant Garamond", serif;
  font-size: 38px;
  font-weight: 600;
  letter-spacing: 8px;
}

.navbar nav {
  display: flex;
  gap: 30px;
}

.navbar nav a {
  font-size: 12px;
  letter-spacing: 1px;
}

.navbar nav a:hover {
  opacity: 0.55;
}

.nav-icons {
  display: flex;
  gap: 18px;
  font-size: 20px;
}


/* =========================
   HERO
========================= */

.hero {
  min-height: calc(100vh - 85px);

  background:
    linear-gradient(
      90deg,
      rgba(20, 18, 16, 0.65),
      rgba(20, 18, 16, 0.12)
    ),
    url("https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=2200&q=90")
    center / cover no-repeat;

  display: flex;
  align-items: center;
  padding: 8%;
  color: white;
}

.hero-content {
  max-width: 650px;
}

.small-title {
  font-size: 11px;
  letter-spacing: 4px;
  margin-bottom: 22px;
}

.hero h1 {
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(65px, 8vw, 115px);
  font-weight: 400;
  line-height: 0.85;
  margin-bottom: 30px;
}

.hero-content > p:not(.small-title) {
  max-width: 450px;
  font-size: 14px;
  line-height: 1.8;
  margin-bottom: 35px;
}

.hero button {
  background: white;
  border: none;
  padding: 17px 32px;
  font-size: 11px;
  letter-spacing: 2px;
  cursor: pointer;
  transition: 0.3s;
}

.hero button:hover {
  background: #a48a62;
  color: white;
}


/* =========================
   CATEGORIES
========================= */

.categories {
  padding: 120px 6%;
}

.section-title {
  text-align: center;
  margin-bottom: 55px;
}

.section-title p {
  font-size: 10px;
  letter-spacing: 4px;
  margin-bottom: 15px;
}

.section-title h2 {
  font-family: "Cormorant Garamond", serif;
  font-size: 60px;
  font-weight: 400;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

.category-card {
  cursor: pointer;
}

.category-image {
  height: 580px;
  background-size: cover;
  background-position: center;
  transition: 0.5s;
}

.category-card:hover .category-image {
  transform: scale(1.02);
}

.western {
  background:
    url("https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1000&q=85")
    center / cover;
}

.ethnic {
  background:
    url("https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85")
    center / cover;
}

.bottom {
  background:
    url("https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=85")
    center / cover;
}

.category-card h3 {
  font-family: "Cormorant Garamond", serif;
  font-size: 31px;
  font-weight: 500;
  margin-top: 20px;
}

.category-card span {
  display: block;
  margin-top: 7px;
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
}


/* =========================
   NEW ARRIVALS
========================= */

.new-arrivals {
  padding: 100px 6%;
}

.product-box {
  height: 300px;
  border: 1px dashed #d9d2c8;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #888;
}


/* =========================
   FOOTER
========================= */

footer {
  background: #171614;
  color: white;
  padding: 80px 6% 30px;
  text-align: center;
}

.footer-logo {
  font-family: "Cormorant Garamond", serif;
  font-size: 45px;
  letter-spacing: 8px;
  margin-bottom: 20px;
}

footer > p {
  color: #aaa;
  max-width: 400px;
  margin: auto;
  line-height: 1.8;
  font-size: 13px;
}

.contact {
  margin-top: 30px;
  color: #aaa;
  font-size: 13px;
  line-height: 2;
}

.copyright {
  border-top: 1px solid #333;
  margin-top: 60px;
  padding-top: 25px;
  color: #777;
  font-size: 10px;
}


/* =========================
   MOBILE
========================= */

@media (max-width: 900px) {

  .navbar nav {
    display: none;
  }

  .category-grid {
    grid-template-columns: 1fr;
  }

  .category-image {
    height: 500px;
  }

  .hero {
    min-height: 700px;
  }

}


@media (max-width: 600px) {

  .navbar {
    height: 70px;
    padding: 0 20px;
  }

  .logo {
    font-size: 30px;
  }

  .hero {
    padding: 30px;
  }

  .hero h1 {
    font-size: 65px;
  }

  .categories,
  .new-arrivals {
    padding: 75px 20px;
  }

  .section-title h2 {
    font-size: 48px;
  }

  .category-image {
    height: 450px;
  }

}
