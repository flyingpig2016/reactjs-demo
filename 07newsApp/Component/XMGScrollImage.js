import React, { Component } from 'react';
import { 
  AppRegistry,  //注册
  StyleSheet,   //样式       
  Text,     //文本组件
  View,     //视图组件
  Image,    //图片组件
  Dimensions,  //获取屏幕信息
  ScrollView
} from 'react-native'; 
var {width} = Dimensions.get('window');
// 引入计时器类库
var TimerMixin = require('react-timer-mixin');

var ScrollImage = React.createClass({
  
    // 注册计时器
    mixins: [TimerMixin],
    getDefaultProps(){ 
        return {
            duration:3000,  
            imageDataArr:[],
        }
    },
    getInitialState(){
        return{
            currentPage : 0,
            title:this.props.imageDataArr[0].title
        }
    },
    render() {      
        return (                                    
            <View style={styles.container}>
                <ScrollView
                    ref="scrollView"
                    horizontal={true}
                    //隐藏水平滚动条
                    showsHorizontalScrollIndicator={false} 
                    //自动分页
                    pagingEnabled={true}
                    //当一帧滚动结束
                    onMomentumScrollEnd={(e)=>this.onAnimatinonEnd(e)}
                    //开始拖拽 
                    onScrollBeginDrag = {()=>this.onScrollBeginDrag()}
                    //停止拖拽
                    onScrollEndDrag = {()=>this.onScrollEndDrag()}
                > 
                    {this.renderAllImage()}
                </ScrollView>  
                {/*返回指示器 */}
                <View style={styles.pageViewStyle}>
                    {this.renderPageCicle()}
                </View>
            </View> 
        )
    },
    componentDidMount(){
        //开启定时器
        this.startTimer()
    },
        //开始拖拽
    onScrollBeginDrag(){
        //停止定时器
        // console.log('beginDrag');
        this.clearInterval(this.timer) 
    },
    onScrollEndDrag(){ 
        // console.log('endDrag');
        this.startTimer();
    },
    //开启定时器
    startTimer(){
        //1.拿到scrollView 
        var scrollView = this.refs.scrollView;
        var imageCount = this.props.imageDataArr.length;
        //2.添加定时器
        this.timer = setInterval(()=>{
            //2.1设置原点
            var activePage = 0;
            //2.2判断
            if((this.state.currentPage+1) >= imageCount){
                activePage = 0;
            }else{
                activePage = this.state.currentPage+1;
            }
            //2.3更新状态机
            this.setState({ 
                currentPage : activePage,
            }) 
            //2.4scrollView滚动起来
            var offsetX = activePage * width;
            scrollView.scrollResponderScrollTo({x:offsetX,y:0,animated:true});
        },this.props.duration); 
    },
    renderAllImage(){
        var allImage = [];
        //拿到图像数组
        var imgsArr = this.props.imageDataArr; 
        // console.log(imgsArr);
        for(var i=0; i<imgsArr.length; i++){
            // 去出单独的每个对象
            var imgItem = imgsArr[i];
            //创建组件装入数组
            allImage.push(  
                <View key={i}>
                    <Image source={{uri:imgItem.imgsrc}}  style={styles.focusImage} />
                    <Text style={styles.headerTextStyle}>{imgItem.title}</Text>
                </View>
            )
        }
        return allImage;
    },
    renderPageCicle(){
        var indicatorArr = [];
        var ImgsArr = this.props.imageDataArr;
        var styleChange;
        for(var i=0; i<ImgsArr.length; i++){
            //把原点装入数组
            styleChange = (i==this.state.currentPage ? styles.circleStyle : styles.circleDefaultStyle)
            indicatorArr.push(
                <Text key={i} style={styleChange}>
                    &bull;
                </Text>
            )
        }
        return indicatorArr;
    },

    //当一帧滚动结束时候调用 ios适用，但是拖动的时候也适用
    onAnimatinonEnd(e){
        //1.水平方向上的偏移量
        var offSetX = e.nativeEvent.contentOffset.x;
        //2.求出当前页数
        var currentPage = Math.floor(offSetX / width);
        // console.log(currentPage);
        //3.更新状态机，重新绘制ui
        this.setState({
            currentPage:currentPage,
            title:this.props.imageDataArr[currentPage].title
        })
    }
});

const styles = StyleSheet.create({
    container:{
        // marginTop:25
    },
    focusImage:{
        width:width,
        height:120,
    },
    pageViewStyle:{
        flexDirection:'row',
        alignItems:'center',
        width:width*0.15,
        height:25,
        position:'absolute',
        bottom:0,
        right:0
    },
    headerTextStyle:{
        position:'absolute',
        bottom:5,
        left:10,
        color:'#fff'
    },
    circleDefaultStyle:{
       fontSize:25,
       color:'#fff'
    },
    circleStyle :{
        fontSize:25,
        color : 'orange'
    }
})
module.exports = ScrollImage;