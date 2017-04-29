import React from 'react';
import { deviceWidth } from '../reusable/indepenedent/utils/device_dimensions';
import SideMenu from 'react-native-side-menu';
import { connect } from 'react-redux';

import * as menuActions from './menu__actions';
import Menu from './Menu';

const menu = <Menu />;
const openMenuOffset = deviceWidth * 7/ 8;

const MenuWrapped = (props) => {
    const { menuOpen, toggleMenuVisibility, children, } = props;

    return (
        <SideMenu
            menu={menu}
            isOpen={menuOpen}
            openMenuOffset={openMenuOffset}
            onChange={(isOpen) => {
                toggleMenuVisibility({ event: 'onChange', isOpen });
            }}
        >
            {props.children}
        </SideMenu>
    )
};

const mapStateToProps = ({ menuOpen }) => {
    return { menuOpen }
};

export default connect(mapStateToProps, menuActions)(MenuWrapped);