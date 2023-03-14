import React from 'react';
import './App.css';
import userImage from "./img/profileImg.jpg"
import {Header} from './components/Header/Header';
import {Route, Routes} from "react-router-dom";
import {Aside} from "./components/Aside/Aside";
import {Feed} from "./components/Feed/Feed";
import {Massages} from "./components/Massages/Massages";
import {Likes} from "./components/Likes/Likes";
import {Photos} from "./components/Photos/Photos";
import {Profile} from "./components/Profile/Profile";


function App(props) {
    return (
        <div className={"App"}>
            <Header myImg={userImage} userName={"Tigran"}/>
            <main>
                <div className={"aside"}>
                    <Aside myImg={userImage} userName={"Tigrann"}/>
                </div>
                <div className={"feed"}>
                    <Routes>
                        <Route path={"/"} element={<Feed/>}/>
                        <Route path={"/massages/*"} element={
                            <Massages
                                massagesPage={props.state.massagesPage}
                                addMessage={props.addMessage}
                                updateNewMassageText={props.updateNewMassageText}
                            />
                        }
                        />
                        <Route path={"/likes"} element={<Likes/>}/>
                        <Route path={"/photos"} element={<Photos/>}/>
                        <Route path={"/profile"} element={<Profile/>}/>
                    </Routes>
                </div>
            </main>
        </div>
    );
}

export default App;
