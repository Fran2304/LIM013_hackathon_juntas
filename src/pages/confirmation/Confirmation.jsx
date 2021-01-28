import './confirmation.scss'
import NavBar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Answer from '../../components/answer/Answer';


const Confirmation = () => {

  return (
      <>
          <NavBar/>
          <div className="container d-column-flex">
              <Answer/>
          </div>
          <Footer></Footer>

      </>
      
  )
}

export default Confirmation;