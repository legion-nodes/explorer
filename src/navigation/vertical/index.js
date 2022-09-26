import store from '@/store'
import { isTestnet } from '../../libs/utils'

function processMenu() {
  const chainMenus = []
  const blockchains = []
  Object.keys(store.state.chains.config).forEach(chain => {
    const menu = {
      title: chain,
      logo: store.state.chains.config[chain].logo,
      route: { name: 'dashboard', params: { chain } },
    }
    blockchains.push(menu)
  })

  if (blockchains.length > 1) {
    chainMenus.push({ header: 'ecosystem' })
    chainMenus.push({
      title: 'blockchains',
      children: blockchains,
      tag: `${blockchains.length}`,
      icon: 'https://legionnodes.com/assets/img/legion-icon.png',
    })
  }
  chainMenus.push({ header: 'LINKS' })
  if (isTestnet()) {
    chainMenus.push({
      title: 'Website',
      href: 'https://legionnodes.com',
      icon: 'ChromeIcon',
    })
  } else {
    chainMenus.push({
      title: 'Website',
      href: 'https://legionnodes.com',
      icon: 'ChromeIcon',
    })
  }
  chainMenus.push({
    title: 'Github',
    href: 'https://github.com/legion-nodes/explorer',
    icon: 'GithubIcon',
  })
  chainMenus.push({
    title: 'Twitter',
    href: 'https://twitter.com/LegionNodes',
    icon: 'TwitterIcon',
  })
  chainMenus.push({
    title: 'Telegram',
    href: 'https://t.me/legionnodes',
    icon: 'SendIcon',
  })

  return chainMenus
}

export default processMenu()
