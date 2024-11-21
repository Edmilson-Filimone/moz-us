import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'
import {testData} from '../../public/Js/mockMapData'
import MarkerPaineCostume from './MarkerPaineCostume'

function SummaryMap({data, usType="Hospital Central", className}) {
    


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
    <section className={'relative z-50 transition ease-out '+className} >
      <div className="text-2xl text-center font-semibold"></div>
      <div className="sticky top-24 w-full h-screen overflow-hidden rounded-lg shadow-lg border">
        <MapContainer center={[-18.5, 35]} zoom={5.7} minZoom={5.2} scrollWheelZoom={true} style={{ height: "100%", width: "100%" }}>
          <TileLayer attribution="E. Filimone - Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL." url={baseMapUrl.dark} />
          <GeoJSON data={feature} onEachFeature={onEachFeature} style={layerStyles}/>
          {<MarkerPaineCostume data={data} usType={usType} radius={20} color={"#27518D"} /> }
        </MapContainer>
      </div>
    </section>

  </>)
}

export default SummaryMap