import React, { Component, createContext } from 'react'
export const MainContext=createContext()
class MainContextProvider extends Component {
    state = { 
        isLight:true,
        light:{ui:"#000",bg:"#fff"},
        dark:{ui:"aliceblue", bg:"#212121"}

     } 
    render() { 
        return (
            <MainContext.Provider value={this.state}>
                {this.props.children}
            </MainContext.Provider>
        );
    }
}
 
export default MainContextProvider;