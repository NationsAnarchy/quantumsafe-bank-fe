import { Label, TextInput, Button, FileInput, Checkbox } from "flowbite-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import countryList from "react-select-country-list";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useForm } from "react-hook-form";

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: unknown) => {
    console.log(data);
  };
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const changeHandler = (value: string) => {
    setPhoneNumber(value);
  };

  const options = useMemo(() => countryList().getData(), []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h1>Please fill in this sign up form</h1>
        <form
          className="flex max-w-md flex-col gap-2 py-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <div className="mb-2 block">
              <Label value="Name" />
            </div>
            <TextInput
              type="text"
              {...register("name", {
                required: true,
              })}
            />
            {errors.name && (
              <span className="text-red-600 text-sm">
                Please enter your name
              </span>
            )}
          </div>
          <div>
            <div className="mb-2 block">
              <Label value="Unique Identification (Citizen ID)" />
            </div>
            <TextInput
              type="text"
              {...register("uniqueId", {
                required: true,
              })}
            />
            {errors.uniqueId && (
              <span className="text-red-600 text-sm">
                Please enter your Unique Identifcation number
              </span>
            )}
          </div>
          <div className="mb-2 flex items-center gap-2">
            <Checkbox {...register("isPassportNumber")} />
            <Label>Check if you use Passport number</Label>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Email" />
            </div>
            <TextInput
              id="email1"
              type="text"
              placeholder="e.g: name@quantumsafebank.com"
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
              placeholder="At least 8 characters (uppercase character + number + symbol)"
              {...register("password", {
                required: true,
                pattern:
                  /^(?=.*\d)(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              })}
            />
            {errors.password && (
              <span className="text-red-600 text-sm">
                {errors.password.type === "required"
                  ? "Please input a password"
                  : "Password is not secured enough"}
              </span>
            )}
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="phone1" value="Phone number" />
            </div>
            <PhoneInput
              placeholder="Enter phone number"
              value={phoneNumber}
              {...register("phone", {
                required: true,
              })}
              onChange={changeHandler}
            />
            {errors.phone && (
              <span className="text-red-600 text-sm">
                Please enter your phone number
              </span>
            )}
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="country1" value="Country" />
            </div>
            <Select options={options} />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="proof1" value="Proof of Identity" />
            </div>
            <FileInput
              id="file-upload-helper-text"
              helperText="PNG or JPG only."
              accept=".png,.jpg"
              name="filename"
            />
          </div>
          <Button type="submit" color="blue">
            Submit
          </Button>
        </form>
        <span>
          Made a misclick? Click{" "}
          <Link to={"/signin"}>
            <strong>here</strong>
          </Link>{" "}
          to get back to the sign in page.
        </span>
      </div>
    </div>
  );
};
