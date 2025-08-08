import { useState } from 'react';

const products = {
  psn: [
    { id: 'in1000', title: 'PS Store Индия: 1000 INR', price: 1250 },
    { id: 'in2000', title: 'PS Store Индия: 2000 INR', price: 2500 },
    { id: 'in3000', title: 'PS Store Индия: 3000 INR', price: 3750 },
    { id: 'in4000', title: 'PS Store Индия: 4000 INR', price: 5000 },
    { id: 'in5000', title: 'PS Store Индия: 5000 INR', price: 6250 },
    { id: 'tr250',  title: 'PS Store Турция: 250 TRY',  price: 750  },
    { id: 'tr500',  title: 'PS Store Турция: 500 TRY',  price: 1500 },
    { id: 'tr1000', title: 'PS Store Турция: 1000 TRY', price: 2700 },
    { id: 'tr2000', title: 'PS Store Турция: 2000 TRY', price: 5400 },
    { id: 'tr3000', title: 'PS Store Турция: 3000 TRY', price: 8100 },
    { id: 'tr4000', title: 'PS Store Турция: 4000 TRY', price: 10800 }
  ],
  apple: [
    { id: 'apple500', title: 'Apple Gift Card: 500₽',  price: 670  },
    { id: 'apple1000', title: 'Apple Gift Card: 1000₽', price: 1300 },
    { id: 'apple2000', title: 'Apple Gift Card: 2000₽', price: 2550 },
    { id: 'apple3000', title: 'Apple Gift Card: 3000₽', price: 3870 },
  ]
};

export default function MiniAppStore() {
  const [tab, setTab] = useState('psn');
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const handleCheckout = () => {
    const robokassaTestUrl = 'https://auth.robokassa.ru/Merchant/Index.aspx';
    const description = encodeURIComponent('Оплата цифровых кодов');
    const sum = total.toFixed(2);

    window.open(`${robokassaTestUrl}?MrchLogin=demo&OutSum=${sum}&Desc=${description}&SignatureValue=TEST`, '_blank');
  };

  return (
    <div style={{ padding: '1rem' }}>
      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => setTab('psn')}>Карты PS Store</button>
        <button onClick={() => setTab('apple')} style={{ marginLeft: '1rem' }}>Карты Apple</button>
      </div>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {products[tab].map(item => (
          <div key={item.id} style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
            <strong>{item.title}</strong>
            <div>{item.price} ₽</div>
            <button onClick={() => addToCart(item)} style={{ marginTop: '0.5rem' }}>Купить</button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div style={{ marginTop: '2rem', padding: '1rem', border: '2px solid #333' }}>
          <h3>Корзина</h3>
          <ul>
            {cart.map((item, i) => (
              <li key={i}>{item.title} — {item.price} ₽</li>
            ))}
          </ul>
          <div><strong>Итого: {total} ₽</strong></div>
          <button onClick={handleCheckout}>Перейти к оплате</button>
        </div>
      )}
    </div>
  );
}
