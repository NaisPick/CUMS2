import logo from './favicon.jpg';
import './Registro.css';

function App() {
  return (

    <div className="App">

      <header className="App-header">
        <div className="menu">
          <li className="opciones"><a href="#">¿Qué es CUMS?</a></li>
          <li className="opciones"><a href="#">¿Quienes somos?</a></li>
          <li className="opciones"><a href="#">Ayuda</a></li>       
        </div>

        <div className="cuadro">
          <div className="Aparte">
            <p className="titulo">Indique su nombre completo</p>
            <input type="text" className="registro" placeholder="Nombres y Apellidos"></input>
            <p className="titulo">Ingrese su correo institucional</p>
            <input type="email" className="registro" placeholder="Correo USM"></input>
            <p className="titulo">Ingrese su ROL</p>
            <input type="text" className="registro" placeholder="Rol"></input>
            <p className="titulo">Crear una contraseña</p>
            <input type="password" className="registro" placeholder="Contraseña"></input>
          </div>          
        </div>
        <div className="logo">
          <img src={logo} className="App-logo" alt="logo" />
        </div>


        
      </header>
    </div>
  );
}

export default App;
