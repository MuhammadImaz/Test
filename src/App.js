import "./App.css";
import Header from "./component/Header";
import Box from "./component/Box";
import Text from "./component/Text";
import Button from "./component/Button";
import Card from "./component/Card";
import Courses from "./component/Courses"
import Bootcamp from "./component/Bootcamp";
import Blogs from "./component/Blogs";
import Register from "./component/Register";
import Earner from "./component/Earner";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Box />
      <Text />
      <Button />
      <Card/>
      <Courses/>
      <Bootcamp/>
      <Earner/>
      <Blogs/>
      <Register/>
      <Footer/>
    </div>
  );
}

export default App;
