import { createClient } from '@sanity/client';


export const client = createClient({
    projectId:'bd5enha1',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-06-07',
    token: 'sklr4Oym2mWQcEvPi2FYRGC69Z6Ozsio01ozY2WWWmCGIBKMsPsT97JKN3Pzg4GlKX7JczfryVfZ1mWQzq0Z9KFgXAisOvhhYKyJLBJIMT8lqqM8rAINB4cLyoapuiC87tlxlU7B7yR7Y1KHmRNn0VWPIDzrB1eg2HyEYY55j58sAt6SSiUO'
})