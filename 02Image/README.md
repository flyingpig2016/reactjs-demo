### 一：Image组件的基本用法
#### 1.1从当前项目(即本地)中加载图片
```
	<View style={styles3.container}>
		<Text>加载本地图片</Text>
		<Image source={require('./img/1.jpg')} style={styles3.img1} />
	</View>
```
这时候的图片可以放在根目录，也就是和index.andorid.js或者index.ios.js一个目录。该图片资源文件的查找和JS模块相似，该会根据填写的图片路径相对于当前的js文件路径进行搜索，此外，React Naive的Packager会根据平台选择相应的文件，例如:my_icon.ios.png和my_icon.android.png两个文件(命名方式android或者ios)，会分别根据android或者ios平台选择相应的文件。
#### 1.2从APP中的图片加载(即android或ios目录里面的图片)
&emsp;&emsp;首先我们要了解一件事情,我们应该从哪个目录加载图片：

- android中，我们在android/app/src/main/res/下创建一个文件夹drawable，然后，我们一定要重新编译一下android后，才能在代码中使用。命名图片的时候必须开头用字母，否则编译不成；
- ios中，我们在目录ios\Hello\Images.xcassets下创建一个img文件夹
两者调用的方法都一样.
然后我们在两者的文件夹下面都加入qiu.jpg图片，调用方法为：
```
<View style={styles3.container}>
	<Image source={{uri:'qiu'}} style={styles3.img1} />
</View>
```
#### 1.3从网络中加载图片
```
<View style={styles3.container}>
	<Text>加载网络图片</Text>
	        <Image source={{uri:'https://www.baidu.com/img/bd_logo1.png'}} style={styles3.baidu} />
</View>
```
#### 1.4 设置图片为背景

```
	<View style={styles3.container}>
        <Image source={{uri:'hhttps://www.baidu.com/img/bd_logo1.png'}} style={styles3.baidu2}>
          <Text>设置图片为背景</Text>
        </Image>
     </View>
```
效果如下图：
![这里写图片描述](http://img.blog.csdn.net/20170725171732201?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvZmx5aW5ncGlnMjAxNg==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

### 二：Image组件的常用属性
2.1 属性方法

- onLayout(function) ： 
   当Image布局发生改变的，会进行调用该方法，调用的代码为:{nativeEvent: {layout: {x, y, width, height}}}.
- onLoad (function)
   当图片加载成功之后，回调该方法
-   onLoadEnd (function)
   当图片加载失败回调该方法，该不会管图片加载成功还是失败
-   onLoadStart (fcuntion)
   当图片开始加载的时候调用该方法
-  resizeMode
   缩放比例,可选参数('cover', 'contain', 'stretch') 该当图片的尺寸超过布局的尺寸的时候，会根据设置Mode进行缩放或者裁剪图片
-   source{uri:string}
   进行标记图片的引用，该参数可以为一个网络url地址或者一个本地的路径

2.2 样式风格属性

-   FlexBox  支持弹性盒子风格
-  Transforms  支持属性动画
-   backgroundColor 背景颜色
-   borderColor     边框颜色
-   borderWidth 边框宽度
-  borderRadius  边框圆角
-  overflow 设置图片尺寸超过容器可以设置显示或者隐藏('visible','hidden')
-  tintColor  颜色设置
-  opacity 设置不透明度0.0(透明)-1.0(完全不透明)
示例css如下：

```
const styles3 = StyleSheet.create({
  container:{
    flex:1,
  },
  img1 : {
    width:'100%',
    flex : 1,
  },
  baidu : {
    flex : 1,
  },
  baidu2 : {
    flex : 1,
    width:100,
    height:100,
    resizeMode : Image.resizeMode.stretch,
  }
})
```
githiub上index.android.js源码：[image组件用法](https://github.com/flyingpig2016/reactjs-demo/tree/master/02Image)