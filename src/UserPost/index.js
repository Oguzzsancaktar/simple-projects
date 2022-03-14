import { Button, Card, Input, Space } from 'antd'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [id, setId] = useState()
  return (
    <div className='container'>
      <h1 style={{textAlign:"center"}}>Fetch Posts</h1>
      <Input
          placeholder='Enter user id'
          type='number'
          onchange={(e) => setId(e.target.value)}
          value={id}
          style={{width: '300'}}
      />

      <Button/>
      <Card/>
      <Space/>
    </div>
  )
}

export default Home