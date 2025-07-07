import Image from "next/image";
import "./css/style.scss";
import { GCButton } from "@/components";

export default function Home() {
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
          />
          <input
            id="user_password"
            className="input_field"
            type="password"
            placeholder="Password"
          />
          <div className="button-wrap">
            <GCButton>Login</GCButton>
            {/* <div className="button-shadow"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
