import { useState } from "react";

function Account({
  customer,
  onUpdate,
  onLogout,
  onClose,
}) {

  const [form, setForm] = useState({
    name: customer?.name || "",
    phone: customer?.phone || "",
    address: customer?.address || "",
    city: customer?.city || "",
    state: customer?.state || "",
    country: customer?.country || "India",
  });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const handleSave = (e) => {

    e.preventDefault();

    const updatedCustomer = {
      ...customer,
      ...form,
    };

    localStorage.setItem(
      "zehraCustomer",
      JSON.stringify(updatedCustomer)
    );

    onUpdate(updatedCustomer);

    alert(
      "Your Zehra profile has been updated successfully."
    );

  };

  return (

    <div className="account-overlay">

      <div className="account-box">

        <button
          className="account-close"
          onClick={onClose}
        >
          ×
        </button>

        <div className="account-header">

          <div className="account-avatar">

            {form.name
              ? form.name.charAt(0).toUpperCase()
              : "Z"}

          </div>

          <div>

            <h2>
              My Account
            </h2>

            <p>
              Manage your Zehra profile
            </p>

          </div>

        </div>

        <form onSubmit={handleSave}>

          <div className="account-section">

            <h3>
              Personal Information
            </h3>

            <label>
              Name
            </label>

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />

            <label>
              Phone Number
            </label>

            <input
              value={`+91 ${form.phone}`}
              disabled
            />

          </div>

          <div className="account-section">

            <h3>
              Delivery Address
            </h3>

            <label>
              Address
            </label>

            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="House number, street, area"
            />

            <div className="account-grid">

              <div>

                <label>
                  City
                </label>

                <input
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="City"
                />

              </div>

              <div>

                <label>
                  State
                </label>

                <input
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                  placeholder="State"
                />

              </div>

            </div>

            <label>
              Country
            </label>

            <input
              name="country"
              value={form.country}
              onChange={handleChange}
              placeholder="Country"
            />

          </div>

          <button
            type="submit"
            className="save-account-button"
          >
            SAVE CHANGES
          </button>

        </form>

        <button
          className="logout-button"
          onClick={onLogout}
        >
          LOGOUT
        </button>

      </div>

    </div>

  );
}

export default Account;
