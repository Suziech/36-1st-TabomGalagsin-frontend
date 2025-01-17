import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import ColourOption from './ColourOption/ColourOption';
import SizeOption from './SizeOption/SizeOption';
import RecommendProducts from '../Main/RecommendProducts/RecommendProducts';
import './DetailPage.scss';
import { API } from '../../config';

function DetailPage() {
  const [productDetail, setProductDetail] = useState({});
  const [productsList, setProductsList] = useState([]);
  const [click, setClick] = useState({ 1: false, 2: false });
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    fetch('http://10.58.0.250:3000/products/1', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setProductDetail(data.products));

    fetch(API.RECOMMEND_RANDOM, {
      method: 'GET',
      headers: {
        'Content-Type': 'Application/json',
      },
    })
      .then(res => res.json())
      .then(data => setProductsList(Object.values(data)[0]));
  }, []);

  const { category, is_new, name, price, description, color, size } =
    productDetail;

  const setSelectColour = useState(0)[1];

  const changeColor = id => {
    color.unshift(color[id]);
    color.splice(id + 1, 1);
  };

  return (
    <>
      <Nav />
      <div className="detailPage">
        <div className="container">
          <div className="productNavigation">
            <Link to="/" className="link">
              Main page
            </Link>
            <span>&gt;</span>
            <Link to="/" className="link bold">
              <span className="bold">{category}</span>
            </Link>
          </div>
          <div className="middleContainer">
            <div className="leftSide">
              <div className="productPicWrapper">
                <img
                  className="pic"
                  alt="flipflops in sand"
                  src={color?.[0].thumbnailUrl}
                />
              </div>
            </div>
            <div className="productDetail">
              {is_new ? <span className="status">New</span> : null}
              <span className="font title">{name}</span>
              <span className="font price">
                ₩
                {Number(price)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </span>
              <span className="option">Select colour:</span>
              <div className="colourOption">
                {Object.keys(productDetail).length > 0 &&
                  color.map((colourItem, index) => {
                    return (
                      <ColourOption
                        key={colourItem.colorId}
                        color={colourItem.color}
                        index={index}
                        setSelectColour={setSelectColour}
                        changeColor={changeColor}
                      />
                    );
                  })}
              </div>

              <span className="option">Select Size:</span>
              <div className="sizeOption">
                {Object.keys(productDetail).length > 0 &&
                  size.map(sizeItem => (
                    <SizeOption
                      key={sizeItem.sizeId}
                      id={sizeItem.sizeId}
                      size={sizeItem.size}
                      click={click}
                      setClick={setClick}
                      setIsClicked={setIsClicked}
                    />
                  ))}
              </div>
              <button
                className={isClicked ? 'addToBag' : 'selectSize'}
                disabled={!isClicked}
              >
                {isClicked ? 'ADD TO BAG' : 'SELECT SIZE'}
              </button>
            </div>
          </div>
          <hr />
          <div className="productDesc">
            <p className="font">Description</p>
            <p className="subFont">{description}</p>
          </div>
        </div>
        <RecommendProducts productsList={productsList} title="Recommend" />
      </div>
    </>
  );
}
export default DetailPage;
