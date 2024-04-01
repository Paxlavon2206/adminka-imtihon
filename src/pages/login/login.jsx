import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/input/input";
import { useLogin } from "./service/useLogin";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import bgIcon from "/bg-icon.png";
import Cookies from "js-cookie";
import { saveState } from "../../config/storage";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const validationsSchema = z.object({
    email: z
      .string()
      .min(10, { message: "Email is required !" })
      .email({ message: "Must be a valid email !" }),
    password: z.string().min(4, { message: "Password is required !" }),
  });
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationsSchema),
  });
  const { mutate, isPending } = useLogin();
  const navigate = useNavigate()
  const submit = (data) => {
    mutate(data, {
      onSuccess: (res) => {
        Cookies.set("user_token", res.accessToken, { expires: 1/24}); 
        saveState("user", res.user)
        toast.success("Logged in")
        reset()
        navigate("/app", {replace:true})
      },
      onError: () => {
        toast.error("Error occured")
      },
    });
  };

  return (
    <div
      className=" bg-cover bg-center bg-no-repeat fixed inset-0"
      style={{
        backgroundImage:
          'url("https://img.freepik.com/free-vector/abstract-realistic-technology-particle-background_23-2148420656.jpg?w=1480&t=st=1711782749~exp=1711783349~hmac=abeed698e157e6f177202c524c59834c4ef57b77516bbf1ae5e32f0bbbb7a66a")',
      }}
    >
      <form
        className="flex w-[800px] h-[400px] items-center p-5 rounded-lg bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        onSubmit={handleSubmit(submit)}
      >
        <div className="w-[500px]">
          <img src={bgIcon} alt="img" />
        </div>
        <div className="w-[400px]">
          <h2 className=" text-[25px] font-bold mb-4">Login</h2>
          <div>
            <Input
              {...register("email", { required: true })}
              required
              type="email"
              className="border w-full mb-3 py-1 px-1 rounded-lg"
              name="email"
              placeholder="Email"
            />
            {errors.email && <p className="text-red-600 text-[15px] mb-2">{errors.email.message}</p>}{" "}
          </div>
          <div>
            <Input
              {...register("password", { required: true })}
              type="password"
              className="border w-full py-1 px-1 mb-3 rounded-lg"
              name="password"
              placeholder="Password"
            />
            {errors.password && <p className="text-red-600 text-[15px] mb-3">{errors.password.message}</p>}{" "}
          </div>

          <button className="w-full bg-[#7c51ff] text-white font-semibold py-1 rounded-lg hover:bg-[#6034e4]"  disabled={isPending}>
          {isPending ? 'Logging in...' : 'Login'}
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};
