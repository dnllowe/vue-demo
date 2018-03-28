# vue-demo

* +Easier to add transition effects when elements mount / unmount (<transition> tag vs importing separate library)
* +/-Uses its own syntax for logic vs vanilla js
* +More straightforward logic (can use if and for blocks vs having to map or use boolean / ternary)
* +Some built-in Chrome console dev tools (set Vue states and props, call methods, etc)
* -Uses a giant object to set up Vue vs creating a class... I guess it's all the same. Nvm. Can use extend Vue to create a typical class
* +Two-way data-binding makes internal state management quicker and easier (vs creating a state object and figuring out when/where to call this.setState()
* +Simple 'watch' property let's you know if a prop is changing (vs componentWillReceiveProps)

* Vue templates compile to render functions with JSX
* Computed properties can cache results of function if nothing has changed


## To answer:
* How easy to get started
* Configuration
* Portability
* Error handling / compile time errors
* Accomplishing type safety
* Elegance / simplicity / intuitiveness of syntax / format


## Initializing Project
* Download vue-cli: npm install -g vue-cli
* Run vue init <your-template-flavor> <project-name>
* `npm install vue-router` to use dynamic routing

## Build Setup

```bash
### install dependencies
npm install

### serve with hot reload at localhost:8080
npm run dev

### build for production with minification
npm run build
```

* Time from install to demo app running, ~5-10 min