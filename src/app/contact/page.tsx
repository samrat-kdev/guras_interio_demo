'use client'

import { LocateIcon } from "lucide-react"
 
 const Contact = () => {
   return (
    <main className="min-h-screen p-8">
    <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl mb-4">Get in Touch</h2>
        <form className="space-y-4">
          {/* Add contact form */}
        </form>
      </div>
      <div>
        <h2 className="text-2xl mb-4">Location</h2>
       <LocateIcon/>
      </div>
    </div>
  </main>
   )
 }
 
 export default Contact