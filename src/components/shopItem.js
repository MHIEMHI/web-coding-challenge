import React from 'react';
import {Row, Col, Well, Button} from 'react-bootstrap';

class ShopItem extends React.Component
{
    render()
    {
        let shop = this.props.shop;
        return(
            <Well>
                <Row>
                    <Col xs={12}>
                        <h6>{shop.name}</h6>
                        <p>{shop.location}</p>
                        <Button bsStyle='primary'>Favorite</Button>
                    </Col>
                </Row>
            </Well>
        );
    }
}

export default ShopItem;
