import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }) {
  return (
    <div className="h-screen">
      <RecoilRoot>
        <ToastContainer />
        <Component {...pageProps} />
      </RecoilRoot>
    </div>
  );
}
