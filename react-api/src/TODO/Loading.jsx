import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Loading extends Component {
    constructor({props}){
        super(props);  
        this.state = {
            loading: "Cargando"
        }
    }    

    render() {
        return (
            <section class='content-loader'>
                <div class='container-loading'>
                    <div class='folding'>
                        <div class='sk-cube1 sk-cube'></div>
                        <div class='sk-cube2 sk-cube'></div>
                        <div class='sk-cube4 sk-cube'></div>
                        <div class='sk-cube3 sk-cube'></div>
                    </div>
                    <div class='texto'>{this.state.loading} ...</div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Loading)
