'use client'
import { useEffect, useState } from 'react';
import { useUser } from '../../components/UserContext'
import Link from 'next/link';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

const supabase = createClientComponentClient()

const articles = () => {
  const [articles, setArticles] = useState([])
  const { user } = useUser()
  const getData = async () => {
    try {
      let { data, error, status } = await supabase
        .from('articles')
        .select('*,profiles (full_name)') 

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        return data.map(article => ({
          ...article,
          author_name: article.profiles.full_name 
        }));
      }
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  useEffect(() => {
    async function loadArticles() {
      try {
        const data = await getData()
        setArticles(data)
      } catch (error) {
        console.error('Error fetching articles:', error)
      }
    }

    loadArticles()
  }, [])

  const truncateContent = (content, wordLimit) => {
    return content.split(" ").slice(0, wordLimit).join(" ") + "...";
  };

  return (
     <div className="container mx-auto px-4 py-20">
       {user && ( 
          <div className="mb-4">
            <Link href="/articles/create" legacyBehavior>
              <a className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                Create a new article
              </a>
            </Link>
          </div>
        )}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
         {articles.map((item) => (
          <Link 
              href={`/articles/${item.id}`}
              className={`bg-white rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition duration-300 ease-in-out ${
              theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
              }`}
              key={item.id} 
          >
          <div className="relative h-64">
            <img
              src={item.image_url}
              alt={item.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="p-4">
            <h1 className="text-xl font-semibold mb-2">{item.title}</h1>
            <p className="text-gray-600">
              By {item.author_name} on {new Date(item.created_at).toLocaleDateString('en-US')}
            </p>
            <p className="text-gray-600"> {truncateContent(item.content, 20)}</p>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
 }
 
 export default articles;