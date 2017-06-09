import media from './index'

describe('media reducer', () => {
    it('initial state should be an empty array', () => {
        expect(media(undefined, {}))
        .toEqual({ media: [] })
    })

    it('should handle SET_MEDIA action', () => {
        expect(media({}, {
            type: 'SET_MEDIA',
            media: [
                {
                    "visible": "1",
                    "date": "2016-12-25 17:52:53",
                    "submitterid": "14353",
                    "rating": "3",
                    "dubious": "0",
                    "imdbid": "3783958",
                    "id": "7353",
                    "title": "La La Land",
                    "year": "2016"
                }
            ]
        }))
        .toEqual({
            media: [
                {
                    "visible": "1",
                    "date": "2016-12-25 17:52:53",
                    "submitterid": "14353",
                    "rating": "3",
                    "dubious": "0",
                    "imdbid": "3783958",
                    "id": "7353",
                    "title": "La La Land",
                    "year": "2016"
                }
            ]
        })
    })
})