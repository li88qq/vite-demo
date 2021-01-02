import {Mock} from 'mockjs'

Mock.mock(RegExp('/api/p/doc'+'.*'),()=>{
    console.log('get.....')
    return {}
})
export default Mock