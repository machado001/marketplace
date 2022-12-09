import { db } from './services/fireBaseConfig'
import { collection, getDocs } from 'firebase/firestore'

const data = await getDocs(collection(db, 'products'))

export default function productsDb() {
  const response = data.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }))
  return response
}
