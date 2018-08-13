import './../../styles/Category/category.scss';

const Category = (props) => (
<div>
  <ul className="menu">
    <li><a href="#">Women's</a>
      <div className="megadrop">
        <div className="col">
            <h3><a href="#">Women's Clothing</a></h3>
            <ul>
                <li><a href="#">Shirts and Blouses</a></li>
                <li><a href="#">Tops and Tees</a></li>
                <li><a href="#">Jumpers and Knits</a></li>
                <li><a href="#">Coats and Jackets</a></li>
                <li><a href="#">Dresses</a></li>
                <li><a href="#">Thermals</a></li>
                <li><a href="#">Pants</a></li>
                <li><a href="#">Skirts</a></li>
                <li><a href="#">Jeans & Denim</a></li>
                <li><a href="#">Shorts</a></li>
                <li><a href="#">Maternity</a></li>
                <li><a href="#">Swimwear</a></li>
                <li><a href="#">Plus Size</a></li>
            </ul>
        </div>
        <div className="col">
            <h3><a href="#">Women's Shoe</a></h3>
            <ul>
              <li><a href="#">Dress Shoes</a>
              </li>
              <li><a href="#">Sneakers</a>
              </li>
              <li><a href="#">Uggs and Slippers</a>
              </li>
            </ul>
        </div>
        <div className="col">
            <h3><a href="#">Jewellery</a></h3>
            <h3><a href="#">Sunglasses</a></h3>
            <h3><a href="#">Watches</a></h3>
        </div>
        <div className="col1">
          <h3><a href="#">Top Brands</a></h3>
          <ul>
              <li><a href="#">Dress Shoes</a>
              </li>
              <li><a href="#">Sneakers</a>
              </li>
              <li><a href="#">Uggs and Slippers</a>
              </li>
          </ul>
        </div>
      </div>
    </li>
    <li> <a href="#">Men's</a>
      <div className="megadrop">
      </div>
    </li>
    <li> <a href="#">Home</a>
      <div className="megadrop">
      </div>
    </li>
    <li> <a href="#">Beauty</a>
      <div className="megadrop">
      </div>
    </li>
    <li> <a href="#">Sports & Outdoors</a>
      <div className="megadrop">
      </div>
    </li>
    <li> <a href="#">Groceries</a>
      <div className="megadrop">
      </div>
    </li>
    <li> <a href="#">Tech</a>
      <div className="megadrop">
      </div>
    </li>
    <li> <a href="#">Kids & Baby</a>
      <div className="megadrop">
      </div>
    </li>
    <li> <a href="#">Entertainment</a>
      <div className="megadrop">
      </div>
    </li>
    <li> <a href="#">Pets</a>
      <div className="megadrop">
      </div>
    </li>
    <li> <a href="#">Toys & Games</a>
      <div className="megadrop">
      </div>
    </li>
  </ul>
</div>
)

export default Category;