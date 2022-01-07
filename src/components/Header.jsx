import React, { useContext, useEffect} from 'react'
import { Menu, Header} from 'semantic-ui-react';
import {  Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';



export default function PageHeader() {

    const {apiSearch, title} = useContext(AppContext)

    function getDate(x) {
        return new Date(new Date().setDate(new Date().getDate() - x)).toISOString().slice(0,10)
    }

    const dates =
        [{text:'Last 7 Days', date: getDate(7)},
        {text:'Last 30 Days', date: getDate(30)},
        {text:'This Year', date: getDate(0).slice(0,4)+'-01-01'}]

    const menuDates = dates.map((item, i) => {
        return (<Menu.Item key={i} name={`${item.text}`} onClick={() => apiSearch(item.date, item.text)}>{item.text}</Menu.Item>)
    })

    useEffect(() => {
    }, [title])

    return (
        <>        
      <Header size='huge' textAlign='center'>NASA Presents APOD</Header>
      <Header textAlign='center'>Astronomy Pictures of the Day{title ? `: ${title}` : ''}</Header>
      <Menu inverted>
          {menuDates}
      </Menu>
    </>
    )    
}