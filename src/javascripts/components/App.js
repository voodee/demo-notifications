import React, { Component } from 'react'
import Notification from './Notification/Container'

import {
    Grid,
    Row,
    Col,
    FormControl,
    FormGroup,
    Radio,
    Button,
    ControlLabel
} from 'react-bootstrap';
import FRC from 'formsy-react-components';

import { LEVELS, DEFAULT_NOTIFICATION, POSITIONS, ANIMATION_TYPE, ANIMATION_TIMING } from 'constants/Notification'

export default class App extends Component {

    constructor() {
        super();

        this._notification = null;

        this._levels = LEVELS.map( (value, label) => ({value, label})).toArray();
        this._position = POSITIONS.map( (value, label) => ({value, label})).toArray();
        this._animation_type = ANIMATION_TYPE.map( (value, label) => ({value, label})).toArray();
        this._animation_timing = ANIMATION_TIMING.map( (value, label) => ({value, label})).toArray();
    }

    _showNotification(model) {
        this._notification.add(model)
    };


    _setNotification = notification => {
        this._notification = notification;
    };


    submitForm = (model) => {
        Object.keys(model).forEach(key => (model[key] === undefined || model[key] == '') && delete model[key]);
        this._showNotification(model);
    };

    render() {
        return (
            <div>
                <Grid>
                    <h1>Notify</h1>
                    <FRC.Form
                        onSubmit={this.submitForm}
                        layout="vertical"
                    >
                        <Row>
                            <Col md={4}>
                                <FRC.Textarea
                                    rows={3}
                                    cols={40}
                                    name="message"
                                    label="Message"
                                    placeholder="Enter a message..."
                                />
                                <FRC.Input
                                    name="autoDismiss"
                                    value={DEFAULT_NOTIFICATION.get('autoDismiss')}
                                    label="Time out"
                                    type="number"
                                />
                                <FRC.Checkbox
                                    label="Auto dismiss"
                                    name="Dismissible"
                                    value={DEFAULT_NOTIFICATION.get('dismissible')}
                                />
                                <FRC.Checkbox
                                    label="Close button"
                                    name="closeButton"
                                    value={DEFAULT_NOTIFICATION.get('closeButton')}
                                />
                            </Col>
                            <Col md={4}>
                                <FRC.RadioGroup
                                    label="Type"
                                    name="level"
                                    value={DEFAULT_NOTIFICATION.get('level')}
                                    options={this._levels}
                                />
                                <FRC.RadioGroup
                                    label="Position"
                                    name="position"
                                    value={POSITIONS.get('bottomCenter')}
                                    options={this._position}
                                />
                            </Col>
                            <Col md={4}>
                                <FRC.RadioGroup
                                    label="Animation Type"
                                    name="animationType"
                                    value={ANIMATION_TYPE.get('easeIn')}
                                    options={this._animation_type}
                                />
                                <FRC.Select
                                    label="Transition Enter Timeout"
                                    name="transitionEnterTimeout"
                                    value={DEFAULT_NOTIFICATION.get('transitionEnterTimeout')}
                                    options={this._animation_timing}
                                />
                                <FRC.Select
                                    label="Transition Leave Timeout"
                                    name="transitionLeaveTimeout"
                                    value={DEFAULT_NOTIFICATION.get('transitionLeaveTimeout')}
                                    options={this._animation_timing}
                                />
                            </Col>
                        </Row>
                        <div className="row">
                            <Col md={12}>
                                <Button type="submit">Show Notify</Button>
                            </Col>
                        </div>
                    </FRC.Form>
                </Grid>
                <Notification ref={this._setNotification} />
            </div>
        )
    }
}