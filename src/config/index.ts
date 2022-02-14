export const CONFIG = {
    env: process.env.DEPLOY_ENV ||  'uat',
    dev:{
        host:'localhost',
        port:'3306',
        username:'root',
        password:'123456',
        database:'test2',
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
    }
}