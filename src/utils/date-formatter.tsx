export const computeDate = (timestamp: number) => {
    const time = new Date();
    return time.toLocaleString('en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        formatMatcher: 'best fit',
        hour12: true
    })
}
