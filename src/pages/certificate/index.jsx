import React from 'react';

function SuccessPage() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(to right, #4CAF50, #8BC34A)', // Background gradient
        color: '#fff',
        textAlign: 'center',
      }}
    >
      <div>
        <h1 style={{ marginBottom: '20px' }}>Certificate Sent Successfully!</h1>
        <p style={{ fontSize: '18px', marginBottom: '30px' }}>
          Your certificate has been sent to the provided email address.
        </p>
        <div>
          {/* You can add any additional content or links here */}
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;