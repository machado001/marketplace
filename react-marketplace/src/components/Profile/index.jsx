import Header from '../Header'
import { useAuth } from '../../context/authContext'
import placeholderimg from '../../assets/images/placeholderimg.jpg'
import { Link } from 'react-router-dom'
import productsDb from '../../products'
import { CaretRight, TrashSimple, Pencil } from 'phosphor-react'
import DeleteProduct from './DeleteProduct'
import EditProduct from './EditProduct'

export default function Profile() {
  const { user } = useAuth()
  const products = productsDb()
  const newProducts = products.filter(
    (product) => product.productOwner === user.email
  )
  return (
    <>
      <Header />
      <div className="flex items-center justify-center mt-12">
        <div className="MAIN w-4/5 border-2 bg-white p-8 shadow-lg ">
          <h1 className="font-semibold text-3xl w-full mb-6 text-indigo-900">
            Perfil
          </h1>
          <div className="2INPUTS+1IMG flex flex-col-reverse md:flex-row w-full justify-between mb-6">
            <div className="w-full">
              <div className="flex flex-col mb-3">
                <label>Nome</label>
                <input
                  type="text"
                  className="w-5/6 outline-0 border-2 p-1"
                  value={
                    user && user.displayName ? user.displayName : user.email
                  }
                  onClick={console.log(user)}
                  disabled
                />
              </div>

              <div className="flex flex-col w-full">
                <label>Email</label>
                <input
                  type="text"
                  className="w-5/6 outline-0 border-2 p-1"
                  value={user && user.email}
                  disabled
                />
              </div>
            </div>
            <div className="w-[190px] bg-red">
              <span>Foto de perfil:</span>
              <img
                src={user && user.photoURL ? user.photoURL : placeholderimg}
                alt=""
                className="border-2 w-full h-full"
              />
            </div>
          </div>
          <span>Seus produtos:</span>
          <div className="w-full border-2">
            <div className="gap-[3px] justify-evenly flex flex-wrap">
              {newProducts.map((product) => (
                <div className="item-div w-[200px] border h-[345px] rounded shadow-lg border-solid border-gray-300 bg-zinc-50">
                  <img
                    src={
                      product.productImage
                        ? product.productImage
                        : imgplaceholder
                    }
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
                          <span>{product.productLikes}</span>
                        </div>
                      </div>
                    </li>
                    <li className="flex items-center gap-1">
                      <EditProduct />
                      <DeleteProduct id={product.id} />
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
