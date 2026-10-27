export function TicketCard({data}:any){
  return (
    <div className="flex justify-between p-4 bg-white text-black rounded-xl">
      <div>
        <b>{data.from} - {data.to}</b>
        <p className="text-xs text-gray-500">Duration: 1h 30m | Carbon: -20%</p>
      </div>
      <button className="bg-black text-white px-4 rounded">Buy</button>
    </div>
  )
}
