import { data } from "../data";
import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import "./ShopComponent.css";




export function ShopCardData(){
    const [card, setCard] = useState(data);
  const [item, setItems] = useState(0);


  return (
    <div>
      <h1>shop homepage store</h1>
      <a href="">
        <Button className="btn-cart" variant="secondary">
          cart {item}
        </Button>
      </a>
      <div className="shop-data">
        {/* how to map the one card to multiple card */}

        {card.map((shop, idx) => (
          <ShopDetails
            key={idx}
            shopPrice1={shop.shopPrice1}
            shopPrice2={shop.shopPrice2}
            shopPrice3={shop.shopPrice3}

            shopImage={shop.shopImage}
            shopName={shop.shopName}
            shopRating={shop.shopRating}
            idx={idx}
            setItems={setItems}
            setCard={setCard}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}
function ShopDetails({
    setCard={setCard},
    setItems,
    shopPrice1,
    shopPrice2,
    shopPrice3,
    shopRating,
    shopImage,
    shopName,
    idx={idx},
    item,
  }){let count = 0;
    const [showBtn, setShowBtn] = useState(true);
    const handleCartAdd = (idx, setItems, item) => {
      setShowBtn(!showBtn);
      setItems(item + 1);
    };
    const handleCartRemove = (idx, setItems, item, setCard) => {
      setShowBtn(!showBtn);
      setItems(item - 1);
    };
    return (
      <Card className="card-style">
        {/* to import product image use curly bracis */}
        <Card.Img variant="top" src={shopImage} />
        <Card.Body>
          <Card.Title>{shopName}</Card.Title>
         <div className="price-details">
          <p className="price">{shopPrice1}</p>
          <p className="price-cart">{shopPrice2}</p>
          </div>
          
          <p className="price-data">{shopPrice3}</p>
          <p className="rating-data">{shopRating}</p>
        </Card.Body>
        <div className="btn-area">
          {showBtn ? (
            <Button
              onClick={() => handleCartAdd(idx, setItems, item)}
              className="btn-primary"
              variant="primary"
            >
              add to cart
            </Button>
          ) : (
            <Button
              onClick={() => handleCartRemove(idx, setItems, item)}
              className="btn-size"
              variant="danger"
            >
              remove
            </Button>
          )}
        </div>
      </Card>
    );

  }
