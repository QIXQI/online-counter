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

buttons[1].onclick = function(){
    alert('mc');
};

buttons[2].onclick = function(){
    alert('m+');
};
 
buttons[3].onclick = function(){
    alert('m-');
};

buttons[4].onclick = function(){
    alert('mr');
};

buttons[5].onclick = function(){
    document.getElementById('value').value = '';
};

buttons[6].onclick = function(){
    // alert('/');
    if(document.getElementById('value').value !== ''){
        document.getElementById('value').value += '÷';
    }
};

buttons[7].onclick = function(){
    // alert('*');
    if(document.getElementById('value').value !== ''){
        document.getElementById('value').value += '×';
    }
};

buttons[8].onclick = function(){
    // alert('#');
    var str = document.getElementById('value').value;
    document.getElementById('value').value = str.substring(0, str.length-1);
};

buttons[9].onclick = function(){
    // alert(typeof(document.getElementById('value').value));
    // document.getElementById('value').value.concat('7');
    document.getElementById('value').value += '7';
};

buttons[10].onclick = function(){
    document.getElementById('value').value += '8';
};

buttons[11].onclick = function(){
    document.getElementById('value').value += '9';
};

buttons[12].onclick = function(){
    // alert('-');
    document.getElementById('value').value += '-';
};

buttons[13].onclick = function(){
    document.getElementById('value').value += '4';
};

buttons[14].onclick = function(){
    document.getElementById('value').value += '5';
};

buttons[15].onclick = function(){
    document.getElementById('value').value += '6';
};

buttons[16].onclick = function(){
    // alert('+');
    if(document.getElementById('value').value !== ''){
        document.getElementById('value').value += '+';
    }
};

buttons[17].onclick = function(){
    document.getElementById('value').value += '1';
};

buttons[18].onclick = function(){
    document.getElementById('value').value += '2';
};

buttons[19].onclick = function(){
    document.getElementById('value').value += '3';
};

buttons[20].onclick = function(){
    // alert('=');
    var str = document.getElementById('value').value;
    document.getElementById('value').value = calculate(str);
};

buttons[21].onclick = function(){
    document.getElementById('value').value += '%';
};

buttons[22].onclick = function(){
    document.getElementById('value').value += '0';
};

buttons[23].onclick = function(){
    // alert('.');
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
    else if(element === '%'){  // e 与 π 暂定为操作符
        return 5;
    }
    else if(element === ')'){
        return 6;
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
    else if(element === '%'){
        return 4;
    }
    else if(element === '('){
        return 6;               
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
}

function operate1(opt, a){               // 一元操作符
    if(opt === '%'){
        return String(parseFloat(a) / 100);
    }
}


//****************计算************/
function calculate(str){
    var numStack = new Stack();                 // 保存操作数
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
                optStack.push(str[i]);
            }
            else if( oPriority(str[i]) >= iPriority(optStack.peek())){    // 栈不空， 且优先级高
                if(str[i] === ')'){         // 为 )
                    if(optStack.peek() === '('){
                        optStack.pop();
                    }else{
                        console.log('error, 没有与右括号匹配的左括号');
                    }
                }else{                      // 不是 )
                    optStack.push(str[i]);
                }
            }
            else{   // 栈不空，且优先级低
                while(!optStack.empty() && oPriority(str[i]) < iPriority(optStack.peek())){ // 栈不空，且优先级低
                    var opt = optStack.pop();       // 操作符
                    var a, b, result;
                    if(opt !== '%'){  // 二元操作符
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
                        optStack.push(str[i]);
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
        buttons[20].click();
    }
};