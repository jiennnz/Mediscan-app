"use client";

import { RegisterSchema, registerSchema } from "@/types/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

const RegisterForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<RegisterSchema> = async (data) => {
    const myPromise = axios.post("/api/auth/register", data);

    await toast.promise(myPromise, {
      loading: "Creating your account...",
      success: "Account Created!!!",
      error: (error) => {
        console.error("Create account error:", error);
        const errorMessage =
          error.response?.data?.error || "Failed to create an account";
        reset(); // Reset form
        return errorMessage; // Error message
      },
    });

    // Wait for the promise to resolve
    try {
      const response = await myPromise;
      router.push("/dashboard");
      console.log(response);
    } catch (error) {
      // Handle error if needed
      console.error("Error:", error);
      toast.error("An error occurred while creating an account");
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      action=""
      className="my-[32px] flex flex-col items-start"
    >
      <>
        <label
          htmlFor="email"
          className="mb-[8px] text-[21px] font-[600]  text-opacity-75"
        >
          Email
        </label>
        <input
          className="mb-[8px] h-[40px] w-[330px] rounded-[10px] border-[1px] border-[#1F2B33] border-opacity-20 px-[16px] text-[17px] text-[#1F2B33]"
          type="text"
          id="email"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-[14px] text-red-500">{errors.email?.message}</p>
        )}
      </>
      <>
        <label
          htmlFor="username"
          className="my-[8px] text-[21px] font-[600]  text-opacity-75"
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
      <button
        type="submit"
        className="custom-gradient mt-[16px] h-[44px] w-full rounded-[15px] text-[21px] font-[700] text-white"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
