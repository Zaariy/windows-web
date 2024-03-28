import {Window} from "../../components/window/index";
import {generateId} from "../../globalFunctionHelper/index";
const wid =  generateId()
const Content = () => {
    return (
      <div className="h-full">
        <iframe
          title="Example"
          width="100%"
          height="100%"
          src="https://zaarywork.netlify.app/"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    )
}

const PortFolio =  () => {
    return (
      <Window id={wid} width={1200} height={900} windowName="My PortFolio" >
          <Content />
      </Window>
    ) 
}

export const portFolio =  {id : wid , component: <PortFolio />}
