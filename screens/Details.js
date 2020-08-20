import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { getUser } from '../actions';

class Details extends Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.name
  })
  componentDidMount() {
    this.props.getUser('relferreira');
  }

  render() {
    const { user,loadingProfile } = this.props.user;
    if (loadingProfile) return <Text>Loading...</Text>;
    
    const { name, login } = user;    
    return (
      <View>
        <Text>Name: {name}</Text>
        <Text>Login: {login}</Text> 
      </View>
    );
  }
}

const mapStateToProps = ({ user, loadingProfile }) => ({
  user,
  loadingProfile
});

const mapDispatchToProps = {
  getUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);