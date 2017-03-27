import React from 'react';

//word visuals
import PronounsContainer from './PronounsContainer'
import NounsContainer from './NounsContainer'

//helper functions
import theme from '../chartTheme'

export default ({view, title, url, changeView, keydown}) => (
<div>
  <nav>
    <h1>Degender Analytics</h1>
    <h2>Page Title: {title}</h2>
    <span className='page-url'>Page Url: <a href={url}>{url}</a></span>
    <ul>
      <li><a className={view === 'pronouns' ? 'active' : null} onClick={()=>changeView('pronouns')} onKeyDown={(e) => keydown(e, 'pronouns')} tabIndex="0">Pronouns</a></li>
      <li><a className={view === 'nouns' ? 'active' : null} onClick={()=>changeView('nouns')} onKeyDown={(e) => keydown(e, 'nouns')} tabIndex="0">Nouns</a></li>
      <li><a className={view === 'adjectives' ? 'active' : null} onClick={()=>changeView('adjectives')} onKeyDown={(e) => keydown(e, 'adjectives')} tabIndex="0">Adjectives</a></li>
    </ul>
  </nav>
  <main>
    {view === 'pronouns' ? <PronounsContainer theme={theme}/> : null}
    {view === 'nouns' ? <NounsContainer theme={theme}/> : null}
    {view === 'adjectives' ? 'ADJECTIVES WILL GO HERE' : null}
  </main>
  <footer>
  </footer>
</div>
)
