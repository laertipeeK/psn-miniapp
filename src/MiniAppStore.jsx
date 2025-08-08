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
