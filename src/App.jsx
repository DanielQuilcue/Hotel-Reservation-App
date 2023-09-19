import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Route, Switch } from 'wouter'
import { Toaster } from "react-hot-toast"

import HotelList from "./components/HotelList"
import GridTemplateColumns from "./components/GridTemplateColumns"
import HotelDetails from "./components/HotelDetails"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

const client = new QueryClient()
function App() {

  return (
    <>
    <Toaster position="top-left" reverseOrder={false} />
      <QueryClientProvider client={client}>
      <NavBar />
      <Switch>
        <Route path="/" component={GridTemplateColumns} />
        {/* <Route path="/" component={HotelList} /> */}
        <Route path="/hotel/:id" component={HotelDetails} />
      </Switch>
      <Footer />
    </QueryClientProvider>
    </>
  )
}

export default App
