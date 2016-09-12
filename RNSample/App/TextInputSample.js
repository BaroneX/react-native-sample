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
  View,
  TextInput
} from 'react-native';

class TextInputSample extends Component {

  constructor(props){
    super(props);
    this.state = {
      textInputValue:"textInputValue",
    };
  }

  render() {

    return (
      <View style={styles.container}>
      <TextInput
      style={{height: 40, borderColor: 'gray', borderWidth: 1,margin:10}}
      onChangeText={(textInputValue) => this.setState({textInputValue})}
      value={this.state.textInputValue}
      /*
      autoCapitalize
      控制TextInput是否要自动将特定字符切换为大写：
      characters: 所有的字符。
      words: 每个单词的第一个字符。
      sentences: 每句话的第一个字符（默认）。
      none: 不自动切换任何字符为大写。
      */
      autoCapitalize="characters"
      /* autoCorrect 自动修正。默认值是true */
      autoCorrect={true}
      /* autoFocus 如果为true，在componentDidMount后会获得焦点。默认值为false */
      autoFocus={true}
      />
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

module.exports = TextInputSample;
