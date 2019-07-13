import {StyleSheet, View, TextInput, Button} from 'react-native';

import {createStyled} from '@emotion/primitives-core';

const styled = createStyled(StyleSheet);

export const ContainerView = styled(View)`
	display: ${({isVisible}) => isVisible ? 'flex' : 'none'};
	background: #000;
	padding: 10px;
	height: 100px;
`
export const NameInput = styled(TextInput)`
	border: 1px solid #ccc;
	height: 40px;
	background: #fff;
`
export const SubmitButton = styled(Button)`

`