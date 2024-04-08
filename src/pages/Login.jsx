import { Link } from "react-router-dom";
import { Input } from "windmill-react-ui-kit";
import {
  default as ImageDark,
  default as ImageLight,
} from "../assets/img/logo/Quality.png";
import Error from "src/components/form/Error";
import LabelArea from "src/components/form/LabelArea";
import useLoginSubmit from "src/hooks/useLoginSubmit";
import { Button } from "windmill-react-ui-kit";
import { truncate } from "lodash";

const Login = () => {
  const { onSubmit, register, handleSubmit, errors, loading } =
    useLoginSubmit();
    
  return (
    <>
      <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
        <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
          <div className="flex flex-col overflow-y-auto md:flex-row">
            <div className="h-32 md:h-auto md:w-1/2">
              <img
                aria-hidden="true"
                className="object-cover w-auto h-cover dark:hidden"
                src={ImageLight}
                alt="Office"
              />
              <img
                aria-hidden="true"
                className="hidden object-cover w-auto h-auto dark:block"
                src={ImageDark}
                alt="Office"
              />
            </div>
            <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2 bg-gray-200">
              <div className="w-full">
                <h1 className="mb-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                  Login
                </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <LabelArea label="Email*" />
                  <Input
                    {...register('email', { required: true })}
                    className="border h-12 text-xs focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                    name="email"
                    type="email"
                    placeholder="admin@gmail.com"
                  />
                  <Error errorName={errors.email} />
                  <div className="mt-6"></div>
                  <LabelArea label="Password*" />
                  <Input
                    {...register('password', { required: true })}
                    className="border h-12 text-xs focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
                    name="password"
                    type="password"
                    placeholder="*********"
                  />
                  <Error errorName={errors.password} />

                  <Button
                    disabled={loading}
                    type="submit"
                    className="mt-4 h-12 w-full"
                    to="/dashboard"
                  >
                    Log in
                  </Button>
                  
                </form>
                <hr className="my-5" />
                <div className="flex items-center justify-end">
                  <p>
                    <Link
                      className="text-sm font-medium text-green-500 dark:text-green-400 hover:underline"
                      to="/forgot-password"
                    >
                      Forgot Your Password ?
                    </Link>
                  </p>
                  
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;