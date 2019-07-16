import * as React from 'react';
import { View, StyleSheet, Switch } from 'react-native';

import Text from '../core-ui/Text';
import { TodoItem } from '../types';

type Props = TodoItem & {
  toggleTodo: (id: string) => void;
};

export default function Todo({ id, task, done, toggleTodo }: Props) {
  return (
    <View style={styles.itemContainer}>
      <Text style={{ fontSize: 20, paddingRight: 20 }}>- {task}</Text>
      <Switch
        value={done}
        onValueChange={() => {
          toggleTodo(id);
        }}
      />
    </View>
  );
}
let styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    padding: 8
  }
});
