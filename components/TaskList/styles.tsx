import {StyleSheet, ScrollView} from 'react-native';

import {createStyled} from '@emotion/primitives-core';

const styled = createStyled(StyleSheet);

export const ContainerView = styled(ScrollView)`
	flex-grow: 1;
	flex-basis: 0;
	min-height: 0;
`