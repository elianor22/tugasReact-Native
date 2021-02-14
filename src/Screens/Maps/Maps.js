import React, {useState} from 'react';

import MapView, {Marker} from 'react-native-maps';

const App = () => {
  const [region, setRegion] = useState({
    latitude: -6.242346,
    longitude: 106.830091,
    latitudeDelta: 0.009,
    longitudeDelta: 0.009,
  });

  return (
    <MapView
      style={{flex: 1}}
      region={region}
      onRegionChangeComplete={(region) => setRegion(region)}>
      <Marker coordinate={{latitude: -6.242346, longitude: 106.830091}} />
    </MapView>
  );
};

export default App;
