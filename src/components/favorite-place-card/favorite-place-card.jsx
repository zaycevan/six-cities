import PlaceCard from "@components/place-card/place-card";

const FavoritePlaceCard = (props) => {

  return (
    <PlaceCard
      placeCardClassName="favorites__card"
      imageWrapperClassName="favorites__image-wrapper"
      infoClassName="favorites__card-info"
      imageWidth="150"
      imageHeight="110"
      showPremium = {false}
      {...props}/>
  );
};

export default FavoritePlaceCard;
