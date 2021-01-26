import NavBar from '../../components/navbar/Navbar';
import FormSimulator from '../../components/formSimulator/FormSimulator';
import Card from '../../components/card/Card';

import './simulator.scss';

const Simulator = () => {
    return (
        <>
            <NavBar/>
            <section className="padding-section d-column-flex">
                <FormSimulator />
            </section>
            <hr className='width-100'/>
            <Card/>

            
        </>
    )
}

export default Simulator;