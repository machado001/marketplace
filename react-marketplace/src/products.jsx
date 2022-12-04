import { db } from './services/fireBaseConfig'
import { collection, getDocs } from 'firebase/firestore'

const data = await getDocs(collection(db, 'products'))
const productsDB = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
export default productsDB
