const stats = [
    {
      id: 1,
      date: 'January 9, 2020 21:03',
      coolant: 100,
      oilTemp: 200,
      airTemp: 300,
      boostPressure: 400,
      oilPressure: 500
    },
    {
      id: 2,
      date: 'January 9, 2020 21:03',
      coolant: 100,
      oilTemp: 200,
      airTemp: 300,
      boostPressure: 400,
      oilPressure: 500
    },
    {
      id: 3,
      date: 'January 9, 2020 21:03',
      coolant: 100,
      oilTemp: 200,
      airTemp: 300,
      boostPressure: 400,
      oilPressure: 500
    },
    {
      id: 4,
      date: 'January 9, 2020 21:03',
      coolant: 100,
      oilTemp: 200,
      airTemp: 300,
      boostPressure: 400,
      oilPressure: 500
    },
    {
      id: 5,
      date: 'January 9, 2020 21:03',
      coolant: 100,
      oilTemp: 200,
      airTemp: 300,
      boostPressure: 400,
      oilPressure: 500
    },
    {
      id: 6,
      date: 'January 9, 2020 21:03',
      coolant: 100,
      oilTemp: 200,
      airTemp: 300,
      boostPressure: 400,
      oilPressure: 500
    },
    {
      id: 7,
      date: 'January 9, 2020 21:03',
      coolant: 100,
      oilTemp: 200,
      airTemp: 300,
      boostPressure: 400,
      oilPressure: 500
    },
    {
      id: 8,
      date: 'January 9, 2020 21:03',
      coolant: 100,
      oilTemp: 200,
      airTemp: 300,
      boostPressure: 400,
      oilPressure: 500
    },
    {
      id: 9,
      date: 'January 9, 2020 21:03',
      coolant: 100,
      oilTemp: 200,
      airTemp: 300,
      boostPressure: 400,
      oilPressure: 500
    },
  ]
  
  export default function HistoryTable() {
    return (
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Coolant
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Oil Temp
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Air Temp
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Boost Pressure
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Oil Pressure
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {stats.map((stat) => (
                    <tr key={stat.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{stat.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{stat.coolant}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{stat.oilTemp}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{stat.airTemp}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{stat.boostPressure}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{stat.oilPressure}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }