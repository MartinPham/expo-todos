import {StyleSheet, SafeAreaView, View, Platform} from 'react-native';
import TaskList from '@/components/TaskList';
import {createStyled} from '@emotion/primitives-core';

const styled = createStyled(StyleSheet);

export const AppView = styled(SafeAreaView)`
	background: #000;
	height: 100%;
`

export const ContainerView = styled(SafeAreaView)`
	display: flex;
	height: 100%;
	background: #fff;
	padding-top: ${Platform.OS === 'android' ? '25px' : 0}
`
