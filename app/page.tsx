import Image from "next/image";


async function getBlogs() {
  const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=items` , { cache: 'no-store' });
  
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
  }

export default async function Home() {

  const blogs = await getBlogs()
  console.log(blogs);
  

  return (
    <div className="bg-gray-700 grid grid-cols-4 p-5 gap-5">


      {blogs.items.map((blog:any) =>(
             <div className="bg-white p-5" key={blog.sys.id}>

              {blogs.includes.Asset.map((elem:any) =>(
                  <div key={blog.fields.image.sys.id}>
                     {blog.fields.image.sys.id == elem.sys.id?
                    <Image src={ "https:" + elem.fields.file.url} alt="Image" height={400} width={400} className="h-[280px] w-[300px] rounded-lg"/>:<div></div>}
                  </div>
              ))}

             <h1 className="text-3xl font-semibold">{blog.fields.title}</h1>
             <p className="text-sm">{blog.fields.desc}</p>
             <p className="text-bold">Size: {blog.fields.size}</p>
             <h2 className="font-bold">Rs: {blog.fields.price}</h2>
           </div>
      ))}

    </div>
  );
}
