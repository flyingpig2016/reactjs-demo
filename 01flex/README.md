## flex布局
### flex布局概述？
&emsp;&emsp;flex是flexible Box的缩写，意为“弹性布局”，用来为盒模型提供最大的灵活性，设置为flex布局之后，子元素的**float、clear、vertical-align**属性将失效。
&emsp;&emsp;任何一个容器都可以指定为flex布局
```
#box1{
    display : flex;
    width:300px;
    height:100px;
}
```
其实，总体上来说，flex布局分为两类：父容器属性和子容器属性
### 一：父容器属性
&emsp;&emsp; 父容器属性用来控制子元素的显示方式，有6种：
1. flex-direction ：设置主轴(就是x轴)的方向，默认row，x轴从左到右；
2. flex-wrap ： 子元素换行方式，默认nowrap；
3. flex-fow ： flex-direction和flex-wrap的简写，默认row nowrap；
4. justify-content ： 子元素在主轴上的对齐方式，默认flex-start左对齐；
5. align-items ： 定义项目在交叉轴上如何对齐(就是y轴)
6. align-content ： 定义了多根轴线的对齐方式。

#### 1. flex-direction 属性
&emsp;&emsp;决定主轴(x轴)的方向，有四个属性：
- row（默认值）：主轴为水平方向，起点在左端。   
- row-reverse：主轴为水平方向，起点在右端。
- column：主轴为垂直方向，起点在上沿。
- column-reverse：主轴为垂直方向，起点在下沿。
用法：
```
    #container{
        display: flex;
        /* flex-direction: row | row-reverse | column | column-reverse; */
        width:300px;
        height:100px;
        border: 1px solid #000;
    }
    .inner{
        width:100px;
        background:orange;
        margin:10px;
    }
```
```
    <div id="container">
        <div class="inner">1</div>
        <div class="inner">2</div>
        <div class="inner">3</div>
    </div>
```
对应的样式：
![flex-direction](./img/flex-direction.png)
#### 2.flex-wrap 属性
&emsp;&emsp;决定子元素(也称为项目)的换行方式
&emsp;&emsp;默认情况下，项目都排在一条线上（即nowrap；）上。flex-wrap属性定义，如果一条轴线排不下，就可以设置另起一行(wrap).
```
    #container{
        display: flex;
        /* flex-wrap: wrap | nowrap | wrap-reverse; */
        width:300px;
        height:100px;
        border: 1px solid #000;
    }
    .inner{
        width:100px;
        background:orange;
        margin:10px;
    }
```
默认：nowrap 不换行
![nowrap](./img/nowrap.png)

wrap ： 换行

![wrap](./img/wrap.jpg)

wrap-reverse ：换行，第二行在第一行上面，从左到右
![wrap-reverse](./img/wrap-reverse.jpg)

### 3. flex-fow 属性
&emsp;&emsp;flex-direction和flex-wrap的简写，默认row

### 4. justify-content 属性
&emsp;&emsp;子元素在主轴上的对齐方式，默认flex-start左对齐；

- flex-start ： 默认，左对齐
- flex-end ： 右对齐
- center ： 居中对齐
- space-between ： 两端对齐，子元素(项目)之间间隔相等
- space-around ： 每个子元素两侧的间隔相等。所以，子元素之间的间隔比子元素与边框的间隔大一倍。
```
    #container{
        display: flex;
        /* justify-content: flex-start | flex-end | center | space-between | space-around; */
        justify-content: space-around;
        width:300px;
        height:100px;
        border: 1px solid #000;
    }
    .inner{
        width:60px;
        background:orange;
        border:1px solid #fff;
    }  
```
flex-start:

![flex-start](./img/flex-start.jpg)

flex-end : 

![flex-end](./img/flex-end.jpg)

center : 

![center](./img/center.jpg)

space-between : 

![space-between](./img/space-between.jpg)

space-around ：

![spance-around](./img/space-around.jpg)

### 5. align-items 属性
&emsp;&emsp;定义子元素在交叉轴上如何对齐
- flex-start：交叉轴的起点对齐;
- flex-end：交叉轴的终点对齐;
- center：交叉轴的中点对齐;
- baseline: 项目的第一行文字的基线对齐,注意观察第一行文字的位置;
- stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度.
```
    #container{
        display: flex;
        /* align-items: flex-start | flex-end | center | baseline | stretch; */
        align-items: stretch ;
        width:300px;
        height:250px;
        border: 1px solid #000;
    }
    .inner{
        width:60px;
        height:50px;
        background:orange;
        border:1px solid #fff;
    }
```
flex-start : 

![flex-start](./img/align-flex-start.jpg)

flex-end : 

![flex-end](./img/align-flex-end.jpg)

center : 

![center](./img/align-center.jpg)


baseline : 注意，测试stretch的时候需要把div这样设置：
```
    <div id="container">
        <div class="inner" style="height:200px;line-height:200px;">1</div>
        <div class="inner">2</div>
        <div class="inner">3</div>
    </div>
```

![baseline](./img/baseline.jpg)

stretch：注意，测试stretch的时候需要去掉高度，然后看效果：

![stretch](./img/stretch.jpg)

### 6. align-content 属性
&emsp;&emsp;属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用.
- flex-start：与交叉轴的起点对齐。
- flex-end：与交叉轴的终点对齐。
- center：与交叉轴的中点对齐。
- space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
- space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
- stretch（默认值）：轴线占满整个交叉轴。
