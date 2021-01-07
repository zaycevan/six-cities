const withSortOpen = (Component) => {
  const WithSortOpen = (props) => {
    const [sortOpen, setSortOpen] = React.useState(false);

    React.useEffect(() => {
      const handleClickOutside = (evt) => {
        if (sortOpen && !evt.target.classList.contains(`places__option`) && !evt.target.classList.contains(`places__sorting-type`)) {
          setSortOpen(false);
        }
      };

      document.addEventListener(`click`, handleClickOutside, false);

      return () => {
        document.removeEventListener(`click`, handleClickOutside, false);
      };
    }, [sortOpen]);

    const handleOpenSort = () => {
      setSortOpen((prevState) => !prevState);
    };

    return (
      <Component
        {...props}
        sortOpen={sortOpen}
        onOpenSort={handleOpenSort}
      />
    );
  };

  return WithSortOpen;
};

export default withSortOpen;
