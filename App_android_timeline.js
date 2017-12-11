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
import { Container, Content,Header,Footer, FooterTab, Title, Button, Left, Icon,Right, Body, Tabs,TabHeading,Tab, Item , Input,Thumbnail ,List,ListItem} from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Timeline } from 'react-twitter-widgets';
import Tab3 from './Tab1'; 

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
       <View style={{padding : 5 ,flexDirection: 'row'}}>
		<Thumbnail source={{uri: 'https://avatarfiles.alphacoders.com/922/92237.jpg'}} />
		 <Text style={{padding:10, color:'black' , fontSize:20 , lineHeight:20 }}>Home</Text>
		 
		 </View>
		 <Tabs >
		  <Tab heading={ <TabHeading><Icon name="ios-home-outline" /></TabHeading>}>
            <Tab3 />
          </Tab>
		   <Tab  heading={ <TabHeading><Icon name="ios-search-outline" /></TabHeading>}>
            <Tab3 />
          </Tab>
		   <Tab heading={ <TabHeading><Icon name="ios-notifications-outline" /></TabHeading>}>
            <Tab3 />
          </Tab>
		   <Tab heading={ <TabHeading><Icon name="ios-mail-outline" /></TabHeading>}>
            <Tab3 />
          </Tab>
		  </Tabs>
		  
		  
		  <Footer >
		  <FooterTab  >
			  <Left>
				  <Button transparent >
					<Text style={{ fontSize:20 , margin:10 ,color: '#3399ff' }}> 		All 
					</Text>
				  </Button> 
			  
			  </Left>
			  <Button transparent>
					<Text style={{ fontSize:20 , color: 'grey' }}> Mentions 
					</Text>
				  </Button> 
            <Right>
            <Button>
              <Feather  style = {{fontSize : 25 , color:'#3399ff' ,padding:20 }} name="settings" />
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
