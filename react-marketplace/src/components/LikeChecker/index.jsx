import {
  getDoc,
  doc,
  collection,
  getDocs,
  setDoc,
  deleteDoc,
} from 'firebase/firestore'
import { Heart } from 'phosphor-react'
import { useState } from 'react'
import { db } from '../../services/fireBaseConfig'
import { useAuth } from '../../context/authContext'
export default function LikeChecker({ id }) {
  const { user } = useAuth()
  const [isLiked, setIsLiked] = useState()
  const [totalLikes, setTotalLikes] = useState()

  async function HandleLiking() {
    TotalProductLikes()
    const userToVerify = (
      await getDoc(doc(db, 'products', id, 'whoLiked', user.email))
    ).exists()

    if (!userToVerify) {
      const docRef = doc(db, 'products', id, 'whoLiked', user.email)
      setDoc(docRef, { email: user.email })
    } else {
      const docRef = doc(db, 'products', id, 'whoLiked', user.email)
      deleteDoc(docRef)
    }

    IsProductLiked()
  }
  async function IsProductLiked() {
    if (user) {
      const userToVerify = (
        await getDoc(doc(db, 'products', id, 'whoLiked', user.email))
      ).exists()
      if (userToVerify) {
        setIsLiked('fill')
      } else {
        setIsLiked('regular')
      }
    }
  }
  IsProductLiked()
  async function TotalProductLikes() {
    const likes = (await getDocs(collection(db, 'products', id, 'whoLiked')))
      .size
    setTotalLikes(likes)
  }
  TotalProductLikes()
  return (
    <span className="flex items-center">
      {totalLikes} <Heart onClick={HandleLiking} weight={isLiked && isLiked} />
    </span>
  )
}
