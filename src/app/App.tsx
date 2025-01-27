import GlobalStyles from '../styles/GlobalStyles.ts';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from '../components/app/AppLayout.tsx';
import Checkout from '../features/checkout/components/checkout/Checkout.tsx';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate to='/checkout' />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/cart' element={<div>Cart</div>} />
            <Route path='/account' element={<div>Account</div>} />
            <Route path='/shop' element={<div>Shop</div>} />
            <Route path='/contact' element={<div>Contact</div>} />
            <Route path='/help' element={<div>Help</div>} />
            <Route path='/account'>
              <Route path='settings' element={<div>Settings</div>} />
              <Route path='profile' element={<div>Profile</div>} />
              <Route path='orders' element={<div>Orders</div>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 10000
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: 'var(--color-text-dark)',
            color: 'var(--color-text-success)',
          }
        }}
      />
    </>
  )
}

export default App
