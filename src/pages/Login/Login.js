import classes from "./Login.module.css";
import { useState } from "react";
import {
  redirect,
  useLoaderData,
  useNavigate,
  Form,
  useActionData,
  useNavigation,
} from "react-router-dom";
import { loginUser } from "../../Api";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const pathname = new URL(request.url).searchParams.get("redirectTo") || "/host";

  try {
    const data = await loginUser({ email, password });
    localStorage.setItem("loggedin", true);
    return redirect(pathname);
  } catch (err) {
    return err.message;
  }
}

const Login = () => {
  const message = useLoaderData();
  const errorMessage = useActionData();
  const navigation = useNavigation();

  return (
    <div className={classes["login-container"]}>
      <h1>Sign in your account</h1>
      {message && <h3 className={classes["red"]}>{message}</h3>}
      {errorMessage && <h3 className={classes["red"]}>{errorMessage}</h3>}

      <Form method="post" className={classes["login-form"]} replace>
        <input type="email" name="email" placeholder="Email address" />
        <input type="password" name="password" placeholder="password" />

        <button disabled={navigation.state === "submitting"}>
          {navigation.state === "submitting" ? "Logging in..." : "log in"}
        </button>
      </Form>
    </div>
  );
};

export default Login;

/*const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("submitting");
    loginUser(loginFormData)
      .then((data) => navigate("/host", { replace: true }))
      .catch((err) => setError(err))
      .finally(() => setStatus("idle"));
  };*/
