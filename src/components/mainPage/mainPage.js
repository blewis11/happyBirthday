
import React from 'react'
import { compose } from 'recompose'
import { Window, WindowHeader, WindowContent } from "react95"

import './style.css'

const MainPage = compose(
  
)((props) => {

  return (
    <div className="mainPageContainer">
      <div className="mainWindowContainer">
        <Window>
          <WindowHeader
            style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            }}
          >
          <span>{"Happy (Belated) Birthday <3"}</span>
          </WindowHeader>
  
          <WindowContent>
            <div>
              I know this is super later, I wanted to get this all done in time for you
              for a little surprise in greece
              
            </div>
          </WindowContent>
        </Window>
      </div>
    </div>
  )
})

export {
  MainPage
}
