import { useEffect, useState } from "react";
import "./sass/main.scss";

// Components
import Header from "./components/Header";
import Banner from "./components/Banner";
import Loader from "./components/Loader";
import { AnimatePresence, motion, AnimateSharedLayout, LayoutGroup } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (
    <LayoutGroup  type="crossfade">
      <AnimatePresence>
        {loading ? (
          <motion.div key="loader">
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
            <Header />
            <Banner />
            {!loading && (
              <div className="transition-image final">
                <motion.img src={process.env.PUBLIC_URL + `/images/image-2.jpg`} layoutId="main-image-1" />
              </div>
            )}
          </>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}

export default App;
