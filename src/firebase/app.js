import { initializeApp } from 'firebase/'
import credentials from './credentials'
console.log('credentials.config', credentials.config)

const FirebaseApp = initializeApp(credentials.config)
console.log('FirebaseApp', FirebaseApp)

// eslint-disable-next-line import/prefer-default-export
export const FirebaseInit = FirebaseApp