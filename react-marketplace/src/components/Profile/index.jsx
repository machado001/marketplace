import Header from '../Header'
import { useAuth } from '../../context/authContext'

export default function Profile() {
  const { user, logout, loading } = useAuth()
  return (
    <>
      <Header />
      <div className="flex items-center justify-center mt-12">
        <div className="MAIN w-4/5 border-2 bg-white p-8 shadow-lg ">
          <h1 className="font-semibold text-3xl w-full mb-6 text-indigo-900">
            Perfil
          </h1>
          <div className="2INPUTS+1IMG flex  w-full justify-between mb-6">
            <div className="w-full">
              <div className="flex flex-col mb-3">
                <label>Nome</label>
                <input
                  type="text"
                  className="w-5/6 outline-0 border-2 p-1"
                  value={
                    user && user.displayName ? user.displayName : user.email
                  }
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
                src={user && user.photoURL}
                alt=""
                className="border-2 w-full h-full"
              />
            </div>
          </div>
          <span>Seus produtos:</span>
          <div className="w-full border-2 h-12"></div>
        </div>
      </div>
    </>
  )
}
