#!/bin/sh


# env prod
# webpack bin
# -p production
# Basically, compile to src/static/js/bundle.js
NODE_ENV=production node_modules/.bin/webpack -p

# env prod
# node_modules
# .bin
# bable-node
# presets
# react
# es2015
# src
# /server.js
NODE_ENV=production node_modules/.bin/babel-node --presets 'react,es2015' src/server.js
