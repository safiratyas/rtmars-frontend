function checkBoolean(value) {
  let parseValue;
  if (value === "ya") {
    parseValue = true
  } else {
    parseValue = false
  }

  return parseValue
}

module.exports = checkBoolean;