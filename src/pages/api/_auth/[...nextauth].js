import nextAuth from 'next-auth'
import Adapters from 'next-auth/adapters'
import Providers from 'next-auth/providers'
import User from 'models/user'

const options = {
    providers: [
        Providers.Facebook({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET
        }),
        // Providers.Twitter({
        //     clientId: '',
        //     clientSecret: ''
        // }),
        // Providers.Email({
        //     server: {
        //         host: '',
        //         port: '',
        //         auth: {
        //             user: '',
        //             pass: ''
        //         }
            
        //     },
        //     from: ''
        // })
    ],
    adapter: Adapters.TypeORM.Adapter(
        process.env.DB_URL,
        {
          models: {
            User,
          }
        }
    )
}


export default (req, res) => nextAuth(req, res, options)