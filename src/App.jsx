import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Test from "./Test";

const App = () => {
  return <div>
    {/*<section>
      <Navbar/>
    </section>
    <section>Parallax</section>
    <section>Services</section>
    <section>Contact</section>*/}
    <section><Sidebar/></section>
  </div>;
};

export default App;
