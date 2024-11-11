import ProductCardWidget3 from "../ProductCardWidget3";

function DisplayProductCards({ productCardDataList2 }) {
  return (
    <div className="w-[100.00%] box-border mt-4">
      {productCardDataList2.map((data, index) => {
        return <ProductCardWidget3 {...data} key={index} />;
      })}
    </div>
  );
}

export default DisplayProductCards;
