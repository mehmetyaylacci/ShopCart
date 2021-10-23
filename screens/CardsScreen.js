import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
// import CardsScreen from '../assets/Card';
import CardCustom from '../assets/CardCustom';

// const users = [
//     {
//        name: 'brynn',
//        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
//     }];

// const CardsScreen = () => {
//     return(
//         <Card>
//         <Card.Title>CARD WITH DIVIDER</Card.Title>
//         <Card.Divider/>
//         {
//             users.map((u, i) => {
//                 return (
//                     <View>
//                     <Image
//                         resizeMode="cover"
//                         source={{ uri: u.avatar }}
//                     />
//                     <Text> {u.name} </Text>
//                     </View>
//                 );
//             })
//         }
//     </Card>
// );
// };

function CardsScreen() {
    return (
        <SafeAreaView>
            <ScrollView style={styles.scroll}> 
                <CardCustom image="https://store-images.s-microsoft.com/image/apps.14591.9a19b1cb-7ffc-4b32-bf97-25ef75ec69a3.753de052-0f07-4e5e-a20d-e4d5688136af.e2247862-7caa-44e8-8915-ca934ab9b663.png">
                    {/* <Text>
                        Mehmet
                    </Text> */}
                </CardCustom>
                <CardCustom image="https://store-images.s-microsoft.com/image/apps.14591.9a19b1cb-7ffc-4b32-bf97-25ef75ec69a3.753de052-0f07-4e5e-a20d-e4d5688136af.e2247862-7caa-44e8-8915-ca934ab9b663.png">
                    {/* <Text>
                        Mehmet
                    </Text> */}
                </CardCustom>
                <CardCustom image="https://store-images.s-microsoft.com/image/apps.14591.9a19b1cb-7ffc-4b32-bf97-25ef75ec69a3.753de052-0f07-4e5e-a20d-e4d5688136af.e2247862-7caa-44e8-8915-ca934ab9b663.png">
                    {/* <Text>
                        Mehmet
                    </Text> */}
                </CardCustom>
                <CardCustom image="https://store-images.s-microsoft.com/image/apps.14591.9a19b1cb-7ffc-4b32-bf97-25ef75ec69a3.753de052-0f07-4e5e-a20d-e4d5688136af.e2247862-7caa-44e8-8915-ca934ab9b663.png">
                    {/* <Text>
                        Mehmet
                    </Text> */}
                </CardCustom>
                <CardCustom image="https://store-images.s-microsoft.com/image/apps.14591.9a19b1cb-7ffc-4b32-bf97-25ef75ec69a3.753de052-0f07-4e5e-a20d-e4d5688136af.e2247862-7caa-44e8-8915-ca934ab9b663.png">
                    {/* <Text>
                        Mehmet
                    </Text> */}
                </CardCustom>
                <CardCustom image="https://store-images.s-microsoft.com/image/apps.14591.9a19b1cb-7ffc-4b32-bf97-25ef75ec69a3.753de052-0f07-4e5e-a20d-e4d5688136af.e2247862-7caa-44e8-8915-ca934ab9b663.png">
                    {/* <Text>
                        Mehmet
                    </Text> */}
                </CardCustom>
                <CardCustom image="https://store-images.s-microsoft.com/image/apps.14591.9a19b1cb-7ffc-4b32-bf97-25ef75ec69a3.753de052-0f07-4e5e-a20d-e4d5688136af.e2247862-7caa-44e8-8915-ca934ab9b663.png">
                    {/* <Text>
                        Mehmet
                    </Text> */}
                </CardCustom>
            </ScrollView> 
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    scroll: {
      backgroundColor: '#f2f2f2',
      marginBottom: 50,
    },
});

export default CardsScreen;