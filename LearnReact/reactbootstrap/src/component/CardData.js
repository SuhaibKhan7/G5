import React from 'react'
import Card from './Card';
export default function CardData() {
    function makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }
    const products = [
        {
            id: 1,
            title:makeid(5),
            des: makeid(10),
            img: "https://media.istockphoto.com/id/1500285927/photo/young-woman-a-university-student-studying-online.jpg?s=1024x1024&w=is&k=20&c=CVhpekieDK_UB8vtEDw-dKKGWzDpsxcQt-XEQIkgm3Y="
        },
        {
            id: 2,
            title: "Product 2",
            des: "Description of Product 2",
            img: "https://media.istockphoto.com/id/1500285927/photo/young-woman-a-university-student-studying-online.jpg?s=1024x1024&w=is&k=20&c=CVhpekieDK_UB8vtEDw-dKKGWzDpsxcQt-XEQIkgm3Y="
        },
        {
            id: 3,
            title: "Product 3",
            des: "Description of Product 3",
            img: "https://media.istockphoto.com/id/1500285927/photo/young-woman-a-university-student-studying-online.jpg?s=1024x1024&w=is&k=20&c=CVhpekieDK_UB8vtEDw-dKKGWzDpsxcQt-XEQIkgm3Y="
        }
       
    ];
  return (

    <section className='d-flex'>
     
      {products.map((p)=>{

       return <Card id={p.id} title={p.title} des={p.des} img={p.img}/>
      })}
      
    </section>

  )

  
}
