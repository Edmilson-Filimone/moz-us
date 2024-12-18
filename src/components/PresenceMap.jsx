import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'
import {testData} from '../../public/Js/mockMapData'
import MarkerPaine from './MarkerPaine'

function PresenceMap({data, usType="Hospital Central", className}) {

    const baseMapUrl = {light: "https://tile.openstreetmap.bzh/br/{z}/{x}/{y}.png", dark: "https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png", street:"http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
   
    //Map Shapefile
    const layer = {...testData}

    //Get the polygn data (features)
    const feature = layer.features.map((feature) => feature)

    //Style for the polygn layer
    const layerStyles = {fillColor: 'rgba(0,0,0,0)',weight: 1, opacity: 1, color: 'gray', dashArray: '1',fillOpacity: 1}

  //On EachFeature function
  const onEachFeature = (feature, layer) =>{ layer.bindTooltip(`${feature.properties.ADM1_PT}`)}

  
return (
  <>
    <section className={'relative z-50 transition ease-out '+className}>
      <div className="text-2xl text-center font-semibold"></div>
      <div className="sticky top-24 w-full h-screen overflow-hidden rounded-lg shadow-lg border">
        <MapContainer center={[-18.5, 35]} zoom={5.7} minZoom={5.2} scrollWheelZoom={true} style={{ height: "100%", width: "100%" }}>
          <TileLayer attribution="E. Filimone - Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL." url={baseMapUrl.dark} />
          <GeoJSON data={feature} onEachFeature={onEachFeature} style={layerStyles}/>
          {usType == "Posto de Saúde" && <MarkerPaine data={data} usType={usType} radius={2} color={"orange"} /> }
          {usType == "Centro de Saúde" && <MarkerPaine data={data} usType={usType} radius={2} color={'green'} />}
          {usType == "Hospital Central" && <MarkerPaine data={data} usType={usType} radius={10} color={'pink'} />}
          {usType == "Hospital Distrital" && <MarkerPaine data={data} usType={usType} radius={10} color={'#1D4ED8'} />}
          {usType == "Hospital Rural" && <MarkerPaine data={data} usType={usType} radius={10} color={'yellow'} />}
          {usType == "Hospital Provincial" && <MarkerPaine data={data} usType={usType} radius={10} color={'red'} />}
          {usType == "Hospital Geral" && <MarkerPaine data={data} usType={usType} radius={10} color={'#7C3AED'} />}
          {usType == "Hospital Psiquiatrico" && <MarkerPaine data={data} usType={usType} radius={10} color={"#6B7280"} />}
          {usType == "Hospital Militar" && <MarkerPaine data={data} usType={usType} radius={10} color={"white"} />}
          {usType == "all" && <MarkerPaine data={data} usType={usType} radius={2.2} />}
        </MapContainer>
      </div>
    </section>

  </>)
}

export default PresenceMap