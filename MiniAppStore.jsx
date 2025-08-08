import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
    <div className="p-4 space-y-4">
      <div className="flex gap-2">
        <Button variant={tab === 'psn' ? 'default' : 'outline'} onClick={() => setTab('psn')}>Карты PS Store</Button>
        <Button variant={tab === 'apple' ? 'default' : 'outline'} onClick={() => setTab('apple')}>Карты Apple</Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {products[tab].map(item => (
          <Card key={item.id}>
            <CardContent className="p-4 flex justify-between items-center">
              <div>{item.title}</div>
              <div>
                <div className="font-semibold">{item.price} ₽</div>
                <Button className="mt-2" onClick={() => addToCart(item)}>Купить</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="mt-6 p-4 border rounded-xl shadow">
          <h2 className="text-lg font-bold mb-2">Корзина</h2>
          <ul className="mb-4">
            {cart.map((item, index) => (
              <li key={index}>{item.title} — {item.price} ₽</li>
            ))}
          </ul>
          <div className="font-bold mb-2">Итого: {total} ₽</div>
          <Button onClick={handleCheckout}>Перейти к оплате</Button>
        </div>
      )}
    </div>
  );
}