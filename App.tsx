import React from 'react';

import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {AppView, ContainerView} from '@/styles';

import TaskEditor from '@/components/TaskEditor';
import TaskList from '@/components/TaskList';

import {Provider} from 'react-redux';
import createStore from '@/utils/createStore';

const store = createStore();

export default () => {
	return (
		<Provider store={store}>
			<AppView>
				<ContainerView>
					<TaskList/>
					<TaskEditor
						isVisible={true}
					/>
				</ContainerView>
			</AppView>
		</Provider>
	);
}