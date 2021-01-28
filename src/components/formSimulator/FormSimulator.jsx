import './formsimulator.scss';

const FormSimulator = ( { handleInput } ) => {
  return (
    <form action="" className='d-column-flex font-color'>
      <p className='title-form'>Simulador de Préstamos</p>
      <hr/>
      <div className='border margin-top-10'>
        <input className='btn-input selected' type="button" value="Personal"/>
        <input className='btn-input' type="button" value="Empresa"/>
      </div>
      <p className='p-input'>Tipo de Moneda</p>
      <div className='d-row-flex'>
        <div className='input-radio'>
            <input type="radio" id="soles" name="selectmoney" />
            <label htmlFor="soles">Soles</label>
        </div>
        <div className='input-radio'>
            <input type="radio" id="dolares" name="selectmoney" />
            <label htmlFor="dolares">Dólares</label>
        </div>
      </div>
      <p className='p-input'>TCEA</p>
      <div className='d-row-flex'>
        <div className='input-radio'>
            <input type="radio" id="minimo" name="selecttcea" />
            <label htmlFor="minimo">Mínimo</label>
        </div>
        <div className='input-radio'>
            <input type="radio" id="maximo" name="selecttcea" />
            <label htmlFor="maximo">Máximo</label>
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
