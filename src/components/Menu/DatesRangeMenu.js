import React, {Component} from 'react'
import Menu from "@material-ui/core/Menu/Menu";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import {DateRangePicker} from "react-date-range/";
import {DateRange} from "react-date-range";
import { format, addDays } from 'date-fns';
import * as rdrLocales from 'react-date-range/src/locale';

var navigatorLanguage = window.navigator.languages;

export default class DatesRangeMenu extends Component {

    state = {
        dateRange: {
            selection: {
                startDate: new Date(),
                endDate: null,
                key: 'selection',
            },
        },
        dateRangeWithDisabled: {
            selection: {
                startDate: new Date(),
                endDate: new Date(),
                key: 'selection',
            },
        },
    }

    handleRangeChange(which, payload) {
        this.setState({
            [which]: {
                ...this.state[which],
                ...payload,
            },
        });
    }

    render () {
        return (
            <Menu
                anchorEl={this.props.anchorEl}
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                transformOrigin={{vertical: 'top', horizontal: 'right'}}
                open={this.props.open}
                onClose={this.props.handleClose}
                style={{marginLeft: '40px', marginTop: '60px'}}
            >

                <DateRange
                    onChange={this.handleRangeChange.bind(this, 'dateRangeWithDisabled')}
                    moveRangeOnFirstSelection={false}
                    ranges={[this.state.dateRangeWithDisabled.selection]}
                    className={'PreviewArea'}
                    disabledDates={[new Date(), addDays(new Date(), 3)]}
                    minDate={addDays(new Date(), -0)}
                    months={2}
                    direction="horizontal"
                    locale={rdrLocales[navigatorLanguage[1]]}
                />
            </Menu>

        )
    }

}