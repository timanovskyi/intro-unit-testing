const Ajax = require('./async')
const axios = require('axios')

jest.mock('axios')

describe('Ajax: echo', () => {
    test('should return value async', async () => {
        const result = await Ajax.echo('some date');
        expect(result).toBe('some date')
    })

    test('should return value promise', () => {
        return Ajax.echo('some date').then((data) => {
            expect(data).toBe('some date')
        })
    })

    test('should catch error with promise', () => {
        return Ajax.echo().catch((err) => {
            expect(err).toBeInstanceOf(Error)
        })
    })

    test('should catch error with async', async () => {
        try {
            await Ajax.echo()
        } catch (e) {
            expect(e.message).toBe('error')
        }
    })
})


describe('Ajax: get', () => {

    let response;
    let todos;

    beforeEach(() => {
        todos = [
            {id: 1, title: 'Todo', completed: false}
        ]

        response = {
            data: {
                todos
            }
        }
    })

    test('should return data from backend', () => {
        axios.get.mockReturnValue(response)

        return Ajax.get()
            .then(data => {
                expect(data.todos).toEqual(todos)
            })
    })
})