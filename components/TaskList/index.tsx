import React from 'react';
import {useSelector} from 'react-redux';
import taskListSelector from '@/applications/selectors/taskListSelector';

import {View, Text} from 'react-native';
import TaskListItem from '@/components/TaskListItem';
import {ContainerView} from './styles';

import Task from '@/domains/task';

type propsType = {
	
}

export default (props: propsType) => {
	const tasks = useSelector(taskListSelector)

    return (
        <ContainerView>
			{tasks.map((task: Task) => (
				<TaskListItem 
					key={task.id}
					{...task}
				/>
			))}
        </ContainerView>
    );
}