import { AppProps } from "next/app";
import Head from "next/head";
import { FC } from "react";
import { ContextProvider } from "../contexts/ContextProvider";
import { AppBar } from "../components/AppBar";
import { Footer } from "../components/Footer";
import Notifications from "../components/Notification";

require("@solana/wallet-adapter-react-ui/styles.css");
require("../styles/globals.css");

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className="bg-default-900">
      <Head>
        <title>Solana ToBruts Creator</title>
      </Head>
      <ContextProvider>
        <Notifications />
        <AppBar />
        <Component {...pageProps} />
        <Footer />
      </ContextProvider>

      {/* js scripts */}
      <script src="./assets/libs/preline/preline.js"></script>
      <script src="./assets/libs/swiper/swiper-bundle.js"></script>
      <script src="./assets/libs/gumshoejs/gumshoe.polyfills.min.js"></script>
      <script src="./assets/libs/lucide/umd/lucide.min.js"></script>
      <script src="./assets/libs/aos/aos.js"></script>
      <script src="./assets/js/swiper.js"></script>
      <script src="./assets/js/theme.js"></script>
    </div>
  );
};

export default App;
