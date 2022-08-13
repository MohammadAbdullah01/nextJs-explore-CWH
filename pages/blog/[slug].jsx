import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'

const Slug = ({ blog }) => {
    return (
        <div className='mt-10 border p-2 rounded-lg shadow-xl'>
            <h1 className='text-4xl font-bold'>{blog?.title} </h1>
            <span className='italic text-sm'>By- {blog?.author} </span>
            <span> || {blog?.date}</span>
            <div dangerouslySetInnerHTML={{ __html: blog.html }} />
            <p className='mt-4'>{blog?.descripttion}</p>

        </div>
    );
};

//********************************************************* */
// export async function getServerSideProps(context) {
//     const data = await fetch(`http://localhost:3000/api/getblog?slug=${context.query.slug}`);
//     const blog = await data.json()
//     return {
//         props: { blog: blog },
//     }
// }
//******************************************************** */

export async function getStaticPaths() {
    const scndData = await fetch(`http://localhost:3000/api/blogstotallength`);
    const totalData = await scndData.json()
    const data = await fetch(`http://localhost:3000/api/blogs?start=${0}&limit=${totalData}`);
    const blogs = await data.json()
    const paths = blogs.map((blog) => ({
        params: { slug: blog.slug },
    }))
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`http://localhost:3000/api/getblog?slug=${params.slug}`)
    const blog = await res.json()
    return { props: { blog } }
}

export default Slug;