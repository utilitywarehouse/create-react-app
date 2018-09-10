import { configure, addDecorator } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import { Container } from '@utilitywarehouse/cerdo-storybook-utils'

setOptions({
  name: 'cerdo-app',
  addonPanelInRight: true,
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
})

addDecorator(Container)

function importAll(req) {
  req.keys().forEach(filename => req(filename))
}

function loadStories() {
  let req

  req = require.context('../src', true, /story\.js$/)
  importAll(req)
}

configure(loadStories, module)
