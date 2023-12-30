import React from 'react';
import './App.css';


const App = () => {
    return (
        <div className="app-wpapper">
            <header className="header">
                <img src="https://img.freepik.com/premium-vector/colorful-bird-illustration-gradient-abstract_343694-1740.jpg" alt=""/>
            </header>
            <nav className="nav">
                <div>
                    <a href="">Profile</a>
                </div>
             <div>
                 <a href="">Message</a>
             </div>
             <div>
                 <a href="">News</a>
             </div>
                <div>
                    <a href="">Music</a>
                </div>
                <div>
                    <a href="">Settings</a>
                </div>
            </nav>
            <div className="content">
                <div>
                    <img src="https://assets.turbologo.ru/blog/ru/2021/10/30071021/background4.png" alt=""/>
                </div>
               <div>
                   ava+dic
               </div>
                <div>
                    My Posts
                    <div>
                        New Post
                    </div>
                    <div>
                        <div>Post 1</div>
                        <div>Post 2</div>
                    </div>
                </div>

            </div>
        </div>
    );
}


export default App;
