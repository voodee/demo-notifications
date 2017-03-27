import React, { Component } from 'react'
import {connect} from 'react-redux';
// import Notifications from './Notifications'
import Notifications from '../../../../npm/redux-notification/lib/Notifications'

import { levels, positions, animationType, animationTiming, defaultValue } from 'react-notification/src/Constants'

import { Grid, Row, Col, Button } from 'react-bootstrap';
import { Form, Select, RadioGroup, Textarea, Input, Checkbox } from 'formsy-react-components';

import { showNotification } from '../actions/Notifications';

class App extends Component {

    constructor() {
        super();

        this._notification = null;

        this._levels = levels.map( (value, label) => ({value, label})).toArray();
        this._position = positions.map( (value, label) => ({value, label})).toArray();
        this._animation_type = animationType.map( (value, label) => ({value, label})).toArray();
        this._animation_timing = animationTiming.map( (value, label) => ({value, label})).toArray();
    }


    _showNotification(model) {
        this.props.dispatch( showNotification(model) )
    }


    submitForm = (model) => {
        Object.keys(model).forEach(key => (model[key] === undefined || model[key] == '') && delete model[key]);
        this._showNotification(model)
    };


    render() {
        return (
            <div>
                <Grid>
                    <h1>Notify</h1>
                    <Form
                        onSubmit={this.submitForm}
                        layout="vertical"
                    >
                        <Row>
                            <Col md={4}>
                                <Textarea
                                    rows={3}
                                    cols={40}
                                    name="message"
                                    label="Message"
                                    value="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                                    placeholder="Enter a message..."
                                />
                                <Input
                                    name="autoDismiss"
                                    value={defaultValue.get('autoDismiss')}
                                    label="Time out"
                                    type="number"
                                />
                                <Checkbox
                                    label="Auto dismiss"
                                    name="Dismissible"
                                    value={defaultValue.get('dismissible')}
                                />
                                <Checkbox
                                    label="Close button"
                                    name="closeButton"
                                    value={defaultValue.get('closeButton')}
                                />
                            </Col>
                            <Col md={4}>
                                <RadioGroup
                                    label="Type"
                                    name="level"
                                    value={defaultValue.get('level')}
                                    options={this._levels}
                                />
                                <RadioGroup
                                    label="Position"
                                    name="position"
                                    value={positions.get('bottomCenter')}
                                    options={this._position}
                                />
                            </Col>
                            <Col md={4}>
                                <RadioGroup
                                    label="Animation Type"
                                    name="animationType"
                                    value={animationType.get('easeIn')}
                                    options={this._animation_type}
                                />
                                <Select
                                    label="Transition Enter Timeout"
                                    name="transitionEnterTimeout"
                                    value={defaultValue.get('transitionEnterTimeout')}
                                    options={this._animation_timing}
                                />
                                <Select
                                    label="Transition Leave Timeout"
                                    name="transitionLeaveTimeout"
                                    value={defaultValue.get('transitionLeaveTimeout')}
                                    options={this._animation_timing}
                                />
                            </Col>
                        </Row>
                        <div className="row">
                            <Col md={12}>
                                <Button type="submit">Show Notify</Button>
                            </Col>
                        </div>
                    </Form>
                </Grid>
                <Notifications />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {}
};

export default connect(mapStateToProps)(App)