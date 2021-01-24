import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, Button} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
// 아까 HomeStackNavigator 에서 export 해줬던 타입들을 가지고 온다.
import {
  HomeScreens,
  HomeStackParamList,
} from '../../navigators/HomeStackNavigators';

// MainScreen 에 필요한 파라미터들을 StackNavigationProp 으로 타입 명시해준다.
type MainScreenNavigationProps = StackNavigationProp<
  HomeStackParamList, // navigators/HomeStackNavigators/index.tsx 에서 지정했던 HomeStackParamList
  HomeScreens.Main // enum 으로 지정했던 타입 중 Main 에 해당하는 부분
>;

// MainScreenProps 에 대한 인터페이스 지정
// 인터페이스: 객체의 타입을 정의할 수 있게 하는 것
interface MainScreenProps {
  navigation: MainScreenNavigationProps; // 네비게이션 속성에 대한 타입으로 방금 지정해주었던 MainScreenNavigationProps 을 지정
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

const MainScreen: React.FunctionComponent<MainScreenProps> = (props) => {
  const {navigation} = props;
  const initialSymbol: string = '삼성전자';
  const [symbol, setSymbol] = useState<string>(initialSymbol);
  // MainScreenProps 에 navigation 이 있으니까 비구조화 할당으로 꺼내쓸 수 있음
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcome}>Main Screen</Text>
      </View>
      <View style={styles.btnNextContainer}>
        <Button
          title="More"
          onPress={() => navigation.navigate(HomeScreens.Details, {symbol})}
          // More 버튼을 누르면 HomeScreens 로 이동함.
        />
      </View>
    </SafeAreaView>
  );
};
export default MainScreen;
