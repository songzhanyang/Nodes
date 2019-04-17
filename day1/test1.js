'use strict';
const str = "hello";
const fnCons = (name)=>{
    console.log(`${name} ${str} !`);
}
module.exports = fnCons;
// 把此文件中的fnCons函数暴露出去，让别人引用此文件的时候，可以调用次功能