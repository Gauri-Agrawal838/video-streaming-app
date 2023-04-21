import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'

import Header from './components/header/Header'
import Sidebar from './components/sidebar/SideBar'
import HomeScreen from './screens/homeScreen/HomeScreen'
import LoginScreen from './screens/loginScreen/LoginScreen'

import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'

import './_app.scss'
import { useSelector } from 'react-redux'
import WatchScreen from './screens/watchScreen/WatchScreen'
import SearchScreen from './screens/searchScreen/SearchScreen'
import SubscriptionScreen from './screens/subscriptionScreen/SubscriptionScreen'
import ChannelScreen from './screens/channelScreen/ChannelScreen'




const Layout = ({ children }) => {
   const [sidebar, toggleSidebar] = useState(false)

   const handleToggleSidebar = () => toggleSidebar(value => !value)

   return (
      <>
         <Header handleToggleSidebar={handleToggleSidebar} />
         <div className='app_container'>
            <Sidebar
               sidebar={sidebar}
               handleToggleSidebar={handleToggleSidebar}
            />
            <Container fluid className='app_main '>
               {children}
            </Container>
         </div>
      </>
   )
}

const App = () => {



   const { accessToken, loading } = useSelector(state => state.auth)

   const navigate = useNavigate()


   useEffect(() => {

      if (!loading && !accessToken) {
         navigate('/auth')
      }

   }, [accessToken, loading, navigate])



   return (
      <Routes>

         <Route path='/' exact element={<Layout><HomeScreen /></Layout>} />


         <Route path='/auth' exact element={<LoginScreen />} />


         <Route path='/search/:query' exact element={<Layout><SearchScreen /></Layout>} />

         <Route path='/watch/:id' exact element={<Layout><WatchScreen /></Layout>} />

         <Route path='/feed/subscriptions' exact element={<Layout><SubscriptionScreen /></Layout>} />

         <Route path='/channel/:channelId' exact element={<Layout><ChannelScreen /></Layout>} />


         <Route exact element={<Navigate to='/' />} />
      </Routes>
   )
}

export default App