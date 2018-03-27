import React from 'react';
import { Well, Panel, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';
import { addShop } from '../actions/shops-actions';

class ShopForm extends React.Component
{
    handleSubmit()
    {
        const shops = {
            name: findDOMNode(this.refs.name).value,
            location: findDOMNode(this.refs.location).value,
            coordinate: findDOMNode(this.refs.coordinate).value,
        };
        this.props.addShop(shops);
    }

    render()
    {
        return (
            <Well>
                <Panel>
                    <FormGroup controlId='name'>
                        <ControlLabel>Name</ControlLabel>
                        <FormControl type='text' placeholder='Enter Name' ref='name' />
                    </FormGroup>
                    <FormGroup controlId='location'>
                        <ControlLabel>Location</ControlLabel>
                        <FormControl type='text' placeholder='Enter Location' ref='location' />
                    </FormGroup>
                    <FormGroup controlId='coordinate'>
                        <ControlLabel>Coordinate</ControlLabel>
                        <FormControl type='text' placeholder='Enter Coordinate' ref='coordinate' />
                    </FormGroup>
                    <Button bsStyle='primary' onClick={this.handleSubmit.bind(this)}>Save Shop</Button>
                </Panel>
            </Well>
        );
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({ addShop }, dispatch);
}

export default connect(null, mapDispatchToProps)(ShopForm);