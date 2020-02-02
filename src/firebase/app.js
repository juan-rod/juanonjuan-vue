import { initializeApp, analytics } from 'firebase/'
import credentials from './credentials'


const FirebaseApp = initializeApp(credentials.config)


// eslint-disable-next-line import/prefer-default-export
export const FirebaseInit = FirebaseApp