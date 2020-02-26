// 1. 处理value中显示上标
// 2. －
// 3. 实现operate 函数重载
// 4. 优先级低与优先级高合并
// 5. 2 ÷ 2√2  与 2 ÷ (2√2) 结果一样不
// 6. 扩展时注意ln, log, sin, cos, tan 的首字母冲突问题
// 7. 扩展 ÷ 与 / 同构， × 与 * 同构
// 8. ln, log, sin, cos, tan 优先级比较一致
// 9. sin^2, cos^2, tan^2, ln^2, log^2 暂定为三元操作符
// 10. sin(1)^(2) 的 二义性

//*****************定义栈*****************
function Stack(){
    this.dataStore = [];        // 初始化为空
    this.top = 0;               // 记录栈顶位置
    this.pop = pop;             // 出栈
    this.push = push;           // 入栈
    this.peek = peek;           // 查看栈顶元素
    this.length = length;       // 查看栈内元素总数
    this.empty = empty;         // 判断栈是否空
    this.clear = clear;         // 清空栈
}

// 实现出栈
function pop(){
    return this.dataStore[-- this.top];
}

// 实现入栈
function push( element ){
    this.dataStore[this.top ++] = element;
}

// 实现查看栈顶元素
function peek(){
    if(this.top > 0){
        return this.dataStore[this.top - 1];
    }else{
        return 'Empty';
    }
}

// 实现查看栈内元素总数
function length(){
    return this.top;
}

// 实现栈是否是空
function empty(){
    if(this.top == 0){
        return true;
    }
    return false;
}

// 实现清空栈
function clear(){
    delete this.dataStore;
    this.dataStore = [];
    this.top = 0;
}

//***************点击事件***************
var buttons = document.getElementsByTagName('td');
var INVFlag = 0;       // 点击INV 按钮切换功能

buttons[1].onclick = function(){
    document.getElementById('value').value += '(';
};

buttons[2].onclick = function(){
    document.getElementById('value').value += ')';
};

buttons[3].onclick = function(){
    // alert('1/x');
    document.getElementById('value').value += '^(-1)';
};

buttons[4].onclick = function(){
    alert('mc');
};

buttons[5].onclick = function(){
    alert('m+');
};

buttons[6].onclick = function(){
    alert('m-');
};

buttons[7].onclick = function(){
    alert('mr');
};

buttons[8].onclick = function(){
    // alert('x²');
    document.getElementById('value').value += '^(2)';
};

buttons[9].onclick = function(){
    // alert('x³');
    document.getElementById('value').value += '^(3)';
};

buttons[10].onclick = function(){
    // alert('x^y');
    document.getElementById('value').value += '^(';
};

buttons[11].onclick = function(){
    document.getElementById('value').value = '';
};

buttons[12].onclick = function(){
    if(document.getElementById('value').value != ''){
        document.getElementById('value').value += '÷';
    }
};

buttons[13].onclick = function(){
    if(document.getElementById('value').value != ''){
        document.getElementById('value').value += '×';
    }
};

buttons[14].onclick = function(){
    var str = document.getElementById('value').value;
    document.getElementById('value').value = str.substring(0, str.length-1);
};

buttons[15].onclick = function(){
    // alert('x!');
    document.getElementById('value').value += '!';
};

buttons[16].onclick = function(){
    // alert('√');
    document.getElementById('value').value += '√';
};

buttons[17].onclick = function(){
    // alert('y√x');
    document.getElementById('value').value += '^(1÷';
};

buttons[18].onclick = function(){
    document.getElementById('value').value += '7';
};

buttons[19].onclick = function(){
    document.getElementById('value').value += '8';
};

buttons[20].onclick = function(){
    document.getElementById('value').value += '9';
};

buttons[21].onclick = function(){
    document.getElementById('value').value += '-';
};

buttons[22].onclick = function(){
    // alert('e');
    document.getElementById('value').value += 'e';
};

buttons[23].onclick = function(){
    // alert('ln');
    if(INVFlag === 0){
        document.getElementById('value').value += 'ln(';
    }else{
        document.getElementById('value').value += 'e^(';
    }
};

buttons[24].onclick = function(){
    // alert('log');
    if(INVFlag === 0){
        document.getElementById('value').value += 'log(';
    }else{
        document.getElementById('value').value += '10^(';
    }
};

buttons[25].onclick = function(){
    document.getElementById('value').value += '4';
};

buttons[26].onclick = function(){
    document.getElementById('value').value += '5';
};

buttons[27].onclick = function(){
    document.getElementById('value').value += '6';
};

buttons[28].onclick = function(){
    if(document.getElementById('value').value != ''){
        document.getElementById('value').value += '+';
    }
};

buttons[29].onclick = function(){
    // alert('sin');
    if(INVFlag === 0){
        document.getElementById('value').value += 'sin(';
    }else{
        // document.getElementById('value').value += 'sin^-1(';
        document.getElementById('value').value += 'arcsin(';
    }
};

buttons[30].onclick = function(){
    // alert('cos');
    if(INVFlag === 0){
        document.getElementById('value').value += 'cos(';
    }else{
        // document.getElementById('value').value += 'cos^-1(';
        document.getElementById('value').value += 'arccos(';
    }
};

buttons[31].onclick = function(){
    // alert('tan');
    if(INVFlag === 0){
        document.getElementById('value').value += 'tan(';
    }else{
        // document.getElementById('value').value += 'tan^-1(';
        document.getElementById('value').value += 'arctan(';
    }
};

buttons[32].onclick = function(){
    document.getElementById('value').value += '1';
};

buttons[33].onclick = function(){
    document.getElementById('value').value += '2';
};

buttons[34].onclick = function(){
    document.getElementById('value').value += '3';
};

buttons[35].onclick = function(){
    // alert('=');
    var str = document.getElementById('value').value;
    document.getElementById('value').value = calculate(str);
};

buttons[36].onclick = function(){
    // alert('INV');
    if(INVFlag === 0){
        INVFlag = 1;
        buttons[23].getElementsByTagName('input')[0].value = 'e^x';
        buttons[24].getElementsByTagName('input')[0].value = '10^x';
        // buttons[29].getElementsByTagName('input')[0].value = 'sin^-1';
        // buttons[30].getElementsByTagName('input')[0].value = 'cos^-1';
        // buttons[31].getElementsByTagName('input')[0].value = 'tan^-1';
        buttons[29].getElementsByTagName('input')[0].value = 'arcsin';
        buttons[30].getElementsByTagName('input')[0].value = 'arccos';
        buttons[31].getElementsByTagName('input')[0].value = 'arctan';
    }else{
        INVFlag = 0;
        buttons[23].getElementsByTagName('input')[0].value = 'ln';
        buttons[24].getElementsByTagName('input')[0].value = 'log';
        buttons[29].getElementsByTagName('input')[0].value = 'sin';
        buttons[30].getElementsByTagName('input')[0].value = 'cos';
        buttons[31].getElementsByTagName('input')[0].value = 'tan';
    }
};

buttons[37].onclick = function(){
    alert('DEG');
};

buttons[38].onclick = function(){
    // alert('π');
    document.getElementById('value').value += 'π';
};

buttons[39].onclick = function(){
    document.getElementById('value').value += '%';
};

buttons[40].onclick = function(){
    document.getElementById('value').value += '0';
};

buttons[41].onclick = function(){
    var str = document.getElementById('value').value;
    var index = str.lastIndexOf('.');                   // 最后一次出现 '.' 的位置
    if(index == -1){
        document.getElementById('value').value += '.';
    }else{
        for(var i=index+1; i<str.length; i++){
            if(str[i] < '0' || str[i] > '9'){
                document.getElementById('value').value += '.';
                break;
            }
        }
    }
};


//*****************优先级****************/
// 栈内优先级
function iPriority( element ){
    if(element === '('){
        return 1;
    }
    else if(element === '+' || element === '-'){
        return 3;
    }
    else if(element === '×' || element === '÷'){
        return 4;
    }
    else if(element === '√' || element === 'l' || element === 's' || element === 'c' || element === 't' || element === 'ln' || element === 'log' || element === 'sin' || element === 'cos' || element === 'tan' || element === 'ln^' || element === 'log^' || element === 'sin^' || element === 'cos^' || element === 'tan^' || element === 'a' || element === 'arcsin' || element === 'arccos' || element === 'arctan' || element === 'arcsin^' || element === 'arccos^' || element === 'arctan^'){   //peek()比较 ln, log, sin, cos, tan, ln^, log^, sin^, cos^, tan^, arcsin, arccos, arctan, arcsin^, arccos^, arctan^； str[i] 比较l, s, c, t, a
        return 5;
    }
    else if(element === '^'){
        return 6;
    }
    else if(element === '%' || element === '!' || element === 'e' || element === 'π'){  // e 与 π 暂定为操作符
        return 7;
    }
    else if(element === ')'){
        return 8;
    }
    else{
        return 0;
    }
}

// 栈外优先级
function oPriority( element ){
    if(element === ')'){
        return 1;
    }
    else if(element === '+' || element === '-'){
        return 2;
    }
    else if(element === '×' || element === '÷'){
        return 3;
    }
    else if(element === '√' || element === 'l' || element === 's' || element === 'c' || element === 't' || element === 'ln' || element === 'log' || element === 'sin' || element === 'cos' || element === 'tan' || element === 'ln^' || element === 'log^' || element === 'sin^' || element === 'cos^' || element === 'tan^' || element === 'a' || element === 'arcsin' || element === 'arccos' || element === 'arctan' || element === 'arcsin^' || element === 'arccos^' || element === 'arctan^'){        //peek()比较 ln, log, sin, cos, tan, ln^, log^, sin^, cos^, tan^, arcsin, arccos, arctan, arcsin^, arccos^, arctan^； str[i] 比较l, s, c, t, a
        return 4;
    }
    else if(element === '^'){
        return 5;
    }
    else if(element === '%' || element === '!' || element === 'e' || element === 'π'){
        return 6;
    }
    else if(element === '('){
        return 8;               
    }
    else{
        return 0;
    }
}

//**************操作处理***********/
function operate(opt, a, b){            // 二元操作符
    if(opt === '+'){
        return String(parseFloat(a) + parseFloat(b));
    }
    if(opt === '-'){
        return String(parseFloat(a) - parseFloat(b));
    }
    if(opt === '×'){
        return String(parseFloat(a) * parseFloat(b));
    }
    if(opt === '÷'){
        return String(parseFloat(a) / parseFloat(b));
    }
    if(opt === '^'){
        return String(Math.pow(parseFloat(a), parseFloat(b)));
    }
    if(opt === '√'){                     // √ 暂定为二元操作符
        return String(parseFloat(a) * Math.sqrt(parseFloat(b)));
    }
    if(opt === 'ln'){                    // ln, log, sin, cos, tan 暂定为二元操作符
        return String(parseFloat(a) * Math.log(parseFloat(b)));
    }
    if(opt === 'log'){
        return String(parseFloat(a) * Math.log10(parseFloat(b)));
    }
    if(opt === 'sin'){
        return String(parseFloat(a) * Math.sin(parseFloat(b)));
    }
    if(opt === 'cos'){
        return String(parseFloat(a) * Math.cos(parseFloat(b)));
    }
    if(opt === 'tan'){
        return String(parseFloat(a) * Math.tan(parseFloat(b)));
    }
    if(opt === 'arcsin'){               // arcsin, arccos, arctan 暂定为二元操作符
        return String(parseFloat(a) * Math.asin(parseFloat(b)));
    }
    if(opt === 'arccos'){
        return String(parseFloat(a) * Math.acos(parseFloat(b)));
    }
    if(opt === 'arctan'){
        return String(parseFloat(a) * Math.atan(parseFloat(b)));    // 以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值。
    }
}

function operate1(opt, a){               // 一元操作符
    if(opt === '%'){
        return String(parseFloat(a) / 100);
    }
    if(opt === '!'){
        var result = 1;
        for(var i=1; i<=parseInt(a); i++){
            result *= i;
        }
        return String(result);
    }
    if(opt === 'e'){                    // e 与 π 都暂定为一元操作符
        return String(parseFloat(a) * Math.E);
    }
    if(opt === 'π'){
        return String(parseFloat(a) * Math.PI);
    }
}

function operate2(opt, a, b, c){        // 三元操作符
    if(opt === 'ln^'){
        return String(parseFloat(a) * Math.pow(Math.log(parseFloat(c)), parseFloat(b)) );
    }
    if(opt === 'log^'){
        return String(parseFloat(a) * Math.pow(Math.log10(parseFloat(c)), parseFloat(b)) );
    }
    if(opt === 'sin^'){
        return String(parseFloat(a) * Math.pow(Math.sin(parseFloat(c)), parseFloat(b)) );
    }
    if(opt === 'cos^'){
        return String(parseFloat(a) * Math.pow(Math.cos(parseFloat(c)), parseFloat(b)) );
    }
    if(opt === 'tan^'){
        return String(parseFloat(a) * Math.pow(Math.tan(parseFloat(c)), parseFloat(b)) );
    }
    if(opt === 'arcsin^'){
        return String(parseFloat(a) * Math.pow(Math.asin(parseFloat(c)), parseFloat(b)));
    }
    if(opt === 'arccos^'){
        return String(parseFloat(a) * Math.pow(Math.acos(parseFloat(c)), parseFloat(b)));
    }
    if(opt === 'arctan^'){
        return String(parseFloat(a) * Math.pow(Math.atan(parseFloat(c)), parseFloat(b)));
    }
}

//****************计算************/
function calculate(str){
    var numStack = new Stack();                 // 保存操作数// e 、π 、√ 、ln 、log 、sin 、cos 、tan 、ln^ 、log^ 、sin^ 、cos^ 、tan^ 、arcsin 、arccos 、arctan 、arcsin^ 、arccos^ 、arctan^ 前没有数字时 numStack 填充一个 '1'
    var optStack = new Stack();                 // 保存操作符
    var numStr = '';                            // 保存中间操作数
    str += '#';                                 // 优先级为0, 遍历到 '#'时完成计算
    for(var i=0; i<str.length; i++){
        if(str[i] >= '0' && str[i] <= '9' || str[i] === '.' || (str[i] === '-' && (i==0 || str[i-1] < '0' || str[i-1] > '9'))){     // 数字或小数点或负号（不是减号）
            numStr += str[i];
        }
        else if(oPriority(str[i]) > 0 || str[i] === '#'){         // 操作符
            // 处理numStr
            if(numStr !== ''){
                numStack.push(numStr);
                numStr = '';
            }
            if(optStack.empty()){       // 栈空
                if((str[i] === 'e' || str[i] === 'π' || str[i] === '√' || str[i] === 'l' || str[i] === 's' || str[i] === 'c' || str[i] === 't' || str[i] === 'a') && (i === 0 || str[i-1] < '0' || str[i-1] > '9')){          // e 、π 、√ 、ln 、log 、sin 、cos 、tan 、ln^ 、log^ 、sin^ 、cos^ 、tan^ 、arcsin 、arccos 、arctan 、arcsin^ 、arccos^ 、arctan^ 前没有数字时 numStack 填充一个 '1'
                    numStack.push('1');
                }
                if(str[i] === 'l' && str[i+1] === 'n'){     // 处理 ln() 和 ln^()
                    if(str[i+2] === '^'){
                        optStack.push('ln^');
                        i ++;
                    }else{
                        optStack.push('ln');
                    }
                    i ++;
                }
                else if(str[i] === 'l' && str[i+1] === 'o' && str[i+2] === 'g'){    // 处理log() 和 log^()
                    if(str[i+3] === '^'){
                        optStack.push('log^');
                        i ++;
                    }else{
                        optStack.push('log');            
                    }      
                    i ++;
                    i ++;
                }
                else if(str[i] === 's' && str[i+1] === 'i' && str[i+2] === 'n'){     // 处理sin() 和 sin^()
                    if(str[i+3] === '^'){
                        optStack.push('sin^');
                        i ++;
                    }else{
                        optStack.push('sin');
                    }
                    i ++;
                    i ++;
                }
                else if(str[i] === 'c' && str[i+1] === 'o' && str[i+2] === 's'){     // 处理cos() 和 cos^()
                    if(str[i+3] === '^'){
                        optStack.push('cos^');
                        i ++;
                    }else{
                        optStack.push('cos');
                    }
                    i ++;
                    i ++;
                }
                else if(str[i] === 't' && str[i+1] === 'a' && str[i+2] === 'n'){     // 处理tan() 和 tan^()
                    if(str[i+3] === '^'){
                        optStack.push('tan^');
                        i ++;
                    }else{
                        optStack.push('tan');
                    }
                    i ++;
                    i ++;
                }
                else if(str[i] === 'a' && str[i+1] === 'r' && str[i+2] === 'c' && str[i+3] === 's' && str[i+4] === 'i' && str[i+5] === 'n'){        // 处理 arcsin() 和 arcsin^()
                    if(str[i+6] === '^'){
                        optStack.push('arcsin^');
                        i ++;
                    }else{
                        optStack.push('arcsin');
                    }
                    i += 5;
                }
                else if(str[i] === 'a' && str[i+1] === 'r' && str[i+2] === 'c' && str[i+3] === 'c' && str[i+4] === 'o' && str[i+5] === 's'){        // 处理 arccos() 和 arccos^()
                    if(str[i+6] === '^'){
                        optStack.push('arccos^');
                        i ++;
                    }else{
                        optStack.push('arccos');
                    }
                    i += 5;
                }
                else if(str[i] === 'a' && str[i+1] === 'r' && str[i+2] === 'c' && str[i+3] === 't' && str[i+4] === 'a' && str[i+5] === 'n'){        // 处理 arctan() 和 arctan^()
                    if(str[i+6] === '^'){
                        optStack.push('arctan^');
                        i ++;
                    }else{
                        optStack.push('arctan');
                    }
                    i += 5;
                }
                else {
                    optStack.push(str[i]);
                }
            }
            else if( oPriority(str[i]) >= iPriority(optStack.peek())){    // 栈不空， 且优先级高
                if(str[i] === ')'){         // 为 )
                    if(optStack.peek() === '('){
                        optStack.pop();
                    }else{
                        console.log('error, 没有与右括号匹配的左括号');
                    }
                }else{                      // 不是 )
                    if((str[i] === 'e' || str[i] === 'π' || str[i] === '√' || str[i] === 'l' || str[i] === 's' || str[i] === 'c' || str[i] === 't' || str[i] === 'a') && (i === 0 || str[i-1] < '0' || str[i-1] > '9')){          // e 、π 、√ 、ln 、log 、sin 、cos 、tan 、ln^ 、log^ 、sin^ 、cos^ 、tan^ 、arcsin 、arccos 、arctan 、arcsin^ 、arccos^ 、arctan^ 前没有数字时 numStack 填充一个 '1'
                        numStack.push('1');
                    }
                    if(str[i] === 'l' && str[i+1] === 'n'){         // 处理ln() 和 ln^()
                        if(str[i+2] === '^'){
                            optStack.push('ln^');
                            i ++;
                        }else{
                            optStack.push('ln');
                        }
                        i ++;
                    }
                    else if(str[i] === 'l' && str[i+1] === 'o' && str[i+2] === 'g'){    // 处理log() 和 log^()
                        if(str[i+3] === '^'){
                            optStack.push('log^');
                            i ++;
                        }else{
                            optStack.push('log');
                        }
                        i ++;
                        i ++;
                    }
                    else if(str[i] === 's' && str[i+1] === 'i' && str[i+2] === 'n'){    // 处理sin() 和 sin^()
                        if(str[i+3] === '^'){
                            optStack.push('sin^');
                            i ++;
                        }else{
                            optStack.push('sin');
                        }
                        i ++;
                        i ++;
                    }
                    else if(str[i] === 'c' && str[i+1] === 'o' && str[i+2] === 's'){    // 处理cos() 和 cos^()
                        if(str[i+3] === '^'){
                            optStack.push('cos^');
                            i ++;
                        }else{
                            optStack.push('cos');
                        }
                        i ++;
                        i ++;
                    }
                    else if(str[i] === 't' && str[i+1] === 'a' && str[i+2] === 'n'){    /// 处理tan() 和 tan^()
                        if(str[i+3] === '^'){
                            optStack.push('tan^');
                            i ++;
                        }else{
                            optStack.push('tan');
                        }
                        i ++;
                        i ++;
                    }
                    else if(str[i] === 'a' && str[i+1] === 'r' && str[i+2] === 'c' && str[i+3] === 's' && str[i+4] === 'i' && str[i+5] === 'n'){        // 处理 arcsin() 和 arcsin^()
                        if(str[i+6] === '^'){
                            optStack.push('arcsin^');
                            i ++;
                        }else{
                            optStack.push('arcsin');
                        }
                        i += 5;
                    }
                    else if(str[i] === 'a' && str[i+1] === 'r' && str[i+2] === 'c' && str[i+3] === 'c' && str[i+4] === 'o' && str[i+5] === 's'){        // 处理 arccos() 和 arccos^()
                        if(str[i+6] === '^'){
                            optStack.push('arccos^');
                            i ++;
                        }else{
                            optStack.push('arccos');
                        }
                        i += 5;
                    }
                    else if(str[i] === 'a' && str[i+1] === 'r' && str[i+2] === 'c' && str[i+3] === 't' && str[i+4] === 'a' && str[i+5] === 'n'){        // 处理 arctan() 和 arctan^()
                        if(str[i+6] === '^'){
                            optStack.push('arctan^');
                            i ++;
                        }else{
                            optStack.push('arctan');
                        }
                        i += 5;
                    }
                    else {
                        optStack.push(str[i]);
                    }
                }
            }
            else{   // 栈不空，且优先级低
                while(!optStack.empty() && oPriority(str[i]) < iPriority(optStack.peek())){ // 栈不空，且优先级低
                    var opt = optStack.pop();       // 操作符
                    var a, b, c, result;
                    if(opt === 'ln^' || opt === 'log^' || opt === 'sin^' || opt === 'cos^' || opt === 'tan^' || opt === 'arcsin^' || opt === 'arccos^' || opt === 'arctan^'){          // 三元操作符
                        c = numStack.pop();         // 操作数
                        b = numStack.pop();         // 操作数
                        a = numStack.pop();         // 操作数
                        result = operate2(opt, a, b, c);
                    }
                    else if(opt !== '%' && opt != '!' && opt != 'e' && opt != 'π'){  // 二元操作符
                        b = numStack.pop();         // 操作数
                        a = numStack.pop();         // 操作数
                        result = operate(opt, a, b);
                        
                    }else{                          // 一元操作符       
                        a = numStack.pop();
                        result = operate1(opt, a);
                    }
                    numStack.push(result);
                }
                if(str[i] !== '#'){
                    if(str[i] === ')'){
                        if(optStack.peek() === '('){
                            optStack.pop();
                        }else{
                            console.log('error, 没有与右括号匹配的左括号');
                        }
                    }else{
                        if((str[i] === 'e' || str[i] === 'π' || str[i] === '√' || str[i] === 'l' || str[i] === 's' || str[i] === 'c' || str[i] === 't' || str[i] === 'a') && (i === 0 || str[i-1] < '0' || str[i-1] > '9')){          // e 、π 、√ 、ln 、log 、sin 、cos 、tan 、ln^ 、log^ 、sin^ 、cos^ 、tan^ 、arcsin 、arccos 、arctan 、arcsin^ 、arccos^ 、arctan^ 前没有数字时 numStack 填充一个 '1'
                            numStack.push('1');
                        }
                        if(str[i] === 'l' && str[i+1] === 'n'){                             // 处理ln() 和 ln^()
                            if(str[i+2] === '^'){
                                optStack.push('ln^');
                                i ++;
                            }else{
                                optStack.push('ln');
                            }
                            i ++;
                        }
                        else if(str[i] === 'l' && str[i+1] === 'o' && str[i+2] === 'g'){    // 处理log() 和 log^()
                            if(str[i+3] === '^'){
                                optStack.push('log^');
                                i ++;
                            }else{
                                optStack.push('log');
                            }
                            i ++;
                            i ++;
                        }
                        else if(str[i] === 's' && str[i+1] === 'i' && str[i+2] === 'n'){    // 处理sin() 和 sin^()
                            if(str[i+3] === '^'){
                                optStack.push('sin^');
                                i ++;
                            }else{
                                optStack.push('sin');
                            }
                            i ++;
                            i ++;
                        }
                        else if(str[i] === 'c' && str[i+1] === 'o' && str[i+2] === 's'){    // 处理cos() 和 cos^()
                            if(str[i+3] === '^'){
                                optStack.push('cos^');
                                i ++;
                            }else{
                                optStack.push('cos');
                            }
                            i ++;
                            i ++;
                        }
                        else if(str[i] === 't' && str[i+1] === 'a' && str[i+2] === 'n'){    // 处理tan() 和 tan^()
                            if(str[i+3] === '^'){
                                optStack.push('tan^');
                                i ++;
                            }else{
                                optStack.push('tan');
                            }
                            i ++;
                            i ++;
                        }
                        else if(str[i] === 'a' && str[i+1] === 'r' && str[i+2] === 'c' && str[i+3] === 's' && str[i+4] === 'i' && str[i+5] === 'n'){        // 处理 arcsin() 和 arcsin^()
                            if(str[i+6] === '^'){
                                optStack.push('arcsin^');
                                i ++;
                            }else{
                                optStack.push('arcsin');
                            }
                            i += 5;
                        }
                        else if(str[i] === 'a' && str[i+1] === 'r' && str[i+2] === 'c' && str[i+3] === 'c' && str[i+4] === 'o' && str[i+5] === 's'){        // 处理 arccos() 和 arccos^()
                            if(str[i+6] === '^'){
                                optStack.push('arccos^');
                                i ++;
                            }else{
                                optStack.push('arccos');
                            }
                            i += 5;
                        }
                        else if(str[i] === 'a' && str[i+1] === 'r' && str[i+2] === 'c' && str[i+3] === 't' && str[i+4] === 'a' && str[i+5] === 'n'){        // 处理 arctan() 和 arctan^()
                            if(str[i+6] === '^'){
                                optStack.push('arctan^');
                                i ++;
                            }else{
                                optStack.push('arctan');
                            }
                            i += 5;
                        }
                        else {
                            optStack.push(str[i]);
                        }
                    }
                }
            }
        }
    }
    var result = 'empty';
    if(!numStack.empty()){
        result = numStack.pop();
    }
    return result;
}


//**************键盘事件处理****************
document.onkeydown = function(event){
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if(e && e.keyCode === 13){      // Enter
        buttons[35].click();
    }
};