import { Box, Button } from '@mui/material'
import React from 'react'
import './HeroSectionImage.css'

function HeroSectionImage({executeScroll}) {
  return (
    <div className="hero-container-wraper">
      <div className="hero-container">
        <h1 className="hero-container__text">Здесь находится мебель</h1>
        <p className="hero-container__text-paragraph">Премильная мебель по доступным ценам</p>
        
        <Button 
          variant="contained" 
          size="large" 
          color="success"
          onClick={executeScroll}>
            Подробнее
            {/* <a href="#productlist-anchor">Подробнее</a> */}
        </Button>
      </div>
    </div>
  )
}

export default HeroSectionImage