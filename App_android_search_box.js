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
import { Container, Content,Header,Footer, FooterTab, Title, Button, Left, Icon,Right, Body,  Item , Input } from 'native-base';
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
        <Content searchBar rounded>
          <Item>
		  
            <Feather style={{fontSize : 25 , color:'#3399ff', margin:10}} name="arrow-left" />
            <Input placeholder="  Search Twitter " />            
          </Item>        
          
        </Content>
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
