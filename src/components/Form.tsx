import React, { Component } from "react";

interface IFormProps {
  consultarNoticias: (categoria?: string) => void;
}
class Form extends Component<IFormProps> {
  categoriaRef = React.createRef<HTMLSelectElement>();

  cambiarCategoria = (e: React.FormEvent) => {
    e.preventDefault();
    if (!this.categoriaRef.current) return;
    this.props.consultarNoticias(this.categoriaRef.current.value);
  };
  render() {
    return (
      <div className="buscador row">
        <div className="col s12 m8 offset-m2">
          <form onSubmit={this.cambiarCategoria}>
            <h2>Noticias por categoría</h2>
            <div className="input-field col s12 m8">
              <select ref={this.categoriaRef} name="" id="">
                <option value="general" defaultValue="true">
                  General
                </option>
                <option value="business">Negocios</option>
                <option value="entertainment">Entretenimiento</option>
                <option value="health">Salud</option>
                <option value="science">Ciencia</option>
                <option value="sports">Deporte</option>
                <option value="technology">Tecnología</option>
              </select>
            </div>
            <div className="input-field col s12 m4 enviar">
              <input
                type="submit"
                className="btn amber darken-2"
                value="Buscar"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Form;
