import {Tooltip, CircleMarker, Pane, Marker } from "react-leaflet";
import L from 'leaflet'

function MarkerPaineCostume({data, usType, color, radius}) {

    const numberIcon =  (value) => L.divIcon({
        className: "",
        html: `<div class="text-slate-200 font-normal text-md text-center">${value}</div>`,
        iconSize: [20, 20],
        iconAnchor: [10, 10], // Alinhar o número ao centro do CircleMarker
      });

    const type = ["Posto de Saúde" ,       
        "Centro de Saúde",
        "Hospital Central",  
        "Hospital Distrital",  
        "Hospital Rural" ,      
        "Hospital Provincial" ,
        "Hospital Geral" ,   
        "Hospital Psiquiatrico", 
        "Hospital Militar" ]


    //Classification by color and size
    const bubleColorClassification = (item) => {
        let color = "green";
        switch (true) {
          case  item.class == type[0]:
            color = "orange";
            break;
          case  item.class == type[1]:
            color = "green";
            break;
          case  item.class == type[2]:
            color = "pink";
            break;
          case  item.class == type[3]:
            color = "#27518D";
            break;
          case  item.class == type[4]:
            color = "yellow";
            break;
          case  item.class == type[5]:
            color = "red";
          case  item.class == type[6]:
            color = "red";
          case  item.class == type[7]:
            color = "red";
          case  item.class == type[8]:
            color = "red";
            break;
        }
        return color;
      };

  return (
    <Pane>
      {data
        .filter((item) => item.class == usType)
        .map((item, key) => (
        <>
          <CircleMarker
            key={key}
            center={[item.lat, item.lon]}
            radius={radius}
            fillOpacity={0.5}
            fillColor={color ? color : bubleColorClassification(item)}
            stroke={false}
          >
            <Tooltip>Numero de US</Tooltip>
          </CircleMarker>
          {<Marker position={[item.lat, item.lon]} icon={numberIcon(item.total) }></Marker>}
        </> 
    ))
        
        }
    </Pane>
  );
}

export default MarkerPaineCostume;
