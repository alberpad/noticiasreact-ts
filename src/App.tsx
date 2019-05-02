import React from "react";
import Header from "./components/Header";
import News from "./components/News";
import Form from "./components/Form";

interface IState {
  news: any[];
}

class App extends React.Component {
  state: IState = {
    news: []
  };

  consultarNoticias = async (categoria = "general") => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=cfdf418f1f0c46d0a0df672377596915`;
    const respond = await fetch(url);
    const news = await respond.json();
    this.setState({ news: news.articles });
  };

  componentDidMount() {
    this.consultarNoticias();
  }

  render() {
    return (
      <div className="contenedor-app">
        <Header title="Noticias" />
        <div className="container white contenedor-noticias">
          <Form consultarNoticias={this.consultarNoticias} />
          <News news={this.state.news} />
        </div>
      </div>
    );
  }
}

export default App;
