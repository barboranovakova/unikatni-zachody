import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Logo from '../../../assets/logo.png';

import 'leaflet/dist/leaflet.css';
import './Map.css';
import { useEffect, useState } from 'react';

const MAPY_API_KEY = 'onLlCN6Gk8QhJGV9SOwjG4ubi9iKUznrSpAgbGXsysg';
const mapyCzUrl = `https://api.mapy.cz/v1/maptiles/basic/256/{z}/{x}/{y}?apikey=${MAPY_API_KEY}`;

const POSITION_CLASSES = {
  bottomleft: 'leaflet-bottom leaflet-left',
  bottomright: 'leaflet-bottom leaflet-right',
  topleft: 'leaflet-top leaflet-left',
  topright: 'leaflet-top leaflet-right',
};

const LogoControl = ({ position }) => {
  const positionClass =
    (position && POSITION_CLASSES[position]) || POSITION_CLASSES.bottomleft;
  return (
    <div className={positionClass}>
      <div className="leaflet-control">
        <a href="https://mapy.cz/" target="_blank">
          <img src="https://api.mapy.cz/img/api/logo.svg" />
        </a>
      </div>
    </div>
  );
};

export const Map = () => {
  const czechitasPosition = [50.0833886, 14.4252626];

  const [adress, setAdress] = useState([]);
  useEffect(() => {
    const fetchAdress = async () => {
      const response = await fetch('http://localhost:4000/api/toillets');
      const data = await response.json();
      setAdress(data.data);
    };

    fetchAdress();
  }, []);

  console.log(adress);

  return (
    <main>
      <MapContainer
        center={czechitasPosition}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          minZoom={0}
          maxZoom={19}
          attribution='<a href="https://api.mapy.cz/copyright" target="_blank">© Seznam.cz a.s. a další</a>'
          url={mapyCzUrl}
        />
        <LogoControl />
        <Marker position={czechitasPosition}>
          <Popup>
            <div>
              <img src={Logo} alt="Logo Czechitas" width={100} />
            </div>
            Tady se tvoří budoucnost IT.
          </Popup>
        </Marker>

        {adress.length > 1
          ? adress.map((adresa) => {
              return (
                <Marker position={adresa.locationGPS}>
                  <Popup>
                    <div>
                      <img src={Logo} alt="Logo Czechitas" width={100} />
                      <p>{adresa.place}</p>
                    </div>
                  </Popup>
                </Marker>
              );
            })
          : null}

        <Marker position={[50.5, 14.4252626]}></Marker>
        <Marker position={[50.26, 14.4252626]}></Marker>
        <Marker position={[50.5, 14.7]}></Marker>
      </MapContainer>
    </main>
  );
};
