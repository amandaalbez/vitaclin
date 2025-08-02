import { useEffect, useState } from 'react'

function Dashboard() {
  const [msg, setMsg] = useState<string>('')

  useEffect(() => {
    fetch('http://localhost:5000/api/hello')
      .then(res => res.json())
      .then(data => setMsg(data.message))
      .catch(err => console.error('Erro ao conectar com o backend:', err))
  }, [])

  return (
    <div>
      <h1>Dashboard - VitaClin</h1>
      <p>Painel administrativo do sistema</p>
      <div>
        <h3>Status do Backend:</h3>
        <p>{msg || 'Conectando...'}</p>
      </div>
    </div>
  )
}

export default Dashboard
