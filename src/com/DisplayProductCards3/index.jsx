import ProductCardWidget3 from "../ProductCardWidget3";

function DisplayProductCards3({ productCardDataList3 }) {
  return (
    <div className="w-[100.00%] box-border mt-4">
      {productCardDataList3.map((data, index) => {
        return <ProductCardWidget3 {...data} key={index} />;
      })}
    </div>
  );
}

export default DisplayProductCards3;
