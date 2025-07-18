import Image from "next/image";
import "./css/style.scss";
import { loginUser } from "./api/auth";

export default function Home() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  handleLoginUser = (credentials) => {
    console.log(credentials);
    // Call the loginUser function from auth.js to handle user login
    if (!credentials.username || !credentials.password) {
      console.error("Username and password are required");
      return;
    }

    loginUser({
      username: credentials.username,
      password: credentials.password,
    })
      .then((response) => {
        if (response.status === "success") {
          sessionStorage.setItem("authToken", response.token);
          sessionStorage.setItem("userId", response.id);
          window.location.href = "/dashboard"; // Redirect to dashboard on successful login
        } else {
          console.error(response.message); // Handle error message
        }
      })
      .catch((error) => {
        console.error("Login failed:", error); // Handle unexpected errors
      });
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="liquid-glass login min-h-[60vh] h-auto sm:w-80 md:w-120 lg:w-150 xl:w-200 pl-[5rem] pr-[5rem] p-[2rem]">
        <div>
          <h1 className="logo">
            <span>Y</span>
            <span>O</span>
            <span>C</span>
          </h1>
        </div>

        <div className="w-full">
          <input
            id="user_name"
            className="input_field"
            type="text"
            placeholder="User Name"
            onChange={(e) =>
              setCredentials({
                username: e.target.value,
                ...credentials.password,
              })
            }
            required
          />
          <input
            id="user_password"
            className="input_field"
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setCredentials({
                username: credentials.username,
                password: e.target.value,
              })
            }
            required
          />
          <div className="button-wrap">
            <button
              className="glass_btn"
              onClick={() => handleLoginUser(credentials)}
            >
              <span>Login</span>
            </button>
            <div className="button-shadow"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
