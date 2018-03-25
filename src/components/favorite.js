import React from 'react';
import {connect} from 'react-redux';
import {Panel, Col, Row,  Well, Button} from 'react-bootstrap';

class Favorite extends React.Component
{
    render()
    {
        //REnder Favor
        if(this.props.rdFavorite)
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
        const favoriteList = this.props.rdFavorite.shops.map(shop=>
        {
            return(
                <Panel key={shop.id}>
                    <Row>
                        <Col xs={12} sm={4}>
                            <h6>{shop.name}</h6>
                        </Col>
                    </Row>
                </Panel>
            );
        });
        return(
            <Panel header='Favorite' bsStyle='primary'> 
                {favoriteList}
            </Panel>
        )
    }
}
function mapStateToProps(state)
{
    return state;
}
export default connect(mapStateToProps)(Favorite);