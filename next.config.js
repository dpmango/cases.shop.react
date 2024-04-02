/** @type {import('next').NextConfig} */

const { NODE_ENV } = process.env
const dev = NODE_ENV === 'development'

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  reactStrictMode: false,
  basePath: process.env.BASE_PATH,
  assetPrefix: `${process.env.BASE_PATH}/`,
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
    ORDER_TEST_MODE: process.env.ORDER_TEST_MODE,
    BASE_PATH: process.env.BASE_PATH,
  },
})
