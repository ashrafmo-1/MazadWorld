import ProductCardWidget3 from "../ProductCardWidget3";

function DisplayProductCards1({ productCardDataList }) {
  return (
    <div className="w-[100.00%] box-border mt-4">
      {productCardDataList.map((data, index) => {
        return <ProductCardWidget3 {...data} key={index} />;
      })}
    </div>
  );
}

export default DisplayProductCards1;
