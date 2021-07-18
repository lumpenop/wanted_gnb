import React, {Component} from 'react'

class GnbContent extends Component{
    state = {
        content:['커리어 성장','직군별 연봉','이력서','매치업','프리랜서','Ai 합격예측']
    }

    
    displayOn = () => {
        
        const exploreContent = document.querySelector('.explore-content');
        exploreContent.classList.add('content-on');
    }

    displayOff = () => {        
        const exploreContent = document.querySelector('.explore-content');
        exploreContent.classList.remove('content-on');
    }

    render(){
        return(
            <>
                <ul className="gnb-content">
                    <li className="mobile"><a href="/">홈</a></li>
                    <li onMouseOver={this.displayOn} onMouseOut={this.displayOff}><a className="search-btn" href="#">탐색</a></li>
                    <li ><a href="#">커리어 성장</a></li>
                    {this.state.content.map((v, k)=>{
                        return (
                        <li key={k} className="web"><a href="#">{v}</a></li>
                        )
                    })}
                </ul>
            </>
        )
    }
}

export default GnbContent