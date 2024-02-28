// Get the current displayed value as a string
export const getValueAsStr = valueEl => {
    console.log('valueEl:',valueEl.innerText)
    // console.log(valueEl.textContent.split(',').join(''))
    const value = valueEl.innerText
    if (!value) return ''
    return value
    // if (value) {return value}
    // return null
    }
