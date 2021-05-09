import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">DSVendas</h1>
          <p className="lead">Analyze your sales performance from different perspectives</p>
          <hr />
          <p>This application consists of displaying a dashboard from data provided by a backend built with Spring Boot..</p>

          <Link className="btn btn-primary btn-lg" to="/dashboard">
            Access deshboard
          </Link>
        </div>
        <div className="congratulation fst-italic py-2">
          <p>The goals that I achieved in my academic, professional and even personal life, were thanks to the affection and dedication of people like you of DevSuperior.</p>
          <p>I will be forever grateful.</p>
          </div>
      </div>
      <Footer />
    </>
  )

}

export default Home;