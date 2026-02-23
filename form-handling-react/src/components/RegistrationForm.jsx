import { useState } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

  .reg-root {
    min-height: 100vh;
    background: #0a0a0f;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'DM Sans', sans-serif;
    padding: 2rem;
    position: relative;
    overflow: hidden;
  }

  .reg-root::before {
    content: '';
    position: absolute;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,90,50,0.12) 0%, transparent 70%);
    top: -150px;
    right: -150px;
    pointer-events: none;
  }

  .reg-root::after {
    content: '';
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(80,60,255,0.10) 0%, transparent 70%);
    bottom: -100px;
    left: -100px;
    pointer-events: none;
  }

  .card {
    background: #13131a;
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 24px;
    padding: 3rem;
    width: 100%;
    max-width: 440px;
    position: relative;
    z-index: 1;
    box-shadow: 0 40px 80px rgba(0,0,0,0.6);
  }

  .card-tag {
    display: inline-block;
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #ff5a32;
    background: rgba(255,90,50,0.1);
    border: 1px solid rgba(255,90,50,0.25);
    padding: 0.3rem 0.8rem;
    border-radius: 100px;
    margin-bottom: 1.25rem;
  }

  .card-title {
    font-family: 'Syne', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    color: #fff;
    margin: 0 0 0.5rem;
    line-height: 1.1;
  }

  .card-sub {
    color: rgba(255,255,255,0.4);
    font-size: 0.9rem;
    margin-bottom: 2.5rem;
  }

  .field {
    margin-bottom: 1.25rem;
  }

  .field label {
    display: block;
    font-size: 0.78rem;
    font-weight: 500;
    letter-spacing: 0.05em;
    color: rgba(255,255,255,0.5);
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  .field input {
    width: 100%;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 10px;
    padding: 0.85rem 1rem;
    color: #fff;
    font-size: 0.95rem;
    font-family: 'DM Sans', sans-serif;
    outline: none;
    transition: border-color 0.2s, background 0.2s;
    box-sizing: border-box;
  }

  .field input:focus {
    border-color: rgba(255,90,50,0.6);
    background: rgba(255,90,50,0.04);
  }

  .field input.error-input {
    border-color: rgba(255,60,60,0.6);
    background: rgba(255,60,60,0.06);
  }

  .error-msg {
    font-size: 0.75rem;
    color: #ff4444;
    margin-top: 0.4rem;
  }

  .submit-btn {
    width: 100%;
    padding: 0.95rem;
    background: linear-gradient(135deg, #ff5a32, #ff3366);
    border: none;
    border-radius: 10px;
    color: #fff;
    font-family: 'Syne', sans-serif;
    font-size: 0.95rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    cursor: pointer;
    margin-top: 0.5rem;
    transition: opacity 0.2s, transform 0.15s;
  }

  .submit-btn:hover { opacity: 0.88; transform: translateY(-1px); }
  .submit-btn:active { transform: translateY(0); }
  .submit-btn:disabled { opacity: 0.5; cursor: not-allowed; }

  .success-banner {
    background: rgba(50,200,100,0.1);
    border: 1px solid rgba(50,200,100,0.3);
    border-radius: 10px;
    padding: 1rem;
    color: #50c878;
    font-size: 0.9rem;
    margin-top: 1.25rem;
    text-align: center;
  }

  .api-error {
    background: rgba(255,60,60,0.08);
    border: 1px solid rgba(255,60,60,0.25);
    border-radius: 10px;
    padding: 0.85rem 1rem;
    color: #ff6666;
    font-size: 0.85rem;
    margin-top: 1rem;
    text-align: center;
  }
`;

const mockRegisterAPI = async (data) => {
  await new Promise((r) => setTimeout(r, 1000));
  if (data.email === "taken@example.com") {
    throw new Error("This email is already registered.");
  }
  return { success: true, message: `Welcome, ${data.username}!` };
};

export default function RegistrationForm() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [apiMsg, setApiMsg] = useState("");

  const validate = () => {
    const errs = {};
    if (!form.username.trim()) errs.username = "Username is required.";
    else if (form.username.trim().length < 3) errs.username = "Username must be at least 3 characters.";
    if (!form.email.trim()) errs.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter a valid email address.";
    if (!form.password) errs.password = "Password is required.";
    else if (form.password.length < 6) errs.password = "Password must be at least 6 characters.";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus("loading");
    setApiMsg("");
    try {
      const res = await mockRegisterAPI(form);
      setStatus("success");
      setApiMsg(res.message);
      setForm({ username: "", email: "", password: "" });
    } catch (err) {
      setStatus("error");
      setApiMsg(err.message);
    }
  };

  const fields = [
    { name: "username", type: "text",     placeholder: "e.g. Oladepo Abdulbaki Opeyemi" },
    { name: "email",    type: "email",    placeholder: "abdoladepo@gmail.com" },
    { name: "password", type: "password", placeholder: "min. 6 characters" },
  ];

  return (
    <>
      <style>{styles}</style>
      <div className="reg-root">
        <div className="card">

          <span className="card-tag">Controlled Component</span>
          <h1 className="card-title">Create Account</h1>
          <p className="card-sub">Join us — takes less than a minute.</p>

          <form onSubmit={handleSubmit} noValidate>
            {fields.map(({ name, type, placeholder }) => (
              <div className="field" key={name}>
                <label htmlFor={name}>{name}</label>
                <input
                  id={name}
                  name={name}
                  type={type}
                  value={form[name]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  autoComplete={name === "password" ? "new-password" : name}
                  className={errors[name] ? "error-input" : ""}
                />
                {errors[name] && <p className="error-msg">{errors[name]}</p>}
              </div>
            ))}

            <button
              className="submit-btn"
              type="submit"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Registering…" : "Create Account →"}
            </button>
          </form>

          {status === "success" && (
            <div className="success-banner">🎉 {apiMsg}</div>
          )}
          {status === "error" && (
            <div className="api-error">⚠ {apiMsg}</div>
          )}
        </div>
      </div>
    </>
  );
}