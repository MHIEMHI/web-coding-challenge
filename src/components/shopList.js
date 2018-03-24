import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getShopsData } from '../actions/shops-actions';
import ShopItem from './shopItem';


import {Grid, Col, Row, Button} from 'react-bootstrap';

class ShopList extends React.Component
{
	componentDidMount()
	{
		this.props.getShopsData();
	}

	render()
	{
		console.log('LOG', this.props);
		var shopsList = this.props.rdShops.shops.map(shop =>
		{
			return (
				<Col xs={12} sm={6} md={4} key={shop.id}>
					<ShopItem shop={shop}/>
				</Col>
			);
		});
		return (
			<Grid>
				<Row>
					{shopsList}
				</Row>
			</Grid>
		)
	}
}
function mapStateToProps(state)
{
	return {
		rdShops: state.rdShops
	};
}
function mapDispatchToProps(dispatch)
{
	return bindActionCreators({getShopsData}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(ShopList);