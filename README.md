# Toaster Start

In dev version, app starts web based react-app and electron load that app through the URL instead of an html file.

#TODOs

- create production build
- write a small node script in order to aggregate 2 scripts to one for development

## Install

```sh
  // make sure you have installed node & yarn and $PATH has the bindings
  yarn install
```

## Start The App
```sh
  yarn start-react
  yarn start-electron
```

You can pass `--kioskMode` parameter to `start-electron` in order to activate kios mode. It's disabled by default
