'use client';
import Card from '@/components/card';

export default function page() {
  return (
    <>
      <Card onClick={()=> alert("You clicked!")}></Card>
    </>
  )
}

