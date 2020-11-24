const leaflet = jest.genMockFromModule(`leaflet`);

leaflet.map = () => {
  return {
    setView: () => {}
  };
};

leaflet.tileLayer = () => {
  return {
    addTo: () => {}
  };
};

leaflet.layerGroup = () => {
  return {
    addTo: () => {}
  };
};

leaflet.marker = () => {
  return {
    addTo: () => {}
  };
};

module.exports = leaflet;
