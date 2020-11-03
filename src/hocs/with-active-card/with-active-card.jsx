const withActiveCard = (Component) => {
  class WithActiveCard extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeCardId: null,
      };

      this._onActiveCard = this._onActiveCard.bind(this);
      this._outActiveCard = this._outActiveCard.bind(this);
    }

    _onActiveCard(id) {
      this.setState({
        activeCardId: id,
      });
    }

    _outActiveCard() {
      this.setState({
        activeCardId: null,
      });
    }

    render() {
      const {activeCardId} = this.state;

      return (
        <Component
          {...this.props}
          activeCardId={activeCardId}
          onActiveCard={this._onActiveCard}
          outActiveCard={this._outActiveCard}
        />
      );
    }
  }

  WithActiveCard.propTypes = {
  };

  return WithActiveCard;
};

export default withActiveCard;
