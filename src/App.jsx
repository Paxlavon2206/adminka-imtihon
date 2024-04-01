import { Route, Routes } from "react-router-dom"
import { AppLayout } from "./layout/app-layout"
import routes from "./router/routes"
import { Login } from "./pages/login/login"
import { Home } from "./pages/home/home"


function App() {

  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/app" element={<AppLayout/>}>
        <Route index element={<Home/>}/>
        {routes?.map(({component,id, path}) =>
          <Route path={path} element={component} key={id} index={path ? false : true}/>)}
      </Route>
    </Routes>
  )
}

export default App
