import {Tooltip, CircleMarker, Pane, Marker } from "react-leaflet";

function MarkerPaine({data, usType, color, radius}) {

    const type = [
       "Posto de Saúde" ,       
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
            break
          case  item.class == type[6]:
            color = "violet";
            break
          case  item.class == type[7]:
            color = "gray";
            break;
          case  item.class == type[7]:
            color = "white";
              break;
        }
        return color;
      };

  //query - expression to filter data with filter function - if year == all then don't filter data by year
  const queryExpression  = (item) => {
    let expression;
    switch (usType) {
      case "all":
        expression =  item["unit"] == 1
        break;
        default:
        expression = item["class"] == usType
        break;
    }
    return expression
  }

  return (
    <Pane>
      {data
        .filter((item) => queryExpression(item))
        .map((item, key) => (
        <>
          <CircleMarker
            key={key}
            center={[item.lat, item.lon]}
            radius={radius}
            fillOpacity={0.8}
            fillColor={color ? color : bubleColorClassification(item)}
            stroke={false}
          >
            <Tooltip>US {item.us}</Tooltip>
          </CircleMarker>
        </> 
    ))
        
        }
    </Pane>
  );
}

export default MarkerPaine;
