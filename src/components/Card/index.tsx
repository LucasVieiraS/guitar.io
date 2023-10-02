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
    <div className="border border-1 border-black/20 rounded shadow-sm w-[12rem] h-[20rem]">
      <div className="overflow-hidden w-fit h-fit">
        <img
          src={productData.img}
          alt={productData.name}
          className="object-contain w-full h-full hover:scale-[1.1] transition-all"
        />
      </div>
      <div>
        <h1>{ productData.name }</h1>
        <p>{ formatCurrency(productData.price) }</p>
      </div>
    </div>
  );
}
