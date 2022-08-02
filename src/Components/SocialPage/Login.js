import React from "react";
import auth from "../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl text-center font-bold">Login</h2>

          {/* React form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">E-mail</span>
              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "E-mail is required",
                  },
                  pattern: {
                    value: /[A-Za-z]{3}/,
                    message: "Provide a valid email",
                  },
                })}
                type="email"
                placeholder="Your E-mail"
                className="input input-bordered w-full max-w-xs"
              />
              <div className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email?.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email?.message}
                  </span>
                )}
              </div>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Password is too short",
                  },
                })}
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
              />
              <div className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password?.message}
                  </span>
                )}
                {errors.email?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password?.message}
                  </span>
                )}
              </div>
            </div>

            {/* daisy end */}

            <input
              className="btn btn-accent input input-bordered w-full max-w-xs text-white"
              type="submit"
              value="Login"
            />
          </form>
          {/* form end */}
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
<h2>This is login</h2>;
