import {StyleSheet, ScrollView} from 'react-native';

import {createStyled} from '@emotion/primitives-core';

const styled = createStyled(StyleSheet);

export const ContainerView = styled(ScrollView)`
	border: 1px solid #ccc;
	margin: 2px;
	padding:  5px;
`