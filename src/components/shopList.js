import React from 'react';
import { connect } from 'react-redux';


class ShopList extends React.Component
{
	render()
	{
		console.log('LOG', this.props);
		var shopsList = this.props.rdShops.shops.map(shop=>
		{
			return (
				<div key={shop.id}>
					<h2>{shop.name}</h2>
					<h2>{shop.location}</h2>
				</div>
			)
		});
		return (
			<div>
				{shopsList}
			</div>
		)
	}
}
function mapStateToProps(state)
{
	return {
		rdShops: state.rdShops
	};
}
export default connect(mapStateToProps)(ShopList);