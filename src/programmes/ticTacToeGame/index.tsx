import {Window} from "../../components/window/index";
import {generateId} from "../../globalFunctionHelper/index";

const wid =  generateId()
const Content = () => {
    return (
      <div className="h-full">
        <iframe
          title="TecTacToe"
          width="100%"
          height="100%"
          src="https://tectactoegame.netlify.app/"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    )
}

const TecTacToeGame =  () => {
    return (
      <Window id={wid} width={800} height={900} windowName="TicTacToe" >
          <Content />
      </Window>
    ) 
}

export const tecTacToeGame = {id: wid , component: <TecTacToeGame />} ;
