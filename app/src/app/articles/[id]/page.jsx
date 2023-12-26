'use client'
import { useRouter ,usePathname} from 'next/navigation'
import { useState, useEffect } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Image from 'next/image';

export default function ArticlePage({ params }) {
  const router = useRouter();
  const supabase = createClientComponentClient()
  const {id} = params
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)

  


  const fetchArticle = async (articleId) => {
    if (!articleId) return

    const { data, error } = await supabase
      .from('articles')
      .select('*, profiles(full_name)')
      .eq('id', articleId)
      .single()
      
    if (error) {
      console.error('Error loading the article', error);
    } else {
      setArticle(data)
    }
    setLoading(false)
  };

  useEffect(() => {
    fetchArticle(id)
  }, [id]);

  const myLoader=({src})=>{
    return article.image_url
  }

 

  if (loading) {
    return <div>Loading...</div>
  }

  if (!article) {
    return <div>The article is not found.</div>
  }

  const formattedDate = article && new Date(article.created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gray-100 p-5 font-sans">
      <div className="block lg:flex lg:items-center lg:justify-between">
        {article.image_url && (
          <div className="relative h-72 lg:w-1/2 mb-6 lg:mb-0">
            <Image 
              loader={myLoader} 
              src={article.image_url} 
              alt={article.title} 
              layout="fill" 
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        )}
      </div>
      <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800 mb-3">{article.title}</h1>
          <p className="text-sm text-gray-500">Written by {article.profiles.full_name} on {formattedDate}</p>
          <p className="text-sm text-gray-500">Category: {article.category}</p>
        </div>
      <div className="text-lg text-gray-700 leading-relaxed">
        <p>{article.content}</p>
      </div>
    </div>
  )
}