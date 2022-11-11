import React from 'react';

const Blog = () => {
    return (
        <div className='font-serif my-20'>
            <div className='bg-blue-400 hover:bg-cyan-600 p-10 rounded-xl text-white my-5'>
            <div className='text-4xl'>1.Difference between SQL and NoSQL</div>
           <span> Ans:SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</span>
            </div>
            <div className='bg-slate-400 hover:bg-cyan-600 p-10 rounded-xl text-white my-5'>
            <div className='text-4xl'>2.How does NodeJS handle multiple requests at the same time?</div>
            <span>Ans:How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes themL.</span>
            </div>
            <div className='bg-red-300 hover:bg-cyan-600 p-10 rounded-xl text-white my-5'>
            <div className='text-4xl'>3.What is JWT, and how does it work?</div>
            <span>Ans:What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).</span>
            </div>
            <div className='bg-green-400 hover:bg-cyan-600 p-10 rounded-xl text-white my-5'>
            <div className='text-4xl'>4.What is the difference between javascript and NodeJS?</div>
            <span>Ans:JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language</span>
            </div>
        </div>
    );
};

export default Blog;