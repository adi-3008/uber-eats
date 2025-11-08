"use client";

import { useForm } from "react-hook-form";
import { FormError } from "../../components/common/FormError";
import { Button } from "../../components/common/Button";
import { UserRoleEnum } from "@/enums/userRole.enum";

export default function login() {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ILoginForm>({
    mode: "onChange",
  });

  const submit = () => {
    const { email, password } = getValues();
    console.log("submit is called");
  };

  return (
    <div className="h-screen flex items-center flex-col mt-10 lg:mt-28">
      <div className="w-full max-w-screen-sm flex flex-col px-5 items-center">
        <h4 className="w-full font-medium text-left text-3xl mb-5">
          Welcome back
        </h4>

        <form
          onSubmit={handleSubmit(submit)}
          className="grid gap-3 mt-5 w-full mb-5"
        >
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email",
              },
            })}
            type="email"
            placeholder="Email"
            className="input"
          />
          {errors.email?.message && (
            <FormError errorMessage={"Please enter a valid email"} />
          )}

          {/* Password Field */}
          <input
            {...register("password", { required: "Password is required" })}
            required
            name="password"
            type="password"
            placeholder="Password"
            className="input"
          />
          {errors.password?.message && (
            <FormError errorMessage={errors.password?.message} />
          )}

          <select
            {...register("role", { required: "Role is required" })}
            className="input border p-2 rounded"
          >
            <option value="">Select Role</option>
            {Object.values(UserRoleEnum).map((role, index) => (
              <option key={index} value={role}>
                {role}
              </option>
            ))}
          </select>
          {errors.role && <FormError errorMessage={"Please select a role"} />}
          <Button canClick={isValid} loading={false} actionText="Log In" />
        </form>

        <div>
          <p className="text-sm">
            New to Platform?{" "}
            <a href="#" className="text-blue-600">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
