import { useState, useEffect } from 'react'
import { projectFirestore } from '../firebase/Config'

const useFireStore = (collection, doc) => {
  const [docs, setDocs] = useState([])

  useEffect(() => {
    const unsub = projectFirestore.collection(collection)
      .doc(doc)
      .orderBy('createAt', 'desc')
      .onSnapshot((snap) => {
        let documents = []
        snap.forEach(doc => {
          documents.push({...doc.data(),id: doc.id})
        })

      setDocs(documents)
    })
    return () => unsub()

  },[collection])

  return { docs }
}

export default useFireStore
