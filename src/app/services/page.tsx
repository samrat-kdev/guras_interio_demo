'use client'

export default function Services() {
  const services = [
    'Modular Kitchen',
    'TV Cabinet',
    'Closet',
    'Office Furniture',
    'False Ceiling',
    'Wooden or Steel Railing',
    'Parqueting'
  ]

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service} className="p-4 border rounded-lg">
            <h2 className="text-xl font-semibold">{service}</h2>
          </div>
        ))}
      </div>
    </main>
  )
}
