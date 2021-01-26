import './formsimulator.scss';

const FormSimulator = () => {
  return (
    <form action="" className='d-column-flex font-color'>
      <p className='text-size'>Simulador de Préstamos</p>
      <hr/>
      <div className='d-row-flex'>
        <div className='input-radio'>
            <input type="radio" id="soles" name="soles" checked />
            <label for="soles">Soles</label>
        </div>
        <div className='input-radio'>
            <input type="radio" id="dolares" name="dolares" checked />
            <label for="dolares">Dólares</label>
        </div>
      </div>
      <div className='label-input'>
        <label>Monto:</label>
        <input type="text" name='monto'/>
      </div>
      <div className='label-input'>
        <label>Cuotas(meses):</label>
        <input type="text" name='cuotas'/>
      </div>
      <button className='btn-simular'>Simular</button>
    </form>
  );
};

export default FormSimulator;
