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
  View,Image
} from 'react-native';
import { Container, Content,Header,Footer, FooterTab, Title, Button, Left, Icon,Right, Body, List,ListItem,Thumbnail, Item , Input } from 'native-base';
import Feather from 'react-native-vector-icons/Feather'

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
       <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://i.pinimg.com/originals/dc/e7/a1/dce7a1d08fd2baf56a97da3ff84fab08.jpg' }} />
              </Left>
			  
              <Body>
                <Text style={{fontWeight:'bold',color:'black'}}>Kumar Pratik 
				<Text style={{color:'grey'}}>@kumar
				</Text>
				</Text>
                <Text note>Doing what you like will always keep you happy . .{'\n'}</Text>
				<Image style={{width: 200, height: 100 }}
					source={{uri: 'https://pbs.twimg.com/media/DNKfft0XUAELCHy.jpg'}}  />  
					
					
		<View style={{ paddingTop : 5 , paddingBottom  : 30 , flex:1 , flexDirection:'row' , justifyContent:'space-around' }}>
		  <Button transparent light  >
            <Icon style={{color:'grey'}} name='ios-chatbubbles-outline' />
			<Text>60</Text>
            
          </Button>
          <Button  transparent light >
             <Icon style={{  color:'grey' }}name='ios-git-compare' />
			 <Text>12</Text>
          </Button>
          <Button transparent light>
            <Icon style={{color:'grey' }} name='ios-heart-outline' />
           
          </Button>
		   <Button transparent light>
            <Icon style={{color:'grey' }} name='ios-mail-outline' />           
          </Button>
		  </View> 
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>			 
			  
            </ListItem>
			
			<ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://pbs.twimg.com/profile_images/2158565802/scooby_doo.jpg' }} />
              </Left>
			  
              <Body>
                <Text style={{fontWeight:'bold',color:'black'}}>Kumar Pratik 
				<Text style={{color:'grey'}}>@kumar
				</Text>
				</Text>
                <Text note>Doing what you like will always keep you happy . .{'\n'}</Text>
				<Image style={{width: 200, height: 150}}
					source={{uri: 'http://www.picgifs.com/graphics/s/scooby-doo/graphics-scooby-doo-124796.jpg'}} />
<View style={{ paddingTop : 5 , paddingBottom  : 30 , flex:1 , flexDirection:'row' , justifyContent:'space-around' }}>
		  <Button transparent light  >
            <Icon style={{color:'grey'}} name='ios-chatbubbles-outline' />
			<Text>60</Text>
            
          </Button>
          <Button  transparent light >
             <Icon style={{  color:'grey' }}name='ios-git-compare' />
			 <Text>12</Text>
          </Button>
          <Button transparent light>
            <Icon style={{color:'grey' }} name='ios-heart-outline' />
           
          </Button>
		   <Button transparent light>
            <Icon style={{color:'grey' }} name='ios-mail-outline' />           
          </Button>
		  </View>              


			 </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
			 
			  
            </ListItem>
          </List>
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
