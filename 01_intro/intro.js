function expect(value) {
    return {
        toBe: exp => {
            if (value === exp) {
                console.log('success')
            } else {
                console.error('error')
            }
        }
    }
}

const sum = (a, b) => a + b;
const nativeNull = () => null;

// expect(sum(41, 1)).toBe(42)

module.exports = {sum, nativeNull}