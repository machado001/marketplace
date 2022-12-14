import { Pencil } from 'phosphor-react'

export default function EditProduct({ id }) {
  return (
    <>
      <button className="flex items-center bg-red-300">
        Editar <Pencil />
      </button>
    </>
  )
}
