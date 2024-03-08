---
sidebar_position: 2
---
# FAQ?

## TypeScript 是什么，和 JavaScript 有什么区别？

`TypeScript` 是 `JavaScript` 的类型的超集，支持`ES6`语法，支持面向对象编程的概念，如类、接口、继承、泛型等。

- TypeScript 是一个强类型的 JavaScript 超集，能够在开发阶段发现和防止许多常见的运行时错误。
- TypeScript 提供了类、接口、泛型等面向对象的编程特性，并且拥有强大的类型检查能力。
- 与 JavaScript 相比，TypeScript 更加可靠、可维护、可扩展，能够让复杂的应用程序更容易开发和维护。

## TypeScript 如何定义一个接口（Interface）？

TypeScript 的接口（Interface）可以用来描述一个对象的形状，包含了该对象应该具备的属性和方法。定义一个接口的语法如下所示：

```
interface Person {
  name: string;
  age: number;
  sayHello(): void;
}
```

上面的代码定义了一个名为 Person 的接口，该接口包含了一个名为 name 的字符串属性、一个名为 age 的数字属性，以及一个名为 sayHello 的 void 类型方法。

## TypeScript 中泛型（generic）是什么，以及它的作用是什么？

- TypeScript 中的泛型（generic）可以用来定义一个可以接受多种不同类型参数的方法或类。
- 泛型可以提高代码的复用性和可读性，使得代码能够更加灵活和可扩展。
- 例如，下面的代码定义了一个名为 identity 的泛型函数，它接受一个类型参数 T，并返回一个类型为 T 的值：

```
function identity<T>(arg: T): T {
    return arg;
}
```

## TypeScript 中的可选属性（Optional Properties）是什么，如何定义一个可选属性？

- TypeScript 中的可选属性指的是可以不必每次都提供值的对象属性，可以使用 ? 符号来定义一个可选属性。
- 例如，下面的代码定义了一个名为 Person 的接口，包含了一个可选的名为 email 的属性：

```
interface Person {
  name: string;
  email?: string;
}
```

上面代码中，email 属性的值是可选的，可以在创建 Person 对象时省略该属性值。

## TypeScript 中的命名空间（Namespace）是什么，如何定义和使用命名空间？

- TypeScript 中的命名空间是一种用来组织代码的方式，可以将相似的代码放在同一个命名空间下，从而避免全局命名冲突。
- 命名空间可以像模块一样导出命名，以便其他地方的代码使用。定义一个命名空间的语法如下所示：

```
namespace MyNamespace {
  export interface Person {
    name: string;
    age: number;
  }
  export function sayHello(person: Person) {
    console.log(`Hello, ${person.name}!`);
  }
}
```

上面的代码定义了一个名为 MyNamespace 的命名空间，其中包含了一个名为 Person 的接口和一个名为 sayHello 的函数。可以通过以下方式来使用 MyNamespace 命名空间中的代码：

```
const person: MyNamespace.Person = { name: "Alice", age: 30 };
MyNamespace.sayHello(person);
```

## 如何在 TypeScript 中定义一个类型别名（Type Alias）？

- TypeScript 中的类型别名可以用来给一个类型起一个新的名字，以便更好地理解和使用该类型。
- 可以使用以下语法来定义一个类型别名：

```
type MyAlias = string | number;
```

上面的代码定义了一个名为 MyAlias 的类型别名，它可以是一个字符串或者数字类型。

## TypeScript 中的枚举（Enum）是什么，如何定义和使用一个枚举？

- TypeScript 中的枚举可以用来给一组相关的常量赋予一个有意义的名字，从而使代码更易读和维护。
- 可以使用以下语法来定义一个枚举：

```
enum Color {
  Red,
  Green,
  Blue,
}
```

上面的代码定义了一个名为 Color 的枚举，其中包含了三个成员：Red、Green 和 Blue。可以通过以下方式来使用枚举：

```
const color: Color = Color.Red;
console.log(color);  // 0
```

## 如何为 TypeScript 中的类（Class）添加一个静态属性或方法？

- 可以使用 static 关键字来定义一个 TypeScript 类的静态属性或方法。
- 静态属性和方法是针对类本身而不是实例进行定义和访问的。
- 以下是一个例子：

```
class MyClass {
  static PI = 3.14;
  static calculateCircumference(diameter: number) {
    return diameter * MyClass.PI;
  }
}

console.log(MyClass.calculateCircumference(5)); // 15.7
```

上面的代码中，MyClass 类定义了一个名为 PI 的静态属性和一个名为 calculateCircumference 的静态方法。可以通过类名直接访问这些静态属性和方法。

## TypeScript 中的装饰器（Decorator）是什么，如何使用？

- TypeScript 中的装饰器可以用来在类、属性、方法等上面附加元数据，以便在运行时使用。
- 装饰器是一种特殊类型的声明，可以被附加到类声明、方法、属性、参数上。
- 装饰器以 @expression 形式应用于类、方法、属性或参数上，其中 expression 指向一个函数，该函数会在运行时被调用。
- 以下是一个例子：

```
function log(target: any, key: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Logging output: ${key}(${args})`);
    const result = originalMethod.apply(this, args);
    return result;
  };

  return descriptor;
}

class Calculator {
  @log
  public add(x: number, y: number): number {
    return x + y;
  }
}

const calculator = new Calculator();
console.log(calculator.add(3, 5));  // Logging output: add([3, 5]) ; 8
```

上面的代码中，定义了一个名为 log 的装饰器函数，它会在类的 add 方法上附加一个日志输出功能。通过将 @log 装饰器应用到 add 方法上，就可以在调用该方法时输出日志。

## 什么是泛型（Generics）？如何在 TypeScript 中定义一个泛型函数？

- 泛型是指一种可以在函数、类、接口中支持多种数据类型的机制，通过泛型可以提高代码的复用性和灵活性。
- 在 TypeScript 中可以使用以下语法来定义一个泛型函数：

```ts
function identity<T>(arg: T): T {
  return arg;
}
```

上面的代码定义了一个名为 identity 的泛型函数，它接收一个类型为 T 的参数，并将该参数直接返回。可以通过以下方式来使用该泛型函数：

```ts
let output = identity<string>("hello world");
console.log(output);  // hello world
```

## TypeScript 中的交叉类型（Intersection Types）是什么？如何使用？

- 交叉类型可以用来将多个类型合并为一个类型，新的类型将具有所有类型的特性。
- 在 TypeScript 中可以使用 & 符号来定义交叉类型，以下是一个例子：

```
interface User {
  name: string;
  age: number;
}

interface Employee {
  company: string;
  position: string;
}

type Staff = User & Employee;

const staff: Staff = {
  name: 'Tom',
  age: 30,
  company: 'Apple',
  position: 'Engineer',
};
```

上面的代码中，定义了两个接口 User 和 Employee，分别表示用户和员工的信息。然后，使用 & 符号定义一个 Staff 类型，表示既是用户又是员工的新类型。最后，可以创建一个 Staff 类型的对象 staff，它既包含了 User 类型的属性，又包含了 Employee 类型的属性。

## TypeScript 中的类型保护是什么？如何在代码中使用类型保护？

- 类型保护可以用来在 TypeScript 中对一个变量的类型进行更精确的判断，从而避免在代码中出现类型错误。
- 以下是一些 TypeScript 中常用的类型保护方法：

- typeof 类型保护：使用 typeof 运算符可以判断一个变量的类型是否为 string、number、boolean、symbol 中的一种。

  ```
  function isNumber(value: unknown): value is number {
    return typeof value === 'number';
  }
  ```

- instanceof 类型保护：使用 instanceof 运算符可以判断一个对象是否属于某个类的实例。

  ```
  class Circle {
    radius: number;
    constructor(radius: number) {
      this.radius = radius;
    }
  }
  
  function isCircle(shape: unknown): shape is Circle {
    return shape instanceof Circle;
  }
  ```

- in 类型保护：使用 in 运算符可以判断一个对象是否包含某个属性。

  ```
  interface Rectangle {
    width: number;
    height: number;
  }
  
  function isRectangle(shape: unknown): shape is Rectangle {
    return 'width' in shape && 'height' in shape;
  }
  ```

- 自定义类型保护：通过一个函数来判断一个变量的类型是否符合要求。

  ```
  interface User {
    name: string;
    age: number;
  }
  
  interface Employee extends User {
    company: string;
    position: string;
  }
  
  function isEmployee(user: User): user is Employee {
    return 'company' in user && 'position' in user;
  }
  ```

上面的代码中，分别定义了四种类型保护方法，并且在相应的函数中使用了 is 关键字来说明这是一个类型保护函数，这样在使用的时候，TypeScript 就能更好地推断变量类型。

## typescript 守护类型

TypeScript的“守护类型”是指使用类型断言或类型保护来在运行时检查值的类型。它可以帮助在编译时减少类型错误，同时保持JavaScript的动态特性。

例如，在 TypeScript 中，您可以使用以下类型保护函数检查值的类型：

```
function isNumber(value: any): value is number {
  return typeof value === 'number';
}

let value: any = 42;

if (isNumber(value)) {
  console.log('Value is a number:', value.toFixed(2));
} else {
  console.log('Value is not a number.');
}
```

在这个例子中，`isNumber`函数接受一个值作为参数，并返回一个布尔值。如果参数的类型是`number`，则返回`true`；否则返回`false`。在`if`语句中，我们使用`isNumber`函数来检查`value`的类型。如果`value`是一个数字，我们就调用`toFixed`方法打印出该数字的值，否则我们打印一个错误消息。

这种基于类型保护函数的“守护类型”可以让您在编译时发现类型错误，并提供更好的类型安全保证。

## TS有什么优缺点？

TypeScript（TS）是JavaScript的一个超集，它添加了静态类型检查和其他一些面向对象的特性。使用TypeScript相比于纯JavaScript具有一些优势和劣势，下面是一些常见的优缺点。

优点：

1. **静态类型检查：**
   - **优势：** TypeScript 引入了静态类型检查，可以在编译时发现潜在的类型错误，提高了代码的可维护性和可读性。
   - **减少错误：** 减少在运行时由于类型错误引起的问题，有助于提高代码质量。

2. **强大的工具支持：**
   - **编辑器支持：** 主流的代码编辑器（如VSCode）对TypeScript提供了很好的支持，包括智能代码补全、跳转到定义、重构等功能。
   - **第三方库：** 许多JavaScript库和框架都提供了专门为TypeScript编写的声明文件，使得在TypeScript中使用它们更加容易。

3. **面向对象编程支持：**
   - **接口和类：** TypeScript支持接口和类，使得面向对象编程更加容易和直观。

4. **代码可读性提高：**
   - **类型注解：** 类型注解可以使代码更加清晰，提高了代码的可读性，并且能够让开发者更好地理解函数和变量的用途。

5. **更好的重构支持：**
   - **重构工具：** TypeScript提供了强大的重构工具，使得对代码进行修改和重构更加容易。

缺点：

1. **学习曲线：**
   - **新概念：** 对于只熟悉JavaScript的开发者来说，学习TypeScript可能需要一些时间，尤其是对于静态类型和其他面向对象的概念。

2. **额外的开发成本：**
   - **编译过程：** 使用TypeScript需要额外的编译步骤，这可能增加一些开发时间。
   - **类型注解：** 需要花时间为代码添加类型注解，尤其是在大型项目中。

3. **项目大小：**
   - **小型项目：** 对于小型项目，TypeScript的优势可能并不是那么显著，而且增加了一些额外的开销。

4. **生态系统适应性：**
   - **生态系统：** TypeScript在JavaScript生态系统中是相对较新的，有时候可能需要一些时间来适应或等待相关库和框架的更新。

## 为什么要使用 TypeScript？

1. **更安全的代码：** 静态类型检查可以帮助在编码阶段捕获潜在的错误，提高代码的质量和可靠性。

2. **增强开发工具支持：** 通过TypeScript，可以获得先进的开发工具支持，使开发过程更高效。

3. **更好的代码维护性：** 类型注解、接口、类等面向对象的特性使得代码更加模块化、可维护。

4. **更好的协作：** 静态类型使得代码更加自文档化，有助于团队协作，提高代码可读性。

5. **适用于大型项目：** TypeScript在大型项目中的优势更为显著，能够降低项目维护的难度。

## TypeScript 中命名空间与模块的区别？

**模块**

`TypeScript` 与` ECMAScript` 2015 一样，任何包含顶级 `import` 或者 `export` 的文件都被当成一个模块。

相反地，如果一个文件不带有顶级的`import`或者`export`声明，那么它的内容被视为全局可见的。

**命名空间**

主要为了解决命名冲突问题，命名空间本质上就是一个对象。也会冲突，也无法解决依赖关系。

:::tip

在正常的TS项目开发过程中并不建议用命名空间，但通常在通过 d.ts 文件标记 js 库类型的时候使用命名空间，主要作用是给编译器编写代码的时候参考使用

:::

## 什么是Typescript的方法重载？

在 TypeScript 中，方法重载（Method Overloading）是一种通过定义多个具有相同名称但参数类型和数量不同的函数签名，以实现不同的行为的机制。在调用函数时，TypeScript 编译器会根据传递给函数的参数来确定应该调用哪个重载版本的函数。

TypeScript 中使用方法重载：

```typescript
function reverse(x: string): string;
function reverse(x: number): number;
function reverse(x: string | number): string | number {
    if (typeof x === 'string') {
        return x.split('').reverse().join('');
    } else if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
}

// 调用重载版本的函数
console.log(reverse("hello")); // Output: olleh
console.log(reverse(12345));   // Output: 54321
```

## typescript 中的 is 关键字有什么用？

在 TypeScript 中，`is` 关键字通常用于自定义类型守卫（Type Guards）。类型守卫是一种用来在运行时检查变量的类型的技术，它可以帮助开发者在代码中更准确地处理不同类型的数据。

```typescript
// 自定义类型守卫函数，用于检查是否是数组类型
function isArray(value: any): value is Array<any> {
    return Array.isArray(value);
}

// 使用自定义类型守卫进行类型检查
let arr: any = [1, 2, 3];
if (isArray(arr)) {
    console.log("arr is an array");
} else {
    console.log("arr is not an array");
}
```

## TypeScript支持的访问修饰符有哪些？

TypeScript支持访问修饰符 public，private 和 protected，它们决定了类成员的可访问性。

- 公共（public），类的所有成员，其子类以及该类的实例都可以访问。
- 受保护（protected），该类及其子类的所有成员都可以访问它们。 但是该类的实例无法访问。
- 私有（private），只有类的成员可以访问它们。

如果未指定访问修饰符，则它是隐式公共的，因为它符合 JavaScript 的便利性。

## TypeScript 的内置数据类型有哪些？

- boolean：表示布尔值，可以是 true 或 false。
- number：表示数字，包括整数和浮点数。
- string：表示字符串。可以使用单引号或双引号来表示字符串。
- void：表示没有任何返回值的函数的返回类型。
- null 和 undefined：这两个类型是所有类型的子类型。 symbol：表示独特的值，类似于数字或字符串。

除此之外，TypeScript 还支持以下复合类型：

- array：表示一个元素类型为 T 的数组。例如，number[] 表示一个数字数组。
- tuple：表示已知元素数量和类型的数组。例如，[string, number] 表示一个字符串和数字组成的元组。
- enum：表示一个命名的常量枚举。
- any：表示任意类型。
- unknown：与 any 类似，但是在更严格的类型检查下使用。
- object：表示非原始类型的对象。
- 还有一些其他的类型，例如 never、union 和 intersection，它们可以用于描述更复杂的类型。
