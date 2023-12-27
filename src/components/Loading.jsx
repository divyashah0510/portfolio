import React from "react";

const Spline = React.lazy(() => {
  import("@splinetool/react-spline");
}); 

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-400"></div>
    </div>
  );
};

export default Loading;
