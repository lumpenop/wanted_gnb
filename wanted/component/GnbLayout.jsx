import React,{Component} from 'react'
import ExploreContent from './ExploreContent'


class GnbLayout extends Component{

    
    render(){
        return(

            <div className="gnb-wrap">
                    <div className="gnb-container">
                        <nav className="gnb">
                            <div className="gnb-title">
                                <a href="/">wanted</a>
                                <a className="join mobile" href="#">회원가입하기</a>
                            </div>
                            {this.props.children}                
                            <aside className="gnb-side">
                                <ul className="gnb-side-content">
                                    <li>
                                        <a className="search-btn">
                                            <img src="../../image/search.png" alt="/" width="20" height="20" />
                                        </a>
                                    </li>
                                    <li>
                                        <div className="hamberg mobile">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </li>
                                    <li className="web">
                                        <button className="signUp-btn" type="button">
                                            회원가입/로그인
                                        </button>
                                    </li>
                                    <li className="dashboard-btn web">
                                        <a  href="/">
                                            기업 서비스
                                        </a>
                                    </li>
                                </ul>
                            </aside>
                        </nav>
                    </div>
                    <ExploreContent />
                </div>
        )
    }
}

export default GnbLayout