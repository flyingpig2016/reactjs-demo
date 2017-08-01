![轮播图](http://img.blog.csdn.net/20170801210958032?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvZmx5aW5ncGlnMjAxNg==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
### 一：需要的熟悉scrollView？
scrollView无疑是移动开发中很重要的一个组件，比如后面会学到的ListView就是继承自它。那么，在开发中比如：焦点图、引导页等地方都需要它。注意：

- scrollView必须有一个确定的高度才能正常工作；
通常有两种做法：
&emsp;&emsp;第一种： 直接给该ScrollView进行设置高度(不建议)；
&emsp;&emsp;第二种： ScrollView中不要加{flex:1}。
- ScrollView内部的其他响应者尚无法阻止ScrollView本身成为响应者.
### 二：scrollView的常用属性

- contentContainerStyle：这些样式会应用到一个内层的内容容器上，所有的子视图都会包裹在内容容器内；
-  horizontal  当此属性为true的时候，所有的的子视图会在水平方向上排成一行，而不是默认的在垂直方向上排成一列。默认值为false。
- keyboardDismissMode enum('none', "interactive", 'on-drag') 
用户拖拽滚动视图的时候，是否要隐藏软键盘。none（默认值），拖拽时不隐藏软键盘。on-drag ：当拖拽开始的时候隐藏软键盘。interactive：软键盘伴随拖拽操作同步地消失，并且如果往上滑动会恢复键盘。安卓设备上不支持这个选项，会表现的和none一样。
- keyboardShouldPersistTaps 
当此属性为false的时候，在软键盘激活之后，点击焦点文本输入框以外的地方，键盘就会隐藏。如果为true，滚动视图不会响应点击操作，并且键盘不会自动消失。默认值为false。
- onScroll 在滚动的过程中，每帧最多调用一次此回调函数。调用的频率可以用scrollEventThrottle属性来控制。
- refreshControl element 
指定RefreshControl组件，用于为ScrollView提供下拉刷新功能。
- removeClippedSubviews bool 
（实验特性）：当此属性为true时，屏幕之外的子视图（子视图的overflow样式需要设为hidden）会被移除。这个可以提升大列表的滚动性能。默认值为true。
- showsHorizontalScrollIndicator bool 
当此属性为true的时候，显示一个水平方向的滚动条。
- showsVerticalScrollIndicator bool 
当此属性为true的时候，显示一个垂直方向的滚动条。
- alwaysBounceHorizontal bool 

当此属性为true时，水平方向即使内容比滚动视图本身还要小，也可以弹性地拉动一截。当horizontal={true}时默认值为true，否则为false。
### 三：轮播图
#### 1.首先确定焦点图样式：
```
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
```
#### 二：然后展示图片
&emsp;&emsp;注意图片地址目录：`F:\wamp\www\07react JS\01\Hello\android\app\src\main\res\drawable`，其中drawable是我自己创建的，里面的图片不能用数组开头，不能随意修改图片的后缀名(也就是不要把jpg格式改为png格式)，否则编译的时候android报错。
```
    renderAllImage(){
        var allImage = [];
        //拿到图像数组
        var imgsArr = ImageData.data; 
        // console.log(imgsArr);
        for(var i=0; i<imgsArr.length; i++){
            // 去出单独的每个对象
            var imgItem = imgsArr[i];
            //创建组件装入数组
            allImage.push(  
                <Image key={i} source={{uri:imgItem.img}}  style={styles.focusImage} />
            )
        }
        return allImage;
    };
```
#### 三：显示下面的五个小圆点
```
    renderPageCicle(){
        var indicatorArr = [];
        var ImgsArr = ImageData.data;
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
    };
```
#### 四：当滚动一帧的时候调用
&emsp;&emsp;也就是可以找出滚动的索引
```
    onAnimatinonEnd(e){
        //1.水平方向上的偏移量
        var offSetX = e.nativeEvent.contentOffset.x;
        //2.求出当前页数
        var currentPage = Math.floor(offSetX / width);
        console.log(currentPage);
        //3.更新状态机，重新绘制ui
        this.setState({
            currentPage:currentPage
        })
    }
```
#### 五：开启定时器，自动滚动
&emsp;&emsp;我们要处理手指滑动的时候和滑动停止的时候滚动效果。其中复杂的处理关系在componentDidMount函数里执行，因为 在调用了render方法后，组件加载成功并被成功渲染出来以后，所要执行的后续操作，一般会在这个函数中处理网络请求等加载数据的操作；因为UI已经成功被渲染出来， 所以放在这个函数里进行请求操作，不会出现UI上的错误。
```
componentDidMount(){
        //开启定时器
        this.startTimer()
    };
        //开始拖拽
    onScrollBeginDrag(){
        //停止定时器
        console.log('beginDrag');
        clearInterval(this.timer) 
    };
    onScrollEndDrag(){ 
        console.log('endDrag');
        this.startTimer();
    }; 
    //开启定时器
    startTimer(){
        //1.拿到scrollView 
        var scrollView = this.refs.scrollView;
        var imageCount = ImageData.data.length;
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
    };
```
