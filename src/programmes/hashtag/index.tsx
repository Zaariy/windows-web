import {Window} from "../../components/window/index";
import {generateId} from "../../globalFunctionHelper/index";
import {Loading} from "../../components/loading/index";
import {useState , useEffect} from "react";

const wid =  generateId()
const Content = () => {
    return (
      <div className="h-full">
        <iframe
          title="TecTacToe"
          width="100%"
          height="100%"
          src="https://hashtag-mwvk.onrender.com/"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    )
}

const HashTag =  () => {
    const [loading , setLoading] = useState(false)
    useEffect(() => {
        setInterval(() => {
            setLoading(true);
            return () => {
              setLoading(false);
            }
          } , 30000)
      });
    return (
      <Window id={wid} width={1280} height={720} windowName="Hashtag" >
          {loading ? <Content /> : <Loading />} 
      </Window>
    ) 
}

export const hashtag = {id: wid , component: <HashTag />} ;
