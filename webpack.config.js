const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { getDirectoriesBasenames } = require('./build/utils.js')
const dirs = require('./build/dirs.js')

const isDev = process.env.NODE_ENV === 'development'

const pages = getDirectoriesBasenames(dirs.pages)

const instance = pages.map(page => {
  return new HtmlWebpackPlugin({
    template: `${dirs.pages}/${page}/${page}.pug`,
    filename: `${page}.html`,
    chunks: ['bundle', page],
    minify: !isDev
  })
})

const config = {
  context: dirs.src,
  entry: {
    bundle: `${dirs.views}/_imports.js`
  },
  devtool: isDev && 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: dirs.dist
  },
  resolve: {
    modules: ['node_modules', 'src'],
    alias: {
      '@': dirs.views
    }
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false
          }
        }
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }]
        }
      })
    ]
  },
  devServer: {
    open: true,
    index: 'catalog.html'
  },
  mode: isDev ? 'development' : 'production',
  watch: isDev,
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.pug$/,
        use: [
          // 'cache-loader',
          {
            loader: 'pug-loader',
            options: {
              pretty: true
            }
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'cache-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [require('autoprefixer')()]
            }
          },
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                `${dirs.src}/assets/scss/vars.scss`,
                `${dirs.src}/assets/scss/mixins.scss`
              ]
            }
          }
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          'cache-loader',
          'thread-loader',
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    corejs: '3.4',
                    modules: false,
                    loose: true,
                    useBuiltIns: 'usage'
                  }
                ]
              ]
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: './fonts/',
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: './img/',
              name: '[name][hash].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              disable: isDev,
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              pngquant: {
                quality: '65-90',
                strip: true
              },
              svgo: {
                cleanupIDs: true
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    ...instance,
    // new HtmlWebpackPlugin({
    //   template: 'views/pages/catalog/catalog.pug',
    //   filename: 'catalog.html',
    //   chunks: ['bundle', 'catalog'],
    //   minify: !isDev
    // }),
    new webpack.ProvidePlugin({
      $: 'jquery'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ].filter(Boolean)
}

module.exports = config
