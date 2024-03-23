import { ColorModeContext,useMode } from "./Theme";
import { CssBaseline,ThemeProvider } from "@mui/material";

import Topbar from "./Scenes/Global/Topbar";
import Sidebar2 from "./Scenes/Global/Sidebar";
import Dashboard from "./Scenes/Dashboards/Dashboard";
import Team from "./Scenes/Team/Team";
import Contacts from "./Scenes/Contacts/Contacts";
import {Routes,Route} from "react-router-dom"




function App(){
  const[theme,colorMode] = useMode();
  return (
   <ColorModeContext.Provider value={colorMode}>
<ThemeProvider theme={theme}> 
<CssBaseline />
<div className="app">
<Sidebar2 />
<main className="content">
  <Topbar/>
  
  <Routes>
  <Route path="/" element ={<Dashboard />}/>
  <Route path ="/Team" element ={<Team />} />
  <Route path ="/Contacts" element ={<Contacts />} />
  </Routes>  
  </main>
</div>
</ThemeProvider>
   </ColorModeContext.Provider>


  );
}

export default App;
