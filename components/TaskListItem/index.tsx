import React from 'react';
import {View, Text} from 'react-native';

import {ContainerView} from './styles';

import Task from '@/domains/task';

type propsType = {
	name: string
}

export default ({name}: propsType) => {
	
    return (
        <ContainerView>
			<Text>{name}</Text>
        </ContainerView>
    );
}