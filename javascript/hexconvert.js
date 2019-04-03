// jQuery 语法： $(selector).action();
// js 字符转ascii码：  var str = 'A';   str.charCodeAt();
// js ascii码转字符：  String.fromCharCode(0x60 + 1);    a


// error : alert(10 + 0.2 + 0.04);          10.239999999999998;                     toFixed(6);
// error : 字符与数字大小比较有误                                                       Number(str);
        

// alert('hexConvert');


// 加入语音功能


// radio 选项改变事件处理
numHex2.onchange = function(){
    // numHex.options[0].setAttribute("selected", true);
    numHex.options[0].selected = true;
    // alert(numHex.options[0].value);
}
 
numHex4.onchange = function(){
    numHex.options[2].selected = true;
}

numHex8.onchange = function(){
    numHex.options[6].selected = true;
}

numHex10.onchange = function(){
    numHex.options[8].selected = true;
}

numHex16.onchange = function(){
    numHex.options[14].selected = true;
}

numHex32.onchange = function(){
    numHex.options[30].selected = true;
}

resultHex2.onchange = function(){           // result
    resultHex.options[0].selected = true;
}

resultHex4.onchange = function(){
    resultHex.options[2].selected = true;
}

resultHex8.onchange = function(){
    resultHex.options[6].selected = true;
}

resultHex10.onchange = function(){
    resultHex.options[8].selected = true;
}

resultHex16.onchange = function(){
    resultHex.options[14].selected = true;
}

resultHex32.onchange = function(){
    resultHex.options[30].selected = true;
}


// select 选项改变事件
numHex.onchange = function(){
    // alert(numHex.value);

    // 获取当前radio 选中值
    // var selectHex = $('input:radio[name="numHex"]:checked').val();
    // var selectHex = $("input[type='radio']:checked").val();
    // var selectHex = $("input:radio:checked").val();
    // alert(selectHex);

    if(numHex.value === 'hex2'){
        // alert(numHex2.checked);
        numHex2.checked = true;
        // alert(numHex2.checked);
    }else if(numHex.value === 'hex4'){
        numHex4.checked = true;
    }else if(numHex.value === 'hex8'){
        numHex8.checked = true;
    }else if(numHex.value === 'hex10'){
        numHex10.checked = true;
    }else if(numHex.value === 'hex16'){
        numHex16.checked = true;
    }else if(numHex.value === 'hex32'){
        numHex32.checked = true;
    }else{
        // alert($('input:radio[name="numHex"]:checked'));       // error 
        var selectHex = $('input:radio[name="numHex"]:checked').val();
        if(selectHex !== undefined){
            selectHex = "numH" + selectHex.substring(1);
            // alert(selectHex);
            document.getElementById(selectHex).checked = false;
        }
    }
}

resultHex.onchange = function(){        // result
    // 获取当前radio 选中值
    // var selectHex = $('input:radio[name="resultHex"]:checked').val();
    // alert(selectHex);

    if(resultHex.value === 'hex2'){
        resultHex2.checked = true;
    }else if(resultHex.value === 'hex4'){
        resultHex4.checked = true;
    }else if(resultHex.value === 'hex8'){
        resultHex8.checked = true;
    }else if(resultHex.value === 'hex10'){
        resultHex10.checked = true;
    }else if(resultHex.value === 'hex16'){
        resultHex16.checked = true;
    }else if(resultHex.value === 'hex32'){
        resultHex32.checked = true;
    }else{
        // $('input:radio[name="resultHex"]:checked').checked = false;      // error
        var selectHex = $('input:radio[name="resultHex"]:checked').val();
        if(selectHex !== undefined){
            selectHex = "resultH" + selectHex.substring(1);
            // alert(selectHex);
            document.getElementById(selectHex).checked = false;
        }
    }
}




// 栈的定义与实现
function Stack(){
    this.dataStore = [];
    this.top = 0;
    this.pop = pop;
    this.push = push;
    this.peek = peek;
    this.length = length;
    this.clear = clear;
}

function pop(){
    return this.dataStore[-- this.top];
}

function push( element ){
    this.dataStore[this.top ++] = element;
}

function peek(){
    if(this.top > 0){
        return this.dataStore[this.top - 1];
    }else{
        return 'Empty';
    }
}

function length(){
    return this.top;
}

function clear(){
    delete this.dataStore;
    this.dataStore = [];
    this.top = 0;
}


// 将科学计数法转为数字
/*function toNonExponential(num) {
    var m = num.toExponential().match(/\d(?:\.(\d*))?e([+-]\d+)/);
    return num.toFixed(Math.max(0, (m[1] || '').length - m[2]));
}*/


// 任意进制转换为10进制
function convertTo10(hex, value){
    if(Number(hex) == 10){             // 优化10进制转换
        var Char = /[a-z]/i;            // 判断是否有大小写字母
        if(Char.test(value)){
            alert('数字或字母溢出进制上限');
            throw SyntaxError();
        }
        return value;
    }
    var result = 0;
    var integer = '';           // 整数
    var decimal = '';           // 小数
    var index = String(value).indexOf('.');
    if(index === -1){           // 分割小数
        integer = value;
    }else{
        integer = value.substring(0, index);            // 0 ~ index - 1
        decimal = value.substring(index + 1);
    }
    for(var i=0; i<integer.length; i++){                // 处理整数部分
        var temp = integer[i];
        var cLittle = /[a-z]/;                            // 判断是否是小写字母
        var cBig = /[A-Z]/;                               // 判断收否是大写字母
        if(cLittle.test(temp)){
            temp = temp.charCodeAt() - 'a'.charCodeAt() + 10;
        }else if(cBig.test(temp)){
            temp = temp.charCodeAt() - 'A'.charCodeAt() + 10;
        }
        if(Number(temp) >= Number(hex)){
            alert(temp + '     ' + hex);
            alert('数字或字母溢出进制上限');
            throw SyntaxError();
        }
        result += temp * Math.pow(hex, integer.length - i - 1);
    }
    for(var i=0; i<decimal.length; i++){                // 处理小数部分
        var temp = decimal[i];
        var cLittle = /[a-z]/;
        var cBig = /[A-Z]/;
        if(cLittle.test(temp)){
            temp = temp.charCodeAt() - 'a'.charCodeAt() + 10;
        }else if(cBig.test(temp)){
            temp = temp.charCodeAt() - 'A'.charCodeAt() + 10;
        }
        if(Number(temp) >= Number(hex)){
            alert('数字或字母溢出进制上限');
            throw SyntaxError();
        }
        result += Number(temp) * Math.pow(hex, -i-1);     // 转为数，减少误差
    }
    return result;
}


// 10进制转换为任意进制
function convertFrom10(hex, value){
    if(Number(hex) == 10){             // 优化10进制转换
        return value;
    }
    var result = '';
    var hexStack = new Stack();
    var integer = '';           // 整数
    var decimal = '';           // 小数
    var index = String(value).indexOf('.');
    if(index === -1){           // 分割小数
        integer = value;
    }else{
        integer = String(value).substring(0, index);
        decimal = String(value).substring(index + 1);
    }
    while(integer != 0){        // 处理整数部分
        hexStack.push(integer % hex);
        // integer /= hex;      // error 不是整除
        integer = parseInt(integer / hex);
    }
    var length = hexStack.length();
    for(var i=0; i<length; i++){     // error, hexStack.length() 变化
        // result += hexStack.pop();        处理字母
        var temp = hexStack.pop();
        if(temp >= 10){         // 数字转字母
            temp = String.fromCharCode(0x60 + temp - 9);        // String.
        }
        result += temp;
    }
    if(result === ''){          // 处理 0
        result += '0';
    }
    if(decimal !== ''){         // 处理小数部分
        result += '.';
        var accuracy = 4;       // 设置小数精度，保持4位小数
        // decimal = Number(decimal);
        decimal = '0.' + decimal;
        decimal = Number(decimal);
        for(var i=0; i<accuracy; i++){
            decimal *= hex;
            var temp = parseInt(decimal);
            decimal -= temp;
            decimal = Number(decimal).toFixed(accuracy+2);             // 保留6位小数
            // if(String(decimal).indexOf('e') !== -1 || String(decimal).indexOf('E') !== -1){}
            if(temp >= 10){
                temp = String.fromCharCode(0x60 + temp - 9);
            }
            result += temp;
            if(decimal == 0){
                break;
            }
        }
    }
    return result;
}

// 任意进制转换为任意进制
function hexConvert(headHex, tailHex, value){
    var result = '';
    if(value[0] === '-'){           // 处理负数
        result += '-';
        value = value.substring(1);
    }
    var temp = convertTo10(headHex, value);
    result += convertFrom10(tailHex, temp);
    return result;
}


// 最终集成
function convert(){
    // 接收转换前后进制及要转换的数
    // var headHex = $('select[name="numHex"]:selected').val();
    // var tailHex = $('select[name="resultHex"]:selected').val();
    var headHex = document.getElementById('numHex').value.substring(3);
    var tailHex = document.getElementById('resultHex').value.substring(3);
    var hexValue = document.getElementById('number').value.trim();      // 去除字符串前后空白
    
    if(headHex === tailHex){            // 优化相同进制下转换
        result = hexValue;
    }else{
        var result = hexConvert(headHex, tailHex, hexValue);
    }
    document.getElementById('result').value = result;
}




// 调用计算
document.onkeydown = function(event){           // 按Enter 键时调用
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if(e && e.keyCode === 13){      // Enter
        convert();
    }
}

var swap = document.getElementById('swap');
swap.onclick = function(){
    convert();
}


