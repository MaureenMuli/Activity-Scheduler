import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { AntDesign } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Layout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="home"
                options={{
                    tabBarLabel: "Home",
                    tabBarLabelStyle: ({ focused}) =>
                        focused? (
                            color="#00A8FF"
                        ) : (
                            color="#2d2e2e"
                    ),
                    headerShown: false,
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <FontAwesome name="tasks" size={24} color="#00A8FF" />
                        ) : (
                            <FontAwesome name="tasks" size={24} color="#2d2e2e" />
                        )
                }}
            />
            <Tabs.Screen
                name="calendar"
                options={{
                    tabBarLabel: "Calendar",
                    tabBarLabelStyle: ({ focused}) =>
                        focused? (
                            color="#00A8FF"
                        ) : (
                            color="#2d2e2e"
                    ),
                    headerShown: false,
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <AntDesign name="calendar" size={24} color="#00A8FF" />
                        ) : (
                            <AntDesign name="calendar" size={24} color="#2d2e2e" />
                        )
                }}
            />
            <Tabs.Screen
                name="account"
                options={{
                    tabBarLabel: "Account",
                    tabBarLabelStyle: ({ focused}) =>
                        focused? (
                            color="#00A8FF"
                        ) : (
                            color="#2d2e2e"
                    ),
                    headerShown: false,
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <MaterialCommunityIcons name="account" size={24} color="#00A8FF" />
                        ) : (
                            <MaterialCommunityIcons name="account" size={24} color="#2d2e2e" />
                        )
                }}
            />
        </Tabs>
    )
}