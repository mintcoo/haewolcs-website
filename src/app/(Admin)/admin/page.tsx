"use client";

import { authService } from "@/common/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Admin() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // 로그인할떄 이메일과 비밀번호
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    if (name === "Email") {
      setEmail(value);
    } else if (name === "Password") {
      setPassword(value);
    }
  };

  // 제출할때 처리할 함수
  const onSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const data = await signInWithEmailAndPassword(
        authService,
        email,
        password,
      );
      router.push("/");
    } catch (error) {
      alert("아이디 또는 비밀번호를 확인해주세요");
    }
  };

  return (
    <div className="f-c-c w-full h-[70vh]">
      <div className="w-full p-6 m-auto bg-white border rounded-md drop-shadow-lg lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center haewol-blue-title">
          해월씨에스의원
        </h1>
        <form onSubmit={onSubmitForm} className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              onChange={onChangeInput}
              name="Email"
              type="email"
              placeholder="Email"
              value={email}
              required
              className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              onChange={onChangeInput}
              name="Password"
              type="password"
              placeholder="Password"
              value={password}
              required
              className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-6">
            <input
              type="submit"
              value="로그인"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-900 rounded-md cursor-pointer hover:bg-blue-700 focus:outline-none focus:bg-blue-600"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
