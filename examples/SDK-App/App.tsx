import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {Payment} from '@edviron/react-native-sdk';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [collect_id, setCollect_id] = useState('');
  const [final_id, setFinalId] = useState('');
  const onChangeId = (text: string) => {
    setCollect_id(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChangeId}
        value={collect_id}
        style={styles.input}
        placeholder="Enter collect id"
      />
      <Button
        title="Initiate "
        onPress={() => {
          if (collect_id) {
            setFinalId(collect_id);
          }
        }}
      />
      {final_id && (
        <Payment
          collectId={final_id}
          onSuccess={() => {
            //success function
            console.log('success');
          }}
          onFailure={() => {
            //failure function
            console.log('failure');
          }}
          //mode
          // sandbox for development
          //production for production
          mode={'sandbox'}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;
