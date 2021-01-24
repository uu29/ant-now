import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, Button} from 'react-native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
// 아까 TabsNavigators 에서 export 해줬던 타입들을 가지고 온다.
import {BottomTabs, BottomTabsParamList} from '../../navigators/TabsNavigators';

// CommunityScreen 에 필요한 파라미터들을 BottomTabNavigationProp 으로 타입 명시해준다.
type CommunityScreenNavigationProps = BottomTabNavigationProp<
  BottomTabsParamList, // navigators/TabsNavigators/index.tsx 에서 지정했던 BottomTabsParamList
  BottomTabs.Community // enum 으로 지정했던 타입 중 Community 에 해당하는 부분
>;

// CommunityScreenProps 에 대한 인터페이스 지정
// 인터페이스: 객체의 타입을 정의할 수 있게 하는 것
interface CommunityScreenProps {
  navigation: CommunityScreenNavigationProps; // 네비게이션 속성에 대한 타입으로 방금 지정해주었던 CommunityScreenNavigationProps 을 지정
}

const styles = StyleSheet.create({
  btnNextContainer: {
    alignSelf: 'flex-end',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
  },
  welcome: {
    fontSize: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '100%',
  },
});

const CommunityScreen: React.FunctionComponent<CommunityScreenProps> = (
  props,
) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcome}>Community Screen</Text>
      </View>
    </SafeAreaView>
  );
};
export default CommunityScreen;
