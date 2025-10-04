import { useForm } from "react-hook-form";

export default function Regestration() {
  console.log("rernderd the form");
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onBlur",
  });

  const onSubmit = (data) => console.log(data);
  const password = watch("password");
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Regestration</h1>
      <input
        type="text"
        placeholder="username"
        {...register("username", {
          required: "username is required!",
          minLength: {
            value: 5,
            message: "username must be atleast 5 chars long!",
          },
        })}
      />
      <p>{errors.username?.message}</p>

      <input
        type="email"
        placeholder="email"
        {...register("email", {
          required: "email is required!",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Not a vaild email",
          },
        })}
      />
      <p>{errors.email?.message}</p>

      <input
        type="password"
        placeholder="password"
        {...register("password", {
          required: "password is required!",
          pattern: {
            value: /^[A-Za-z]+$/,
            message: "Password must contain letters only",
          },
          minLength: {
            value: 8,
            message: "password must be atleast 8 chars long!",
          },
        })}
      />
      <p>{errors.password?.message}</p>

      <input
        type="password"
        placeholder="confirm password"
        {...register("confirmpassword", {
          required: "confirm password is required!",
          validate: (value) => password === value || "Password did not match",
        })}
      />
      <p>{errors.confirmpassword?.message}</p>

      <input
        type="text"
        placeholder="message"
        {...register("message", {
          required: "message is required",
          minLength: {
            value: 10,
            message: "Message should be 10 min lenght",
          },
        })}
      />
      <p>{errors.message?.message}</p>

      <input
        type="tel"
        placeholder="phone"
        {...register("phone", {
          validate: (value) =>
            value.length === 11 || "phone should be 11 lenght",
        })}
      />
      <p>{errors.phone?.message}</p>

      <p>{errors.message?.message}</p>

      <select {...register("subject", { required: "subject is required!" })}>
        <option value="HTML">Student</option>
        <option value="CSS">Graduate</option>
        <option value="JavaScript">Instructor</option>
      </select>
      <p>{errors.subject?.message}</p>

      <button className="btn btn-primary" type="submit">
        register
      </button>
      <button className="btn btn-secondary" type="reset">
        reset
      </button>
    </form>
  );
}
