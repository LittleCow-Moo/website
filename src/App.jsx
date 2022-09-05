import './App.css'
import cow from './cow.png'
import charlie from './cm.png'
import {
  DiscordDefaultOptions,
  DiscordInteraction,
  DiscordMarkdown,
  DiscordMessage,
  DiscordMessages,
  DiscordOptionsContext,
  DiscordEmbed
} from '@discord-message-components/react'
import '@discord-message-components/react/styles'
import ReactTabber from 'react-tabber'
import 'react-tabber/dist/theme/gray.css'
const discordOptions = {
  ...DiscordDefaultOptions,
  profiles: {
    cm: {
      author: 'CharlieMoomoo',
      avatar: charlie,
      roleColor: '#fce38a'
    },
    cow: {
      author: '牛牛',
      avatar: cow,
      roleColor: '#ff00a7',
      bot: true
    }
  }
}
const songs = ["群青","Counting Stars","I Ain't Worried","Faded"]
let entries = [
  /*{
    label: '基本功能', panel:
      <DiscordOptionsContext.Provider value={discordOptions}>
        <DiscordMessages>
          <DiscordMessage profile="cm">
            牛牛
          </DiscordMessage>
          <DiscordMessage profile="cow">
            哞!有什麼事嗎?
          </DiscordMessage>
          <DiscordMessage profile="cm">
            笑話
          </DiscordMessage>
          <DiscordMessage profile="cow">
            哞!讓我想想...<br />
            啊!我想到了!<br />
            有一隻狼寶寶不吃肉只吃素,狼媽媽、狼爸爸看得很擔心,某天,狼寶寶終於追著一隻兔子跑,牠們感到很欣慰,狼寶寶抓到兔子後說:<DiscordMarkdown>||快把紅蘿蔔交出來!||</DiscordMarkdown>
          </DiscordMessage>
        </DiscordMessages>
      </DiscordOptionsContext.Provider>
    , key: 'basic'
  },*/
  {
    label: '基本功能', panel:
      <DiscordOptionsContext.Provider value={discordOptions}>
        <DiscordMessages>
          <DiscordMessage profile="cow">
            <div slot="interactions">
              <DiscordInteraction profile="cm" command={true}>cow color</DiscordInteraction>
            </div>
            <DiscordEmbed borderColor="#fce38a" embedTitle="#fce38a" image="https://dummyimage.com/250x250/fce38a/000000.png&text=++"></DiscordEmbed>
          </DiscordMessage>
          <DiscordMessage profile="cow" attachment={charlie}>
            <div slot="interactions">
              <DiscordInteraction profile="cm" command={true}>cow avatar</DiscordInteraction>
            </div>
            哞!這是 <DiscordMarkdown>`CharlieMoomoo#9491`</DiscordMarkdown> 的頭貼:<br />
            <img src={charlie} alt=""/>
          </DiscordMessage>
        </DiscordMessages>
      </DiscordOptionsContext.Provider>, key: 'basic'
  },
  {
    label: '音樂功能', panel:
      <DiscordOptionsContext.Provider value={discordOptions}>
        <DiscordMessages>
          <DiscordMessage profile="cow">
            <div slot="interactions">
              <DiscordInteraction profile="cm" command={true}>moo join</DiscordInteraction>
            </div>
            ✅ 哞!已加入語音頻道!
          </DiscordMessage>
          <DiscordMessage profile="cow">
            <div slot="interactions">
              <DiscordInteraction profile="cm" command={true}>moo play</DiscordInteraction>
            </div>
            ▶️ 哞!正在播放: <DiscordMarkdown>`{songs[Math.floor(Math.random()*songs.length)]}`</DiscordMarkdown>
          </DiscordMessage>
        </DiscordMessages>
      </DiscordOptionsContext.Provider>, key: 'music'
  }
]
export default function App() {
  return (
    <main>
      <div id="topbar">
        <img src={cow} alt="牛牛" width="true" height="85%" id="cow"></img>
        &nbsp;&nbsp;
        牛牛
        <div id="items">
          <a className="topbar" href="https://cowdash.cowteam.repl.co/dash" titie="還不能控制AwA" target="_blank" rel="noreferrer">控制面板</a>
          &nbsp;&nbsp;
          <a className="topbar" href="https://docs.littlecow.gq" target="_blank" rel="noreferrer">文檔</a>
        </div>
      </div>
      <div id="content">
        <div id="uwu">
          <center>
            <img src={cow} alt="牛牛" width="true" height="85%" id="cow"></img>
            <h1>牛牛</h1>
            <h2>多功能的Discord機器人</h2>
            <a href="https://dsc.im/littlecow" className="item">邀請</a>
            <a href="https://cowdash.cowteam.repl.co/dash" title="還不能控制AwA" className="item">控制面板</a>
            <a href="https://docs.littlecow.gq" className="item">文檔</a>
          </center>
        </div>
        <hr />
        <ReactTabber entries={entries} />
        <hr />
        <div id="comments">
          <center>
            <h1>用戶評論</h1>
            沒錯，你的評論會被放在這裡UwU
          </center>
        </div>
        <div id="footer">
          <center>
            <table>
              <tfoot>{new Date().getFullYear()} ©️ 牛牛</tfoot>
            </table>
          </center>
        </div>
      </div>
    </main>
  )
}
