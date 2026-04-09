import React from "react";
import { Link, useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-6xl font-bold">
        {error?.status || 404}
      </h1>

      <h2 className="text-2xl mt-2">
        {error?.statusText || "Page not found"}
      </h2>

      <p className="mt-2 text-gray-600">
        {error?.message || "Something went wrong"}
      </p>

      <Link
        to="/"
        className="mt-4 px-4 py-2 border border-black rounded hover:bg-black hover:text-white transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;