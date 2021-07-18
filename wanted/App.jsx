import React,{Component} from 'react'
import GnbLayout from './component/GnbLayout'
import GnbContent from './component/GnbContent'



class App extends Component{

    
    render(){
        return(
            <>
                <GnbLayout>
                    <GnbContent />
                </GnbLayout>
            </>
        )
    }
}

export default App
