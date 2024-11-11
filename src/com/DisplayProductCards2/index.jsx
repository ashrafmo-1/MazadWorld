import ProductCardWidget3 from "../ProductCardWidget3";

function DisplayProductCards2({ productCardDataList1 }) {
  return (
    <div className="w-[100.00%] box-border mt-4">
      {productCardDataList1.map((data, index) => {
        return <ProductCardWidget3 {...data} key={index} />;
      })}
    </div>
  );
}

export default DisplayProductCards2;
