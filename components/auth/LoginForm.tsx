"use client";

import dbConnect from "@/lib/dbConnect";
import { LoginSchema, loginSchema } from "@/types/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import { User, useUserContext } from "@/context/contexts";

const LoginForm = () => {
  const router = useRouter();
  const { setUser } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginSchema>({ resolver: zodResolver(loginSchema) });

  const onSubmit: SubmitHandler<LoginSchema> = async (data) => {
    const myPromise = axios.post("/api/auth/login", data);

    await toast.promise(myPromise, {
      loading: "Logging in...",
      success: "Login successful",
      error: (error) => {
        console.error("Login error:", error);
        const errorMessage = error.response?.data?.error || "Failed to login";
        reset(); // Reset form
        return errorMessage; // Error message
      },
    });

    // Wait for the promise to resolve
    try {
      const response = await myPromise;
      const token: any = Cookies.get("token");
      const decoded: any = jwt.decode(token);
      const user: User = {
        id: decoded?.id,
        username: decoded?.username,
        email: decoded?.email,
      };
      setUser(user);
      router.push("/dashboard");
      console.log(response);
    } catch (error) {
      // Handle error if needed
      console.error("Error:", error);
      toast.error("An error occurred while logging in");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="my-[32px] flex flex-col items-start"
    >
      <>
        <label
          htmlFor="username"
          className="mb-[8px] text-[21px] font-[600]  text-opacity-75"
        >
          Username
        </label>
        <input
          className="mb-[8px] h-[40px] w-[330px] rounded-[10px] border-[1px] border-[#1F2B33] border-opacity-20 px-[16px] text-[17px] text-[#1F2B33]"
          type="text"
          id="username"
          {...register("username")}
        />
        {errors.username && (
          <p className="text-[14px] text-red-500">{errors.username?.message}</p>
        )}
      </>
      <>
        <label
          htmlFor="password"
          className="my-[8px] text-[21px] font-[600]  text-opacity-75"
        >
          Password
        </label>
        <input
          className="mb-[8px] h-[40px] w-[330px] rounded-[10px] border-[1px] border-[#1F2B33] border-opacity-20 px-[16px] text-[17px] text-[#1F2B33]"
          type="password"
          id="password"
          {...register("password")}
        />
        {errors.password && (
          <p className=" text-[14px] text-red-500">
            {errors.password?.message}
          </p>
        )}
      </>

      <button className="mt-[8px] text-[#007ACC]">Forgot Password?</button>
      <button
        type="submit"
        className="custom-gradient mt-[16px] h-[44px] w-full rounded-[15px] text-[21px] font-[700] text-white"
      >
        Log in
      </button>
    </form>
  );
};

export default LoginForm;
