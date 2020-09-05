import { useState, useEffect } from 'react'
import { projectStorage, projectFirestore, timestamp } from '../firebase/Config'

const useStorage = (file) => {
  // 設定初始進度條長度為0
  const [progress, setProgress] = useState(0)
  // 設定初始error為空
  const [error, setError] = useState(null)
  // 設定初始url為空
  const [url, setUrl] = useState(null)

  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(file.name)
    const collectionRef = projectFirestore.collection('images')

    // 這個state_changed不能改動，不然會掛掉
    storageRef.put(file).on('state_changed', (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
      setProgress(percentage)
    }, (err) => {
      setError(err)
    }, async () => {
      const url = await storageRef.getDownloadURL()
      const createAt = timestamp()
      collectionRef.add({ url, createAt })
      setUrl(url)
    })
  }, [file])

  return { progress, error, url }

}

export default useStorage
