export default {
    bind: (element, binding) => {
        if (binding.arg !== 'position') return

        Object.keys(binding.modifiers).forEach(key => {
            element.style[key] = '5px'
        })
        // console.log('arg:', binding.arg, 'modifiers:', binding.modifiers)
        element.style.position = 'absolute'
        // element.style.bottom = '5px'
        // element.style.right = '5px'

    }
}