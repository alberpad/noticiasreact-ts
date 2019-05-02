import React, { Component } from "react";
import New from "./New";
import { TransitionGroup, CSSTransition } from "react-transition-group";

interface INewsProps {
  news: any[];
}

class News extends Component<INewsProps> {
  render() {
    const { news } = this.props;
    return (
      <TransitionGroup>
        <div className="row">
          {news.map((_new, id) => (
            <CSSTransition key={id} classNames="fade" timeout={500}>
              <New _new={_new} />
            </CSSTransition>
          ))}
        </div>
      </TransitionGroup>
    );
  }
}
export default News;
