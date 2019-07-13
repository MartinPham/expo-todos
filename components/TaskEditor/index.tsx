import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import addTask from '@/applications/addTask';
import {View, Text, TextInput, Button} from 'react-native';
import {ContainerView, NameInput, SubmitButton} from './styles';

type propsType = {
	isVisible: boolean
}

export default ({isVisible}: propsType) => {
	const dispatch = useDispatch();
	const [name, setName] = useState('');

	const onSubmit = () => {
		dispatch(addTask(name))
		setName('')
	}

	console.log('name', name)

    return (
        <ContainerView isVisible={isVisible}>
			<NameInput
				value={name}
				onChangeText={value => setName(value)}
				onSubmitEditing={onSubmit}
			/>
			<SubmitButton
				title="OK"
				onPress={onSubmit}
			/>
        </ContainerView>
    );
}