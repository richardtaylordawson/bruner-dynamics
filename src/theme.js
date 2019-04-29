const colors = {
  "transparent": "transparent",
  "white": "#fff",
  "black": "#000",
  "gray": "",
  "blue": "#009FE3",
  "green": "",
  "boxShadow": "rgba(0,0,0,.2)"
}

const constraint = [
  "max-width: 1032px;",
  "margin: 0 auto;",
  "display: flex;",
  "flex-direction: row;",
  "height: 100%;"
]

const breakpoints = {
  "small": [0, 640],
  "medium": [641, 1024],
  "medium-up": [641],
  "medium-down": [1024],
  "large": [1025, 1440],
  "large-up": [1025]
}

Object.keys(breakpoints).map(key => {
  return breakpoints[key] = breakpoints[key].length !== 2
    ? key.includes("up")
    ? `@media screen and (min-width: ${breakpoints[key][0]}px)`
    : `@media screen and (max-width: ${breakpoints[key][0]}px)`
    : `@media screen and (min-width: ${breakpoints[key][0]}px) and (max-width: ${breakpoints[key][1]}px)`
})

module.exports = { colors, constraint, breakpoints }
