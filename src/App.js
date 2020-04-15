import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';
import './index.css'
import Home from './panels/Home';
import Persik from './panels/Persik';
import Main from './D3Bob/Main'
import Context from './Context'
import './App.css'








function App() {

    var [state, setState] = useState({
        activePanel : "list",
        selection : 'none',
        enemySelection : 'none'
    })
    
  



    return (
            <Context.Provider value={{setState}} >
                <iframe hidden src="https://cloclo24.datacloudmail.ru/inline/81r3ixdAEtM3381WRozpx2BFCyjXXuafXkHqN6cZ5FPSK7ZCeNnn8Ji5Z3c6diPBjiPTaF/maks.rom.111@mail.ru/%D0%9F%D0%B0%D0%BF%D0%B8%D1%87%20-%20VI%20KA.mp3" allow="autoplay" type="audio/mpeg"></iframe>
                <div>
                <Main state={state}/>
                </div>
                    
            </Context.Provider>
         
            
    );
}

export default App;


