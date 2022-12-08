import { db } from './services/fireBaseConfig'
import { collection, getDocs } from 'firebase/firestore'

const data = await getDocs(collection(db, 'products'))
export const productsDb = () => {
  const productsDb = data.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }))
  return productsDb
}
