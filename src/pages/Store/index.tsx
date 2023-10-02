import { useEffect, useState } from "react"
import Card from "../../components/Card"
import { ProductData } from "../../interfaces/ProductData"

export default function Store() {
  const [products, setProducts] = useState<ProductData[]>([
    {
      name: 'Guitar',
      img: 'https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10001/0113900719_fen_ins_frt_1_rr.jpg',
      price: 827,
    },

  ])

  return <>
    {
      products.map((productData: ProductData) => {
        return <Card productData={productData}/>
      })
    }
  </>
}
