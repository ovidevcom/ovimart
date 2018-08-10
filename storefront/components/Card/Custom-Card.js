import './../../styles/Card/custom.scss';

const CustomCard = (props) =>(
    <div className="cardContainer">
        <div className="cardLayout">
            <div className="Card">
                <div className="Img_product">
                    <img src={props.image.original} width="100%" height="99%"/>
                </div>
                
                <div className="id_product_buff">
                    <div className="buff_name">
                        <div className="name_product">
                            {props.name}
                        </div>
                    </div>
                    <div className="buff_id">
                        <div className="id_product">
                        {props.id}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)


export default CustomCard 