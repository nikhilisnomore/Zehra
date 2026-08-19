import { useEffect, useState } from "react";
import "./index.css";

const products = [
  {
    id: 1,
    name: "Satin Evening Dress",
    category: "Western Wear",
    price: 2499,
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 2,
    name: "Elegant Black Dress",
    category: "Western Wear",
    price: 2899,
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 3,
    name: "Classic Blazer Dress",
    category: "Western Wear",
    price: 3199,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 4,
    name: "Minimal White Dress",
    category: "Western Wear",
    price: 2299,
    image:
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=1000&q=90",
  },

  {
    id: 5,
    name: "Embroidered Anarkali",
    category: "Ethnic Wear",
    price: 2999,
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 6,
    name: "Festive Kurta Set",
    category: "Ethnic Wear",
    price: 2699,
    image:
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 7,
    name: "Luxury Ethnic Suit",
    category: "Ethnic Wear",
    price: 3899,
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 8,
    name: "Festive Silk Collection",
    category: "Ethnic Wear",
    price: 4299,
    image:
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=90",
  },

  {
    id: 9,
    name: "Wide Leg Trousers",
    category: "Bottom Wear",
    price: 1599,
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 10,
    name: "Classic Denim Jeans",
    category: "Bottom Wear",
    price: 1799,
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 11,
    name: "Pleated Palazzo Pants",
    category: "Bottom Wear",
    price: 1399,
    image:
      "https://images.unsplash.com/photo-1506629905607-d9c297d8e2c1?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 12,
    name: "Premium Straight Pants",
    category: "Bottom Wear",
    price: 1699,
    image:
      "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?auto=format&fit=crop&w=1000&q=90",
  },

  {
    id: 13,
    name: "Zehra Signature Dress",
    category: "New Arrivals",
    price: 3299,
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 14,
    name: "Soft Beige Co-Ord",
    category: "New Arrivals",
    price: 2799,
    image:
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 15,
    name: "Modern Luxe Outfit",
    category: "New Arrivals",
    price: 3599,
    image:
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1000&q=90",
  },
  {
    id: 16,
    name: "Minimal Rose Dress",
    category: "New Arrivals",
    price: 2999,
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1000&q=90",
  },
];

function App() {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState("home");
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [customer, setCustomer] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);

    const savedCustomer = localStorage.getItem("zehraCustomer");

    if (savedCustomer) {
      setCustomer(JSON.parse(savedCustomer));
    }

    const savedCart = localStorage.getItem("zehraCart");

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem("zehraCart", JSON.stringify(cart));
  }, [cart]);

  const formatPrice = (price) =>
    `₹${price.toLocaleString("en-IN")}`;

  const openPage = (name) => {
    setPage(name);
    setSelectedProduct(null);
    setSearchOpen(false);
    setProfileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const addToCart = (product) => {
    setCart((oldCart) => {
      const exists = oldCart.find((item) => item.id === product.id);

      if (exists) {
        return oldCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...oldCart, { ...product, quantity: 1 }];
    });
  };

  const increase = (id) => {
    setCart((oldCart) =>
      oldCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrease = (id) => {
    setCart((oldCart) =>
      oldCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const categoryProducts = products.filter(
    (product) => product.category === page
  );

  const searchResults = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const loginCustomer = (phone) => {
    const newCustomer = {
      name: "",
      phone,
      address: "",
      city: "",
      state: "",
      country: "India",
    };

    localStorage.setItem(
      "zehraCustomer",
      JSON.stringify(newCustomer)
    );

    setCustomer(newCustomer);
    setLoginOpen(false);
    setAccountOpen(true);
  };

  const logout = () => {
    localStorage.removeItem("zehraCustomer");
    setCustomer(null);
    setAccountOpen(false);
  };

  if (loading) {
    return (
      <div className="loader">
        <div className="loader-logo">ZEHRA</div>
        <div className="loader-text">WOMEN'S COLLECTION</div>
        <div className="loader-ring"></div>
      </div>
    );
  }

  return (
    <div className="app">

      {/* NAVBAR */}

      <header className="navbar">

        <button
          className="logo"
          onClick={() => openPage("home")}
        >
          ZEHRA
        </button>

        <nav>
          <button onClick={() => openPage("home")}>
            Home
          </button>

          <button onClick={() => openPage("Western Wear")}>
            Western Wear
          </button>

          <button onClick={() => openPage("Ethnic Wear")}>
            Ethnic Wear
          </button>

          <button onClick={() => openPage("Bottom Wear")}>
            Bottom Wear
          </button>

          <button onClick={() => openPage("New Arrivals")}>
            New Arrivals
          </button>
        </nav>

        <div className="nav-actions">

          <button
            onClick={() => {
              setSearchOpen(!searchOpen);
              setProfileOpen(false);
            }}
          >
            🔍
          </button>

          <button
            onClick={() => {
              setProfileOpen(!profileOpen);
              setSearchOpen(false);
            }}
          >
            ♙
          </button>

          <button onClick={() => openPage("cart")}>
            🛍
            {cartCount > 0 && (
              <span className="cart-count">
                {cartCount}
              </span>
            )}
          </button>

        </div>
      </header>

      {/* SEARCH */}

      {searchOpen && (
        <div className="search-panel">

          <input
            autoFocus
            placeholder="Search dresses, kurtas, trousers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {search && (
            <div className="search-results">

              {searchResults.length === 0 ? (
                <p>No products found.</p>
              ) : (
                searchResults.map((product) => (
                  <button
                    key={product.id}
                    className="search-item"
                    onClick={() => {
                      setSelectedProduct(product);
                      setPage("product");
                      setSearchOpen(false);
                    }}
                  >
                    <img src={product.image} />
                    <div>
                      <strong>{product.name}</strong>
                      <span>{formatPrice(product.price)}</span>
                    </div>
                  </button>
                ))
              )}

            </div>
          )}

        </div>
      )}

      {/* PROFILE */}

      {profileOpen && (
        <div className="profile-menu">

          <h3>My Profile</h3>

          <button
            onClick={() => {
              setProfileOpen(false);

              if (customer) {
                setAccountOpen(true);
              } else {
                setLoginOpen(true);
              }
            }}
          >
            {customer ? "My Account" : "Login / Register"}
          </button>

          <button onClick={() => openPage("orders")}>
            My Orders
          </button>

          <button onClick={() => openPage("tracking")}>
            Order Tracking
          </button>

          <button onClick={() => openPage("wishlist")}>
            My Wishlist
          </button>

        </div>
      )}

      {/* HOME */}

      {page === "home" && (
        <main>

          <section className="hero">

            <div className="hero-content">

              <span>THE NEW ZEHRA COLLECTION</span>

              <h1>
                Elegance
                <br />
                in Every Detail.
              </h1>

              <p>
                Discover thoughtfully designed women's
                fashion, created for the modern woman.
              </p>

              <button
                onClick={() => openPage("New Arrivals")}
              >
                EXPLORE COLLECTION →
              </button>

            </div>

          </section>

          <section className="section">

            <div className="section-heading">
              <span>SHOP BY CATEGORY</span>
              <h2>Find Your Style</h2>
            </div>

            <div className="category-grid">

              <button
                onClick={() => openPage("Western Wear")}
              >
                <div className="category-image western"></div>
                <h3>Western Wear</h3>
                <span>Explore Collection →</span>
              </button>

              <button
                onClick={() => openPage("Ethnic Wear")}
              >
                <div className="category-image ethnic"></div>
                <h3>Ethnic Wear</h3>
                <span>Explore Collection →</span>
              </button>

              <button
                onClick={() => openPage("Bottom Wear")}
              >
                <div className="category-image bottom"></div>
                <h3>Bottom Wear</h3>
                <span>Explore Collection →</span>
              </button>

            </div>

          </section>

          <section className="section">

            <div className="section-heading">
              <span>JUST IN</span>
              <h2>New Arrivals</h2>
            </div>

            <ProductGrid
              products={products.filter(
                (p) => p.category === "New Arrivals"
              )}
              addToCart={addToCart}
              openProduct={setSelectedProduct}
              setPage={setPage}
            />

            <button
              className="center-button"
              onClick={() => openPage("New Arrivals")}
            >
              VIEW ALL NEW ARRIVALS
            </button>

          </section>

        </main>
      )}

      {/* COLLECTION */}

      {[
        "Western Wear",
        "Ethnic Wear",
        "Bottom Wear",
        "New Arrivals",
      ].includes(page) && (
        <main className="collection">

          <div className="collection-heading">
            <span>ZEHRA COLLECTION</span>
            <h1>{page}</h1>
            <p>
              Discover pieces curated for your wardrobe.
            </p>
          </div>

          <ProductGrid
            products={categoryProducts}
            addToCart={addToCart}
            openProduct={setSelectedProduct}
            setPage={setPage}
          />

        </main>
      )}

      {/* PRODUCT */}

      {page === "product" && selectedProduct && (
        <main className="product-page">

          <button
            className="back"
            onClick={() => openPage(selectedProduct.category)}
          >
            ← BACK TO COLLECTION
          </button>

          <div className="product-detail">

            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
            />

            <div>

              <span>
                {selectedProduct.category}
              </span>

              <h1>{selectedProduct.name}</h1>

              <h2>
                {formatPrice(selectedProduct.price)}
              </h2>

              <p>
                A beautifully designed Zehra piece
                created for modern women's wardrobes.
              </p>

              <button
                className="large-add"
                onClick={() => addToCart(selectedProduct)}
              >
                ADD TO CART
              </button>

              <button
                className="buy"
                onClick={() => {
                  addToCart(selectedProduct);
                  openPage("cart");
                }}
              >
                BUY NOW
              </button>

            </div>

          </div>

        </main>
      )}

      {/* CART */}

      {page === "cart" && (
        <main className="cart-page">

          <div className="collection-heading">
            <span>YOUR ZEHRA BAG</span>
            <h1>My Cart</h1>
          </div>

          {cart.length === 0 ? (
            <div className="empty">
              <h2>Your cart is empty.</h2>
              <button
                onClick={() => openPage("New Arrivals")}
              >
                SHOP NEW ARRIVALS
              </button>
            </div>
          ) : (
            <div className="cart-layout">

              <div>

                {cart.map((item) => (
                  <div className="cart-item" key={item.id}>

                    <img src={item.image} />

                    <div>
                      <h3>{item.name}</h3>
                      <p>{formatPrice(item.price)}</p>

                      <div className="quantity">
                        <button onClick={() => decrease(item.id)}>
                          −
                        </button>

                        <span>{item.quantity}</span>

                        <button onClick={() => increase(item.id)}>
                          +
                        </button>
                      </div>

                    </div>

                  </div>
                ))}

              </div>

              <div className="summary">

                <h2>Order Summary</h2>

                <div>
                  <span>Subtotal</span>
                  <strong>{formatPrice(cartTotal)}</strong>
                </div>

                <div>
                  <span>Shipping</span>
                  <strong>FREE</strong>
                </div>

                <hr />

                <div>
                  <strong>Total</strong>
                  <strong>{formatPrice(cartTotal)}</strong>
                </div>

                <button>
                  PROCEED TO CHECKOUT
                </button>

              </div>

            </div>
          )}

        </main>
      )}

      {/* ORDERS */}

      {page === "orders" && (
        <main className="simple-page">
          <span>MY ACCOUNT</span>
          <h1>My Orders</h1>
          <p>Your orders will appear here.</p>
        </main>
      )}

      {/* TRACKING */}

      {page === "tracking" && (
        <main className="simple-page">
          <span>ORDER SERVICE</span>
          <h1>Order Tracking</h1>
          <p>Enter your order number to track your order.</p>
        </main>
      )}

      {/* WISHLIST */}

      {page === "wishlist" && (
        <main className="simple-page">
          <span>MY ACCOUNT</span>
          <h1>My Wishlist</h1>
          <p>Your saved products will appear here.</p>
        </main>
      )}

      {/* LOGIN */}

      {loginOpen && (
        <Login
          onLogin={loginCustomer}
          onClose={() => setLoginOpen(false)}
        />
      )}

      {/* ACCOUNT */}

      {accountOpen && customer && (
        <Account
          customer={customer}
          onClose={() => setAccountOpen(false)}
          onLogout={logout}
          onUpdate={(updated) => {
            setCustomer(updated);
            localStorage.setItem(
              "zehraCustomer",
              JSON.stringify(updated)
            );
          }}
        />
      )}

      {/* FOOTER */}

      <footer>

        <div className="footer-logo">
          ZEHRA
        </div>

        <p>
          Contemporary women's fashion,
          thoughtfully curated for every occasion.
        </p>

        <p>
          📞 +91 80907 09113
        </p>

        <p>
          ✉ coustmersupport@zehra
        </p>

        <small>
          © 2026 Zehra. All Rights Reserved.
        </small>

      </footer>

    </div>
  );
}

function ProductGrid({
  products,
  addToCart,
  openProduct,
  setPage,
}) {
  return (
    <div className="product-grid">

      {products.map((product) => (
        <div className="product-card" key={product.id}>

          <div
            className="product-image"
            onClick={() => {
              openProduct(product);
              setPage("product");
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={product.image}
              alt={product.name}
            />
          </div>

          <div className="product-info">

            <span>{product.category}</span>

            <h3>{product.name}</h3>

            <strong>
              ₹{product.price.toLocaleString("en-IN")}
            </strong>

            <button
              onClick={() => addToCart(product)}
            >
              ADD TO CART
            </button>

          </div>

        </div>
      ))}

    </div>
  );
}

function Login({ onLogin, onClose }) {
  const [phone, setPhone] = useState("");

  const submit = (e) => {
    e.preventDefault();

    const clean = phone.replace(/\D/g, "");

    if (clean.length !== 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    onLogin(clean);
  };

  return (
    <div className="overlay">

      <div className="modal">

        <button
          className="close"
          onClick={onClose}
        >
          ×
        </button>

        <div className="modal-logo">
          ZEHRA
        </div>

        <h2>Welcome to Zehra</h2>

        <p>
          Login with your phone number
        </p>

        <form onSubmit={submit}>

          <label>Phone Number</label>

          <div className="phone">
            <span>+91</span>

            <input
              type="tel"
              value={phone}
              maxLength="10"
              placeholder="Enter phone number"
              onChange={(e) =>
                setPhone(
                  e.target.value.replace(/\D/g, "")
                )
              }
            />
          </div>

          <button className="login-button">
            LOGIN
          </button>

        </form>

        <small>
          No OTP required in this frontend demo.
        </small>

      </div>

    </div>
  );
}

function Account({
  customer,
  onUpdate,
  onLogout,
  onClose,
}) {
  const [form, setForm] = useState(customer);

  const change = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const save = (e) => {
    e.preventDefault();
    onUpdate(form);
    alert("Profile updated successfully.");
  };

  return (
    <div className="overlay">

      <div className="account-modal">

        <button
          className="close"
          onClick={onClose}
        >
          ×
        </button>

        <div className="modal-logo">
          ZEHRA
        </div>

        <h2>My Account</h2>

        <form onSubmit={save}>

          <label>Name</label>
          <input
            name="name"
            value={form.name}
            onChange={change}
            placeholder="Your name"
          />

          <label>Phone Number</label>
          <input
            value={`+91 ${form.phone}`}
            disabled
          />

          <label>Address</label>
          <textarea
            name="address"
            value={form.address}
            onChange={change}
            placeholder="House / Street / Area"
          />

          <label>City</label>
          <input
            name="city"
            value={form.city}
            onChange={change}
            placeholder="City"
          />

          <label>State</label>
          <input
            name="state"
            value={form.state}
            onChange={change}
            placeholder="State"
          />

          <label>Country</label>
          <input
            name="country"
            value={form.country}
            onChange={change}
          />

          <button className="login-button">
            SAVE CHANGES
          </button>

        </form>

        <button
          className="logout"
          onClick={onLogout}
        >
          LOGOUT
        </button>

      </div>

    </div>
  );
}

export default App;
