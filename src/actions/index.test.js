import { setMedia } from './index'

test('setMedia should disptach SET_MEDIA action', () => {
    expect(setMedia([
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
    ]))
    .toEqual({
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
    })
})