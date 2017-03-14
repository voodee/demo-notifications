import Immutable from 'immutable'

export const POSITIONS = Immutable.Map({
    topLeft     : 'top-left',
    topRight    : 'top-right',
    topCenter   : 'top-center',
    bottomLeft  : 'bottom-left',
    bottomRight : 'bottom-right',
    bottomCenter: 'bottom-center'
});


export const LEVELS = Immutable.Map({
    success : 'success',
    error   : 'error',
    warning : 'warning',
    info    : 'info',
    default : 'default'
});


export const ANIMATION_TYPE = Immutable.Map({
    ease        : 'ease',
    easeIn      : 'ease-in',
    easeOut     : 'ease-out',
    easeInOut   : 'ease-in-out',
    linear      : 'linear'
});


export const ANIMATION_TIMING = Immutable.Map({
    none        : '0',
    fast        : '300',
    normal      : '500',
    slow        : '1000'
});


export const DEFAULT_VALUE = {
    title                   : null,
    message                 : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    level                   : LEVELS.get('default'),
    position                : POSITIONS.get('bottomCenter'),
    autoDismiss             : 5,
    dismissible             : true,
    animationType           : ANIMATION_TYPE.get('easeIn'),
    transitionEnterTimeout  : ANIMATION_TIMING.get('normal'),
    transitionLeaveTimeout  : ANIMATION_TIMING.get('fast'),
    closeButton             : false
};


export const DEFAULT_NOTIFICATION = Immutable.Map(DEFAULT_VALUE);