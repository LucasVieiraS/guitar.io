import { useEffect, useState } from "react"
import Card from "../../components/Card"
import { ProductData } from "../../interfaces/ProductData"

export default function Store() {
  const [products, setProducts] = useState<ProductData[]>([
    {
      name: 'Fender Stratocaster Blue',
      img: 'https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0113900719_fen_ins_frt_1_rr.jpg',
      price: 2500,
    },
    {
      name: 'Limited Edition Mikey Way Jazz Bass®',
      img: 'https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10014/0149322317_fen_ins_frt_1_rr.jpg',
      price: 1200,
    },
    {
      name: 'Limited Hybrid II Telecaster®, Noir',
      img: 'https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10003/5311400306_fen_ins_frt_1_rr.jpg',
      price: 500,
    },
    {
      name: 'Paranormal Esquire® Deluxe',
      img: 'https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10003/0377045529_sqr_ins_frt_1_rr.jpg',
      price: 1000,
    },
    {
      name: 'Limited Edition Squier Sonic® Stratocaster® HT',
      img: 'https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10003/0373252574_sqr_ins_frt_1_rr.jpg',
      price: 3000,
    },
    {
      name: 'Paranormal Esquire® Deluxe',
      img: 'https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10003/0377045529_sqr_ins_frt_1_rr.jpg',
      price: 1000,
    },
    {
      name: 'American Professional II Stratocaster® HSS',
      img: 'https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0113912718_fen_ins_frt_1_rr.jpg',
      price: 500,
    },
    {
      name: 'American Professional II Stratocaster® Left-Hand',
      img: 'https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0113930761_fen_ins_frt_1_rl.jpg',
      price: 1200,
    },
  ])

  return <div className="md:px-16 w-full">
    <h1 className="font-black text-2xl mb-2">INSTRUMENTS</h1>
    <div className="grid grid-cols-1 md:grid-cols-[25%_25%_25%_25%] grid-rows-2 gap-2 align-center">
      {
        products.map((productData: ProductData) => {
          return <Card productData={productData} />
        })
      }
    </div>
  </div>
}
