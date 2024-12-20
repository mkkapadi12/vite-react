import { useForm } from "react-hook-form";
import "./App.css";
import axios from "axios";

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  let delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };

  let onSubmit = async (data) => {
    try {
      const response = await axios.post("/api/data", data); // Send form data
      console.log(response.data);
    } catch (error) {
      console.error("Error in POST request:", error);
    }
  };
  return (
    <>
      {isSubmitting && <div>Loading...</div>}
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="p-4 border text-white bg-slate-600"
          type="text"
          placeholder="Enter Name"
          {...register("username", {
            required: { value: true, message: "this feild is required" },
            minLength: { value: 2, message: "minimum length is 2" },
            maxLength: { value: 8, message: "maximun length is 8" },
          })}
        />
        {errors.username && <div>{errors.username.message}</div>}
        <br />
        <input
          className="p-4 border text-white bg-slate-600"
          type="password"
          placeholder="Enter Password "
          {...register("password", {
            required: {
              value: true,
              message: "this feild is required is also",
            },
            minLength: { value: 5, message: "minimum length is 5" },
          })}
        />
        {errors.password && <div>{errors.password.message}</div>}
        <br />
        <input
          className="px-4 py-2 border text-white bg-blue-600"
          type="submit"
          disabled={isSubmitting}
        />
        {errors.myform && <div>{errors.myform.message}</div>}
        {errors.blocked && <div>{errors.blocked.message}</div>}
      </form>
    </>
  );
}

export default App;
