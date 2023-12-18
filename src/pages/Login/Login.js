import classes from "./Login.module.css";
import { useState } from "react";
import { useLoaderData, useNavigate, Form, redirect } from "react-router-dom";
import { loginUser } from "../../Api";

export function loader({ request }) {
  const url = new URL(request.url);
  return url.searchParams.get("message");
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const data = await loginUser({ email, password })
  localStorage.setItem("loggedin", true);
  return redirect("/host");
}

const Login = () => {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const message = useLoaderData();

  /*const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("submitting");
    loginUser(loginFormData)
      .then((data) => navigate("/host", { replace: true }))
      .catch((err) => setError(err))
      .finally(() => setStatus("idle"));
  };*/

  return (
    <div className={classes["login-container"]}>
      <h1>Sign in your account</h1>
      {message && <h3 className={classes["red"]}>{message}</h3>}
      {error && <h3 className={classes["red"]}>{error.message}</h3>}

      <Form method="post" className={classes["login-form"]} replace>
        <input type="email" name="email" placeholder="Email address" />
        <input type="password" name="password" placeholder="password" />

        <button disabled={status === "submitting"}>
          {status === "submitting" ? "Logging in..." : "log in"}
        </button>
      </Form>
    </div>
  );
};

export default Login;

