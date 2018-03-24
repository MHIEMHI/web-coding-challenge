import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getShopsData } from '../actions/shops-actions';

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
				<div key={shop.id}>
					<h2>{shop.name}</h2>
					<h2>{shop.location}</h2>
					<Button bsStyle='primary'>Favorite</Button>
				</div>
			)
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