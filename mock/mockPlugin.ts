import Mock from 'mockjs'

export default {
    install: (app, options) => {
        Mock.mock('/mock/test', () => {
            return {'msg': '这是mock返回的数据',data:{eamil:Mock.Random.email()}}
        })
    }
}
