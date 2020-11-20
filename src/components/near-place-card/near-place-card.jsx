import PlaceCard from "@components/place-card/place-card-connect";

const NearPlaceCard = (props) => {

  return (
    <PlaceCard
      placeCardClassName="near-places__card"
      imageWrapperClassName="near-places__image-wrapper"
      infoClassName=""
      imageWidth="260"
      imageHeight="200"
      showPremium = {false}
      {...props}/>
  );
};

export default NearPlaceCard;
