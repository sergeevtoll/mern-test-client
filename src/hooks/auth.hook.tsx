import { useState, useCallback, useEffect } from 'react';

const dataStorage = 'userStorage';

interface Ihook {
  login: ( id: string) => void
  logout: () => void
  userId: string
}

export const UseAuth = (): Ihook => {
  const [userId, setUserId] = useState('')

  const login = useCallback((id) => {
    localStorage.setItem(dataStorage, JSON.stringify({ userId: id }))
    setUserId(id)
  },
    [],
  )

  const logout = () => {
    setUserId('')
    localStorage.removeItem(dataStorage)
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(dataStorage)||'{"foo":"foo"}')
    if (data && data.userId) {
      login( data.userId)
    }
  }, [login])

  return { userId, login, logout }
};
