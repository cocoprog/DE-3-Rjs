import './estilo.css';

const FunctionalComponent = ({titulo, numero, booleano}) => {
    console.log(titulo);
      
    return (
      // Div Padre
      <div className="divPadre">
        <h2>
          Hola soy {titulo} {numero}</h2>
        <div>
          <div></div>
        </div>
      </div>
    );
  };
  
  export default FunctionalComponent;