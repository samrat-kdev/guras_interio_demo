import React from 'react'
import { ChevronRight } from 'lucide-react';
const Sendfull = () => {
  return (
    <div>
      <button className='flex border bg-[#8e2d75] text-white px-7 py-2 rounded-xl hover:bg-[#8a2e73]'>
        Send <ChevronRight />
      </button>
    </div>
  )
}

export default Sendfull