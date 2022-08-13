import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import InfiniteScroll from "react-infinite-scroll-component";


const Blog = ({ blogs, totalDataLength }) => {
    const router = useRouter()
    const [items, setItems] = useState(blogs)
    const [hasMore, setHasMore] = useState(true)
    const fetchMoreData = async () => {
        setTimeout(async () => {
            const res = await fetch(`http://localhost:3000/api/blogs?start=${items.length}&limit=${10}`)
            const newData = await res.json()
            setItems([...items, ...newData])
        }, 1000);
    }
    useEffect(() => {
        setHasMore(totalDataLength > items.length ? true : false)
    }, [items, hasMore, totalDataLength])

    console.log(items);
    return (
        <div >
            <InfiniteScroll
                dataLength={items.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: "center" }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                    {items?.map((blog, i) => {
                        return <div key={i} onClick={() => router.push(`/blog/${blog.slug}`)} className='w-72 mx-auto bg-slate-800 my-2 p-1 cursor-pointer'>
                            <h3 className='text-2xl'>{blog?.title}</h3>
                            <p className='italic'>- By {blog.author}</p>
                            <p>{blog.descripttion.slice(0, 150)}...</p>
                        </div>
                    })}
                </div>
            </InfiniteScroll>
        </div>
    );
};

export async function getStaticProps(context) {
    const data = await fetch(`http://localhost:3000/api/blogs?start=${0}&limit=${10}`);
    const blogs = await data.json()

    const scndData = await fetch(`http://localhost:3000/api/blogstotallength`);
    const totalData = await scndData.json()
    return {
        props: { blogs: blogs, totalDataLength: totalData },
    }
}

export default Blog;