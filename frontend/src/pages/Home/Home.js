import React from 'react'
import WelcomeHeader from '../../components/WelcomeHeader/WelcomeHeader'
import UnitDisplay from '../../components/UnitDisplay/UnitDisplay.js'
import OneChoiceTaskDisplay from '../../components/Games/OneChoiceTaskDisplay/OneChoiceTaskDisplay.js'
import PairedPicturesTask from '../../components/Games/PairedPicturesTask/PairedPicturesTask.js'
import PairingTask from '../../components/Games/PairingTask/PairingTask.js'
import PuzzleTask from '../../components/Games/PuzzleTask/PuzzleTask.js'
import SubsequenceTask from '../../components/Games/SubsequenceTask/SubsequenceTask.js'

function Home() {
  return (
    <div>
      <WelcomeHeader/>
      <UnitDisplay/>

      
      {/*
      <OneChoiceTaskDisplay/>
      <PairedPicturesTask/>
      <PairingTask/>
      <PuzzleTask/>
      <SubsequenceTask/> */}
    </div>
  )
}

export default Home
