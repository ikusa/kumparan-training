import * as React from 'react';
import { Text as TextComp, TextProps } from 'react-native';

type Props = TextProps & {
  children: string | React.ReactNode;
};

function Text(props: Props) {
  let { children, ...otherProps } = props;
  return <TextComp {...otherProps}>{children}</TextComp>;
}
