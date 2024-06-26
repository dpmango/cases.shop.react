/** @type {import('next').NextConfig} */

const { NODE_ENV } = process.env
const dev = NODE_ENV === 'development'

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  reactStrictMode: false,
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
    ORDER_TEST_MODE: process.env.ORDER_TEST_MODE,
  },
})
