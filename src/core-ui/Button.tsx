import * as React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TouchableOpacityProps,
  StyleProp,
  ViewStyle,
  TextStyle
} from 'react-native';

type Props = TouchableOpacityProps & {
  type?: 'default' | 'primary' | 'alert' | 'cancel';
  containerStyle?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<TextStyle>;
  children: string | React.ReactNode;
};

const COLOR_TYPES = {
  default: '#FEF',
  primary: '#00A',
  alert: 'red',
  cancel: '#EEF'
};

export default function Button(props: Props) {
  let { children, type, contentStyle, containerStyle, ...otherProps } = props;
  let content =
    typeof children === 'string' ? (
      <Text style={[styles.text, contentStyle]}>{children}</Text>
    ) : (
      children
    );
  return (
    <TouchableOpacity
      style={[
        {
          ...styles.container,
          backgroundColor: COLOR_TYPES[type]
        },
        containerStyle
      ]}
      {...otherProps}
    >
      {content}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#FEF'
  },
  text: {
    color: '#FFF',
    fontSize: 14
  }
});
