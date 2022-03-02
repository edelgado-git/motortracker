const people = [
  {
    name: 'Toyota Rav 4',
    handle: 'ACH4578',
    imageUrl:
      'https://www.toyota.com/imgix/content/dam/toyota/jellies/max/2022/rav4hybrid/hybridse/4524/8w2/2.png?fm=png&bg=white&w=768&h=328&q=90',
  },
  {
    name: 'Honda Accord',
    handle: 'AXH5678',
    imageUrl:'https://www.toyota.com/imgix/content/dam/toyota/jellies/max/2022/rav4hybrid/hybridse/4524/8w2/2.png?fm=png&bg=white&w=768&h=328&q=90'
  }
]

export default function Example() {
  return (
    <div style={{ maxWidth:'50%', minWidth: '400px', margin: 'auto', marginTop: '100px' }}>
      <div className="flow-root mt-6">
        <ul role="list" className="-my-5 divide-y divide-gray-200">
          {people.map((person) => (
            <li key={person.handle} className="py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img className="h-8 w-8 rounded-full" src={person.imageUrl} alt="" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{person.name}</p>
                  <p className="text-sm text-gray-500 truncate">{person.handle}</p>
                </div>
                <div>
                  <a
                    href="#"
                    className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Edit
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <a
          href="#"
          className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          View all
        </a>
      </div>
    </div>
  )
}