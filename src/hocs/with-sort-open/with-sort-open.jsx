const withSortOpen = (Component) => {
  class WithSortOpen extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        sortOpen: false,
      };

      this._handleOpenSort = this._handleOpenSort.bind(this);
      this._handleClickOutside = this._handleClickOutside.bind(this);
    }

    _handleOpenSort() {
      this.setState({
        sortOpen: !this.state.sortOpen,
      });
    }

    componentWillUnmount() {
      document.removeEventListener(`click`, this._handleClickOutside, false);
    }

    componentDidMount() {
      document.addEventListener(`click`, this._handleClickOutside, false);
    }

    _handleClickOutside(evt) {
      if (this.state.sortOpen && !evt.target.classList.contains(`places__option`) && !evt.target.classList.contains(`places__sorting-type`)) {
        this.setState({
          sortOpen: false,
        });
      }
    }

    render() {
      const {sortOpen} = this.state;

      return (
        <Component
          {...this.props}
          sortOpen={sortOpen}
          onOpenSort={this._handleOpenSort}
        />
      );
    }
  }

  return WithSortOpen;
};

export default withSortOpen;
