// import { ChannelList, Chat, useCreateChatClient, Window } from "stream-chat-react";
import Footer from "../../components/footer";

export default function Dashboard() {

    // const client = useCreateChatClient({
    //     apiKey: "ds632tgsan9q",
    //     tokenOrProvider: '',
    //     userData: {
    //         id: ''
    //     }
    // })

    return (
        // <Chat
        //     client={client}
        // >
        //     <ChannelList />
        //     <Channel>
        //         <Window>
        //             <div className="w-full h-full flex flex-col">
        //                 <div className="w-full h-full flex-shrink flex-grow overflow-auto">
        //                 </div>
        //                 <div className="w-full h-fit bg-slate-600 shadow-inner shadow-slate-700">
        //                     <Footer></Footer>
        //                 </div>
        //             </div>
        //         </Window>
        //     </Channel>

        // </Chat>
        <div className="w-full h-full flex flex-col">
            <div className="w-full h-full flex-shrink flex-grow overflow-auto">
            </div>
            <div className="w-full h-fit bg-slate-600 shadow-inner shadow-slate-700">
                <Footer></Footer>
            </div>
        </div>
    )
}