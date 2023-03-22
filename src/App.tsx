import { SideBar } from "./components/SideBar";
import { ChannelsNavigation } from "./components/ChannelsNavigation";
import { Chat } from "./components/Chat";

function App() {
  return (
    <div className="m-0 p-0 flex">
      <SideBar />

      <ChannelsNavigation />

      <Chat />
    </div>
  )
}

export default App
