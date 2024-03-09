import { Label, TextInput, Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: unknown) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h1>Welcome back to QuantumSafe Bank!</h1>
        <span>
          Please sign in below to begin a new modern banking experience!
        </span>
        <form
          className="flex max-w-md flex-col gap-4 py-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Email" />
            </div>
            <TextInput
              id="email1"
              placeholder="name@quantumsafebank.com"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+\.[a-zA-Z]{2,4}$/,
              })}
            />
            {errors.email && (
              <span className="text-red-600 text-sm">
                {errors.email.type === "required"
                  ? "Please use an email address"
                  : "Invalid email format"}
              </span>
            )}
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Password" />
            </div>
            <TextInput
              id="password1"
              type="password"
              {...register("password", {
                required: true,
              })}
            />
            {errors.password && (
              <span className="text-red-600 text-sm">
                Please enter your password
              </span>
            )}
          </div>
          <Button type="submit" color="blue">
            Submit
          </Button>
        </form>
        <span>
          Not yet a part of our family? Please sign up{" "}
          <Link to={"/signup"}>
            <strong>here!</strong>
          </Link>
        </span>
      </div>
    </div>
  );
};
