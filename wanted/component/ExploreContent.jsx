import React, {Component} from 'react'


class ExploreContent extends Component{
    state={  
        title:['영업','미디어','인사','게임 제작','엔지니어링 설계']
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
                <div onMouseOver={this.displayOn} onMouseOut={this.displayOff} className="presentation">
                    <div className="explore-content">
                        {this.state.title.map((v, k)=>{
                            return(
                                <ul>
                                    <li key={k}><h2>{v}</h2></li>
                                    <li><h3>기업영업</h3></li>
                                    <li><h3>외부영업</h3></li>
                                    <li><h3>영업 관리자</h3></li>
                                    <li><h3>기술영업</h3></li>
                                    <li><h3>주요고객사 담당자</h3></li>
                                    <li><h3>솔루션 컨설턴트</h3></li>
                                    <li><h3>해외영업</h3></li>
                                    <li><h3 className="more-info">더보기</h3></li>
                                </ul>   
                            )
                        })}
                        <ul>
                            <li><h2>금융</h2></li>
                            <li><h2>제조 생산</h2></li>
                            <li><h2>물류 무역</h2></li>
                            <li><h2>교육</h2></li>
                            <li><h2>법률 법집행기관</h2></li>
                            <li><h2>식 음료</h2></li>
                            <li><h2>건설 시설</h2></li>
                            <li><h2>공공 복지</h2></li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default ExploreContent