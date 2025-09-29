
import { Features } from "@/components/Caracteristicas"
import { Dashboard } from "@/app/components/EjemploDashboard"
import { Hero } from "@/components/Hero"


import Image from "next/image"



const Page = () => {
  return (
    <div className=''>
      <div className="relative aspect-[5/1] mb-12">
        <Image src={'/logo-1.png'} alt="Producto" fill></Image>
      </div>
      <Hero />
      <Dashboard />
      <Features />
    </div>
  )
}

export default Page