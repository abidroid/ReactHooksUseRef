import React, {useRef} from 'react';
import {Button, SafeAreaView, ScrollView, Text, View} from 'react-native';

const App = () => {
  let array = Array(100).fill(0);
  const scrollViewRef = useRef(null);

  const handleClick = () => {
    scrollViewRef.current.scrollTo({x: 0, y: 0, animated: true});
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <ScrollView ref={scrollViewRef}>
          {array.map((_value, index) => (
            <Text key={index}>Hello World {index}</Text>
          ))}
        </ScrollView>
        <Button onPress={handleClick} title={'Go to Top'} />
      </View>
    </SafeAreaView>
  );
};

export default App;
