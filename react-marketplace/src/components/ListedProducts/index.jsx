import { CaretRight, ShoppingCart } from 'phosphor-react'
import { v4 } from 'uuid'
import { db } from '../../services/fireBaseConfig'
import { setDoc, doc, deleteDoc, getDoc } from 'firebase/firestore'
import imgplaceholder from '../../assets/images/placeholderimg.jpg'
import { useAuth } from '../../context/authContext'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ListedProducts = ({ products }) => {
  const { user } = useAuth()

  async function handleLike(id) {
    const whoLiked = await getDoc(
      doc(db, 'products', id, 'whoLiked', user.email)
    )

    if (!whoLiked.exists()) {
      await setDoc(doc(db, 'products', id, 'whoLiked', user.email), {
        email: user.email,
      })
      toast.success('Produto adicionado ao carrinho!')
    } else {
      await deleteDoc(doc(db, 'products', id, 'whoLiked', user.email))

      toast.warning('Produto retirado do carrinho.')
    }
  }

  return (
    <div className="w-[60%] gap-4 justify-center flex flex-wrap">
      {products.map((product) => (
        <div
          key={v4()}
          className="item-div border min-w-[200px] h-[345px] m-1 rounded shadow-lg border-solid border-gray-300 bg-zinc-50"
        >
          <img
            src={product.productImage ? product.productImage : imgplaceholder}
            drag="x"
            alt="Highlight-Items"
            className="rounded max-w-[170px] h-[170px] pointer-events-none mx-auto shadow-sm my-3 "
          />
          <ul className="space-y-4 mx-5">
            <li className="h-8 w-36 truncate">
              <span
                title={product.productName}
                className=" rounded cursor-default w-full"
              >
                {product.productName}
              </span>
            </li>
            <li>
              <div className="flex items-center justify-between">
                <span className="text-lime-700 font-bold rounded cursor-default">
                  R${product.productPrice}
                </span>
                <div className="flex items-center gap-1">
                  <ShoppingCart
                    className="cursor-pointer"
                    size={20}
                    onClick={() => handleLike(product.id)}
                  />
                </div>
              </div>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/watch?v=dKD4o-jrvTE"
                className="rounded bg-indigo-200 p-2 font-medium flex items-center justify-between w-28"
              >
                Detalhes <CaretRight />
              </a>
            </li>
          </ul>
        </div>
      ))}
      <ToastContainer />
    </div>
  )
}

export default ListedProducts
