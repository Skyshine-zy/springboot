"use strict";
(function () {
    //    定义一个表示人的类
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        /*
        *   getter方法用来读取属性
        *   setter方法用来设置属性
        *          -它们被称为属性的存取器
        * */
        //    定义方法，用来获取name属性
        //     getName(){
        //         return this.name;
        //     }
        // //    定义方法，用来设置name属性
        //     setName(value: string){
        //         this.name = value;
        //     }
        //     setAge(value:number){
        //         //判断年龄是否合法
        //         if (value>=0){
        //             this.age = value;
        //         }
        //
        //     }
        //    TS中设置getter方法的方式
        get name() {
            // console.log('get name（）执行了！！')
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get age() {
            return this._age;
        }
        set age(value) {
            if (value >= 0) {
                this._age = value;
            }
        }
    }
    // class C{
    //     name: string;
    //     age: number;
    //
    //     constructor(name:string,age:number) {
    //         this.name = name;
    //         this.age = age;
    //     }
    // }
    class C {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const per = new Person('孙悟空', 18);
    /*
    * 现在属性是在对象中设置的，属性可以任意的被修改
    *   属性可以任意被修改将会导致对象中的数据变得非常不安全
    * */
    // per.setName('猪八戒');
    // per.setAge(-33);
    per.name = "猪八戒";
    per.age = 33;
    console.log(per);
})();
