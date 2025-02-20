import React from 'react';
import StatCard from '@/components/admin/statcard';
const dashboard = () => {
  return (
    <main>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-5'>
      <StatCard Title='Active Projects' Description='Description' Value='10'/>
    </div>
    </main>
  )
}

export default dashboard
