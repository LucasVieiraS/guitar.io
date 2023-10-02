import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Root from "./components/Root";
import RoutesTree from "./components/RoutesTree";
import Spacing from "./components/Spacing";

export default function App() {
  return (
    <Root>
      <Navbar />
      <Spacing>
        <RoutesTree />
      </Spacing>
      <Footer />
    </Root>
  );
}
