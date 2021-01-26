import NavBar from '../../components/navbar/Navbar';
import FormSimulator from '../../components/formSimulator/FormSimulator';

import './simulator.scss';

const Simulator = () => {
    return (
        <>
            <NavBar/>
            <section className="padding-section d-column-flex">
                <FormSimulator />
            </section>
            
        </>
    )
}

export default Simulator;