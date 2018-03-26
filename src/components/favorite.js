import React from 'react';
import { connect } from 'react-redux';
import { Panel, Col, Row, Well, Button, ButtonGroup, Label } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { deleteFromFavorite } from '../actions/favorite-actions';

class Favorite extends React.Component
{
    onDelete(_id)
    {
        //DElete _id
        let favoriteList = this.props.rdFavorite.shops.filter(e => e._id != _id);
        this.props.deleteFromFavorite(favoriteList);
    }

    render()
    {
        //REnder Favor
        if (this.props.rdFavorite)
        {
            return this.renderFavorite();
        }
        else
        {
            return this.renderEmpty();
        }
    }

    renderEmpty()
    {
        return (<div></div>);
    }

    renderFavorite()
    {
        const favoriteList = this.props.rdFavorite.shops.map(shop =>
        {
            return (
                <Panel key={shop._id}>
                    <Row>
                        <Col xs={12} sm={4}>
                            <h6>{shop.name}</h6>
                            <span></span>
                        </Col>
                        <Col xs={6} sm={4}>
                            <ButtonGroup style={{ minWidth: '300px' }}>
                                <Button bsStyle='danger' bsSize='small' onClick={this.onDelete.bind(this, shop._id)}>DELETE</Button>
                            </ButtonGroup>
                        </Col>
                    </Row>
                </Panel>
            );
        });
        return (
            <Panel bsStyle='primary'>
                {favoriteList}
            </Panel>
        )
    }
}
function mapStateToProps(state)
{
    return state;
}
function mapDispatchToProps(dispatch)
{
    return bindActionCreators({ deleteFromFavorite}, dispatch );
}
export default connect(mapStateToProps, mapDispatchToProps)(Favorite);