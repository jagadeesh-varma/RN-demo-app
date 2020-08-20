import React, { Component } from 'react';
import { Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Button,
  ImageBackground
} from 'react-native';
var {height, width } = Dimensions.get('window');
let ScreenHeight = Dimensions.get("window").height;
import Swiper from 'react-native-swiper';
const banner = require('./../assets/banner.json');

export default class App extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      dataBanner:[],
      dataCategories:[],
      trending:[],
      trending2:[],
	  trending3:[]      
    }
  }

  componentDidMount(){
    //console.warn(banner.banner);
     this.setState({
        isLoading: false,
        dataBanner: banner.banner,
        dataCategories: banner.categories,
        trending:banner.trendings,
        trending2:banner.trendings2,
        trending3:banner.trendings3,
        selectCatg:0
      });
    // const url = "http://tutofox.com/foodapp/api.json"
    // return fetch(url)
    // .then((response) => response.json())
    // .then((responseJson) => {

    //   this.setState({
    //     isLoading: false,
    //     dataBanner: responseJson.banner,
    //     dataCategories: responseJson.categories,
    //     selectCatg:0
    //   });

    // })
    // .catch((error) =>{
    //   console.error(error);
    // });
    this.forceUpdate()
  }

  _renderItem(item){
    return(
      <TouchableOpacity style={[styles.divCategorie]}
      onPress={()=>this.setState({selectCatg:item.id})}>
        <Image
          style={{width:100,height:65,borderWidth: 1,borderColor: 'rgb(234, 234, 236)',overlayColor: 'white',}}
          resizeMode="contain"
          source={{uri : item.image}} />
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.root}>
        <View style={{height:height,width:'100%'}}>
            <ScrollView>
              <View> 
                  <Swiper style={{height:width/800*356}}  showsButtons={false} autoplay={true} autoplayTimeout={2} key={this.state.dataBanner.length}>
                    {
                      this.state.dataBanner.map((itembann,index)=>{
                        return(
                          <Image  key={index} style={styles.imageBanner} resizeMode="contain" source={{uri:itembann}} />
                        )
                      })
                    }
                  </Swiper>
              </View>
              <View style={{width:width,paddingVertical:10, backgroundColor:'white'}}>
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={this.state.dataCategories}
                  renderItem={({ item }) => this._renderItem(item)}
                  keyExtractor = { (item,index) => index.toString() }
                />
              </View>
              <View>
                <View style={{height:(width/2)/380*579,flexDirection:'row'}}>
                      <Image source={{uri:"https://rukminim1.flixcart.com/flap/380/580/image/9a94e7950cf375b7.jpg"}} style={{flex:1, height: undefined, width: undefined}} resizeMode="contain"/>
                      <Image source={{uri:"https://rukminim1.flixcart.com/flap/380/580/image/92c7763c800108bc.jpg"}} style={{flex:1, height: undefined, width: undefined}} resizeMode="contain"/>                      
                </View>
              </View>              
              <View style={{marginTop:10}}>
                <View>
                  <ImageBackground source={{uri: "https://rukminim1.flixcart.com/flap/1080/240/image/c9717d95a36f4d70.jpg"}} style={{height:240*width/1080,width:undefined}}>
                    <View style={styles.promoHeader}>
                      <View style={{flexDirection:'row'}}>
                        <Text style={styles.promoHeaderTite}>Trending Offers</Text>
                        <View style={{width:'30%',alignItems:'flex-end'}}>
      			                <TouchableOpacity>
      			                    <Text style={styles.viewAllBtn}>View All &nbsp;> </Text>
      			        		</TouchableOpacity>                
                        </View>
                      </View>                 
                    </View>
                  </ImageBackground>
                </View>
                <View style={styles.promoContainer}>
                  <View style={styles.promoGrid}>
                    <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',backgroundColor:'#fff'}}>
	                    {
	                      this.state.trending.map((item,index)=>{
	                        return(
			                    <TouchableOpacity  style={[styles.trendingItem,{borderRightWidth: (index%2) == 0 ? 0.3: 0,borderBottomWidth: (index==0 || index == 1) ? 0.3: 0 }]} onPress={()=>this.props.navigation.navigate('Details',{id:index,name:item.title})}>
          									<Image source={{uri:item.image}} style={styles.trendListImg} resizeMode="contain"/>
          									<Text  numberOfLines={1} style={styles.trendingTitle}>{item.title}</Text>
          									<Text style={styles.trendingSubTitle}>{item.subTitle}</Text> 
			                    </TouchableOpacity> 
	                        )
	                      })
	                    }    
                    </View>
                  </View>
                </View>
              </View>              
              <View style={{marginTop:20}}>
                <View>
                  <ImageBackground source={{uri: "https://rukminim1.flixcart.com/flap/381/85/image/9b566bca10a5d8c5.jpg"}} style={{height:240*width/1080,width:undefined}}>
                    <View style={styles.promoHeader}>
                      <View style={{flexDirection:'row'}}>
                        <Text style={styles.promoHeaderTite}>Best of Electronics</Text>
                        <View style={{width:'30%',alignItems:'flex-end'}}>
                            <TouchableOpacity>
                                <Text style={styles.viewAllBtn}>View All &nbsp;> </Text>
                        </TouchableOpacity>                
                        </View>
                      </View>                 
                    </View>
                  </ImageBackground>
                </View>
                <View style={styles.promoContainer2}>
                  <View style={styles.promoGrid}>
                    <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',backgroundColor:'#fff'}}>
                      {
                        this.state.trending2.map((item,index)=>{
                          return(
                          <TouchableOpacity  style={[styles.trendingItem,{borderRightWidth: (index%2) == 0 ? 0.3: 0,borderBottomWidth: (index==0 || index == 1) ? 0.3: 0 }]} onPress={()=>this.props.navigation.navigate('Details',{id:index,name:item.title})}>
                            <Image source={{uri:item.image}} style={styles.trendListImg} resizeMode="contain"/>
                            <Text  numberOfLines={1} style={styles.trendingTitle}>{item.title}</Text>
                            <Text style={styles.trendingSubTitle}>{item.subTitle}</Text> 
                          </TouchableOpacity> 
                          )
                        })
                      }    
                    </View>
                  </View>
                </View>
              </View>
              <View style={{marginTop:20}}>
                <View style={{height:(width/2)/380*579,flexDirection:'row'}}>
                      <Image source={{uri:"https://rukminim1.flixcart.com/flap/360/548/image/60f02139cdb63341.jpg"}} style={{flex:1, height: undefined, width: undefined}} resizeMode="contain"/>
                      <Image source={{uri:"https://rukminim1.flixcart.com/flap/360/548/image/60658f47da59cdf4.jpg"}} style={{flex:1, height: undefined, width: undefined}} resizeMode="contain"/>                      
                </View>
              </View>
              <View style={{marginTop:10}}>
                <View>
                  <ImageBackground source={{uri: "https://rukminim1.flixcart.com/reco/381/85/images/Reco-99e3f2.jpg"}} style={{height:240*width/1080,width:undefined}}>
                    <View style={styles.promoHeader}>
                      <View style={{flexDirection:'row'}}>
                        <Text style={styles.promoHeaderTite}>Latest Launches</Text>
                        <View style={{width:'30%',alignItems:'flex-end'}}>
                            <TouchableOpacity>
                                <Text style={styles.viewAllBtn}>View All &nbsp;> </Text>
                        </TouchableOpacity>                
                        </View>
                      </View>                 
                    </View>
                  </ImageBackground>
                </View>
                <View style={styles.promoContainer3}>
                  <View style={styles.promoGrid}>
                    <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',backgroundColor:'#fff'}}>
                      {
                        this.state.trending3.map((item,index)=>{
                          return(
                          <TouchableOpacity  style={[styles.trendingItem,{borderRightWidth: (index%2) == 0 ? 0.3: 0,borderBottomWidth: (index==0 || index == 1) ? 0.3: 0 }]} onPress={()=>this.props.navigation.navigate('Details',{id:index,name:item.title})}>
                            <Image source={{uri:item.image}} style={styles.trendListImg} resizeMode="contain"/>
                            <Text  numberOfLines={1} style={styles.trendingTitle}>{item.title}</Text>
                            <Text  numberOfLines={1} style={styles.trendingSubTitle}>{item.subTitle}</Text> 
                          </TouchableOpacity> 
                          )
                        })
                      }    
                    </View>
                  </View>
                </View>
              </View>                                          
              <View style={{marginTop:145}}></View>
            </ScrollView>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  imageBanner: {
    height:width/800*356,
    width:width,
  }, 
  divCategorie:{
    marginLeft:10, 
    alignItems:'center',
  },
  container:{
    flex:1,
    backgroundColor: '#f1f2f4',
    flexDirection:'row',
    flexWrap: 'nowrap',
  },
  promotions: {
    flexDirection: "row",
    flexWrap: 'wrap',
    width: '100%',
    height: 310,
    backgroundColor: '#fff',
    marginTop:10,
    marginBottom:10
  },
  promotionItem:{
    width: '50%',
    height: 310,
  },
  promotionItemInner:{
    flex: 1,
  },
  promoContainer:{
    backgroundColor:'linear-gradient(rgb(181, 228, 209), rgb(181, 228, 209))',
    width:'100%',
    height:350
  },
  promoContainer2:{
    backgroundColor:'linear-gradient(rgb(255, 208, 199), rgb(255, 208, 199))',
    width:'100%',
    height:350
  },
  promoContainer3:{
    backgroundColor:'linear-gradient(rgb(153, 227, 242), rgb(153, 227, 242))',
    width:'100%',
    height:350
  },  
  promoGrid: {
    backgroundColor:'#fff',
    flexDirection:'row',
    height:350,
    margin:10,
    borderRadius:4,
    shadowColor: "#000",
    shadowOffset: {width: 0,height: 2,},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
    backgroundColor:'#ddd'
  },
  promoGridItem:{
    width:'50%',
    height:350/2,
    backgroundColor:'red',
  },
  root:{
    flex:1,
    flexDirection:'column',
    backgroundColor:'#f2f2f2',
  },
    box1: {
    height: 200,
    backgroundColor: 'blue'
  },
  box2: {
    height: 200,
    backgroundColor: 'purple'
  },
  viewbtn: {
    width:'20'
  },
  promoHeader:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingRight:20,
    paddingLeft:20
  },
  promoHeaderTite: {
    fontSize:20,
    width:'70%',
    paddingVertical:3
  },
  viewAllBtn:{
  	backgroundColor:'rgb(0, 132, 255) none repeat scroll 0% 0%',
  	color:'#fff',
  	paddingTop: 8,
    paddingBottom: 8,
    paddingLeft:8, 
    paddingRight:8,   
  	borderRadius:3,
  	fontSize:14,
    fontWeight: "bold"
  },
  trendListImg:{
	flex:1,
	height: undefined, 
	width: 80,
  },
  trendingSubTitle:{
  	color:'#388E3C',
  	fontSize:15,
    paddingTop: 5
  },
  trendingItem:{
  	width:'50%',
  	height:350/2,
  	justifyContent:'center',
  	alignItems:'center',
  	padding:15,
  	borderColor:'#ddd'
  },
  trendingTitle:{
    color:'#333',
    paddingTop:10,
    fontSize:13
  }
});