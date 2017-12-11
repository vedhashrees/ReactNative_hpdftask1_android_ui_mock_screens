/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Container, Content,Header,Footer, FooterTab, Title, Button, Left, Icon,Right, Body,  Item , Input,Thumbnail ,List,ListItem} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      <Container>
         <Content>
		    <View style={{margin : 10 , padding : 10 }}>
            <Thumbnail source={{uri: 'https://avatarfiles.alphacoders.com/922/92237.jpg'}} />
			<Text style={{color: 'black' , fontSize: 20, fontWeight: 'bold'}}> Shahidh K Muhammed </Text>
			<Text> @shahid_k {'\n'} </Text> 
			
			 <Text style={{color: 'black' , fontWeight: 'bold'}}>
				690  {'\t'}
				<Text style={{color: 'grey'}}>
				  Following {'\t\t'} 
				</Text>
				<Text style={{color: 'black' , fontWeight: 'bold'}}>
				653  {'\t'}
				<Text style={{color: 'grey'}}>
				  Followers {'\n'} 
				</Text>
			  </Text>
			  </Text>
			  <View style={{ borderBottomColor: 'lightgrey', borderBottomWidth: 1 }} />			
			</View>
			
			<List>
            <ListItem icon>
              <Left>
                <FontAwesome style={{color:'grey' , fontSize : 20}} name="user-o" />
              </Left>
              <Body>
                <Text style={{color:'black' , fontSize : 20}}>Profile</Text>
              </Body>
              
            </ListItem>
            <ListItem icon>
              <Left>
                <FontAwesome style={{color:'grey' , fontSize : 20}} name="navicon" />
              </Left>
              <Body>
                <Text style={{color:'black' , fontSize : 20}}>List</Text>
              </Body>
              
            </ListItem>
            <ListItem icon>
              <Left>
                <FontAwesome style={{color:'grey' , fontSize : 25}} name="bolt" />
              </Left>
              <Body>
                <Text style={{color:'black' , fontSize : 20}}>Moments</Text>
              </Body>
              
            </ListItem>
			 <ListItem icon>
              <Left>
                <Icon style={{color:'grey' }} name="ios-browsers-outline" />
              </Left>
              <Body>
                <Text style={{color:'black' , fontSize : 20}}>Highlights</Text>
              </Body>              
            </ListItem>
			 <ListItem >
              
              <Body>
                <Text style={{color:'black' , fontSize : 20}}>Settings and privacy</Text>
              </Body>              
            </ListItem>
			 <ListItem >
              
              <Body>
                <Text style={{color:'black' , fontSize : 20}}>Help Centre</Text>
              </Body>              
            </ListItem>
          </List>
          
        </Content>
		 <Footer >
		 <FooterTab>
		 <Left>
		 <Button  >
            <Icon name="ios-moon-outline" />
            </Button>
		</Left>
		<Right>
		      <Button>
              <Icon name="ios-apps-outline" />
            </Button>
			</Right>
		 </FooterTab>
		 </Footer>
              
             
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
