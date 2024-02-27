import { useState } from 'react'
import './App.css'
import AgoraUIKit,{layout} from "agora-react-uikit"


function App() {
  const [videoCall, setVideoCall] = useState(true);
// const isHost =true;
const isPinned= true;
const rtcProps = {
    appId: "53b8bd0b87184b1fa73c2f2d7ba88a20",
    channel: "Tarun",
    token: "007eJxTYDDQfcN8pOeEKv96hVVnEzJ0Ev/ee8H9QeIy75Z4gcN+s+sUGEyNkyySUgySLMwNLUySDNMSzY2TjdKMUsyTEi0sEo0MHnTdTW0IZGR4KbGKiZEBAkF8VoaQxKLSPAYGAGcIIG8=",
    
    layout: isPinned ? layout.pin : layout.grid,
    enableScreensharing: false,
}
//// role: isHost ? 'host' : 'audience',
const callbacks = {
  EndCall: () => setVideoCall(false),
};
return videoCall ? (
  <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
    <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
  </div>
) : (
  <h3 onClick={() => setVideoCall(true)}>Join</h3>
);
}

export default App
