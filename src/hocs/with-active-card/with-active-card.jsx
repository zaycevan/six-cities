const withActiveCard = (Component) => {
  const WithActiveCard = (props) => {
    const [activeCardId, setActiveCardId] = React.useState();

    const onActiveCard = (id) => {
      setActiveCardId(id);
    };

    const outActiveCard = () => {
      setActiveCardId(null);
    };

    return (
      <Component
        {...props}
        activeCardId={activeCardId}
        onActiveCard={onActiveCard}
        outActiveCard={outActiveCard}
      />
    );
  };

  return WithActiveCard;
};

export default withActiveCard;
