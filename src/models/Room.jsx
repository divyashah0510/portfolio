import Spline from "@splinetool/react-spline"
import { Suspense } from "react";
import Loading from "../components/Loading";


const Room = () => {
  return (
    <Suspense fallback={<Loading/>}>
      <Spline scene="https://prod.spline.design/qseBugCWCuuHq5v5/scene.splinecode" />
    </Suspense>
  );
}

export default Room