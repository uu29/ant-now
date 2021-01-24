import React from 'react';
// 필요한 모듈과 스크린 tsx 를 불러온다.
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackNavigator from '../HomeStackNavigators'; // 처음에 만들어줬던 HomeStackNavigation
import SearchScreen from '../../screens/SearchScreen'; // 검색 스크린
import CommunityScreen from '../../screens/CommunityScreen'; // 커뮤니티 스크린
// react-native-vector-icons 에 필요한 모듈들
import 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Tab Navigation 에서 필요한 스크린은 3개 - HomeStack, 검색 스크린, 커뮤니티 스크린

// 1. 필요한 스크린에 대해 enum 타입을 정의한다. (리듀서에서 액션타입을 지정해주는 것 처럼)
export enum BottomTabs {
  Home = 'Home',
  Search = 'Search',
  Community = 'Community',
}

// 2. 각 스크린 마다 필요한 파라미터 타입 정의
export type BottomTabsParamList = {
  Home: undefined; // 아무런 파라미터도 필요 없을 경우 undefined
  Search: undefined;
  Community: undefined;
};

// 3. 방금 만든 타입을 createBottomTabNavigator 메소드 앞에 지정해주서 Tabs 네비게이터 객체를 만들어줌.
const Tabs = createBottomTabNavigator<BottomTabsParamList>();
const TabsNavigator: React.FunctionComponent = () => {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: function ({focused, color, size}) {
          let iconName: string;
          // focused: bool, 클릭했는지 여부
          switch (route.name) {
            case 'Search':
              iconName = 'magnify';
              break;
            case 'Community':
              iconName = 'forum-outline';
              break;
            default:
              iconName = 'star-outline';
          }
          return (
            <MaterialCommunityIcons size={size} name={iconName} color={color} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: '#1B2228', // 활성화 되었을 때 색
        inactiveTintColor: '#C7CDD3', // 비활성화 색
        showLabel: false, // 텍스트 숨기기
      }}>
      <Tabs.Screen
        name={BottomTabs.Home} // 처음에 enum 으로 지정했던 BottomTabs 에서 맞는 컴포넌트명을 가져온다.
        component={HomeStackNavigator} // 실제 보여주게 될 컴포넌트
      />
      <Tabs.Screen name={BottomTabs.Search} component={SearchScreen} />
      <Tabs.Screen name={BottomTabs.Community} component={CommunityScreen} />
    </Tabs.Navigator>
  );
};
export default TabsNavigator;
