import React from 'react';
import { Row, Col, Well, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToFavorite } from '../actions/favorite-actions';

class ShopItem extends React.Component
{
    addToFavorite()
    {
        this.props.addToFavorite(this.props.shop);
    }

    render()
    {
        let shop = this.props.shop;
        return (
            <Well>
                <Row>
                    <Col xs={12}>
                        <h6>{shop.name}</h6>
                        <p>{shop.location}</p>
                        <Button onClick={this.addToFavorite.bind(this)} bsStyle='primary'>Favorite</Button>
                    </Col>
                </Row>
            </Well>
        );
    }
}

function mapStateToProps(state)
{
    return state;
}
function mapDispatchToProps(dispatch)
{
    return bindActionCreators({ addToFavorite }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(ShopItem);
