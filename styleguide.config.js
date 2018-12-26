const path = require('path')
const glob = require('glob')

module.exports = {
  require: ['@arcanis-inc/tachyons'],
  title: 'Arcanis Styleguide',
  sections: [
    {
      name: 'Test section 1',
      description: 'Test secion 1 description',
      components: function() {
        return glob.sync(path.resolve(__dirname, 'components/**/*.tsx')).filter(function(module) {
          return /\/[A-Z]\w*\.tsx$/.test(module)
        })
      }
    },
    {
      name: 'Test secion 2',
      description: 'Test section 2 description'
    }
  ],
  webpackConfig: {
    module: {
      rules: [
        { test: /\.tsx?$/, loader: 'ts-loader' },
        {
          test: /\.css$/,
          exclude: /.*style.css/,
          loader: 'style-loader!css-loader'
        },
        {
          // VAI DAR MERDA! Se qualquer componente externo usar css style.css!
          test: /.*style.css/,
          loader: 'style-loader!css-loader?modules'
        }
      ]
    }
  },
  resolver: require('react-docgen').resolver.findAllComponentDefinitions,
  propsParser: require('react-docgen-typescript').withDefaultConfig({ propFilter: { skipPropsWithoutDoc: false } })
    .parse,
  getComponentPathLine(componentPath) {
    const pathArray = path.dirname(componentPath).split(path.sep)
    const componentName = pathArray[pathArray.length - 1]
    const dir = path.relative(path.join('src'), path.dirname(componentPath))
    return `import { ${componentName} } from '@arcanis/styleguide';`
  }
}
