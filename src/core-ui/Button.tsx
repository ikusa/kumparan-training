import * as React from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  TouchableOpacityProps,
  StyleProp,
  ViewStyle
} from 'react-native';

type Props = TouchableOpacityProps & {
  type: 'default' | 'primary' | 'alert' | 'cancel';
  containerStyle?: StyleProp<ViewStyle>;
  children: string | React.ReactNode;
};

function Button(props: Props) {
  let { children, type, containerStyle, ...otherProps } = props;
  //switch style based on type
  //handle children is a text or ReactNode
  return (
    <TouchableOpacity style={[styles.default, containerStyle]} {...otherProps}>
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  default: {},
  primary: {},
  alert: {},
  cancel: {}
});
