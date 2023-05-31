import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";



type FormData = {
  email: string;
  password: string;
};

const Login = () => {
  const schema: ZodType<FormData> = z.object({
    email: z.string().email(),
    password: z.string().min(5).max(20),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const submitData = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="w-full min-h-screen h-full flex items-start">
      <div className="relative w-1/2 h-full flex flex-col">
        <div className="absolute top-[55%] left-[3%] flex flex-col">
          <h3 className="text-4xl text-white font-bold my-4 ">100% Uptime 😎</h3>
          <p className="text-base text-white font-semibold text-left">
            Zero infrastructure
            <br />
            Management
          </p>
         
        </div>
        <img
          src="/images/template.png"
          className=" mt-20 w-full h-full object-cover rounded-2xl"
        />
      </div>

      
      <div className="w-1/2 h-full flex flex-col p-14">
        <h1 className="text-4xl font-semibold">
          Welcome<span className="text-green-600"> Back!</span>
        </h1>
        <h4 className="text-blue-600/50">Glad to see you, Again!</h4>
        <form onSubmit={handleSubmit(submitData)}>
          <div className="w-full flex flex-col pt-10">
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email")}
              className="w-full text-black py-4 border-4 border-black-600/[.55] rounded-xl p-10"
            />
            {errors.email && <span style={{color: "red"}}>{errors.email.message}</span>}
          </div>

          <div className="w-full flex flex-col pt-10">
            <input
              type="password"
              placeholder="Enter your password"
              {...register("password")}
              className="w-full text-black py-4 border-4 border-black-600/[.55] rounded-xl p-10"
            />
            {errors.password && <span style={{color: "red"}}>{errors.password.message}</span>}
            <h6 className="text-right text-blue-600/50 cursor-pointer">
              Forgot Password?
            </h6>
          </div>

          <button className="w-full py-4 bg-black rounded-lg text-white mt-10">
            Log In
          </button>
        </form>
        <div className="w-full flex items-center justify-center mt-10">
          <p className="text-sm font-normal">
            Dont have a account?{" "}
            <span className="font-semibold underline underline-offset-2 cursor-pointer text-green-600">
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
