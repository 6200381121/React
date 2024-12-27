import * as React from "react"
class Xyz extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello</h1>
                <h2>Hello</h2>
                <h3>hello</h3>
                <Abc />
            </div>
        );
    }
}
class Abc extends React.Component {
    render() {
        return (
            <div>
                <Aaa />
                <h1>Hello1</h1>
                <h2>Hello1</h2>
                <h3>hello1</h3>
            </div>
        );
    }
}
class Aaa extends React.Component {
    render() {  
        return (
            <div>
                <h1>Hello2</h1>
                <h2>Hello2</h2>
                <h3>hello2</h3>
            </div>
        );
    }

export defoult : Xyz;
}

