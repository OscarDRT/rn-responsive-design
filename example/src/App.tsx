import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { normalize, normalizeHeight } from 'rn-responsive-design';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text>App</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: normalizeHeight(30),
    paddingHorizontal: normalize(30),
  },
});
