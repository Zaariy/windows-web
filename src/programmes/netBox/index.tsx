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
          src="https://netbox.netlify.app/"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    )
}

const NetBoxApp =  () => {
    return (
      <Window id={wid} width={1200} height={900} windowName="NetBox Movies" >
          <Content />
      </Window>
    ) 
}

export const netBox =  {id : wid , component: <NetBoxApp />}
