export const loadState = () => {
    try {
        const serizableState = localStorage.getItem('state');
        if (serizableState === null) {
            return undefined
        } return JSON.stringify(serizableState);
    } catch (err) {
        return undefined

    }
}

export const saveState = () => {
    try {
        const serizableState = localStorage.getItem('state');
        localStorage.setItem('state', serizableState)
    } catch (err) {

    }
}