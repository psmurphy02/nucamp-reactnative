import React, { Component } from "react";
import { ScrollView, Text, Button } from "react-native";
import { Card, Avatar, Badge } from "react-native-elements";
import * as Animatable from 'react-native-animatable';

export default class Contact extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             badgeLike: 1
        }
    }
    

    static navigationOptions = {
        title: 'Contact Us'
    }

    addLike() {
        this.setState({badgeLike: this.state.badgeLike+1})
    };

  render() {
    return (
    <ScrollView>
        <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
            <Card 
            title="Contact Information"
            wrapperStyle={{margin: 20}}>
            <Avatar size='medium' rounded icon={{ name: 'home' }} />
            <Badge
                status="error"
                value={this.state.badgeLike}
                containerStyle={{ top: -50, right: 105 }}
            />
            <Button 
                title='Press to Like' 
                    onPress={() => {
                        this.addLike();
                    }}
            />
        
                <Text style={{marginTop: 20, marginBottom: 10}}>
                    {"1 Nucamp Way"}
                    {"\nSeattle, WA 98001"}
                    {"\nU.S.A."}
                </Text>
                <Text>
                    {"Phone: 1-206-555-1234"}
                    {"\nEmail: campsites@nucamp.co"}
                </Text>
            </Card>
        </Animatable.View>
    </ScrollView>
    );
  }
}

// render() {
//     return (
//         <ScrollView>
//             <Card
//                 title="Contact Information"
//                 wrapperStyle={{margin: 20}}>
//                     <Text>1 Nucamp Way</Text>
//                     <Text>Seattle, WA 98001</Text>
//                     <Text style={{marginBottom: 10}}>U.S.A.</Text>
//                     <Text>Phone: 1-206-555-1234</Text>
//                     <Text>Email: campsite</Text>
//                 </Card>
//         </ScrollView>
//     )
// }