import ProductCardDisplay from "../ProductCardDisplay";
import { theme } from "../../theme";

function ProductCardDisplayRenderer({ productListDataArray }) {
  const productCardDisplayStylesArray = [
    {
      containerWidthConstraint7: theme.others.MIN_WIDTH_2D8975B,
      dynamicPaddingAmount1: theme.spacing.PADDING_LEFT_CD7B,
      dynamicPaddingAmount3: theme.spacing.PADDING_RIGHT_CD7B,
      containerWidthOrMinWidth1: theme.others.MAX_WIDTH_2D8975B,
      imgHeight3: theme.others.HEIGHT_5673CBB0,
      containerWidthConstraint5: theme.others.MIN_WIDTH_2D8975B,
      imgHeight4: theme.others.HEIGHT_5673CBB0,
      calculatePaddingDistance1: theme.spacing.PADDING_LEFT_CD7B,
      paddingRightValue1: theme.spacing.PADDING_RIGHT_CD7B,
      containerWidthSpecifier1: theme.others.MAX_WIDTH_2D8975B,
      imgHeight5: theme.others.HEIGHT_5673CBB0,
    },
    {
      containerWidthConstraint3: theme.others.MAX_WIDTH_2D8975B,
      containerWidthConstraints1: theme.others.MIN_WIDTH_2D8975B,
      imgHeight3: theme.others.HEIGHT_17176B,
      dynamicPaddingSpacing1: theme.spacing.PADDING_LEFT_CD7B,
      paddingRightValue3: theme.spacing.PADDING_RIGHT_CD7B,
      containerWidthStyle1: theme.others.MAX_WIDTH_2D8975B,
      imgHeight4: theme.others.HEIGHT_17176B,
      containerWidthConstraint1: theme.others.MIN_WIDTH_2D8975B,
      imgHeight5: theme.others.HEIGHT_17176B,
    },
  ];
  const generateRenderConditions = (index) => {
    return {
      shouldRenderComponent5: index === 0,
      renderComponentOrText3: index === 0,
      shouldRenderComponent3: index === 1,
      renderAdditionalContent1: index === 1,
      shouldRenderComponent1: index === 0,
      renderAdditionalContent3: index === 0,
      renderComponentOrImage1: index === 1,
      renderComponentOrText1: index === 1,
      shouldApplyDiscount1: index === 1,
    };
  };

  return (
    <div className="w-[100.00%] box-border mt-6">
      {productListDataArray.map((data, index) => {
        return <ProductCardDisplay {...generateRenderConditions(index)} {...data} key={index} {...productCardDisplayStylesArray[index]} />;
      })}
    </div>
  );
}

export default ProductCardDisplayRenderer;
