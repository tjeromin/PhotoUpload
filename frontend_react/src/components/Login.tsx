import { useState } from "react";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");

  const [activeTab, setActiveTab] = useState("login");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleValidation = () => {
    let formIsValid = true;

    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      setemailError("Email Not Valid");
      return false;
    } else {
      setemailError("");
      formIsValid = true;
    }

    if (!password.match(/^[a-zA-Z]{8,22}$/)) {
      formIsValid = false;
      setpasswordError(
        "Only Letters and length must best min 8 Chracters and Max 22 Chracters"
      );
      return false;
    } else {
      setpasswordError("");
      formIsValid = true;
    }

    return formIsValid;
  };

  const loginSubmit = () => {
    //handleValidation();

    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json;",
      },
    }).then((response) => {
      if (response.status === 200) {
        console.log("logged in");
      } else {
        throw new Error("Something went wrong on API server!");
      }
    });
  };

  return (
    <div className="App grid">
      <div className="max-width-25em">
        <ul
          className="nav nav-pills nav-justified mb-3"
          id="ex1"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <a
              className="nav-link active"
              id="tab-login"
              data-mdb-toggle="pill"
              href="#pills-login"
              role="tab"
              aria-controls="pills-login"
              aria-selected="true"
              onClick={() => handleTabChange("login")}
            >
              Login
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="tab-register"
              data-mdb-toggle="pill"
              href="#pills-register"
              role="tab"
              aria-controls="pills-register"
              aria-selected="false"
              onClick={() => handleTabChange("register")}
            >
              Register
            </a>
          </li>
        </ul>
      </div>

      <div className="tab-content col-md-6 mx-auto max-width-25em">
        <div
          className={`tab-pane fade ${activeTab === "login" && "active show"}`}
          id="pills-login"
          role="tabpanel"
          aria-labelledby="tab-login"
        >
          <form onSubmit={loginSubmit}>
            <div className="form-outline mb-4">
              <input
                type="email"
                id="loginName"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="form-label">Email</label>
            </div>

            <div className="form-outline mb-4">
              <input
                type="password"
                id="loginPassword"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="form-label">Password</label>
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-4">
              Sign in
            </button>
          </form>

          <div className="text-center">
            <p>
              Not a member? <a href="#!">Register</a>
            </p>
          </div>
        </div>

        <div
          className={`tab-pane fade ${
            activeTab === "register" && "active show"
          }`}
          id="pills-register"
          role="tabpanel"
          aria-labelledby="tab-register"
        >
          <form>
            <div className="form-outline mb-4">
              <input type="text" id="registerName" className="form-control" />
              <label className="form-label">Name</label>
            </div>

            <div className="form-outline mb-4">
              <input
                type="text"
                id="registerUsername"
                className="form-control"
              />
              <label className="form-label">Username</label>
            </div>

            <div className="form-outline mb-4">
              <input type="email" id="registerEmail" className="form-control" />
              <label className="form-label">Email</label>
            </div>

            <div className="form-outline mb-4">
              <input
                type="password"
                id="registerPassword"
                className="form-control"
              />
              <label className="form-label">Password</label>
            </div>

            <div className="form-outline mb-4">
              <input
                type="password"
                id="registerRepeatPassword"
                className="form-control"
              />
              <label className="form-label">Repeat password</label>
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-3">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
