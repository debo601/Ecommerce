import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useProductContext } from "./context/ProductContext"
import PageNavigation from "./components/PageNavigation";
import MyImage from "./components/MyImage";
import { Container } from "./styles/Container";
import FormatPrice from "./components/Helpers/FormatPrice";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";

const API = "https://api.pujakaitem.com/api/products";


const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();
  // console.log("singleProduct", singleProduct);
  const { id } = useParams();

  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;


  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return <div className="page_loading">Loading.....</div>
  }

  return (
    <Wrapper>
      <PageNavigation title={name} />
      <Container className="container">
        <div className="grid grid-two-column">
          <div className="product_images">
            <MyImage imgs={image} />
          </div>

          <div className="product-data">
            <h2>{name}</h2>
            <p>{stars}</p>
            <p>{reviews} reviews</p>
            <p className="product-data-price">
              MRP:
              <del>
                <FormatPrice price={price + 250000} />
              </del>
            </p>
            <p className="product-data-price product-data-real-price">
              Deal of the day: <FormatPrice price={price} />
            </p>
            <p>{description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>
            </div>

            <div className="product-warranty-data">
              <TbReplace className="warranty-icon" />
              <p>30 days Replacement</p>
            </div>

            <div className="product-warranty-data">
              <TbTruckDelivery className="warranty-icon" />
              <p>Thapa Delivered</p>
            </div>

            <div className="product-warranty-data">
              <MdSecurity className="warranty-icon" />
              <p>2 year warranty</p>
            </div>
          </div>

          <div className="product-data-info">
            <p>Available:
              <span>{stock > 0 ? "In Stock" : "Not Available"}</span>
            </p>
            <p>
              ID : <span>{id}</span>
            </p>
            <p>
              Brand : <span>{company}</span>
            </p>
          </div>


        </div>
      </Container>
    </Wrapper>
  );

};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }

  .grid-two-column {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
  }

  .product-data-warranty {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    margin-bottom: 1rem;
  }

  .product-warranty-data {
    
  }


  .warranty-icon {
    background-color: rgba(220, 220, 220, 0.5);
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    padding: 0.6rem;
  }

  .product-warranty-data p {
    font-size: 1.4rem;
    padding-top: 0.4rem;
  }

  .product-data-price {
    font-weight: bold;
  }

  .product-data-real-price {
    color: ${({ theme }) => theme.colors.btn};
  }

  .product-data-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 1.8rem;
  }

  .product-data-info span {
    font-weight: bold;
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
    
    .grid-two-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default SingleProduct;
