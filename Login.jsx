import { useState } from "react";

function Login({ onLogin, onClose }) {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const cleanPhone = phone.replace(/\D/g, "");

    if (cleanPhone.length !== 10) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    const savedCustomer =
      localStorage.getItem("zehraCustomer");

    if (savedCustomer) {
      const customer = JSON.parse(savedCustomer);

      if (customer.phone === cleanPhone) {
        localStorage.setItem(
          "zehraLoggedIn",
          "true"
        );

        onLogin(customer);
        return;
      }
    }

    const newCustomer = {
      name: "",
      phone: cleanPhone,
      address: "",
      city: "",
      state: "",
      country: "India",
      orders: [],
      wishlist: [],
    };

    localStorage.setItem(
      "zehraCustomer",
      JSON.stringify(newCustomer)
    );

    localStorage.setItem(
      "zehraLoggedIn",
      "true"
    );

    onLogin(newCustomer);
  };

  return (
    <div className="login-overlay">

      <div className="login-box">

        <button
          className="login-close"
          onClick={onClose}
        >
          ×
        </button>

        <div className="login-logo">
          ZEHRA
        </div>

        <h2>
          Welcome to Zehra
        </h2>

        <p className="login-subtitle">
          Enter your phone number to continue
        </p>

        <form onSubmit={handleLogin}>

          <label>
            Phone Number
          </label>

          <div className="phone-input">

            <span>
              +91
            </span>

            <input
              type="tel"
              placeholder="Enter 10-digit number"
              value={phone}
              maxLength="10"
              onChange={(e) => {
                setPhone(
                  e.target.value.replace(/\D/g, "")
                );

                setError("");
              }}
            />

          </div>

          {error && (
            <p className="login-error">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="login-button"
          >
            LOGIN
          </button>

        </form>

        <p className="login-register-text">
          No OTP required for this demo login.
        </p>

      </div>

    </div>
  );
}

export default Login;
