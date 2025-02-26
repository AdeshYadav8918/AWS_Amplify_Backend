import React, { useState } from 'react';
import { Button, TextField } from '@aws-amplify/ui-react';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('YOUR_API_GATEWAY_URL', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      alert(`Success: ${data.message}`);
    } catch (error) {
      alert('Submission failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="Name" onChange={e => setFormData({...formData, name: e.target.value})} />
      <TextField label="Email" type="email" onChange={e => setFormData({...formData, email: e.target.value})} />
      <TextField label="Message" multiline rows={3} onChange={e => setFormData({...formData, message: e.target.value})} />
      <Button type="submit">Submit</Button>
    </form>
  );
}
export default App;
