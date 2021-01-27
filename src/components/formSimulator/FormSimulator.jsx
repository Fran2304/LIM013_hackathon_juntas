import './formsimulator.scss';

const FormSimulator = ( { handleInput } ) => {
  return (
    <form action="" className='d-column-flex font-color'>
      <p className='title-form'>Simulador de Préstamos</p>
      <hr/>
      <div className='d-row-flex'>
        <div className='input-radio'>
       {/*  type="radio" name="currentemployment" value="fulltime" */}
            <input type="radio" id="soles" name="selectmoney" />
            <label htmlFor="soles">Soles</label>
        </div>
        <div className='input-radio'>
            <input type="radio" id="dolares" name="selectmoney" />
            <label htmlFor="dolares">Dólares</label>
        </div>
      </div>
      <div className='label-input'>
        <label>Monto:</label>
        <input type="text" name='monto' placeholder='Ingresar monto de préstamo' onChange={ (e) => handleInput(e.target.name, e.target.value)}/>
      </div>
      <div className='label-input'>
        <label>Cuotas(meses):</label>
        <input type="text" name='cuotas' placeholder='Ingresar n° de cuotas' onChange={ (e) => handleInput(e.target.name, e.target.value)}/>
      </div>
    </form>
  );
};

export default FormSimulator;
