import React, {Component} from 'react'
import GnbLayout from './GnbLayout'

class GnbWrap extends Component{


    render(){
        return(
            <>
            <GnbLayout>
                {this.props.children}
            </GnbLayout>
               
            </>
        )
    }
}

export default GnbWrap;