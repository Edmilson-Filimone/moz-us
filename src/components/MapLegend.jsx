function MapLegend({labels, usType}) {

  return (
    <div className="min-w-[250px] min-h-[300px] ">
    <h3 className='text-white font-semibold text-lg text-center my-4 p-4 bg-[rgba(0,0,0,0.7)] xl:bg-[rgba(0,0,0,0.45)] border-black rounded-lg z-50'>{usType.replace("all", "")}</h3>
    {
    <ul className="my-2 p-4 bg-[rgba(0,0,0,0.7)] xl:bg-[rgba(0,0,0,0.45)] border-black rounded-lg z-50">
    <h3 className='text-white font-semibold text-lg text-left my-2'>Unidades sanitárias</h3>
        <li className="text-white my-2 flex items-center italic"><span className={`inline-block mr-5 w-[11px] h-[11px] rounded-full bg-orange-500`}></span>{labels[2]}</li>
        <li className="text-white my-2 flex items-center italic"><span className={`inline-block mr-5 w-[11px] h-[11px] rounded-full bg-green-500`}></span>{labels[1]}</li>
        <li className="text-white my-2 flex items-center italic"><span className={`inline-block mr-5 w-[11px] h-[11px] rounded-full bg-pink-500`}></span>{labels[3]}</li>
        <li className="text-white my-2 flex items-center italic"><span className={`inline-block mr-5 w-[11px] h-[11px] rounded-full bg-blue-700`}></span>{labels[4]}</li>
        <li className="text-white my-2 flex items-center italic"><span className={`inline-block mr-5 w-[11px] h-[11px] rounded-full bg-yellow-400`}></span>{labels[5]}</li>
        <li className="text-white my-2 flex items-center italic"><span className={`inline-block mr-5 w-[11px] h-[11px] rounded-full bg-red-500`}></span>{labels[6]}</li>
        <li className="text-white my-2 flex items-center italic"><span className={`inline-block mr-5 w-[11px] h-[11px] rounded-full bg-violet-600`}></span>{labels[7]}</li>
        <li className="text-white my-2 flex items-center italic"><span className={`inline-block mr-5 w-[11px] h-[11px] rounded-full bg-gray-500`}></span>{labels[8]}</li>
        <li className="text-white my-2 flex items-center italic"><span className={`inline-block mr-5 w-[11px] h-[11px] rounded-full bg-white`}></span>{labels[9]}</li>  
    </ul>}
     </div>
  )
}

export default MapLegend