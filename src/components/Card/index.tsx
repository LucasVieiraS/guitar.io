import { ProductData } from "../../interfaces/ProductData";

export default function Card({ productData }: { productData: ProductData }) {

  const USDollar = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const formatCurrency = (price: number) => {
    const formattedPrice = USDollar.format(price)
    return formattedPrice
  }

  return (
    <div className="border border-1 border-black/20 rounded shadow-sm h-fit p-4 py-2 flex flex-center justify-center flex-col w-full px-4 max-h-[50vh]">
      <div className="overflow-hidden h-full w-max p-6 py-4 mx-auto min-h-full">
        <img
          src={productData.img} 
          alt={productData.name}
          className="object-contain w-full h-full hover:scale-[1.1] transition-all mx-auto"
        />
      </div>
      <div className="border-t border-t-1 border-black/20 py-2 h-[8rem] flex flex-col justify-around">
        <div className="w-full h-fit">
          <h1 className="font-bold text-sm">{ productData.name }</h1>
          <p className="mb-1 text-sm">{ formatCurrency(productData.price) }</p>
        </div>
        <button className="w-full h-6 rounded p-1 py-0 shadow-sm bg-black/80 text-white font-bold hover:bg-black/50 transition-colors">BUY</button>
      </div>
    </div>
  );
}
