import { TrashSimple } from 'phosphor-react'
import { doc, deleteDoc } from 'firebase/firestore'
import { db } from '../../services/fireBaseConfig'

export default function DeleteProduct({ id }) {
  async function HandleErase() {
    const productToDelete = doc(db, 'products', id)
    await deleteDoc(productToDelete).then(console.log('boa'))
  }
  return (
    <button className="flex items-center bg-red-300" onClick={HandleErase}>
      Deletar <TrashSimple />
    </button>
  )
}
