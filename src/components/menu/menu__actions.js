import * as aT from '../../redux/action_types';

export const toggleMenuVisibility = ({ event, isOpen }) => {
    return { type: aT.TOGGLE_MENU_VISIBILITY, payload: { event, isOpen } };
};
