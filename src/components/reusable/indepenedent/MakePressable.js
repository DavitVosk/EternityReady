import React from 'react';
import { TouchableOpacity } from 'react-native';

import type { MakePressableProps } from '../../../flow/prop_types';

const MakePressable = (props: MakePressableProps) => (
    <TouchableOpacity {...props}>
        {props.children}
    </TouchableOpacity>
);

export default MakePressable;
