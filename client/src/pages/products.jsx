import { useParams } from "react-router-dom";

function Products() {
  const { category, subCategory } = useParams();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">
        Category: {category} <br />
        Subcategory: {subCategory}
      </h1>

      {/* Yaha tum category + subcategory ke products dikha sakte ho */}
    </div>
  );
}

export default Products;
