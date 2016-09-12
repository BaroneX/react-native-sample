/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class TextSample extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.textStyle}
      /* allowFontScaling 只支持iOS 是否支持缩放*/
      allowFontScaling={true}
      /* numberOfLines  文本行数 0为多行*/
      numberOfLines={0}
      /* onLayout  当挂载或者布局变化以后调用*/
      onLayout={(val)=> console.log(val) }
      /*onPress 当文本被点击以后调用此回调函数  */
      onPress={()=> console.log("press") }
      >
      Welcome to React Native!
      Text Sample!
      </Text>
      </View>
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
  textStyle: {
    fontSize: 30,//字体大小
    textAlign: 'center',//对齐方式
    color:'red',//字体颜色
    //fontFamily:'',//字体名称
    fontStyle:'normal',//字体风格 'normal', 'italic'
    fontWeight:'normal',// 字体粗细("normal", 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900')
    letterSpacing:10, //字符间距
    lineHeight:50, //行高
    textAlign:'center',   //文本对其方式("auto", 'left', 'right', 'center', 'justify'),其中'justify'值仅iOS支持
    textAlignVertical:'top',//文本竖直对齐方式(只支持安卓)('auto', 'top', 'bottom', 'center')
    textDecorationColor:'blue',//下划线颜色
    textDecorationLine:'line-through',//下划线位置("none", 'underline', 'line-through', 'underline line-through')
    textDecorationStyle:'dotted',//下划线样式("solid", 'double', 'dotted', 'dashed')
    writingDirection:'auto',//("auto", 'ltr', 'rtl')

  },

});

module.exports = TextSample;
