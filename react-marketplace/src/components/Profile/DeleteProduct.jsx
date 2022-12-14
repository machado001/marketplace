import { TrashSimple } from 'phosphor-react'
import { doc, deleteDoc } from 'firebase/firestore'
import { db } from '../../services/fireBaseConfig'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function DeleteProduct({ id }) {
  async function HandleErase() {
    const productToDelete = doc(db, 'products', id)
    await deleteDoc(productToDelete).then(() =>
      toast.success('Produto deletado com sucesso!')
    )
  }
  return (
    <button
      className="flex p-1 rounded-md items-center bg-red-300"
      onClick={HandleErase}
    >
      Deletar <TrashSimple weight="bold" />
    </button>
  )
}
