import PlaceCard from "@components/place-card/place-card-connect";

const MainPlaceCard = (props) => {

  return (
    <PlaceCard
      placeCardClassName="cities__place-card"
      imageWrapperClassName="cities__image-wrapper"
      infoClassName=""
      imageWidth="260"
      imageHeight="200"
      showPremium={true}
      {...props}/>
  );
};

export default MainPlaceCard;
